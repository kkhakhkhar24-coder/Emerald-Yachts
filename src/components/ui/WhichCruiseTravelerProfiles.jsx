import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Baby, Sparkles, User, Compass, CheckCircle, ArrowRight } from 'lucide-react';

const ICONS = [Baby, Sparkles, Users, Heart, User, Compass];

const WhichCruiseTravelerProfiles = ({ profiles = [] }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!profiles.length) return null;

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-slate-200 text-navy-800 text-xs font-semibold tracking-wider uppercase mb-3">
            Custom Demographics & Pacing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            Best Royal Caribbean Ships by Traveler Profile
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Every vacation group has distinct pacing, privacy, and entertainment needs. Select your traveler profile below to reveal the optimal vessel and insider stateroom tactics.
          </p>
        </div>

        {/* Tab Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {profiles.map((p, idx) => {
            const TabIcon = ICONS[idx % ICONS.length];
            const isActive = idx === activeIdx;
            return (
              <button
                key={idx}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIdx(idx)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0a192f] border-[#0a192f] text-white shadow-lg -translate-y-1'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <div className={`p-3 rounded-xl mb-3 ${isActive ? 'bg-white/10 text-[#c9a15c]' : 'bg-white text-navy-800 border border-slate-200/80'}`}>
                  <TabIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {p.profile.split('(')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Profile showcases — all rendered so every profile is in the prerendered HTML;
            only the selected one is visible. */}
        {profiles.map((profile, idx) => {
          const ProfileIcon = ICONS[idx % ICONS.length];
          return (
          <div
            key={idx}
            className={`bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm ${idx === activeIdx ? "" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Col: Details & Requirements */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white rounded-2xl text-navy-900 border border-slate-200 shadow-sm">
                    <ProfileIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#c9a15c] font-bold block">Recommended Match</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-normal">
                      {profile.profile}
                    </h3>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Key Traveler Needs</div>
                  <p className="text-slate-700 font-sans text-base leading-relaxed font-light">{profile.keyNeeds}</p>
                </div>

                <div className="bg-amber-50/80 p-5 rounded-2xl border-l-4 border-[#c9a15c] border border-amber-200/60">
                  <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Angela's Insider Advisory Tip</span>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base italic font-light">
                    "{profile.insiderTip}"
                  </p>
                </div>
              </div>

              {/* Right Col: Ship Match Callout Box */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Top Ship Selection</span>
                  <h4 className="font-serif text-2xl text-navy-950 font-normal mt-2 mb-4">
                    {profile.bestShip}
                  </h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2.5 text-sm text-slate-600 font-light">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Purpose-built spaces for this specific passenger demographic.</span>
                    </div>
                    <div className="flex items-start space-x-2.5 text-sm text-slate-600 font-light">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Optimized deck locations for elevators, dining & entertainment.</span>
                    </div>
                    <div className="flex items-start space-x-2.5 text-sm text-slate-600 font-light">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Exclusive VIP perks and stateroom layouts available.</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#0a192f] hover:bg-navy-900 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-sm"
                >
                  <span>Plan This Vacation With Angela</span>
                  <ArrowRight className="w-4 h-4 text-[#c9a15c]" />
                </Link>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhichCruiseTravelerProfiles;
