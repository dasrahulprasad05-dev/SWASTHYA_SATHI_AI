import React, { useState } from 'react';
import { Search, Pill, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';
import { medicinesData } from '../data/medicinesData';

export const MedicineGuidePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');
  
  const currentLang = i18n.language === 'or' ? 'or' : 'en';

  const filtered = medicinesData.filter(
    (m) =>
      m[currentLang].name.toLowerCase().includes(search.toLowerCase()) ||
      m[currentLang].genericName.toLowerCase().includes(search.toLowerCase()) ||
      m[currentLang].usage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout
      topbarTitle={t('nav.medicines')}
      topbarSubtitle={t('medicine.subtitle', 'Verified dosages, interactions, and PM Jan Aushadhi affordable generics')}
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
        </>
      }
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Search Header */}
        <div
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-2xl)',
            padding: '1.5rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '1.75rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--bg)',
              borderRadius: 'var(--radius-xl)',
              padding: '0.75rem 1.25rem',
              border: '1px solid var(--border)',
            }}
          >
            <Search size={20} color="var(--text-muted)" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('medicine.searchPlaceholder', 'Search medicine by name (e.g. Paracetamol, Dolo, ORS)...')}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
              }}
            />
          </div>
        </div>

        {/* Medicine Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filtered.map((med) => {
            const medInfo = med[currentLang];
            return (
            <div
              key={med.id}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-2xl)',
                padding: '1.75rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: '#F5F3FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7C3AED',
                      }}
                    >
                      <Pill size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {medInfo.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    {t('medicine.genericSalt', 'Generic Salt')}: <span style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{medInfo.genericName}</span>
                  </p>
                </div>

                {/* Generic Savings Badge */}
                <div
                  style={{
                    backgroundColor: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    borderRadius: 'var(--radius-lg)',
                    padding: '0.5rem 0.85rem',
                    textAlign: 'right',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 600 }}>{t('medicine.savings', 'Jan Aushadhi Generic Savings')}</span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#065F46' }}>
                    {med.priceCompare.savings} {t('medicine.lessCost', 'Less Cost')}
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#047857' }}>
                    {med.priceCompare.generic} {t('medicine.vs', 'vs')} {med.priceCompare.branded}
                  </span>
                </div>
              </div>

              {/* Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.35rem 0' }}>
                    {t('medicine.primaryUsage', 'Primary Usage')}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {medInfo.usage}
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.35rem 0' }}>
                    {t('medicine.adultDosage', 'Standard Adult Dosage')}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {medInfo.dosage}
                  </p>
                </div>
              </div>

              {/* Warnings List */}
              <div style={{ backgroundColor: '#FEF2F2', padding: '0.85rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid #FECACA' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', marginBottom: '0.35rem' }}>
                  <AlertTriangle size={15} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{t('medicine.precautions', 'Precautions & Safety Warnings')}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#991B1B' }}>
                  {medInfo.warnings.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          );})}
        </div>
      </div>
    </AppLayout>
  );
};

export default MedicineGuidePage;
