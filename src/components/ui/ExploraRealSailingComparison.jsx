import React from 'react';
import FadeIn from './FadeIn';

const voyages = [
  {
    brand: 'Silversea',
    heading: 'Silversea: Silver Nova — November 7–14, 2027',
    fields: [
      ['Voyage', 'Italy, France & Spain Featuring Valencia'],
      ['Ship', 'Silver Nova'],
      ['Departure', 'November 7, 2027'],
      ['Arrival', 'November 14, 2027'],
      ['Duration', '7 nights'],
      ['Embarkation', 'Civitavecchia (Rome), Italy'],
      ['Disembarkation', 'Barcelona, Spain']
    ],
    itinerary: ['Civitavecchia (Rome)', 'Livorno (Tuscany)', 'Genoa', 'Toulon', 'Day at Sea', 'Cartagena', 'Valencia', 'Barcelona'],
    paragraphs: [
      'This journey brings together Italian coastal destinations, southern France, and Spanish ports, including Cartagena and Valencia.',
      'It may appeal to travelers who want to explore Tuscany, northern Italy, Provence, and Spain within a week.'
    ]
  },
  {
    brand: 'Explora Journeys',
    heading: 'Explora Journeys: EXPLORA I — September 27–October 4, 2027',
    fields: [
      ['Voyage', 'A Journey through Italian Treasures & French Riviera Elegance'],
      ['Ship', 'EXPLORA I'],
      ['Departure', 'September 27, 2027'],
      ['Arrival', 'October 4, 2027'],
      ['Duration', '7 nights'],
      ['Embarkation', 'Civitavecchia (Rome), Italy'],
      ['Disembarkation', 'Barcelona, Spain']
    ],
    itinerary: ['Civitavecchia (Rome)', 'Naples', 'Lipari (Aeolian Islands)', 'Ajaccio (Corsica)', 'Monte Carlo', 'Marseille', 'Barcelona'],
    paragraphs: [
      'This journey highlights southern Italy, island destinations, Monaco, and the French Mediterranean coast.',
      'It may appeal to travelers interested in coastal scenery, the French Riviera, and contemporary luxury ocean travel.'
    ]
  }
];

const learnTable = [
  { factor: 'Duration', silverNova: '7 nights', explora: '7 nights' },
  { factor: 'Departure', silverNova: 'November 7, 2027', explora: 'September 27, 2027' },
  { factor: 'Route', silverNova: 'Rome to Barcelona', explora: 'Rome to Barcelona' },
  { factor: 'Itinerary highlights', silverNova: 'Tuscany, Genoa, Provence, Cartagena, Valencia', explora: 'Naples, Aeolian Islands, Corsica, Monaco, Marseille' },
  { factor: 'Sea days', silverNova: '1 published sea day', explora: 'Review the final daily schedule' },
  { factor: 'Dining approach', silverNova: 'Destination-inspired dining and ship-specific specialty venues', explora: 'Contemporary dining across multiple venues' },
  { factor: 'Atmosphere', silverNova: 'Refined, personalized luxury', explora: 'Contemporary, residential-style ocean luxury' },
  { factor: 'Inclusions', silverNova: 'Core onboard benefits, with fare-dependent extras', explora: 'Broad onboard benefits, with specialty and category-dependent extras' }
];

const ExploraRealSailingComparison = () => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Published Voyage Example
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              A Real Sailing Comparison: Silversea vs. Explora Journeys
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Two published seven-night Mediterranean voyages illustrate how the cruise experience can differ even when the departure and arrival ports are the same.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed mt-3">
              Both sail from Civitavecchia (Rome) to Barcelona in 2027, but they visit different destinations and depart at different times of year.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {voyages.map((v, idx) => (
            <FadeIn key={idx} delay={0.1 * (idx + 1)}>
              <div className="bg-navy-950 rounded-3xl p-8 text-white h-full flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold mb-3 block">{v.brand}</span>
                <h3 className="font-display text-xl text-white mb-6 leading-snug">{v.heading}</h3>

                <dl className="space-y-2 mb-6">
                  {v.fields.map(([label, value], i) => (
                    <div key={i} className="flex justify-between gap-4 text-sm border-b border-white/10 pb-2">
                      <dt className="text-slate-400 font-sans">{label}</dt>
                      <dd className="text-slate-100 font-sans text-right">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mb-6">
                  <h4 className="font-display text-sm text-gold-400 uppercase tracking-wider mb-3">Published itinerary:</h4>
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed">
                    {v.itinerary.join(' → ')}.
                  </p>
                </div>

                <div className="space-y-3 mt-auto">
                  {v.paragraphs.map((p, i) => (
                    <p key={i} className="font-sans text-slate-300 text-sm font-light leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-4 leading-tight">
              What Can You Learn from These Two Sailings?
            </h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg mb-10">
            <div className="grid grid-cols-3 bg-navy-950 text-white">
              <div className="px-6 py-4 text-xs uppercase tracking-widest font-bold border-r border-slate-700">Factor</div>
              <div className="px-6 py-4 text-xs uppercase tracking-widest font-bold border-r border-slate-700 text-gold-400">Silver Nova</div>
              <div className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gold-400">EXPLORA I</div>
            </div>
            {learnTable.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-gold-50 transition-colors duration-200`}>
                <div className="px-6 py-4 text-sm font-display font-medium text-navy-950 border-r border-slate-100">{row.factor}</div>
                <div className="px-6 py-4 text-sm font-sans text-slate-600 font-light border-r border-slate-100">{row.silverNova}</div>
                <div className="px-6 py-4 text-sm font-sans text-slate-600 font-light">{row.explora}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="font-sans text-slate-700 font-medium leading-relaxed">
              Which journey fits you?
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Silver Nova's itinerary may appeal to travelers interested in Tuscany, Provence, and Spanish coastal cities.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              EXPLORA I's itinerary may appeal to travelers drawn to southern Italy, Corsica, Monaco, and the French Riviera.
            </p>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Both offer opportunities to explore the Mediterranean, but their destinations and onboard experiences create different possibilities.
            </p>
            <p className="font-sans text-slate-500 text-sm font-light leading-relaxed italic">
              These are published itinerary examples, not confirmation of current pricing or availability. Itineraries and onboard offerings may change.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraRealSailingComparison;
