import React from 'react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const BrandComparisonTable = ({ title, subtitle, headers = [], rows = [] }) => {
  if (!rows.length) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
              Side-By-Side Analysis
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {title}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {subtitle && (
              <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto border border-[#c3e0e5] shadow-md rounded-sm">
            <table className="min-w-[56rem] w-full text-left">
              <thead className="bg-[#274472] text-white">
                <tr>
                  {headers.map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`py-4 px-4 text-xs font-bold uppercase tracking-wider ${
                        i === 0 ? 'pl-6' : ''
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, r) => (
                  <tr
                    key={row[0]}
                    className={`border-t border-[#c3e0e5] hover:bg-[#c3e0e5]/50 transition-colors ${
                      r % 2 ? 'bg-[#c3e0e5]/20' : 'bg-white'
                    }`}
                  >
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`py-4 px-4 text-sm align-top leading-relaxed ${
                          c === 0
                            ? 'pl-6 font-display text-base text-[#222d4b] whitespace-nowrap'
                            : 'text-[#274472]/85'
                        } ${/★/.test(cell) ? 'text-[#5290c9] tracking-widest text-base whitespace-nowrap' : ''}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#274472]/60 text-center sm:hidden">
            Swipe sideways to see the full table.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default BrandComparisonTable;
