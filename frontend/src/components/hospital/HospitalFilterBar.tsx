import React from 'react';
import { Search, MapPin, ShieldAlert, Loader2, X, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { HospitalFilters } from '../../types';

interface HospitalFilterBarProps {
  filters: HospitalFilters;
  onChange: (filters: HospitalFilters) => void;
  onUseLocation: () => void;
  isLocating?: boolean;
  hasUserLocation?: boolean;
  onResetLocation?: () => void;
}

export const HospitalFilterBar: React.FC<HospitalFilterBarProps> = ({
  filters,
  onChange,
  onUseLocation,
  isLocating = false,
  hasUserLocation = false,
  onResetLocation,
}) => {
  const { t } = useTranslation();

  const filterPills = [
    { label: t('hospital.filter.all', 'All'), value: 'All' },
    { label: t('hospital.filter.govt', 'Government'), value: 'Government' },
    { label: t('hospital.filter.private', 'Private'), value: 'Private' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Search Input Row */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <div
          style={{
            flex: 1,
            minWidth: '240px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: 'var(--bg)',
            borderRadius: 'var(--radius-lg)',
            padding: '0.65rem 1rem',
            border: '1px solid var(--border)',
          }}
        >
          <Search size={18} color="var(--text-muted)" />
          <input
            id="hospital-search-input"
            type="text"
            value={filters.query || ''}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
            placeholder={t(
              'hospital.filter.searchPlaceholder',
              'Search hospital name, specialty (e.g. Cardiology, Trauma), or district...'
            )}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '0.9rem',
              color: 'var(--text-primary)',
            }}
          />
        </div>

        {/* GPS Location Button */}
        {hasUserLocation ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#EFF6FF',
              border: '1.5px solid #3B82F6',
              borderRadius: 'var(--radius-lg)',
              padding: '0.35rem 0.65rem 0.35rem 0.85rem',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#1D4ED8', fontSize: '0.85rem', fontWeight: 700 }}>
              <Navigation size={15} color="#2563EB" />
              <span>{t('hospital.filter.locationActive', 'Sorted by Distance')}</span>
            </div>
            {onResetLocation && (
              <button
                onClick={onResetLocation}
                title={t('hospital.filter.clearLocation', 'Clear Location')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        ) : (
          <button
            id="hospital-near-me-btn"
            onClick={onUseLocation}
            disabled={isLocating}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: isLocating ? 'var(--surface-hover)' : 'var(--primary-light)',
              color: isLocating ? 'var(--text-muted)' : 'var(--primary-dark)',
              padding: '0.65rem 1.15rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: isLocating ? 'not-allowed' : 'pointer',
              border: '1px solid var(--primary)',
              transition: 'all 0.2s',
            }}
          >
            {isLocating ? (
              <>
                <Loader2 size={16} className="spin-animation" />
                <span>{t('hospital.filter.locating', 'Finding Location...')}</span>
              </>
            ) : (
              <>
                <MapPin size={16} />
                <span>{t('hospital.filter.nearMe', 'Near Me')}</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Filter Tags & Checkboxes Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {filterPills.map((pill) => {
            const isActive = (filters.type || 'All') === pill.value;
            return (
              <button
                key={pill.value}
                onClick={() => onChange({ ...filters, type: pill.value as any })}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--surface-hover)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? 'none' : '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* 24x7 Emergency Toggle */}
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: filters.openNow ? 'var(--danger-dark)' : 'var(--text-secondary)',
          }}
        >
          <input
            type="checkbox"
            checked={!!filters.openNow}
            onChange={(e) => onChange({ ...filters, openNow: e.target.checked })}
            style={{ width: '16px', height: '16px', accentColor: 'var(--danger)', cursor: 'pointer' }}
          />
          <ShieldAlert size={16} color={filters.openNow ? '#EF4444' : 'var(--text-muted)'} />
          <span>{t('hospital.filter.emergencyOnly', '24x7 Emergency Only')}</span>
        </label>
      </div>
    </div>
  );
};
