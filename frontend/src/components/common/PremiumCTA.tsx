import React from 'react';
import { Sparkles, Crown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PremiumCTA: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)',
        color: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        boxShadow: '0 4px 14px rgba(49, 46, 129, 0.25)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FBBF24', marginBottom: '0.5rem' }}>
        <Crown size={18} />
        <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.05em' }}>
          SATHI PRO
        </span>
      </div>

      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: '0 0 0.35rem 0', color: '#FFFFFF' }}>
        Family Health Protection
      </h4>

      <p style={{ fontSize: '0.75rem', color: '#C7D2FE', margin: '0 0 0.85rem 0', lineHeight: 1.4 }}>
        Unlimited Odia voice chats, 24x7 instant doctor triage, and medication refill alerts.
      </p>

      <Link
        to="/dashboard/profile"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          backgroundColor: '#F59E0B',
          color: '#000000',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius)',
          fontSize: '0.82rem',
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        <span>Explore Pro Plan</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
};
