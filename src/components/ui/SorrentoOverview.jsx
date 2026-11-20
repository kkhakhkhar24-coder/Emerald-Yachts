import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, CheckCircle2, Compass, Landmark } from 'lucide-react';

const SorrentoOverview = ({ data = {} }) => {
  const quickAnswer = data?.quickAnswer;
  const atAGlance = data?.atAGlance || [];
  const whereIs = data?.whereIs;
  const isItOnTheAmalfiCoast = data?.isItOnTheAmalfiCoast;

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

        {(data?.introParagraphs || []).length > 0 && (
          <div className="max-w-3xl mx-auto mb-14 space-y-6">
            {data.introParagraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="font-sans text-slate-600 text-lg font-light leading-relaxed">{p}</p>
              </FadeIn>
            ))}
          </div>
        )}

        {quickAnswer && (
          <FadeIn className="mb-14">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 lg:p-10 border-l-4 border-l-ts-gold">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-ts-gold" />
                <h3 className="font-display text-2xl md:text-3xl text-navy-950">{quickAnswer?.label}</h3>
              </div>
              <p className="font-sans text-slate-700 text-lg font-light leading-relaxed">{quickAnswer?.answer}</p>
            </div>
          </FadeIn>
        )}

        {atAGlance.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {atAGlance.map((row, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.06} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 h-full flex flex-col">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold mb-3">{row?.label}</span>
                  <span className="font-sans text-sm text-navy-900 leading-relaxed">{row?.value}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {whereIs && (
            <FadeIn className="h-full">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-ts-gold flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">{whereIs?.label}</span>
                    <h3 className="font-display text-2xl text-navy-950">{whereIs?.heading}</h3>
                  </div>
                </div>
                {(whereIs?.paragraphs || []).map((p, i) => (
                  <p key={i} className="font-sans text-slate-600 font-light leading-relaxed mb-4 last:mb-0">{p}</p>
                ))}
              </div>
            </FadeIn>
          )}

          {isItOnTheAmalfiCoast && (
            <FadeIn className="h-full">
              <div className="bg-navy-950 rounded-3xl shadow-2xl p-8 lg:p-10 h-full border border-navy-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 block">{isItOnTheAmalfiCoast?.label}</span>
                    <h3 className="font-display text-2xl text-white">Capri, Volcanoes & Cliffs</h3>
                  </div>
                </div>
                <p className="font-sans text-slate-300 font-light leading-relaxed">{isItOnTheAmalfiCoast?.answer}</p>
                <div className="mt-6 pt-6 border-t border-navy-800 flex items-center gap-3">
                  <Compass className="w-5 h-5 text-ts-gold" />
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-gold-400">One Region, Endless Arrangements</span>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};

export default SorrentoOverview;