import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Hospital } from '../../types';

// Fix leaflet icon asset paths in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom pin icons
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-map-marker',
    html: `<div style="background-color: ${color}; width: 28px; height: 28px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 2px solid white;">
      <div style="width: 10px; height: 10px; border-radius: 50%; background-color: white; transform: rotate(45deg);"></div>
    </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
};

const govtIcon = createCustomIcon('#10B981');
const pvtIcon = createCustomIcon('#3B82F6');
const selectedIcon = createCustomIcon('#EF4444');

// Map repositioning helper component
const MapController: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.2 });
  }, [center, zoom, map]);
  return null;
};

interface HospitalMapProps {
  hospitals: Hospital[];
  selectedHospital: Hospital | null;
  onSelectHospital: (hospital: Hospital) => void;
}

export const HospitalMap: React.FC<HospitalMapProps> = ({
  hospitals,
  selectedHospital,
  onSelectHospital,
}) => {
  const defaultCenter: [number, number] = [20.2961, 85.8245]; // Bhubaneswar coordinates
  const activeCenter: [number, number] = selectedHospital?.coordinates?.lat && selectedHospital?.coordinates?.lng
    ? [selectedHospital.coordinates.lat, selectedHospital.coordinates.lng]
    : defaultCenter;

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
      }}
    >
      <MapContainer
        center={defaultCenter}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={activeCenter} zoom={selectedHospital ? 14 : 12} />

        {hospitals.map((hospital) => {
          if (!hospital.coordinates?.lat || !hospital.coordinates?.lng) return null;

          const isSelected = selectedHospital?.id === hospital.id;
          const icon = isSelected
            ? selectedIcon
            : hospital.type === 'Government'
            ? govtIcon
            : pvtIcon;

          return (
            <Marker
              key={hospital.id}
              position={[hospital.coordinates.lat, hospital.coordinates.lng]}
              icon={icon}
              eventHandlers={{
                click: () => onSelectHospital(hospital),
              }}
            >
              <Popup>
                <div style={{ padding: '0.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.25rem' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        backgroundColor: hospital.type === 'Government' ? '#ECFDF5' : '#EFF6FF',
                        color: hospital.type === 'Government' ? '#047857' : '#1D4ED8',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '4px',
                      }}
                    >
                      {hospital.type}
                    </span>
                    {hospital.isOpen24x7 && (
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#DC2626' }}>24x7</span>
                    )}
                  </div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, margin: '0 0 0.25rem 0', color: '#1E293B' }}>
                    {hospital.name}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748B', margin: '0 0 0.5rem 0' }}>
                    {hospital.address}
                  </p>
                  <button
                    onClick={() => onSelectHospital(hospital)}
                    style={{
                      width: '100%',
                      backgroundColor: '#10B981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '0.35rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    View Full Details
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
