import React from 'react';
import { motion } from 'framer-motion';

export const TypingIndicator: React.FC = () => {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -6 },
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.75rem 1.15rem',
        backgroundColor: 'var(--surface)',
        borderRadius: '16px 16px 16px 4px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
        width: 'fit-content',
      }}
    >
      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginRight: '0.3rem' }}>
        Sathi AI is analyzing
      </span>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.15,
          }}
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
          }}
        />
      ))}
    </div>
  );
};
