import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Wine, Heart, Landmark, Camera } from 'lucide-react';

const iconMap = {
  "First-Time Visitors": Compass,
  "Couples": Heart,
  "Food & Wine Lovers": Wine,
  "History Enthusiasts": Landmark,
  "Scenic Beauty": Camera
};

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const NonOrthogonalStyles = ({ title, categories }) => {
  const n = categories.length;
  let gridClass = 'md:grid-cols-3';
  if (n === 2 || n === 4) {
    gridClass = 'md:grid-cols-2';
  }

  return (
    <section className="relative w-full bg-[#222d4b] py-32 md:py-48 overflow-hidden z-0">
      
      {/* Background Graphic: Giant Non-Orthogonal intersecting lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[50%] bg-[#5290c9] transform -rotate-12 blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[150%] h-[50%] bg-[#274472] transform rotate-12 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-24">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c3e0e5] block mb-4">
              Style Personas
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6 uppercase tracking-widest drop-shadow-lg">
              {title}
            </h2>
            <div className="w-24 h-1 bg-[#5290c9] mx-auto"></div>
          </div>
        </FadeIn>

        {/* 
          NON-ORTHOGONAL GRID IMPLEMENTATION
          We rotate the entire grid container by -3 degrees to break the orthogonal plane.
          We then counter-rotate the cards slightly, but keep them on the slanted axis.
          We use a 3x2 grid layout for perfectly even spacing.
        */}
        <div className={`w-full max-w-[1400px] mx-auto grid grid-cols-1 ${gridClass} gap-8 md:gap-12 transform md:-rotate-3 transition-transform duration-1000`}>
          
          {categories.map((item, idx) => {
            const Icon = iconMap[item.name] || Compass;
            
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.15} 
                className="group w-full h-full flex"
              >
                <div className="
                  relative overflow-hidden w-full flex flex-col
                  bg-[#274472] backdrop-blur-md border border-white/10 
                  hover:border-[#5290c9] transition-all duration-700
                  p-8 md:p-10 shadow-2xl hover:shadow-lg hover:shadow-[#5290c9]/20
                  /* The card itself is skewed to create non-orthogonal trapezoid edges */
                  transform md:skew-x-[-4deg] md:rotate-3
                  hover:-translate-y-2 hover:scale-[1.02]
                ">
                  {/* Internal counter-skew so text is perfectly readable and orthogonal */}
                  <div className="transform md:skew-x-[4deg] flex flex-col flex-grow">
                    
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6">
                      <div className="flex items-center mb-4 xl:mb-0">
                        <div className="w-12 h-12 rounded-full bg-[#5290c9] flex items-center justify-center text-white mr-4 shrink-0 shadow-md">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-[#c3e0e5] uppercase tracking-[0.25em] text-xs font-bold">
                          {item.name}
                        </h3>
                      </div>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#5290c9]/50 to-transparent mx-6 hidden xl:block"></div>
                    </div>
                    
                    {item.badge && (
                      <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-[#c3e0e5] font-bold px-2.5 py-1 bg-[#222d4b] border border-[#5290c9]/40 rounded mb-3 w-fit">
                        {item.badge}
                      </span>
                    )}

                    <h4 className="font-display text-2xl md:text-3xl text-white mb-4 leading-tight">
                      {item.winner || item.title || item.name}
                    </h4>
                    
                    <p className="font-sans text-[#c3e0e5]/90 leading-relaxed text-sm md:text-base flex-grow">
                      {item.description || item.desc}
                    </p>
                    
                  </div>
                  
                  {/* Decorative glowing orb inside card */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#5290c9]/10 rounded-full blur-2xl group-hover:bg-[#5290c9]/20 transition-colors duration-700 pointer-events-none"></div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NonOrthogonalStyles;
