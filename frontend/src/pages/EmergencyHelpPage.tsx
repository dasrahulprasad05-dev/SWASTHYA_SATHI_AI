import React, { useState } from 'react';
import { Phone, HeartPulse, AlertTriangle } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';

export const EmergencyHelpPage: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<string>('snakebite');

  const emergencyContacts = [
    { name: '108 Ambulance Service', num: '108', desc: 'Free emergency ambulance across all Odisha districts', color: '#DC2626', bg: '#FEF2F2' },
    { name: '104 Odisha Health Helpline', num: '104', desc: '24x7 medical counseling, health directory & blood bank info', color: '#0284C7', bg: '#F0F9FF' },
    { name: '181 Women Helpline', num: '181', desc: '24x7 support for women in distress and maternal emergencies', color: '#DB2777', bg: '#FDF2F8' },
    { name: '112 Unified Emergency', num: '112', desc: 'Police, Fire, and Medical assistance integrated helpline', color: '#D97706', bg: '#FFFBEB' },
  ];

  const firstAidGuides: Record<string, { title: string; steps: string[]; warnings: string[] }> = {
    snakebite: {
      title: 'Snake Bite Emergency Protocol (Odisha Standard)',
      steps: [
        'Keep the victim calm and strictly immobilize the bitten limb below heart level.',
        'Remove rings, tight clothing, or shoes from the affected limb before swelling starts.',
        'Immediately transport the patient to the nearest CHC / DHH hospital with Anti-Snake Venom (ASV).',
        'Note the physical description or take a safe photo of the snake if possible, without risking another bite.',
      ],
      warnings: [
        'DO NOT cut the wound or try to suck out venom.',
        'DO NOT apply a tight tourniquet, potassium permanganate, or herbal remedies.',
        'DO NOT give the victim tea, coffee, alcohol, or painkillers.',
      ],
    },
    cpr: {
      title: 'Hands-Only CPR (Cardiac Arrest)',
      steps: [
        'Check responsiveness: Tap victim’s shoulder and shout "Are you okay?".',
        'Call 108 immediately and ask for an AED (defibrillator).',
        'Position hands in center of victim’s chest, interlock fingers.',
        'Push hard and fast at 100-120 beats per minute (to the rhythm of "Stayin Alive") at 2 inches depth.',
      ],
      warnings: [
        'Do not stop chest compressions until medical paramedics arrive or the patient starts breathing.',
      ],
    },
    heatstroke: {
      title: 'Severe Heat Stroke (Loo / Summer Emergency)',
      steps: [
        'Move the victim immediately to a cool, shaded, or air-conditioned area.',
        'Loosen tight clothing and spray cool water or apply wet cloths to neck, armpits, and groin.',
        'Fan the person aggressively to lower core body temperature.',
        'If conscious and alert, offer cold water or Oral Rehydration Solution (ORS) in sips.',
      ],
      warnings: [
        'Do not give fluids if the victim is unconscious, confused, or vomiting.',
      ],
    },
    bleeding: {
      title: 'Severe Bleeding & Wound Control',
      steps: [
        'Apply firm, continuous direct pressure onto the wound using a clean cloth or gauze.',
        'Elevate the injured limb above heart level if no bone fracture is suspected.',
        'Wrap a sterile pressure bandage firmly over the dressing without cutting off pulse.',
      ],
      warnings: [
        'Do not remove embedded objects like glass or knives from deep wounds; stabilize them in place.',
      ],
    },
  };

  const activeGuide = firstAidGuides[selectedGuide] || firstAidGuides['snakebite'];

  return (
    <AppLayout
      topbarTitle="Emergency Medical Assistance & First Aid"
      topbarSubtitle="One-tap 108 ambulance connection and lifesaving emergency protocols"
    >
      <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
        {/* Urgent Helpline Numbers Grid */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Instant Emergency Dialers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {emergencyContacts.map((c) => (
              <a
                key={c.num}
                href={`tel:${c.num}`}
                style={{
                  backgroundColor: c.bg,
                  border: `1.5px solid ${c.color}`,
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.15s',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: c.color }}>{c.name}</span>
                    <Phone size={18} color={c.color} />
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#475569', margin: '0 0 0.85rem 0', lineHeight: 1.4 }}>
                    {c.desc}
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: c.color,
                    color: 'white',
                    padding: '0.55rem',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                    fontSize: '1rem',
                    fontWeight: 800,
                  }}
                >
                  Call {c.num} Now
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* First Aid Guidance Section */}
        <div
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-2xl)',
            padding: '2rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <HeartPulse size={22} color="var(--primary)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Lifesaving First Aid Guides
            </h3>
          </div>

          {/* Guide Selector Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              { id: 'snakebite', label: '🐍 Snake Bite Protocol' },
              { id: 'cpr', label: '❤️ Cardiac Arrest / CPR' },
              { id: 'heatstroke', label: '☀️ Heat Stroke / Loo' },
              { id: 'bleeding', label: '🩸 Severe Bleeding' },
            ].map((tab) => {
              const isActive = selectedGuide === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGuide(tab.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 600,
                    backgroundColor: isActive ? 'var(--primary-light)' : 'var(--surface-hover)',
                    color: isActive ? 'var(--primary-dark)' : 'var(--text-secondary)',
                    border: isActive ? '1px solid var(--primary)' : '1px solid var(--border)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Guide Content */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {activeGuide.title}
            </h4>

            {/* Step by Step list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {activeGuide.steps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Red Alert Warnings */}
            <div style={{ backgroundColor: '#FEF2F2', padding: '1rem 1.25rem', borderRadius: 'var(--radius-xl)', border: '1px solid #FECACA' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', marginBottom: '0.5rem' }}>
                <AlertTriangle size={17} />
                <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>Critical Don'ts (Life Hazard)</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#991B1B' }}>
                {activeGuide.warnings.map((w, idx) => (
                  <li key={idx}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EmergencyHelpPage;
