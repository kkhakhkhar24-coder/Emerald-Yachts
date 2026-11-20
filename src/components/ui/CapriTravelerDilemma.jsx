import React from 'react';
import FadeIn from './FadeIn';
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

const CapriTravelerDilemma = ({ title, subtitle, priorities = [] }) => {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-slate-100">

      {/* ─── TOP EDITORIAL HEADER STRIP ─── */}
      <div className="bg-[#0a192f] py-16 md:py-20 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-semibold mb-4">
              <span className="w-8 h-px bg-[#c9a15c]"></span>
              The Priority Decision Guide
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-[1.15] max-w-xl">
              {title}
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-300 max-w-md leading-relaxed md:text-right font-light">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ─── MAIN CONTENT: 4 SCENARIO EDITORIAL ROWS ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="divide-y divide-slate-100">
          {priorities.map((priority, idx) => {
            const isEven = idx % 2 === 0;
            const num = String(idx + 1).padStart(2, '0');
            return (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className={`group flex flex-col lg:flex-row items-stretch py-8 md:py-10 px-4 sm:px-6 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 gap-6 lg:gap-8 ${isEven ? '' : 'bg-slate-50/40'}`}>

                  {/* Left Column: Number + Statement */}
                  <div className="lg:w-5/12 flex items-start gap-5">
                    <span className="text-4xl sm:text-5xl font-display text-slate-200 group-hover:text-[#c9a15c]/50 transition-colors duration-300 leading-none shrink-0 select-none font-semibold">
                      {num}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#c9a15c] font-bold block mb-1">
                        Scenario {idx + 1}
                      </span>
                      <p className="text-lg sm:text-xl font-display text-slate-900 leading-snug font-medium">
                        "{priority.statement}"
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Explanation + Recommendation */}
                  <div className="lg:w-7/12 flex flex-col justify-between space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#c9a15c] transition-colors duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:text-slate-950 transition-colors" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                        {priority.description}
                      </p>
                    </div>

                    {priority.recommendation && (
                      <div className="ml-11 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200/80 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>Recommendation:</strong> {priority.recommendation}</span>
                      </div>
                    )}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* ─── BOTTOM VERDICT BANNER ─── */}
      <FadeIn direction="up" delay={0.2}>
        <div className="relative overflow-hidden bg-[#0a192f] border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="block text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-semibold mb-2 font-mono">
                The Luxury Takeaway
              </span>
              <p className="text-xl md:text-2xl font-display text-white max-w-3xl leading-relaxed font-normal">
                Treat the Blue Grotto as a <em className="text-[#c9a15c] not-italic font-medium">delightful spontaneous bonus</em> rather than a non-negotiable anchor—and your Capri journey will be effortless.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#content"
                className="inline-flex items-center gap-2 bg-[#c9a15c] text-slate-950 font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-amber-400 transition-colors duration-300 shadow-md shadow-amber-500/20"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

export default CapriTravelerDilemma;
