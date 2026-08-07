import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLayout } from '../components/layouts/AppLayout';
import { StatCards } from '../components/dashboard/StatCards';
import { HealthAnalyticsChart } from '../components/dashboard/HealthAnalyticsChart';
import { RecentActivityList } from '../components/dashboard/RecentActivityList';
import { HealthRemindersCard } from '../components/dashboard/HealthRemindersCard';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';
import { PremiumCTA } from '../components/common/PremiumCTA';
import { dashboardService } from '../services/apiServices';
import type { DashboardStats } from '../types';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await dashboardService.getStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <AppLayout
      topbarTitle={`${t('dashboard.greeting')}, ${user?.name?.split(' ')[0] || 'Rahul'} 👋`}
      topbarSubtitle="Here is your personal health overview and upcoming schedules"
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
          <PremiumCTA />
        </>
      }
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {stats && <StatCards stats={stats} />}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <HealthAnalyticsChart />
          {stats && <HealthRemindersCard reminders={stats.reminders} />}
        </div>

        {stats && <RecentActivityList activities={stats.recentActivity} />}
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
