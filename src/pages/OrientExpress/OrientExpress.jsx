import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import "./OrientExpress.css";
import ExperienceImage1 from "../../assets/OrientExpress/ExperienceImage1.webp"
import ExperienceImage4 from "../../assets/OrientExpress/ExperienceImage4.webp"
import ExperienceImage6 from "../../assets/OrientExpress/ExperienceImage6.webp"
import ExperienceImage7 from "../../assets/OrientExpress/ExperienceImage7.webp"
import ExperienceImage8 from "../../assets/OrientExpress/ExperienceImage8.webp"
import ExperienceImage9 from "../../assets/OrientExpress/ExperienceImage9.webp"
import ExperienceImage10 from "../../assets/OrientExpress/ExperienceImage10.webp"
import ExperienceImage11 from "../../assets/OrientExpress/ExperienceImage11.webp"
import SuitesSpaceImage from "../../assets/OrientExpress/Suites_Space.webp"
import WhyThisIsDifferentBg from "../../assets/OrientExpress/why_this_is_different_bg.webp"
import luxury_yacht_experiences1 from "../../assets/OrientExpress/luxury_yacht_experiences1.webp"
import luxury_yacht_experiences2 from "../../assets/OrientExpress/luxury_yacht_experiences2.webp"
import luxury_yacht_experiences3 from "../../assets/OrientExpress/luxury_yacht_experiences3.webp"
import PrivateConsultationBg from "../../assets/OrientExpress/Private_consultation.webp"

const faqData = [
  {
    q: "Is Orient Express Yachts worth it?",
    a: "For the right traveler, yes. If you value design, privacy, rarity, and a more intimate experience at sea, this is one of the most compelling new luxury travel products entering the market."
  },
  {
    q: "When does Orient Express Corinthian launch?",
    a: "The maiden voyages begin in May 2026."
  },
  {
    q: "How many suites does Orient Express Corinthian have?",
    a: "It has 54 suites."
  },
  {
    q: "Where will Orient Express Yachts sail?",
    a: "The initial focus is the Mediterranean, with itineraries published across that region. Orient Express also has destination content referring to both the Mediterranean and Caribbean more broadly."
  },
  {
    q: "Does every suite have a sea view?",
    a: "The official site says each suite offers panoramic sea views."
  },
  {
    q: "Who is the chef for Orient Express Corinthian?",
    a: "Culinary direction is led by Yannick Alléno."
  },
  {
    q: "How large are the suites?",
    a: "Accor says the suites range from 485 square feet to 2,476 square feet."
  },
  {
    q: "How many guests are onboard?",
    a: "The public materials emphasize 54 suites, and market positioning strongly suggests a low-density guest experience. Some third-party summaries reference approximately 110 guests, but the official pages primarily emphasize the 54-suite positioning."
  },
  {
    q: "What makes it different from a traditional luxury cruise?",
    a: "It is built around a more private, design-led, sailing-oriented, and immersive experience rather than a standard cruise model."
  },
  {
    q: "Can I combine this with a longer Europe trip?",
    a: "Yes. This is often the smartest way to plan it, especially if you want to build pre- and post-stay experiences around the sailing."
  },
  {
    q: "When should I book?",
    a: "As early as possible. Limited suite inventory and early demand make timing important."
  }
];

const experienceSlides = [
  { img: ExperienceImage4, text: "Five restaurants and private dining spaces" },
  { img: ExperienceImage6, text: "Bars and lounges" },
  { img: ExperienceImage11, text: "115-seat cabaret" },
  { img: ExperienceImage1, text: "Marina and water access" },
  { img: ExperienceImage7, text: "Two pools" },
  { img: ExperienceImage8, text: "Fitness and wellness spaces" },
  { img: ExperienceImage9, text: "Library, cinema, and music salon" },
  { img: ExperienceImage10, text: "Culinary direction by Yannick Alléno" }
];

const OrientExpress = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFAQ = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <div className="wrapper">

      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Luxury Yacht Cruises:
            <br />
            The New Standard in Ultra-Luxury Travel at Sea
          </h1>

          <p className="lead">
            Luxury Yacht Travel Has Changed. Most People Just Haven't Realized It Yet.
          </p>

          <p className="lead-sub">
            Private yacht-style journeys across the Mediterranean, Caribbean, and Northern Europe with Aman, Four Seasons, Ritz-Carlton, Orient Express, Scenic, and Emerald.
          </p>

          <div className="hero-buttons">
            <button className="primary">Start Your Yacht Journey</button>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS LUXURY ===== */}
      <section className="what-luxury">
        <div className="section-inner">
          <h2>What Is a Luxury Yacht Cruise?</h2>
          <p>
            A luxury yacht cruise is a small-ship, ultra-luxury travel experience designed around privacy, space, and service. Unlike traditional cruises, these yachts carry fewer guests, offer suite-only accommodations, and focus on destination immersion rather than onboard scale.
          </p>
          <p className="emphasis">This is not cruising.</p>
          <p className="emphasis">This is the next category of luxury travel at sea.</p>
        </div>
      </section>

      {/* ===== EDITORIAL ===== */}
      <section className="editorial-block">
        <div className="section-inner">
          <h2>Is Orient Express Yachts a Cruise or a Yacht</h2>
          <p>
            Technically, it operates as a sailing yacht experience, but the better answer is that it is designed to feel far more like a private yacht than a traditional cruise.
          </p>
          <p className="emphasis">That distinction matters.</p>
          <p>
            For many travelers, the resistance to cruising has never been about the sea. It has been about scale, density, and the feeling that the experience was built for someone else. Orient Express Yachts addresses that gap with a lower-density concept, stronger design identity, and a more immersive sense of place. Its positioning, suite count, and Mediterranean launch all support that interpretation.
          </p>
        </div>
      </section>

      {/* ===== DIFFERENCE ===== */}
      <section className="difference">
        <div className="difference-bg" style={{ backgroundImage: `url('${WhyThisIsDifferentBg}')` }}></div>
        <div className="difference-content">
          <div className="difference-card">
            <h2>Why This Is Different</h2>
            <p>Most cruise products have historically been built around itinerary, volume, and logistics.</p>
            <p className="highlight-line">Orient Express Yachts is built around something else entirely.</p>
            <p>
              It is about space over density, environment over programming, design over sameness, and atmosphere over activity schedules. The brand is bringing the legacy of Orient Express into a floating, highly stylized setting that is meant to feel curated rather than crowded.
            </p>
            <p>This is why it matters so much for travelers who have never really seen themselves on a cruise.</p>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="experience">
        <div className="section-inner wide">
          <h2>The Experience Onboard</h2>
          <p>
            The onboard experience is where this product begins to separate itself.
          </p>
          <p>
            Official Orient Express materials describe a layered experience that includes restaurants and bars, a marina, wellness spaces, a cabaret, a cinema, a game room, a music salon, and a library. Accor's press materials also confirm five restaurants and private dining spaces, a 115-seat cabaret, a state-of-the-art recording studio, two pools, and a marina. Culinary direction for Orient Express Corinthian is led by Yannick Alléno.
          </p>
          <p>This gives the experience more depth than a simple yacht aesthetic.</p>
          <p className="emphasis">It creates a full world onboard.</p>

          <div className="exp-highlights-title">Experience highlights</div>

          <div className="exp-slider">
            <div className="exp-track">
              {[...experienceSlides, ...experienceSlides].map((slide, i) => (
                <div
                  key={i}
                  className="exp-slide"
                  style={{ backgroundImage: `url('${slide.img}')` }}
                >
                  <span>{slide.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUITES ===== */}
      <section className="suites">
        <div className="suites-inner">
          <div className="suites-image" style={{ backgroundImage: `url('${SuitesSpaceImage}')` }}></div>
          <div className="suites-text">
            <h2>Suites and Space</h2>
            <p>One of the strongest selling points is the sense of space.</p>
            <p>
              Accor states that the yacht's 54 suites range from 485 square feet to 2,476 square feet, with expansive picture windows or terraces and elevated ceilings. That is materially different from how most travelers think about accommodation at sea.
            </p>
            <p className="emphasis">For the right traveler, that changes the entire conversation.</p>
            <p>
              This is not about fitting into a cabin. It is about inhabiting a beautifully designed environment that happens to move through the Mediterranean.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing">
        <div className="section-inner">
          <h2>How Much Does Orient Express Yacht Cost</h2>
          <p>
            Pricing is expected to place Orient Express Yachts at the very top of the ultra-luxury market.
          </p>
          <p>
            While the brand's public materials emphasize itinerary availability and booking status rather than a simple universal rate card, the overall product positioning, suite scale, culinary leadership, and density strongly suggest a mid five-figure starting point per person and upward, depending on suite category, season, and itinerary. That pricing expectation is an inference based on the official product profile and positioning rather than a single published flat rate.
          </p>
          <p className="emphasis">This is not a price-first product.</p>
          <p>It is a product for travelers choosing for rarity, design, access, and experience.</p>
        </div>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <section className="orient-video-section">
        <div className="section-inner wide">
          <div className="video-header">
            <h2>Experience the Orient Express Corinthian</h2>
            <div className="navy-divider-center"></div>
            <p className="video-subtitle">
              Step into a new era of ultra-luxury travel. The Orient Express Corinthian reimagines 
              the legendary heritage of the world's most iconic train as a futuristic sailing yacht, 
              blending timeless elegance with state-of-the-art maritime innovation.
            </p>
          </div>
          <div className="video-wrapper">
             <iframe 
                className="video-player"
                src="https://www.youtube.com/embed/WrbfeZCcyP8?autoplay=0&mute=1&loop=1&playlist=WrbfeZCcyP8" 
                title="Orient Express Corinthian" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
          </div>
          <div className="video-caption">
            <span className="caption-tag">Yacht Insight</span>
            <p>
              A legendary heritage reborn as the world's largest sailing yacht, offering 54 ultra-luxury 
              suites and a revolutionary design that pushes the boundaries of private yacht travel.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY ===== */}
      <section className="sustainability">
        <div className="section-inner">
          <h2>Sustainability and Innovation</h2>
          <p>Sustainability is part of the product story, but in this case it is also part of the appeal.</p>
          <p>
            Orient Express has positioned this as a sailing yacht experience, and the brand's official messaging centers the vessel's identity as a large-scale sailing concept rather than a conventional cruise ship. What matters for the consumer page is that this is being framed as a more future-facing, design-led approach to ultra-luxury travel at sea.
          </p>
          <p className="emphasis">For many luxury travelers, that combination of innovation and elegance is part of the draw.</p>
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="audience">
        <div className="section-inner">
          <h2>Who This Is For</h2>
          <p className="intro">This is not for everyone.</p>
          <p>It is best suited for travelers who:</p>
          <div className="audience-list">
            <p>Have never really identified as cruise travelers</p>
            <p>Prefer private villas, yachts, and more design-driven environments</p>
            <p>Value privacy, atmosphere, and a quieter pace</p>
            <p>Want something newer and more distinctive than a standard luxury cruise</p>
            <p>Want to integrate a sailing into a broader Europe itinerary</p>
          </div>
          <p className="emphasis">
            If you have ever said, "I do not think cruising is for me," this may be the first product that genuinely challenges that assumption.
          </p>
        </div>
      </section>

      {/* ===== COMPARE ===== */}
      <section className="compare">
        <div className="compare-inner">
          <div className="compare-text">
            <h2>How It Compares to Other Luxury Yacht Experiences</h2>
            <p>
              Orient Express Yachts enters a space that already includes products that blend hospitality and small-ship luxury.
            </p>
            <p>
              What makes this stand apart is the strength of the Orient Express brand identity, the emphasis on sailing, the highly stylized design point of view, the intimate suite count, and the framing of the journey itself as part of the allure. The official brand language leans much more heavily into heritage, craftsmanship, and the Mediterranean experience than into conventional cruise messaging.
            </p>
            <p className="emphasis">That difference matters.</p>
            <p className="emphasis">It changes who will be drawn to it.</p>
          </div>
          <div className="compare-images">
            <img src={luxury_yacht_experiences1} alt="luxury yacht" />
            <img src={luxury_yacht_experiences2} alt="deck view" />
            <img src={luxury_yacht_experiences3} alt="luxury interior" />
          </div>
        </div>
      </section>

      {/* ===== ANGELA ===== */}
      <section className="angela">
        <div className="angela-box">
          <h2>Why Work with Angela Hughes and Trips & Ships Luxury Travel</h2>
          <p className="angela-lead">Angela Hughes leads this work personally.</p>
          <p>
            She is the CEO and Founder of Trips & Ships Luxury Travel and one of the most recognized voices in luxury travel today.
          </p>
          <div className="angela-points">
            <p>CEO and Founder of Trips & Ships Luxury Travel</p>
            <p>Founder of Luxury Travel University</p>
            <p>More than 40 years in the travel industry</p>
            <p>Named one of the Most Influential Women in Travel 2026 by TravelPulse</p>
            <p>Named Luxury Travel Influencer of the Year 2024 by Travel Leaders Network</p>
            <p>Trusted by luxury travelers globally</p>
          </div>
          <p>Her role is not simply to book a product.</p>
          <p className="emphasis">It is to interpret where the market is going and help clients decide whether something is truly right for them.</p>
          <p>Orient Express Yachts is one of those moments.</p>

          <h3 className="subhead">A personal approach backed by a global team</h3>
          <p>
            While Angela leads the strategy and client experience, she is supported by a team of more than 140 luxury travel advisors and operational specialists within Trips & Ships Luxury Travel.
          </p>
          <p>That means clients benefit from:</p>
          <div className="angela-points">
            <p>Strategic oversight</p>
            <p>Deep supplier relationships</p>
            <p>Support before, during, and after travel</p>
            <p>Full itinerary coordination around the sailing itself</p>
          </div>
          <p className="emphasis">This is not a one-person transaction.</p>
          <p>It is a high-touch experience supported by both leadership and infrastructure.</p>
        </div>
      </section>

      {/* ===== AVAILABILITY ===== */}
      <section className="availability">
        <div className="section-inner">
          <h2>Availability and Booking Strategy</h2>
          <p>
            With only 54 suites, this is a limited-inventory product from the start. Official Orient Express itinerary pages already show booking-driven sailings, call-for-availability language on some departures, and a clear emphasis on early planning.
          </p>
          <p>Working with Trips & Ships Luxury Travel means:</p>

          <div className="availability-list">
            <div className="availability-item">
              <CheckCircle2 size={20} className="check-icon" />
              <p>Strategic timing on when to book</p>
            </div>
            <div className="availability-item">
              <CheckCircle2 size={20} className="check-icon" />
              <p>Guidance on whether the product fits your travel style</p>
            </div>
            <div className="availability-item">
              <CheckCircle2 size={20} className="check-icon" />
              <p>Help selecting the right suite and sailing</p>
            </div>
            <div className="availability-item">
              <CheckCircle2 size={20} className="check-icon" />
              <p>Pre- and post-yacht itinerary planning</p>
            </div>
            <div className="availability-item">
              <CheckCircle2 size={20} className="check-icon" />
              <p>Ongoing advocacy throughout the experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta" style={{ backgroundImage: `url('${PrivateConsultationBg}')` }}>
        <div className="final-cta-inner">
          <h2>Start Your Journey</h2>
          <p>This is not something to book casually in five minutes.</p>
          <p>It requires thought, fit, timing, and the right planning around it.</p>
          <p className="cta-emphasis">
            If this aligns with how you want to travel, the next step is a conversation.
          </p>
          <button className="cta-button">Request a Private Consultation</button>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section">
        <div className="section-inner">
          <h2>Frequently Asked Questions About Orient Express Yachts</h2>

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeFaq === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-chevron">{activeFaq === index ? "−" : "+"}</span>
              </div>
              {activeFaq === index && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OrientExpress;