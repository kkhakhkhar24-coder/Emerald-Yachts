import Navbar from '../../components/Navbar/Navbar'
import './Exploravsregent.css'

import {
    Ship, MapPin, Star, CheckCircle, Anchor, Gem,
    Crown, Phone, Globe, LayoutList, Award, Users,
    Wifi, Utensils, Sparkles, ArrowRight, Heart,
    Compass, Music, Plane, GraduationCap, Theater,
    Zap, BedDouble, Bath, Sofa, Wine, Ticket
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   IMAGE IMPORTS & PLACEHOLDERS — swap with real imports
──────────────────────────────────────────────────────────────── */
import hero1 from '../../assets/ExploraFAQ/Hero_1.webp'
import hero2 from '../../assets/ExploraFAQ/Hero_2.webp'
import hero3 from '../../assets/ExploraFAQ/Hero_3.webp'

import exploraOverviewImg from '../../assets/ExploraJourneysVsSilversea/yacht_lifestyle.png'
import exploraShipImg from '../../assets/ExploraFAQ/Hero_2.webp'
import exploraSuiteImg from '../../assets/BestSuitesExploraJourneys/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg'
import exploraDiningImg from '../../assets/ExploraJourneysVsSilversea/Expolar-dining.jpg'
import regentSuiteImg from '../../assets/SecondPage/Suite.webp'
import profileAH from '../../assets/Media (2).jpg'

const HERO_1             = hero1
const HERO_2             = hero2
const HERO_3             = hero3

const EXPLORA_OVERVIEW_IMG = exploraOverviewImg
const EXPLORA_SHIP_IMG   = exploraShipImg
const REGENT_SHIP_IMG    = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80'
const EXPLORA_SUITE_IMG  = exploraSuiteImg
const REGENT_SUITE_IMG   = regentSuiteImg
const EXPLORA_DINING_IMG = exploraDiningImg
const REGENT_DINING_IMG  = 'https://images.unsplash.com/photo-1544025162-d76538b2a5ab?w=900&q=80'
const ANGELA_IMG         = profileAH

/* ════════════════════════════════════════════════════════════ */

function ExploraVsRegent() {

    const heroImages = [HERO_1, HERO_2, HERO_3]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq]       = useState(null)
    const [activeCategory, setActiveCategory] = useState(0)

    /* ── Quick Comparison Table rows — exact from doc ── */
    const tableRows = [
        { feature: 'Best For',           explora: 'Modern luxury travelers',        regent: 'Traditional all-inclusive luxury', winner: null },
        { feature: 'Atmosphere',         explora: 'Relaxed and contemporary',        regent: 'Classic and elegant',               winner: null },
        { feature: 'Ships',              explora: 'Boutique luxury ships',           regent: 'Mid-sized luxury ships',            winner: null },
        { feature: 'Suites',             explora: 'Oceanfront suites with terraces', regent: 'Spacious all-suite accommodations', winner: null },
        { feature: 'Dining',             explora: 'Multiple international restaurants', regent: 'Gourmet specialty dining',        winner: null },
        { feature: 'Included Excursions',explora: 'Limited',                          regent: 'Unlimited in most ports',           winner: 'regent' },
        { feature: 'Included Flights',   explora: 'No',                               regent: 'Often included',                   winner: 'regent' },
        { feature: 'Gratuities',         explora: 'Included',                         regent: 'Included',                         winner: 'both' },
        { feature: 'Wi-Fi',              explora: 'Included',                         regent: 'Included',                         winner: 'both' },
        { feature: 'Beverage Program',   explora: 'Premium included',                 regent: 'Premium included',                  winner: 'both' },
        { feature: 'Luxury Level',       explora: 'Ultra-Luxury',                     regent: 'Ultra-Luxury',                      winner: 'both' },
    ]

    /* ── Category comparison tabs — Service & Entertainment ── */
    const categories = [
        {
            label: 'Service',
            explora: {
                heading: 'Explora Service',
                intro: 'Both cruise lines are known for exceptional hospitality.',
                points: ['Relaxed European service', 'Personalized attention', 'Contemporary luxury style'],
            },
            regent: {
                heading: 'Regent Service',
                intro: '',
                points: ['White-glove service', 'Long-established luxury culture', 'Highly personalized guest care'],
            },
            note: 'Both cruise lines are known for exceptional hospitality.'
        },
        {
            label: 'Entertainment',
            explora: {
                heading: 'Explora Entertainment',
                intro: 'Entertainment focuses on:',
                points: ['Live music', 'Wellness experiences', 'Cocktail lounges', 'Cultural programming', 'Elegant evening entertainment'],
            },
            regent: {
                heading: 'Regent Entertainment',
                intro: 'Guests enjoy:',
                points: ['Broadway-style productions', 'Classical performances', 'Guest lecturers', 'Enrichment programs', 'Live entertainment'],
            },
            note: 'Both offer rich onboard entertainment suited to their respective styles.'
        },
        {
            label: 'Destinations',
            explora: {
                heading: 'Explora Destinations',
                intro: 'Both cruise lines sail to:',
                points: ['Mediterranean', 'Northern Europe', 'Caribbean', 'Alaska', 'South America', 'Asia', 'Australia', 'Transatlantic voyages'],
            },
            regent: {
                heading: 'Regent Destinations',
                intro: 'Regent generally offers a broader selection of worldwide itineraries due to its larger fleet.',
                points: ['Mediterranean', 'Northern Europe', 'Caribbean', 'Alaska', 'South America', 'Asia', 'Australia', 'Transatlantic voyages'],
            },
            note: 'Regent generally offers a broader selection of worldwide itineraries due to its larger fleet.'
        },
    ]

    const faqs = [
        { question: 'Is Explora more luxurious than Regent?', answer: 'Both are considered ultra-luxury cruise lines, but Explora emphasizes contemporary luxury while Regent focuses on traditional all-inclusive elegance.' },
        { question: 'Which cruise line includes more in the fare?', answer: 'Regent generally includes more, including unlimited shore excursions on most voyages and additional travel benefits.' },
        { question: 'Are all accommodations suites?', answer: 'Yes. Both Explora and Regent feature all-suite accommodations.' },
        { question: 'Which has larger suites?', answer: 'Explora\'s entry-level suites are among the largest in the luxury cruise industry.' },
        { question: 'Which cruise line has better dining?', answer: 'Both offer exceptional cuisine. Regent has a longer-established culinary reputation, while Explora emphasizes modern international dining.' },
        { question: 'Does Explora include gratuities?', answer: 'Yes. Gratuities are included.' },
        { question: 'Does Regent include gratuities?', answer: 'Yes. Regent includes gratuities as part of its all-inclusive fare.' },
        { question: 'Which cruise line is better for first-time luxury cruisers?', answer: 'Both are excellent, but Regent may appeal to travelers seeking the simplicity of an all-inclusive experience.' },
        { question: 'Which offers more destinations?', answer: 'Regent generally offers more itineraries due to its larger fleet.' },
        { question: 'Is Explora owned by MSC?', answer: 'Yes. Explora Journeys is the luxury lifestyle brand of the MSC Group.' },
        { question: 'Does Regent include airfare?', answer: 'Many Regent promotions include business-class or economy airfare, depending on itinerary and booking.' },
        { question: 'Which cruise line offers a more relaxed atmosphere?', answer: 'Explora is known for its relaxed, contemporary luxury atmosphere.' },
        { question: 'Which is better for couples?', answer: 'Both are excellent for couples, though Explora\'s modern ambiance is especially appealing for romantic getaways.' },
        { question: 'Are children allowed on Explora and Regent?', answer: 'Yes, but both cruise lines primarily attract adult travelers seeking a refined luxury experience.' },
        { question: 'Which cruise line offers better overall value?', answer: 'Regent often provides greater value for travelers who take advantage of its extensive all-inclusive benefits, while Explora offers outstanding value through its spacious accommodations and modern luxury.' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-regent",
                "name": "Explora vs Regent",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-regent",
                "description": "Compare Explora Journeys vs Regent Seven Seas Cruises, including luxury, suites, dining, inclusions, destinations, pricing, and overall cruise experience.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-regent#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, and personalized cruise planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-regent#article",
                "headline": "Explora vs Regent",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-regent",
                "description": "Expert comparison of Explora Journeys and Regent Seven Seas Cruises, including accommodations, dining, destinations, inclusions, pricing, and luxury experience.",
                "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-regent.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-regent" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert luxury cruise planning and comparison services to help travelers choose the best ultra-luxury cruise line."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Comparisons", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Regent", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-regent" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Explora more luxurious than Regent?", "acceptedAnswer": { "@type": "Answer", "text": "Both are ultra-luxury cruise lines. Explora emphasizes modern luxury, while Regent focuses on traditional all-inclusive elegance." } },
                    { "@type": "Question", "name": "Which cruise line includes more in the fare?", "acceptedAnswer": { "@type": "Answer", "text": "Regent generally includes more, including unlimited shore excursions on most voyages." } },
                    { "@type": "Question", "name": "Are all accommodations suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both cruise lines feature all-suite accommodations." } },
                    { "@type": "Question", "name": "Which cruise line has larger suites?", "acceptedAnswer": { "@type": "Answer", "text": "Explora's entry-level suites are among the largest in the luxury cruise industry." } },
                    { "@type": "Question", "name": "Does Regent include airfare?", "acceptedAnswer": { "@type": "Answer", "text": "Many Regent promotions include business-class or economy airfare depending on the itinerary." } },
                    { "@type": "Question", "name": "Which cruise line offers better dining?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer exceptional dining. Regent has a long-established culinary reputation, while Explora emphasizes contemporary international cuisine." } },
                    { "@type": "Question", "name": "Does Explora include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuities are included." } },
                    { "@type": "Question", "name": "Which cruise line is better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both are excellent for couples, though Explora's modern ambiance is especially popular with luxury travelers." } },
                    { "@type": "Question", "name": "Which cruise line offers more destinations?", "acceptedAnswer": { "@type": "Answer", "text": "Regent generally offers a wider variety of worldwide itineraries." } },
                    { "@type": "Question", "name": "Is Explora owned by MSC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Explora Journeys is the luxury lifestyle brand of the MSC Group." } },
                    { "@type": "Question", "name": "Which cruise line offers a more relaxed atmosphere?", "acceptedAnswer": { "@type": "Answer", "text": "Explora is known for its relaxed, contemporary luxury atmosphere." } },
                    { "@type": "Question", "name": "Which cruise line offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "Regent often provides greater value through its extensive all-inclusive benefits, while Explora offers exceptional value through spacious suites and modern luxury." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Explora vs Regent: Which Ultra-Luxury Cruise Line Is Right for You? (2026 Guide)</title>
                <meta name="title" content="Explora vs Regent | Luxury Cruise Comparison Guide" />
                <meta name="description" content="Compare Explora Journeys vs Regent Seven Seas Cruises, including ships, suites, dining, destinations, inclusions, luxury, pricing, service, and overall value to find the perfect ultra-luxury cruise." />
                <meta name="keywords" content="Explora vs Regent, Explora Journeys vs Regent Seven Seas, Luxury Cruise Comparison, Explora Cruises, Regent Seven Seas Cruises, Best Luxury Cruise Line, Explora vs Regent Reviews, Luxury Ocean Cruises, Ultra Luxury Cruises" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ══════════════════════════════════
                HERO
            ══════════════════════════════════ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${currentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>2026 Ultra-Luxury Cruise Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Explora vs Regent: Which Ultra-Luxury Cruise Line Is Right for You?
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Two Exceptional Luxury Cruise Experiences — Explora Journeys and Regent Seven Seas Cruises both promise exceptional service, elegant accommodations, gourmet dining, and immersive itineraries, but they deliver those experiences in different ways.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO (existing medi-intro)
            ══════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-intro-container">
                    <div className="medi-intro-grid-layout">

                        <div className="medi-intro-heading-column">
                            <span className="medi-premium-mini-badge">ULTRA-LUXURY COMPARISON</span>
                            <h2 className="medi-section-heading">Two Exceptional Luxury Cruise Experiences</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <div className="medi-intro-highlight-box">
                                "For travelers seeking the highest level of comfort at sea, Explora Journeys and Regent Seven Seas Cruises are two of the world's premier ultra-luxury cruise lines."
                            </div>
                        </div>

                        <div className="medi-intro-content-column">
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Both promise exceptional service, elegant accommodations, gourmet dining, and immersive itineraries—but they deliver those experiences in different ways.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Explora Journeys represents a modern vision of luxury cruising with contemporary design, spacious oceanfront suites, and a relaxed atmosphere. Regent Seven Seas Cruises has built its reputation on decades of all-inclusive luxury, personalized service, and destination-rich itineraries.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '32px' }}>
                                If you're deciding between these two exceptional cruise lines, this guide compares everything from accommodations and dining to pricing, destinations, and onboard experiences.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                                <div style={{ background: 'var(--medi-navy)', borderRadius: '14px', padding: '22px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                            <Ship size={18} />
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Explora Journeys</h3>
                                    </div>
                                    <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Modern vision of luxury cruising — contemporary design, spacious oceanfront suites, relaxed atmosphere.</p>
                                </div>
                                <div style={{ background: 'var(--medi-bg-soft)', border: '1px solid rgba(39,68,114,0.12)', borderRadius: '14px', padding: '22px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'var(--medi-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                            <Crown size={18} />
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>Regent Seven Seas</h3>
                                    </div>
                                    <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>Decades of all-inclusive luxury — personalized service and destination-rich itineraries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                QUICK COMPARISON TABLE (new section)
            ══════════════════════════════════ */}
            <section className="evr-table-section">
                <div className="evr-table-container">
                    <div className="evr-table-header">
                        <span className="medi-itinerary-eyebrow">AT A GLANCE</span>
                        <h2 className="medi-section-heading">Quick Comparison: Explora vs Regent</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-table-wrapper">
                        <div className="evr-table-head">
                            <span className="evr-table-head-cell">Feature</span>
                            <span className="evr-table-head-cell center">Explora Journeys</span>
                            <span className="evr-table-head-cell center">Regent Seven Seas</span>
                        </div>
                        {tableRows.map((row, i) => (
                            <div key={i} className="evr-table-row">
                                <span className="evr-table-feature">{row.feature}</span>
                                <span className="evr-table-cell">
                                    {row.winner === 'both'
                                        ? <span className="evr-table-pill tie">{row.explora}</span>
                                        : row.explora}
                                </span>
                                <span className="evr-table-cell">
                                    {row.winner === 'regent'
                                        ? <span className="evr-table-pill winner">{row.regent}</span>
                                        : row.winner === 'both'
                                        ? <span className="evr-table-pill tie">{row.regent}</span>
                                        : row.regent}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                OVERVIEW OF BOTH CRUISE LINES (new section)
            ══════════════════════════════════ */}
            <section className="evr-overview-section">
                <div className="evr-overview-container">
                    <div className="evr-overview-header">
                        <span className="medi-itinerary-eyebrow">BRAND OVERVIEW</span>
                        <h2 className="medi-section-heading">Explora Journeys &amp; Regent Seven Seas Overview</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-overview-grid">
                        {/* Explora */}
                        <div className="evr-overview-card">
                            <div className="evr-overview-card-top">
                                <p className="evr-overview-eyebrow">EXPLORA JOURNEYS OVERVIEW</p>
                                <h3 className="evr-overview-title">Explora Journeys</h3>
                                <p className="evr-overview-tagline">The luxury lifestyle cruise brand from the MSC Group, designed to redefine ocean travel.</p>
                            </div>
                            <div className="evr-overview-img-wrap">
                                <img src={EXPLORA_OVERVIEW_IMG} alt="Explora Journeys" />
                            </div>
                            <div className="evr-overview-body">
                                <p className="evr-overview-desc">Through spacious accommodations, exceptional wellness, and destination-focused experiences. The onboard atmosphere emphasizes elegance without formality, allowing guests to enjoy luxury in a relaxed environment.</p>
                                <p className="evr-overview-label">Every suite features:</p>
                                <ul className="evr-overview-list">
                                    {['Private ocean terrace', 'Floor-to-ceiling windows', 'Walk-in wardrobe', 'Marble bathroom', 'Personalized minibar'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Regent */}
                        <div className="evr-overview-card">
                            <div className="evr-overview-card-top dark">
                                <p className="evr-overview-eyebrow">REGENT SEVEN SEAS OVERVIEW</p>
                                <h3 className="evr-overview-title">Regent Seven Seas Cruises</h3>
                                <p className="evr-overview-tagline">Long recognized as one of the world's most inclusive luxury cruise lines.</p>
                            </div>
                            <div className="evr-overview-img-wrap">
                                {/* <img src={REGENT_SHIP_IMG} alt="Regent Seven Seas Cruises" /> */}
                            </div>
                            <div className="evr-overview-body">
                                <p className="evr-overview-desc">Regent appeals to travelers who value exceptional service and an all-inclusive experience.</p>
                                <p className="evr-overview-label">The cruise line includes:</p>
                                <ul className="evr-overview-list">
                                    {['Unlimited shore excursions', 'Fine wines and premium spirits', 'Specialty dining', 'Gratuities', 'Wi-Fi', 'Entertainment', 'Laundry service on many sailings', 'Business-class airfare on select itineraries'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SHIPS COMPARISON (new section)
            ══════════════════════════════════ */}
            <section className="evr-ships-section">
                <div className="evr-ships-container">
                    <div className="evr-ships-header">
                        <span className="medi-itinerary-eyebrow">FLEET OVERVIEW</span>
                        <h2 className="medi-section-heading">Ships Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-ships-grid">
                        {/* Explora Fleet */}
                        <div className="evr-ship-panel">
                            <div className="evr-ship-panel-header">
                                <div className="evr-ship-panel-icon"><Ship size={20} /></div>
                                <h3 className="evr-ship-panel-title">Explora Journeys Fleet</h3>
                            </div>
                            <div className="evr-ship-panel-body">
                                <div className="evr-ship-img-wrap">
                                    <img src={EXPLORA_SHIP_IMG} alt="Explora Journeys fleet" />
                                </div>
                                <p className="evr-ship-sub-label">Current and upcoming ships include:</p>
                                <ul className="evr-ship-list">
                                    {['EXPLORA I', 'EXPLORA II', 'EXPLORA III', 'EXPLORA IV', 'EXPLORA V', 'EXPLORA VI'].map((s, i) => (
                                        <li key={i}><Ship size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                                <div className="evr-ship-capacity-tag"><Users size={15} /> ~900 guests per ship</div>
                                <p className="evr-ship-sub-label mt">Strengths:</p>
                                <ul className="evr-ship-list">
                                    {['Modern design', 'Spacious public areas', 'Contemporary luxury', 'Ocean wellness concept'].map((s, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Regent Fleet */}
                        <div className="evr-ship-panel">
                            <div className="evr-ship-panel-header">
                                <div className="evr-ship-panel-icon"><Crown size={20} /></div>
                                <h3 className="evr-ship-panel-title">Regent Seven Seas Fleet</h3>
                            </div>
                            <div className="evr-ship-panel-body">
                                <div className="evr-ship-img-wrap">
                                    {/* <img src={REGENT_SHIP_IMG} alt="Regent Seven Seas fleet" /> */}
                                </div>
                                <p className="evr-ship-sub-label">Popular ships include:</p>
                                <ul className="evr-ship-list">
                                    {['Seven Seas Explorer', 'Seven Seas Splendor', 'Seven Seas Grandeur', 'Seven Seas Voyager', 'Seven Seas Mariner', 'Seven Seas Navigator'].map((s, i) => (
                                        <li key={i}><Ship size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                                <div className="evr-ship-capacity-tag"><Users size={15} /> 490–750 passengers</div>
                                <p className="evr-ship-sub-label mt">Strengths:</p>
                                <ul className="evr-ship-list">
                                    {['Personalized service', 'Spacious accommodations', 'Long-established luxury reputation', 'High crew-to-guest ratio'].map((s, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SUITES & ACCOMMODATIONS (new dark section)
            ══════════════════════════════════ */}
            <section className="evr-suites-section">
                <div className="evr-suites-container">
                    <div className="evr-suites-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>ONBOARD COMFORT</span>
                        <h2 className="medi-section-heading">Suites and Accommodations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-suites-grid">
                        {/* Explora */}
                        <div className="evr-suite-card">
                            <div className="evr-suite-img-wrap">
                                <img src={EXPLORA_SUITE_IMG} alt="Explora Journeys suites" />
                            </div>
                            <div className="evr-suite-body">
                                <p className="evr-suite-brand">Explora Journeys</p>
                                <h3 className="evr-suite-title">Explora Suites</h3>
                                <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: '0 0 14px', lineHeight: '1.6' }}>Every accommodation is a suite. The design feels more like a luxury boutique hotel than a traditional cruise ship.</p>
                                <ul className="evr-suite-list">
                                    {['Large private terraces', 'Contemporary interiors', 'Luxury bedding', 'Heated bathroom floors', 'Spacious living areas'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Regent */}
                        <div className="evr-suite-card">
                            <div className="evr-suite-img-wrap">
                                <img 
                                // src={REGENT_SUITE_IMG} 
                                alt="Regent Seven Seas suites" />
                            </div>
                            <div className="evr-suite-body">
                                <p className="evr-suite-brand">Regent Seven Seas</p>
                                <h3 className="evr-suite-title">Regent Suites</h3>
                                <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: '0 0 14px', lineHeight: '1.6' }}>Regent also offers all-suite accommodations.</p>
                                <ul className="evr-suite-list">
                                    {['Marble bathrooms', 'Walk-in closets', 'Butler service for upper suites', 'Luxury bath amenities', 'Comfortable residential design'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="evr-suites-note">
                        Both cruise lines provide exceptional accommodations, though Explora emphasizes modern aesthetics while Regent leans toward timeless elegance.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                DINING COMPARISON (new section)
            ══════════════════════════════════ */}
            <section className="evr-dining-section">
                <div className="evr-dining-container">
                    <div className="evr-dining-header">
                        <span className="medi-itinerary-eyebrow">CULINARY EXPERIENCE</span>
                        <h2 className="medi-section-heading">Dining Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-dining-grid">
                        {/* Explora */}
                        <div className="evr-dining-card">
                            <div className="evr-dining-img-wrap">
                                <img src={EXPLORA_DINING_IMG} alt="Explora Journeys dining" />
                            </div>
                            <div className="evr-dining-body">
                                <p className="evr-dining-brand">Explora Journeys</p>
                                <h3 className="evr-dining-title">Explora Dining</h3>
                                <p className="evr-dining-intro">Guests enjoy multiple restaurants featuring: Dining is flexible with no rigid schedules.</p>
                                <ul className="evr-dining-list">
                                    {['Mediterranean cuisine', 'Asian specialties', 'European fine dining', 'International flavors', 'Chef-driven menus'].map((d, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{d}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Regent */}
                        <div className="evr-dining-card">
                            <div className="evr-dining-img-wrap">
                                <img src={REGENT_DINING_IMG} alt="Regent Seven Seas dining" />
                            </div>
                            <div className="evr-dining-body">
                                <p className="evr-dining-brand">Regent Seven Seas</p>
                                <h3 className="evr-dining-title">Regent Dining</h3>
                                <p className="evr-dining-intro">Regent is renowned for culinary excellence. Popular venues include:</p>
                                <ul className="evr-dining-list">
                                    {['Compass Rose', 'Prime 7', 'Chartreuse', 'Pacific Rim', 'Sette Mari'].map((d, i) => (
                                        <li key={i}><Utensils size={14} /><span>{d}</span></li>
                                    ))}
                                </ul>
                                <p className="evr-dining-footer">The variety and consistency make Regent one of the strongest culinary cruise lines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHAT'S INCLUDED (new section)
            ══════════════════════════════════ */}
            <section className="evr-included-section">
                <div className="evr-included-container">
                    <div className="evr-included-header">
                        <span className="medi-itinerary-eyebrow">INCLUSIONS</span>
                        <h2 className="medi-section-heading">What's Included?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-included-grid">
                        {/* Explora */}
                        <div className="evr-included-card explora">
                            <div className="evr-included-card-heading">
                                <div className="evr-included-icon"><Ship size={20} /></div>
                                <h3 className="evr-included-title">Explora Includes</h3>
                            </div>
                            <ul className="evr-included-list">
                                {['Luxury suites', 'Multiple restaurants', 'Premium beverages', 'Wi-Fi', 'Gratuities', 'Wellness facilities', 'Fitness classes'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="evr-included-footer">Some shore excursions are additional.</p>
                        </div>

                        {/* Regent */}
                        <div className="evr-included-card regent">
                            <div className="evr-included-card-heading">
                                <div className="evr-included-icon"><Crown size={20} /></div>
                                <h3 className="evr-included-title">Regent Includes</h3>
                            </div>
                            <p className="evr-included-note">Regent is among the industry's most inclusive cruise lines. Typical inclusions include:</p>
                            <ul className="evr-included-list">
                                {['Unlimited shore excursions', 'Specialty dining', 'Premium beverages', 'Wi-Fi', 'Gratuities', 'Entertainment', 'Laundry', 'Pre-paid gratuities', 'Hotel package on select sailings', 'Business-class airfare on qualifying voyages'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SERVICE, ENTERTAINMENT & DESTINATIONS — tabbed (new section)
            ══════════════════════════════════ */}
            <section className="evr-headtohead-section">
                <div className="evr-headtohead-container">
                    <div className="evr-headtohead-header">
                        <span className="medi-itinerary-eyebrow">HEAD-TO-HEAD</span>
                        <h2 className="medi-section-heading">Service, Entertainment &amp; Destinations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-category-tabs">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`evr-category-tab-btn ${activeCategory === idx ? 'active' : ''}`}
                                onClick={() => setActiveCategory(idx)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {categories.map((cat, idx) => idx !== activeCategory ? null : (
                        <div key={idx}>
                            <div className="evr-category-panel">
                                <div className="evr-category-card">
                                    <p className="evr-category-brand">Explora Journeys</p>
                                    <h3 className="evr-category-heading">{cat.explora.heading}</h3>
                                    {cat.explora.intro && <p className="evr-category-intro">{cat.explora.intro}</p>}
                                    <ul className="evr-category-list">
                                        {cat.explora.points.map((pt, i) => (
                                            <li key={i}><CheckCircle size={15} /><span>{pt}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="evr-category-card">
                                    <p className="evr-category-brand">Regent Seven Seas</p>
                                    <h3 className="evr-category-heading">{cat.regent.heading}</h3>
                                    {cat.regent.intro && <p className="evr-category-intro">{cat.regent.intro}</p>}
                                    <ul className="evr-category-list">
                                        {cat.regent.points.map((pt, i) => (
                                            <li key={i}><CheckCircle size={15} /><span>{pt}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="evr-category-note">{cat.note}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════
                PRICING + WHO SHOULD CHOOSE (new section)
            ══════════════════════════════════ */}
            <section className="evr-choose-section">
                <div className="evr-choose-container">
                    <div className="evr-choose-header">
                        <span className="medi-itinerary-eyebrow">PRICING & IDEAL TRAVELER</span>
                        <h2 className="medi-section-heading">Pricing Comparison &amp; Who Should Choose Each</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evr-pricing-note">
                        <p>
                            <strong>Pricing Comparison:</strong> Explora typically has a lower starting fare than Regent. However, Regent includes more services within the cruise fare. Travelers should compare total vacation costs rather than cruise fare alone.
                        </p>
                    </div>

                    <div className="evr-choose-grid">
                        <div className="evr-choose-card explora">
                            <div className="evr-choose-card-icon-row">
                                <div className="evr-choose-icon"><Ship size={20} /></div>
                                <h3 className="evr-choose-title">Who Should Choose Explora?</h3>
                            </div>
                            <p style={{ fontSize: '14px', color: '#94a3b8', margin: '0 0 18px', lineHeight: '1.6' }}>Explora is ideal if you:</p>
                            <ul className="evr-choose-list">
                                {['Prefer contemporary luxury', 'Appreciate boutique hotels', 'Want spacious suites', 'Enjoy relaxed elegance', 'Value wellness experiences'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="evr-choose-card regent">
                            <div className="evr-choose-card-icon-row">
                                <div className="evr-choose-icon"><Crown size={20} /></div>
                                <h3 className="evr-choose-title">Who Should Choose Regent?</h3>
                            </div>
                            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 18px', lineHeight: '1.6' }}>Regent is an excellent choice if you:</p>
                            <ul className="evr-choose-list">
                                {['Want an all-inclusive luxury vacation', 'Enjoy traditional luxury service', 'Prefer included excursions', 'Value exceptional dining', 'Appreciate destination-focused cruising'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                FINAL VERDICT (new section)
            ══════════════════════════════════ */}
            <section className="evr-verdict-section">
                <div className="evr-verdict-container">
                    <div className="evr-verdict-header">
                        <span className="medi-itinerary-eyebrow">FINAL VERDICT</span>
                        <h2 className="medi-section-heading">Final Verdict</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="evr-verdict-lead">
                        Both Explora Journeys and Regent Seven Seas Cruises deliver extraordinary luxury experiences.
                    </p>

                    <div className="evr-verdict-grid">
                        <div className="evr-verdict-card explora">
                            <div className="evr-verdict-card-header">
                                <div className="evr-verdict-card-icon"><Ship size={18} /></div>
                                <h3 className="evr-verdict-card-title">Choose Explora Journeys If</h3>
                            </div>
                            <p className="evr-verdict-card-text">
                                You value modern design, spacious suites, and a relaxed lifestyle approach to luxury cruising.
                            </p>
                        </div>
                        <div className="evr-verdict-card regent">
                            <div className="evr-verdict-card-header">
                                <div className="evr-verdict-card-icon"><Crown size={18} /></div>
                                <h3 className="evr-verdict-card-title">Choose Regent Seven Seas Cruises If</h3>
                            </div>
                            <p className="evr-verdict-card-text">
                                You prefer an established all-inclusive experience with extensive inclusions, outstanding dining, and destination-rich itineraries.
                            </p>
                        </div>
                    </div>

                    <div className="evr-verdict-summary">
                        <div className="evr-verdict-summary-icon"><Award size={22} /></div>
                        <p className="evr-verdict-summary-text">
                            Neither cruise line is universally better—the right choice depends on your travel style, priorities, and expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                ANGELA EDITORIAL (reused)
            ══════════════════════════════════ */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={ANGELA_IMG} alt="Angela Hughes - Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                        </div>
                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-eyebrow-container">
                                <Award size={16} className="medi-editorial-icon-badge" />
                                <span className="medi-editorial-eyebrow">EXPERT GUIDANCE</span>
                            </div>
                            <h2 className="medi-editorial-title">Plan Your Ultra-Luxury Cruise with Confidence</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-lead-para">
                                Choosing between Explora Journeys and Regent Seven Seas Cruises is a meaningful decision. Both are exceptional — but the right choice depends entirely on your travel style and expectations.
                            </p>
                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Trips &amp; Ships Luxury Travel helps you:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Compare ultra-luxury cruise lines', 'Select the perfect itinerary', 'Understand all-inclusive benefits', 'Choose the ideal suite category', 'Maximize pre- and post-cruise travel', 'Access exclusive promotions'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={14} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                FAQ
            ══════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{activeFaq === index ? '−' : '+'}</span>
                                </div>
                                {activeFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CTA
            ══════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Book Your Ultra-Luxury Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Both Explora Journeys and Regent Seven Seas Cruises deliver extraordinary luxury experiences. Neither cruise line is universally better — the right choice depends on your travel style, priorities, and expectations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Explora Journeys ocean voyages', 'Regent Seven Seas all-inclusive sailings', 'Mediterranean ultra-luxury cruises', 'World cruise segments', 'First-time luxury cruise planning'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Compare More Cruise Lines
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploraVsRegent