import React, { useState } from 'react';
import { Ship, Anchor, CheckCircle2, ChevronRight, Gauge, Layers } from 'lucide-react';

/**
 * WhichCruiseShipClassComparison
 * Detailed comparison cards for Icon Class, Utopia, Oasis, Quantum, and Radiance classes.
 */
const WhichCruiseShipClassComparison = ({ shipClasses = [], comparisons = shipClasses }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#c9a15c] text-xs font-semibold tracking-wider uppercase mb-3">
            <Gauge className="w-3.5 h-3.5 text-[#c9a15c]" />
            <span>Head-to-Head Ship Evaluation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
            Comparing <span className="italic text-amber-200">Royal Caribbean Ship Classes</span>
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From 250,000-ton floating mega-resorts with 8 distinct neighborhoods to panoramic ocean-facing mid-size ships.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {comparisons.map((c, idx) => (
            <button
              key={idx}
              type="button"
              aria-pressed={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-white text-navy-950 shadow-xl scale-105 font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {c.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Class panels — all rendered so every ship class is in the prerendered HTML;
            only the selected one is visible. */}
        {comparisons.map((c, idx) => (
          <div
            key={idx}
            className={`bg-slate-800/80 rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl backdrop-blur-sm ${idx === activeTab ? "" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#c9a15c] uppercase tracking-widest block mb-2">
                    {c.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                    {c.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-2">
                    {c.specs}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 space-y-2">
                  <span className="text-xs font-sans font-bold text-[#c9a15c] uppercase tracking-wider block">
                    Best Match For:
                  </span>
                  <p className="font-sans text-sm text-slate-200 font-light leading-relaxed">
                    {c.idealFor}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
                <h4 className="font-serif text-lg font-normal text-[#c9a15c] tracking-wide border-b border-slate-800 pb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#c9a15c]" />
                  <span>Key Defining Features</span>
                </h4>
                <ul className="space-y-3 font-sans text-xs sm:text-sm">
                  {c.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
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

export default WhichCruiseShipClassComparison;
