import React from 'react';
import { DollarSign, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * RoyalCaribbeanBudgetFramework
 * 3-Bucket Budget Framework and 6 Critical Mistakes to Avoid.
 */
const RoyalCaribbeanBudgetFramework = ({ budgetData, mistakes = [] }) => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* 1. Three Bucket Budget Method */}
        {budgetData && (
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 text-xs font-semibold tracking-wider uppercase mb-3">
                <DollarSign className="w-3.5 h-3.5 text-navy-800" />
                <span>Financial Planning Architecture</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
                {budgetData.title || "The Three-Bucket Cruise Budget Method"}
              </h2>
              <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
                {budgetData.description || "Avoid unexpected onboard expenses with Angela Hughes' transparent three-tier financial planning system."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {budgetData.buckets && budgetData.buckets.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-ice-50 flex items-center justify-center text-navy-800 group-hover:bg-navy-950 group-hover:text-white transition-colors duration-300">
                        <span className="font-serif text-lg font-bold">0{bIdx + 1}</span>
                      </div>
                      <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-400">
                        Budget Tier
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-navy-950">
                      {b.bucket}
                    </h3>

                    <div className="w-10 h-px bg-slate-200 my-4 group-hover:bg-[#c9a15c] transition-colors duration-300" />

                    <ul className="space-y-3 pt-2">
                      {b.items && b.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-light">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. The 6 Biggest Booking Pitfalls (Harmonized with Luxury Editorial Design) */}
        {mistakes && mistakes.length > 0 && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 text-xs font-semibold tracking-wider uppercase mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Advisor Pitfall Warnings</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
                The 6 Biggest <span className="italic text-navy-800">Booking Pitfalls</span>
              </h2>
              <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
                Avoid the common errors that cost cruisers thousands of dollars and unnecessary vacation stress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mistakes.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-ice-50 flex items-center justify-center text-navy-800 group-hover:bg-navy-950 group-hover:text-white transition-colors duration-300">
                        <span className="font-serif text-lg font-bold">{mIdx + 1}</span>
                      </div>
                      <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest">
                        Pitfall #{mIdx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-navy-950">
                      {m.mistake}
                    </h3>

                    <div className="w-10 h-px bg-slate-200 my-4 group-hover:bg-[#c9a15c] transition-colors duration-300" />

                    {/* Consequence Container */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500 block mb-1">
                        The Consequence:
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {m.consequence}
                      </p>
                    </div>
                  </div>

                  {/* Solution / Expert Fix */}
                  <div className="p-4 rounded-xl bg-ice-50/80 border border-slate-200/80">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-navy-950 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-navy-800" />
                      <span>The Advisor Solution:</span>
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                      {m.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoyalCaribbeanBudgetFramework;

