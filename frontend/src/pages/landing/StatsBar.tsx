import React from 'react';
import { LANDING_STATS } from '../../constants';

export const StatsBar: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '2.5rem 1.5rem',
        borderTop: '1px solid #1E293B',
        borderBottom: '1px solid #1E293B',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {LANDING_STATS.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{stat.icon}</span>
              <span
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: '0.88rem', color: '#94A3B8', fontWeight: 600 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
