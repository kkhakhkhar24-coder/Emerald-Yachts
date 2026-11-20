import React from 'react';
import FadeIn from './FadeIn';

const ExploraEditorialNote = () => {
  return (
    <section className="w-full bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h4 className="font-display text-sm uppercase tracking-widest text-slate-500 mb-3">Editorial Note</h4>
          <div className="space-y-2">
            <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">
              This comparison is provided for general travel-planning purposes and is based on publicly available cruise-line information. It is not an official comparison issued by Silversea or Explora Journeys.
            </p>
            <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">
              Itineraries, onboard offerings, inclusions, fares, and availability may change. Please confirm the details of your selected voyage before booking.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraEditorialNote;
