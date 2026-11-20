import React, { useState } from 'react';
import { Heart, Users, User, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import CrawlablePanels from './CrawlablePanels';

const ICONS = [Heart, Users, User, Compass];

const IsAmalfiTravelerArchetypes = ({ archetypes = [] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!archetypes || !archetypes.length) return null;
  const active = archetypes[activeIdx] || archetypes[0];
  const ActiveIcon = ICONS[activeIdx % ICONS.length];

  return (
    <section className="py-20 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-800 font-bold bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200 inline-block mb-4">
            Demographic Suitability
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold mb-4">
            Is Amalfi Good for Your Travel Party?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Select your travel profile below to reveal custom advice on accommodations, terrain pacing, and priority experiences.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {archetypes.map((item, idx) => {
            const TabIcon = ICONS[idx % ICONS.length];
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-5 rounded-2xl border transition-all flex flex-col items-center text-center ${
                  isActive
                    ? 'bg-white border-cyan-600 text-cyan-950 shadow-lg shadow-cyan-100 -translate-y-1 ring-2 ring-cyan-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className={`p-3 rounded-xl mb-3 ${isActive ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-200/60 text-slate-500'}`}>
                  <TabIcon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold leading-tight">{item.profile}</span>
              </button>
            );
          })}
        </div>

        {/* Active Profile Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-cyan-100 rounded-xl text-cyan-700 border border-cyan-200">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-cyan-700 font-bold block">Selected Traveler Profile</span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">
                    {active.profile}
                  </h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Angela's Tailored Advice</span>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  {active.advice}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-cyan-200 text-center flex flex-col justify-between h-full shadow-md">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-1">Amalfi Match Rating</span>
                <div className="text-2xl font-serif font-bold text-cyan-800 mb-4">{active.verdict}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Trips & Ships coordinates customized private transfers, verified elevator-equipped suites, and flexible daily pacing.
                </p>
              </div>

              <a
                href="https://www.tripsandships.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-all shadow-sm"
              >
                <span>Plan This Vacation With Angela</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
      <CrawlablePanels items={archetypes} activeIndex={activeIdx} />
    </section>
  );
};

export default IsAmalfiTravelerArchetypes;
