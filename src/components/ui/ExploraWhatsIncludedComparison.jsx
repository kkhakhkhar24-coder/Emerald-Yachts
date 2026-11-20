import React from 'react';
import FadeIn from './FadeIn';

const ExploraWhatsIncludedComparison = () => {
  const silverseaInclusions = [
    'Butler service for every suite',
    'Multiple dining options and in-suite dining',
    'A selection of wines, champagne, spirits, and other beverages',
    'Wi-Fi access',
    'Onboard gratuities',
    'Selected wellness and fitness facilities',
    'Entertainment and enrichment experiences'
  ];

  const exploraInclusions = [
    'Multiple culinary experiences, including in-suite dining',
    'A selection of wines, champagne, spirits, and nonalcoholic beverages',
    'High-speed Wi-Fi',
    'Onboard gratuities',
    'Access to selected Ocean Wellness facilities',
    'Group wellness and fitness activities',
    'Port-to-city-center shuttle services where required and available'
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Fare Inclusions
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              What's Included with Silversea vs. Explora Journeys?
            </h2>
            <div className="space-y-3">
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Luxury cruise fares often include a range of onboard amenities, but the details matter.
              </p>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Both brands offer substantial onboard benefits. However, the exact inclusions can depend on the fare, ship, suite category, and sailing.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-full flex flex-col">
              <h3 className="font-display text-xl text-navy-950 mb-2">Silversea: Core Onboard Inclusions</h3>
              <p className="font-sans text-slate-500 text-sm font-light mb-4">Silversea's published onboard offerings for Silver Nova include:</p>
              <ul className="space-y-3 mb-6">
                {silverseaInclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-slate-600 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-slate-500 text-xs font-light leading-relaxed mt-auto">
                Certain specialty dining experiences, shore excursions, flights, hotels, and transfers may require additional payment or depend on the selected fare.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 h-full flex flex-col">
              <h3 className="font-display text-xl text-navy-950 mb-2">Explora Journeys: Core Onboard Inclusions</h3>
              <p className="font-sans text-slate-500 text-sm font-light mb-4">Explora Journeys' published standard inclusions include:</p>
              <ul className="space-y-3 mb-6">
                {exploraInclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-slate-600 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-2">
                <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">
                  Additional benefits may apply to higher suite categories.
                </p>
                <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">
                  Specialty culinary experiences, premium beverage selections, shore experiences, and certain transfers may involve additional charges.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExploraWhatsIncludedComparison;
