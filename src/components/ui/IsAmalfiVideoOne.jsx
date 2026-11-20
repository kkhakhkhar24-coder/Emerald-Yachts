import React from 'react';
import { Play, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const IsAmalfiVideoOne = ({ videoId = "9XvQHr6Z738", title = "Visualizing Amalfi Town: Highlights & Atmosphere" }) => {
  const actualId = (videoId && videoId !== "placeholder" && videoId.length > 5) ? videoId : "9XvQHr6Z738";
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Play className="w-3.5 h-3.5 fill-amber-400" />
          <span>Curated Video Walkthrough</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold mb-6">
          {title}
        </h2>

        <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          See the vibrant streets of Piazza Duomo, the climb up the monumental Cathedral steps, and the unhurried lifestyle of coastal Southern Italy.
        </p>

        {/* 16:9 Video Frame */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f] mb-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300">Walkable Valley Floor & Piazza Life</span>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300">Cathedral of Sant'Andrea Architecture</span>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-300">Seamless Direct Ferry Marina Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsAmalfiVideoOne;
