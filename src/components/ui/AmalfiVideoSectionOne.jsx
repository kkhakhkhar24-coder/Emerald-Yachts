import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const AmalfiVideoSectionOne = ({ videoId = "8Xc6mJh-ERc", title = "Exploring Amalfi Town: Landmarks & Coastal Wonders" }) => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Cinematic Coast Overview</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-display font-normal text-white mb-6 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Take a visual tour of Piazza Duomo, the Cathedral steps, the historic paper mills, and the dramatic vertical cliffs towering over the Mediterranean.
        </p>

        {/* 16:9 Video Frame Embed */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f] mb-8">
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

        {/* Key Landmark Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              Piazza Duomo & 62-Step Cathedral Staircase
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              Valle dei Mulini Lemon Groves & Paper Mill
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300 font-light leading-relaxed">
              Harbor Piers & Scenic Private Boat Charters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmalfiVideoSectionOne;
