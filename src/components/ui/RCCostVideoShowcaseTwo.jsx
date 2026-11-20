import React from 'react';
import { Sparkles, Video, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const RCCostVideoShowcaseTwo = ({ videoData }) => {
  const defaultData = {
    eyebrow: "Video Cost Guide: Part 2",
    title: "Smart Cruising Masterclass: Avoiding Hidden Cruise Costs",
    description: "Learn insider tactics for navigating shore excursion markups, specialty dining lunch discounts, and onboard SeaPass account monitoring.",
    videoUrl: "https://www.youtube.com/embed/Jk3kktZ9ecY",
    badge: "Money-Saving Masterclass",
    keyHighlights: [
      { title: "Excursion Booking Strategy", text: "Comparing Royal Caribbean guaranteed shore tours against reputable independent local operators for 30% savings." },
      { title: "Specialty Dining Lunch Secrets", text: "How booking specialty restaurants for sea-day lunch gives you 90% of the dinner menu at nearly half the cover charge." },
      { title: "Onboard Spending Cap Limits", text: "How to set daily spending thresholds on linked SeaPass cards for kids and teens through Guest Services on Day 1." },
      { title: "Disembarkation Bill Audit", text: "Why reviewing your digital folio in the Royal Caribbean app on Day 6 prevents unexpected billing disputes on departure morning." }
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
              {data.keyHighlights && data.keyHighlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">{item.title}</h4>
                    <p className="text-xs text-slate-300 font-light mt-0.5 leading-relaxed">{item.text}</p>
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
                Cost Avoidance Video Guide
              </span>
              <span>Watch with sound on 🔊</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RCCostVideoShowcaseTwo;
