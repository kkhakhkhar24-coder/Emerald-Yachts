import React from 'react';
import FadeIn from './FadeIn';
import { Anchor } from 'lucide-react';

const BoraBoraVsMooreaBungalowComparison = ({ data = {} }) => {
  const boraBora = data?.boraBora || {};
  const moorea = data?.moorea || {};
  const considerations = data?.considerations || [];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <FadeIn>
            <div className="h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10">
              <Anchor className="w-8 h-8 text-ts-gold mb-5" />
              <h3 className="font-display text-2xl text-navy-950 mb-5">{boraBora?.title}</h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">{boraBora?.description}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10">
              <Anchor className="w-8 h-8 text-ts-gold mb-5" />
              <h3 className="font-display text-2xl text-navy-950 mb-5">{moorea?.title}</h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed">{moorea?.description}</p>
            </div>
          </FadeIn>
        </div>

        {data?.considerationsTitle && considerations.length > 0 && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-12">
              <h3 className="font-display text-2xl md:text-3xl text-white mb-8 text-center">{data?.considerationsTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {considerations.map((consideration, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="font-display text-ts-gold text-xl leading-none mt-0.5">{i + 1}</span>
                      <p className="font-sans text-white/80 font-light text-sm leading-relaxed">{consideration}</p>
                    </div>
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

export default BoraBoraVsMooreaBungalowComparison;