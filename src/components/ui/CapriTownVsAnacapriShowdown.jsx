import React, { useState } from 'react';
import { Building2, Mountain, Sparkles, Check, ArrowRight, Compass, ShoppingBag, Utensils, HeartHandshake, Eye } from 'lucide-react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const CapriTownVsAnacapriShowdown = ({ data, capriImg, anacapriImg }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!data) return null;

  const { title, subtitle, headers = [], rows = [] } = data;

  const townDetails = {
    capriTown: {
      name: 'Capri Town',
      subtitle: 'The Glamorous Heart of the Island',
      badge: 'DOLCE VITA & HIGH ENERGY',
      vibe: 'Bustling Piazzetta, designer fashion on Via Camerelle, and vibrant midnight aperitivo.',
      keyPoints: [
        'Piazzetta nightlife and Michelin-caliber dining right at your doorstep',
        'Direct access to Via Camerelle high-fashion luxury boutiques',
        'Walking distance to the Gardens of Augustus and Faraglioni viewpoints',
        'Short funicular or taxi hop down to Marina Grande ferry harbour'
      ],
      bestFor: 'First-time visitors, social couples, luxury shoppers, and travelers wanting vibrant evenings.',
      flagshipHotels: ['Grand Hotel Quisisana', 'Hotel La Palma', 'Hotel Punta Tragara', 'Hotel Scalinatella']
    },
    anacapri: {
      name: 'Anacapri',
      subtitle: 'The Elevated Hilltop Sanctuary',
      badge: 'PANORAMIC TRANQUILITY',
      vibe: 'Sweeping 1,000-ft cliffside panoramas over the Bay of Naples, quiet artisan lanes, and medical wellness.',
      keyPoints: [
        'Unmatched sunset vistas over the Gulf of Naples and Mount Vesuvius',
        'Peaceful, unhurried atmosphere away from day-tripper crowds',
        'Home to the iconic Monte Solaro chairlift and Villa San Michele',
        'World-class wellness sanctuaries and tiered cliffside infinity pools'
      ],
      bestFor: 'Honeymooners, privacy seekers, wellness enthusiasts, and return visitors seeking serene luxury.',
      flagshipHotels: ['Hotel Caesar Augustus', 'Jumeirah Capri Palace']
    }
  };

  return (
    <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden border-y border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#c9a15c] text-xs font-bold font-mono tracking-[0.25em] uppercase block mb-3">
              Geographic Decision Strategy
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
              {title}
            </h2>
            <div className="w-20 h-1 bg-[#c9a15c] mx-auto mb-6"></div>
            <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Dual Side-by-Side Faceoff Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          
          {/* 1. Capri Town Card */}
          <FadeIn delay={0.1} className="h-full">
            <div className="rounded-3xl bg-slate-800/90 border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col justify-between h-full hover:border-[#c9a15c]/50 transition-all duration-300 group">
              {/* Visual Banner */}
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-900">
                <MasterImage
                  src={capriImg}
                  alt="Capri Town Luxury"
                  placeholderLabel="CAPRI TOWN: PIAZZETTA & VIA CAMERELLE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#c9a15c] text-navy-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {townDetails.capriTown.badge}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[#c9a15c]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                        {townDetails.capriTown.name}
                      </h3>
                      <p className="text-xs text-[#c9a15c] font-light">
                        {townDetails.capriTown.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed my-4 pb-4 border-b border-slate-700/60">
                    {townDetails.capriTown.vibe}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Stay Advantages:
                    </span>
                    {townDetails.capriTown.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                        <Check className="w-4 h-4 text-[#c9a15c] shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-700/60">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/50 text-xs">
                    <span className="font-semibold text-[#c9a15c] block mb-1">Ideal For:</span>
                    <span className="text-slate-300 font-light">{townDetails.capriTown.bestFor}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] text-slate-400 uppercase font-mono mr-1">Hotels:</span>
                    {townDetails.capriTown.flagshipHotels.map((h, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-light">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 2. Anacapri Card */}
          <FadeIn delay={0.2} className="h-full">
            <div className="rounded-3xl bg-slate-800/90 border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col justify-between h-full hover:border-[#c9a15c]/50 transition-all duration-300 group">
              {/* Visual Banner */}
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-900">
                <MasterImage
                  src={anacapriImg}
                  alt="Anacapri Luxury"
                  placeholderLabel="ANACAPRI: PANORAMIC CLIFFSIDE SERENITY"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-sky-400 text-navy-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {townDetails.anacapri.badge}
                </div>
              </div>

              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Mountain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                        {townDetails.anacapri.name}
                      </h3>
                      <p className="text-xs text-sky-400 font-light">
                        {townDetails.anacapri.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed my-4 pb-4 border-b border-slate-700/60">
                    {townDetails.anacapri.vibe}
                  </p>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Stay Advantages:
                    </span>
                    {townDetails.anacapri.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="font-light leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-700/60">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/50 text-xs">
                    <span className="font-semibold text-sky-400 block mb-1">Ideal For:</span>
                    <span className="text-slate-300 font-light">{townDetails.anacapri.bestFor}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] text-slate-400 uppercase font-mono mr-1">Hotels:</span>
                    {townDetails.anacapri.flagshipHotels.map((h, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-light">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Detailed Side-by-Side Comparison Matrix */}
        {rows.length > 0 && (
          <FadeIn delay={0.3}>
            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-md">
              <div className="text-center mb-6">
                <h4 className="text-lg font-display text-white font-medium">
                  Direct Location Factor Breakdown
                </h4>
                <p className="text-xs text-slate-400 font-light">
                  How every travel dynamic shifts between Capri Town and Anacapri
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 uppercase font-mono text-[11px]">
                      <th className="py-3 px-4">Dynamic Factor</th>
                      <th className="py-3 px-4 text-[#c9a15c]">Capri Town</th>
                      <th className="py-3 px-4 text-sky-400">Anacapri</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 font-light">
                    {rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-white">{row[0]}</td>
                        <td className="py-3 px-4 text-slate-300">{row[1]}</td>
                        <td className="py-3 px-4 text-slate-300">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default CapriTownVsAnacapriShowdown;
