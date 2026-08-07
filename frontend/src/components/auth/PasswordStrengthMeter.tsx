import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface PasswordStrengthMeterProps {
  password: string;
}

export const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
  const calculateStrength = (pass: string) => {
    let score = 0;
    if (!pass) return { score, color: 'bg-slate-700', label: 'Too short' };

    if (pass.length >= 8) score += 1;
    if (pass.match(/[a-z]/)) score += 1;
    if (pass.match(/[A-Z]/)) score += 1;
    if (pass.match(/[0-9]/)) score += 1;
    if (pass.match(/[^a-zA-Z0-9]/)) score += 1;

    let color = 'bg-slate-700';
    let label = 'Too short';

    if (score <= 2) {
      color = 'bg-rose-500';
      label = 'Weak';
    } else if (score === 3 || score === 4) {
      color = 'bg-amber-500';
      label = 'Good';
    } else if (score >= 5) {
      color = 'bg-emerald-500';
      label = 'Strong';
    }

    return { score, color, label };
  };

  const { score, color, label } = calculateStrength(password);

  const criteria = [
    { label: '8+ characters', met: password.length >= 8 },
    { label: 'Uppercase & lowercase', met: !!password.match(/[A-Z]/) && !!password.match(/[a-z]/) },
    { label: 'Number', met: !!password.match(/[0-9]/) },
    { label: 'Special character', met: !!password.match(/[^a-zA-Z0-9]/) },
  ];

  return (
    <div className="mt-2 flex flex-col gap-2">
      <div className="flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
        <span>Password Strength</span>
        <span className={score === 0 ? 'text-slate-500' : color.replace('bg-', 'text-')}>{label}</span>
      </div>

      <div className="flex gap-1 h-1.5 rounded-full overflow-hidden bg-slate-800">
        {[1, 2, 3, 4, 5].map((level) => (
          <motion.div
            key={level}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`h-full flex-1 ${score >= level ? color : 'bg-transparent'} transition-colors duration-300`}
          />
        ))}
      </div>

      {password.length > 0 && (
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          {criteria.map((c, i) => (
            <div key={i} className="flex items-center gap-1.5">
              {c.met ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <X className="w-3 h-3 text-slate-600" />
              )}
              <span className={`text-[0.65rem] ${c.met ? 'text-slate-300' : 'text-slate-500'}`}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
