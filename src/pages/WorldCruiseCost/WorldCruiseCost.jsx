import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import {
  Globe,
  CalendarCheck,
  DollarSign,
  Ship,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Plane,
  Hotel,
  Bus,
  Calendar,
  Check,
  XCircle,
} from "lucide-react";
import "./WorldCruiseCost.css";

import heroImage1 from "../../assets/WorldCruiseCost/Hero1.webp";
import heroImage2 from "../../assets/WorldCruiseCost/Hero2.webp";
import heroImage3 from "../../assets/WorldCruiseCost/Hero3.webp";
import priceImg1 from "../../assets/WorldCruiseCost/Mainstream_Entry.webp";
import priceImg2 from "../../assets/WorldCruiseCost/Premium_Market.webp";
import priceImg3 from "../../assets/WorldCruiseCost/Luxury_world_cruise.jpg";
import priceImg4 from "../../assets/WorldCruiseCost/Ritzcart.jpg";
import dailyImg1 from "../../assets/WorldCruiseCost/Luxury_suite.webp";
import dailyImg2 from "../../assets/WorldCruiseCost/Dining.webp";
import dailyImg3 from "../../assets/WorldCruiseCost/Travel_Experience.jpg";
import dailyImg4 from "../../assets/WorldCruiseCost/Enriching_shore.webp";
import dailyImg5 from "../../assets/WorldCruiseCost/Fine_Dining_Experience.webp";
import myimage from "../../assets/image.webp";
import profileImg from "../../assets/image.webp";

/* ===== INLINE FAQ ACCORDION ===== */
const LTJapanFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="wcc_faq_list">
      {items.map((item, i) => (
        <div
          key={i}
          className="wcc_faq_item"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="wcc_faq_question">
            <span>{item.q}</span>
            <span className="wcc_faq_icon">{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="wcc_faq_answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default function WorldCruiseCost() {
  const [currentHero, setCurrentHero] = useState(0);

  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const t = setInterval(
      () => setCurrentHero((p) => (p + 1) % heroImages.length),
      5000,
    );
    return () => clearInterval(t);
  }, [heroImages.length]);

  const faqItems = [
    {
      q: "How much does a world cruise cost on average?",
      a: "Most world cruises fall somewhere between about $25,000 and $150,000 per person, with top suite experiences going much higher depending on cruise line, inclusions, and itinerary length.",
    },
    {
      q: "What is the cheapest way to do a world cruise?",
      a: "The cheapest advertised fare is not always the cheapest overall option. Lower entry fares often come with more separate costs for air, excursions, dining, and gratuities.",
    },
    {
      q: "What is included in a luxury world cruise fare?",
      a: "Luxury world cruise fares may include air, transfers, excursions, specialty dining, drinks, Wi-Fi, gratuities, laundry, visa support, and shipboard credit depending on the line.",
    },
    {
      q: "Are excursions included on world cruises?",
      a: "Sometimes. On fully inclusive products, many are. On lower entry products, they may be mostly extra.",
    },
    {
      q: "Do I need to budget for airfare separately?",
      a: "Sometimes yes. Some cruise lines package or promote air, while others treat it separately.",
    },
    {
      q: "How much extra spending money should I plan?",
      a: "A practical planning range is often 10% to 25% beyond fare depending on line and personal travel style.",
    },
    {
      q: "Why are some world cruises so much more expensive?",
      a: "Because they may include far more of the total travel experience, along with better accommodations, stronger service, and a more seamless long term lifestyle onboard.",
    },
    {
      q: "Is a luxury world cruise really worth the money?",
      a: "For the right traveler, yes. It can be one of the most efficient and comfortable ways to see the world over an extended period.",
    },
    {
      q: "Do world cruise prices go up over time?",
      a: "They can. Inventory, category sellouts, launch timing, and promotions all affect pricing.",
    },
    {
      q: "When should I book a world cruise for the best pricing?",
      a: "As early as possible. The best combinations of inventory and launch perks often happen well before final payment season.",
    },
    {
      q: "What deposit is required for a world cruise?",
      a: "It varies by cruise line. MSC’s current contract, for example, states a 15% nonrefundable deposit for world cruise bookings.",
    },
    {
      q: "Is travel insurance extra?",
      a: "Yes, and it should be part of the full budget conversation.",
    },
    {
      q: "Are gratuities included?",
      a: "Sometimes. This varies significantly by operator.",
    },
    {
      q: "Do solo travelers pay more?",
      a: "Often yes, because many fares are built on double occupancy.",
    },
    {
      q: "What world cruise line gives the best value?",
      a: "That depends on whether you value the lowest entry point, the strongest inclusions, or the most seamless long term experience.",
    },
  ];

  return (
    <div className="wcc-root">
      <Helmet>
        <title>
          How Much Does a World Cruise Cost? The 2027–2029 Pricing Guide
        </title>
        <meta
          name="title"
          content="How Much Does a World Cruise Cost? The 2027–2029 Pricing Guide"
        />
        <meta
          name="description"
          content="Get realistic world cruise pricing for 2027–2029. Expert guidance from Angela Hughes on luxury cruise costs, budgeting, and finding the right voyage."
        />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="wcc-section wcc-hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`wcc-hero-bg ${i === currentHero ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="wcc-hero-overlay" />
        <div className="wcc-container wcc-hero-inner">
          {/* Eyebrow */}
          <span className="wcc-eyebrow">
            <Globe size={13} style={{ marginRight: "8px" }} />
            2027–2029 Pricing Guide
          </span>

          {/* Split-line H1 */}
          <div className="wcc-h1-block">
            <span className="wcc-h1-thin">How Much Does a</span>
            <h1 className="wcc-h1 wcc-h1-hero">World Cruise Cost?</h1>
            <div className="wcc-hero-accent-rule">
              <span className="wcc-hero-rule-line" />
              <span className="wcc-hero-rule-dot" />
              <span className="wcc-hero-rule-line" />
            </div>
            <p className="wcc-hero-subtitle">
              The 2027–2029 Pricing Guide — Written by a 40-Year Luxury Travel
              Expert
            </p>
          </div>

          {/* CTA Card — side-by-side layout */}
          <div className="wcc-hero-cta-card">
            {/* Left: profile */}
            <div className="wcc-hero-cta-left">
              <img
                src={profileImg}
                alt="Angela Hughes"
                className="wcc-hero-profile-img"
              />
              <p className="wcc-hero-cta-label">
                Plan Your World Cruise Budget with
              </p>
              <strong className="wcc-hero-cta-name">Angela Hughes</strong>
            </div>

            {/* Divider */}
            <div className="wcc-hero-cta-divider" />

            {/* Right: features + CTA */}
            <div className="wcc-hero-cta-right">
              <div className="wcc-hero-cta-features">
                <div className="wcc-hero-cta-feat">
                  <CalendarCheck size={15} />
                  <span>Private consultation</span>
                </div>
                <div className="wcc-hero-cta-feat">
                  <DollarSign size={15} />
                  <span>Realistic pricing guidance</span>
                </div>
                <div className="wcc-hero-cta-feat">
                  <Ship size={15} />
                  <span>Luxury cruise comparison</span>
                </div>
              </div>
              <a
                href="#schedule"
                className="wcc-hero-cta-btn"
                id="hero-schedule-btn"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT A WORLD CRUISE REALLY COSTS */}
      <section className="wcc-section wcc-why">
        <div className="wcc-container wcc-intro-inner">
          {/* Left: heading + pull quote */}
          <div className="wcc-intro-left">
            <div className="wcc-intro-label">Understanding the Cost</div>
            <h2 className="wcc-h2 wcc-intro-h2">
              What a World Cruise Really Costs
            </h2>
            <div className="wcc-intro-rule" />
            <div className="wcc-intro-pull">
              <span className="wcc-intro-quote-mark">"</span>
              <p className="wcc-intro-pull-text">
                The first question is always the same.
              </p>
            </div>
          </div>

          {/* Right: body paragraphs */}
          <div className="wcc-intro-right">
            <p className="wcc-p wcc-intro-question">
              How much does a world cruise cost?
            </p>
            <p className="wcc-p wcc-intro-body">
              The honest answer is that it depends on the cruise line, the level
              of inclusion, and how you want to live for three to six months.
            </p>
            <div className="wcc-intro-divider" />
            <p className="wcc-p wcc-intro-body">
              Because this is not just a trip.
            </p>
            <p className="wcc-p wcc-intro-emphasis">
              It is your life for a quarter of a year.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS GUIDE IS DIFFERENT */}
      <section className="wcc-section">
        <div className="wcc-container wcc-why-inner">
          {/* Top header */}
          <div className="wcc-why-header">
            <div className="wcc-why-label">About This Guide</div>
            <h2 className="wcc-h2 wcc-why-h2">
              Why This World Cruise Cost Guide Is Different
            </h2>
            <div className="wcc-why-rule" />
            <p className="wcc-p wcc-why-lead">
              This is not a generic pricing article.
            </p>
          </div>

          {/* Body grid: bio left, credentials right */}
          <div className="wcc-why-body">
            <div className="wcc-why-bio">
              <p className="wcc-p wcc-why-bio-text">
                I have spent over 40 years in the travel industry and have
                personally traveled on multiple world cruise segments across
                different cruise lines.
              </p>
              <p className="wcc-p wcc-why-bio-text">
                I have worked directly with cruise line executives, reviewed
                pricing structures across operators, and guided clients through
                six-figure travel decisions.
              </p>
              <p className="wcc-p wcc-why-basis-label">
                This guide is based on:
              </p>
            </div>

            <div className="wcc-why-creds">
              {[
                { text: "Real client bookings" },
                { text: "Firsthand cruise experience" },
                { text: "Direct relationships with cruise lines" },
                { text: "Current market pricing behavior" },
              ].map((item, i) => (
                <div className="wcc-why-cred-item" key={i}>
                  <span className="wcc-why-cred-num">0{i + 1}</span>
                  <span className="wcc-why-cred-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TYPICAL WORLD CRUISE PRICE RANGES */}
      <section className="wcc-section wcc-pricing-v3">
        <div className="wcc-container">
          <div className="wcc-pricing-header-v3">
            <h2 className="wcc-h2 wcc-pricing-v3-h2">
              Typical World Cruise Price Ranges
            </h2>
            <div className="wcc-why-rule" />
          </div>

          <div className="wcc-pricing-grid-v3">
            {[
              {
                tier: "Mainstream Entry",
                price: "$18,000 to $40,000",
                suffix: "per person",
                img: priceImg1,
              },
              {
                tier: "Premium",
                price: "$25,000 to $65,000",
                suffix: "per person",
                img: priceImg2,
              },
              {
                tier: "Luxury",
                price: "$60,000 to $150,000",
                suffix: "per person",
                img: priceImg3,
              },
              {
                tier: "Ultra Luxury Suites",
                price: "$150,000 to $500,000+",
                suffix: "per person",
                img: priceImg4,
              },
            ].map((item, i) => (
              <div className="wcc-pricing-card-v3" key={i}>
                <div className="wcc-pricing-card-image">
                  <img src={item.img} alt={item.tier} />
                  <div className="wcc-pricing-card-overlay" />
                  <div className="wcc-pricing-tier-badge">{item.tier}</div>
                </div>
                <div className="wcc-pricing-card-content">
                  <div className="wcc-pricing-value-box">
                    <span className="wcc-pricing-price">{item.price}</span>
                    <span className="wcc-pricing-suffix">{item.suffix}</span>
                  </div>
                  <div className="wcc-pricing-card-footer">
                    <CheckCircle2 size={16} />
                    <span>Estimated Range</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY A $100,000 WORLD CRUISE IS NOT WHAT IT SOUNDS LIKE */}
      <section className="wcc-section wcc-value">
        <div className="wcc-container wcc-value-inner">
          <div className="wcc-value-layout">
            {/* Left Column: Title & Daily Cost */}
            <div className="wcc-value-left">
              <h2 className="wcc-h2 wcc-value-h2">
                Why a $100,000 World Cruise Is Not What It Sounds Like
              </h2>

              <div className="wcc-cost-breakdown">
                <p className="wcc-cost-context">
                  A $120,000 world cruise over 120 days is about:
                </p>
                <div className="wcc-cost-calculation">
                  <div className="wcc-cost-amount">
                    <span className="wcc-number">$ 1,000</span>
                  </div>
                  <span className="wcc-cost-period">per day</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inclusions & Insights */}
            <div className="wcc-value-right">
              {/* Inclusions */}
              <div className="wcc-inclusions-card">
                <h3 className="wcc-inclusions-title">That often includes:</h3>
                <ul className="wcc-inclusions-list">
                  <li className="wcc-inclusion-item">
                    <span className="wcc-inclusion-check">
                      <Ship size={16} />
                    </span>
                    <span>Accommodation</span>
                  </li>
                  <li className="wcc-inclusion-item">
                    <span className="wcc-inclusion-check">
                      <Globe size={16} />
                    </span>
                    <span>Transportation across continents</span>
                  </li>
                  <li className="wcc-inclusion-item">
                    <span className="wcc-inclusion-check">
                      <CalendarCheck size={16} />
                    </span>
                    <span>Dining</span>
                  </li>
                  <li className="wcc-inclusion-item">
                    <span className="wcc-inclusion-check">
                      <Ship size={16} />
                    </span>
                    <span>Service</span>
                  </li>
                  <li className="wcc-inclusion-item">
                    <span className="wcc-inclusion-check">
                      <Globe size={16} />
                    </span>
                    <span>Entertainment</span>
                  </li>
                  <li className="wcc-inclusion-item">
                    <span className="wcc-inclusion-check">
                      <CalendarCheck size={16} />
                    </span>
                    <span>Many experiences</span>
                  </li>
                </ul>
              </div>

              {/* Reality Check */}
              <div className="wcc-reality-card">
                <div className="wcc-reality-badge">Reality Check</div>
                <p className="wcc-reality-text">
                  In many destinations, a luxury hotel alone can cost that per
                  night.
                </p>
              </div>

              {/* Verdict */}
              <div className="wcc-verdict-card">
                <p>This is why world cruises are not just luxury.</p>
                <p className="wcc-verdict-highlight">
                  They are <strong>structured efficiency</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU ARE ACTUALLY PAYING FOR EACH DAY */}
      <section className="wcc-section wcc-daily-cost-v3">
        <div className="wcc-container">
          <div className="wcc-daily-header-v3">
            <h2 className="wcc-h2 wcc-daily-h2-v3">
              What You Are Actually <br />
              <span>Paying For Each Day</span>
            </h2>
            <div className="wcc-why-rule" />
            <p className="wcc-daily-p-v3">
              A transparent look at the value included in your daily world
              cruise investment.
            </p>
          </div>

          <div className="wcc-daily-grid-v3">
            {[
              {
                cat: "Accommodation",
                val: "Luxury suite or stateroom",
                img: dailyImg1,
              },
              {
                cat: "Dining",
                val: "Multiple fine dining restaurants",
                img: dailyImg2,
              },
              {
                cat: "Transportation",
                val: "Seamless global travel between ports",
                img: dailyImg3,
              },
              {
                cat: "Experiences",
                val: "Enriching shore excursions & events",
                img: dailyImg4,
              },
              {
                cat: "Service",
                val: "Full onboard staff & personalized care",
                img: dailyImg5,
              },
            ].map((item, i) => (
              <div className="wcc-daily-card-v3" key={i}>
                <div className="wcc-daily-card-image">
                  <img src={item.img} alt={item.cat} />
                  <div className="wcc-daily-card-overlay" />
                </div>
                <div className="wcc-daily-card-content">
                  <span className="wcc-daily-cat-v3">{item.cat}</span>
                  <h3 className="wcc-daily-val-v3">{item.val}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL COST COMPARISON BY CRUISE LINE — V3 DASHBOARD */}
      <section className="wcc-section wcc-comparison-v3">
        <div className="wcc-container wcc-comp-inner-v3">
          <div className="wcc-comp-header-v3">
            <h2 className="wcc-h2 wcc-comp-h2-v3">
              Real Cost Comparison by Cruise Line
            </h2>
            <div className="wcc-why-rule" />
            <p className="wcc-comp-lead-v3">
              Understanding the spectrum of investment across leading luxury
              operators.
            </p>
          </div>

          <div className="wcc-comp-grid-v3">
            {[
              {
                line: "Regent Seven Seas Cruises",
                price: "$70,000 to $150,000+",
                desc: "Fully inclusive. Higher upfront, fewer surprises.",
              },
              {
                line: "Silversea Cruises",
                price: "$65,000 to $140,000+",
                desc: "Luxury with more exploratory itineraries.",
              },
              {
                line: "Viking Ocean Cruises",
                price: "$50,000 to $90,000+",
                desc: "Strong value positioning with packaged inclusions.",
              },
              {
                line: "Cunard Line",
                price: "$25,000 to $75,000+",
                desc: "Classic, traditional world voyage experience.",
              },
              {
                line: "Azamara Cruises",
                price: "$35,000 to $80,000+",
                desc: "Destination-focused itineraries with strong inclusion positioning.",
              },
            ].map((item, i) => (
              <div key={i} className="wcc-comp-card-v3">
                <div className="wcc-comp-card-body">
                  <h3 className="wcc-comp-line-name">{item.line}</h3>
                  <div className="wcc-comp-price-tag">
                    <span className="wcc-comp-from">Typical Investment</span>
                    <strong className="wcc-comp-value">{item.price}</strong>
                  </div>
                  <p className="wcc-comp-desc">{item.desc}</p>
                </div>
                <div className="wcc-comp-card-footer">
                  <div className="wcc-comp-dot" />
                  <span className="wcc-comp-note">Per Person</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BIGGEST PRICING MISTAKE — V3 ADVISORY */}
      <section className="wcc-section wcc-mistake-v3">
        <div className="wcc-container wcc-mistake-inner-v3">
          <div className="wcc-mistake-grid-v3">
            {/* Left: The Warning Header */}
            <div className="wcc-mistake-content-v3">
              <div className="wcc-advisory-badge">Critical Advisory</div>
              <h2 className="wcc-h2 wcc-mistake-h2-v3">
                The Biggest Pricing <br />
                Mistake Travelers Make
              </h2>
                <div className="wcc-intro-rule" />
              <div className="wcc-mistake-point-v3">
                <span className="wcc-mistake-accent-line" />
                <p>Comparing base fares instead of total cost.</p>
              </div>
              <p className="wcc-mistake-sub-v3">
                This is the single most expensive error in luxury travel
                planning.
              </p>
            </div>

            {/* Right: The Hidden Costs Dashboard */}
            <div className="wcc-mistake-card-v3">
              <h3 className="wcc-mistake-h3-v3">
                A lower entry price often <strong>doubles</strong> once you add:
              </h3>
              <div className="wcc-mistake-tags-v3">
                {[
                  { text: "Airfare", icon: <Plane size={18} /> },
                  { text: "Excursions", icon: <Globe size={18} /> },
                  { text: "Dining Upgrades", icon: <Hotel size={18} /> },
                  { text: "Gratuities", icon: <DollarSign size={18} /> },
                  { text: "Wi-Fi Access", icon: <Globe size={18} /> },
                  { text: "Private Transfers", icon: <Ship size={18} /> },
                ].map((item, i) => (
                  <div key={i} className="wcc-mistake-tag-v3">
                    <span className="wcc-tag-icon-v3">{item.icon}</span>
                    <span className="wcc-tag-text-v3">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="wcc-mistake-verdict-v3">
                <CheckCircle2 size={16} />
                <span>Calculate the 'All-In' cost before booking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSION COMPARISON (v32) */}
      <section className="wcc-section wcc-inclusion-v32">
        <div className="wcc-container wcc-v32-inner">
          <div className="wcc-v32-header">
            <h2 className="wcc-h2 wcc-v32-h2">
              What Is Included vs What Is Not
            </h2>
            <div className="wcc-why-rule" />
          </div>

          <div className="wcc-v32-split">
            <div className="wcc-v32-panel wcc-v32-inclusive">
              <div className="wcc-v32-panel-content">
                <div className="wcc-v32-icon">
                  <Ship size={40} />
                </div>
                <h3 className="wcc-v32-title">Fully Inclusive Products</h3>
                <p className="wcc-v32-desc">
                  Air, excursions, dining, beverages, gratuities often included
                </p>
              </div>
            </div>
            <div className="wcc-v32-panel wcc-v32-entry">
              <div className="wcc-v32-panel-content">
                <div className="wcc-v32-icon">
                  <Globe size={40} />
                </div>
                <h3 className="wcc-v32-title">Lower Entry Products</h3>
                <p className="wcc-v32-desc">More à la carte pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGETING (v42 - MODERN EDITORIAL) */}
      <section className="wcc-section wcc-budgeting-v42">
        <div className="wcc-container wcc-v42-inner">
          <div className="wcc-v42-grid">
            {/* LEFT: TITLE & BUFFER */}
            <div className="wcc-v42-content">
              <h2 className="wcc-h2 wcc-v42-h2">
                What You Still Need to Budget
              </h2>
                <div className="wcc-intro-rule" />
              <div className="wcc-v42-buffer-strip">
                <span className="wcc-v42-buffer-label">Typical buffer</span>
                <span className="wcc-v42-buffer-value">10% to 25%</span>
              </div>
            </div>

            {/* RIGHT: CHIPS/PILLS */}
            <div className="wcc-v42-list">
              {[
                "Insurance",
                "Pre and post cruise hotels",
                "Premium excursions",
                "Shopping",
                "Upgraded airfare",
              ].map((item, i) => (
                <div key={i} className="wcc-v42-chip">
                  <div className="wcc-v42-chip-dot" />
                  <span className="wcc-v42-chip-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COST SCENARIOS (v46 - SLICK DASHBOARD) */}
      <section className="wcc-section wcc-scenarios-v46">
        <div className="wcc-container wcc-v46-inner">
          <div className="wcc-v46-header">
            <span className="wcc-v46-badge">Investment Tiers</span>
            <h2 className="wcc-h2 wcc-v46-h2">Sample Cost Scenarios</h2>
            <div className="wcc-why-rule" />
            <p className="wcc-v46-subtitle">
              Comparing entry-level premium vs. fully inclusive ultra-luxury
              suites
            </p>
          </div>

          <div className="wcc-v46-grid">
            {[
              {
                tier: "Premium Entry",
                base: "$29,000",
                range: "$40,000 – $50,000",
                theme: "light",
                icon: <Ship size={24} />,
                detail: "High-end mainstream & entry premium",
              },
              {
                tier: "Luxury Inclusive",
                base: "$78,000",
                range: "$85,000 – $100,000",
                theme: "soft",
                icon: <Globe size={24} />,
                detail: "Upper premium & mid-luxury lines",
              },
              {
                tier: "Ultra Luxury",
                base: "$180,000",
                range: "$200,000+",
                theme: "dark",
                icon: <DollarSign size={24} />,
                detail: "Top-tier suites & pinnacle brands",
              },
            ].map((item, i) => (
              <div key={i} className={`wcc-v46-card wcc-v46-${item.theme}`}>
                <div className="wcc-v46-card-header">
                  <div className="wcc-v46-tier-info">
                    <h3 className="wcc-v46-tier-title">{item.tier}</h3>
                    <p className="wcc-v46-tier-detail">{item.detail}</p>
                  </div>
                </div>

                <div className="wcc-v46-flow">
                  <div className="wcc-v46-price-point">
                    <span className="wcc-v46-price-label">Starting Base</span>
                    <span className="wcc-v46-price-value">{item.base}</span>
                  </div>
                  <div className="wcc-v46-price-arrow">
                    <div className="wcc-v46-arrow-line" />
                    <TrendingUp size={16} className="wcc-v46-arrow-icon" />
                  </div>
                  <div className="wcc-v46-price-point">
                    <span className="wcc-v46-price-label">
                      Real-World Estimate
                    </span>
                    <span className="wcc-v46-price-value wcc-v46-final">
                      {item.range}
                    </span>
                  </div>
                </div>

                <div className="wcc-v46-card-footer">
                  <span className="wcc-v46-footer-text">
                    Includes typical air, shore excursions, and amenities
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT COUNSEL & MARKET DYNAMICS */}
      <section className="wcc-section wcc-counsel-v2">
        <div className="wcc-container">
          <div className="wcc-counsel-grid-v2">
            {/* Angela's Signature Message */}
            <div className="wcc-expert-msg-v3">
              <div className="wcc-expert-header-v3">
                <div className="wcc-expert-badge-v3">Expert Counsel</div>
                <h2 className="wcc-expert-title-v3">
                  What I Tell My Clients About World Cruise Pricing
                </h2>
                  <div className="wcc-intro-rule" />
              </div>

              <div className="wcc-quote-frame-v3">
                <div className="wcc-quote-icon-v3">“</div>
                <blockquote className="wcc-quote-text-v3">
                  Most clients come in focused on the number. But the number is
                  not the decision. The decision is how you want to live for
                  three to five months.
                </blockquote>
              </div>

              <div className="wcc-expert-insight-v3">
                <div className="wcc-insight-accent" />
                <p className="wcc-insight-p">
                  I have seen clients spend $80,000 and feel like they
                  compromised. I have seen clients spend $120,000 and feel like
                  it was the best investment they ever made.
                </p>
              </div>

              <div className="wcc-expert-verdict-v3">
                <div className="wcc-verdict-tag">The Bottom Line</div>
                <p className="wcc-verdict-text">
                  The difference is not the price. It is{" "}
                  <strong>alignment</strong>.
                </p>
              </div>
            </div>

            {/* Market Dynamics / Market Pulse */}
            <div className="wcc-market-pulse">
              <div className="wcc-pulse-header">
                <h3 className="wcc-pulse-title">Inventory Market Pulse</h3>
                <p className="wcc-pulse-subtitle">
                  How timing directly impacts your total investment
                </p>
              </div>
              <div className="wcc-pulse-timeline">
                {[
                  {
                    title: "Repeat Guests Book First",
                    desc: "Loyalty members get first access, often 12-24 months out.",
                    icon: <Ship size={20} />,
                  },
                  {
                    title: "Best Suites Sell Quickly",
                    desc: "Penthouse and balcony inventory vanishes within weeks of launch.",
                    icon: <Globe size={20} />,
                  },
                  {
                    title: "Promotions Shift Pricing",
                    desc: "Early booking perks transition to standard rates over time.",
                    icon: <CalendarCheck size={20} />,
                  },
                  {
                    title: "Waiting Reduces Options",
                    desc: "Late bookings often face guarantees or obstructed views.",
                    icon: <TrendingDown size={20} />,
                  },
                ].map((step, i) => (
                  <div key={i} className="wcc-pulse-item">
                    <div className="wcc-pulse-node">
                      <div className="wcc-pulse-icon-box">{step.icon}</div>
                      {i < 3 && <div className="wcc-pulse-line" />}
                    </div>
                    <div className="wcc-pulse-content">
                      <h4 className="wcc-pulse-item-title">{step.title}</h4>
                      <p className="wcc-pulse-item-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVANTAGE — V3 COMPARISON */}
      <section className="wcc-section wcc-strategy-v3">
        <div className="wcc-container wcc-strat-inner-v3">
          <div className="wcc-strat-header-v3">
            <span className="wcc-strat-badge-v3">The Strategic Choice</span>
            <h2 className="wcc-h2 wcc-strat-h2-v3">
              Booking Direct vs. Working With Us
            </h2>
            <div className="wcc-why-rule" />
            <p className="wcc-strat-lead-v3">
              There is a profound difference between securing a cabin and
              architecting a global legacy voyage.
            </p>
          </div>

          <div className="wcc-vs-dashboard-v3">
            {/* Direct Path */}
            <div className="wcc-vs-card-v3 wcc-vs-direct-path">
              <div className="wcc-vs-card-header">
                <div className="wcc-vs-card-icon direct-icon">
                  <XCircle size={24} />
                </div>
                <h3 className="wcc-vs-card-title">Booking Direct</h3>
              </div>
              <ul className="wcc-vs-feature-list">
                <li>
                  <span className="list-marker" />
                  No long-term strategy or sequencing
                </li>
                <li>
                  <span className="list-marker" />
                  Standard public inventory access
                </li>
                <li>
                  <span className="list-marker" />
                  Limited, reactive guest support
                </li>
                <li>
                  <span className="list-marker" />
                  Independent logistics management
                </li>
              </ul>
              <div className="wcc-vs-status-v3 direct-status">
                Transactional Path
              </div>
            </div>

            {/* The Bridge/VS */}
            <div className="wcc-vs-bridge-v3">
              <div className="wcc-bridge-line" />
              <div className="wcc-bridge-orb">
                <span>VS</span>
              </div>
              <div className="wcc-bridge-line" />
            </div>

            {/* Managed Path */}
            <div className="wcc-vs-card-v3 wcc-vs-managed-path">
              <div className="wcc-vs-card-header">
                <div className="wcc-vs-card-icon managed-icon">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="wcc-vs-card-title">
                  Trips & Ships Luxury Travel
                </h3>
              </div>
              <ul className="wcc-vs-feature-list">
                <li>
                  <span className="list-marker" />
                  Guided multi-voyage planning strategy
                </li>
                <li>
                  <span className="list-marker" />
                  Priority access to exclusive inventory
                </li>
                <li>
                  <span className="list-marker" />
                  24/7 proactive global concierge oversight
                </li>
                <li>
                  <span className="list-marker" />
                  White-glove logistical orchestration
                </li>
              </ul>
              <div className="wcc-vs-status-v3 managed-status">
                Strategic Advantage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE ROI OF A WORLD CRUISE — V3 DASHBOARD */}
      <section className="wcc-section wcc-roi-v3">
        <div className="wcc-container wcc-roi-inner-v3">
          <div className="wcc-roi-content-v3">
            <h2 className="wcc-h2 wcc-roi-h2-v3">The ROI of a World Cruise</h2>
            <div className="wcc-why-rule" />
            <p className="wcc-roi-p-v3">
              Replicating this independently requires significant logistical
              investment. Our architecture maximizes your return on life.
            </p>

            <div className="wcc-roi-grid-v3">
              {[
                { text: "Seamless Flight Logic", icon: <Plane size={24} /> },
                { text: "Elite Hotel Sequencing", icon: <Hotel size={24} /> },
                { text: "Private Global Transfers", icon: <Bus size={24} /> },
                { text: "Continuous Planning", icon: <Calendar size={24} /> },
              ].map((item, i) => (
                <div key={i} className="wcc-roi-card-v3">
                  <div className="wcc-roi-icon-box-v3">{item.icon}</div>
                  <span className="wcc-roi-label-v3">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="wcc-roi-verdict-v3">
              <CheckCircle2 size={24} />
              <p>
                A world cruise simplifies everything into{" "}
                <strong>one structured experience</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY OF EXCELLENCE (BIO) */}
      <section className="wcc-section wcc-legacy-v2">
        <div className="wcc-container">
          <div className="wcc-legacy-grid-v2">
            {/* Image Column */}
            <div className="wcc-legacy-media">
              <div className="wcc-legacy-frame-deco" />
              <div className="wcc-legacy-photo-wrap">
                <img
                  src={myimage}
                  alt="Angela Hughes"
                  className="wcc-legacy-img"
                />
              </div>
              <div className="wcc-legacy-caption-v2">
                <div className="wcc-caption-accent" />
                <p>
                  Angela Hughes onboard during a Crystal Cruise world cruise
                  segment
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="wcc-legacy-info">
              <div className="wcc-legacy-header">
                <span className="wcc-legacy-pre">Legacy of Excellence</span>
                <h2 className="wcc-legacy-name">About Angela Hughes</h2>
                <div className="wcc-legacy-h2-underline" />
              </div>

              <p className="wcc-legacy-bio">
                Angela Hughes is the CEO of Trips & Ships Luxury Travel and
                founder of Luxury Travel University. She has spent over four
                decades in the travel industry and is recognized globally for
                her expertise in luxury travel and cruise strategy.
              </p>

              <div className="wcc-legacy-milestones">
                <h3 className="wcc-milestone-title">Professional Milestones</h3>
                <div className="wcc-milestone-list">
                  {[
                    "Travel Leaders Network Advisory Board Member",
                    "2024 Luxury Travel Influencer of the Year",
                    "2026 TravelPulse Women of Influence in Travel",
                    "Featured in Travel Weekly, TravelPulse, Insider Travel Report",
                    "Specializes in high-investment world cruise decisions",
                  ].map((milestone, i) => (
                    <div key={i} className="wcc-milestone-row">
                      <div className="wcc-milestone-check">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="wcc-milestone-text">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wcc-legacy-footer">
                <div className="wcc-legacy-stats-grid">
                  <div className="wcc-stat-card">
                    <span className="wcc-stat-num">40+</span>
                    <span className="wcc-stat-label">Years Experience</span>
                    <div className="wcc-stat-glow" />
                  </div>
                  <div className="wcc-stat-card">
                    <span className="wcc-stat-num">140+</span>
                    <span className="wcc-stat-label">Global Advisors</span>
                    <div className="wcc-stat-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY FOCUS & CONSULTATION CTA */}
      <section className="wcc-section wcc-agency-focus-v3">
        <div className="wcc-container">
          <div className="wcc-agency-dashboard">
            <div className="wcc-agency-intro-box">
              <div className="wcc-agency-badge">The Agency</div>
              <h2 className="wcc-h2 wcc-agency-v3-h2">
                About Trips & Ships <br />
                <span>Luxury Travel</span>
              </h2>
                <div className="wcc-intro-rule" />
              <p className="wcc-agency-v3-p">
                Trips & Ships Luxury Travel is a premier luxury agency with over
                140 advisors worldwide, dedicated to architecting unparalleled
                global journeys.
              </p>
            </div>

            <div className="wcc-agency-perks-v3">
              <div className="wcc-perk-v3-card">
                <div className="wcc-perk-v3-card-bg" />
                <div className="wcc-perk-v3-content">
                  <div className="wcc-perk-v3-icon">
                    <Ship size={24} />
                  </div>
                  <h3>The agency specializes in:</h3>
                  <ul className="wcc-perk-v3-list">
                    <li>Luxury cruise planning</li>
                    <li>Global itineraries</li>
                    <li>Multi-generational travel</li>
                  </ul>
                </div>
              </div>

              <div className="wcc-perk-v3-card">
                <div className="wcc-perk-v3-card-bg" />
                <div className="wcc-perk-v3-content">
                  <div className="wcc-perk-v3-icon">
                    <Globe size={24} />
                  </div>
                  <h3>Exclusive Network Access:</h3>
                  <p className="wcc-perk-v3-subtext">
                    As part of Travel Leaders Network, we provide:
                  </p>
                  <ul className="wcc-perk-v3-list">
                    <li>Preferred inventory</li>
                    <li>Exclusive amenities</li>
                    <li>Global supplier relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="wcc-consult-cta-v3">
            <div className="wcc-consult-mesh" />
            <div className="wcc-consult-v3-content">
              <span className="wcc-consult-label">Private Consultation</span>
              <h2 className="wcc-h2 wcc-consult-v3-h2">
                Work With Angela Hughes
              </h2>
              <p className="wcc-consult-v3-p">
                We help clients understand real cost, compare options, and make
                the right decision for their legacy voyage.
              </p>
            </div>
            <div className="wcc-consult-v3-action">
              <button className="wcc-button wcc-consult-v3-btn">
                Schedule a Consultation
              </button>
              <span className="wcc-btn-note">
                Complimentary initial discovery call
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="wcc-section wcc-faq">
        <div className="wcc-container wcc-faq-inner">
          <div className="wcc-faq-header">
            <h2 className="wcc-h2 wcc-faq-h2">World Cruise Cost FAQs</h2>
            <div className="wcc-why-rule" />
          </div>
          <LTJapanFAQ items={faqItems} />
        </div>
      </section>
    </div>
  );
}
