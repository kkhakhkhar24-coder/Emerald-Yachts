import Navbar from '../../components/Navbar/Navbar'
import './RegentSevenSeas.css'
import image from "../../assets/image.webp";
// import cruiseView from '../../assets/AzamaraCabinsGuide/Cruise_balcony_view.webp'
// import luxuryRefined from '../../assets/HomePage/Refined_Luxury.jpeg'
// import singaporeSkyline from '../../assets/DistinctiveVoyageSailings/singapore-marina-bay-sands-skyline-luxury-travel.png'
// import cruiseSuite from '../../assets/SecondPage/Suite.webp'
// import casualDining from '../../assets/AzamaraCabinsGuide/Casual_Dining.webp'

import {
    Ship, MapPin, Star, Clock, DollarSign, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, ShieldCheck, Gem,
    TrendingUp, ChevronRight, Crown, Plane, Phone, Plus, Minus,
    Globe, LayoutList, Hotel, Wallet, AlertCircle, Home,
    Award, Heart, Utensils, Navigation, Shield, Sun, Activity, Music,
    CalendarClock, ConciergeBell, Gift
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/HomePage/HomePage1.webp'
import hero2 from '../../assets/SecondPage/SecondPage2.webp'
import hero3 from '../../assets/SecondPage/SecondPage6.webp'

import route1 from '../../assets/SecondPage/SecondPage1.webp'
import route2 from '../../assets/SecondPage/SecondPage2.webp'
import route3 from '../../assets/SecondPage/SecondPage3.webp'
import route4 from '../../assets/SecondPage/SecondPage5.webp'
import route5 from '../../assets/SecondPage/SecondPage6.webp'
import route6 from '../../assets/SecondPage/SecondPage7.webp'
import route7 from '../../assets/SecondPage/SecondPage8.webp'
import route8 from '../../assets/SecondPage/SecondPage9.webp'

function RegentSevenSeas() {
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)
    const [activeTraveler, setActiveTraveler] = useState(0)
    const [activeStrategy, setActiveStrategy] = useState(0)
    const [activeAdvantage, setActiveAdvantage] = useState(0)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const suites = [
        { level: 'Veranda Suite', experience: 'Entry luxury with full inclusions', icon: <Home size={22} /> },
        { level: 'Concierge Suite', experience: 'Added perks + priority services', icon: <Star size={22} /> },
        { level: 'Penthouse Suite', experience: 'Butler service + larger living space', icon: <Crown size={22} /> },
        { level: "Owner's Suite", experience: 'Residential-level luxury', icon: <Gem size={22} /> },
        { level: 'Regent Suite', experience: 'Ultra-premium, limited inventory', icon: <Sparkles size={22} /> },
    ]

    const inclusions = [
        { label: 'Business Class Air', value: '$8K–$20K', icon: <Plane size={20} /> },
        { label: 'Shore Excursions (120+ days)', value: '$10K–$25K', icon: <Compass size={20} /> },
        { label: 'Pre/Post Hotels', value: '$3K–$10K', icon: <Hotel size={20} /> },
        { label: 'Dining & Alcohol', value: '$8K–$15K', icon: <Utensils size={20} /> },
        { label: 'Transfers & Logistics', value: '$2K–$5K', icon: <Navigation size={20} /> },
    ]

    const comparisonRows = [
        { feature: 'Shore Excursions', regent: 'Unlimited Included', competitors: 'Pay per excursion', regentWins: true },
        { feature: 'Airfare', regent: 'Included', competitors: 'Not included', regentWins: true },
        { feature: 'Dining', regent: 'All specialty included', competitors: 'Limited', regentWins: true },
        { feature: 'Experience', regent: 'Seamless', competitors: 'Fragmented', regentWins: true },
        { feature: 'Client Feel', regent: 'Effortless luxury', competitors: 'Managed travel', regentWins: true },
    ]

    const routeStops = [
        { region: 'Mediterranean', detail: 'Italy, Greece, France', icon: <Anchor size={20} />, img: route1 },
        { region: 'Africa', detail: 'Cape Town, Namibia', icon: <Globe size={20} />, img: route2 },
        { region: 'Middle East', detail: 'Cultural immersion ports', icon: <MapPin size={20} />, img: route3 },
        { region: 'Southeast Asia', detail: 'Regional depth & culture', icon: <Compass size={20} />, img: route4 },
        { region: 'Japan', detail: 'Iconic bucket-list destination', icon: <Star size={20} />, img: route5 },
        { region: 'Australia & New Zealand', detail: 'Southern Pacific highlights', icon: <Sun size={20} />, img: route6 },
        { region: 'South America', detail: 'Continent exploration', icon: <Navigation size={20} />, img: route7 },
        { region: 'Caribbean', detail: 'Final return journey', icon: <Ship size={20} />, img: route8 },
    ]

    const idealTravelers = [
        { title: 'High-Net-Worth Travelers', desc: 'Seeking simplicity and world-class luxury without compromise.', icon: <Crown size={22} /> },
        { title: 'Retired or Semi-Retired', desc: 'With the flexibility and time to embrace an extended global journey.', icon: <Clock size={22} /> },
        { title: 'Entrepreneurs', desc: 'Taking extended lifestyle travel as a break from demanding schedules.', icon: <TrendingUp size={22} /> },
        { title: 'Private Jet Comparers', desc: 'Clients weighing Regent against other ultra-luxury travel formats.', icon: <Plane size={22} /> },
        { title: 'Repeat Luxury Cruisers', desc: 'Seeking the next level beyond premium cruise experiences.', icon: <Gem size={22} /> },
    ]

    const hiddenAdvantages = [
        { title: 'Priority Excursion Access', desc: 'First access to limited and high-demand shore excursions in every port.', icon: <Award size={22} /> },
        { title: 'Exclusive Onboard Events', desc: 'World cruise guests enjoy special experiences unavailable on shorter sailings.', icon: <Sparkles size={22} /> },
        { title: 'Strong Onboard Community', desc: 'Repeat clientele build lasting connections over the 4–5 month voyage.', icon: <Users size={22} /> },
        { title: 'Multi-Night Immersions', desc: 'Extended stays in key destinations for genuine cultural depth.', icon: <MapPin size={22} /> },
        { title: 'Seamless 5-Month Logistics', desc: 'Every detail managed so clients never feel the weight of planning.', icon: <ShieldCheck size={22} /> },
    ]

    const lineComparison = [
        { name: 'Regent Seven Seas', positioning: 'Best all-inclusive luxury' },
        { name: 'Viking Ocean', positioning: 'Strong value and enrichment' },
        { name: 'Oceania Cruises', positioning: 'Culinary-focused' },
        { name: 'Silversea', positioning: 'Expedition + luxury hybrid' },
    ]

    const faqs = [
        { question: 'How much does a Regent world cruise cost?', answer: 'Between $85,000 and $250,000+ per person depending on suite category and itinerary.' },
        { question: 'What is included in a Regent world cruise?', answer: 'Airfare, excursions, dining, gratuities, WiFi, transfers, and luxury accommodations.' },
        { question: 'Are excursions really unlimited?', answer: 'Yes, most ports include multiple complimentary excursion options.' },
        { question: 'How long is a Regent world cruise?', answer: 'Typically 120 to 160 nights.' },
        { question: 'Do Regent world cruises sell out?', answer: 'Yes, often within weeks or sooner for premium suites.' },
        { question: 'Which ships operate Regent world cruises?', answer: 'Common ships include Seven Seas Splendor, Mariner, and Voyager.' },
        { question: 'Is Regent better than Viking for world cruises?', answer: 'Regent offers more inclusions, while Viking focuses on lower entry pricing.' },
        { question: 'Can you book only part of a world cruise?', answer: 'Yes, segments may be available but are limited and in high demand.' },
        { question: 'Are gratuities included?', answer: 'Yes, all gratuities are included.' },
        { question: 'Is WiFi included?', answer: 'Yes, unlimited WiFi is included.' },
        { question: 'What is the best suite on Regent?', answer: 'The Regent Suite offers the highest level of luxury and space.' },
        { question: 'What type of traveler books a world cruise?', answer: 'Typically affluent retirees, business owners, and luxury travelers seeking extended travel.' },
        { question: 'Is travel insurance required?', answer: 'Not required but strongly recommended due to the length and cost.' },
        { question: 'What is the dress code onboard?', answer: 'Elegant casual with optional formal evenings.' },
        { question: 'When should I book a Regent world cruise?', answer: 'Ideally 18–24 months in advance for best availability and pricing.' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Regent Seven Seas World Cruise Guide (2026–2029) | Trips & Ships Luxury Travel</title>
                <meta name="description" content="Plan your Regent Seven Seas world cruise with Angela Hughes. Complete guide to pricing, suite categories, inclusions, routes, and booking strategy for 2026–2029." />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                <link rel="preload" as="image" href={heroImages[0]} />
            </Helmet>

            <Navbar />

            {/* ── HERO ──────────────────────────────────────────────────────────── */}
            <section className="regent-hero">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`regent-hero-bg ${index === currentHero ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
                <div className="regent-hero-overlay"></div>

                <div className="regent-inner regent-hero-inner">
                    <span className="regent-eyebrow">
                        <Globe size={14} strokeWidth={2} />
                        Trips &amp; Ships Luxury Travel
                    </span>

                    <h1 className="regent-h1">
                        Regent Seven Seas World Cruise
                        <span className="regent-h1-years">Guide (2026–2029)</span>
                    </h1>
                </div>
            </section>

            {/* ── INTRO / WHAT MAKES REGENT DIFFERENT ──────────────────────────── */}
            <section className="regent-section regent-split-wrap-small">
                <div className="regent-inner">
                    <div className="regent-split-container-small">
                        <div className="regent-split-visual-small">
                            <div className="regent-split-img-wrap-small">
                                <div className="regent-split-img"></div>
                                <div className="regent-split-overlay"></div>
                                <div className="regent-split-badge-small">
                                    <Crown size={16} />
                                    <span>The Gold Standard</span>
                                </div>
                            </div>
                        </div>

                        <div className="regent-split-content-small">
                            <div className="regent-split-header-small">
                                <span className="regent-eyebrow">
                                    <Crown size={14} />
                                    Ultra-Luxury Lifestyle
                                </span>
                                <h2 className="regent-h2">The Most Complete Luxury World Cruise Experience Available</h2>
                                <div className="regent-bar"></div>
                                <p className="regent-p">
                                    Regent Seven Seas Cruises has redefined what a world cruise should be.
                                </p>
                                <p className="regent-p">
                                    This is not simply a long voyage. It is a fully integrated, door-to-door luxury lifestyle experience designed for travelers who want to see the world without sacrificing comfort, consistency, or service.
                                </p>
                                <p className="regent-p" style={{ fontWeight: '600', color: 'var(--rss-navy)', marginTop: '24px' }}>
                                    Unlike most competitors, Regent removes nearly every friction point in travel:
                                </p>
                            </div>

                            <div className="regent-split-list-small">
                                {[
                                    { icon: <Plane size={18} />, label: 'Business or First Class Air included' },
                                    { icon: <Compass size={18} />, label: 'Unlimited Shore Excursions in every port' },
                                    { icon: <Hotel size={18} />, label: 'Pre- and Post-Cruise Luxury Hotel Programs' },
                                    { icon: <Navigation size={18} />, label: 'Door-to-Door Transfers and Luggage Handling' },
                                    { icon: <Utensils size={18} />, label: 'Michelin-level dining included across all venues' },
                                    { icon: <Globe size={18} />, label: 'Gratuities, WiFi, and valet laundry included' },
                                ].map((pillar, i) => (
                                    <div key={i} className="regent-split-item-compact">
                                        <div className="regent-split-icon-compact">{pillar.icon}</div>
                                        <span className="regent-split-label-compact">{pillar.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="regent-split-conclusion-small">
                                <span className="regent-conclusion-highlight">What this means for your client:</span>
                                <p>No constant decision-making, no surprise costs, and no operational stress over a 4–5 month journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── SNAPSHOT TABLE ────────────────────────────────────────────────── */}
            <section className="regent-section regent-bg-soft">
                <div className="regent-inner">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="regent-eyebrow" style={{ color: 'var(--rss-navy)', justifyContent: 'center' }}>
                            <Ship size={14} />
                            At a Glance
                        </span>
                        <h2 className="regent-h2" style={{ textAlign: 'center' }}>Regent World Cruise Snapshot</h2>
                        <div className="regent-bar regent-bar-center"></div>
                    </div>

                    <div className="regent-snapshot-grid">
                        {[
                            { label: 'Duration', value: '120–160 Nights', icon: <Clock size={22} /> },
                            { label: 'Countries Visited', value: '30–60', icon: <Globe size={22} /> },
                            { label: 'Ports of Call', value: '70–150', icon: <MapPin size={22} /> },
                            { label: 'Price Range', value: '$85,000–$250,000+', icon: <DollarSign size={22} /> },
                            { label: 'Ships', value: 'Splendor, Mariner, Voyager', icon: <Ship size={22} /> },
                            { label: 'Style', value: 'Ultra-Luxury, Fully All-Inclusive', icon: <Crown size={22} /> },
                        ].map((item, i) => (
                            <div key={i} className="regent-snapshot-card">
                                <div className="regent-snapshot-icon">{item.icon}</div>
                                <p className="regent-snapshot-label">{item.label}</p>
                                <p className="regent-snapshot-value">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRICING DEEP DIVE ─────────────────────────────────────────────── */}
            <section className="regent-section regent-bg-dark">
                <div className="regent-bg-pattern"></div>
                <div className="regent-inner regent-relative">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="regent-eyebrow" style={{ color: '#94a3b8', justifyContent: 'center' }}>
                            <Wallet size={14} />
                            Real Value vs Sticker Price
                        </span>
                        <h2 className="regent-h2-white" style={{ textAlign: 'center' }}>Regent World Cruise Pricing Deep Dive</h2>
                        <div className="regent-bar-white regent-bar-center"></div>
                        <p className="regent-p-white" style={{ maxWidth: '680px', margin: '0 auto 48px', textAlign: 'center' }}>
                            At first glance, Regent appears more expensive than other world cruise lines. But when you break it down, the value proposition becomes clear.
                        </p>
                    </div>

                    <div className="regent-pricing-layout">
                        <div className="regent-pricing-inclusions">
                            <p className="regent-pricing-section-title">What's Included — Typical Value</p>
                            {inclusions.map((item, i) => (
                                <div key={i} className="regent-pricing-row">
                                    <div className="regent-pricing-row-icon">{item.icon}</div>
                                    <span className="regent-pricing-row-label">{item.label}</span>
                                    <span className="regent-pricing-row-value">{item.value}</span>
                                </div>
                            ))}
                            <div className="regent-pricing-total">
                                <span>Total Included Value</span>
                                <span>$30,000–$75,000+ per person</span>
                            </div>
                        </div>

                        <div className="regent-pricing-conclusion">
                            <div className="regent-pricing-conclusion-icon">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="regent-h3-white">Conclusion</h3>
                            <p className="regent-p-white">
                                Regent is often one of the strongest value propositions in ultra-luxury travel, not the most expensive.
                            </p>
                            <div className="regent-pricing-insight">
                                <AlertCircle size={18} />
                                <p>Most travelers miss $30,000–$75,000+ in included value when comparing Regent to competitors on price alone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITE CATEGORIES ─────────────────────────────────────────────── */}
            <section className="regent-section regent-bg-white">
                <div className="regent-inner">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="regent-eyebrow" style={{ color: 'var(--rss-navy)', justifyContent: 'center' }}>
                            <Gem size={14} />
                            What You're Really Buying
                        </span>
                        <h2 className="regent-h2" style={{ textAlign: 'center' }}>Suite Categories Explained</h2>
                        <div className="regent-bar regent-bar-center"></div>
                    </div>

                    <div className="regent-suites-grid">
                        {suites.map((suite, i) => (
                            <div key={i} className={`regent-suite-card ${i === suites.length - 1 ? 'featured' : ''}`}>
                                <div className="regent-suite-icon">{suite.icon}</div>
                                <p className="regent-suite-level">{suite.level}</p>
                                <p className="regent-suite-experience">{suite.experience}</p>
                                {i === suites.length - 1 && (
                                    <span className="regent-suite-badge">Top Tier</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="regent-suite-insight">
                        <Sparkles size={18} />
                        <p>Key Insight: Most experienced world cruisers upgrade beyond entry-level due to time spent onboard.</p>
                    </div>
                </div>
            </section>
            {/* ── REGENT vs COMPETITORS ────────────────────────────────────────── */}
            {/* ── THE SIGNATURE DOMINANCE LEDGER (Comparison Overview) ───────────── */}
            <section className="regent-section regent-ledger-wrap">
                <div className="regent-inner">
                    <div className="regent-ledger-header">
                        <span className="regent-eyebrow">
                            <Sparkles size={14} />
                            The Industry Benchmark
                        </span>
                        <h2 className="regent-h2">What Makes Regent World Cruises Different</h2>
                        <div className="regent-bar regent-bar-center"></div>
                    </div>

                    <div className="regent-ledger-stack">
                        {[
                            { feature: 'Shore Excursions', regent: 'Unlimited Included', others: 'Pay per excursion', icon: <Compass size={24} /> },
                            { feature: 'Airfare', regent: 'Included', others: 'Not included', icon: <Plane size={24} /> },
                            { feature: 'Dining', regent: 'All specialty included', others: 'Limited', icon: <Utensils size={24} /> },
                            { feature: 'Experience', regent: 'Seamless', others: 'Fragmented', icon: <LayoutList size={24} /> },
                            { feature: 'Client Feel', regent: 'Effortless luxury', others: 'Managed travel', icon: <Heart size={24} /> },
                        ].map((item, i) => (
                            <div key={i} className="regent-ledger-blade">
                                <div className="regent-ledger-info">
                                    <div className="regent-ledger-icon">{item.icon}</div>
                                    <h3 className="regent-ledger-title">{item.feature}</h3>
                                </div>

                                <div className="regent-ledger-comparison">
                                    <div className="regent-ledger-side is-regent">
                                        <div className="regent-ledger-tag">Regent Standard</div>
                                        <p className="regent-ledger-text">{item.regent}</p>
                                    </div>

                                    <div className="regent-ledger-vs">VS</div>

                                    <div className="regent-ledger-side is-others">
                                        <div className="regent-ledger-tag">Typical Tier</div>
                                        <p className="regent-ledger-text">{item.others}</p>
                                    </div>
                                </div>
                                <div className="regent-ledger-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── ROUTE FLOW ───────────────────────────────────────────────────── */}
            <section className="regent-section regent-route-section">
                <div className="regent-bg-pattern-dark"></div>
                <div className="regent-inner regent-relative">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <span className="regent-eyebrow" style={{ color: '#93c5fd', justifyContent: 'center' }}>
                            <Compass size={14} className="regent-spin-slow" />
                            A Strategic Global Pattern
                        </span>
                        <h2 className="regent-h2-white" style={{ textAlign: 'center' }}>Typical World Cruise Route Flow</h2>
                        <div className="regent-bar-premium regent-bar-center"></div>
                        <p className="regent-p-white" style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center', opacity: 0.9 }}>
                            While itineraries change yearly, most Regent world cruises follow a strategic global pattern curated to balance bucket-list destinations, cultural depth, and comfortable pacing.
                        </p>
                    </div>

                    <div className="regent-route-scroll-container">
                        <div className="regent-route-cinematic-track">
                            {[...routeStops, ...routeStops].map((stop, i) => (
                                <div key={i} className="regent-route-cinematic-card">
                                    <div className="regent-route-image-container">
                                        <img src={stop.img} alt={stop.region} className="regent-route-image" />
                                        <div className="regent-route-overlay"></div>
                                    </div>
                                    <div className="regent-route-content">
                                        <div className="regent-route-header">
                                            <div className="regent-route-icon-box">{stop.icon}</div>
                                        </div>
                                        <h3 className="regent-route-title">{stop.region}</h3>
                                        <p className="regent-route-info">{stop.detail}</p>
                                        <div className="regent-route-path-line"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD BOOK ──────────────────────────────────────────────── */}
            {/* ── THE SIGNATURE PORTRAIT PROFILES (Traveler Archetypes) ─────────── */}
            <section className="regent-section regent-profiles-wrap">
                <div className="regent-inner">
                    <div className="regent-profiles-header">
                        <span className="regent-eyebrow">
                            <Users size={14} />
                            Curated for the Discerning
                        </span>
                        <h2 className="regent-h2">Who Should Book a Regent World Cruise</h2>
                        <div className="regent-bar regent-bar-center"></div>
                        <p className="regent-profiles-intro">This product is ideal for:</p>
                    </div>

                    <div className="regent-profiles-grid">
                        {[
                            { title: 'High-net-worth travelers seeking simplicity', icon: <Crown size={24} />, num: '01' },
                            { title: 'Retired or semi-retired clients', icon: <Clock size={24} />, num: '02' },
                            { title: 'Entrepreneurs taking extended lifestyle travel', icon: <TrendingUp size={24} />, num: '03' },
                            { title: 'Clients comparing private jet journeys', icon: <Plane size={24} />, num: '04' },
                            { title: 'Repeat luxury cruisers seeking a “next level” experience', icon: <Gem size={24} />, num: '05' },
                        ].map((item, i) => (
                            <div key={i} className="regent-profile-card">
                                <span className="regent-profile-number">{item.num}</span>
                                <div className="regent-profile-icon-frame">
                                    {item.icon}
                                </div>
                                <p className="regent-profile-text">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="regent-section regent-strategy-spotlight">
                <div className="regent-inner">
                    <div className="regent-strategy-spotlight-card">
                        <div className="regent-strategy-spotlight-visual">
                            {[
                                'https://images.unsplash.com/photo-1548574505-12caf0050b5b?q=80&w=1200&auto=format&fit=crop',
                                'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop',
                                'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop'
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className={`regent-strategy-spotlight-img ${activeStrategy === i ? 'active' : ''}`}
                                >
                                    <img src={img} alt="Strategy" />
                                    <div className="regent-strategy-spotlight-overlay"></div>
                                </div>
                            ))}
                            <div className="regent-strategy-spotlight-caption">
                                <h2 className="regent-strategy-spotlight-h2">Booking Strategy</h2>
                                <div className="regent-bar-premium"></div>
                            </div>
                        </div>

                        <div className="regent-strategy-spotlight-content">
                            <div className="regent-strategy-spotlight-list">
                                {[
                                    {
                                        num: '01',
                                        title: 'Register Interest Early',
                                        desc: 'Secure your position before public release opens to the market.',
                                        icon: <CalendarClock size={20} />,
                                        tag: 'Priority Release'
                                    },
                                    {
                                        num: '02',
                                        title: 'Work with an Advisor',
                                        desc: 'Access allocation and exclusive inventory not available through direct booking.',
                                        icon: <ShieldCheck size={20} />,
                                        tag: 'Concierge Access'
                                    },
                                    {
                                        num: '03',
                                        title: 'Secure Deposit Quickly',
                                        desc: 'Top suites and prime categories disappear within days of release.',
                                         icon: <Gem size={20} />,
                                        tag: 'Suite Security'
                                    },
                                ].map((step, i) => (
                                    <div
                                        key={i}
                                        className={`regent-strategy-spotlight-item ${activeStrategy === i ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveStrategy(i)}
                                        onClick={() => setActiveStrategy(i)}
                                    >

                                        <div className="regent-strategy-spotlight-item-main">
                                            <div className="regent-strategy-spotlight-icon-wrap">
                                                {step.icon}
                                                <span className="regent-strategy-spotlight-num">{step.num}</span>
                                            </div>
                                            <div className="regent-strategy-spotlight-text">
                                                <div className="regent-strategy-spotlight-top">
                                                    <h3 className="regent-strategy-spotlight-title">{step.title}</h3>
                                                    <span className="regent-strategy-spotlight-tag">{step.tag}</span>
                                                </div>
                                                <div className="regent-strategy-spotlight-reveal">
                                                    <p className="regent-strategy-spotlight-desc">{step.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="regent-strategy-spotlight-footer">
                                <p>Timing matters more than anything. World cruises sell out in days or weeks. Top suites sell out immediately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE SIGNATURE MINIMALIST BLADE LIST (Hidden Advantages) ─────────── */}
            <section className="regent-section regent-simple-wrap">
                <div className="regent-inner">
                    <div className="regent-simple-header">
                        <span className="regent-eyebrow">
                            <Sparkles size={14} />
                            Real Differentiators
                        </span>
                        <h2 className="regent-h2-white">Hidden Advantages That Drive Client Satisfaction</h2>
                        <div className="regent-bar-premium"></div>
                    </div>

                    <div className="regent-simple-list">
                        {[
                            {
                                title: 'Priority access to limited excursions',
                                desc: 'First access to limited and high-demand shore excursions in every port.',
                                icon: <Award size={20} />,
                                meta: 'Priority'
                            },
                            {
                                title: 'Exclusive onboard events only for world cruise guests',
                                desc: 'World cruise guests enjoy private gala dinners and shoreside events.',
                                icon: <Sparkles size={20} />,
                                meta: 'Exclusive'
                            },
                            {
                                title: 'Strong onboard community and repeat clientele',
                                desc: 'Repeat clientele build lasting connections over the 5-month voyage.',
                                icon: <Users size={20} />,
                                meta: 'Network'
                            },
                            {
                                title: 'Multi-night destination immersions',
                                desc: 'Extended stays in key destinations for genuine cultural depth.',
                                icon: <MapPin size={20} />,
                                meta: 'Immersive'
                            },
                            {
                                title: 'Seamless logistics across 4–5 months',
                                desc: 'Every detail managed so clients never feel the weight of planning.',
                                icon: <ShieldCheck size={20} />,
                                meta: 'Seamless'
                            },
                        ].map((adv, i) => (
                            <div key={i} className="regent-simple-blade">
                                <div className="regent-simple-num">0{i + 1}</div>
                                <div className="regent-simple-content">
                                    <div className="regent-simple-top">
                                        <h3 className="regent-simple-title">{adv.title}</h3>
                                        <span className="regent-simple-meta">{adv.meta}</span>
                                    </div>
                                    <p className="regent-simple-desc">{adv.desc}</p>
                                </div>
                                <div className="regent-simple-icon">{adv.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPERT AUTHORITY ─────────────────────────────────────────────── */}
            <section className="regent-section regent-expert-section">
                <div className="regent-inner">
                    <div className="regent-expert-layout">
                        <div className="regent-expert-portrait-wrap">
                            <div className="regent-expert-portrait">
                                <img src={image} alt="Angela Hughes - CEO, Trips & Ships Luxury Travel" />
                            </div>
                            <div className="regent-expert-badge">
                                <strong>40+</strong>
                                <span>Years Experience</span>
                            </div>
                        </div>

                        <div className="regent-expert-content">
                            <span className="regent-eyebrow" style={{ color: 'var(--rss-navy)' }}>
                                <Crown size={14} />
                                Expert Authority
                            </span>
                            <h2 className="regent-h2">Angela Hughes – CEO, Trips &amp; Ships Luxury Travel</h2>
                            <div className="regent-bar"></div>

                            <div className="regent-expert-quote">
                                "Regent world cruises consistently outperform expectations because they remove complexity. Clients don't feel like they are managing a trip — they feel like they are living a global experience."
                                <span className="regent-expert-quote-sig">— Angela Hughes, CEO</span>
                            </div>

                            <div className="regent-expert-credentials">
                                {[
                                    { icon: <Award size={18} />, text: 'Luxury Travel Influencer of the Year (2024) — Travel Leaders Network' },
                                    { icon: <Star size={18} />, text: 'TravelPulse\'s Most Influential Women in Travel (2026)' },
                                    { icon: <Globe size={18} />, text: 'Featured in Travel Weekly, TravelPulse, Insider Travel Report' },
                                    { icon: <Ship size={18} />, text: 'Personally sailed multiple world cruise segments' },
                                ].map((cred, i) => (
                                    <div key={i} className="regent-expert-cred">
                                        <div className="regent-expert-cred-icon">{cred.icon}</div>
                                        <p>{cred.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── REGENT VS OTHER LINES ────────────────────────────────────────── */}
            <section className="regent-section regent-bg-soft">
                <div className="regent-inner">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span className="regent-eyebrow" style={{ color: 'var(--rss-navy)', justifyContent: 'center' }}>
                            <LayoutList size={14} />
                            Competitive Landscape
                        </span>
                        <h2 className="regent-h2" style={{ textAlign: 'center' }}>Regent vs Other World Cruise Options</h2>
                        <div className="regent-bar regent-bar-center"></div>
                    </div>

                    <div className="regent-lines-grid">
                        {lineComparison.map((line, i) => (
                            <div key={i} className={`regent-line-card ${i === 0 ? 'regent-line-card-featured' : ''}`}>
                                {i === 0 && <span className="regent-line-badge">Recommended</span>}
                                <p className="regent-line-name">{line.name}</p>
                                <p className="regent-line-positioning">{line.positioning}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE SIGNATURE VALUE TRACKER (Worth Analysis) ───────────────── */}
            <section className="regent-section regent-tracker-wrap">
                <div className="regent-inner">
                    <div className="regent-tracker-header">
                        <span className="regent-eyebrow">
                            <TrendingUp size={14} />
                            Investment Appraisal
                        </span>
                        <h2 className="regent-h2-white">Is a Regent World Cruise Worth It?</h2>
                        <p className="regent-tracker-verdict">Yes — because it delivers:</p>
                        <div className="regent-bar-premium"></div>
                    </div>

                    <div className="regent-tracker-container">
                        <div className="regent-tracker-line"></div>
                        
                        {[
                            {
                                pillar: 'Predictable Luxury',
                                desc: 'Every detail of your six-star experience is pre-planned and included, from fine dining to premium spirits.'
                            },
                            {
                                pillar: 'Seamless Execution',
                                desc: 'From luggage handling to complex transfers, the entire world voyage operates with absolute precision.'
                            },
                            {
                                pillar: 'Global Access Without Stress',
                                desc: 'Visit the world’s most iconic and remote destinations without ever worrying about logistics or safety.'
                            },
                            {
                                pillar: 'Exceptional Long-Term Value',
                                desc: 'While the investment is significant, the all-inclusive per-diem offers unparalleled value for a 5-month journey.'
                            },
                        ].map((item, i) => (
                            <div key={i} className={`regent-tracker-milestone ${i % 2 === 0 ? 'is-left' : 'is-right'}`}>
                                <div className="regent-tracker-node-box">
                                    <div className="regent-tracker-node">
                                        <div className="regent-tracker-dot"></div>
                                    </div>
                                    <div className="regent-tracker-num">0{i + 1}</div>
                                </div>
                                <div className="regent-tracker-content">
                                    <h3 className="regent-tracker-title">{item.pillar}</h3>
                                    <p className="regent-tracker-desc">{item.desc}</p>
                                    <div className="regent-tracker-indicator">
                                        <div className="regent-tracker-bar"></div>
                                        <span className="regent-tracker-meta">Verified Value Pillar</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── FAQ SECTION ──────────────────────────────────────────────────── */}
            <section className="regent-faq-section">
                <div className="regent-faq-inner">
                    <div style={{ textAlign: 'center'}}>
                        <span className="regent-eyebrow" style={{ color: 'var(--rss-navy)', justifyContent: 'center' }}>
                            <AlertCircle size={14} />
                            AEO Optimized
                        </span>
                        <h2 className="regent-h2">Frequently Asked Questions</h2>
                        <div className="regent-bar regent-bar-center"></div>
                    </div>

                    <div className="regent-faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="regent-faq-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="regent-faq-question">
                                    <span>{faq.question}</span>
                                    <span className="regent-faq-icon">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="regent-faq-answer">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegentSevenSeas