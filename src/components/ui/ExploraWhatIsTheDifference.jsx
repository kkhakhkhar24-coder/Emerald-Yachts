import React from 'react';
import FadeIn from './FadeIn';

const ExploraWhatIsTheDifference = () => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block text-center">
            The Core Distinction
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 leading-tight text-center">
            What Is the Difference Between Silversea and Explora Journeys?
          </h2>
          <div className="space-y-5">
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Silversea offers ocean and expedition voyages with a focus on personalized hospitality and destination exploration.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Explora Journeys takes a contemporary approach to luxury ocean travel, emphasizing generous spaces, wellness, sophisticated dining, and an unhurried onboard lifestyle.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Both deliver luxury, but they approach the experience differently.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              The most meaningful comparison begins with the specific voyages available for your travel dates.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraWhatIsTheDifference;
