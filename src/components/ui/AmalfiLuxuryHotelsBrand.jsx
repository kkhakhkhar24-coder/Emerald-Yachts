import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Check, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiLuxuryHotelsBrand = ({ hotels = [] }) => {
  if (!hotels || !hotels.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#222d4b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5]">
              Curated 5-Star Accommodations
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
              Where to Stay in Amalfi: The Luxury Hotel Guide
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
              From cliffside sanctuaries with private sea-level beach clubs to historic converted
              13th-century monasteries overlooking the harbor.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, idx) => (
            <FadeIn key={hotel.name || idx} delay={(idx % 2) * 0.08}>
              <article className="h-full flex flex-col bg-[#274472] rounded-sm border border-white/10 hover:border-[#5290c9] transition-colors duration-300 p-8 shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-[#c3e0e5] text-[#222d4b] rounded-full">
                      {hotel.category}
                    </span>
                    <div className="flex text-[#5290c9]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#5290c9]" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-display text-white mb-2">{hotel.name}</h3>

                  <div className="flex items-center gap-2 text-white/60 text-xs mb-6">
                    <MapPin className="w-4 h-4 text-[#c3e0e5] shrink-0" />
                    <span>{hotel.location}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {hotel.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                        <Check className="w-4 h-4 text-[#5290c9] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-white/10 space-y-4">
                  <div className="bg-[#222d4b] p-4 rounded-sm border border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c3e0e5] block mb-0.5">
                      Ideal Traveler Match
                    </span>
                    <p className="text-white/75 text-xs leading-relaxed">{hotel.idealFor}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#5290c9] hover:bg-[#c3e0e5] hover:text-[#222d4b] text-white font-semibold py-3 px-4 rounded-sm text-xs uppercase tracking-wider transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reserve With Trips &amp; Ships VIP Amenities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmalfiLuxuryHotelsBrand;
