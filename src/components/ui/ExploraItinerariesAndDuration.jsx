import React from 'react';
import FadeIn from './FadeIn';

const ExploraItinerariesAndDuration = () => {
  const considerations = [
    { label: 'Destinations', text: 'Which ports and regions matter most to you?' },
    { label: 'Time ashore', text: 'How much opportunity will you have to explore?' },
    { label: 'Sea days', text: 'Do you enjoy relaxing onboard between destinations?' },
    { label: 'Cruise duration', text: 'Would you prefer a shorter getaway or a longer journey?' },
    { label: 'Travel logistics', text: 'Where does the cruise begin and end?' }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block text-center">
            Planning Your Voyage
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 leading-tight text-center">
            Itineraries and Cruise Duration: Which Experience Fits You?
          </h2>
          <div className="space-y-5 mb-8">
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              One of the most important differences between two luxury cruises may be the itinerary rather than the ship.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              A seven-night voyage with frequent port calls can feel very different from a journey that allows more time at sea.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Some travelers want to discover several destinations in one vacation. Others prefer a balance between exploring ashore and enjoying the ship.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              When comparing Silversea and Explora Journeys, consider:
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {considerations.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-200">
                <span className="font-display text-sm text-gold-500 uppercase tracking-wider flex-shrink-0 w-32">{item.label}:</span>
                <span className="font-sans text-slate-600 text-sm font-light">{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-slate-600 font-light leading-relaxed">
            The longest itinerary is not necessarily the best one. What matters is how the journey fits your interests, schedule, and preferred pace.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraItinerariesAndDuration;
