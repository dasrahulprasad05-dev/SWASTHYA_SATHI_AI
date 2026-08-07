import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Award, Building2, Landmark } from 'lucide-react';

export const TrustedSources: React.FC = () => {
  const { t } = useTranslation();

  const sources = [
    { name: 'World Health Organization', short: 'WHO', icon: <ShieldCheck size={22} color="#0284C7" />, desc: 'Global Health Protocols' },
    { name: 'Ministry of Health & Family Welfare', short: 'MoHFW', icon: <Landmark size={22} color="#10B981" />, desc: 'National Health Guidelines' },
    { name: 'Indian Council of Medical Research', short: 'ICMR', icon: <Award size={22} color="#8B5CF6" />, desc: 'Clinical Research Data' },
    { name: 'Odisha Health Department', short: 'Odisha Health', icon: <Building2 size={22} color="#F59E0B" />, desc: 'State Hospital & BSKY Registry' },
  ];

  return (
    <section style={{ padding: '3.5rem 1.5rem', backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2rem' }}>
          {t('landing.trustedBy')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {sources.map((src) => (
            <div
              key={src.short}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem',
                backgroundColor: 'var(--surface-hover)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border)',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  flexShrink: 0,
                }}
              >
                {src.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  {src.name}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                  {src.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
