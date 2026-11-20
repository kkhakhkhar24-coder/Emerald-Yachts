import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Percent
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCCostFareVsExtrasBreakdown = ({ fareVsExtras, images }) => {
  const [activeLayerId, setActiveLayerId] = useState('base-fare');

  if (!fareVsExtras) return null;

  const { eyebrow, title, description, formula, layers = [] } = fareVsExtras;

  const layerStyles = {
    'base-fare': {
      border: 'border-emerald-500/40',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      label: 'LAYER 1: BASE CRUISE FARE'
    },
    'port-taxes': {
      border: 'border-blue-500/40',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      label: 'LAYER 2: MANDATORY PORT TAXES'
    },
    'gratuities': {
      border: 'border-indigo-500/40',
      badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      label: 'LAYER 3: DAILY GRATUITIES'
    },
    'extras': {
      border: 'border-[#c9a15c]/40',
      badge: 'bg-white text-[#c9a15c] border-[#c9a15c]/30',
      label: 'LAYER 4: ONBOARD EXTRAS'
    }
  };

  const selectedLayer = layers.find(l => l.id === activeLayerId) || layers[0];

  return (
    <section className="py-24 bg-white text-navy-950 relative overflow-hidden border-b border-border-light">
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

        {/* The Cruise Pricing Equation Hero Banner */}
        {formula && (
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-navy-950 text-white shadow-xl relative overflow-hidden max-w-5xl mx-auto border border-navy-900">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold tracking-wider uppercase border border-gold-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                The Real Total Cost Equation
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

        {/* Interactive 4-Layer Architecture Tabs (4 Tabs) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10 bg-slate-100 p-2 rounded-full border border-slate-200">
          {layers.map((layer) => {
            const isSelected = layer.id === selectedLayer?.id;
            return (
              <button
                key={layer.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveLayerId(layer.id)}
                className={`px-4 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center text-center ${
                  isSelected
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-200'
                }`}
              >
                <span className="font-bold">{layer.layer.split(':')[0]}</span>
                <span className={`text-[11px] font-normal mt-0.5 ${isSelected ? 'text-gold-400' : 'text-slate-500'}`}>
                  {layer.tagline.split('(')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Layer cards — all rendered so every pricing layer is in the prerendered HTML;
            only the selected one is visible. */}
        {layers.map((layer) => (
          <div
            key={layer.id}
            className={`bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm max-w-5xl mx-auto ${layer.id === selectedLayer?.id ? "" : "hidden"}`}
          >
            {/* Visual Layer Header */}
            <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
              <MasterImage
                src={layer.image || (images && images[layer.id])}
                alt={layer.layer}
                placeholderLabel={`PRICING ARCHITECTURE: ${(layerStyles[layer.id] || layerStyles["base-fare"]).label}`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-sans font-bold text-gold-500 uppercase tracking-widest block mb-1">
                    {layer.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-normal text-navy-950">
                    {layer.layer}
                  </h3>
                </div>
              </div>

              {/* Layer Items Grid */}
              <div className="mt-8">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-4">
                  What Is Covered in This Pricing Layer:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {layer.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#2e6f77] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-light leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default RCCostFareVsExtrasBreakdown;
