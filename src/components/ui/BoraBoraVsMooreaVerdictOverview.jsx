import React from 'react';
import FadeIn from './FadeIn';
import { Check, Quote } from 'lucide-react';

const BoraBoraVsMooreaVerdictOverview = ({ data = {} }) => {
  const scenarios = data?.scenarios || [];

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
          <FadeIn className="mb-14">
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-4">The Quick Answer</span>
              <p className="font-display text-2xl md:text-3xl text-white leading-snug relative z-10">{data?.quickAnswer}</p>
            </div>
          </FadeIn>
        )}

        {(data?.scenariosTitle || data?.scenariosQuote) && (
          <FadeIn className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950">{data?.scenariosTitle}</h3>
            <p className="font-sans text-ts-gold font-light text-xl italic mt-4">{data?.scenariosQuote}</p>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`h-full rounded-3xl p-8 ${i === scenarios.length - 1 ? 'bg-navy-950' : 'bg-ice-50 border border-slate-100'}`}>
                <h4 className={`font-display text-2xl mb-6 ${i === scenarios.length - 1 ? 'text-white' : 'text-navy-950'}`}>{scenario?.title}</h4>
                <ul className="space-y-4">
                  {(scenario?.points || []).map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${i === scenarios.length - 1 ? 'text-ts-gold' : 'text-ts-gold'}`} />
                      <span className={`font-sans font-light leading-relaxed ${i === scenarios.length - 1 ? 'text-white/80 text-sm' : 'text-navy-800 text-sm'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
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

export default BoraBoraVsMooreaVerdictOverview;