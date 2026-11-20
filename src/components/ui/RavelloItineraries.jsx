import React from 'react';
import FadeIn from './FadeIn';
import { Clock, MapPin, AlertTriangle } from 'lucide-react';

const RavelloItineraries = ({ data = {} }) => {
  const options = data?.options || [];
  const combinations = data?.combinations || [];

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

        {options.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {options.map((option, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.1} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block">Duration</span>
                      <h3 className="font-display text-xl md:text-2xl text-navy-950">{option?.duration}</h3>
                    </div>
                  </div>
                  <h4 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-navy-900 mb-3">{option?.title}</h4>
                  <p className="font-sans text-slate-600 font-light leading-relaxed">{option?.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {combinations.length > 0 && (
          <FadeIn className="mb-14">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 text-center mb-8">Combine Ravello With the Amalfi Coast</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {combinations.map((combo, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-ts-gold shrink-0" />
                    <h4 className="font-display text-xl text-navy-950">{combo?.name}</h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">{combo?.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {data?.note && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-10 flex items-start gap-5">
              <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 block mb-2">The Golden Rule</span>
                <p className="font-sans text-ice-100 font-light text-lg leading-relaxed">{data.note}</p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default RavelloItineraries;