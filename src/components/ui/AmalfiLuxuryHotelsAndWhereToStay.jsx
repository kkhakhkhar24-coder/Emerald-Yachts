import React from 'react';
import { Building2, Star, Check, MapPin, Sparkles, ArrowRight } from 'lucide-react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiLuxuryHotelsAndWhereToStay = ({ hotels = [] }) => {
  if (!hotels || !hotels.length) return null;

  return (
    <section className="py-20 bg-[#222d4b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c3e0e5] font-bold bg-[#274472] px-4 py-1.5 rounded-full border border-[#5290c9]/40 inline-block mb-4">
            Curated 5-Star Accommodations
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-white font-bold mb-4">
            Where to Stay in Amalfi: The Luxury Hotel Guide
          </h2>
          <div className="mx-auto mt-4 mb-6 h-px w-16 bg-[#5290c9]" />
          <p className="text-[#c3e0e5]/90 text-base sm:text-lg">
            From cliffside sanctuaries with private sea-level beach clubs to historic converted 13th-century monasteries overlooking the harbor.
          </p>
        </div>

        {/* 4 Luxury Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel, idx) => (
            <div
              key={idx}
              className="bg-[#274472] rounded-2xl border border-white/10 hover:border-[#5290c9] transition-all duration-300 p-8 flex flex-col justify-between shadow-xl hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5290c9]/10 rounded-bl-full group-hover:bg-[#5290c9]/15 transition-colors pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-[#222d4b] text-[#c3e0e5] rounded-full border border-[#5290c9]/40">
                    {hotel.category}
                  </span>
                  <div className="flex text-[#5290c9]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#5290c9]" />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-display text-white font-bold mb-2 group-hover:text-[#c3e0e5] transition-colors">
                  {hotel.name}
                </h3>

                <div className="flex items-center space-x-2 text-[#c3e0e5]/80 text-xs mb-6">
                  <MapPin className="w-4 h-4 text-[#5290c9] shrink-0" />
                  <span>{hotel.location}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {hotel.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-sm text-white/90">
                      <Check className="w-4 h-4 text-[#5290c9] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Ideal For & VIP booking CTA */}
              <div className="pt-5 border-t border-white/10 space-y-4">
                <div className="bg-[#222d4b] p-4 rounded-xl border border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c3e0e5] block mb-1">
                    Ideal Traveler Match
                  </span>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {hotel.idealFor}
                  </p>
                </div>

                <a
                  href="https://www.tripsandships.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#5290c9] hover:bg-[#c3e0e5] hover:text-[#222d4b] border border-[#5290c9] text-white font-semibold py-3 px-4 rounded-lg text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve With Trips & Ships VIP Amenities</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmalfiLuxuryHotelsAndWhereToStay;
