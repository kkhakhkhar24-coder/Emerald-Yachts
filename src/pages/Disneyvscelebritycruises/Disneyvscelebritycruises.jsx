import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import Profile_AH from '../../assets/DisneyLuxuryCruise/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/Media (1).jpg'

import {
    Ship, MapPin, Star, Clock, Users , CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, ChevronLeft, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music, Mic, FileText, GraduationCap,
    Theater, Waves, Coffee, Martini, Dumbbell, Zap, Camera
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

import disneyIntroImg from '../../assets/Disneyvsroyalcaribbean/disney-wish-grand-hall-atrium-balcony-view-live-entertainment.webp'
import celebrityIntroImg from '../../assets/DisneyConciergeWorthIt/disney-wish-the-rose-lounge-adults-only-luxury-seating.jpg'
import disneyShipIntroImg from '../../assets/Disneycruisebookingtimeline/disney-cruise-ship-docked-at-castaway-cay-aerial-view.jpg'
import celebrityShipIntroImg from '../../assets/Disneyvscelebritycruises/family-enjoying-ocean-views-from-disney-cruise-ship-deck-at-sunset.webp'


import hero1 from '../../assets/Disneyvscelebritycruises/disney-castaway-cay-mickey-minnie-mouse-beach-characters.jpg'
import hero2 from '../../assets/Disneyvscelebritycruises/isney-wish-the-rose-lounge-adults-only-luxury-seating.jpg'
import hero3 from '../../assets/Disneyvscelebritycruises/Disney Treasure Skipper Society.jpg'
import fleetImg1 from '../../assets/Disneyvscelebritycruises/disney-cruise-frozen-dining-adventure-elsa-restaurant-show.jpg'
import fleetImg2 from '../../assets/Disneyvscelebritycruises/disney-cruise-line-deck-activities-goofy-pluto-characters-family.jpg'
import unusedImg1 from '../../assets/Disneyvscelebritycruises/child-hugging-mickey-mouse-magic-kingdom-disney-world-family-vacation.jpg'
import unusedImg2 from '../../assets/Disneyvscelebritycruises/disney-cruise-castaway-cay-beach-family-vacation-minnie-mouse.jpg'
import unusedImg3 from '../../assets/Disneyvscelebritycruises/disney-cruise-line-family-deck-party-goofy-character.jpg'
import unusedImg4 from '../../assets/Disneyvscelebritycruises/disney-cruise-line-live-theater-hercules-musical-show.jpg'
import unusedImg5 from '../../assets/Disneyvscelebritycruises/disney-cruise-wonderland-cinema-movie-theater.jpg'
import unusedImg6 from '../../assets/Disneyvscelebritycruises/disney-destiny-cruise-incredibles-themed-sweet-shop-dessert.jpg'
import unusedImg7 from '../../assets/Disneyvscelebritycruises/disney-wish-sarabi-lounge-family-entertainment-venue-stage.jpg'
import unusedImg8 from '../../assets/Disneyvscelebritycruises/disney-wish-sarabi-lounge-interior-decor-modern-seating.jpg'



/* ════════════════════════════════════════════════════════════ */

function DisneyVsCelebrityCruises() {

    /* hero carousel */
    const heroImages = [hero1,hero2,hero3]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    /* FAQ accordion */
    const [activeFaq, setActiveFaq] = useState(null)

    /* comparison tab (ship overview) */ 
    const [activeTab, setActiveTab] = useState(0)

    /* detail comparison section active item */
    const [activeComparison, setActiveComparison] = useState(0)

    const faqs = [
        { question: 'Is Disney Cruise Line better than Celebrity Cruises?', answer: 'Neither is universally better. Disney excels for families, while Celebrity is generally preferred by adults and luxury travelers.' },
        { question: 'Which cruise line is better for adults?', answer: 'Celebrity Cruises offers a more adult-oriented atmosphere with upscale dining and nightlife.' },
        { question: 'Which cruise line is better for families?', answer: 'Disney Cruise Line is widely considered the best family cruise line in the world.' },
        { question: 'Does Disney Cruise Line have casinos?', answer: 'No. Disney ships do not feature casinos.' },
        { question: 'Does Celebrity Cruises have casinos?', answer: 'Yes. Celebrity ships include onboard casinos.' },
        { question: 'Which cruise line has better food?', answer: 'Celebrity Cruises generally receives higher ratings for culinary experiences and specialty dining.' },
        { question: 'Is Disney Cruise Line more expensive?', answer: 'In most cases, Disney cruises are priced higher than comparable Celebrity sailings.' },
        { question: 'Which cruise line has better entertainment?', answer: 'Disney Cruise Line is known for industry-leading entertainment and Broadway-style productions.' },
        { question: 'Are Disney cruises only for families?', answer: 'No. Many adults and couples sail Disney without children.' },
        { question: 'Which cruise line has better cabins?', answer: 'Celebrity offers more modern accommodations and luxury suite experiences.' },
        { question: 'What is Celebrity\'s Retreat?', answer: 'The Retreat is Celebrity\'s luxury suite-class experience with exclusive amenities and services.' },
        { question: 'Which cruise line is better for honeymooners?', answer: 'Celebrity Cruises is often preferred for honeymoons because of its romantic atmosphere.' },
        { question: 'Which cruise line has better private islands?', answer: 'Disney\'s Castaway Cay is considered one of the best private island experiences in cruising.' },
        { question: 'Which cruise line offers more destinations?', answer: 'Celebrity Cruises serves a larger variety of international destinations.' },
        { question: 'Which cruise line is best for first-time cruisers?', answer: 'Families often prefer Disney, while adults frequently choose Celebrity for a first cruise experience.' },
        { question: 'Which cruise line has better nightlife?', answer: 'Celebrity Cruises offers more extensive nightlife and evening entertainment options.' },
        { question: 'Which cruise line is more luxurious?', answer: 'Celebrity Cruises is generally considered the more luxurious brand overall.' },
        { question: 'Is Celebrity Cruises good for children?', answer: 'Yes, but Disney offers significantly more family-focused programming.' },
        { question: 'Which cruise line offers better value?', answer: 'For adults, Celebrity usually provides better value due to pricing and included amenities.' },
        { question: 'Should I choose Disney or Celebrity?', answer: 'Choose Disney for family-centered vacations and immersive entertainment. Choose Celebrity for luxury, dining, relaxation, and adult-focused travel.' },
    ]

    const comparisonSections = [
        {
            title: 'Dining',
            // img: DINING_IMG,
            disney: {
                headline: 'Rotational Dining & Themed Restaurants',
                points: ['Rotational dining concept', 'Themed restaurants with interactive experiences', 'Family-friendly menus', 'Palo – adults-only Italian', 'Enchanté – fine French dining', 'Remy – Ratatouille-inspired'],
                winner: false
            },
            celebrity: {
                headline: 'Premium Culinary Experiences',
                points: ['Multiple specialty restaurants', 'Fine dining experiences', 'International cuisine', 'Wine-focused venues', 'Fine Cut Steakhouse', 'Le Voyage by Daniel Boulud', 'Eden Restaurant'],
                winner: true
            }
        },
        {
            title: 'Entertainment',
            // img: ENTERTAINMENT_IMG,
            disney: {
                headline: 'Broadway-Level Productions',
                points: ['Broadway-style stage productions', 'Fireworks at sea', 'Character experiences', 'Deck parties', 'First-run Disney movies', 'Immersive themed events'],
                winner: true
            },
            celebrity: {
                headline: 'Sophisticated Live Entertainment',
                points: ['Live music performances', 'Production shows', 'Guest performers', 'Adult-focused nightlife', 'Rooftop events'],
                winner: false
            }
        },
        {
            title: 'Cabins & Suites',
            // img: LUXURY_IMG,
            disney: {
                headline: 'Family-Optimised Staterooms',
                points: ['Split bathrooms for families', 'Spacious family layouts', 'Connecting staterooms', 'Disney-themed décor'],
                winner: false
            },
            celebrity: {
                headline: 'Modern Luxury Design',
                points: ['Infinite verandas on Edge-class ships', 'Contemporary premium interiors', 'The Retreat suite-class experience', 'Penthouse & Sky Suites'],
                winner: true
            }
        },
        {
            title: 'Private Islands',
            // img: CASTAWAY_IMG,
            disney: {
                headline: 'Castaway Cay',
                points: ['Dedicated family beach areas', 'Adult-only beach section', 'Water activities & snorkelling', 'Disney character appearances', 'Consistently ranked #1 private island'],
                winner: true
            },
            celebrity: {
                headline: 'Perfect Day at CocoCay',
                points: ['Shared facility with Royal Caribbean fleet', 'Water park thrills', 'Overwater cabanas', 'Helium balloon experience'],
                winner: false
            }
        },
        {
            title: 'Destinations',
            // img: DESTINATIONS_IMG,
            disney: {
                headline: 'Caribbean & Key Destinations',
                points: ['Caribbean & Bahamas', 'Alaska', 'Mediterranean', 'Transatlantic voyages', 'Europe itineraries'],
                winner: false
            },
            celebrity: {
                headline: 'Global Coverage',
                points: ['Europe', 'Alaska', 'South America', 'Asia & Pacific', 'Australia & New Zealand', 'Antarctica expeditions'],
                winner: true
            }
        },
    ]

    const travelerTable = [
        { type: 'Families', winner: 'Disney' },
        { type: 'Couples', winner: 'Celebrity' },
        { type: 'Honeymooners', winner: 'Celebrity' },
        { type: 'Luxury Travelers', winner: 'Celebrity' },
        { type: 'Disney Fans', winner: 'Disney' },
        { type: 'Empty Nesters', winner: 'Celebrity' },
        { type: 'Multi-Generational Families', winner: 'Disney' },
        { type: 'Food Lovers', winner: 'Celebrity' },
        { type: 'Entertainment Lovers', winner: 'Disney' },
        { type: 'Adventure Travelers', winner: 'Celebrity' },
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "WebPage",
                "name": "Disney Cruise vs Celebrity Cruises",
                "url": "https://www.tripsandships.com/disney-cruise-vs-celebrity-cruises",
                "description": "Compare Disney Cruise Line and Celebrity Cruises for families, couples, adults, dining, entertainment, pricing, cabins, destinations, and overall value."
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.slice(0, 5).map(f => ({
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
                <title>Disney Cruise vs Celebrity Cruises | Complete Comparison Guide 2026</title>
                <meta name="title" content="Disney Cruise Line vs Celebrity Cruises: Which Is Best for You?" />
                <meta name="description" content="Compare Disney Cruise Line and Celebrity Cruises for families, couples, adults, dining, entertainment, pricing, cabins, destinations, and overall value." />
                <meta name="keywords" content="Disney Cruise vs Celebrity Cruises, Celebrity vs Disney Cruise, Best Cruise Line for Families, Best Cruise Line for Adults" />
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
                <div className="medi-hero-overlay-layer" />
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>2026 Cruise Line Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Disney Cruise vs Celebrity Cruises: Which Cruise Line Is Better in 2026?
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Both cruise lines deliver premium experiences. The right choice depends entirely on your travel style, budget, and vacation goals.
                    </p>

                    {/* Quick Verdict CTA Card */}
                    <div className="medi-hero-cta-container">
                        <p className="medi-cta-title-text">Quick Verdict at a Glance</p>
                        <p className="medi-cta-subtitle-text">Choose your cruise line based on what matters most to you</p>
                        <div className="medi-cta-features-row">
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>Families → Disney</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>Adults & Couples → Celebrity</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>Fine Dining → Celebrity</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>Entertainment → Disney</span>
                            </div>
                        </div>
                        <button className="medi-primary-cta-button">
                            <ArrowRight size={18} />
                            Compare in Detail
                        </button>
                        <p className="medi-hero-disclaimer-text">Unbiased expert analysis — updated for 2026</p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO / OVERVIEW — SPLIT-PANEL CARD LAYOUT WITH IMAGES
            ══════════════════════════════════ */}
            <section style={{
                background: 'var(--medi-bg-soft)',
                padding: '90px 24px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Badge, Title & Separator */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(39, 68, 114, 0.1)',
                            borderRadius: '30px',
                            padding: '6px 16px',
                            color: 'var(--medi-navy)',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '16px'
                        }}>
                            COMPLETE COMPARISON
                        </span>

                        <h2 className="medi-section-heading" style={{ margin: '0 0 16px 0', textAlign: 'center' }}>
                            Disney Cruise vs Celebrity Cruises: A Detailed Comparison
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Central Quote Block */}
                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto 40px',
                        background: 'var(--medi-bg-white)',
                        borderLeft: '4px solid var(--medi-navy)',
                        borderRadius: '0 16px 16px 0',
                        padding: '28px 32px',
                        boxShadow: '0 8px 30px rgba(39, 68, 114, 0.05)'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            color: 'var(--medi-navy)',
                            lineHeight: '1.7',
                            fontStyle: 'italic',
                            margin: 0
                        }}>
                            "Choosing between Disney Cruise Line and Celebrity Cruises can be surprisingly difficult — both deliver premium experiences, excellent service, quality dining, and beautiful ships. However, they cater to very different travelers."
                        </p>
                    </div>

                    {/* Bridge Statement */}
                    <p style={{
                        fontSize: '16px',
                        color: 'var(--medi-navy-light)',
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto 56px',
                        lineHeight: '1.8'
                    }}>
                        The right choice depends entirely on your travel style, budget, and vacation goals.
                    </p>

                    {/* Side-by-Side Photo Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '32px',
                        alignItems: 'stretch'
                    }}>
                        {/* Disney Column */}
                        <div style={{
                            background: 'var(--medi-bg-white)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid rgba(39, 68, 114, 0.1)',
                            boxShadow: '0 10px 30px rgba(39, 68, 114, 0.06)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Card Image */}
                            <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                                <img
                                    src={disneyIntroImg}
                                    alt="Disney Cruise Line Grand Hall Atrium"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    background: 'var(--medi-navy)',
                                    color: '#ffffff',
                                    padding: '8px 20px',
                                    borderRadius: '30px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    letterSpacing: '0.05em'
                                }}>
                                    DISNEY CRUISE LINE
                                </div>
                            </div>

                            {/* Card Body */}
                            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <p style={{
                                    fontSize: '16px',
                                    color: 'var(--medi-navy)',
                                    lineHeight: '1.8',
                                    marginBottom: '28px',
                                    fontWeight: '500'
                                }}>
                                    Disney Cruise Line focuses on immersive family experiences, world-class entertainment, and Disney-themed magic.
                                </p>

                                <div style={{
                                    background: 'var(--medi-bg-soft)',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    marginTop: 'auto'
                                }}>
                                    <h3 style={{
                                        fontSize: '15px',
                                        fontWeight: '700',
                                        color: 'var(--medi-navy)',
                                        margin: '0 0 16px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <Star size={16} />
                                        Choose Disney If You Want
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {['Family-focused vacations', 'Disney characters & entertainment', 'Multi-generational travel', 'Broadway-style productions', 'Exceptional children\'s programs', 'Immersive themed experiences'].map((item, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                fontSize: '14px',
                                                color: 'var(--medi-navy)',
                                                lineHeight: '1.4'
                                            }}>
                                                <CheckCircle size={15} style={{ color: 'var(--medi-green)', marginTop: '2px', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Celebrity Column */}
                        <div style={{
                            background: 'var(--medi-bg-white)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '1px solid rgba(39, 68, 114, 0.1)',
                            boxShadow: '0 10px 30px rgba(39, 68, 114, 0.06)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Card Image */}
                            <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                                <img
                                    src={celebrityIntroImg}
                                    alt="Celebrity Cruises Luxury Adult Only Lounge"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    background: 'var(--medi-bg-dark2)',
                                    color: '#ffffff',
                                    padding: '8px 20px',
                                    borderRadius: '30px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    letterSpacing: '0.05em'
                                }}>
                                    CELEBRITY CRUISES
                                </div>
                            </div>

                            {/* Card Body */}
                            <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <p style={{
                                    fontSize: '16px',
                                    color: 'var(--medi-navy)',
                                    lineHeight: '1.8',
                                    marginBottom: '28px',
                                    fontWeight: '500'
                                }}>
                                    Celebrity Cruises focuses on modern luxury, upscale dining, sophisticated design, and adult-oriented experiences.
                                </p>

                                <div style={{
                                    background: 'var(--medi-bg-dark2)',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    marginTop: 'auto'
                                }}>
                                    <h3 style={{
                                        fontSize: '15px',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        margin: '0 0 16px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <Crown size={16} style={{ color: '#ffffff' }} />
                                        Choose Celebrity If You Want
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {['Modern luxury', 'Adult-focused atmosphere', 'Fine dining', 'Premium nightlife', 'Contemporary design', 'Better value for adults'].map((item, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                fontSize: '14px',
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                lineHeight: '1.4'
                                            }}>
                                                <CheckCircle size={15} style={{ color: 'var(--medi-green)', marginTop: '2px', flexShrink: 0 }} />
                                                <span>{item}</span>
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
                CRUISE LINE OVERVIEW — SHIP TABS
            ══════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CRUISE LINE OVERVIEW</span>
                        <h2 className="medi-itinerary-showcase-heading">Meet the Fleets</h2>
                        <div className="medi-itinerary-showcase-separator" />
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Sidebar tabs */}
                        <div className="medi-itinerary-tabs">
                            {[
                                { label: 'Disney Cruise Line', icon: <Star size={18} /> },
                                { label: 'Celebrity Cruises', icon: <Crown size={18} /> }
                            ].map((tab, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${activeTab === idx ? 'active' : ''}`}
                                    onClick={() => setActiveTab(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">{idx === 0 ? '01' : '02'}</span>
                                    <span className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{tab.label}</span>
                                    </span>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Card panel */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={activeTab === 0 ? fleetImg2 : fleetImg1}
                                    alt={activeTab === 0 ? 'Disney Cruise Line' : 'Celebrity Cruises'}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay" />
                                <span className="medi-itinerary-showcase-badge">
                                    {activeTab === 0 ? 'Best for Families' : 'Best for Adults'}
                                </span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {activeTab === 0 ? 'Disney Cruise Line' : 'Celebrity Cruises'}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <p className="medi-itinerary-details-heading">About</p>
                                        <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.7', margin: '0 0 20px' }}>
                                            {activeTab === 0
                                                ? 'Disney Cruise Line operates a growing fleet known for exceptional service, family entertainment, and immersive storytelling. Disney attracts families, couples, Disney enthusiasts, and multi-generational travelers.'
                                                : 'Celebrity Cruises is known for contemporary luxury and elevated travel experiences. Celebrity primarily attracts adults, couples, retirees, and luxury travelers.'}
                                        </p>
                                    </div> 
                                    <div className="medi-itinerary-details-col">
                                        <p className="medi-itinerary-details-heading">Popular Ships</p>
                                        <div className="medi-itinerary-details-chips">
                                            {(activeTab === 0
                                                ? ['Disney Treasure', 'Disney Wish', 'Disney Fantasy', 'Disney Dream', 'Disney Wonder', 'Disney Magic']
                                                : ['Celebrity Ascent', 'Celebrity Beyond', 'Celebrity Apex', 'Celebrity Edge', 'Celebrity Silhouette', 'Celebrity Reflection']
                                            ).map((ship, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <Ship size={14} className="medi-itinerary-chip-icon" />
                                                    {ship}
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

            {/* ══════════════════════════════════
                HEAD-TO-HEAD COMPARISONS  (new section)
            ══════════════════════════════════ */}
            <section style={{ background: '#fff', padding: '90px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-itinerary-eyebrow">HEAD-TO-HEAD</span>
                        <h2 className="medi-section-heading">Category-by-Category Comparison</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered" />
                    </div>

                    {/* Tab row */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
                        {comparisonSections.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveComparison(idx)}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '40px',
                                    border: activeComparison === idx ? 'none' : '2px solid rgba(39,68,114,0.15)',
                                    background: activeComparison === idx ? 'var(--medi-navy)' : 'transparent',
                                    color: activeComparison === idx ? '#fff' : 'var(--medi-navy)',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                {s.title}
                            </button>
                        ))}
                    </div>

                    {/* Active comparison panel */}
                    {comparisonSections.map((s, idx) => idx !== activeComparison ? null : (
                        <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'stretch' }}>
                            {/* Disney column */}
                            <div style={{
                                borderRadius: '20px',
                                border: s.disney.winner ? '2px solid var(--medi-navy)' : '1px solid rgba(39,68,114,0.12)',
                                background: s.disney.winner ? 'var(--medi-bg-soft)' : '#fff',
                                padding: '36px',
                                position: 'relative',
                                transition: 'all 0.3s ease'
                            }}>
                                {s.disney.winner && (
                                    <div style={{
                                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                                        background: 'var(--medi-navy)', color: '#fff',
                                        fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
                                        padding: '6px 20px', borderRadius: '30px', textTransform: 'uppercase', whiteSpace: 'nowrap'
                                    }}>
                                        ✓ Winner
                                    </div>
                                )}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--medi-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                                        <Star size={22} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--medi-navy)', opacity: 0.7, margin: 0 }}>Disney Cruise Line</p>
                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>{s.disney.headline}</h3>
                                    </div>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {s.disney.points.map((pt, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#374151', lineHeight: '1.5' }}>
                                            <CheckCircle size={16} style={{ color: 'var(--medi-navy)', flexShrink: 0, marginTop: '2px' }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Celebrity column */}
                            <div style={{
                                borderRadius: '20px',
                                border: s.celebrity.winner ? '2px solid var(--medi-navy)' : '1px solid rgba(39,68,114,0.12)',
                                background: s.celebrity.winner ? 'var(--medi-bg-dark)' : '#fff',
                                padding: '36px',
                                position: 'relative',
                                transition: 'all 0.3s ease'
                            }}>
                                {s.celebrity.winner && (
                                    <div style={{
                                        position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                                        background: 'var(--medi-navy)', color: '#fff',
                                        fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em',
                                        padding: '6px 20px', borderRadius: '30px', textTransform: 'uppercase', whiteSpace: 'nowrap'
                                    }}>
                                        ✓ Winner
                                    </div>
                                )}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '12px',
                                        background: s.celebrity.winner ? 'rgba(255,255,255,0.15)' : 'var(--medi-bg-soft)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: s.celebrity.winner ? '#fff' : 'var(--medi-navy)', flexShrink: 0
                                    }}>
                                        <Crown size={22} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: s.celebrity.winner ? 'rgba(255,255,255,0.6)' : 'var(--medi-navy)', opacity: 0.9, margin: 0 }}>Celebrity Cruises</p>
                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: s.celebrity.winner ? '#fff' : 'var(--medi-navy)', margin: 0 }}>{s.celebrity.headline}</h3>
                                    </div>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {s.celebrity.points.map((pt, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: s.celebrity.winner ? '#cbd5e1' : '#374151', lineHeight: '1.5' }}>
                                            <CheckCircle size={16} style={{ color: s.celebrity.winner ? 'var(--medi-green)' : 'var(--medi-navy)', flexShrink: 0, marginTop: '2px' }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════
                FAMILY vs ADULTS SPLIT  (audience section)
            ══════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Family Experience vs Adults-Only Experience</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered" />

                    <div className="medi-audience-split-layout">
                        {/* Disney — families */}
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Disney Cruise Line — Families</h3>
                            <ul className="medi-audience-list">
                                {[
                                    [Baby, 'Character Meet and Greets throughout the voyage'],
                                    [Users, 'Age-specific youth clubs: Toddlers, Kids, Tweens, Teens'],
                                    [Theater, 'Family entertainment shows, deck parties & movies'],
                                    [Star, 'Disney is the clear leader for families'],
                                ].map(([Icon, text], i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Celebrity — adults */}
                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Celebrity Cruises — Adults</h3>
                            <ul className="medi-audience-list">
                                {[
                                    [Crown, 'Sophisticated lounges and fine dining'],
                                    [Martini || Gem, 'Premium spas and luxury retreats'],
                                    [Moon, 'Adult nightlife and evening entertainment'],
                                    [Heart, 'Designed primarily with adults in mind'],
                                ].map(([Icon, text], i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                IMAGE GALLERY
            ══════════════════════════════════ */}
            <section style={{
                background: '#f8fafc',
                padding: '80px 24px',
                borderBottom: '1px solid rgba(39, 68, 114, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-itinerary-eyebrow">GALLERY</span>
                        <h2 className="medi-section-heading" style={{ margin: '0 0 16px 0', textAlign: 'center' }}>
                            Onboard Experiences & Highlights
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered" />
                    </div>

                    <div className="medi-gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '24px',
                        marginTop: '30px'
                    }}>
                        {[
                            {
                                img: unusedImg1,
                                alt: "Mickey Mouse Meet & Greet",
                                title: "Mickey Mouse Interaction",
                                desc: "Creating unforgettable family moments with Disney character interactions."
                            },
                            {
                                img: unusedImg2,
                                alt: "Castaway Cay Beach",
                                title: "Minnie Mouse at Castaway Cay",
                                desc: "Relaxing on white sand shores with Minnie Mouse and tropical island views."
                            },
                            {
                                img: unusedImg3,
                                alt: "Family Deck Party",
                                title: "High-Energy Deck Parties",
                                desc: "Lively open-air character deck celebrations for the whole family."
                            },
                            {
                                img: unusedImg4,
                                alt: "Live Theater & Shows",
                                title: "Broadway-Style Stage Productions",
                                desc: "Spectacular Disney theatrical musicals and live musical show performances."
                            },
                            {
                                img: unusedImg5,
                                alt: "Wonderland Cinema",
                                title: "Wonderland Cinema Theater",
                                desc: "Premium onboard movie theater experiences showcasing first-run Disney films."
                            },
                            {
                                img: unusedImg6,
                                alt: "Incredibles Sweet Shop",
                                title: "Jack-Jack's Cookie & Sweet Shop",
                                desc: "Indulge in delicious themed treats, desserts, and custom confectionery."
                            },
                            {
                                img: unusedImg7,
                                alt: "Sarabi Lounge Entertainment",
                                title: "Sarabi Family Lounge Stage",
                                desc: "Dynamic stage hosting daily activities, trivia games, and evening family entertainment."
                            },
                            {
                                img: unusedImg8,
                                alt: "Sarabi Lounge Modern Decor",
                                title: "Sarabi Lounge Modern Seating",
                                desc: "Sleek, double-deck venue design offering comfortable seating and great views."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="medi-gallery-item" style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(39, 68, 114, 0.06)',
                                background: '#fff',
                                border: '1px solid rgba(39, 68, 114, 0.1)',
                                position: 'relative',
                                height: '300px'
                            }}>
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className="medi-gallery-img"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div className="medi-gallery-overlay" style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(15, 28, 46, 0.95), rgba(15, 28, 46, 0.4) 60%, rgba(15, 28, 46, 0) 100%)',
                                    padding: '20px',
                                    color: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    height: '50%',
                                    transform: 'translateY(0)',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <h4 style={{ color: '#fff', margin: '0 0 6px 0', fontSize: '18px', fontWeight: '600' }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontSize: '13px', lineHeight: '1.4' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    .medi-gallery-item {
                        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
                    }
                    .medi-gallery-item:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(39, 68, 114, 0.15) !important;
                    }
                    .medi-gallery-img {
                        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    }
                    .medi-gallery-item:hover .medi-gallery-img {
                        transform: scale(1.06);
                    }
                `}</style>
            </section>

            {/* ══════════════════════════════════
                PRICING  (dark excel-style section)
            ══════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">PRICING COMPARISON // 2026</div>
                <div className="medi-excel-coord coord-tr">DISNEY VS CELEBRITY</div>
                <div className="medi-excel-glow-one" />
                <div className="medi-excel-glow-two" />
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Pricing Comparison</h2>
                        <div className="medi-excel-separator" />
                        <p className="medi-excel-lead-paragraph">
                            Understanding what each cruise line includes — and what it costs — is essential to choosing the right vacation.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">Disney Cruise Line</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        [Star, 'Typically commands premium pricing'],
                                        [CheckCircle, 'Entertainment included'],
                                        [Baby, 'Character experiences included'],
                                        [Users, 'Family activities included'],
                                        [Gem, 'Often costs more than competitors'],
                                    ].map(([Icon, text], i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">Celebrity Cruises — Winner</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        [Crown, 'Generally stronger value for adults'],
                                        [Gem, 'Drink packages often included'],
                                        [Globe, 'Wi-Fi promotions available'],
                                        [Utensils, 'Specialty dining credits'],
                                        [CheckCircle, 'Better overall value per dollar'],
                                    ].map(([Icon, text], i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            For adults, Celebrity usually provides better value due to pricing and included amenities. For families, Disney's premium price delivers unmatched experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SHIPS / DESIGN  (differentiators grid)
            ══════════════════════════════════ */}
            {/* ══════════════════════════════════
                SHIPS / DESIGN — PREMIUM CARD LAYOUT WITH SHIPS IMAGES
            ══════════════════════════════════ */}
            {/* ══════════════════════════════════
                SHIPS / DESIGN — PREMIUM ALTERNATING SHOWCASE
            ══════════════════════════════════ */}
            <section style={{
                background: 'var(--medi-bg-white)',
                padding: '100px 24px',
                borderTop: '1px solid rgba(39, 68, 114, 0.1)',
                borderBottom: '1px solid rgba(39, 68, 114, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'var(--medi-bg-soft)',
                            borderRadius: '30px',
                            padding: '6px 16px',
                            color: 'var(--medi-navy)',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '16px'
                        }}>
                            SHIPS & DESIGN
                        </span>
                        <h2 className="medi-section-heading" style={{ margin: '0 0 16px 0', textAlign: 'center' }}>
                            Which Cruise Line Has Better Ships?
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Alternating Rows Container */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        
                        {/* Row 1: Disney (Image Left, Text Right) */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '48px',
                            alignItems: 'center'
                        }}>
                            {/* Image Part */}
                            <div style={{
                                flex: '1 1 450px',
                                height: '360px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 12px 35px rgba(39, 68, 114, 0.08)',
                                border: '1px solid rgba(39, 68, 114, 0.1)',
                                position: 'relative'
                            }}>
                                <img
                                    src={disneyShipIntroImg}
                                    alt="Disney Cruise Line Ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    background: 'var(--medi-navy)',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    letterSpacing: '0.08em',
                                    padding: '6px 16px',
                                    borderRadius: '30px'
                                }}>
                                    TRADITIONAL ELEGANCE
                                </div>
                            </div>

                            {/* Text Part */}
                            <div style={{ flex: '1.2 1 500px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'var(--medi-navy)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}>
                                        <Star size={22} />
                                    </div>
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>
                                        Disney Cruise Line Ships
                                    </h3>
                                </div>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Themed environments throughout', 'Family-friendly design', 'Character experience spaces', 'Spectacular entertainment venues', 'Innovative attractions onboard'].map((f, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            fontSize: '15px',
                                            color: 'var(--medi-navy)',
                                            lineHeight: '1.5'
                                        }}>
                                            <CheckCircle size={16} style={{ color: 'var(--medi-green)', marginTop: '3px', flexShrink: 0 }} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{
                                    background: 'var(--medi-bg-soft)',
                                    padding: '16px 24px',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(39, 68, 114, 0.08)'
                                }}>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        color: 'var(--medi-navy-light)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '8px'
                                    }}>
                                        Newest Ships
                                    </span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['Disney Treasure', 'Disney Wish'].map((s, i) => (
                                            <span key={i} style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                background: 'var(--medi-bg-white)',
                                                border: '1px solid rgba(39, 68, 114, 0.1)',
                                                padding: '5px 12px',
                                                borderRadius: '30px',
                                                fontSize: '13px',
                                                color: 'var(--medi-navy)',
                                                fontWeight: '600'
                                            }}>
                                                <Ship size={12} />
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Celebrity (Text Left, Image Right on Desktop) */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap-reverse',
                            gap: '48px',
                            alignItems: 'center'
                        }}>
                            {/* Text Part */}
                            <div style={{ flex: '1.2 1 500px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'var(--medi-bg-dark2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}>
                                        <Crown size={22} />
                                    </div>
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--medi-navy)', margin: 0 }}>
                                        Celebrity Cruises Ships — Winner
                                    </h3>
                                    <span style={{
                                        background: 'var(--medi-green)',
                                        color: '#ffffff',
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        letterSpacing: '0.05em',
                                        padding: '4px 10px',
                                        borderRadius: '12px',
                                        marginLeft: '4px'
                                    }}>
                                        WINNER
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: '15px',
                                    color: 'var(--medi-navy-light)',
                                    lineHeight: '1.6',
                                    margin: '0 0 20px 0',
                                    fontWeight: '500'
                                }}>
                                    Celebrity's Edge-Class ships are among the most innovative in cruising.
                                </p>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Infinite verandas', 'Modern contemporary architecture', 'Luxury suite experiences', 'Rooftop gardens', 'Contemporary premium interiors'].map((f, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px',
                                            fontSize: '15px',
                                            color: 'var(--medi-navy)',
                                            lineHeight: '1.5'
                                        }}>
                                            <CheckCircle size={16} style={{ color: 'var(--medi-green)', marginTop: '3px', flexShrink: 0 }} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div style={{
                                    background: 'var(--medi-bg-soft)',
                                    padding: '16px 24px',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(39, 68, 114, 0.08)'
                                }}>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '12px',
                                        fontWeight: '700',
                                        color: 'var(--medi-navy-light)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '8px'
                                    }}>
                                        Newest Ships
                                    </span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['Celebrity Ascent', 'Celebrity Beyond'].map((s, i) => (
                                            <span key={i} style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                background: 'var(--medi-bg-white)',
                                                border: '1px solid rgba(39, 68, 114, 0.1)',
                                                padding: '5px 12px',
                                                borderRadius: '30px',
                                                fontSize: '13px',
                                                color: 'var(--medi-navy)',
                                                fontWeight: '600'
                                            }}>
                                                <Ship size={12} />
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Image Part */}
                            <div style={{
                                flex: '1 1 450px',
                                height: '360px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 12px 35px rgba(39, 68, 114, 0.08)',
                                border: '1px solid rgba(39, 68, 114, 0.1)',
                                position: 'relative'
                            }}>
                                <img
                                    src={celebrityShipIntroImg}
                                    alt="Celebrity Cruise Ship"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    background: 'var(--medi-bg-dark2)',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    letterSpacing: '0.08em',
                                    padding: '6px 16px',
                                    borderRadius: '30px'
                                }}>
                                    MODERN INNOVATION
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                BEST BY TRAVELER TYPE  (new premium table section)
            ══════════════════════════════════ */}
            <section style={{ background: 'var(--medi-bg-soft)', padding: '90px 20px' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-itinerary-eyebrow">TRAVELER MATCH</span>
                        <h2 className="medi-section-heading">Best Cruise Line by Traveler Type</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered" />
                    </div>

                    <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(39,68,114,0.1)', boxShadow: '0 20px 50px rgba(15,28,46,0.06)' }}>
                        {/* Table header */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--medi-navy)', padding: '18px 32px', gap: '16px' }}>
                            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Traveler Type</span>
                            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>Disney</span>
                            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textAlign: 'center' }}>Celebrity</span>
                        </div>
                        {travelerTable.map((row, i) => (
                            <div key={i} style={{
                                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                                padding: '16px 32px', gap: '16px',
                                alignItems: 'center',
                                borderBottom: i < travelerTable.length - 1 ? '1px solid rgba(39,68,114,0.07)' : 'none',
                                background: i % 2 === 0 ? '#fff' : 'rgba(231,243,245,0.4)'
                            }}>
                                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{row.type}</span>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {row.winner === 'Disney'
                                        ? <span style={{ background: 'var(--medi-navy)', color: '#fff', borderRadius: '30px', padding: '6px 18px', fontSize: '13px', fontWeight: '700' }}>✓ Winner</span>
                                        : <span style={{ color: '#94a3b8', fontSize: '20px' }}>—</span>
                                    }
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {row.winner === 'Celebrity'
                                        ? <span style={{ background: 'var(--medi-navy)', color: '#fff', borderRadius: '30px', padding: '6px 18px', fontSize: '13px', fontWeight: '700' }}>✓ Winner</span>
                                        : <span style={{ color: '#94a3b8', fontSize: '20px' }}>—</span>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                PROS & CONS  (new premium cards)
            ══════════════════════════════════ */}
            <section style={{
                background: 'var(--medi-bg-soft)',
                padding: '90px 24px',
                borderTop: '1px solid rgba(39, 68, 114, 0.1)',
                borderBottom: '1px solid rgba(39, 68, 114, 0.1)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'var(--medi-bg-white)',
                            border: '1px solid rgba(39, 68, 114, 0.15)',
                            borderRadius: '30px',
                            padding: '6px 16px',
                            color: 'var(--medi-navy)',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '16px'
                        }}>
                            PROS & CONS
                        </span>
                        <h2 className="medi-section-heading" style={{ margin: '0 0 16px 0', textAlign: 'center' }}>
                            Strengths and Weaknesses
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Comparison Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '40px'
                    }}>
                        {[
                            {
                                name: 'Disney Cruise Line',
                                icon: <Star size={22} />,
                                themeColor: 'var(--medi-navy)',
                                pros: ['Best family experience in cruising', 'Disney entertainment & productions', 'Exceptional personalized service', 'Character interactions & immersion', 'Broadway-caliber stage shows'],
                                cons: ['Higher pricing across all categories', 'Fewer adult-focused experiences', 'Limited nightlife options', 'No casino onboard']
                            },
                            {
                                name: 'Celebrity Cruises',
                                icon: <Crown size={22} />,
                                themeColor: 'var(--medi-bg-dark2)',
                                pros: ['Modern luxury design & ships', 'Best-in-class dining experiences', 'Adult-oriented atmosphere', 'More global destinations', 'Better overall value for adults'],
                                cons: ['Less family programming', 'Fewer activities for children', 'Less immersive theming', 'Entertainment less spectacular']
                            }
                        ].map((cl, ci) => (
                            <div key={ci} style={{
                                background: 'var(--medi-bg-white)',
                                borderRadius: '24px',
                                border: '1px solid rgba(39, 68, 114, 0.15)',
                                overflow: 'hidden',
                                boxShadow: '0 15px 35px rgba(39, 68, 114, 0.05)',
                                transition: 'transform 0.3s ease'
                            }}>
                                {/* Card Header Bar */}
                                <div style={{
                                    background: cl.themeColor,
                                    padding: '24px 32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px'
                                }}>
                                    <div style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}>
                                        {cl.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: '700',
                                        color: '#ffffff',
                                        margin: 0,
                                        letterSpacing: '-0.01em'
                                    }}>
                                        {cl.name}
                                    </h3>
                                </div>

                                {/* Card Body Split Grid */}
                                <div style={{
                                    padding: '32px',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '24px'
                                }}>
                                    {/* Strengths (Pros) Panel */}
                                    <div style={{
                                        background: 'rgba(16, 185, 129, 0.04)',
                                        border: '1px solid rgba(16, 185, 129, 0.15)',
                                        borderRadius: '20px',
                                        padding: '28px 24px'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginBottom: '20px'
                                        }}>
                                            <span style={{
                                                fontSize: '12px',
                                                fontWeight: '800',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: 'var(--medi-green)',
                                                background: 'rgba(16, 185, 129, 0.1)',
                                                padding: '4px 10px',
                                                borderRadius: '8px'
                                            }}>
                                                Strengths
                                            </span>
                                        </div>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {cl.pros.map((p, i) => (
                                                <li key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontSize: '14px',
                                                    color: 'var(--medi-navy)',
                                                    lineHeight: '1.5',
                                                    fontWeight: '500'
                                                }}>
                                                    <CheckCircle size={16} style={{ color: 'var(--medi-green)', flexShrink: 0, marginTop: '3px' }} />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Weaknesses (Cons) Panel */}
                                    <div style={{
                                        background: 'rgba(239, 68, 68, 0.04)',
                                        border: '1px solid rgba(239, 68, 68, 0.15)',
                                        borderRadius: '20px',
                                        padding: '28px 24px'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            marginBottom: '20px'
                                        }}>
                                            <span style={{
                                                fontSize: '12px',
                                                fontWeight: '800',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: 'var(--medi-red)',
                                                background: 'rgba(239, 68, 68, 0.1)',
                                                padding: '4px 10px',
                                                borderRadius: '8px'
                                            }}>
                                                Weaknesses
                                            </span>
                                        </div>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {cl.cons.map((c, i) => (
                                                <li key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '10px',
                                                    fontSize: '14px',
                                                    color: 'var(--medi-navy)',
                                                    lineHeight: '1.5',
                                                    fontWeight: '500'
                                                }}>
                                                    <Minus size={16} style={{ color: 'var(--medi-red)', flexShrink: 0, marginTop: '3px' }} />
                                                    <span>{c}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SERVICE COMPARISON (editorial section)
            ══════════════════════════════════ */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Cruise service comparison" />
                                <div className="medi-editorial-gradient-layer" />
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">#1</span>
                                    <span className="medi-stat-label">Family</span>
                                </div>
                                <div className="medi-stat-divider" />
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">Tie</span>
                                    <span className="medi-stat-label">Service</span>
                                </div>
                                <div className="medi-stat-divider" />
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">#1</span>
                                    <span className="medi-stat-label">Luxury</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-eyebrow-container">
                                <Award size={16} className="medi-editorial-icon-badge" />
                                <span className="medi-editorial-eyebrow">SERVICE COMPARISON</span>
                            </div>
                            <h2 className="medi-editorial-title">Both Cruise Lines Are Exceptional at Service</h2>
                            <div className="medi-editorial-accent-bar" />
                            <p className="medi-editorial-lead-para">
                                Disney and Celebrity consistently rank among the industry's best when it comes to onboard service. This category is a genuine tie.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Where each cruise line leads in service:</p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        [Star, 'Disney: Warm family-oriented service'],
                                        [Crown, 'Celebrity: Polished luxury-hotel-style service'],
                                        [Heart, 'Disney: Character & magic moments'],
                                        [Gem, 'Celebrity: Butler service in The Retreat'],
                                    ].map(([Icon, text], i) => (
                                        <div key={i} className="medi-priority-pill-item">
                                            <Icon size={14} className="medi-priority-check" />
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                Both cruise lines invest heavily in crew training and guest satisfaction. Your overall service experience will be excellent on either line — the difference is in the style and focus of that service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

          

            {/* ══════════════════════════════════
                FINAL VERDICT  (new section — inline css)
            ══════════════════════════════════ */}
            <section style={{ background: 'var(--medi-bg-soft)', padding: '90px 20px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-itinerary-eyebrow">FINAL VERDICT</span>
                        <h2 className="medi-section-heading">Disney Cruise vs Celebrity Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered" />
                        <p style={{ fontSize: '18px', color: '#475569', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
                            The choice between Disney Cruise Line and Celebrity Cruises comes down to who is traveling and what type of vacation experience you want.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
                        {/* Disney verdict */}
                        <div style={{ background: 'var(--medi-navy)', borderRadius: '20px', padding: '36px', color: '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <Star size={24} />
                                <h3 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Choose Disney Cruise Line If:</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['You are traveling with children', 'You love Disney entertainment', 'You want the best family cruise experience available', 'Multi-generational travel is important'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--medi-green)', flexShrink: 0, marginTop: '2px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Celebrity verdict */}
                        <div style={{ background: '#fff', border: '2px solid var(--medi-navy)', borderRadius: '20px', padding: '36px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--medi-navy)' }}>
                                <Crown size={24} />
                                <h3 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>Choose Celebrity Cruises If:</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['You are traveling as a couple', 'You prefer luxury and sophistication', 'Dining is a priority', 'You want a more adult-focused atmosphere', 'You seek better overall value'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--medi-navy)', flexShrink: 0, marginTop: '2px' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Verdict callout */}
                    <div style={{
                        marginTop: '32px', background: '#fff',
                        border: '1px solid rgba(39,68,114,0.12)', borderRadius: '16px',
                        padding: '28px 32px', display: 'flex', alignItems: 'flex-start',
                        gap: '16px', boxShadow: '0 4px 20px rgba(15,28,46,0.05)'
                    }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--medi-bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--medi-navy)', flexShrink: 0 }}>
                            <Award size={24} />
                        </div>
                        <p style={{ fontSize: '17px', color: '#2d3748', lineHeight: '1.7', margin: 0 }}>
                            <strong>For families, Disney remains the gold standard.</strong> For couples and adults, Celebrity Cruises often provides the stronger overall cruise experience.
                        </p>
                    </div>
                </div>
            </section>


             {/* ============================================================
                ANGELA HUGHES AUTHORITY BOX
            ============================================================ */}
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
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
                                    }}
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


  {/* ══════════════════════════════════
                FAQ
            ══════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered" />
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
                <div className="medi-cta-bg-pattern-layer" />
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Book the Perfect Cruise for You?</h2>
                        <div className="medi-cta-separator-white" />

                        <p className="medi-cta-paragraph-white">
                            Luxury cruise planning is no longer simply about picking a ship — it is about matching the right cruise line to the right traveler and crafting an experience that exceeds every expectation.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently select between Disney Cruise Line, Celebrity Cruises, and beyond.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Disney family cruising', 'Celebrity luxury voyages', 'Caribbean & Bahamas sailings', 'Mediterranean European itineraries', 'First-time cruise planning'].map((item, idx) => (
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

export default DisneyVsCelebrityCruises