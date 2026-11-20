import React, { useState } from 'react';
import { 
  Calculator, 
  Wine, 
  CheckCircle2, 
  XCircle, 
  HelpCircle,
  Sparkles, 
  Percent
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCDrinkPackageBreakEvenCalculator = ({ breakEvenCalculator, bannerImage, comboImages, hideImages = false }) => {
  const [selectedProfileIdx, setSelectedProfileIdx] = useState(1);

  if (!breakEvenCalculator) return null;

  const { eyebrow, title, description, dynamicPricing, drinkPrices = [], breakEvenCombinations = [] } = breakEvenCalculator;

  return (
    <section id="break-even-calculator" className="py-24 bg-white text-navy-950 relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
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

        {/* Featured Visual Banner */}
        {!hideImages && (
          <div className="max-w-5xl mx-auto mb-14 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <div className="relative aspect-[16/6] w-full">
              <MasterImage
                src={bannerImage || null}
                alt="Drink Package Calculator"
                placeholderLabel="DELUXE BEVERAGE PACKAGE BREAK-EVEN CALCULATOR"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Dynamic Pricing Callout Banner */}
        {dynamicPricing && (
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-navy-950 text-white shadow-xl relative overflow-hidden max-w-5xl mx-auto border border-navy-900">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold tracking-wider uppercase border border-gold-400/30">
                <Percent className="w-3.5 h-3.5" />
                {dynamicPricing.period || 'Dynamic Daily Pricing Math'}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-normal text-gold-400">
                {dynamicPricing.headline || dynamicPricing.leadPrice}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                {dynamicPricing.detail || dynamicPricing.disclaimer}
              </p>
            </div>
          </div>
        )}

        {/* A La Carte Menu Pricing Grid */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <h3 className="text-xl font-display font-normal text-navy-950 flex items-center gap-2">
              <Wine className="w-5 h-5 text-gold-500" />
              Onboard A La Carte Drink Prices (2026 Fleet Standard)
            </h3>
            <span className="text-xs text-slate-500">+18% Auto Gratuity on all individual orders</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {drinkPrices.map((drink, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <span className="text-xs font-normal text-navy-950 leading-snug mb-2 font-display">
                  {drink.item || drink.category}
                </span>
                <span className="text-sm font-bold font-mono text-gold-500">
                  {drink.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Break-Even Combination Profiles (4 Cards: 2x2) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-normal text-navy-950">
              4 Real-World Daily Drinking Habits: Break-Even Math
            </h3>
            <p className="text-sm text-slate-500 mt-2 font-light">
              Select a drinking style to see exact break-even math versus an $80/day package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {breakEvenCombinations.map((combo, idx) => {
              const verdictText = (combo.verdict || '').toLowerCase();
              const isWin = verdictText.includes('easily') || verdictText.includes('reaches') || verdictText.includes('perfect') || verdictText.includes('all international') || verdictText.includes('mandatory') || verdictText.includes('strongly');

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Visual Header Placeholder */}
                  {!hideImages && (
                    <div className="relative aspect-[16/7] w-full overflow-hidden">
                      <MasterImage
                        src={(comboImages && comboImages[idx]) || null}
                        alt={combo.profile}
                        placeholderLabel={`DRINKING PROFILE: ${combo.profile.toUpperCase()}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-ice-50 text-navy-950 border border-slate-200">
                          {combo.profile}
                        </span>
                        {isWin ? (
                          <CheckCircle2 className="w-5 h-5 text-[#2e6f77]" />
                        ) : (
                          <HelpCircle className="w-5 h-5 text-slate-400" />
                        )}
                      </div>

                      <h4 className="text-lg font-display font-normal mb-2 leading-snug text-navy-950">
                        {combo.formula}
                      </h4>

                      <div className="p-3.5 rounded-2xl mb-3 text-xs font-mono font-semibold bg-ice-50 border border-slate-200 text-navy-950">
                        {combo.math}
                      </div>

                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {combo.verdict}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RCDrinkPackageBreakEvenCalculator;
