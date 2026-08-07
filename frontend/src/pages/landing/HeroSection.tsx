import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Play, FileText, Globe, ShieldCheck, HeartPulse, Building2, Stethoscope, AlertTriangle, Landmark } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const featurePills = [
    { text: 'AI Health Assistant', icon: <MessageSquare size={16} />, color: '#3B82F6', bg: '#EFF6FF' },
    { text: 'Voice Support', icon: <Mic size={16} />, color: '#10B981', bg: '#ECFDF5' },
    { text: 'Multilingual', icon: <Globe size={16} />, color: '#8B5CF6', bg: '#F5F3FF' },
    { text: 'Secure & Reliable', icon: <ShieldCheck size={16} />, color: '#F59E0B', bg: '#FFFBEB' },
  ];

  const floatingCards = [
    { text: 'Health Guidance', icon: <HeartPulse size={20} color="#10B981" />, top: '5%', right: '25%', delay: 0.2 },
    { text: 'Disease Information', icon: <FileText size={20} color="#3B82F6" />, top: '25%', left: '0%', delay: 0.4 },
    { text: 'Find Hospitals', icon: <Building2 size={20} color="#8B5CF6" />, top: '35%', right: '0%', delay: 0.6 },
    { text: 'Government Schemes', icon: <Landmark size={20} color="#F59E0B" />, bottom: '25%', left: '5%', delay: 0.8 },
    { text: 'Emergency Support', icon: <AlertTriangle size={20} color="#EF4444" />, bottom: '20%', right: '10%', delay: 1.0 },
  ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'transparent',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ paddingRight: '2rem' }}
          >
            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1E293B',
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Your Health.<br />
              Our Priority.<br />
              <span style={{ color: '#10B981' }}>Always with You.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '540px',
                marginBottom: '2rem',
                fontWeight: 500,
              }}
            >
              Swasthya Sathi AI is your intelligent health companion for accurate guidance, trusted information, and better health decisions.
            </p>

            {/* 4 Feature Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {featurePills.map((pill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: pill.color,
                    background: pill.bg,
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                  }}
                >
                  {pill.icon}
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/chat"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#10B981',
                  color: 'white',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '50px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
                  transition: 'all 0.2s ease',
                }}
              >
                <MessageSquare size={20} />
                <span>Chat with AI Assistant</span>
              </Link>

              <button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: 'white',
                  color: '#1E293B',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '50px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  border: 'none',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #3B82F6', color: '#3B82F6' }}>
                  <Play size={12} fill="currentColor" style={{ marginLeft: '2px' }} />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Robot Mascot & Orbit */}
          <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Base Hologram Ring */}
            <div style={{
              position: 'absolute',
              bottom: '50px',
              width: '80%',
              height: '120px',
              borderRadius: '50%',
              border: '3px solid rgba(59, 130, 246, 0.4)',
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 40px rgba(59, 130, 246, 0.5)',
              transform: 'rotateX(75deg)',
            }}>
               <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  animation: 'pulse 3s infinite alternate',
               }} />
            </div>

            {/* Glowing Robot Character */}
            <motion.img 
              src="/images/robot-mascot.png" 
              alt="Medical AI Robot Mascot" 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                width: '320px',
                height: 'auto',
                position: 'relative',
                zIndex: 10,
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
                clipPath: 'circle(48% at 50% 50%)', // Hides the square black background corners perfectly
              }}
            />

            {/* Orbiting Cards */}
            {floatingCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: card.delay, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: card.top,
                  bottom: card.bottom,
                  left: card.left,
                  right: card.right,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05), 0 2px 10px rgba(59,130,246,0.1)',
                  zIndex: 20,
                  border: '1px solid rgba(255,255,255,0.8)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div style={{ backgroundColor: '#F8FAFC', padding: '0.5rem', borderRadius: '8px' }}>
                  {card.icon}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E293B' }}>{card.text}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
