import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, Check, Compass, Waves, Landmark, Mountain, Sparkles } from 'lucide-react';

const townCards = [
  {
    name: "Sorrento",
    role: "The Strategic Launchpad",
    badge: "Recommended Base",
    isFeatured: true,
    icon: Compass,
    keyPros: [
      "Direct Circumvesuviana rail to Pompeii & Naples",
      "Sheltered Marina Piccola ferry & yacht departures",
      "Flat, highly walkable town center & lively piazzas",
      "Strongest hotel value & spacious clifftop gardens"
    ],
    tradeoff: "Coastline cliffs seen via day trip rather than bedroom balcony.",
    bestFor: "Explorers, families, and first-time Campania itineraries."
  },
  {
    name: "Positano",
    role: "The Cliffside Romantic",
    badge: "Scenic Icon",
    isFeatured: false,
    icon: Waves,
    keyPros: [
      "Unrivaled postcard pastel cliffside architecture",
      "World-famous sunset cocktail terraces & beach clubs",
      "Direct sea access at Spiaggia Grande & Fornillo",
      "Intimate, magical atmosphere once day-trippers leave"
    ],
    tradeoff: "Hundreds of steep stone steps; Pompeii is a lengthy commute.",
    bestFor: "Honeymooners, couples, and romantic split-stay segments."
  },
  {
    name: "Amalfi",
    role: "The Historic Maritime Heart",
    badge: "Coastal Hub",
    isFeatured: false,
    icon: Landmark,
    keyPros: [
      "Major ferry terminal connecting all coastal villages",
      "Magnificent 9th-century Duomo di Sant'Andrea",
      "Flatter seafront promenade than steep Positano",
      "Direct bus & ferry connections up to Ravello"
    ],
    tradeoff: "Busy bus & ferry hub with crowded central streets in peak hours.",
    bestFor: "History enthusiasts, island hoppers, and central coast explorers."
  },
  {
    name: "Ravello",
    role: "The Clifftop Sanctuary",
    badge: "Mountain Retreat",
    isFeatured: false,
    icon: Mountain,
    keyPros: [
      "Perched 1,200 feet above the sea with panoramic silence",
      "Famous Villa Cimbrone & Villa Rufolo clifftop gardens",
      "Ultra-luxurious 5-star palace hotels & refined dining",
      "Immunity from cruise crowds and busy coastal road noise"
    ],
    tradeoff: "No sea or port access; winding mountain roads for all day trips.",
    bestFor: "Quiet luxury retreats, garden lovers, and total digital detox."
  }
];

const BaseComparisonShowcase = ({ data, title, subtitle }) => {
  const compData = data || {};
  const sectionTitle = title || compData.title || "Sorrento vs. Positano vs. Amalfi vs. Ravello — As a Base";
  const sectionSubtitle = subtitle || compData.subtitle || "Four answers to the same question: where do you sleep, eat, and launch from every day?";
  const headers = compData.headers || ["Category", "Sorrento", "Positano", "Amalfi", "Ravello"];
  const rows = compData.rows || [];

  return (
    <section className="py-20 md:py-28 bg-[#f8f9fb] text-navy-950 relative overflow-hidden border-y border-slate-200/80">
      
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ice-100 rounded-full blur-[140px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fbf7f0] rounded-full blur-[140px] pointer-events-none opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-ts-gold bg-white border border-slate-200 px-5 py-2 rounded-full mb-5 inline-block shadow-sm">
            Strategic Base Matchmaker
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-5 leading-tight">
            {sectionTitle}
          </h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
          {sectionSubtitle && (
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {sectionSubtitle}
            </p>
          )}
        </FadeIn>

        {/* 1. Four Town Base Cards Grid (4 Balanced Cards - 0 Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {townCards.map((town, idx) => {
            const IconComp = town.icon;
            const isSorrento = town.isFeatured;

            return (
              <FadeIn key={idx} delay={idx * 0.08} className="flex">
                <div 
                  className={`w-full rounded-2xl p-7 flex flex-col justify-between border transition-all duration-300 hover:shadow-xl ${
                    isSorrento 
                      ? 'bg-navy-950 text-white border-ts-gold shadow-xl shadow-navy-950/15 ring-1 ring-ts-gold/40' 
                      : 'bg-white border-slate-200/90 text-navy-950 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        isSorrento 
                          ? 'bg-ts-gold text-navy-950 font-bold shadow-sm' 
                          : 'bg-ice-50 text-navy-900 border border-slate-200'
                      }`}>
                        <IconComp className="w-5 h-5 text-current" />
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full ${
                        isSorrento 
                          ? 'bg-ts-gold text-navy-950 font-bold' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {town.badge}
                      </span>
                    </div>

                    {/* Town Title & Role */}
                    <h3 className={`font-display text-2xl mb-1 ${isSorrento ? 'text-white' : 'text-navy-950'}`}>
                      {town.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-wider text-ts-gold font-bold mb-6">
                      {town.role}
                    </p>

                    {/* Key Pros */}
                    <div className="mb-6">
                      <p className={`text-[11px] uppercase tracking-wider font-bold mb-3 ${isSorrento ? 'text-slate-300' : 'text-slate-400'}`}>
                        Core Base Advantages:
                      </p>
                      <ul className="space-y-2.5">
                        {town.keyPros.map((pro, pIdx) => (
                          <li key={pIdx} className={`text-xs flex items-start gap-2 leading-relaxed ${isSorrento ? 'text-ice-100' : 'text-slate-600'}`}>
                            <Check className="w-3.5 h-3.5 text-ts-gold shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom: Tradeoff & Best For */}
                  <div className={`pt-5 border-t space-y-3 ${isSorrento ? 'border-white/15' : 'border-slate-100'}`}>
                    <div className={`p-3 rounded-xl border ${
                      isSorrento 
                        ? 'bg-navy-900/80 border-white/10' 
                        : 'bg-ice-50/70 border-slate-200/60'
                    }`}>
                      <span className={`text-[10px] uppercase font-bold block mb-0.5 ${isSorrento ? 'text-slate-300' : 'text-slate-500'}`}>
                        The Tradeoff:
                      </span>
                      <p className={`text-xs leading-relaxed ${isSorrento ? 'text-ice-200 font-light' : 'text-slate-700'}`}>
                        {town.tradeoff}
                      </p>
                    </div>

                    <div className="px-1">
                      <span className="text-[10px] uppercase font-bold text-ts-gold block mb-0.5">
                        Ideal Match:
                      </span>
                      <p className={`text-xs leading-snug ${isSorrento ? 'text-slate-300' : 'text-slate-600'}`}>
                        {town.bestFor}
                      </p>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* 2. Side-By-Side Comparison Matrix Table */}
        {rows && rows.length > 0 && (
          <FadeIn delay={0.25}>
            <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-lg">
              <div className="p-6 md:p-8 border-b border-slate-100 bg-navy-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-white">Full Feature-by-Feature Matrix</h3>
                  <p className="font-sans text-xs sm:text-sm text-ice-200/80 mt-1">Direct breakdown across logistics, terrain, and transit options</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-ts-gold px-3.5 py-1.5 bg-white/10 border border-ts-gold/40 rounded-full shrink-0 self-start sm:self-auto">
                  Campania Regional Analysis
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[720px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-navy-950">
                      {headers.map((h, i) => (
                        <th 
                          key={i} 
                          className={`py-4 px-5 text-xs font-bold uppercase tracking-wider ${
                            i === 0 
                              ? 'w-1/5 text-slate-500 pl-6' 
                              : i === 1 
                                ? 'w-1/5 text-navy-950 bg-[#fbf7f0] border-x border-[#e8dfcf]' 
                                : 'w-1/5 text-slate-700'
                          }`}
                        >
                          {h}
                          {i === 1 && (
                            <span className="ml-2 text-[9px] text-ts-gold font-extrabold uppercase bg-navy-950 text-white px-2 py-0.5 rounded-full">
                              Best Hub
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-sans text-xs sm:text-sm">
                    {rows.map((row, rIdx) => (
                      <tr 
                        key={rIdx} 
                        className={`transition-colors hover:bg-ice-50/60 ${rIdx % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'}`}
                      >
                        {row.map((cell, cIdx) => (
                          <td 
                            key={cIdx} 
                            className={`py-4 px-5 align-top ${
                              cIdx === 0 
                                ? 'font-semibold text-navy-950 pl-6' 
                                : cIdx === 1 
                                  ? 'text-navy-950 font-medium bg-[#fbf7f0]/70 border-x border-[#e8dfcf]/60' 
                                  : 'text-slate-600 font-normal'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default BaseComparisonShowcase;
