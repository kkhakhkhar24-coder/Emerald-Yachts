import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  HelpCircle, 
  Check, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Info
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCRealCostCalculator = ({ realCost }) => {
  const [activeTier, setActiveTier] = useState('balanced-explorer');

  if (!realCost) return null;

  const { eyebrow, title, description, formula, tiers = [], worthItFramework = [], budgetMistakes = [] } = realCost;

  const tierStyles = {
    'pure-value': {
      border: 'border-emerald-500/30',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      label: 'PURE VALUE CRUISER'
    },
    'balanced-explorer': {
      border: 'border-blue-500/30',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      label: 'BALANCED EXPLORER'
    },
    'indulgant-vacationer': {
      border: 'border-indigo-500/30',
      badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      label: 'INDULGENT VACATIONER'
    },
    'suite-star-class': {
      border: 'border-[#c9a15c]/40',
      badge: 'bg-[#c9a15c]/10 text-navy-950 border-[#c9a15c]/30',
      label: 'ROYAL SUITE CLASS'
    }
  };

  const selectedTier = tiers.find(t => t.id === activeTier) || tiers[1] || tiers[0];

  return (
    <section id="cost-calculator" className="py-24 bg-ice-50 relative overflow-hidden border-b border-border-light">
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

        {/* Real Cost Formula Banner */}
        {formula && (
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-navy-950 text-white shadow-xl relative overflow-hidden border border-navy-900">
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold tracking-wider uppercase border border-gold-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                The Honest Cruise Pricing Equation
              </div>
              <div className="text-lg sm:text-2xl md:text-3xl font-display font-normal text-gold-400 py-3 border-y border-navy-800 leading-snug">
                {formula.equation}
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
                {formula.explanation}
              </p>
            </div>
          </div>
        )}

        {/* 4 Budget Tiers Interactive Matrix */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-navy-950">4 Realistic Vacation Budget Tiers</h3>
            <p className="text-sm text-slate-500 mt-1 font-light">Select a cruising style to see exact inclusions, add-ons, and 7-night total estimates.</p>
          </div>

          {/* Tier Select Buttons (4 items) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10 bg-white/80 p-2 rounded-full border border-slate-200">
            {tiers.map((tier) => {
              const isSelected = tier.id === selectedTier?.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveTier(tier.id)}
                  className={`px-4 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center text-center ${
                    isSelected
                      ? 'bg-navy-950 text-white shadow-md'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-bold">{tier.tierName.split('(')[0].trim()}</span>
                  <span className={`text-[11px] font-normal mt-0.5 ${isSelected ? 'text-gold-400' : 'text-slate-500'}`}>
                    {tier.targetBudget}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tier cards — all rendered so every budget tier is in the prerendered HTML;
              only the selected one is visible. */}
          {tiers.map((tier) => {
            const tierStyle = tierStyles[tier.id] || tierStyles["balanced-explorer"];
            return (
            <div
              key={tier.id}
              className={`rounded-3xl bg-white border-2 ${tierStyle.border} shadow-xl overflow-hidden max-w-5xl mx-auto transition-all ${tier.id === selectedTier?.id ? "" : "hidden"}`}
            >
              {tier.image && (
                <div className="relative aspect-[16/6] w-full overflow-hidden">
                  <MasterImage
                    src={tier.image}
                    alt={tier.tierName}
                    placeholderLabel={`BUDGET TIER: ${tierStyle.label}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8 sm:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border ${tierStyle.badge}`}>
                      {tier.targetBudget}
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-serif font-normal text-navy-950">{tier.tierName}</h4>
                    <p className="text-sm text-slate-600 mt-1 font-light">{tier.tagline}</p>
                  </div>
                  <div className="md:text-right bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shrink-0">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Estimated 7-Night Cost</div>
                    <div className="text-lg sm:text-xl font-bold text-navy-950 font-serif mt-0.5">
                      {tier.estimatedTotal7Night}
                    </div>
                  </div>
                </div>

                {/* Tier Inclusions Checklist */}
                <div className="mt-8">
                  <h5 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4">What This Cruising Style Looks Like:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tier.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-slate-700 leading-snug font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Is It Worth It? Break-Even Framework (4 Cards: 2x2) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#c9a15c]/30 text-[#c9a15c] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c9a15c]" />
              <span>Smart Cruiser Decision Rules</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal text-navy-950">
              The "Is It Worth It?" Package Test
            </h3>
            <p className="text-sm text-slate-600 mt-2 font-light">
              Before adding expensive packages in the Cruise Planner, use Angela's break-even mathematical rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {worthItFramework.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {item.image && (
                  <div className="relative aspect-[16/7] w-full overflow-hidden">
                    <MasterImage
                      src={item.image}
                      alt={item.package}
                      placeholderLabel={`PACKAGE EVALUATION: ${item.package.toUpperCase()}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h4 className="text-xl font-normal text-navy-950 font-display">{item.package}</h4>
                      <div className="w-8 h-8 rounded-xl bg-ice-50 text-[#c9a15c] flex items-center justify-center shrink-0 border border-slate-200">
                        <DollarSign className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4 bg-ice-50 rounded-2xl border border-slate-200 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#c9a15c] block mb-1">The Break-Even Rule:</span>
                      <p className="text-xs sm:text-sm font-medium text-navy-950">{item.breakevenRule}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {item.whenWorthIt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Mistakes */}
        {budgetMistakes.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-navy-950 text-center mb-8">
              Costly Budget Mistakes to Avoid
            </h3>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetMistakes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-navy-950 text-[#c9a15c] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="block text-navy-950 font-display font-normal text-base">{item.mistake}</strong>
                    <span className="block text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-1">{item.consequence}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

      </div>
    </section>
  );
};

export default RCRealCostCalculator;
