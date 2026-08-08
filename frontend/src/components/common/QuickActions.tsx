import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Pill, MapPin, FileCheck, PhoneCall, Sparkles } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const actions = [
    { label: 'Symptom Checker', path: '/symptoms', icon: <Stethoscope size={18} color="#10B981" />, bg: '#ECFDF5' },
    { label: 'Find Nearby Hospitals', path: '/hospitals', icon: <MapPin size={18} color="#3B82F6" />, bg: '#EFF6FF' },
    { label: 'Medicine Interaction', path: '/medicines', icon: <Pill size={18} color="#8B5CF6" />, bg: '#F5F3FF' },
    { label: 'BSKY Scheme Status', path: '/schemes', icon: <FileCheck size={18} color="#F59E0B" />, bg: '#FEF3C7' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem' }}>
        <Sparkles size={16} color="var(--primary)" />
        <h3 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
          Quick Actions
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {actions.map((act) => (
          <Link
            key={act.label}
            to={act.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.6rem 0.75rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--surface-hover)',
              textDecoration: 'none',
              transition: 'background-color 0.15s',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: act.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {act.icon}
            </div>
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {act.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
