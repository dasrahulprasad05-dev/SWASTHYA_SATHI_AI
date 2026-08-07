import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowRight, Menu, X, ShieldAlert, Heart } from 'lucide-react';
import { PUBLIC_NAV_LINKS, SUPPORTED_LANGUAGES } from '../../constants';

export const PublicNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) || SUPPORTED_LANGUAGES[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
              color: 'white',
            }}
          >
            <Heart size={24} fill="currentColor" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                Swasthya Sathi
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary-dark)',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '6px',
                }}
              >
                AI
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>
              Odisha Public Health Assistant
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          {PUBLIC_NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--primary-dark)' : 'var(--text-secondary)',
                  position: 'relative',
                  padding: '0.35rem 0',
                  transition: 'color 0.2s',
                }}
              >
                {t(link.label)}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              <Globe size={16} color="var(--primary)" />
              <span>{currentLang.nativeLabel}</span>
              <span style={{ fontSize: '0.7rem' }}>▼</span>
            </button>

            {isLangOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '0.4rem',
                  minWidth: '140px',
                  zIndex: 60,
                }}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius)',
                      fontSize: '0.88rem',
                      fontWeight: i18n.language === lang.code ? 700 : 500,
                      backgroundColor: i18n.language === lang.code ? 'var(--primary-light)' : 'transparent',
                      color: i18n.language === lang.code ? 'var(--primary-dark)' : 'var(--text-primary)',
                      cursor: 'pointer',
                    }}
                  >
                    {lang.nativeLabel} ({lang.label})
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Emergency 108 Quick Link */}
          <Link
            to="/emergency"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'var(--danger-light)',
              color: 'var(--danger-dark)',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <ShieldAlert size={16} />
            <span>108 Helpline</span>
          </Link>

          {/* Sign In / Auth Portal Link */}
          <Link
            to="/auth"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'var(--surface-hover, #1e293b)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <span>Sign In / ପଞ୍ଜୀକରଣ</span>
          </Link>

          {/* Get Started / Chat CTA */}
          <Link
            to="/chat"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
              transition: 'all 0.2s',
            }}
          >
            <span>{t('landing.getStarted')}</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ display: 'none', padding: '0.4rem', color: 'var(--text-primary)' }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem' }}>
          {PUBLIC_NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                  backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {t(link.label)}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
