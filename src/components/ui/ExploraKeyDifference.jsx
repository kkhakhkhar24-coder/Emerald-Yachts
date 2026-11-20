import React from 'react';
import FadeIn from './FadeIn';

const ExploraKeyDifference = ({ image, data }) => {
  return (
    <section className="w-full bg-navy-950 py-28 text-white relative overflow-hidden">
      {/* Diagonal decorative accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 via-gold-500 to-transparent z-10"></div>
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full border border-gold-400/10 z-0"></div>
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full border border-gold-400/5 z-0"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-transparent rounded-3xl blur-xl z-0"></div>
              <img
                src={image}
                alt={data.imageAlt}
                className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-6 block">
                {data.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-8 leading-snug">
                {data.heading}
              </h2>

              <blockquote className="border-l-4 border-gold-400 pl-6 mb-8">
                <p className="font-display text-lg md:text-xl text-gold-300 italic leading-relaxed">
                  "{data.quote}"
                </p>
              </blockquote>

              <p className="font-sans text-slate-300 font-light leading-relaxed mb-6">
                {data.paragraph}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {data.cards.map((card, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <h3 className="font-display text-sm text-gold-400 uppercase tracking-wider mb-2">{card.title}</h3>
                    <p className="font-sans text-slate-300 text-sm font-light">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraKeyDifference;
