import React from 'react';
import { 
  Compass, 
  Clock, 
  Sparkles
} from 'lucide-react';
import MasterImage from './MasterImage';

const RCDrinkPackageItineraryMatrix = ({ itineraryMatrix, bannerImage, itineraryImages, hideImages = false }) => {
  if (!itineraryMatrix) return null;

  const { eyebrow, title, description, itineraries = [] } = itineraryMatrix;
  const hasRatings = itineraries.some(i => i.rating);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <span className="text-gold-400 font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            {title}
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Featured Visual Itinerary Banner */}
        {!hideImages && (
          <div className="max-w-5xl mx-auto mb-14 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="relative aspect-[16/6] w-full">
              <MasterImage
                src={bannerImage || null}
                alt="Itinerary Value Analysis"
                placeholderLabel="CRUISE ITINERARY DRINK PACKAGE VALUATION: SEA DAYS VS. PORT DAYS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* 6 Itinerary Cards (6 Items) */}
        <div className="space-y-8 max-w-5xl mx-auto mb-12">
          {itineraries.map((itin, idx) => {
            const isHigh = itin.rating?.includes('🟢') ?? false;
            const isLow = itin.rating?.includes('🔴') ?? false;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Visual Card Image Column */}
                {!hideImages && (
                  <div className="w-full md:w-2/5 aspect-[16/10] md:aspect-auto relative overflow-hidden">
                    <MasterImage
                      src={(itineraryImages && itineraryImages[idx]) || null}
                      alt={itin.region}
                      placeholderLabel={`DESTINATION: ${itin.region.toUpperCase()}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content Column */}
                <div className={`w-full ${hideImages ? 'p-8 md:p-10' : 'md:w-3/5 p-8'} flex flex-col justify-between space-y-4`}>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80 mb-3">
                      <div>
                        <h3 className="text-xl font-display font-normal text-navy-950">
                          {itin.region}
                        </h3>
                        <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1.5 mt-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {itin.seaDays}
                        </span>
                      </div>

                      {itin.rating && (
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold shrink-0 bg-ice-50 text-navy-950 border border-slate-200">
                          {itin.rating.replace(/[\u{1F7E0}-\u{1F7EB}\u{1F534}\u{1F7E2}\u{1F7E1}]/gu, '').trim()}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed mb-4">
                      {itin.description || itin.analysis || ''}
                    </p>
                  </div>

                  <div className="p-4 bg-ice-50 rounded-2xl border border-slate-200 flex items-start gap-3 text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4 text-[#c9a15c] shrink-0 mt-0.5" />
                    <span className="text-navy-950 font-medium">{itin.recommendation}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RCDrinkPackageItineraryMatrix;
