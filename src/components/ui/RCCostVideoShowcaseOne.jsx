import React from 'react';
import { Sparkles, Video, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const RCCostVideoShowcaseOne = ({ videoData }) => {
  const defaultData = {
    eyebrow: "Video Cost Guide: Part 1",
    title: "Royal Caribbean Cruise Pricing Explained: What You Actually Pay",
    description: "Watch this detailed breakdown analyzing advertised cruise fares vs. final onboard bills, including gratuity math, beverage choices, and port fees.",
    videoUrl: "https://www.youtube.com/embed/Sz6pcVr4gGg",
    badge: "Essential Cost Analysis",
    takeaways: [
      { title: "The 'Starting At' Price Trap", text: "Why base teaser rates exclude port taxes, gratuities, and essential connectivity, and how to calculate the real starting floor." },
      { title: "Beverage Package Financial Math", text: "The exact cocktail count needed to break even on the Deluxe Beverage Package ($70–$95/day) versus buying drinks à la carte." },
      { title: "The Free Food Reality", text: "Why you never need to spend an extra dollar on specialty dining thanks to high-quality complimentary MDR and Windjammer options." },
      { title: "Port Taxes & Gratuities Impact", text: "Understanding how automatic daily service charges ($18.50/day) and destination dockage fees change your final total." }
    ]
  };

  const data = videoData || defaultData;

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Video Player Column (7 cols) */}
          <div className="lg:col-span-7">
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
                HD Video Guide · Real Cruise Costs
              </span>
              <span>Watch with sound on 🔊</span>
            </div>
          </div>

          {/* Key Takeaways & Description Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
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

            {/* Takeaway Cards */}
            <div className="space-y-3 pt-2">
              {data.takeaways && data.takeaways.map((takeaway, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">{takeaway.title}</h4>
                    <p className="text-xs text-slate-300 font-light mt-0.5 leading-relaxed">{takeaway.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RCCostVideoShowcaseOne;
