import React from 'react';
import { 
  Scale, 
  Check, 
  Ship, 
  Crown, 
  Sparkles, 
  DollarSign, 
  ShieldCheck,
  Award
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCCostVsLuxuryValueComparison = ({ rcVsLuxury, bannerImage, comparisonImages }) => {
  if (!rcVsLuxury) return null;

  const { eyebrow, title, description, comparisonPoints = [], verdict } = rcVsLuxury;

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

        {/* Featured Visual Comparison Banner */}
        <div className="max-w-5xl mx-auto mb-14 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <div className="relative aspect-[16/6] w-full">
            <MasterImage
              src={bannerImage || null}
              alt="Royal Caribbean vs Ultra-Luxury Cruises"
              placeholderLabel="ROYAL CARIBBEAN MEGA-SHIP VS. ULTRA-LUXURY YACHT COMPARISON"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Master Side-by-Side Comparison Cards (6 Cards / Dimension blocks) */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {comparisonPoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Visual Header Placeholder for this Comparison Category */}
              <div className="relative aspect-[16/6] w-full overflow-hidden">
                <MasterImage
                  src={(comparisonImages && comparisonImages[idx]) || null}
                  alt={point.category}
                  placeholderLabel={`COMPARISON CATEGORY 0${idx + 1}: ${point.category.toUpperCase()}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80">
                  <span className="w-8 h-8 rounded-xl bg-navy-950 text-[#c9a15c] font-mono text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-display font-normal text-navy-950">
                    {point.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Royal Caribbean Column */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 font-display">
                        <Ship className="w-4 h-4 text-navy-800" />
                        Royal Caribbean (Contemporary / Mega-Ship)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                        {point.royalCaribbean}
                      </p>
                    </div>
                  </div>

                  {/* Ultra-Luxury Lines Column */}
                  <div className="p-6 rounded-2xl bg-white border border-[#c9a15c]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c9a15c] mb-3 font-display">
                        <Crown className="w-4 h-4 text-[#c9a15c]" />
                        Ultra-Luxury (Regent, Silversea, Explora)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 font-light leading-relaxed">
                        {point.luxuryLines}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Angela Hughes Financial Verdict Banner */}
        {verdict && (
          <div className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl bg-navy-950 text-white shadow-2xl relative overflow-hidden border border-navy-900">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#c9a15c] text-navy-950 flex items-center justify-center shrink-0 shadow-md mt-1">
                <Award className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c9a15c]">
                  Angela Hughes' Value Verdict:
                </span>
                <p className="font-sans text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  {verdict}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RCCostVsLuxuryValueComparison;
