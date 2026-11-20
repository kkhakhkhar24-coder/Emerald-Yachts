import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Landmark, Citrus, Mountain, Clock, ArrowUpRight } from 'lucide-react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const ICONS = [Ship, Landmark, Citrus, Mountain];

const IsAmalfiLuxuryExperiences = ({ experiences = [] }) => {
  if (!experiences || !experiences.length) return null;

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#5290c9] font-bold">
            Curated Excursions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
            4 Experiences That Make Amalfi Unforgettable
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
          <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
            Elevate your journey beyond mass tourism with private, bespoke excursions organized by
            Trips &amp; Ships.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-sm border border-[#c3e0e5] hover:border-[#5290c9] transition-all duration-300 p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c3e0e5]/40 rounded-bl-full group-hover:bg-[#c3e0e5]/70 transition-colors pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#274472] rounded-full text-white group-hover:bg-[#5290c9] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs text-[#274472] bg-[#c3e0e5]/50 px-3 py-1 rounded-full border border-[#c3e0e5]">
                      <Clock className="w-3.5 h-3.5 text-[#5290c9]" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display text-[#222d4b] mb-3">
                    {exp.title}
                  </h3>

                  <p className="text-[#274472]/80 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c3e0e5] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#5290c9]">Curated by Trips &amp; Ships</span>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-1 text-[#274472] font-semibold group-hover:text-[#5290c9] transition-colors"
                  >
                    <span>Reserve Experience</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IsAmalfiLuxuryExperiences;
