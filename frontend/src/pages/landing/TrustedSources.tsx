import React from 'react';
import { ShieldCheck, Award, Building2, Landmark, HeartPulse } from 'lucide-react';

export const TrustedSources: React.FC = () => {
  const sources = [
    { name: 'World Health Organization', short: 'WHO', icon: <GlobeIcon size={24} color="#0284C7" /> },
    { name: 'Ministry of Health & Family Welfare', short: 'MoHFW', icon: <Landmark size={24} color="#10B981" /> },
    { name: 'ICMR', short: 'ICMR', icon: <Award size={24} color="#8B5CF6" /> },
    { name: 'National Health Mission', short: 'NHM', icon: <HeartPulse size={24} color="#EF4444" /> },
    { name: 'Odisha Health Department', short: 'Odisha Health', icon: <Building2 size={24} color="#F59E0B" /> },
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
              backgroundColor: '#F8FAFC',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              border: '1px solid #E2E8F0',
            }}
          >
            {src.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

// Quick Globe Icon for WHO
const GlobeIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

