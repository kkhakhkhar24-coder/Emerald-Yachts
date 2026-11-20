import React from 'react';
import FadeIn from './FadeIn';
import { Anchor, Crown, ArrowRight } from 'lucide-react';

const HeadToHeadVisualShowdown = ({ data, image1, image2 }) => {
  if (!data) return null;

  const brand1 = data.brand1 || data.option1;
  const brand2 = data.brand2 || data.option2;

  if (!brand1 || !brand2) return null;

  const b1Name = brand1?.name || "Option 1";
  const b1Style = brand1?.style || brand1?.tag || brand1?.score || "";
  const b1Cabin = brand1?.cabin || (Array.isArray(brand1?.pros) ? brand1.pros[0] : "");
  const b1Excursions = brand1?.excursions || (Array.isArray(brand1?.pros) ? brand1.pros[1] : "");
  const b1Vibe = brand1?.vibe || brand1?.description || "";

  const b2Name = brand2?.name || "Option 2";
  const b2Style = brand2?.style || brand2?.tag || brand2?.score || "";
  const b2Cabin = brand2?.cabin || (Array.isArray(brand2?.pros) ? brand2.pros[0] : "");
  const b2Excursions = brand2?.excursions || (Array.isArray(brand2?.pros) ? brand2.pros[1] : "");
  const b2Vibe = brand2?.vibe || brand2?.description || "";

  const verdictText = typeof data.verdict === 'object'
    ? (data.verdict?.description || data.verdict?.title || '')
    : (data.verdict || '');

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ice-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-navy-500 font-bold mb-4">Expert Comparison</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-4">{data.title}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        {/* Cards with VS */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-0 items-stretch mb-12">
          {/* Brand 1 Card */}
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              {/* Image Header */}
              {image1 && (
                <div className="relative h-56 overflow-hidden">
                  <img src={image1} alt={b1Name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
                      <Anchor className="w-6 h-6 text-navy-950" />
                    </div>
                    <h3 className="font-display text-2xl text-white">{b1Name}</h3>
                  </div>
                </div>
              )}
              {/* Details */}
              <div className="bg-white p-8">
                {!image1 && <h3 className="font-display text-2xl text-navy-900 text-center mb-6">{b1Name}</h3>}
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-ice-100 pb-4">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.style || "Style"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-ice-50 px-4 py-1.5 rounded-full text-sm">{b1Style}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-ice-100 pb-4">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.cabin || "Cabin"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-ice-50 px-4 py-1.5 rounded-full text-sm">{b1Cabin}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-ice-100 pb-4">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.excursions || "Excursions"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-ice-50 px-4 py-1.5 rounded-full text-sm">{b1Excursions}</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.vibe || "Vibe"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-gold-50 px-4 py-1.5 rounded-full text-sm border border-gold-200">{b1Vibe}</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* VS Badge */}
          <FadeIn className="lg:col-span-1 flex justify-center items-center py-4 lg:py-0" delay={0.2}>
            <div className="w-20 h-20 rounded-full bg-navy-950 flex items-center justify-center shadow-2xl border-4 border-white z-20 relative">
              <span className="font-display italic font-bold text-2xl text-gold-400">VS</span>
            </div>
          </FadeIn>

          {/* Brand 2 Card */}
          <FadeIn className="lg:col-span-5" delay={0.3}>
            <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
              {/* Image Header */}
              {image2 && (
                <div className="relative h-56 overflow-hidden">
                  <img src={image2} alt={b2Name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center shadow-lg">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display text-2xl text-white">{b2Name}</h3>
                  </div>
                </div>
              )}
              {/* Details */}
              <div className="bg-white p-8">
                {!image2 && <h3 className="font-display text-2xl text-navy-900 text-center mb-6">{b2Name}</h3>}
                <ul className="space-y-5">
                  <li className="flex justify-between items-center border-b border-ice-100 pb-4">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.style || "Style"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-ice-50 px-4 py-1.5 rounded-full text-sm">{b2Style}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-ice-100 pb-4">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.cabin || "Cabin"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-ice-50 px-4 py-1.5 rounded-full text-sm">{b2Cabin}</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-ice-100 pb-4">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.excursions || "Excursions"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-ice-50 px-4 py-1.5 rounded-full text-sm">{b2Excursions}</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span className="font-sans text-sm text-navy-500 uppercase tracking-wider font-semibold">{data.labels?.vibe || "Vibe"}</span>
                    <span className="font-sans text-navy-900 font-medium bg-slate-100 px-4 py-1.5 rounded-full text-sm">{b2Vibe}</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Verdict */}
        {verdictText && (
          <FadeIn delay={0.4}>
            <div className="bg-navy-950 text-white rounded-2xl p-10 max-w-5xl mx-auto text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-ice-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
              
              <h4 className="font-sans text-gold-400 uppercase tracking-widest text-sm font-bold mb-6 flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4" />
                The Verdict
                <ArrowRight className="w-4 h-4 rotate-180" />
              </h4>
              <p className="font-display text-xl md:text-2xl leading-relaxed text-ice-50 relative z-10">
                "{verdictText}"
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default HeadToHeadVisualShowdown;
