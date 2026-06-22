import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Utensils, Award,
    GraduationCap,
    Mountain, Wine, Building, TreePine, Snowflake, Sun,
    Clock, Mic, FileText
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image Placeholders - Replace with your actual paths
import hero1 from '../../assets/VikingRhineRiverCruises/hero-budapest.jpg'
import hero2 from '../../assets/VikingRhineRiverCruises/hero-expedition-ship-1.jpg'
import hero3 from '../../assets/VikingRhineRiverCruises/hero-expedition-ship-2.jpg'
import rhineGetawayImg from '../../assets/VikingRhineRiverCruises/RhineGetaway.jpg'
import grandEuropeanImg from '../../assets/VikingRhineRiverCruises/GrandEuropeanTour.jpg'
import citiesOfLightImg from '../../assets/VikingRhineRiverCruises/CitiesofLight.jpg'
import amsterdamImg from '../../assets/VikingRhineRiverCruises/Amsterdam.jpg'
import cologneImg from '../../assets/VikingRhineRiverCruises/Cologne.jpg'
import koblenzImg from '../../assets/VikingRhineRiverCruises/Koblenz.jpg'
import strasbourgImg from '../../assets/VikingRhineRiverCruises/Strasbourg.jpg'
import baselImg from '../../assets/VikingRhineRiverCruises/Basel.jpg'
import rhineGorgeImg from '../../assets/VikingRhineRiverCruises/RhineGorge.jpg'
import vikingLongshipImg from '../../assets/VikingRhineRiverCruises/VikingLongships.jpg'
import Profile_AH from '../../assets/Media (2).jpg'
// import longshipImg from '../../assets/VikingRhineRiverCruises/viking-longship.jpg'

