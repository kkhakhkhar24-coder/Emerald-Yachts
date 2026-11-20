import React from 'react';
import FadeIn from './FadeIn';
import { Check, Sparkles } from 'lucide-react';

const BoraBoraVsMooreaResortComparison = ({ data = {} }) => {
  const boraBora = data?.boraBora || {};
  const moorea = data?.moorea || {};
  const servicePoints = data?.servicePoints || [];

  return (
    <section className="w-full bg-navy-950 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-ts-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white">{data?.heading}</h2>
          <p className="font-sans text-white/70 text-lg font-light max-w-3xl mx-auto mt-8 leading-relaxed">{data?.introParagraph}</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <FadeIn>
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
              <span className="inline-block self-start font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ts-gold px-3 py-1 rounded-full border border-white/15 mb-5">
                Bora Bora
              </span>
              <h3 className="font-display text-2xl text-white mb-4">{boraBora?.title}</h3>
              <p className="font-sans text-white/70 font-light leading-relaxed mb-8 text-sm">{boraBora?.description}</p>
              <ul className="space-y-4">
                {(boraBora?.highlights || []).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-ts-gold flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-white/80 text-sm font-light leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
              <span className="inline-block self-start font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ts-gold px-3 py-1 rounded-full border border-white/15 mb-5">
                Moorea
              </span>
              <h3 className="font-display text-2xl text-white mb-4">{moorea?.title}</h3>
              <p className="font-sans text-white/70 font-light leading-relaxed mb-8 text-sm">{moorea?.description}</p>
              <ul className="space-y-4">
                {(moorea?.highlights || []).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-ts-gold flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-white/80 text-sm font-light leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {data?.serviceTitle && servicePoints.length > 0 && (
          <FadeIn>
            <div className="bg-ice-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Sparkles className="w-7 h-7 text-ts-gold flex-shrink-0" />
                <h3 className="font-display text-2xl md:text-3xl text-navy-950">{data?.serviceTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicePoints.map((point, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6">
                    <span className="font-display text-ts-gold text-xl leading-none block mb-4">{i + 1}</span>
                    <p className="font-sans text-slate-600 font-light text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default BoraBoraVsMooreaResortComparison;