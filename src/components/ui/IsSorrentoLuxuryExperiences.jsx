import React from 'react';
import FadeIn from './FadeIn';
import { Sailboat, Landmark, Waves, ChefHat, Citrus, Sunset, Check } from 'lucide-react';

const icons = [Sailboat, Landmark, Waves, ChefHat, Citrus, Sunset];

const IsSorrentoLuxuryExperiences = ({ data = {} }) => {
  const experiences = data?.experiences || [];

  return (
    <section className="w-full bg-navy-950 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-ts-gold"></div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">{data?.eyebrow}</span>
            <div className="w-12 h-[1px] bg-ts-gold"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white">{data?.heading}</h2>
          <p className="font-sans text-white/70 text-lg font-light max-w-3xl mx-auto mt-8 leading-relaxed">{data?.introParagraph}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-ts-gold mb-5" />
                  <h3 className="font-display text-xl text-white mb-4">{experience?.title}</h3>
                  <p className="font-sans text-white/70 font-light text-sm leading-relaxed mb-6">{experience?.description}</p>
                  <ul className="space-y-3">
                    {(experience?.highlights || []).map((highlight, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-ts-gold flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-white/80 text-sm font-light">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IsSorrentoLuxuryExperiences;
