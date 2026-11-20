import React from 'react';
import { motion } from 'framer-motion';
import { BALANCED_GRID, balancedCellClass } from './balancedGrid';
import { Check, Minus, CalendarDays, Sun, CloudRain, Wind, Snowflake, Leaf, ThermometerSun, Anchor, Map, Ship, MapPin } from 'lucide-react';

const MonthByMonthGuide = ({ data, theme, columns }) => {
  if (!data || !data.months) return null;

  const currentTheme = theme || data.theme || 'dark';
  const isLight = currentTheme === 'light';
  const isTwoCol = columns === 2 || data.columns === 2 || data.months.length === 4;

  // Icons for watermarks based on seasons or month index
  const getWatermarkIcon = (index) => {
    const icons = [Snowflake, CloudRain, Leaf, Sun, ThermometerSun, Map, Anchor, Ship, Wind, MapPin, CalendarDays, Snowflake];
    const Icon = icons[index % icons.length];
    return (
      <Icon 
        className={`w-48 h-48 md:w-64 md:h-64 absolute -bottom-12 -right-12 rotate-[-15deg] pointer-events-none ${
          isLight ? 'text-navy-950/[0.03]' : 'text-white/[0.02]'
        }`} 
      />
    );
  };

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden border-t transition-colors duration-300 ${
      isLight 
        ? 'bg-slate-50 border-slate-200/80 text-slate-900' 
        : 'bg-navy-950 border-white/10 text-white'
    }`}>
      {/* Ambient background glow */}
      <div className={`absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none -translate-x-1/2 ${
        isLight ? 'bg-amber-400/10' : 'bg-gold-400/5'
      }`}></div>
      <div className={`absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none translate-x-1/2 ${
        isLight ? 'bg-amber-300/10' : 'bg-gold-400/5'
      }`}></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={`uppercase tracking-[0.2em] text-xs font-bold mb-6 block ${
              isLight ? 'text-gold-600' : 'text-gold-400'
            }`}>
              {data.eyebrow || "Annual Rhythm"}
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight ${
              isLight ? 'text-navy-950' : 'text-white'
            }`}>
              {data.title}
            </h2>
            {data.subtitle && (
              <p className={`text-lg md:text-xl font-light leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                {data.subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* 2x2 Grid or 3-Column Curvilinear Grid */}
        <div className={`gap-6 lg:gap-8 pb-12 ${
          isTwoCol ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto' : BALANCED_GRID
        }`}>
          {data.months.map((item, index) => {
            const isEven = index % 2 === 0;
            const highlightsList = item.bestFor || item.highlights;
            
            // Curvilinear shapes alternate based on odd/even index
            const shapeClass = isEven 
              ? "rounded-2xl rounded-tl-[50px] lg:rounded-tl-[70px] rounded-br-[50px] lg:rounded-br-[70px]" 
              : "rounded-2xl rounded-tr-[50px] lg:rounded-tr-[70px] rounded-bl-[50px] lg:rounded-bl-[70px]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % (isTwoCol ? 2 : 3)) * 0.1 }}
                className={`relative group hover:z-50 ${isTwoCol ? '' : balancedCellClass(index, data.months.length)}`}
              >
                <div 
                  className={`backdrop-blur-sm p-8 transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2 ${shapeClass} ${
                    isLight 
                      ? 'bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-gold-400/60'
                      : 'bg-navy-900/40 border border-gold-400/20 shadow-2xl hover:bg-navy-900/80 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:border-gold-400/40'
                  }`}
                >
                  {/* Watermark Icon */}
                  {getWatermarkIcon(index)}

                  {/* Header Area */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <span className={`uppercase tracking-[0.2em] text-[10px] font-bold block mb-2 ${
                        isLight ? 'text-gold-600' : 'text-gold-400'
                      }`}>
                        {item.badge || (isTwoCol ? `Season ${String(index + 1).padStart(2, '0')}` : `Month ${String(index + 1).padStart(2, '0')}`)}
                      </span>
                      <h3 className={`text-3xl font-display ${isLight ? 'text-navy-950' : 'text-white'}`}>
                        {item.month}
                      </h3>
                    </div>
                    
                    {/* Small Decorative Icon top right */}
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isLight 
                        ? 'border-slate-200 bg-slate-50 text-gold-600 group-hover:bg-gold-50 group-hover:border-gold-300'
                        : 'border-gold-400/30 bg-navy-950/50 text-gold-400 opacity-50 group-hover:opacity-100'
                    }`}>
                      <CalendarDays size={16} />
                    </div>
                  </div>
                  
                  {/* Verdict / Description */}
                  <p className={`text-sm leading-relaxed mb-6 font-light relative z-10 flex-grow ${
                    isLight ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {item.verdict || item.description}
                  </p>

                  {/* Luxury Minimalist Lists */}
                  <div className={`space-y-4 pt-5 border-t relative z-10 ${
                    isLight ? 'border-slate-100' : 'border-white/10'
                  }`}>
                    {highlightsList && highlightsList.length > 0 && (
                      <div>
                        <h4 className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5 flex items-center gap-1.5 ${
                          isLight ? 'text-navy-900' : 'text-gold-300/80'
                        }`}>
                          <Check size={14} className={isLight ? 'text-emerald-600 shrink-0' : 'text-gold-400 shrink-0'} /> Key Realities & Tips
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {highlightsList.map((bf, i) => (
                            <li key={i} className={`text-[13px] flex items-start gap-2 font-light ${
                              isLight ? 'text-slate-700' : 'text-slate-300'
                            }`}>
                              <span className={`mt-1 shrink-0 ${isLight ? 'text-gold-500' : 'text-gold-400/40'}`}>•</span>
                              <span>{bf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.lessIdeal && item.lessIdeal.length > 0 && (
                      <div className="pt-2">
                        <h4 className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5 flex items-center gap-1.5 ${
                          isLight ? 'text-slate-500' : 'text-slate-400'
                        }`}>
                          <Minus size={14} className={isLight ? 'text-slate-400 shrink-0' : 'text-slate-500 shrink-0'} /> Less Ideal
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {item.lessIdeal.map((li, i) => (
                            <li key={i} className={`text-[13px] flex items-start gap-2 font-light ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}>
                              <span className={`mt-1 shrink-0 ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>•</span>
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MonthByMonthGuide;

