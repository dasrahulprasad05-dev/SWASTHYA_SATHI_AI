import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { HeroImage } from './HeroImage';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const featurePills = [
    t('landing.features.ai'),
    t('landing.features.voice'),
    t('landing.features.multilingual'),
    t('landing.features.secure'),
  ];

  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #F0FDFA 0%, #FFFFFF 100%)',
        paddingTop: '3.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary-dark)',
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={15} />
              <span>Odisha's First Multilingual AI Healthcare Sathi</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              {t('landing.headline1')} <br />
              {t('landing.headline2')} <br />
              <span
                style={{
                  color: 'var(--primary)',
                  fontStyle: 'italic',
                  fontFamily: 'serif',
                  fontWeight: 700,
                }}
              >
                {t('landing.headlineHighlight')}
              </span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '1.75rem',
              }}
            >
              {t('landing.subtitle')}
            </p>

            {/* 4 Feature Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              {featurePills.map((pill) => (
                <div
                  key={pill}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  <CheckCircle2 size={18} color="#10B981" />
                  <span>{pill}</span>
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
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '0.85rem 1.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(16, 185, 129, 0.35)',
                  transition: 'transform 0.2s',
                }}
              >
                <MessageSquare size={18} />
                <span>{t('landing.chatCTA')}</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/voice"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-primary)',
                  padding: '0.85rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Mic size={18} color="var(--primary)" />
                <span>{t('landing.voiceCTA')}</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
