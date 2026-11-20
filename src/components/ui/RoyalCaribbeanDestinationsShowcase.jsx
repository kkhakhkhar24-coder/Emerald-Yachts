import React from 'react';
import { Globe, MapPin, Palmtree, Mountain, Landmark, Compass, Sparkles } from 'lucide-react';

/**
 * RoyalCaribbeanDestinationsShowcase
 * Visual destination cards for Caribbean, Alaska, Mediterranean, and Northern Europe.
 */
const RoyalCaribbeanDestinationsShowcase = ({ destinationsData }) => {
  if (!destinationsData) return null;

  return (
    <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#c9a15c] text-xs font-semibold tracking-wider uppercase mb-3">
            <Globe className="w-3.5 h-3.5 text-[#c9a15c]" />
            <span>Worldwide Itineraries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
            {destinationsData.title || "Royal Caribbean Global Destinations"}
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From the tranquil turquoise waters of Perfect Day at CocoCay to Alaska's dramatic glaciers and Mediterranean cultural marvels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinationsData.regions && destinationsData.regions.map((reg, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700 hover:border-amber-400/40 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#c9a15c] group-hover:scale-110 transition-transform">
                      {idx === 0 ? <Palmtree className="w-5 h-5 text-emerald-400" /> : idx === 1 ? <Mountain className="w-5 h-5 text-cyan-400" /> : idx === 2 ? <Landmark className="w-5 h-5 text-amber-400" /> : <Compass className="w-5 h-5 text-[#c9a15c]" />}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white group-hover:text-amber-200 transition-colors">
                      {reg.name}
                    </h3>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#c9a15c] bg-[#c9a15c]/10 border border-[#c9a15c]/30 px-2.5 py-1 rounded-full">
                    {reg.bestMonths}
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <span className="font-semibold text-white">{reg.highlightsLabel || "Featured Ports"}: </span>
                  {reg.highlights}
                </p>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/60 space-y-1">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#c9a15c] block flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#c9a15c]" />
                    <span>{reg.signatureLabel || "Signature Experience"}:</span>
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                    {reg.signaturePort || reg.signatureExperience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoyalCaribbeanDestinationsShowcase;
