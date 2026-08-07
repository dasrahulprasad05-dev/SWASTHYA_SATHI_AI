import React, { useState } from 'react';
import { Save, Check } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { useAuth } from '../context/AuthContext';

export const ProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || 'Rahul Sharma',
    email: user?.email || 'rahul.sharma@example.com',
    phone: user?.phone || '+91 98765 43210',
    location: user?.location || 'Bhubaneswar, Odisha',
    language: user?.language || 'en',
    bloodGroup: 'B+',
    emergencyContact: '+91 94370 12345 (Father)',
    abhaId: '91-8472-9012-3849',
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      language: formData.language as any,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <AppLayout
      topbarTitle="Citizen Health Profile"
      topbarSubtitle="Manage personal health details, ABHA identification, and emergency contacts"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <form onSubmit={handleSave}>
          <div
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius-2xl)',
              padding: '2rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Profile Header Banner */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                }}
              >
                {formData.name.charAt(0)}
              </div>

              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  {formData.name}
                </h2>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                  ABHA ID: {formData.abhaId} • Verified Citizen
                </p>
              </div>
            </div>

            {/* Input Fields Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  District / Location (Odisha)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Preferred Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value as 'en' | 'hi' | 'or' })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="en">English</option>
                  <option value="or">ଓଡ଼ିଆ (Odia)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Blood Group
                </label>
                <input
                  type="text"
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  Emergency Contact (SOS)
                </label>
                <input
                  type="text"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            </div>

            {/* Save Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: isSaved ? '#059669' : 'var(--primary)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.2s',
                }}
              >
                {isSaved ? <Check size={17} /> : <Save size={17} />}
                <span>{isSaved ? 'Profile Updated Successfully!' : 'Save Profile Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
