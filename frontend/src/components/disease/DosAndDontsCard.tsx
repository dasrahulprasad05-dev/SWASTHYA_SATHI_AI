import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DosAndDontsCardProps {
  dos: string[];
  donts: string[];
}

export const DosAndDontsCard: React.FC<DosAndDontsCardProps> = ({ dos, donts }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
        marginTop: '1rem',
      }}
    >
      {/* Do's Column (Green) */}
      <div
        style={{
          backgroundColor: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#15803D' }}>
          <CheckCircle2 size={20} />
          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
            {t('disease.dosCard.dosHeader', "Do's (Recommended Actions)")}
          </h4>
        </div>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: 0, padding: 0 }}>
          {dos.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#166534', lineHeight: 1.5 }}>
              <span style={{ color: '#15803D', fontWeight: 800, marginTop: '2px' }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Don'ts Column (Red) */}
      <div
        style={{
          backgroundColor: '#FEF2F2',
          border: '1px solid #FECACA',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#B91C1C' }}>
          <XCircle size={20} />
          <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>
            {t('disease.dosCard.dontsHeader', "Don'ts (Avoid These)")}
          </h4>
        </div>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: 0, padding: 0 }}>
          {donts.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#991B1B', lineHeight: 1.5 }}>
              <span style={{ color: '#B91C1C', fontWeight: 800, marginTop: '2px' }}>✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
