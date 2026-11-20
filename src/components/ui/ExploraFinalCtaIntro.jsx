import React from 'react';
import FadeIn from './FadeIn';

const ExploraFinalCtaIntro = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <FadeIn>
          <div className="space-y-4">
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              The best luxury cruise isn't necessarily the most expensive, the newest, or the one with the longest list of amenities.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              It's the one that fits how you want to travel.
            </p>
            <p className="font-sans text-navy-900 font-medium leading-relaxed">
              Request a personalized Silversea and Explora Journeys comparison.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Tell us your preferred destinations, travel dates, ideal voyage length, and what matters most to you.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              At Trips & Ships Luxury Travel, we'll help you compare available sailings, understand the inclusions, and explore which journey best matches your priorities.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraFinalCtaIntro;
