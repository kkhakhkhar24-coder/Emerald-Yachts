import Navbar from '../../components/Navbar/Navbar'
import './ExploraVsPonant.css'
// import Profile_AH from '../../assets/ExploraVsPonant/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/ExploraVsPonant/Profile_Picture_AH.jpg'

// ── Hero (3 rotating) ────────────────────────────────────────────
// import hero1 from '../../assets/ExploraVsPonant/hero1.jpg'
// import hero2 from '../../assets/ExploraVsPonant/hero2.jpg'
// import hero3 from '../../assets/ExploraVsPonant/hero3.jpg'

// ── Explora images ───────────────────────────────────────────────
// import exploraOverviewImg   from '../../assets/ExploraVsPonant/explora-overview.webp'
// import exploraShipImg       from '../../assets/ExploraVsPonant/explora-ship.webp'
// import exploraSuiteImg      from '../../assets/ExploraVsPonant/explora-suite.webp'
// import exploraDiningImg     from '../../assets/ExploraVsPonant/explora-dining.webp'
// import exploraWellnessImg   from '../../assets/ExploraVsPonant/explora-wellness.webp'
// import exploraServiceImg    from '../../assets/ExploraVsPonant/explora-service.webp'
// import exploraEntertainImg  from '../../assets/ExploraVsPonant/explora-entertainment.webp'
// import exploraChooseImg     from '../../assets/ExploraVsPonant/explora-choose.webp'
// import luxurySuiteImg       from '../../assets/ExploraVsPonant/luxury-suite-pricing.webp'

// ── Ponant images ────────────────────────────────────────────────
// import ponantOverviewImg    from '../../assets/ExploraVsPonant/ponant-overview.webp'
// import ponantShipImg        from '../../assets/ExploraVsPonant/ponant-ship.webp'
// import ponantSuiteImg       from '../../assets/ExploraVsPonant/ponant-suite.webp'
// import ponantDiningImg      from '../../assets/ExploraVsPonant/ponant-dining.webp'
// import ponantWellnessImg    from '../../assets/ExploraVsPonant/ponant-wellness.webp'
// import ponantServiceImg     from '../../assets/ExploraVsPonant/ponant-service.webp'
// import ponantEntertainImg   from '../../assets/ExploraVsPonant/ponant-entertainment.webp'
// import ponantChooseImg      from '../../assets/ExploraVsPonant/ponant-choose.webp'

