import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// Disney Ship Hero Images — place in src/assets/BestDisneyCruise/
// import hero1 from '../../assets/BestDisneyCruise/hero1.jpg'
// import hero2 from '../../assets/BestDisneyCruise/hero2.jpg'
// import hero3 from '../../assets/BestDisneyCruise/hero3.jpg'

// Ship Feature Images
// import disneyTreasure from '../../assets/BestDisneyCruise/disney-treasure.jpg'
// import disneyWish from '../../assets/BestDisneyCruise/disney-wish.jpg'
// import disneyFantasy from '../../assets/BestDisneyCruise/disney-fantasy.jpg'
// import disneyDream from '../../assets/BestDisneyCruise/disney-dream.jpg'
// import disneyWonder from '../../assets/BestDisneyCruise/disney-wonder.jpg'
// import quietCovePool from '../../assets/BestDisneyCruise/quiet-cove-pool.jpg'
// import sensesSpa from '../../assets/BestDisneyCruise/senses-spa.jpg'
// import paloRestaurant from '../../assets/BestDisneyCruise/palo-restaurant.jpg'
// import enchante from '../../assets/BestDisneyCruise/enchante.jpg'
// import adultLounge from '../../assets/BestDisneyCruise/adult-lounge.jpg'
// import mediterraneanCruise from '../../assets/BestDisneyCruise/mediterranean-cruise.jpg'
// import alaskaCruise from '../../assets/BestDisneyCruise/alaska-cruise.jpg'
// import caribbeanCruise from '../../assets/BestDisneyCruise/caribbean-cruise.jpg'
// import tranAtlantic from '../../assets/BestDisneyCruise/transatlantic-cruise.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Wifi, Coffee
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function BestDisneyCruiseShipForAdults() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)

    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => {
            setMediActiveMistake((prev) => (prev + 1) % 5)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const disneyShips = [
        {
            title: 'Disney Treasure',
            badge: '#1 Overall Adult Experience',
            // img: disneyTreasure,
            bestFor: ['Couples', 'Luxury travelers', 'Disney fans', 'Empty nesters', 'First-time Disney cruisers'],
            highlights: ['Elevated Dining', 'Premium Lounges', 'Adult Entertainment', 'Modern Design']
        },
        {
            title: 'Disney Wish',
            badge: 'Best for Couples',
            // img: disneyWish,
            bestFor: ['Honeymooners', 'Anniversary travelers', 'Romantic couples', 'Luxury suite seekers'],
            highlights: ['Palo Steakhouse', 'Enchanté', 'Quiet Cove', 'Elegant Suites']
        },
        {
            title: 'Disney Fantasy',
            badge: 'Best Adult Entertainment',
            // img: disneyFantasy,
            bestFor: ['Nightlife seekers', 'Entertainment lovers', 'Mature travelers', 'Caribbean itinerary fans'],
            highlights: ['Multiple Themed Lounges', 'Live Music', 'Nightclubs', 'Broadway Productions']
        },
        {
            title: 'Disney Dream',
            badge: 'Best for Relaxation',
            // img: disneyDream,
            bestFor: ['First-time cruisers', 'Relaxation seekers', 'Short getaway travelers', 'Spa enthusiasts'],
            highlights: ['Quiet Cove Pool', 'Excellent Spa', 'Adult Restaurants', 'Elegant Atmosphere']
        },
        {
            title: 'Disney Wonder',
            badge: 'Best for Alaska',
            // img: disneyWonder,
            bestFor: ['Nature enthusiasts', 'Adventure travelers', 'Alaska itinerary seekers', 'Non-Disney fans'],
            highlights: ['Glacier Viewing', 'Nature Excursions', 'Educational Programming', 'Scenic Routes']
        }
    ]

    const mediFaqs = [
        { question: 'What is the best Disney cruise ship for adults?', answer: 'Disney Treasure is currently considered the best overall Disney ship for adults due to its luxury features, dining options, and modern design.' },
        { question: 'Which Disney ship is best for couples?', answer: 'Disney Wish is often ranked as the most romantic Disney cruise ship.' },
        { question: 'Can adults cruise Disney without children?', answer: 'Yes. Thousands of adults sail Disney Cruise Line every year without children.' },
        { question: 'Does Disney have adult-only areas?', answer: 'Yes. Every Disney ship features adult-exclusive spaces including pools, lounges, restaurants, and spa areas.' },
        { question: 'Which Disney cruise has the best nightlife?', answer: 'Disney Fantasy offers the strongest lineup of adult nightlife and lounge experiences.' },
        { question: 'Is Disney Cruise Line luxurious?', answer: 'Disney Cruise Line is considered a premium cruise brand with exceptional service and high-quality accommodations.' },
        { question: 'Does Disney have casinos?', answer: 'No. Disney Cruise Line does not operate casinos on its ships.' },
        { question: 'What is Palo on Disney Cruise Line?', answer: "Palo is Disney's adults-only specialty restaurant featuring Italian-inspired cuisine." },
        { question: 'What is Enchanté?', answer: "Enchanté is Disney's most upscale fine dining experience available on select ships." },
        { question: 'Are Disney cruises worth it for adults?', answer: 'Many adults consider Disney cruises worth the premium pricing because of the service, dining, entertainment, and adult-only amenities.' },
        { question: 'Which Disney ship is newest?', answer: 'Disney Treasure is among Disney Cruise Line\'s newest ships and incorporates many of the brand\'s latest innovations.' },
        { question: 'Which Disney ship is best for Alaska?', answer: 'Disney Wonder is widely considered the best Disney ship for Alaska itineraries.' },
        { question: 'Is Disney Wish better than Disney Dream?', answer: 'For couples and luxury travelers, Disney Wish generally offers more modern amenities and upgraded dining experiences.' },
        { question: 'Are Disney cruises crowded?', answer: 'Disney ships typically feel less crowded than many mainstream cruise lines due to thoughtful design and passenger flow.' },
        { question: 'What age group enjoys Disney cruises most?', answer: 'Disney cruises attract travelers of all ages, including families, couples, retirees, and solo travelers.' },
        { question: 'Which Disney cruise has the best food?', answer: 'Disney Treasure and Disney Wish are frequently praised for their dining venues and culinary experiences.' },
        { question: 'Can adults use the Disney spa?', answer: 'Yes. Senses Spa is designed primarily for adult guests and offers a full range of wellness treatments.' },
        { question: 'Which Disney cruise is best for first-time cruisers?', answer: 'Disney Dream is often recommended for first-time Disney cruisers because of its shorter itineraries and balanced onboard experience.' },
        { question: 'Are Disney cruises good for honeymooners?', answer: 'Absolutely. Disney Wish and Disney Treasure are especially popular among honeymoon couples.' },
        { question: 'What is the best Disney cruise ship for luxury travelers?', answer: 'Disney Treasure currently offers the most luxurious overall experience within the Disney Cruise Line fleet.' }
    ]

    const mediMistakes = [
        {
            title: 'Assuming Disney Is Only for Kids',
            desc: 'Many travelers write off Disney Cruise Line without realizing the extensive adult-only areas, fine dining, and sophisticated entertainment available exclusively for grown-ups.'
        },
        {
            title: 'Skipping Adult-Exclusive Restaurants',
            desc: 'Palo and Enchanté require separate reservations. Many adults miss these signature dining experiences by not booking early.'
        },
        {
            title: 'Overlooking Itinerary Length',
            desc: "Disney Dream is ideal for shorter getaways while Fantasy offers longer Caribbean itineraries. Choosing the wrong ship length can undercut the experience."
        },
        {
            title: 'Not Researching the Ship Before Booking',
            desc: 'Each Disney ship has a distinct personality. Disney Treasure suits luxury seekers while Disney Wonder excels on Alaska routes — the wrong ship is a costly mistake.'
        },
        {
            title: 'Waiting Too Long to Book Suites',
            desc: 'Luxury suites and Concierge-level staterooms on Disney ships sell out 9–18 months in advance. Early planning is essential for premium travelers.'
        }
    ]

    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ]
            },
            {
                "@type": "TravelAgency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in cruises, expeditions, safaris, and premium travel experiences."
            },
            {
                "@type": "Person",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Trips & Ships Luxury Travel"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": mediFaqs.map(faq => ({
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
                <title>Best Disney Cruise Ship for Adults in 2026 | Complete Disney Cruise Line Guide</title>
                <meta name="title" content="Best Disney Cruise Ship for Adults in 2026 | Complete Disney Cruise Line Guide" />
                <meta name="description" content="Discover the best Disney cruise ship for adults, couples, empty nesters, and luxury travelers. Compare Disney Wish, Disney Treasure, Disney Dream, Disney Fantasy, and more." />
                <meta name="keywords" content="Best Disney Cruise Ship for Adults, Disney Cruise for Adults, Best Disney Ship for Couples, Disney Cruise Without Kids, Disney Wish for Adults, Disney Treasure Review" />
                <script type="application/ld+json">{JSON.stringify(mediSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ============================================================
                HERO SECTION
            ============================================================ */}
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
                        <span>Disney Cruise Line Adult Guide 2026</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best Disney Cruise Ship for Adults (2026 Guide)
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Discover the ideal Disney ship for couples, empty nesters, solo travelers, and luxury seekers
                    </p>
                    <div className="medi-hero-cta-container">
                        <p className="medi-cta-title-text">Your Expert Disney Cruise Advisor</p>
                        <p className="medi-cta-subtitle-text">Angela Hughes and the team at Trips & Ships Luxury Travel help adults find the perfect Disney cruise experience</p>
                        <div className="medi-cta-features-row">
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>40+ Years Experience</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>121+ Countries Visited</span>
                            </div>
                            <div className="medi-cta-feature-item">
                                <CheckCircle size={16} />
                                <span>2024 Luxury Travel Influencer of the Year</span>
                            </div>
                        </div>
                        <button className="medi-primary-cta-button">
                            <Phone size={18} />
                            Schedule a Consultation
                        </button>
                        <p className="medi-hero-disclaimer-text">Complimentary consultation — no obligation</p>
                    </div>
                </div>
            </section>

            {/* ============================================================
                PREMIUM INTRO SECTION
            ============================================================ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">ADULTS-FIRST CRUISING</span>
                            <h2 className="medi-premium-heading">What Is the Best Disney Cruise Ship for Adults?</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Many travelers assume Disney cruises are only for families with children.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                The reality is quite different.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                Disney Cruise Line has invested heavily in adult-only spaces, upscale dining, luxury accommodations, exclusive lounges, spas, and sophisticated entertainment designed specifically for adults.
                            </p>
                            <p className="medi-premium-lead-text" style={{ marginTop: '16px' }}>
                                If you&apos;re wondering which Disney ship offers the best experience for couples, empty nesters, solo travelers, or adults seeking a premium cruise vacation, the answer depends on your travel style.
                            </p>

                            {/* Rankings Quick-View */}
                            <div style={{
                                marginTop: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            }}>
                                {[
                                    { medal: '🥇', label: 'Overall Best Disney Cruise Ship for Adults:', ship: 'Disney Treasure' },
                                    { medal: '🥇', label: 'Best Disney Ship for Couples:', ship: 'Disney Wish' },
                                    { medal: '🥇', label: 'Best Disney Ship for Adult Entertainment:', ship: 'Disney Fantasy' },
                                    { medal: '🥇', label: 'Best Disney Ship for Relaxation:', ship: 'Disney Dream' },
                                    { medal: '🥇', label: 'Best Disney Ship for Adventure:', ship: 'Disney Wonder' },
                                    { medal: '🥇', label: 'Best Disney Ship for Alaska:', ship: 'Disney Wonder' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '12px 16px',
                                        background: 'rgba(39, 68, 114, 0.06)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(39, 68, 114, 0.1)'
                                    }}>
                                        <span style={{ fontSize: '20px' }}>{item.medal}</span>
                                        <div>
                                            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{item.label}</span>
                                            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--medi-navy)' }}>{item.ship}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Signature Expert Block */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers select the ideal Disney cruise experience based on decades of firsthand luxury travel expertise.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">&quot;</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes offers unmatched insight into Disney and luxury cruise experiences.
                                    </p>
                                </div>

                                {/* Why Adults Love Disney Cruises */}
                                <div style={{ marginTop: '24px' }}>
                                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--medi-navy)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Why Adults Love Disney Cruises</p>
                                    <div className="medi-immersion-cards-grid">
                                        {[
                                            { icon: <Users size={18} />, label: 'Adult-only pools' },
                                            { icon: <Sun size={18} />, label: 'Quiet sundecks' },
                                            { icon: <Utensils size={18} />, label: 'Fine dining' },
                                            { icon: <Crown size={18} />, label: 'Premium lounges' },
                                            { icon: <Music size={18} />, label: 'Broadway-style entertainment' },
                                            { icon: <Sparkles size={18} />, label: 'Luxury spas' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-immersion-card-item">
                                                <div className="medi-immersion-icon-box">{item.icon}</div>
                                                <span className="medi-immersion-card-title">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================================================
                SHIP RANKINGS SECTION — ITINERARY SHOWCASE STYLE
            ============================================================ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">FLEET COMPARISON</span>
                        <h2 className="medi-itinerary-showcase-heading">Disney Cruise Ship Rankings for Adults</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Left Side: Navigation Tabs */}
                        <div className="medi-itinerary-tabs">
                            {disneyShips.map((ship, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{ship.title}</span>
                                        <span style={{ fontSize: '11px', color: '#93c5fd', marginTop: '2px', display: 'block' }}>{ship.badge}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Right Side: Showcase Content */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={disneyShips[mediSelectedItinerary].img}
                                    alt={disneyShips[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">{disneyShips[mediSelectedItinerary].badge}</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{disneyShips[mediSelectedItinerary].title}</h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Best For:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {disneyShips[mediSelectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <CheckCircle size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Highlights:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {disneyShips[mediSelectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <Sparkles size={12} className="medi-itinerary-chip-icon" />
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

            {/* ============================================================
                BEST OVERALL — DISNEY TREASURE FEATURE SECTION
            ============================================================ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">DISNEY CRUISE LINE // ADULT GUIDE</div>
                <div className="medi-excel-coord coord-tr">Best Overall: Disney Treasure</div>
                <div className="medi-excel-coord coord-bl">Best for Couples: Disney Wish</div>
                <div className="medi-excel-coord coord-br">Best Entertainment: Disney Fantasy</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Best Overall: Disney Treasure</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Disney Treasure is currently the most exciting option for adults.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Why Adults Love Disney Treasure
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Utensils size={18} /></div>
                                        <div>
                                            <strong>Elevated Dining</strong>
                                            <span style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>Adults enjoy sophisticated dining venues and themed culinary experiences.</span>
                                        </div>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Crown size={18} /></div>
                                        <div>
                                            <strong>Premium Lounges</strong>
                                            <span style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>The ship offers beautifully designed bars and cocktail venues.</span>
                                        </div>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Music size={18} /></div>
                                        <div>
                                            <strong>Adult Entertainment</strong>
                                            <span style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>Nightclubs, lounges, live music, and adult-focused activities provide plenty of evening options.</span>
                                        </div>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper"><Sparkles size={18} /></div>
                                        <div>
                                            <strong>Modern Design</strong>
                                            <span style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>As one of Disney&apos;s newest ships, Treasure offers contemporary accommodations and upgraded amenities.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Best for Couples: Disney Wish
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                                    The Disney Wish is often considered the most romantic Disney ship. Couples frequently choose Wish for anniversaries, honeymoons, and milestone celebrations.
                                </p>
                                <ul className="medi-excel-list">
                                    {['Elegant design', 'Luxury suites', 'Adults-only dining', 'Spa experiences', 'Sunset cocktails', 'Quiet adult pool areas'].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><CheckCircle size={18} /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Best Adult Entertainment: Disney Fantasy
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                                    Adults seeking nightlife and entertainment often gravitate toward Disney Fantasy. Fantasy also offers longer Caribbean itineraries that appeal to mature travelers.
                                </p>
                                <ul className="medi-excel-list">
                                    {['Multiple themed lounges', 'Live music', 'Nightclubs', 'Adult comedy acts', 'Signature Broadway productions'].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Music size={18} /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Best for Alaska: Disney Wonder
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                                    Disney Wonder remains one of the best ships sailing Alaska. The Alaska experience attracts many travelers who are not traditional Disney fans.
                                </p>
                                <ul className="medi-excel-list">
                                    {['Scenic itineraries', 'Glacier viewing', 'Nature-focused excursions', 'Relaxed atmosphere', 'Educational programming'].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Compass size={18} /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                ADULT-ONLY AREAS — IMAGE-RICH DIFFERENTIATORS SECTION
            ============================================================ */}
            <section style={{
                background: 'var(--medi-bg-soft)',
                padding: '80px 20px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#93c5fd',
                            marginBottom: '12px'
                        }}>EXCLUSIVELY FOR ADULTS</span>
                        <h2 className="medi-section-heading">Best Adults-Only Areas on Disney Cruise Ships</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '32px'
                    }}>
                        {[
                            {
                                // img: quietCovePool,
                                icon: <Sun size={22} />,
                                title: 'Quiet Cove Pool',
                                desc: 'Available exclusively for adults.',
                                features: ['Pool', 'Hot tubs', 'Lounge chairs', 'Bar service']
                            },
                            {
                                // img: sensesSpa,
                                icon: <Sparkles size={22} />,
                                title: 'Senses Spa',
                                desc: "Disney's luxury spa experience includes:",
                                features: ['Massages', 'Couples treatments', 'Thermal suites', 'Hydrotherapy']
                            },
                            {
                                // img: paloRestaurant,
                                icon: <Utensils size={22} />,
                                title: 'Palo',
                                desc: 'An upscale Italian-inspired dining venue. Popular for:',
                                features: ['Brunch', 'Romantic dinners', 'Wine pairings']
                            },
                            {
                                // img: enchante,
                                icon: <Crown size={22} />,
                                title: 'Enchanté',
                                desc: "Disney's most luxurious restaurant. Designed for adults seeking a fine dining experience.",
                                features: ['Fine dining', 'Exclusive menu', 'Premium wines']
                            },
                            {
                                // img: adultLounge,
                                icon: <Music size={22} />,
                                title: 'Adult Lounges',
                                desc: 'Disney ships feature:',
                                features: ['Piano bars', 'Cocktail lounges', 'Wine bars', 'Live entertainment venues']
                            }
                        ].map((area, idx) => (
                            <div key={idx} style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(39, 68, 114, 0.1)',
                                boxShadow: '0 4px 20px rgba(39, 68, 114, 0.06)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(39, 68, 114, 0.14)' }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(39, 68, 114, 0.06)' }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={area.img} alt={area.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(15,28,46,0.6) 0%, transparent 60%)'
                                    }} />
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginBottom: '10px'
                                    }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'var(--medi-bg-soft)',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--medi-navy)',
                                            flexShrink: 0
                                        }}>
                                            {area.icon}
                                        </div>
                                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--medi-navy)', margin: 0 }}>{area.title}</h3>
                                    </div>
                                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '14px', lineHeight: 1.6 }}>{area.desc}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {area.features.map((f, i) => (
                                            <span key={i} style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                                fontSize: '12px',
                                                fontWeight: 600,
                                                color: 'var(--medi-navy)',
                                                background: 'var(--medi-bg-soft)',
                                                padding: '4px 10px',
                                                borderRadius: '20px'
                                            }}>
                                                <CheckCircle size={11} />
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                BEST ITINERARIES FOR ADULTS — IMAGE GRID SECTION
            ============================================================ */}
            <section style={{ background: '#ffffff', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#93c5fd',
                            marginBottom: '12px'
                        }}>WHERE TO SAIL</span>
                        <h2 className="medi-section-heading">Best Disney Cruise Itineraries for Adults</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '28px'
                    }}>
                        {[
                            {
                                // img: mediterraneanCruise,
                                region: 'Mediterranean Cruises',
                                desc: 'Perfect for culture, history, and food lovers.',
                                icon: <Globe size={20} />
                            },
                            {
                                // img: alaskaCruise,
                                region: 'Alaska Cruises',
                                desc: 'Ideal for nature enthusiasts.',
                                icon: <Compass size={20} />
                            },
                            {
                                // img: tranAtlantic,
                                region: 'Transatlantic Cruises',
                                desc: 'Excellent for relaxation and sea days.',
                                icon: <Anchor size={20} />
                            },
                            {
                                // img: caribbeanCruise,
                                region: 'Caribbean Cruises',
                                desc: 'Great balance of beaches and onboard activities.',
                                icon: <Sun size={20} />
                            }
                        ].map((dest, idx) => (
                            <div key={idx} style={{
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                height: '280px',
                                cursor: 'pointer',
                                border: '1px solid rgba(39, 68, 114, 0.1)'
                            }}>
                                <img src={dest.img} alt={dest.region} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.88) 0%, rgba(15,28,46,0.2) 60%, transparent 100%)'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '24px'
                                }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: 'rgba(255,255,255,0.12)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        borderRadius: '20px',
                                        padding: '4px 12px',
                                        color: '#ffffff',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        marginBottom: '8px'
                                    }}>
                                        {dest.icon}
                                        CRUISE REGION
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>{dest.region}</h3>
                                    <p style={{ fontSize: '14px', color: '#cbd5e1', margin: 0 }}>{dest.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Northern Europe note */}
                    <div style={{
                        marginTop: '28px',
                        padding: '20px 28px',
                        background: 'var(--medi-bg-soft)',
                        borderRadius: '12px',
                        border: '1px solid rgba(39, 68, 114, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <div style={{
                            width: '44px',
                            height: '44px',
                            background: 'var(--medi-navy)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            flexShrink: 0
                        }}>
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p style={{ fontWeight: 700, color: 'var(--medi-navy)', margin: '0 0 4px', fontSize: '15px' }}>Northern Europe Cruises</p>
                            <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>Appealing to travelers interested in history and exploration.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                IS DISNEY TOO KID-FOCUSED? + RANKINGS TABLE
            ============================================================ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow">THE REAL PICTURE</span>
                        <h2 className="medi-diff-main-title">Is Disney Cruise Line Too Kid-Focused for Adults?</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-differentiators-grid">
                        <div className="medi-differentiator-card">
                            <div className="medi-card-icon-wrapper">
                                <CheckCircle size={28} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--medi-navy)', marginBottom: '12px' }}>Not at all.</h3>
                            <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '15px', marginBottom: '16px' }}>
                                Many adults cruise Disney without children. Reasons include:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {['Exceptional service', 'Adult-only spaces', 'Quality entertainment', 'Luxury accommodations', 'Clean, well-maintained ships', 'Superior dining'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-differentiator-card">
                            <div className="medi-card-icon-wrapper">
                                <Users size={28} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--medi-navy)', marginBottom: '12px' }}>Disney has become increasingly popular among:</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {['Couples', 'Empty nesters', 'Solo travelers', 'Luxury cruise guests'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#374151' }}>
                                        <Heart size={16} style={{ color: 'var(--medi-navy)', flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Rankings Table */}
                    <div style={{ marginTop: '56px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--medi-navy)', textAlign: 'center', marginBottom: '32px' }}>Disney Cruise Ship Rankings for Adults</h3>
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid rgba(39, 68, 114, 0.12)',
                            boxShadow: '0 4px 20px rgba(39, 68, 114, 0.07)'
                        }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'var(--medi-bg-dark)', color: '#ffffff' }}>
                                        <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94a3b8' }}>Rank</th>
                                        <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94a3b8' }}>Ship</th>
                                        <th style={{ padding: '16px 20px', textAlign: 'left', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94a3b8' }}>Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { rank: '#1', ship: 'Disney Treasure', best: 'Overall Adult Experience' },
                                        { rank: '#2', ship: 'Disney Wish', best: 'Couples' },
                                        { rank: '#3', ship: 'Disney Fantasy', best: 'Entertainment' },
                                        { rank: '#4', ship: 'Disney Dream', best: 'Relaxation' },
                                        { rank: '#5', ship: 'Disney Wonder', best: 'Alaska' },
                                        { rank: '#6', ship: 'Disney Magic', best: 'Classic Disney Experience' }
                                    ].map((row, idx) => (
                                        <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : 'var(--medi-bg-soft)', borderBottom: '1px solid rgba(39,68,114,0.06)' }}>
                                            <td style={{ padding: '14px 20px', fontWeight: 700, color: 'var(--medi-navy)', fontSize: '15px' }}>{row.rank}</td>
                                            <td style={{ padding: '14px 20px', fontWeight: 600, color: '#1e293b', fontSize: '15px' }}>{row.ship}</td>
                                            <td style={{ padding: '14px 20px', color: '#475569', fontSize: '14px' }}>{row.best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                WHO SHOULD CHOOSE — AUDIENCE SPLIT SECTION
            ============================================================ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 className="medi-section-heading">Who Should Choose Disney Cruises?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Excellent For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Heart, label: 'Couples' },
                                    { icon: Sparkles, label: 'Honeymooners' },
                                    { icon: Star, label: 'Anniversary travelers' },
                                    { icon: Crown, label: 'Disney fans' },
                                    { icon: Gem, label: 'Luxury travelers' },
                                    { icon: Users, label: 'Multi-generational families' },
                                    { icon: Sun, label: 'Empty nesters' }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={i}>
                                            <div className="medi-audience-icon-wrapper best"><Icon size={20} className="medi-audience-icon" /></div>
                                            <span>{item.label}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">May Not Be Ideal For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Globe, label: 'Travelers seeking casinos' },
                                    { icon: Moon, label: 'Adults wanting nightlife-focused cruises' },
                                    { icon: Gem, label: 'Budget travelers' },
                                    { icon: Music, label: 'Party-cruise seekers' }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={i}>
                                            <div className="medi-audience-icon-wrapper not-ideal"><Icon size={20} className="medi-audience-icon" /></div>
                                            <span>{item.label}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

       

            {/* ============================================================
                EXPERT EDITORIAL SECTION
            ============================================================ */}
            <section id="disney-adult-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Expert" />
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
                                    Final Verdict
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                If you&apos;re looking for the best Disney cruise ship for adults in 2026, Disney Treasure takes the top spot thanks to its modern luxury, sophisticated dining, immersive entertainment, and adult-focused experiences.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    For couples, Disney Wish remains the most romantic option, while Disney Fantasy delivers the best nightlife and entertainment.
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Exceptional service',
                                        'Adult-only spaces',
                                        'Quality entertainment',
                                        'Luxury accommodations',
                                        'Superior dining',
                                        'World-class experiences'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                No matter which ship you choose, Disney Cruise Line offers one of the most polished, service-oriented cruise experiences available, making it a strong choice for adults seeking both relaxation and world-class entertainment.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Angela Hughes&apos; expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Disney Cruise Line', icon: Anchor },
                                        { title: 'River cruising', icon: Compass },
                                        { title: 'Expedition travel', icon: Globe },
                                        { title: 'Premium global travel planning', icon: Sparkles }
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

            {/* ============================================================
                FAQ SECTION
            ============================================================ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => mediToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {mediActiveFaq === index ? '−' : '+'}
                                    </span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                CTA SECTION
            ============================================================ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Find the Best Disney Cruise for You?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            No matter which ship you choose, Disney Cruise Line offers one of the most polished, service-oriented cruise experiences available, making it a strong choice for adults seeking both relaxation and world-class entertainment.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently select the ideal Disney Cruise experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Disney Treasure for overall luxury",
                                    "Disney Wish for couples and romance",
                                    "Disney Fantasy for nightlife and entertainment",
                                    "Disney Dream for relaxation and spa",
                                    "Disney Wonder for Alaska adventures"
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
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Disney Cruise Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestDisneyCruiseShipForAdults