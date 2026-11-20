import React from 'react';
import FadeIn from './FadeIn';
import { Compass } from 'lucide-react';

const IsSorrentoDecisionGuide = ({ data = {} }) => {
  const priorities = data?.priorities || [];
  const questions = data?.questions || [];

  return (
    <section className="w-full bg-ice-50 py-20 lg:py-28">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <FadeIn className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-2 bg-navy-950 px-6 py-4">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Your Priority</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Sorrento Fit</span>
              </div>
              <div>
                {priorities.map((item, i) => (
                  <div key={i} className={`grid grid-cols-2 px-6 py-4 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
                    <span className="font-sans text-sm text-navy-800">{item?.priority}</span>
                    <span className="font-sans text-sm font-medium text-navy-950">{item?.fit}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="bg-navy-950 rounded-3xl p-8">
              <Compass className="w-8 h-8 text-ts-gold mb-5" />
              <h3 className="font-display text-2xl text-white mb-6">{data?.questionsTitle}</h3>
              <ol className="space-y-5">
                {questions.map((question, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-display text-ts-gold text-lg leading-none mt-0.5">{i + 1}</span>
                    <span className="font-sans text-white/80 font-light text-sm leading-relaxed">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default IsSorrentoDecisionGuide;
