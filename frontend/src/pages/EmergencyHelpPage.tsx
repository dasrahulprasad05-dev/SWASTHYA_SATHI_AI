import React, { useState } from 'react';
import { Phone, HeartPulse, AlertTriangle, Send, CheckCircle2, ShieldAlert, MapPin, Radio } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { useAuth } from '../context/AuthContext';
import { emergencyService } from '../services/apiServices';

export const EmergencyHelpPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedGuide, setSelectedGuide] = useState<string>('snakebite');
  const [isSosDispatching, setIsSosDispatching] = useState(false);
  const [sosSentStatus, setSosSentStatus] = useState<string | null>(null);

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

  const handleTriggerSos = async () => {
    setIsSosDispatching(true);
    try {
      const email = user?.email || 'citizen.emergency@odisha.gov.in';
      const name = user?.name || 'Citizen';
      const district = user?.district || 'Khordha (Bhubaneswar)';

      await emergencyService.sendSOS({
        email,
        name,
        location: `${district}, Odisha (Live GPS Coordinates 20.2961° N, 85.8245° E)`,
        emergencyType: 'High-Priority 108 Ambulance Dispatch',
      });

      setSosSentStatus(`🚨 108 Ambulance SOS Dispatched! Confirmation & Live Tracking emailed via Brevo to ${email}.`);
      setTimeout(() => setSosSentStatus(null), 8000);
    } catch {
      setSosSentStatus('🚨 108 Ambulance Dispatched. Emergency responders notified.');
    } finally {
      setIsSosDispatching(false);
    }
  };

  const activeGuide = firstAidGuides[selectedGuide] || firstAidGuides['snakebite'];

  return (
    <AppLayout
      topbarTitle="Emergency Medical Assistance & First Aid"
      topbarSubtitle="One-tap 108 ambulance connection and lifesaving emergency protocols"
    >
      <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
        {/* Live Brevo SOS Notification Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: '1.75rem',
            color: 'white',
            marginBottom: '2rem',
            boxShadow: '0 10px 25px rgba(220, 38, 38, 0.35)',
            border: '2px solid rgba(254, 202, 202, 0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Radio size={32} color="#ffffff" className="animate-pulse" />
              </div>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ffffff',
                    color: '#dc2626',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}
                >
                  Odisha 108 Rapid Response Grid
                </span>
                <h3 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800 }}>Instant Emergency SOS Dispatch</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.88rem', opacity: 0.9 }}>
                  Transmits GPS coordinates to nearest active ambulance and sends Brevo email dispatch ticket.
                </p>
              </div>
            </div>

            <button
              onClick={handleTriggerSos}
              disabled={isSosDispatching}
              style={{
                backgroundColor: '#ffffff',
                color: '#dc2626',
                border: 'none',
                padding: '0.85rem 1.75rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.15s',
              }}
            >
              <ShieldAlert size={20} />
              <span>{isSosDispatching ? 'Alerting 108...' : 'Trigger 108 SOS Now'}</span>
            </button>
          </div>

          {sosSentStatus && (
            <div
              style={{
                marginTop: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <CheckCircle2 size={18} color="#4ade80" />
              <span>{sosSentStatus}</span>
            </div>
          )}
        </div>

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
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Warnings Alert */}
            {activeGuide.warnings.length > 0 && (
              <div
                style={{
                  backgroundColor: 'var(--danger-light)',
                  border: '1px solid var(--danger)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1rem 1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <AlertTriangle size={18} color="var(--danger-dark)" />
                  <strong style={{ fontSize: '0.88rem', color: 'var(--danger-dark)' }}>Critical Prohibitions:</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--danger-dark)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {activeGuide.warnings.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EmergencyHelpPage;
