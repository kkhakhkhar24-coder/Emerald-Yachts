import React from 'react';
import { Sparkles, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

const TahitiHoneymoonResortsShowcase = ({ resorts = [] }) => {
  if (!resorts || !resorts.length) return null;

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Overwater Bungalow Sanctuaries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-white mb-4 leading-tight">
            Premier Tahiti Honeymoon Resorts
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            From iconic Mount Otemanu overwater plunge pools to private motu atolls, explore French Polynesia's most celebrated 5-star honeymoon retreats.
          </p>
        </div>

        {/* 6 Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resorts.map((resort, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-navy-900 border border-navy-800 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-gold-400 border border-gold-400/30">
                    {resort.tag}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{resort.island}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white font-bold mb-2 group-hover:text-gold-300 transition-colors">
                  {resort.name}
                </h3>

                <div className="text-xs font-semibold text-gold-400 mb-4 bg-navy-950 p-2.5 rounded-xl border border-navy-800 inline-block">
                  {resort.priceTier}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {resort.highlight}
                </p>
              </div>

              <div className="pt-4 border-t border-navy-800/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Honeymoon Inclusions:
                </span>
                <div className="flex items-start gap-2 text-xs text-slate-300 font-light leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{resort.inclusions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Advisory Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0a192f] border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1">
              PREFERRED PARTNER PERKS
            </span>
            <p className="text-sm sm:text-base text-slate-200 font-light">
              Booking with Trips & Ships unlocks complimentary room upgrades, daily gourmet breakfast, resort credits, and VIP champagne arrival amenities.
            </p>
          </div>
          <a
            href="https://www.tripsandships.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg"
          >
            Inquire with Angela
          </a>
        </div>

      </div>
    </section>
  );
};

export default TahitiHoneymoonResortsShowcase;