// ── Destination images ───────────────────────────────────────────
// import destAntarcticaImg    from '../../assets/ExploraVsPonant/dest-antarctica.webp'
// import destMedImg           from '../../assets/ExploraVsPonant/dest-mediterranean.webp'
// import destArcticImg        from '../../assets/ExploraVsPonant/dest-arctic.webp'
// import destAsiaImg          from '../../assets/ExploraVsPonant/dest-asia.webp'
// import destCaribbeanImg     from '../../assets/ExploraVsPonant/dest-caribbean.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap,
    Waves, BookOpen, Scale, Snowflake
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function ExploraVsPonant() {

    // ── Hero slider ──────────────────────────────────────────────
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []
    useEffect(() => {
        const t = setInterval(() => setMediCurrentHero(p => (p + 1) % mediHeroImages.length), 5000)
        return () => clearInterval(t)
    }, [mediHeroImages.length])

    // ── Itineraries showcase (suite highlights tab) ───────────────
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    // ── Differences slider ────────────────────────────────────────
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

    // Suite / accommodation showcase tabs
    const mediItineraries = [
        {
            title: 'Explora Ocean Terrace Suite',
            // img: exploraSuiteImg,
            badge: 'ALL SUITES',
            bestFor: ['Travelers prioritizing space', 'Couples seeking luxury resort atmosphere', 'Wellness-focused travelers'],
            highlights: ['Oceanfront views', 'Private terrace', 'Spacious sitting area', 'Luxury linens', 'Heated bathroom floors', 'Walk-in wardrobe']
        },
        {
            title: 'Explora Ocean Penthouse',
            // img: exploraShipImg,
            badge: 'ULTRA-LUXURY',
            bestFor: ['Ultra-luxury travelers', 'Extended voyage guests', 'Those seeking maximum space'],
            highlights: ['Multi-room living', 'Large private terrace', 'Full dining area', 'Dedicated concierge', 'Priority access']
        },
        {
            title: 'Ponant Deluxe Stateroom',
            // img: ponantSuiteImg,
            badge: 'YACHT STYLE',
            bestFor: ['Boutique yacht lovers', 'Expedition travelers', 'French luxury seekers'],
            highlights: ['Private balcony', 'Contemporary French décor', 'Premium bedding', 'Marble bathrooms', 'Ocean views']
        },
        {
            title: 'Ponant Prestige Suite',
            // img: ponantShipImg,
            badge: 'EXPEDITION LUXURY',
            bestFor: ['Luxury expedition travelers', 'Remote destination seekers', 'Personalized service guests'],
            highlights: ['Larger terrace', 'Additional luxury amenities', 'Priority service', 'Butler service', 'Premium location']
        }
    ]

    // Key comparison insights slider
    const mediMistakes = [
        {
            title: 'Accommodation Size Differences',
            desc: 'Explora generally offers more spacious accommodations. Entry-level Explora suites are among the largest in the luxury cruise industry.',
            bullets: [
                'Explora: every guest stays in an oceanfront suite with private terrace',
                'Ponant: elegant staterooms and suites with French-inspired design'
            ]
        },
        {
            title: 'Expedition vs Resort Experience',
            desc: 'Ponant specializes in expedition cruising to destinations like Antarctica, the Arctic, and Greenland. Explora focuses on luxury resort-style ocean cruising to popular destinations.',
            bullets: [
                'Ponant: purpose-built expedition fleet with Zodiac landings',
                'Explora: contemporary luxury resort atmosphere with wellness focus'
            ]
        },
        {
            title: 'Ship Size & Capacity',
            desc: 'Ponant operates much smaller vessels carrying 180–264 guests, creating a highly personalized experience. Explora\'s ships accommodate approximately 900 guests in spacious luxury.',
            bullets: [
                'Ponant: intimate yacht-style atmosphere with higher crew-to-guest ratios',
                'Explora: spacious public decks, multiple pools, and resort amenities'
            ]
        },
        {
            title: 'Dining Philosophy',
            desc: 'Explora offers a wide variety of international restaurants with flexible dining. Ponant specializes in gourmet French cuisine with destination-inspired menus and regional wines.',
            bullets: [
                'Explora: Mediterranean, Asian, European, and international venues',
                'Ponant: authentic French cuisine, gourmet pastries, regional fine wines'
            ]
        }
    ]

    const mediFaqs = [
        { question: 'Is Explora more luxurious than Ponant?', answer: 'Both cruise lines offer exceptional luxury, but their styles differ. Explora Journeys focuses on contemporary resort-style luxury with spacious all-suite accommodations, while Ponant emphasizes intimate French luxury and yacht-style cruising with personalized service.' },
        { question: 'Which cruise line is better for expedition cruises?', answer: 'Ponant is the better choice for expedition cruises. Its fleet is purpose-built for destinations such as Antarctica, the Arctic, Greenland, and the Kimberley, supported by experienced expedition teams and Zodiac landings.' },
        { question: 'Are all Explora accommodations suites?', answer: 'Yes. Every accommodation aboard Explora Journeys is an oceanfront suite featuring a private terrace, spacious living area, premium bedding, and luxurious amenities.' },
        { question: 'Which cruise line offers larger accommodations?', answer: 'Explora generally offers significantly larger entry-level suites than Ponant. Travelers who prioritize spacious accommodations often prefer Explora Journeys.' },
        { question: 'Does Ponant include beverages and gratuities?', answer: 'Yes. Ponant includes premium beverages, Wi-Fi, and gratuities on most sailings, making the onboard experience more seamless and inclusive.' },
        { question: 'Which cruise line has better dining?', answer: 'Both cruise lines excel in dining. Explora offers a wide variety of international restaurants with flexible dining, while Ponant specializes in gourmet French cuisine paired with regional wines and destination-inspired menus.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent choices for couples. Explora appeals to those seeking a luxury resort atmosphere with wellness experiences, while Ponant is ideal for couples looking for intimate yacht-style voyages and romantic destinations.' },
        { question: 'Which cruise line visits Antarctica?', answer: 'Ponant offers luxury expedition cruises to Antarctica aboard its expedition ships, complete with Zodiac excursions, expert naturalists, and educational programs. Explora currently focuses on traditional luxury ocean itineraries.' },
        { question: 'Which cruise line has smaller ships?', answer: 'Ponant operates much smaller vessels, typically carrying between 180 and 264 guests. Explora\'s ships accommodate approximately 900 guests while maintaining a spacious luxury environment.' },
        { question: 'Which cruise line offers better wellness facilities?', answer: 'Explora places wellness at the center of its onboard experience with the Ocean Wellness Spa, multiple pools, thermal facilities, and wellness programming. Ponant also offers quality spa and fitness facilities but with a stronger focus on destination exploration.' },
        { question: 'Which cruise line offers more destinations?', answer: 'Ponant offers a wider variety of expedition and remote-destination itineraries, while Explora focuses on luxury voyages throughout popular destinations such as the Mediterranean, Caribbean, Northern Europe, and North America.' },
        { question: 'Is Ponant good for first-time luxury cruisers?', answer: 'Yes. Ponant is an excellent choice for travelers who enjoy intimate ships, personalized service, and culturally immersive itineraries. However, travelers seeking larger suites and a resort-style atmosphere may find Explora more appealing.' },
        { question: 'Which cruise line offers better value?', answer: 'Value depends on your travel style. Explora offers excellent value through spacious all-suite accommodations and premium inclusions, while Ponant delivers outstanding value for travelers seeking luxury expedition experiences and boutique yacht cruising.' },
        { question: 'Which cruise line has more personalized service?', answer: 'Ponant generally provides a more personalized onboard experience due to its smaller guest capacity and higher crew-to-guest ratio. Explora also offers exceptional hospitality with a relaxed luxury approach.' },
        { question: 'Which luxury cruise line should I choose?', answer: 'Choose Explora Journeys if you prefer contemporary European luxury, spacious all-suite accommodations, wellness-focused experiences, and elegant resort-style cruising. Choose Ponant if you value French hospitality, intimate yacht-style ships, gourmet cuisine, and luxury expedition voyages to extraordinary destinations.' }
    ]

    // ── Schema — EXACT as provided ────────────────────────────────
    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant",
                "name": "Explora vs Ponant",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant",
                "description": "Compare Explora Journeys vs Ponant with expert insights from Trips & Ships Luxury Travel. Discover differences in luxury, ships, dining, destinations, expedition experiences, pricing, and onboard service.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant#article" }
            },
            { "@type": "Organization", "@id": "https://www.tripsshipsluxurytravel.com/#organization", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsshipsluxurytravel.com" },
            { "@type": "TravelAgency", "@id": "https://www.tripsshipsluxurytravel.com/#travelagency", "name": "Trips & Ships Luxury Travel", "url": "https://www.tripsshipsluxurytravel.com", "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, river cruises, and personalized travel planning." },
            { "@type": "Person", "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes", "name": "Angela Hughes", "jobTitle": "CEO", "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" }, "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel." },
            { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant#article", "headline": "Explora vs Ponant", "url": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant", "description": "Expert comparison of Explora Journeys and Ponant including ships, accommodations, dining, expedition experiences, destinations, pricing, service, and onboard luxury.", "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-ponant.jpg", "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" }, "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" }, "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant" } },
            { "@type": "Service", "name": "Luxury Cruise Planning", "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" }, "serviceType": "Luxury Cruise Consulting", "description": "Expert luxury cruise planning and comparison services helping travelers select the ideal luxury cruise line based on travel style, destination preferences, and vacation goals." },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Comparisons", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Ponant", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-ponant" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": mediFaqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
            }
        ]
    }

    // ─────────────────────────────────────────────────────────────
    return (
        <>
            <Helmet>
                <title>Explora vs Ponant: Which Luxury Cruise Line Is Best for You? (2026 Guide)</title>
                <meta name="title" content="Explora vs Ponant | Luxury Cruise Comparison Guide" />
                <meta name="description" content="Compare Explora Journeys vs Ponant, including ships, suites, dining, destinations, expedition cruises, pricing, service, and onboard experiences to choose the perfect luxury cruise." />
                <meta name="keywords" content="Explora vs Ponant, Explora Journeys vs Ponant, Explora Cruises, Ponant Cruises, Luxury Cruise Comparison, Best Luxury Cruise Line, French Luxury Cruises, Expedition Luxury Cruises" />
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
                        Explora vs Ponant: Which Luxury Cruise Line Is Right for You?
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                INTRO  (medi-intro-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">TWO DISTINCT VISIONS OF LUXURY CRUISING</span>
                            <h2 className="medi-premium-heading">Explora vs Ponant: A Complete Luxury Cruise Comparison</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Explora Journeys and Ponant are among the world's most prestigious luxury cruise lines, yet they offer remarkably different experiences. Explora Journeys delivers a contemporary, all-suite luxury resort at sea with spacious accommodations, wellness-focused experiences, and elegant European design.
                            </p>
                            <p className="medi-premium-lead-text">
                                Ponant combines refined French luxury with intimate yacht-style cruising and expedition expertise. Its small ships reach remote destinations while providing personalized service, gourmet French cuisine, and authentic cultural immersion.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">This guide compares every major category:</p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Ship size={20} />, label: 'Ships & fleet' },
                                        { icon: <Gem size={20} />, label: 'Suites & accommodations' },
                                        { icon: <Utensils size={20} />, label: 'Dining' },
                                        { icon: <Snowflake size={20} />, label: 'Expedition cruises' },
                                        { icon: <Waves size={20} />, label: 'Wellness' },
                                        { icon: <Globe size={20} />, label: 'Destinations' },
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
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers compare Explora Journeys and Ponant realistically — based on travel style, destination goals, and priorities.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        Whether you're looking for a relaxing Mediterranean escape or an unforgettable expedition to Antarctica, the right choice always comes down to your individual travel priorities.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                QUICK COMPARE TABLE  ← NEW SECTION (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-compare-section">
                <div className="ep-compare-container">
                    <div className="ep-compare-header">
                        <span className="ep-compare-eyebrow">AT A GLANCE</span>
                        <h2 className="medi-section-heading">Quick Comparison: Explora vs Ponant</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="ep-table-scroll">
                        <table className="ep-compare-table">
                            <thead>
                                <tr>
                                    <th className="ep-th-feat">Feature</th>
                                    <th className="ep-th-explora">Explora Journeys</th>
                                    <th className="ep-th-ponant">Ponant</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Best For', 'Modern luxury resort cruising', 'Yacht-style luxury & expeditions'],
                                    ['Luxury Level', 'Ultra-Luxury', 'Luxury Expedition'],
                                    ['Guest Capacity', 'Around 900', '180–264 guests'],
                                    ['Suites', 'All oceanfront suites', 'Staterooms & suites'],
                                    ['Butler Service', 'Select suites', 'Select suites'],
                                    ['Dining', 'Multiple international restaurants', 'French gourmet cuisine'],
                                    ['Expedition Cruises', 'No', 'Yes'],
                                    ['Gratuities', 'Included', 'Included'],
                                    ['Premium Beverages', 'Included', 'Included'],
                                    ['Wellness', 'Extensive', 'Excellent'],
                                    ['Atmosphere', 'Contemporary resort', 'Boutique luxury yacht'],
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="ep-td-feat">{row[0]}</td>
                                        <td className="ep-td-explora">{row[1]}</td>
                                        <td className="ep-td-ponant">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                BRAND OVERVIEW – IMAGE CARDS  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-overview-section">
                <div className="ep-overview-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ep-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>BRAND PHILOSOPHY</span>
                        <h2 className="medi-section-heading">Overview of Each Cruise Line</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ep-overview-grid">
                        {/* Explora Card */}
                        <div className="ep-overview-card ep-card-explora">
                            {/* <img src={exploraOverviewImg} alt="Explora Journeys luxury cruise ship at sea" className="ep-overview-img" /> */}
                            <div className="ep-overview-body">
                                <h3 className="ep-overview-brand">Explora Journeys</h3>
                                <p className="ep-overview-tagline">Created by the MSC Group to redefine luxury ocean travel</p>
                                <div className="ep-overview-bar"></div>
                                <p className="ep-overview-desc">
                                    Every guest enjoys an oceanfront suite. The experience feels more like staying at a luxury waterfront resort than sailing aboard a traditional cruise ship.
                                </p>
                                <ul className="ep-overview-list">
                                    {['Spacious all-suite accommodations', 'Contemporary European design', 'Wellness-focused experiences', 'Flexible dining', 'Premium beverages included', 'Relaxed luxury atmosphere'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ep-ov-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Ponant Card */}
                        <div className="ep-overview-card ep-card-ponant">
                            {/* <img src={ponantOverviewImg} alt="Ponant luxury expedition yacht" className="ep-overview-img" /> */}
                            <div className="ep-overview-body">
                                <h3 className="ep-overview-brand">Ponant</h3>
                                <p className="ep-overview-tagline">French luxury cruise line renowned for elegant yacht cruising and expedition exploration</p>
                                <div className="ep-overview-bar"></div>
                                <p className="ep-overview-desc">
                                    Ponant's intimate ships provide personalized service, authentic destination experiences, and refined French hospitality. Ponant specializes in immersive voyages where the destination is just as important as the journey.
                                </p>
                                <ul className="ep-overview-list">
                                    {['French luxury hospitality', 'Small luxury yachts', 'Expedition expertise', 'Cultural enrichment', 'Gourmet cuisine', 'Personalized service'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ep-ov-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SHIPS – IMAGE MOSAIC  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-ships-section">
                <div className="ep-ships-glow"></div>
                <div className="ep-ships-container">
                    <div className="ep-ships-header">
                        <span className="ep-ships-eyebrow">FLEET COMPARISON</span>
                        <h2>Ships Comparison</h2>
                        <div className="ep-ships-bar"></div>
                    </div>

                    <div className="ep-ships-grid">
                        {/* Explora Fleet */}
                        <div className="ep-fleet-col">
                            <span className="ep-fleet-tag explora">Explora Journeys Fleet</span>
                            {/* <img src={exploraShipImg} alt="Explora Journeys ship" className="ep-fleet-main-img" /> */}
                            <div className="ep-fleet-info">
                                <h3>Current &amp; Upcoming Explora Ships</h3>
                                <div className="ep-fleet-chips">
                                    {['EXPLORA I', 'EXPLORA II', 'EXPLORA III', 'EXPLORA IV', 'EXPLORA V', 'EXPLORA VI'].map((s, i) => (
                                        <span key={i} className="ep-fleet-chip">{s}</span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 14px' }}>Each ship accommodates approximately 900 guests while offering expansive outdoor decks, multiple pools, elegant lounges, and luxurious wellness facilities.</p>
                            </div>
                        </div>

                        {/* Ponant Fleet */}
                        <div className="ep-fleet-col">
                            <span className="ep-fleet-tag ponant">Ponant Fleet</span>
                            {/* <img src={ponantShipImg} alt="Ponant luxury expedition yacht" className="ep-fleet-main-img" /> */}
                            <div className="ep-fleet-info">
                                <h3>Ponant Luxury Expedition Fleet</h3>
                                <div className="ep-fleet-chips">
                                    {['Le Commandant Charcot', 'Le Lapérouse', 'Le Champlain', 'Le Bougainville', 'Le Dumont-d\'Urville', 'Le Bellot', 'Le Jacques Cartier', 'Le Boréal', "L'Austral", 'Le Soléal', 'Le Lyrial'].map((s, i) => (
                                        <span key={i} className="ep-fleet-chip">{s}</span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 14px' }}>Most ships carry between 180 and 264 guests, creating a highly personalized experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SUITES & ACCOMMODATIONS – IMAGE CARDS  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-suites-section">
                <div className="ep-suites-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ep-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>ACCOMMODATIONS</span>
                        <h2 className="medi-section-heading">Suites and Accommodations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ep-suites-grid">
                        <div className="ep-suite-card">
                            {/* <img src={exploraSuiteImg} alt="Explora Journeys oceanfront suite with private terrace" className="ep-suite-img" /> */}
                            <div className="ep-suite-body">
                                <span className="ep-suite-brand">Explora Journeys</span>
                                <h3 className="ep-suite-title">All Oceanfront Suites</h3>
                                <p className="ep-suite-desc">Every accommodation includes oceanfront views. Entry-level suites are among the largest in the luxury cruise industry.</p>
                                <ul className="ep-suite-ul">
                                    {['Oceanfront views', 'Private terrace', 'Spacious sitting area', 'Luxury linens', 'Heated bathroom floors', 'Walk-in wardrobe'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-suite-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ep-suite-card">
                            {/* <img src={ponantSuiteImg} alt="Ponant luxury stateroom with balcony" className="ep-suite-img" /> */}
                            <div className="ep-suite-body">
                                <span className="ep-suite-brand">Ponant</span>
                                <h3 className="ep-suite-title">Elegant Staterooms &amp; Suites</h3>
                                <p className="ep-suite-desc">Ponant offers elegant staterooms and suites featuring French-inspired design and premium amenities.</p>
                                <ul className="ep-suite-ul">
                                    {['Private balconies', 'Contemporary French décor', 'Premium bedding', 'Marble bathrooms', 'Ocean views'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-suite-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ep-suite-note">Explora generally offers more spacious accommodations, while Ponant focuses on intimate yacht-style comfort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SUITES SHOWCASE TABS (medi-itinerary-showcase-section)
            ════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">SUITE CATEGORY GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Explora vs Ponant Suite Categories</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((suite, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{suite.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                {/* <img
                                    src={mediItineraries[mediSelectedItinerary].img}
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                /> */}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">{mediItineraries[mediSelectedItinerary].badge}</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                DINING  ← NEW (ep-versus with images + dark bg)
            ════════════════════════════════════════════════════ */}
            <section className="ep-versus-section ep-bg-dark">
                <div className="ep-versus-container">
                    <div className="ep-versus-heading-row">
                        <h2>Dining Comparison</h2>
                        <div className="ep-versus-bar"></div>
                    </div>
                    <div className="ep-versus-grid">
                        <div className="ep-versus-card">
                            {/* <img src={exploraDiningImg} alt="Explora Journeys international dining venues" className="ep-versus-card-img" /> */}
                            <div className="ep-versus-card-body">
                                <div className="ep-versus-card-header">
                                    <div className="ep-versus-icon ep-icon-explora"><Utensils size={18} /></div>
                                    <h3 className="ep-versus-card-title">Explora Dining</h3>
                                </div>
                                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Explora offers several complimentary dining venues with flexible dining.</p>
                                <ul className="ep-versus-ul">
                                    {['Mediterranean cuisine', 'Asian specialties', 'European classics', 'Premium seafood', 'International favorites'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-versus-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ep-versus-note">Dining is flexible, allowing guests to eat whenever they choose.</p>
                            </div>
                        </div>

                        <div className="ep-versus-card">
                            {/* <img src={ponantDiningImg} alt="Ponant gourmet French cuisine" className="ep-versus-card-img" /> */}
                            <div className="ep-versus-card-body">
                                <div className="ep-versus-card-header">
                                    <div className="ep-versus-icon ep-icon-ponant"><Utensils size={18} /></div>
                                    <h3 className="ep-versus-card-title">Ponant Dining</h3>
                                </div>
                                <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0 }}>Cuisine is one of Ponant's defining strengths.</p>
                                <ul className="ep-versus-ul">
                                    {['Authentic French cuisine', 'Fresh regional ingredients', 'Elegant multi-course dinners', 'Gourmet pastries', 'Fine wines', 'Destination-inspired menus'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-versus-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ep-versus-note">The culinary program reflects French traditions while incorporating local flavors from each itinerary.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ep-winner-row">
                        <span className="ep-winner-label">WINNER</span>
                        <span className="ep-winner-value">Both — exceptional dining with different philosophies</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                DESTINATIONS – IMAGE MOSAIC  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-destinations-section">
                <div className="ep-destinations-container">
                    <div className="ep-destinations-header">
                        <span className="ep-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>VOYAGES &amp; ITINERARIES</span>
                        <h2 className="medi-section-heading">Destinations and Itineraries</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="ep-dest-intro">
                        Explora sails to the Mediterranean, Caribbean, Northern Europe, North America, South America, and the Middle East, with itineraries emphasizing extended port stays. Ponant offers voyages to more than 100 countries, including Antarctica, the Arctic, Greenland, Iceland, Norwegian Fjords, Africa, Asia, the South Pacific, Australia, and New Zealand.
                    </p>

                    <div className="ep-destinations-mosaic">
                        <div className="ep-dest-tile">
                            {/* <img src={destAntarcticaImg} alt="Ponant Antarctica expedition cruise" /> */}
                            <div className="ep-dest-caption">
                                <span className="ep-dest-caption-line">Antarctica</span>
                                <span className="ep-dest-caption-sub">Ponant expedition specialty</span>
                            </div>
                        </div>
                        <div className="ep-dest-tile">
                            {/* <img src={destMedImg} alt="Mediterranean luxury cruise" /> */}
                            <div className="ep-dest-caption">
                                <span className="ep-dest-caption-line">Mediterranean</span>
                                <span className="ep-dest-caption-sub">Both cruise lines</span>
                            </div>
                        </div>
                        <div className="ep-dest-tile">
                            {/* <img src={destArcticImg} alt="Arctic expedition cruise" /> */}
                            <div className="ep-dest-caption">
                                <span className="ep-dest-caption-line">Arctic &amp; Greenland</span>
                                <span className="ep-dest-caption-sub">Ponant expedition specialty</span>
                            </div>
                        </div>
                        <div className="ep-dest-tile">
                            {/* <img src={destAsiaImg} alt="Asia luxury cruise" /> */}
                            <div className="ep-dest-caption">
                                <span className="ep-dest-caption-line">Asia</span>
                                <span className="ep-dest-caption-sub">Both cruise lines</span>
                            </div>
                        </div>
                        <div className="ep-dest-tile">
                            {/* <img src={destCaribbeanImg} alt="Caribbean luxury cruise" /> */}
                            <div className="ep-dest-caption">
                                <span className="ep-dest-caption-line">Caribbean</span>
                                <span className="ep-dest-caption-sub">Both cruise lines</span>
                            </div>
                        </div>
                    </div>

                    <div className="ep-dest-chips-row">
                        {['Mediterranean', 'Caribbean', 'Northern Europe', 'Antarctica (Ponant)', 'Arctic (Ponant)', 'Greenland (Ponant)', 'Asia', 'South Pacific (Ponant)', 'Australia'].map((dest, i) => (
                            <span key={i} className="ep-dest-chip">{dest}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                INCLUSIONS  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-inclusions-section">
                <div className="ep-inclusions-glow"></div>
                <div className="ep-inclusions-container">
                    <div className="ep-inclusions-header">
                        <span className="ep-inclusions-eyebrow">WHAT'S INCLUDED</span>
                        <h2>What's Included?</h2>
                        <div className="ep-inclusions-bar"></div>
                    </div>
                    <div className="ep-inclusions-grid">
                        <div className="ep-inclusions-card ep-incl-explora">
                            <span className="ep-inclusions-brand">Explora Journeys</span>
                            <h3>Explora Includes</h3>
                            <ul className="ep-inclusions-ul">
                                {['Luxury suites', 'Premium beverages', 'Multiple restaurants', 'Gratuities', 'Wi-Fi', 'Wellness facilities', 'Fitness classes'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="ep-incl-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="ep-inclusions-card ep-incl-ponant">
                            <span className="ep-inclusions-brand">Ponant</span>
                            <h3>Ponant Includes</h3>
                            <ul className="ep-inclusions-ul">
                                {['Luxury accommodations', 'Fine dining', 'Open bar', 'Wi-Fi', 'Gratuities', 'Zodiac excursions on expedition cruises', 'Expedition team', 'Onboard lectures'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="ep-incl-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '13.5px', color: '#94a3b8', margin: 0, fontStyle: 'italic' }}>Depending on the itinerary, additional excursions may be available.</p>
                        </div>
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
                        {/* Card 1: Explora Service */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Crown size={24} /></div>
                                <h3 className="medi-diff-card-title">Explora Service</h3>
                            </div>
                            <p className="medi-diff-card-text">Service is attentive yet relaxed.</p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Personalized attention</span>
                                <span className="medi-diff-chip">European hospitality</span>
                                <span className="medi-diff-chip">Friendly crew</span>
                                <span className="medi-diff-chip">Contemporary luxury atmosphere</span>
                            </div>
                            <p className="medi-diff-card-text-secondary">Entertainment includes:</p>
                            <ul className="medi-diff-experience-list">
                                {['Live music', 'Cocktail lounges', 'Piano performances', 'Cultural events', 'Evening entertainment'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="medi-diff-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: Ponant Service */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Anchor size={24} /></div>
                                <h3 className="medi-diff-card-title">Ponant Service</h3>
                            </div>
                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num" style={{ fontSize: '12px', lineHeight: 1.2 }}>BEST</div>
                                </div>
                                <div className="medi-diff-stat-label">CREW RATIO</div>
                            </div>
                            <p className="medi-diff-card-text">Ponant is known for French hospitality with small guest-to-crew ratios and personalized service. The intimate size of Ponant's ships allows crew members to quickly learn guests' preferences.</p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">Ponant's expedition leaders provide expert knowledge of remote destinations unavailable elsewhere.</p>
                            </div>
                        </div>

                        {/* Card 3: Ponant Entertainment */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><BookOpen size={24} /></div>
                                <h3 className="medi-diff-card-title">Ponant Entertainment</h3>
                            </div>
                            <p className="medi-diff-card-text">Entertainment emphasizes enrichment through:</p>
                            <ul className="medi-diff-focus-list-premium">
                                <li><span className="medi-diff-list-num">01</span><span>Expert lectures</span></li>
                                <li><span className="medi-diff-list-num">02</span><span>Cultural performances</span></li>
                                <li><span className="medi-diff-list-num">03</span><span>Destination presentations</span></li>
                                <li><span className="medi-diff-list-num">04</span><span>Live music</span></li>
                                <li><span className="medi-diff-list-num">05</span><span>Expedition briefings</span></li>
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">Ponant focuses more on educational experiences than large-scale productions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SERVICE IMAGE STRIP  ← NEW (ep-versus soft)
            ════════════════════════════════════════════════════ */}
            <section className="ep-versus-section ep-bg-soft">
                <div className="ep-versus-container">
                    <div className="ep-versus-heading-row">
                        <h2>Service Photography</h2>
                        <div className="ep-versus-bar"></div>
                    </div>
                    <div className="ep-versus-grid">
                        <div className="ep-versus-card">
                            {/* <img src={exploraServiceImg} alt="Explora Journeys attentive luxury service" className="ep-versus-card-img" /> */}
                            <div className="ep-versus-card-body">
                                <div className="ep-versus-card-header">
                                    <div className="ep-versus-icon ep-icon-explora"><Users size={18} /></div>
                                    <h3 className="ep-versus-card-title">Explora Hospitality</h3>
                                </div>
                                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>Service is attentive yet relaxed — personalized attention, European hospitality, and a friendly contemporary luxury atmosphere.</p>
                            </div>
                        </div>
                        <div className="ep-versus-card">
                            {/* <img src={ponantServiceImg} alt="Ponant personalized French service" className="ep-versus-card-img" /> */}
                            <div className="ep-versus-card-body">
                                <div className="ep-versus-card-header">
                                    <div className="ep-versus-icon ep-icon-ponant"><Users size={18} /></div>
                                    <h3 className="ep-versus-card-title">Ponant Hospitality</h3>
                                </div>
                                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>French hospitality with small guest-to-crew ratios. The intimate size of Ponant ships allows crew to quickly learn guests' preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                WELLNESS – IMAGE CARDS  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-wellness-section">
                <div className="ep-wellness-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ep-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>SPA &amp; WELLNESS</span>
                        <h2 className="medi-section-heading">Wellness Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ep-wellness-grid">
                        <div className="ep-wellness-card">
                            {/* <img src={exploraWellnessImg} alt="Explora Journeys Ocean Wellness Spa" className="ep-wellness-img" /> */}
                            <div className="ep-wellness-body">
                                <span className="ep-wellness-brand">Explora Journeys</span>
                                <h3 className="ep-wellness-title">Extensive Wellness Focus</h3>
                                <p className="ep-wellness-desc">While both offer excellent wellness facilities, Explora places greater emphasis on wellness as a core part of the guest experience.</p>
                                <ul className="ep-wellness-ul">
                                    {['Ocean Wellness Spa', 'Multiple pools', 'Thermal experiences', 'Outdoor relaxation areas', 'Fitness center', 'Wellness programming'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-wellness-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ep-wellness-card">
                            {/* <img src={ponantWellnessImg} alt="Ponant spa facilities" className="ep-wellness-img" /> */}
                            <div className="ep-wellness-body">
                                <span className="ep-wellness-brand">Ponant</span>
                                <h3 className="ep-wellness-title">Quality Spa &amp; Wellness</h3>
                                <p className="ep-wellness-desc">Ponant provides excellent wellness facilities with a stronger focus on destination exploration over wellness programming.</p>
                                <ul className="ep-wellness-ul">
                                    {['Spa treatments', 'Fitness center', 'Wellness classes', 'Beauty salon', 'Relaxation lounges'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-wellness-check" /><span>{item}</span></li>
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
                            Explora and Ponant both occupy the luxury cruise market, but pricing varies depending on destination and itinerary. Travelers should compare total vacation value rather than cruise fare alone.
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Explora generally offers competitive pricing for:</h3>
                            <div className="medi-luxury-features-grid">
                                {['Spacious all-suite accommodations', 'Premium beverages included', 'Gratuities included', 'Multiple dining venues', 'Extensive wellness facilities', 'Wi-Fi included'].map((f, i) => (
                                    <div key={i} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                Ponant's expedition voyages often command higher fares due to their specialized itineraries, smaller ships, and expert expedition teams.
                            </p>
                            <p className="medi-luxury-paragraph">
                                Travelers should compare total vacation value rather than cruise fare alone.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        {/* <img src={luxurySuiteImg} alt="Luxury cruise suite pricing comparison" className="medi-luxury-main-image" /> */}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                KEY DIFFERENCES SLIDER  (medi-mistakes-slider)
            ════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">KEY COMPARISON INSIGHTS</span>
                        <h2 className="medi-mistakes-slider-title">Critical Differences Between Explora and Ponant</h2>
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
                WHO SHOULD CHOOSE  ← NEW (ep-decision with images)
            ════════════════════════════════════════════════════ */}
            <section className="ep-decision-section">
                <div className="ep-decision-container">
                    <div className="ep-decision-header">
                        <span className="ep-compare-eyebrow" style={{ display: 'block', marginBottom: '10px' }}>MAKE YOUR CHOICE</span>
                        <h2 className="medi-section-heading">Who Should Choose Which Cruise Line?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ep-decision-grid">
                        <div className="ep-decision-card">
                            {/* <img src={exploraChooseImg} alt="Choose Explora Journeys" className="ep-decision-img" /> */}
                            <div className="ep-decision-body">
                                <h3>Who Should Choose Explora?</h3>
                                <ul className="ep-decision-ul">
                                    {['Prefer spacious all-suite accommodations', 'Want a contemporary luxury resort atmosphere', 'Enjoy wellness-focused vacations', 'Value flexible dining', 'Prefer larger luxury ships', 'Appreciate modern European design'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ep-dec-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ep-decision-card ep-dec-ponant">
                            {/* <img src={ponantChooseImg} alt="Choose Ponant luxury expedition yacht" className="ep-decision-img" /> */}
                            <div className="ep-decision-body">
                                <h3>Who Should Choose Ponant?</h3>
                                <ul className="ep-decision-ul">
                                    {['Love French luxury', 'Want small-ship cruising', 'Enjoy expedition travel', 'Prefer cultural immersion', 'Value personalized service', 'Dream of visiting remote destinations'].map((item, i) => (
                                        <li key={i}><CheckCircle size={15} className="ep-dec-check" /><span>{item}</span></li>
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
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Explora vs Ponant: Best For / Not Ideal For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Both Lines Are Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Heart size={20} className="medi-audience-icon" />, label: 'Couples seeking romantic luxury' },
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
                                    { icon: <Baby size={20} className="medi-audience-icon" />, label: 'Families wanting extensive kids programs' },
                                    { icon: <Moon size={20} className="medi-audience-icon" />, label: 'Travelers seeking nonstop nightlife' },
                                    { icon: <Music size={20} className="medi-audience-icon" />, label: 'Guests prioritizing large-scale Broadway entertainment' },
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
                ENTERTAINMENT IMAGES (ep-versus white)
            ════════════════════════════════════════════════════ */}
            <section className="ep-versus-section ep-bg-white">
                <div className="ep-versus-container">
                    <div className="ep-versus-heading-row">
                        <h2>Entertainment Experience</h2>
                        <div className="ep-versus-bar"></div>
                    </div>
                    <div className="ep-versus-grid">
                        <div className="ep-versus-card">
                            {/* <img src={exploraEntertainImg} alt="Explora Journeys entertainment and lounges" className="ep-versus-card-img" /> */}
                            <div className="ep-versus-card-body">
                                <div className="ep-versus-card-header">
                                    <div className="ep-versus-icon ep-icon-explora"><Music size={18} /></div>
                                    <h3 className="ep-versus-card-title">Explora Entertainment</h3>
                                </div>
                                <ul className="ep-versus-ul">
                                    {['Live music', 'Cocktail lounges', 'Piano performances', 'Cultural events', 'Evening entertainment'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-versus-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="ep-versus-card">
                            {/* <img src={ponantEntertainImg} alt="Ponant expedition lectures and cultural events" className="ep-versus-card-img" /> */}
                            <div className="ep-versus-card-body">
                                <div className="ep-versus-card-header">
                                    <div className="ep-versus-icon ep-icon-ponant"><BookOpen size={18} /></div>
                                    <h3 className="ep-versus-card-title">Ponant Entertainment</h3>
                                </div>
                                <ul className="ep-versus-ul">
                                    {['Expert lectures', 'Cultural performances', 'Destination presentations', 'Live music', 'Expedition briefings'].map((item, i) => (
                                        <li key={i}><CheckCircle size={14} className="ep-versus-check" /><span>{item}</span></li>
                                    ))}
                                </ul>
                                <p className="ep-versus-note">Ponant focuses more on educational experiences than large-scale productions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ep-winner-row">
                        <span className="ep-winner-label">WINNER</span>
                        <span className="ep-winner-value">Explora for evening atmosphere — Ponant for enrichment</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════ */}
            <section id="explora-ponant-expert" className="medi-expert-editorial-section medi-growth-insight-section">
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
                                <h2 className="medi-editorial-title">
                                    Choosing Between Explora <br className="medi-growth-title-break" />and Ponant
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes, founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, helps travelers compare Explora Journeys and Ponant realistically — based on travel personality and lifestyle preferences, not simply advertising or price points.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Angela consistently helps travelers evaluate:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Suite size & atmosphere', 'Expedition vs resort preference', 'Ship size & intimacy', 'Dining philosophy', 'Destination goals', 'Wellness priorities'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes provides personalized cruise planning backed by real-world expertise.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Ultra-luxury cruising', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruises', icon: Anchor },
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
                FINAL VERDICT  ← NEW (ep-)
            ════════════════════════════════════════════════════ */}
            <section className="ep-verdict-section">
                <div className="ep-verdict-container">
                    <span className="ep-verdict-eyebrow">THE BOTTOM LINE</span>
                    <h2>Final Verdict</h2>
                    <div className="ep-verdict-bar"></div>

                    <p className="ep-verdict-text">
                        Explora Journeys and Ponant both deliver exceptional luxury experiences but appeal to different travelers. No matter which you choose, both cruise lines represent the highest standards of luxury cruising and provide unforgettable travel experiences.
                    </p>

                    <p className="ep-verdict-text">
                        Choose Explora Journeys if you prefer a modern luxury resort at sea, spacious suites, wellness experiences, and elegant contemporary design. Choose Ponant if you're looking for intimate yacht-style cruising, authentic French hospitality, gourmet cuisine, and unforgettable expedition voyages to some of the world's most remote destinations.
                    </p>

                    <div className="ep-verdict-pills">
                        <div className="ep-verdict-pill ep-pill-explora">
                            <strong>Choose Explora Journeys for...</strong>
                            <p>Modern luxury resort at sea, spacious all-suite accommodations, wellness experiences, and elegant contemporary European design.</p>
                        </div>
                        <div className="ep-verdict-pill ep-pill-ponant">
                            <strong>Choose Ponant for...</strong>
                            <p>Intimate yacht-style cruising, authentic French hospitality, gourmet cuisine, and unforgettable expedition voyages to remote destinations.</p>
                        </div>
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
                            Choosing between Explora Journeys and Ponant requires real expertise. An experienced luxury cruise advisor helps you make the right decision the first time.
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
                                    {[[CheckCircle, 'Compare Explora vs Ponant accurately'], [Calendar, 'Select the best destination and itinerary'], [Crown, 'Choose ideal suite categories'], [Gem, 'Access exclusive amenities'], [Compass, 'Match ship to travel personality'], [MapPin, 'Navigate expedition vs resort cruise choices']].map(([Icon, text], i) => (
                                        <li key={i}><Icon size={18} className="medi-pillar-list-icon icon-theme" /><span>{text}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node"><Award size={18} /></div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is globally recognized through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[[Mic, 'Travel industry speaking engagements'], [FileText, 'Weekly travel columns'], [Award, 'Advisory board leadership'], [Globe, 'International media recognition'], [GraduationCap, 'Luxury Travel University programs']].map(([Icon, text], i) => (
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
                                    {[[Ship, 'Ultra-luxury cruises'], [Snowflake, 'Expedition voyages'], [Anchor, 'River cruising'], [Globe, 'Safaris'], [Star, 'Premium global travel planning']].map(([Icon, text], i) => (
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
                                {/* <img src={Profile_AH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} /> */}
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
                                    { text: "Luxury ocean, expedition, and river cruise specialist", icon: Ship, category: "SPECIALTY" },
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
                VIDEO SHOWCASE  (inline CSS as in reference)
            ════════════════════════════════════════════════════ */}
            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience Explora vs Ponant</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase comparing both cruise lines' luxury experiences, destinations, and onboard atmospheres.
                    </p>
                    <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)', aspectRatio: '16/9', background: '#000' }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/qUpr3evauEc"
                            title="Explora vs Ponant Luxury Cruise Comparison"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        />
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
                        <h2 className="medi-cta-heading-white">Still Deciding Between Explora and Ponant?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing between Explora Journeys and Ponant depends entirely on your travel priorities — contemporary resort-style luxury with spacious suites and wellness, or intimate French yacht-style cruising and luxury expedition voyages.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently compare luxury cruise lines and design highly personalized luxury vacations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Explora Journeys all-suite ocean cruising', 'Ponant French luxury yacht cruising', 'Ponant Antarctica expedition voyages', 'Mediterranean luxury itineraries', 'Remote destination expedition cruises'].map((item, idx) => (
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
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
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

export default ExploraVsPonant