import React from 'react';
import { Calendar, MapPin, Compass, Clock, Check, Sparkles } from 'lucide-react';

const WhichCruiseDurationAndItinerary = ({ itineraries = [] }) => {
  if (!itineraries || !itineraries.length) return null;

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 text-xs font-semibold tracking-wider uppercase mb-3">
            Duration & Itinerary Strategy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            Matching Your Vacation Window to the Right Route
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Royal Caribbean sailings range from 3-night Bahamas weekend sprints to 12-night European grand tours. Here is how ship sizing and itinerary pacing correlate.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {itineraries.map((itinerary, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2.5 text-navy-800">
                    <Calendar className="w-5 h-5 text-[#c9a15c]" />
                    <span className="text-xs font-bold tracking-wider uppercase font-sans text-slate-400">Voyage Length</span>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-ice-50 text-navy-950 rounded-full border border-slate-200">
                    Segment 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-navy-950 mb-4">
                  {itinerary.type}
                </h3>

                {/* Best Ship Match */}
                <div className="bg-slate-50 rounded-2xl p-4 mb-4 border border-slate-200/80 flex items-start space-x-3">
                  <Compass className="w-5 h-5 text-[#c9a15c] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Optimal Ship Class
                    </span>
                    <span className="text-navy-950 font-serif font-medium text-base">
                      {itinerary.bestVessel}
                    </span>
                  </div>
                </div>

                {/* Destinations */}
                <div className="bg-slate-50/60 rounded-2xl p-4 mb-4 border border-slate-200/60 flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-navy-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Signature Ports & Itineraries
                    </span>
                    <span className="text-slate-600 font-sans text-sm font-light leading-relaxed">
                      {itinerary.destinations}
                    </span>
                  </div>
                </div>

                {/* Pacing & Style */}
                <div className="bg-slate-50/40 rounded-2xl p-4 border border-slate-200/50 flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Vacation Pacing & Feel
                    </span>
                    <p className="text-slate-600 font-sans text-sm font-light leading-relaxed">
                      {itinerary.pacing}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Advice */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#c9a15c]" />
                  <span>Advisor booking perk available</span>
                </span>
                <span className="text-navy-800 font-semibold group-hover:text-[#c9a15c] transition-colors">Port Schedule &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhichCruiseDurationAndItinerary;
