import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const CuratedItinerariesSection = ({ itineraries = [] }) => {
  const [activeTab, setActiveTab] = useState(1); // 7-day classic by default

  if (!itineraries || !itineraries.length) return null;

  const active = itineraries[activeTab];
  const days = Object.keys(active).filter((k) => k.startsWith('day'));
  const [label, tag] = active.duration.replace(')', '').split(' (');

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
              Day-by-Day Journeys
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              Curated Luxury Amalfi Itineraries
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
              A five-day sprint, a seven-day classic or a ten-day grand tour. Pick a length and
              see exactly how each day unfolds.
            </p>
          </div>
        </FadeIn>

        <div
          role="tablist"
          className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-white border border-[#c3e0e5] rounded-sm w-fit mx-auto max-w-full"
        >
          {itineraries.map((it, i) => (
            <button
              key={it.duration}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === i
                  ? 'bg-[#274472] text-white'
                  : 'text-[#274472] hover:bg-[#c3e0e5]/60'
              }`}
            >
              {it.duration.replace(/\s*\(.*?\)\s*/g, '').trim()}
            </button>
          ))}
        </div>

        <div className="bg-white border border-[#c3e0e5] shadow-md rounded-sm p-6 sm:p-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-8">
            <h3 className="text-2xl sm:text-3xl font-display text-[#222d4b]">{label}</h3>
            {tag && (
              <span className="text-xs font-bold uppercase tracking-wider text-[#5290c9]">
                {tag}
              </span>
            )}
          </div>

          <ol className="relative">
            <span
              className="absolute left-5 top-2 bottom-2 w-px bg-[#c3e0e5]"
              aria-hidden="true"
            />
            {days.map((dayKey) => (
              <li key={dayKey} className="relative flex gap-5 pb-7 last:pb-0">
                <span className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#274472] text-white text-sm font-bold flex items-center justify-center ring-4 ring-white">
                  {dayKey.replace('day', '')}
                </span>
                <div className="pt-1.5">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#5290c9] mb-1">
                    Day {dayKey.replace('day', '')}
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-[#222d4b]">
                    {active[dayKey]}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 pt-6 border-t border-[#c3e0e5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#274472]/75 text-center sm:text-left">
              Every itinerary can be tailored by Angela Hughes, from suites and yacht charters to
              private guides.
            </p>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3 bg-[#274472] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#222d4b] transition-colors"
            >
              Customize This Itinerary
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedItinerariesSection;
