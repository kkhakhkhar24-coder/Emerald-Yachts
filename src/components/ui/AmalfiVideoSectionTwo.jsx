import React from 'react';
import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const AmalfiVideoSectionTwo = ({ videoId = "hOHh1O8F208", title = "Sailing the Amalfi Coast: Capri, Positano & Coves" }) => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description & Strategic Boat Takeaways */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Coastal Boat & Day Trip Guide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-normal text-white leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Experience the Amalfi Coast as it was meant to be seen: from the crystalline waters of the Tyrrhenian Sea. Discover why a private skippered charter is the single most rewarding day of any Italian vacation.
            </p>

            {/* Strategic Highlights Cards in Navy & Gold */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Glide past dramatic vertical cliffs and the natural arch of Fiordo di Furore
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Anchor beneath Capri's iconic Faraglioni sea stacks for private swimming
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Dock directly at seaside cliff restaurants inaccessible by road
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
                <span>Reserve a Private Gozzo Charter With Angela</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 16:9 YouTube Player Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f] aspect-video">
              <LiteYouTubeEmbed
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-slate-400 font-light">
                Visualizing private yacht charters, sea coves, and cliffside landings.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmalfiVideoSectionTwo;
