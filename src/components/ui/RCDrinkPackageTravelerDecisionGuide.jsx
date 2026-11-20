import React from 'react';
import { 
  Users, 
  Wine, 
  Coffee, 
  Crown, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCDrinkPackageTravelerDecisionGuide = ({ travelerDecisionGuide, images, hideImages = false }) => {
  if (!travelerDecisionGuide) return null;

  const { eyebrow, title, description, personas = [] } = travelerDecisionGuide;

  const colorStyles = {
    'emerald': {
      border: 'border-emerald-500/40',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      label: 'SOCIAL COCKTAILER'
    },
    'amber': {
      border: 'border-[#c9a15c]/40',
      badge: 'bg-white text-[#c9a15c] border-[#c9a15c]/30',
      label: 'WINE & FINE DINING'
    },
    'rose': {
      border: 'border-rose-500/40',
      badge: 'bg-rose-100 text-rose-800 border-rose-300',
      label: 'MODERATE CRUISER'
    },
    'blue': {
      border: 'border-blue-500/40',
      badge: 'bg-blue-100 text-blue-800 border-blue-300',
      label: 'NON-ALCOHOLIC SIPS'
    },
    'indigo': {
      border: 'border-indigo-500/40',
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      label: 'FAMILY & TEENS'
    },
    'purple': {
      border: 'border-purple-500/40',
      badge: 'bg-purple-100 text-purple-800 border-purple-300',
      label: 'STAR CLASS SUITE GUEST'
    }
  };

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

        {/* 6 Persona Decision Cards Grid (6 Cards: 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {personas.map((persona, idx) => {
            const verdictText = (persona.verdict || '').toLowerCase();
            const isBuy = verdictText.includes('buy') || verdictText.includes('included') || verdictText.includes('mandatory') || verdictText.includes('required');
            const isSkip = verdictText.includes('skip') || verdictText.includes('not needed');

            const badgeClasses = isBuy
              ? 'bg-ice-50 text-[#2e6f77] border border-[#2e6f77]/30'
              : isSkip
              ? 'bg-ice-50 text-slate-700 border border-slate-200'
              : 'bg-ice-50 text-[#c9a15c] border border-[#c9a15c]/30';

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header Banner */}
                {!hideImages && (
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                    <MasterImage
                      src={persona.image || (images && images[idx])}
                      alt={persona.profile}
                      placeholderLabel={`DECISION: ${persona.profile.toUpperCase()}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-ice-50 text-slate-700 border border-slate-200">
                        Profile 0{idx + 1}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeClasses}`}>
                        {persona.verdict}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-normal text-navy-950 mb-2 leading-snug">
                      {persona.profile}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {persona.rationale}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RCDrinkPackageTravelerDecisionGuide;
