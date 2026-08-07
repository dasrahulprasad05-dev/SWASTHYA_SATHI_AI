import React from 'react';
import { Sparkles, HeartPulse, ShieldCheck, Thermometer, Pill, Hospital, HelpCircle } from 'lucide-react';
import { CHAT_PROMPTS } from '../../constants';

interface AIWelcomeProps {
  onSelectPrompt: (prompt: string) => void;
}

export const AIWelcome: React.FC<AIWelcomeProps> = ({ onSelectPrompt }) => {
  const promptIcons = [
    <Thermometer size={18} color="#EF4444" />,
    <HeartPulse size={18} color="#10B981" />,
    <Pill size={18} color="#8B5CF6" />,
    <Hospital size={18} color="#3B82F6" />,
    <HelpCircle size={18} color="#F59E0B" />,
    <Sparkles size={18} color="#EC4899" />,
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2.5rem 1rem',
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      {/* Bot Icon */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 8px 25px rgba(16, 185, 129, 0.35)',
          marginBottom: '1.25rem',
        }}
      >
        <Sparkles size={32} />
      </div>

      {/* Greeting Title */}
      <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
        How can Swasthya Sathi help you today?
      </h2>

      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '520px', margin: '0 0 2rem 0' }}>
        Ask about symptoms, medicines, home remedies, or hospitals in Odia, Hindi, or English.
      </p>

      {/* Suggestion Chips Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0.85rem',
          width: '100%',
          textAlign: 'left',
        }}
      >
        {CHAT_PROMPTS.map((prompt, idx) => (
          <button
            key={prompt}
            onClick={() => onSelectPrompt(prompt)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '1rem',
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--surface-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {promptIcons[idx % promptIcons.length]}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
              "{prompt}"
            </span>
          </button>
        ))}
      </div>

      {/* Trust Notice */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '2rem',
        }}
      >
        <ShieldCheck size={16} color="var(--primary)" />
        <span>Backed by WHO & Odisha Public Health Guidelines</span>
      </div>
    </div>
  );
};
