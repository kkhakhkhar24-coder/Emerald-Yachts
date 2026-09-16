import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Users, 
  Compass, 
  Tv, 
  Baby,
  ShieldCheck,
  MapPin,
  Heart
} from 'lucide-react';
import FadeIn from './FadeIn';

const questions = [
  {
    id: 1,
    title: "Question 1: How old are your children?",
    key: "ageGroup",
    options: ["Under 4", "4–12", "13–17", "Multigenerational"],
  },
  {
    id: 2,
    title: "Question 2: What matters most to your family?",
    key: "priority",
    options: ["Luxury", "Kids activities", "Adventure", "Dining", "Culture", "Relaxation"],
  },
  {
    id: 3,
    title: "Question 3: How important is onboard entertainment?",
    key: "entertainment",
    options: ["Very important", "Somewhat important", "Not important"],
  },
  {
    id: 4,
    title: "Question 4: Do you need onboard babysitting?",
    key: "babysitting",
    options: ["Yes", "No"],
  },
];

const RitzFamilySelector = () => {
  const [answers, setAnswers] = useState({
    ageGroup: "4–12",
    priority: "Luxury",
    entertainment: "Not important",
    babysitting: "No",
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (activeStep < questions.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const getRitzKidsSuitability = () => {
    if (answers.ageGroup === "4–12") {
      return "Excellent Fit: Your children fall directly into the Ritz Kids® target age range (4–12 years), with access to marine conservation, arts, and discovery sessions.";
    } else if (answers.ageGroup === "Under 4") {
      return "Parent Supervision Required: Ritz Kids is designed for ages 4–12. Children under 4 will spend days exploring directly with parents or guardians.";
    } else if (answers.ageGroup === "13–17") {
      return "Destination & Marina Focus: There is no dedicated teen club; teenagers who enjoy kayaking, paddleboarding, snorkeling, and port culture will thrive.";
    }
    return "Multigenerational Balance: Perfect structure where school-age children enjoy Ritz Kids while grandparents relax in the spa and parents join excursions.";
  };

  const getChildcareAdvice = () => {
    if (answers.babysitting === "Yes") {
      return "Important Notice: The Ritz-Carlton Yacht Collection does NOT provide private babysitting or infant nursery care. Parents must supervise minors outside scheduled Ritz Kids sessions.";
    }
    return "Aligned: No babysitting required. Your family plans around shared dining, pool lounging, and destination excursions together.";
  };

  const getSuiteConsideration = () => {
    if (answers.ageGroup === "Under 4") {
      return "Request cribs/air mattresses well in advance. Note that roll-away beds are not permitted onboard, and suite sleeping configurations vary.";
    }
    return "Book suites with convertible sleep sofas or connect adjacent suites for privacy across parents, teens, and grandparents.";
  };

  const getEntertainmentFit = () => {
    if (answers.entertainment === "Very important") {
      return "Expectation Alignment: Ritz-Carlton offers intimate yacht luxury, live acoustic music, and destination immersion—not mega-ship waterslides, casinos, or arcades.";
    }
    return "Perfect Match: Your family values sophisticated luxury, yachting, exceptional culinary dining, and seeing the world together.";
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Family Matchmaker</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Is a Ritz-Carlton Yacht Right for Your Family?
            </h2>
            <p className="font-sans text-lg text-slate-300 leading-relaxed font-light">
              Answer 4 quick questions to evaluate your family's fit for the Ritz-Carlton Yacht Collection based on child age, childcare needs, and vacation expectations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Interactive Questions */}
          <div className="lg:col-span-6 space-y-6">
            {questions.map((q, qIndex) => {
              const isActive = activeStep === qIndex;
              return (
                <FadeIn key={q.id} delay={qIndex * 0.1}>
                  <div
                    className={`rounded-2xl p-6 border transition-all duration-300 ${
                      isActive
                        ? 'bg-navy-900/80 border-gold-400/60 shadow-xl shadow-gold-400/5'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg text-white font-medium flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-gold-400/20 text-gold-400 text-xs font-bold flex items-center justify-center">
                          {q.id}
                        </span>
                        {q.title}
                      </h3>
                      <span className="text-xs font-mono text-gold-400 font-semibold">
                        {answers[q.key]}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {q.options.map((opt) => {
                        const isSelected = answers[q.key] === opt;
                        return (
                          <button
                            key={opt}
                            onClick={() => handleSelect(q.key, opt)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-sans transition-all duration-200 ${
                              isSelected
                                ? 'bg-gold-500 text-navy-950 font-bold shadow-md shadow-gold-500/20 scale-[1.02]'
                                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Right Column: Dynamic Generated Output */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.2}>
              <div className="bg-navy-900/90 border border-gold-400/40 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-md relative">
                
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                      ASSESSMENT SUMMARY
                    </span>
                    <h3 className="font-display text-2xl text-white">
                      Family Fit: Review These Factors
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                    <ShieldCheck size={22} />
                  </div>
                </div>

                <div className="space-y-6">
                  
                  {/* Ritz Kids Suitability */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                        Ritz Kids® Suitability
                      </h4>
                      <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                        {getRitzKidsSuitability()}
                      </p>
                    </div>
                  </div>

                  {/* Childcare & Babysitting Availability */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                      <Baby size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                        Childcare & Supervision
                      </h4>
                      <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                        {getChildcareAdvice()}
                      </p>
                    </div>
                  </div>

                  {/* Suite Configuration */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                      <Heart size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                        Suite Sleeping Configuration
                      </h4>
                      <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                        {getSuiteConsideration()}
                      </p>
                    </div>
                  </div>

                  {/* Entertainment Expectation */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 mt-1">
                      <Compass size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                        Atmosphere & Entertainment Fit
                      </h4>
                      <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                        {getEntertainmentFit()}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Direct CTA */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-sans font-bold px-8 py-4 rounded-xl shadow-lg hover:from-gold-400 hover:to-gold-300 transition-all duration-300"
                  >
                    <span>Plan My Family Yacht Cruise</span>
                    <ArrowRight size={18} />
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RitzFamilySelector;
