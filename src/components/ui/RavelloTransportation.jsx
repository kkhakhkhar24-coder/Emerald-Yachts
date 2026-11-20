import React from 'react';
import FadeIn from './FadeIn';
import { Car, Bus, Ship, Compass, MapPin, ShieldCheck, Anchor } from 'lucide-react';

const RavelloTransportation = ({ data = {} }) => {
  const options = data?.options || [];
  const fromCities = data?.fromCities || [];
  const privateDrivers = data?.privateDrivers;
  const cruise = data?.cruise;

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {options.map((opt, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.08} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7 h-full">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center mb-4">
                    {i === 0 ? <Car className="w-5 h-5" /> : i === 2 ? <Bus className="w-5 h-5" /> : i === 3 ? <Ship className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                  </div>
                  <h3 className="font-display text-xl text-navy-950 mb-3">{opt?.name}</h3>
                  <p className="font-sans text-slate-600 font-light text-sm leading-relaxed">{opt?.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {fromCities.length > 0 && (
          <FadeIn className="mb-14">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 text-center mb-8">Reaching Ravello From the Gateway Towns</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fromCities.map((row, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-ts-gold shrink-0" />
                    <h4 className="font-display text-xl text-navy-950">{row?.city}</h4>
                  </div>
                  <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">{row?.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {privateDrivers && (
            <FadeIn className="h-full">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-950">{privateDrivers.heading}</h3>
                </div>
                <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">{privateDrivers.intro}</p>
                <ul className="space-y-2.5">
                  {(privateDrivers.benefits || []).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-ts-gold/20 text-ts-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</div>
                      <span className="font-sans text-slate-700 font-light leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}

          {cruise && (
            <FadeIn className="h-full">
              <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-2xl text-white">{cruise.heading}</h3>
                </div>
                <p className="font-sans text-slate-300 font-light leading-relaxed mb-6">{cruise.intro}</p>
                <ul className="space-y-2.5">
                  {(cruise.bullets || []).map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-ts-gold/20 text-ts-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</div>
                      <span className="font-sans text-ice-100 font-light leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};

export default RavelloTransportation;