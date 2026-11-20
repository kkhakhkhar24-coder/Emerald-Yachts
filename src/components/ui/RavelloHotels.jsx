import React from 'react';
import FadeIn from './FadeIn';
import { Hotel, BedDouble, Sparkles } from 'lucide-react';

const RavelloHotels = ({ data = {} }) => {
  const hotels = data?.hotels || [];
  const choosing = data?.choosing || [];
  const roomTips = data?.roomTips || [];

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
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mt-6"></div>
        </FadeIn>

        {(data?.intro || '').trim() && (
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <FadeIn>
              <p className="font-sans text-slate-600 text-lg font-light leading-relaxed">{data.intro}</p>
            </FadeIn>
          </div>
        )}

        {hotels.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
            {hotels.map((hotel, i) => (
              <FadeIn key={i} delay={i * 0.1} className="h-full">
                <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-8 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center mb-5">
                    <Hotel className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold mb-2">{hotel?.tagline}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">{hotel?.name}</h3>
                  <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">{hotel?.description}</p>
                  <div className="mt-auto pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-ts-gold shrink-0" />
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-navy-900">Best For</span>
                    </div>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed">{hotel?.bestFor}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {choosing.length > 0 && (
          <FadeIn className="mb-14">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 text-center mb-8">How to Choose the Right Ravello Hotel</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {choosing.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                  <span className="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-ts-gold mb-2">{item?.category}</span>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{item?.guidance}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {roomTips.length > 0 && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center">
                  <BedDouble className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white">Room Selection Principles</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {roomTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ts-gold/20 text-ts-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                    <p className="font-sans text-ice-100 font-light leading-relaxed">{tip}</p>
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

export default RavelloHotels;