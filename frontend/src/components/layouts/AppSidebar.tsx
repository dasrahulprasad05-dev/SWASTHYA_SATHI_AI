import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home,
  MessageSquare,
  Mic,
  BookOpen,
  Hospital,
  Pill,
  FileText,
  Landmark,
  AlertTriangle,
  Bell,
  LayoutDashboard,
  User,
  Settings,
  Plus,
  Heart,
  LogOut,
  Sparkles,
  X,
} from 'lucide-react';
import { APP_NAV_ITEMS } from '../../constants';
import { useAuth } from '../../context/AuthContext';

interface AppSidebarProps {
  bottomSlot?: React.ReactNode;
  onClose?: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home size={19} />,
  MessageSquare: <MessageSquare size={19} />,
  Mic: <Mic size={19} />,
  BookOpen: <BookOpen size={19} />,
  Hospital: <Hospital size={19} />,
  Pill: <Pill size={19} />,
  FileText: <FileText size={19} />,
  Landmark: <Landmark size={19} />,
  AlertTriangle: <AlertTriangle size={19} />,
  Bell: <Bell size={19} />,
  LayoutDashboard: <LayoutDashboard size={19} />,
  User: <User size={19} />,
  Settings: <Settings size={19} />,
};

export const AppSidebar: React.FC<AppSidebarProps> = ({ bottomSlot, onClose }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  return (
    <aside
      style={{
        width: 'var(--sidebar-width)',
        backgroundColor: 'var(--surface)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        flexShrink: 0,
        overflowY: 'auto',
      }}
    >
      {/* Brand Header */}
      <div style={{ padding: '1.25rem 1.25rem 1rem 1.25rem', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 10px rgba(16, 185, 129, 0.25)',
                flexShrink: 0,
              }}
            >
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  Swasthya Sathi
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary-dark)',
                    padding: '0.05rem 0.35rem',
                    borderRadius: '4px',
                  }}
                >
                  AI
                </span>
              </div>
              <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>
                Health Companion
              </p>
            </div>
          </Link>
          
          {onClose && (
            <button className="mobile-only" onClick={onClose} style={{ color: 'var(--text-muted)', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={20} />
            </button>
          )}
        </div>

        {/* New Chat Button */}
        <button
          onClick={() => navigate('/chat')}
          style={{
            width: '100%',
            marginTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '0.6rem 1rem',
            borderRadius: 'var(--radius-lg)',
            fontSize: '0.9rem',
            fontWeight: 600,
            boxShadow: '0 3px 10px rgba(16, 185, 129, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          <Plus size={18} strokeWidth={2.5} />
          <span>{t('nav.newChat')}</span>
        </button>
      </div>

      {/* Navigation List */}
      <nav style={{ padding: '0.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        {APP_NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          const isAlert = item.isAlert;

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0.85rem',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: isActive ? 600 : 500,
                backgroundColor: isActive
                  ? 'var(--primary-light)'
                  : isAlert
                  ? 'rgba(239, 68, 68, 0.06)'
                  : 'transparent',
                color: isActive
                  ? 'var(--primary-dark)'
                  : isAlert
                  ? 'var(--danger)'
                  : 'var(--text-secondary)',
                transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    color: isActive
                      ? 'var(--primary)'
                      : isAlert
                      ? 'var(--danger)'
                      : 'var(--text-muted)',
                    display: 'flex',
                  }}
                >
                  {ICON_MAP[item.icon] || <MessageSquare size={19} />}
                </span>
                <span>{t(item.label)}</span>
              </div>

              {item.badge && (
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--warning-light)',
                    color: 'var(--warning-dark)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Custom Page Bottom Slot (e.g., Voice CTA / Upgrade) */}
      {bottomSlot && <div style={{ padding: '0 0.75rem 0.75rem 0.75rem' }}>{bottomSlot}</div>}

      {/* Upgrade to Pro Banner */}
      <div style={{ padding: '0 0.75rem 0.75rem 0.75rem' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #F0FDFA 0%, #E0F2FE 100%)',
            border: '1px solid #BAE6FD',
            borderRadius: 'var(--radius-lg)',
            padding: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0369A1', fontWeight: 700, fontSize: '0.85rem' }}>
            <Sparkles size={16} />
            <span>AI Health Assistant 2.0</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#0C4A6E', margin: 0, lineHeight: 1.4 }}>
            Voice diagnosis in Odia & instant doctor triage.
          </p>
        </div>
      </div>

      {/* User Footer / Logout */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--surface-hover)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.82rem',
              flexShrink: 0,
            }}
          >
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }} className="truncate">
              {user?.name || 'Rahul Sharma'}
            </p>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }} className="truncate">
              {user?.location || 'Bhubaneswar'}
            </p>
          </div>
        </div>
        <button
          onClick={logout}
          title={t('nav.logout')}
          style={{ color: 'var(--text-muted)', cursor: 'pointer', padding: '0.2rem', display: 'flex' }}
        >
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  );
};
