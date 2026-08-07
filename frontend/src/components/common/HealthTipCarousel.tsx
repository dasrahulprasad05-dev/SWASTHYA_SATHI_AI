import React, { useState, useEffect } from 'react';
import { Lightbulb, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { MOCK_HEALTH_TIPS } from '../../constants';

export const HealthTipCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_HEALTH_TIPS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const tip = MOCK_HEALTH_TIPS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MOCK_HEALTH_TIPS.length) % MOCK_HEALTH_TIPS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_HEALTH_TIPS.length);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
        border: '1px solid #A7F3D0',
        borderRadius: 'var(--radius-xl)',
        padding: '1.15rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857' }}>
          <Lightbulb size={17} />
          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Daily Health Tip</span>
        </div>
        <div style={{ display: 'flex', gap: '0.2rem' }}>
          <button
            onClick={handlePrev}
            style={{
              padding: '0.2rem',
              borderRadius: '4px',
              color: '#065F46',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            style={{
              padding: '0.2rem',
              borderRadius: '4px',
              color: '#065F46',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#064E3B', margin: 0 }}>
        {tip.title}
      </h4>

      <p style={{ fontSize: '0.78rem', color: '#065F46', margin: 0, lineHeight: 1.5 }}>
        {tip.content}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.3rem', borderTop: '1px solid rgba(167, 243, 208, 0.6)' }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#047857', backgroundColor: '#D1FAE5', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
          {tip.category}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.68rem', color: '#047857' }}>
          <ShieldCheck size={13} />
          <span>Source: {tip.source}</span>
        </div>
      </div>
    </div>
  );
};
