import React from 'react';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const IsSorrentoTravelerMatch = ({ data = {} }) => {
  const archetypes = data?.archetypes || [];

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-ts-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{data?.heading}</h2>
          <p className="font-sans text-slate-600 text-lg font-light max-w-3xl mx-auto mt-8 leading-relaxed">{data?.introParagraph}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archetypes.map((archetype, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 flex flex-col">
                <h3 className="font-display text-xl text-navy-950 mb-4">{archetype?.title}</h3>
                <span className="inline-block self-start font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ts-gold bg-ice-50 px-3 py-1 rounded-full mb-5">
                  {archetype?.fit}
                </span>
                <p className="font-sans text-slate-600 font-light leading-relaxed text-sm mb-6">{archetype?.description}</p>
                <ul className="space-y-3 mt-auto">
                  {(archetype?.highlights || []).map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-ts-gold flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-navy-800 text-sm font-light">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsSorrentoTravelerMatch;
