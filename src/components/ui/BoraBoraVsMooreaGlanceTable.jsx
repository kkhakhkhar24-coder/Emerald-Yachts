import React from 'react';
import FadeIn from './FadeIn';
import { Scale } from 'lucide-react';

const BoraBoraVsMooreaGlanceTable = ({ data = {} }) => {
  const columns = data?.columns || [];
  const rows = data?.rows || [];

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-ts-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{data?.heading}</h2>
          <p className="font-sans text-slate-600 text-lg font-light max-w-3xl mx-auto mt-8 leading-relaxed">{data?.introParagraph}</p>
        </FadeIn>

        {columns.length > 0 && rows.length > 0 && (
          <FadeIn>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-lg">
              <table className="w-full min-w-[880px] text-left">
                <thead>
                  <tr className="bg-navy-950">
                    {columns.map((col, i) => (
                      <th key={i} className={`px-6 py-5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 ${i === 0 ? 'w-56' : ''}`}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 ? 'bg-ice-50/60' : 'bg-white'}>
                      <td className="px-6 py-5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{row?.label}</td>
                      <td className="px-6 py-5">
                        <span className="font-sans text-sm leading-relaxed text-navy-900 font-medium">{row?.boraBora}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-sans text-sm leading-relaxed text-navy-800">{row?.moorea}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        )}

        {data?.note && (
          <FadeIn className="mt-12">
            <div className="bg-white rounded-3xl border-l-4 border-l-ts-gold p-8 lg:p-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-ts-gold flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">The Expert Note</span>
                <p className="font-sans text-navy-800 text-lg font-light leading-relaxed">{data?.note}</p>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default BoraBoraVsMooreaGlanceTable;