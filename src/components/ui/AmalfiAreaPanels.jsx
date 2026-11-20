import React from 'react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiAreaPanels = ({ title, description, items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#222d4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5]">
              Neighborhood by Neighborhood
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
              {title || 'Explore the Amalfi Areas'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {description && (
              <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">{description}</p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <FadeIn key={item.id || item.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-[22rem] rounded-sm overflow-hidden shadow-xl bg-[#274472]">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222d4b] via-[#222d4b]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-display text-white drop-shadow">{item.title}</h3>
                  <div className="h-0.5 w-10 bg-[#5290c9] my-3 transition-all duration-500 group-hover:w-20" />
                  <p className="text-sm leading-relaxed text-[#c3e0e5]">{item.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmalfiAreaPanels;
