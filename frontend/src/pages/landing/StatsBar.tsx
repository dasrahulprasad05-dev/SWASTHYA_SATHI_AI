import React from 'react';
import { LANDING_STATS } from '../../constants';

export const StatsBar: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        padding: '1.5rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {LANDING_STATS.map((stat, idx) => (
          <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: '#EFF6FF', padding: '0.8rem', borderRadius: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: '#1E293B',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                {stat.label}
              </span>
            </div>
            {/* Divider for all except last */}
            {idx !== LANDING_STATS.length - 1 && (
              <div style={{ width: '1px', height: '40px', backgroundColor: '#E2E8F0', marginLeft: '1rem' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

