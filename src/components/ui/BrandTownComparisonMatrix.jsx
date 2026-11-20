import React from 'react';
import { MapPin, Plus, Minus, Heart } from 'lucide-react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const BrandTownComparisonMatrix = ({ comparisons = [] }) => {
  if (!comparisons || !comparisons.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#5290c9] font-bold">
            Destination Matchmaker
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
            Amalfi vs Positano vs Ravello vs Capri
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
          <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
            Every coastal town serves a different vacation priority. Compare advantages, terrain
            realities, and ideal matches.
          </p>
        </div>

        {/* 4 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((c, idx) => {
            const featured = idx === 0;
            return (
              <article
                key={idx}
                className={`rounded-sm border p-8 flex flex-col justify-between shadow-md transition-all ${
                  featured
                    ? 'bg-[#274472] border-[#274472] text-white'
                    : 'bg-white border-[#c3e0e5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2.5">
                      <MapPin
                        className={`w-5 h-5 ${featured ? 'text-[#c3e0e5]' : 'text-[#5290c9]'}`}
                      />
                      <h3
                        className={`text-2xl font-display ${
                          featured ? 'text-white' : 'text-[#222d4b]'
                        }`}
                      >
                        {c.destination}
                      </h3>
                    </div>
                    {featured && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#c3e0e5] text-[#222d4b]">
                        Central Hub
                      </span>
                    )}
                  </div>

                  <div
                    className={`p-4 rounded-sm mb-5 border ${
                      featured
                        ? 'bg-white/5 border-white/10'
                        : 'bg-[#c3e0e5]/30 border-[#c3e0e5]'
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
                        featured ? 'text-[#c3e0e5]' : 'text-[#5290c9]'
                      }`}
                    >
                      Atmosphere
                    </span>
                    <p className={`text-sm ${featured ? 'text-white/90' : 'text-[#222d4b]'}`}>
                      {c.atmosphere}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-start space-x-2.5">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#5290c9] text-white flex items-center justify-center">
                        <Plus className="w-3.5 h-3.5" />
                      </span>
                      <span className={featured ? 'text-white/90' : 'text-[#274472]'}>
                        <strong className={featured ? 'text-white' : 'text-[#222d4b]'}>
                          Advantages:{' '}
                        </strong>
                        {c.advantages}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2.5">
                      <span
                        className={`shrink-0 mt-0.5 w-5 h-5 rounded-full text-white flex items-center justify-center ${
                          featured ? 'bg-[#222d4b]' : 'bg-[#222d4b]'
                        }`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </span>
                      <span className={featured ? 'text-white/90' : 'text-[#274472]'}>
                        <strong className={featured ? 'text-white' : 'text-[#222d4b]'}>
                          Trade-Offs:{' '}
                        </strong>
                        {c.drawbacks}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex items-start space-x-2.5 p-4 rounded-sm ${
                    featured
                      ? 'border-white/10 bg-white/5'
                      : 'border-[#c3e0e5] bg-[#c3e0e5]/30'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      featured ? 'text-[#c3e0e5]' : 'text-[#274472]'
                    }`}
                  />
                  <div className="text-xs">
                    <span
                      className={`font-bold block mb-0.5 ${
                        featured ? 'text-[#c3e0e5]' : 'text-[#5290c9]'
                      }`}
                    >
                      Best For:
                    </span>
                    <span className={featured ? 'text-white/85' : 'text-[#274472]'}>
                      {c.bestTraveler}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandTownComparisonMatrix;
