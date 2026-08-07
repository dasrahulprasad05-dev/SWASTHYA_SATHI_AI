import React, { useState } from 'react';
import { Search, Pill, AlertTriangle } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';

export const MedicineGuidePage: React.FC = () => {
  const [search, setSearch] = useState('');

  const medicines = [
    {
      name: 'Paracetamol (Dolo 650 / Calpol)',
      genericName: 'Paracetamol / Acetaminophen',
      usage: 'Fever reduction & mild-to-moderate pain relief (headache, body ache).',
      dosage: '650mg every 6-8 hours for adults as needed. Maximum 3000mg/day.',
      janAushadhiAlt: 'Jan Aushadhi Paracetamol 650mg',
      priceCompare: { branded: '₹34 / strip', generic: '₹8 / strip', savings: '76%' },
      warnings: ['Do not exceed maximum daily dosage to prevent liver toxicity', 'Avoid alcohol consumption while on medication'],
      pregnancySafe: 'Generally considered safe under medical guidance.',
    },
    {
      name: 'Oral Rehydration Salts (ORS)',
      genericName: 'WHO-formula Electrolyte Solution',
      usage: 'Prevention and treatment of dehydration caused by diarrhea, vomiting, or heat stroke.',
      dosage: 'Dissolve 1 full sachet in 1 Litre of clean drinking water. Drink frequently in small sips.',
      janAushadhiAlt: 'Jan Aushadhi ORS 21.8g Sachet',
      priceCompare: { branded: '₹22 / pack', generic: '₹4.50 / pack', savings: '80%' },
      warnings: ['Do not mix with milk, soup, or fruit juice', 'Use prepared solution within 24 hours'],
      pregnancySafe: 'Completely safe during pregnancy and lactation.',
    },
    {
      name: 'Azithromycin 500mg',
      genericName: 'Azithromycin Tablet',
      usage: 'Bacterial infections of the respiratory tract, throat, skin, and ear.',
      dosage: '1 tablet once daily for 3-5 days as specifically prescribed by a doctor.',
      janAushadhiAlt: 'Jan Aushadhi Azithromycin 500mg',
      priceCompare: { branded: '₹120 / 3 tabs', generic: '₹28 / 3 tabs', savings: '77%' },
      warnings: ['Prescription only — complete the full course even if feeling better', 'Take 1 hour before or 2 hours after meals'],
      pregnancySafe: 'Consult doctor before taking.',
    },
    {
      name: 'Cetirizine 10mg',
      genericName: 'Cetirizine Hydrochloride',
      usage: 'Allergic rhinitis, runny nose, sneezing, itching, and hives.',
      dosage: '10mg once daily at bedtime.',
      janAushadhiAlt: 'Jan Aushadhi Cetirizine 10mg',
      priceCompare: { branded: '₹25 / 10 tabs', generic: '₹5 / 10 tabs', savings: '80%' },
      warnings: ['May cause mild drowsiness — avoid driving immediately after intake'],
      pregnancySafe: 'Consult physician.',
    },
  ];

  const filtered = medicines.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.genericName.toLowerCase().includes(search.toLowerCase()) ||
      m.usage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout
      topbarTitle="Medicine Guide & Generic Alternatives"
      topbarSubtitle="Verified dosages, interactions, and PM Jan Aushadhi affordable generics"
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
              placeholder="Search medicine by name (e.g. Paracetamol, Dolo, ORS, Azithromycin)..."
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
          {filtered.map((med) => (
            <div
              key={med.name}
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
                      {med.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                    Generic Salt: <span style={{ fontWeight: 600, color: 'var(--primary-dark)' }}>{med.genericName}</span>
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
                  <span style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 600 }}>Jan Aushadhi Generic Savings</span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#065F46' }}>
                    {med.priceCompare.savings} Less Cost
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#047857' }}>
                    {med.priceCompare.generic} vs {med.priceCompare.branded}
                  </span>
                </div>
              </div>

              {/* Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.35rem 0' }}>
                    Primary Usage
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {med.usage}
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.35rem 0' }}>
                    Standard Adult Dosage
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {med.dosage}
                  </p>
                </div>
              </div>

              {/* Warnings List */}
              <div style={{ backgroundColor: '#FEF2F2', padding: '0.85rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid #FECACA' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', marginBottom: '0.35rem' }}>
                  <AlertTriangle size={15} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Precautions & Safety Warnings</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#991B1B' }}>
                  {med.warnings.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default MedicineGuidePage;
