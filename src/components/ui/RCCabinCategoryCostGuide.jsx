import React from 'react';
import { 
  Bed, 
  Maximize2, 
  Users, 
  Check, 
  Sparkles, 
  ShieldCheck,
  DollarSign
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCCabinCategoryCostGuide = ({ cabinGuide, images }) => {
  if (!cabinGuide) return null;

  const { eyebrow, title, description, categories = [] } = cabinGuide;

  const categoryStyles = {
    'interior': {
      border: 'border-emerald-500/30',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      label: 'INTERIOR STATEROOM'
    },
    'oceanview': {
      border: 'border-blue-500/30',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      label: 'OCEAN VIEW STATEROOM'
    },
    'balcony': {
      border: 'border-indigo-500/40',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      label: 'BALCONY STATEROOM'
    },
    'suites': {
      border: 'border-[#c9a15c]/40',
      badge: 'bg-white text-[#c9a15c] border-[#c9a15c]/30',
      label: 'ROYAL SUITE CLASS'
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
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

        {/* 4 Cabin Category Cards (4 Cards: 2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {categories.map((cat) => {
            const styles = categoryStyles[cat.id] || categoryStyles['balcony'];

            return (
              <div
                key={cat.id}
                className={`rounded-3xl border-2 ${styles.border} bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
              >
                {/* Visual Cabin Header Banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <MasterImage
                    src={cat.image || (images && images[cat.id])}
                    alt={cat.type}
                    placeholderLabel={`CABIN CATEGORY: ${styles.label}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${styles.badge}`}>
                      {cat.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500 flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      {cat.squareFeet}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-navy-950 mb-1">
                    {cat.type}
                  </h3>
                  
                  <div className="text-base sm:text-lg font-bold font-serif text-navy-900 mb-5">
                    {cat.priceRange}
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-white rounded-2xl border border-slate-200/80">
                      <span className="text-slate-400 font-bold block mb-0.5 text-[11px] uppercase tracking-wider">
                        Best Suited For:
                      </span>
                      <p className="text-slate-700 font-light">{cat.bestFor}</p>
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-slate-200/80">
                      <span className="text-slate-400 font-bold block mb-0.5 text-[11px] uppercase tracking-wider">
                        The Upgrade Verdict:
                      </span>
                      <p className="text-slate-800 font-medium">{cat.verdict}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RCCabinCategoryCostGuide;
