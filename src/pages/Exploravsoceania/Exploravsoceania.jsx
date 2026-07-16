import Navbar from '../../components/Navbar/Navbar'
import './Exploravsoceania.css'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import {
    Ship, Star, CheckCircle, ArrowRight, Compass, Sparkles, Anchor,
    Crown, Phone, Globe, LayoutList, Heart, Utensils, Sun, Award,
    Mic, FileText, GraduationCap, Clock, Users, MapPin, Gem, ChevronRight, Calendar, Music
} from 'lucide-react'

// ── Swap these imports for real assets ──────────────────────────
import hero1 from '../../assets/ExploraJourneysVsSilversea/explora_hero.png'
import hero2 from '../../assets/AzamaravsVikingOcean/hero2.webp'
import hero3 from '../../assets/ExploraJourneysVsSilversea/Explora_Journeys.webp'
import exploraShipImg from '../../assets/BookExplora/explora-journeys-luxury-cruise-ships-sailing-miami.webp'
import oceaniaShipImg from '../../assets/ExploravsOceania/Oceania Aurelia - Ship Image_2026-07-03_13-58-49.jpg'
import exploraDiningImg from '../../assets/ExploraJourneysVsSilversea/explora_dining.webp'
import oceaniaDiningImg from '../../assets/Azamarashipcomparison/Azamara-Dining-Experience.jpg'
import exploraSuiteImg from '../../assets/AzamaraCabinsGuide2026/luxury-oceanfront-suite-explora-journeys-interior.jpg'
import oceaniaSuiteImg from '../../assets/ExploraJourneysVsSilversea/Explora_Atmosphere.jpeg'
import exploraWellnessImg from '../../assets/BestSuitesExploraJourneys/explora-journeys-indoor-hydrotherapy-pool-luxury-spa-experience.jpg'
import oceaniaWellnessImg from '../../assets/ExploraJourneysVsSilversea/explora_ship_overview.png'
import exploraDestImg from '../../assets/BookExplora/EXPLORA III - PANAMA CANAL.webp'
import oceaniaDestImg from '../../assets/AzamaraGreeceCruises/luxury-santorini-oia-sunset-view-greece-travel.webp'
import exploraInclImg from '../../assets/ExploraFAQ/Explora_Cruises_Inclusive.webp'
import oceaniaInclImg from '../../assets/AzamaraCruisesGuide/Simplified_Inclusions.webp'
import exploraVerdictImg from '../../assets/BestSuitesExploraJourneys/EXPLORA_sailing_in_Miami.webp'
import oceaniaVerdictImg from '../../assets/ExploravsOceania/Oceania Aurelia - Horizon Lounge_2026-07-03_13-58-37.jpg'
import Profile_AH from '../../assets/Media (2).jpg';
import Profile_Picture_AH from '../../assets/ExploraFAQ/Profile_Picture_AH.jpg'
import { Link } from 'react-router'

