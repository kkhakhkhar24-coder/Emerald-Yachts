import React from 'react';
import FadeIn from './FadeIn';
import { Wallet, CalendarDays, ListOrdered, Accessibility } from 'lucide-react';

const RavelloPlanning = ({ data = {} }) => {
  const budgetCategories = data?.budgetCategories || [];
  const budgetLevels = data?.budgetLevels || [];
  const bookFirst = data?.bookFirst || [];
  const bookingTimeline = data?.bookingTimeline || [];
  const whereBudgetMatters = data?.whereBudgetMatters || [];
  const mobility = data?.mobility;

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

        {budgetCategories.length > 0 && (
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-navy-950">The Four Main Ravello Budget Categories</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {budgetCategories.map((cat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <span className="block font-sans text-xs font-bold uppercase tracking-[0.15em] text-ts-gold mb-2">{cat?.name}</span>
                  <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">{cat?.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {budgetLevels.length > 0 && (
          <FadeIn className="mb-14">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 text-center mb-8">What Level of Experience Do You Want?</h3>
            <div className="space-y-4">
              {budgetLevels.map((level, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row gap-4 lg:items-center">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 w-fit shrink-0">{level?.level}</span>
                  <p className="font-sans text-slate-600 font-light leading-relaxed">{level?.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {bookFirst.length > 0 && whereBudgetMatters.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            <FadeIn className="h-full">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                    <ListOrdered className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950">What Should You Book First?</h3>
                </div>
                <ol className="space-y-3">
                  {bookFirst.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-sans text-sm font-bold text-ts-gold w-6 shrink-0">{i + 1}.</span>
                      <span className="font-sans text-slate-700 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>

            <FadeIn className="h-full">
              <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-white">Where Luxury Spending Goes Farthest</h3>
                </div>
                <ul className="space-y-3">
                  {whereBudgetMatters.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-ts-gold/20 text-ts-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</div>
                      <span className="font-sans text-ice-100 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        )}

        {bookingTimeline.length > 0 && (
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-navy-950">The Ideal Ravello Booking Timeline</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {bookingTimeline.map((phase, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-ts-gold block mb-4">{phase?.phase}</span>
                  <ul className="space-y-2">
                    {(phase?.items || []).map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-ts-gold shrink-0 mt-2"></div>
                        <span className="font-sans text-sm text-slate-700 font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {mobility && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center shrink-0">
                <Accessibility className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4">{mobility.heading}</h3>
                <p className="font-sans text-ice-100 font-light text-lg leading-relaxed">{mobility.paragraph}</p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default RavelloPlanning;