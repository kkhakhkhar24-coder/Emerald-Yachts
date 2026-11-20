import React from 'react';
import FadeIn from './FadeIn';

const ExploraDiningComparison = () => {
  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Culinary Comparison
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Dining: Silversea vs. Explora Journeys
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Dining can be one of the most memorable parts of a luxury cruise.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed mt-3">
              Both cruise lines offer extensive culinary experiences, but restaurant concepts, dining arrangements, and specialty options vary.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-full">
              <h3 className="font-display text-xl text-navy-950 mb-4">Dining on Silver Nova</h3>
              <div className="space-y-4">
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Silver Nova offers multiple dining venues, including experiences connected to Silversea's S.A.L.T. culinary program.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  S.A.L.T. explores the relationship between cuisine, regional traditions, and destinations. This may appeal to travelers who enjoy discovering places through food and culture.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Silver Nova also offers specialty dining experiences. For example, La Dame is a French fine-dining restaurant with a reservation fee.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-full">
              <h3 className="font-display text-xl text-navy-950 mb-4">Dining on EXPLORA I</h3>
              <div className="space-y-4">
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  EXPLORA I offers multiple dining venues, including Sakura, Marble & Co. Grill, Med Yacht Club, Fil Rouge, and Emporium Marketplace.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  These venues provide different cuisines and dining environments throughout the voyage.
                </p>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  Explora Journeys also offers specialty culinary experiences outside its standard inclusions. Anthology, for example, is offered at an additional charge.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-xl text-navy-950 mb-4 text-center">Which Dining Experience Fits You?</h3>
            <div className="space-y-3">
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Silversea may appeal to travelers who appreciate destination-inspired cuisine and traditional fine dining.
              </p>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Explora Journeys may appeal to travelers who enjoy contemporary restaurant settings and international dining variety.
              </p>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Both provide substantial dining choices, but reservations, specialty experiences, and additional charges should be reviewed for the specific ship and sailing.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraDiningComparison;
