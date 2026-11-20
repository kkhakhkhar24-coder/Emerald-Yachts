import React from 'react';
import FadeIn from './FadeIn';
import { Clock, CarFront, CalendarRange, Wallet, ListChecks } from 'lucide-react';

const SorrentoPlanning = ({ data = {} }) => {
  const stayLength = data?.stayLength || [];
  const transportation = data?.transportation || [];
  const bestTime = data?.bestTime || [];
  const costNote = data?.costNote;
  const itinerarySteps = data?.itinerarySteps || [];

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

        {stayLength.length > 0 && (
          <div className="mb-16">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-5 h-5 text-ts-gold" />
                <h3 className="font-display text-2xl text-navy-950">How Long to Stay</h3>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stayLength.map((row, i) => (
                <FadeIn key={i} delay={i * 0.08} className="h-full">
                  <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 h-full flex flex-col">
                    <span className="font-display text-3xl text-navy-950 mb-2">{row?.nights}</span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold mb-4">{row?.bestFor}</span>
                    <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">{row?.notes}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {transportation.length > 0 && (
          <div className="mb-16">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <CarFront className="w-5 h-5 text-ts-gold" />
                <h3 className="font-display text-2xl text-navy-950">Getting to Sorrento & Getting Around</h3>
              </div>
            </FadeIn>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
              {transportation.map((row, i) => (
                <div key={i} className={`grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1.6fr] gap-2 lg:gap-8 p-6 lg:p-8 ${i % 2 ? 'bg-slate-50' : 'bg-white'} ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-navy-950">{row?.method}</span>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-ts-gold block mb-1">Recommended For</span>
                    <span className="font-sans text-sm text-slate-700">{row?.recommended}</span>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 block mb-1">Why It Works</span>
                    <span className="font-sans text-sm text-slate-600 font-light leading-relaxed">{row?.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {bestTime.length > 0 && (
          <div className="mb-16">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <CalendarRange className="w-5 h-5 text-ts-gold" />
                <h3 className="font-display text-2xl text-navy-950">The Best Time to Visit Sorrento</h3>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {bestTime.map((row, i) => (
                <FadeIn key={i} delay={(i % 5) * 0.06} className="h-full">
                  <div className="bg-navy-950 rounded-2xl p-6 h-full flex flex-col border border-navy-800">
                    <span className="font-display text-lg text-white mb-2">{row?.season}</span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-gold-400 mb-1">{row?.rating}</span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-slate-400 mb-4">{row?.crowds}</span>
                    <p className="font-sans text-slate-300 text-xs font-light leading-relaxed mt-auto">{row?.summary}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {costNote && (
          <FadeIn className="mb-16">
            <div className="bg-ice-50 rounded-3xl border-l-4 border-l-ts-gold p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-5 h-5 text-ts-gold" />
                <h3 className="font-display text-2xl text-navy-950">{costNote?.label}</h3>
              </div>
              <p className="font-sans text-slate-700 text-lg font-light leading-relaxed">{costNote?.detail}</p>
            </div>
          </FadeIn>
        )}

        {itinerarySteps.length > 0 && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-12 border border-navy-800">
              <div className="flex items-center gap-3 mb-8">
                <ListChecks className="w-6 h-6 text-ts-gold" />
                <h3 className="font-display text-2xl md:text-3xl text-white">{data?.itineraryTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                {itinerarySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-sans text-[11px] font-bold text-navy-950 bg-ts-gold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="font-sans text-slate-300 text-sm font-light leading-relaxed">{step}</p>
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

export default SorrentoPlanning;