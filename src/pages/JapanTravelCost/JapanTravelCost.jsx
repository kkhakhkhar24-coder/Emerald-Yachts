import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./JapanTravelCost.css";
import { Helmet } from "react-helmet-async";
import heroImage1 from "../../assets/JapanTravelCost/Hero1.webp";
import heroImage2 from "../../assets/JapanTravelCost/Hero2.webp";
import heroImage3 from "../../assets/JapanTravelCost/Hero3.webp";
import JAPAN_ATMOSPHERE from "../../assets/JapanTravelCost/JAPAN_ATMOSPHERE.webp";
import {
    Compass,
    Plus,
    Minus,
    Sparkles,
    CheckCircle2,
    Calendar,
    Hotel,
    TrainFront,
    Users,
    Clock,
    ArrowRight,
    Heart,
    User,
    Crown,
    Building2,
    MapPin,
    Ship,
    Plane,
    Star,
    Bed,
    Utensils,
    Coffee,
    Car,
    TrendingUp,
    AlertTriangle,
    Check,
    UserCheck,
    Award,
    Lightbulb,
    ShieldCheck,
    Timer,
    Landmark
} from "lucide-react";

function JapanTravelCost() {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentHero, setCurrentHero] = useState(0);

    const heroImages = [heroImage1, heroImage2, heroImage3];

    const budgetRef = useRef(null);

    useEffect(() => {
        const animateBars = (container, barSelector) => {
            if (!container) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.querySelectorAll(barSelector).forEach((bar) => {
                                const target = bar.dataset.target || 0;
                                bar.style.width = target + "%";
                            });
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.2 }
            );
            observer.observe(container);
            return () => observer.disconnect();
        };

        const cleanBudget = animateBars(budgetRef.current, ".jtc-budget-bar");

        const heroTimer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => {
            cleanBudget();
            clearInterval(heroTimer);
        };
    }, [heroImages.length]);

    return (
        <>
            <Helmet>
                <title>
                    Japan Travel Cost Guide (2026): How Much Does a Trip Really Cost?
                </title>
                <meta
                    name="description"
                    content="An expert breakdown of Japan travel costs, planning, and luxury vs value."
                />
                {/* Preload first hero image for better performance */}
                <link rel="preload" as="image" href={heroImages[0]} />
            </Helmet>

            <Navbar />

            {/* SECTION 1: HERO */}
            <section className="jtc-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`jtc-hero-bg ${index === currentHero ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="jtc-hero-overlay"></div>

                <div className="jtc-inner jtc-hero-inner">
                    <span className="jtc-eyebrow">
                        <Compass
                            size={14}
                            strokeWidth={2}
                            style={{ marginRight: "8px" }}
                        />
                        Expert Financial Planning Guide
                    </span>

                    <h1 className="jtc-h1">
                        Japan Travel Cost Guide (2026) <br />
                        How Much Does a Trip to Japan Really Cost?
                    </h1>

                    <div className="jtc-hero-lead-box">
                        <p className="jtc-p jtc-hero-lead-text">
                            "Japan is not expensive. It is <strong>unforgiving</strong> if you
                            plan it wrong."
                        </p>
                    </div>

                    <div
                        className={`jtc-hero-details ${showAnswer ? "jtc-expanded" : ""}`}
                    >
                        <div className="jtc-snippet-card">
                            <span className="jtc-snippet-label">The Core Reality</span>
                            <p className="jtc-p jtc-hero-white">
                                Most travelers underestimate the cost of Japan—not because it is
                                always expensive, but because they do not understand how pricing
                                works across seasons, cities, and travel styles.
                            </p>
                            <p className="jtc-p jtc-hero-white jtc-mt-sm">
                                The difference between a $7,000 trip and a $15,000 trip is rarely
                                luxury. <strong>It is planning.</strong>
                            </p>
                        </div>
                    </div>

                    <button
                        className="jtc-hero-toggle"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        {showAnswer ? (
                            <span className="jtc-flex-center">
                                <Minus size={14} style={{ marginRight: "5px" }} /> Hide Quick
                                Answer
                            </span>
                        ) : (
                            <span className="jtc-flex-center">
                                <Plus size={14} style={{ marginRight: "5px" }} /> View Quick
                                Answer
                            </span>
                        )}
                    </button>

                    <div className="jtc-hero-btns">
                        <button className="jtc-btn-primary">
                            Request My Japan Cost Breakdown
                        </button>
                        <p className="jtc-p jtc-hero-subtext">
                            "We help you optimize your budget based on how you actually travel."
                        </p>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: VISUAL ATMOSPHERE */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-media-spread">
                        <div className="jtc-media-img-box">
                            <img
                                src={JAPAN_ATMOSPHERE}
                                alt="Tokyo Skyline at Night"
                                className="jtc-fluid-img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="jtc-media-video-box">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/HsX79uNVz6A"
                                title="Japan Travel Guide"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: BUDGET COMPARISON */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">How Much Does a Trip to Japan Cost?</h2>
                        <div className="jtc-bar"></div>
                    </div>

                    <div className="jtc-3col">
                        <div className="jtc-card jtc-card-outline">
                            <div className="jtc-card-top">
                                <div className="jtc-icon-circle">
                                    <Compass size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="jtc-card-title">Budget Travel</h3>
                            </div>
                            <div className="jtc-price-box">
                                <span className="jtc-price-val">$2,500 – $4,000</span>
                                <span className="jtc-price-sub">Per Person</span>
                            </div>
                            <p className="jtc-p jtc-center">
                                Essential experiences focusing on high-value hotels and efficient
                                regional travel.
                            </p>
                        </div>

                        <div className="jtc-card jtc-card-blue">
                            <div className="jtc-card-top">
                                <div className="jtc-icon-circle">
                                    <Sparkles size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="jtc-card-title">Mid-Range Travel</h3>
                            </div>
                            <div className="jtc-price-box">
                                <span className="jtc-price-val">$5,000 – $8,000</span>
                                <span className="jtc-price-sub">Per Person</span>
                            </div>
                            <p className="jtc-p jtc-center">
                                Superior accommodations, curated local tours, and seamless
                                logistics.
                            </p>
                        </div>

                        <div className="jtc-card jtc-card-outline">
                            <div className="jtc-card-top">
                                <div className="jtc-icon-circle">
                                    <CheckCircle2 size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="jtc-card-title">Luxury Travel</h3>
                            </div>
                            <div className="jtc-price-box">
                                <span className="jtc-price-val">$9,000 – $20,000+</span>
                                <span className="jtc-price-sub">Per Person</span>
                            </div>
                            <p className="jtc-p jtc-center">
                                Ultra-luxury suites, private aircraft/guides, and exclusive
                                cultural access.
                            </p>
                        </div>
                    </div>

                    <div className="jtc-editorial-row">
                        <div className="jtc-editorial-box">
                            <p className="jtc-p" style={{ fontStyle: "italic", margin: 0 }}>
                                Most travelers spend around{" "}
                                <strong>$6,000 to $10,000</strong> per person for a well-planned
                                10 to 14 day trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: QUICK BREAKDOWN */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-sticky-wrap">
                        <aside className="jtc-sticky-side">
                            <div className="jtc-sticky-el">
                                <h2 className="jtc-h2 jtc-lbar">
                                    Japan Travel Cost <br />
                                    (Quick Breakdown)
                                </h2>
                                <p className="jtc-sticky-desc">
                                    Budgeting for Japan is not about fixed prices, but about
                                    variables. Understanding these five pillars is the key to
                                    controlling your spend.
                                </p>
                            </div>
                        </aside>

                        <main className="jtc-main-col">
                            <h3 className="jtc-h3-alt">The cost of a Japan trip depends on:</h3>
                            <ul className="jtc-check-list">
                                <li>
                                    <div className="jtc-icon-box">
                                        <Calendar size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="jtc-p">Timing and seasonality</span>
                                </li>
                                <li>
                                    <div className="jtc-icon-box">
                                        <Hotel size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="jtc-p">Hotel selection and availability</span>
                                </li>
                                <li>
                                    <div className="jtc-icon-box">
                                        <TrainFront size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="jtc-p">Transportation strategy</span>
                                </li>
                                <li>
                                    <div className="jtc-icon-box">
                                        <Users size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="jtc-p">Private guides and experiences</span>
                                </li>
                                <li>
                                    <div className="jtc-icon-box">
                                        <Clock size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="jtc-p">How far in advance you plan</span>
                                </li>
                            </ul>

                            <div className="jtc-insight-card">
                                <p className="jtc-p">
                                    Timing alone can change your total trip cost by thousands. If
                                    you have not read it yet, our{" "}
                                    <strong>best time to visit Japan guide</strong> explains
                                    exactly how season impacts pricing.
                                </p>
                                <ArrowRight className="jtc-arrow-icon" size={20} />
                            </div>
                        </main>
                    </div>
                </div>
            </section>

            {/* SECTION 4: COST BY TRAVELER TYPE */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Japan Travel Cost by Traveler Type</h2>
                        <div className="jtc-bar"></div>
                    </div>

                    <div className="jtc-traveler-grid">
                        {/* Couples */}
                        <div className="jtc-traveler-card">
                            <Heart size={32} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3">Couples</h3>
                            <p className="jtc-p jtc-mb-sm">Total for a 10 to 12 day trip</p>
                            <p className="jtc-price-tag">$10,000 to $18,000</p>
                        </div>

                        {/* Families */}
                        <div className="jtc-traveler-card">
                            <Users size={32} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3">Families (4 people)</h3>
                            <p className="jtc-p jtc-mb-sm">Depending on room configuration</p>
                            <p className="jtc-price-tag">$15,000 to $30,000</p>
                        </div>

                        {/* Solo */}
                        <div className="jtc-traveler-card">
                            <User size={32} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3">Solo travelers</h3>
                            <p className="jtc-p jtc-mb-sm">Depending on comfort level</p>
                            <p className="jtc-price-tag">$4,000 to $9,000</p>
                        </div>

                        {/* Luxury */}
                        <div className="jtc-traveler-card jtc-card-navy">
                            <Crown size={32} className="jtc-white jtc-mb-md" />
                            <h3 className="jtc-h3 jtc-white">Luxury travelers</h3>
                            <p className="jtc-p jtc-white jtc-mb-sm">Per person</p>
                            <p className="jtc-price-tag jtc-white">$15,000 to $30,000+</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: COST BY ITINERARY STYLE */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Japan Trip Cost by Itinerary Style</h2>
                        <div className="jtc-bar"></div>
                    </div>

                    <div className="jtc-itin-split-layout jtc-mt-lg">
                        {/* LEFT SIDE: VIDEO */}
                        <div className="jtc-itin-split-video">
                            <div className="jtc-video-wrapper">
                                <div className="jtc-video-tag">Expert Video Guide</div>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/GJ0jP3NbNs4"
                                    title="10-Day Japan Itinerary"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="jtc-split-video-caption">
                                <p className="jtc-p jtc-italic">"A well-structured itinerary is the backbone of a successful Japan trip. Watch our masterclass on route optimization."</p>
                            </div>
                        </div>

                        {/* RIGHT SIDE: CONTENT */}
                        <div className="jtc-itin-split-content">
                            <div className="jtc-itin-vertical-list">
                                {/* City-focused */}
                                <div className="jtc-itin-row-card">
                                    <div className="jtc-itin-row-icon">
                                        <Building2 size={20} />
                                    </div>
                                    <div className="jtc-itin-row-info">
                                        <h3 className="jtc-h3">City-focused</h3>
                                        <p className="jtc-p jtc-fs-sm">Tokyo and Kyoto focus</p>
                                    </div>
                                    <div className="jtc-itin-row-price">
                                        <span className="jtc-price">$5,000 – $8,000</span>
                                    </div>
                                </div>

                                {/* Multi-region */}
                                <div className="jtc-itin-row-card">
                                    <div className="jtc-itin-row-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="jtc-itin-row-info">
                                        <h3 className="jtc-h3">Multi-region</h3>
                                        <p className="jtc-p jtc-fs-sm">Tokyo, Kyoto, Osaka, Hakone</p>
                                    </div>
                                    <div className="jtc-itin-row-price">
                                        <span className="jtc-price">$6,500 – $12,000</span>
                                    </div>
                                </div>

                                {/* Luxury curated */}
                                <div className="jtc-itin-row-card jtc-row-navy">
                                    <div className="jtc-itin-row-icon jtc-gold">
                                        <Crown size={20} />
                                    </div>
                                    <div className="jtc-itin-row-info">
                                        <h3 className="jtc-h3 jtc-white">Luxury Curated</h3>
                                        <p className="jtc-p jtc-white jtc-fs-sm">Exclusive Cultural Access</p>
                                    </div>
                                    <div className="jtc-itin-row-price">
                                        <span className="jtc-price jtc-white">$12,000 – $25,000+</span>
                                    </div>
                                </div>

                                {/* Cruise */}
                                <div className="jtc-itin-row-card">
                                    <div className="jtc-itin-row-icon">
                                        <Ship size={20} />
                                    </div>
                                    <div className="jtc-itin-row-info">
                                        <h3 className="jtc-h3">Cruise & Land</h3>
                                        <p className="jtc-p jtc-fs-sm">Seamless Combined Travel</p>
                                    </div>
                                    <div className="jtc-itin-row-price">
                                        <span className="jtc-price">$8,000 – $18,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="jtc-editorial-box jtc-mt-lg jtc-center">
                        <p className="jtc-p">If you are planning your route, start with our first-time Japan itinerary or compare options in our Japan land vs cruise guide.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 6: WHERE YOUR BUDGET GOES */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Where Your Japan Travel Budget Goes</h2>
                        <div className="jtc-bar"></div>
                    </div>

                    <div className="jtc-budget-list" ref={budgetRef}>
                        <div className="jtc-budget-row">
                            <div className="jtc-budget-info">
                                <h3 className="jtc-budget-name">Hotels</h3>
                                <span className="jtc-budget-pct">40 to 50 percent</span>
                            </div>
                            <div className="jtc-budget-bar-wrap">
                                <div className="jtc-budget-bar" data-target="50"></div>
                            </div>
                        </div>

                        <div className="jtc-budget-row">
                            <div className="jtc-budget-info">
                                <h3 className="jtc-budget-name">Flights</h3>
                                <span className="jtc-budget-pct">20 to 30 percent</span>
                            </div>
                            <div className="jtc-budget-bar-wrap">
                                <div className="jtc-budget-bar" data-target="30"></div>
                            </div>
                        </div>

                        <div className="jtc-budget-row">
                            <div className="jtc-budget-info">
                                <h3 className="jtc-budget-name">Tours and experiences</h3>
                                <span className="jtc-budget-pct">10 to 20 percent</span>
                            </div>
                            <div className="jtc-budget-bar-wrap">
                                <div className="jtc-budget-bar" data-target="20"></div>
                            </div>
                        </div>

                        <div className="jtc-budget-row">
                            <div className="jtc-budget-info">
                                <h3 className="jtc-budget-name">Transportation</h3>
                                <span className="jtc-budget-pct">10 to 15 percent</span>
                            </div>
                            <div className="jtc-budget-bar-wrap">
                                <div className="jtc-budget-bar" data-target="15"></div>
                            </div>
                        </div>

                        <div className="jtc-budget-row">
                            <div className="jtc-budget-info">
                                <h3 className="jtc-budget-name">Food</h3>
                                <span className="jtc-budget-pct">5 to 10 percent</span>
                            </div>
                            <div className="jtc-budget-bar-wrap">
                                <div className="jtc-budget-bar" data-target="10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="jtc-budget-note">
                        <div className="jtc-budget-note-inner">
                            <p className="jtc-p" style={{ fontStyle: "italic", margin: 0 }}>
                                Understanding this breakdown helps you allocate your budget where it matters most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: FLIGHTS TO JAPAN */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Flights to Japan</h2>
                        <div className="jtc-bar"></div>
                    </div>

                    <div className="jtc-flight-grid">
                        {/* Economy */}
                        <div className="jtc-flight-card">
                            <Plane size={32} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3">Economy</h3>
                            <p className="jtc-price-tag">$800 to $1,800 round trip</p>
                        </div>

                        {/* Premium Economy */}
                        <div className="jtc-flight-card">
                            <Plane size={32} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3">Premium Economy</h3>
                            <p className="jtc-price-tag">$1,800 to $3,000</p>
                        </div>

                        {/* Business Class */}
                        <div className="jtc-flight-card jtc-card-navy">
                            <Plane size={32} className="jtc-white jtc-mb-md" />
                            <h3 className="jtc-h3 jtc-white">Business Class</h3>
                            <p className="jtc-price-tag jtc-white">$4,000 to $10,000+</p>
                        </div>
                    </div>

                    <div className="jtc-editorial-box jtc-mt-lg jtc-center">
                        <p className="jtc-p">Flights fluctuate heavily based on timing, especially during peak travel seasons.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 8: HOTELS IN JAPAN */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Hotels in Japan</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box">
                        <p className="jtc-p jtc-center jtc-mb-lg">Hotels are the largest cost driver. Selecting the right tier determines the entire tone of your trip.</p>

                        <div className="jtc-hotel-tiers">
                            {/* 3-Star Card */}
                            <div className="jtc-hotel-card">
                                <div className="jtc-hotel-stars">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                </div>
                                <h3 className="jtc-h3">3-Star Comfort</h3>
                                <div className="jtc-hotel-price">
                                    <span className="jtc-price-main">$120 – $250</span>
                                    <span className="jtc-price-label">per night</span>
                                </div>
                                <ul className="jtc-hotel-features">
                                    <li className="jtc-p">Efficient, modern rooms</li>
                                    <li className="jtc-p">Near major stations</li>
                                    <li className="jtc-p">High value for money</li>
                                </ul>
                            </div>

                            {/* 4-Star Card */}
                            <div className="jtc-hotel-card jtc-hotel-featured">
                                <div className="jtc-hotel-stars">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                </div>
                                <h3 className="jtc-h3">4-Star Superior</h3>
                                <div className="jtc-hotel-price">
                                    <span className="jtc-price-main">$300 – $600</span>
                                    <span className="jtc-price-label">per night</span>
                                </div>
                                <ul className="jtc-hotel-features">
                                    <li className="jtc-p">Spacious accommodations</li>
                                    <li className="jtc-p">Full service & dining</li>
                                    <li className="jtc-p">Prime city locations</li>
                                </ul>
                            </div>

                            {/* Luxury Card */}
                            <div className="jtc-hotel-card jtc-hotel-luxury">
                                <div className="jtc-hotel-stars">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                </div>
                                <h3 className="jtc-h3 jtc-white">Ultra-Luxury</h3>
                                <div className="jtc-hotel-price">
                                    <span className="jtc-price-main jtc-white">$700 – $2,000+</span>
                                    <span className="jtc-price-label jtc-white">per night</span>
                                </div>
                                <ul className="jtc-hotel-features jtc-white-all">
                                    <li className="jtc-p">Iconic skyline views</li>
                                    <li className="jtc-p">World-class hospitality</li>
                                    <li className="jtc-p">Exclusive club access</li>
                                </ul>
                            </div>
                        </div>

                        <div className="jtc-editorial-box jtc-mt-lg">
                            <p className="jtc-p" style={{ fontStyle: "italic", margin: 0 }}>
                                Cities like Tokyo and Kyoto book out early, especially in peak seasons. We recommend booking 6-9 months in advance for the best rates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9: RYOKAN EXPERIENCE */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Ryokan Experience</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box">
                        <p className="jtc-p jtc-center jtc-mb-lg">Traditional ryokans are a highlight of Japan.</p>

                        <div className="jtc-ryokan-simple-grid">
                            <div className="jtc-ryokan-item">
                                <h3 className="jtc-h3">Standard</h3>
                                <p className="jtc-price-tag">$250 to $500 per person per night</p>
                            </div>
                            <div className="jtc-ryokan-item jtc-border-navy">
                                <h3 className="jtc-h3">Luxury</h3>
                                <p className="jtc-price-tag">$600 to $1,500+ per person</p>
                            </div>
                        </div>

                        <div className="jtc-editorial-box jtc-mt-lg jtc-center">
                            <p className="jtc-p">Most include dinner and breakfast, which adds value beyond the room.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10: TRANSPORTATION COSTS */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Transportation Costs</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box">
                        <p className="jtc-p jtc-center jtc-mb-lg">Japan’s transportation system is efficient but must be planned correctly.</p>

                        <div className="jtc-trans-list">
                            <div className="jtc-trans-row">
                                <div className="jtc-trans-label">
                                    <TrainFront size={22} className="jtc-icon-navy" />
                                    <span className="jtc-p jtc-bold">Rail Pass</span>
                                </div>
                                <div className="jtc-trans-value">
                                    <span className="jtc-price-tag">$300 to $600</span>
                                </div>
                            </div>

                            <div className="jtc-trans-row">
                                <div className="jtc-trans-label">
                                    <TrainFront size={22} className="jtc-icon-navy" />
                                    <span className="jtc-p jtc-bold">Individual train tickets</span>
                                </div>
                                <div className="jtc-trans-value">
                                    <span className="jtc-price-tag">$50 to $200 per segment</span>
                                </div>
                            </div>

                            <div className="jtc-trans-row">
                                <div className="jtc-trans-label">
                                    <Car size={22} className="jtc-icon-navy" />
                                    <span className="jtc-p jtc-bold">Private transfers</span>
                                </div>
                                <div className="jtc-trans-value">
                                    <span className="jtc-price-tag">$150 to $500+</span>
                                </div>
                            </div>
                        </div>

                        <div className="jtc-mistake-alert jtc-mt-lg">
                            <AlertTriangle size={24} className="jtc-warning-icon" />
                            <p className="jtc-p jtc-bold">Overbuying rail passes is one of the most common mistakes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 11: FOOD AND DINING COSTS */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Food and Dining Costs</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box">
                        <p className="jtc-p jtc-center jtc-mb-lg">Japan offers incredible value in food.</p>

                        <div className="jtc-food-tiers">
                            {/* Casual */}
                            <div className="jtc-food-card">
                                <Utensils size={32} className="jtc-icon-navy jtc-mb-sm" />
                                <h3 className="jtc-h3">Casual meals</h3>
                                <p className="jtc-price-tag">$10 to $25</p>
                            </div>

                            {/* Mid-range */}
                            <div className="jtc-food-card jtc-food-featured">
                                <Coffee size={32} className="jtc-icon-navy jtc-mb-sm" />
                                <h3 className="jtc-h3">Mid-range dining</h3>
                                <p className="jtc-price-tag">$40 to $100</p>
                            </div>

                            {/* Fine Dining */}
                            <div className="jtc-food-card">
                                <Star size={32} className="jtc-icon-navy jtc-mb-sm" />
                                <h3 className="jtc-h3">Fine dining</h3>
                                <p className="jtc-price-tag">$150 to $500+</p>
                            </div>
                        </div>

                        <div className="jtc-food-gallery jtc-mt-lg">
                            <img
                                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop"
                                alt="Sushi Fine Dining"
                                className="jtc-fluid-img"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="jtc-editorial-box jtc-mt-lg jtc-center">
                            <p className="jtc-p">Some of the best meals in Japan cost less than a coffee in major U.S. cities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 12: TOURS AND EXPERIENCES */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Tours and Experiences</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box">
                        <p className="jtc-p jtc-center jtc-mb-lg">This is where trips become exceptional.</p>

                        <div className="jtc-tour-grid">
                            <div className="jtc-tour-card">
                                <Users size={28} className="jtc-icon-navy jtc-mb-sm" />
                                <h3 className="jtc-h3">Group tours</h3>
                                <p className="jtc-price-tag">$50 to $150</p>
                            </div>

                            <div className="jtc-tour-card jtc-card-navy">
                                <UserCheck size={28} className="jtc-white jtc-mb-sm" />
                                <h3 className="jtc-h3 jtc-white">Private guides</h3>
                                <p className="jtc-price-tag jtc-white">$300 to $800 per day</p>
                            </div>

                            <div className="jtc-tour-card">
                                <MapPin size={28} className="jtc-icon-navy jtc-mb-sm" />
                                <h3 className="jtc-h3">Cultural experiences</h3>
                                <p className="jtc-price-tag">$100 to $500</p>
                            </div>
                        </div>

                        <div className="jtc-editorial-box jtc-mt-lg jtc-center">
                            <p className="jtc-p">These are often the most memorable parts of the trip.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 13: IS JAPAN EXPENSIVE? */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Is Japan Expensive to Visit?</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box">
                        <p className="jtc-p jtc-center jtc-mb-lg">
                            Japan is moderately expensive compared to global destinations, but it offers exceptional value.
                        </p>

                        <div className="jtc-comparison-card jtc-mx-auto jtc-p-lg jtc-rounded">
                            <h3 className="jtc-h3 jtc-center jtc-mb-md">Compared to Europe, Japan often delivers:</h3>
                            <ul className="jtc-check-bullets">
                                <li className="jtc-p">Better infrastructure</li>
                                <li className="jtc-p">Higher service consistency</li>
                                <li className="jtc-p">Greater efficiency</li>
                            </ul>
                        </div>

                        <div className="jtc-editorial-box jtc-mt-lg jtc-center">
                            <p className="jtc-p">When planned correctly, Japan can feel more seamless and more rewarding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 14: WHAT DRIVES THE COST */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">What Drives the Cost of a Japan Trip</h2>
                        <div className="jtc-bar"></div>
                    </div>

                    <div className="jtc-driver-grid jtc-mt-lg">
                        {/* Seasonality */}
                        <div className="jtc-simple-driver">
                            <TrendingUp size={40} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3 jtc-mb-lg">Seasonality</h3>
                            <div className="jtc-simple-body">
                                <p className="jtc-p jtc-mb-md"><strong>Peak:</strong> Cherry blossoms (late March-April), Fall foliage (November)</p>
                                <p className="jtc-p jtc-mb-md"><strong>Shoulder:</strong> May and October</p>
                                <p className="jtc-p"><strong>Value:</strong> January, February, early June</p>
                            </div>
                        </div>

                        {/* Booking Timing */}
                        <div className="jtc-simple-driver jtc-bg-soft">
                            <Clock size={40} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3 jtc-mb-lg">Booking Timing</h3>
                            <div className="jtc-simple-body">
                                <p className="jtc-p jtc-bold jtc-mb-sm">6 to 12 months in advance:</p>
                                <ul className="jtc-bullet-list jtc-mb-md">
                                    <li className="jtc-p jtc-fs-sm jtc-mb-xs">Secures better hotels</li>
                                    <li className="jtc-p jtc-fs-sm jtc-mb-xs">Locks in pricing</li>
                                    <li className="jtc-p jtc-fs-sm">Ensures availability</li>
                                </ul>
                                <p className="jtc-p jtc-italic jtc-fs-sm jtc-mt-auto">Late bookings almost always cost more.</p>
                            </div>
                        </div>

                        {/* Travel Style */}
                        <div className="jtc-simple-driver">
                            <Compass size={40} className="jtc-icon-navy jtc-mb-md" />
                            <h3 className="jtc-h3 jtc-mb-lg">Travel Style</h3>
                            <div className="jtc-simple-body">
                                <p className="jtc-p jtc-bold jtc-mb-sm">Japan can be:</p>
                                <ul className="jtc-bullet-list jtc-mb-md">
                                    <li className="jtc-p jtc-mb-xs">Budget and efficient</li>
                                    <li className="jtc-p jtc-mb-xs">Balanced and comfortable</li>
                                    <li className="jtc-p">Highly curated and luxury</li>
                                </ul>
                                <p className="jtc-p jtc-bold jtc-fs-sm jtc-mt-auto">Your choices shape your cost more than the destination itself.</p>
                            </div>
                        </div>
                    </div>

                    <div className="jtc-video-container jtc-mt-xl">
                        <div className="jtc-hdr">
                            <h2 className="jtc-h2">Understanding the Budget</h2>
                            <div className="jtc-bar"></div>
                        </div>
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/Eqe7atICNy0"
                            title="Japan Budget Guide"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* SECTION 15: COST EXAMPLES */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Real Japan Trip Cost Examples</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-example-grid jtc-mt-lg">
                        {/* Mid-Range Example */}
                        <div className="jtc-example-card">
                            <h3 className="jtc-h3 jtc-center jtc-mb-lg">10 Day Mid-Range Trip</h3>
                            <div className="jtc-invoice">
                                <div className="jtc-invoice-item">
                                    <div className="jtc-inv-label"><Plane size={18} /> <span>Flights</span></div>
                                    <div className="jtc-inv-value">$1,200</div>
                                </div>
                                <div className="jtc-invoice-item">
                                    <div className="jtc-inv-label"><Bed size={18} /> <span>Hotels</span></div>
                                    <div className="jtc-inv-value">$3,500</div>
                                </div>
                                <div className="jtc-invoice-item">
                                    <div className="jtc-inv-label"><TrainFront size={18} /> <span>Transportation</span></div>
                                    <div className="jtc-inv-value">$600</div>
                                </div>
                                <div className="jtc-invoice-item">
                                    <div className="jtc-inv-label"><Utensils size={18} /> <span>Food</span></div>
                                    <div className="jtc-inv-value">$800</div>
                                </div>
                                <div className="jtc-invoice-item">
                                    <div className="jtc-inv-label"><Compass size={18} /> <span>Tours</span></div>
                                    <div className="jtc-inv-value">$900</div>
                                </div>
                                <div className="jtc-invoice-total jtc-mt-md">
                                    <span className="jtc-total-label">Total per person</span>
                                    <span className="jtc-total-amount">~$7,000</span>
                                </div>
                            </div>
                        </div>

                        {/* Luxury Example */}
                        <div className="jtc-example-card jtc-card-navy">
                            <h3 className="jtc-h3 jtc-white jtc-center jtc-mb-lg">14 Day Luxury Trip</h3>
                            <div className="jtc-invoice jtc-white-all">
                                <div className="jtc-invoice-item jtc-border-white-o">
                                    <div className="jtc-inv-label"><Plane size={18} /> <span>Flights</span></div>
                                    <div className="jtc-inv-value">$5,500</div>
                                </div>
                                <div className="jtc-invoice-item jtc-border-white-o">
                                    <div className="jtc-inv-label"><Bed size={18} /> <span>Hotels</span></div>
                                    <div className="jtc-inv-value">$10,000</div>
                                </div>
                                <div className="jtc-invoice-item jtc-border-white-o">
                                    <div className="jtc-inv-label"><TrainFront size={18} /> <span>Transportation</span></div>
                                    <div className="jtc-inv-value">$1,200</div>
                                </div>
                                <div className="jtc-invoice-item jtc-border-white-o">
                                    <div className="jtc-inv-label"><Utensils size={18} /> <span>Food</span></div>
                                    <div className="jtc-inv-value">$2,500</div>
                                </div>
                                <div className="jtc-invoice-item jtc-border-white-o">
                                    <div className="jtc-inv-label"><Compass size={18} /> <span>Experiences</span></div>
                                    <div className="jtc-inv-value">$3,500</div>
                                </div>
                                <div className="jtc-invoice-total jtc-border-white jtc-mt-md">
                                    <span className="jtc-total-label">Total per person</span>
                                    <span className="jtc-total-amount">$20,000+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 16: MISTAKES */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Mistakes That Can Add Thousands to Your Trip</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box jtc-mt-lg">
                        <div className="jtc-mistake-grid">
                            <div className="jtc-mistake-tile">
                                <AlertTriangle size={32} className="jtc-icon-navy jtc-mb-md" />
                                <p className="jtc-p jtc-bold">Booking too late for peak seasons</p>
                            </div>
                            <div className="jtc-mistake-tile">
                                <AlertTriangle size={32} className="jtc-icon-navy jtc-mb-md" />
                                <p className="jtc-p jtc-bold">Choosing the wrong hotel locations</p>
                            </div>
                            <div className="jtc-mistake-tile">
                                <AlertTriangle size={32} className="jtc-icon-navy jtc-mb-md" />
                                <p className="jtc-p jtc-bold">Overpaying for unnecessary rail passes</p>
                            </div>
                            <div className="jtc-mistake-tile">
                                <AlertTriangle size={32} className="jtc-icon-navy jtc-mb-md" />
                                <p className="jtc-p jtc-bold">Poor itinerary structure</p>
                            </div>
                        </div>
                        <div className="jtc-mt-lg jtc-center">
                            <p className="jtc-p jtc-bold jtc-opacity-80">These are the most common and most expensive mistakes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 17: CLIENT INSIGHTS */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-magazine-spread jtc-mx-auto">
                        <div className="jtc-magazine-left jtc-bg-navy jtc-white">
                            <Sparkles size={48} className="jtc-mb-lg" />
                            <h3 className="jtc-h2 jtc-white jtc-mb-md" style={{ textAlign: 'left', fontSize: '32px' }}>What I See With Clients Every Year</h3>
                            <p className="jtc-p jtc-opacity-80">Observations from over a decade of luxury travel planning across Japan.</p>
                        </div>
                        <div className="jtc-magazine-right jtc-bg-white">
                            <p className="jtc-p jtc-bold jtc-mb-xl jtc-navy" style={{ fontSize: '18px' }}>Every year, I see travelers:</p>
                            <ul className="jtc-insight-check-list jtc-mb-xl">
                                <li><Check size={20} /> <span>Miss cherry blossom timing completely</span></li>
                                <li><Check size={20} /> <span>Overpay for hotels due to late booking</span></li>
                                <li><Check size={20} /> <span>Build inefficient itineraries</span></li>
                            </ul>
                            <div className="jtc-expert-motto jtc-mt-auto">
                                <p className="jtc-p jtc-italic jtc-mb-0">"The difference is not the destination. It is the planning."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 18: IS JAPAN WORTH IT? */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Is Japan Worth the Cost?</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box jtc-mt-lg">
                        <p className="jtc-p jtc-center jtc-mb-xl" style={{ fontSize: '18px' }}>
                            Japan delivers one of the highest-value travel experiences in the world.
                        </p>

                        <div className="jtc-value-pillars jtc-mb-xl">
                            <div className="jtc-pillar">
                                <ShieldCheck size={32} className="jtc-icon-navy jtc-mb-md" />
                                <span className="jtc-p jtc-bold">Safety</span>
                            </div>
                            <div className="jtc-pillar">
                                <Sparkles size={32} className="jtc-icon-navy jtc-mb-md" />
                                <span className="jtc-p jtc-bold">Cleanliness</span>
                            </div>
                            <div className="jtc-pillar">
                                <Timer size={32} className="jtc-icon-navy jtc-mb-md" />
                                <span className="jtc-p jtc-bold">Efficiency</span>
                            </div>
                            <div className="jtc-pillar">
                                <Landmark size={32} className="jtc-icon-navy jtc-mb-md" />
                                <span className="jtc-p jtc-bold">Cultural Depth</span>
                            </div>
                            <div className="jtc-pillar">
                                <Star size={32} className="jtc-icon-navy jtc-mb-md" />
                                <span className="jtc-p jtc-bold">Service Consistency</span>
                            </div>
                        </div>

                        <div className="jtc-editorial-box jtc-center jtc-mx-auto">
                            <p className="jtc-p jtc-bold jtc-mb-0">When done right, it exceeds expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 19: EXPERT TAKE */}
            <section className="jtc-section jtc-bg-dark">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2 jtc-white">My Expert Take</h2>
                        <div className="jtc-bar jtc-bg-white"></div>
                    </div>
                    
                    <div className="jtc-expert-closing jtc-mt-lg">
                        <div className="jtc-closing-grid">
                            {/* Left: The Verdict */}
                            <div className="jtc-closing-verdict jtc-bg-white-o jtc-glass">
                                <Award size={40} className="jtc-icon-gold jtc-mb-md" />
                                <p className="jtc-h3 jtc-white jtc-mb-lg">Japan is not expensive when planned correctly.</p>
                                <p className="jtc-p jtc-white jtc-italic jtc-mb-0">
                                    "The difference is knowledge and execution."
                                </p>
                            </div>

                            {/* Right: The Warning */}
                            <div className="jtc-closing-warning jtc-bg-navy jtc-border-white-o">
                                <h4 className="jtc-h3 jtc-white jtc-mb-lg">It becomes expensive when:</h4>
                                <ul className="jtc-warning-list-new">
                                    <li><CheckCircle2 size={18} className="jtc-icon-gold" /> <span>You book too late</span></li>
                                    <li><CheckCircle2 size={18} className="jtc-icon-gold" /> <span>You travel at the wrong time</span></li>
                                    <li><CheckCircle2 size={18} className="jtc-icon-gold" /> <span>You do not understand the system</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Video in Theater Mode */}
                        <div className="jtc-theater-frame jtc-mt-xl">
                            <div className="jtc-theater-header">
                                <span className="jtc-eyebrow jtc-white">Curated Masterclass</span>
                                <h4 className="jtc-h2 jtc-white" style={{ fontSize: '24px' }}>Deep Dive: The Economics of Japan Travel</h4>
                            </div>
                            <div className="jtc-video-theater">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/OShhce4kPrk"
                                    title="Expert Insights"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 20: REMEMBER ONE THING */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner jtc-center">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">If You Only Remember One Thing</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-content-box jtc-mt-lg">
                        <div className="jtc-premium-billboard">
                            <div className="jtc-pb-icon-wrap">
                                <Lightbulb size={44} className="jtc-icon-white" />
                            </div>
                            <div className="jtc-pb-content">
                                <h3 className="jtc-pb-title">
                                    Japan rewards planning more than almost any destination in the world.
                                </h3>
                                <p className="jtc-pb-desc">
                                    Get the structure right, and you will maximize both your experience and your budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 21: CTA */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-premium-cta-wrap">
                        <div className="jtc-premium-cta-left">
                            <h2 className="jtc-pcta-title">Plan Your Japan Trip the Right Way</h2>
                            <p className="jtc-pcta-subtitle">Japan is complex to plan well.</p>
                            <button className="jtc-pcta-btn">
                                Plan My Japan Trip <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="jtc-premium-cta-right">
                            <h3 className="jtc-pcta-help-text">We help you:</h3>
                            <ul className="jtc-pcta-checklist">
                                <li>
                                    <CheckCircle2 size={24} className="jtc-pcta-check-icon" />
                                    <span>Align timing and budget</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={24} className="jtc-pcta-check-icon" />
                                    <span>Secure the best hotels</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={24} className="jtc-pcta-check-icon" />
                                    <span>Avoid costly mistakes</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={24} className="jtc-pcta-check-icon" />
                                    <span>Design seamless itineraries</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 22: WHERE TO GO NEXT */}
            <section className="jtc-section jtc-bg-white">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">Where to Explore Next</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-editorial-links jtc-mt-lg">
                        <a href="#" className="jtc-editorial-link-row">
                            <div className="jtc-el-left">
                                <span className="jtc-el-number">01</span>
                                <span className="jtc-el-title">Best Time to Visit Japan</span>
                            </div>
                            <div className="jtc-el-right">
                                <ArrowRight size={32} className="jtc-el-arrow" />
                            </div>
                        </a>
                        <a href="#" className="jtc-editorial-link-row">
                            <div className="jtc-el-left">
                                <span className="jtc-el-number">02</span>
                                <span className="jtc-el-title">First Time Japan Itinerary</span>
                            </div>
                            <div className="jtc-el-right">
                                <ArrowRight size={32} className="jtc-el-arrow" />
                            </div>
                        </a>
                        <a href="#" className="jtc-editorial-link-row">
                            <div className="jtc-el-left">
                                <span className="jtc-el-number">03</span>
                                <span className="jtc-el-title">Japan Land vs Cruise</span>
                            </div>
                            <div className="jtc-el-right">
                                <ArrowRight size={32} className="jtc-el-arrow" />
                            </div>
                        </a>
                        <a href="#" className="jtc-editorial-link-row">
                            <div className="jtc-el-left">
                                <span className="jtc-el-number">04</span>
                                <span className="jtc-el-title">Tokyo Travel Guide</span>
                            </div>
                            <div className="jtc-el-right">
                                <ArrowRight size={32} className="jtc-el-arrow" />
                            </div>
                        </a>
                        <a href="#" className="jtc-editorial-link-row">
                            <div className="jtc-el-left">
                                <span className="jtc-el-number">05</span>
                                <span className="jtc-el-title">Kyoto Travel Guide</span>
                            </div>
                            <div className="jtc-el-right">
                                <ArrowRight size={32} className="jtc-el-arrow" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 23: FAQ */}
            <section className="jtc-section jtc-bg-soft">
                <div className="jtc-inner">
                    <div className="jtc-hdr">
                        <h2 className="jtc-h2">FAQ</h2>
                        <div className="jtc-bar"></div>
                    </div>
                    <div className="jtc-faq-list jtc-mt-lg jtc-mx-auto">
                        <FAQItem
                            question="How much does a trip to Japan cost?"
                            answer="Most travelers spend $6,000 to $10,000 per person for a well-planned trip."
                        />
                        <FAQItem
                            question="Is Japan expensive to visit?"
                            answer="It can be, but it offers strong value depending on how you plan."
                        />
                        <FAQItem
                            question="What is the cheapest time to visit Japan?"
                            answer="January, February, and early June."
                        />
                        <FAQItem
                            question="How much should I budget for 10 days?"
                            answer="Around $5,000 to $8,000 per person."
                        />
                        <FAQItem
                            question="What is the most expensive part of a trip?"
                            answer="Hotels and flights."
                        />
                        <FAQItem
                            question="Are trains expensive in Japan?"
                            answer="They can be, but they are efficient and reliable."
                        />
                        <FAQItem
                            question="Is food expensive in Japan?"
                            answer="It ranges widely but offers excellent value."
                        />
                        <FAQItem
                            question="How far in advance should I book?"
                            answer="6 to 12 months in advance."
                        />
                        <FAQItem
                            question="Is Japan cheaper than Europe?"
                            answer="It can be, especially when planned strategically."
                        />
                        <FAQItem
                            question="Do I need a travel advisor?"
                            answer="Highly recommended for complex itineraries."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`jtc-faq-item${isOpen ? " jtc-open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="jtc-faq-q">
                <span>{question}</span>
                <span className="jtc-faq-icon">
                    {isOpen ? (
                        <Minus size={18} strokeWidth={1.5} />
                    ) : (
                        <Plus size={18} strokeWidth={1.5} />
                    )}
                </span>
            </div>
            {isOpen && (
                <div className="jtc-faq-a">
                    <div className="jtc-faq-a-inner">{answer}</div>
                </div>
            )}
        </div>
    );
}

export default JapanTravelCost;