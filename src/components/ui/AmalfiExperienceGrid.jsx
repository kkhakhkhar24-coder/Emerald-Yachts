import React from 'react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiExperienceGrid = ({ title, subtitle, items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
              Match Your Day
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {title || 'Best Area by Experience'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {subtitle && (
              <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <article className="group h-full flex flex-col bg-white border border-[#c3e0e5] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-60 bg-[#222d4b] overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222d4b]/85 via-[#222d4b]/15 to-transparent" />
                  <h3 className="absolute bottom-5 left-6 right-6 text-2xl font-display text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 border-t-2 border-[#5290c9]">
                  <p className="text-sm leading-relaxed text-[#274472]/85">{item.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmalfiExperienceGrid;
