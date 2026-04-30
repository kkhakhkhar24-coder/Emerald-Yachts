import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import { Globe, CalendarCheck, DollarSign, Ship } from "lucide-react";
import "./WorldCruiseCost.css";

import heroImage1 from "../../assets/AzamaraCabinsAlaskaGuide/Hero1.webp";
import heroImage2 from "../../assets/AzamaraCabinsAlaskaGuide/Hero2.webp";
import heroImage3 from "../../assets/AzamaraCabinsAlaskaGuide/Hero3.webp";
import profileImg from "../../assets/image.jpg";

export default function WorldCruiseCost() {
    const [currentHero, setCurrentHero] = useState(0);

    const heroImages = [heroImage1, heroImage2, heroImage3];

    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000);
        return () => clearInterval(t);
    }, [heroImages.length]);

    return (
        <div className="wcc-root">
            <Helmet>
                <title>How Much Does a World Cruise Cost? The 2027–2029 Pricing Guide</title>
                <meta name="title" content="How Much Does a World Cruise Cost? The 2027–2029 Pricing Guide" />
                <meta name="description" content="Get realistic world cruise pricing for 2027–2029. Expert guidance from Angela Hughes on luxury cruise costs, budgeting, and finding the right voyage." />
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
                        <h1 className="wcc-h1 wcc-h1-hero">
                            World Cruise Cost?
                        </h1>
                        <div className="wcc-hero-accent-rule">
                            <span className="wcc-hero-rule-line" />
                            <span className="wcc-hero-rule-dot" />
                            <span className="wcc-hero-rule-line" />
                        </div>
                        <p className="wcc-hero-subtitle">The 2027–2029 Pricing Guide — Written by a 40-Year Luxury Travel Expert</p>
                    </div>

                    {/* CTA Card — side-by-side layout */}
                    <div className="wcc-hero-cta-card">
                        {/* Left: profile */}
                        <div className="wcc-hero-cta-left">
                            <img src={profileImg} alt="Angela Hughes" className="wcc-hero-profile-img" />
                            <p className="wcc-hero-cta-label">Plan Your World Cruise Budget with</p>
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
                            <a href="#schedule" className="wcc-hero-cta-btn" id="hero-schedule-btn">
                                Schedule Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT A WORLD CRUISE REALLY COSTS */}
            <section className="wcc-section wcc-intro">
                <div className="wcc-container wcc-intro-inner">

                    {/* Left: heading + pull quote */}
                    <div className="wcc-intro-left">
                        <div className="wcc-intro-label">Understanding the Cost</div>
                        <h2 className="wcc-h2 wcc-intro-h2">What a World Cruise Really Costs</h2>
                        <div className="wcc-intro-rule" />
                        <div className="wcc-intro-pull">
                            <span className="wcc-intro-quote-mark">"</span>
                            <p className="wcc-intro-pull-text">The first question is always the same.</p>
                        </div>
                    </div>

                    {/* Right: body paragraphs */}
                    <div className="wcc-intro-right">
                        <p className="wcc-p wcc-intro-question">How much does a world cruise cost?</p>
                        <p className="wcc-p wcc-intro-body">
                            The honest answer is that it depends on the cruise line, the level of inclusion, and how you want to live for three to six months.
                        </p>
                        <div className="wcc-intro-divider" />
                        <p className="wcc-p wcc-intro-body">Because this is not just a trip.</p>
                        <p className="wcc-p wcc-intro-emphasis">It is your life for a quarter of a year.</p>
                    </div>
                </div>
            </section>

            {/* WHY THIS GUIDE IS DIFFERENT */}
            <section className="wcc-section wcc-why">
                <div className="wcc-container wcc-why-inner">

                    {/* Top header */}
                    <div className="wcc-why-header">
                        <div className="wcc-why-label">About This Guide</div>
                        <h2 className="wcc-h2 wcc-why-h2">Why This World Cruise Cost Guide Is Different</h2>
                        <div className="wcc-why-rule" />
                        <p className="wcc-p wcc-why-lead">This is not a generic pricing article.</p>
                    </div>

                    {/* Body grid: bio left, credentials right */}
                    <div className="wcc-why-body">
                        <div className="wcc-why-bio">
                            <p className="wcc-p wcc-why-bio-text">
                                I have spent over 40 years in the travel industry and have personally traveled on multiple world cruise segments across different cruise lines.
                            </p>
                            <p className="wcc-p wcc-why-bio-text">
                                I have worked directly with cruise line executives, reviewed pricing structures across operators, and guided clients through six-figure travel decisions.
                            </p>
                            <p className="wcc-p wcc-why-basis-label">This guide is based on:</p>
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
            <section className="wcc-section wcc-pricing">
                <div className="wcc-container wcc-pricing-inner">

                    <div className="wcc-pricing-header">
                        <h2 className="wcc-h2 wcc-pricing-h2">Typical World Cruise Price Ranges</h2>
                        <div className="wcc-pricing-rule" />
                    </div>

                    <div className="wcc-pricing-rows">
                        {[
                            { tier: "Mainstream Entry", price: "$18,000 – $40,000", suffix: "per person", bar: 20 },
                            { tier: "Premium", price: "$25,000 – $65,000", suffix: "per person", bar: 42 },
                            { tier: "Luxury", price: "$60,000 – $150,000", suffix: "per person", bar: 68 },
                            { tier: "Ultra Luxury Suites", price: "$150,000 – $500,000+", suffix: "", bar: 100 },
                        ].map((item, i) => (
                            <div className={`wcc-pricing-row ${i === 3 ? "wcc-pricing-row--ultra" : ""}`} key={i}>
                                <span className="wcc-pricing-row-num">0{i + 1}</span>
                                <div className="wcc-pricing-row-left">
                                    <span className="wcc-pricing-row-tier">{item.tier}</span>
                                    <div className="wcc-pricing-row-bar-track">
                                        <div className="wcc-pricing-row-bar-fill" style={{ width: `${item.bar}%` }} />
                                    </div>
                                </div>
                                <div className="wcc-pricing-row-right">
                                    <span className="wcc-pricing-row-price">{item.price}</span>
                                    {item.suffix && <span className="wcc-pricing-row-suffix">{item.suffix}</span>}
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
                            <h2 className="wcc-h2 wcc-value-h2">Why a $100,000 World Cruise Is Not What It Sounds Like</h2>

                            <div className="wcc-cost-breakdown">
                                <p className="wcc-cost-context">A $120,000 world cruise over 120 days is about:</p>
                                <div className="wcc-cost-calculation">
                                    <div className="wcc-cost-amount">
                                        <span className="wcc-currency">$</span>
                                        <span className="wcc-number">1,000</span>
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
                                <p className="wcc-reality-text">In many destinations, a luxury hotel alone can cost that per night.</p>
                            </div>

                            {/* Verdict */}
                            <div className="wcc-verdict-card">
                                <p>This is why world cruises are not just luxury.</p>
                                <p className="wcc-verdict-highlight">They are <strong>structured efficiency</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU ARE ACTUALLY PAYING FOR EACH DAY */}
            <section className="wcc-section wcc-breakdown-v22">
                <div className="wcc-container wcc-v22-inner">
                    <div className="wcc-v22-header">
                        <h2 className="wcc-h2 wcc-v22-h2">What You Are Actually <br /><span>Paying For Each Day</span></h2>
                        <p className="wcc-v22-p">A transparent look at the value included in your daily world cruise investment.</p>
                    </div>

                    <div className="wcc-v22-grid">
                        {[
                            { cat: "Accommodation", val: "Luxury suite or stateroom", icon: <Ship size={40} /> },
                            { cat: "Dining", val: "Multiple restaurants", icon: <CalendarCheck size={40} /> },
                            { cat: "Transportation", val: "Global travel", icon: <Globe size={40} /> },
                            { cat: "Experiences", val: "Shore excursions", icon: <Ship size={40} /> },
                            { cat: "Service", val: "Full onboard staff", icon: <CalendarCheck size={40} /> }
                        ].map((item, i) => (
                            <div key={i} className="wcc-v22-card">
                                <div className="wcc-v22-accent" />
                                <div className="wcc-v22-content">
                                    <div className="wcc-v22-icon">{item.icon}</div>
                                    <div className="wcc-v22-text">
                                        <span className="wcc-v22-cat">{item.cat}</span>
                                        <h3 className="wcc-v22-val">{item.val}</h3>
                                    </div>
                                </div>
                                <div className="wcc-v22-number">0{i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REAL COST COMPARISON BY CRUISE LINE */}
            <section className="wcc-section wcc-comparison-v24">
                <div className="wcc-container wcc-v24-inner">
                    <div className="wcc-v24-header">
                        <h2 className="wcc-h2 wcc-v24-h2">Real Cost Comparison by Cruise Line</h2>
                        <div className="wcc-v24-rule" />
                    </div>

                    <div className="wcc-v24-grid">
                        {[
                            { line: "Regent Seven Seas Cruises", price: "Typically $70,000 to $150,000+", desc: "Fully inclusive. Higher upfront, fewer surprises.", icon: <Ship size={24} /> },
                            { line: "Silversea Cruises", price: "Typically $65,000 to $140,000+", desc: "Luxury with more exploratory itineraries.", icon: <Globe size={24} /> },
                            { line: "Viking Ocean Cruises", price: "Typically $50,000 to $90,000+", desc: "Strong value positioning with packaged inclusions.", icon: <DollarSign size={24} /> },
                            { line: "Cunard Line", price: "Typically $25,000 to $75,000+", desc: "Classic, traditional world voyage experience.", icon: <Ship size={24} /> },
                            { line: "Azamara Cruises", price: "Typically $35,000 to $80,000+", desc: "Destination-focused itineraries with strong inclusion positioning.", icon: <CalendarCheck size={24} /> }
                        ].map((item, i) => (
                            <div key={i} className="wcc-v24-card">
                                <div className="wcc-v24-card-top">
                                    <div className="wcc-v24-icon-box">{item.icon}</div>
                                    <h3 className="wcc-v24-line-title">{item.line}</h3>
                                </div>
                                <div className="wcc-v24-price-box">
                                    <span className="wcc-v24-label">Typical Investment</span>
                                    <p className="wcc-v24-price-text">{item.price}</p>
                                </div>
                                <p className="wcc-v24-desc">{item.desc}</p>
                                <div className="wcc-v24-card-footer">
                                    <div className="wcc-v24-footer-line" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE BIGGEST PRICING MISTAKE */}
            <section className="wcc-section wcc-mistake-v26">
                <div className="wcc-container wcc-v26-inner">
                    <div className="wcc-v26-grid">
                        {/* LEFT: THE WARNING */}
                        <div className="wcc-v26-mistake-card">
                            <h2 className="wcc-h2 wcc-v26-h2">The Biggest Pricing <br />Mistake Travelers Make</h2>
                            <p className="wcc-v26-main-point">Comparing base fares instead of total cost.</p>
                            <p className="wcc-v26-verdict">This is where most travelers get it wrong.</p>
                        </div>

                        {/* RIGHT: THE HIDDEN COSTS */}
                        <div className="wcc-v26-details-card">
                            <h3 className="wcc-v26-h3">A lower priced cruise often becomes more expensive once you add:</h3>
                            <div className="wcc-v26-list-grid">
                                {[
                                    { text: "Airfare", icon: <Ship size={20} /> },
                                    { text: "Excursions", icon: <Globe size={20} /> },
                                    { text: "Dining upgrades", icon: <CalendarCheck size={20} /> },
                                    { text: "Gratuities", icon: <DollarSign size={20} /> },
                                    { text: "Wi-Fi", icon: <Globe size={20} /> },
                                    { text: "Transfers", icon: <Ship size={20} /> }
                                ].map((item, i) => (
                                    <div key={i} className="wcc-v26-list-item">
                                        <div className="wcc-v26-list-icon">{item.icon}</div>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INCLUSION COMPARISON (v32) */}
            <section className="wcc-section wcc-inclusion-v32">
                <div className="wcc-container wcc-v32-inner">
                    <div className="wcc-v32-header">
                        <h2 className="wcc-h2 wcc-v32-h2">What Is Included vs What Is Not</h2>
                    </div>

                    <div className="wcc-v32-split">
                        <div className="wcc-v32-panel wcc-v32-inclusive">
                            <div className="wcc-v32-panel-content">
                                <div className="wcc-v32-icon"><Ship size={40} /></div>
                                <h3 className="wcc-v32-title">Fully Inclusive Products</h3>
                                <p className="wcc-v32-desc">Air, excursions, dining, beverages, gratuities often included</p>
                            </div>
                        </div>
                        <div className="wcc-v32-panel wcc-v32-entry">
                            <div className="wcc-v32-panel-content">
                                <div className="wcc-v32-icon"><Globe size={40} /></div>
                                <h3 className="wcc-v32-title">Lower Entry Products</h3>
                                <p className="wcc-v32-desc">More à la carte pricing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUDGETING & SCENARIOS */}
            <section className="wcc-section wcc-budgeting">
                <div className="wcc-container wcc-budgeting-inner">
                    <div className="wcc-budgeting-grid">
                        <div className="wcc-still-budget">
                            <h2 className="wcc-h2 wcc-budget-h2">What You Still Need to Budget</h2>
                            <div className="wcc-budget-checklist">
                                {[
                                    { item: "Insurance", desc: "Critical for 3-6 month journeys" },
                                    { item: "Pre & Post Cruise Hotels", desc: "Luxury arrival programs" },
                                    { item: "Premium Excursions", desc: "Private tours and overland events" },
                                    { item: "Shopping & Personal", desc: "Onboard boutiques & local treasures" },
                                    { item: "Upgraded Airfare", desc: "Ensuring comfort across continents" }
                                ].map((obj, i) => (
                                    <div key={i} className="wcc-budget-item">
                                        <div className="wcc-budget-dot" />
                                        <div className="wcc-budget-text">
                                            <strong>{obj.item}</strong>
                                            <span>{obj.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="wcc-budget-buffer">
                                <div className="wcc-buffer-label">Typical Buffer</div>
                                <div className="wcc-buffer-value">10% to 25%</div>
                            </div>
                        </div>

                        <div className="wcc-scenarios">
                            <h2 className="wcc-h2 wcc-scenario-h2">Sample Cost Scenarios</h2>
                            <div className="wcc-scenario-list">
                                {[
                                    { tier: "Premium Entry", base: "$29,000", total: "$40,000 – $50,000", pct: 70 },
                                    { tier: "Luxury Inclusive", base: "$78,000", total: "$85,000 – $100,000", pct: 85 },
                                    { tier: "Ultra Luxury", base: "$180,000", total: "$200,000+", pct: 100 }
                                ].map((item, i) => (
                                    <div key={i} className="wcc-scenario-card">
                                        <div className="wcc-scenario-header">
                                            <span className="wcc-scenario-tier">{item.tier}</span>
                                            <span className="wcc-scenario-total">{item.total}</span>
                                        </div>
                                        <div className="wcc-scenario-bar-bg">
                                            <div className="wcc-scenario-bar-fill" style={{ width: `${item.pct}%` }} />
                                        </div>
                                        <div className="wcc-scenario-footer">Base Fare: {item.base}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERT COUNSEL & MARKET DYNAMICS */}
            <section className="wcc-section wcc-counsel">
                <div className="wcc-container wcc-counsel-inner">
                    <div className="wcc-counsel-grid">
                        <div className="wcc-angela-message">
                            <h2 className="wcc-h2 wcc-angela-h2">What I Tell My Clients About World Cruise Pricing</h2>
                            <blockquote className="wcc-angela-quote">
                                "Most clients come in focused on the number. But the number is not the decision. The decision is how you want to live for three to five months."
                            </blockquote>
                            <p className="wcc-angela-p">I have seen clients spend $80,000 and feel like they compromised. I have seen clients spend $120,000 and feel like it was the best investment they ever made.</p>
                            <div className="wcc-angela-verdict">The difference is not the price. It is <strong>alignment</strong>.</div>
                        </div>

                        <div className="wcc-market-dynamics">
                            <h2 className="wcc-h2 wcc-market-h2">How Inventory Impacts Price</h2>
                            <div className="wcc-dynamic-timeline">
                                {[
                                    { title: "Repeat guests book first", icon: <Ship size={18} /> },
                                    { title: "Best suites sell quickly", icon: <Globe size={18} /> },
                                    { title: "Promotions shift pricing", icon: <CalendarCheck size={18} /> },
                                    { title: "Waiting reduces options", icon: <Ship size={18} /> }
                                ].map((step, i) => (
                                    <div key={i} className="wcc-dynamic-step">
                                        <div className="wcc-step-icon">{step.icon}</div>
                                        <span className="wcc-step-title">{step.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STRATEGIC ADVANTAGE & ROI */}
            <section className="wcc-section wcc-strategy">
                <div className="wcc-container wcc-strategy-inner">
                    <div className="wcc-strategy-grid">
                        <div className="wcc-comparison-box">
                            <h2 className="wcc-h2 wcc-strategy-h2">Booking Direct vs Working With Us</h2>
                            <div className="wcc-versus-table">
                                <div className="wcc-versus-header">
                                    <span>Booking Direct</span>
                                    <span>With Trips & Ships</span>
                                </div>
                                {[
                                    { direct: "No strategy", us: "Guided decisions" },
                                    { direct: "Limited access", us: "Preferred inventory" },
                                    { direct: "Transactional", us: "Full journey planning" }
                                ].map((row, i) => (
                                    <div key={i} className="wcc-versus-row">
                                        <div className="wcc-versus-direct">{row.direct}</div>
                                        <div className="wcc-versus-divider" />
                                        <div className="wcc-versus-us">{row.us}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="wcc-roi-box">
                            <h2 className="wcc-h2 wcc-roi-h2">The ROI of a World Cruise</h2>
                            <p className="wcc-roi-intro">Replicating this independently requires flights, hotels, transfers, and constant planning.</p>
                            <div className="wcc-roi-summary">A world cruise simplifies everything into <strong>one structured experience</strong>.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEGACY OF EXCELLENCE (BIO) */}
            <section className="wcc-section wcc-legacy">
                <div className="wcc-container wcc-legacy-inner">
                    <div className="wcc-profile-spread">
                        <div className="wcc-profile-image-container">
                            <div className="wcc-profile-photo">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Angela Hughes" />
                                <div className="wcc-photo-caption">Angela Hughes onboard during a luxury world cruise segment</div>
                            </div>
                        </div>
                        <div className="wcc-profile-content">
                            <h2 className="wcc-h2 wcc-profile-h2">About Angela Hughes</h2>
                            <p className="wcc-profile-intro">Angela Hughes is the CEO of Trips & Ships Luxury Travel and founder of Luxury Travel University. She has spent over four decades in the travel industry.</p>
                            <div className="wcc-accolades">
                                {[
                                    "Travel Leaders Network Advisory Board Member",
                                    "2024 Luxury Travel Influencer of the Year",
                                    "2026 TravelPulse Women of Influence in Travel"
                                ].map((accolade, i) => (
                                    <div key={i} className="wcc-accolade-item">
                                        <div className="wcc-accolade-dot" />
                                        <span>{accolade}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="wcc-work-cta">
                        <h2 className="wcc-h2 wcc-work-h2">Work With Angela Hughes</h2>
                        <button className="wcc-button wcc-work-btn">Schedule a Consultation</button>
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <section className="wcc-section wcc-faq">
                <div className="wcc-container wcc-faq-inner">
                    <div className="wcc-faq-header">
                        <h2 className="wcc-h2 wcc-faq-h2">World Cruise Cost FAQs</h2>
                    </div>
                    <div className="wcc-faq-grid">
                        {[
                            { q: "How much does a world cruise cost on average?", a: "Most world cruises fall somewhere between about $25,000 and $150,000 per person." },
                            { q: "What is the cheapest way to do a world cruise?", a: "Lower entry fares often come with more separate costs for air, excursions, and dining." },
                            { q: "Is a luxury world cruise really worth the money?", a: "For the right traveler, yes. It can be one of the most efficient ways to see the world." }
                        ].map((item, i) => (
                            <div key={i} className="wcc-faq-item">
                                <h3 className="wcc-faq-q">{item.q}</h3>
                                <p className="wcc-faq-a">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
