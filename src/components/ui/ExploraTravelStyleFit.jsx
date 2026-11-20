import React from 'react';
import FadeIn from './FadeIn';

const ExploraTravelStyleFit = () => {
  const silverseaPoints = [
    'Value traditional luxury hospitality and personalized service.',
    'Place a high priority on destination exploration.',
    'Enjoy discovering regional culture and cuisine.',
    'Are interested in ocean or expedition cruising.',
    'Prefer a refined and intimate onboard atmosphere.'
  ];

  const exploraPoints = [
    'Appreciate contemporary design and spacious accommodations.',
    'Enjoy a relaxed, residential-style environment.',
    'Want time to unwind between destinations.',
    'Value dining, wellness, and leisure experiences.',
    'Consider the ship itself an important part of the vacation.'
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Decide With Confidence
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-4 leading-tight">
              Which Luxury Cruise Fits Your Travel Style?
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-full">
              <h3 className="font-display text-xl text-navy-950 mb-5">Consider Silversea If You:</h3>
              <ul className="space-y-3">
                {silverseaPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-slate-600 text-sm font-light">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-full">
              <h3 className="font-display text-xl text-navy-950 mb-5">Consider Explora Journeys If You:</h3>
              <ul className="space-y-3">
                {exploraPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-slate-600 text-sm font-light">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-center max-w-2xl mx-auto">
            Rather than asking which cruise line is better overall, ask which experience is better suited to your priorities.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraTravelStyleFit;