function VikingRhineRiverCruises() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [
        hero1,
        hero2,
        hero3
    ]

    useEffect(() => {
        if (mediHeroImages.length > 0) {
            const mediTimer = setInterval(() => {
                setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
            }, 5000)
            return () => clearInterval(mediTimer)
        }
    }, [mediHeroImages.length])

    const vikingItineraryImages = [rhineGetawayImg, grandEuropeanImg, citiesOfLightImg]

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const vikingFaqs = [
        {
            question: "What is the most popular Viking Rhine River Cruise?",
            answer: "The Rhine Getaway is Viking's most popular Rhine itinerary, sailing between Amsterdam and Basel."
        },
        {
            question: "How long is a Viking Rhine River Cruise?",
            answer: "Most itineraries range from 8 to 15 days, depending on the route."
        },
        {
            question: "What countries are visited on Rhine cruises?",
            answer: "Common destinations include the Netherlands, Germany, France, and Switzerland."
        },
        {
            question: "What is included in a Viking Rhine River Cruise?",
            answer: "Accommodations, meals, guided shore excursions, onboard enrichment, and Wi-Fi are generally included."
        },
        {
            question: "Is airfare included with Viking cruises?",
            answer: "Airfare may be available through Viking promotions but is not always included."
        },
        {
            question: "Which Rhine River itinerary is best for first-time travelers?",
            answer: "The Rhine Getaway is often recommended for first-time river cruisers."
        },
        {
            question: "Are Viking Rhine cruises adults only?",
            answer: "Yes. Viking River Cruises are designed primarily for adult travelers."
        },
        {
            question: "What is the best month to cruise the Rhine River?",
            answer: "May, June, September, and October are among the most popular months."
        },
        {
            question: "Are shore excursions included?",
            answer: "Yes. Viking includes at least one guided excursion in every port."
        },
        {
            question: "How many passengers are on Viking Longships?",
            answer: "Most Viking Longships accommodate approximately 190 guests."
        },
        {
            question: "Is the Rhine River scenic?",
            answer: "Yes. The Rhine Gorge is considered one of Europe's most beautiful river cruise regions."
        },
        {
            question: "What should I pack for a Rhine River Cruise?",
            answer: "Comfortable walking shoes, layered clothing, smart casual attire, and weather-appropriate outerwear."
        },
        {
            question: "Are drinks included on Viking Rhine cruises?",
            answer: "Beer, wine, and soft drinks are generally included with lunch and dinner."
        },
        {
            question: "Do Viking Rhine cruises visit castles?",
            answer: "Yes. Many itineraries feature castle viewing and castle-focused excursions."
        },
        {
            question: "How far in advance should I book?",
            answer: "Booking 12–18 months in advance often provides the best cabin selection and promotional pricing."
        }
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/viking-rhine-river-cruises",
                "url": "https://www.tripsandships.com/viking-rhine-river-cruises",
                "name": "Viking Rhine River Cruises",
                "headline": "Viking Rhine River Cruises | Rhine Getaway & Grand European Cruises",
                "description": "Explore Viking Rhine River Cruises through Germany, France, Switzerland, and the Netherlands with expert planning from Trips & Ships Luxury Travel.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" }
            },
            {
                "@type": "TravelAgency",
                "@id": "#trips-ships",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "description": "Luxury travel agency specializing in Viking River Cruises, European river cruise planning, and luxury Rhine River vacations.",
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ],
                "founder": { "@id": "#angela-hughes" }
            },
            {
                "@type": "Organization",
                "@id": "#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "@id": "#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
                "worksFor": { "@id": "#trips-ships" }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsandships.com/river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Viking Rhine River Cruises", "item": "https://www.tripsandships.com/viking-rhine-river-cruises" }
                ]
            },
            {
                "@type": "Article",
                "headline": "Viking Rhine River Cruises",
                "description": "Expert guide to Viking Rhine River Cruises covering itineraries, destinations, excursions, dining, and why travelers choose Viking for European river cruising.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" },
                "keywords": [
                    "Viking Rhine River Cruises",
                    "Viking Rhine Getaway",
                    "Viking River Cruises Rhine",
                    "Rhine River Cruises Europe",
                    "Viking Grand European Tour",
                    "Luxury Rhine River Cruises",
                    "Rhine River Cruise Vacations",
                    "Best Rhine River Cruises",
                    "Viking Cruises Rhine River",
                    "Rhine River Cruise Itinerary"
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": vikingFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking Rhine River Cruises | Rhine Getaway & Grand European Cruises</title>
                <meta
                    name="title"
                    content="Viking Rhine River Cruises | Rhine Getaway & Grand European Cruises"
                />
                <meta
                    name="description"
                    content="Explore Viking Rhine River Cruises through Germany, France, Switzerland, and the Netherlands. Discover itineraries, destinations, excursions, pricing, and expert planning from Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Viking Rhine River Cruises, Viking Rhine Getaway, Viking River Cruises Rhine, Rhine River Cruises Europe, Viking Grand European Tour, Luxury Rhine River Cruises, Rhine River Cruise Vacations, Best Rhine River Cruises, Viking Cruises Rhine River, Viking Longships, Rhine Gorge cruise, Amsterdam to Basel cruise, European river cruises, Viking river cruise pricing, Rhine Valley vineyards, medieval castle cruises, Rhine Christmas market cruise" />
                <link rel="canonical" href="https://www.tripsandships.com/viking-rhine-river-cruises" />
                <script type="application/ld+json">
                    {JSON.stringify(vikingSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
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
                        <Anchor size={16} />
                        <span>European River Cruises, Castles & Cultural Immersion</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Viking Rhine River Cruises
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        maxWidth: '700px',
                        margin: '20px auto 0',
                        lineHeight: '1.6',
                        textAlign: 'center'
                    }}>
                        Explore Europe's most scenic waterway through Switzerland, Germany, France, and the Netherlands.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO SECTION ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
                    .medi-immersion-card-item:hover .medi-immersion-icon-box {
                        background-color: #274472 !important;
                        border-color: #274472 !important;
                        transform: scale(1.1);
                    }
                    .medi-immersion-card-item:hover .medi-immersion-icon-box svg {
                        stroke: #ffffff !important;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
                    .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover { background: rgba(39, 68, 114, 0.4); }
                `}</style>

                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr',
                        gap: '60px',
                        alignItems: 'start'
                    }}>

                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block', fontSize: '12px', fontWeight: '700',
                                color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
                            }}>
                                Europe's Most Icon River
                            </span>

                            <h2 className="medi-premium-heading" style={{
                                color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2', margin: '0 0 20px 0'
                            }}>
                                Viking Rhine River Cruises: Explore Europe's Most Scenic Waterway
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px', height: '3px', background: '#3b82f6',
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                A Rhine River cruise is one of Europe's most iconic travel experiences.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Flowing through Switzerland, Germany, France, and the Netherlands, the Rhine River connects charming medieval villages, storybook castles, world-famous vineyards, and some of Europe's most fascinating cities.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Among the many river cruise options available, Viking Rhine River Cruises consistently rank among the most popular choices for travelers seeking comfort, cultural enrichment, and immersive destination experiences.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                                At Trips & Ships Luxury Travel, we help travelers select the ideal Viking Rhine itinerary based on their interests, travel style, and vacation goals. Whether you're considering the classic Rhine Getaway or the legendary Grand European Tour, Viking offers unforgettable journeys through the heart of Europe.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                                    What Viking River Voyages Emphasize:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px', textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Cultural Immersion", i: <Globe size={20} /> },
                                        { t: "Regional Cuisine", i: <Utensils size={20} /> },
                                        { t: "Guided Sightseeing", i: <MapPin size={20} /> },
                                        { t: "Comfortable Accommodations", i: <Gem size={20} /> },
                                        { t: "Educational Enrichment", i: <GraduationCap size={20} /> },
                                        { t: "Smaller Ship Experiences", i: <Ship size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>
                                                {item.i}
                                            </div>
                                            <span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Signature Expert Block */}
                        <div className="medi-premium-signature-panel" style={{
                            marginTop: window.innerWidth <= 1024 ? '40px' : '0',
                            borderLeftColor: '#274472'
                        }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}>
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                                    At Trips & Ships Luxury Travel, we help travelers discover the best of European river cruising with Viking — from medieval castles and world-class vineyards to historic cities and unforgettable cultural experiences.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes helps travelers plan Viking Rhine cruises that deliver meaningful European exploration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY THE RHINE RIVER IS SO POPULAR ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Europe's Most Beautiful Waterway
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            What Makes the Rhine River So Popular?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>
                            The Rhine is often considered Europe's most beautiful river cruise route. Along the journey, travelers experience an extraordinary diversity of landscapes, cultures, and history.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Star size={20} style={{ color: '#3b82f6' }} /> Highlights Along the Rhine
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {[
                                    { text: "Medieval Castles", icon: <Crown size={18} /> },
                                    { text: "Historic Cities", icon: <Building size={18} /> },
                                    { text: "Scenic Vineyards", icon: <Wine size={18} /> },
                                    { text: "UNESCO World Heritage Sites", icon: <Award size={18} /> },
                                    { text: "Cultural Diversity", icon: <Globe size={18} /> },
                                    { text: "Rhine Gorge Scenery", icon: <Mountain size={18} /> },
                                    { text: "Regional Cuisine", icon: <Utensils size={18} /> },
                                    { text: "Wine Country", icon: <TreePine size={18} /> }
                                ].map((pill, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                        <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                                        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                                    The Viking Difference
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                                    Viking has become one of the most recognized names in river cruising thanks to its destination-focused approach. Travelers appreciate Viking's ability to combine luxury with meaningful exploration.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Destination-focused itineraries", "Cultural enrichment programs", "Included shore excursions", "Regionally inspired cuisine"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                                            <CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                                        "Viking river voyages emphasize cultural immersion, regional cuisine, and educational enrichment."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ITINERARY SHOWCASE ═══════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CRUISE PLANNING GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Most Popular Viking Rhine Itineraries</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>
                            Viking offers several Rhine River itineraries, each showcasing different aspects of European culture, history, and scenery.
                        </p>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["Rhine Getaway", "Grand European Tour", "Cities of Light"].map((title, idx) => (
                                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`} onClick={() => setMediSelectedItinerary(idx)}>
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                                {vikingItineraryImages[mediSelectedItinerary] && (
                                    <img src={vikingItineraryImages[mediSelectedItinerary]} alt={["Rhine Getaway", "Grand European Tour", "Cities of Light"][mediSelectedItinerary]} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                )}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">ITINERARY SPOTLIGHT</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {["Rhine Getaway", "Grand European Tour", "Cities of Light"][mediSelectedItinerary]}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Quick Facts:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                ["8 Days — Amsterdam to Basel or reverse", "Netherlands, Germany, France, Switzerland", "Ideal for first-time river cruisers"],
                                                ["15 Days — Amsterdam to Budapest", "Rhine, Main, and Danube Rivers", "Netherlands, Germany, Austria, Slovakia, Hungary"],
                                                ["Paris & Rhine combination", "Culture, art, and culinary exploration", "France and Rhine regions"]
                                            ][mediSelectedItinerary].map((feature, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[
                                                ["Amsterdam Canals", "Cologne Cathedral", "Rhine Gorge Castles", "Black Forest", "Basel"],
                                                ["Multiple Rivers", "Vienna", "Budapest", "Passau", "Durnstein"],
                                                ["Paris", "Rhine Valley", "French Cuisine", "Art & Culture"]
                                            ][mediSelectedItinerary].map((tag, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{tag}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ fontSize: '15px', color: '#64748b', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
                                        {mediSelectedItinerary === 0 && "The Rhine Getaway is ideal for first-time river cruisers."}
                                        {mediSelectedItinerary === 1 && "One of Viking's most popular itineraries, combining multiple European rivers into a single voyage."}
                                        {mediSelectedItinerary === 2 && "This itinerary combines Paris with portions of the Rhine experience and appeals to travelers seeking culture, art, and culinary exploration."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION 1: VIKING RHINE EXPERIENCE ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            See It In Motion
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Experience Viking on the Rhine
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
                            Discover what it's like to sail through Europe's most breathtaking river landscapes aboard a Viking Longship. From medieval castles to charming villages, every moment on the Rhine is unforgettable.
                        </p>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/bx9p-BM2Dos"
                            title="Viking Rhine River Cruises"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DESTINATIONS ALONG THE RHINE ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
                    .viking-dest-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-auto-rows: 420px;
                        gap: 24px;
                        max-width: 1240px;
                        margin: 0 auto;
                    }
                    .viking-dest-item {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: #1c2f4a;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .viking-dest-item:hover .viking-dest-img {
                        transform: scale(1.08);
                    }
                    .viking-dest-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(10,17,32,1) 0%, rgba(10,17,32,0.85) 30%, rgba(10,17,32,0.2) 60%, transparent 100%);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: flex-start;
                        padding: clamp(24px, 5vw, 45px) clamp(20px, 4vw, 35px);
                        color: #ffffff;
                        z-index: 2;
                        text-align: left;
                    }
                    .viking-dest-tag { font-size: clamp(10px, 2vw, 11px); font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #60a5fa; margin-bottom: 10px; }
                    .viking-dest-title { font-size: clamp(20px, 3vw, 24px); font-weight: 700; margin: 0 0 12px 0; line-height: 1.2; color: #ffffff; text-shadow: 0 2px 15px rgba(0,0,0,0.8); }
                    .viking-dest-desc { font-size: clamp(14px, 2vw, 15px); color: rgba(255,255,255,0.95); line-height: 1.6; margin: 0; font-weight: 400; max-width: 400px; }
                    @media (max-width: 1024px) { .viking-dest-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 380px; } }
                    @media (max-width: 650px) { .viking-dest-grid { grid-template-columns: 1fr; grid-auto-rows: 340px; gap: 16px; } .viking-dest-overlay { padding: 30px 20px; } .viking-dest-desc { max-width: 100%; } }
                    @media (max-width: 380px) { .viking-dest-grid { grid-auto-rows: 310px; } .viking-dest-title { font-size: 19px; } }
                `}</style>

                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>
                        Port Cities & Cultural Gems
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Destinations Along the Rhine
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="viking-dest-grid">
                    {[
                        { tag: "Netherlands", title: "Amsterdam", desc: "Canal cruises, museums, historic architecture, and local markets. Many Rhine cruises begin or end here.", img: amsterdamImg },
                        { tag: "Germany", title: "Cologne", desc: "Home to the famous Cologne Cathedral, one of Europe's most impressive Gothic landmarks. Old Town, beer halls, and riverfront promenades.", img: cologneImg },
                        { tag: "Germany", title: "Koblenz", desc: "Where the Rhine and Moselle Rivers meet. Historic fortresses, scenic viewpoints, and wine culture.", img: koblenzImg },
                        { tag: "France", title: "Strasbourg", desc: "Half-timbered houses, French cuisine, Alsatian culture, and Gothic architecture. One of the Rhine's most beautiful destinations.", img: strasbourgImg },
                        { tag: "Switzerland", title: "Basel", desc: "A popular embarkation city known for museums, historic Old Town, Swiss culture, and easy access to the Alps.", img: baselImg },
                        { tag: "UNESCO Heritage", title: "Rhine Gorge", desc: "Hilltop castles, vineyards, medieval villages, and dramatic river scenery. The most photographed section of any European river cruise.", img: rhineGorgeImg }
                    ].map((dest, idx) => (
                        <div key={idx} className="viking-dest-item">
                            <img src={dest.img} alt={dest.title} className="viking-dest-img" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, transition: 'transform 0.8s ease' }} />
                            <div className="viking-dest-overlay">
                                <span className="viking-dest-tag">{dest.tag}</span>
                                <h3 className="viking-dest-title">{dest.title}</h3>
                                <p className="viking-dest-desc">{dest.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ VIKING LONGSHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Ship Image */}
                    <div style={{
                        width: '100%',
                        height: window.innerWidth <= 600 ? '220px' : '360px',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        overflow: 'hidden',
                        marginBottom: '50px',
                        position: 'relative',
                        backgroundColor: '#0f1c2e'
                    }}>
                        <img src={vikingLongshipImg} alt="Viking Longship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            background: 'linear-gradient(to top, rgba(15,28,46,0.95) 0%, transparent 100%)',
                            padding: '30px', color: '#ffffff', zIndex: 2
                        }}>
                            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', color: '#60a5fa', display: 'block', marginBottom: '8px' }}>The Ship Experience</span>
                            <h2 style={{ color: '#ffffff', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '700', margin: 0, letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                                Viking Longships
                            </h2>
                        </div>
                    </div>

                    <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6', textAlign: 'center' }}>
                        Most Rhine itineraries operate aboard Viking Longships, featuring elegant Scandinavian design and thoughtful amenities.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', marginBottom: '24px' }}>Ship Features</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    { text: "Scandinavian Design — clean lines and elegant interiors", icon: <Gem size={18} /> },
                                    { text: "Aquavit Terrace — indoor-outdoor dining unique to Viking", icon: <Utensils size={18} /> },
                                    { text: "Panoramic Views — large windows throughout the ship", icon: <Ship size={18} /> },
                                    { text: "Approximately 190 guests per Longship", icon: <Users size={18} /> }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', fontSize: '16px', color: '#1e293b', fontWeight: '500' }}>
                                        <div style={{ color: '#3b82f6', display: 'flex', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ backgroundColor: '#0f1c2e', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#3b82f6', marginBottom: '24px' }}>Stateroom Options</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {["Veranda Staterooms", "French Balcony Rooms", "Explorer Suites"].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                                    "Choosing the right stateroom can significantly impact your overall experience."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DINING ON VIKING RHINE CRUISES ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Culinary Excellence
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Dining on Viking Rhine Cruises
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Viking emphasizes regional cuisine inspired by destinations along the route. Dining is open seating, encouraging flexibility and social interaction.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}>
                                <Utensils size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Regional Cuisine</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Destination-Inspired Menus</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Menus reflect the regions you travel through, featuring locally sourced ingredients and traditional preparations.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["German specialties", "French cuisine", "Swiss dishes", "Local wines", "Seasonal ingredients"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}>
                                <MapPin size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Shore Excursions</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Included In Every Port</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Every Viking Rhine River Cruise includes guided tours. Popular excursions may include:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Amsterdam Walking Tours", "Cologne Cathedral Visits", "Strasbourg City Tours", "Black Forest Excursions", "Wine Tastings", "Castle Visits"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION 2: SCENIC RHINE JOURNEY ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            A Journey Through Europe
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            The Rhine River Like Never Before
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
                            From the vineyards of the Rhine Gorge to the historic streets of Amsterdam and Basel, experience the beauty and culture that make this waterway one of Europe's most cherished travel destinations.
                        </p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(15, 28, 46, 0.15)', border: '1px solid #e2e8f0', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/mm-TtRkvDwc"
                            title="Rhine River Scenic Journey"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BEST TIME FOR A VIKING RHINE RIVER CRUISE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Seasonal Guide
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Best Time for a Viking Rhine River Cruise
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '24px' }}>
                        {[
                            { season: 'Spring (April\u2013May)', desc: 'Mild weather, blooming landscapes, fewer crowds.', icon: <Sun size={24} /> },
                            { season: 'Summer (June\u2013August)', desc: 'Longer days, outdoor activities, peak travel season.', icon: <Calendar size={24} /> },
                            { season: 'Fall (September\u2013October)', desc: 'Harvest season, wine tasting, colorful scenery.', icon: <Wine size={24} /> },
                            { season: 'Christmas Market Cruises', desc: 'Holiday markets, festive decorations, local traditions, seasonal cuisine.', icon: <Snowflake size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'flex-start' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: '0 0 8px' }}>{item.season}</h4>
                                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHO SHOULD TAKE ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                        Is This You?
                    </span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                        Who Should Take a Viking Rhine River Cruise?
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 40px', borderRadius: '10px' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {[
                            'Couples',
                            'Retirees',
                            'First-time river cruisers',
                            'History enthusiasts',
                            'Wine lovers',
                            'Cultural travelers',
                            'Multi-generational adults',
                            'Luxury travelers seeking relaxed exploration'
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '14px 24px', backgroundColor: '#f8fafc',
                                borderRadius: '60px', border: '1px solid #e2e8f0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY BOOK WITH TRIPS & SHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Expert Guidance
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Book Your Viking Rhine Cruise with <br />Trips & Ships Luxury Travel?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Choosing the right itinerary, sailing date, and stateroom can significantly impact your overall experience.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: 'Personalized Planning', desc: 'Personalized cruise planning, Viking itinerary guidance, and expert support before and after travel.', icon: <Star size={24} /> },
                            { title: 'Travel Coordination', desc: 'Airfare coordination, pre- and post-cruise planning, and travel protection recommendations.', icon: <Globe size={24} /> },
                            { title: 'Decades of Expertise', desc: 'With decades of luxury travel expertise, we help travelers maximize the value of their European river cruise vacation.', icon: <Award size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)', textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <style>{`
                    .medi-authority-section {
                        background: #f1f5f9;
                        position: relative;
                        overflow: hidden;
                        padding: 100px 20px;
                        border-bottom: 1px solid #e2e8f0;
                        font-family: 'Inter', -apple-system, sans-serif;
                    }

                    .medi-authority-section::before {
                        content: '';
                        position: absolute;
                        width: 800px;
                        height: 800px;
                        border-radius: 50%;
                        background: radial-gradient(circle, #ffffff 0%, transparent 70%);
                        top: -300px;
                        right: -200px;
                        pointer-events: none;
                        z-index: 1;
                        opacity: 0.5;
                    }

                    .medi-authority-container {
                        max-width: 1100px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 2;
                    }

                    .medi-authority-header-block {
                        text-align: center;
                        margin-bottom: 60px;
                    }

                    .medi-authority-eyebrow {
                        display: inline-block;
                        font-size: 13px;
                        font-weight: 700;
                        letter-spacing: 0.25em;
                        color: #274472;
                        margin-bottom: 16px;
                        text-transform: uppercase;
                    }

                    .medi-prestige-plaque-wrapper {
                        display: flex;
                        flex-direction: row;
                        background: #ffffff;
                        border-radius: 32px;
                        border: 1px solid #e2e8f0;
                        box-shadow: 0 40px 90px rgba(15, 28, 46, 0.05);
                        overflow: hidden;
                        position: relative;
                        height: 580px;
                    }

                    .medi-prestige-plaque-wrapper::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 8px;
                        height: 100%;
                        background: linear-gradient(to bottom, #274472, #274472cc);
                    }

                    .medi-prestige-identity-card {
                        flex: 0 0 350px;
                        background: linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 100%);
                        padding: 40px 30px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        color: #ffffff;
                        position: relative;
                        height: 100%;
                    }

                    .medi-prestige-seal-ring {
                        width: 100px !important;
                        height: 100px !important;
                        border-radius: 50% !important;
                        border: none !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        margin-bottom: 24px !important;
                        position: relative !important;
                        animation: none !important;
                    }

                    .medi-prestige-rotating-border {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        border-radius: 50%;
                        border: 2px dashed rgba(255, 255, 255, 0.2);
                        animation: slow-spin 30s linear infinite;
                        z-index: 1;
                    }

                    .medi-prestige-seal-ring img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 2px solid rgba(255, 255, 255, 0.2);
                        position: relative;
                        z-index: 2;
                    }

                    @keyframes slow-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }

                    .medi-prestige-initials {
                        font-size: 28px;
                        font-weight: 500;
                        letter-spacing: 0.1em;
                        color: #eff6ff;
                        animation: reverse-spin 30s linear infinite;
                    }

                    @keyframes reverse-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(-360deg); }
                    }

                    .medi-prestige-label {
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.2em;
                        color: #cbd5e1;
                        text-transform: uppercase;
                        margin-bottom: 10px;
                    }

                    .medi-prestige-name {
                        font-size: 28px;
                        font-family: serif;
                        font-weight: 500;
                        color: #ffffff;
                        margin: 0 0 12px 0;
                        line-height: 1.2;
                    }

                    .medi-prestige-role-pill {
                        background: rgba(39, 68, 114, 0.2);
                        border: 1px solid rgba(39, 68, 114, 0.3);
                        padding: 6px 14px;
                        border-radius: 30px;
                        font-size: 13px;
                        font-weight: 600;
                        color: #eff6ff;
                        margin-bottom: 24px;
                    }

                    .medi-prestige-meta-box {
                        width: 100%;
                        position: relative;
                        padding-top: 20px;
                    }

                    .medi-prestige-meta-line {
                        width: 50px;
                        height: 1px;
                        background: rgba(255, 255, 255, 0.15);
                        margin: 0 auto 16px;
                    }

                    .medi-prestige-meta-text {
                        font-size: 12px;
                        color: #cbd5e1;
                        opacity: 0.7;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                    }

                    .medi-prestige-credentials-column {
                        flex: 1;
                        padding: 40px;
                        background: #ffffff;
                        overflow-y: auto;
                        height: 100%;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar {
                        width: 6px;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar-track {
                        background: #eff6ff;
                        border-radius: 4px;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar-thumb {
                        background: #274472cc;
                        border-radius: 4px;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar-thumb:hover {
                        background: #274472;
                    }

                    .medi-prestige-list {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                    }

                    .medi-prestige-item-card {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        padding: 16px 24px;
                        border-radius: 14px;
                        background: #ffffff;
                        border: 1px solid #eff6ff;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        position: relative;
                        overflow: hidden;
                    }

                    .medi-prestige-item-accent-bar {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 4px;
                        height: 100%;
                        background: #274472;
                        transform: scaleY(0);
                        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        transform-origin: bottom;
                    }

                    .medi-prestige-item-card:hover {
                        transform: translateX(6px);
                        box-shadow: 0 10px 24px rgba(15, 28, 46, 0.04);
                        border-color: rgba(39, 68, 114, 0.3);
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-accent-bar {
                        transform: scaleY(1);
                    }

                    .medi-prestige-item-icon-box {
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                        background: #eff6ff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #274472;
                        flex-shrink: 0;
                        transition: all 0.4s ease;
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-icon-box {
                        background: #274472;
                        color: #ffffff;
                        transform: scale(1.05);
                    }

                    .medi-prestige-item-content {
                        display: flex;
                        flex-direction: column;
                        gap: 2px;
                    }

                    .medi-prestige-item-category {
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.15em;
                        color: #274472;
                        opacity: 0.6;
                        text-transform: uppercase;
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-category {
                        color: #274472;
                        opacity: 0.9;
                    }

                    .medi-prestige-item-text {
                        font-size: 15px;
                        font-weight: 500;
                        color: #0f1c2e;
                        margin: 0;
                        line-height: 1.5;
                        transition: color 0.3s ease;
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-text {
                        color: #274472;
                    }

                    @media (max-width: 992px) {
                        .medi-prestige-plaque-wrapper {
                            flex-direction: column;
                            height: auto;
                        }

                        .medi-prestige-plaque-wrapper::before {
                            width: 100%;
                            height: 6px;
                        }

                        .medi-prestige-identity-card {
                            flex: 1 0 auto;
                            padding: 40px 24px;
                            height: auto;
                        }

                        .medi-prestige-credentials-column {
                            padding: 30px 20px;
                            height: 400px;
                        }

                        .medi-prestige-item-card {
                            padding: 14px 20px;
                            gap: 14px;
                        }
                    }

                    @media (max-width: 767px) {
                        .medi-authority-header-block {
                            margin-bottom: 40px;
                        }

                        .medi-authority-eyebrow {
                            font-size: 11px;
                            letter-spacing: 0.16em;
                            margin-bottom: 12px;
                        }

                        .medi-prestige-plaque-wrapper {
                            border-radius: 20px;
                        }

                        .medi-prestige-identity-card {
                            padding: 28px 18px;
                        }

                        .medi-prestige-seal-ring {
                            width: 80px;
                            height: 80px;
                            margin-bottom: 16px;
                        }

                        .medi-prestige-initials {
                            font-size: 22px;
                        }
                        
                        .medi-authority-section {
                            padding: 50px 10px !important;
                        }
                        .medi-authority-container {
                            padding: 0 !important;
                        }
                        .medi-authority-eyebrow {
                            font-size: 11px !important;
                            letter-spacing: 1.5px !important;
                        }
                        .medi-prestige-plaque-wrapper {
                            gap: 24px !important;
                        }
                        .medi-prestige-identity-card {
                            padding: 24px 14px !important;
                            border-radius: 16px !important;
                        }
                        .medi-prestige-seal-ring {
                            width: 80px !important;
                            height: 80px !important;
                            border: none !important;
                            animation: none !important;
                        }
                        .medi-prestige-seal-ring img {
                            width: 64px !important;
                            height: 64px !important;
                        }
                        .medi-prestige-name {
                            font-size: 20px !important;
                        }
                        .medi-prestige-role-pill {
                            font-size: 12px !important;
                            padding: 6px 14px !important;
                        }
                    }
                `}</style>
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <div className="medi-prestige-rotating-border"></div>
                                <img src={Profile_AH} alt="Angela Hughes" />
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
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "40+ years in luxury travel", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury river and ocean cruise specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
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

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Viking Rhine River Cruises:<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {vikingFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                                <div className="medi-faq-question-row">
                                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text" style={{ padding: '20px 0', color: '#475569', lineHeight: '1.6' }}>
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ RELATED VIKING CRUISES ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Explore More
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Related Viking River Cruises
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '24px' }}>
                        {[
                            { title: 'Viking River Cruises', desc: 'Explore the complete range of Viking river cruise options across Europe.', path: '/viking-river-cruises', icon: <Ship size={24} /> },
                            { title: 'Viking Danube River Cruises', desc: 'Discover the majestic Danube River through Central and Eastern Europe.', path: '/viking-danube-river-cruises', icon: <Anchor size={24} /> },
                            { title: 'Viking Christmas Market Cruises', desc: 'Experience magical holiday markets along Europe\'s festive rivers.', path: '/viking-christmas-market-cruises', icon: <Snowflake size={24} /> },
                            { title: 'Viking Cruise Cost Guide', desc: 'Learn about pricing, inclusions, and value for Viking river cruises.', path: '/viking-cruise-cost-guide', icon: <Award size={24} /> }
                        ].map((item, i) => (
                            <Link key={i} to={item.path} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: window.innerWidth <= 360 ? '18px' : '24px',
                                    padding: window.innerWidth <= 360 ? '24px 20px' : '32px 28px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 12px rgba(15, 28, 46, 0.06)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 28, 46, 0.12)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 28, 46, 0.06)';
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            {item.icon}
                                        </div>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>{item.title}</h3>
                                    </div>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>
                                        <span>Learn More</span>
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="viking-rhine-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Ready to Experience the <br /> Rhine River?
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            A Viking Rhine River Cruise combines breathtaking scenery, rich history, exceptional cuisine, and immersive cultural experiences into one unforgettable European vacation.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether you're planning your first river cruise or adding another destination to your travel portfolio, the Rhine remains one of the world's most rewarding journeys.
                        </p>

                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                                Plan your perfect Rhine cruise:
                            </span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {[
                                    'Rhine Getaway itinerary',
                                    'Grand European Tour',
                                    'Christmas Market cruise',
                                    'First-time river cruise experience',
                                    'Wine and culinary voyage'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                                        <span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips & Ships Luxury Travel today to find the perfect Viking Rhine River Cruise itinerary.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Viking Rhine Cruise Consultation Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingRhineRiverCruises