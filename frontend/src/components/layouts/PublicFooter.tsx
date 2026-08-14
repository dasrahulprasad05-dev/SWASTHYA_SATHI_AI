import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export const PublicFooter: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0B132B', color: '#F1F5F9', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid #1E293B' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Col 1: About & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src="/logos/main-logo.jpg" 
                alt="Swasthya Sathi AI Logo" 
                style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'contain', backgroundColor: 'transparent' }} 
              />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                Swasthya Sathi <span style={{ color: 'var(--primary)' }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Bridging the healthcare accessibility gap in Odisha & India through intelligent, multilingual, and verified AI guidance.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>SIH Hackathon Healthcare Initiative</span>
            </div>
          </div>

          {/* Col 2: Quick Features */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Quick Features</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <Link to="/chat" style={{ color: '#94A3B8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                  AI Health Assistant
                </Link>
              </li>
              <li>
                <Link to="/voice" style={{ color: '#94A3B8', fontSize: '0.88rem', textDecoration: 'none' }}>
                  Odia Voice Assistant
                </Link>
              </li>
              <li>
                <Link to="/hospitals" style={{ color: '#94A3B8', fontSize: '0.88rem', textDecoration: 'none' }}>
                  Find Nearby Hospitals
                </Link>
              </li>
              <li>
                <Link to="/health-hub" style={{ color: '#94A3B8', fontSize: '0.88rem', textDecoration: 'none' }}>
                  Disease Information Library
                </Link>
              </li>
              <li>
                <Link to="/schemes" style={{ color: '#94A3B8', fontSize: '0.88rem', textDecoration: 'none' }}>
                  BSKY & Central Health Schemes
                </Link>
              </li>
              <li>
                <Link to="/feedback" style={{ color: 'var(--primary)', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 600 }}>
                  ✍️ Citizen Feedback & Grievances
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Odisha Health Helplines */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Emergency Numbers</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#EF4444', fontWeight: 600, fontSize: '0.9rem' }}>
                <Phone size={16} />
                <span>108 — Free Ambulance Service</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#38BDF8', fontSize: '0.88rem' }}>
                <Phone size={16} />
                <span>104 — Odisha Health Helpline</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#F472B6', fontSize: '0.88rem' }}>
                <Phone size={16} />
                <span>181 — Women's Helpline</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FBBF24', fontSize: '0.88rem' }}>
                <Phone size={16} />
                <span>112 — All-in-One National Emergency</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Locations Covered</h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94A3B8', fontSize: '0.88rem', marginBottom: '0.8rem' }}>
              <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <span>Bhubaneswar, Cuttack, Puri, Rourkela, Sambalpur & All 30 Districts of Odisha</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94A3B8', fontSize: '0.88rem' }}>
              <Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span>support@swasthyasathi.ai</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #1E293B',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.82rem', color: '#64748B', margin: 0 }}>
            © 2026 Swasthya Sathi AI. All rights reserved. Made with ❤️ for a healthier Odisha & India.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: '#64748B' }}>
            <Link to="/about" style={{ color: '#64748B', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/about" style={{ color: '#64748B', textDecoration: 'none' }}>Terms of Service</Link>
            <Link to="/admin" style={{ color: '#10B981', fontWeight: 600, textDecoration: 'none' }}>Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
