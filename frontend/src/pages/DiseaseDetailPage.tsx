import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bookmark } from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { DiseaseHero } from '../components/disease/DiseaseHero';
import { DiseaseTabs } from '../components/disease/DiseaseTabs';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { HealthTipCarousel } from '../components/common/HealthTipCarousel';
import { TrustedSourcesPanel } from '../components/common/TrustedSourcesPanel';
import { healthService } from '../services/apiServices';
import type { Disease } from '../types';

export const DiseaseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [disease, setDisease] = useState<Disease | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchDisease = async () => {
      setIsLoading(true);
      try {
        const data = await healthService.getDiseaseById(id || '1');
        setDisease(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDisease();
  }, [id]);

  if (!disease && !isLoading) {
    return (
      <AppLayout topbarTitle="Disease Information">
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <p>Disease information not found.</p>
          <Link to="/health-hub" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            Back to Health Hub
          </Link>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout
      topbarLeft={
        <Link
          to="/health-hub"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Health Hub</span>
        </Link>
      }
      topbarRight={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setIsSaved(!isSaved)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              backgroundColor: isSaved ? 'var(--primary-light)' : 'var(--surface-hover)',
              color: isSaved ? 'var(--primary-dark)' : 'var(--text-secondary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      }
      rightPanel={
        <>
          <EmergencyCard />
          <HealthTipCarousel />
          <TrustedSourcesPanel />
        </>
      }
    >
      {disease && (
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <DiseaseHero disease={disease} />
          <DiseaseTabs disease={disease} />
        </div>
      )}
    </AppLayout>
  );
};

export default DiseaseDetailPage;
