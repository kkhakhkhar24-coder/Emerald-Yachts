import React from 'react';
import FadeIn from './FadeIn';
import { CalendarDays, Check } from 'lucide-react';

const IsSorrentoDaysGuide = ({ data = {} }) => {
  const options = data?.options || [];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {options.map((option, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="h-full bg-slate-50 rounded-3xl border border-slate-100 p-7 flex flex-col">
                <CalendarDays className="w-7 h-7 text-ts-gold mb-4" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{option?.ideal}</span>
                <h3 className="font-display text-2xl text-navy-950 mt-2 mb-4">{option?.label}</h3>
                <p className="font-sans text-slate-600 font-light text-sm leading-relaxed mb-6">{option?.summary}</p>
                <ul className="space-y-3 mt-auto">
                  {(option?.itinerary || []).map((step, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-ts-gold flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-navy-800 text-sm font-light">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {data?.closingNote && (
          <FadeIn className="mt-12">
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-10 text-center">
              <p className="font-sans text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">{data?.closingNote}</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default IsSorrentoDaysGuide;
