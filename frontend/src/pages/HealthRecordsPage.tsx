import React, { useState } from 'react';
import { FileText, Upload, Download, QrCode, ShieldCheck } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';

export const HealthRecordsPage: React.FC = () => {
  const [records] = useState([
    {
      id: '1',
      title: 'Dengue NS1 Antigen Test Report',
      doctor: 'Dr. Debasis Pattnaik (Capital Hospital)',
      date: '2026-07-28',
      type: 'Lab Report',
      fileSize: '1.4 MB',
      status: 'Negative',
    },
    {
      id: '2',
      title: 'Monsoon Flu Prescription',
      doctor: 'Dr. S. K. Mohanty (AIIMS Bhubaneswar)',
      date: '2026-06-15',
      type: 'Prescription',
      fileSize: '840 KB',
      status: 'Completed',
    },
    {
      id: '3',
      title: 'Annual Blood Sugar & Lipid Profile',
      doctor: 'Thyrocare Odisha',
      date: '2026-04-10',
      type: 'Health Checkup',
      fileSize: '2.1 MB',
      status: 'Normal',
    },
  ]);

  return (
    <AppLayout
      topbarTitle="Digital Health Records (ABHA / ABDM)"
      topbarSubtitle="Encrypted medical history, prescriptions, and diagnostic reports"
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
        </>
      }
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* ABHA Card Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)',
            color: 'white',
            borderRadius: 'var(--radius-2xl)',
            padding: '1.75rem',
            marginBottom: '2rem',
            boxShadow: '0 8px 24px rgba(15, 118, 110, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#99F6E4', marginBottom: '0.4rem' }}>
              <ShieldCheck size={18} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                AYUSHMAN BHARAT DIGITAL MISSION (ABDM)
              </span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.4rem 0', color: 'white' }}>
              Rahul Sharma
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#CCFBF1', margin: 0, fontFamily: 'monospace' }}>
              ABHA ID: 91-8472-9012-3849
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                backgroundColor: 'white',
                padding: '0.6rem',
                borderRadius: 'var(--radius-lg)',
                color: '#0F766E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <QrCode size={48} />
            </div>
          </div>
        </div>

        {/* Upload Action Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
            Saved Health Documents ({records.length})
          </h3>

          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '0.6rem 1.15rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
            }}
          >
            <Upload size={16} />
            <span>Upload New Report</span>
          </button>
        </div>

        {/* Records List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {records.map((rec) => (
            <div
              key={rec.id}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.25rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={22} />
                </div>

                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {rec.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                    {rec.doctor} • <span style={{ color: 'var(--text-secondary)' }}>{rec.type}</span>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {rec.date}
                  </span>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>
                    {rec.fileSize}
                  </p>
                </div>

                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'var(--surface-hover)',
                    border: '1px solid var(--border)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  <Download size={15} color="var(--primary)" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default HealthRecordsPage;
