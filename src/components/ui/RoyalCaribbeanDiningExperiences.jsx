import React from 'react';
import { Utensils, Wine, Key, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * RoyalCaribbeanDiningExperiences
 * Comprehensive guide to Included vs Specialty dining, Deluxe Beverage packages, The Key, and Sea Day planning.
 */
const RoyalCaribbeanDiningExperiences = ({ diningData }) => {
  if (!diningData) return null;

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-600" />
            <span>Onboard Lifestyle & Upgrades</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-6">
            {diningData.title || "Dining, Packages, The Key & Sea Days"}
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            {diningData.summary || "Smart pre-cruise booking strategies to save up to 40% on packages, specialty dining, and onboard perks."}
          </p>
        </div>

        {/* 4 Lifestyle Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {diningData.categories && diningData.categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-amber-700">
                    {idx === 0 ? <Utensils className="w-5 h-5 text-amber-600" /> : idx === 1 ? <Wine className="w-5 h-5 text-amber-700" /> : idx === 2 ? <Key className="w-5 h-5 text-amber-600" /> : <Calendar className="w-5 h-5 text-amber-800" />}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-navy-950">
                    {cat.name}
                  </h3>
                </div>

                {cat.included && (
                  <div className="space-y-1">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500 block">
                      Complimentary Inclusions:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {cat.included}
                    </p>
                  </div>
                )}

                {(cat.specialty || cat.deluxePackage || cat.features) && (
                  <div className="space-y-1 pt-2 border-t border-slate-200/60">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-amber-800 block">
                      {cat.specialty ? 'Specialty Venues:' : cat.deluxePackage ? 'Deluxe Package Details:' : 'Signature Perks:'}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      {cat.specialty || cat.deluxePackage || cat.features}
                    </p>
                  </div>
                )}
              </div>

              {cat.tip && (
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-xs text-amber-950 leading-relaxed font-medium">
                    <span className="font-bold">Insider Tip: </span>
                    {cat.tip}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoyalCaribbeanDiningExperiences;
