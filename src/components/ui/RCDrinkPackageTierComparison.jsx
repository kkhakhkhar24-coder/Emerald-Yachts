import React, { useState } from 'react';
import { 
  Wine, 
  Coffee, 
  GlassWater, 
  Sparkles, 
  Check, 
  X, 
  AlertCircle
} from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  'deluxe': Wine,
  'refreshment': Coffee,
  'soda': GlassWater,
  'water': GlassWater
};

const RCDrinkPackageTierComparison = ({ tierComparison, tierImages, hideImages = false }) => {
  if (!tierComparison) return null;

  const { eyebrow, title, description, tiers, packages } = tierComparison;
  const items = tiers || packages || [];

  const tierStyles = {
    'deluxe': {
      border: 'border-[#c9a15c]/40',
      badge: 'bg-white text-[#c9a15c] border-[#c9a15c]/30',
      label: 'DELUXE BEVERAGE PACKAGE'
    },
    'refreshment': {
      border: 'border-blue-500/40',
      badge: 'bg-blue-50 text-blue-900 border-blue-200',
      label: 'ROYAL REFRESHMENT PACKAGE'
    },
    'soda': {
      border: 'border-indigo-500/40',
      badge: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      label: 'CLASSIC SODA PACKAGE'
    },
    'water': {
      border: 'border-emerald-500/40',
      badge: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      label: 'BOTTLED WATER PACKAGE'
    }
  };

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <span className="text-gold-400 font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            {title}
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* 4 Package Cards Grid (4 Cards: 4x1 or 2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
          {items.map((tier) => {
            const styles = tierStyles[tier.id] || tierStyles['deluxe'];
            const Icon = iconMap[tier.id] || Wine;

            return (
              <div
                key={tier.id}
                className={`bg-white rounded-3xl border-2 ${styles.border} shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                {/* Visual Card Header Placeholder */}
                {!hideImages && (
                  <div className="relative aspect-[16/8] w-full overflow-hidden">
                    <MasterImage
                      src={(tierImages && tierImages[tier.id]) || null}
                      alt={tier.name}
                      placeholderLabel={`PACKAGE: ${styles.label}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${styles.badge}`}>
                        {tier.badge}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-normal text-navy-950 mb-1">
                      {tier.name}
                    </h3>

                    <div className="text-sm font-bold font-mono text-navy-900 pb-4 border-b border-slate-100 mb-4">
                      {tier.price}
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-2 mb-4">
                      <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                        Included Beverages:
                      </span>
                      {tier.inclusions.map((inc, incIdx) => (
                        <div key={incIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-light">{inc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Exclusions */}
                    {tier.exclusions && tier.exclusions.length > 0 && (
                      <div className="space-y-1.5 pb-4 border-b border-slate-100 mb-4">
                        <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                          Exclusions:
                        </span>
                        {tier.exclusions.map((exc, excIdx) => (
                          <div key={excIdx} className="flex items-start gap-2 text-xs text-slate-500 leading-snug">
                            <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            <span className="font-light">{exc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2026 Rule Note */}
                  {tier.ruleNote && (
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2 mt-2">
                      <AlertCircle className="w-3.5 h-3.5 text-[#c9a15c] shrink-0 mt-0.5" />
                      <span className="font-light">{tier.ruleNote}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RCDrinkPackageTierComparison;
