import Navbar from '../../components/Navbar/Navbar'
import './Exploravsscenic.css'

import {
    Ship, MapPin, Star, CheckCircle, Anchor, Gem,
    Crown, Phone, Globe, LayoutList, Award, Users,
    Wifi, Utensils, Sparkles, Heart, Compass,
    Zap, BedDouble, Bath, Sofa, Wine, Ticket,
    Mountain, Snowflake, Binoculars, Dumbbell,
    Music, GraduationCap
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// Hero section
import exploraHero1 from '../../assets/ExploraJourneysVsSilversea/explora_hero.png'
import exploraHero2 from '../../assets/ExploraJourneysVsSilversea/Explora_Journeys.webp'
import scenicHero from '../../assets/ScenicvsFourSeasonsYachts/Hero1.jpg'

// Brand overview cards
import exploraOverviewImg from '../../assets/ExploraJourneysVsSilversea/explora_ship_overview.png'
import scenicOverviewImg from '../../assets/ScenicvsFourSeasonsYachts/Section_12_Scenic_Eclipse.jpg'

// Fleet comparison
import exploraShipImg from '../../assets/BookExplora/explora-journeys-luxury-cruise-ships-sailing-miami.webp'
import scenicShipImg from '../../assets/scenic-vs-silversea-antarctica/scenisilver1.webp'

// Suites
import exploraSuiteImg from '../../assets/ExploraJourneysVsSilversea/silversea_suite.webp'
import scenicSuiteImg from '../../assets/ScenicvsFourSeasonsYachts/GalleryImage2.jpg'

// Dining
import exploraDiningImg from '../../assets/ExploraJourneysVsSilversea/explora_dining.webp'
import scenicDiningImg from '../../assets/FourthPage/Scenic2.webp'

// Expert / Author Profile Image
import angelaImg from '../../assets/Media (2).jpg';
import { Link } from 'react-router-dom'

/* ════════════════════════════════════════════════════════════ */

function ExploraVsScenic() {

    const heroImages = [exploraHero1, exploraHero2, scenicHero]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)
    const [activeCategory, setActiveCategory] = useState(0)

    /* ── Quick Comparison Table rows — exact from doc ── */
    const tableRows = [
        { feature: 'Best For', explora: 'Modern luxury resort cruising', scenic: 'Ultra all-inclusive expedition luxury', winner: null },
        { feature: 'Luxury Level', explora: 'Ultra-Luxury', scenic: 'Six-Star Ultra-Luxury', winner: 'scenic' },
        { feature: 'Guest Capacity', explora: 'Around 900 guests', scenic: 'Around 228 guests', winner: 'scenic' },
        { feature: 'Suites', explora: 'All oceanfront suites', scenic: 'All-veranda suites', winner: null },
        { feature: 'Butler Service', explora: 'Select suites', scenic: 'Included for every suite', winner: 'scenic' },
        { feature: 'Dining', explora: 'Multiple included restaurants', scenic: 'Up to 10 dining experiences', winner: 'scenic' },
        { feature: 'Gratuities', explora: 'Included', scenic: 'Included', winner: 'both' },
        { feature: 'Premium Beverages', explora: 'Included', scenic: 'Included', winner: 'both' },
        { feature: 'Shore Excursions', explora: 'Optional', scenic: 'Many included', winner: 'scenic' },
        { feature: 'Expedition Cruises', explora: 'No', scenic: 'Yes', winner: 'scenic' },
        { feature: 'Atmosphere', explora: 'Contemporary & relaxed', scenic: 'Intimate & highly personalized', winner: null },
    ]

    /* ── Head-to-head tabs — Service, Wellness, Entertainment, Destinations ── */
    const categories = [
        {
            label: 'Service',
            explora: {
                heading: 'Explora Service',
                intro: 'Service aboard Explora is warm, attentive, and relaxed. Guests enjoy:',
                points: ['European hospitality', 'Personalized attention', 'Luxury resort atmosphere', 'Friendly crew', 'Contemporary service style'],
                footer: ''
            },
            scenic: {
                heading: 'Scenic Service',
                intro: 'Scenic delivers one of the highest crew-to-guest ratios in luxury cruising. Guests appreciate:',
                points: ['Butler service', 'Expedition experts', 'Personalized attention', 'Intimate atmosphere', 'Exceptional hospitality'],
                footer: 'Scenic\'s smaller ships naturally create a more personalized guest experience.'
            },
            note: 'Both cruise lines deliver exceptional service, though Scenic\'s smaller ship size and butler service create a uniquely personalized experience.'
        },
        {
            label: 'Wellness',
            explora: {
                heading: 'Explora Wellness',
                intro: 'The Ocean Wellness concept includes:',
                points: ['Luxury spa', 'Multiple pools', 'Thermal experiences', 'Fitness studios', 'Wellness classes', 'Outdoor relaxation spaces'],
                footer: ''
            },
            scenic: {
                heading: 'Scenic Wellness',
                intro: 'Guests enjoy:',
                points: ['Senses Spa', 'Yoga and Pilates studio', 'Infrared sauna', 'Steam rooms', 'Salt therapy lounge', 'Fully equipped fitness center'],
                footer: ''
            },
            note: 'Both cruise lines provide outstanding wellness facilities, though Explora places a stronger emphasis on wellness as part of its overall brand identity.'
        },
        {
            label: 'Entertainment',
            explora: {
                heading: 'Explora Entertainment',
                intro: 'Entertainment includes:',
                points: ['Live music', 'Piano lounges', 'Cocktail bars', 'Cultural performances', 'Elegant evening entertainment'],
                footer: 'The atmosphere is sophisticated and understated.'
            },
            scenic: {
                heading: 'Scenic Entertainment',
                intro: 'Entertainment focuses on enrichment and destination experiences. Guests enjoy:',
                points: ['Expert lectures', 'Documentary presentations', 'Cultural performances', 'Live music', 'Expedition briefings'],
                footer: 'Rather than large theatrical productions, Scenic emphasizes learning and exploration.'
            },
            note: 'Both offer enriching onboard entertainment suited to their respective luxury styles.'
        },
        {
            label: 'Destinations',
            explora: {
                heading: 'Explora Destinations',
                intro: 'Explora sails to destinations including:',
                points: ['Mediterranean', 'Northern Europe', 'Caribbean', 'South America', 'Middle East', 'North America'],
                footer: 'Its itineraries focus on luxury port experiences and longer stays.'
            },
            scenic: {
                heading: 'Scenic Destinations',
                intro: 'Scenic specializes in extraordinary destinations, including:',
                points: ['Antarctica', 'Arctic', 'Greenland', 'Iceland', 'Norwegian Fjords', 'Mediterranean', 'South Pacific', 'Australia', 'New Zealand', 'South America'],
                footer: 'Scenic also offers expedition voyages to some of the world\'s most remote regions.'
            },
            note: 'For adventure-focused travelers, Scenic offers significantly more expedition opportunities.'
        },
    ]

    const faqs = [
        { question: 'Is Explora more luxurious than Scenic?', answer: 'Both cruise lines deliver exceptional luxury, but Explora focuses on contemporary resort-style luxury, while Scenic offers a true six-star all-inclusive experience with butler service for every suite.' },
        { question: 'Which cruise line is better for expedition cruises?', answer: 'Scenic is the clear winner for expedition cruising. Its Discovery Yachts are purpose-built for destinations such as Antarctica, the Arctic, Greenland, and the South Pacific, complete with expedition teams and specialized equipment.' },
        { question: 'Are all Explora accommodations suites?', answer: 'Yes. Every accommodation aboard Explora Journeys is an oceanfront suite featuring a private terrace, spacious living area, and luxury amenities.' },
        { question: 'Does Scenic include butler service?', answer: 'Yes. Every suite aboard Scenic Eclipse includes personalized butler service, regardless of cabin category.' },
        { question: 'Which cruise line has larger ships?', answer: 'Explora\'s ships accommodate approximately 900 guests, while Scenic Eclipse ships carry around 228 guests, offering a much more intimate atmosphere.' },
        { question: 'Which cruise line includes more in the fare?', answer: 'Scenic offers one of the industry\'s most comprehensive all-inclusive experiences, including butler service, premium beverages, gratuities, Wi-Fi, many shore excursions, and expedition equipment. Explora also includes many premium amenities but some excursions are available at an additional cost.' },
        { question: 'Which cruise line offers better dining?', answer: 'Both cruise lines provide outstanding dining. Explora emphasizes international fine dining with flexible restaurant options, while Scenic offers multiple gourmet venues complemented by premium wines and highly personalized service.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent choices for couples. Explora is ideal for those seeking a sophisticated luxury resort atmosphere, while Scenic is perfect for couples looking for intimate, all-inclusive voyages with personalized service.' },
        { question: 'Which cruise line has better wellness facilities?', answer: 'Explora places wellness at the center of its guest experience with its Ocean Wellness concept, while Scenic offers the luxurious Senses Spa, yoga and Pilates studios, infrared sauna, and comprehensive wellness treatments.' },
        { question: 'Which cruise line visits Antarctica?', answer: 'Scenic offers luxury expedition cruises to Antarctica aboard Scenic Eclipse and Scenic Eclipse II. Explora currently focuses on traditional luxury ocean itineraries rather than expedition voyages.' },
        { question: 'Which cruise line offers better value?', answer: 'Value depends on your travel style. Explora offers exceptional value through spacious all-suite accommodations and premium inclusions, while Scenic provides remarkable value for travelers seeking a truly all-inclusive six-star expedition experience.' },
        { question: 'Is Scenic better for adventure travelers?', answer: 'Yes. Scenic is specifically designed for travelers who want to combine ultra-luxury accommodations with expedition experiences, wildlife encounters, Zodiac excursions, and exploration of remote destinations.' },
        { question: 'Which cruise line is better for first-time luxury cruisers?', answer: 'Explora is often recommended for first-time luxury cruisers because of its relaxed atmosphere, spacious suites, and resort-style experience. Scenic is ideal for travelers specifically interested in luxury expedition cruising.' },
        { question: 'Which cruise line has more personalized service?', answer: 'Scenic generally offers a more personalized experience due to its smaller guest capacity and butler service for every suite. Explora also delivers exceptional hospitality but with a larger onboard community.' },
        { question: 'Which luxury cruise line should I choose?', answer: 'Choose Explora Journeys if you want contemporary European luxury, spacious all-suite accommodations, wellness-focused experiences, and elegant resort-style cruising. Choose Scenic Luxury Cruises if you prefer a truly all-inclusive six-star voyage, butler service, expedition adventures, and intimate luxury aboard a Discovery Yacht.' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic",
                "name": "Explora vs Scenic",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic",
                "description": "Compare Explora Journeys vs Scenic Luxury Cruises with expert insights from Trips & Ships Luxury Travel. Discover differences in ships, suites, dining, inclusions, expedition experiences, service, pricing, and destinations.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic#article" }
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
                "description": "Luxury travel agency specializing in luxury cruise vacations, expedition cruises, river cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic#article",
                "headline": "Explora vs Scenic",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic",
                "description": "Expert comparison of Explora Journeys and Scenic Luxury Cruises including accommodations, ships, dining, destinations, expedition experiences, pricing, inclusions, and onboard luxury.",
                "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-scenic.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert luxury cruise planning and comparison services helping travelers select the ideal luxury cruise line based on travel style, destination preferences, and vacation goals."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Comparisons", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Scenic", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-scenic" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Explora more luxurious than Scenic?", "acceptedAnswer": { "@type": "Answer", "text": "Both cruise lines offer exceptional luxury. Explora emphasizes contemporary resort-style luxury, while Scenic provides a six-star all-inclusive experience with butler service for every suite." } },
                    { "@type": "Question", "name": "Which cruise line is better for expedition cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic is the better choice for expedition cruising thanks to its purpose-built Discovery Yachts, expert expedition teams, and remote itineraries." } },
                    { "@type": "Question", "name": "Are all Explora accommodations suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every accommodation aboard Explora Journeys is an oceanfront suite with a private terrace and spacious living area." } },
                    { "@type": "Question", "name": "Does Scenic include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse includes personalized butler service." } },
                    { "@type": "Question", "name": "Which cruise line has larger ships?", "acceptedAnswer": { "@type": "Answer", "text": "Explora ships accommodate approximately 900 guests, while Scenic Eclipse carries around 228 guests for a more intimate luxury experience." } },
                    { "@type": "Question", "name": "Which cruise line includes more in the cruise fare?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic offers one of the industry's most comprehensive all-inclusive experiences, including butler service, premium beverages, gratuities, Wi-Fi, and many shore excursions." } },
                    { "@type": "Question", "name": "Which cruise line offers better dining?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer exceptional dining. Explora emphasizes international fine dining, while Scenic combines gourmet cuisine with premium wines and personalized service." } },
                    { "@type": "Question", "name": "Which cruise line is better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both are excellent for couples. Explora offers a sophisticated resort atmosphere, while Scenic delivers intimate all-inclusive luxury with butler service." } },
                    { "@type": "Question", "name": "Which cruise line has better wellness facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Explora features its Ocean Wellness concept, while Scenic offers the Senses Spa, yoga and Pilates studios, infrared sauna, and wellness programs." } },
                    { "@type": "Question", "name": "Which cruise line visits Antarctica?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic operates luxury expedition cruises to Antarctica aboard Scenic Eclipse and Scenic Eclipse II." } },
                    { "@type": "Question", "name": "Which cruise line offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "Explora provides excellent value through spacious suites and premium inclusions, while Scenic delivers exceptional value through its all-inclusive luxury and expedition experiences." } },
                    { "@type": "Question", "name": "Is Scenic better for adventure travelers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic is designed for luxury travelers seeking expedition adventures, wildlife encounters, Zodiac excursions, and remote destinations." } },
                    { "@type": "Question", "name": "Which cruise line is better for first-time luxury cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Explora is often recommended for first-time luxury cruisers because of its relaxed atmosphere, spacious suites, and resort-style experience." } },
                    { "@type": "Question", "name": "Which cruise line has more personalized service?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic generally provides more personalized service due to its smaller guest capacity and butler service for every suite." } },
                    { "@type": "Question", "name": "Which luxury cruise line should I choose?", "acceptedAnswer": { "@type": "Answer", "text": "Choose Explora Journeys for contemporary luxury, wellness, and spacious all-suite accommodations. Choose Scenic Luxury Cruises for an all-inclusive six-star expedition experience with butler service and remote destinations." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Explora vs Scenic: Which Luxury Cruise Line Is Best for You? (2026 Guide)</title>
                <meta name="title" content="Explora vs Scenic | Luxury Cruise Comparison Guide" />
                <meta name="description" content="Compare Explora Journeys vs Scenic Luxury Cruises, including ships, suites, dining, inclusions, service, destinations, pricing, and onboard experiences to find the perfect luxury cruise." />
                <meta name="keywords" content="Explora vs Scenic, Explora Journeys vs Scenic, Explora vs Scenic Cruises, Luxury Cruise Comparison, Scenic Eclipse vs Explora, Best Luxury Cruise Line, Explora Journeys Review, Scenic Luxury Cruises Review, Ultra Luxury Cruise Comparison" />
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
                        Explora vs Scenic: <br /> Which Luxury Cruise Line <br /> Is Right for You?
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Comparing Two Exceptional Luxury Cruise Experiences — both brands emphasize exceptional service, elegant accommodations, and immersive travel, but are designed for different types of luxury travelers.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO
            ══════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-intro-container">
                    <div className="medi-intro-grid-layout">

                        <div className="medi-intro-heading-column">
                            <span className="medi-premium-mini-badge">ULTRA-LUXURY COMPARISON</span>
                            <h2 className="medi-section-heading">Comparing Two Exceptional Luxury Cruise Experiences</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <div className="medi-intro-highlight-box">
                                "Explora Journeys and Scenic Luxury Cruises &amp; Tours represent two of the most exciting names in modern luxury cruising."
                            </div>
                        </div>

                        <div className="medi-intro-content-column">
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Explora Journeys delivers a sophisticated, resort-style ocean voyage with spacious all-suite accommodations, contemporary European design, and a wellness-focused atmosphere.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Scenic, on the other hand, combines true all-inclusive luxury with expedition capabilities aboard its Discovery Yachts, allowing guests to explore some of the world's most remote destinations while enjoying six-star service.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '32px' }}>
                                If you're deciding between Explora and Scenic, this guide compares every major category—including accommodations, dining, destinations, inclusions, pricing, service, and overall experience—to help you choose the right luxury cruise.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                                <div style={{ background: 'var(--medi-navy)', borderRadius: '14px', padding: '22px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                            <Ship size={18} />
                                        </div>
                                        <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', margin: 0 }}>Explora Journeys</h3>
                                    </div>
                                    <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>Resort-style ocean voyage. Spacious suites, contemporary European design, wellness-focused.</p>
                                </div>
                                <div style={{ background: 'var(--medi-bg-soft)', border: '1px solid rgba(39,68,114,0.12)', borderRadius: '14px', padding: '22px 20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'var(--medi-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                            <Compass size={18} />
                                        </div>
                                        <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>Scenic Luxury Cruises</h3>
                                    </div>
                                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>True all-inclusive expedition luxury. Discovery Yachts, butler service, remote destinations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                QUICK COMPARISON TABLE
            ══════════════════════════════════ */}
            <section className="evs-table-section">
                <div className="evs-table-container">
                    <div className="evs-table-header">
                        <span className="medi-itinerary-eyebrow">AT A GLANCE</span>
                        <h2 className="medi-section-heading">Quick Comparison: Explora vs Scenic</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-table-wrapper">
                        <div className="evs-table-head">
                            <span className="evs-table-head-cell">Feature</span>
                            <span className="evs-table-head-cell center">Explora Journeys</span>
                            <span className="evs-table-head-cell center">Scenic Luxury Cruises</span>
                        </div>
                        {tableRows.map((row, i) => (
                            <div key={i} className="evs-table-row">
                                <span className="evs-table-feature">{row.feature}</span>
                                <span className="evs-table-cell">
                                    {row.winner === 'both'
                                        ? <span className="evs-table-pill tie">{row.explora}</span>
                                        : row.explora}
                                </span>
                                <span className="evs-table-cell">
                                    {row.winner === 'scenic'
                                        ? <span className="evs-table-pill winner">{row.scenic}</span>
                                        : row.winner === 'both'
                                            ? <span className="evs-table-pill tie">{row.scenic}</span>
                                            : row.scenic}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                OVERVIEW PANELS
            ══════════════════════════════════ */}
            <section className="evs-overview-section premium-redesigned-overview">
                <div className="evs-overview-container">
                    <div className="evs-overview-header">
                        <span className="medi-itinerary-eyebrow">BRAND OVERVIEW</span>
                        <h2 className="medi-section-heading">Explora Journeys &amp; Scenic Luxury Cruises Overview</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-overview-split-layout">
                        {/* Explora Row */}
                        <div className="evs-overview-row explora-brand-row">
                            <div className="evs-overview-img-column">
                                <div className="evs-overview-img-frame-new">
                                    <img src={exploraOverviewImg} alt="Explora Journeys" />
                                    <div className="evs-overview-badge-tag explora-badge">EXPLORA JOURNEYS</div>
                                </div>
                            </div>
                            <div className="evs-overview-text-column">
                                <div className="evs-overview-brand-meta">
                                    <span className="evs-overview-mini-tag">LIFESTYLE OCEAN RESORT</span>
                                    <h3 className="evs-overview-brand-title">Explora Journeys</h3>
                                    <p className="evs-overview-brand-tagline">The luxury lifestyle cruise brand launched by the MSC Group to redefine luxury ocean travel.</p>
                                </div>
                                <p className="evs-overview-desc">Every guest enjoys an oceanfront suite with premium amenities, spacious interiors, and private terraces. Unlike traditional luxury cruise lines, Explora creates the feeling of staying at a five-star luxury resort that happens to travel the world.</p>

                                <div className="evs-overview-bullet-grid">
                                    <div className="evs-overview-bullet-block">
                                        <p className="evs-overview-label">The experience emphasizes</p>
                                        <ul className="evs-overview-list-new">
                                            {['Relaxed luxury', 'Wellness and rejuvenation', 'Flexible dining', 'Contemporary European elegance', 'Ocean-inspired design'].map((f, i) => (
                                                <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="evs-overview-bullet-block">
                                        <p className="evs-overview-label">Explora Strengths</p>
                                        <ul className="evs-overview-list-new">
                                            {['Spacious all-suite accommodations', 'Contemporary European design', 'Wellness-focused experiences', 'Flexible dining', 'Premium beverages included', 'Relaxed luxury atmosphere'].map((f, i) => (
                                                <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scenic Row */}
                        <div className="evs-overview-row scenic-brand-row reverse">
                            <div className="evs-overview-text-column">
                                <div className="evs-overview-brand-meta">
                                    <span className="evs-overview-mini-tag dark">EXPEDITION & SIX-STAR LUXURY</span>
                                    <h3 className="evs-overview-brand-title">Scenic Luxury Cruises</h3>
                                    <p className="evs-overview-brand-tagline">Best known for offering truly all-inclusive luxury travel with expedition capabilities.</p>
                                </div>
                                <p className="evs-overview-desc">Its fleet of Discovery Yachts combines expedition capabilities with six-star accommodations and personalized butler service. Scenic is ideal for travelers who want adventure without sacrificing luxury.</p>

                                <div className="evs-overview-bullet-grid">
                                    <div className="evs-overview-bullet-block">
                                        <p className="evs-overview-label">Guests enjoy</p>
                                        <ul className="evs-overview-list-new">
                                            {['Butler service for every suite', 'Nearly everything included', 'Scenic Eclipse Discovery Yachts', 'Helicopter and submarine experiences (select voyages)', 'Expedition experts', 'Luxury exploration'].map((f, i) => (
                                                <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="evs-overview-bullet-block">
                                        <p className="evs-overview-label">Scenic Strengths</p>
                                        <ul className="evs-overview-list-new">
                                            {['True all-inclusive experience', 'Butler service for all guests', 'Expedition capabilities', 'Luxury Discovery Yachts', 'Smaller guest capacity', 'Personalized service'].map((f, i) => (
                                                <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="evs-overview-img-column">
                                <div className="evs-overview-img-frame-new">
                                    <img src={scenicOverviewImg} alt="Scenic Luxury Cruises" />
                                    <div className="evs-overview-badge-tag scenic-badge">SCENIC LUXURY CRUISES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPLORA JOURNEYS BRAND VIDEO SECTION */}
            <section style={{
                padding: '100px 20px',
                backgroundColor: '#e6edf7', // Soft Blue Tint
                fontFamily: 'sans-serif',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Scenic Eclipse: <br /> The World of Truly All-Inclusive <br /> Ultra-Luxury Cruising
                        </h2>

                        {/* Horizontal Accent Line Above Text */}
                        <div style={{
                            width: '60px',
                            height: '3px',
                            backgroundColor: '#3b82f6', // Azure Blue accent
                            margin: '25px auto 25px auto',
                            borderRadius: '10px'
                        }}></div>

                        <p style={{
                            fontSize: 'clamp(16px, 2vw, 19px)',
                            color: '#475569', // Dark slate/grey for readability
                            maxWidth: '850px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                            fontWeight: '400'
                        }}>
                            Experience the extraordinary aboard Scenic Eclipse, where every detail is designed for uncompromising luxury. From world-class dining and spacious suites to unforgettable destinations, discover what truly all-inclusive ultra-luxury cruising feels like.
                        </p>
                    </div>

                    {/* Video Player Container */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        boxShadow: '0 40px 100px rgba(15, 28, 46, 0.15)', // Adjusted shadow for light background
                        border: '1px solid rgba(15, 28, 46, 0.1)',
                        aspectRatio: '16/9'
                    }}>
                        {/* The Video Embed - Official Explora Journeys Video */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/sVDShq1H4_A"
                            title="Explora Journeys Luxury Cruise Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════
                SHIPS COMPARISON
            ══════════════════════════════════ */}
            <section className="evs-ships-section">
                <div className="evs-ships-container">
                    <div className="evs-ships-header">
                        <span className="medi-itinerary-eyebrow">FLEET OVERVIEW</span>
                        <h2 className="medi-section-heading">Ships Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-ships-grid">
                        {/* Explora Fleet */}
                        <div className="evs-ship-panel">
                            <div className="evs-ship-panel-header">
                                <div className="evs-ship-panel-icon"><Ship size={20} /></div>
                                <h3 className="evs-ship-panel-title">Explora Fleet</h3>
                            </div>
                            <div className="evs-ship-panel-body">
                                <div className="evs-ship-img-wrap">
                                    <img src={exploraShipImg} alt="Explora Journeys fleet" />
                                </div>
                                <p className="evs-ship-sub-label">Current and upcoming ships include:</p>
                                <ul className="evs-ship-list">
                                    {['EXPLORA I', 'EXPLORA II', 'EXPLORA III', 'EXPLORA IV', 'EXPLORA V', 'EXPLORA VI'].map((s, i) => (
                                        <li key={i}><Ship size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                                <div className="evs-ship-capacity-tag"><Users size={15} /> ~900 guests per ship</div>
                                <p className="evs-ship-sub-label mt">Highlights include:</p>
                                <ul className="evs-ship-list">
                                    {['Expansive outdoor decks', 'Infinity pools', 'Ocean Wellness Spa', 'Luxury lounges', 'Contemporary architecture'].map((s, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Scenic Fleet */}
                        <div className="evs-ship-panel">
                            <div className="evs-ship-panel-header">
                                <div className="evs-ship-panel-icon"><Compass size={20} /></div>
                                <h3 className="evs-ship-panel-title">Scenic Fleet</h3>
                            </div>
                            <div className="evs-ship-panel-body">
                                <div className="evs-ship-img-wrap">
                                    <img src={scenicShipImg} alt="Scenic Eclipse Discovery Yachts" />
                                </div>
                                <p className="evs-ship-sub-label">Scenic currently operates:</p>
                                <ul className="evs-ship-list">
                                    {['Scenic Eclipse', 'Scenic Eclipse II'].map((s, i) => (
                                        <li key={i}><Ship size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                                <div className="evs-ship-capacity-tag"><Users size={15} /> ~228 guests per yacht</div>
                                <p className="evs-ship-sub-label mt">Highlights include:</p>
                                <ul className="evs-ship-list">
                                    {['Polar Class expedition design', 'Two helicopters (select voyages)', 'Submarine experiences', 'Marina platform', 'Expedition equipment', 'Multiple dining venues'].map((s, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{s}</span></li>
                                    ))}
                                </ul>
                                <p className="evs-ship-note">The smaller guest capacity allows Scenic to access remote destinations that larger ships cannot visit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SUITES & ACCOMMODATIONS (dark)
            ══════════════════════════════════ */}
            <section className="evs-suites-section">
                <div className="evs-suites-container">
                    <div className="evs-suites-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>ONBOARD COMFORT</span>
                        <h2 className="medi-section-heading">Suites and Accommodations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-suites-grid">
                        {/* Explora */}
                        <div className="evs-suite-card">
                            <div className="evs-suite-img-wrap">
                                <img src={exploraSuiteImg} alt="Explora Journeys suites" />
                            </div>
                            <div className="evs-suite-body">
                                <p className="evs-suite-brand">Explora Journeys</p>
                                <h3 className="evs-suite-title">Explora Suites</h3>
                                <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: '0 0 14px', lineHeight: '1.6' }}>Every guest enjoys:</p>
                                <ul className="evs-suite-list">
                                    {['Oceanfront suite', 'Private terrace', 'Floor-to-ceiling windows', 'Heated bathroom floors', 'Walk-in wardrobe', 'Spacious sitting area'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic', marginTop: '12px', lineHeight: '1.5' }}>Entry-level suites are among the largest in luxury cruising.</p>
                            </div>
                        </div>

                        {/* Scenic */}
                        <div className="evs-suite-card">
                            <div className="evs-suite-img-wrap">
                                <img src={scenicSuiteImg} alt="Scenic Eclipse suites" />
                            </div>
                            <div className="evs-suite-body">
                                <p className="evs-suite-brand">Scenic Luxury Cruises</p>
                                <h3 className="evs-suite-title">Scenic Suites</h3>
                                <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: '0 0 14px', lineHeight: '1.6' }}>Every Scenic suite includes:</p>
                                <ul className="evs-suite-list">
                                    {['Private veranda', 'Butler service', 'Pillow menu', 'Luxury linens', 'Spacious marble bathroom', 'Personalized minibar'].map((f, i) => (
                                        <li key={i}><CheckCircle size={15} /><span>{f}</span></li>
                                    ))}
                                </ul>
                                <p style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic', marginTop: '12px', lineHeight: '1.5' }}>Higher-category suites include expansive living areas, oversized terraces, and premium amenities.</p>
                            </div>
                        </div>
                    </div>

                    <p className="evs-suites-note">
                        Both cruise lines deliver exceptional accommodations, though Scenic offers butler service for every guest.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                DINING COMPARISON
            ══════════════════════════════════ */}
            <section className="evs-dining-section">
                <div className="evs-dining-container">
                    <div className="evs-dining-header">
                        <span className="medi-itinerary-eyebrow">CULINARY EXPERIENCE</span>
                        <h2 className="medi-section-heading">Dining Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-dining-grid">
                        {/* Explora */}
                        <div className="evs-dining-card">
                            <div className="evs-dining-img-wrap">
                                <img src={exploraDiningImg} alt="Explora Journeys dining" />
                            </div>
                            <div className="evs-dining-body">
                                <p className="evs-dining-brand">Explora Journeys</p>
                                <h3 className="evs-dining-title">Explora Dining</h3>
                                <p className="evs-dining-intro">Explora offers multiple included restaurants serving:</p>
                                <ul className="evs-dining-list">
                                    {['Mediterranean cuisine', 'Asian specialties', 'European classics', 'Steak and seafood', 'International fine dining', 'Casual luxury dining'].map((d, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{d}</span></li>
                                    ))}
                                </ul>
                                <p className="evs-dining-footer">Guests enjoy complete flexibility with no fixed dining times.</p>
                            </div>
                        </div>

                        {/* Scenic */}
                        <div className="evs-dining-card">
                            <div className="evs-dining-img-wrap">
                                <img src={scenicDiningImg} alt="Scenic Luxury Cruises dining" />
                            </div>
                            <div className="evs-dining-body">
                                <p className="evs-dining-brand">Scenic Luxury Cruises</p>
                                <h3 className="evs-dining-title">Scenic Dining</h3>
                                <p className="evs-dining-intro">Scenic features up to ten dining experiences depending on the ship, including:</p>
                                <ul className="evs-dining-list">
                                    {['Elements', 'Koko\'s Asian Fusion', 'Night Market @ Koko\'s', 'Lumière', 'Azure Bar & Café', 'Chef\'s Table'].map((d, i) => (
                                        <li key={i}><Utensils size={14} /><span>{d}</span></li>
                                    ))}
                                </ul>
                                <p className="evs-dining-footer">Dining is complemented by premium wines, spirits, and personalized service. For travelers seeking an all-inclusive gourmet experience, Scenic is among the industry's best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHAT'S INCLUDED
            ══════════════════════════════════ */}
            <section className="evs-included-section">
                <div className="evs-included-container">
                    <div className="evs-included-header">
                        <span className="medi-itinerary-eyebrow">INCLUSIONS</span>
                        <h2 className="medi-section-heading">What's Included?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-included-grid">
                        {/* Explora */}
                        <div className="evs-included-card explora">
                            <div className="evs-included-icon-row">
                                <div className="evs-included-icon"><Ship size={20} /></div>
                                <h3 className="evs-included-title">Explora Includes</h3>
                            </div>
                            <p className="evs-included-intro">Guests receive:</p>
                            <ul className="evs-included-list">
                                {['Oceanfront suites', 'Multiple restaurants', 'Premium beverages', 'Specialty coffees', 'Wi-Fi', 'Gratuities', 'Fitness center', 'Wellness facilities'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="evs-included-footer">Some shore excursions are optional.</p>
                        </div>

                        {/* Scenic */}
                        <div className="evs-included-card scenic">
                            <div className="evs-included-icon-row">
                                <div className="evs-included-icon"><Compass size={20} /></div>
                                <h3 className="evs-included-title">Scenic Includes</h3>
                            </div>
                            <p className="evs-included-intro">Scenic is one of the industry's most inclusive luxury cruise lines. Included amenities typically feature:</p>
                            <ul className="evs-included-list">
                                {['Butler service', 'All meals', 'Premium beverages', 'Fine wines', 'Shore excursions', 'Gratuities', 'Wi-Fi', 'Fitness center', 'Wellness spa', 'Expedition equipment (where applicable)'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="evs-included-footer">The comprehensive inclusions simplify budgeting and create a seamless luxury experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                HEAD-TO-HEAD: Service / Wellness / Entertainment / Destinations
            ══════════════════════════════════ */}
            <section className="evs-headtohead-section">
                <div className="evs-headtohead-container">
                    <div className="evs-headtohead-header">
                        <span className="medi-itinerary-eyebrow">HEAD-TO-HEAD</span>
                        <h2 className="medi-section-heading">Service, Wellness, Entertainment &amp; Destinations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-category-tabs">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`evs-category-tab-btn ${activeCategory === idx ? 'active' : ''}`}
                                onClick={() => setActiveCategory(idx)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {categories.map((cat, idx) => idx !== activeCategory ? null : (
                        <div key={idx}>
                            <div className="evs-category-panel">
                                <div className="evs-category-card">
                                    <p className="evs-category-brand">Explora Journeys</p>
                                    <h3 className="evs-category-heading">{cat.explora.heading}</h3>
                                    {cat.explora.intro && <p className="evs-category-intro">{cat.explora.intro}</p>}
                                    <ul className="evs-category-list">
                                        {cat.explora.points.map((pt, i) => (
                                            <li key={i}><CheckCircle size={15} /><span>{pt}</span></li>
                                        ))}
                                    </ul>
                                    {cat.explora.footer && <p className="evs-category-footer">{cat.explora.footer}</p>}
                                </div>
                                <div className="evs-category-card">
                                    <p className="evs-category-brand">Scenic Luxury Cruises</p>
                                    <h3 className="evs-category-heading">{cat.scenic.heading}</h3>
                                    {cat.scenic.intro && <p className="evs-category-intro">{cat.scenic.intro}</p>}
                                    <ul className="evs-category-list">
                                        {cat.scenic.points.map((pt, i) => (
                                            <li key={i}><CheckCircle size={15} /><span>{pt}</span></li>
                                        ))}
                                    </ul>
                                    {cat.scenic.footer && <p className="evs-category-footer">{cat.scenic.footer}</p>}
                                </div>
                            </div>
                            <div className="evs-category-note">{cat.note}</div>
                        </div>
                    ))}
                </div>
            </section>

                {/* EXPLORA JOURNEYS BRAND VIDEO SECTION */}
            <section style={{
                padding: '100px 20px',
                backgroundColor: '#e6edf7', // Soft Blue Tint
                fontFamily: 'sans-serif',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            EXPLORA II Naming Ceremony <br /> A Milestone for Explora Journeys
                        </h2>

                        {/* Horizontal Accent Line Above Text */}
                        <div style={{
                            width: '60px',
                            height: '3px',
                            backgroundColor: '#3b82f6', // Azure Blue accent
                            margin: '25px auto 25px auto',
                            borderRadius: '10px'
                        }}></div>

                        <p style={{
                            fontSize: 'clamp(16px, 2vw, 19px)',
                            color: '#475569', // Dark slate/grey for readability
                            maxWidth: '850px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                            fontWeight: '400'
                        }}>
                           Celebrate the official naming of EXPLORA II, marking an exciting new chapter for Explora Journeys. Witness the elegance, tradition, and vision behind one of the world's newest luxury cruise ships.
                        </p>
                    </div>

                    {/* Video Player Container */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        boxShadow: '0 40px 100px rgba(15, 28, 46, 0.15)', // Adjusted shadow for light background
                        border: '1px solid rgba(15, 28, 46, 0.1)',
                        aspectRatio: '16/9'
                    }}>
                        {/* The Video Embed - Official Explora Journeys Video */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/-MoZN-XQPLY"
                            title="Explora Journeys Luxury Cruise Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        ></iframe>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════
                PRICING + WHO SHOULD CHOOSE
            ══════════════════════════════════ */}
            <section className="evs-choose-section">
                <div className="evs-choose-container">
                    <div className="evs-choose-header">
                        <span className="medi-itinerary-eyebrow">PRICING & IDEAL TRAVELER</span>
                        <h2 className="medi-section-heading">Pricing Comparison &amp; Who Should Choose Each</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="evs-pricing-note">
                        <p>
                            <strong>Pricing Comparison:</strong> Explora is positioned within the ultra-luxury market and offers competitive pricing for its spacious all-suite accommodations and premium inclusions. Scenic generally commands higher fares due to its truly all-inclusive model, butler service, expedition equipment, and unique Discovery Yacht experiences. When comparing pricing, travelers should consider everything included in the fare rather than the base cruise price alone.
                        </p>
                    </div>

                    <div className="evs-choose-grid">
                        <div className="evs-choose-card explora">
                            <div className="evs-choose-icon-row">
                                <div className="evs-choose-icon"><Ship size={20} /></div>
                                <h3 className="evs-choose-title">Who Should Choose Explora?</h3>
                            </div>
                            <p className="evs-choose-intro">Explora is ideal if you:</p>
                            <ul className="evs-choose-list">
                                {['Prefer contemporary luxury', 'Enjoy spacious suites', 'Want a resort-style cruise', 'Value wellness experiences', 'Appreciate flexible dining', 'Prefer elegant relaxation'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="evs-choose-card scenic">
                            <div className="evs-choose-icon-row">
                                <div className="evs-choose-icon"><Compass size={20} /></div>
                                <h3 className="evs-choose-title">Who Should Choose Scenic?</h3>
                            </div>
                            <p className="evs-choose-intro">Scenic is an excellent choice if you:</p>
                            <ul className="evs-choose-list">
                                {['Want a truly all-inclusive vacation', 'Prefer smaller ships', 'Value butler service', 'Enjoy expedition travel', 'Want remote destinations', 'Appreciate luxury adventure'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                FINAL VERDICT
            ══════════════════════════════════ */}
            <section className="evs-verdict-section">
                <div className="evs-verdict-container">
                    <div className="evs-verdict-header">
                        <span className="medi-itinerary-eyebrow">FINAL VERDICT</span>
                        <h2 className="medi-section-heading">Final Verdict</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="evs-verdict-lead">
                        Explora Journeys and Scenic Luxury Cruises both represent the highest levels of luxury cruising, but they appeal to different travel styles.
                    </p>

                    <div className="evs-verdict-grid">
                        <div className="evs-verdict-card explora">
                            <div className="evs-verdict-card-header">
                                <div className="evs-verdict-icon"><Ship size={18} /></div>
                                <h3 className="evs-verdict-title">Choose Explora Journeys If</h3>
                            </div>
                            <p className="evs-verdict-text">
                                You want spacious all-suite accommodations, a contemporary luxury resort atmosphere, and wellness-focused ocean travel.
                            </p>
                        </div>
                        <div className="evs-verdict-card scenic">
                            <div className="evs-verdict-card-header">
                                <div className="evs-verdict-icon"><Compass size={18} /></div>
                                <h3 className="evs-verdict-title">Choose Scenic Luxury Cruises If</h3>
                            </div>
                            <p className="evs-verdict-text">
                                You prefer an intimate all-inclusive experience, personalized butler service, and the opportunity to explore extraordinary destinations aboard a luxury Discovery Yacht.
                            </p>
                        </div>
                    </div>

                    <div className="evs-verdict-summary">
                        <div className="evs-verdict-summary-icon"><Award size={22} /></div>
                        <p className="evs-verdict-summary-text">
                            Both cruise lines consistently rank among the finest luxury cruise experiences available, making either an exceptional choice depending on your travel preferences.
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
                                <img src={angelaImg} alt="Angela Hughes - Luxury Cruise Expert" />
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
                                Choosing between Explora Journeys and Scenic Luxury Cruises is an exciting decision. Both are extraordinary — but the right fit comes down to your travel style, destination goals, and what matters most in a luxury cruise.
                            </p>
                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Trips &amp; Ships Luxury Travel helps you:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Compare ultra-luxury cruise lines', 'Select the right itinerary', 'Understand full inclusions', 'Choose the ideal suite category', 'Plan expedition vs. resort cruising', 'Access exclusive promotions'].map((item, idx) => (
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
                            Both Explora Journeys and Scenic Luxury Cruises both represent the highest levels of luxury cruising, but they appeal to different travel styles.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Both cruise lines consistently rank among the finest luxury cruise experiences available, making either an exceptional choice depending on your travel preferences.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Explora Journeys resort-style voyages', 'Scenic Eclipse expedition cruises', 'Antarctica and Arctic expedition travel', 'Mediterranean ultra-luxury cruising', 'All-inclusive luxury cruise planning'].map((item, idx) => (
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
                            <Link to="/contact" className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
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

export default ExploraVsScenic