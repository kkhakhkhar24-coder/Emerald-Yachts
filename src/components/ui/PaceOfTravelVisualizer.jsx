import React, { useState } from 'react';
import { Clock, Map, Sun, Palmtree, Utensils, Anchor } from 'lucide-react';
import FadeIn from './FadeIn';

const PaceOfTravelVisualizer = ({ title, subtitle, image3Day, image5Day, image7Day }) => {
  const [activeTab, setActiveTab] = useState('5 Days');

  const options = [
    {
      id: '3 Days',
      label: '3 Days (The Rushed Route)',
      icon: <Clock size={20} />,
      image: image3Day,
      summary: "A whirlwind tour of the major highlights. Expect to be constantly on the move with limited downtime.",
      timeline: [
        { day: 'Day 1', text: 'Arrive in Naples, transfer to Amalfi. Quick walk around town.', icon: <Map size={16} /> },
        { day: 'Day 2', text: 'Morning in Positano, afternoon in Ravello. Very tight schedule.', icon: <Sun size={16} /> },
        { day: 'Day 3', text: 'Early departure. No time for a private boat or Capri.', icon: <Clock size={16} /> }
      ]
    },
    {
      id: '5 Days',
      label: '5 Days (Our Recommendation)',
      icon: <Anchor size={20} />,
      image: image5Day,
      summary: "The perfect balance. Enough time to see the iconic towns, enjoy a private boat, and actually relax.",
      timeline: [
        { day: 'Day 1', text: 'Arrive, settle into your luxury hotel. Relaxed evening in Amalfi.', icon: <Palmtree size={16} /> },
        { day: 'Day 2', text: 'Morning exploring Ravello gardens. Afternoon at leisure.', icon: <Map size={16} /> },
        { day: 'Day 3', text: 'Full day private boat experience along the dramatic coastline.', icon: <Anchor size={16} /> },
        { day: 'Day 4', text: 'Explore Positano, shop boutiques, enjoy sunset aperitivo.', icon: <Sun size={16} /> },
        { day: 'Day 5', text: 'Leisurely breakfast before private transfer to airport/train.', icon: <Utensils size={16} /> }
      ]
    },
    {
      id: '7 Days',
      label: '7+ Days (Slow Luxury)',
      icon: <Palmtree size={20} />,
      image: image7Day,
      summary: "Ultimate relaxation. Combine the Amalfi Coast with Capri and have days with zero obligations.",
      timeline: [
        { day: 'Days 1-2', text: 'Settle in Amalfi, explore Ravello at a completely relaxed pace.', icon: <Map size={16} /> },
        { day: 'Days 3-4', text: 'Private boat day, followed by a dedicated day for Positano.', icon: <Anchor size={16} /> },
        { day: 'Days 5-6', text: 'Take a ferry to Capri for 2 nights of glamorous island life.', icon: <Sun size={16} /> },
        { day: 'Day 7', text: 'Final lingering breakfast overlooking the Mediterranean.', icon: <Utensils size={16} /> }
      ]
    }
  ];

  const currentOption = options.find(o => o.id === activeTab);

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
              Pacing Your Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mb-6"></div>
            <p className="font-serif text-lg md:text-xl text-slate-600 leading-relaxed italic">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Image and Tabs */}
          <div className="w-full lg:w-5/12 bg-navy-950 text-white relative min-h-[400px] flex flex-col">
            <div className="absolute inset-0">
              <img 
                src={currentOption.image} 
                alt={currentOption.id} 
                className="w-full h-full object-cover opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 flex flex-col h-full justify-end">
              <h3 className="font-display text-3xl mb-3">{currentOption.label}</h3>
              <p className="font-serif text-slate-300 mb-8">{currentOption.summary}</p>
              
              <div className="space-y-3">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveTab(option.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-lg border transition-all duration-300 ${
                      activeTab === option.id 
                        ? 'bg-ts-gold/10 border-ts-gold text-white' 
                        : 'border-white/20 text-slate-300 hover:border-white/50 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeTab === option.id ? 'text-ts-gold' : 'text-slate-400'}>
                        {option.icon}
                      </span>
                      <span className="font-sans font-medium tracking-wide uppercase text-sm">
                        {option.id}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline details */}
          <div className="w-full lg:w-7/12 p-8 md:p-12">
            <h4 className="font-sans text-sm font-bold tracking-[0.15em] uppercase text-navy-900 mb-8 pb-4 border-b border-border-light">
              How the Itinerary Unfolds
            </h4>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-ice-200"></div>
              
              <div className="space-y-8 relative">
                {currentOption.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {/* Dot */}
                    <div className="w-8 h-8 rounded-full bg-ice-100 border border-ice-300 flex items-center justify-center shrink-0 z-10 text-navy-600 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-sans text-xs font-bold tracking-widest text-ts-gold uppercase block mb-1">
                        {item.day}
                      </span>
                      <p className="font-serif text-slate-700 text-lg leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PaceOfTravelVisualizer;
