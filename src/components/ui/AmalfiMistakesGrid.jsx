import React from 'react';
import { AlertTriangle } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const AmalfiMistakesGrid = ({ title, subtitle, items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#222d4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5]">
              Plan Around These
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
              {title || 'Common Mistakes to Avoid'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {subtitle && (
              <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">{subtitle}</p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 2) * 0.1}>
              <article className="group h-full flex flex-col sm:flex-row bg-[#274472] rounded-sm overflow-hidden shadow-xl border border-white/10">
                <div className="relative sm:w-2/5 h-48 sm:h-auto shrink-0 overflow-hidden bg-[#222d4b]">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222d4b]/60 to-transparent" />
                  <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#5290c9] text-white flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-4 h-4" />
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c3e0e5] mb-1">
                    Mistake {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-display text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{item.content}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmalfiMistakesGrid;
