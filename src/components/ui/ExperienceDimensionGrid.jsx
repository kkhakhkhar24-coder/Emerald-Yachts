import React from 'react';
import FadeIn from './FadeIn';
import {
  Plane,
  Home,
  ShieldCheck,
  Waves,
  Utensils,
  Coins,
  Clock,
  Target,
  Sparkles,
  Compass
} from 'lucide-react';

const iconMap = {
  Plane,
  Home,
  ShieldCheck,
  Waves,
  Utensils,
  Coins,
  Clock,
  Target,
  Sparkles,
  Compass
};

const ExperienceDimensionGrid = ({ data }) => {
  if (!data || !data.dimensions || data.dimensions.length === 0) return null;

  const { badge, title, subtitle, dimensions } = data;

  return (
    <section className="py-24 sm:py-32 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800/60">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-ice-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeIn>
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
                  {badge}
                </span>
              </div>
            )}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-base sm:text-lg text-ice-200/70 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-6 rounded-full" />
          </FadeIn>
        </div>

        {/* 8-Card Dimension Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {dimensions.map((dim, idx) => {
            const IconComponent = iconMap[dim.icon] || Sparkles;

            return (
              <FadeIn key={dim.id || idx} delay={idx * 0.05}>
                <div className="h-full bg-navy-900/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-navy-800/80 hover:border-gold-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:shadow-2xl hover:shadow-gold-500/5">
                  {/* Card Top: Number, Category, Title & Icon */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold">
                            Dimension {dim.id || (idx + 1).toString().padStart(2, '0')}
                          </span>
                          {dim.category && (
                            <>
                              <span className="text-navy-700">•</span>
                              <span className="font-sans text-[11px] uppercase tracking-wider text-ice-200/50 font-medium">
                                {dim.category}
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="font-display text-2xl text-white group-hover:text-gold-100 transition-colors">
                          {dim.title}
                        </h3>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-navy-950/80 border border-navy-800 flex items-center justify-center text-gold-400 shrink-0 group-hover:scale-105 group-hover:border-gold-500/40 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="w-12 h-px bg-gold-500/30 mb-6 group-hover:w-20 group-hover:bg-gold-400 transition-all duration-500" />

                    {/* 3 Comparison Pillars */}
                    <div className="space-y-4">
                      {/* The Brando Block */}
                      <div className="bg-navy-950/60 rounded-2xl p-4 border-l-2 border-gold-400/80 border-y border-r border-navy-800/50">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-gold-300">
                            The Brando / Tetiaroa
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-gold-400/60 font-mono">
                            Private Atoll
                          </span>
                        </div>
                        <p className="font-sans text-sm text-ice-100/90 leading-relaxed">
                          {dim.theBrando}
                        </p>
                      </div>

                      {/* Bora Bora Block */}
                      <div className="bg-navy-950/60 rounded-2xl p-4 border-l-2 border-cyan-400/80 border-y border-r border-navy-800/50">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-cyan-300">
                            Bora Bora
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-cyan-400/60 font-mono">
                            Lagoon & Overwater
                          </span>
                        </div>
                        <p className="font-sans text-sm text-ice-100/90 leading-relaxed">
                          {dim.boraBora}
                        </p>
                      </div>

                      {/* Combined Journey Block */}
                      <div className="bg-navy-950/60 rounded-2xl p-4 border-l-2 border-purple-400/80 border-y border-r border-navy-800/50">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-purple-300">
                            The Combined Journey
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-purple-400/60 font-mono">
                            Seamless Dual Route
                          </span>
                        </div>
                        <p className="font-sans text-sm text-ice-100/90 leading-relaxed">
                          {dim.combined}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceDimensionGrid;
