import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import './Vikingvsscenic.css'

import {
    Ship, MapPin, Star, CheckCircle, Anchor, Gem,
    ChevronRight, Crown, Phone, Minus, Globe, LayoutList,
    Heart, Utensils, Award, Users, Wifi, Wine, Plane,
    Compass, Sparkles, ArrowRight, X
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   IMAGE PLACEHOLDERS — swap with real imports
   e.g. import vikingHero from '../../assets/VikingVsScenic/hero1.jpg'
──────────────────────────────────────────────────────────────── */
const HERO_1 = 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1600&q=80'
const HERO_2 = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&q=80'
const HERO_3 = 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&q=80'

const VIKING_SHIP_IMG = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80'
const SCENIC_SHIP_IMG = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80'
const VIKING_OCEAN_IMG = 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80'
const SCENIC_ECLIPSE_IMG = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80'
const DINING_IMG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80'
const ANGELA_IMG = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'

/* ════════════════════════════════════════════════════════════ */

function VikingVsScenic() {

    const heroImages = [HERO_1, HERO_2, HERO_3]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)
    const [activeCategory, setActiveCategory] = useState(0)

    /* ── Quick Comparison Table rows (exact from doc) ── */
    const tableRows = [
        { feature: 'Best For', viking: 'Destination-focused travelers', scenic: 'All-inclusive luxury travelers', winnerCol: null },
        { feature: 'Luxury Level', viking: 'Upper Premium', scenic: 'Ultra Luxury', winnerCol: null },
        { feature: 'River Cruises', viking: 'Extensive Fleet', scenic: 'Extensive Fleet', winnerCol: null },
        { feature: 'Ocean Cruises', viking: 'Yes', scenic: 'Yes', winnerCol: null },
        { feature: 'Included Excursions', viking: 'Yes', scenic: 'More Included', winnerCol: 'scenic' },
        { feature: 'Butler Service', viking: 'No', scenic: 'Yes (selected categories)', winnerCol: 'scenic' },
        { feature: 'Drinks Included', viking: 'Partial', scenic: 'Extensive', winnerCol: 'scenic' },
        { feature: 'Pricing', viking: 'Lower', scenic: 'Higher', winnerCol: 'viking' },
        { feature: 'Service', viking: 'Excellent', scenic: 'Exceptional', winnerCol: 'scenic' },
        { feature: 'Solo Travel', viking: 'Good', scenic: 'Limited', winnerCol: 'viking' },
    ]

    /* ── Head-to-head category data (exact from doc) ── */
    const categories = [
        {
            label: 'Destinations',
            viking: {
                heading: 'Viking Destinations',
                intro: 'Viking offers one of the largest destination portfolios in the industry. Popular regions include:',
                points: ['Europe', 'Mediterranean', 'Scandinavia', 'Alaska', 'Asia', 'Egypt', 'Antarctica', 'South America'],
                winner: false
            },
            scenic: {
                heading: 'Scenic Destinations',
                intro: 'Scenic focuses on:',
                points: ['European Rivers', 'Southeast Asia', 'Australia', 'New Zealand', 'Arctic', 'Antarctica', 'Luxury Yacht Destinations'],
                winner: false
            },
            winnerNote: 'Tie — Both offer excellent destination diversity.',
            isTie: true
        },
        {
            label: 'Excursions',
            viking: {
                heading: 'Viking Excursions',
                intro: 'Viking includes:',
                points: ['One shore excursion per port', 'Cultural enrichment programs', 'Destination lectures', 'Additional premium tours available'],
                winner: false
            },
            scenic: {
                heading: 'Scenic Excursions',
                intro: 'Scenic offers one of the most inclusive cruise experiences available. Guests receive:',
                points: ['Scenic Freechoice excursions', 'Scenic Enrich experiences', 'Transfers', 'Gratuities', 'Many beverages'],
                winner: true
            },
            winnerNote: 'Winner: Scenic — Scenic includes significantly more in the cruise fare.',
            isTie: false
        },
        {
            label: 'Dining',
            viking: {
                heading: 'Viking Dining',
                intro: 'Dining emphasizes regional flavors and destination-inspired cuisine. Popular venues include:',
                points: ['The Restaurant', 'Manfredi\'s Italian Restaurant', 'Chef\'s Table', 'World Café'],
                winner: false
            },
            scenic: {
                heading: 'Scenic Dining',
                intro: 'Scenic focuses on gourmet dining experiences. Guests enjoy:',
                points: ['Fine dining venues', 'Local culinary experiences', 'Premium wines', 'Personalized service'],
                winner: true
            },
            winnerNote: 'Winner: Scenic — Scenic generally provides a more luxurious culinary experience.',
            isTie: false
        },
        {
            label: 'Service',
            viking: {
                heading: 'Viking Service',
                intro: 'Viking delivers consistent, professional service throughout its fleet. Guests appreciate the relaxed and refined atmosphere.',
                points: [],
                winner: false
            },
            scenic: {
                heading: 'Scenic Service',
                intro: 'Scenic is widely recognized for personalized luxury service. Selected guests receive dedicated butler service.',
                points: [],
                winner: true
            },
            winnerNote: 'Winner: Scenic — Scenic typically offers a higher-touch luxury experience.',
            isTie: false
        },
        {
            label: 'Pricing',
            viking: {
                heading: 'Viking',
                intro: 'Generally offers lower fares.',
                points: ['Provides excellent value relative to the experience'],
                winner: false
            },
            scenic: {
                heading: 'Scenic',
                intro: 'Typically costs more. However, fares often include:',
                points: ['Gratuities', 'Premium beverages', 'Butler service', 'Airport transfers', 'Premium excursions'],
                winner: false
            },
            winnerNote: 'Value: Viking  |  Luxury Inclusions: Scenic',
            isTie: true
        },
        {
            label: 'Solo Travel',
            viking: {
                heading: 'Viking',
                intro: 'Viking frequently offers:',
                points: ['Solo-friendly promotions', 'Reduced single supplements', 'Adults-only environment'],
                winner: true
            },
            scenic: {
                heading: 'Scenic',
                intro: 'Scenic occasionally offers solo promotions but generally caters more toward couples.',
                points: [],
                winner: false
            },
            winnerNote: 'Winner: Viking',
            isTie: false
        },
    ]

    const faqs = [
        { question: 'Is Scenic more luxurious than Viking?', answer: 'Yes. Scenic is generally considered an ultra-luxury brand, while Viking is categorized as upper-premium to luxury.' },
        { question: 'Is Scenic more expensive than Viking?', answer: 'Typically yes. Scenic\'s fares are generally higher because of its extensive inclusions.' },
        { question: 'Does Scenic include gratuities?', answer: 'Yes. Scenic generally includes gratuities in the cruise fare.' },
        { question: 'Does Viking include gratuities?', answer: 'Usually no, although promotions can vary.' },
        { question: 'Which cruise line has better excursions?', answer: 'Scenic generally includes more premium excursions and exclusive experiences.' },
        { question: 'Does Scenic offer butler service?', answer: 'Yes. Butler service is available for suite guests on Scenic ships.' },
        { question: 'Which cruise line is better for solo travelers?', answer: 'Viking is generally more solo-traveler friendly.' },
        { question: 'Does Viking offer ocean cruises?', answer: 'Yes. Viking operates a large fleet of ocean cruise ships.' },
        { question: 'Does Scenic offer ocean cruises?', answer: 'Yes. Scenic operates the ultra-luxury Scenic Eclipse expedition yachts.' },
        { question: 'Which cruise line offers better value?', answer: 'Many travelers consider Viking to provide stronger overall value.' },
        { question: 'Which cruise line has better dining?', answer: 'Both are excellent, but Scenic generally provides a more luxurious culinary experience.' },
        { question: 'Is Viking adults only?', answer: 'Yes. Viking welcomes guests age 18 and older.' },
        { question: 'Which cruise line has more destinations?', answer: 'Both offer extensive global itineraries, though Viking operates a larger fleet.' },
        { question: 'Which cruise line has better service?', answer: 'Scenic is often recognized for a higher level of personalized service.' },
        { question: 'Which cruise line should first-time luxury cruisers choose?', answer: 'Many first-time luxury travelers choose Viking because of its balance of quality, value, and destination-focused experiences.' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic",
                "name": "Viking vs Scenic",
                "url": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic",
                "description": "Compare Viking vs Scenic cruises including river cruises, ocean voyages, luxury levels, inclusions, destinations, excursions, pricing, and service.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic#article" }
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
                "description": "Luxury travel agency specializing in cruise vacations, expedition cruises and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic#article",
                "headline": "Viking vs Scenic",
                "url": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic",
                "description": "Expert comparison of Viking and Scenic cruises including pricing, inclusions, destinations, luxury level, excursions, and service.",
                "image": "https://www.tripsshipsluxurytravel.com/images/viking-vs-scenic.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert cruise planning and comparison services helping travelers choose the best luxury cruise line for their travel style."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Viking Cruises", "item": "https://www.tripsshipsluxurytravel.com/viking-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Viking vs Scenic", "item": "https://www.tripsshipsluxurytravel.com/viking-vs-scenic" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Scenic more luxurious than Viking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic is generally considered an ultra-luxury brand while Viking is upper-premium to luxury." } },
                    { "@type": "Question", "name": "Is Scenic more expensive than Viking?", "acceptedAnswer": { "@type": "Answer", "text": "Typically yes. Scenic's fares are usually higher due to its extensive inclusions." } },
                    { "@type": "Question", "name": "Does Scenic include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic generally includes gratuities in the cruise fare." } },
                    { "@type": "Question", "name": "Does Scenic offer butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Butler service is available for suite guests on Scenic ships." } },
                    { "@type": "Question", "name": "Which cruise line has better excursions?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic generally includes more premium excursions and exclusive experiences." } },
                    { "@type": "Question", "name": "Which cruise line is better for solo travelers?", "acceptedAnswer": { "@type": "Answer", "text": "Viking is generally more solo-traveler friendly." } },
                    { "@type": "Question", "name": "Does Viking offer ocean cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking operates a large fleet of ocean cruise ships." } },
                    { "@type": "Question", "name": "Does Scenic offer ocean cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic operates the ultra-luxury Scenic Eclipse expedition yachts." } },
                    { "@type": "Question", "name": "Which cruise line offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers consider Viking to offer stronger overall value." } },
                    { "@type": "Question", "name": "Is Viking adults only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking welcomes guests age 18 and older." } },
                    { "@type": "Question", "name": "Which cruise line has better service?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic is often recognized for a higher level of personalized service." } },
                    { "@type": "Question", "name": "Which cruise line should first-time luxury cruisers choose?", "acceptedAnswer": { "@type": "Answer", "text": "Many first-time luxury travelers choose Viking because of its balance of quality, value, and destination-focused experiences." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking vs Scenic: Which Luxury Cruise Line Is Better in 2026?</title>
                <meta name="title" content="Viking vs Scenic Cruises Comparison | River, Ocean & Luxury Travel Guide" />
                <meta name="description" content="Compare Viking vs Scenic cruises including river cruises, ocean voyages, pricing, inclusions, excursions, destinations, service, and luxury experiences. Find the best cruise line for your travel style." />
                <meta name="keywords" content="Viking vs Scenic, Scenic vs Viking River Cruises, Viking River Cruises vs Scenic, Scenic Luxury Cruises, Best Luxury River Cruise Line, Viking Cruise Comparison" />
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
                        <span>2026 Luxury Cruise Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Viking vs Scenic: Which Luxury Cruise Line Is Best for Your Travel Style?
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Both companies offer exceptional service, beautiful ships, immersive itineraries, and destination-focused travel experiences. However, the two cruise lines approach luxury very differently.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO (existing medi-intro section)
            ══════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-intro-container">
                    <div className="medi-intro-grid-layout">

                        <div className="medi-intro-heading-column">
                            <span className="medi-premium-mini-badge">COMPLETE COMPARISON</span>
                            <h2 className="medi-section-heading">Viking vs Scenic: A Complete Luxury Cruise Comparison</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <div className="medi-intro-highlight-box">
                                "For travelers researching luxury river cruises and small ship voyages, Viking and Scenic are two of the most frequently compared cruise brands."
                            </div>
                        </div>

                        <div className="medi-intro-content-column">
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Both companies offer exceptional service, beautiful ships, immersive itineraries, and destination-focused travel experiences. However, the two cruise lines approach luxury very differently.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Viking focuses on elegant simplicity, cultural enrichment, and value, while Scenic emphasizes ultra-luxury, all-inclusive travel, and premium amenities.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '32px' }}>
                                If you're trying to decide between Viking and Scenic, this guide compares everything from ships and accommodations to excursions, dining, pricing, and overall value.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {/* Viking intro card */}
                                <div style={{ background: 'var(--medi-navy)', borderRadius: '16px', padding: '24px 22px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                            <Ship size={18} />
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Choose Viking If You Want</h3>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {['Destination immersion', 'Lower pricing', 'Cultural enrichment', 'Solo-friendly travel', 'Excellent value'].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#cbd5e1', lineHeight: '1.5' }}>
                                                <CheckCircle size={14} style={{ color: 'var(--medi-green)', flexShrink: 0, marginTop: '2px' }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Scenic intro card */}
                                <div style={{ background: 'var(--medi-bg-soft)', border: '1px solid rgba(39,68,114,0.12)', borderRadius: '16px', padding: '24px 22px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--medi-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                            <Crown size={18} />
                                        </div>
                                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>Choose Scenic If You Want</h3>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {['Maximum inclusions', 'Luxury amenities', 'Butler service', 'All-inclusive vacation', 'Ultra-luxury level'].map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#374151', lineHeight: '1.5' }}>
                                                <CheckCircle size={14} style={{ color: 'var(--medi-navy)', flexShrink: 0, marginTop: '2px' }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                QUICK COMPARISON TABLE (new section)
            ══════════════════════════════════ */}
            <section className="vvs-table-section">
                <div className="vvs-table-container">
                    <div className="vvs-table-header">
                        <span className="medi-itinerary-eyebrow">AT A GLANCE</span>
                        <h2 className="medi-section-heading">Quick Comparison: Viking vs Scenic</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vvs-table-wrapper">
                        <div className="vvs-table-head">
                            <span className="vvs-table-head-cell">Feature</span>
                            <span className="vvs-table-head-cell center">Viking</span>
                            <span className="vvs-table-head-cell center">Scenic</span>
                        </div>
                        {tableRows.map((row, i) => (
                            <div key={i} className="vvs-table-row">
                                <span className="vvs-table-feature">{row.feature}</span>
                                <span className="vvs-table-cell">
                                    {row.winnerCol === 'viking'
                                        ? <span className="vvs-table-pill winner">{row.viking}</span>
                                        : row.viking}
                                </span>
                                <span className="vvs-table-cell">
                                    {row.winnerCol === 'scenic'
                                        ? <span className="vvs-table-pill winner">{row.scenic}</span>
                                        : row.winnerCol === null && row.viking === row.scenic
                                            ? <span className="vvs-table-pill tie">{row.scenic}</span>
                                            : row.scenic}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                OVERVIEW OF BOTH CRUISE LINES (new section)
            ══════════════════════════════════ */}
            <section className="vvs-overview-section">
                <div className="vvs-overview-container">
                    <div className="vvs-overview-header">
                        <span className="medi-itinerary-eyebrow">BRAND OVERVIEW</span>
                        <h2 className="medi-section-heading">Overview of Viking &amp; Scenic</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vvs-overview-grid">
                        {/* Viking */}
                        <div className="vvs-overview-card">
                            <div className="vvs-overview-card-header">
                                <p className="vvs-overview-eyebrow">OVERVIEW OF VIKING</p>
                                <h3 className="vvs-overview-title">Viking</h3>
                                <p className="vvs-overview-tagline">Founded in 1997, Viking has become one of the most recognizable names in cruising.</p>
                            </div>
                            <div className="vvs-overview-img-wrap">
                                <img src={VIKING_SHIP_IMG} alt="Viking cruise ship" />
                            </div>
                            <div className="vvs-overview-body">
                                <p className="vvs-overview-desc">Viking appeals to travelers who want a refined experience without paying ultra-luxury prices.</p>
                                <p className="vvs-overview-operations-label">Viking operates:</p>
                                <ul className="vvs-overview-ops-list">
                                    {['River Cruises', 'Ocean Cruises', 'Expedition Cruises'].map((op, i) => (
                                        <li key={i}><Ship size={15} /><span>{op}</span></li>
                                    ))}
                                </ul>
                                <p className="vvs-overview-features-label">Key features include:</p>
                                <ul className="vvs-overview-features-list">
                                    {['Adults-only atmosphere', 'Scandinavian design', 'Destination immersion', 'Educational enrichment', 'Excellent value'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Scenic */}
                        <div className="vvs-overview-card">
                            <div className="vvs-overview-card-header scenic">
                                <p className="vvs-overview-eyebrow">OVERVIEW OF SCENIC</p>
                                <h3 className="vvs-overview-title">Scenic</h3>
                                <p className="vvs-overview-tagline">Scenic Luxury Cruises &amp; Tours is known for delivering highly inclusive luxury vacations.</p>
                            </div>
                            <div className="vvs-overview-img-wrap">
                                <img src={SCENIC_SHIP_IMG} alt="Scenic luxury cruise ship" />
                            </div>
                            <div className="vvs-overview-body">
                                <p className="vvs-overview-desc">Scenic focuses heavily on all-inclusive luxury, butler service, and personalized experiences.</p>
                                <p className="vvs-overview-operations-label">The company specializes in:</p>
                                <ul className="vvs-overview-ops-list">
                                    {['European River Cruises', 'Luxury Yacht Cruises', 'Small Ship Expeditions', 'Guided Land Journeys'].map((op, i) => (
                                        <li key={i}><Ship size={15} /><span>{op}</span></li>
                                    ))}
                                </ul>
                                <p className="vvs-overview-features-label">Scenic focuses heavily on:</p>
                                <ul className="vvs-overview-features-list">
                                    {['All-inclusive luxury', 'Butler service', 'Premium excursions', 'Luxury accommodations', 'Personalized experiences'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SHIPS & ACCOMMODATIONS (new section)
            ══════════════════════════════════ */}
            <section className="vvs-ships-section">
                <div className="vvs-ships-container">
                    <div className="vvs-ships-header">
                        <span className="medi-itinerary-eyebrow">SHIPS & ACCOMMODATIONS</span>
                        <h2 className="medi-section-heading">Ships and Accommodations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vvs-ships-grid">
                        {/* Viking Ships */}
                        <div className="vvs-ship-panel">
                            <div className="vvs-ship-panel-header">
                                <div className="vvs-ship-panel-icon"><Ship size={20} /></div>
                                <h3 className="vvs-ship-panel-title">Viking Ships</h3>
                            </div>
                            <div className="vvs-ship-panel-body">
                                <p className="vvs-ship-sub-heading">Viking River Ships feature:</p>
                                <ul className="vvs-ship-feature-list">
                                    {['Contemporary Scandinavian design', 'Aquavit Terrace', 'Comfortable staterooms', 'Floor-to-ceiling windows'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <p className="vvs-ship-sub-heading mt">Viking Ocean Ships include:</p>
                                <ul className="vvs-ship-feature-list">
                                    {['Private verandas', 'Heated bathroom floors', 'Nordic-inspired décor', 'Spacious public areas'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <div className="vvs-ship-advantage-box">
                                    <Award size={18} />
                                    <p className="vvs-ship-advantage-text">Viking Advantage: Elegant design with excellent value.</p>
                                </div>
                            </div>
                        </div>

                        {/* Scenic Ships */}
                        <div className="vvs-ship-panel">
                            <div className="vvs-ship-panel-header">
                                <div className="vvs-ship-panel-icon"><Crown size={20} /></div>
                                <h3 className="vvs-ship-panel-title">Scenic Ships</h3>
                            </div>
                            <div className="vvs-ship-panel-body">
                                <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 14px 0', lineHeight: '1.6' }}>
                                    Scenic River Ships are among the most luxurious on European waterways.
                                </p>
                                <p className="vvs-ship-sub-heading">Highlights include:</p>
                                <ul className="vvs-ship-feature-list">
                                    {['Butler service', 'Spacious suites', 'Scenic Sun Lounges', 'Premium amenities'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <p className="vvs-ship-sub-heading mt">Scenic Eclipse luxury yachts feature:</p>
                                <ul className="vvs-ship-feature-list">
                                    {['Helicopters', 'Submarines', 'Butler service', 'Expedition capabilities'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <div className="vvs-ship-advantage-box">
                                    <Crown size={18} />
                                    <p className="vvs-ship-advantage-text">Scenic Advantage: Higher overall luxury level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                HEAD-TO-HEAD CATEGORIES (new tabbed section)
            ══════════════════════════════════ */}
            <section className="vvs-headtohead-section">
                <div className="vvs-headtohead-container">
                    <div className="vvs-headtohead-header">
                        <span className="medi-itinerary-eyebrow">HEAD-TO-HEAD</span>
                        <h2 className="medi-section-heading">Category-by-Category Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vvs-category-tabs">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`vvs-category-tab-btn ${activeCategory === idx ? 'active' : ''}`}
                                onClick={() => setActiveCategory(idx)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {categories.map((cat, idx) => idx !== activeCategory ? null : (
                        <div key={idx}>
                            <div className="vvs-category-panel">
                                {/* Viking card */}
                                <div className={`vvs-category-card ${cat.viking.winner ? 'winner-card' : ''}`}>
                                    {cat.viking.winner && <span className="vvs-winner-badge">✓ Winner</span>}
                                    <p className="vvs-category-card-brand">Viking</p>
                                    <h3 className="vvs-category-card-heading">{cat.viking.heading}</h3>
                                    {cat.viking.intro && (
                                        <p style={{ fontSize: '14.5px', lineHeight: '1.6', marginBottom: cat.viking.points.length > 0 ? '14px' : '0', color: cat.viking.winner ? '#94a3b8' : '#64748b' }}>
                                            {cat.viking.intro}
                                        </p>
                                    )}
                                    {cat.viking.points.length > 0 && (
                                        <ul className="vvs-category-list">
                                            {cat.viking.points.map((pt, i) => (
                                                <li key={i}><CheckCircle size={15} /><span>{pt}</span></li>
                                            ))}
                                        </ul>
                                    )}
                                    {cat.viking.winner && (
                                        <div className="vvs-category-winner-note">
                                            <Award size={14} />
                                            Winner
                                        </div>
                                    )}
                                </div>

                                {/* Scenic card */}
                                <div className={`vvs-category-card ${cat.scenic.winner ? 'winner-card' : ''}`}>
                                    {cat.scenic.winner && <span className="vvs-winner-badge">✓ Winner</span>}
                                    <p className="vvs-category-card-brand">Scenic</p>
                                    <h3 className="vvs-category-card-heading">{cat.scenic.heading}</h3>
                                    {cat.scenic.intro && (
                                        <p style={{ fontSize: '14.5px', lineHeight: '1.6', marginBottom: cat.scenic.points.length > 0 ? '14px' : '0', color: cat.scenic.winner ? '#94a3b8' : '#64748b' }}>
                                            {cat.scenic.intro}
                                        </p>
                                    )}
                                    {cat.scenic.points.length > 0 && (
                                        <ul className="vvs-category-list">
                                            {cat.scenic.points.map((pt, i) => (
                                                <li key={i}><CheckCircle size={15} /><span>{pt}</span></li>
                                            ))}
                                        </ul>
                                    )}
                                    {cat.scenic.winner && (
                                        <div className="vvs-category-winner-note">
                                            <Award size={14} />
                                            Winner
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Winner / Tie note */}
                            <div className="vvs-category-tie-note">
                                {cat.winnerNote}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════
                RIVER CRUISES SPLIT (new section)
            ══════════════════════════════════ */}
            <section className="vvs-river-section">
                <div className="vvs-river-container">
                    <div className="vvs-river-header">
                        <span className="medi-itinerary-eyebrow">RIVER CRUISING</span>
                        <h2 className="medi-section-heading">River Cruises: Viking vs Scenic</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vvs-river-grid">
                        <div className="vvs-river-card viking">
                            <h3 className="vvs-river-card-heading"><Ship size={20} /> Choose Viking If:</h3>
                            <ul className="vvs-river-list">
                                {['You want excellent value', 'You enjoy independent exploration', 'You prefer Scandinavian design', 'Budget matters'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vvs-river-card scenic">
                            <h3 className="vvs-river-card-heading"><Crown size={20} /> Choose Scenic If:</h3>
                            <ul className="vvs-river-list">
                                {['You want all-inclusive luxury', 'You appreciate butler service', 'You want premium excursions included', 'You prefer a luxury-first experience'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                OCEAN CRUISES (new image-card section)
            ══════════════════════════════════ */}
            <section className="vvs-ocean-section">
                <div className="vvs-ocean-container">
                    <div className="vvs-ocean-header">
                        <span className="medi-itinerary-eyebrow">OCEAN CRUISING</span>
                        <h2 className="medi-section-heading">Ocean Cruises: Viking vs Scenic</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vvs-ocean-grid">
                        <div className="vvs-ocean-card">
                            <div className="vvs-ocean-img-wrap">
                                <img src={VIKING_OCEAN_IMG} alt="Viking Ocean Cruises" />
                                <span className="vvs-ocean-winner-tag">Traditional Ocean</span>
                            </div>
                            <div className="vvs-ocean-body">
                                <p className="vvs-ocean-brand">Viking</p>
                                <h3 className="vvs-ocean-title">Viking's Ocean Fleet offers:</h3>
                                <ul className="vvs-ocean-list">
                                    {['Adults-only cruising', 'Destination-focused itineraries', 'Elegant Scandinavian design'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--medi-navy)', marginTop: '16px', letterSpacing: '0.05em' }}>
                                    Winner — Traditional Ocean Cruises
                                </p>
                            </div>
                        </div>

                        <div className="vvs-ocean-card">
                            <div className="vvs-ocean-img-wrap">
                                <img src={SCENIC_ECLIPSE_IMG} alt="Scenic Eclipse luxury yacht" />
                                <span className="vvs-ocean-winner-tag">Luxury Expedition</span>
                            </div>
                            <div className="vvs-ocean-body">
                                <p className="vvs-ocean-brand">Scenic</p>
                                <h3 className="vvs-ocean-title">Scenic Eclipse offers:</h3>
                                <ul className="vvs-ocean-list">
                                    {['Luxury expedition experiences', 'Helicopter excursions', 'Submarine exploration', 'Ultra-luxury accommodations'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--medi-navy)', marginTop: '16px', letterSpacing: '0.05em' }}>
                                    Winner — Luxury Expedition Cruises
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHICH CRUISE LINE IS BETTER — editorial
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
                                <span className="medi-editorial-eyebrow">EXPERT ANALYSIS</span>
                            </div>
                            <h2 className="medi-editorial-title">Which Cruise Line Is Better?</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-lead-para">
                                Both Viking and Scenic rank among the world's best cruise brands. The right choice comes down to your travel priorities and budget.
                            </p>
                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Choose Viking If:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['You value destination immersion', 'You want lower pricing', 'You prefer cultural enrichment', 'You travel solo', 'You want excellent value'].map((item, i) => (
                                        <div key={i} className="medi-priority-pill-item">
                                            <CheckCircle size={14} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="medi-priorities-box" style={{ marginTop: '16px' }}>
                                <p className="medi-priorities-intro">Choose Scenic If:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['You want maximum inclusions', 'You enjoy luxury amenities', 'Butler service matters', 'You prefer an all-inclusive vacation', 'Budget is less important'].map((item, i) => (
                                        <div key={i} className="medi-priority-pill-item">
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
                FINAL VERDICT (new section)
            ══════════════════════════════════ */}
            <section className="vvs-verdict-section">
                <div className="vvs-verdict-container">
                    <div className="vvs-verdict-header">
                        <span className="medi-itinerary-eyebrow">FINAL VERDICT</span>
                        <h2 className="medi-section-heading">Final Verdict</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="vvs-verdict-lead">
                        Both Viking and Scenic rank among the world's best cruise brands.
                    </p>

                    <div className="vvs-verdict-grid">
                        <div className="vvs-verdict-card viking">
                            <div className="vvs-verdict-card-icon-row">
                                <div className="vvs-verdict-icon-box"><Ship size={20} /></div>
                                <h3 className="vvs-verdict-card-heading">Viking</h3>
                            </div>
                            <p style={{ fontSize: '14.5px', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 18px' }}>
                                Viking excels in value, cultural enrichment, destination variety, and adults-only travel.
                            </p>
                            <ul className="vvs-verdict-list">
                                {['For travelers seeking a premium experience at a more approachable price, Viking is often the better fit.'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vvs-verdict-card scenic">
                            <div className="vvs-verdict-card-icon-row">
                                <div className="vvs-verdict-icon-box"><Crown size={20} /></div>
                                <h3 className="vvs-verdict-card-heading">Scenic</h3>
                            </div>
                            <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: '1.6', margin: '0 0 18px' }}>
                                Scenic shines through ultra-luxury accommodations, premium inclusions, butler service, and exceptional personalized attention.
                            </p>
                            <ul className="vvs-verdict-list">
                                {['For travelers seeking an all-inclusive ultra-luxury vacation, Scenic may justify the additional cost.'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="vvs-verdict-summary-box">
                        <div className="vvs-verdict-summary-icon"><Award size={22} /></div>
                        <p className="vvs-verdict-summary-text">
                            The best choice ultimately depends on your travel priorities and budget.
                        </p>
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
                        <h2 className="medi-cta-heading-white">Ready to Choose Between Viking and Scenic?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            For travelers seeking a premium experience at a more approachable price, Viking is often the better fit.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            For travelers seeking an all-inclusive ultra-luxury vacation, Scenic may justify the additional cost. The best choice ultimately depends on your travel priorities and budget.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Viking river cruises', 'Scenic European river voyages', 'Viking ocean cruising', 'Scenic Eclipse expeditions', 'First-time luxury cruise planning'].map((item, idx) => (
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

export default VikingVsScenic