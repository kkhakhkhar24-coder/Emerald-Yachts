import React from 'react';
import { AlertTriangle } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const CruiseMistakesBrand = ({ title = "Don't Make These Mistakes.", subtitle, mistakes = [] }) => {
  if (!mistakes.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#222d4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5]">
              Avoid These Pitfalls
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
              {title}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {subtitle && (
              <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">{subtitle}</p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mistakes.map((m, i) => (
            <FadeIn key={m.title} delay={(i % 2) * 0.08}>
              <article className="h-full flex gap-5 bg-[#274472] border border-white/10 rounded-sm p-6 shadow-lg">
                <div className="shrink-0 flex flex-col items-center">
                  <span className="w-11 h-11 rounded-full bg-[#5290c9] text-white flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </span>
                  <span className="mt-2 font-display text-2xl text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-display text-white mb-2">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{m.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CruiseMistakesBrand;
