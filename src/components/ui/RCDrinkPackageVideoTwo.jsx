import React from 'react';
import { Sparkles, Video, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const RCDrinkPackageVideoTwo = ({ videoData }) => {
  const defaultData = {
    eyebrow: "Video Strategy: Part 2",
    title: "How to Maximize Your Royal Caribbean Drink Package Without Overpaying",
    description: "Discover expert tactics for tracking Cruise Planner discount cycles, navigating the $14 limit, and managing non-drinker stateroom exemptions.",
    videoUrl: "https://www.youtube.com/embed/2FAHDUqvpgM",
    badge: "Insider Strategy Masterclass",
    keyHighlights: [
      { title: "Cruise Planner Pricing Cycles", text: "Why prices fluctuate weekly and how to identify true 30%-off sales versus artificial 'Buy One Get One 50% Off' marketing promotions." },
      { title: "Specialty Coffee Stacking", text: "How starting your day with double-shot iced lattes at Café Promenade or Park Café builds instant baseline package value." },
      { title: "The Stateroom Calling Exemption", text: "The exact script to use when calling Royal Caribbean to request a non-alcoholic package substitution for a pregnant or non-drinking partner." },
      { title: "Wine Bottle 40% Discounts", text: "How to utilize the 40% bottle discount for high-end vintage wines with specialty steakhouse dinners." }
    ]
  };

  const data = videoData || defaultData;

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text & Highlights Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            <div>
              {data.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {data.badge}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl font-display font-normal text-white leading-tight">
                {data.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400">
                Masterclass Core Chapters:
              </h4>
              {data.keyHighlights && data.keyHighlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-300 font-light mt-0.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Player Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-800 bg-navy-900 aspect-video group">
              <LiteYouTubeEmbed
                loading="lazy"
                src={data.videoUrl}
                title={data.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-gold-400" />
                Drink Strategy Video Guide
              </span>
              <span>Watch with sound on 🔊</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RCDrinkPackageVideoTwo;