function ExploraVsOceania() {
    const [currentHero, setCurrentHero] = useState(0)
    const heroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)
    const [activeComparTab, setActiveComparTab] = useState(0)

    const toggleFaq = i => setActiveFaq(activeFaq === i ? null : i)

    /* ── Schema ── */
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania",
                "name": "Explora vs Oceania",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania",
                "description": "Compare Explora Journeys vs Oceania Cruises, including ships, suites, dining, destinations, pricing, service, inclusions, and onboard luxury experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, and personalized cruise planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania#article",
                "headline": "Explora vs Oceania",
                "url": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania",
                "description": "Expert comparison of Explora Journeys and Oceania Cruises covering ships, accommodations, dining, destinations, service, pricing, and onboard luxury experience.",
                "image": "https://www.tripsshipsluxurytravel.com/images/explora-vs-oceania.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Professional luxury cruise planning and comparison services helping travelers choose the best luxury cruise line based on their travel style, destination preferences, and vacation goals."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruise Comparisons", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Explora vs Oceania", "item": "https://www.tripsshipsluxurytravel.com/explora-vs-oceania" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Explora more luxurious than Oceania?", "acceptedAnswer": { "@type": "Answer", "text": "Explora Journeys is positioned as an ultra-luxury cruise line with all-suite accommodations, while Oceania Cruises is considered an upper-premium luxury line focused on culinary excellence and destination immersion." } },
                    { "@type": "Question", "name": "Which cruise line has better food?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer exceptional dining, but Oceania is internationally recognized for its Finest Cuisine at Sea®, while Explora emphasizes contemporary international dining experiences." } },
                    { "@type": "Question", "name": "Are all Explora accommodations suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every accommodation aboard Explora Journeys is an oceanfront suite with a private terrace." } },
                    { "@type": "Question", "name": "Which cruise line offers larger accommodations?", "acceptedAnswer": { "@type": "Answer", "text": "Explora's entry-level suites are considerably larger than Oceania's standard veranda staterooms." } },
                    { "@type": "Question", "name": "Does Explora include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuities are included in the cruise fare on Explora Journeys." } },
                    { "@type": "Question", "name": "Does Oceania include specialty dining?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Specialty dining is included, although reservations may be required." } },
                    { "@type": "Question", "name": "Which cruise line offers better wellness facilities?", "acceptedAnswer": { "@type": "Answer", "text": "Explora offers larger wellness facilities and comprehensive wellness programming, while Oceania features the Aquamar Spa + Vitality Center." } },
                    { "@type": "Question", "name": "Which cruise line offers more destinations?", "acceptedAnswer": { "@type": "Answer", "text": "Oceania generally offers a broader range of worldwide itineraries, including Grand Voyages and World Cruises." } },
                    { "@type": "Question", "name": "Is Explora better for first-time luxury cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Many first-time luxury cruisers appreciate Explora's spacious suites, relaxed atmosphere, and inclusive experience." } },
                    { "@type": "Question", "name": "Which cruise line has a more relaxed dress code?", "acceptedAnswer": { "@type": "Answer", "text": "Both embrace elegant casual attire, but Explora places greater emphasis on relaxed luxury with minimal formality." } },
                    { "@type": "Question", "name": "Which cruise line is better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both are excellent choices for couples. Explora offers a contemporary luxury atmosphere, while Oceania appeals to travelers who value fine dining and destination-focused itineraries." } },
                    { "@type": "Question", "name": "Does Oceania have casinos onboard?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Oceania ships feature an onboard casino." } },
                    { "@type": "Question", "name": "Which cruise line offers better value?", "acceptedAnswer": { "@type": "Answer", "text": "Oceania delivers excellent value through competitive pricing and world-class dining, while Explora offers outstanding value through spacious suites and premium inclusions." } },
                    { "@type": "Question", "name": "Which luxury cruise line should I choose?", "acceptedAnswer": { "@type": "Answer", "text": "Choose Explora for contemporary ultra-luxury and wellness-focused cruising, or Oceania for exceptional cuisine and destination-rich travel." } }
                ]
            }
        ]
    }

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
                highlights: ['Contemporary architecture', 'Ocean-inspired design', 'Spacious decks', 'Multiple swimming pools', 'Luxury spa'],
                stat: '~900 Guests per vessel'
            },
            oceania: {
                heading: 'Oceania Fleet',
                img: oceaniaShipImg,
                items: ['Marina', 'Riviera', 'Vista', 'Allura', 'Nautica', 'Regatta', 'Insignia', 'Sirena'],
                highlights: ['Mid-sized luxury ships', 'Elegant public spaces', 'Culinary-focused venues', 'Destination-rich itineraries', 'Comfortable atmosphere'],
                stat: '670–1,250 Guests per ship'
            }
        },
        {
            title: 'Suites & Accommodations',
            explora: {
                heading: 'Explora Suites',
                img: exploraSuiteImg,
                items: ['Private terrace', 'Heated bathroom floors', 'Walk-in wardrobe', 'Spacious seating area', 'Luxury linens', 'Modern European décor'],
                highlights: ['Every accommodation oceanfront', 'Entry-level suites among the industry\'s largest'],
                stat: 'All Oceanfront Suites'
            },
            oceania: {
                heading: 'Oceania Accommodations',
                img: oceaniaSuiteImg,
                items: ['Concierge Veranda Staterooms', 'Penthouse Suites', 'Oceania Suites', 'Vista Suites', 'Owner\'s Suites'],
                highlights: ['Upper-category suites with butler service', 'Additional luxury amenities'],
                stat: 'Veranda to Owner\'s Suite'
            }
        },
        {
            title: 'Dining Comparison',
            explora: {
                heading: 'Explora Dining',
                img: exploraDiningImg,
                items: ['Mediterranean specialties', 'Asian cuisine', 'European classics', 'Fine dining restaurants', 'Casual luxury venues'],
                highlights: ['Flexible reservations', 'Dine at your own pace'],
                stat: 'International Cuisine'
            },
            oceania: {
                heading: 'Oceania Dining',
                img: oceaniaDiningImg,
                items: ['Jacques', 'Red Ginger', 'Toscana', 'Polo Grill', 'Ember', 'Grand Dining Room'],
                highlights: ['Award-winning culinary program', 'Destination-inspired menus', 'Fresh ingredients'],
                stat: 'Finest Cuisine at Sea®'
            }
        },
        {
            title: 'Wellness & Relaxation',
            explora: {
                heading: 'Explora Wellness',
                img: exploraWellnessImg,
                items: ['Ocean Wellness Spa', 'Thermal areas', 'Outdoor wellness spaces', 'Multiple pools', 'Fitness studios', 'Wellness programming'],
                highlights: ['Defining feature of the Explora experience', 'Extensive facilities'],
                stat: 'Industry-Leading Wellness'
            },
            oceania: {
                heading: 'Oceania Wellness',
                img: oceaniaWellnessImg,
                items: ['Aquamar Spa + Vitality Center', 'Fitness center', 'Massage therapies', 'Beauty salon', 'Relaxation lounges'],
                highlights: ['Aquamar Wellness Program', 'Healthy living through spa, fitness, and cuisine'],
                stat: 'Aquamar Spa Program'
            }
        },
        {
            title: 'Destinations & Itineraries',
            explora: {
                heading: 'Explora Destinations',
                img: exploraDestImg,
                items: ['Mediterranean', 'Northern Europe', 'Caribbean', 'Alaska', 'South America', 'Asia', 'Australia & New Zealand', 'Transatlantic Voyages'],
                highlights: ['Immersive luxury itineraries', 'Extended port stays'],
                stat: 'Immersive Itineraries'
            },
            oceania: {
                heading: 'Oceania Destinations',
                img: oceaniaDestImg,
                items: ['Mediterranean', 'Northern Europe', 'Caribbean', 'Alaska', 'South America', 'Asia', 'Australia & New Zealand', 'Grand Voyages & World Cruises'],
                highlights: ['Broader worldwide selection', 'Grand Voyages and World Cruises'],
                stat: 'World\'s Most Diverse Routes'
            }
        },
        {
            title: 'Included Amenities',
            explora: {
                heading: 'Explora Includes',
                img: exploraInclImg,
                items: ['Luxury all-suite accommodations', 'Multiple dining venues', 'Premium beverages', 'Specialty coffees and teas', 'Wi-Fi', 'Gratuities', 'Wellness facilities', 'Fitness classes'],
                highlights: ['Consistently inclusive approach'],
                stat: 'All-Inclusive Premium'
            },
            oceania: {
                heading: 'Oceania Includes',
                img: oceaniaInclImg,
                items: ['Specialty dining', 'Wi-Fi', 'Select shore excursion credits', 'Beverage packages', 'Gratuities (promotional fares)'],
                highlights: ['Inclusions vary by booking package'],
                stat: 'Package-Based Inclusions'
            }
        }
    ]

    const faqs = [
        { question: 'Is Explora more luxurious than Oceania?', answer: 'Explora Journeys is generally positioned as an ultra-luxury cruise line with all-suite accommodations, while Oceania Cruises is considered an upper-premium luxury line known for exceptional dining and destination-focused itineraries.' },
        { question: 'Which cruise line has better food?', answer: 'Both cruise lines excel in dining. Oceania is famous for its "Finest Cuisine at Sea®," while Explora offers a broader selection of modern international restaurants and luxury dining experiences.' },
        { question: 'Are all Explora accommodations suites?', answer: 'Yes. Every accommodation aboard Explora Journeys is an oceanfront suite with a private terrace.' },
        { question: 'Which cruise line offers larger accommodations?', answer: "Explora's entry-level suites are significantly larger than Oceania's standard veranda staterooms." },
        { question: 'Does Explora include gratuities?', answer: 'Yes. Gratuities are included in the cruise fare on Explora Journeys.' },
        { question: 'Does Oceania include specialty dining?', answer: 'Yes. Specialty dining is included, although reservations may be required depending on the restaurant and sailing.' },
        { question: 'Which cruise line offers better wellness facilities?', answer: 'Explora features a larger wellness complex with extensive spa facilities, fitness studios, and wellness programming. Oceania also offers excellent wellness through its Aquamar Spa + Vitality Center.' },
        { question: 'Which cruise line offers more destinations?', answer: 'Oceania generally offers a broader selection of worldwide itineraries, including Grand Voyages and World Cruises.' },
        { question: 'Is Explora better for first-time luxury cruisers?', answer: "Many first-time luxury cruisers appreciate Explora's relaxed atmosphere, spacious suites, and inclusive experience." },
        { question: 'Which cruise line has a more relaxed dress code?', answer: 'Both cruise lines embrace elegant casual attire, but Explora places even greater emphasis on relaxed luxury with very little formality.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent choices. Explora appeals to couples seeking a contemporary luxury resort atmosphere, while Oceania attracts couples who enjoy fine dining and destination-focused travel.' },
        { question: 'Does Oceania have casinos onboard?', answer: 'Yes. Most Oceania ships feature a casino, although it is much smaller than those found on mainstream cruise lines.' },
        { question: 'Which cruise line offers better value?', answer: 'Oceania often delivers excellent value through competitive pricing and exceptional dining, while Explora offers outstanding value for travelers seeking ultra-luxury accommodations and premium inclusions.' },
        { question: 'Which luxury cruise line should I choose?', answer: 'Choose Explora Journeys if you value spacious suites, contemporary luxury, and wellness-focused cruising. Choose Oceania Cruises if exceptional cuisine, destination immersion, and elegant mid-sized ships are your top priorities.' },
    ]

    return (
        <>
            <Helmet>
                <title>Explora vs Oceania: Which Luxury Cruise Line Is Best for You? (2026 Guide)</title>
                <meta name="title" content="Explora vs Oceania | Luxury Cruise Comparison Guide" />
                <meta name="description" content="Compare Explora Journeys vs Oceania Cruises, including ships, suites, dining, destinations, pricing, service, inclusions, and onboard experiences to choose the perfect luxury cruise." />
                <meta name="keywords" content="Explora vs Oceania, Explora Journeys vs Oceania Cruises, Explora Cruises, Oceania Cruises Review, Luxury Cruise Comparison, Best Luxury Cruise Line" />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section evo-hero">
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
                        Explora vs Oceania: <br /> Which Luxury Cruise Line Is Right for You?
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Comparing Two Distinct Luxury Cruise Experiences
                    </p>
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

            {/* ── INTRO ── */}
            <section className="evo-intro-section">
                <div className="evo-intro-container">
                    <span className="evo-eyebrow">LUXURY CRUISE COMPARISON</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                        Explora Journeys vs Oceania Cruises
                    </h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p className="evo-intro-lead">
                        Explora Journeys and Oceania Cruises are two highly regarded names in premium and luxury ocean cruising. While both deliver refined accommodations, outstanding dining, personalized service, and immersive itineraries, they appeal to different types of travelers.
                    </p>
                    <div className="evo-intro-split">
                        <div className="evo-intro-card evo-card-explora">
                            <div className="evo-intro-card-badge">EXPLORA JOURNEYS</div>
                            <h3 className="evo-intro-card-title">Ultra-Luxury Ocean Living</h3>
                            <p className="evo-intro-card-text">
                                Explora Journeys represents a new generation of ultra-luxury cruising with spacious all-suite accommodations, wellness-focused experiences, and contemporary European design.
                            </p>
                            <ul className="evo-intro-card-list">
                                {['All-suite accommodations', 'Contemporary luxury', 'Exceptional wellness facilities', 'Spacious public areas', 'Premium beverages included', 'Relaxed atmosphere'].map(item => (
                                    <li key={item}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="evo-intro-divider">
                            <span className="evo-vs-badge">VS</span>
                        </div>
                        <div className="evo-intro-card evo-card-oceania">
                            <div className="evo-intro-card-badge">OCEANIA CRUISES</div>
                            <h3 className="evo-intro-card-title">Culinary &amp; Destination Mastery</h3>
                            <p className="evo-intro-card-text">
                                Oceania Cruises has earned a loyal following through destination-rich voyages, exceptional culinary experiences, elegant mid-sized ships, and a relaxed country-club atmosphere.
                            </p>
                            <ul className="evo-intro-card-list">
                                {['Outstanding dining', 'Excellent itineraries', 'Mid-sized ships', 'Relaxed atmosphere', 'High-quality service', 'Exceptional culinary experiences'].map(item => (
                                    <li key={item}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUICK COMPARISON TABLE ── */}
            <section className="evo-table-section">
                <div className="evo-table-container">
                    <span className="evo-eyebrow" style={{ textAlign: 'center', display: 'block' }}>AT A GLANCE</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Quick Comparison: Explora vs Oceania</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <div className="evo-table-wrapper">
                        <table className="evo-compare-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th><span className="evo-th-brand">Explora Journeys</span></th>
                                    <th><span className="evo-th-brand">Oceania Cruises</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Best For', 'Modern luxury travelers', 'Food lovers and destination-focused travelers'],
                                    ['Luxury Level', 'Ultra-Luxury', 'Upper Premium Luxury'],
                                    ['Guest Capacity', 'Around 900 guests', '670–1,250 guests'],
                                    ['Suites', 'All oceanfront suites', 'Veranda staterooms and suites'],
                                    ['Dining', 'Multiple international restaurants', 'Gourmet destination-inspired dining'],
                                    ['Specialty Dining', 'Included', 'Included'],
                                    ['Gratuities', 'Included', 'Promotional on select sailings'],
                                    ['Wi-Fi', 'Included', 'Included with many fare packages'],
                                    ['Wellness', 'Extensive wellness focus', 'Traditional spa and fitness'],
                                    ['Dress Code', 'Relaxed luxury', 'Country-club casual'],
                                    ['Best Feature', 'Spacious suites', 'Finest Cuisine at Sea®'],
                                ].map(([feat, exp, oce], i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'evo-row-alt' : ''}>
                                        <td className="evo-td-feature">{feat}</td>
                                        <td>{exp}</td>
                                        <td>{oce}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── DEEP DIVE TABBED SECTION ── */}
            <section className="evo-tabs-section">
                <div className="evo-tabs-container">
                    <span className="evo-eyebrow" style={{ display: 'block', textAlign: 'center' }}>DETAILED COMPARISON</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Side-by-Side Deep Dive</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="evo-tabs-nav">
                        {comparTabs.map((tab, i) => {
                            const Icon = tab.icon
                            return (
                                <button
                                    key={i}
                                    className={`evo-tab-btn ${activeComparTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveComparTab(i)}
                                >
                                    <Icon size={16} />{tab.label}
                                </button>
                            )
                        })}
                    </div>

                    <div className="evo-tabs-panel">
                        <h3 className="evo-panel-title">{comparContent[activeComparTab].title}</h3>
                        <div className="evo-panel-grid">
                            {/* Explora Column */}
                            <div className="evo-panel-col evo-col-explora">
                                <div className="evo-col-header">
                                    <span className="evo-col-brand-label">EXPLORA JOURNEYS</span>
                                    <h4 className="evo-col-heading">{comparContent[activeComparTab].explora.heading}</h4>
                                </div>
                                <div className="evo-col-img-wrap">
                                    <img
                                        src={comparContent[activeComparTab].explora.img}
                                        alt={comparContent[activeComparTab].explora.heading}
                                        className="evo-col-img"
                                    />
                                    <span className="evo-col-stat-badge">{comparContent[activeComparTab].explora.stat}</span>
                                </div>
                                <ul className="evo-col-list">
                                    {comparContent[activeComparTab].explora.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                {comparContent[activeComparTab].explora.highlights.map((h, i) => (
                                    <div key={i} className="evo-col-highlight"><Sparkles size={14} /><span>{h}</span></div>
                                ))}
                            </div>

                            {/* Oceania Column */}
                            <div className="evo-panel-col evo-col-oceania">
                                <div className="evo-col-header">
                                    <span className="evo-col-brand-label">OCEANIA CRUISES</span>
                                    <h4 className="evo-col-heading">{comparContent[activeComparTab].oceania.heading}</h4>
                                </div>
                                <div className="evo-col-img-wrap">
                                    <img
                                        src={comparContent[activeComparTab].oceania.img}
                                        alt={comparContent[activeComparTab].oceania.heading}
                                        className="evo-col-img"
                                    />
                                    <span className="evo-col-stat-badge">{comparContent[activeComparTab].oceania.stat}</span>
                                </div>
                                <ul className="evo-col-list">
                                    {comparContent[activeComparTab].oceania.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /><span>{item}</span></li>
                                    ))}
                                </ul>
                                {comparContent[activeComparTab].oceania.highlights.map((h, i) => (
                                    <div key={i} className="evo-col-highlight"><Sparkles size={14} /><span>{h}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE COMPARISON ── */}
            <section className="evo-service-section">
                <div className="evo-service-container">
                    <span className="evo-eyebrow" style={{ display: 'block', textAlign: 'center' }}>ONBOARD EXPERIENCE</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Service &amp; Entertainment</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <div className="evo-service-grid">
                        <div className="evo-service-card">
                            <div className="evo-service-icon-box"><Crown size={24} /></div>
                            <h3 className="evo-service-card-title">Explora Service</h3>
                            <p className="evo-service-card-text">Service aboard Explora is relaxed, personalized, and attentive. Guests appreciate European hospitality, friendly crew, personalized attention, and a luxury resort atmosphere. The goal is to create a sophisticated yet informal luxury experience.</p>
                        </div>
                        <div className="evo-service-card">
                            <div className="evo-service-icon-box"><Award size={24} /></div>
                            <h3 className="evo-service-card-title">Oceania Service</h3>
                            <p className="evo-service-card-text">Oceania delivers polished, professional service with an emphasis on consistency and guest satisfaction. Guests frequently praise the attentive dining staff, experienced crew, personalized service, and friendly atmosphere.</p>
                        </div>
                        <div className="evo-service-card">
                            <div className="evo-service-icon-box"><Music size={24} /></div>
                            <h3 className="evo-service-card-title">Explora Entertainment</h3>
                            <p className="evo-service-card-text">Entertainment is elegant and understated — live music, piano lounges, cocktail bars, cultural performances, evening entertainment, and wellness activities all prioritized over large productions.</p>
                        </div>
                        <div className="evo-service-card">
                            <div className="evo-service-icon-box"><Mic size={24} /></div>
                            <h3 className="evo-service-card-title">Oceania Entertainment</h3>
                            <p className="evo-service-card-text">Entertainment emphasizes enrichment — live music, guest lecturers, destination experts, culinary demonstrations, evening performances, and cultural enrichment programs. Sophisticated over Broadway-style.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="evo-choose-section">
                <div className="evo-choose-container">
                    <span className="evo-eyebrow evo-eyebrow-white" style={{ display: 'block', textAlign: 'center' }}>FIND YOUR MATCH</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center', color: '#ffffff' }}>Which Cruise Line Is Right for You?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered" style={{ background: 'rgba(255,255,255,0.4)' }}></div>
                    <div className="evo-choose-grid">
                        <div className="evo-choose-card">
                            <div className="evo-choose-card-header evo-choose-explora-header">
                                <Ship size={28} />
                                <h3>Choose Explora Journeys If You…</h3>
                            </div>
                            <ul className="evo-choose-list">
                                {[
                                    'Prefer ultra-luxury accommodations',
                                    'Value spacious suites',
                                    'Enjoy wellness experiences',
                                    'Appreciate contemporary European design',
                                    'Want a resort-style luxury atmosphere',
                                    'Prefer premium inclusions',
                                ].map(item => (
                                    <li key={item}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="evo-choose-card">
                            <div className="evo-choose-card-header evo-choose-oceania-header">
                                <Utensils size={28} />
                                <h3>Choose Oceania Cruises If You…</h3>
                            </div>
                            <ul className="evo-choose-list">
                                {[
                                    'Love exceptional cuisine',
                                    'Enjoy destination-rich itineraries',
                                    'Prefer elegant mid-sized ships',
                                    'Appreciate relaxed luxury',
                                    'Value outstanding service',
                                    'Want strong overall value',
                                ].map(item => (
                                    <li key={item}><CheckCircle size={16} /><span>{item}</span></li>
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
            <h2>EXPLORA II at the Formula 1 Monaco Grand Prix 2025</h2>
            <div className="Emerald_video_divider"></div>
            <p className="Emerald_video_subtitle">
Experience the thrill of the Formula 1 Monaco Grand Prix 2025 aboard EXPLORA II. Enjoy ultra-luxury accommodations, spectacular race views, and an unforgettable blend of world-class hospitality and motorsport excitement.            </p>
          </div>

          <div className="Emerald_video_wrapper">
            <div className="Emerald_video_frame">
              <iframe
                className="Emerald_video_player"
                src="https://www.youtube.com/embed/RjFFAQMiJUU"
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




            {/* ── FINAL VERDICT ── */}
            <section className="evo-verdict-section">
                <div className="evo-verdict-container">
                    <span className="evo-eyebrow" style={{ display: 'block', textAlign: 'center' }}>EXPERT VERDICT</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Final Verdict</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p className="evo-verdict-lead">
                        Explora Journeys and Oceania Cruises both offer refined luxury experiences, but they excel in different areas.
                    </p>
                    <div className="evo-verdict-grid">
                        <div className="evo-verdict-card evo-verdict-explora">
                            <div className="evo-verdict-img-wrap">
                                <img src={exploraVerdictImg} alt="Explora Journeys" className="evo-verdict-img" />
                                <div className="evo-verdict-img-overlay"></div>
                                <span className="evo-verdict-badge">Ultra-Luxury</span>
                            </div>
                            <div className="evo-verdict-body">
                                <h3 className="evo-verdict-brand">Explora Journeys</h3>
                                <p className="evo-verdict-text">
                                    Choose Explora Journeys if you prefer contemporary ultra-luxury, spacious all-suite accommodations, extensive wellness facilities, and a modern European atmosphere.
                                </p>
                            </div>
                        </div>
                        <div className="evo-verdict-card evo-verdict-oceania">
                            <div className="evo-verdict-img-wrap">
                                <img src={oceaniaVerdictImg} alt="Oceania Cruises" className="evo-verdict-img" />
                                <div className="evo-verdict-img-overlay"></div>
                                <span className="evo-verdict-badge">Finest Cuisine</span>
                            </div>
                            <div className="evo-verdict-body">
                                <h3 className="evo-verdict-brand">Oceania Cruises</h3>
                                <p className="evo-verdict-text">
                                    Choose Oceania Cruises if gourmet dining, immersive destinations, and exceptional overall value are your highest priorities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="evo-verdict-footer-note">
                        Both cruise lines consistently rank among the world's finest luxury cruise experiences, making either an outstanding choice depending on your travel style.
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="evo-pricing-section">
                <div className="evo-pricing-container">
                    <span className="evo-eyebrow" style={{ display: 'block', textAlign: 'center' }}>INVESTMENT</span>
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Pricing Comparison</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <div className="evo-pricing-grid">
                        <div className="evo-pricing-card">
                            <div className="evo-pricing-icon"><Gem size={32} /></div>
                            <h3 className="evo-pricing-brand">Explora Journeys</h3>
                            <p className="evo-pricing-text">Positioned within the ultra-luxury market and generally commands higher starting fares — reflecting the all-suite experience, premium inclusions, and extensive wellness offerings.</p>
                            <div className="evo-pricing-tag">Ultra-Luxury Pricing</div>
                        </div>
                        <div className="evo-pricing-card">
                            <div className="evo-pricing-icon"><Star size={32} /></div>
                            <h3 className="evo-pricing-brand">Oceania Cruises</h3>
                            <p className="evo-pricing-text">Often provides a lower entry price while delivering exceptional value through outstanding dining, destination-focused itineraries, and promotional inclusions.</p>
                            <div className="evo-pricing-tag">Premium Value Pricing</div>
                        </div>
                    </div>
                    <div className="evo-pricing-note">
                        <Sparkles size={16} />
                        <span>Travelers should compare overall vacation value rather than cruise fare alone.</span>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY ── */}
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
                                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }}
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

            {/* ── FAQ ── */}
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
                                onClick={() => toggleFaq(index)}
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

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Choose Your Perfect Luxury Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            Choosing between Explora Journeys and Oceania Cruises is no small decision. Both offer world-class luxury — but the right choice depends on your travel style, priorities, and destination goals.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently select the ideal luxury cruise experience.
                        </p>
                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    'Explora ultra-luxury all-suite sailing',
                                    'Oceania gourmet culinary voyages',
                                    'Mediterranean & European itineraries',
                                    'World Cruises & Grand Voyages',
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
                            <Link to="/contact" className="medi-primary-cta-button"><Phone size={18} />Schedule a Consultation</Link>
                            <button className="medi-secondary-outline-button"><LayoutList size={18} />Request Itinerary Options</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploraVsOceania