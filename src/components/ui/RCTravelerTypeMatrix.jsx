import React, { useState } from 'react';
import { 
  Users, 
  Baby, 
  HeartHandshake, 
  Network, 
  Compass, 
  Crown, 
  Check, 
  Ship
} from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  Baby,
  Users,
  HeartHandshake,
  Network,
  Compass,
  Crown
};

const RCTravelerTypeMatrix = ({ travelerTypes, images }) => {
  const [activeProfileId, setActiveProfileId] = useState('families-kids');

  if (!travelerTypes) return null;

  const { eyebrow, title, description, profiles = [], comparisonMatrix } = travelerTypes;

  const activeProfile = profiles.find(p => p.id === activeProfileId) || profiles[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {eyebrow && (
            <span className="text-gold-400 font-bold tracking-[0.25em] uppercase text-xs block mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-normal text-navy-950 tracking-tight mb-4">
            {title}
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* 6 Traveler Type Interactive Tabs */}
        <div role="tablist" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {profiles.map((profile) => {
            const Icon = iconMap[profile.icon] || Users;
            const isActive = profile.id === activeProfile?.id;

            return (
              <button
                key={profile.id}
                type="button"
                role="tab"
                id={`rc-traveler-tab-${profile.id}`}
                aria-selected={isActive}
                aria-controls={`rc-traveler-panel-${profile.id}`}
                onClick={() => setActiveProfileId(profile.id)}
                className={`p-4 rounded-3xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-3 ${
                  isActive
                    ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-gold-400 text-navy-950' : 'bg-lavender-50 text-navy-800 border border-slate-200/60'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-display font-normal leading-tight line-clamp-2">
                  {profile.name.split('(')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Profile detail cards — all rendered so every profile is in the prerendered HTML;
            only the selected one is visible. */}
        {profiles.map((profile) => {
          const ProfileIcon = iconMap[profile.icon] || Users;
          const isActive = profile.id === activeProfile?.id;
          return (
          <div
            key={profile.id}
            id={`rc-traveler-panel-${profile.id}`}
            role="tabpanel"
            aria-labelledby={`rc-traveler-tab-${profile.id}`}
            className={`bg-navy-950 text-white rounded-3xl overflow-hidden shadow-xl mb-20 border border-navy-900 ${isActive ? "" : "hidden"}`}
          >
            {/* Visual Header Banner */}
            <div className="relative h-64 sm:h-80 md:h-[420px] w-full overflow-hidden">
              <MasterImage
                src={profile.image || (images && images[profile.id]) || null}
                alt={profile.name}
                placeholderLabel={`TRAVELER PROFILE: ${profile.name.toUpperCase()}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/20 pointer-events-none" />
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a15c] text-navy-950 flex items-center justify-center shrink-0 shadow-md">
                    <ProfileIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-normal text-white">
                      {profile.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c9a15c] font-light mt-1">
                      Strategy: {profile.recommendedStrategy}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-2xl bg-navy-900 border border-navy-800 text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Ship className="w-4 h-4 text-[#c9a15c]" />
                    {profile.bestShipClass}
                  </span>
                </div>
              </div>

              {/* Description & Tips */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Vacation Inclusions Profile
                  </h4>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {profile.description}
                  </p>
                  <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c9a15c] block mb-1">
                      Primary Onboard Focus:
                    </span>
                    <span className="text-sm text-slate-100 font-medium">
                      {profile.keyFocus}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Angela's Tactical Tips:
                  </h4>
                  <div className="space-y-3">
                    {profile.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-navy-900 border border-navy-800 text-xs sm:text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#c9a15c]/20 text-[#c9a15c] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-slate-200 font-light leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        })}

        {/* Master Comparison Matrix Table */}
        {comparisonMatrix && (
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-display font-normal text-navy-950">
                Quick Inclusions & Budget Matrix
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-light">
                At-a-glance comparison across all major travel party categories.
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm text-slate-700 border-collapse">
                <thead className="bg-navy-950 text-white font-display text-xs uppercase tracking-wider">
                  <tr>
                    {comparisonMatrix.headers.map((header, idx) => (
                      <th key={idx} className="py-4 px-5 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {comparisonMatrix.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-5 font-display font-bold text-navy-950 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#c9a15c]" />
                        {row.profile}
                      </td>
                      <td className="py-4 px-5 font-medium text-slate-800">
                        {row.ship}
                      </td>
                      <td className="py-4 px-5 text-slate-700">
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-medium text-xs border border-blue-200 whitespace-nowrap inline-flex items-center">
                          {row.package}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-emerald-800 font-medium">
                        {row.perk}
                      </td>
                      <td className="py-4 px-5 font-bold text-slate-900 font-mono text-xs">
                        {row.spend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RCTravelerTypeMatrix;
