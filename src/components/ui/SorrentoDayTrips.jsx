import React from 'react';
import FadeIn from './FadeIn';
import { Clock, Ship, Anchor } from 'lucide-react';

const SorrentoDayTrips = ({ data = {} }) => {
  const trips = data?.trips || [];
  const choiceTable = data?.choiceTable || [];

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
          <p className="font-sans text-slate-600 text-lg font-light max-w-2xl mx-auto mt-8">{data?.introParagraph}</p>
        </FadeIn>

        {trips.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {trips.map((trip, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.08} className="h-full">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-navy-900 text-ts-gold flex items-center justify-center flex-shrink-0">
                        <Anchor className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-2xl text-navy-950">{trip?.name}</h3>
                    </div>
                    <span className="flex items-center gap-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {trip?.time}
                    </span>
                  </div>
                  <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">{trip?.details}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {data?.choiceTitle && (
          <FadeIn>
            <div className="bg-navy-950 rounded-3xl p-8 lg:p-12 border border-navy-800">
              <div className="flex items-center gap-3 mb-3">
                <Ship className="w-6 h-6 text-ts-gold" />
                <h3 className="font-display text-2xl md:text-3xl text-white">{data?.choiceTitle}</h3>
              </div>
              <p className="font-sans text-slate-300 font-light mb-8 max-w-2xl">{data?.choiceOverview}</p>

              {choiceTable.length > 0 && (
                <div className="overflow-x-auto rounded-2xl border border-navy-800">
                  <table className="w-full min-w-[760px] text-left bg-white">
                    <thead>
                      <tr className="bg-navy-900">
                        {["Day Trip", "Time", "Ideal For", "Season"].map((h, i) => (
                          <th key={i} className="px-6 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {choiceTable.map((row, i) => (
                        <tr key={i}>
                          <td className="px-6 py-5 font-display text-lg text-navy-950">{row?.trip}</td>
                          <td className="px-6 py-5 font-sans text-sm text-slate-600">{row?.time}</td>
                          <td className="px-6 py-5 font-sans text-sm text-slate-600">{row?.idealFor}</td>
                          <td className="px-6 py-5 font-sans text-sm text-slate-600">{row?.season}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default SorrentoDayTrips;