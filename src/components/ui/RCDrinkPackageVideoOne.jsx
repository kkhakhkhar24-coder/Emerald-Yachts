import React from 'react';
import { Sparkles, Video, CheckCircle2 } from 'lucide-react';
import LiteYouTubeEmbed from '@/components/ui/LiteYouTubeEmbed';

const RCDrinkPackageVideoOne = ({ videoData }) => {
  const defaultData = {
    eyebrow: "Video Analysis: Part 1",
    title: "Is the Royal Caribbean Drink Package Worth It? (Real Break-Even Math)",
    description: "Watch this thorough financial breakdown evaluating cocktail pricing, gratuities, sea-day habits, and package discounts.",
    videoUrl: "https://www.youtube.com/embed/5q3aVoRZ8No",
    badge: "Drink Package Calculator Guide",
    takeaways: [
      { title: "The 18% Gratuity Surprise", text: "Why an advertised $75/day package actually bills at $88.50/day ($619.50 per person for 7 nights) once mandatory service fees are applied." },
      { title: "The $14 Drink Ceiling", text: "How Royal Caribbean's $14 maximum limit works, and why high-end martinis or aged scotches will trigger an extra out-of-pocket surcharge." },
      { title: "Non-Alcoholic Drink Offsets", text: "How drinking $5 morning lattes, $4 afternoon Red Bulls, and $4 bottled waters lowers your required cocktail break-even count from 6 to 3 per day." },
      { title: "CocoCay Island Inclusions", text: "Why Perfect Day at CocoCay extends your package value to tropical beach bars and Oasis Lagoon without extra fees." }
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
                HD Video Guide · Drink Package Analysis
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
              <h4 className="text-xs uppercase font-bold tracking-wider text-gold-400">
                Key Financial Takeaways:
              </h4>
              {data.takeaways && data.takeaways.map((takeaway, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                      {takeaway.title}
                    </h5>
                    <p className="text-xs text-slate-300 font-light mt-0.5 leading-relaxed">
                      {takeaway.text}
                    </p>
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

export default RCDrinkPackageVideoOne;
