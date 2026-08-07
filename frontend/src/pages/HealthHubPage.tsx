import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';
import { HealthTipCarousel } from '../components/common/HealthTipCarousel';
import { MOCK_DISEASE } from '../constants';
import type { Disease } from '../types';

export const HealthHubPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Vector-Borne', 'Viral Infection', 'Bacterial', 'Chronic', 'Maternal Health'];

  const allDiseases: Disease[] = [
    MOCK_DISEASE,
    {
      id: '2',
      name: 'Malaria',
      nativeName: 'ମ୍ୟାଲେରିଆ',
      category: 'Vector-Borne',
      severity: 'Moderate',
      transmission: 'Female Anopheles mosquito bite',
      overview: 'Malaria is a life-threatening disease caused by Plasmodium parasites transmitted through mosquito bites.',
      symptoms: ['High fever with chills', 'Profuse sweating', 'Severe headache', 'Body aches', 'Fatigue'],
      causes: ['Plasmodium parasite bite', 'Stagnant water near habitation'],
      treatments: ['Artemisinin-based combination therapy (ACT)', 'Adequate rest and fluids'],
      prevention: ['Use insecticide-treated bed nets', 'Mosquito repellent application', 'Eliminate standing water'],
      dos: ['Take complete course of prescribed antimalarials', 'Use mosquito nets daily', 'Stay well hydrated'],
      donts: ['Do not stop medications early', 'Do not ignore fever recurrence'],
      whenToSeeDoctor: ['Fever exceeding 103°F', 'Confusion or drowsiness', 'Severe vomiting'],
      faqs: [{ question: 'Is malaria curable?', answer: 'Yes, malaria is completely curable when diagnosed and treated early.' }],
    },
    {
      id: '3',
      name: 'Chikungunya',
      nativeName: 'ଚିକୁନଗୁନିଆ',
      category: 'Viral Infection',
      severity: 'Moderate',
      transmission: 'Aedes mosquito bite',
      overview: 'Chikungunya is a viral disease characterized by sudden fever and severe, debilitating joint pain.',
      symptoms: ['High fever', 'Severe joint pain (arthralgia)', 'Swelling in joints', 'Skin rash', 'Nausea'],
      causes: ['Chikungunya virus transmitted by Aedes aegypti / albopictus'],
      treatments: ['Supportive care with paracetamol', 'Rest and fluid intake', 'Physiotherapy for chronic stiffness'],
      prevention: ['Prevent mosquito breeding', 'Wear full-sleeve protective clothing'],
      dos: ['Rest affected joints', 'Hydrate with tender coconut water and ORS'],
      donts: ['Do not take Aspirin without doctor recommendation', 'Do not do strenuous physical exercise during acute phase'],
      whenToSeeDoctor: ['Persistent high fever over 3 days', 'Severe joint swelling impairing mobility'],
      faqs: [{ question: 'How long does joint pain last?', answer: 'Acute symptoms resolve in 1-2 weeks, but joint stiffness can sometimes last a few months.' }],
    },
    {
      id: '4',
      name: 'Cholera & Waterborne Diarrhea',
      nativeName: 'କଲେରା ଓ ଝାଡ଼ାବାନ୍ତି',
      category: 'Bacterial',
      severity: 'Emergency',
      transmission: 'Contaminated drinking water and food',
      overview: 'An acute diarrheal infection caused by ingestion of food or water contaminated with Vibrio cholerae bacteria.',
      symptoms: ['Profuse watery diarrhea (rice-water stools)', 'Severe dehydration', 'Leg cramps', 'Dry mouth and thirst'],
      causes: ['Vibrio cholerae in untreated water or unhygienic food'],
      treatments: ['Immediate Oral Rehydration Salts (ORS)', 'IV fluids in severe dehydration', 'Antibiotics as prescribed'],
      prevention: ['Boil drinking water', 'Maintain hand hygiene with soap', 'Avoid raw street food in monsoon'],
      dos: ['Start ORS immediately at the first sign of loose stools', 'Use safe chlorine tablets or boiled water'],
      donts: ['Do not wait for medical help before starting ORS', 'Do not consume unboiled well or pond water'],
      whenToSeeDoctor: ['Sunken eyes or inability to drink', 'Extreme lethargy or fainting', 'No urination for 6 hours'],
      faqs: [{ question: 'How fast can cholera cause dehydration?', answer: 'Severe cholera can cause dangerous dehydration within hours if fluids are not replenished.' }],
    },
  ];

  const filteredDiseases = allDiseases.filter((d) => {
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.nativeName && d.nativeName.includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  return (
    <AppLayout
      topbarTitle="Health Hub & Disease Library"
      topbarSubtitle="Verified medical encyclopaedia in Odia, Hindi, and English"
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
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by disease name (e.g. Dengue, Malaria, ଡେଙ୍ଗୁ), symptoms, or transmission..."
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
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Diseases Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredDiseases.map((dis) => (
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
                transition: 'all 0.2s',
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
                    {dis.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: dis.severity === 'Emergency' ? '#DC2626' : '#D97706',
                    }}
                  >
                    {dis.severity} Severity
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                  {dis.name}
                  {dis.nativeName && (
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary)', marginLeft: '0.5rem' }}>
                      ({dis.nativeName})
                    </span>
                  )}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                  {dis.overview}
                </p>

                {/* Key Symptoms */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                  {dis.symptoms.slice(0, 3).map((sym) => (
                    <span
                      key={sym}
                      style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'var(--surface-hover)',
                        color: 'var(--text-secondary)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)',
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
                  borderTop: '1px solid var(--border-light)',
                }}
              >
                <span>Read Full Guide & Symptoms</span>
                <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default HealthHubPage;
