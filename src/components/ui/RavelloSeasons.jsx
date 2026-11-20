import React from 'react';
import FadeIn from './FadeIn';
import { Flower2, Camera, CheckCircle2, AlertCircle } from 'lucide-react';

const RavelloSeasons = ({ data = {} }) => {
  const seasons = data?.seasons || [];

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

        {seasons.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {seasons.map((season, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.08} className="h-full">
                <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl text-navy-950">{season?.season}</h3>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-ts-gold bg-white border border-slate-200 rounded-full px-3 py-1">{season?.months}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold block mb-2">Advantages</span>
                    <ul className="space-y-1.5">
                      {(season?.advantages || []).map((adv, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-ts-gold shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-slate-700 font-light leading-relaxed">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Considerations</span>
                    <ul className="space-y-1.5">
                      {(season?.considerations || []).map((con, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-slate-600 font-light leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {(data?.gardenNote || data?.photographyNote) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data?.gardenNote && (
              <FadeIn className="h-full">
                <div className="bg-slate-50 rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center">
                      <Flower2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl text-navy-950">{data.gardenNote.heading}</h3>
                  </div>
                  <p className="font-sans text-slate-600 font-light leading-relaxed">{data.gardenNote.paragraph}</p>
                </div>
              </FadeIn>
            )}

            {data?.photographyNote && (
              <FadeIn className="h-full">
                <div className="bg-navy-950 rounded-3xl shadow-2xl border border-navy-800 p-8 lg:p-10 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-ts-gold text-navy-950 flex items-center justify-center">
                      <Camera className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl text-white">{data.photographyNote.heading}</h3>
                  </div>
                  <p className="font-sans text-slate-300 font-light leading-relaxed">{data.photographyNote.paragraph}</p>
                </div>
              </FadeIn>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default RavelloSeasons;