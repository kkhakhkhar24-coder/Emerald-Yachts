import React from 'react';
import FadeIn from './FadeIn';
import { Clock, Compass, MapPin, Sparkles, Landmark, ArrowRight, Quote } from 'lucide-react';

const RavelloQuickAnswerGrid = ({ data }) => {
  if (!data || !data.items || data.items.length === 0) return null;

  const items = data.items;
  // Item 0: Best Route
  const routeItem = items.find(i => i.title.toLowerCase().includes('route')) || items[0];
  // Item 1: Hours
  const hoursItem = items.find(i => i.title.toLowerCase().includes('hours')) || items[1];
  // Item 2: Start Time
  const startItem = items.find(i => i.title.toLowerCase().includes('start')) || items[2];
  // Item 3: First Stop
  const stopItem = items.find(i => i.title.toLowerCase().includes('first stop')) || items[3];
  // Item 4: Villa Cimbrone
  const cimbroneItem = items.find(i => i.title.toLowerCase() === 'villa cimbrone') || items[4];
  // Item 5: Villa Rufolo
  const rufoloItem = items.find(i => i.title.toLowerCase() === 'villa rufolo') || items[5];
  // Item 6: Golden Rule
  const goldenRuleItem = items.find(i => i.title.toLowerCase().includes('golden rule')) || items[items.length - 1];

  // Parse route into distinct steps if delimited by arrows
  const routeSteps = (routeItem?.description || '')
    .split(/→|->/)
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <section className="w-full py-20 bg-ice-50/70 border-y border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-ts-gold/60"></div>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold">
              ONE-DAY BLUEPRINT
            </span>
            <div className="w-10 h-px bg-ts-gold/60"></div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-4">
            {data.title || "Quick Answer: The Ideal One-Day Ravello Itinerary"}
          </h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mt-4 mb-5"></div>
          <p className="font-sans text-slate-600 font-light text-base md:text-lg">
            Essential timing, route sequencing, and pacing guidance for an unhurried first visit.
          </p>
        </FadeIn>

        {/* Balanced Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

          {/* Row 1: Full-width Best Route Sequence */}
          {routeItem && (
            <FadeIn className="col-span-1 md:col-span-6 lg:col-span-12">
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ts-gold via-navy-800 to-ts-gold"></div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center shadow-sm">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ts-gold block">
                        OPTIMAL SEQUENCE
                      </span>
                      <h3 className="font-display text-2xl text-navy-950 font-medium">
                        {routeItem.title}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 font-sans text-xs font-semibold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-ts-gold" />
                    Recommended Walking Order
                  </span>
                </div>

                {/* Steps Chain */}
                {routeSteps.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    {routeSteps.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-2xs hover:border-ts-gold/50 transition-colors">
                          <span className="font-display text-xs font-bold text-ts-gold">0{idx + 1}</span>
                          <span className="font-sans text-sm font-medium text-navy-900">{step}</span>
                        </div>
                        {idx < routeSteps.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-slate-700 text-lg leading-relaxed">{routeItem.description}</p>
                )}
              </div>
            </FadeIn>
          )}

          {/* Row 2: Three Core Logistics Cards (4 cols each on desktop) */}
          {hoursItem && (
            <FadeIn delay={0.1} className="col-span-1 md:col-span-3 lg:col-span-4 flex">
              <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-ice-50 text-navy-800 flex items-center justify-center mb-5 border border-slate-100">
                    <Clock className="w-5 h-5 text-ts-gold" />
                  </div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                    {hoursItem.title}
                  </span>
                  <p className="font-display text-xl lg:text-2xl text-navy-950 font-normal leading-snug">
                    {hoursItem.description}
                  </p>
                </div>
                <div className="w-full h-0.5 bg-slate-100 mt-6"></div>
              </div>
            </FadeIn>
          )}

          {startItem && (
            <FadeIn delay={0.15} className="col-span-1 md:col-span-3 lg:col-span-4 flex">
              <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-ice-50 text-navy-800 flex items-center justify-center mb-5 border border-slate-100">
                    <Compass className="w-5 h-5 text-ts-gold" />
                  </div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                    {startItem.title}
                  </span>
                  <p className="font-display text-xl lg:text-2xl text-navy-950 font-normal leading-snug">
                    {startItem.description}
                  </p>
                </div>
                <div className="w-full h-0.5 bg-slate-100 mt-6"></div>
              </div>
            </FadeIn>
          )}

          {stopItem && (
            <FadeIn delay={0.2} className="col-span-1 md:col-span-6 lg:col-span-4 flex">
              <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-ice-50 text-navy-800 flex items-center justify-center mb-5 border border-slate-100">
                    <MapPin className="w-5 h-5 text-ts-gold" />
                  </div>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">
                    {stopItem.title}
                  </span>
                  <p className="font-display text-xl lg:text-2xl text-navy-950 font-normal leading-snug">
                    {stopItem.description}
                  </p>
                </div>
                <div className="w-full h-0.5 bg-slate-100 mt-6"></div>
              </div>
            </FadeIn>
          )}

          {/* Row 3: Two Villa Duration Cards (6 cols each on desktop) */}
          {cimbroneItem && (
            <FadeIn delay={0.25} className="col-span-1 md:col-span-3 lg:col-span-6 flex">
              <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Landmark className="w-5 h-5 text-ts-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-1">
                      TIME ALLOTMENT
                    </span>
                    <h4 className="font-display text-xl text-navy-950 mb-2 font-medium">
                      {cimbroneItem.title}
                    </h4>
                    <p className="font-sans text-slate-600 text-base leading-relaxed">
                      {cimbroneItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {rufoloItem && (
            <FadeIn delay={0.3} className="col-span-1 md:col-span-3 lg:col-span-6 flex">
              <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy-950 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Landmark className="w-5 h-5 text-ts-gold" />
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-1">
                      TIME ALLOTMENT
                    </span>
                    <h4 className="font-display text-xl text-navy-950 mb-2 font-medium">
                      {rufoloItem.title}
                    </h4>
                    <p className="font-sans text-slate-600 text-base leading-relaxed">
                      {rufoloItem.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Row 4: Full-width Golden Rule Quote Card */}
          {goldenRuleItem && (
            <FadeIn delay={0.35} className="col-span-1 md:col-span-6 lg:col-span-12">
              <div className="bg-navy-950 text-white rounded-2xl p-8 lg:p-10 shadow-xl border border-navy-800 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 text-white/5 pointer-events-none">
                  <Quote size={180} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-ts-gold" />
                      <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold">
                        {goldenRuleItem.title}
                      </span>
                    </div>
                    <p className="font-display text-2xl lg:text-3xl text-white font-normal italic leading-snug">
                      "{goldenRuleItem.description}"
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block border border-ts-gold/40 text-ts-gold px-5 py-2 rounded-full font-sans text-xs uppercase tracking-widest font-semibold">
                      Pacing Strategy
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </section>
  );
};

export default RavelloQuickAnswerGrid;
