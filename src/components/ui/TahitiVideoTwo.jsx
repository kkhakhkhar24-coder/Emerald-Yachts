import React from 'react';
import FadeIn from './FadeIn';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const TahitiVideoTwo = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#003853]/30 via-slate-900 to-navy-950 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#c9a15c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase mb-4 block">
            THE ICONIC LAGOON EXPERIENCE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-white">
            Overwater Elegance & Marine Sanctuaries
          </h2>
          <p className="font-sans text-slate-300 font-light leading-relaxed text-base md:text-lg">
            From waking up suspended above Bora Bora's coral reefs to swimming alongside humpback whales in Moorea—see how your chosen season shapes each unforgettable moment.
          </p>
        </div>

        {/* Video Frame */}
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
              <LiteYouTubeEmbed
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/-PdwTd56vYI?rel=0&modestbranding=1"
                title="Windstar's Tahiti | Windstar Cruises"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Advice Box */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-6 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#c9a15c] block mb-2">
                  BORA BORA OVERWATER TIMING
                </span>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Overwater villa orientation matters as much as the month. Sunset-facing villas capture Mount Otemanu's shifting violet hues during the dry winter months (May–October).
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#c9a15c] block mb-2">
                  MOOREA WHALE MIGRATION
                </span>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Moorea’s deep bays welcome Antarctic humpback mothers and calves from July through November, offering one of the earth's few certified respectful swim-with-whales environments.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TahitiVideoTwo;
