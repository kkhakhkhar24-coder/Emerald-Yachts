import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const CruiseAuthorityBox = ({ data }) => {
  const points = data?.points || [];
  if (!points.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#274472]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-[#c3e0e5] mb-5">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
              {data.title}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {data.subtitle && (
              <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
                {data.subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 3) * 0.06}>
              <article className="h-full flex gap-4 bg-[#222d4b] border border-white/10 rounded-sm p-6">
                <span className="shrink-0 w-9 h-9 rounded-full bg-[#5290c9] text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">{p.desc || p.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CruiseAuthorityBox;
