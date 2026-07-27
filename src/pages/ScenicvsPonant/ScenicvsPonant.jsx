import Navbar from '../../components/Navbar/Navbar'
import './ScenicvsPonant.css'

import {
    Ship, MapPin, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem,
    ChevronRight, Crown, Phone, LayoutList, Utensils,
    Sun, Award, Music, GraduationCap,
    Wifi, Wine, Image as ImageIcon, Waves, DollarSign, ShieldCheck, Leaf
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

/* ── Reusable image placeholder (swap for real photography later) ── */
function SvpImagePlaceholder({ label = 'Image Placeholder', tone = '' }) {
    return (
        <div className={`svp-img-placeholder ${tone}`}>
            <ImageIcon size={30} strokeWidth={1.5} />
            <span>{label}</span>
        </div>
    )
}

function ScenicVsPonant() {

    const [svpCurrentHero, setSvpCurrentHero] = useState(0)
    const svpHeroSlides = [
        'Scenic Eclipse Discovery Yacht',
        'Ponant French Expedition Ship',
        'Polar & Remote Expedition Voyages'
    ]

    useEffect(() => {
        const svpTimer = setInterval(() => {
            setSvpCurrentHero(prev => (prev + 1) % svpHeroSlides.length)
        }, 5000)
        return () => clearInterval(svpTimer)
    }, [svpHeroSlides.length])

    const [svpActiveFaq, setSvpActiveFaq] = useState(null)
    const svpToggleFaq = i => setSvpActiveFaq(svpActiveFaq === i ? null : i)

    /* ── At-a-Glance comparison table ── */
    const svpGlanceRows = [
        { feature: 'Cruise Style', scenic: 'Ultra-Luxury Ocean & Expedition', ponant: 'Luxury Expedition & Small Ship Cruises' },
        { feature: 'Fleet', scenic: 'Scenic Eclipse I & II', ponant: '13+ Luxury Expedition Ships' },
        { feature: 'Butler Service', scenic: 'Every Suite', ponant: 'Select Suite Categories' },
        { feature: 'Specialty Dining', scenic: 'Included', ponant: 'Included' },
        { feature: 'Premium Beverages', scenic: 'Included', ponant: 'Included' },
        { feature: 'Wi-Fi', scenic: 'Included', ponant: 'Included' },
        { feature: 'Gratuities', scenic: 'Included', ponant: 'Included' },
        { feature: 'Expedition Cruises', scenic: 'Yes', ponant: 'Yes' },
        { feature: 'Helicopter & Submarine', scenic: 'Select Voyages', ponant: 'No' },
        { feature: 'Luxury Level', scenic: 'Ultra-Luxury', ponant: 'Luxury' }
    ]

    /* ── Ships & Onboard Experience ── */
    const svpShipsScenic = ['Contemporary luxury design', 'Spacious observation lounges', 'Helicopter excursions (select voyages)', 'Submarine experiences (select voyages)', 'Multiple dining venues', 'Luxury spa and wellness facilities']
    const svpShipsPonant = ['French-inspired interiors', 'Panoramic observation lounges', 'Outdoor viewing decks', 'Boutique luxury atmosphere', 'Small passenger capacity', 'Personalized service']

    /* ── Suites & Accommodations ── */
    const svpSuitesScenic = ['Butler service', 'Private veranda', 'Luxury bedding', 'Premium minibar', 'Spacious marble bathroom', 'Personalized amenities']
    const svpSuitesPonant = ['Ocean views or private balconies', 'Premium bedding', 'Modern bathrooms', 'Luxury bath products', 'French-inspired décor', 'Spacious living areas in higher-category suites']

    /* ── Dining ── */
    const svpDiningScenic = ['Fine dining restaurants', 'Specialty venues', 'Casual dining', "Chef's Table experiences", 'In-suite dining', 'Every dining venue included in the fare']
    const svpDiningPonant = ['Elegant fine dining', 'French cuisine', 'International specialties', 'Regional dishes inspired by destinations', 'Open seating dining', 'Outdoor dining areas']

    /* ── Destinations ── */
    const svpDestinationsScenic = ['Antarctica', 'Arctic', 'Greenland', 'Iceland', 'Norwegian Fjords', 'Mediterranean', 'South Pacific', 'Australia', 'New Zealand']
    const svpDestinationsPonant = ['Antarctica', 'Arctic', 'Greenland', 'Iceland', 'Mediterranean', 'Alaska', 'French Polynesia', 'Japan', 'Australia', 'Kimberley Region']

    /* ── Expedition Experience ── */
    const svpExpeditionScenic = ['Zodiac excursions', 'Polar exploration', 'Helicopter flights (select voyages)', 'Submarine dives (select voyages)', 'Expert expedition leaders', 'Wildlife viewing', 'Educational presentations']
    const svpExpeditionPonant = ['Zodiac landings', 'Naturalist-led excursions', 'Wildlife encounters', 'Cultural exploration', 'Polar expeditions', 'Scientific partnerships', 'Environmental education']

    /* ── Included Amenities ── */
    const svpIncludedScenic = [
        { Icon: Crown, text: 'Butler service' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: Utensils, text: 'Fine dining' },
        { Icon: Sparkles, text: 'Specialty restaurants' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: Gem, text: 'Minibar' },
        { Icon: Ship, text: 'Airport transfers on many itineraries' }
    ]
    const svpIncludedPonant = [
        { Icon: Utensils, text: 'Gourmet dining' },
        { Icon: Wine, text: 'Premium beverages' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Compass, text: 'Expedition activities' },
        { Icon: GraduationCap, text: 'Enrichment programs' },
        { Icon: Music, text: 'Entertainment' },
        { Icon: MapPin, text: 'Selected shore experiences' }
    ]

    /* ── Wellness ── */
    const svpWellnessScenic = ['Full-service spa', 'Sauna', 'Steam room', 'Yoga', 'Fitness center', 'Wellness treatments']
    const svpWellnessPonant = ['Spa', 'Fitness center', 'Beauty treatments', 'Relaxation lounge', 'Outdoor pool (select ships)']

    /* ── Entertainment ── */
    const svpEntertainmentScenic = ['Destination lectures', 'Expedition briefings', 'Live music', 'Guest speakers', 'Culinary demonstrations']
    const svpEntertainmentPonant = ['French cultural entertainment', 'Live music', 'Destination presentations', 'Guest lecturers', 'Educational programming']

    /* ── Who should choose ── */
    const svpChooseScenic = [
        'Want a truly all-inclusive luxury experience',
        'Plan an expedition to Antarctica or the Arctic',
        'Value butler service in every suite',
        'Want optional helicopter and submarine experiences',
        'Prefer contemporary Discovery Yachts'
    ]
    const svpChoosePonant = [
        'Appreciate French elegance and cuisine',
        'Prefer intimate boutique ships',
        'Enjoy cultural immersion',
        'Want environmentally focused expeditions',
        'Like smaller guest capacities'
    ]

    /* ── Why book with T&S ── */
    const svpWhyBook = [
        { Icon: Compass, text: 'Personalized cruise recommendations' },
        { Icon: MapPin, text: 'Expert expedition planning' },
        { Icon: Gem, text: 'Exclusive promotions and amenities' },
        { Icon: Ship, text: 'Pre- and post-cruise travel arrangements' },
        { Icon: ShieldCheck, text: 'Dedicated support throughout your journey' }
    ]

    /* ── FAQ ── */
    const svpFaqs = [
        { question: 'Is Scenic more luxurious than Ponant?', answer: 'Scenic is generally considered more ultra-luxury due to its all-inclusive approach, butler service in every suite, and innovative Discovery Yachts. Ponant offers refined luxury with a distinctive French style.' },
        { question: 'Which cruise line is better for expedition cruising?', answer: 'Both are excellent. Scenic emphasizes cutting-edge exploration with helicopters and submarines on select voyages, while Ponant focuses on authentic expeditions, environmental stewardship, and cultural discovery.' },
        { question: 'Does Scenic include butler service?', answer: 'Yes. Every Scenic suite includes personalized butler service.' },
        { question: 'Does Ponant offer butler service?', answer: 'Ponant provides enhanced personalized service in select suite categories, though butler service is not available across all accommodations.' },
        { question: 'Are drinks included on both cruise lines?', answer: 'Yes. Premium beverages are included on both Scenic and Ponant cruises.' },
        { question: 'Which cruise line has better dining?', answer: 'Scenic offers exceptional all-inclusive gourmet dining, while Ponant is celebrated for its French-inspired cuisine and elegant culinary experiences.' },
        { question: 'Does Ponant sail to Antarctica?', answer: 'Yes. Ponant operates luxury expedition cruises to Antarctica and other polar destinations.' },
        { question: 'Does Scenic offer helicopter excursions?', answer: 'Yes. Scenic Eclipse offers helicopter excursions on select voyages where operational conditions permit.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included on both cruise lines.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent choices for couples seeking intimate luxury and extraordinary destinations.' },
        { question: 'Does Scenic operate river cruises?', answer: 'Yes. Scenic also offers luxury river cruises throughout Europe and Southeast Asia.' },
        { question: 'Are gratuities included?', answer: 'Yes. Gratuities are included in the fare on both Scenic and Ponant cruises.' },
        { question: 'Which cruise line visits more remote destinations?', answer: 'Both cruise lines specialize in remote destinations, though Ponant has an extensive portfolio of culturally focused expedition itineraries.' },
        { question: 'Which cruise line has a more intimate atmosphere?', answer: "Ponant's smaller ships provide a boutique, intimate ambiance, while Scenic combines luxury with slightly larger Discovery Yachts." },
        { question: 'Which cruise line is best overall?', answer: 'Scenic is ideal for travelers seeking all-inclusive luxury and advanced expedition technology, while Ponant is perfect for guests who appreciate French hospitality, cultural immersion, and elegant small-ship cruising.' }
    ]

    const svpSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-vs-ponant",
                "name": "Scenic vs Ponant",
                "url": "https://www.tripsandships.com/scenic-vs-ponant",
                "description": "Compare Scenic and Ponant to discover which luxury expedition cruise line offers the best ships, dining, suites, destinations, and exploration experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel advisors specializing in luxury ocean, river, and expedition cruises worldwide."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "ComparisonPage",
                "name": "Scenic vs Ponant",
                "about": [
                    { "@type": "Brand", "name": "Scenic Luxury Cruises & Tours" },
                    { "@type": "Brand", "name": "Ponant" }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Cruise Comparisons", "item": "https://www.tripsandships.com/cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic vs Ponant", "item": "https://www.tripsandships.com/scenic-vs-ponant" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": svpFaqs.map(f => ({
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
                <title>Scenic vs Ponant | Which Luxury Expedition Cruise Line Is Best?</title>
                <meta name="title" content="Scenic vs Ponant | Which Luxury Expedition Cruise Line Is Best?" />
                <meta name="description" content="Compare Scenic vs Ponant cruises, including ships, expedition experiences, dining, suites, destinations, pricing, and inclusions to choose the ideal luxury cruise." />
                <meta name="keywords" content="Scenic vs Ponant, Scenic vs Ponant Cruises, Scenic Eclipse vs Ponant, Ponant Cruise Review, Luxury Expedition Cruise Comparison, Scenic Luxury Cruises, Ponant Luxury Cruises, Best Expedition Cruise Line, Polar Expedition Cruises" />
                <script type="application/ld+json">{JSON.stringify(svpSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="svp-hero-section">
                {svpHeroSlides.map((label, idx) => (
                    <div
                        key={idx}
                        className={`svp-hero-background svp-hero-bg-${idx % 3} ${svpCurrentHero === idx ? 'svp-active' : ''}`}
                    />
                ))}
                <div className="svp-hero-overlay-layer"></div>
                <div className="svp-hero-content-wrapper">
                    <div className="svp-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury Expedition Comparison · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="svp-hero-main-title">
                        Scenic vs Ponant: Which Luxury <br className="svp-hero-break" /> Expedition Cruise Line Is Right for You?
                    </h1>
                    <p className="svp-hero-subtitle-text">
                        Compare ships, suites, dining, destinations, and expedition experiences to find the ideal luxury expedition cruise line for your journey.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="svp-intro-section">
                <div className="svp-intro-container">
                    <p className="svp-intro-lead">For travelers seeking extraordinary adventures without sacrificing comfort, Scenic Luxury Cruises &amp; Tours and Ponant stand among the world's leading luxury expedition cruise lines.</p>
                    <p className="svp-intro-body">Both brands combine small-ship luxury with immersive exploration, taking guests to remote destinations such as Antarctica, the Arctic, Iceland, and the South Pacific. However, their onboard atmosphere, expedition style, and luxury experience differ in several important ways.</p>
                    <p className="svp-intro-body">Scenic is known for its truly all-inclusive Discovery Yachts featuring helicopters and a submarine on select voyages, while Ponant blends French sophistication with authentic expedition travel aboard elegant small ships. This comparison will help you determine which cruise line best aligns with your travel preferences.</p>
                </div>
            </section>

            {/* ── AT A GLANCE TABLE ── */}
            <section className="svp-glance-section">
                <div className="svp-glance-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">SIDE-BY-SIDE COMPARISON</span>
                        <h2 className="svp-section-heading">Scenic vs Ponant at a Glance</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>

                    <div className="svp-glance-table-wrap">
                        <table className="svp-glance-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Scenic</th>
                                    <th>Ponant</th>
                                </tr>
                            </thead>
                            <tbody>
                                {svpGlanceRows.map((row, idx) => (
                                    <tr key={idx}>
                                        <td data-label="Feature" className="svp-glance-feature-cell">{row.feature}</td>
                                        <td data-label="Scenic">{row.scenic}</td>
                                        <td data-label="Ponant">{row.ponant}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile card fallback */}
                    <div className="svp-glance-cards">
                        {svpGlanceRows.map((row, idx) => (
                            <div key={idx} className="svp-glance-card">
                                <div className="svp-glance-card-feature">{row.feature}</div>
                                <div className="svp-glance-card-row">
                                    <span className="svp-glance-card-label">Scenic</span>
                                    <span className="svp-glance-card-value">{row.scenic}</span>
                                </div>
                                <div className="svp-glance-card-row">
                                    <span className="svp-glance-card-label">Ponant</span>
                                    <span className="svp-glance-card-value">{row.ponant}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT SCENIC / PONANT ── */}
            <section className="svp-about-section">
                <div className="svp-about-container">
                    <div className="svp-about-grid">

                        <div className="svp-about-card" style={{ 
                            backgroundColor: '#f8f8f8', 
                            marginBottom: '20px',
                            borderLeft: '4px solid #2c5282',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer'
                        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="svp-about-card-body">
                                <div className="svp-card-header">
                                    <span className="svp-chip svp-chip-scenic" style={{ 
                                        backgroundColor: '#2c5282', 
                                        color: 'white',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}><Ship size={14} strokeWidth={2} />SCENIC</span>
                                    <div className="svp-card-accent svp-accent-scenic" style={{ 
                                        width: '40px', 
                                        height: '3px', 
                                        backgroundColor: '#2c5282',
                                        borderRadius: '2px'
                                    }}></div>
                                </div>
                                <h3 className="svp-about-card-title svp-title-scenic" style={{ 
                                    color: '#1a365d',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    margin: '8px 0'
                                }}>Scenic Luxury Cruises</h3>
                                <div className="svp-divider svp-divider-scenic" style={{ 
                                    height: '2px',
                                    background: 'linear-gradient(to right, #2c5282, transparent)',
                                    margin: '12px 0'
                                }}></div>
                                <p className="svp-about-card-text" style={{ marginBottom: '12px', lineHeight: '1.6' }}>Scenic has become a leader in ultra-luxury cruising through its all-inclusive philosophy and innovative Discovery Yachts.</p>
                                <p className="svp-about-card-text" style={{ marginBottom: '12px', lineHeight: '1.6' }}>Its ocean fleet includes Scenic Eclipse and Scenic Eclipse II — purpose-built expedition yachts combining luxurious accommodations with advanced exploration technology, allowing guests to experience some of the world's most remote destinations while enjoying five-star service.</p>
                                <p className="svp-about-card-text" style={{ lineHeight: '1.6' }}>Scenic also operates award-winning river cruises throughout Europe and Southeast Asia.</p>
                            </div>
                        </div>
                        <div className="svp-about-card" style={{ 
                            backgroundColor: '#f0f4f8', 
                            marginBottom: '20px',
                            borderLeft: '4px solid #2563eb',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer'
                        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="svp-about-card-body">
                                <div className="svp-card-header">
                                    <span className="svp-chip svp-chip-ponant" style={{ 
                                        backgroundColor: '#2563eb', 
                                        color: 'white',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: '600',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}><Anchor size={14} strokeWidth={2} />PONANT</span>
                                    <div className="svp-card-accent svp-accent-ponant" style={{ 
                                        width: '40px', 
                                        height: '3px', 
                                        backgroundColor: '#2563eb',
                                        borderRadius: '2px'
                                    }}></div>
                                </div>
                                <h3 className="svp-about-card-title svp-title-ponant" style={{ 
                                    color: '#1e40af',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    margin: '8px 0'
                                }}>Ponant</h3>
                                <div className="svp-divider svp-divider-ponant" style={{ 
                                    height: '2px',
                                    background: 'linear-gradient(to right, #2563eb, transparent)',
                                    margin: '12px 0'
                                }}></div>
                                <p className="svp-about-card-text" style={{ marginBottom: '12px', lineHeight: '1.6' }}>Founded in France, Ponant specializes in luxury small-ship cruising with a strong emphasis on expedition travel and cultural exploration.</p>
                                <p className="svp-about-card-text" style={{ marginBottom: '12px', lineHeight: '1.6' }}>Its modern fleet includes ships such as Le Commandant Charcot, Le Bougainville, Le Dumont-d'Urville, Le Bellot, Le Jacques-Cartier, and Le Champlain.</p>
                                <p className="svp-about-card-text" style={{ lineHeight: '1.6' }}>Ponant is recognized for blending refined French hospitality with environmentally conscious exploration.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIPS & ONBOARD EXPERIENCE ── */}
            <section className="svp-compare-section svp-bg-soft">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">ONBOARD EXPERIENCE</span>
                        <h2 className="svp-section-heading">Ships and Onboard Experience</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Scenic's atmosphere is sophisticated while remaining adventure-focused. Ponant's ships are intentionally intimate and elegant, delivering a refined European cruising experience with an emphasis on exploration.</p>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <Ship size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Eclipse Discovery Yacht" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpShipsScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <Ship size={20} />
                                <h3>Ponant</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Expedition Ship" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpShipsPonant.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ── */}
            <section className="svp-compare-section">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">STAYING ABOARD</span>
                        <h2 className="svp-section-heading">Suites and Accommodations</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Scenic accommodations are designed to provide residential-style comfort, while Ponant's select suite categories include enhanced personalized services.</p>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <Crown size={20} />
                                <h3>Scenic — Every Suite Includes</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Suite & Accommodation" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpSuitesScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <Crown size={20} />
                                <h3>Ponant — Staterooms &amp; Suites Feature</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Stateroom & Suite" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpSuitesPonant.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="svp-compare-section svp-bg-soft">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">CULINARY PROGRAM</span>
                        <h2 className="svp-section-heading">Dining Experience</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Every dining venue is included in the fare on Scenic voyages, while Ponant celebrates French gastronomy with a culinary experience that reflects the cruise line's heritage.</p>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <Utensils size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Fine Dining" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpDiningScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <Utensils size={20} />
                                <h3>Ponant</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Dining Experience" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpDiningPonant.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="svp-compare-section">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">WHERE YOU'LL SAIL</span>
                        <h2 className="svp-section-heading">Destinations</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Scenic specializes in luxury expedition travel, while Ponant's itineraries often feature culturally immersive and environmentally focused experiences.</p>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <MapPin size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Global Destinations" />
                            </div>
                            <div className="svp-tag-cloud">
                                {svpDestinationsScenic.map((item, idx) => (
                                    <span key={idx} className="svp-tag svp-tag-scenic">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <MapPin size={20} />
                                <h3>Ponant</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Itineraries" />
                            </div>
                            <div className="svp-tag-cloud">
                                {svpDestinationsPonant.map((item, idx) => (
                                    <span key={idx} className="svp-tag svp-tag-ponant">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION EXPERIENCE ── */}
            <section className="svp-expedition-section">
                <div className="svp-expedition-bg-placeholder">
                    <SvpImagePlaceholder label="Polar & Remote Expedition Voyage" tone="svp-placeholder-dark" />
                </div>
                <div className="svp-expedition-overlay"></div>
                <div className="svp-expedition-content">
                    <span className="svp-eyebrow svp-eyebrow-light">ADVENTURE AT SEA</span>
                    <h2 className="svp-section-heading svp-white-heading">Expedition Experience</h2>
                    <div className="svp-heading-separator-bar svp-bar-centered svp-separator-white"></div>
                    <p className="svp-expedition-intro">Both cruise lines provide exceptional expedition programs, though Scenic emphasizes advanced exploration technology while Ponant highlights cultural and environmental discovery.</p>

                    <div className="svp-expedition-grid">
                        <div className="svp-expedition-col">
                            <h3>Scenic</h3>
                            <ul className="svp-expedition-list">
                                {svpExpeditionScenic.map((item, idx) => (
                                    <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-expedition-col">
                            <h3>Ponant</h3>
                            <ul className="svp-expedition-list">
                                {svpExpeditionPonant.map((item, idx) => (
                                    <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INCLUDED AMENITIES ── */}
            <section className="svp-compare-section">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">WHAT'S INCLUDED</span>
                        <h2 className="svp-section-heading">Included Amenities</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <Gem size={20} />
                                <h3>Scenic Includes</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic All-Inclusive Amenities" />
                            </div>
                            <div className="svp-icon-list">
                                {svpIncludedScenic.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="svp-icon-list-item">
                                        <div className="svp-icon-list-icon svp-icon-scenic"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <Gem size={20} />
                                <h3>Ponant Includes</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Premium Amenities" />
                            </div>
                            <div className="svp-icon-list">
                                {svpIncludedPonant.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="svp-icon-list-item">
                                        <div className="svp-icon-list-icon svp-icon-ponant"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WELLNESS ── */}
            <section className="svp-compare-section svp-bg-soft">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">MIND &amp; BODY</span>
                        <h2 className="svp-section-heading">Wellness and Spa</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Both brands provide relaxing wellness spaces after days of exploration.</p>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <Sun size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Spa & Wellness" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpWellnessScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <Sun size={20} />
                                <h3>Ponant</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Wellness Center" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpWellnessPonant.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="svp-compare-section">
                <div className="svp-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">EVENINGS ONBOARD</span>
                        <h2 className="svp-section-heading">Entertainment</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Entertainment on both cruise lines remains understated, allowing destinations to take center stage.</p>
                    </div>

                    <div className="svp-compare-grid">
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-scenic">
                                <Music size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Onboard Entertainment" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpEntertainmentScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-compare-col">
                            <div className="svp-compare-col-header svp-col-ponant">
                                <Music size={20} />
                                <h3>Ponant</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant Evening Entertainment" />
                            </div>
                            <ul className="svp-compare-list">
                                {svpEntertainmentPonant.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE COMPARISON ── */}
            <section className="svp-service-section">
                <div className="svp-service-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">HOSPITALITY</span>
                        <h2 className="svp-section-heading">Service Comparison</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-compare-intro">Both cruise lines receive excellent ratings for attentive service and guest satisfaction.</p>
                    </div>

                    <div className="svp-service-grid">
                        <div className="svp-service-card">
                            <Users size={22} />
                            <h3>Scenic</h3>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Scenic Personalized Service" />
                            </div>
                            <ul>
                                <li>Butler service in every suite</li>
                                <li>Personalized luxury</li>
                                <li>High crew-to-guest ratio</li>
                                <li>Comprehensive all-inclusive experience</li>
                            </ul>
                        </div>
                        <div className="svp-service-card">
                            <Users size={22} />
                            <h3>Ponant</h3>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Ponant French Hospitality" />
                            </div>
                            <ul>
                                <li>Warm French hospitality</li>
                                <li>Personalized attention</li>
                                <li>Intimate guest experience</li>
                                <li>Multilingual crew</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="svp-pricing-section">
                <div className="svp-pricing-container">
                    <span className="svp-eyebrow">INVESTMENT</span>
                    <h2 className="svp-section-heading">Pricing</h2>
                    <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    <p className="svp-pricing-text">Scenic generally commands premium pricing because of its all-inclusive approach, Discovery Yacht technology, and luxury expedition amenities.</p>
                    <p className="svp-pricing-text">Ponant offers competitive luxury pricing with a focus on cultural exploration, smaller ships, and French-inspired hospitality. The best value depends on your preferred itinerary, travel season, and suite category.</p>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="svp-choose-section">
                <div className="svp-choose-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">MAKE YOUR DECISION</span>
                        <h2 className="svp-section-heading">Which Cruise Line Is Right for You?</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>

                    <div className="svp-choose-grid">
                        <div className="svp-choose-card">
                            <div className="svp-choose-card-header svp-col-scenic">
                                <Compass size={22} />
                                <h3>Who Should Choose Scenic?</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Who Should Choose Scenic?" />
                            </div>
                            <ul className="svp-choose-list">
                                {svpChooseScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={17} className="svp-choose-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svp-choose-card">
                            <div className="svp-choose-card-header svp-col-ponant">
                                <Waves size={22} />
                                <h3>Who Should Choose Ponant?</h3>
                            </div>
                            <div className="svp-compare-img-wrap">
                                <SvpImagePlaceholder label="Who Should Choose Ponant?" />
                            </div>
                            <ul className="svp-choose-list">
                                {svpChoosePonant.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={17} className="svp-choose-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK WITH TRIPS & SHIPS ── */}
            <section className="svp-whybook-section">
                <div className="svp-whybook-container">
                    <span className="svp-eyebrow">YOUR LUXURY EXPEDITION SPECIALISTS</span>
                    <h2 className="svp-section-heading">Why Book with Trips &amp; Ships Luxury Travel?</h2>
                    <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    <p className="svp-whybook-lead">Luxury expedition cruises require expert planning to ensure you choose the right ship, itinerary, and accommodations.</p>
                    <p className="svp-whybook-sub">When you book with Trips &amp; Ships Luxury Travel, you'll receive:</p>

                    <div className="svp-whybook-grid">
                        {svpWhyBook.map(({ Icon, text }, idx) => (
                            <div key={idx} className="svp-whybook-item">
                                <div className="svp-whybook-icon"><Icon size={20} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES ── */}
            <section className="svp-editorial-section">
                <div className="svp-editorial-container">
                    <div className="svp-editorial-card">

                        <div className="svp-editorial-image-side">
                            <SvpImagePlaceholder label="Angela Hughes — Luxury Travel Expert" />
                            <div className="svp-editorial-stats">
                                <div className="svp-editorial-stat-item">
                                    <span className="svp-editorial-stat-number">40+</span>
                                    <span className="svp-editorial-stat-label">Years Experience</span>
                                </div>
                                <div className="svp-editorial-stat-divider"></div>
                                <div className="svp-editorial-stat-item">
                                    <span className="svp-editorial-stat-number">121+</span>
                                    <span className="svp-editorial-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="svp-editorial-content-side">
                            <div className="svp-editorial-badge">
                                <Award size={16} />
                                <span>Angela Hughes: Luxury Cruise Expertise</span>
                            </div>
                            <h2 className="svp-editorial-title">Trusted Guidance From an Industry Leader</h2>
                            <div className="svp-editorial-bar"></div>

                            <p className="svp-editorial-text">Angela Hughes has spent more than 40 years helping travelers discover the world's most extraordinary destinations.</p>

                            <div className="svp-editorial-services">
                                <span className="svp-editorial-services-label">Her credentials include:</span>
                                <div className="svp-editorial-services-list">
                                    {[
                                        'Founder of Luxury Travel University',
                                        'Visited more than 121 countries',
                                        'Luxury Travel Influencer of the Year',
                                        'Travel Leaders Network Advisory Board Member',
                                        'International travel educator',
                                        'Weekly travel columnist'
                                    ].map((item, idx) => (
                                        <div key={idx} className="svp-editorial-pill">
                                            <CheckCircle size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="svp-editorial-text">Her extensive experience helps travelers confidently choose the luxury expedition cruise that best fits their travel style.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CONCLUSION ── */}
            <section className="svp-final-section">
                <div className="svp-final-bg"></div>
                <div className="svp-final-container">

                    <div className="svp-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="svp-final-eyebrow-text">CONCLUSION</span>
                    </div>

                    <h2 className="svp-final-heading">Two Distinct Paths to <br /> Luxury Expedition Travel</h2>
                    <div className="svp-final-separator"></div>

                    <div className="svp-final-card">
                        <p className="svp-final-body">Scenic and Ponant each offer exceptional luxury expedition experiences, but they cater to different travel styles.</p>
                        <p className="svp-final-body">Scenic stands out for its truly all-inclusive Discovery Yachts, butler service, and innovative exploration technology. Ponant distinguishes itself through French elegance, boutique ships, and immersive cultural expeditions.</p>
                        <p className="svp-final-body svp-final-emphasis">Whether you dream of exploring Antarctica, the Arctic, or the Mediterranean, both cruise lines provide unforgettable journeys filled with luxury, discovery, and personalized service.</p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="svp-faq-main-section">
                <div className="svp-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="svp-section-heading">Frequently Asked Questions</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>
                    <div className="svp-faq-list-wrapper">
                        {svpFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="svp-faq-individual-item"
                                onClick={() => svpToggleFaq(index)}
                            >
                                <div className="svp-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="svp-faq-toggle-icon">{svpActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {svpActiveFaq === index && (
                                    <p className="svp-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="svp-cta-main-section">
                <div className="svp-cta-bg-pattern-layer"></div>
                <div className="svp-cta-content-relative">
                    <div className="svp-cta-inner-wrapper">

                        <h2 className="svp-cta-heading-white">Ready to Choose Your Luxury Expedition?</h2>
                        <div className="svp-cta-separator-white"></div>

                        <p className="svp-cta-paragraph-white">
                            Whether Scenic's all-inclusive Discovery Yachts or Ponant's French boutique elegance calls to you, our specialists will match you with the ship, suite, and itinerary that fit your travel style.
                        </p>

                        <p className="svp-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers navigate every detail of luxury expedition cruising.
                        </p>

                        <div className="svp-cta-considerations-box">
                            <span className="svp-cta-considerations-title">Whether you are considering:</span>
                            <ul className="svp-cta-considerations-list">
                                {[
                                    'Scenic Eclipse expedition voyages',
                                    'Ponant French boutique expeditions',
                                    'Antarctica and polar itineraries',
                                    'Cultural and environmental exploration cruises',
                                    'Suite upgrades and exclusive offers'
                                ].map((item, idx) => (
                                    <li key={idx} className="svp-cta-considerations-item">
                                        <CheckCircle size={16} className="svp-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="svp-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="svp-cta-button-group">
                            <Link to='/contact' className="svp-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="svp-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Luxury Expedition Cruises
                            </button>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ScenicVsPonant