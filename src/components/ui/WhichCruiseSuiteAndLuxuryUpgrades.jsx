import React from 'react';
import { Crown, Sparkles, ShieldAlert, Palmtree, MapPin, ArrowUpRight } from 'lucide-react';

const ICONS = [Crown, ShieldAlert, Palmtree, MapPin];

const WhichCruiseSuiteAndLuxuryUpgrades = ({ suiteStrategy }) => {
  if (!suiteStrategy || !suiteStrategy.rules) return null;

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 text-xs font-semibold tracking-wider uppercase mb-3">
            VIP Luxury Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            {suiteStrategy.title}
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Royal Caribbean mega-ships can deliver an ultra-luxury boutique experience when booked with the right tier and strategy. Here is how to unlock true VIP status.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {suiteStrategy.rules.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="p-3 bg-white rounded-2xl text-navy-900 border border-slate-200 shadow-sm">
                      <Icon className="w-6 h-6 text-[#c9a15c]" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Rule 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-navy-950 mb-3">
                    {item.rule}
                  </h3>

                  <p className="font-sans text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-navy-800">Curated by Trips & Ships</span>
                  <span className="flex items-center space-x-1 text-navy-900 font-semibold group-hover:text-[#c9a15c] transition-colors">
                    <span>Explore Suite Tiers</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhichCruiseSuiteAndLuxuryUpgrades;
