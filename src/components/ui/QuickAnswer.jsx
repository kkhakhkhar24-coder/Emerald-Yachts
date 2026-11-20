import React from 'react';

// Answer-first summary placed directly under the hero. Rendered without animation so the
// question, answer and key facts are plain, immediately visible HTML for search engines and
// AI assistants to quote.
//
// data: {
//   question: string,          // the page's main question, phrased the way people ask it
//   answer: string,            // 40–60 word direct answer, leading with the verdict or number
//   facts?: [{ label, value }],// short key facts shown as a definition list
//   asOf?: string,             // e.g. "October 2026", only when the figures are dated
//   source?: string            // optional attribution line
//   updated?: { iso, label }   // optional, only when the page was actually revised then
// }
const QuickAnswer = ({ data }) => {
  if (!data?.question || !data?.answer) return null;

  return (
    <section aria-labelledby="quick-answer-heading" className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-gold-400 bg-ice-50 p-6 md:p-10">
          <p className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-500 mb-3">
            Quick answer
          </p>
          <h2
            id="quick-answer-heading"
            className="font-display text-2xl md:text-3xl text-navy-950 leading-tight mb-4"
          >
            {data.question}
          </h2>
          <p className="font-sans text-lg text-navy-800 leading-relaxed">{data.answer}</p>

          {data.facts?.length > 0 && (
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-200 pt-6">
              {data.facts.map((fact, idx) => (
                <div key={idx} className="flex flex-col">
                  <dt className="font-sans text-xs font-bold uppercase tracking-wider text-slate-500">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-base text-navy-900 mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {(data.asOf || data.source) && (
            <p className="font-sans text-xs text-slate-500 mt-6">
              {data.source}
              {data.source && data.asOf ? ' · ' : ''}
              {data.asOf ? `Figures as of ${data.asOf}` : ''}
            </p>
          )}

          {data.updated && (
            <p className="font-sans text-xs text-slate-500 mt-2">
              Updated <time dateTime={data.updated.iso}>{data.updated.label}</time>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuickAnswer;
