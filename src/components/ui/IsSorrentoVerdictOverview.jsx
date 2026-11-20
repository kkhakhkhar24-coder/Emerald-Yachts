import React from 'react';
import FadeIn from './FadeIn';
import { Check, XCircle, Quote } from 'lucide-react';

const IsSorrentoVerdictOverview = ({ data = {} }) => {
  const worthIf = data?.worthIf || [];
  const lessSuitableIf = data?.lessSuitableIf || [];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-ts-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{data?.heading}</h2>
          <p className="font-sans text-slate-600 text-lg font-light max-w-3xl mx-auto mt-8 leading-relaxed">{data?.introParagraph}</p>
        </FadeIn>

        {data?.quickAnswer && (
          <FadeIn className="mb-12">
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-4">The Quick Answer</span>
              <p className="font-display text-2xl md:text-3xl text-white leading-snug relative z-10">{data?.quickAnswer}</p>
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="h-full bg-ice-50 rounded-3xl border border-slate-100 p-8">
              <h3 className="font-display text-2xl text-navy-950 mb-6">{data?.worthIfTitle}</h3>
              <ul className="space-y-4">
                {worthIf.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-ts-gold flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-navy-800 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full bg-slate-50 rounded-3xl border border-slate-100 p-8">
              <h3 className="font-display text-2xl text-navy-950 mb-6">{data?.lessSuitableTitle}</h3>
              <ul className="space-y-4">
                {lessSuitableIf.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-slate-600 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {data?.bottomLine && (
          <FadeIn className="mt-12">
            <div className="border-l-4 border-l-ts-gold bg-ice-50 rounded-3xl p-8 lg:p-10">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-3">The Bottom Line</span>
              <p className="font-sans text-navy-800 text-lg font-light leading-relaxed">{data?.bottomLine}</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default IsSorrentoVerdictOverview;
