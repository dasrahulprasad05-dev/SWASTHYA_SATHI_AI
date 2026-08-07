import React, { useState } from 'react';
import { Landmark, ShieldCheck, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';

export const GovernmentSchemesPage: React.FC = () => {
  const [selectedScheme, setSelectedScheme] = useState<string>('bsky');

  const schemes = [
    {
      id: 'bsky',
      name: 'Biju Swasthya Kalyan Yojana (BSKY)',
      authority: 'Government of Odisha',
      coverage: '₹5,00,000 / year (₹10,00,000 for female family members)',
      description: 'Universal cashless health coverage for secondary and tertiary care in all government hospitals and 800+ empanelled private hospitals.',
      benefits: [
        'Free medical care in all Govt hospitals up to DHH level for all citizens',
        'Cashless coverage up to ₹5 Lakh (₹10 Lakh for women) in empanelled private hospitals for BSKY Smart Card holders',
        'Covers 4,000+ medical and surgical packages including oncology, cardiac, and renal care',
      ],
      eligibility: ['All NFSA / SFSS ration card holders in Odisha automatically eligible', 'Resident of Odisha'],
      documents: ['BSKY Smart Card / NFSA Ration Card', 'Aadhaar Card of patient', 'Income Certificate (if non-ration card holder)'],
    },
    {
      id: 'pmjay',
      name: 'Ayushman Bharat PM-JAY',
      authority: 'Ministry of Health, Govt of India',
      coverage: '₹5,00,000 per family per year',
      description: 'World’s largest government-funded healthcare assurance scheme offering secondary and tertiary hospitalization across nationwide network.',
      benefits: [
        'Cashless and paperless access to services at point of care',
        'Covers 3 days of pre-hospitalization and 15 days of post-hospitalization diagnostic & medication costs',
        'No restrictions on family size, age, or gender',
      ],
      eligibility: ['Households listed under Socio-Economic Caste Census (SECC 2011) criteria'],
      documents: ['Ayushman Card / Golden Card', 'Aadhaar Card', 'Ration Card'],
    },
    {
      id: 'mamata',
      name: 'MAMATA Maternity Scheme',
      authority: 'Women & Child Development, Odisha',
      coverage: '₹5,000 Direct Benefit Transfer (DBT)',
      description: 'Conditional cash transfer scheme for pregnant and lactating women in Odisha to improve maternal nutrition and institutional delivery.',
      benefits: [
        '₹5,000 transferred in two tranches directly to beneficiary bank account',
        'Encourages regular antenatal checkups and complete child immunization',
      ],
      eligibility: ['Pregnant women aged 19 years and above in Odisha for up to two live births'],
      documents: ['MCP (Mother & Child Protection) Card', 'Aadhaar linked Bank Account', 'Registration at local Anganwadi Center'],
    },
    {
      id: 'niramaya',
      name: 'Niramaya Scheme (Free Medicine)',
      authority: 'Odisha State Medical Corporation (OSMCL)',
      coverage: '100% Free Essential Medicines',
      description: 'Provides free generic medicines to all patients visiting public health facilities across all 30 districts of Odisha.',
      benefits: [
        '572+ essential medicines provided completely free of cost',
        'Available across PHCs, CHCs, Sub-Divisional, and District Headquarters Hospitals',
      ],
      eligibility: ['All outpatients and inpatients visiting Odisha government health centers'],
      documents: ['OPD Ticket / Prescription from Government Medical Officer'],
    },
  ];

  const current = schemes.find((s) => s.id === selectedScheme) || schemes[0];

  return (
    <AppLayout
      topbarTitle="Government Health Schemes & BSKY Portal"
      topbarSubtitle="Explore eligibility, benefit coverage, and required documents in Odisha"
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
        </>
      }
    >
      <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
        {/* Schemes Navigation Selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {schemes.map((s) => {
            const isSelected = selectedScheme === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedScheme(s.id)}
                style={{
                  backgroundColor: isSelected ? 'var(--primary-light)' : 'var(--surface)',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.25rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.35rem' }}>
                  <Landmark size={18} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{s.authority}</span>
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  {s.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Scheme Details Card */}
        <div
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-2xl)',
            padding: '2rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary-dark)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {current.authority}
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.5rem 0 0.25rem 0' }}>
                {current.name}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '700px', lineHeight: 1.6 }}>
                {current.description}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg)',
                border: '1.5px solid var(--primary)',
                borderRadius: 'var(--radius-xl)',
                padding: '1rem 1.25rem',
                textAlign: 'right',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Coverage Cap</span>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--primary-dark)' }}>
                {current.coverage}
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
              Key Scheme Benefits
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {current.benefits.map((ben, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Documents Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>
                <ShieldCheck size={18} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                  Eligibility Criteria
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {current.eligibility.map((el, idx) => (
                  <li key={idx}>{el}</li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#7C3AED', marginBottom: '0.75rem' }}>
                <FileText size={18} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                  Required Documents
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {current.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scheme Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://bsky.odisha.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.92rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              }}
            >
              <span>Apply / Verify Status on Portal</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GovernmentSchemesPage;
