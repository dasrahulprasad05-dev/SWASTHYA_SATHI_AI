import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  BookOpen,
  Hospital,
  Landmark,
  AlertTriangle,
  Mic,
  ArrowRight,
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'AI Health Assistant',
      description: 'Get real-time symptom analysis and medical guidance tailored for Odisha.',
      icon: <MessageSquare size={26} color="#10B981" />,
      path: '/chat',
      badge: 'RAG Powered',
      color: '#10B981',
      bg: '#ECFDF5',
    },
    {
      title: 'Odia Voice Assistant',
      description: 'Speak naturally in your mother tongue — Odia, Hindi, or English.',
      icon: <Mic size={26} color="#3B82F6" />,
      path: '/voice',
      badge: 'Bhashini AI',
      color: '#3B82F6',
      bg: '#EFF6FF',
    },
    {
      title: 'Find Verified Hospitals',
      description: 'Locate 2,000+ public and private hospitals with live emergency & bed info.',
      icon: <Hospital size={26} color="#8B5CF6" />,
      path: '/hospitals',
      badge: 'Interactive Map',
      color: '#8B5CF6',
      bg: '#F5F3FF',
    },
    {
      title: 'Disease & Medicine Guide',
      description: 'Comprehensive symptoms, prevention, treatments, and dosage guides.',
      icon: <BookOpen size={26} color="#EC4899" />,
      path: '/health-hub',
      badge: 'ICMR Guidelines',
      color: '#EC4899',
      bg: '#FDF2F8',
    },
    {
      title: 'BSKY & Govt Schemes',
      description: 'Check eligibility for Biju Swasthya Kalyan Yojana & Ayushman Bharat.',
      icon: <Landmark size={26} color="#F59E0B" />,
      path: '/schemes',
      badge: 'Odisha Govt',
      color: '#F59E0B',
      bg: '#FEF3C7',
    },
    {
      title: 'One-Tap Emergency Help',
      description: 'Direct dispatch to 108 ambulance, 104 helpline, and nearest trauma care.',
      icon: <AlertTriangle size={26} color="#EF4444" />,
      path: '/emergency',
      badge: '24x7 Active',
      color: '#EF4444',
      bg: '#FEF2F2',
    },
  ];

  return (
    <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--primary-dark)',
              backgroundColor: 'var(--primary-light)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Everything You Need
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '1rem', color: 'var(--text-primary)' }}>
            Comprehensive Healthcare Intelligence
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
            Built specifically to solve public healthcare challenges in Odisha with AI and localized knowledge.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {features.map((feat) => (
            <Link
              key={feat.title}
              to={feat.path}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2rem',
                border: '1px solid var(--border)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: feat.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--surface-hover)',
                      color: 'var(--text-secondary)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {feat.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {feat.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginTop: '1.5rem',
                }}
              >
                <span>Explore Feature</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
