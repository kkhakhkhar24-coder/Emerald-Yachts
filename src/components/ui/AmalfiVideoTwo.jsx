import React from 'react';
import { Play, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const AmalfiVideoTwo = ({ videoId = "hOHh1O8F208", title = "Sailing the Amalfi Coast: Capri, Positano & Coves" }) => {
  const actualId = (videoId && videoId !== "placeholder" && videoId.length > 5) ? videoId : "hOHh1O8F208";
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & Strategic Boat Takeaways */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Play className="w-3.5 h-3.5 fill-amber-400" />
              <span>Coastal Boat & Day Trip Guide</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Experience the Amalfi Coast as it was meant to be seen: from the crystalline waters of the Tyrrhenian Sea. Discover why a private skippered charter is the single most rewarding day of any Italian vacation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Glide past dramatic vertical cliffs and the natural arch of Fiordo di Furore</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Anchor beneath Capri's iconic Faraglioni sea stacks for private swimming</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dock directly at seaside cliff restaurants inaccessible by road</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://www.tripsandships.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                <span>Reserve a Private Gozzo Charter With Angela</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: YouTube Player */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f] aspect-video">
              <LiteYouTubeEmbed
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${actualId}?rel=0&modestbranding=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-slate-400">
                Visualizing private yacht charters, sea coves, and cliffside landings.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmalfiVideoTwo;
