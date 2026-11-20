import React from 'react';
import FadeIn from './FadeIn';
import { Sparkles } from 'lucide-react';

const SorrentoThingsToDo = ({ data = {} }) => {
  const items = data?.items || [];

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
          <p className="font-sans text-slate-600 text-lg font-light max-w-2xl mx-auto mt-8">{data?.introParagraph}</p>
        </FadeIn>

        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.06} className="h-full">
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-7 h-full flex flex-col transition-colors duration-300 hover:border-ts-gold/50 hover:shadow-lg group">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ts-gold bg-white border border-slate-100 rounded-full px-4 py-1.5">
                      {item?.category}
                    </span>
                    <span className="font-display text-2xl text-slate-200 group-hover:text-ts-gold transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-navy-950 mb-3">{item?.title}</h3>
                  <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">{item?.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn className="mt-12">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4 text-ts-gold" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Let a Trips & Ships advisor curate the perfect blend for your pace</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SorrentoThingsToDo;