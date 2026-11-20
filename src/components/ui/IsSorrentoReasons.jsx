import React from 'react';
import FadeIn from './FadeIn';

const IsSorrentoReasons = ({ data = {} }) => {
  const reasons = data?.reasons || [];

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="max-w-3xl mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{data?.heading}</h2>
          <p className="font-sans text-slate-600 text-lg font-light leading-relaxed">{data?.introParagraph}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 hover:shadow-lg transition-shadow duration-300">
                <span className="font-display text-5xl text-slate-200 block mb-4">{reason?.number}</span>
                <h3 className="font-display text-xl text-navy-950 mb-4">{reason?.title}</h3>
                <p className="font-sans text-slate-600 font-light leading-relaxed text-sm">{reason?.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsSorrentoReasons;
