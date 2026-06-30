import Navbar from '../../components/Navbar/Navbar'
import './Exploravsritzcarlton.css'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
// import hero1 from '../../assets/ExploraVsRitz/hero1.jpg'
// import hero2 from '../../assets/ExploraVsRitz/hero2.jpg'
// import hero3 from '../../assets/ExploraVsRitz/hero3.jpg'
// import cmpIntroImg from '../../assets/ExploraVsRitz/cmp-intro.webp'
// import exploraOverview from '../../assets/ExploraVsRitz/explora-overview.webp'
// import ritzOverview from '../../assets/ExploraVsRitz/ritz-overview.webp'
// import exploraShip from '../../assets/ExploraVsRitz/explora-ship.webp'
// import ritzYacht from '../../assets/ExploraVsRitz/ritz-yacht.webp'
// import exploraSuite from '../../assets/ExploraVsRitz/explora-suite.webp'
// import ritzSuite from '../../assets/ExploraVsRitz/ritz-suite.webp'
// import exploraDining from '../../assets/ExploraVsRitz/explora-dining.webp'
// import ritzDining from '../../assets/ExploraVsRitz/ritz-dining.webp'
// import exploraWellness from '../../assets/ExploraVsRitz/explora-wellness.webp'
// import ritzWellness from '../../assets/ExploraVsRitz/ritz-wellness.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Music, Mic, FileText, GraduationCap,
    Globe, Eye, Smile, Leaf, Wifi, DollarSign, TrendingUp
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ExploraVsRitzCarlton() {
    const [cmpCurrentHero, setCmpCurrentHero] = useState(0)
    const cmpHeroImages = []

    useEffect(() => {
        const cmpTimer = setInterval(() => {
            setCmpCurrentHero(prev => (prev + 1) % cmpHeroImages.length)
        }, 5000)
        return () => clearInterval(cmpTimer)
    }, [cmpHeroImages.length])

    const [cmpActiveFaq, setCmpActiveFaq] = useState(null)
    const cmpToggleFaq = i => setCmpActiveFaq(cmpActiveFaq === i ? null : i)

    const cmpTableData = [
        { feature: 'Best For', explora: 'Contemporary luxury travelers', ritz: 'Boutique yacht enthusiasts', same: false },
        { feature: 'Guest Capacity', explora: 'Around 900 guests', ritz: 'Around 300–450 guests', same: false },
        { feature: 'Atmosphere', explora: 'Relaxed luxury resort', ritz: 'Private luxury yacht', same: false },
        { feature: 'Suites', explora: 'Oceanfront suites with terraces', ritz: 'Luxury suites with private terraces', same: false },
        { feature: 'Dining', explora: 'Multiple international restaurants', ritz: 'Fine dining with destination-inspired cuisine', same: false },
        { feature: 'Included Drinks', explora: 'Premium beverages', ritz: 'Premium beverages', same: true },
        { feature: 'Gratuities', explora: 'Included', ritz: 'Included', same: true },
        { feature: 'Wi-Fi', explora: 'Included', ritz: 'Included', same: true },
        { feature: 'Wellness', explora: 'Extensive spa and fitness', ritz: 'Boutique spa and wellness', same: false },
        { feature: 'Destinations', explora: 'Global itineraries', ritz: 'Smaller boutique ports', same: false },
        { feature: 'Luxury Level', explora: 'Ultra-Luxury', ritz: 'Ultra-Luxury', same: true },
    ]

    const cmpFaqs = [
        { question: 'Is Explora more luxurious than the Ritz-Carlton Yacht Collection?', answer: 'Both are ultra-luxury brands. Explora emphasizes contemporary resort-style luxury, while Ritz-Carlton Yacht Collection focuses on intimate yacht experiences.' },
        { question: 'Which cruise line has smaller ships?', answer: 'The Ritz-Carlton Yacht Collection operates much smaller yachts carrying approximately 300–450 guests.' },
        { question: 'Are all accommodations suites?', answer: 'Yes. Both brands offer spacious all-suite accommodations with private terraces.' },
        { question: 'Which cruise line offers more destinations?', answer: 'Explora generally offers a broader range of global itineraries, while Ritz-Carlton specializes in boutique destinations and smaller ports.' },
        { question: 'Does Explora include gratuities?', answer: 'Yes. Gratuities are included in the cruise fare.' },
        { question: 'Does Ritz-Carlton Yacht Collection include beverages?', answer: 'Yes. Premium beverages are included on most voyages.' },
        { question: 'Which is better for couples?', answer: 'Both are outstanding for couples. Ritz-Carlton\'s intimate atmosphere is especially popular for romantic getaways.' },
        { question: 'Which cruise line offers better wellness facilities?', answer: 'Explora places a greater emphasis on wellness, featuring expansive spa facilities, fitness studios, and wellness programming.' },
        { question: 'Is the Ritz-Carlton Yacht Collection a traditional cruise?', answer: 'Not exactly. The experience is designed to feel more like traveling aboard a private luxury yacht than a conventional cruise ship.' },
        { question: 'Which cruise line is more casual?', answer: 'Explora offers a relaxed luxury atmosphere with contemporary elegance and minimal formality.' },
        { question: 'Are shore excursions included?', answer: 'Both offer curated shore excursions, but many premium experiences are available at an additional cost.' },
        { question: 'Which cruise line offers better value?', answer: 'Explora often provides greater value through larger ships, spacious suites, and competitive pricing, while Ritz-Carlton delivers exceptional exclusivity through its intimate yacht experience.' },
        { question: 'Which cruise line is better for first-time luxury cruisers?', answer: 'Explora is often recommended for first-time luxury cruisers because of its modern resort-style atmosphere and broad itinerary selection.' },
        { question: 'Does Ritz-Carlton Yacht Collection visit smaller ports?', answer: 'Yes. Its boutique yachts can access ports that are unavailable to many larger cruise ships.' },
        { question: 'Which luxury cruise line should I choose?', answer: 'Choose Explora for contemporary luxury and wellness-focused cruising, or Ritz-Carlton Yacht Collection for intimate yacht voyages and highly personalized service.' }
    ]

    const cmpSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection",
                "name": "Explora vs Ritz-Carlton Yacht Collection",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection",
                "description": "Compare Explora Journeys and The Ritz-Carlton Yacht Collection, including ships, suites, dining, destinations, pricing, service, and onboard luxury experience.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection#article" }
            },
            { "@type": "Organization", "@id": "https://www.tripsshipsluxurytravel.com/#organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsshipsluxurytravel.com" },
            { "@type": "TravelAgency", "@id": "https://www.tripsshipsluxurytravel.com/#travelagency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsshipsluxurytravel.com", "description": "Luxury travel agency specializing in luxury cruises, yacht cruises, expedition cruises, and personalized travel planning." },
            { "@type": "Person", "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes", "name": "Angela Hughes", "jobTitle": "CEO", "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" }, "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel." },
            { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection#article", "headline": "Explora vs Ritz-Carlton Yacht Collection", "url": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection", "description": "Expert comparison of Explora Journeys and The Ritz-Carlton Yacht Collection covering ships, accommodations, dining, destinations, service, pricing, and overall luxury experience.", "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-ritz-carlton-yacht-collection.jpg", "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" }, "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection" } },
            { "@type": "Service", "name": "Luxury Cruise Planning", "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" }, "serviceType": "Luxury Cruise Consulting", "description": "Professional luxury cruise comparison and personalized planning services for travelers choosing between the world's leading luxury cruise brands." },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Comparisons", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Ritz-Carlton Yacht Collection", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-ritz-carlton-yacht-collection" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Explora more luxurious than the Ritz-Carlton Yacht Collection?", "acceptedAnswer": { "@type": "Answer", "text": "Both are ultra-luxury brands. Explora emphasizes contemporary resort-style luxury, while Ritz-Carlton Yacht Collection focuses on intimate yacht experiences." } },
                    { "@type": "Question", "name": "Which cruise line has smaller ships?", "acceptedAnswer": { "@type": "Answer", "text": "The Ritz-Carlton Yacht Collection operates smaller yachts carrying approximately 300 to 450 guests." } },
                    { "@type": "Question", "name": "Are all accommodations suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both brands feature all-suite accommodations with private terraces." } },
                    { "@type": "Question", "name": "Which cruise line offers more destinations?", "acceptedAnswer": { "@type": "Answer", "text": "Explora generally offers a wider variety of global itineraries, while Ritz-Carlton Yacht Collection specializes in boutique destinations." } },
                    { "@type": "Question", "name": "Does Explora include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuities are included." } },
                    { "@type": "Question", "name": "Does Ritz-Carlton Yacht Collection include beverages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Premium beverages are included on most voyages." } },
                    { "@type": "Question", "name": "Which is better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both are excellent for couples, though Ritz-Carlton Yacht Collection is particularly known for its intimate atmosphere." } },
                    { "@type": "Question", "name": "Which cruise line offers better wellness facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Explora features larger wellness facilities and a stronger wellness-focused cruise experience." } },
                    { "@type": "Question", "name": "Is the Ritz-Carlton Yacht Collection a traditional cruise?", "acceptedAnswer": { "@type": "Answer", "text": "No. It is designed to provide the atmosphere of a private luxury yacht rather than a traditional cruise ship." } },
                    { "@type": "Question", "name": "Which cruise line is more casual?", "acceptedAnswer": { "@type": "Answer", "text": "Explora offers a relaxed luxury atmosphere with minimal formality." } },
                    { "@type": "Question", "name": "Are shore excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer curated shore excursions, though many premium experiences are available at an additional cost." } },
                    { "@type": "Question", "name": "Which luxury cruise line offers better overall value?", "acceptedAnswer": { "@type": "Answer", "text": "Explora provides excellent value through spacious suites and competitive pricing, while Ritz-Carlton Yacht Collection delivers exceptional exclusivity through its boutique yacht experience." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Explora vs Ritz-Carlton Yacht Collection | Luxury Cruise Comparison</title>
                <meta name="title" content="Explora vs Ritz-Carlton Yacht Collection | Luxury Cruise Comparison" />
                <meta name="description" content="Compare Explora Journeys vs The Ritz-Carlton Yacht Collection, including ships, suites, dining, service, destinations, pricing, inclusions, and onboard experiences to find your ideal luxury cruise." />
                <meta name="keywords" content="Explora vs Ritz-Carlton Yacht Collection, Explora Journeys vs Ritz-Carlton Yacht Collection, Luxury Cruise Comparison, Ritz-Carlton Yacht Collection Review, Explora Cruises, Ultra Luxury Cruises, Best Luxury Cruise Line, Luxury Yacht Cruises, Explora vs Ritz-Carlton" />
                <script type="application/ld+json">{JSON.stringify(cmpSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {cmpHeroImages.map((img, idx) => (
                    <div key={idx} className={`medi-hero-background ${cmpCurrentHero === idx ? 'medi-active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>2026 Luxury Cruise Comparison · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Explora vs Ritz-Carlton Yacht Collection:  Which Luxury Cruise Experience Is Right for You?
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        An expert side-by-side comparison of ships, suites, dining, service, destinations, and overall luxury experience.
                    </p>
                </div>
            </section>

            {/* ── TWO MODERN LEADERS INTRO ── */}
            <section className="cmp-intro-section">
                <div className="cmp-intro-container">
                    <div className="cmp-intro-grid">

                        <div className="cmp-intro-text-col">
                            <span className="cmp-eyebrow">LUXURY CRUISE COMPARISON 2026</span>
                            <h2 className="medi-section-heading">Two Modern Leaders in Luxury Ocean Travel</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="cmp-intro-lead">Luxury cruising has entered a new era, with travelers seeking boutique experiences, personalized service, spacious accommodations, and immersive destinations rather than crowded mega-ships.</p>
                            <p className="cmp-intro-body">Two brands leading this evolution are Explora Journeys and The Ritz-Carlton Yacht Collection. While both deliver exceptional luxury, they approach the experience differently.</p>

                            <div className="cmp-brand-intro-boxes">
                                <div className="cmp-brand-intro-box cmp-explora-box">
                                    <div className="cmp-brand-intro-tag">
                                        <Ship size={16} />
                                        <span>Explora Journeys</span>
                                    </div>
                                    <p>Blends the atmosphere of a contemporary luxury resort with ocean cruising, offering larger ships, spacious suites, and destination-rich itineraries.</p>
                                </div>
                                <div className="cmp-brand-intro-box cmp-ritz-box">
                                    <div className="cmp-brand-intro-tag cmp-ritz-tag">
                                        <Crown size={16} />
                                        <span>Ritz-Carlton Yacht Collection</span>
                                    </div>
                                    <p>Focuses on intimate yacht-style voyages with fewer guests, highly personalized service, and exclusive access to smaller ports.</p>
                                </div>
                            </div>

                            <p className="cmp-intro-footer">If you're deciding between these two premium brands, this guide compares everything you need to know.</p>
                        </div>

                        <div className="cmp-intro-image-col">
                            <div className="cmp-image-frame">
                                {/* <img src={cmpIntroImg} alt="Luxury cruise comparison" className="cmp-frame-img" /> */}
                                <div className="cmp-frame-overlay"></div>
                                <div className="cmp-intro-img-badge">
                                    <Star size={13} />
                                    <span>Ultra-Luxury Ocean Cruising</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── QUICK COMPARISON TABLE ── */}
            <section className="cmp-table-section">
                <div className="cmp-table-container">

                    <div className="cmp-table-header-block">
                        <span className="cmp-eyebrow cmp-eyebrow-light">AT A GLANCE</span>
                        <h2 className="medi-section-heading cmp-white-heading" style={{ textAlign: 'center' }}>Quick Comparison: Explora vs Ritz-Carlton Yacht Collection</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered cmp-separator-white"></div>
                    </div>

                    <div className="cmp-table-wrap">
                        {/* Table header */}
                        <div className="cmp-table-head">
                            <div className="cmp-th-feature">Feature</div>
                            <div className="cmp-th-brand cmp-th-explora">
                                <Ship size={18} />
                                <span>Explora Journeys</span>
                            </div>
                            <div className="cmp-th-brand cmp-th-ritz">
                                <Crown size={18} />
                                <span>Ritz-Carlton Yacht Collection</span>
                            </div>
                        </div>

                        {/* Table rows */}
                        {cmpTableData.map((row, idx) => (
                            <div key={idx} className={`cmp-table-row ${idx % 2 === 0 ? 'cmp-row-even' : 'cmp-row-odd'} ${row.same ? 'cmp-row-same' : ''}`}>
                                <div className="cmp-td-feature">{row.feature}</div>
                                <div className="cmp-td-value cmp-td-explora">
                                    {row.same && <CheckCircle size={14} className="cmp-same-icon" />}
                                    <span>{row.explora}</span>
                                </div>
                                <div className="cmp-td-value cmp-td-ritz">
                                    {row.same && <CheckCircle size={14} className="cmp-same-icon" />}
                                    <span>{row.ritz}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── BRAND OVERVIEWS ── */}
            <section className="cmp-overviews-section">
                <div className="cmp-overviews-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow">BRAND OVERVIEWS</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Getting to Know Each Brand</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="cmp-brand-split-wrap">

                        {/* Explora Overview */}
                        <div className="cmp-brand-col cmp-explora-col">
                            <div className="cmp-brand-col-header cmp-explora-header">
                                <Ship size={18} />
                                <span>Explora Journeys Overview</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={exploraOverview} alt="Explora Journeys overview" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Explora Journeys was created by the MSC Group to redefine luxury cruising through spacious accommodations, refined design, exceptional wellness, and destination-focused experiences.</p>
                                <p className="cmp-brand-col-sub">Highlights include:</p>
                                <ul className="cmp-feature-list">
                                    {['Oceanfront suites only', 'Large outdoor terraces', 'Contemporary European design', 'Luxury wellness facilities', 'Flexible dining', 'Relaxed sophistication'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="cmp-brand-col-tagline">
                                    <p>Explora emphasizes elegant comfort without formal traditions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Ritz-Carlton Overview */}
                        <div className="cmp-brand-col cmp-ritz-col">
                            <div className="cmp-brand-col-header cmp-ritz-header">
                                <Crown size={18} />
                                <span>Ritz-Carlton Yacht Collection Overview</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={ritzOverview} alt="Ritz-Carlton Yacht Collection overview" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">The Ritz-Carlton Yacht Collection extends the legendary Ritz-Carlton hospitality into luxury yachting.</p>
                                <p className="cmp-brand-col-sub">Guests enjoy:</p>
                                <ul className="cmp-feature-list">
                                    {['Intimate yachts', 'Personalized service', 'Boutique atmosphere', 'Residential-style accommodations', 'Curated shore experiences', 'Exclusive ports inaccessible to larger ships'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="cmp-brand-col-tagline cmp-tagline-ritz">
                                    <p>The experience closely resembles staying aboard a private luxury yacht.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIPS COMPARISON ── */}
            <section className="cmp-ships-section">
                <div className="cmp-ships-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow cmp-eyebrow-light">FLEET COMPARISON</span>
                        <h2 className="medi-section-heading cmp-white-heading" style={{ textAlign: 'center' }}>Ships Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered cmp-separator-white"></div>
                    </div>

                    <div className="cmp-brand-split-wrap">

                        <div className="cmp-brand-col cmp-explora-col">
                            <div className="cmp-brand-col-header cmp-explora-header">
                                <Ship size={18} /><span>Explora Fleet</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={exploraShip} alt="Explora Journeys ship" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                                <div className="cmp-ship-capacity-badge cmp-badge-explora">
                                    <Users size={14} />
                                    <span>~900 Guests</span>
                                </div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-sub">Current and planned vessels include:</p>
                                <div className="cmp-fleet-grid">
                                    {['EXPLORA I', 'EXPLORA II', 'EXPLORA III', 'EXPLORA IV', 'EXPLORA V', 'EXPLORA VI'].map((ship, idx) => (
                                        <div key={idx} className="cmp-fleet-chip cmp-fleet-chip-explora">{ship}</div>
                                    ))}
                                </div>
                                <p className="cmp-brand-col-note">Ships carry approximately 900 guests while maintaining spacious public areas.</p>
                                <p className="cmp-brand-col-sub">Strengths</p>
                                <ul className="cmp-feature-list">
                                    {['Modern architecture', 'Spacious decks', 'Resort-style ambiance', 'Exceptional wellness facilities'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="cmp-brand-col cmp-ritz-col">
                            <div className="cmp-brand-col-header cmp-ritz-header">
                                <Anchor size={18} /><span>Ritz-Carlton Yacht Collection Fleet</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={ritzYacht} alt="Ritz-Carlton Yacht Collection yacht" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                                <div className="cmp-ship-capacity-badge cmp-badge-ritz">
                                    <Users size={14} />
                                    <span>~300–450 Guests</span>
                                </div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-sub">Current and planned yachts include:</p>
                                <div className="cmp-fleet-grid">
                                    {['Evrima', 'Ilma', 'Luminara'].map((yacht, idx) => (
                                        <div key={idx} className="cmp-fleet-chip cmp-fleet-chip-ritz">{yacht}</div>
                                    ))}
                                </div>
                                <p className="cmp-brand-col-note">These yachts accommodate roughly 300–450 guests, creating one of the most intimate luxury experiences at sea.</p>
                                <p className="cmp-brand-col-sub">Strengths</p>
                                <ul className="cmp-feature-list">
                                    {['Boutique size', 'Personalized attention', 'Access to smaller ports', 'Yacht-style cruising'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SUITES AND ACCOMMODATIONS ── */}
            <section className="cmp-suites-section">
                <div className="cmp-suites-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Suites and Accommodations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="cmp-brand-split-wrap">

                        <div className="cmp-brand-col cmp-explora-col">
                            <div className="cmp-brand-col-header cmp-explora-header">
                                <Ship size={18} /><span>Explora</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={exploraSuite} alt="Explora Journeys suite" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Every guest stays in an oceanfront suite featuring:</p>
                                <ul className="cmp-feature-list">
                                    {['Private terrace', 'Walk-in wardrobe', 'Heated bathroom floors', 'Floor-to-ceiling windows', 'Spacious living area'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="cmp-brand-col-tagline">
                                    <p>The design emphasizes modern European luxury.</p>
                                </div>
                            </div>
                        </div>

                        <div className="cmp-brand-col cmp-ritz-col">
                            <div className="cmp-brand-col-header cmp-ritz-header">
                                <Crown size={18} /><span>Ritz-Carlton Yacht Collection</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={ritzSuite} alt="Ritz-Carlton Yacht Collection suite" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Suites feature:</p>
                                <ul className="cmp-feature-list">
                                    {['Private terraces', 'Luxury linens', 'Marble bathrooms', 'Elegant residential décor', 'Personalized amenities'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="cmp-brand-col-tagline cmp-tagline-ritz">
                                    <p>Upper-category suites include expansive living spaces and premium concierge services.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

              {/* ===== SECTION: VIDEO SHOWCASE ===== */}
      <section className="Emerald_video_section">
        <div className="Emerald_video_inner">
          <div className="Emerald_video_header">
            <h2>An Ocean of New | Explore the 2027 Journeys Collection</h2>
            <div className="Emerald_video_divider"></div>
            <p className="Emerald_video_subtitle">
             Discover the 2027 Journeys Collection, featuring extraordinary itineraries, immersive destinations, and exceptional luxury at sea. Set sail on unforgettable voyages designed to inspire every traveler.
            </p>
          </div>

          <div className="Emerald_video_wrapper">
            <div className="Emerald_video_frame">
              <iframe
                className="Emerald_video_player"
                src="https://www.youtube.com/embed/OwYwL7N1Qfg"
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

            {/* ── DINING COMPARISON ── */}
            <section className="cmp-dining-section">
                <div className="cmp-dining-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow cmp-eyebrow-light">CULINARY EXPERIENCE</span>
                        <h2 className="medi-section-heading cmp-white-heading" style={{ textAlign: 'center' }}>Dining Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered cmp-separator-white"></div>
                    </div>

                    <div className="cmp-brand-split-wrap">

                        <div className="cmp-brand-col cmp-explora-col">
                            <div className="cmp-brand-col-header cmp-explora-header">
                                <Utensils size={18} /><span>Explora Dining</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={exploraDining} alt="Explora Journeys dining" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Guests enjoy multiple culinary venues featuring:</p>
                                <ul className="cmp-feature-list">
                                    {['Mediterranean cuisine', 'Pan-Asian specialties', 'International fine dining', 'European classics', 'Casual luxury dining'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="cmp-brand-col-tagline">
                                    <p>Dining is flexible with no assigned seating.</p>
                                </div>
                            </div>
                        </div>

                        <div className="cmp-brand-col cmp-ritz-col">
                            <div className="cmp-brand-col-header cmp-ritz-header">
                                <Utensils size={18} /><span>Ritz-Carlton Dining</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={ritzDining} alt="Ritz-Carlton Yacht Collection dining" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Dining reflects the Ritz-Carlton philosophy of exceptional culinary excellence.</p>
                                <p className="cmp-brand-col-sub">Highlights include:</p>
                                <ul className="cmp-feature-list">
                                    {['Destination-inspired menus', 'Fine dining restaurants', 'Outdoor dining', 'Chef-driven cuisine', 'Premium wine selections'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <div className="cmp-brand-col-tagline cmp-tagline-ritz">
                                    <p>The intimate guest count creates an exceptionally personalized dining experience.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="cmp-destinations-section">
                <div className="cmp-destinations-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow">ITINERARIES</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Destinations and Itineraries</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="cmp-dest-intro">Both brands sail to:</p>
                    </div>

                    <div className="cmp-destinations-shared-grid">
                        {['Mediterranean', 'Caribbean', 'Northern Europe', 'South America', 'Middle East', 'Asia'].map((dest, idx) => (
                            <div key={idx} className="cmp-dest-chip">
                                <Globe size={15} />
                                <span>{dest}</span>
                            </div>
                        ))}
                    </div>

                    <div className="cmp-destinations-differentiators">
                        <div className="cmp-dest-diff-card cmp-dest-diff-ritz">
                            <div className="cmp-dest-diff-icon"><Anchor size={22} /></div>
                            <div className="cmp-dest-diff-content">
                                <h3>Ritz-Carlton Yacht Collection</h3>
                                <p>Frequently visits smaller boutique ports unavailable to larger cruise ships.</p>
                            </div>
                        </div>
                        <div className="cmp-dest-diff-card cmp-dest-diff-explora">
                            <div className="cmp-dest-diff-icon"><Ship size={22} /></div>
                            <div className="cmp-dest-diff-content">
                                <h3>Explora Journeys</h3>
                                <p>Offers broader global itineraries and longer voyage options.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── INCLUDED AMENITIES ── */}
            <section className="cmp-inclusions-section">
                <div className="cmp-inclusions-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow cmp-eyebrow-light">WHAT'S INCLUDED</span>
                        <h2 className="medi-section-heading cmp-white-heading" style={{ textAlign: 'center' }}>Included Amenities</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered cmp-separator-white"></div>
                    </div>

                    <div className="cmp-inclusions-split">

                        <div className="cmp-inclusion-col cmp-inclusion-explora">
                            <div className="cmp-inclusion-col-header cmp-explora-header">
                                <Ship size={16} /><span>Explora Includes</span>
                            </div>
                            <div className="cmp-inclusion-list">
                                {[
                                    { Icon: Star, text: 'Luxury suites' },
                                    { Icon: Utensils, text: 'Multiple restaurants' },
                                    { Icon: Smile, text: 'Premium beverages' },
                                    { Icon: Wifi, text: 'Wi-Fi' },
                                    { Icon: CheckCircle, text: 'Gratuities' },
                                    { Icon: Sparkles, text: 'Wellness programs' },
                                    { Icon: Sun, text: 'Fitness facilities' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="cmp-inclusion-item">
                                        <div className="cmp-inclusion-icon cmp-incl-explora"><Icon size={16} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="cmp-inclusion-note">Some shore excursions require an additional fee.</p>
                        </div>

                        <div className="cmp-inclusion-col cmp-inclusion-ritz">
                            <div className="cmp-inclusion-col-header cmp-ritz-header">
                                <Crown size={16} /><span>Ritz-Carlton Yacht Collection Includes</span>
                            </div>
                            <div className="cmp-inclusion-list">
                                {[
                                    { Icon: Star, text: 'Luxury accommodations' },
                                    { Icon: Utensils, text: 'Fine dining' },
                                    { Icon: Smile, text: 'Premium beverages' },
                                    { Icon: Wifi, text: 'Wi-Fi' },
                                    { Icon: CheckCircle, text: 'Gratuities' },
                                    { Icon: Anchor, text: 'Marina platform on select voyages' },
                                    { Icon: Globe, text: 'Watersports equipment where available' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="cmp-inclusion-item">
                                        <div className="cmp-inclusion-icon cmp-incl-ritz"><Icon size={16} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="cmp-inclusion-note">Premium shore excursions are generally optional.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SERVICE COMPARISON ── */}
            <section className="cmp-service-section">
                <div className="cmp-service-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow">HOSPITALITY</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Service Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="cmp-service-split">

                        <div className="cmp-service-card cmp-service-explora">
                            <div className="cmp-service-card-header cmp-explora-header">
                                <Ship size={18} /><span>Explora</span>
                            </div>
                            <div className="cmp-service-card-body">
                                <p className="cmp-service-intro">Guests enjoy:</p>
                                <div className="cmp-service-features">
                                    {[
                                        { Icon: Globe, text: 'Relaxed European hospitality' },
                                        { Icon: Users, text: 'Personalized service' },
                                        { Icon: Sparkles, text: 'Contemporary luxury atmosphere' }
                                    ].map(({ Icon, text }, idx) => (
                                        <div key={idx} className="cmp-service-feature">
                                            <div className="cmp-service-icon cmp-svc-explora"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="cmp-service-card cmp-service-ritz">
                            <div className="cmp-service-card-header cmp-ritz-header">
                                <Crown size={18} /><span>Ritz-Carlton Yacht Collection</span>
                            </div>
                            <div className="cmp-service-card-body">
                                <p className="cmp-service-intro">The Ritz-Carlton is renowned worldwide for legendary hospitality.</p>
                                <p className="cmp-service-sub">Guests receive:</p>
                                <div className="cmp-service-features">
                                    {[
                                        { Icon: Users, text: 'Highly personalized attention' },
                                        { Icon: Star, text: 'Exceptional crew-to-guest ratios' },
                                        { Icon: Crown, text: 'Luxury hotel-style service' },
                                        { Icon: Award, text: 'Personalized concierge assistance' }
                                    ].map(({ Icon, text }, idx) => (
                                        <div key={idx} className="cmp-service-feature">
                                            <div className="cmp-service-icon cmp-svc-ritz"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WELLNESS AND RELAXATION ── */}
            <section className="cmp-wellness-section">
                <div className="cmp-wellness-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow cmp-eyebrow-light">SPA &amp; WELLNESS</span>
                        <h2 className="medi-section-heading cmp-white-heading" style={{ textAlign: 'center' }}>Wellness and Relaxation</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered cmp-separator-white"></div>
                    </div>

                    <div className="cmp-brand-split-wrap">

                        <div className="cmp-brand-col cmp-explora-col">
                            <div className="cmp-brand-col-header cmp-explora-header">
                                <Sparkles size={18} /><span>Explora</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={exploraWellness} alt="Explora Journeys wellness and spa" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Explora places wellness at the center of the guest experience.</p>
                                <p className="cmp-brand-col-sub">Features include:</p>
                                <ul className="cmp-feature-list">
                                    {['Ocean Wellness Spa', 'Fitness studios', 'Outdoor pools', 'Wellness classes', 'Luxury relaxation spaces'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="cmp-brand-col cmp-ritz-col">
                            <div className="cmp-brand-col-header cmp-ritz-header">
                                <Sparkles size={18} /><span>Ritz-Carlton Yacht Collection</span>
                            </div>
                            <div className="cmp-brand-col-image-frame">
                                {/* <img src={ritzWellness} alt="Ritz-Carlton Yacht Collection wellness" className="cmp-brand-col-img" /> */}
                                <div className="cmp-brand-col-img-overlay"></div>
                            </div>
                            <div className="cmp-brand-col-body">
                                <p className="cmp-brand-col-intro">Wellness facilities include:</p>
                                <ul className="cmp-feature-list">
                                    {['Boutique spa', 'Treatment rooms', 'Fitness center', 'Beauty salon', 'Outdoor relaxation areas'].map((item, idx) => (
                                        <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="cmp-entertainment-section">
                <div className="cmp-entertainment-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow">ONBOARD EXPERIENCES</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Entertainment</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="cmp-service-split">

                        <div className="cmp-service-card cmp-service-explora">
                            <div className="cmp-service-card-header cmp-explora-header">
                                <Music size={18} /><span>Explora</span>
                            </div>
                            <div className="cmp-service-card-body">
                                <p className="cmp-service-intro">Entertainment focuses on elegant evenings featuring:</p>
                                <div className="cmp-service-features">
                                    {[
                                        { Icon: Music, text: 'Live music' },
                                        { Icon: Smile, text: 'Cocktail lounges' },
                                        { Icon: Globe, text: 'Cultural performances' },
                                        { Icon: Sparkles, text: 'Wellness experiences' },
                                        { Icon: Heart, text: 'Relaxed social spaces' }
                                    ].map(({ Icon, text }, idx) => (
                                        <div key={idx} className="cmp-service-feature">
                                            <div className="cmp-service-icon cmp-svc-explora"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="cmp-service-card cmp-service-ritz">
                            <div className="cmp-service-card-header cmp-ritz-header">
                                <Music size={18} /><span>Ritz-Carlton Yacht Collection</span>
                            </div>
                            <div className="cmp-service-card-body">
                                <p className="cmp-service-intro">Entertainment emphasizes intimacy rather than large productions.</p>
                                <p className="cmp-service-sub">Guests enjoy:</p>
                                <div className="cmp-service-features">
                                    {[
                                        { Icon: Music, text: 'Live musicians' },
                                        { Icon: Globe, text: 'Local cultural performances' },
                                        { Icon: Mic, text: 'Enrichment lectures' },
                                        { Icon: Star, text: 'Elegant evening lounges' }
                                    ].map(({ Icon, text }, idx) => (
                                        <div key={idx} className="cmp-service-feature">
                                            <div className="cmp-service-icon cmp-svc-ritz"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── PRICING COMPARISON ── */}
            <section className="cmp-pricing-section">
                <div className="cmp-pricing-container">

                    <div className="cmp-section-header">
                        <span className="cmp-eyebrow cmp-eyebrow-light">INVESTMENT</span>
                        <h2 className="medi-section-heading cmp-white-heading" style={{ textAlign: 'center' }}>Pricing Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered cmp-separator-white"></div>
                        <p className="cmp-pricing-intro">Both brands occupy the ultra-luxury segment.</p>
                    </div>

                    <div className="cmp-pricing-cards">
                        <div className="cmp-pricing-card cmp-pricing-explora">
                            <div className="cmp-pricing-card-header cmp-explora-header">
                                <Ship size={18} /><span>Explora Journeys</span>
                            </div>
                            <div className="cmp-pricing-card-body">
                                <div className="cmp-pricing-badge cmp-pricing-badge-value">Often Lower Entry Price</div>
                                <p>Explora often offers a lower entry price, providing exceptional value through spacious suites, broad itineraries, and comprehensive wellness facilities.</p>
                            </div>
                        </div>
                        <div className="cmp-pricing-note-box">
                            <TrendingUp size={28} />
                            <p>Travelers should compare total value, inclusions, and itinerary rather than cruise fare alone.</p>
                        </div>
                        <div className="cmp-pricing-card cmp-pricing-ritz">
                            <div className="cmp-pricing-card-header cmp-ritz-header">
                                <Crown size={18} /><span>Ritz-Carlton Yacht Collection</span>
                            </div>
                            <div className="cmp-pricing-card-body">
                                <div className="cmp-pricing-badge cmp-pricing-badge-boutique">Premium Boutique Fares</div>
                                <p>The Ritz-Carlton Yacht Collection typically commands higher fares due to its smaller yachts, boutique experience, and exceptional personalization.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE (reusing medi-audience-section) ── */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">

                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Who Should Choose Each Brand?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">

                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Who Should Choose Explora?</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { Icon: Sparkles, text: 'Prefer modern luxury' },
                                    { Icon: Users, text: 'Want larger public spaces' },
                                    { Icon: Sun, text: 'Appreciate wellness experiences' },
                                    { Icon: Globe, text: 'Enjoy contemporary European design' },
                                    { Icon: MapPin, text: 'Prefer longer itineraries' }
                                ].map(({ Icon, text }, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-best-for-column cmp-ritz-audience-override">
                            <h3 className="medi-audience-column-heading">Who Should Choose Ritz-Carlton?</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { Icon: Anchor, text: 'Prefer intimate yachts' },
                                    { Icon: Award, text: 'Value highly personalized service' },
                                    { Icon: MapPin, text: 'Want exclusive boutique destinations' },
                                    { Icon: Crown, text: 'Enjoy luxury hotel-style hospitality' },
                                    { Icon: Heart, text: 'Prefer smaller guest counts' }
                                ].map(({ Icon, text }, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best"><Icon size={20} className="medi-audience-icon" /></div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── FINAL VERDICT ── */}
            <section className="cmp-verdict-section">
                <div className="cmp-verdict-bg"></div>
                <div className="cmp-verdict-container">

                    <div className="cmp-verdict-eyebrow-row">
                        <Award size={18} />
                        <span className="cmp-verdict-eyebrow-text">EXPERT VERDICT</span>
                    </div>

                    <h2 className="cmp-verdict-heading">Final Verdict</h2>
                    <div className="cmp-verdict-separator"></div>

                    <p className="cmp-verdict-intro">Explora Journeys and The Ritz-Carlton Yacht Collection both represent the future of luxury cruising.</p>

                    <div className="cmp-verdict-split">

                        <div className="cmp-verdict-card cmp-verdict-explora">
                            <div className="cmp-verdict-card-header cmp-explora-header">
                                <Ship size={18} /><span>Choose Explora Journeys if you prefer</span>
                            </div>
                            <div className="cmp-verdict-card-body">
                                <p>Spacious ships, contemporary elegance, exceptional wellness, and destination-focused voyages.</p>
                            </div>
                        </div>

                        <div className="cmp-verdict-vs-divider">
                            <span>VS</span>
                        </div>

                        <div className="cmp-verdict-card cmp-verdict-ritz">
                            <div className="cmp-verdict-card-header cmp-ritz-header">
                                <Crown size={18} /><span>Choose Ritz-Carlton if you seek</span>
                            </div>
                            <div className="cmp-verdict-card-body">
                                <p>A boutique yacht experience with fewer guests, personalized service, and exclusive access to smaller ports.</p>
                            </div>
                        </div>

                    </div>

                    <div className="cmp-verdict-conclusion">
                        <p className="cmp-verdict-conclusion-text">Neither is objectively better—your ideal choice depends on whether you prefer the atmosphere of a luxury resort at sea or the intimacy of a private yacht.</p>
                    </div>

                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury Cruise Expert" /> */}
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
                                <h2 className="medi-editorial-title">How to Choose Between Explora and Ritz-Carlton Yacht Collection</h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">Both Explora Journeys and The Ritz-Carlton Yacht Collection represent the pinnacle of modern luxury ocean travel. The right choice depends entirely on what kind of luxury experience resonates with you.</p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Angela helps travelers clarify priorities by asking:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Resort ambiance or intimate yacht feel?', 'Larger ship with more amenities?', 'Smaller yacht with exclusive ports?', 'Wellness-focused programming?', 'Highly personalized service?', 'Competitive pricing vs boutique exclusivity?'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">As founder of Luxury Travel University and a globally recognized luxury cruise expert, Angela Hughes has personally evaluated both brands and helps travelers make confident, informed decisions based on their individual travel style.</p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Explora Journeys', icon: Ship },
                                        { title: 'Ritz-Carlton Yacht Collection', icon: Crown },
                                        { title: 'Ultra-luxury cruise lines', icon: Gem },
                                        { title: 'Luxury yacht experiences', icon: Anchor },
                                        { title: 'Personalized cruise planning', icon: Compass }
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

            {/* ── FAQ ── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {cmpFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => cmpToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{cmpActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {cmpActiveFaq === index && <p className="medi-faq-answer-text">{faq.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">

                        <h2 className="medi-cta-heading-white">Need Help Choosing Between Explora and Ritz-Carlton?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">Choosing between two exceptional luxury cruise lines requires understanding your personal travel style, priorities, and expectations. Our expert advisors provide honest, independent guidance to help you make the right decision.</p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">We can help you compare:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Ship size and atmosphere', 'Suite categories and pricing', 'Dining and wellness programs', 'Itineraries and destinations', 'Total value and inclusions'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-cta-button-group">
                            <Link to="/contact" className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Compare Luxury Cruise Lines
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ExploraVsRitzCarlton