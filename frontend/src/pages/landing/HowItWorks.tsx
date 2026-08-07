import React from 'react';
import { MessageSquare, Cpu, ShieldCheck, HeartPulse } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Ask or Speak in Any Language',
      description: 'Describe your symptoms, medicine questions, or hospital search in Odia, Hindi, or English.',
      icon: <MessageSquare size={24} color="#10B981" />,
    },
    {
      num: '02',
      title: 'Clinical RAG Intelligence',
      description: 'Our AI cross-references verified WHO, ICMR, and Odisha Health databases in real-time.',
      icon: <Cpu size={24} color="#3B82F6" />,
    },
    {
      num: '03',
      title: 'Actionable & Verified Guidance',
      description: 'Receive step-by-step home remedies, warning signs, nearest hospital maps, and scheme info.',
      icon: <ShieldCheck size={24} color="#8B5CF6" />,
    },
  ];

  return (
    <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--surface)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--primary-dark)',
              backgroundColor: 'var(--primary-light)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
            }}
          >
            How It Works
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '1rem', color: 'var(--text-primary)' }}>
            3 Simple Steps to Better Health Guidance
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              style={{
                backgroundColor: 'var(--bg)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2.5rem 1.75rem',
                border: '1px solid var(--border)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'var(--primary-200)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {step.num}
                </span>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'var(--surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
