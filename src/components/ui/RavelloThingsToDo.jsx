import React from 'react';
import FadeIn from './FadeIn';
import { Compass } from 'lucide-react';

const RavelloThingsToDo = ({ data = {} }) => {
  const experiences = data?.experiences || [];

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
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mt-6"></div>
        </FadeIn>

        {(data?.intro || '').trim() && (
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <FadeIn>
              <p className="font-sans text-slate-600 text-lg font-light leading-relaxed">{data.intro}</p>
            </FadeIn>
          </div>
        )}

        {experiences.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.06} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 h-full flex flex-col">
                  <div className="w-9 h-9 rounded-full bg-ts-gold/15 text-ts-gold flex items-center justify-center font-sans text-sm font-bold mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-display text-lg text-navy-950 mb-3">{exp?.title}</h3>
                  <p className="font-sans text-slate-600 font-light text-sm leading-relaxed">{exp?.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {data?.note && (
          <FadeIn>
            <div className="bg-white rounded-3xl border border-slate-100 border-l-4 border-l-ts-gold shadow-sm p-8 lg:p-10 flex items-start gap-5">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-2">The Luxury Principle</span>
                <p className="font-sans text-slate-700 font-light text-lg leading-relaxed">{data.note}</p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default RavelloThingsToDo;