import Navbar from '../../components/Navbar/Navbar'
import './Exploravscrystal.css'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import {
    Ship, Star, CheckCircle, Compass, Sparkles, Anchor,
    Crown, Phone, Globe, LayoutList, Heart, Utensils, Sun, Award,
    Mic, FileText, GraduationCap, Clock, Users, MapPin, Gem,
    Music, Wifi, Coffee, Calendar
} from 'lucide-react'
import { Link } from 'react-router'

// ── Real assets ───────────────────────────
import hero1 from '../../assets/Exploravscrystal/hero1.webp'
import hero2 from '../../assets/Exploravscrystal/hero2.webp'
import hero3 from '../../assets/Exploravscrystal/hero3.webp'

import exploraShipImg from '../../assets/ExploraJourneysVsSilversea/Explora_Journeys.webp'
import exploraSuiteImg from '../../assets/ExploraJourneysVsSilversea/explora_suite.png'
import exploraDiningImg from '../../assets/ExploraJourneysVsSilversea/explora_dining.webp'
import exploraWellnessImg from '../../assets/BestSuitesExploraJourneys/explora-journeys-indoor-hydrotherapy-pool-luxury-spa-experience.jpg'
import exploraDestinationImg from '../../assets/ExploraJourneysVsSilversea/explora_destination.webp'
import exploraServiceImg from '../../assets/ExploraJourneysVsSilversea/explora-journeys-grand-lobby-staircase-interior (1).webp'
import exploraEntertainmentImg from '../../assets/BestSuitesExploraJourneys/explora-journeys-sky-lounge-outdoor-ocean-view-deck.jpg'
import exploraVerdictImg from '../../assets/ExploraJourneysVsSilversea/explora-I-luxury-pool-deck-close-up (1).webp'

import crystalShipImg from '../../assets/Exploravscrystal/crystal-suite.webp'
import crystalSuiteImg from '../../assets/Exploravscrystal/crystal-suite.webp'
import crystalDiningImg from '../../assets/Exploravscrystal/crystal-suite.webp'
import crystalServiceImg from '../../assets/Exploravscrystal/crystal-suite.webp'
import crystalEntImg from '../../assets/Exploravscrystal/crystal-ship.webp'

import Profile_AH from '../../assets/Profile_AH.jpg'

function ExploraVsCrystal() {

    /* ── Hero slider ── */
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    /* ── Accordion / tabs ── */
    const [activeFaq, setActiveFaq] = useState(null)
    const [activeComparTab, setActiveComparTab] = useState(0)
    const toggleFaq = i => setActiveFaq(activeFaq === i ? null : i)

    /* ─────────────────────────────────────────────────────────────
       SCHEMA  (unchanged from doc)
    ───────────────────────────────────────────────────────────── */
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal",
                "name": "Explora vs Crystal",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal",
                "description": "Compare Explora Journeys vs Crystal Cruises with expert insights from Trips & Ships Luxury Travel. Discover differences in luxury, ships, dining, accommodations, service, destinations, pricing, and onboard experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal#article" }
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
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal#article",
                "headline": "Explora vs Crystal",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal",
                "description": "Expert comparison of Explora Journeys and Crystal Cruises including ships, accommodations, dining, service, destinations, pricing, entertainment, and onboard luxury experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-crystal.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal" }
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
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Crystal", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-crystal" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Explora more luxurious than Crystal?", "acceptedAnswer": { "@type": "Answer", "text": "Both cruise lines offer exceptional luxury experiences. Explora emphasizes contemporary resort-style luxury, while Crystal is known for its timeless elegance and personalized service." } },
                    { "@type": "Question", "name": "Which cruise line has better service?", "acceptedAnswer": { "@type": "Answer", "text": "Crystal has long been recognized for providing some of the finest service at sea, while Explora delivers attentive European hospitality in a relaxed luxury environment." } },
                    { "@type": "Question", "name": "Are all Explora accommodations suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every accommodation aboard Explora Journeys is an oceanfront suite with a private terrace and premium amenities." } },
                    { "@type": "Question", "name": "Which cruise line offers larger accommodations?", "acceptedAnswer": { "@type": "Answer", "text": "Explora generally offers larger entry-level suites than Crystal, making it an excellent choice for travelers seeking spacious accommodations." } },
                    { "@type": "Question", "name": "Does Crystal include beverages and gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Crystal Cruises includes premium beverages, gratuities, Wi-Fi, and numerous onboard amenities." } },
                    { "@type": "Question", "name": "Which cruise line has better dining?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer exceptional dining. Explora focuses on international cuisine, while Crystal is renowned for gourmet restaurants such as Umi Uma and Beefbar." } },
                    { "@type": "Question", "name": "Which cruise line is better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both are excellent choices. Explora offers a resort-style atmosphere, while Crystal provides elegant luxury and romantic onboard experiences." } },
                    { "@type": "Question", "name": "Which cruise line offers more destinations?", "acceptedAnswer": { "@type": "Answer", "text": "Crystal generally offers a wider variety of global itineraries, including World Cruises, while Explora focuses on curated luxury destinations." } },
                    { "@type": "Question", "name": "Which cruise line has better wellness facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Explora offers extensive wellness experiences through its Ocean Wellness Spa, while Crystal provides an outstanding spa, fitness center, and wellness programs." } },
                    { "@type": "Question", "name": "Which cruise line has better entertainment?", "acceptedAnswer": { "@type": "Answer", "text": "Crystal offers more traditional cruise entertainment, including Broadway-style shows and enrichment programs, while Explora focuses on sophisticated live music and cultural performances." } },
                    { "@type": "Question", "name": "Which cruise line offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "Explora provides excellent value through spacious all-suite accommodations and premium inclusions, while Crystal offers exceptional value through world-class service and gourmet dining." } },
                    { "@type": "Question", "name": "Is Crystal good for first-time luxury cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Crystal is an excellent choice for first-time luxury cruisers seeking elegant ships, exceptional hospitality, and refined onboard experiences." } },
                    { "@type": "Question", "name": "Which cruise line has a more relaxed atmosphere?", "acceptedAnswer": { "@type": "Answer", "text": "Explora offers a contemporary resort-style atmosphere with casual elegance, while Crystal combines timeless sophistication with relaxed luxury." } },
                    { "@type": "Question", "name": "Which cruise line is better for food lovers?", "acceptedAnswer": { "@type": "Answer", "text": "Crystal is widely celebrated for its gourmet culinary program, while Explora impresses with diverse international dining and flexible restaurant options." } },
                    { "@type": "Question", "name": "Which luxury cruise line should I choose?", "acceptedAnswer": { "@type": "Answer", "text": "Choose Explora Journeys for contemporary luxury, spacious suites, and wellness-focused experiences. Choose Crystal Cruises for legendary service, exceptional dining, and elegant traditional luxury." } }
                ]
            }
        ]
    }

    /* ─────────────────────────────────────────────────────────────
       TABBED COMPARISON DATA
    ───────────────────────────────────────────────────────────── */
    const comparTabs = [
        { label: 'Ships', icon: Ship },
        { label: 'Suites', icon: Crown },
        { label: 'Dining', icon: Utensils },
        { label: 'Wellness', icon: Sun },
        { label: 'Destinations', icon: Compass },
        { label: 'Inclusions', icon: CheckCircle },
    ]

    const comparContent = [
        {
            title: 'Ships Comparison',
            explora: {
                heading: 'Explora Fleet',
                img: exploraShipImg,
                items: ['EXPLORA I', 'EXPLORA II', 'EXPLORA III', 'EXPLORA IV', 'EXPLORA V', 'EXPLORA VI'],
                highlights: ['Each ship carries approximately 900 guests', 'Expansive public spaces and luxurious facilities'],
                stat: '~900 Guests per vessel'
            },
            crystal: {
                heading: 'Crystal Fleet',
                img: crystalShipImg,
                items: ['Crystal Serenity', 'Crystal Symphony'],
                highlights: ['Extensively refurbished ships', 'Smaller capacity creates a more intimate onboard experience'],
                stat: '~600–740 Guests per ship'
            }
        },
        {
            title: 'Suites & Accommodations',
            explora: {
                heading: 'Explora Suites',
                img: exploraSuiteImg,
                items: ['Oceanfront suite', 'Private terrace', 'Spacious living room', 'Heated bathroom floors', 'Walk-in wardrobe', 'Luxury bedding'],
                highlights: ["Entry-level suites among the largest in luxury cruising"],
                stat: 'All Oceanfront Suites'
            },
            crystal: {
                heading: 'Crystal Accommodations',
                img: crystalSuiteImg,
                items: ['Deluxe Guest Rooms', 'Aquamarine Suites', 'Sapphire Suites', 'Junior Crystal Penthouses', 'Crystal Penthouses'],
                highlights: ['Many suites include butler service', 'Premium amenities and elegant contemporary décor'],
                stat: 'Staterooms & Suites'
            }
        },
        {
            title: 'Dining Comparison',
            explora: {
                heading: 'Explora Dining',
                img: exploraDiningImg,
                items: ['Mediterranean cuisine', 'Asian specialties', 'European classics', 'Steakhouse', 'Seafood', 'Casual dining venues'],
                highlights: ['Flexible dining without fixed seating'],
                stat: 'International Cuisine'
            },
            crystal: {
                heading: 'Crystal Dining',
                img: crystalDiningImg,
                items: ['Umi Uma by Nobu Matsuhisa', 'Osteria d\'Ovidio', 'Waterside Restaurant', 'Beefbar', 'Marketplace'],
                highlights: ['Celebrated for exceptional culinary experiences', 'Especially popular among travelers who prioritize gourmet cuisine'],
                stat: 'Michelin-Inspired Dining'
            }
        },
        {
            title: 'Wellness & Relaxation',
            explora: {
                heading: 'Explora Wellness',
                img: exploraWellnessImg,
                items: ['Ocean Wellness Spa', 'Multiple pools', 'Thermal experiences', 'Fitness studios', 'Wellness programs'],
                highlights: ['Wellness placed at the center of the guest experience'],
                stat: 'Wellness-Centered Design'
            },
            crystal: {
                heading: 'Crystal Wellness',
                img: crystalShipImg,
                items: ['Aurōra Spa', 'Fitness center', 'Wellness classes', 'Beauty salon', 'Relaxation lounges'],
                highlights: ['Excellent spa, fitness, and wellness treatments aboard'],
                stat: 'Aurōra Spa Program'
            }
        },
        {
            title: 'Destinations & Itineraries',
            explora: {
                heading: 'Explora Destinations',
                img: exploraDestinationImg,
                items: ['Mediterranean', 'Caribbean', 'Northern Europe', 'North America', 'South America', 'Middle East'],
                highlights: ['Carefully curated luxury voyages', 'Immersive destination experiences'],
                stat: 'Curated Luxury Itineraries'
            },
            crystal: {
                heading: 'Crystal Destinations',
                img: crystalShipImg,
                items: ['Mediterranean', 'Alaska', 'Caribbean', 'Asia', 'Australia', 'South Pacific', 'Northern Europe', 'Transatlantic', 'World Cruises'],
                highlights: ['Broader range of global itineraries', 'World Cruises available'],
                stat: 'World\'s Most Diverse Routes'
            }
        },
        {
            title: 'Included Amenities',
            explora: {
                heading: 'Explora Includes',
                img: exploraSuiteImg,
                items: ['Oceanfront suites', 'Premium beverages', 'Wi-Fi', 'Gratuities', 'Multiple restaurants', 'Wellness facilities', 'Fitness classes'],
                highlights: ['Consistently all-inclusive premium approach'],
                stat: 'All-Inclusive Premium'
            },
            crystal: {
                heading: 'Crystal Includes',
                img: crystalSuiteImg,
                items: ['Fine dining', 'Premium beverages', 'Gratuities', 'Wi-Fi', 'Butler service (select suites)', 'Entertainment', 'Fitness center'],
                highlights: ['Legendary service included across all fare types'],
                stat: 'Ultra-Luxury Inclusions'
            }
        }
    ]

    /* ─────────────────────────────────────────────────────────────
       FAQ DATA
    ───────────────────────────────────────────────────────────── */
    const faqs = [
        { question: 'Is Explora more luxurious than Crystal?', answer: 'Both cruise lines offer exceptional luxury experiences. Explora Journeys emphasizes contemporary resort-style luxury with spacious all-suite accommodations, while Crystal Cruises is known for its timeless elegance, exceptional service, and refined onboard atmosphere.' },
        { question: 'Which cruise line has better service?', answer: 'Crystal has long been recognized for providing some of the best service at sea, thanks to its experienced crew and high staff-to-guest ratio. Explora also delivers outstanding personalized service in a more relaxed, modern luxury environment.' },
        { question: 'Are all Explora accommodations suites?', answer: 'Yes. Every accommodation aboard Explora Journeys is an oceanfront suite featuring a private terrace, spacious living area, luxury bedding, and premium amenities.' },
        { question: 'Which cruise line offers larger accommodations?', answer: "Explora's entry-level suites are generally larger than Crystal's standard guest rooms, making Explora an excellent choice for travelers who value extra living space." },
        { question: 'Does Crystal include beverages and gratuities?', answer: 'Yes. Crystal Cruises includes premium beverages, gratuities, Wi-Fi, and many onboard amenities as part of the cruise fare.' },
        { question: 'Which cruise line has better dining?', answer: 'Both cruise lines are known for outstanding cuisine. Explora offers diverse international restaurants with flexible dining, while Crystal is famous for gourmet experiences, including specialty venues such as Umi Uma by Nobu Matsuhisa and Beefbar.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent choices for couples. Explora offers a contemporary luxury resort atmosphere with wellness experiences, while Crystal provides a romantic, elegant setting with exceptional dining and entertainment.' },
        { question: 'Which cruise line offers more destinations?', answer: 'Crystal generally offers a broader range of itineraries, including World Cruises, Alaska, Asia, Australia, Europe, and the Caribbean. Explora focuses on carefully curated luxury voyages with immersive destination experiences.' },
        { question: 'Which cruise line has better wellness facilities?', answer: "Explora places wellness at the center of its guest experience through its Ocean Wellness Spa, thermal areas, fitness studios, and wellness programming. Crystal also offers an excellent spa, fitness center, and wellness treatments." },
        { question: 'Which cruise line has better entertainment?', answer: 'Crystal provides a wider variety of traditional cruise entertainment, including Broadway-style productions, live music, enrichment lectures, casinos, and evening performances. Explora focuses on sophisticated live music, cultural performances, and elegant lounges.' },
        { question: 'Which cruise line offers better value?', answer: 'Value depends on your travel style. Explora offers exceptional value through spacious all-suite accommodations and numerous premium inclusions, while Crystal delivers outstanding value through legendary service, gourmet dining, and destination-rich itineraries.' },
        { question: 'Is Crystal good for first-time luxury cruisers?', answer: 'Yes. Crystal is an excellent choice for first-time luxury cruisers seeking elegant ships, exceptional hospitality, world-class dining, and a refined onboard experience.' },
        { question: 'Which cruise line has a more relaxed atmosphere?', answer: 'Explora offers a more contemporary, resort-style atmosphere with flexible dining and casual elegance. Crystal maintains a classic luxury ambiance while still embracing modern comfort and relaxed sophistication.' },
        { question: 'Which cruise line is better for food lovers?', answer: "Crystal is widely recognized for its exceptional culinary program and specialty restaurants, while Explora impresses with its international cuisine, fresh ingredients, and flexible dining concepts. Food enthusiasts are likely to enjoy either cruise line." },
        { question: 'Which luxury cruise line should I choose?', answer: 'Choose Explora Journeys if you prefer spacious all-suite accommodations, contemporary European design, wellness-focused experiences, and a luxury resort atmosphere. Choose Crystal Cruises if you value exceptional service, gourmet dining, elegant traditional luxury, and destination-rich itineraries. Both cruise lines offer world-class luxury experiences, making either an outstanding choice depending on your travel preferences.' },
    ]

    /* ═══════════════════════════════════════════════════════════
       RENDER
    ═══════════════════════════════════════════════════════════ */
    return (
        <>
            <Helmet>
                <title>Explora vs Crystal: Which Luxury Cruise Line Is Best for You? (2026 Guide)</title>
                <meta name="title" content="Explora vs Crystal | Luxury Cruise Comparison Guide" />
                <meta name="description" content="Compare Explora Journeys vs Crystal Cruises, including ships, suites, dining, service, destinations, pricing, entertainment, and onboard luxury experiences to choose the perfect cruise." />
                <meta name="keywords" content="Explora vs Crystal, Explora Journeys vs Crystal Cruises, Explora Cruises, Crystal Cruises Review, Luxury Cruise Comparison, Best Luxury Cruise Line, Explora vs Crystal Reviews, Ultra Luxury Cruises, Luxury Ocean Cruise Comparison" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════
                HERO
            ════════════════════════════════════════ */}
            <section className="medi-hero-section evc-hero">
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
                        <span>Luxury Cruise Comparison Guide · 2026</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Explora vs Crystal: <br /> Which Luxury Cruise Line Is <br /> Right for You?
                    </h1>
                    <p className="medi-hero-subtitle-text">Two Exceptional Luxury Cruise Experiences</p>
                    <div className="medi-hero-cta-container">
                        <p className="medi-cta-title-text">Find Your Perfect Luxury Cruise</p>
                        <p className="medi-cta-subtitle-text">Expert guidance from Angela Hughes &amp; the Trips &amp; Ships Luxury Travel team</p>
                        <div className="medi-cta-features-row">
                            {['Ultra-Luxury Ships', 'All-Suite Options', 'Gourmet Dining', 'Expert Planning'].map(f => (
                                <span key={f} className="medi-cta-feature-item"><CheckCircle size={14} />{f}</span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="medi-primary-cta-button"><Phone size={16} />Schedule a Consultation</Link>
                            <button className="medi-secondary-outline-button"><LayoutList size={16} />Compare Now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                INTRO — two-card split
            ════════════════════════════════════════ */}
            <section className="evc-intro-section">
                <div className="evc-intro-container">
                    <span className="evc-eyebrow">LUXURY CRUISE COMPARISON</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                        Explora Journeys vs Crystal Cruises
                    </h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p className="evc-intro-lead">
                        Explora Journeys and Crystal Cruises are among the world's finest luxury cruise lines, each offering exceptional accommodations, personalized service, world-class dining, and unforgettable itineraries.
                    </p>

                    <div className="evc-intro-split">
                        {/* Explora card */}
                        <div className="evc-intro-card evc-card-explora">
                            <div className="evc-intro-img-wrap">
                                <img src={exploraShipImg} alt="Explora Journeys Ship" className="evc-intro-img" />
                                <div className="evc-intro-img-overlay"></div>
                                <span className="evc-intro-img-badge">EXPLORA JOURNEYS</span>
                            </div>
                            <div className="evc-intro-card-body">
                                <h3 className="evc-intro-card-title">Contemporary Luxury &amp; Wellness</h3>
                                <p className="evc-intro-card-text">
                                    Explora Journeys reimagines luxury cruising by combining contemporary European elegance with the comfort of a luxury resort. The atmosphere is sophisticated, relaxed, and wellness-focused.
                                </p>
                                <ul className="evc-intro-card-list">
                                    {['Spacious all-suite accommodations', 'Wellness-centered experiences', 'Modern European design', 'Flexible dining', 'Premium beverages included', 'Relaxed luxury environment'].map(item => (
                                        <li key={item}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="evc-intro-divider">
                            <span className="evc-vs-badge">VS</span>
                        </div>

                        {/* Crystal card */}
                        <div className="evc-intro-card evc-card-crystal">
                            <div className="evc-intro-img-wrap">
                                <img src={crystalShipImg} alt="Crystal Cruises Ship" className="evc-intro-img" />
                                <div className="evc-intro-img-overlay"></div>
                                <span className="evc-intro-img-badge">CRYSTAL CRUISES</span>
                            </div>
                            <div className="evc-intro-card-body">
                                <h3 className="evc-intro-card-title">Classic Elegance &amp; Gourmet Dining</h3>
                                <p className="evc-intro-card-text">
                                    Crystal Cruises has long been recognized as one of the pioneers of luxury ocean cruising, offering refined elegance, award-winning service, gourmet dining, and destination-rich itineraries.
                                </p>
                                <ul className="evc-intro-card-list">
                                    {['Exceptional service', 'World-class dining', 'Spacious accommodations', 'Destination-focused itineraries', 'Enrichment programs', 'Elegant ambiance'].map(item => (
                                        <li key={item}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                QUICK COMPARISON TABLE
            ════════════════════════════════════════ */}
            <section className="evc-table-section">
                <div className="evc-table-container">
                    <span className="evc-eyebrow" style={{ display: 'block', textAlign: 'center' }}>AT A GLANCE</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Quick Comparison: Explora vs Crystal</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <div className="evc-table-wrapper">
                        <table className="evc-compare-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th><span className="evc-th-brand">Explora Journeys</span></th>
                                    <th><span className="evc-th-brand">Crystal Cruises</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Best For', 'Contemporary luxury', 'Traditional ultra-luxury'],
                                    ['Luxury Level', 'Ultra-Luxury', 'Ultra-Luxury'],
                                    ['Guest Capacity', 'Around 900', 'Around 600–740'],
                                    ['Suites', 'All oceanfront suites', 'Staterooms & suites'],
                                    ['Butler Service', 'Select suites', 'Most suites'],
                                    ['Dining', 'Multiple international restaurants', 'Michelin-inspired dining'],
                                    ['Gratuities', 'Included', 'Included'],
                                    ['Premium Beverages', 'Included', 'Included'],
                                    ['Wi-Fi', 'Included', 'Included'],
                                    ['Dress Code', 'Elegant casual', 'Elegant casual'],
                                    ['Atmosphere', 'Resort-style luxury', 'Classic luxury cruising'],
                                ].map(([feat, exp, cry], i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'evc-row-alt' : ''}>
                                        <td className="evc-td-feature">{feat}</td>
                                        <td>{exp}</td>
                                        <td>{cry}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                DEEP DIVE TABBED SECTION
            ════════════════════════════════════════ */}
            <section className="evc-tabs-section">
                <div className="evc-tabs-container">
                    <span className="evc-eyebrow" style={{ display: 'block', textAlign: 'center' }}>DETAILED COMPARISON</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Side-by-Side Deep Dive</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="evc-tabs-nav">
                        {comparTabs.map((tab, i) => {
                            const Icon = tab.icon
                            return (
                                <button
                                    key={i}
                                    className={`evc-tab-btn ${activeComparTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveComparTab(i)}
                                >
                                    <Icon size={16} />{tab.label}
                                </button>
                            )
                        })}
                    </div>

                    <div className="evc-tabs-panel">
                        <h3 className="evc-panel-title">{comparContent[activeComparTab].title}</h3>
                        <div className="evc-panel-grid">

                            {/* Explora column */}
                            <div className="evc-panel-col evc-col-explora">
                                <div className="evc-col-header">
                                    <span className="evc-col-brand-label evc-label-explora">EXPLORA JOURNEYS</span>
                                    <h4 className="evc-col-heading">{comparContent[activeComparTab].explora.heading}</h4>
                                </div>
                                <div className="evc-col-img-wrap">
                                    <img src={comparContent[activeComparTab].explora.img} alt={comparContent[activeComparTab].explora.heading} className="evc-col-img" />
                                    <span className="evc-col-stat-badge">{comparContent[activeComparTab].explora.stat}</span>
                                </div>
                                <ul className="evc-col-list">
                                    {comparContent[activeComparTab].explora.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                {comparContent[activeComparTab].explora.highlights.map((h, i) => (
                                    <div key={i} className="evc-col-highlight"><Sparkles size={14} /><span>{h}</span></div>
                                ))}
                            </div>

                            {/* Crystal column */}
                            <div className="evc-panel-col evc-col-crystal">
                                <div className="evc-col-header">
                                    <span className="evc-col-brand-label evc-label-crystal">CRYSTAL CRUISES</span>
                                    <h4 className="evc-col-heading">{comparContent[activeComparTab].crystal.heading}</h4>
                                </div>
                                <div className="evc-col-img-wrap">
                                    <img src={comparContent[activeComparTab].crystal.img} alt={comparContent[activeComparTab].crystal.heading} className="evc-col-img" />
                                    <span className="evc-col-stat-badge evc-badge-crystal">{comparContent[activeComparTab].crystal.stat}</span>
                                </div>
                                <ul className="evc-col-list">
                                    {comparContent[activeComparTab].crystal.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                {comparContent[activeComparTab].crystal.highlights.map((h, i) => (
                                    <div key={i} className="evc-col-highlight"><Sparkles size={14} /><span>{h}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SERVICE COMPARISON — image bento grid
            ════════════════════════════════════════ */}
            <section className="evc-service-section">
                <div className="evc-service-container">
                    <span className="evc-eyebrow" style={{ display: 'block', textAlign: 'center' }}>ONBOARD EXPERIENCE</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Service &amp; Entertainment</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="evc-bento-grid">
                        {/* large image card — Explora service */}
                        <div className="evc-bento-card evc-bento-img-card evc-bento-span2">
                            <img src={exploraServiceImg} alt="Explora Service" className="evc-bento-bg-img" />
                            <div className="evc-bento-overlay"></div>
                            <div className="evc-bento-content">
                                <span className="evc-bento-label">EXPLORA SERVICE</span>
                                <h3 className="evc-bento-card-title">Relaxed European Hospitality</h3>
                                <p className="evc-bento-card-text">Explora offers attentive European hospitality with a relaxed luxury atmosphere and personalized service. The goal is to create a sophisticated yet informal luxury experience.</p>
                            </div>
                        </div>

                        {/* large image card — Crystal service */}
                        <div className="evc-bento-card evc-bento-img-card">
                            <img src={crystalServiceImg} alt="Crystal Service" className="evc-bento-bg-img" />
                            <div className="evc-bento-overlay"></div>
                            <div className="evc-bento-content">
                                <span className="evc-bento-label">CRYSTAL SERVICE</span>
                                <h3 className="evc-bento-card-title">World-Class Personalized Service</h3>
                                <p className="evc-bento-card-text">Crystal is consistently recognized for delivering some of the finest service at sea. Its experienced crew, high staff-to-guest ratio, and personalized attention create a truly luxurious experience.</p>
                            </div>
                        </div>

                        {/* large image card — Explora entertainment */}
                        <div className="evc-bento-card evc-bento-img-card">
                            <img src={exploraEntertainmentImg} alt="Explora Entertainment" className="evc-bento-bg-img" />
                            <div className="evc-bento-overlay"></div>
                            <div className="evc-bento-content">
                                <span className="evc-bento-label">EXPLORA ENTERTAINMENT</span>
                                <h3 className="evc-bento-card-title">Elegant &amp; Understated</h3>
                                <p className="evc-bento-card-text">Live music, cocktail lounges, cultural performances, piano entertainment, and elegant evening ambiance — sophisticated over spectacle.</p>
                            </div>
                        </div>

                        {/* large image card — Crystal entertainment */}
                        <div className="evc-bento-card evc-bento-img-card evc-bento-span2">
                            <img src={crystalEntImg} alt="Crystal Entertainment" className="evc-bento-bg-img" />
                            <div className="evc-bento-overlay"></div>
                            <div className="evc-bento-content">
                                <span className="evc-bento-label">CRYSTAL ENTERTAINMENT</span>
                                <h3 className="evc-bento-card-title">Broadway · Enrichment · Casino</h3>
                                <p className="evc-bento-card-text">Crystal offers Broadway-style performances, live music, guest lecturers, enrichment programs, casino, and evening entertainment — more traditional cruise entertainment than Explora.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                WHO SHOULD CHOOSE
            ════════════════════════════════════════ */}
            <section className="evc-choose-section">
                <div className="evc-choose-container">
                    <span className="evc-eyebrow evc-eyebrow-white" style={{ display: 'block', textAlign: 'center' }}>FIND YOUR MATCH</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center', color: '#ffffff' }}>Which Cruise Line Is Right for You?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered" style={{ background: 'rgba(255,255,255,0.35)' }}></div>

                    <div className="evc-choose-grid">
                        <div className="evc-choose-card">
                            <div className="evc-choose-header evc-choose-explora-hdr">
                                <Ship size={26} />
                                <h3>Choose Explora Journeys If You…</h3>
                            </div>
                            <ul className="evc-choose-list">
                                {['Prefer contemporary luxury', 'Love spacious suites', 'Enjoy wellness experiences', 'Want a resort-style atmosphere', 'Appreciate modern European design', 'Prefer flexible dining'].map(item => (
                                    <li key={item}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="evc-choose-card">
                            <div className="evc-choose-header evc-choose-crystal-hdr">
                                <Crown size={26} />
                                <h3>Choose Crystal Cruises If You…</h3>
                            </div>
                            <ul className="evc-choose-list">
                                {['Value exceptional service', 'Love gourmet dining', 'Enjoy enrichment programs', 'Prefer elegant traditional luxury', 'Appreciate destination-focused itineraries', 'Enjoy sophisticated entertainment'].map(item => (
                                    <li key={item}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SECTION: VIDEO SHOWCASE ===== */}
            <section className="Emerald_video_section">
                <div className="Emerald_video_inner">
                    <div className="Emerald_video_header">
                        <h2>EXPLORA I Naming Ceremony | Celebrating a New Era in Luxury Cruising</h2>
                        <div className="Emerald_video_divider"></div>
                        <p className="Emerald_video_subtitle">
                            Relive the unforgettable EXPLORA I Naming Ceremony in New York City, celebrating the launch of a new standard in luxury ocean travel. Experience the elegance, tradition, and vision behind Explora Journeys.            </p>
                    </div>

                    <div className="Emerald_video_wrapper">
                        <div className="Emerald_video_frame">
                            <iframe
                                className="Emerald_video_player"
                                src="https://www.youtube.com/embed/6jg3MVXjjuo"
                                title="Experience Emerald Yachts"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                            <div className="Emerald_video_glow"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                FINAL VERDICT — image cards + quote
            ════════════════════════════════════════ */}
            <section className="evc-verdict-section">
                <div className="evc-verdict-container">
                    <span className="evc-eyebrow" style={{ display: 'block', textAlign: 'center' }}>EXPERT VERDICT</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Final Verdict</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p className="evc-verdict-lead">
                        Explora Journeys and Crystal Cruises both represent the highest levels of luxury cruising.
                    </p>

                    <div className="evc-verdict-grid">
                        <div className="evc-verdict-card">
                            <div className="evc-verdict-img-wrap">
                                <img src={exploraVerdictImg} alt="Explora Journeys" className="evc-verdict-img" />
                                <div className="evc-verdict-img-overlay"></div>
                                <span className="evc-verdict-badge">Ultra-Luxury</span>
                            </div>
                            <div className="evc-verdict-body">
                                <h3 className="evc-verdict-brand">Explora Journeys</h3>
                                <p className="evc-verdict-text">Choose Explora Journeys if you want spacious all-suite accommodations, contemporary design, wellness-focused experiences, and a luxury resort atmosphere.</p>
                            </div>
                        </div>
                        <div className="evc-verdict-card">
                            <div className="evc-verdict-img-wrap">
                                <img src={crystalShipImg} alt="Crystal Cruises" className="evc-verdict-img" />
                                <div className="evc-verdict-img-overlay"></div>
                                <span className="evc-verdict-badge evc-badge-crystal">Legendary Service</span>
                            </div>
                            <div className="evc-verdict-body">
                                <h3 className="evc-verdict-brand">Crystal Cruises</h3>
                                <p className="evc-verdict-text">Choose Crystal Cruises if personalized service, world-class dining, enrichment programs, and elegant traditional luxury are your highest priorities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="evc-verdict-footer-note">
                        No matter which cruise line you select, both deliver unforgettable luxury cruise vacations with exceptional comfort, outstanding hospitality, and immersive travel experiences.
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                PRICING COMPARISON
            ════════════════════════════════════════ */}
            <section className="evc-pricing-section">
                <div className="evc-pricing-container">
                    <span className="evc-eyebrow" style={{ display: 'block', textAlign: 'center' }}>INVESTMENT</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Pricing Comparison</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="evc-pricing-grid">
                        <div className="evc-pricing-card">
                            <div className="evc-pricing-icon"><Gem size={32} /></div>
                            <h3 className="evc-pricing-brand">Explora Journeys</h3>
                            <p className="evc-pricing-text">Explora often provides outstanding value through spacious all-suite accommodations and premium inclusions — a contemporary ultra-luxury experience with everything built in.</p>
                            <div className="evc-pricing-tag">Contemporary Ultra-Luxury</div>
                        </div>
                        <div className="evc-pricing-card">
                            <div className="evc-pricing-icon"><Star size={32} /></div>
                            <h3 className="evc-pricing-brand">Crystal Cruises</h3>
                            <p className="evc-pricing-text">Crystal's pricing reflects its legendary service, refined dining, and destination-rich itineraries across beautifully appointed ships.</p>
                            <div className="evc-pricing-tag">Traditional Ultra-Luxury</div>
                        </div>
                    </div>

                    <div className="evc-pricing-note">
                        <Sparkles size={16} />
                        <span>Both cruise lines occupy the ultra-luxury market. Travelers should evaluate the overall luxury experience and included amenities rather than comparing cruise fare alone.</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                ANGELA HUGHES AUTHORITY BOX
                (reuses medi-prestige-* classes)
            ════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Angela Hughes Authority Box</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{ width:'80px', height:'80px', borderRadius:'50%', objectFit:'cover', border:'2px solid rgba(255,255,255,0.2)' }}
                                />
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
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "40+ years luxury travel expertise", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026", icon: Crown, category: "PRESTIGE" },
                                    { text: "Featured in global travel publications", icon: Sparkles, category: "RECOGNITION" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" }
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

            {/* ════════════════════════════════════════
                FAQ  (reuses medi-faq-* classes)
            ════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {faqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => toggleFaq(index)}>
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

            {/* ════════════════════════════════════════
                CTA  (reuses medi-cta-* classes)
            ════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Choose Your Perfect Luxury Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            Choosing between Explora Journeys and Crystal Cruises is no small decision. Both offer world-class ultra-luxury — but the right choice depends on your travel style, priorities, and destination goals.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently select the ideal luxury cruise experience.
                        </p>
                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Explora ultra-luxury all-suite sailing',
                                    'Crystal world-class gourmet voyages',
                                    'Mediterranean & European itineraries',
                                    'World Cruises & destination-rich voyages',
                                    'First-time luxury cruise planning'
                                ].map((item, idx) => (
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
                            <Link to='/contact' className="medi-primary-cta-button"><Phone size={18} />Schedule a Consultation</Link>
                            <button className="medi-secondary-outline-button"><LayoutList size={18} />Request Itinerary Options</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploraVsCrystal