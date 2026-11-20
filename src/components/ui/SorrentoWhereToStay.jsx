import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, Users, CheckCircle2, BedDouble } from 'lucide-react';

const SorrentoWhereToStay = ({ data = {} }) => {
  const areas = data?.areas || [];
  const hotelDecision = data?.hotelDecision || [];

  return (
    <section className="w-full bg-navy-950 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold-400"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-gold-400"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white">{data?.heading}</h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mt-6"></div>
          <p className="font-sans text-slate-300 text-lg font-light max-w-2xl mx-auto mt-8">{data?.introParagraph}</p>
        </FadeIn>

        {areas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.08} className="h-full">
                <div className="bg-navy-900 rounded-3xl border border-navy-800 p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center flex-shrink-0">
                      <BedDouble className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl text-white">{area?.name}</h3>
                  </div>
                  <p className="font-sans text-sm text-gold-400 font-medium mb-4">{area?.vibe}</p>
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed mb-6">{area?.notes}</p>
                  <div className="mt-auto pt-5 border-t border-navy-800 flex items-start gap-2">
                    <Users className="w-4 h-4 text-ts-gold flex-shrink-0 mt-0.5" />
                    <span className="font-sans text-xs text-slate-400 leading-relaxed">{area?.bestFor}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {hotelDecision.length > 0 && (
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-ts-gold flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block">Advisor Checklist</span>
                  <h3 className="font-display text-2xl text-navy-950">Choosing Your Sorrento Hotel</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                {hotelDecision.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-sans text-[10px] font-bold text-ts-gold bg-ts-gold/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="font-sans text-slate-700 text-sm font-light leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-ts-gold" />
                <span className="font-sans text-xs text-slate-500 italic">Sea views, stairs and proximity to the ferry are the three questions that matter most in Sorrento.</span>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default SorrentoWhereToStay;