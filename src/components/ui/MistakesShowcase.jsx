import React from 'react';
import FadeIn from './FadeIn';
import { BALANCED_GRID, balancedCellClass } from './balancedGrid';

const MistakesShowcase = ({ 
  mistakes, 
  title = "Common Pitfalls to Avoid", 
  subtitle, 
  badge = "Expert Advisory",
  columns = 3 
}) => {
  if (!mistakes || mistakes.length === 0) return null;

  const isFourCol = columns === 4;
  const isTwoCol = columns === 2 || mistakes.length === 4 || mistakes.length === 8 || mistakes.length === 10;
  
  const gridClass = isFourCol
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
    : isTwoCol
    ? "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
    : `${BALANCED_GRID} gap-8`;
  const isThreeCol = !isFourCol && !isTwoCol;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ice-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-amber-100">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-6 leading-tight">
            {title || "Common Pitfalls to Avoid"}
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            {subtitle || "Navigating the complexities of luxury travel requires insider knowledge. Avoid these costly mistakes to ensure your journey is flawless."}
          </p>
        </FadeIn>

        <div className={gridClass}>
          {mistakes.map((mistake, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className={isThreeCol ? balancedCellClass(idx, mistakes.length) : undefined}>
              <div className="h-full bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-ice-50 flex items-center justify-center text-navy-800 group-hover:bg-navy-800 group-hover:text-white transition-colors duration-300">
                    <span className="font-display text-xl font-bold">{idx + 1}</span>
                  </div>
                  {mistake.severity ? (
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      {mistake.severity}
                    </span>
                  ) : (
                    <svg className="w-6 h-6 text-amber-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  )}
                </div>
                
                {mistake.subtitle && (
                  <p className="text-xs uppercase font-sans font-semibold text-amber-800/80 tracking-wider mb-1">
                    {mistake.subtitle}
                  </p>
                )}
                <h3 className="text-2xl font-display text-navy-900 mb-3">{mistake.title}</h3>
                
                <div className="w-8 h-px bg-slate-200 mb-4 group-hover:bg-amber-400 transition-colors duration-300"></div>
                
                <p className="text-slate-600 font-sans leading-relaxed text-sm flex-grow">
                  {mistake.description}
                </p>

                {mistake.tip && (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-start text-xs font-sans text-slate-500">
                    <span className="font-bold text-navy-900 mr-1.5 shrink-0">Advisor Tip:</span>
                    <span className="leading-relaxed">{mistake.tip}</span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MistakesShowcase;
