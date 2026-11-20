import React from 'react';
import FadeIn from './FadeIn';
import { UtensilsCrossed, Wine, Leaf, ShoppingBag } from 'lucide-react';

const RavelloDiningAndShopping = ({ data = {} }) => {
  const eat = data?.eat || [];
  const cuisine = data?.cuisine || [];
  const diningStrategy = data?.diningStrategy;
  const ceramics = data?.ceramics;

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

        {eat.length > 0 && (
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-navy-950">What Should You Eat in Ravello?</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {eat.map((item, i) => (
                <span key={i} className="font-sans text-sm text-navy-900 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5">{item}</span>
              ))}
            </div>
          </FadeIn>
        )}

        {cuisine.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {cuisine.map((item, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.08} className="h-full">
                <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-7 h-full">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center mb-4">
                    {i === 0 ? <Leaf className="w-5 h-5" /> : i === 3 ? <Wine className="w-5 h-5" /> : <UtensilsCrossed className="w-5 h-5" />}
                  </div>
                  <h4 className="font-display text-xl text-navy-950 mb-3">{item?.name}</h4>
                  <p className="font-sans text-slate-600 font-light text-sm leading-relaxed">{item?.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {diningStrategy && (
          <FadeIn className="mb-14">
            <div className="bg-slate-50 rounded-3xl border border-slate-100 border-l-4 border-l-ts-gold shadow-sm p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Wine className="w-5 h-5 text-ts-gold" />
                <h3 className="font-display text-2xl md:text-3xl text-navy-950">{diningStrategy.heading}</h3>
              </div>
              <p className="font-sans text-slate-700 font-light text-lg leading-relaxed">{diningStrategy.paragraph}</p>
            </div>
          </FadeIn>
        )}

        {ceramics && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4">{ceramics.heading}</h3>
                <p className="font-sans text-ice-100 font-light text-lg leading-relaxed">{ceramics.paragraph}</p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default RavelloDiningAndShopping;