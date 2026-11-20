import React, { useState } from 'react';
import { Sun, Calendar, Clock, Sparkles, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import CrawlablePanels from './CrawlablePanels';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiSeasonalGuideAndItineraries = ({ seasons = [], itineraries = [] }) => {
  const [activeItineraryTab, setActiveItineraryTab] = useState(0);

  return (
    <section className="py-20 bg-[#222d4b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Seasonal Breakdown Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c3e0e5] font-bold bg-[#274472] px-4 py-1.5 rounded-full border border-[#5290c9]/40 inline-block mb-4">
            Best Time to Visit
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-white font-bold mb-4">
            Amalfi Seasonal Planning & Weather Guide
          </h2>
          <div className="mx-auto mt-4 mb-6 h-px w-16 bg-[#5290c9]" />
          <p className="text-[#c3e0e5]/90 text-base sm:text-lg">
            Understand how sea temperatures, tourist density, hotel availability, and ferry schedules shift across the year.
          </p>
        </div>

        {/* 4 Season Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {seasons.map((s, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                idx === 0 || idx === 2
                  ? 'bg-gradient-to-b from-[#274472] to-[#222d4b] border-[#5290c9]/60 shadow-xl shadow-[#222d4b]/60 ring-1 ring-[#5290c9]/30'
                  : 'bg-[#274472] border-white/10 hover:border-[#5290c9]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#222d4b] text-[#c3e0e5] border border-[#5290c9]/30">
                    {s.season}
                  </span>
                  <Sun className="w-4 h-4 text-[#5290c9]" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{s.rating}</h3>
                <div className="space-y-1.5 text-xs text-[#c3e0e5]/85 mb-4">
                  <div><span className="text-[#c3e0e5]/60">Temp:</span> <span className="text-white">{s.temp}</span></div>
                  <div><span className="text-[#c3e0e5]/60">Crowds:</span> <span className="text-white">{s.crowds}</span></div>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {s.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Curated Luxury Itineraries Section */}
        <div className="pt-12 border-t border-[#5290c9]/25">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c3e0e5] font-bold bg-[#274472] px-4 py-1.5 rounded-full border border-[#5290c9]/40 inline-block mb-4">
              Bespoke Timeframes
            </span>
            <h2 className="text-3xl sm:text-4xl font-display text-white font-bold mb-4">
              Curated Luxury Amalfi Itineraries
            </h2>
            <div className="mx-auto mt-4 mb-6 h-px w-16 bg-[#5290c9]" />
            <p className="text-[#c3e0e5]/90 text-base sm:text-lg">
              Explore day-by-day luxury progressions tailored for 3-day weekend sprints, 5-day immersive stays, and 7-day Grand Southern Italy vacations.
            </p>
          </div>

          {/* Itinerary Tab Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {itineraries.map((it, idx) => (
              <button
                key={idx}
                onClick={() => setActiveItineraryTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeItineraryTab === idx
                    ? 'bg-[#5290c9] text-white shadow-lg shadow-[#222d4b]/50 border border-[#5290c9]'
                    : 'bg-[#274472] text-[#c3e0e5] hover:bg-[#274472]/80 hover:text-white border border-white/10'
                }`}
              >
                {it.duration}
              </button>
            ))}
          </div>

          {/* Active Itinerary Card */}
          {itineraries[activeItineraryTab] && (
            <div className="bg-[#274472] rounded-2xl border border-white/15 p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                <Compass className="w-6 h-6 text-[#5290c9]" />
                <h3 className="text-2xl font-display text-white font-bold">
                  {itineraries[activeItineraryTab].duration}
                </h3>
              </div>

              <div className="space-y-4">
                {Object.keys(itineraries[activeItineraryTab])
                  .filter(k => k.startsWith('day'))
                  .map((dayKey) => (
                    <div
                      key={dayKey}
                      className="bg-[#222d4b] p-5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 hover:border-[#5290c9]/40 transition-colors"
                    >
                      <span className="px-3 py-1 rounded bg-[#5290c9]/20 text-[#c3e0e5] border border-[#5290c9]/40 text-xs font-bold uppercase tracking-wider shrink-0">
                        {dayKey.toUpperCase()}
                      </span>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {itineraries[activeItineraryTab][dayKey]}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

      </div>
      <CrawlablePanels items={itineraries} activeIndex={activeItineraryTab} />
    </section>
  );
};

export default AmalfiSeasonalGuideAndItineraries;
