import React from 'react';
import { Car, Ship, Waves, AlertTriangle, ShieldCheck } from 'lucide-react';

const ICONS = [Car, Ship, Waves, AlertTriangle];

const AmalfiTransportationAndGettingAround = ({ transportation = [] }) => {
  if (!transportation || !transportation.length) return null;

  return (
    <section className="py-24 bg-white text-navy-950 relative overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c9a15c] font-bold bg-[#c9a15c]/10 px-4 py-1.5 rounded-full border border-[#c9a15c]/30 inline-block mb-4">
            Seamless Logistical Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-950 font-bold mb-4">
            How to Get to Amalfi & How to Get Around
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a15c] mx-auto mb-6"></div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Master the transportation puzzle of the Amalfi Coast with private chauffeur transfers, coastal sea ferries, and private water taxis.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transportation.map((t, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isWarning = idx === 3;
            return (
              <div
                key={idx}
                className={`rounded-2xl border p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isWarning
                    ? 'bg-rose-50/70 border-rose-200 hover:border-rose-300'
                    : 'bg-slate-50/80 border-slate-200 hover:border-[#c9a15c]/60 hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className={`p-3.5 rounded-xl border ${
                      isWarning
                        ? 'bg-rose-100 text-rose-600 border-rose-200'
                        : 'bg-[#c9a15c]/15 text-[#b08b47] border-[#c9a15c]/30'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isWarning ? 'text-rose-600' : 'text-[#b08b47]'
                      }`}>
                        {isWarning ? 'Crucial Pitfall Warning' : 'Recommended Transit Method'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-navy-950 font-bold">
                        {t.method}
                      </h3>
                    </div>
                  </div>

                  <div className={`p-3.5 rounded-xl border mb-4 ${
                    isWarning ? 'bg-white/80 border-rose-100' : 'bg-white border-slate-200/80'
                  }`}>
                    <span className="text-[11px] font-semibold text-slate-500 block mb-0.5">When to Use:</span>
                    <p className="text-navy-900 text-xs sm:text-sm font-semibold">{t.recommended}</p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    {t.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center space-x-2 text-xs">
                  {isWarning ? (
                    <span className="text-rose-700 font-semibold">Alternative: Book private Mercedes chauffeur through Trips & Ships</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-slate-700 font-medium">Included in Trips & Ships luxury concierge coordination</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmalfiTransportationAndGettingAround;
