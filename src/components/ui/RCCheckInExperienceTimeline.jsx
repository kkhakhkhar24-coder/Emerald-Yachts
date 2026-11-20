import React from 'react';
import { 
  Clock, 
  CheckCircle2, 
  PlusCircle, 
  Sparkles, 
  Lightbulb, 
  Compass
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCCheckInExperienceTimeline = ({ onboardExperience }) => {
  if (!onboardExperience) return null;

  const { 
    eyebrow, 
    title, 
    description, 
    image, 
    timeline = [], 
    maximizeStrategies = [] 
  } = onboardExperience;

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <span className="text-[#c9a15c] font-bold tracking-[0.25em] uppercase text-xs block mb-3">
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

        {/* Featured Visual Embarkation Day Hero Banner */}
        {image && (
          <div className="max-w-5xl mx-auto mb-14 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="relative aspect-[16/6] w-full">
              <MasterImage
                src={image}
                alt="First 6 Hours Onboard Royal Caribbean"
                placeholderLabel="FIRST 6 HOURS ONBOARD EMBARKATION DAY"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="text-[#c9a15c] text-xs font-bold font-mono uppercase tracking-widest block mb-1">
                    Day 1 Master Schedule
                  </span>
                  <p className="text-white text-lg sm:text-xl font-display">
                    Navigating Your First Afternoon Onboard With Ease
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vertical Timeline with Side-by-Side Free vs Extra */}
        <div className="mb-20 space-y-5 max-w-5xl mx-auto">
          {timeline.map((slot, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-5">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 bg-navy-950 text-[#c9a15c] rounded-full text-xs font-bold font-mono">
                    {slot.time}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-medium text-navy-950">
                    {slot.title || slot.activity}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1 text-[#2e6f77]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Free vs
                  </span>
                  <span className="flex items-center gap-1 text-[#c9a15c]">
                    <PlusCircle className="w-3.5 h-3.5" /> Extra
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 100% Free Option */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 mb-1.5 font-display">
                    <CheckCircle2 className="w-4 h-4 text-[#2e6f77] shrink-0" />
                    <span>Complimentary (Included)</span>
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed pl-6">
                    {slot.freeOption}
                  </p>
                </div>

                {/* Optional Extra Option */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-navy-950 mb-1.5 font-display">
                    <PlusCircle className="w-4 h-4 text-[#c9a15c] shrink-0" />
                    <span>Optional Upgrade / Extra</span>
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed pl-6">
                    {slot.extraOption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Maximize Strategies Grid (6 Cards: 3x2 or 2x3) */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white border border-[#c9a15c]/30 text-[#c9a15c] mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-[#c9a15c]" />
              <span>Expert Onboard Hacks</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-navy-950">
              6 Ways to Maximize Value Without Overspending
            </h3>
            <p className="text-sm text-slate-500 mt-2 font-light">
              Field-tested cruise strategies to enjoy premium perks while keeping your folio zeroed out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maximizeStrategies.map((strategy, idx) => (
              <div 
                key={idx} 
                className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Strategy Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <MasterImage
                    src={strategy.image}
                    alt={strategy.title}
                    placeholderLabel={`ONBOARD SAVINGS HACK 0${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-navy-950/80 backdrop-blur-md text-[#c9a15c] flex items-center justify-center font-bold text-xs border border-white/10">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg font-display font-medium text-navy-950 mb-2 leading-snug">
                      {strategy.title.replace(/^\d+\.\s*/, '')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RCCheckInExperienceTimeline;
