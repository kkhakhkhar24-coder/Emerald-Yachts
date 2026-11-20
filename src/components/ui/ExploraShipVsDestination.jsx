import React, { useState } from 'react';
import FadeIn from './FadeIn';
import CrawlablePanels from './CrawlablePanels';

const ExploraShipVsDestination = ({ image, data }) => {
  const [activeTab, setActiveTab] = useState('silversea');

  const tabs = data.tabs;
  const test = data.test;
  const active = tabs[activeTab];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Image + Decision Test */}
          <FadeIn>
            <div>
              <img
                src={image}
                alt={data.imageAlt}
                className="w-full h-[380px] object-cover rounded-2xl shadow-lg mb-8"
                loading="lazy"
              />
              <div className="bg-navy-950 rounded-2xl p-8 text-white">
                <h3 className="font-display text-lg text-gold-400 mb-4">{test.title}</h3>
                <p className="font-sans text-slate-300 text-sm font-light leading-relaxed mb-4">
                  {test.text}
                </p>
                <div className="space-y-3">
                  {test.rows.map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gold-400 font-bold text-sm mt-0.5 whitespace-nowrap">{row.label}</span>
                      <span className="text-slate-300 text-sm font-light">{row.text}</span>
                    </div>
                  ))}
                </div>
                {test.closing && (
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed mt-4">
                    <em>{test.closing}</em>
                  </p>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Right: Tabbed content */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                {data.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 leading-tight">
                {data.heading}
              </h2>

              {data.intro && (
                <p className="font-sans text-slate-500 text-sm font-light mb-8">{data.intro}</p>
              )}

              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                {Object.entries(tabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 py-2.5 rounded-full text-sm font-display transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-navy-950 text-gold-400'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <h3 className="font-display text-xl text-navy-950 mb-4">{active.heading}</h3>

              <ul className="space-y-3 mb-8">
                {active.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-slate-600 text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-3 border-gold-400 pl-5 mb-6">
                <p className="font-sans text-slate-500 text-sm italic font-light">{active.quote}</p>
              </blockquote>

              <p className="font-sans text-slate-500 text-sm font-light">{active.appeal}</p>

              {data.note && (
                <p className="font-sans text-slate-400 text-xs font-light mt-6">{data.note}</p>
              )}
              {data.editorialNote && (
                <p className="font-sans text-slate-400 text-xs font-light mt-3">{data.editorialNote}</p>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
      <CrawlablePanels items={tabs} activeIndex={activeTab} />
    </section>
  );
};

export default ExploraShipVsDestination;
