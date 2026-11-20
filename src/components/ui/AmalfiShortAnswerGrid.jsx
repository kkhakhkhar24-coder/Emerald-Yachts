import React from 'react';
import { Award, Waves, Lock, Home, Heart, Sparkles, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
// A quick-reference: "Best for X" -> "Stay in this area".
const ICONS = {
  'Best Overall': Award,
  'Best for Sea Views': Waves,
  'Best for Privacy': Lock,
  'Best for Authenticity': Home,
  'Best for Romance': Heart,
  'Best for Glamour': Sparkles,
};

const AmalfiShortAnswerGrid = ({ title, subtitle, cards = [] }) => {
  if (!cards.length) return null;

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
              Quick Reference
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {title || 'The Short Answer'}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
              {subtitle ||
                "At a glance: match what matters most to you with the Amalfi area that delivers it."}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = ICONS[card.title] || Award;
            return (
              <FadeIn key={card.title} delay={(i % 3) * 0.08} className="h-full">
                <article className="group h-full flex flex-col bg-white border border-[#c3e0e5] rounded-sm p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-11 h-11 rounded-full bg-[#274472] text-white flex items-center justify-center group-hover:bg-[#5290c9] transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5290c9]">
                      {card.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#274472]" />
                    <h3 className="text-2xl font-display text-[#222d4b]">{card.value}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#274472]/80">{card.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmalfiShortAnswerGrid;
