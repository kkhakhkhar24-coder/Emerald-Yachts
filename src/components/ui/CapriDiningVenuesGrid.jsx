import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const CapriDiningVenuesGrid = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-navy-950 px-6 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs font-bold font-mono tracking-[0.25em] uppercase block mb-3">
              Michelin Stars & Lemon Gardens
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide">
              {title}
            </h2>
            <div className="w-20 h-1 bg-gold-400 mx-auto mb-6"></div>
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-ice-200 max-w-3xl mx-auto leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        {/* 3-Column Luxury Grid (6 Items = 2 Rows of 3, Zero Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.1}
              className="h-full"
            >
              <div className="group relative w-full h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl bg-navy-900 border border-white/10 hover:border-gold-400/50 transition-all duration-500 flex flex-col justify-end">
                {/* Background Image */}
                <MasterImage
                  src={item.image}
                  alt={item.title}
                  placeholderLabel={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Content Container */}
                <div className="relative p-8 flex flex-col justify-end text-white z-10">
                  <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    
                    {/* Top Label */}
                    {item.category && (
                      <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-500/30 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                        {item.category}
                      </span>
                    )}
                    
                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl mb-3 text-white group-hover:text-gold-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-sans text-sm text-ice-200 line-clamp-3 leading-relaxed font-light">
                      {item.description}
                    </p>
                    
                    {/* Decorative Line */}
                    <div className="h-0.5 w-12 bg-gold-400 mt-4 transform origin-left scale-x-75 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapriDiningVenuesGrid;
