import React from 'react';
import { Clock, Star, Repeat, Anchor, Sun, MapPin, Compass, Luggage } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const ICONS = [Clock, Star, Repeat, Anchor, Sun, MapPin, Compass, Luggage];

const BrandTakeawaysGrid = ({ title, subtitle, items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            {subtitle && (
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
                {subtitle}
              </span>
            )}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {title}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeIn key={item.title} delay={(i % 4) * 0.08} className="h-full">
                <article className="group h-full flex flex-col bg-white border border-[#c3e0e5] border-t-4 border-t-[#274472] p-7 shadow-sm hover:shadow-xl hover:border-t-[#5290c9] transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <span className="w-12 h-12 rounded-full bg-[#274472] text-white flex items-center justify-center group-hover:bg-[#5290c9] transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="font-display text-4xl text-[#c3e0e5]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-display text-[#222d4b] mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#274472]/80">{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandTakeawaysGrid;
