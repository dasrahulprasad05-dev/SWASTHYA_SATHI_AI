import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, ArrowRight, ShieldCheck } from 'lucide-react';

export const CTABanner: React.FC = () => {
  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            padding: '0.35rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
          }}
        >
          <ShieldCheck size={16} />
          <span>Free Public Healthcare Assistant</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '1.25rem', color: '#FFFFFF' }}>
          Your Health Companion in Your Language. <br />
          <span style={{ color: '#6EE7B7' }}>Start Asking Now.</span>
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#A7F3D0', maxWidth: '640px', margin: '0 auto 2.5rem auto', lineHeight: 1.7 }}>
          Join over 1 million citizens getting fast, reliable, and verified healthcare guidance in Odia, Hindi, and English.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to="/chat"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: '#FFFFFF',
              color: '#064E3B',
              padding: '0.9rem 2rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.05rem',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <MessageSquare size={19} />
            <span>Chat with AI Sathi</span>
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/voice"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              padding: '0.9rem 1.75rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1rem',
              fontWeight: 700,
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <Mic size={19} />
            <span>Speak in Odia (ଓଡ଼ିଆ)</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
