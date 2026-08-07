import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../constants';

export const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const [voiceSpeed, setVoiceSpeed] = useState('1.0');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [offlineSync, setOfflineSync] = useState(true);

  return (
    <AppLayout
      topbarTitle="Application Settings"
      topbarSubtitle="Customize language, audio speech preferences, and data privacy"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Appearance Settings */}
        <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Appearance & Display
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Theme Mode</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Toggle between light and sleek dark mode
              </p>
            </div>
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: 'var(--surface-hover)',
                border: '1px solid var(--border)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius)',
                cursor: 'pointer',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {theme === 'dark' ? <Sun size={16} color="#FBBF24" /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        </div>

        {/* Multilingual Settings */}
        <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Language & Speech
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border-light)' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Active Language</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Selected language for all UI elements and AI voice
              </p>
            </div>
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {SUPPORTED_LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.nativeLabel} ({l.label})
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>AI Voice Speed</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Pacing for Odia and Hindi text-to-speech
              </p>
            </div>
            <select
              value={voiceSpeed}
              onChange={(e) => setVoiceSpeed(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--bg)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              <option value="0.8">0.8x (Slower)</option>
              <option value="1.0">1.0x (Normal)</option>
              <option value="1.2">1.2x (Faster)</option>
            </select>
          </div>
        </div>

        {/* Notifications & Offline */}
        <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Notifications & Offline Data
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border-light)' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Medication Reminders</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Receive push alerts for dose timings
              </p>
            </div>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0' }}>
            <div>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Offline Emergency Directory</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                Cache hospital contacts & first aid guides for low-network rural areas
              </p>
            </div>
            <input
              type="checkbox"
              checked={offlineSync}
              onChange={(e) => setOfflineSync(e.target.checked)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
