import React from 'react';
import FadeIn from './FadeIn';

const ExploraBookingChecklist = () => {
  const questions = [
    'Which dining venues are included?',
    'Are specialty culinary experiences extra?',
    'Which beverages are covered?',
    'Are shore excursions included in the selected fare?',
    'What transfers are provided?',
    'Which suite-category benefits apply?',
    'What are the payment and cancellation terms?'
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block text-center">
            Before You Book
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight text-center">
            What Should You Compare Before Booking?
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-center mb-8">
            When evaluating a specific Silversea or Explora Journeys voyage, consider:
          </p>

          <ul className="space-y-3 mb-8">
            {questions.map((q, i) => (
              <li key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-sans text-slate-600 text-sm font-light">{q}</span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-slate-600 font-light leading-relaxed text-center">
            A personalized comparison should review the exact voyage and fare conditions rather than relying only on a cruise line's general description of luxury.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraBookingChecklist;
