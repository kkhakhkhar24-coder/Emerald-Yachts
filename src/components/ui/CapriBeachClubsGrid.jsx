import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const DetailRow = ({ label, value }) => (
  <div className="border-t border-white/10 pt-3">
    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 block mb-1.5">
      {label}
    </span>
    <p className="font-sans text-sm text-ice-200 leading-relaxed font-light">
      {value}
    </p>
  </div>
);

const CapriBeachClubsGrid = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  // The seventh club becomes a full-width feature card so the grid never
  // ends on an orphaned single column.
  const featureIndex = items.length % 3 === 1 ? items.length - 1 : -1;

  return (
    <section className="w-full bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">

        <FadeIn className="text-center mb-16 max-w-4xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-500 block mb-4">
            Seven Capri Lidos Compared
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-[1.1] mb-6">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gold-400 mx-auto mb-6" />
          {subtitle && (
            <p className="font-sans text-lg text-slate-600 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const isFeature = idx === featureIndex;

            return (
              <FadeIn
                key={item.name || idx}
                delay={idx * 0.08}
                className={isFeature ? 'lg:col-span-3 h-full' : 'h-full'}
              >
                <article
                  className={`group relative h-full w-full overflow-hidden rounded-2xl bg-navy-950 border border-white/10 shadow-xl transition-all duration-500 hover:border-gold-400/50 hover:shadow-2xl ${
                    isFeature ? 'flex flex-col lg:flex-row' : 'flex flex-col'
                  }`}
                >
                  {/* Image */}
                  <div className={`relative shrink-0 overflow-hidden ${
                    isFeature ? 'h-64 lg:min-h-[380px] lg:w-2/5' : 'h-56'
                  }`}>
                    <MasterImage
                      src={item.image}
                      alt={`${item.name} — ${item.location}`}
                      placeholderLabel={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                    {item.category && (
                      <span className="absolute top-5 left-5 inline-block px-3 py-1 bg-gold-500/15 text-gold-400 border border-gold-500/30 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-7 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display text-2xl text-white/25 font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-gold-400 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                    </div>

                    <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-ice-300/60 mb-4">
                      {item.location} &middot; {item.experience}
                    </p>

                    <p className="font-sans text-sm text-ice-200 leading-relaxed font-light mb-4">
                      <span className="text-gold-400 font-semibold">Best for: </span>
                      {item.bestFor}
                    </p>

                    <p className="font-sans text-sm text-ice-200/85 leading-relaxed font-light mb-6">
                      {item.whyGo}
                    </p>

                    <div className="mt-auto flex flex-col gap-3">
                      <DetailRow label="Swimming" value={item.swimming} />
                      <DetailRow label="Worth knowing" value={item.considerations} />
                    </div>
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

export default CapriBeachClubsGrid;