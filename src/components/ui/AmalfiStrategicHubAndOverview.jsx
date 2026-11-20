import React from 'react';
import { Compass, Anchor, Footprints, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

const ICONS = [Anchor, Compass, Footprints, Sparkles];

const AmalfiStrategicHubAndOverview = ({ overviewHighlights = [], townComparison = [] }) => {
  return (
    <section className="py-24 bg-white text-navy-950 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c9a15c] font-bold bg-[#c9a15c]/10 px-4 py-1.5 rounded-full border border-[#c9a15c]/30 inline-block mb-4">
            Strategic Geographic Fulcrum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-bold mb-4">
            Why Amalfi Town Is the Heart of the Coast
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a15c] mx-auto mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Positioned at the geographical midpoint of the UNESCO World Heritage coastline, Amalfi offers an unmatched blend of rich medieval maritime history, superior transportation connectivity, and pedestrian-friendly terrain.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {overviewHighlights.map((item, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-[#c9a15c]/70 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-[#c9a15c]/15 rounded-xl text-[#b08b47] border border-[#c9a15c]/30 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center space-x-1.5 text-xs text-[#b08b47] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Amalfi Core Advantage</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Town Comparison Table / Matrix */}
        {townComparison.length > 0 && (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2.5 bg-[#c9a15c]/15 rounded-xl text-[#b08b47]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-navy-950 font-bold">
                  Where to Base Yourself: Amalfi vs Positano vs Ravello
                </h3>
                <p className="text-xs text-slate-500">
                  Compare the three most famous coastal bases to identify your ideal accommodation hub.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {townComparison.map((tc, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${
                    index === 0
                      ? 'bg-white border-[#c9a15c] shadow-lg shadow-[#c9a15c]/10 ring-1 ring-[#c9a15c]/30'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <h4 className="text-xl font-serif text-navy-950 font-bold">
                      {tc.town}
                    </h4>
                    {index === 0 && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#c9a15c]/15 text-[#b08b47] border border-[#c9a15c]/30">
                        Top Strategic Base
                      </span>
                    )}
                  </div>
                  <div className="space-y-3.5 text-sm">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Atmosphere</span>
                      <p className="text-slate-700 leading-snug">{tc.vibe}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Terrain & Steps</span>
                      <p className="text-slate-600 leading-snug">{tc.terrain}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Logistics & Ferries</span>
                      <p className="text-slate-600 leading-snug">{tc.transport}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#b08b47] block mb-0.5">Best For</span>
                      <p className="text-navy-950 font-medium text-xs leading-snug">{tc.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AmalfiStrategicHubAndOverview;
