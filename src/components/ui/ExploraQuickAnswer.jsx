import React from 'react';
import FadeIn from './FadeIn';

const ExploraQuickAnswer = () => {
  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block text-center">
            Quick Answer
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 leading-tight text-center">
            Quick Answer: Silversea or Explora Journeys?
          </h2>
          <div className="space-y-5">
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Silversea may be a better fit if you value traditional luxury hospitality, personalized service, destination-focused itineraries, and the option to explore remote regions through expedition cruising.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Explora Journeys may be a better fit if you prefer contemporary design, spacious oceanfront accommodations, a relaxed residential-style atmosphere, and a vacation where enjoying the ship is an important part of the experience.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Neither cruise line is universally better. The right choice depends on your preferred destinations, voyage length, and travel priorities.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraQuickAnswer;
