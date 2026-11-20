import React from 'react';
import { 
  ShieldAlert, 
  Users, 
  Ban, 
  Clock, 
  DollarSign, 
  Bed, 
  Palmtree, 
  Crown, 
  RefreshCw 
} from 'lucide-react';
import MasterImage from './MasterImage';

const ruleIcons = [
  Users,
  Ban,
  Clock,
  DollarSign,
  Bed,
  Palmtree,
  Crown,
  RefreshCw
];

const RCDrinkPackageRulesAndFinePrint = ({ rulesAndFinePrint, ruleImages, hideImages = false }) => {
  if (!rulesAndFinePrint) return null;

  const { eyebrow, title, description, rules = [] } = rulesAndFinePrint;

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

        {/* 8 Rule Cards Grid (8 Cards: 4x2 or 2x4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rules.map((rule, idx) => {
            const Icon = ruleIcons[idx % ruleIcons.length] || ShieldAlert;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Header Placeholder */}
                {!hideImages && (
                  <div className="relative aspect-[16/7] w-full overflow-hidden">
                    <MasterImage
                      src={(ruleImages && ruleImages[idx]) || null}
                      alt={rule.title}
                      placeholderLabel={`POLICY RULE 0${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-ice-50 border border-slate-200 text-navy-950 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-[#c9a15c]" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-ice-50 text-[#c9a15c] border border-slate-200">
                        Rule 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-normal text-navy-950 mb-2 leading-snug">
                      {rule.title.replace(/^\d+\.\s*/, '')}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {rule.description}
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

export default RCDrinkPackageRulesAndFinePrint;
