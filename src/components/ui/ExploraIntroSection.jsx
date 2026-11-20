import React from 'react';
import FadeIn from './FadeIn';

const ExploraIntroSection = ({ image, data }) => {
  return (
    <section className="w-full bg-white py-20 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Content */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3.5xl text-navy-950 leading-tight font-medium">
                {data.heading}
              </h2>

              {data.paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  {p}
                </p>
              ))}

              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed font-semibold text-navy-900">
                {data.highlight}
              </p>

              <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                {data.closing}
              </p>
            </div>
          </FadeIn>

          {/* Right Side: Visual block */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt={data.imageAlt}
                className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraIntroSection;
