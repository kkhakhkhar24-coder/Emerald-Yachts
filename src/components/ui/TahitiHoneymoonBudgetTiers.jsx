import React from 'react';
import { Sparkles, CheckCircle2, DollarSign, Heart } from 'lucide-react';

const TahitiHoneymoonBudgetTiers = ({ tiers = [] }) => {
  if (!tiers || !tiers.length) return null;

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Investment Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-white mb-4 leading-tight">
            Tahiti Honeymoon Costs & Budget Tiers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Understand where your investment goes across 7 to 10-night French Polynesian itineraries—from balanced premium packages to ultra-exclusive private atolls.
          </p>
        </div>

        {/* 3 Budget Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 shadow-2xl ${
                idx === 1
                  ? 'bg-gradient-to-b from-navy-900 to-[#0d203b] border-gold-400/50 shadow-gold-950/20 relative lg:-translate-y-2'
                  : 'bg-navy-900 border-navy-800'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  Most Popular Honeymoon Choice
                </div>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-bold mb-2">
                  {tier.tier}
                </h3>

                <div className="text-2xl sm:text-3xl font-display text-gold-400 font-bold mb-4">
                  {tier.range}
                </div>

                <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Accommodations:
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                    {tier.accommodations}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Typical Inclusions:
                  </span>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{tier.inclusions}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400 block mb-1">
                  Ideal For:
                </span>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {tier.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TahitiHoneymoonBudgetTiers;
