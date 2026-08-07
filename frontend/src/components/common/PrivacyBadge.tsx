import React from 'react';
import { Lock, Shield } from 'lucide-react';

export const PrivacyBadge: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.75rem',
        backgroundColor: 'var(--surface-hover)',
        border: '1px dashed var(--border)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary-dark)',
          flexShrink: 0,
        }}
      >
        <Lock size={14} />
      </div>
      <div>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
          100% Private & HIPAA Compliant
        </p>
        <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', margin: 0 }}>
          Your conversations and health data are encrypted end-to-end.
        </p>
      </div>
    </div>
  );
};
