import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Anchor, Briefcase, CalendarDays, Luggage, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const RULE_ICONS = [Clock, Anchor, Briefcase, CalendarDays, Luggage, Sparkles];
const TAGLINES = ['Cliffside glamour', 'Maritime heritage', 'Clifftop gardens', 'Island prestige'];

const FourDestinationFormulaSection = ({ title, paragraphs, items = [], images = [] }) => {
  const destinations = items.slice(0, 4);
  const rules = items.slice(4);

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
              The Route at a Glance
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
              {title}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
            {paragraphs?.map((p, i) => (
              <p key={i} className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </FadeIn>

        {/* Four destinations as photo tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.08}>
              <article className="group relative h-[26rem] overflow-hidden rounded-sm shadow-lg bg-[#222d4b]">
                {images[i] && (
                  <img
                    src={images[i]}
                    alt={`${d.title.charAt(0)}${d.title.slice(1).toLowerCase()} on the Amalfi Coast`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222d4b] via-[#222d4b]/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c3e0e5]">
                    {String(i + 1).padStart(2, '0')} · {TAGLINES[i]}
                  </span>
                  <h3 className="mt-2 text-2xl font-display">
                    {d.title.charAt(0)}
                    {d.title.slice(1).toLowerCase()}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{d.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Six planning rules */}
        {rules.length > 0 && (
          <FadeIn>
            <div className="mt-14 bg-white rounded-sm shadow-md border border-[#c3e0e5]">
              <div className="px-6 sm:px-10 pt-8 pb-2">
                <h3 className="text-xl sm:text-2xl font-display text-[#274472]">
                  Six rules that make the formula work
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {rules.map((r, i) => {
                  const Icon = RULE_ICONS[i % RULE_ICONS.length];
                  return (
                    <div
                      key={r.title}
                      className="flex gap-4 p-6 sm:p-8 border-t border-[#c3e0e5] lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:border-[#c3e0e5] lg:[&:nth-child(-n+3)]:border-t-0 mt-0"
                    >
                      <div className="shrink-0 w-11 h-11 rounded-full bg-[#274472] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#222d4b]">
                          {r.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#274472]/75">
                          {r.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#274472] px-6 sm:px-10 py-5">
                <p className="text-sm sm:text-base text-white/90">
                  Want this route built around your dates? Angela plans it door to door.
                </p>
                <Link
                  to="/contact"
                  className="shrink-0 px-6 py-3 bg-white text-[#274472] text-xs font-bold uppercase tracking-wider hover:bg-[#c3e0e5] transition-colors"
                >
                  Consult With Angela
                </Link>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default FourDestinationFormulaSection;
