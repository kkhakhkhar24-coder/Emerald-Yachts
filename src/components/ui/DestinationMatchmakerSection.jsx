import React from 'react';
import { Plus, Minus, Heart } from 'lucide-react';
import FadeIn from './FadeIn';

const VIBES = {
  positano: 'Iconic Glamour',
  ravello: 'Clifftop Peace',
  amalfi: 'Maritime Hub',
  capri: 'Island Prestige',
};

const DestinationMatchmakerSection = ({ comparisons = [], images = {}, title, subtitle, badge }) => {
  if (!comparisons || !comparisons.length) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
              {badge || 'Destination Matchmaker'}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {title || 'Amalfi vs Positano vs Ravello vs Capri'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
              {subtitle ||
                'Every coastal destination serves a distinct luxury priority. Compare atmosphere, strengths, trade-offs and the traveler each one suits best.'}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((c, i) => {
            const key = c.destination.toLowerCase();
            return (
              <FadeIn key={c.destination} delay={(i % 2) * 0.1}>
                <article className="h-full flex flex-col bg-white border border-[#c3e0e5] shadow-md rounded-sm overflow-hidden">
                  <div className="relative h-56 bg-[#222d4b]">
                    {images[key] && (
                      <img
                        src={images[key]}
                        alt={`${c.destination}, Amalfi Coast`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222d4b]/90 via-[#222d4b]/20 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                      <h3 className="text-3xl font-display text-white">{c.destination}</h3>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-[#c3e0e5] text-[#222d4b]">
                        {VIBES[key] || 'Signature stop'}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 sm:p-8 space-y-5">
                    <p className="text-base italic text-[#274472] leading-relaxed border-l-2 border-[#5290c9] pl-4">
                      {c.atmosphere}
                    </p>
                    <div className="flex gap-3">
                      <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#5290c9] text-white flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </span>
                      <p className="text-sm leading-relaxed text-[#222d4b]">
                        <strong className="block text-xs uppercase tracking-wider text-[#5290c9] mb-1">
                          Strengths
                        </strong>
                        {c.advantages}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#222d4b] text-white flex items-center justify-center">
                        <Minus className="w-4 h-4" />
                      </span>
                      <p className="text-sm leading-relaxed text-[#222d4b]">
                        <strong className="block text-xs uppercase tracking-wider text-[#274472] mb-1">
                          Trade-offs
                        </strong>
                        {c.drawbacks}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start bg-[#c3e0e5]/40 px-6 sm:px-8 py-5 border-t border-[#c3e0e5]">
                    <Heart className="w-4 h-4 mt-0.5 shrink-0 text-[#274472]" />
                    <p className="text-sm leading-relaxed text-[#222d4b]">
                      <strong className="text-[#274472]">Best for: </strong>
                      {c.bestTraveler}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationMatchmakerSection;
