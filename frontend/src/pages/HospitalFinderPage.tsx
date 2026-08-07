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
  const [filters, setFilters] = useState<HospitalFilters>({
    type: 'All',
    query: '',
    openNow: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHospitals = async () => {
      setIsLoading(true);
      try {
        const data = await hospitalService.getHospitals(filters);
        setHospitals(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHospitals();
  }, [filters]);

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

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          // Calculate distance for each hospital
          const hospitalsWithDistance = hospitals.map(h => {
            if (h.lat && h.lng) {
              const dist = calculateDistance(userLat, userLng, h.lat, h.lng);
              // Round to 1 decimal place
              return { ...h, distance: Math.round(dist * 10) / 10 };
            }
            return h;
          });

          // Sort hospitals by distance
          const sorted = hospitalsWithDistance.sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
          setHospitals(sorted);
          setIsLoading(false);
        },
        (error) => {
          console.warn('Geolocation error:', error);
          setIsLoading(false);
        }
      );
    }
  };

  return (
    <AppLayout
      topbarTitle={t('hospital.title')}
      topbarSubtitle={t('hospital.subtitle')}
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
        />

        {/* Split View: List on Left, Map on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
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
                Showing {hospitals.length} verified hospitals in Odisha
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
                  No hospitals found matching your filter criteria.
                </p>
              </div>
            )}
          </div>

          {/* Right: Sticky Interactive Map */}
          <div style={{ height: '100%', minHeight: '400px' }}>
            <HospitalMap
              hospitals={hospitals}
              selectedHospital={selectedHospital}
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
