import React from 'react';

export const TrustedSources: React.FC = () => {
  const sources = [
    { name: 'World Health Organization', short: 'WHO', src: '/logos/who.png' },
    { name: 'Ministry of Health & Family Welfare', short: 'MoHFW', src: '/logos/mohfw.png' },
    { name: 'ICMR', short: 'ICMR', src: '/logos/icmr.png' },
    { name: 'National Health Mission', short: 'NHM', src: '/logos/nhm.png' },
    { name: 'Odisha Health Department', short: 'Odisha Health', src: '/logos/odisha-health.png' },
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
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              padding: '4px'
            }}
          >
            <img 
              src={src.src} 
              alt={`${src.short} Logo`} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

