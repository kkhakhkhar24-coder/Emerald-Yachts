import React from 'react';
import { Play } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

/**
 * WhichCruiseVideoOne
 * Video Showcase 1: Icon & Oasis Class ship comparison.
 */
const WhichCruiseVideoOne = () => {
  return (
    <section className="py-20 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-[#c9a15c] text-xs font-bold uppercase tracking-wider mb-4">
          <Play className="w-3.5 h-3.5 fill-[#c9a15c]" />
          <span>Curated Ship Tour Video</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
          Inside the World's Most Innovative Mega-Ships
        </h2>

        <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Take a virtual walkthrough of neighborhood layouts, suite enclaves, and world-class entertainment across Royal Caribbean's top-tier fleet.
        </p>

        {/* 16:9 Video Frame */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black mb-8 border border-slate-700/60">
          <LiteYouTubeEmbed
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/5c88bkuviDg"
            title="Royal Caribbean Ship Comparison Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default WhichCruiseVideoOne;

