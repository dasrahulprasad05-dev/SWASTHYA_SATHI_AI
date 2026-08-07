import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, ShieldCheck, Navigation, Info, Clock } from 'lucide-react';
import type { Hospital } from '../../types';

interface HospitalCardProps {
  hospital: Hospital;
  onSelect: (hospital: Hospital) => void;
  isSelected?: boolean;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({
  hospital,
  onSelect,
  isSelected,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={() => onSelect(hospital)}
      className={isSelected ? "glass-accent" : "glass-panel"}
      style={{
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        border: isSelected ? '2px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: isSelected ? 'var(--shadow-md)' : '0 4px 24px -1px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        transition: 'border 0.2s',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                backgroundColor: hospital.type === 'Government' ? 'var(--primary-light)' : '#EFF6FF',
                color: hospital.type === 'Government' ? 'var(--primary-dark)' : '#1D4ED8',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
              }}
            >
              {hospital.type}
            </span>
            {hospital.isVerified && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                }}
              >
                <ShieldCheck size={14} />
                <span>Verified</span>
              </span>
            )}
            {hospital.isOpen24x7 && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#DC2626',
                  backgroundColor: '#FEE2E2',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '4px',
                }}
              >
                <Clock size={12} />
                <span>24x7</span>
              </span>
            )}
          </div>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
            {hospital.name}
          </h3>
        </div>

        {/* Rating */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          <Star size={14} fill="#F59E0B" color="#F59E0B" />
          <span>{hospital.rating}</span>
        </div>
      </div>

      {/* Address & Distance */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
        <MapPin size={15} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--primary)' }} />
        <span>{hospital.address}</span>
        {hospital.distance && (
          <span style={{ fontWeight: 700, color: 'var(--primary-dark)', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
            {hospital.distance} km
          </span>
        )}
      </div>

      {/* Specialties Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {hospital.specialties.slice(0, 3).map((spec) => (
          <span
            key={spec}
            style={{
              fontSize: '0.72rem',
              fontWeight: 500,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: 'var(--text-secondary)',
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-light)',
            }}
          >
            {spec}
          </span>
        ))}
        {hospital.specialties.length > 3 && (
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
            +{hospital.specialties.length - 3} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          paddingTop: '0.6rem',
          borderTop: '1px solid var(--border-light)',
        }}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:${hospital.phone}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            padding: '0.45rem 0',
            borderRadius: 'var(--radius)',
            fontSize: '0.8rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <Phone size={14} color="var(--primary)" />
          <span>Call</span>
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(hospital);
          }}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            padding: '0.45rem 0',
            borderRadius: 'var(--radius)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Info size={14} />
          <span>Details</span>
        </motion.button>
      </div>
    </motion.div>
  );
};
