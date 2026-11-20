import React from 'react';
import { Compass, Sparkles, Ship, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';

/**
 * WhichCruiseDecisionFramework
 * Interactive quick archetype matching framework for Royal Caribbean cruises.
 */
const WhichCruiseDecisionFramework = ({ archetypes = [] }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-navy-800" />
            <span>Strategic Matching Matrix</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            The Royal Caribbean <span className="italic text-navy-800">Decision Blueprint</span>
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Are you a ship-first cruiser who prioritizes onboard innovation, or a destination-first cruiser focused on scenic ports? Find your instant match below.
          </p>
        </div>

        {/* 6 Archetype Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archetypes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-navy-950 bg-white border border-slate-200 px-3.5 py-1 rounded-full shadow-sm">
                    Archetype 0{idx + 1}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#c9a15c]" />
                </div>

                <h3 className="font-serif text-2xl font-normal text-navy-950">
                  {item.archetype}
                </h3>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#c9a15c] block">
                    Recommended Ship:
                  </span>
                  <p className="font-serif text-base font-medium text-navy-950">
                    {item.recommendation}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Why This Matches You:
                </span>
                <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {item.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhichCruiseDecisionFramework;
