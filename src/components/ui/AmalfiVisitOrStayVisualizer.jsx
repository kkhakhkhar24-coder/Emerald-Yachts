import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Columns2,
  Clock,
  Users,
  Wine,
  Luggage,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff

// Fixed comparison dimensions (icon + the reality for each mode)
const DIMENSIONS = [
  {
    icon: Clock,
    label: 'Window on the Ground',
    day: 'Roughly five hours, timed to the ferry or the return drive.',
    overnight: 'A full 24 hours — the town is yours before and after the crowds.',
  },
  {
    icon: Users,
    label: 'Crowd & Serenity Ratio',
    day: 'You arrive at the midday peak and leave while it is busiest.',
    overnight: 'Silent mornings and calm evenings once the day-trippers depart.',
  },
  {
    icon: Wine,
    label: 'Evening Atmosphere Access',
    day: 'Gone before golden hour and the unhurried seaside dinners.',
    overnight: 'Aperitivo at sunset and a leisurely dinner, no clock-watching.',
  },
  {
    icon: Luggage,
    label: 'Luggage & Hotel Friction',
    day: 'No hotel change — your single luxury base stays put.',
    overnight: 'One extra move to pack and unpack for along the way.',
  },
];

// "What You Gain vs What You Concede"
const TRADE_OFFS = [
  {
    title: 'Dawn & Late Evening',
    day: 'You miss the calm bookends of the day entirely.',
    overnight: 'You own an empty piazza at 8am and again at 9pm.',
  },
  {
    title: 'Dinner & Wine Selection',
    day: 'A rushed lunch, then departure before dinner service.',
    overnight: 'Long, unhurried seaside dinners with the full wine list.',
  },
  {
    title: 'Ferry & Highway Stress',
    day: 'Your whole day bends around schedules and traffic.',
    overnight: 'No timetable to chase — walk home when you please.',
  },
  {
    title: 'Hotel-Hopping Friction',
    day: 'Keep one polished base and simply visit for the day.',
    overnight: 'An additional base means another check-in and unpack.',
  },
];

// Travel-DNA quiz — each answer leans "day" or "overnight"
const QUIZ = [
  {
    prompt: 'What role does your hotel play?',
    options: [
      { text: 'My resort in Positano or Ravello is the main event.', lean: 'day' },
      { text: 'I want the historic town itself around me.', lean: 'overnight' },
    ],
  },
  {
    prompt: 'How do you feel about changing bases?',
    options: [
      { text: 'I prefer to unpack once and day-trip from there.', lean: 'day' },
      { text: "I'm happy to split my stay across two towns.", lean: 'overnight' },
    ],
  },
  {
    prompt: 'Your ideal Amalfi evening is…',
    options: [
      { text: 'Sunset from my resort balcony or infinity pool.', lean: 'day' },
      { text: "Strolling Amalfi's quiet streets well after 7pm.", lean: 'overnight' },
    ],
  },
];

const TABS = [
  { id: 'both', label: 'Side-by-Side Reality', icon: Columns2 },
  { id: 'dayTrip', label: 'Day Tripper Only', icon: Sun },
  { id: 'overnight', label: 'Overnight Resident Only', icon: Moon },
];

const Timeline = ({ items = [], tone }) => {
  const dark = tone === 'overnight';
  return (
    <ol className="relative">
      <span
        className={`absolute left-[11px] top-1 bottom-1 w-px ${dark ? 'bg-white/20' : 'bg-[#c3e0e5]'}`}
        aria-hidden="true"
      />
      {items.map((item, i) => (
        <li key={i} className="relative flex gap-4 pb-5 last:pb-0">
          <span
            className={`relative z-10 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ${
              dark ? 'bg-[#5290c9] ring-[#222d4b]' : 'bg-[#274472] ring-white'
            }`}
          >
            <Clock className="w-3 h-3 text-white" />
          </span>
          <div>
            <span
              className={`block text-xs font-bold tracking-wider ${
                dark ? 'text-[#c3e0e5]' : 'text-[#5290c9]'
              }`}
            >
              {item.time}
            </span>
            <span className={`text-sm leading-relaxed ${dark ? 'text-white/85' : 'text-[#222d4b]'}`}>
              {item.event}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
};

const ModeColumn = ({ mode, data }) => {
  const dark = mode === 'overnight';
  const meta = dark
    ? { eyebrow: 'Stay the Night', title: 'The Overnight Resident', icon: Moon, tag: 'Immersive Lifestyle Investment' }
    : { eyebrow: 'Visit for the Day', title: 'The Day Tripper', icon: Sun, tag: 'Highlight-Centric Excursion' };
  const Icon = meta.icon;

  return (
    <article
      className={`h-full flex flex-col rounded-sm shadow-lg overflow-hidden border ${
        dark ? 'bg-[#222d4b] border-[#274472] text-white' : 'bg-white border-[#c3e0e5]'
      }`}
    >
      <header className={`p-7 ${dark ? 'bg-[#274472]' : 'bg-[#c3e0e5]/40'}`}>
        <div className="flex items-center gap-3">
          <span
            className={`w-11 h-11 rounded-full flex items-center justify-center ${
              dark ? 'bg-white/10 text-[#c3e0e5]' : 'bg-[#274472] text-white'
            }`}
          >
            <Icon className="w-5 h-5" />
          </span>
          <div>
            <span
              className={`block text-[11px] font-bold uppercase tracking-[0.2em] ${
                dark ? 'text-[#c3e0e5]' : 'text-[#5290c9]'
              }`}
            >
              {meta.eyebrow}
            </span>
            <h3 className={`text-2xl font-display ${dark ? 'text-white' : 'text-[#222d4b]'}`}>
              {meta.title}
            </h3>
          </div>
        </div>
        {data?.vibe && (
          <p className={`mt-4 text-sm ${dark ? 'text-white/80' : 'text-[#274472]/80'}`}>{data.vibe}</p>
        )}
      </header>

      <div className="p-7">
        {data?.timeline?.length > 0 && (
          <>
            <span
              className={`block text-[11px] font-bold uppercase tracking-wider mb-4 ${
                dark ? 'text-[#c3e0e5]' : 'text-[#5290c9]'
              }`}
            >
              A typical rhythm
            </span>
            <Timeline items={data.timeline} tone={mode} />
          </>
        )}

        <dl className={`mt-6 pt-6 border-t space-y-4 ${dark ? 'border-white/10' : 'border-[#c3e0e5]'}`}>
          {DIMENSIONS.map(({ icon: DIcon, label, day, overnight }) => (
            <div key={label} className="flex gap-3">
              <DIcon className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? 'text-[#c3e0e5]' : 'text-[#5290c9]'}`} />
              <div>
                <dt
                  className={`text-xs font-bold uppercase tracking-wider ${
                    dark ? 'text-white' : 'text-[#222d4b]'
                  }`}
                >
                  {label}
                </dt>
                <dd className={`text-sm leading-relaxed ${dark ? 'text-white/80' : 'text-[#274472]/80'}`}>
                  {dark ? overnight : day}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <footer
        className={`mt-auto px-7 py-4 text-[11px] font-bold uppercase tracking-[0.15em] ${
          dark ? 'bg-[#5290c9] text-white' : 'bg-[#274472] text-white'
        }`}
      >
        {meta.tag}
      </footer>
    </article>
  );
};

const AmalfiVisitOrStayVisualizer = ({ data }) => {
  const [tab, setTab] = useState('both');
  const [answers, setAnswers] = useState({});

  const result = useMemo(() => {
    const vals = Object.values(answers);
    if (vals.length < QUIZ.length) return null;
    const overnight = vals.filter((v) => v === 'overnight').length;
    return overnight >= Math.ceil(QUIZ.length / 2) ? 'overnight' : 'day';
  }, [answers]);

  if (!data) return null;

  const showDay = tab === 'both' || tab === 'dayTrip';
  const showOvernight = tab === 'both' || tab === 'overnight';

  return (
    <section className="py-20 md:py-28 bg-[#c3e0e5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5290c9]">
            How Your Day Actually Feels
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display text-[#222d4b] leading-tight">
            {data.title || 'The Day Tripper vs. The Overnight Resident'}
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#5290c9]" />
          <p className="mt-6 text-base sm:text-lg text-[#274472]/80 leading-relaxed">
            {data.description ||
              'See how crowd pressure, dining freedom and travel tension divide between an excursion and an overnight stay.'}
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-white border border-[#c3e0e5] rounded-full w-fit mx-auto max-w-full"
        >
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                tab === id ? 'bg-[#274472] text-white' : 'text-[#274472] hover:bg-[#c3e0e5]/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{id === 'both' ? 'Both' : id === 'dayTrip' ? 'Day' : 'Stay'}</span>
            </button>
          ))}
        </div>

        {/* Comparison columns */}
        <div className={`grid gap-6 ${tab === 'both' ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'}`}>
          <AnimatePresence mode="popLayout">
            {showDay && (
              <motion.div
                key="day"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
              >
                <ModeColumn mode="dayTrip" data={data.dayTrip} />
              </motion.div>
            )}
            {showOvernight && (
              <motion.div
                key="overnight"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
              >
                <ModeColumn mode="overnight" data={data.overnight} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* What You Gain vs What You Concede */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display text-[#222d4b]">
              What You Gain vs. What You Concede
            </h3>
            <div className="mt-4 flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-[#5290c9]">
                <Sun className="w-4 h-4" /> Day Trip
              </span>
              <span className="flex items-center gap-2 text-[#274472]">
                <Moon className="w-4 h-4" /> Overnight Stay
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRADE_OFFS.map((t) => (
              <article
                key={t.title}
                className="bg-white border border-[#c3e0e5] border-t-4 border-t-[#274472] rounded-sm p-6 shadow-sm"
              >
                <h4 className="text-base font-display text-[#222d4b] mb-4">{t.title}</h4>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Sun className="w-4 h-4 mt-0.5 shrink-0 text-[#5290c9]" />
                    <p className="text-sm leading-relaxed text-[#274472]/85">
                      <span className="font-semibold text-[#5290c9]">Day Trip: </span>
                      {t.day}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Moon className="w-4 h-4 mt-0.5 shrink-0 text-[#274472]" />
                    <p className="text-sm leading-relaxed text-[#274472]/85">
                      <span className="font-semibold text-[#274472]">Overnight: </span>
                      {t.overnight}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Travel-DNA quiz */}
        <div className="mt-20 bg-white border border-[#c3e0e5] rounded-sm shadow-md overflow-hidden">
          <div className="bg-[#274472] text-white px-6 sm:px-10 py-8 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c3e0e5]">
              <Sparkles className="w-4 h-4" /> Interactive · Which Suits You
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-display">
              Which Strategy Matches Your Travel Style?
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Answer three quick questions to see Angela's tailored recommendation.
            </p>
          </div>

          <div className="p-6 sm:p-10 grid gap-6 md:grid-cols-3">
            {QUIZ.map((q, qi) => (
              <div key={qi}>
                <p className="text-sm font-bold text-[#222d4b] mb-3">
                  <span className="text-[#5290c9]">{qi + 1}.</span> {q.prompt}
                </p>
                <div className="space-y-2.5">
                  {q.options.map((opt, oi) => {
                    const selected = answers[qi] === opt.lean;
                    return (
                      <button
                        key={oi}
                        onClick={() => setAnswers((a) => ({ ...a, [qi]: opt.lean }))}
                        className={`w-full text-left text-sm leading-snug px-4 py-3 rounded-sm border transition-colors ${
                          selected
                            ? 'bg-[#274472] text-white border-[#274472]'
                            : 'bg-white text-[#274472] border-[#c3e0e5] hover:border-[#5290c9] hover:bg-[#c3e0e5]/30'
                        }`}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 sm:px-10 pb-10">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#c3e0e5]/40 border border-[#c3e0e5] rounded-sm px-6 py-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-[#274472]" />
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#5290c9]">
                        Your match
                      </span>
                      <p className="text-lg font-display text-[#222d4b]">
                        {result === 'overnight'
                          ? 'Stay overnight in Amalfi'
                          : 'Visit Amalfi for the day'}
                      </p>
                      <p className="text-sm text-[#274472]/80">
                        {result === 'overnight'
                          ? 'You value the quiet bookends of the day — make the town your base.'
                          : 'Your luxury base elsewhere is the priority — keep Amalfi as a highlight.'}
                      </p>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="shrink-0 px-6 py-3 bg-[#274472] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#222d4b] transition-colors"
                  >
                    Plan It With Angela
                  </a>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm text-[#274472]/60"
                >
                  Answer all three questions to reveal your tailored recommendation.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmalfiVisitOrStayVisualizer;
