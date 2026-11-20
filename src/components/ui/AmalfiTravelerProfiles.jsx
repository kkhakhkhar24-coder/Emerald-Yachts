import React, { useState } from 'react';
import { Check, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiTravelerProfiles = ({ title, subtitle, profiles = [] }) => {
  const [active, setActive] = useState(0);
  if (!profiles.length) return null;
  const p = profiles[active];

  return (
    <section className="py-20 md:py-28 bg-[#274472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5]">
              Find Your Fit
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
              {title || 'Matching the Area to Your Travel Style'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {subtitle && <p className="mt-6 text-base sm:text-lg text-white/75">{subtitle}</p>}
          </div>
        </FadeIn>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {profiles.map((profile, i) => (
            <button
              key={profile.id || profile.name}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`px-6 py-3 rounded-full text-sm font-semibold border transition-colors ${
                active === i
                  ? 'bg-white text-[#274472] border-white'
                  : 'bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              {profile.name}
            </button>
          ))}
        </div>

        {/* Active profile */}
        <div className="bg-white/5 border border-white/10 rounded-sm p-5 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {p.image && (
              <div className="lg:col-span-5 relative min-h-[260px] rounded-sm overflow-hidden">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222d4b]/90 via-[#222d4b]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c3e0e5] block mb-1">
                    Traveler Profile
                  </span>
                  <h3 className="text-3xl font-display text-white">{p.name}</h3>
                </div>
              </div>
            )}

            <div className={`flex flex-col justify-center ${p.image ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
              <div className="bg-white/10 rounded-sm p-7 border border-white/10 relative overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-1 bg-[#5290c9]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c3e0e5] flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4" /> Recommended Base
                </span>
                <p className="text-2xl md:text-3xl font-display text-white mb-4">{p.recommendation}</p>
                <p className="text-base text-white/80 leading-relaxed flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#c3e0e5] shrink-0 mt-1" />
                  <span>{p.reason}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmalfiTravelerProfiles;
