import React from 'react';
import FadeIn from './FadeIn';

const StepByStepGuide = ({ title, subtitle, steps, layout = "timeline", columns }) => {
  if (!steps || steps.length === 0) return null;

  const isGrid = layout === "grid" || columns === 3 || steps.length === 9;

  return (
    <section className="w-full bg-ice-50 py-16 md:py-24 border-b border-navy-100">
      <div className={`${isGrid ? 'max-w-[1360px]' : 'max-w-4xl'} mx-auto px-6`}>
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
          </div>
        </FadeIn>

        {/* 3x3 Grid Layout */}
        {isGrid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.06} className="flex h-full">
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-navy-900/5 border border-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-ts-gold/40 flex flex-col h-full w-full relative overflow-hidden group">
                  {/* Subtle Accent Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ts-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-navy-950 text-ts-gold font-display text-xl font-bold flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-ts-gold group-hover:text-navy-950 transition-all duration-300">
                      {idx + 1}
                    </div>
                    <span className="font-sans text-[11px] uppercase tracking-widest text-navy-400 font-bold">
                      Phase {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl lg:text-2xl text-navy-950 mb-3 leading-snug group-hover:text-navy-900 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-navy-700/90 leading-relaxed text-sm lg:text-[15px] flex-grow">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          /* Original Timeline Steps */
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-navy-200 before:to-transparent">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className={`relative flex items-center justify-between md:justify-normal ${isEven ? '' : 'md:flex-row-reverse'} group is-active`}>
                    {/* Icon / Number */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-ice-50 bg-navy-950 text-ts-gold font-display text-xl z-10 md:order-1 ${isEven ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} shadow-lg shadow-navy-900/20 shrink-0`}>
                      {idx + 1}
                    </div>

                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl shadow-xl shadow-navy-900/5 border border-navy-100 transition-transform duration-300 hover:-translate-y-1">
                      <h3 className="font-display text-2xl text-navy-950 mb-3">
                        {step.title}
                      </h3>
                      <p className="font-sans text-navy-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default StepByStepGuide;
