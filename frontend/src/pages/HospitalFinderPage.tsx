import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLayout } from '../components/layouts/AppLayout';
import { HospitalFilterBar } from '../components/hospital/HospitalFilterBar';
import { HospitalCard } from '../components/hospital/HospitalCard';
import { HospitalMap } from '../components/hospital/HospitalMap';
import { HospitalDetailModal } from '../components/hospital/HospitalDetailModal';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';
import { hospitalService } from '../services/apiServices';
import type { Hospital, HospitalFilters } from '../types';

export const HospitalFinderPage: React.FC = () => {
  const { t } = useTranslation();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [modalHospital, setModalHospital] = useState<Hospital | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationNotice, setLocationNotice] = useState<string | null>(null);
  const [filters, setFilters] = useState<HospitalFilters>({
    type: 'All',
    query: '',
    openNow: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Haversine formula to calculate distance in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const applyDistanceAndSort = (
    data: Hospital[],
    coords: { lat: number; lng: number } | null
  ): Hospital[] => {
    if (!coords) return data;
    const withDistance = data.map((h) => {
      if (h.coordinates?.lat && h.coordinates?.lng) {
        const dist = calculateDistance(coords.lat, coords.lng, h.coordinates.lat, h.coordinates.lng);
        return { ...h, distance: Math.round(dist * 10) / 10 };
      }
      return h;
    });
    return withDistance.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
  };

  useEffect(() => {
    const fetchHospitals = async () => {
      setIsLoading(true);
      try {
        const data = await hospitalService.getHospitals(filters);
        const processed = applyDistanceAndSort(data, userLocation);
        setHospitals(processed);
        if (processed.length > 0 && !selectedHospital) {
          setSelectedHospital(processed[0]);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchHospitals();
  }, [filters, userLocation]);

  const handleUseLocation = () => {
    setIsLocating(true);
    setLocationNotice(null);

    if (!navigator.geolocation) {
      // Fallback for browsers without geolocation
      const fallbackCoords = { lat: 20.2961, lng: 85.8245 }; // Central Bhubaneswar
      setUserLocation(fallbackCoords);
      setLocationNotice('Geolocation not supported in browser. Sorted from Bhubaneswar.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        setIsLocating(false);
        setLocationNotice(null);
      },
      (error) => {
        console.warn('Geolocation failed or permission denied:', error);
        // Fallback to central Odisha (Bhubaneswar Capital)
        const fallbackCoords = { lat: 20.2961, lng: 85.8245 };
        setUserLocation(fallbackCoords);
        setLocationNotice(
          t(
            'hospital.locationNotice',
            'Location access was unavailable. Showing hospitals sorted from central Odisha (Bhubaneswar).'
          )
        );
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 60000,
      }
    );
  };

  const handleResetLocation = () => {
    setUserLocation(null);
    setLocationNotice(null);
  };

  return (
    <AppLayout
      topbarTitle={t('hospital.title', 'Nearby Medical Services')}
      topbarSubtitle={t('hospital.subtitle', 'Locate hospitals, ICU beds, and 24x7 emergency centers across Odisha')}
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
        </>
      }
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Filters & Search */}
        <HospitalFilterBar
          filters={filters}
          onChange={setFilters}
          onUseLocation={handleUseLocation}
          isLocating={isLocating}
          hasUserLocation={!!userLocation}
          onResetLocation={handleResetLocation}
        />

        {/* Location Notice Banner if fallback was used */}
        {locationNotice && (
          <div
            style={{
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: 'var(--radius-lg)',
              padding: '0.65rem 1rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.85rem',
              color: '#1D4ED8',
            }}
          >
            <span>{locationNotice}</span>
            <button
              onClick={() => setLocationNotice(null)}
              style={{
                background: 'none',
                border: 'none',
                color: '#1D4ED8',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.8rem',
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Split View: List on Left, Map on Right */}
        <div
          className="hospital-grid hospital-container-responsive"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            height: 'calc(100vh - var(--topbar-height) - 13rem)',
            minHeight: '520px',
          }}
        >
          {/* Left: Scrollable Hospital Cards */}
          <div
            style={{
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingRight: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                {t('hospital.showingHospitals', 'Showing {{count}} verified hospitals in Odisha', { count: hospitals.length })}
              </span>
            </div>

            {hospitals.map((hospital) => (
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                isSelected={selectedHospital?.id === hospital.id}
                onSelect={(h) => {
                  setSelectedHospital(h);
                  setModalHospital(h);
                }}
              />
            ))}

            {hospitals.length === 0 && !isLoading && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border)',
                }}
              >
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {t('hospital.noHospitals', 'No hospitals found matching your filter criteria.')}
                </p>
              </div>
            )}
          </div>

          {/* Right: Sticky Interactive Map */}
          <div className="hospital-map-panel" style={{ height: '100%', minHeight: '400px' }}>
            <HospitalMap
              hospitals={hospitals}
              selectedHospital={selectedHospital}
              userLocation={userLocation}
              onSelectHospital={(h) => {
                setSelectedHospital(h);
                setModalHospital(h);
              }}
            />
          </div>
        </div>

        {/* Detail Modal */}
        {modalHospital && (
          <HospitalDetailModal
            hospital={modalHospital}
            onClose={() => setModalHospital(null)}
          />
        )}
      </div>
    </AppLayout>
  );
};

export default HospitalFinderPage;
