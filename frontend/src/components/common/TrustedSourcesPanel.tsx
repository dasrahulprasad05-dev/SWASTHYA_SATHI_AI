import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustedSourcesPanel: React.FC = () => {
  const sources = [
    { name: 'World Health Organization (WHO)', role: 'Global Guidelines' },
    { name: 'Ministry of Health & Family Welfare', role: 'National Health Data' },
    { name: 'Indian Council of Medical Research (ICMR)', role: 'Clinical Protocols' },
    { name: 'Odisha State Health Department', role: 'Local Hospital & Scheme Data' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.15rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem', color: '#1E3A5F' }}>
        <ShieldCheck size={18} color="var(--primary)" />
        <h3 style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Verified Knowledge Base
        </h3>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0 0 0.85rem 0', lineHeight: 1.4 }}>
        All AI health responses are retrieval-augmented using vetted datasets from official authorities.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {sources.map((src) => (
          <div
            key={src.name}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              fontSize: '0.75rem',
            }}
          >
            <CheckCircle2 size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{src.name}</span>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.7rem' }}>{src.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
