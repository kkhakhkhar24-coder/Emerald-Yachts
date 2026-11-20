import React from 'react';
import { Thermometer } from 'lucide-react';
import FadeIn from './FadeIn';

const crowdLevel = (text = '') => {
  const t = text.toLowerCase();
  if (t.includes('maximum')) return 4;
  if (t.includes('high')) return 3;
  return 2;
};

const SeasonalPlanningSection = ({ seasons = [] }) => {
  if (!seasons || !seasons.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#274472] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5]">
              Optimal Timing & Climate
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display leading-tight">
              Amalfi Seasonal Planning & Weather Guide
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
              How sea temperature, crowd density, hotel availability and ferry schedules shift
              across the season, so you can pick the month that matches your pace.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {seasons.map((s, i) => {
            const [name, months] = s.season.replace(')', '').split(' (');
            const level = crowdLevel(s.crowds);
            const featured = s.rating.toLowerCase().includes('favorite');
            return (
              <FadeIn key={s.season} delay={i * 0.08}>
                <article
                  className={`h-full flex flex-col p-7 rounded-sm ${
                    featured ? 'bg-white text-[#222d4b] shadow-2xl' : 'bg-[#222d4b] border border-white/10'
                  }`}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.2em] ${
                      featured ? 'text-[#5290c9]' : 'text-[#c3e0e5]'
                    }`}
                  >
                    {months}
                  </span>
                  <h3 className="mt-2 text-2xl font-display">{name}</h3>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      featured ? 'text-[#274472]' : 'text-[#5290c9]'
                    }`}
                  >
                    {s.rating}
                  </p>

                  <div
                    className={`mt-6 pt-5 border-t space-y-4 ${
                      featured ? 'border-[#c3e0e5]' : 'border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Thermometer className="w-4 h-4 shrink-0 text-[#5290c9]" />
                      <span className="font-medium">{s.temp}</span>
                    </div>
                    <div>
                      <div className="flex gap-1.5" aria-hidden="true">
                        {[1, 2, 3, 4].map((n) => (
                          <span
                            key={n}
                            className={`h-1.5 flex-1 rounded-full ${
                              n <= level
                                ? 'bg-[#5290c9]'
                                : featured
                                ? 'bg-[#c3e0e5]'
                                : 'bg-white/15'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-wider opacity-75">
                        Crowds: {s.crowds}
                      </p>
                    </div>
                  </div>

                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      featured ? 'text-[#274472]/85' : 'text-white/80'
                    }`}
                  >
                    {s.summary}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPlanningSection;
