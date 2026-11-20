import React from 'react';
import { 
  PiggyBank, 
  TrendingDown, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  Clock, 
  Wifi, 
  Wine, 
  Bed, 
  Calendar 
} from 'lucide-react';
import MasterImage from './MasterImage';

const strategyIcons = [
  TrendingDown,
  Calendar,
  Bed,
  Wifi,
  Clock,
  Wine
];

const RCCostSmartSavingsStrategies = ({ smartSavings, images }) => {
  if (!smartSavings) return null;

  const { eyebrow, title, description, strategies = [] } = smartSavings;

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden border-b border-border-light">
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

        {/* 6 Strategy Cards Grid (6 Cards: 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strategies.map((strat, idx) => {
            const Icon = strategyIcons[idx % strategyIcons.length] || Lightbulb;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header Banner */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                  <MasterImage
                    src={strat.image || (images && images[idx])}
                    alt={strat.title}
                    placeholderLabel={`SAVINGS RULE 0${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      Rule 0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-lavender-50 text-navy-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-normal text-navy-950 leading-snug">
                    {strat.title.replace(/^\d+\.\s*/, '')}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {strat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RCCostSmartSavingsStrategies;
