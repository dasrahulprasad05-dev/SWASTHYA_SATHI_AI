import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Hospital, ShieldAlert, FileText, Sparkles } from 'lucide-react';

export const HeroImage: React.FC = () => {
  const floatingBadges = [
    { text: 'Health Guidance', icon: <Stethoscope size={16} color="#10B981" />, x: -30, y: -20, delay: 0 },
    { text: 'Disease Library', icon: <Heart size={16} color="#EC4899" />, x: 180, y: -40, delay: 0.2 },
    { text: 'Find Hospitals', icon: <Hospital size={16} color="#3B82F6" />, x: -60, y: 140, delay: 0.4 },
    { text: 'Govt Schemes', icon: <FileText size={16} color="#F59E0B" />, x: 190, y: 150, delay: 0.6 },
    { text: 'Emergency 108', icon: <ShieldAlert size={16} color="#EF4444" />, x: 60, y: 260, delay: 0.8 },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        height: '420px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Decorative Rings */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          border: '2px dashed rgba(16, 185, 129, 0.25)',
        }}
      />
      <motion.div
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Central AI Healthcare Robot Mascot Artwork */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '190px',
          height: '190px',
          borderRadius: '36px',
          background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 10,
          border: '4px solid rgba(255, 255, 255, 0.8)',
        }}
      >
        <div
          style={{
            width: '74px',
            height: '74px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <Sparkles size={40} color="#FFFFFF" />
        </div>
        <span style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Sathi AI Bot
        </span>
        <span style={{ fontSize: '0.72rem', color: '#D1FAE5', fontWeight: 600 }}>
          ଓଡ଼ିଆ • हिंदी • Eng
        </span>
      </motion.div>

      {/* Floating Interactive Feature Bubbles */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [badge.y, badge.y - 8, badge.y],
          }}
          transition={{
            y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: badge.delay },
            duration: 0.5,
          }}
          style={{
            position: 'absolute',
            left: `calc(50% + ${badge.x}px - 70px)`,
            top: `calc(50% + ${badge.y}px - 20px)`,
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-full)',
            padding: '0.45rem 0.9rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            zIndex: 20,
            whiteSpace: 'nowrap',
          }}
        >
          {badge.icon}
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {badge.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
