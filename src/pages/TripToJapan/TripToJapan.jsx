import Navbar from "../../components/Navbar/Navbar";
import "../TripToJapan/TripToJapan.css";
import { MapPin, Calendar, DollarSign, Compass, Clock, Star, ArrowRight, Sparkles, Flower, Leaf, Sun, Snowflake, Wallet, Gem, Building, Plane, Users, Train, Ship, Search, Utensils, CheckCircle, LayoutList, ShieldCheck, Building2, Trees, AlertCircle, Landmark, Flame, RotateCcw, TrendingUp, Luggage, CalendarOff, HeartCrack, Gauge, Hotel, Scale, Footprints, BatteryCharging, Moon, Sunrise, UtensilsCrossed, Timer, GitBranch } from "lucide-react";
import { Helmet } from "react-helmet-async";
import profilePicture from "../../assets/image.jpg";
import heroImage1 from "../../assets/TripToJapan/Hero1.jpg";
import heroImage2 from "../../assets/TripToJapan/Hero2.jpg";
import heroImage3 from "../../assets/TripToJapan/Hero3.jpg";

function TripToJapan() {
    return (
        <>
            <Helmet>
                <title>Plan Your Trip to Japan: The Complete Guide | Angela Hughes</title>
                <meta name="description" content="Complete guide to planning your Japan trip. Learn timing, itineraries, costs, and expert tips from Angela Hughes for an unforgettable Japanese experience." />
                <meta name="keywords" content="Japan trip planning, visit Japan, Japan travel guide, Tokyo Kyoto Osaka, Japan itinerary, Japan travel costs, best time to visit Japan" />
            </Helmet>

            <Navbar />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section
                className="jpn-hero"
                style={{
                    "--jpn-h1": `url('${heroImage1}')`,
                    "--jpn-h2": `url('${heroImage2}')`,
                    "--jpn-h3": `url('${heroImage3}')`,
                }}
            >
                <div className="jpn-hero-inner">
                    <span className="jpn-eyebrow">Expert Travel Guide</span>

                    <h1 className="jpn-h1">
                        Plan Your Trip to Japan <br /> The Complete Guide to Doing It Right
                    </h1>

                    <p className="jpn-hero-lead">
                        Japan is one of the easiest countries in the world to travel.<br />
                        It is also one of the hardest to plan well.
                    </p>

                    <div className="jpn-hero-details">
                        <div className="jpn-snippet-card">
                            <span className="jpn-snippet-label">Quick Answer</span>
                            <p className="jpn-p jpn-white-text">
                                Most travelers don't struggle with where to go. They struggle with how to put it together.
                                Timing, pacing, neighborhoods, transportation, and hotel availability all matter more here
                                than almost anywhere else.<br />
                                If you get the structure right, Japan becomes one of the most seamless and rewarding trips
                                you will ever take.<br />
                                If you get it wrong, it can feel rushed, expensive, and overwhelming.<br />
                                This guide gives you everything you need to plan Japan correctly from the start.
                            </p>
                        </div>
                    </div>

                    <button
                        className="jpn-hero-toggle"
                        onClick={() => {
                            const d = document.querySelector(".jpn-hero-details");
                            if (d) d.classList.toggle("jpn-expanded");
                        }}
                    >
                        View Quick Answer
                    </button>

                    <div className="jpn-hero-btns">
                        <button className="jpn-btn-primary">Plan My Japan Trip</button>
                    </div>
                </div>
            </section>

            {/* ── How to Plan a Trip to Japan ──────────────────────── */}
            <section className="jpn-section jpn-bg-white">
                <div className="jpn-inner">
                    <div className="jpn-plan-section">
                        <div className="jpn-plan-heading">
                            <h2 className="jpn-h2 jpn-plan-title">How to Plan a Trip to Japan</h2>
                            <div className="jpn-plan-bar"></div>
                        </div>
                        <div className="jpn-plan-content">
                            <div className="jpn-plan-intro">
                                <p className="jpn-plan-lead">To plan a successful trip to Japan:</p>
                            </div>
                            <ul className="jpn-plan-steps">
                                <li className="jpn-plan-step">
                                    <Calendar size={20} strokeWidth={2} />
                                    <span>Choose the right time of year based on your goals</span>
                                </li>
                                <li className="jpn-plan-step">
                                    <Clock size={20} strokeWidth={2} />
                                    <span>Build a 10 to 14 day itinerary</span>
                                </li>
                                <li className="jpn-plan-step">
                                    <MapPin size={20} strokeWidth={2} />
                                    <span>Focus on Tokyo, Kyoto, and Osaka</span>
                                </li>
                                <li className="jpn-plan-step">
                                    <Compass size={20} strokeWidth={2} />
                                    <span>Add one slower destination for balance</span>
                                </li>
                                <li className="jpn-plan-step">
                                    <Star size={20} strokeWidth={2} />
                                    <span>Book hotels and key experiences early</span>
                                </li>
                            </ul>
                            <div className="jpn-plan-tip">
                                <p className="jpn-tip-text">
                                    <strong>Most travelers should begin planning 6 to 12 months in advance</strong>, especially for peak seasons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why Planning Japan Is Different ──────────────────── */}
            <section className="jpn-section jpn-section-different jpn-bg-soft">
                <div className="jpn-inner">
                    <div className="jpn-different-wrapper">
                        <div className="jpn-different-header">
                            <h2 className="jpn-h2">Why Planning Japan Is Different</h2>
                        </div>
                        <div className="jpn-different-content">
                            <p className="jpn-p jpn-mb-md">Japan is not a plug-and-play destination.</p>
                            <p className="jpn-p jpn-subtitle">Here's what makes it different:</p>
                            <div className="jpn-different-cards">
                                <div className="jpn-diff-card">
                                    <div className="jpn-diff-icon">
                                        <Calendar size={24} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-diff-text">Hotels in top areas sell out months in advance</p>
                                </div>
                                <div className="jpn-diff-card">
                                    <div className="jpn-diff-icon">
                                        <MapPin size={24} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-diff-text">The "right neighborhood" matters more than the hotel brand</p>
                                </div>
                                <div className="jpn-diff-card">
                                    <div className="jpn-diff-icon">
                                        <Compass size={24} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-diff-text">Train routes require logical sequencing</p>
                                </div>
                                <div className="jpn-diff-card">
                                    <div className="jpn-diff-icon">
                                        <Clock size={24} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-diff-text">Restaurants and experiences often need advance booking</p>
                                </div>
                                <div className="jpn-diff-card jpn-diff-card-full">
                                    <div className="jpn-diff-icon">
                                        <Sparkles size={24} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-diff-text">Cultural pacing is very different from Europe or the U.S.</p>
                                </div>
                            </div>
                            <div className="jpn-different-conclusion">
                                <p className="jpn-conclusion-text">
                                    This is why Japan rewards travelers who plan intentionally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The 4 Decisions ──────────────────────────────────── */}
            <section className="jpn-section jpn-section-decisions jpn-bg-white">
                <div className="jpn-inner">
                    <div className="jpn-decisions-wrapper">
                        <div className="jpn-decisions-header">
                            <h2 className="jpn-h2">The 4 Decisions That Shape Your Entire Trip</h2>
                        </div>
                        <p className="jpn-p jpn-decisions-intro">Every Japan trip comes down to four core decisions:</p>
                        <div className="jpn-decisions-grid">
                            <div className="jpn-decision-item">
                                <div className="jpn-decision-number">01</div>
                                <div className="jpn-decision-content">
                                    <h3 className="jpn-decision-title">Timing</h3>
                                    <p className="jpn-decision-desc">Cherry blossoms and fall foliage drive demand, pricing, and availability.</p>
                                </div>
                            </div>
                            <div className="jpn-decision-item">
                                <div className="jpn-decision-number">02</div>
                                <div className="jpn-decision-content">
                                    <h3 className="jpn-decision-title">Route</h3>
                                    <p className="jpn-decision-desc">Where you go and in what order determines how smooth your trip feels.</p>
                                </div>
                            </div>
                            <div className="jpn-decision-item">
                                <div className="jpn-decision-number">03</div>
                                <div className="jpn-decision-content">
                                    <h3 className="jpn-decision-title">Travel Style</h3>
                                    <p className="jpn-decision-desc">Land vs cruise, guided vs independent, fast-paced vs slow.</p>
                                </div>
                            </div>
                            <div className="jpn-decision-item">
                                <div className="jpn-decision-number">04</div>
                                <div className="jpn-decision-content">
                                    <h3 className="jpn-decision-title">Budget</h3>
                                    <p className="jpn-decision-desc">Your hotel level, guides, and experiences shape your overall cost.</p>
                                </div>
                            </div>
                        </div>
                        <div className="jpn-decisions-verdict">
                            <p className="jpn-verdict-text">
                                If you get these four things right, everything else falls into place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 1: Best Time ─────────────────────────────────── */}
            <section className="jpn-section jpn-section-step1 jpn-bg-soft">
                <div className="jpn-inner">
                    <div className="jpn-step1-wrapper">
                        <div className="jpn-step1-header">
                            <span className="jpn-step-label">Step 1</span>
                            <h2 className="jpn-h2">Choose the Best Time to Visit Japan</h2>
                        </div>
                        <div className="jpn-step1-content">
                            <p className="jpn-p jpn-step1-intro">Japan changes dramatically by season.</p>
                            <div className="jpn-seasons-grid">
                                <div className="jpn-season-card">
                                    <div className="jpn-season-icon">
                                        <Flower size={36} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-season-text"><strong>Spring</strong> brings cherry blossoms, but also crowds and higher prices.</p>
                                </div>
                                <div className="jpn-season-card">
                                    <div className="jpn-season-icon">
                                        <Leaf size={36} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-season-text"><strong>Fall</strong> offers similar beauty with better balance.</p>
                                </div>
                                <div className="jpn-season-card">
                                    <div className="jpn-season-icon">
                                        <Sun size={36} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-season-text"><strong>Summer</strong> is hot but culturally vibrant.</p>
                                </div>
                                <div className="jpn-season-card">
                                    <div className="jpn-season-icon">
                                        <Snowflake size={36} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-season-text"><strong>Winter</strong> is quiet and often overlooked.</p>
                                </div>
                            </div>
                            <div className="jpn-impacts-section">
                                <p className="jpn-impacts-label">Timing impacts:</p>
                                <div className="jpn-impacts-grid">
                                    <div className="jpn-impact-item">Pricing</div>
                                    <div className="jpn-impact-item">Availability</div>
                                    <div className="jpn-impact-item">Crowds</div>
                                    <div className="jpn-impact-item">Overall experience</div>
                                </div>
                            </div>
                            <button className="jpn-btn-secondary">
                                Explore our Best Time to Visit Japan Guide <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 2: Cost ──────────────────────────────────────── */}
            <section className="jpn-section jpn-section-step2 jpn-bg-white">
                <div className="jpn-inner">
                    <div className="jpn-step2-wrapper">
                        <div className="jpn-step2-header">
                            <span className="jpn-step-label">Step 2</span>
                            <h2 className="jpn-h2">Understand How Much Japan Costs</h2>
                        </div>
                        <div className="jpn-step2-content">
                            <p className="jpn-p jpn-step2-intro">Japan is not one price point.</p>
                            <p className="jpn-p jpn-step2-subtitle">It is a range.</p>
                            <p className="jpn-p jpn-step2-label">Most travelers fall into:</p>
                            <div className="jpn-price-cards">
                                <div className="jpn-price-card jpn-price-mid">
                                    <div className="jpn-price-icon">
                                        <Wallet size={28} strokeWidth={1.5} />
                                    </div>
                                    <span className="jpn-price-tier">Mid-range</span>
                                    <h3 className="jpn-price-amount">$6,000 to $10,000</h3>
                                    <p className="jpn-price-note">per person</p>
                                </div>
                                <div className="jpn-price-card jpn-price-luxury">
                                    <div className="jpn-price-icon">
                                        <Gem size={28} strokeWidth={1.5} />
                                    </div>
                                    <span className="jpn-price-tier">Luxury</span>
                                    <h3 className="jpn-price-amount">$10,000 to $20,000+</h3>
                                    <p className="jpn-price-note">per person</p>
                                </div>
                            </div>
                            <div className="jpn-breakdown-section">
                                <p className="jpn-breakdown-label">Where your money goes:</p>
                                <div className="jpn-breakdown-list">
                                    <div className="jpn-breakdown-item">
                                        <Building size={20} strokeWidth={1.5} />
                                        <span>Hotels: largest expense</span>
                                    </div>
                                    <div className="jpn-breakdown-item">
                                        <Plane size={20} strokeWidth={1.5} />
                                        <span>Flights: second largest</span>
                                    </div>
                                    <div className="jpn-breakdown-item">
                                        <Users size={20} strokeWidth={1.5} />
                                        <span>Experiences and guides: where value is created</span>
                                    </div>
                                    <div className="jpn-breakdown-item">
                                        <Train size={20} strokeWidth={1.5} />
                                        <span>Transportation: efficient but structured</span>
                                    </div>
                                </div>
                            </div>
                            <button className="jpn-btn-secondary">
                                See our Japan Travel Cost Guide <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 3: Experience ────────────────────────────────── */}
            <section className="jpn-section jpn-section-step3 jpn-bg-soft">
                <div className="jpn-inner">
                    <div className="jpn-step3-wrapper">
                        <div className="jpn-step3-header">
                            <span className="jpn-step-label">Step 3</span>
                            <h2 className="jpn-h2">Decide How You Want to Experience Japan</h2>
                        </div>
                        <div className="jpn-step3-content">
                            <p className="jpn-p jpn-step3-intro">Japan is a land-first destination.</p>
                            <div className="jpn-experience-comparison">
                                <div className="jpn-experience-card jpn-experience-land">
                                    <div className="jpn-experience-icon">
                                        <MapPin size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="jpn-experience-title">Land travel gives you:</h3>
                                    <ul className="jpn-experience-list">
                                        <li>
                                            <Compass size={18} strokeWidth={2} />
                                            <span>Flexibility</span>
                                        </li>
                                        <li>
                                            <Search size={18} strokeWidth={2} />
                                            <span>Depth</span>
                                        </li>
                                        <li>
                                            <Utensils size={18} strokeWidth={2} />
                                            <span>Better access to neighborhoods and food</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="jpn-experience-card jpn-experience-cruise">
                                    <div className="jpn-experience-icon">
                                        <Ship size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="jpn-experience-title">Cruises give you:</h3>
                                    <ul className="jpn-experience-list">
                                        <li>
                                            <CheckCircle size={18} strokeWidth={2} />
                                            <span>Simplicity</span>
                                        </li>
                                        <li>
                                            <LayoutList size={18} strokeWidth={2} />
                                            <span>Structure</span>
                                        </li>
                                        <li>
                                            <ShieldCheck size={18} strokeWidth={2} />
                                            <span>Less logistical effort</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="jpn-step3-verdict">
                                <p className="jpn-verdict-statement">
                                    For most first-time travelers, land travel delivers a significantly better experience.
                                </p>
                            </div>
                            <button className="jpn-btn-secondary">
                                Compare in our Japan Land vs Cruise Guide <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 4: Itinerary ─────────────────────────────────── */}
            <section className="jpn-section jpn-section-step4 jpn-bg-white">
                <div className="jpn-inner">
                    <div className="jpn-step4-wrapper">
                        <div className="jpn-step4-header">
                            <span className="jpn-step-label">Step 4</span>
                            <h2 className="jpn-h2">Build the Right Itinerary</h2>
                        </div>
                        <div className="jpn-step4-content">
                            <p className="jpn-p jpn-step4-intro">This is where most trips succeed or fail.</p>
                            <div className="jpn-itinerary-section">
                                <p className="jpn-itinerary-label">A strong first-time itinerary includes:</p>
                                <div className="jpn-itinerary-items">
                                    <div className="jpn-itinerary-item">
                                        <div className="jpn-itinerary-icon">
                                            <Building2 size={24} strokeWidth={1.5} />
                                        </div>
                                        <div className="jpn-itinerary-text">
                                            <h4 className="jpn-itinerary-city">Tokyo</h4>
                                            <p className="jpn-itinerary-desc">for energy and contrast</p>
                                        </div>
                                    </div>
                                    <div className="jpn-itinerary-item">
                                        <div className="jpn-itinerary-icon">
                                            <Landmark size={24} strokeWidth={1.5} />
                                        </div>
                                        <div className="jpn-itinerary-text">
                                            <h4 className="jpn-itinerary-city">Kyoto</h4>
                                            <p className="jpn-itinerary-desc">for culture and history</p>
                                        </div>
                                    </div>
                                    <div className="jpn-itinerary-item">
                                        <div className="jpn-itinerary-icon">
                                            <Flame size={24} strokeWidth={1.5} />
                                        </div>
                                        <div className="jpn-itinerary-text">
                                            <h4 className="jpn-itinerary-city">Osaka</h4>
                                            <p className="jpn-itinerary-desc">for food and personality</p>
                                        </div>
                                    </div>
                                    <div className="jpn-itinerary-item">
                                        <div className="jpn-itinerary-icon">
                                            <Trees size={24} strokeWidth={1.5} />
                                        </div>
                                        <div className="jpn-itinerary-text">
                                            <h4 className="jpn-itinerary-city">One slower stop</h4>
                                            <p className="jpn-itinerary-desc">like Hakone or Nara</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jpn-step4-warning">
                                <div className="jpn-warning-icon">
                                    <AlertCircle size={24} strokeWidth={1.5} />
                                </div>
                                <div className="jpn-warning-content">
                                    <p className="jpn-warning-title">The biggest mistake is trying to add too much.</p>
                                    <p className="jpn-warning-text">Japan is not about how many places you visit. It is about how you move between them.</p>
                                </div>
                            </div>
                            <button className="jpn-btn-secondary">
                                Start with our First-Time Japan Itinerary <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How Japan Travel Actually Flows ──────────────────── */}
            <section className="jpn-section jpn-section-flow-new jpn-bg-dark">
                <div className="jpn-flow-bg"></div>
                <div className="jpn-flow-overlay"></div>
                <div className="jpn-inner jpn-flow-relative">
                    <div className="jpn-flow-wrapper">
                        <div className="jpn-flow-header">
                            <h2 className="jpn-h2-white">How Japan Travel Actually Flows</h2>
                            <div className="jpn-flow-bar"></div>
                        </div>
                        <div className="jpn-flow-content">
                            <p className="jpn-p-white jpn-flow-intro">Most efficient routes follow:</p>
                            <div className="jpn-route-visual">
                                <div className="jpn-route-city">
                                    <Building2 size={28} strokeWidth={1.5} />
                                    <span>Tokyo</span>
                                </div>
                                <div className="jpn-route-arrow">
                                    <ArrowRight size={24} strokeWidth={2} />
                                </div>
                                <div className="jpn-route-city">
                                    <Landmark size={28} strokeWidth={1.5} />
                                    <span>Kyoto</span>
                                </div>
                                <div className="jpn-route-arrow">
                                    <ArrowRight size={24} strokeWidth={2} />
                                </div>
                                <div className="jpn-route-city">
                                    <Flame size={28} strokeWidth={1.5} />
                                    <span>Osaka</span>
                                </div>
                                <div className="jpn-route-arrow">
                                    <ArrowRight size={24} strokeWidth={2} />
                                </div>
                                <div className="jpn-route-city jpn-route-return">
                                    <RotateCcw size={28} strokeWidth={1.5} />
                                    <span>Return</span>
                                </div>
                            </div>
                            <div className="jpn-flow-reasons">
                                <p className="jpn-reasons-label">This works because:</p>
                                <div className="jpn-reasons-list">
                                    <div className="jpn-reason-item">
                                        <Train size={20} strokeWidth={1.5} />
                                        <span>Train routes are direct</span>
                                    </div>
                                    <div className="jpn-reason-item">
                                        <Clock size={20} strokeWidth={1.5} />
                                        <span>Travel time is minimized</span>
                                    </div>
                                    <div className="jpn-reason-item">
                                        <TrendingUp size={20} strokeWidth={1.5} />
                                        <span>The experience builds naturally</span>
                                    </div>
                                </div>
                            </div>
                            <div className="jpn-flow-statement">
                                <p className="jpn-statement-text">
                                    Breaking this flow usually creates unnecessary stress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── What Most Travelers Get Wrong ─────────────────────── */}
            <section className="jpn-section jpn-section-mistakes-new jpn-bg-white">
                <div className="jpn-inner">
                    <div className="jpn-mistakes-wrapper">
                        <div className="jpn-mistakes-header">
                            <h2 className="jpn-h2">What Most Travelers Get Wrong</h2>
                        </div>
                        <div className="jpn-mistakes-content">
                            <div className="jpn-mistakes-list">
                                <div className="jpn-mistake-item">
                                    <div className="jpn-mistake-number">01</div>
                                    <div className="jpn-mistake-icon">
                                        <MapPin size={22} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-mistake-text">Trying to see too many cities</p>
                                </div>
                                <div className="jpn-mistake-item">
                                    <div className="jpn-mistake-number">02</div>
                                    <div className="jpn-mistake-icon">
                                        <Luggage size={22} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-mistake-text">Moving hotels too often</p>
                                </div>
                                <div className="jpn-mistake-item">
                                    <div className="jpn-mistake-number">03</div>
                                    <div className="jpn-mistake-icon">
                                        <CalendarOff size={22} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-mistake-text">Booking too late</p>
                                </div>
                                <div className="jpn-mistake-item">
                                    <div className="jpn-mistake-number">04</div>
                                    <div className="jpn-mistake-icon">
                                        <HeartCrack size={22} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-mistake-text">Prioritizing convenience over experience</p>
                                </div>
                                <div className="jpn-mistake-item">
                                    <div className="jpn-mistake-number">05</div>
                                    <div className="jpn-mistake-icon">
                                        <Gauge size={22} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-mistake-text">Not understanding pacing</p>
                                </div>
                            </div>
                            <div className="jpn-mistakes-impact">
                                <p className="jpn-impact-text">
                                    These mistakes are why many trips feel rushed or disjointed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How to Pace Japan Correctly ───────────────────────── */}
            <section className="jpn-section jpn-section-pace-new jpn-bg-soft">
                <div className="jpn-inner">
                    <div className="jpn-pace-wrapper">
                        <div className="jpn-pace-header">
                            <h2 className="jpn-h2">How to Pace Japan Correctly</h2>
                        </div>
                        <div className="jpn-pace-content">
                            <p className="jpn-p jpn-pace-intro">Japan should feel intentional, not rushed.</p>
                            <div className="jpn-pace-principles">
                                <p className="jpn-principles-label">The best trips:</p>
                                <div className="jpn-principles-list">
                                    <div className="jpn-principle-item">
                                        <div className="jpn-principle-icon">
                                            <Hotel size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="jpn-principle-text">Limit hotel changes</span>
                                    </div>
                                    <div className="jpn-principle-item">
                                        <div className="jpn-principle-icon">
                                            <Scale size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="jpn-principle-text">Balance busy and slow days</span>
                                    </div>
                                    <div className="jpn-principle-item">
                                        <div className="jpn-principle-icon">
                                            <Footprints size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="jpn-principle-text">Include time for wandering</span>
                                    </div>
                                    <div className="jpn-principle-item">
                                        <div className="jpn-principle-icon">
                                            <BatteryCharging size={22} strokeWidth={1.5} />
                                        </div>
                                        <span className="jpn-principle-text">Build in recovery after travel days</span>
                                    </div>
                                </div>
                            </div>
                            <div className="jpn-pace-goal">
                                <p className="jpn-goal-statement">
                                    The goal is not to see everything.
                                </p>
                                <p className="jpn-goal-highlight">
                                    The goal is to experience it fully.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── What Japan Feels Like When Done Right ─────────────── */}
            <section className="jpn-section jpn-section-feels-new jpn-bg-dark">
                <div className="jpn-feels-bg"></div>
                <div className="jpn-feels-overlay"></div>
                <div className="jpn-inner jpn-feels-relative">
                    <div className="jpn-feels-wrapper">
                        <div className="jpn-feels-header">
                            <h2 className="jpn-h2-white">What Japan Feels Like When Done Right</h2>
                        </div>
                        <div className="jpn-feels-content">
                            <p className="jpn-p-white jpn-feels-intro">Japan is not just a list of sights.</p>
                            <p className="jpn-p-white jpn-feels-label">It is:</p>
                            <div className="jpn-experiences-grid">
                                <div className="jpn-experience-card">
                                    <div className="jpn-experience-icon">
                                        <Moon size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-experience-text">Walking through Tokyo at night when the city comes alive</p>
                                </div>
                                <div className="jpn-experience-card">
                                    <div className="jpn-experience-icon">
                                        <Sunrise size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-experience-text">Quiet mornings in Kyoto before the crowds arrive</p>
                                </div>
                                <div className="jpn-experience-card">
                                    <div className="jpn-experience-icon">
                                        <UtensilsCrossed size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-experience-text">Finding incredible food in places you didn't plan</p>
                                </div>
                                <div className="jpn-experience-card">
                                    <div className="jpn-experience-icon">
                                        <Sparkles size={26} strokeWidth={1.5} />
                                    </div>
                                    <p className="jpn-experience-text">Moments between destinations that become the highlight</p>
                                </div>
                            </div>
                            <div className="jpn-feels-conclusion">
                                <p className="jpn-conclusion-text">
                                    This is what most travelers miss when the itinerary is wrong.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── The Biggest Regret ────────────────────────────────── */}
            <section className="jpn-section jpn-section-regret-new jpn-bg-white">
                <div className="jpn-inner">
                    <div className="jpn-regret-wrapper">
                        <div className="jpn-regret-header">
                            <h2 className="jpn-h2">The Biggest Regret Travelers Have</h2>
                        </div>
                        <div className="jpn-regret-content">
                            <p className="jpn-p jpn-regret-main">Not slowing down.</p>
                            <p className="jpn-p jpn-regret-label">Almost every traveler wishes they had:</p>
                            <div className="jpn-regrets-list">
                                <div className="jpn-regret-item">
                                    <div className="jpn-regret-icon">
                                        <Timer size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="jpn-regret-text">Stayed longer in fewer places</span>
                                </div>
                                <div className="jpn-regret-item">
                                    <div className="jpn-regret-icon">
                                        <Compass size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="jpn-regret-text">Spent more time exploring neighborhoods</span>
                                </div>
                                <div className="jpn-regret-item">
                                    <div className="jpn-regret-icon">
                                        <GitBranch size={22} strokeWidth={1.5} />
                                    </div>
                                    <span className="jpn-regret-text">Built in more flexibility</span>
                                </div>
                            </div>
                            <div className="jpn-regret-truth">
                                <p className="jpn-truth-text">
                                    Japan rewards patience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Timeline ──────────────────────────────────────────── */}
            <section className="jpn-section jpn-section-timeline-new">
                <div className="jpn-inner">
                    <div className="jpn-timeline-new-wrapper">
                        <div className="jpn-timeline-new-header">
                            <h2 className="jpn-h2">When to Start Planning Your Japan Trip</h2>
                        </div>
                        <div className="jpn-timeline-new-content">
                            <div className="jpn-timeline-new-cards">
                                <div className="jpn-timeline-new-card jpn-timeline-new-card-early">
                                    <div className="jpn-timeline-new-card-header">
                                        <div className="jpn-timeline-new-icon">
                                            <Calendar size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="jpn-timeline-new-card-title">9–12 months ahead</h3>
                                    </div>
                                    <p className="jpn-timeline-new-card-desc">Best for peak seasons</p>
                                    <div className="jpn-timeline-new-card-accent"></div>
                                </div>
                                <div className="jpn-timeline-new-card jpn-timeline-new-card-ideal">
                                    <div className="jpn-timeline-new-card-header">
                                        <div className="jpn-timeline-new-icon">
                                            <Calendar size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="jpn-timeline-new-card-title">6–9 months ahead</h3>
                                    </div>
                                    <p className="jpn-timeline-new-card-desc">Ideal timing</p>
                                    <div className="jpn-timeline-new-card-accent"></div>
                                </div>
                                <div className="jpn-timeline-new-card jpn-timeline-new-card-late">
                                    <div className="jpn-timeline-new-card-header">
                                        <div className="jpn-timeline-new-icon">
                                            <Calendar size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="jpn-timeline-new-card-title">3–6 months ahead</h3>
                                    </div>
                                    <p className="jpn-timeline-new-card-desc">Limited options</p>
                                    <div className="jpn-timeline-new-card-accent"></div>
                                </div>
                            </div>
                            <div className="jpn-timeline-new-alert">
                                <div className="jpn-timeline-new-alert-icon">
                                    <AlertCircle size={24} strokeWidth={1.5} />
                                </div>
                                <p className="jpn-timeline-new-alert-text">
                                    <strong>Waiting too long limits your hotel options and increases costs.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Plan With an Expert ───────────────────────────────── */}
            <section className="jpn-section jpn-section-expert-new">
                <div className="jpn-inner">
                    <div className="jpn-expert-new-wrapper">
                        <div className="jpn-expert-new-grid">
                            <div className="jpn-expert-new-image-side">
                                <div className="jpn-expert-new-image-container">
                                    <img src={profilePicture} alt="Angela Hughes" className="jpn-expert-new-main-img" />
                                </div>
                            </div>
                            <div className="jpn-expert-new-content-side">
                                <div className="jpn-expert-new-header">
                                    <h2 className="jpn-h2">Plan Your Japan Trip With an Expert</h2>
                                </div>
                                <div className="jpn-expert-new-info-block">
                                    <h3 className="jpn-expert-new-name">Angela Hughes</h3>
                                    <p className="jpn-expert-new-role">CEO, Trips & Ships Luxury Travel</p>
                                </div>
                                <ul className="jpn-expert-new-list">
                                    <li className="jpn-expert-new-list-item">
                                        <div className="jpn-expert-new-list-icon">
                                            <Star size={18} strokeWidth={2} />
                                        </div>
                                        <span>40+ years in the travel industry</span>
                                    </li>
                                    <li className="jpn-expert-new-list-item">
                                        <div className="jpn-expert-new-list-icon">
                                            <MapPin size={18} strokeWidth={2} />
                                        </div>
                                        <span>Lived in Japan and continues to return regularly</span>
                                    </li>
                                    <li className="jpn-expert-new-list-item">
                                        <div className="jpn-expert-new-list-icon">
                                            <Compass size={18} strokeWidth={2} />
                                        </div>
                                        <span>Designs custom itineraries across Japan</span>
                                    </li>
                                    <li className="jpn-expert-new-list-item">
                                        <div className="jpn-expert-new-list-icon">
                                            <Users size={18} strokeWidth={2} />
                                        </div>
                                        <span>Works directly with hotels and local partners</span>
                                    </li>
                                    <li className="jpn-expert-new-list-item">
                                        <div className="jpn-expert-new-list-icon">
                                            <Users size={18} strokeWidth={2} />
                                        </div>
                                        <span>Leads a team of 140+ luxury travel advisors</span>
                                    </li>
                                </ul>
                                <div className="jpn-expert-new-description">
                                    <p className="jpn-expert-new-text">
                                        Japan is one of the most complex destinations in the world to plan well. The difference between a good trip and an exceptional one comes down to structure, timing, and access.
                                    </p>
                                </div>
                                <div className="jpn-expert-new-cta">
                                    <button className="jpn-expert-new-btn">
                                        <Sparkles size={18} strokeWidth={2} />
                                        Plan My Japan Trip
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Where to Start ────────────────────────────────────── */}
            <section className="jpn-section jpn-section-where-start">
                <div className="jpn-inner">
                    <div className="jpn-where-start-wrapper">
                        <div className="jpn-where-start-header">
                            <h2 className="jpn-h2">Where to Start</h2>
                            <p className="jpn-where-start-subtitle">Explore our comprehensive guides to plan your perfect Japan trip</p>
                        </div>
                        <div className="jpn-where-start-grid">
                            <a href="#" className="jpn-where-start-card">
                                <div className="jpn-where-start-card-icon">
                                    <Calendar size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="jpn-where-start-card-title">Best Time to Visit Japan</h3>
                                <div className="jpn-where-start-card-arrow">
                                    <ArrowRight size={20} strokeWidth={2} />
                                </div>
                            </a>
                            <a href="#" className="jpn-where-start-card">
                                <div className="jpn-where-start-card-icon">
                                    <DollarSign size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="jpn-where-start-card-title">Japan Travel Cost Guide</h3>
                                <div className="jpn-where-start-card-arrow">
                                    <ArrowRight size={20} strokeWidth={2} />
                                </div>
                            </a>
                            <a href="#" className="jpn-where-start-card">
                                <div className="jpn-where-start-card-icon">
                                    <Compass size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="jpn-where-start-card-title">Japan Land vs Cruise</h3>
                                <div className="jpn-where-start-card-arrow">
                                    <ArrowRight size={20} strokeWidth={2} />
                                </div>
                            </a>
                            <a href="#" className="jpn-where-start-card">
                                <div className="jpn-where-start-card-icon">
                                    <MapPin size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="jpn-where-start-card-title">First-Time Japan Itinerary</h3>
                                <div className="jpn-where-start-card-arrow">
                                    <ArrowRight size={20} strokeWidth={2} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TripToJapan;