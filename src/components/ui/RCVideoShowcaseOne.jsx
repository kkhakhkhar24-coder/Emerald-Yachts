import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const RCVideoShowcaseOne = ({ videoData }) => {
  const defaultData = {
    eyebrow: "Video Deep-Dive: Part 1",
    title: "What is Included on a Royal Caribbean Cruise? (Hidden Costs & Inclusions)",
    description: "Watch this comprehensive walkthrough highlighting every major inclusion, dining venue, free activity, and common extra-charge trap before you step aboard.",
    videoUrl: "https://www.youtube.com/embed/WI2ADPnYqe8",
    badge: "Essential Inclusions Guide",
    takeaways: [
      { title: "Complimentary Dining Quality", text: "How the Main Dining Room and Windjammer compare to specialty venues, and why you never HAVE to spend a dime on extra food." },
      { title: "Free Shows & Broadway Licensing", text: "Why Royal Caribbean's multi-million dollar theatrical productions are the gold standard of high-seas complimentary entertainment." },
      { title: "Daily Beverage Reality Check", text: "What drinks are 100% free (iced tea, lemonade, drip coffee, milk, juices at breakfast) vs what triggers an extra bill." },
      { title: "Thrill Attractions Access", text: "Unlimited free sessions on the FlowRider, rock walls, waterslides, zip lines, and ice skating rinks during open voyage hours." }
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
              {data.takeaways && data.takeaways.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">{item.title}</h4>
                    <p className="text-xs text-slate-300 font-light mt-0.5 leading-relaxed">{item.text}</p>
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

export default RCVideoShowcaseOne;
