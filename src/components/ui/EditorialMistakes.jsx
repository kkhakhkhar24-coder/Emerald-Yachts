import React from 'react';

// Brand palette: #274472 navy, #c3e0e5 light blue, #5290c9 medium blue, #222d4b dark navy, #fff
const EditorialMistakes = ({ mistakes, subtitle }) => {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <section className="py-24 bg-[#222d4b] relative border-t-4 border-[#5290c9]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Typography heavy header */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <span className="text-[#c3e0e5] font-sans font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Expert Warning</span>
              <h2 className="text-5xl lg:text-6xl font-display text-white mb-8 leading-tight">
                Don't Make <br/><span className="text-[#5290c9] italic">These</span> Mistakes.
              </h2>
              <p className="text-white/80 font-sans text-lg border-l-2 border-[#5290c9] pl-6 py-2">
                {subtitle || "Our luxury advisors reveal the most common pitfalls travelers face."}
              </p>
            </div>
          </div>

          {/* Right Column: Mistake List */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {mistakes.map((mistake, idx) => {
                const isOddAndLast = mistakes.length % 2 !== 0 && idx === mistakes.length - 1;
                return (
                  <div 
                    key={idx} 
                    className={`bg-[#274472] p-8 rounded-2xl border border-white/10 hover:border-[#5290c9]/60 hover:shadow-lg hover:shadow-[#5290c9]/10 transition-all duration-300 relative overflow-hidden flex flex-col h-full ${
                      isOddAndLast ? 'md:col-span-2 max-w-2xl mx-auto w-full' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#5290c9] text-white flex items-center justify-center mb-6 shadow-md shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display text-white mb-4 leading-tight">{mistake.title}</h3>
                      <p className="text-[#c3e0e5]/90 font-sans leading-relaxed text-base">
                        {mistake.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialMistakes;
