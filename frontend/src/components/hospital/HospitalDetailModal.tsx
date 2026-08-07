import React from 'react';
import {
  X,
  MapPin,
  Phone,
  Star,
  ShieldCheck,
  Bed,
  Activity,
  CheckCircle2,
  Navigation,
  Share2,
} from 'lucide-react';
import type { Hospital } from '../../types';

interface HospitalDetailModalProps {
  hospital: Hospital | null;
  onClose: () => void;
}

export const HospitalDetailModal: React.FC<HospitalDetailModalProps> = ({
  hospital,
  onClose,
}) => {
  if (!hospital) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--radius-2xl)',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border)',
          padding: '1.75rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            padding: '0.4rem',
            borderRadius: '50%',
            backgroundColor: 'var(--surface-hover)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
          }}
        >
          <X size={20} />
        </button>

        {/* Hospital Header */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                backgroundColor: hospital.type === 'Government' ? 'var(--primary-light)' : '#EFF6FF',
                color: hospital.type === 'Government' ? 'var(--primary-dark)' : '#1D4ED8',
                padding: '0.2rem 0.6rem',
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
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                }}
              >
                <ShieldCheck size={16} />
                <span>Odisha Health Verified</span>
              </span>
            )}
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>
            {hospital.name}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <MapPin size={16} color="var(--primary)" />
            <span>{hospital.address}</span>
          </div>
        </div>

        {/* Live Bed Availability Grid */}
        {hospital.beds && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
              <Bed size={18} color="var(--primary)" />
              <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Live Bed Availability
              </h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.85rem',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                  {hospital.beds.icu}
                </span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                  ICU Beds
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.85rem',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#3B82F6' }}>
                  {hospital.beds.oxygen}
                </span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                  Oxygen Beds
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.85rem',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                }}
              >
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#8B5CF6' }}>
                  {hospital.beds.general}
                </span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                  General Beds
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Specialties */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: '0 0 0.6rem 0', color: 'var(--text-primary)' }}>
            Departments & Specialties
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {hospital.specialties.map((spec) => (
              <span
                key={spec}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary-dark)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Available Services */}
        {hospital.services && hospital.services.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: '0 0 0.6rem 0', color: 'var(--text-primary)' }}>
              Facilities & Diagnostic Services
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {hospital.services.map((serv, idx) => {
                const serviceName = typeof serv === 'string' ? serv : serv.name;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={15} color="#10B981" />
                    <span>{serviceName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <a
            href={`tel:${hospital.phone}`}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '0.75rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
            }}
          >
            <Phone size={17} />
            <span>Call {hospital.phone}</span>
          </a>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${hospital.coordinates.lat},${hospital.coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--surface-hover)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <Navigation size={17} color="var(--primary)" />
            <span>Navigate</span>
          </a>
        </div>
      </div>
    </div>
  );
};
