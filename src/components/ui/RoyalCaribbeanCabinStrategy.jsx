import React from 'react';
import { BedDouble, Crown, Eye, Compass, ShieldAlert, Check, Layers } from 'lucide-react';

/**
 * RoyalCaribbeanCabinStrategy
 * Cabin & Suite tiers, Royal Suite Class perks, and crucial deck location rules.
 */
const RoyalCaribbeanCabinStrategy = ({ cabinData }) => {
  if (!cabinData) return null;

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <BedDouble className="w-3.5 h-3.5 text-amber-600" />
            <span>Accommodations Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-6">
            {cabinData.title || "Choosing the Right Cabin or Suite"}
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            {cabinData.description || "From interior cabins with real-time digital ocean views to multi-level Royal Lofts with personal Genies, select the exact tier that elevates your trip."}
          </p>
        </div>

        {/* 3 Stateroom Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cabinData.tiers && cabinData.tiers.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700">
                    {idx === 0 ? <Crown className="w-5 h-5 text-amber-600" /> : idx === 1 ? <Eye className="w-5 h-5 text-amber-700" /> : <Layers className="w-5 h-5 text-amber-800" />}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">Tier {idx + 1}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-navy-950 group-hover:text-amber-800 transition-colors">
                  {t.tier}
                </h3>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-sans font-bold uppercase tracking-wider text-amber-800 block">
                    Key Inclusions & Perks:
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {t.perks}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Advisor Recommendation:
                </span>
                <p className="font-sans text-xs text-slate-700 font-light leading-relaxed">
                  {t.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Location Rules Grid */}
        <div className="rounded-3xl bg-[#0a192f] text-white p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-[#c9a15c] uppercase tracking-widest block mb-2">
              CRITICAL LOGISTICS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              The 4 Golden Rules of Cabin Location
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabinData.locationRules && cabinData.locationRules.map((rule, rIdx) => (
              <div
                key={rIdx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#c9a15c]/20 text-[#c9a15c] border border-[#c9a15c]/40 font-mono text-xs font-bold flex items-center justify-center">
                    {rIdx + 1}
                  </span>
                  <h4 className="font-serif text-base font-medium text-white">
                    {rule.rule}
                  </h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {rule.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalCaribbeanCabinStrategy;
