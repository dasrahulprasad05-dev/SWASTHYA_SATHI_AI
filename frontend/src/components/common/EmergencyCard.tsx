import React from 'react';
import { Phone, AlertTriangle, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmergencyCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#FEF2F2',
        border: '1px solid #FCA5A5',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626' }}>
        <ShieldAlert size={20} />
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: '#DC2626' }}>
          Emergency Helplines
        </h3>
      </div>

      <p style={{ fontSize: '0.78rem', color: '#7F1D1D', margin: 0, lineHeight: 1.4 }}>
        In case of immediate medical danger or accident, call emergency services directly.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <a
          href="tel:108"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#DC2626',
            color: 'white',
            padding: '0.55rem 0.85rem',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 700,
            boxShadow: '0 2px 6px rgba(220, 38, 38, 0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={16} />
            <span>108 Ambulance</span>
          </div>
          <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
            Toll-Free
          </span>
        </a>

        <a
          href="tel:104"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            border: '1px solid #FECACA',
            color: '#B91C1C',
            padding: '0.5rem 0.85rem',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={15} />
            <span>104 Odisha Health</span>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#991B1B' }}>24x7 Info</span>
        </a>
      </div>

      <Link
        to="/emergency"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          fontSize: '0.78rem',
          fontWeight: 600,
          color: '#DC2626',
          textDecoration: 'none',
          paddingTop: '0.25rem',
        }}
      >
        <span>View First Aid & Contacts</span>
        <ArrowRight size={13} />
      </Link>
    </div>
  );
};
