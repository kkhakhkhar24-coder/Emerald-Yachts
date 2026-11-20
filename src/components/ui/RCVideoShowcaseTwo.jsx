import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const RCVideoShowcaseTwo = ({ videoData }) => {
  const defaultData = {
    eyebrow: "Video Deep-Dive: Part 2",
    title: "How to Maximize Value & Avoid Hidden Fees on Royal Caribbean",
    description: "Discover insider strategies for navigating Cruise Planner sales, tipping protocols, beverage calculations, and getting the most out of every dollar on your sailing.",
    videoUrl: "https://www.youtube.com/embed/mFF_uDDovG0",
    badge: "Smart Cruising Masterclass",
    keyHighlights: [
      { title: "The Cruise Planner Price Re-Price Hack", text: "How to cancel and re-book packages instantly when Royal Caribbean runs weekend flash sales without contacting customer support." },
      { title: "CocoCay Value Maximization", text: "Navigating free beaches vs paid cabanas, waterparks, and Hideaway Beach so you get the ideal balance of thrills and budget." },
      { title: "Specialty Dining Package Math", text: "How to calculate whether the Unlimited Dining Package or 3-Night Dining Package pays for itself based on your ship class." },
      { title: "Embarkation Day Strategy", text: "What to do in the first 90 minutes on board to lock in dining reservations, show seats, and youth club registrations." }
    ]
  };

  const data = videoData || defaultData;

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden border-y border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Text & Highlights Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <div>
              {data.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-gold-400 border border-gold-400/30 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {data.badge}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl font-display font-normal text-white leading-tight">
                {data.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-light leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-2 pt-1">
              {/* Some pages name this list "takeaways" — accept either key. */}
              {(data.keyHighlights || data.takeaways || []).map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl bg-navy-900/90 border border-navy-800/80 flex items-start gap-2.5 hover:border-gold-400/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">{item.title}</h4>
                    <p className="text-xs text-slate-300 font-light mt-0.5 leading-snug">{item.text}</p>
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default RCVideoShowcaseTwo;
