import React from 'react';
import FadeIn from './FadeIn';
import { Scale, Sparkles } from 'lucide-react';

const SorrentoTownComparison = ({ data = {} }) => {
  const columns = data?.columns || [];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-ts-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{data?.heading}</h2>
          <p className="font-sans text-slate-600 text-lg font-light max-w-2xl mx-auto mt-8">{data?.introParagraph}</p>
        </FadeIn>

        {columns.length > 0 && (
          <FadeIn>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-lg">
              <table className="w-full min-w-[880px] text-left">
                <thead>
                  <tr className="bg-navy-950">
                    <th className="px-6 py-5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 w-40">Compare</th>
                    {columns.map((col, i) => (
                      <th key={i} className="px-6 py-5 font-display text-lg text-white">
                        {col?.town}{i === 0 && <span className="block font-sans text-[10px] text-gold-400 uppercase tracking-[0.15em] mt-1 font-bold">Recommended Base</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {["Vibe", "Terrain", "Transport", "Best For"].map((label, rowIdx) => (
                    <tr key={label} className={rowIdx % 2 ? 'bg-ice-50/60' : 'bg-white'}>
                      <td className="px-6 py-5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{label}</td>
                      {columns.map((col, i) => (
                        <td key={i} className="px-6 py-5 align-top">
                          <span className="font-sans text-sm text-navy-800 leading-relaxed">
                            {label === "Vibe" ? col?.vibe : label === "Terrain" ? col?.terrain : label === "Transport" ? col?.transport : col?.bestFor}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        )}

        {data?.verdict && (
          <FadeIn className="mt-12">
            <div className="bg-ice-50 rounded-3xl border-l-4 border-l-ts-gold p-8 lg:p-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-ts-gold flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">The Expert Verdict</span>
                <p className="font-sans text-navy-800 text-lg font-light leading-relaxed">{data?.verdict}</p>
              </div>
            </div>
          </FadeIn>
        )}

        {data?.compareTitle && (
          <FadeIn className="mt-12 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-ts-gold" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-ts-gold">How to Decide</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">{data?.compareTitle}</h3>
            <p className="font-sans text-slate-600 font-light leading-relaxed">{data?.compareParagraph}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default SorrentoTownComparison;