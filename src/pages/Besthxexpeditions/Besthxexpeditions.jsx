import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
// import Profile_AH from "../../assets/image.webp"

// ── HX Expedition images – swap paths to your actual assets ──────────────
// import heroImg1 from '../../assets/BestHXExpeditions/hero1.jpg'
// import heroImg2 from '../../assets/BestHXExpeditions/hero2.jpg'
// import heroImg3 from '../../assets/BestHXExpeditions/hero3.jpg'

// import antarcticaImg from '../../assets/BestHXExpeditions/antarctica-expedition.webp'
// import galapagosImg from '../../assets/BestHXExpeditions/galapagos-expedition.webp'
// import svalbardImg from '../../assets/BestHXExpeditions/svalbard-expedition.webp'
// import greenlandImg from '../../assets/BestHXExpeditions/greenland-expedition.webp'

// import roaldAmundsenImg from '../../assets/BestHXExpeditions/ms-roald-amundsen.webp'
// import fridtjofNansenImg from '../../assets/BestHXExpeditions/ms-fridtjof-nansen.webp'
// import santaCruzImg from '../../assets/BestHXExpeditions/ms-santa-cruz-ii.webp'
// import spitsbergenImg from '../../assets/BestHXExpeditions/ms-spitsbergen.webp'

// import zodiacLandingImg from '../../assets/BestHXExpeditions/zodiac-landing.webp'
// import wildlifeImg from '../../assets/BestHXExpeditions/expedition-wildlife.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Camera, Wind, Binoculars, Snowflake
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function BestHXExpeditions() {

    // ── Hero slider ────────────────────────────────────────────────────────
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero(prev => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    // ── FAQ ────────────────────────────────────────────────────────────────
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const mediToggleFaq = index => setMediActiveFaq(mediActiveFaq === index ? null : index)

    // ── Destination tabs ───────────────────────────────────────────────────
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    // ── Mistakes slider ────────────────────────────────────────────────────
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)
    useEffect(() => {
        if (isMediSliderHovered) return
        const t = setInterval(() => setMediActiveMistake(p => (p + 1) % 6), 5000)
        return () => clearInterval(t)
    }, [isMediSliderHovered])

    // ── Ship tabs (new section) ────────────────────────────────────────────
    const [activeShip, setActiveShip] = useState(0)

    // ─────────────────────────────────────────────────────────────────────
    // DATA
    // ─────────────────────────────────────────────────────────────────────

    const mediItineraries = [
        {
            title: 'Antarctica Cruises',
            // img: antarcticaImg,
            badge: 'MOST POPULAR',
            bestFor: ['Bucket list travelers', 'Wildlife lovers', 'Dramatic scenery seekers', 'Travelers wanting the iconic expedition experience'],
            highlights: ['Penguin colonies', 'Whale sightings', 'Icebergs', 'Zodiac landings', 'Glacier scenery'],
            note: 'Antarctica is the most popular first expedition destination for many travelers. For many travelers, Antarctica becomes a life changing travel experience.'
        },
        {
            title: 'Galápagos Cruises',
            // img: galapagosImg,
            badge: 'EASIEST FOR BEGINNERS',
            bestFor: ['Wildlife lovers', 'Warmer weather travelers', 'Softer expedition experiences', 'First time expedition cruisers nervous about polar travel'],
            highlights: ['Incredible wildlife encounters', 'Easy Zodiac landings', 'Snorkeling opportunities', 'Educational naturalist programs', 'Smaller ship atmosphere'],
            note: 'The Galápagos offers one of the easiest and most approachable expedition cruise experiences. HX operates the MS Santa Cruz II in the Galápagos.'
        },
        {
            title: 'Svalbard Cruises',
            // img: svalbardImg,
            badge: 'TRUE ARCTIC EXPERIENCE',
            bestFor: ['Arctic wildlife lovers', 'Polar bear enthusiasts', 'Travelers seeking remote Arctic exploration'],
            highlights: ['Polar bears', 'Walrus', 'Arctic foxes', 'Massive glaciers', 'Midnight sun'],
            note: 'Svalbard feels more remote and unpredictable than many first timers expect. Wildlife sightings are never guaranteed and weather can significantly impact itineraries.'
        },
        {
            title: 'Greenland Cruises',
            // img: greenlandImg,
            badge: 'SCENIC ARCTIC',
            bestFor: ['Scenic travelers', 'Cultural exploration', 'Iceberg photography', 'Travelers wanting less crowded Arctic experiences'],
            highlights: ['Massive icebergs', 'Inuit culture', 'Remote villages', 'Dramatic fjords', 'Arctic scenery'],
            note: 'Many travelers find Greenland slightly less intimidating than Antarctica while still delivering an authentic expedition experience.'
        }
    ]

    const ships = [
        {
            name: 'MS Roald Amundsen',
            // img: roaldAmundsenImg,
            bestFor: ['Antarctica', 'Modern comfort', 'First time polar travelers'],
            note: "HX's hybrid powered ships have become particularly popular with first time expedition travelers seeking modern comfort."
        },
        {
            name: 'MS Fridtjof Nansen',
            // img: fridtjofNansenImg,
            bestFor: ['Arctic exploration', 'Hybrid expedition travel', 'Comfortable expedition experiences'],
            note: 'A sister ship to Roald Amundsen, offering the same hybrid technology with excellent expedition programming.'
        },
        {
            name: 'MS Santa Cruz II',
            // img: santaCruzImg,
            bestFor: ['Galápagos wildlife', 'Smaller ship atmosphere', 'Beginner expedition travelers'],
            note: 'The MS Santa Cruz II is purpose-built for Galápagos exploration with expert naturalist guides onboard.'
        },
        {
            name: 'MS Spitsbergen',
            // img: spitsbergenImg,
            bestFor: ['Arctic wildlife', 'More traditional expedition atmosphere'],
            note: 'MS Spitsbergen offers a classic expedition vessel experience for those seeking a more traditional atmosphere.'
        }
    ]

    const mediMistakes = [
        {
            title: 'Booking the Wrong Destination',
            desc: 'Each HX destination delivers a very different experience. Antarctica, Galápagos, Svalbard and Greenland each suit different traveler personalities and comfort levels.',
            bullets: ['Antarctica is dramatic but includes the Drake Passage', 'Galápagos is warmer and far more approachable for beginners']
        },
        {
            title: 'Underestimating Activity Levels',
            desc: 'Zodiac boarding and walking excursions are common. Moderate mobility is helpful for most HX expedition itineraries.'
        },
        {
            title: 'Packing Incorrectly',
            desc: 'Layered clothing, waterproof gear and proper footwear are essential. Many first timers underpack for polar conditions.'
        },
        {
            title: 'Choosing Based Only on Price',
            desc: 'Ship atmosphere, destination fit, activity levels and expedition leadership quality all matter far more than base pricing on expedition cruises.'
        },
        {
            title: 'Ignoring Ship Atmosphere Differences',
            desc: 'The MS Santa Cruz II in the Galápagos offers a very different atmosphere from the MS Roald Amundsen in Antarctica. Matching ship to destination matters.'
        },
        {
            title: 'Waiting Too Long to Book',
            desc: 'Popular HX expedition itineraries — especially Antarctica and Galápagos — sell out well in advance. Early booking secures better cabin choices and pricing.'
        }
    ]

    const mediFaqs = [
        { question: 'What is the best HX Expeditions cruise for first timers?', answer: 'For many travelers, Antarctica and the Galápagos are the best first HX expedition cruises.' },
        { question: 'Is Antarctica good for a first expedition cruise?', answer: 'Yes. Antarctica is one of the world\'s most iconic expedition destinations for first time travelers.' },
        { question: 'Which HX destination is easiest for beginners?', answer: 'The Galápagos is generally considered the easiest and most approachable expedition destination.' },
        { question: 'Are HX expedition cruises physically demanding?', answer: 'Moderate mobility is helpful because Zodiac boarding and walking excursions are common.' },
        { question: 'What should first time expedition travelers expect?', answer: 'Expect wildlife encounters, educational programming, flexible itineraries and outdoor exploration.' },
        { question: 'Is the Drake Passage rough?', answer: 'It can be. Conditions vary significantly from sailing to sailing.' },
        { question: 'Which HX ship is best for beginners?', answer: 'MS Roald Amundsen and MS Santa Cruz II are excellent beginner friendly expedition ships.' },
        { question: 'Are expedition cruises good for older travelers?', answer: 'Yes, although mobility and activity levels should be considered carefully.' },
        { question: 'What is included on HX expedition cruises?', answer: 'Most HX cruises include accommodations, meals, lectures and many expedition activities.' },
        { question: 'Is the Galápagos a good first expedition cruise?', answer: 'Yes. The Galápagos offers exceptional wildlife with easier logistics and warmer weather.' },
        { question: 'Which is better for beginners, Antarctica or the Arctic?', answer: 'Antarctica is often more iconic, while Greenland and some Arctic itineraries may feel slightly less intimidating.' },
        { question: 'How many people are on HX expedition ships?', answer: 'Passenger counts vary by ship, typically ranging from smaller vessels to ships carrying around 500 guests.' },
        { question: 'What should I pack for my first expedition cruise?', answer: 'Layered clothing, waterproof gear and proper footwear are essential.' },
        { question: 'How expensive are HX expedition cruises?', answer: 'Pricing varies greatly depending on destination, season and cabin category.' },
        { question: 'Why use a travel advisor for expedition cruises?', answer: 'Expedition cruising involves major differences in ship style, destinations and activity levels where expert guidance is extremely valuable.' }
    ]

    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "sameAs": ["https://www.facebook.com/tripsandships/", "https://www.instagram.com/tripsandshipsluxurytravel"]
            },
            { "@type": "TravelAgency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsandships.com", "description": "Luxury travel agency specializing in cruises, expeditions, safaris, and premium travel experiences." },
            { "@type": "Person", "name": "Angela Hughes", "jobTitle": "CEO of Trips & Ships Luxury Travel", "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.", "worksFor": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" } },
            { "@type": "WebPage", "name": "Best HX Expeditions Cruises for First Timers", "url": "https://www.tripsandships.com/best-hx-expeditions-cruises-for-first-timers", "description": "Discover the best HX Expeditions cruises for first timers. Compare Antarctica, Svalbard, Greenland and Galápagos expeditions with expert guidance from Trips & Ships Luxury Travel." },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Expedition Cruises", "item": "https://www.tripsandships.com/expedition-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Best HX Expeditions for First Timers", "item": "https://www.tripsandships.com/best-hx-expeditions-cruises-for-first-timers" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": mediFaqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
            }
        ]
    }

    // ─────────────────────────────────────────────────────────────────────
    // RENDER
    // ─────────────────────────────────────────────────────────────────────
    return (
        <>
            <Helmet>
                <title>Best HX Expeditions Cruises for First Timers | Antarctica, Arctic &amp; Galápagos Guide</title>
                <meta name="title" content="Best HX Expeditions Cruises for Beginners | Expert Planning Guide" />
                <meta name="description" content="Discover the best HX Expeditions cruises for first timers. Compare Antarctica, Svalbard, Greenland and Galápagos expeditions with expert guidance from Trips & Ships Luxury Travel." />
                <meta name="keywords" content="Best HX Expeditions cruises for first timers, HX expedition cruises, beginner expedition cruises, Antarctica expedition cruises, Arctic expedition cruises" />
                <script type="application/ld+json">{JSON.stringify(mediSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════════════
                HERO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`}
                        // style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Compass size={16} />
                        <span>Expert Expedition Cruise Planning</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best HX Expeditions Cruises for First Timers
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                PREMIUM INTRO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Left: Editorial */}
                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">FIRST TIMER EXPEDITION GUIDE</span>
                            <h2 className="medi-premium-heading">Choosing Your First Expedition Cruise Can Feel Overwhelming</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                For many travelers, expedition cruising represents a completely different type of travel experience compared to traditional cruises. Instead of casinos, Broadway style entertainment and crowded ports, expedition cruising focuses on:
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    HX Expeditions combines authentic exploration with approachable comfort through:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Binoculars size={20} />, label: 'Wildlife' },
                                        { icon: <Compass size={20} />, label: 'Exploration' },
                                        { icon: <Globe size={20} />, label: 'Nature' },
                                        { icon: <GraduationCap size={20} />, label: 'Education' },
                                        { icon: <MapPin size={20} />, label: 'Remote destinations' },
                                        { icon: <Anchor size={20} />, label: 'Zodiac landings' },
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Signature Expert */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">EXPEDITION CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, we help travelers determine which HX destination, ship and itinerary best matches comfort level, activity level, wildlife interests, travel experience, adventure tolerance, budget and luxury expectations.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips &amp; Ships Luxury Travel team provide trusted luxury expedition guidance travelers can rely on.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY HX IS GREAT FOR BEGINNERS  (medi-excel-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">EXPEDITION CRUISE PLANNING // HX EXPEDITIONS</div>
                <div className="medi-excel-coord coord-tr">78.2232° N, 15.6267° E</div>
                <div className="medi-excel-coord coord-bl">-64.2823° S, -56.3214° W</div>
                <div className="medi-excel-coord coord-br">-0.9537° S, -90.9656° W</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Why HX Expeditions Is Great For Beginners</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            HX has been operating expedition voyages since 1896 and remains one of the most established names in expedition travel.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">First time expedition travelers often appreciate:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <CheckCircle size={18} />, label: 'Strong onboard organization' },
                                        { icon: <Users size={18} />, label: 'Experienced expedition teams' },
                                        { icon: <GraduationCap size={18} />, label: 'Educational programs' },
                                        { icon: <Ship size={18} />, label: 'Comfortable ships' },
                                        { icon: <Star size={18} />, label: 'All inclusive style pricing' },
                                        { icon: <Binoculars size={18} />, label: 'Science focused experiences' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">HX also offers a wide range of destinations:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <Snowflake size={18} />, label: 'Antarctica – iconic polar experience' },
                                        { icon: <Wind size={18} />, label: 'Svalbard – true Arctic adventure' },
                                        { icon: <Globe size={18} />, label: 'Greenland – scenic Arctic exploration' },
                                        { icon: <Sun size={18} />, label: 'Galápagos – beginner friendly wildlife' },
                                        { icon: <Anchor size={18} />, label: 'Alaska – softer expedition experience' },
                                        { icon: <MapPin size={18} />, label: 'Norway – fjord expedition travel' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            HX also offers a wide range of destinations from softer expedition experiences in Alaska and Norway to more adventurous polar expeditions in Antarctica and Svalbard.
                        </p>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BEST HX DESTINATIONS  (medi-itinerary-showcase-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED EXPEDITION DESTINATIONS</span>
                        <h2 className="medi-itinerary-showcase-heading">The Best HX Expeditions Cruises For First Timers</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Left tabs */}
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((dest, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{dest.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Right showcase */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                {/* <img
                                    src={mediItineraries[mediSelectedItinerary].img}
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                /> */}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">
                                    {mediItineraries[mediSelectedItinerary].badge}
                                </span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {mediItineraries[mediSelectedItinerary].title}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Best For:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {mediItineraries[mediSelectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {mediItineraries[mediSelectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{item}</span>
                                                </span>
                                            ))}
                                        </div>
                                        <p style={{ marginTop: '14px', fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                                            {mediItineraries[mediSelectedItinerary].note}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                DESTINATION COMPARISON TABLE  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#f0f4f8', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.7, display: 'block', marginBottom: '10px' }}>
                            SIDE BY SIDE BREAKDOWN
                        </span>
                        <h2 className="medi-section-heading">Antarctica vs Arctic vs Galápagos For Beginners</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Desktop table */}
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(15,28,46,0.10)' }}>
                            <thead>
                                <tr style={{ background: '#0f1c2e' }}>
                                    {['Destination', 'Best For', 'Difficulty Level', 'Wildlife Focus', 'Weather'].map(h => (
                                        <th key={h} style={{ padding: '18px 20px', color: '#93c5fd', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: 'Antarctica',  bestFor: 'Bucket list adventure',        diff: 'Moderate',             wildlife: 'Penguins & whales', weather: 'Cold',        icon: <Snowflake size={16} /> },
                                    { dest: 'Galápagos',   bestFor: 'Easy first expedition',        diff: 'Easy',                 wildlife: 'Dense wildlife',    weather: 'Warm',        icon: <Sun size={16} /> },
                                    { dest: 'Svalbard',    bestFor: 'Polar bears & Arctic exploration', diff: 'Moderate to advanced', wildlife: 'Arctic wildlife',  weather: 'Cold',        icon: <Wind size={16} /> },
                                    { dest: 'Greenland',   bestFor: 'Scenic Arctic exploration',    diff: 'Moderate',             wildlife: 'Icebergs & culture', weather: 'Cold',       icon: <Globe size={16} /> },
                                ].map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                        <td style={{ padding: '16px 20px', fontWeight: '600', color: '#0f1c2e', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '160px' }}>
                                            <span style={{ color: '#274472' }}>{row.icon}</span>{row.dest}
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.bestFor}</td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <span style={{
                                                background: row.diff === 'Easy' ? '#dcfce7' : row.diff === 'Moderate' ? '#fef9c3' : '#fee2e2',
                                                color:      row.diff === 'Easy' ? '#166534' : row.diff === 'Moderate' ? '#854d0e' : '#991b1b',
                                                fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap'
                                            }}>{row.diff}</span>
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.wildlife}</td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.weather}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHICH HX SHIP IS BEST  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#0f1c2e', padding: '80px 20px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(39,68,114,0.35) 0%, transparent 60%)', pointerEvents: 'none' }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd', display: 'block', marginBottom: '10px' }}>
                            FLEET GUIDE
                        </span>
                        <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#ffffff', margin: '0 0 20px', lineHeight: '1.2' }}>
                            Which HX Ship Is Best For First Timers?
                        </h2>
                        <div style={{ width: '56px', height: '4px', background: '#274472', margin: '0 auto' }} />
                    </div>

                    {/* Ship selector tabs */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
                        {ships.map((ship, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveShip(idx)}
                                style={{
                                    padding: '10px 22px',
                                    borderRadius: '30px',
                                    border: `2px solid ${activeShip === idx ? '#274472' : 'rgba(255,255,255,0.15)'}`,
                                    background: activeShip === idx ? '#274472' : 'transparent',
                                    color: activeShip === idx ? '#ffffff' : '#94a3b8',
                                    fontSize: '14px', fontWeight: '600', cursor: 'pointer',
                                    transition: 'all 0.25s ease'
                                }}
                            >{ship.name}</button>
                        ))}
                    </div>

                    {/* Ship showcase card */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', background: 'rgba(255,255,255,0.04)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ height: '420px', overflow: 'hidden', position: 'relative' }}>
                            {/* <img src={ships[activeShip].img} alt={ships[activeShip].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #0f1c2e)' }} />
                        </div>
                        <div style={{ padding: '48px 48px 48px 0' }}>
                            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.2em', color: '#93c5fd', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>FEATURED SHIP</span>
                            <h3 style={{ fontSize: '28px', fontWeight: '500', color: '#ffffff', marginBottom: '20px' }}>{ships[activeShip].name}</h3>
                            <div style={{ width: '40px', height: '3px', background: '#274472', marginBottom: '24px' }} />
                            <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#93c5fd', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Best For:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {ships[activeShip].bestFor.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '15px' }}>
                                        <CheckCircle size={15} style={{ color: '#10b981', flexShrink: 0 }} />{item}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic' }}>{ships[activeShip].note}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHAT TO EXPECT  (medi-diff-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">EXPEDITION REALITY CHECK</span>
                        <h2 className="medi-diff-main-title">What To Expect On Your First Expedition Cruise</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Card 1: Travelers should expect */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Compass size={24} /></div>
                                <h3 className="medi-diff-card-title">Travelers Should Expect</h3>
                            </div>
                            <p className="medi-diff-card-text">Expedition cruising feels very different from mainstream cruising.</p>
                            <ul className="medi-diff-experience-list">
                                {['Zodiac landings','Flexible itineraries','Outdoor exploration','Casual atmosphere','Educational lectures','Wildlife focused days','Early mornings for sightings'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: Should NOT expect */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Moon size={24} /></div>
                                <h3 className="medi-diff-card-title">Travelers Should Not Expect</h3>
                            </div>
                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num" style={{ fontSize: '16px', lineHeight: '1.2' }}>ADV</div>
                                </div>
                                <div className="medi-diff-stat-label">ADVENTURE FIRST</div>
                            </div>
                            <p className="medi-diff-card-text">The destination itself becomes the entertainment.</p>
                            <ul className="medi-diff-experience-list">
                                {['Casinos','Broadway shows','Large ship nightlife','Massive entertainment venues'].map((item, i) => (
                                    <li key={i}>
                                        <span style={{ color: '#ef4444', marginRight: '8px', fontWeight: 700 }}>✕</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">The destination itself becomes the entertainment.</p>
                            </div>
                        </div>

                        {/* Card 3: Expedition focus */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Camera size={24} /></div>
                                <h3 className="medi-diff-card-title">The HX Expedition Philosophy</h3>
                            </div>
                            <p className="medi-diff-card-text">HX emphasizes:</p>
                            <ul className="medi-diff-focus-list-premium">
                                {['Science focused experiences','Expert expedition leadership','Strong onboard organization','Beginner friendly atmosphere','Educational programming'].map((item, i) => (
                                    <li key={i}>
                                        <span className="medi-diff-list-num">0{i + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">
                                    For travelers prioritizing exploration over onboard spectacle, this approach is highly appealing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                IMAGE GALLERY STRIP  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#ffffff', padding: '70px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.7, display: 'block', marginBottom: '10px' }}>
                            EXPEDITION IMAGERY
                        </span>
                        <h2 className="medi-section-heading">Experience HX Expeditions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        {[
                            // { img: `antarcticaImg`, caption: 'First time Antarctica expedition cruise', span: 'row' },
                            // { img: zodiacLandingImg, caption: 'HX expedition travelers boarding Zodiac', span: '' },
                            // { img: svalbardImg,caption: 'Polar bear during Svalbard expedition', span: '' },
                            // { img: galapagosImg,caption: 'Galápagos wildlife expedition cruise', span: '' },
                            // { img: greenlandImg,caption: 'Greenland icebergs expedition',span: '' },
                            // { img: wildlifeImg,caption: 'Beginner expedition cruise travelers', span: '' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                position: 'relative', borderRadius: '14px', overflow: 'hidden',
                                height: i === 0 ? '400px' : '230px',
                                gridRow: i === 0 ? 'span 2' : '',
                            }}>
                                {/* <img src={item.img} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> */}
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15,28,46,0.75), transparent)', padding: '20px 16px 14px' }}>
                                    <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '500' }}>{item.caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════════════ */}
            <section id="hx-expedition-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_AH} alt="Angela Hughes – Luxury Expedition Expert" /> */}
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Expedition Cruise Guidance <br className="medi-growth-title-break" />Matters More Than Ever
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes and her team specialize in helping travelers choose the right expedition cruise experience based on comfort level, destination goals and travel style.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Angela consistently helps first timers evaluate:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Comfort level','Activity level','Wildlife interests','Travel experience','Adventure tolerance','Budget'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate increasingly complex expedition choices with real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Safaris', icon: Globe },
                                        { title: 'Premium global travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box"><IconComponent size={14} /></div>
                                                <span className="medi-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                IS HX LUXURY  (medi-luxury-definition-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">DEFINING THE EXPERIENCE</span>
                        <h2 className="medi-luxury-heading">Is HX Expeditions Good For Beginners?</h2>

                        <p className="medi-luxury-paragraph">
                            HX Expeditions is best described as "Authentic expedition travel with approachable comfort, strong expedition leadership and well organized operations."
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">HX Expeditions Is Best For:</h3>
                            <div className="medi-luxury-features-grid">
                                {['First time expedition travelers','Wildlife enthusiasts','Curious travelers','Nature photographers','Travelers seeking educational experiences','Bucket list adventurers','Older travelers with moderate mobility','Those wanting all-inclusive-style pricing'].map((f, i) => (
                                    <div key={i} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                HX Expeditions May Not Be Best For: Travelers wanting traditional luxury cruising, guests seeking nightlife and entertainment, travelers uncomfortable with flexible itineraries, or travelers with significant mobility limitations.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For most first time expedition travelers, however, HX provides the ideal balance of comfort, education and authentic adventure.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        {/* <img src={zodiacLandingImg} alt="HX expedition Zodiac landing" className="medi-luxury-main-image" /> */}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                COMMON MISTAKES SLIDER  (medi-mistakes-slider-section)
            ════════════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID EXPEDITION PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common First Time Expedition Cruise Mistakes
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake(p => (p === 0 ? mediMistakes.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${mediActiveMistake === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{mistake.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{mistake.desc}</p>
                                        {mistake.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {mistake.bullets.map((b, bi) => (
                                                    <li key={bi} className="medi-mistake-card-bullet-item">
                                                        <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake(p => (p === mediMistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button key={idx} className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`} onClick={() => setMediActiveMistake(idx)} aria-label={`Slide ${idx + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BEST FOR / NOT BEST FOR  (medi-audience-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>HX Expeditions: Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">HX Expeditions Is Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Compass size={20} className="medi-audience-icon" />, label: 'First time expedition travelers' },
                                    { icon: <Binoculars size={20} className="medi-audience-icon" />, label: 'Wildlife enthusiasts' },
                                    { icon: <GraduationCap size={20} className="medi-audience-icon" />, label: 'Curious travelers' },
                                    { icon: <Camera size={20} className="medi-audience-icon" />, label: 'Nature photographers' },
                                    { icon: <Star size={20} className="medi-audience-icon" />, label: 'Travelers seeking educational experiences' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">HX Expeditions May Not Be Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Crown size={20} className="medi-audience-icon" />, label: 'Travelers wanting traditional luxury cruising' },
                                    { icon: <Moon size={20} className="medi-audience-icon" />, label: 'Guests seeking nightlife and entertainment' },
                                    { icon: <Music size={20} className="medi-audience-icon" />, label: 'Travelers uncomfortable with flexible itineraries' },
                                    { icon: <Baby size={20} className="medi-audience-icon" />, label: 'Travelers with significant mobility limitations' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY WORK WITH US  (medi-work-with-us-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">

                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE EXPEDITION ADVISOR ADVANTAGE</span>
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Expedition cruise planning involves major differences in ship style, destinations and activity levels where expert guidance is extremely valuable.
                        </p>
                    </div>

                    <div className="medi-work-timeline-flow">
                        <div className="medi-timeline-line"></div>

                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node"><Compass size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Working with experienced expedition advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        [CheckCircle, 'Choose the right first expedition destination'],
                                        [Calendar,    'Select the best season for their goals'],
                                        [Crown,       'Match ship to destination and comfort level'],
                                        [Gem,         'Access exclusive amenities and pricing'],
                                        [Compass,     'Avoid costly beginner planning mistakes'],
                                        [MapPin,      'Match destinations to wildlife interests'],
                                    ].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node"><Award size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is globally recognized for luxury travel expertise through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        [Mic,          'Travel industry speaking engagements'],
                                        [FileText,     'Weekly travel columns'],
                                        [Award,        'Advisory board leadership'],
                                        [Globe,        'International media recognition'],
                                        [GraduationCap,'Luxury Travel University training programs'],
                                    ].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node"><Ship size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 03</div>
                                <h3 className="medi-pillar-title">Trips &amp; Ships Luxury Travel specializes in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        [Ship,    'Luxury cruises'],
                                        [Anchor,  'River cruising'],
                                        [Compass, 'Expedition voyages'],
                                        [Star,    'Safaris'],
                                        [MapPin,  'Premium global travel planning'],
                                    ].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">

                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes &amp; Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                {/* <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }}
                                /> */}
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel",                          icon: Crown,         category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University",                          icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry",                    icon: Clock,         category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries",                          icon: Globe,         category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer",                     icon: Mic,           category: "SPEAKING" },
                                    { text: "Weekly industry columnist",                                    icon: FileText,      category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member",                 icon: Users,         category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year",                   icon: Award,         category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist",                      icon: Ship,          category: "SPECIALTY" },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box"><IconComp size={16} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category">{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                VIDEO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of authentic expedition adventures, stunning wildlife encounters and remote destinations that await aboard HX Expeditions.
                    </p>
                    <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)', aspectRatio: '16/9', background: '#000' }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/qUpr3evauEc"
                            title="Experience HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                INTERNAL LINKING BUTTONS  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#0f1c2e', padding: '60px 20px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd', display: 'block', marginBottom: '24px' }}>
                        EXPLORE MORE HX DESTINATIONS
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
                        {[
                            { label: 'Antarctica Cruises',   href: '/hx-expeditions-antarctica-cruises',  icon: <Snowflake size={16} /> },
                            { label: 'Svalbard Cruises',     href: '/hx-expeditions-svalbard-cruises',    icon: <Wind size={16} /> },
                            { label: 'Greenland Cruises',    href: '/hx-expeditions-greenland-cruises',   icon: <Globe size={16} /> },
                            { label: 'Galápagos Cruises',    href: '/hx-expeditions-galapagos-cruises',   icon: <Sun size={16} /> },
                            { label: 'Antarctica vs Arctic', href: '/antarctica-vs-arctic-expeditions',   icon: <Compass size={16} /> },
                            { label: 'Contact Us',           href: '/contact',                             icon: <Phone size={16} /> },
                        ].map((link, i) => (
                            <a key={i} href={link.href} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '12px 24px', borderRadius: '30px',
                                border: '2px solid rgba(39,68,114,0.6)',
                                background: 'rgba(39,68,114,0.15)',
                                color: '#e2e8f0', fontSize: '14px', fontWeight: '600',
                                textDecoration: 'none', transition: 'all 0.25s ease'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#274472'; e.currentTarget.style.borderColor = '#274472' }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(39,68,114,0.15)'; e.currentTarget.style.borderColor = 'rgba(39,68,114,0.6)' }}
                            >
                                {link.icon}{link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                FAQ  (medi-faq-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CTA  (medi-cta-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Plan Your First HX Expedition Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing the right first expedition cruise can dramatically shape how much you enjoy the experience. The right destination, ship and season truly matter.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips &amp; Ships Luxury Travel provides personalized expert guidance to help travelers confidently choose the best HX expedition cruise for their goals, comfort level and budget.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Antarctica expedition cruises','Svalbard Arctic adventures','Greenland scenic cruises','Galápagos wildlife expeditions','HX expedition cruises for beginners'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips &amp; Ships Luxury Travel today to begin planning your first expedition adventure.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Expedition Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BestHXExpeditions