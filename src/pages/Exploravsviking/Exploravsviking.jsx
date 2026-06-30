import Navbar from '../../components/Navbar/Navbar'
import './Exploravsviking.css'
import Profile_AH from '../../assets/Media (2).jpg'
import Profile_Picture_AH from '../../assets/ExploraFAQ/Profile_Picture_AH.jpg'

// ── Hero images (3 rotating) ─────────────────────────────────────
import hero1 from '../../assets/ExploraJourneysVsSilversea/explora_hero.png'
import hero2 from '../../assets/Vikingalaskacruises/Eidfjord, Norway_2026-04-13_18-47-56.jpg'
import hero3 from '../../assets/ExploraJourneysVsSilversea/Explora_Journeys.webp'

// ── Explora brand images ─────────────────────────────────────────
import exploraShipImg       from '../../assets/BestSuitesExploraJourneys/explora-I-oceanfront-pool-lounge-deck.JPG'
import exploraSuiteImg      from '../../assets/BestSuitesExploraJourneys/explora-journeys-oceanfront-infinity-pool-deck.jpg'
import exploraDiningImg     from '../../assets/BestSuitesExploraJourneys/Image_3.webp'
import exploraWellnessImg   from '../../assets/BestSuitesExploraJourneys/explora-journeys-indoor-hydrotherapy-pool-luxury-spa-experience.jpg'
import exploraOverviewImg   from '../../assets/ExploraJourneysVsSilversea/explora-journeys-helios-pool-spa-sundeck (1).webp'
import exploraChooseImg     from '../../assets/ExploraJourneysVsSilversea/Explora_Journeys.webp'

// ── Viking brand images ──────────────────────────────────────────
import vikingShipImg        from '../../assets/AzamaravsVikingOcean/viking.webp'
import vikingSuiteImg       from '../../assets/Vikingmediterraneancruises/Nordic Junior Suite_2026-04-13_19-01-22.jpg'
import vikingDiningImg      from '../../assets/Vikingalaskacruises/The Restaurant_2026-04-13_18-49-21.jpg'
import vikingWellnessImg    from '../../assets/Vikingmediterraneancruises/Infinity Pool_2026-04-13_18-48-12.jpg'
import vikingOverviewImg    from '../../assets/Hxvsvikingexpeditions/ChoseViking.webp'
import vikingChooseImg      from '../../assets/AzamaravsVikingOcean/ChoseViking.webp'

// ── Destination images ───────────────────────────────────────────
import destMedImg           from '../../assets/ExploraJourneysVsSilversea/explora-I-infinity-pool-aerial-view (1).webp'
import destNorthernImg      from '../../assets/Vikingmediterraneancruises/Flam, Norway_2026-04-13_18-48-05.jpg'
import destCaribbeanImg     from '../../assets/BestSuitesExploraJourneys/explora-journeys-private-suite-balcony-breakfast-ocean-view.jpg'
import destAsiaImg          from '../../assets/Vikingmediterraneancruises/Papeete, French Polynesia_2026-04-13_18-48-51.jpg'
import destSouthAmericaImg  from '../../assets/ExploraJourneysVsSilversea/explora-I-luxury-cruise-ship-exterior-port-view (1).webp'

// ── Luxury suite image (medi-luxury-definition-section) ──────────
import luxurySuiteImg       from '../../assets/ExploraJourneysVsSilversea/Suites_Comparison.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap,
    Wifi, Waves, BookOpen, Scale
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ExploraVsViking() {

    // ── Hero slider ──────────────────────────────────────────────
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]
    useEffect(() => {
        const t = setInterval(() => setMediCurrentHero(p => (p + 1) % mediHeroImages.length), 5000)
        return () => clearInterval(t)
    }, [mediHeroImages.length])

    // ── Mistakes / differences slider ────────────────────────────
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)
    useEffect(() => {
        if (isMediSliderHovered) return
        const t = setInterval(() => setMediActiveMistake(p => (p + 1) % 4), 5000)
        return () => clearInterval(t)
    }, [isMediSliderHovered])

    // ── FAQ ──────────────────────────────────────────────────────
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const mediToggleFaq = index => setMediActiveFaq(mediActiveFaq === index ? null : index)

    // ─────────────────────────────────────────────────────────────
    // DATA
    // ─────────────────────────────────────────────────────────────

    // Slider: key comparison insights
    const mediMistakes = [
        {
            title: 'Suite Size Differences',
            desc: 'Explora offers significantly larger entry-level suites than Viking\'s standard veranda staterooms.',
            bullets: [
                'Explora: every guest stays in a luxury suite with private terrace',
                'Viking: standard veranda staterooms are smaller than Explora\'s entry-level suites'
            ]
        },
        {
            title: 'Adults-Only Policy',
            desc: 'Viking Ocean Cruises welcomes guests aged 18 and older. Explora allows families with children, though the atmosphere is geared toward luxury travelers.',
            bullets: [
                'Viking is especially popular for couples and romantic vacations',
                'Explora appeals to luxury-focused family travelers'
            ]
        },
        {
            title: 'Shore Excursions Included',
            desc: 'Viking includes at least one complimentary shore excursion in every port as part of its destination-focused philosophy.',
            bullets: [
                'Viking: included excursion in every port',
                'Explora: optional curated excursions available'
            ]
        },
        {
            title: 'Entertainment Philosophy',
            desc: 'Explora offers elegant lounges, live music, and cultural performances. Viking focuses on enrichment through guest lectures, destination experts, and educational programming rather than large productions.',
            bullets: [
                'Explora: cocktail venues, cultural performances, wellness activities',
                'Viking: lectures, classical music, destination expert programming'
            ]
        }
    ]

    const mediFaqs = [
        { question: 'Is Explora more luxurious than Viking?', answer: 'Explora is generally positioned as an ultra-luxury cruise line, while Viking is considered a premium luxury cruise line focused on destination immersion.' },
        { question: 'Which cruise line has larger suites?', answer: 'Explora offers significantly larger entry-level suites than Viking\'s standard veranda staterooms.' },
        { question: 'Is Viking adults only?', answer: 'Yes. Viking Ocean Cruises welcomes guests aged 18 and older.' },
        { question: 'Does Explora allow children?', answer: 'Yes. Families with children are welcome aboard Explora Journeys, although the atmosphere is geared toward luxury travelers.' },
        { question: 'Which cruise line includes shore excursions?', answer: 'Viking includes at least one complimentary shore excursion in every port. Explora offers optional curated excursions.' },
        { question: 'Which cruise line has better dining?', answer: 'Both offer exceptional dining. Explora emphasizes international culinary experiences, while Viking highlights regional cuisine inspired by destinations.' },
        { question: 'Does Explora include gratuities?', answer: 'Yes. Gratuities are included in the cruise fare.' },
        { question: 'Which cruise line has better wellness facilities?', answer: 'Explora offers more expansive wellness programming, while Viking is famous for its Nordic Spa and Snow Grotto.' },
        { question: 'Which cruise line is better for first-time luxury cruisers?', answer: 'Viking is often recommended for travelers seeking cultural enrichment, while Explora appeals to those wanting a luxury resort experience.' },
        { question: 'Which cruise line offers world cruises?', answer: 'Viking offers extensive World Cruises and Grand Voyages. Explora currently focuses on regional luxury itineraries.' },
        { question: 'Which cruise line is more formal?', answer: 'Neither requires formal dress, though Viking maintains a slightly more traditional atmosphere.' },
        { question: 'Which cruise line offers better value?', answer: 'Viking provides excellent value through included excursions and destination programming, while Explora delivers exceptional value through spacious suites and premium luxury amenities.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent for couples, though Viking\'s adults-only environment is especially popular for romantic vacations.' },
        { question: 'Does Explora have casinos?', answer: 'Yes. Select Explora ships feature elegant casino lounges.' },
        { question: 'Which luxury cruise line should I choose?', answer: 'Choose Explora for ultra-luxury suites and modern resort-style cruising, or Viking for adults-only cultural exploration and destination-focused travel.' }
    ]

    // ── Schema — EXACT as provided ────────────────────────────────
    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-viking",
                "name": "Explora vs Viking",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-viking",
                "description": "Compare Explora Journeys and Viking Ocean Cruises, including ships, suites, dining, destinations, pricing, service, and onboard luxury experience.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-viking#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, river cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-viking#article",
                "headline": "Explora vs Viking",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-viking",
                "description": "Expert comparison of Explora Journeys and Viking Ocean Cruises covering accommodations, dining, destinations, service, pricing, wellness, and overall luxury experience.",
                "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-viking.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-viking" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Professional cruise planning and comparison services helping travelers choose the ideal luxury cruise line based on travel style, destination preferences, and budget."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Comparisons", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Viking", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-viking" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Explora more luxurious than Viking?", "acceptedAnswer": { "@type": "Answer", "text": "Explora is generally positioned as an ultra-luxury cruise line, while Viking is considered a premium luxury cruise line focused on destination immersion." } },
                    { "@type": "Question", "name": "Which cruise line has larger suites?", "acceptedAnswer": { "@type": "Answer", "text": "Explora offers significantly larger entry-level suites than Viking's standard veranda staterooms." } },
                    { "@type": "Question", "name": "Is Viking adults only?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Viking Ocean Cruises welcomes guests aged 18 and older." } },
                    { "@type": "Question", "name": "Does Explora allow children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Families with children are welcome aboard Explora Journeys." } },
                    { "@type": "Question", "name": "Which cruise line includes shore excursions?", "acceptedAnswer": { "@type": "Answer", "text": "Viking includes at least one complimentary shore excursion in every port, while Explora offers optional curated excursions." } },
                    { "@type": "Question", "name": "Which cruise line has better dining?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer exceptional dining. Explora emphasizes international cuisine, while Viking highlights regional flavors inspired by destinations." } },
                    { "@type": "Question", "name": "Does Explora include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuities are included in the cruise fare." } },
                    { "@type": "Question", "name": "Which cruise line has better wellness facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Explora features larger wellness facilities, while Viking is famous for its Nordic Spa and Snow Grotto." } },
                    { "@type": "Question", "name": "Which cruise line offers world cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Viking offers extensive World Cruises and Grand Voyages, while Explora currently focuses on regional itineraries." } },
                    { "@type": "Question", "name": "Which cruise line is more formal?", "acceptedAnswer": { "@type": "Answer", "text": "Neither requires formal dress, though Viking maintains a slightly more traditional atmosphere." } },
                    { "@type": "Question", "name": "Which cruise line offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "Viking provides excellent value through included excursions and destination programming, while Explora offers exceptional value through spacious suites and luxury amenities." } },
                    { "@type": "Question", "name": "Which luxury cruise line should I choose?", "acceptedAnswer": { "@type": "Answer", "text": "Choose Explora for ultra-luxury suites and contemporary resort-style cruising, or Viking for adults-only cultural exploration and destination-focused travel." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Explora vs Viking: Which Luxury Cruise Line Is Best for You? (2026 Guide)</title>
                <meta name="title" content="Explora vs Viking | Luxury Cruise Comparison Guide" />
                <meta
                    name="description"
                    content="Compare Explora Journeys vs Viking Cruises, including ships, suites, dining, destinations, pricing, inclusions, service, and onboard experiences to choose the perfect luxury cruise."
                />
                <meta name="keywords" content="Explora vs Viking, Explora Journeys vs Viking Cruises, Explora vs Viking Ocean Cruises, Luxury Cruise Comparison, Explora Cruises, Viking Ocean Cruises, Best Luxury Cruise Line" />
                <script type="application/ld+json">{JSON.stringify(mediSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════
                HERO  (medi-hero-section – rotating images)
            ════════════════════════════════════════════════════ */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Scale size={16} />
                        <span>Luxury Ocean Cruise Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Explora vs Viking: <br /> Which Luxury Cruise Line Is Right for You?
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                INTRO  (medi-intro-section / medi-premium-intro-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">COMPARING TWO DISTINCT LUXURY CRUISE EXPERIENCES</span>
                            <h2 className="medi-premium-heading">Explora vs Viking: A Complete Luxury Cruise Comparison</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Explora Journeys and Viking Cruises are two of the most respected names in luxury ocean travel, but they offer very different vacation experiences. Both focus on elegant ships, exceptional service, destination-rich itineraries, and refined accommodations, yet each appeals to a different type of traveler.
                            </p>

                            <p className="medi-premium-lead-text">
                                Explora Journeys brings a fresh, contemporary approach to luxury cruising with spacious all-suite accommodations, wellness-focused amenities, and a relaxed European atmosphere. Viking Ocean Cruises has built its reputation on culturally immersive voyages, destination-focused itineraries, Scandinavian-inspired design, and an adults-only onboard experience.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">This guide compares every major category:</p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Ship size={20} />, label: 'Ships & fleet' },
                                        { icon: <Gem size={20} />, label: 'Suites & accommodations' },
                                        { icon: <Utensils size={20} />, label: 'Dining' },
                                        { icon: <Globe size={20} />, label: 'Destinations' },
                                        { icon: <Waves size={20} />, label: 'Wellness' },
                                        { icon: <Star size={20} />, label: 'Inclusions & value' },
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LUXURY CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers compare Explora Journeys and Viking realistically — based on travel style, comfort expectations and priorities, not simply marketing claims.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        Whether you're looking for modern luxury or classic destination-focused cruising, the right choice always comes down to your individual travel priorities.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                QUICK COMPARE TABLE  ← NEW SECTION (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-compare-section">
                <div className="ev-compare-container">
                    <div className="ev-compare-header">
                        <span className="ev-compare-eyebrow">AT A GLANCE</span>
                        <h2 className="medi-section-heading">Quick Comparison: Explora vs Viking</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ev-table-scroll">
                        <table className="ev-compare-table">
                            <thead>
                                <tr>
                                    <th className="ev-th-feature">Feature</th>
                                    <th className="ev-th-explora">Explora Journeys</th>
                                    <th className="ev-th-viking">Viking Ocean Cruises</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Best For', 'Modern luxury travelers', 'Destination-focused travelers'],
                                    ['Atmosphere', 'Contemporary and relaxed', 'Elegant and understated'],
                                    ['Guest Capacity', 'Around 900 guests', 'Around 930 guests'],
                                    ['Suites', 'All oceanfront suites', 'Veranda staterooms and suites'],
                                    ['Included Wi-Fi', 'Yes', 'Yes'],
                                    ['Gratuities', 'Included', 'Optional prepaid'],
                                    ['Specialty Dining', 'Included', 'Included'],
                                    ['Adults Only', 'No', 'Yes (18+)'],
                                    ['Wellness', 'Extensive wellness focus', 'Nordic spa and wellness'],
                                    ['Enrichment', 'Moderate', 'Extensive lectures and cultural programs'],
                                    ['Luxury Level', 'Ultra-Luxury', 'Luxury Premium'],
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="ev-td-feature">{row[0]}</td>
                                        <td className="ev-td-explora">{row[1]}</td>
                                        <td className="ev-td-viking">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                BRAND OVERVIEW – IMAGE CARDS  ← NEW SECTION (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-overview-section">
                <div className="ev-overview-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ev-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>BRAND PHILOSOPHY</span>
                        <h2 className="medi-section-heading">Overview of Each Cruise Line</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ev-overview-grid">
                        {/* Explora */}
                        <div className="ev-overview-card ev-card-explora">
                            <img src={exploraOverviewImg} alt="Explora Journeys luxury cruise ship" className="ev-overview-img" />
                            <div className="ev-overview-body">
                                <h3 className="ev-overview-brand">Explora Journeys</h3>
                                <p className="ev-overview-tagline">The luxury lifestyle brand of the MSC Group — redefining luxury cruising</p>
                                <div className="ev-overview-bar"></div>
                                <p className="ev-overview-desc">
                                    Explora Journeys is designed to redefine luxury cruising through spacious accommodations, exceptional dining, and destination immersion. The experience is elegant yet intentionally relaxed, with no formal dress codes or rigid schedules.
                                </p>
                                <ul className="ev-overview-list">
                                    {['Oceanfront suites only', 'Private terraces', 'Contemporary European design', 'Ocean Wellness concept', 'Flexible dining', 'Luxury resort atmosphere'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ev-ov-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Viking */}
                        <div className="ev-overview-card ev-card-viking">
                            <img src={vikingOverviewImg} alt="Viking Ocean Cruises ship" className="ev-overview-img" />
                            <div className="ev-overview-body">
                                <h3 className="ev-overview-brand">Viking Ocean Cruises</h3>
                                <p className="ev-overview-tagline">Designed for curious travelers who prioritize destinations, history, and culture</p>
                                <div className="ev-overview-bar"></div>
                                <p className="ev-overview-desc">
                                    Viking Ocean Cruises is designed for curious travelers who prioritize destinations, history, and culture. Viking emphasizes meaningful travel experiences over onboard attractions.
                                </p>
                                <ul className="ev-overview-list">
                                    {['Adults-only environment', 'Scandinavian-inspired ships', 'Destination lectures', 'Enrichment programs', 'Nordic spa', 'Included specialty dining'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ev-ov-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SHIPS COMPARISON – IMAGE MOSAIC  ← NEW SECTION (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-ships-section">
                <div className="ev-ships-glow"></div>
                <div className="ev-ships-container">
                    <div className="ev-ships-header">
                        <span className="ev-ships-eyebrow">FLEET COMPARISON</span>
                        <h2>Ships Comparison</h2>
                        <div className="ev-ships-bar"></div>
                    </div>

                    <div className="ev-ships-grid">
                        {/* Explora Fleet */}
                        <div className="ev-fleet-col">
                            <span className="ev-fleet-brand-tag explora">Explora Journeys Fleet</span>
                            <img src={exploraShipImg} alt="Explora Journeys ship" className="ev-fleet-main-img" />
                            <div className="ev-fleet-info">
                                <h3>Current &amp; Upcoming Explora Ships</h3>
                                <div className="ev-fleet-ships-list">
                                    {['EXPLORA I', 'EXPLORA II', 'EXPLORA III', 'EXPLORA IV', 'EXPLORA V', 'EXPLORA VI'].map((ship, i) => (
                                        <span key={i} className="ev-fleet-ship-chip">{ship}</span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 14px' }}>Each ship accommodates approximately 900 guests while offering generous public spaces and spacious suites.</p>
                                <h3 style={{ marginBottom: '12px' }}>Explora Strengths</h3>
                                <ul className="ev-fleet-strengths-list">
                                    {['Contemporary architecture', 'Spacious outdoor decks', 'Luxury wellness facilities', 'Resort-style atmosphere'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-fleet-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Viking Fleet */}
                        <div className="ev-fleet-col">
                            <span className="ev-fleet-brand-tag viking">Viking Ocean Fleet</span>
                            <img src={vikingShipImg} alt="Viking Ocean cruise ship" className="ev-fleet-main-img" />
                            <div className="ev-fleet-info">
                                <h3>Popular Viking Ships</h3>
                                <div className="ev-fleet-ships-list">
                                    {['Viking Star', 'Viking Sea', 'Viking Sky', 'Viking Jupiter', 'Viking Venus', 'Viking Neptune', 'Viking Saturn'].map((ship, i) => (
                                        <span key={i} className="ev-fleet-ship-chip">{ship}</span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 14px' }}>Each ship accommodates approximately 930 guests.</p>
                                <h3 style={{ marginBottom: '12px' }}>Viking Strengths</h3>
                                <ul className="ev-fleet-strengths-list">
                                    {['Scandinavian elegance', 'Adults-only atmosphere', 'Destination-focused itineraries', 'Quiet onboard environment'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-fleet-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SUITES & ACCOMMODATIONS – IMAGE CARDS  ← NEW (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-suites-section">
                <div className="ev-suites-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ev-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>ACCOMMODATIONS</span>
                        <h2 className="medi-section-heading">Suites and Accommodations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ev-suites-grid">
                        <div className="ev-suite-card">
                            <img src={exploraSuiteImg} alt="Explora Journeys suite with private terrace" className="ev-suite-img" />
                            <div className="ev-suite-body">
                                <span className="ev-suite-brand-label">Explora Journeys</span>
                                <h3 className="ev-suite-title">All Oceanfront Suites</h3>
                                <p className="ev-suite-desc">Every guest stays in a luxury suite. The accommodations resemble luxury boutique hotel suites.</p>
                                <ul className="ev-suite-features-list">
                                    {['Private terrace', 'Walk-in wardrobe', 'Heated bathroom floors', 'Floor-to-ceiling windows', 'Spacious sitting area'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-suite-feat-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ev-suite-card">
                            <img src={vikingSuiteImg} alt="Viking Ocean cruise stateroom" className="ev-suite-img" />
                            <div className="ev-suite-body">
                                <span className="ev-suite-brand-label">Viking Ocean Cruises</span>
                                <h3 className="ev-suite-title">Veranda Staterooms &amp; Suites</h3>
                                <p className="ev-suite-desc">Most accommodations include a private veranda with Scandinavian furnishings and premium amenities.</p>
                                <ul className="ev-suite-features-list">
                                    {['Private veranda', 'Scandinavian furnishings', 'Heated bathroom floors', 'Premium bedding', 'Spacious bathrooms'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-suite-feat-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ev-suite-note">Viking's Explorer Suites offer additional luxury, but standard veranda staterooms are smaller than Explora's entry-level suites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                DINING  ← NEW SECTION (ev-versus with images)
            ════════════════════════════════════════════════════ */}
            <section className="ev-versus-section ev-bg-dark">
                <div className="ev-versus-container">
                    <div className="ev-versus-heading-row">
                        <h2>Dining Comparison</h2>
                        <div className="ev-versus-bar"></div>
                    </div>
                    <div className="ev-versus-grid">
                        <div className="ev-versus-card">
                            <img src={exploraDiningImg} alt="Explora Journeys dining venue" className="ev-versus-card-img" />
                            <div className="ev-versus-card-body">
                                <div className="ev-versus-card-header">
                                    <div className="ev-versus-icon-box ev-icon-explora"><Utensils size={18} /></div>
                                    <h3 className="ev-versus-card-title">Explora Dining</h3>
                                </div>
                                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Guests enjoy flexible dining across multiple venues.</p>
                                <ul className="ev-versus-list">
                                    {['Mediterranean cuisine', 'Asian specialties', 'European classics', 'International fine dining', 'Casual gourmet options'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-versus-list-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ev-versus-note">Reservations are generally flexible.</p>
                            </div>
                        </div>

                        <div className="ev-versus-card">
                            <img src={vikingDiningImg} alt="Viking Ocean Cruises dining" className="ev-versus-card-img" />
                            <div className="ev-versus-card-body">
                                <div className="ev-versus-card-header">
                                    <div className="ev-versus-icon-box ev-icon-viking"><Utensils size={18} /></div>
                                    <h3 className="ev-versus-card-title">Viking Dining</h3>
                                </div>
                                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Dining emphasizes regional cuisine inspired by the destinations visited.</p>
                                <ul className="ev-versus-list">
                                    {['The Restaurant', "Manfredi's Italian Restaurant", "Chef's Table", 'World Café', "Mamsen's"].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-versus-list-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ev-versus-note">Specialty dining is included at no extra cost.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ev-winner-row">
                        <span className="ev-winner-label">WINNER</span>
                        <span className="ev-winner-value">Both — exceptional dining with different philosophies</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                DESTINATIONS – IMAGE MOSAIC  ← NEW SECTION (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-destinations-section">
                <div className="ev-destinations-container">
                    <div className="ev-destinations-header">
                        <span className="ev-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>ITINERARIES &amp; VOYAGES</span>
                        <h2 className="medi-section-heading">Destinations and Itineraries</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="ev-dest-intro">
                        Both cruise lines visit the Mediterranean, Northern Europe, Caribbean, South America, Asia, and Australia. Viking also offers extensive world cruises and Grand Voyages, while Explora focuses on immersive regional itineraries.
                    </p>

                    <div className="ev-destinations-mosaic">
                        <div className="ev-dest-tile">
                            <img src={destMedImg} alt="Mediterranean cruise" />
                            <div className="ev-dest-caption">
                                <span className="ev-dest-caption-line">Mediterranean</span>
                                <span className="ev-dest-caption-sub">Explora Journeys</span>
                            </div>
                        </div>
                        <div className="ev-dest-tile">
                            <img src={destNorthernImg} alt="Northern Europe cruise" />
                            <div className="ev-dest-caption">
                                <span className="ev-dest-caption-line">Northern Europe</span>
                                <span className="ev-dest-caption-sub">Flam, Norway (Viking)</span>
                            </div>
                        </div>
                        <div className="ev-dest-tile">
                            <img src={destCaribbeanImg} alt="Caribbean cruise" />
                            <div className="ev-dest-caption">
                                <span className="ev-dest-caption-line">Caribbean</span>
                                <span className="ev-dest-caption-sub">Explora Oceanfront Suite</span>
                            </div>
                        </div>
                        <div className="ev-dest-tile">
                            <img src={destAsiaImg} alt="Asia cruise" />
                            <div className="ev-dest-caption">
                                <span className="ev-dest-caption-line">South Pacific & Asia</span>
                                <span className="ev-dest-caption-sub">Papeete, Tahiti (Viking)</span>
                            </div>
                        </div>
                        <div className="ev-dest-tile">
                            <img src={destSouthAmericaImg} alt="South America cruise" />
                            <div className="ev-dest-caption">
                                <span className="ev-dest-caption-line">South America</span>
                                <span className="ev-dest-caption-sub">Explora Journeys</span>
                            </div>
                        </div>
                    </div>

                    <div className="ev-dest-chips-row">
                        {['Mediterranean', 'Northern Europe', 'Caribbean', 'South America', 'Asia', 'Australia', 'World Cruises (Viking)'].map((dest, i) => (
                            <span key={i} className="ev-dest-chip">{dest}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                INCLUSIONS  ← NEW SECTION (ev-inclusions-section)
            ════════════════════════════════════════════════════ */}
            <section className="ev-inclusions-section">
                <div className="ev-inclusions-glow"></div>
                <div className="ev-inclusions-container">
                    <div className="ev-inclusions-header">
                        <span className="ev-inclusions-eyebrow">WHAT'S INCLUDED</span>
                        <h2>What's Included?</h2>
                        <div className="ev-inclusions-bar"></div>
                    </div>

                    <div className="ev-inclusions-grid">
                        <div className="ev-inclusions-card ev-incl-explora">
                            <span className="ev-inclusions-brand-label">Explora Journeys</span>
                            <h3>Explora Includes</h3>
                            <ul className="ev-inclusions-list">
                                {['Luxury suites', 'Fine dining', 'Premium beverages', 'Wi-Fi', 'Gratuities', 'Fitness facilities', 'Wellness programming'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="ev-incl-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: 0, fontStyle: 'italic' }}>Some shore excursions are optional.</p>
                        </div>

                        <div className="ev-inclusions-card ev-incl-viking">
                            <span className="ev-inclusions-brand-label">Viking Ocean Cruises</span>
                            <h3>Viking Includes</h3>
                            <ul className="ev-inclusions-list">
                                {['Veranda accommodations', 'Specialty dining', 'Wi-Fi', 'Shore excursion in every port', 'Destination lectures', 'Nordic spa', 'Afternoon tea'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="ev-incl-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: 0, fontStyle: 'italic' }}>Premium beverages and gratuities may require additional packages depending on the booking.</p>
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
                            Romantic Danube Itinerary | Explore Europe with Viking
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
                            Sail through the heart of Europe on Viking's Romantic Danube itinerary. Discover charming riverside towns, iconic landmarks, and unforgettable cultural experiences along one of the world's most scenic waterways.
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
                            src="https://www.youtube.com/embed/GTMZa-AuxkU"
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

            {/* ════════════════════════════════════════════════════
                SERVICE  (medi-diff-section – 3 cards)
            ════════════════════════════════════════════════════ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">ONBOARD EXPERIENCE</span>
                        <h2 className="medi-diff-main-title">Service &amp; Entertainment Comparison</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Crown size={24} /></div>
                                <h3 className="medi-diff-card-title">Explora Service</h3>
                            </div>
                            <p className="medi-diff-card-text">Service is personalized, modern, and relaxed.</p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Attentive hospitality</span>
                                <span className="medi-diff-chip">Contemporary European service</span>
                                <span className="medi-diff-chip">Friendly atmosphere</span>
                            </div>
                            <p className="medi-diff-card-text-secondary">Entertainment includes:</p>
                            <ul className="medi-diff-experience-list">
                                {['Live music', 'Elegant lounges', 'Cultural performances', 'Cocktail venues', 'Wellness activities'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Anchor size={24} /></div>
                                <h3 className="medi-diff-card-title">Viking Service</h3>
                            </div>
                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num" style={{ fontSize: '14px', lineHeight: 1.2 }}>18+</div>
                                </div>
                                <div className="medi-diff-stat-label">ADULTS ONLY</div>
                            </div>
                            <p className="medi-diff-card-text">Viking is known for professional Scandinavian hospitality, quiet elegance, consistently high service standards, and exceptional destination knowledge.</p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">Entertainment focuses on enrichment rather than large productions.</p>
                            </div>
                        </div>

                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><BookOpen size={24} /></div>
                                <h3 className="medi-diff-card-title">Viking Entertainment</h3>
                            </div>
                            <p className="medi-diff-card-text">Entertainment focuses on enrichment. Guests enjoy:</p>
                            <ul className="medi-diff-focus-list-premium">
                                <li><span className="medi-diff-list-num">01</span><span>Guest lectures</span></li>
                                <li><span className="medi-diff-list-num">02</span><span>Destination experts</span></li>
                                <li><span className="medi-diff-list-num">03</span><span>Classical music</span></li>
                                <li><span className="medi-diff-list-num">04</span><span>Cultural performances</span></li>
                                <li><span className="medi-diff-list-num">05</span><span>Educational programming</span></li>
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">Viking emphasizes meaningful travel experiences over onboard attractions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                WELLNESS – IMAGE CARDS  ← NEW SECTION (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-wellness-section">
                <div className="ev-wellness-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ev-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>SPA &amp; WELLNESS</span>
                        <h2 className="medi-section-heading">Wellness Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ev-wellness-grid">
                        <div className="ev-wellness-card">
                            <img src={exploraWellnessImg} alt="Explora Journeys wellness spa" className="ev-wellness-img" />
                            <div className="ev-wellness-body">
                                <span className="ev-wellness-brand">Explora Journeys</span>
                                <h3 className="ev-wellness-title">Extensive Wellness Focus</h3>
                                <p className="ev-wellness-desc">Wellness is central to the Explora guest experience.</p>
                                <ul className="ev-wellness-feature-list">
                                    {['Ocean Wellness Spa', 'Multiple pools', 'Outdoor wellness spaces', 'Fitness studios', 'Wellness classes'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-wellness-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ev-wellness-card">
                            <img src={vikingWellnessImg} alt="Viking Ocean Cruises Nordic Spa" className="ev-wellness-img" />
                            <div className="ev-wellness-body">
                                <span className="ev-wellness-brand">Viking Ocean Cruises</span>
                                <h3 className="ev-wellness-title">Nordic Spa Experience</h3>
                                <p className="ev-wellness-desc">The Nordic Spa is considered one of Viking's signature features.</p>
                                <ul className="ev-wellness-feature-list">
                                    {['Nordic Spa', 'Snow Grotto', 'Hydrotherapy pool', 'Sauna', 'Fitness center'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ev-wellness-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                PRICING  (medi-luxury-definition-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">PRICING &amp; VALUE</span>
                        <h2 className="medi-luxury-heading">Pricing Comparison</h2>

                        <p className="medi-luxury-paragraph">
                            Explora generally commands a higher starting price due to its all-suite accommodations and ultra-luxury positioning. Viking often offers a lower entry fare while including several valuable amenities, making it attractive for travelers seeking destination-focused luxury.
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Explora value comes from:</h3>
                            <div className="medi-luxury-features-grid">
                                {['Spacious all-suite accommodations', 'Gratuities included', 'Premium beverages included', 'Ultra-luxury positioning', 'Extensive wellness facilities', 'Flexible fine dining'].map((f, i) => (
                                    <div key={i} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                Viking provides excellent value through included excursions and destination programming, while Explora delivers exceptional value through spacious suites and premium luxury amenities.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For luxury travelers, the right value question is not just price per night, but which experience best matches your travel priorities.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={luxurySuiteImg} alt="Luxury cruise suite comparison" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                KEY DIFFERENCES SLIDER  (medi-mistakes-slider-section)
            ════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">KEY COMPARISON INSIGHTS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Critical Differences Between Explora and Viking
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button className="medi-slider-nav-btn btn-left" onClick={() => setMediActiveMistake(p => (p === 0 ? mediMistakes.length - 1 : p - 1))} aria-label="Previous slide">
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((item, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${mediActiveMistake === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{item.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{item.desc}</p>
                                        {item.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {item.bullets.map((b, bi) => (
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

                        <button className="medi-slider-nav-btn btn-right" onClick={() => setMediActiveMistake(p => (p === mediMistakes.length - 1 ? 0 : p + 1))} aria-label="Next slide">
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

            {/* ════════════════════════════════════════════════════
                WHO SHOULD CHOOSE  ← NEW SECTION (ev-decision)
            ════════════════════════════════════════════════════ */}
            <section className="ev-decision-section">
                <div className="ev-decision-container">
                    <div className="ev-decision-header">
                        <span className="ev-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>MAKE YOUR CHOICE</span>
                        <h2 className="medi-section-heading">Who Should Choose Which Cruise Line?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ev-decision-grid">
                        <div className="ev-decision-card">
                            <img src={exploraChooseImg} alt="Choose Explora Journeys" className="ev-decision-img" />
                            <div className="ev-decision-body">
                                <h3>Who Should Choose Explora?</h3>
                                <ul className="ev-decision-list">
                                    {['Prefer spacious suites', 'Love contemporary luxury', 'Value wellness experiences', 'Enjoy relaxed elegance', 'Want a luxury resort atmosphere'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ev-dec-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ev-decision-card ev-dec-viking">
                            <img src={vikingChooseImg} alt="Choose Viking Ocean Cruises" className="ev-decision-img" />
                            <div className="ev-decision-body">
                                <h3>Who Should Choose Viking?</h3>
                                <ul className="ev-decision-list">
                                    {['Prefer adults-only cruising', 'Enjoy educational travel', 'Appreciate Scandinavian design', 'Value cultural enrichment', 'Want destination-focused itineraries'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ev-dec-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                BEST FOR / NOT BEST FOR  (medi-audience-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Explora vs Viking: Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Both Lines Are Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Heart size={20} className="medi-audience-icon" />, label: 'Couples seeking luxury romance' },
                                    { icon: <Compass size={20} className="medi-audience-icon" />, label: 'Experienced luxury travelers' },
                                    { icon: <Globe size={20} className="medi-audience-icon" />, label: 'Destination-immersive cruisers' },
                                    { icon: <Crown size={20} className="medi-audience-icon" />, label: 'Travelers seeking refined service' },
                                    { icon: <Sun size={20} className="medi-audience-icon" />, label: 'Empty nesters and retirees' },
                                    { icon: <Star size={20} className="medi-audience-icon" />, label: 'Discerning luxury vacationers' },
                                    { icon: <Ship size={20} className="medi-audience-icon" />, label: 'Ocean cruise enthusiasts' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">May Not Be Ideal For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Baby size={20} className="medi-audience-icon" />, label: 'Families wanting kids programs (Viking is adults-only)' },
                                    { icon: <Moon size={20} className="medi-audience-icon" />, label: 'Travelers seeking nonstop nightlife and entertainment' },
                                    { icon: <Music size={20} className="medi-audience-icon" />, label: 'Guests prioritizing large-scale Broadway-style shows' },
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

            {/* ════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════ */}
            <section id="explora-viking-expert" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Cruise Expert" />
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
                                    Choosing Between Explora <br className="medi-growth-title-break" />and Viking
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes, founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, helps travelers compare Explora Journeys and Viking Ocean Cruises realistically — based on travel personality and lifestyle preferences, not simply advertising or price points.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Angela consistently helps travelers evaluate:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Suite size & atmosphere', 'Wellness priorities', 'Adults-only preference', 'Destination philosophy', 'Entertainment style', 'Inclusions & value'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes provides personalized cruise planning backed by real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Ultra-luxury cruising', icon: Ship },
                                        { title: 'River cruises', icon: Anchor },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'Safaris', icon: Globe },
                                        { title: 'Premium global travel', icon: Sparkles }
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

            {/* ════════════════════════════════════════════════════
                FINAL VERDICT  ← NEW SECTION (ev-)
            ════════════════════════════════════════════════════ */}
            <section className="ev-verdict-section">
                <div className="ev-verdict-container">
                    <span className="ev-verdict-eyebrow">THE BOTTOM LINE</span>
                    <h2>Final Verdict</h2>
                    <div className="ev-verdict-bar"></div>

                    <p className="ev-verdict-text">
                        Explora Journeys and Viking Ocean Cruises both deliver exceptional luxury vacations, but they appeal to different travelers. Both cruise lines consistently rank among the world's best, making either an excellent choice depending on your travel priorities.
                    </p>

                    <p className="ev-verdict-text">
                        Choose Explora Journeys if you want spacious all-suite accommodations, modern European luxury, and a wellness-focused onboard experience. Choose Viking Ocean Cruises if you prefer adults-only cruising, destination immersion, cultural enrichment, and Scandinavian elegance.
                    </p>

                    <div className="ev-verdict-pills">
                        <div className="ev-verdict-pill ev-pill-explora">
                            <strong>Choose Explora Journeys for...</strong>
                            <p>Spacious all-suite accommodations, modern European luxury, and a wellness-focused onboard experience.</p>
                        </div>
                        <div className="ev-verdict-pill ev-pill-viking">
                            <strong>Choose Viking Ocean Cruises for...</strong>
                            <p>Adults-only cruising, destination immersion, cultural enrichment, and Scandinavian elegance.</p>
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
                            Chapter One: Tales of the Northern Sea | Explora Journeys
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
                            Embark on an unforgettable voyage through the breathtaking landscapes of the Northern Sea with Explora Journeys. Experience dramatic coastlines, rich cultural heritage, and immersive luxury at every destination.
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
                            src="https://www.youtube.com/embed/cOX8GgQMP48"
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

            {/* ════════════════════════════════════════════════════
                WHY WORK WITH US  (medi-work-with-us-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">
                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE LUXURY CRUISE ADVISOR</span>
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Choosing between Explora Journeys and Viking Ocean Cruises requires real expertise. An experienced luxury cruise advisor helps travelers make the right decision the first time.
                        </p>
                    </div>

                    <div className="medi-work-timeline-flow">
                        <div className="medi-timeline-line"></div>

                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node"><Compass size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Working with experienced luxury advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[[CheckCircle, 'Compare Explora vs Viking accurately'], [Calendar, 'Select the best itinerary and season'], [Crown, 'Choose ideal suite categories'], [Gem, 'Access exclusive amenities'], [Compass, 'Navigate luxury promotions strategically'], [MapPin, 'Match destinations to travel goals']].map(([Icon, text], i) => (
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
                                    {[[Mic, 'Travel industry speaking engagements'], [FileText, 'Weekly travel columns'], [Award, 'Advisory board leadership'], [Globe, 'International media recognition'], [GraduationCap, 'Luxury Travel University training programs']].map(([Icon, text], i) => (
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
                                    {[[Ship, 'Ultra-luxury cruises'], [Anchor, 'River cruising'], [Compass, 'Expedition voyages'], [Star, 'Luxury cruise comparisons'], [MapPin, 'Premium global travel planning']].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img src={Profile_AH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury ocean and river cruise specialist", icon: Ship, category: "SPECIALTY" },
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

            {/* ════════════════════════════════════════════════════
                FAQ  (medi-faq-main-section)
            ════════════════════════════════════════════════════ */}
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

            {/* ════════════════════════════════════════════════════
                CTA  (medi-cta-main-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Still Deciding Between Explora and Viking?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing between Explora Journeys and Viking Ocean Cruises depends entirely on your travel priorities — modern ultra-luxury resort-style cruising, or adults-only destination immersion and cultural enrichment.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently compare luxury cruise lines and design highly personalized luxury vacations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Explora Journeys all-suite ocean cruising', 'Viking Ocean Cruises adults-only voyages', 'Mediterranean luxury itineraries', 'Northern European cultural voyages', 'World cruises and Grand Voyages'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel provides expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Compare Cruise Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ExploraVsViking