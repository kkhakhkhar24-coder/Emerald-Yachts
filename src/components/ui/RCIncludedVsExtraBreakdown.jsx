import React, { useState } from 'react';
import { 
  CheckCircle2, 
  PlusCircle, 
  Utensils, 
  Film, 
  Zap, 
  Smile, 
  Heart, 
  Anchor, 
  Coffee, 
  GlassWater, 
  Coins, 
  Compass, 
  Sparkles,
  Camera,
  ChevronDown,
  ChevronUp,
  Search
} from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  Utensils,
  Film,
  Zap,
  Smile,
  Heart,
  Anchor,
  Coffee,
  GlassWater,
  Coins,
  Compass,
  Sparkles,
  Camera
};

const RCIncludedVsExtraBreakdown = ({ includedVsExtra, includedImages, extraImages }) => {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'included', 'extra'
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});

  if (!includedVsExtra) return null;

  const { eyebrow, title, description, includedCategories = [], extraCategories = [] } = includedVsExtra;

  const toggleCategory = (id) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filterItems = (categories) => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories.map(cat => {
      const matchCat = cat.title.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
      const matchedItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(query) || item.detail.toLowerCase().includes(query)
      );
      if (matchCat || matchedItems.length > 0) {
        return {
          ...cat,
          items: matchCat ? cat.items : matchedItems
        };
      }
      return null;
    }).filter(Boolean);
  };

  const filteredIncluded = filterItems(includedCategories);
  const filteredExtra = filterItems(extraCategories);

  return (
    <section className="py-24 bg-white text-navy-950 relative overflow-hidden border-b border-border-light">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

          {/* Search Bar & View Filter Tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dining, drinks, shows, thrills..."
                className="w-full bg-slate-50 border border-slate-200 text-navy-950 placeholder-slate-400 text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'all'
                    ? 'bg-navy-950 text-white shadow-md font-bold'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                Side-by-Side View
              </button>
              <button
                onClick={() => setActiveTab('included')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'included'
                    ? 'bg-[#2e6f77] text-white shadow-md font-bold'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                100% Free ({filteredIncluded.length})
              </button>
              <button
                onClick={() => setActiveTab('extra')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'extra'
                    ? 'bg-gold-400 text-white shadow-md font-bold'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                Extra Charges ({filteredExtra.length})
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Grid Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT: 100% Complimentary Inclusions */}
          {(activeTab === 'all' || activeTab === 'included') && (
            <div className={`space-y-6 ${activeTab === 'included' ? 'lg:col-span-2 max-w-5xl mx-auto w-full' : ''}`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ice-50 border border-slate-200 flex items-center justify-center text-[#2e6f77]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-normal text-navy-950">100% Included in Cruise Fare</h3>
                    <p className="text-xs text-[#2e6f77] font-medium tracking-wide">Unlimited access · No surprise folio fees</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-ice-50 text-[#2e6f77] border border-slate-200 rounded-full text-xs font-bold">
                  {filteredIncluded.reduce((acc, cat) => acc + cat.items.length, 0)} Free Items
                </span>
              </div>

              <div className="space-y-6">
                {filteredIncluded.map((category) => {
                  const Icon = iconMap[category.icon] || CheckCircle2;
                  const isExpanded = expandedCategories[category.id] !== false;

                  return (
                    <div 
                      key={category.id}
                      className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      {/* Category Visual Banner */}
                      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                        <MasterImage
                          src={category.image || (includedImages && includedImages[category.id])}
                          alt={category.title}
                          placeholderLabel={`INCLUDED: ${category.title.toUpperCase()}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors border-t border-slate-200"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-full bg-ice-50 text-[#2e6f77] flex items-center justify-center shrink-0 border border-slate-200">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-display font-normal text-navy-950 flex items-center gap-2">
                              {category.title}
                              <span className="text-[11px] font-sans font-medium text-[#2e6f77] px-2.5 py-0.5 rounded-full bg-ice-50 border border-slate-200">
                                {category.badge}
                              </span>
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{category.description}</p>
                          </div>
                        </div>
                        <div className="text-slate-400 group-hover:text-navy-950 pl-2">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-6 py-5 border-t border-slate-200 bg-white space-y-3.5">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#2e6f77] shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-navy-950 font-normal font-display">{item.name}</strong>
                                <span className="text-slate-600 text-xs block mt-0.5 font-light leading-relaxed">{item.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* RIGHT: Extra Charges & Optional Upgrades */}
          {(activeTab === 'all' || activeTab === 'extra') && (
            <div className={`space-y-6 ${activeTab === 'extra' ? 'lg:col-span-2 max-w-5xl mx-auto w-full' : ''}`}>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#c9a15c]/30 flex items-center justify-center text-[#c9a15c]">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-normal text-navy-950">Extra Charges & Optional Upgrades</h3>
                    <p className="text-xs text-[#c9a15c] font-medium tracking-wide">A la carte or bundled packages available</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-white text-[#c9a15c] border border-[#c9a15c]/30 rounded-full text-xs font-bold">
                  {filteredExtra.reduce((acc, cat) => acc + cat.items.length, 0)} Premium Items
                </span>
              </div>

              <div className="space-y-6">
                {filteredExtra.map((category) => {
                  const Icon = iconMap[category.icon] || PlusCircle;
                  const isExpanded = expandedCategories[category.id] !== false;

                  return (
                    <div 
                      key={category.id}
                      className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      {/* Category Visual Banner */}
                      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                        <MasterImage
                          src={category.image || (extraImages && extraImages[category.id])}
                          alt={category.title}
                          placeholderLabel={`EXTRA UPGRADE: ${category.title.toUpperCase()}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors border-t border-slate-200"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-full bg-white text-[#c9a15c] flex items-center justify-center shrink-0 border border-[#c9a15c]/30">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-display font-normal text-navy-950 flex items-center gap-2">
                              {category.title}
                              <span className="text-[11px] font-sans font-medium text-[#c9a15c] px-2.5 py-0.5 rounded-full bg-white border border-[#c9a15c]/30">
                                {category.badge}
                              </span>
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{category.description}</p>
                          </div>
                        </div>
                        <div className="text-slate-400 group-hover:text-navy-950 pl-2">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-6 py-5 border-t border-slate-200 bg-white space-y-3.5">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm">
                              <PlusCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-navy-950 font-normal font-display">{item.name}</strong>
                                <span className="text-slate-600 text-xs block mt-0.5 font-light leading-relaxed">{item.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Value Tip Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-ice-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white text-gold-400 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
              <Sparkles className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h4 className="text-lg font-display font-normal text-navy-950">Angela Hughes' Inclusions Rule</h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 font-light leading-relaxed">
                "You can have a world-class 7-night vacation on Royal Caribbean without spending a single penny over your base fare and gratuities. Premium add-ons should be chosen selectively based on how you personally vacation."
              </p>
            </div>
          </div>
          {/* The calculator section lives on the What's Included page — a full path keeps this link
              working on every page that uses this component (it scrolls in place on that page). */}
          <a
            href="/what-is-included-on-royal-caribbean#cost-calculator"
            className="shrink-0 px-6 py-3 rounded-full border border-navy-950 hover:bg-navy-950 hover:text-white text-navy-950 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Calculate Your Vacation Cost
          </a>
        </div>
      </div>
    </section>
  );
};

export default RCIncludedVsExtraBreakdown;
