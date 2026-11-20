import React from 'react';
import { Layers } from 'lucide-react';

const CostComparisonMatrix = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  const n = items.length;

  return (
    <section className="py-20 bg-ice-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          {subtitle && (
            <p className="text-base md:text-lg text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => {
            let widthClass = "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]";
            if (n === 4) {
              widthClass = "w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]";
            } else if (n === 2) {
              widthClass = "w-full md:w-[calc(50%-12px)] max-w-lg";
            }

            return (
              <div 
                key={index}
                className={`${widthClass} bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-gold-400/40 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 bg-ice-100 text-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-950 group-hover:text-gold-400 transition-colors">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display text-navy-950 mb-2">{item.category}</h3>
                  <p className="text-2xl text-gold-600 font-semibold mb-4">{item.cost}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Luxury Priority</p>
                  <p className="text-sm text-navy-900 font-medium">{item.priority}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CostComparisonMatrix;
