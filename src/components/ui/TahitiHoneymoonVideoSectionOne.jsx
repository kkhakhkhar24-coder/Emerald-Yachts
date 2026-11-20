import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const TahitiHoneymoonVideoSectionOne = () => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Badge in Luxury White/10 + Gold */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Cinematic Honeymoon Overview</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-display font-normal text-white mb-6 leading-tight">
          Tahiti & Bora Bora: The Ultimate Overwater Experience
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Take a visual journey across French Polynesia's turquoise lagoons, from Moorea's lush volcanic peaks to iconic Bora Bora overwater bungalow sun decks.
        </p>

        {/* 16:9 Video Frame / YouTube Channel Placeholder in Navy & Gold */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f] mb-8 flex items-center justify-center group">
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

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              Bora Bora Overwater Bungalow Sun Decks & Plunge Pools
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              Moorea Volcanic Ridge Safaris & Stingray Encounters
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              Private Motu Sandbar Lunches with Fresh Poisson Cru
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TahitiHoneymoonVideoSectionOne;
