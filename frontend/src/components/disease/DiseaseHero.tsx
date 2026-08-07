import React from 'react';
import { MessageSquare, ShieldAlert, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Disease } from '../../types';

interface DiseaseHeroProps {
  disease: Disease;
}

export const DiseaseHero: React.FC<DiseaseHeroProps> = ({ disease }) => {
  const getSeverityStyle = (sev: Disease['severity']) => {
    switch (sev) {
      case 'Emergency':
        return { bg: '#FEE2E2', color: '#DC2626', label: 'Emergency Care Needed' };
      case 'High':
        return { bg: '#FEF3C7', color: '#D97706', label: 'High Severity' };
      case 'Moderate':
        return { bg: '#EFF6FF', color: '#2563EB', label: 'Moderate Severity' };
      default:
        return { bg: '#ECFDF5', color: '#059669', label: 'Mild Condition' };
    }
  };

  const sev = getSeverityStyle(disease.severity);

  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-2xl)',
        padding: '2rem',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          {/* Severity & Category Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                backgroundColor: sev.bg,
                color: sev.color,
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {sev.label}
            </span>

            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: 'var(--surface-hover)',
                color: 'var(--text-secondary)',
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
              }}
            >
              Category: {disease.category}
            </span>

            {disease.transmission && (
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary-dark)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                Transmission: {disease.transmission}
              </span>
            )}
          </div>

          {/* Title & Native Names */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
              {disease.name}
            </h1>
            {disease.nativeName && (
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-dark)' }}>
                ({disease.nativeName})
              </span>
            )}
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.6rem', marginBottom: 0, maxWidth: '720px', lineHeight: 1.6 }}>
            {disease.overview}
          </p>
        </div>

        {/* AI Chat Link */}
        <Link
          to={`/chat?query=Tell me about ${encodeURIComponent(disease.name)}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-lg)',
            fontSize: '0.9rem',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          <MessageSquare size={17} />
          <span>Ask AI Sathi About This</span>
        </Link>
      </div>
    </div>
  );
};
