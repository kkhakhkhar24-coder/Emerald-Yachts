import React from 'react';
import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

const VikingVideoSectionTwo = ({ 
  videoId = "XCLFSFXAggo", 
  title = "Life Aboard Viking: From River Longships to Polar Vessels" 
}) => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description & Strategic Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Onboard Life & Exploration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-normal text-white leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Discover how Viking's serene Nordic Spa, heated snow grottos, enclosed science laboratories, and military-grade expedition craft redefine modern luxury cruising across rivers, oceans, and polar seas.
            </p>

            {/* Strategic Highlights Cards in Navy & Gold */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Invigorating Nordic Spa rituals with thermal suites and snow grottos
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Patented Longship design with square bows and true two-room suites
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Special Operations Boats and enclosed scientific research laboratories
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
                <span>Plan Your Viking Voyage With Angela Hughes</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 16:9 YouTube Player Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-navy-800 bg-[#0a192f]">
              <iframe
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default VikingVideoSectionTwo;
