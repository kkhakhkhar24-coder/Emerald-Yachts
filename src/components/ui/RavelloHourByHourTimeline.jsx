import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { 
  Clock, 
  Sparkles, 
  MapPin, 
  Camera, 
  Sun, 
  Sunrise, 
  Sunset, 
  Moon,
  Compass
} from 'lucide-react';

/**
 * RavelloHourByHourTimeline
 * 
 * An opulent, image-first timeline designed for luxury hour-by-hour day progressions.
 * Supports image photography for every single stop.
 * When `image` is provided in an event, renders a full-bleed luxury image frame with hover zoom.
 * When `image` is not yet assigned, displays a refined luxury editorial placeholder card
 * with golden accents and camera badges, avoiding broken placeholder text.
 */
const RavelloHourByHourTimeline = ({ data = {} }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const events = data?.events || [];

  if (!data || events.length === 0) return null;

  // Filter categories
  const filterOptions = [
    { id: 'all', label: `All Day (${events.length} Stops)` },
    { id: 'morning', label: 'Morning' },
    { id: 'afternoon', label: 'Afternoon' },
    { id: 'evening', label: 'Evening' },
  ];

  const filteredEvents = events.filter((evt) => {
    if (activeFilter === 'all') return true;
    const timeLower = (evt.time || '').toLowerCase();
    if (activeFilter === 'morning') return timeLower.includes('morning');
    if (activeFilter === 'afternoon') return timeLower.includes('afternoon') || timeLower.includes('midday');
    if (activeFilter === 'evening') return timeLower.includes('evening');
    return true;
  });

  const getPeriodIcon = (timeText = '') => {
    const lower = timeText.toLowerCase();
    if (lower.includes('morning')) return <Sunrise className="w-4 h-4 text-amber-300" />;
    if (lower.includes('midday') || lower.includes('afternoon')) return <Sun className="w-4 h-4 text-amber-400" />;
    if (lower.includes('evening')) return <Sunset className="w-4 h-4 text-rose-300" />;
    return <Moon className="w-4 h-4 text-indigo-300" />;
  };

  return (
    <section className="py-24 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Ambience / Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-ts-gold/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-sky-950/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          {data?.badge && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ts-gold font-semibold px-4 py-1.5 rounded-full bg-ts-gold/10 border border-ts-gold/30 mb-6">
              <Clock className="w-3.5 h-3.5 text-ts-gold" />
              <span>{data.badge}</span>
            </div>
          )}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {data?.title}
          </h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
          {data?.subtitle && (
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              {data.subtitle}
            </p>
          )}

          {/* Period Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-ts-gold text-navy-950 shadow-lg shadow-ts-gold/20 font-bold scale-105'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Events Stack */}
        <div className="space-y-12 lg:space-y-16 relative">
          {/* Subtle vertical connector line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-ts-gold/30 to-transparent -translate-x-1/2 pointer-events-none" />

          {filteredEvents.map((event, idx) => {
            const isEven = idx % 2 === 0;
            // Parse time from title if available (e.g. "8:30 AM — Private Arrival")
            const parts = event.title.split('—');
            const timeSlot = parts.length > 1 ? parts[0].trim() : event.time;
            const eventHeading = parts.length > 1 ? parts.slice(1).join('—').trim() : event.title;

            return (
              <FadeIn key={idx} delay={0.05 * (idx % 4)}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Media Column (Image Frame / Future Image Container) */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[16/10] bg-navy-900">
                      {event.image ? (
                        /* Loaded Photograph */
                        <div className="w-full h-full relative overflow-hidden">
                          <img
                            src={event.image}
                            alt={eventHeading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                          <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs font-mono text-ts-gold flex items-center gap-1.5">
                            {getPeriodIcon(event.time)}
                            <span>{timeSlot}</span>
                          </div>
                        </div>
                      ) : (
                        /* Luxury Image Placement Frame (Ready for Future Photos) */
                        <div className="w-full h-full p-8 flex flex-col justify-between relative bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900">
                          {/* Ambient background architectural contour */}
                          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-ts-gold/5 blur-2xl pointer-events-none" />
                          
                          {/* Top Tag */}
                          <div className="flex items-center justify-between z-10">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[11px] font-mono tracking-wider text-ts-gold">
                              {getPeriodIcon(event.time)}
                              <span className="uppercase">{event.time}</span>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                              STOP {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>

                          {/* Center Visual Mockup Accent */}
                          <div className="flex flex-col items-center justify-center text-center my-auto py-4 z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-ts-gold/30 flex items-center justify-center text-ts-gold mb-3 shadow-inner group-hover:scale-110 group-hover:border-ts-gold transition-all duration-300">
                              <Camera className="w-6 h-6 text-ts-gold" />
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ts-gold">
                              Scenic Highlight
                            </span>
                            <span className="text-sm font-display text-slate-200 mt-1">
                              {eventHeading}
                            </span>
                          </div>

                          {/* Bottom Coordinates & Time */}
                          <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[11px] text-slate-400 font-light z-10">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-ts-gold/70" />
                              Ravello, Amalfi Coast
                            </span>
                            <span className="font-mono text-ts-gold/90">{timeSlot}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    {/* Time & Phase Badge */}
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-ts-gold/15 text-ts-gold border border-ts-gold/30 shadow-sm flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {timeSlot}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                        {event.time} Phase
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display text-2xl sm:text-3xl text-white font-normal leading-snug">
                      {eventHeading}
                    </h3>

                    <div className="w-12 h-0.5 bg-ts-gold/70" />

                    {/* Description */}
                    <p className="font-sans text-slate-300 text-base leading-relaxed font-light">
                      {event.description}
                    </p>

                    {/* Editorial Tip / Highlight Box */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5">
                      <Sparkles className="w-4 h-4 text-ts-gold shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-300 leading-relaxed font-light">
                        <span className="font-semibold text-ts-gold uppercase tracking-wider block mb-0.5">
                          Hughes Luxury Travel Recommendation
                        </span>
                        Allow buffer time to soak in the atmosphere rather than rushing between sites.
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Closing Itinerary Note */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 text-center max-w-3xl mx-auto">
          <Compass className="w-8 h-8 text-ts-gold mx-auto mb-3" />
          <h4 className="font-display text-xl text-white mb-2">
            Customizing Your Day in Ravello
          </h4>
          <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
            Every itinerary can be custom-paced with private chauffeur drop-offs at Piazza Vescovado, reserved cliffside tables, and private garden guides.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RavelloHourByHourTimeline;
