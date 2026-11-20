import React from 'react';
import { Landmark, Compass, Ship, Citrus, Mountain, Footprints, ArrowUpRight } from 'lucide-react';

const ICONS = [Landmark, Compass, Ship, Citrus, Mountain, Footprints];

const AmalfiWhatToDoAndAttractions = ({ attractions = [] }) => {
  if (!attractions || !attractions.length) return null;

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-950/80 px-4 py-1.5 rounded-full border border-amber-800/50 inline-block mb-4">
            Curated Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold mb-4">
            What to Do in Amalfi: 6 Unmissable Highlights
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From 9th-century Norman-Arab cathedrals and ancient watermill paper workshops to private Capri wooden boat charters and terraced lemon farm tours.
          </p>
        </div>

        {/* 6 Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={index}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 p-7 flex flex-col justify-between shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-white font-bold mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-amber-400/90">Priority Highlight #{index + 1}</span>
                  <span className="flex items-center space-x-1 text-slate-300 group-hover:text-amber-300 transition-colors">
                    <span>Explore Detail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmalfiWhatToDoAndAttractions;
