import React, { useState } from "react";
import { Snowflake, Anchor, Ship, AlertCircle, CheckCircle2, Globe, Key, LayoutGrid, ShieldCheck, Award, Clock, MapPin, Plus, Minus } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import "../ScenicVSSilversea/ScenicVSSilversea.css";

const AntarcticaPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "Which is better for Antarctica, Scenic or Silversea?",
      answer: "Both Scenic and Silversea operate at a high level, but the better choice depends on your preference for a modern all-inclusive experience versus a more traditional luxury cruise environment."
    },
    {
      question: "Is Scenic Eclipse newer than Silversea ships?",
      answer: "Scenic Eclipse is a purpose-built discovery yacht with a modern design, while Silversea operates a mix of newer expedition ships and established vessels with a traditional feel."
    },
    {
      question: "Do Scenic and Silversea offer similar Antarctica itineraries?",
      answer: "Both typically visit the Antarctic Peninsula, but exact routes vary based on conditions, timing, and expedition planning."
    },
    {
      question: "Which cruise line is more all-inclusive?",
      answer: "Scenic emphasizes a simplified all-inclusive structure, while Silversea also includes many elements but may vary by itinerary."
    },
    {
      question: "Which is more luxurious, Scenic or Silversea?",
      answer: "Both are luxury, but Scenic leans modern luxury while Silversea reflects classic luxury."
    },
    {
      question: "Which is better for first-time Antarctica travelers?",
      answer: "Scenic’s simplified structure may appeal to first-time travelers, while Silversea suits those familiar with traditional luxury cruising."
    },
    {
      question: "Which has better suites?",
      answer: "Both offer high-end suites, though Scenic is known for modern design and Silversea for refined, classic accommodations."
    },
    {
      question: "Is the expedition experience different?",
      answer: "Both offer zodiac landings and guided excursions, though delivery style differs slightly."
    },
    {
      question: "Which is better value?",
      answer: "Value depends on how inclusions align with your expectations rather than price alone."
    },
    {
      question: "Should I use a travel advisor to choose?",
      answer: "Yes. Antarctica requires careful planning, and an advisor ensures the right match."
    },
    {
      question: "Which ship is better for the Drake Passage?",
      answer: "Both use ships designed for polar conditions. Comfort depends more on conditions and ship design than brand alone."
    },
    {
      question: "How do I decide between Scenic and Silversea?",
      answer: "The decision comes down to whether you prefer a modern all-inclusive structure or a traditional luxury cruise environment."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="wrapper">

      <Navbar />

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="hero antarctica-hero">
        <div className="hero-content">
          <h1>
            Scenic vs Silversea Antarctica
          </h1>

          <p className="lead">
            Choosing the right luxury expedition experience
          </p>

          <p className="sub">
            The difference is not simply in features. It is in how you want to experience the journey.
          </p>

          <p className="extra-text">
            Choosing the right expedition cruise line for Antarctica impacts more than your itinerary.
            It shapes how you experience the destination from start to finish.
          </p>

          <p className="extra-text">
            Two of the most commonly compared options are Scenic Luxury Cruises &amp; Tours and Silversea Cruises.
            Both operate at the highest level of the market. Both provide access to Antarctica.
          </p>

          <div className="hero-buttons hero-buttons--centered">
            <button className="primary primary--no-offset">
              Get Expert Recommendation
            </button>
            <button className="secondary">
              View Scenic Antarctica Expeditions
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — QUICK COMPARISON ===== */}
      <section className="glance">

        <div className="glance-inner">

          <h2>Scenic vs Silversea at a Glance</h2>

          <div className="glance-table-wrap">
            <table className="glance-table">
              <thead>
                <tr>
                  <th className="glance-th glance-th--feature">Feature</th>
                  <th className="glance-th glance-th--scenic">Scenic</th>
                  <th className="glance-th glance-th--silversea">Silversea</th>
                </tr>
              </thead>
              <tbody>
                <tr className="glance-row">
                  <td className="glance-td glance-td--label">Overall Style</td>
                  <td className="glance-td">Modern luxury yacht</td>
                  <td className="glance-td">Classic luxury cruise</td>
                </tr>
                <tr className="glance-row glance-row--alt">
                  <td className="glance-td glance-td--label">Pricing Structure</td>
                  <td className="glance-td">Fully all-inclusive</td>
                  <td className="glance-td">High inclusion, varies</td>
                </tr>
                <tr className="glance-row">
                  <td className="glance-td glance-td--label">Ship Design</td>
                  <td className="glance-td">Contemporary, design-forward</td>
                  <td className="glance-td">Traditional, refined</td>
                </tr>
                <tr className="glance-row glance-row--alt">
                  <td className="glance-td glance-td--label">Experience Focus</td>
                  <td className="glance-td">Balance of luxury + expedition</td>
                  <td className="glance-td">Heritage + service</td>
                </tr>
                <tr className="glance-row">
                  <td className="glance-td glance-td--label">Best For</td>
                  <td className="glance-td">Simplicity and modern comfort</td>
                  <td className="glance-td">Familiar luxury experience</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </section>

      {/* ===== SECTION 3 — THE BIGGEST DIFFERENCES ===== */}
      <section className="differences">

        <div className="differences-bg"></div>

        <div className="differences-content">
          <div className="differences-card">

            <h2>The Biggest Differences Between Scenic and Silversea</h2>

            <div className="differences-list">
              <div className="differences-item">
                <svg viewBox="0 0 24 24" className="differences-icon">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p>Scenic delivers a modern, all-inclusive experience with simplified structure</p>
              </div>
              <div className="differences-item">
                <svg viewBox="0 0 24 24" className="differences-icon">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p>Silversea offers a more traditional luxury cruise environment with strong heritage</p>
              </div>
              <div className="differences-item">
                <svg viewBox="0 0 24 24" className="differences-icon">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p>Scenic emphasizes contemporary design and clarity in pricing</p>
              </div>
              <div className="differences-item">
                <svg viewBox="0 0 24 24" className="differences-icon">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p>Silversea emphasizes service tradition and brand familiarity</p>
              </div>
            </div>

            <p className="differences-emphasis">
              The difference is not in access to Antarctica. It is in how that access is experienced.
            </p>

          </div>
        </div>

      </section>

      {/* ===== SECTION 4 — SHIP EXPERIENCE ===== */}
      <section className="ship-exp">

        <div className="ship-exp-inner">

          <div className="ship-exp-image"></div>

          <div className="ship-exp-text">

            <h2>Ship Design and Onboard Experience</h2>

            <p>
              Scenic Eclipse was built as a discovery yacht designed specifically for expedition environments. The onboard experience is modern, with open spaces, multiple dining venues, and a contemporary layout.
            </p>

            <p>
              Silversea's expedition ships reflect the brand's heritage in luxury cruising, combining expedition capability with a more classic onboard environment.
            </p>

            <p className="emphasis">
              Travelers who prefer a modern, design-forward experience often choose Scenic. Those who value a traditional luxury atmosphere often prefer Silversea.
            </p>

          </div>

        </div>

      </section>

      {/* ===== SECTION 5 — EXPEDITION EXPERIENCE ===== */}
      <section className="expedition">

        <div className="expedition-inner">

          <h2>Expedition Style and Execution</h2>

          <p>
            Both Scenic and Silversea deliver full expedition programs, including zodiac landings and guided exploration.
          </p>

          <p>
            Scenic focuses on delivering expedition access within a highly structured, all-inclusive framework.
          </p>

          <p>
            Silversea brings a longer expedition heritage with a refined service approach.
          </p>

          <p className="emphasis">
            In practice, both provide strong expedition execution. The difference lies in how the experience is delivered.
          </p>

        </div>

      </section>

      {/* ===== SECTION 6 — PRICING AND VALUE ===== */}
      <section className="pricing-value">
        <div className="pricing-value-inner">
          <h2>Pricing and Value Positioning</h2>
          <div className="pricing-content">
            <p className="pricing-intro">Both Scenic and Silversea navigate the ultra-luxury segment of Antarctica travel.</p>
            
            <div className="value-grid">
              <div className="value-card">
                <Snowflake className="value-icon" />
                <p>Limited access to Antarctica</p>
              </div>
              <div className="value-card">
                <Anchor className="value-icon" />
                <p>Expedition logistics and execution</p>
              </div>
              <div className="value-card">
                <Ship className="value-icon" />
                <p>Ship capacity and onboard experience</p>
              </div>
            </div>

            <div className="brand-positioning">
              <div className="brand-pill">
                <h4>Scenic</h4>
                <p>Appeals to travelers who want clarity and simplicity in pricing.</p>
              </div>
              <div className="brand-pill">
                <h4>Silversea</h4>
                <p>Appeals to those who value brand heritage and a traditional luxury model.</p>
              </div>
            </div>

            <p className="emphasis emphasis--decision">The decision is less about cost and more about how value is structured and perceived.</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — DRAKE PASSAGE EXPERIENCE ===== */}
      <section className="drake-passage">
        <div className="drake-passage-inner">
          <h2>Drake Passage Experience</h2>
          <div className="drake-content">
            <p>Both brands operate ships designed for polar conditions with stabilization systems to manage open water crossings.</p>
            <p>The Drake Passage experience depends more on conditions and ship design than brand choice alone.</p>
            <div className="cta-container">
              <button className="secondary">Read Drake Passage Guide</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 & 9 — WHO SHOULD CHOOSE ===== */}
      <section className="choice-section">
        <div className="choice-inner">
          <div className="choice-grid">
            <div className="choice-card scenic-choice">
              <h2>Choose Scenic If</h2>
              <ul className="choice-list">
                <li>You prefer a modern, design-forward ship</li>
                <li>You want a clearly defined all-inclusive structure</li>
                <li>You value simplicity in planning and pricing</li>
                <li>You want a balance between expedition and onboard luxury</li>
              </ul>
            </div>
            <div className="choice-card silversea-choice">
              <h2>Choose Silversea If</h2>
              <ul className="choice-list">
                <li>You prefer a traditional luxury cruise environment</li>
                <li>You value established brand heritage</li>
                <li>You prioritize service style and familiarity</li>
                <li>You appreciate a classic approach to luxury travel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10 — COMMON MISTAKES ===== */}
      <section className="mistakes">
        <div className="mistakes-inner">
          <h2>Common Mistakes When Choosing Between Scenic and Silversea</h2>
          <div className="mistakes-grid">
            <div className="mistake-card">
              <AlertCircle className="mistake-icon" />
              <div className="mistake-text">
                <span className="mistake-title"></span>
                <span className="mistake-desc">Choosing based on price alone without understanding inclusions</span>
              </div>
            </div>
            <div className="mistake-card">
              <AlertCircle className="mistake-icon" />
              <div className="mistake-text">
                <span className="mistake-title"></span>
                <span className="mistake-desc">Not aligning the ship experience with personal travel style</span>
              </div>
            </div>
            <div className="mistake-card">
              <AlertCircle className="mistake-icon" />
              <div className="mistake-text">
                <span className="mistake-title"></span>
                <span className="mistake-desc">Booking too late and losing preferred inventory</span>
              </div>
            </div>
            <div className="mistake-card">
              <AlertCircle className="mistake-icon" />
              <div className="mistake-text">
                <span className="mistake-desc">Assuming all expedition experiences are identical</span>
              </div>
            </div>
          </div>
          <div className="consultant-tip">
            <p><strong>Expert Advice:</strong> The right choice comes from understanding how each experience is structured, not simply comparing features.</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11 — EXPERT RECOMMENDATION ===== */}
      <section className="expert-rec">
        <div className="expert-inner">
          <h2>Our Recommendation</h2>
          <div className="verdict-container">
            <div className="verdict-card verdict-card--scenic">
              <CheckCircle2 className="verdict-icon" />
              <h3>The Scenic Recommendation</h3>
              <p>For most clients seeking a modern, all-inclusive experience with clear pricing and contemporary design, <strong>Scenic</strong> is often the stronger fit.</p>
            </div>
            <div className="verdict-card verdict-card--silversea">
              <CheckCircle2 className="verdict-icon" />
              <h3>The Silversea Recommendation</h3>
              <p>For clients who prefer a more traditional luxury cruise environment with established service style, <strong>Silversea</strong> remains a strong choice.</p>
            </div>
          </div>
          <div className="expert-seal">
            <p>We regularly guide clients through this exact decision, ensuring the selection aligns with expectations before any booking is confirmed.</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 12 — WHAT HAPPENS NEXT ===== */}
      <section className="what-next">
        <div className="what-next-inner">
          <h2>What Happens Next</h2>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">01</span>
              <p>Consultation to understand your travel style and priorities</p>
            </div>
            <div className="step-item">
              <span className="step-num">02</span>
              <p>Side-by-side recommendation based on your preferences</p>
            </div>
            <div className="step-item">
              <span className="step-num">03</span>
              <p>Booking and full Antarctica expedition planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 13 — WHY BOOK WITH ANGELA HUGHES ===== */}
      <section className="why-book">
        <div className="why-book-inner">
          <h2>Why Book with Angela Hughes and Trips & Ships Luxury Travel</h2>
          <div className="why-book-flex">
            <div className="why-story">
              <p className="lead-expertise">Choosing between expedition cruise lines requires experience and perspective.</p>
              <p>Angela Hughes has over four decades in the travel industry and has traveled to 121 countries and territories, working with clients on complex, high-value itineraries.</p>
              <p className="emphasis emphasis--guided">The decision is guided, not guessed.</p>
            </div>
            
            <div className="why-benefits-grid">
              <h3>Clients benefit from:</h3>
              <div className="benefit-item">
                <Globe className="benefit-icon" />
                <p>Clear positioning across competing brands</p>
              </div>
              <div className="benefit-item">
                <Key className="benefit-icon" />
                <p>Access to preferred inventory and timing</p>
              </div>
              <div className="benefit-item">
                <LayoutGrid className="benefit-icon" />
                <p>Full itinerary coordination</p>
              </div>
              <div className="benefit-item">
                <ShieldCheck className="benefit-icon" />
                <p>Ongoing support throughout the journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 14 — AUTHOR PROOF ===== */}
      <section className="author-proof">
        <div className="author-proof-inner">
          <div className="professional-card">
            <div className="card-header">
              <Award className="auth-icon" />
              <div className="auth-title">
                <h3>Planned and Curated by Angela Hughes</h3>
                <p className="auth-role">CEO, Trips & Ships Luxury Travel</p>
              </div>
            </div>
            
            <div className="auth-stats-grid">
              <div className="auth-stat-item">
                <Clock className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-val">40+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="auth-stat-item">
                <MapPin className="stat-icon" />
                <div className="stat-content">
                  <span className="stat-val">121</span>
                  <span className="stat-label">Countries Visited</span>
                </div>
              </div>
            </div>

            <div className="auth-recognition">
              <h4>Industry Recognition</h4>
              <ul className="recognition-list">
                <li>Luxury Travel Influencer of the Year (2024), Travel Leaders Network</li>
                <li>Most Influential Women in Travel (2026), TravelPulse</li>
                <li>Featured across leading travel media</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 15 — FAQ ===== */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? "active" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {activeFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 16 — FINAL CTA ===== */}
      <section className="final-reach">
        <div className="final-reach-inner">
          <div className="cta-glass-card">
            <h2>Choose the Right Antarctica Expedition</h2>
            <p>The difference between Scenic and Silversea is not obvious on the surface. It is in how the experience is delivered.</p>
            <p>Work with a team that understands both and can guide you to the right decision from the start.</p>
            <div className="hero-buttons hero-buttons--centered">
              <button className="primary primary--no-offset">
                Get Expert Recommendation
              </button>
              <button className="secondary">
                View Scenic Antarctica Expeditions
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AntarcticaPage;