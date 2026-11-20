import React from 'react';
import { Landmark, Compass, Ship, Citrus, Footprints, Scroll, Waves, CheckCircle2 } from 'lucide-react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const ICONS = [Landmark, Landmark, Compass, Citrus, Footprints, Scroll, Waves];

const IsAmalfiSevenReasons = ({ reasons = [] }) => {
  if (!reasons || !reasons.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#222d4b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c3e0e5] font-bold">
            Compelling Highlights
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
            7 Reasons Amalfi Town Is Worth Visiting
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            Why cultural depth, architectural heritage, and logistical ease elevate Amalfi above
            purely scenic resort villages.
          </p>
        </div>

        {/* 7 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={index}
                className={`bg-[#274472] rounded-sm border border-white/10 hover:border-[#5290c9] transition-all duration-300 p-6 flex flex-col justify-between shadow-xl hover:-translate-y-1 group ${
                  index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-full text-[#c3e0e5] group-hover:bg-[#5290c9] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-display font-bold text-white/15 group-hover:text-[#c3e0e5] transition-colors">
                      {r.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-display text-white mb-2">
                    {r.title}
                  </h3>

                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    {r.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center space-x-1.5 text-xs text-[#c3e0e5] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Distinction</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IsAmalfiSevenReasons;
