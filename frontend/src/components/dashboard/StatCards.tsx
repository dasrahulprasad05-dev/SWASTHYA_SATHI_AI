import React from 'react';
import { HeartPulse, MessageSquare, Bookmark, Bell, ArrowUpRight } from 'lucide-react';
import type { DashboardStats } from '../../types';

interface StatCardsProps {
  stats: DashboardStats;
}

export const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  const cards = [
    {
      label: 'Health Score',
      value: `${stats.healthScore}/100`,
      icon: <HeartPulse size={22} color="#10B981" />,
      bg: '#ECFDF5',
      change: '+4% this month',
      changeColor: '#059669',
    },
    {
      label: 'Consultations',
      value: stats.totalChats.toString(),
      icon: <MessageSquare size={22} color="#3B82F6" />,
      bg: '#EFF6FF',
      change: '12 this week',
      changeColor: '#2563EB',
    },
    {
      label: 'Saved Guides',
      value: stats.savedItems.toString(),
      icon: <Bookmark size={22} color="#8B5CF6" />,
      bg: '#F5F3FF',
      change: 'Dengue, Malaria',
      changeColor: '#7C3AED',
    },
    {
      label: 'Active Reminders',
      value: stats.activeReminders.toString(),
      icon: <Bell size={22} color="#F59E0B" />,
      bg: '#FEF3C7',
      change: 'Next at 2:00 PM',
      changeColor: '#D97706',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '1.75rem',
      }}
    >
      {cards.map((c) => (
        <div
          key={c.label}
          style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.25rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {c.label}
            </span>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: c.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {c.icon}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              {c.value}
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: c.changeColor }}>
              {c.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
