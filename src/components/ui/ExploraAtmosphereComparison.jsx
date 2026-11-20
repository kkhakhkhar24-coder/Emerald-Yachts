import React from 'react';
import FadeIn from './FadeIn';

const ExploraAtmosphereComparison = () => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Onboard Life
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Onboard Atmosphere: Traditional Elegance or Contemporary Ocean Living?
            </h2>
            <div className="space-y-3">
              <p className="font-sans text-slate-600 font-light leading-relaxed">Luxury means different things to different travelers.</p>
              <p className="font-sans text-slate-600 font-light leading-relaxed">Some appreciate traditional elegance, intimate spaces, and highly personalized hospitality.</p>
              <p className="font-sans text-slate-600 font-light leading-relaxed">Others prefer contemporary interiors, generous spaces, and a more relaxed atmosphere.</p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 h-full">
              <h3 className="font-display text-xl text-navy-950 mb-4">The Silversea Experience</h3>
              <div className="space-y-4">
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Silversea emphasizes personalized hospitality and a refined onboard environment.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Its ocean and expedition ships offer different experiences, but destination exploration remains central to the brand.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Travelers who enjoy traditional luxury and attentive service may appreciate this approach.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 h-full">
              <h3 className="font-display text-xl text-navy-950 mb-4">The Explora Journeys Experience</h3>
              <div className="space-y-4">
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Explora Journeys emphasizes contemporary design, spacious oceanfront accommodations, wellness, and an unhurried pace.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Its residential-style atmosphere may appeal to travelers who want time to relax, enjoy dining, and experience the ship as an important part of their vacation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <p className="font-sans text-slate-600 font-light leading-relaxed">Neither atmosphere is right for everyone.</p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">The best choice depends on how you want your days and evenings onboard to feel.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraAtmosphereComparison;
