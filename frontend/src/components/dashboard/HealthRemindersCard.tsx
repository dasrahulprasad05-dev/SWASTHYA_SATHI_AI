import React, { useState } from 'react';
import { Bell, Check, Clock, Plus } from 'lucide-react';
import type { HealthReminder } from '../../types';

interface HealthRemindersCardProps {
  reminders: HealthReminder[];
}

export const HealthRemindersCard: React.FC<HealthRemindersCardProps> = ({
  reminders: initialReminders,
}) => {
  const [reminders, setReminders] = useState<HealthReminder[]>(initialReminders);

  const toggleCompleted = (id: string) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isCompleted: !r.isCompleted } : r))
    );
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Bell size={18} color="var(--primary)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
            Medication & Hydration Reminders
          </h3>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {reminders.map((rem) => (
          <div
            key={rem.id}
            onClick={() => toggleCompleted(rem.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: rem.isCompleted ? 'var(--surface-hover)' : 'var(--bg)',
              border: rem.isCompleted ? '1px dashed var(--border)' : '1px solid var(--border)',
              cursor: 'pointer',
              opacity: rem.isCompleted ? 0.6 : 1,
              transition: 'all 0.2s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: rem.isCompleted ? 'var(--primary)' : 'var(--surface)',
                  border: rem.isCompleted ? 'none' : '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                {rem.isCompleted && <Check size={14} strokeWidth={3} />}
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0,
                    textDecoration: rem.isCompleted ? 'line-through' : 'none',
                  }}
                >
                  {rem.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                  {rem.type.toUpperCase()} • {rem.frequency}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              <Clock size={14} />
              <span>{rem.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
