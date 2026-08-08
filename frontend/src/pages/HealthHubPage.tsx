import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';
import { HealthTipCarousel } from '../components/common/HealthTipCarousel';
import { diseasesData, type BilingualDisease } from '../data/diseasesData';

export const HealthHubPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isOdia = i18n.language === 'or';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Vector-Borne',
    'Waterborne & Gastro',
    'Infectious & Bacterial',
    'Viral Infection',
    'Chronic & Lifestyle',
    'Maternal & Child',
    'Dermatology & Skin',
    'Emergency',
    'ENT & Eye Care',
  ];

  const filteredDiseases = diseasesData.filter((d: BilingualDisease) => {
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;

    const matchesSearch =
      d.en.name.toLowerCase().includes(q) ||
      d.or.name.includes(q) ||
      (d.or.nativeName && d.or.nativeName.includes(q)) ||
      d.en.overview.toLowerCase().includes(q) ||
      d.or.overview.includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.en.symptoms.some((s) => s.toLowerCase().includes(q)) ||
      d.or.symptoms.some((s) => s.includes(q));

    return matchesCat && matchesSearch;
  });

  return (
    <AppLayout
      topbarTitle={t('healthHub.title', 'Health Hub & Disease Library')}
      topbarSubtitle={t('healthHub.subtitle', 'Verified medical encyclopaedia in Odia, Hindi, and English')}
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
          <HealthTipCarousel />
        </>
      }
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Search & Filter Header */}
        <div
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-2xl)',
            padding: '1.5rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '2rem',
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
              marginBottom: '1rem',
            }}
          >
            <Search size={20} color="var(--text-muted)" />
            <input
              id="health-hub-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(
                'healthHub.searchPlaceholder',
                'Search by disease name (e.g. Dengue, Malaria, ଡେଙ୍ଗୁ), symptoms, or transmission...'
              )}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
              }}
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {filteredDiseases.length} {isOdia ? 'ଟି ରୋଗ' : 'Conditions'}
            </span>
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--surface-hover)',
                    color: isActive ? 'white' : 'var(--text-secondary)',
                    border: isActive ? 'none' : '1px solid var(--border)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {t(`healthHub.categories.${cat}`, cat)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Diseases Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredDiseases.map((dis: BilingualDisease) => {
            const localized = isOdia ? dis.or : dis.en;
            const primaryName = localized.name;
            const secondaryName = isOdia ? dis.en.name : (dis.or.nativeName || dis.or.name);
            const overview = localized.overview;
            const symptomsList = localized.symptoms.slice(0, 3);

            return (
              <Link
                key={dis.id}
                to={`/disease/${dis.id}`}
                style={{
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: '1.75rem',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary-dark)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {t(`healthHub.categories.${dis.category}`, dis.category)}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: dis.severity === 'Emergency' ? '#DC2626' : dis.severity === 'High' ? '#D97706' : '#059669',
                        backgroundColor: dis.severity === 'Emergency' ? '#FEE2E2' : dis.severity === 'High' ? '#FEF3C7' : '#ECFDF5',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {dis.severity} {t('healthHub.severity', 'Severity')}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                    {primaryName}
                    {secondaryName && secondaryName !== primaryName && (
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--primary)', marginLeft: '0.5rem' }}>
                        ({secondaryName})
                      </span>
                    )}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                    {overview}
                  </p>

                  {/* Key Symptoms */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {symptomsList.map((sym, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'var(--surface-hover)',
                          color: 'var(--text-secondary)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border)',
                          fontWeight: 500,
                        }}
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <span>{t('healthHub.readMore', 'Read Full Guide & Symptoms')}</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default HealthHubPage;
