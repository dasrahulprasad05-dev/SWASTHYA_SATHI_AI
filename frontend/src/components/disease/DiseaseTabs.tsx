import React, { useState } from 'react';
import {
  CheckCircle2,
  HelpCircle,
  Stethoscope,
  Shield,
  BookOpen,
  Info,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Disease } from '../../types';
import { DosAndDontsCard } from './DosAndDontsCard';
import { DoctorConsultBanner } from './DoctorConsultBanner';

interface DiseaseTabsProps {
  disease: Disease;
}

export const DiseaseTabs: React.FC<DiseaseTabsProps> = ({ disease }) => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<
    'symptoms' | 'causes' | 'treatments' | 'prevention' | 'dos' | 'faq'
  >('symptoms');

  const isOdia = i18n.language === 'or';
  const localized = (isOdia && disease.or) ? disease.or : (disease.en || disease);

  const symptoms = localized.symptoms || disease.symptoms || [];
  const causes = localized.causes || disease.causes || [];
  const treatments = localized.treatments || disease.treatments || [];
  const prevention = localized.prevention || disease.prevention || [];
  const dos = localized.dos || disease.dos || [];
  const donts = localized.donts || disease.donts || [];
  const whenToSeeDoctor = localized.whenToSeeDoctor || disease.whenToSeeDoctor;
  const faqs = localized.faqs || disease.faqs || [];

  const tabs = [
    { id: 'symptoms', label: t('disease.tabs.symptoms', 'Symptoms'), icon: <Stethoscope size={16} /> },
    { id: 'causes', label: t('disease.tabs.causes', 'Causes'), icon: <Info size={16} /> },
    { id: 'treatments', label: t('disease.tabs.treatments', 'Treatments'), icon: <BookOpen size={16} /> },
    { id: 'prevention', label: t('disease.tabs.prevention', 'Prevention'), icon: <Shield size={16} /> },
    { id: 'dos', label: t('disease.tabs.dos', "Do's & Don'ts"), icon: <CheckCircle2 size={16} /> },
    { id: 'faq', label: t('disease.tabs.faq', 'FAQs'), icon: <HelpCircle size={16} /> },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-2xl)',
        padding: '1.5rem',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Tab Navigation Buttons */}
      <div
        role="tablist"
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '0.75rem',
          overflowX: 'auto',
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              id={`tab-btn-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.88rem',
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                color: isActive ? 'var(--primary-dark)' : 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease-in-out',
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels */}
      <div style={{ paddingTop: '1.5rem' }}>
        {/* Symptoms Tab */}
        {activeTab === 'symptoms' && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t('disease.headers.symptomsTitle', 'Common Symptoms & Clinical Signs')}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {symptoms.map((sym, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
                  <span>{sym}</span>
                </div>
              ))}
            </div>

            {whenToSeeDoctor && whenToSeeDoctor.length > 0 && (
              <DoctorConsultBanner symptoms={whenToSeeDoctor} />
            )}
          </div>
        )}

        {/* Causes Tab */}
        {activeTab === 'causes' && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t('disease.headers.causesTitle', 'Known Causes & Risk Factors')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {causes.map((cause, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    padding: '1rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.9rem' }}>{idx + 1}.</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{cause}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Treatments Tab */}
        {activeTab === 'treatments' && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t('disease.headers.treatmentsTitle', 'Medical Treatment & Home Care Regimen')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {treatments.map((tr, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    padding: '1rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{tr}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Prevention Tab */}
        {activeTab === 'prevention' && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t('disease.headers.preventionTitle', 'Prevention & Hygiene Protocols')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {prevention.map((prev, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    padding: '1rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <Shield size={18} color="#3B82F6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{prev}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Do's and Don'ts Tab */}
        {activeTab === 'dos' && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {t('disease.headers.dosTitle', "Clinical Do's and Don'ts")}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              {t('disease.headers.dosSubtitle', 'Adhere strictly to these guidelines to prevent complications.')}
            </p>
            <DosAndDontsCard dos={dos} donts={donts} />
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === 'faq' && (
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t('disease.headers.faqTitle', 'Frequently Asked Questions')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    backgroundColor: 'var(--bg)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
                    Q: {faq.question}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
