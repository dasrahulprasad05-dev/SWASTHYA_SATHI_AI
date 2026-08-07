import React from 'react';
import { MessageSquare, Hospital, Bell, Bookmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ActivityItem } from '../../types';
import { formatDate } from '../../lib/utils';

interface RecentActivityListProps {
  activities: ActivityItem[];
}

export const RecentActivityList: React.FC<RecentActivityListProps> = ({ activities }) => {
  const getIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'chat':
        return <MessageSquare size={16} color="#10B981" />;
      case 'hospital_search':
        return <Hospital size={16} color="#3B82F6" />;
      case 'scheme_view':
        return <Bookmark size={16} color="#8B5CF6" />;
      default:
        return <Bell size={16} color="#F59E0B" />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
          Recent Health Activity
        </h3>
        <Link to="/chat" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>
          View all
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {activities.map((act) => (
          <div
            key={act.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border-light)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-xs)',
                  flexShrink: 0,
                }}
              >
                {getIcon(act.type)}
              </div>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                  {act.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {act.description}
                </p>
              </div>
            </div>

            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>
              {formatDate(act.timestamp, 'short')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
