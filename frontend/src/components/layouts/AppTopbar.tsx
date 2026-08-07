import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Bell, Moon, Sun, Search, ShieldAlert, Check, Menu } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../../constants';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

interface AppTopbarProps {
  title?: string;
  subtitle?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onMenuClick?: () => void;
}

export const AppTopbar: React.FC<AppTopbarProps> = ({
  title,
  subtitle,
  leftContent,
  rightContent,
  onMenuClick,
}) => {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) || SUPPORTED_LANGUAGES[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header
      style={{
        height: 'var(--topbar-height)',
        backgroundColor: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 30,
      }}
    >
      {/* Left Section: Title & Subtitle or Custom Content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {onMenuClick && (
          <button 
            className="mobile-only" 
            onClick={onMenuClick} 
            style={{ 
              color: 'var(--text-primary)', 
              padding: '0.4rem', 
              borderRadius: 'var(--radius)', 
              backgroundColor: 'var(--surface-hover)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <Menu size={20} />
          </button>
        )}
        
        {leftContent ? (
          leftContent
        ) : (
          <div>
            {title && (
              <h1 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                {title}
              </h1>
            )}
            {subtitle && (
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }} className="mobile-hide">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Right Section: Language, Notifications, Theme, User */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        {rightContent}

        {/* Language Selector */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface-hover)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            <Globe size={15} color="var(--primary)" />
            <span>{currentLang.nativeLabel}</span>
            <span style={{ fontSize: '0.65rem' }}>▼</span>
          </button>

          {isLangOpen && (
            <div
              style={{
                position: 'absolute',
                top: '115%',
                right: 0,
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                padding: '0.4rem',
                minWidth: '135px',
                zIndex: 50,
              }}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.45rem 0.65rem',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.85rem',
                    fontWeight: i18n.language === lang.code ? 700 : 500,
                    backgroundColor: i18n.language === lang.code ? 'var(--primary-light)' : 'transparent',
                    color: i18n.language === lang.code ? 'var(--primary-dark)' : 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  <span>{lang.nativeLabel}</span>
                  {i18n.language === lang.code && <Check size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          {theme === 'dark' ? <Sun size={17} color="#FBBF24" /> : <Moon size={17} />}
        </button>

        {/* Notifications Bell */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <Bell size={17} />
            <span
              style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--danger)',
              }}
            />
          </button>

          {isNotifOpen && (
            <div
              style={{
                position: 'absolute',
                top: '115%',
                right: 0,
                width: '300px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                padding: '1rem',
                zIndex: 50,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, margin: 0 }}>Notifications</h4>
                <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>Mark all read</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ padding: '0.5rem', backgroundColor: 'var(--bg-warm)', borderRadius: 'var(--radius)', fontSize: '0.8rem' }}>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>BSKY Health Scheme Alert</p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.75rem' }}>New card renewal deadline announced.</p>
                </div>
                <div style={{ padding: '0.5rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius)', fontSize: '0.8rem' }}>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Monsoon Health Advisory</p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.75rem' }}>Prevent dengue & malaria guidelines updated.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '0.5rem', borderLeft: '1px solid var(--border)' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.9rem',
            }}
          >
            {user?.name ? user.name.charAt(0).toUpperCase() : 'R'}
          </div>
        </div>
      </div>
    </header>
  );
};
