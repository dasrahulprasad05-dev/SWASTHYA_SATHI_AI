import React from 'react';
import { useTranslation } from 'react-i18next';

export const TrustedSources: React.FC = () => {
  const { t } = useTranslation();

  const sources = [
    { name: 'World Health Organization', short: 'WHO', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png' },
    { name: 'Ministry of Health & Family Welfare', short: 'MoHFW', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ministry_of_Health_and_Family_Welfare.svg' },
    { name: 'ICMR', short: 'ICMR', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Indian_Council_of_Medical_Research_Logo.svg/1200px-Indian_Council_of_Medical_Research_Logo.svg.png' },
    { name: 'National Health Mission', short: 'NHM', src: 'https://nhm.gov.in/images/logo.png' },
    { name: 'Odisha Health Department', short: 'Odisha Health', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Seal_of_Odisha.png/120px-Seal_of_Odisha.png' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        padding: '1.5rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', marginBottom: '1rem', textTransform: 'uppercase' }}>
        Trusted Information From
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {sources.map((src) => (
          <div
            key={src.short}
            title={src.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              padding: '4px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}
          >
            <img src={src.src} alt={src.short} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

