import React, { useState } from 'react';
import { Ship, Sparkles, Anchor, Compass, CheckCircle2, ChevronRight, Award, ShieldCheck } from 'lucide-react';

/**
 * RoyalCaribbeanFleetMatrix
 * Interactive fleet overview comparing Icon, Oasis, Quantum, Freedom, and Radiance classes.
 */
const RoyalCaribbeanFleetMatrix = ({ shipClasses = [] }) => {
  const [activeClass, setActiveClass] = useState(0);

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Ship className="w-3.5 h-3.5 text-amber-600" />
            <span>Fleet Architecture Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-6">
            Understanding the <span className="italic text-amber-800">Royal Caribbean Fleet</span>
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Royal Caribbean operates 28 distinctive vessels across 5 primary ship classes. Selecting the right class is the foundational decision of your vacation.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {shipClasses.map((item, idx) => (
            <button
              key={idx}
              type="button"
              aria-pressed={activeClass === idx}
              onClick={() => setActiveClass(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeClass === idx
                  ? 'bg-[#0a192f] text-white shadow-xl scale-105 border border-[#0a192f]'
                  : 'bg-slate-50 text-slate-700 hover:bg-amber-50/60 border border-slate-200 hover:border-amber-300'
              }`}
            >
              <Ship className={`w-4 h-4 ${activeClass === idx ? 'text-[#c9a15c]' : 'text-slate-400'}`} />
              <span>{item.className}</span>
            </button>
          ))}
        </div>

        {/* Class panels — all rendered so every ship class is in the prerendered HTML;
            only the selected one is visible. */}
        {shipClasses.map((shipClass, idx) => (
          <div
            key={idx}
            className={`bg-[#0a192f] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden ${idx === activeClass ? "" : "hidden"}`}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#c9a15c] uppercase tracking-widest block mb-2">
                    {shipClass.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                    {shipClass.className}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {shipClass.vessels.map((v, vIdx) => (
                    <span
                      key={vIdx}
                      className="px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-medium"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                  <span className="text-xs font-sans font-bold text-[#c9a15c] uppercase tracking-wider block">
                    Ideal Traveler Profile:
                  </span>
                  <p className="font-sans text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                    {shipClass.bestFor}
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-400">
                  <span className="text-slate-300 font-bold">Pacing & Atmosphere: </span>
                  {shipClass.pace}
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-4">
                <h4 className="font-serif text-lg font-normal text-[#c9a15c] tracking-wide border-b border-slate-700 pb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c9a15c]" />
                  <span>Signature Class Highlights</span>
                </h4>
                <ul className="space-y-3 font-sans text-sm">
                  {shipClass.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoyalCaribbeanFleetMatrix;
