import React from 'react';
import { MapPin, ThumbsUp, ThumbsDown, UserCheck } from 'lucide-react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const IsAmalfiTownComparisonMatrix = ({ comparisons = [] }) => {
  if (!comparisons || !comparisons.length) return null;

  return (
    <section className="py-20 bg-[#222d4b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c3e0e5] font-bold bg-[#274472] px-4 py-1.5 rounded-full border border-[#5290c9]/40 inline-block mb-4">
            Destination Matchmaker
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-white font-bold mb-4">
            Amalfi vs Positano vs Ravello vs Capri
          </h2>
          <div className="mx-auto mt-4 mb-6 h-px w-16 bg-[#5290c9]" />
          <p className="text-[#c3e0e5]/90 text-base sm:text-lg">
            Every coastal town serves a different vacation priority. Compare advantages, terrain realities, and ideal matches.
          </p>
        </div>

        {/* 4 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((c, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-8 flex flex-col justify-between shadow-xl transition-all ${
                idx === 0
                  ? 'bg-gradient-to-b from-[#274472] to-[#222d4b] border-[#5290c9]/70 ring-1 ring-[#5290c9]/30 shadow-2xl'
                  : 'bg-[#274472] border-white/10 hover:border-[#5290c9]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2.5">
                    <MapPin className={`w-5 h-5 ${idx === 0 ? 'text-[#c3e0e5]' : 'text-[#5290c9]'}`} />
                    <h3 className="text-2xl font-display text-white font-bold">
                      {c.destination}
                    </h3>
                  </div>
                  {idx === 0 && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#c3e0e5] text-[#222d4b]">
                      Central Hub
                    </span>
                  )}
                </div>

                <div className="bg-[#222d4b] p-4 rounded-xl border border-white/10 mb-5">
                  <span className="text-xs font-semibold text-[#c3e0e5] block mb-1">Atmosphere:</span>
                  <p className="text-white/90 text-sm">{c.atmosphere}</p>
                </div>

                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="flex items-start space-x-2.5">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#5290c9] text-white flex items-center justify-center">
                      <ThumbsUp className="w-3 h-3" />
                    </span>
                    <span className="text-white/90"><strong className="text-white">Advantages:</strong> {c.advantages}</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#222d4b] text-[#c3e0e5] border border-[#5290c9]/40 flex items-center justify-center">
                      <ThumbsDown className="w-3 h-3" />
                    </span>
                    <span className="text-white/80"><strong className="text-white">Trade-Offs:</strong> {c.drawbacks}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-start space-x-2.5 bg-[#222d4b] p-4 rounded-xl">
                <UserCheck className="w-4 h-4 text-[#5290c9] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#c3e0e5] block mb-0.5">Best For:</span>
                  <span className="text-white/80">{c.bestTraveler}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsAmalfiTownComparisonMatrix;
