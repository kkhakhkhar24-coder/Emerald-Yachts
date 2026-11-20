import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Award, Globe, Users, Key, Sailboat, Map, 
  Headphones, PlaneTakeoff, Home, Lock, CheckCircle2, 
  Sparkles, Compass, Anchor, Heart 
} from 'lucide-react';

const iconsList = [
  Compass, Map, ShieldCheck, Sailboat, 
  Anchor, Award, Users, Key, 
  Heart, PlaneTakeoff, Home, CheckCircle2
];

const iconMap = {
  "40+ Years Experience": ShieldCheck,
  "121+ Countries Visited": Globe,
  "Award-Winning": Award,
  "Top Industry Voice": Users,
  "Direct Local Contacts": Key,
  "VIP Acropolis Access": CheckCircle2,
  "Exclusive Yachts": Sailboat,
  "Curated Combinations": Map,
  "24/7 Support": Headphones,
  "Seamless Transfers": PlaneTakeoff,
  "Vetted Villas": Home,
  "Flight Protection": Lock
};

export default function TwelvePointAuthorityBox({ data, items }) {
  const pointsList = data?.points || data?.items || items || [];
  if (!pointsList || pointsList.length === 0) return null;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const title = data?.title || "The 12 Golden Rules of Itinerary Planning";
  const subtitle = data?.subtitle || "ANGELA HUGHES' MASTER METHODOLOGY FOR LUXURY TRAVEL";

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden border-t border-navy-900 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold-400 border border-gold-400/30 mb-4"
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="text-xs font-semibold tracking-wider uppercase">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-white mb-4 leading-tight"
          >
            {title}
          </motion.h2>
          
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2"></div>
        </div>

        {/* 12 Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {pointsList.map((point, index) => {
            const Icon = iconMap[point.title] || iconsList[index % iconsList.length] || ShieldCheck;
            const numberFormatted = point.number || String(index + 1).padStart(2, '0');
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHovered 
                    ? 'bg-navy-900 border-gold-400/60 scale-[1.02] shadow-2xl shadow-gold-500/10' 
                    : 'bg-navy-900/60 border-navy-800 hover:border-gold-400/30 hover:bg-navy-900/80'
                }`}
              >
                {/* Active glow accent */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-70 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* Top Header: Icon & Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isHovered 
                        ? 'bg-gold-500 text-navy-950 font-bold' 
                        : 'bg-navy-950 text-gold-400 border border-gold-400/20'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-2xl font-display font-bold text-slate-700/80 group-hover:text-gold-400/60 transition-colors select-none">
                      {numberFormatted}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-display font-semibold text-white mb-2.5 group-hover:text-gold-300 transition-colors leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
                
                {/* Decorative gold corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-500/20 to-transparent transition-opacity duration-300 rounded-bl-full pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
