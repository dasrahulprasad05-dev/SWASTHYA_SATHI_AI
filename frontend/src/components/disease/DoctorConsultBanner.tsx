import React from 'react';
import { AlertOctagon, Phone, Hospital } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface DoctorConsultBannerProps {
  symptoms: string[];
}

export const DoctorConsultBanner: React.FC<DoctorConsultBannerProps> = ({ symptoms }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: '#FEF2F2',
        border: '1.5px solid #FCA5A5',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        marginTop: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626' }}>
        <AlertOctagon size={22} />
        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#DC2626' }}>
          {t('disease.doctorConsult.title', 'When to Seek Immediate Medical Consultation')}
        </h4>
      </div>

      <p style={{ fontSize: '0.88rem', color: '#7F1D1D', margin: 0, lineHeight: 1.5 }}>
        {t('disease.doctorConsult.subtitle', 'If you or someone around you experiences any of the following critical warning signs, do not delay:')}
      </p>

      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.5rem', margin: 0, padding: 0 }}>
        {symptoms.map((sym, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#991B1B', fontWeight: 600 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#DC2626', flexShrink: 0 }} />
            <span>{sym}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
        <Link
          to="/hospitals"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#DC2626',
            color: 'white',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.85rem',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <Hospital size={16} />
          <span>{t('disease.doctorConsult.findHospital', 'Find Nearest Emergency Hospital')}</span>
        </Link>

        <a
          href="tel:108"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'white',
            color: '#DC2626',
            border: '1.5px solid #DC2626',
            padding: '0.6rem 1.15rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.85rem',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <Phone size={16} />
          <span>{t('disease.doctorConsult.callAmbulance', 'Call 108 Ambulance (Free)')}</span>
        </a>
      </div>
    </div>
  );
};
