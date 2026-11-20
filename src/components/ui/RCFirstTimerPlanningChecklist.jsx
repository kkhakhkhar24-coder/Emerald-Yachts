import React from 'react';
import { 
  Calendar, 
  Clock, 
  FileCheck, 
  Ship, 
  Check, 
  Luggage, 
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  Calendar,
  Clock,
  FileCheck,
  Ship
};

const RCFirstTimerPlanningChecklist = ({ planningTimeline }) => {
  if (!planningTimeline) return null;

  const { 
    eyebrow, 
    title, 
    description, 
    phases = [], 
    embarkationMistakes = [], 
    carryOnEssentials = [],
    mistakesImage,
    carryOnImage 
  } = planningTimeline;

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
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

        {/* 4-Phase Stepper Grid (4 Cards: 4x1 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {phases.map((phase, idx) => {
            const Icon = iconMap[phase.icon] || Calendar;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-white text-navy-950 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm"
              >
                {/* Visual Header Image */}
                <div className="relative aspect-[16/8] w-full overflow-hidden">
                  <MasterImage
                    src={phase.image}
                    alt={phase.title}
                    placeholderLabel={`STEP 0${idx + 1}: ${phase.title.toUpperCase()}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-ice-50 text-[#c9a15c] border border-slate-200">
                        Step 0{idx + 1}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-ice-50 text-navy-950 flex items-center justify-center border border-slate-200">
                        <Icon className="w-4 h-4 text-[#c9a15c]" />
                      </div>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-[#c9a15c]">
                      {phase.phase}
                    </span>
                    <h3 className="text-base font-display font-normal mb-4 text-navy-950">
                      {phase.title}
                    </h3>

                    <div className="space-y-2.5">
                      {phase.tasks.map((task, taskIdx) => (
                        <div key={taskIdx} className="flex items-start gap-2 text-xs leading-relaxed">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#2e6f77]" />
                          <span className="text-slate-600 font-light">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-Column Symmetrical Side by Side: Embarkation Mistakes vs Carry-On Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Day 1 Embarkation Mistakes (Left Column) */}
          <div className="bg-ice-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between h-full">
            {/* Visual Pitfalls Header */}
            <div className="relative aspect-[16/7] w-full overflow-hidden">
              <MasterImage
                src={mistakesImage || (phases[0] && phases[0].image)}
                alt="Embarkation Day Pitfalls"
                placeholderLabel="EMBARKATION DAY TERMINAL STRATEGY & PITFALLS"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-navy-950 flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldAlert className="w-6 h-6 text-[#c9a15c]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-normal text-navy-950">Embarkation Day Pitfalls to Avoid</h3>
                  <p className="text-xs text-slate-500 font-light mt-0.5">Crucial strategies for your first 6 hours at the cruise terminal</p>
                </div>
              </div>

              <div className="space-y-3.5 flex-1">
                {embarkationMistakes.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex items-start gap-2 text-navy-950 font-bold text-xs sm:text-sm mb-1 font-display">
                      <span className="w-4 h-4 rounded-full bg-ice-50 text-[#c9a15c] text-[10px] border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">✕</span>
                      {item.mistake}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600 pl-6 font-light">
                      <span className="font-semibold text-[#2e6f77] shrink-0">The Fix:</span>
                      <span>{item.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Must-Pack Carry-On Essentials (Right Column) */}
          <div className="bg-navy-950 text-white border border-navy-900 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between h-full">
            {/* Visual Carry-On Header */}
            <div className="relative aspect-[16/7] w-full overflow-hidden">
              <MasterImage
                src={carryOnImage || (phases[1] && phases[1].image)}
                alt="Carry-On Essentials"
                placeholderLabel="EMBARKATION DAY CARRY-ON ESSENTIALS & VALUABLES"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#c9a15c] text-navy-950 flex items-center justify-center shrink-0">
                  <Luggage className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-normal text-white">Day-One Carry-On Bag</h3>
                  <p className="text-xs text-[#c9a15c] font-light mt-0.5">Keep these with you at all times until staterooms open</p>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                {carryOnEssentials.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-navy-900 border border-navy-800">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-1 font-display">
                      <CheckCircle2 className="w-4 h-4 text-[#2e6f77] shrink-0" />
                      {item.item}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 pl-6 leading-relaxed font-light">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RCFirstTimerPlanningChecklist;
