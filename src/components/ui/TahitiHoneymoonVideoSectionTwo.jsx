import React from 'react';
import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

const TahitiHoneymoonVideoSectionTwo = () => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description & Strategic Boat Takeaways */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Lagoon & Yacht Sailing Guide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-normal text-white leading-tight">
              Sailing French Polynesia: Motu Picnics & Private Charters
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Experience the islands as they were meant to be explored: from the crystalline turquoise lagoons of the South Pacific. Discover why private boat charters and secluded motu picnics are the defining highlights of a luxury honeymoon.
            </p>

            {/* Strategic Highlights Cards in Navy & Gold */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Anchor at private sandbars with champagne and freshly prepared Polynesian Poisson Cru
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Drift snorkel through Taha'a vibrant Coral River and swim with gentle manta rays
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Enjoy sunset catamaran sailing behind Mount Otemanu with private onboard service
                </span>
              </div>
            </div>

            {/* Gold CTA Action Link */}
            <div className="pt-2">
              <a
                href="https://www.tripsandships.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors group"
              >
                <span>Arrange a Private Polynesian Yacht Charter With Angela</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 16:9 YouTube Channel Placeholder Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f] aspect-video flex items-center justify-center group">
              <a
                href="https://www.youtube.com/@TripsandShips"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center bg-[#0a192f] group-hover:bg-[#0d203b] transition-all duration-300"
              >
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.25em] text-[#c9a15c] uppercase text-center px-6 select-none group-hover:text-gold-300 transition-colors">
                  YOUTUBE CHANNEL PLACEHOLDER
                </span>
              </a>
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-slate-400 font-light">
                Visualizing private outrigger motu picnics, lagoon sailing, and overwater living.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TahitiHoneymoonVideoSectionTwo;
