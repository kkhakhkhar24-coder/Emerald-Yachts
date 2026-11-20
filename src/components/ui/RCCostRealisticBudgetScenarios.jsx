import React, { useState } from 'react';
import { 
  Users, 
  HeartHandshake, 
  Compass, 
  Crown, 
  DollarSign, 
  Receipt, 
  Sparkles,
  CheckCircle2,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  'couples-balcony': HeartHandshake,
  'family-four': Users,
  'solo-traveler': Compass,
  'luxury-suites': Crown
};

const RCCostRealisticBudgetScenarios = ({ realisticScenarios, images }) => {
  const [activeScenarioId, setActiveScenarioId] = useState('couples-balcony');

  if (!realisticScenarios) return null;

  const { eyebrow, title, description, scenarios = [] } = realisticScenarios;

  const activeScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  return (
    <section id="budget-scenarios" className="py-24 bg-ice-50 relative overflow-hidden border-b border-border-light">
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

        {/* 4 Scenario Selector Tabs (4 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {scenarios.map((scenario) => {
            const Icon = iconMap[scenario.id] || Users;
            const isSelected = scenario.id === activeScenario?.id;

            const shortBadge = scenario.id === 'family-four' 
              ? 'Family of 4' 
              : scenario.id === 'luxury-suites' 
              ? 'Suites VIP' 
              : scenario.id === 'solo-traveler' 
              ? '1 Adult' 
              : '2 Adults';

            return (
              <button
                key={scenario.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`p-5 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-navy-950 text-white border-navy-950 shadow-lg'
                    : 'bg-white text-navy-950 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#c9a15c] text-navy-950 shadow-sm' : 'bg-ice-50 text-navy-950 border border-slate-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                    isSelected ? 'bg-white/10 text-[#c9a15c] border border-[#c9a15c]/30' : 'bg-ice-50 text-slate-700 border border-slate-200'
                  }`}>
                    {shortBadge}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-display font-normal leading-snug">{scenario.title}</span>
                  <span className={`block text-xs mt-1 font-light ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {scenario.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scenario cards — all rendered so every budget scenario is in the prerendered HTML;
            only the selected one is visible. */}
        {scenarios.map((scenario) => {
          const ScenarioIcon = iconMap[scenario.id] || Users;
          return (
          <div
            key={scenario.id}
            className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl max-w-5xl mx-auto ${scenario.id === activeScenario?.id ? "" : "hidden"}`}
          >
            {/* Visual Header Banner */}
            <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
              <MasterImage
                src={scenario.image || (images && images[scenario.id])}
                alt={scenario.title}
                placeholderLabel={`BUDGET SCENARIO: ${scenario.title.toUpperCase()}`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-navy-950 text-[#c9a15c] flex items-center justify-center shrink-0 shadow-md">
                    <ScenarioIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                      Vacation Profile: {scenario.travelers}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-normal text-navy-950 mt-0.5">
                      {scenario.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light">{scenario.summary}</p>
                  </div>
                </div>

                <div className="bg-white border border-[#c9a15c]/40 p-5 rounded-2xl shrink-0 lg:text-right shadow-sm">
                  <div className="text-xs text-[#c9a15c] font-bold uppercase tracking-wider font-display">
                    Estimated 7-Night Total
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-navy-950 mt-0.5">
                    {scenario.totalCostRange}
                  </div>
                </div>
              </div>

              {/* Line Item Breakdown Table */}
              <div className="mt-8">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  Itemized Estimated Vacation Line-Items:
                </h4>

                <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                  {scenario.lineItems.map((line, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between gap-4 text-xs sm:text-sm hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-200/80 text-slate-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-slate-800 font-medium font-serif">{line.item}</span>
                      </div>
                      <span className="font-bold text-navy-950 font-mono text-xs sm:text-sm shrink-0">
                        {line.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          );
        })}

      </div>
    </section>
  );
};

export default RCCostRealisticBudgetScenarios;
