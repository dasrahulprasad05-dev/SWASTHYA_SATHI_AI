import React from 'react';
import { motion } from 'framer-motion';

export const TrustedSources: React.FC = () => {
  const sources = [
    { name: 'World Health Organization', short: 'WHO', src: '/logos/who.png', neon: 'rgba(14, 165, 233, 0.6)' },
    { name: 'Ministry of Health & Family Welfare', short: 'MoHFW', src: '/logos/mohfw.png', neon: 'rgba(217, 119, 6, 0.6)' },
    { name: 'ICMR', short: 'ICMR', src: '/logos/icmr.png', neon: 'rgba(249, 115, 22, 0.6)' },
    { name: 'National Health Mission', short: 'NHM', src: '/logos/nhm.png', neon: 'rgba(239, 68, 68, 0.6)' },
    { name: 'Odisha Health Department', short: 'Odisha Health', src: '/logos/odisha-health.png', neon: 'rgba(79, 70, 229, 0.6)' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/80 flex flex-col items-center justify-center h-full">
      <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">
        Trusted Information From
      </p>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {sources.map((src) => (
          <motion.div
            key={src.short}
            title={src.name}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              boxShadow: `0 0 25px ${src.neon}`,
              borderColor: src.neon.replace('0.6', '0.8')
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-3 cursor-pointer"
          >
            <img 
              src={src.src} 
              alt={`${src.short} Logo`} 
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
