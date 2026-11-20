import React, { useState } from 'react';
import { Anchor, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
export default function CruisePortDecision({ data }) {
  const options = data?.options || [];
  const [active, setActive] = useState(0);
  if (!options.length) return null;

  const current = options[active];

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#274472] text-white mb-5">
              <Anchor className="w-6 h-6" />
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {data.title || 'Where Does Your Cruise Ship Call?'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {data.subtitle && (
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#5290c9]">
                {data.subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Port selector */}
          <div className="lg:col-span-5 space-y-3">
            {options.map((opt, i) => {
              const selected = active === i;
              return (
                <button
                  key={opt.title}
                  onClick={() => setActive(i)}
                  aria-pressed={selected}
                  className={`w-full text-left rounded-sm border p-5 transition-colors ${
                    selected
                      ? 'bg-[#274472] border-[#274472] text-white'
                      : 'bg-white border-[#c3e0e5] text-[#222d4b] hover:border-[#5290c9]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Ship
                      className={`w-5 h-5 mt-0.5 shrink-0 ${selected ? 'text-[#c3e0e5]' : 'text-[#5290c9]'}`}
                    />
                    <div>
                      <span className="block font-display text-lg leading-tight">{opt.title}</span>
                      {opt.situation && (
                        <span
                          className={`block text-xs mt-1 ${selected ? 'text-white/80' : 'text-[#274472]/70'}`}
                        >
                          {opt.situation}
                        </span>
                      )}
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 ml-auto mt-1 shrink-0 transition-opacity ${
                        selected ? 'opacity-100 text-[#c3e0e5]' : 'opacity-0'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Result */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#c3e0e5] rounded-sm shadow-md overflow-hidden h-full">
              <div className="bg-[#222d4b] px-6 sm:px-8 py-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c3e0e5]">
                  Optimal Transit Strategy
                </span>
                <h3 className="mt-1 text-2xl font-display text-white">{current.result?.title}</h3>
              </div>
              <div className="p-6 sm:p-8">
                {current.result?.description && (
                  <p className="text-[#274472]/85 leading-relaxed mb-6">
                    {current.result.description}
                  </p>
                )}
                <ul className="space-y-3">
                  {(current.result?.points || []).map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#5290c9]" />
                      <span className="text-sm leading-relaxed text-[#222d4b]">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
