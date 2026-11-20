import React from 'react';
import FadeIn from './FadeIn';

const ICONS = {
  dining: (
    <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75m0 5.25h5.25M12 9H6.75" />
    </svg>
  ),
  inclusions: (
    <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5M20.25 3v16.5M3.75 5.25h16.5M3.75 12h16.5M4 19.5h16M7.5 8.25h9m-9 3h9" />
    </svg>
  ),
};

const ExploraSuitesDiningWellness = ({ image, data }) => {
  const sections = data.sections;
  const advice = data.advice;

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Content cards */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                {data.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-10 leading-tight">
                {data.heading}
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {sections.map((section, idx) => (
                <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                  <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
                    <div className="bg-navy-950 px-6 py-3 flex items-center gap-3">
                      <div className="flex-shrink-0">{ICONS[section.icon]}</div>
                      <h3 className="font-display text-sm uppercase tracking-widest text-gold-400">{section.category}</h3>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-slate-100">
                      {/* Silversea */}
                      <div className="p-5">
                        <h4 className="font-display text-xs uppercase tracking-wider text-navy-950 mb-3">{section.silversea.title}</h4>
                        <ul className="space-y-2">
                          {section.silversea.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="font-sans text-slate-600 text-xs font-light leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Explora */}
                      <div className="p-5">
                        <h4 className="font-display text-xs uppercase tracking-wider text-navy-950 mb-3">{section.explora.title}</h4>
                        <ul className="space-y-2">
                          {section.explora.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="font-sans text-slate-600 text-xs font-light leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {data.note && (
              <FadeIn>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed mt-6">{data.note}</p>
              </FadeIn>
            )}
          </div>

          {/* Right: Image */}
          <FadeIn delay={0.15}>
            <div className="sticky top-24">
              <img
                src={image}
                alt={data.imageAlt}
                className="w-full h-[520px] object-cover rounded-2xl shadow-lg mb-6"
                loading="lazy"
              />
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <h3 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-3">{advice.title}</h3>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  {advice.intro}
                </p>
                <ul className="space-y-2 my-3">
                  {advice.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-sans text-slate-600 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">
                  {advice.closing}
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraSuitesDiningWellness;
