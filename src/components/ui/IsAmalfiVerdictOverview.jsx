import React from 'react';
import { CheckCircle, Clock, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

const IsAmalfiVerdictOverview = ({ verdictData }) => {
  if (!verdictData || !verdictData.points) return null;

  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 inline-block mb-4">
            Executive Travel Decision
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold mb-4">
            {verdictData.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Amalfi is not just a pretty postcard — it is the historical anchor and logistical capital of the entire coastline. Here is the direct verdict based on travel goals.
          </p>
        </div>

        {/* 4 Verdict Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verdictData.points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Question #{idx + 1}
                </span>
                <h3 className="text-base font-serif font-bold text-slate-900 mb-3">
                  {pt.question}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-bold mb-4">
                  {pt.verdict}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pt.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center space-x-1.5 text-xs text-amber-800 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Advisor Verified Verdict</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsAmalfiVerdictOverview;
