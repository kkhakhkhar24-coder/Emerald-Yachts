import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
// Replace these imports with your actual Explora image assets
import exploraShip from "../../assets/image.webp"
// import mediterraneaVoyage from '../../assets/ExploraJourneys/explora-mediterranean.webp'
// import caribbeanVoyage from '../../assets/ExploraJourneys/explora-caribbean.webp'
// import northernEurope from '../../assets/ExploraJourneys/explora-northern-europe.webp'
// import atlanticVoyage from '../../assets/ExploraJourneys/explora-atlantic.webp'
// import luxurySuite from '../../assets/ExploraJourneys/explora-suite.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Waves
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
// import hero1 from '../../assets/ExploraJourneys/hero1.jpg'
// import hero2 from '../../assets/ExploraJourneys/hero2.jpg'
// import hero3 from '../../assets/ExploraJourneys/hero3.jpg'

function ExploraJourneys() {
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
            setMediActiveMistake((prev) => (prev + 1) % 4)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const mediItineraries = [
        {
            title: 'Mediterranean Voyages',
            bestFor: ['Culinary travelers', 'Couples seeking elegance', 'Historic city explorers', 'Cultural immersion seekers'],
            highlights: ['Santorini', 'Amalfi Coast', 'Barcelona', 'Monaco', 'Dubrovnik']
        },
        {
            title: 'Caribbean Cruises',
            bestFor: ['Relaxation-focused travelers', 'Wellness seekers', 'Warm-weather escapes', 'Luxury beach experiences'],
            highlights: ['St. Barts', 'Barbados', 'Martinique', 'Turks & Caicos', 'Antigua']
        },
        {
            title: 'Northern Europe & Scandinavia',
            bestFor: ['Nature-focused travelers', 'Cultural depth enthusiasts', 'Scenic cruising lovers', 'Cooler climate explorers'],
            highlights: ['Norwegian Fjords', 'Copenhagen', 'Stockholm', 'Reykjavik', 'Edinburgh']
        },
        {
            title: 'Atlantic & Transatlantic Voyages',
            bestFor: ['Experienced luxury cruisers', 'Travelers seeking longer journeys', 'Ocean wellness devotees', 'Sophisticated professionals'],
            highlights: ['Azores', 'Lisbon', 'Madeira', 'Canary Islands', 'New York']
        }
    ]

    const mediFaqs = [
        { question: 'What is Explora Journeys?', answer: 'Explora Journeys is an ultra-luxury lifestyle cruise brand created by the MSC Group, designed to compete with top-tier lines like Seabourn, Silversea, and Regent Seven Seas through a modern, wellness-focused approach.' },
        { question: 'Is Explora Journeys truly luxury?', answer: 'Yes. Explora is widely considered an ultra-luxury cruise line with oceanfront suites throughout, high crew-to-guest ratios, personalized service, and elevated contemporary design.' },
        { question: 'What is included on Explora cruises?', answer: 'Explora typically includes oceanfront suites, fine dining venues, premium beverages, gratuities, high-speed Wi-Fi, wellness programs, fitness classes, thermal spa access, concierge services, in-suite minibar, and 24-hour room service.' },
        { question: 'Are Explora cruises all-inclusive?', answer: 'Explora includes significantly more than most premium lines, though some specialty wines, shore excursions, spa treatments, and boutique purchases may carry additional charges.' },
        { question: 'What are Explora suites like?', answer: 'Explora suites are among the largest in luxury cruising, featuring ocean views, private terraces, floor-to-ceiling windows, walk-in showers, heated bathroom floors, luxury bedding, and contemporary European design.' },
        { question: 'Is Explora good for first-time luxury cruisers?', answer: 'Absolutely. The relaxed atmosphere, contemporary luxury style, spacious suites, and flexible dining make Explora especially welcoming for travelers transitioning from boutique hotels or premium resorts.' },
        { question: 'What is the dress code on Explora?', answer: 'Explora maintains an "elegant resort casual" atmosphere. Stylish resort attire and smart casual evening wear are the norm — there are no formal nights or strict dress requirements.' },
        { question: 'How does Explora compare to Seabourn?', answer: 'Explora focuses on modern lifestyle luxury and wellness with spacious suites and contemporary design, while Seabourn leans more toward traditional luxury rituals and classic onboard atmosphere.' },
        { question: 'How does Explora compare to Silversea?', answer: 'Explora is known for contemporary interiors and lifestyle-focused luxury appealing to a younger affluent demographic, while Silversea is recognized for expedition voyages, butler service, and global itineraries.' },
        { question: 'What type of travelers choose Explora?', answer: 'Explora appeals strongly to couples, sophisticated professionals, luxury hotel travelers, wellness-focused travelers, food and wine enthusiasts, and experienced international travelers who prefer boutique ship environments.' },
        { question: 'Are Explora cruises worth the money?', answer: 'For travelers prioritizing spacious suites, wellness, boutique luxury, and personalized service, Explora often delivers exceptional value within the ultra-luxury cruise market.' },
        { question: 'Which Explora itineraries are best?', answer: 'Mediterranean voyages and Caribbean cruises are especially popular, though Northern Europe and transatlantic itineraries appeal strongly to experienced luxury travelers seeking depth.' },
        { question: 'Should you book Explora through a travel advisor?', answer: 'Many travelers benefit significantly from working with a luxury cruise advisor who can compare suite categories, select ideal itineraries, access exclusive amenities, and simplify international logistics.' },
        { question: 'When should travelers book Explora cruises?', answer: 'Popular Explora voyages and premium suites often sell out early. Mediterranean summer sailings, holiday cruises, and longer itineraries should ideally be booked 9–18 months in advance.' }
    ]



const exploraLuxuryExperienceTabs = [
    {
        title: "What Is Included on Explora Cruises?",
        features: [
            "Oceanfront suites",
            "Fine dining venues",
            "Premium beverages",
            "Gratuities",
            "High-speed Wi-Fi",
            "Wellness programs",
            "Fitness classes",
            "Thermal spa access",
            "Concierge services",
            "In-suite minibar",
            "24-hour room service"
        ],
        highlights: [
            "This creates a more seamless luxury experience with fewer surprise charges onboard.",
            "Many travelers appreciate the simplified pricing structure compared with mainstream cruise lines."
        ]
    },

    {
        title: "Are Explora Cruises All Inclusive?",
        features: [
            "Explora Journeys is not technically fully all-inclusive in the same way as some ultra-luxury brands",
            "Includes significantly more than premium cruise lines",
            "Included amenities cover many onboard essentials travelers expect from luxury cruising"
        ],
        highlights: [
            "Certain premium wines and spirits",
            "Shore excursions",
            "Spa treatments",
            "Specialty experiences",
            "Boutique shopping",
            "However, overall onboard spending is often far lower than on many traditional cruise lines."
        ]
    },

    {
        title: "What Are Explora Suites Like?",
        features: [
            "Ocean views",
            "Private terraces",
            "Floor-to-ceiling windows",
            "Walk-in showers",
            "Heated bathroom floors",
            "Luxury bedding",
            "Contemporary European design"
        ],
        highlights: [
            "Ocean Terrace Suites",
            "Ocean Grand Terrace Suites",
            "Ocean Penthouses",
            "Ocean Residences",
            "Cocoon Residences",
            "Many travelers are surprised by how residential and spacious the accommodations feel."
        ]
    }
];


const exploraComparisonSections = [
    {
        eyebrow: "MODERN VS TRADITIONAL LUXURY",
        title: "How Does Explora Compare to Seabourn?",
        leftTitle: "Explora Journeys",
        leftItems: [
            "Modern luxury",
            "Wellness-focused travel",
            "Spacious suites",
            "Contemporary design",
            "Relaxed sophistication"
        ],
        rightTitle: "Seabourn",
        rightItems: [
            "Traditional luxury cruising",
            "Classic onboard atmosphere",
            "Expedition expertise",
            "More traditional luxury rituals"
        ],
        bottomText:
            "Both deliver exceptional service and boutique ship experiences, but the atmosphere differs considerably."
    },

    {
        eyebrow: "LIFESTYLE LUXURY COMPARISON",
        title: "How Does Explora Compare to Silversea?",
        leftTitle: "Explora Journeys",
        leftItems: [
            "Contemporary interiors",
            "Spacious accommodations",
            "Lifestyle-focused luxury",
            "Younger affluent demographic"
        ],
        rightTitle: "Silversea",
        rightItems: [
            "Expedition voyages",
            "Butler service",
            "Global itineraries",
            "Traditional ultra-luxury structure"
        ],
        bottomText:
            "Travelers often choose based on personal travel style rather than overall quality."
    },

    {
        eyebrow: "IDEAL TRAVELER PROFILE",
        title: "What Type of Travelers Choose Explora?",
        leftTitle: "Explora appeals strongly to:",
        leftItems: [
            "Couples",
            "Sophisticated professionals",
            "Luxury hotel travelers",
            "Wellness-focused travelers",
            "Food and wine enthusiasts",
            "Experienced international travelers",
            "Travelers avoiding mega ships"
        ],
        rightTitle: "Explora may not be ideal for:",
        rightItems: [
            "Families seeking water parks",
            "Travelers wanting nightlife-heavy environments",
            "Guests prioritizing Broadway-style entertainment",
            "Travelers seeking highly formal luxury traditions"
        ]
    },

    {
        eyebrow: "VALUE OF ULTRA-LUXURY",
        title: "Are Explora Cruises Worth the Money?",
        leftTitle: "Explora Journeys delivers value through:",
        leftItems: [
            "Spacious suites",
            "Premium inclusions",
            "Personalized service",
            "Boutique ship atmosphere",
            "Wellness-focused luxury",
            "Sophisticated dining experiences"
        ],
        rightTitle: "Travelers who prioritize:",
        rightItems: [
            "Relaxed luxury",
            "Contemporary elegance",
            "Ocean wellness",
            "Quiet sophistication",
            "Personalized travel experiences"
        ],
        bottomText:
            "often consider Explora an excellent value within the ultra-luxury cruise market."
    },

    {
        eyebrow: "CURATED DESTINATIONS",
        title: "Which Explora Itineraries Are Best?",
        leftTitle: "Mediterranean Voyages",
        leftItems: [
            "Culinary travel",
            "Historic cities",
            "Scenic coastal cruising",
            "Cultural immersion"
        ],
        rightTitle: "Caribbean Cruises",
        rightItems: [
            "Relaxation",
            "Warm-weather escapes",
            "Wellness-focused travel",
            "Luxury beach experiences"
        ],
        extraTitle: "Northern Europe & Scandinavia",
        extraItems: [
            "Scenic cruising",
            "Cultural depth",
            "Nature-focused travel",
            "Cooler climates"
        ]
    },

    {
        eyebrow: "EXPERT LUXURY PLANNING",
        title: "Should You Book Explora Through a Travel Advisor?",
        leftTitle: "Luxury cruise advisors help travelers:",
        leftItems: [
            "Compare suite categories",
            "Select ideal itineraries",
            "Access exclusive amenities",
            "Coordinate international logistics",
            "Match cruise style with travel preferences",
            "Simplify luxury cruise planning"
        ],
        rightTitle: "Advisor Benefits",
        rightItems: [
            "Experienced advisors also help travelers avoid costly booking mistakes and maximize overall value."
        ]
    }
];


    const mediMistakes = [
        {
            title: 'Choosing Based Only on Price',
            desc: 'Luxury cruising is highly experience-driven. Travelers should evaluate ship atmosphere, suite categories, included amenities, itinerary pacing, wellness offerings, and destination immersion — not just the sticker price.',
            bullets: [
                'Compare suites, not just fares',
                "Evaluate what's included versus what costs extra"
            ]
        },
        {
            title: 'Booking Too Late',
            desc: 'Popular Explora voyages and premium suites often sell out 9–18 months in advance, especially Mediterranean summer sailings, holiday cruises, and longer itineraries.'
        },
        {
            title: 'Underestimating Suite Selection',
            desc: 'Suite location and category significantly influence the onboard experience. Deck positioning, motion sensitivity, balcony size, and privacy preferences all matter.'
        },
        {
            title: 'Overlooking Wellness Offerings',
            desc: "Explora's wellness-focused amenities — thermal spa, fitness classes, mindful dining — are core to the experience. Travelers who ignore these miss a major part of what makes Explora distinctive."
        }
    ]

    const exploraSchemaData = {
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
                "@type": "WebPage",
                "name": "Explora Journeys",
                "url": "https://www.tripsandships.com/explora-journeys",
                "description": "Expert Explora Journeys cruise guide for luxury travelers from Trips & Ships Luxury Travel."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Explora Journeys", "item": "https://www.tripsandships.com/explora-journeys" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Explora Journeys truly luxury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Explora is widely considered an ultra-luxury cruise line with oceanfront suites, high crew-to-guest ratios, personalized service, and elevated contemporary design."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on Explora cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora typically includes suites, dining, premium beverages, gratuities, Wi-Fi, wellness programs, and many luxury amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Explora cruises worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For travelers prioritizing spacious suites, wellness, boutique luxury, and personalized service, Explora often delivers exceptional value."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>
                    Explora Journeys 2026 | Ultra-Luxury Lifestyle Cruise Guide | Trips & Ships
                </title>
                <meta
                    name="title"
                    content="Explora Journeys Guide 2026 | Expert Ultra-Luxury Cruise Insights"
                />
                <meta
                    name="description"
                    content="Discover Explora Journeys with expert ultra-luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Explore oceanfront suites, wellness-focused voyages, and curated itineraries for 2026."
                />
                <meta name="keywords" content="Explora Journeys, Explora Journeys cruises, ultra-luxury cruise line, luxury cruise suites, Explora Journeys Mediterranean, MSC luxury cruise" />
                <script type="application/ld+json">
                    {JSON.stringify(exploraSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
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
                        <span>Ultra-Luxury Lifestyle Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Explora Journeys: Everything You Need to Know Before Booking an Ultra-Luxury Cruise
                    </h1>
                </div>
            </section>

            {/* PREMIUM INTRO SECTION */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Title & Core editorial intro */}
                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">MODERN ULTRA-LUXURY</span>
                            <h2 className="medi-premium-heading">Discover Why Luxury Travelers Are Choosing Explora Journeys</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Explora Journeys has quickly become one of the most discussed names in ultra-luxury cruising. Created by the MSC Group, Explora was specifically designed to bring a modern, lifestyle-focused approach to the world of high-end ocean travel.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Unlike traditional luxury cruise lines, Explora Journeys was built around a philosophy emphasizing:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Spacious oceanfront suites</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sun size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Wellness-focused travel</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Ship size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Boutique ship atmosphere</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Utensils size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Culinary excellence</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Relaxed sophistication</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Anchor size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Contemporary European elegance</span>
                                    </div>
                                </div>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers determine whether Explora aligns with their travel style, expectations, and luxury preferences.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in luxury travel, visits to over 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year, Angela Hughes offers unmatched insight into whether Explora Journeys is right for you.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHY EXPLORA EXCELS */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">ULTRA-LUXURY LIFESTYLE CRUISING // EXPLORA JOURNEYS</div>
                <div className="medi-excel-coord coord-tr">43.7001° N, 7.2620° E</div>
                <div className="medi-excel-coord coord-bl">25.7617° N, 80.1918° W</div>
                <div className="medi-excel-coord coord-br">59.9139° N, 10.7522° E</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">What Is Explora Journeys?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Explora Journeys is the ultra-luxury lifestyle cruise brand created by the MSC Group — designed to compete with the world's finest ocean cruise lines.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Explora competes directly with leading ultra-luxury brands including:
                                </h3>
                                <ul className="medi-excel-list">
                                    {['Seabourn', 'Silversea', 'Regent Seven Seas', 'Oceania Cruises', 'Viking Cruises'].map((brand, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                <Star size={18} />
                                            </div>
                                            <span>{brand}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    However, Explora offers a distinctly modern approach through:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Sparkles, label: 'Modern luxury aesthetics' },
                                        { icon: Sun, label: 'Wellness-oriented travel' },
                                        { icon: Ship, label: 'Boutique ship atmosphere' },
                                        { icon: Globe, label: 'Destination immersion' },
                                        { icon: Utensils, label: 'Culinary excellence' },
                                        { icon: Crown, label: 'Relaxed sophistication' }
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                <Icon size={18} />
                                            </div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge">
                            <Sparkles size={20} />
                        </div>
                        <p className="medi-excel-footer-paragraph">
                            Many travelers describe Explora as "a luxury boutique hotel at sea" — a fitting summary of its residential, relaxed, and refined onboard experience.
                        </p>
                    </div>

                </div>
            </section>

            {/* WHAT MAKES EXPLORA DIFFERENT */}
           <section className="medi-diff-section">
    <div className="medi-diff-container">

        {/* HEADER */}
        <div className="medi-diff-header-block">
            <span className="medi-diff-eyebrow-tag">
                MODERN ULTRA-LUXURY CRUISING
            </span>

            <h2 className="medi-diff-main-title">
                Is Explora Journeys Truly Luxury?
            </h2>

            <div className="medi-diff-separator"></div>
        </div>

        {/* HERO CENTER PANEL */}
        <div
            style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #1f3555 0%, #274472 100%)',
                borderRadius: '38px',
                padding: '70px 60px',
                overflow: 'hidden',
                marginBottom: '38px'
            }}
        >

            {/* Decorative Shapes */}
            <div
                style={{
                    position: 'absolute',
                    width: '340px',
                    height: '340px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    top: '-160px',
                    right: '-100px'
                }}
            ></div>

            <div
                style={{
                    position: 'absolute',
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    bottom: '-80px',
                    left: '-80px'
                }}
            ></div>

            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: '980px',
                    margin: '0 auto'
                }}
            >

                <span
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '84px',
                        height: '84px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        fontSize: '34px',
                        fontWeight: '700',
                        marginBottom: '28px'
                    }}
                >
                    ✓
                </span>

                <h3
                    style={{
                        fontSize: '64px',
                        lineHeight: '1.1',
                        color: '#ffffff',
                        margin: '0 0 24px 0',
                        fontWeight: '600',
                        letterSpacing: '-0.03em'
                    }}
                >
                    Yes.
                </h3>

                <p
                    style={{
                        fontSize: '22px',
                        lineHeight: '1.9',
                        color: 'rgba(255,255,255,0.88)',
                        margin: 0,
                        maxWidth: '900px'
                    }}
                >
                    Explora Journeys is widely considered an ultra-luxury cruise line.
                </p>

            </div>

        </div>

        {/* MAIN GRID */}
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '34px',
                marginBottom: '34px'
            }}
        >

            {/* LEFT SIDE */}
            <div
                style={{
                    background: '#ffffff',
                    borderRadius: '34px',
                    padding: '42px',
                    border: '1px solid rgba(39,68,114,0.08)',
                    boxShadow: '0 18px 50px rgba(15,28,46,0.05)',
                    transition: 'all 0.35s ease',
                    cursor: 'pointer'
                }}

                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(15,28,46,0.10)';
                }}

                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '0 18px 50px rgba(15,28,46,0.05)';
                }}
            >

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '34px'
                    }}
                >

                    <div
                        style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '22px',
                            background: '#eef5f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Crown size={34} color="#274472" />
                    </div>

                    <div>

                        <span
                            style={{
                                display: 'block',
                                fontSize: '12px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: '#274472',
                                opacity: 0.7,
                                marginBottom: '6px'
                            }}
                        >
                            Luxury Features Include
                        </span>

                        <h3
                            style={{
                                margin: 0,
                                fontSize: '34px',
                                lineHeight: '1.3',
                                color: '#274472',
                                fontWeight: '600'
                            }}
                        >
                            Ultra-Luxury Features
                        </h3>

                    </div>

                </div>

                <div
                    style={{
                        display: 'grid',
                        gap: '18px'
                    }}
                >
                    {[
                        'Oceanfront suites throughout the ship',
                        'Spacious private terraces',
                        'High crew-to-guest ratios',
                        'Personalized service',
                        'Premium dining',
                        'Elegant contemporary design',
                        'Wellness-focused amenities'
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '18px',
                                padding: '20px',
                                borderRadius: '20px',
                                background: '#f8fbfd',
                                border: '1px solid rgba(39,68,114,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >

                            <div
                                style={{
                                    width: '42px',
                                    height: '42px',
                                    minWidth: '42px',
                                    borderRadius: '14px',
                                    background: '#274472',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    fontSize: '14px'
                                }}
                            >
                                0{idx + 1}
                            </div>

                            <span
                                style={{
                                    fontSize: '17px',
                                    lineHeight: '1.7',
                                    color: '#274472',
                                    fontWeight: '500'
                                }}
                            >
                                {item}
                            </span>

                        </div>
                    ))}
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div
                style={{
                    background: '#ffffff',
                    borderRadius: '34px',
                    overflow: 'hidden',
                    border: '1px solid rgba(39,68,114,0.08)',
                    boxShadow: '0 18px 50px rgba(15,28,46,0.05)'
                }}
            >

                {/* TOP */}
                <div
                    style={{
                        background: 'linear-gradient(135deg, #274472 0%, #1f3555 100%)',
                        padding: '48px 42px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >

                    <div
                        style={{
                            position: 'absolute',
                            width: '220px',
                            height: '220px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            top: '-100px',
                            right: '-80px'
                        }}
                    ></div>

                    <div
                        style={{
                            position: 'relative',
                            zIndex: 2
                        }}
                    >

                        <span
                            style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'rgba(255,255,255,0.72)',
                                marginBottom: '18px'
                            }}
                        >
                            Explora Emphasizes
                        </span>

                        <h3
                            style={{
                                fontSize: '38px',
                                lineHeight: '1.25',
                                color: '#ffffff',
                                margin: 0,
                                fontWeight: '600'
                            }}
                        >
                            Contemporary Luxury Philosophy
                        </h3>

                    </div>

                </div>

                {/* MIDDLE */}
                <div
                    style={{
                        padding: '40px'
                    }}
                >

                    {/* Emphasizes */}
                    <div
                        style={{
                            marginBottom: '38px'
                        }}
                    >

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '14px'
                            }}
                        >
                            {[
                                'Modern luxury',
                                'Relaxed sophistication',
                                'Contemporary interiors',
                                'Quiet social spaces',
                                'Wellness-oriented travel'
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: '14px 20px',
                                        borderRadius: '40px',
                                        background: '#eef5f7',
                                        color: '#274472',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}

                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.background = '#274472';
                                        e.currentTarget.style.color = '#ffffff';
                                    }}

                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0px)';
                                        e.currentTarget.style.background = '#eef5f7';
                                        e.currentTarget.style.color = '#274472';
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Rather Than */}
                    <div
                        style={{
                            padding: '34px',
                            borderRadius: '26px',
                            background: '#f8fbfd',
                            border: '1px solid rgba(39,68,114,0.05)',
                            marginBottom: '34px'
                        }}
                    >

                        <span
                            style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.10em',
                                color: '#274472',
                                marginBottom: '24px'
                            }}
                        >
                            Rather than:
                        </span>

                        <div
                            style={{
                                display: 'grid',
                                gap: '18px'
                            }}
                        >
                            {[
                                'Ultra-formal evenings',
                                'Traditional cruise entertainment',
                                'Large-scale onboard attractions'
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px'
                                    }}
                                >

                                    <div
                                        style={{
                                            width: '38px',
                                            height: '38px',
                                            borderRadius: '12px',
                                            background: '#ffffff',
                                            border: '1px solid rgba(39,68,114,0.08)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#274472',
                                            fontWeight: '700'
                                        }}
                                    >
                                        —
                                    </div>

                                    <span
                                        style={{
                                            fontSize: '17px',
                                            color: '#274472',
                                            lineHeight: '1.6',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {item}
                                    </span>

                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Bottom Quote */}
                    <div
                        style={{
                            background: '#274472',
                            borderRadius: '24px',
                            padding: '34px'
                        }}
                    >

                        <p
                            style={{
                                margin: 0,
                                fontSize: '18px',
                                lineHeight: '1.9',
                                color: 'rgba(255,255,255,0.92)',
                                fontWeight: '500'
                            }}
                        >
                            For many affluent travelers, this contemporary approach feels more aligned with current luxury travel preferences.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>




            {/* ITINERARIES SHOWCASE */}




            <section className="medi-itinerary-showcase-section">
    <div className="medi-itinerary-showcase-container">

        <div className="medi-itinerary-showcase-header">

            <span className="medi-itinerary-eyebrow">
                INCLUDED ULTRA-LUXURY EXPERIENCE
            </span>

            <h2 className="medi-itinerary-showcase-heading">
                Explora Journeys Luxury Experience Guide
            </h2>

            <div className="medi-itinerary-showcase-separator"></div>

        </div>

        <div className="medi-itinerary-dashboard">

            {/* LEFT SIDE */}
            <div className="medi-itinerary-tabs">

                {exploraLuxuryExperienceTabs.map((item, idx) => (
                    <button
                        key={idx}
                        className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                        onClick={() => setMediSelectedItinerary(idx)}
                    >

                        <span className="medi-itinerary-tab-number">
                            0{idx + 1}
                        </span>

                        <div className="medi-itinerary-tab-meta">

                            <span className="medi-itinerary-tab-title">
                                {item.title}
                            </span>

                        </div>

                        <ChevronRight
                            size={18}
                            className="medi-itinerary-tab-arrow"
                        />

                    </button>
                ))}

            </div>

            {/* RIGHT SIDE */}
            <div className="medi-itinerary-showcase-card">

                <div className="medi-itinerary-showcase-image-wrapper">

                    <div className="medi-itinerary-showcase-img-overlay"></div>

                    <span className="medi-itinerary-showcase-badge">
                        LUXURY EXPERIENCE GUIDE
                    </span>

                </div>

                <div className="medi-itinerary-showcase-body">

                    <h3 className="medi-itinerary-showcase-title">
                        {exploraLuxuryExperienceTabs[mediSelectedItinerary].title}
                    </h3>

                    <div className="medi-itinerary-details-grid">

                        {/* LEFT */}
                        <div className="medi-itinerary-details-col">

                            <h4 className="medi-itinerary-details-heading">
                                Included Features:
                            </h4>

                            <ul className="medi-itinerary-details-list">

                                {exploraLuxuryExperienceTabs[mediSelectedItinerary].features.map((item, i) => (
                                    <li key={i}>

                                        <Sparkles
                                            size={14}
                                            className="medi-itinerary-detail-icon"
                                        />

                                        <span>{item}</span>

                                    </li>
                                ))}

                            </ul>

                        </div>

                        {/* RIGHT */}
                        <div className="medi-itinerary-details-col">

                            <h4 className="medi-itinerary-details-heading">
                                Highlights:
                            </h4>

                            <div className="medi-itinerary-details-chips">

                                {exploraLuxuryExperienceTabs[mediSelectedItinerary].highlights.map((item, i) => (
                                    <span
                                        key={i}
                                        className="medi-itinerary-details-chip"
                                    >

                                        <MapPin
                                            size={12}
                                            className="medi-itinerary-chip-icon"
                                        />

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
         

            {/* EXPERT INSIGHT */}
            <section id="explora-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        {/* Left Side: Portrait and Floating Stat Badge */}
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={exploraShip} alt="Angela Hughes - Luxury Cruise Expert" />
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

                        {/* Right Side: Editorial Text */}
                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Modern Luxury Travelers <br className="medi-growth-title-break" />Are Choosing Explora
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, many travelers are initially attracted to Explora Journeys because of its ship design and luxury marketing — but ultimately fall in love with the onboard atmosphere.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Explora travelers prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Quiet sophistication',
                                        'Spacious accommodations',
                                        'Contemporary luxury',
                                        'Wellness experiences',
                                        'Boutique ship environments',
                                        'Personalized service'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Ultra-luxury cruising', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Cultural travel', icon: Globe },
                                        { title: 'Global luxury travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <IconComponent size={14} />
                                                </div>
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

            {/* IS EXPLORA TRULY LUXURY */}
           <section className="medi-luxury-definition-section">
    <div className="medi-luxury-definition-container">

        <div className="medi-luxury-content-wrapper">

            {/* TOP HEADER */}
            <span className="medi-luxury-eyebrow-label">
                FIRST-TIME LUXURY CRUISING
            </span>

            <h2 className="medi-luxury-heading">
                Is Explora Good for First-Time Luxury Cruisers?
            </h2>

            <p className="medi-luxury-paragraph">
                Absolutely.
            </p>

            <p className="medi-luxury-paragraph">
                Explora is particularly appealing for travelers new to luxury cruising because of its:
            </p>

            {/* FEATURE GRID */}
            <div className="medi-luxury-appreciated-box">

                <div className="medi-luxury-features-grid">

                    {[
                        'Relaxed atmosphere',
                        'Contemporary luxury style',
                        'Spacious suites',
                        'Flexible dining',
                        'Less formal environment',
                        'Boutique ship size'
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="medi-luxury-feature"
                        >

                            <CheckCircle
                                size={20}
                                className="medi-feature-check-icon"
                            />

                            <span>{feature}</span>

                        </div>
                    ))}

                </div>

            </div>

            {/* TRANSITION TEXT */}
            <div className="medi-luxury-comparison-note">

                <p className="medi-luxury-paragraph">
                    Travelers transitioning from:
                </p>

                <div className="medi-luxury-features-grid">

                    {[
                        'Luxury resorts',
                        'Boutique hotels',
                        'Premium cruises'
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="medi-luxury-feature"
                        >

                            <CheckCircle
                                size={20}
                                className="medi-feature-check-icon"
                            />

                            <span>{feature}</span>

                        </div>
                    ))}

                </div>

                <p className="medi-luxury-paragraph" style={{ marginTop: '24px' }}>
                    often find Explora to be a comfortable and approachable introduction to ultra-luxury cruising.
                </p>

            </div>

            {/* SECOND BLOCK */}
            <div
                className="medi-luxury-appreciated-box"
                style={{ marginTop: '40px' }}
            >

                <span className="medi-luxury-eyebrow-label">
                    RELAXED LUXURY STYLE
                </span>

                <h2
                    className="medi-luxury-heading"
                    style={{ marginTop: '12px' }}
                >
                    What Is the Dress Code on Explora?
                </h2>

                <p className="medi-luxury-paragraph">
                    Explora Journeys maintains a relaxed luxury atmosphere.
                </p>

                <p className="medi-luxury-paragraph">
                    The onboard dress code is best described as:
                </p>

                <div
                    style={{
                        background: 'linear-gradient(135deg, #274472 0%, #1f3555 100%)',
                        padding: '28px',
                        borderRadius: '24px',
                        textAlign: 'center',
                        margin: '30px 0'
                    }}
                >
                    <h3
                        style={{
                            color: '#ffffff',
                            fontSize: '32px',
                            margin: '0',
                            fontWeight: '600',
                            lineHeight: '1.3'
                        }}
                    >
                        “Elegant resort casual.”
                    </h3>
                </div>

                <p className="medi-luxury-paragraph">
                    Travelers generally wear:
                </p>

                <div className="medi-luxury-features-grid">

                    {[
                        'Stylish resort attire',
                        'Smart casual evening wear',
                        'Relaxed luxury fashion'
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="medi-luxury-feature"
                        >

                            <CheckCircle
                                size={20}
                                className="medi-feature-check-icon"
                            />

                            <span>{feature}</span>

                        </div>
                    ))}

                </div>

                <p
                    className="medi-luxury-paragraph"
                    style={{ marginTop: '30px' }}
                >
                    Explora does not emphasize:
                </p>

                <div className="medi-luxury-features-grid">

                    {[
                        'Formal nights',
                        'Tuxedos',
                        'Strict dress requirements'
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="medi-luxury-feature"
                        >

                            <CheckCircle
                                size={20}
                                className="medi-feature-check-icon"
                            />

                            <span>{feature}</span>

                        </div>
                    ))}

                </div>

                <p
                    className="medi-luxury-paragraph"
                    style={{ marginTop: '28px' }}
                >
                    This appeals strongly to modern luxury travelers who prefer understated sophistication.
                </p>

            </div>

        </div>

    </div>
</section>


<section
    style={{
        padding: '50px 15px',
        background: '#f7fafc'
    }}
>

    <div
        style={{
            maxWidth: '1400px',
            margin: '0 auto'
        }}
    >

        {/* HEADER */}
        <div
            style={{
                textAlign: 'center',
                marginBottom: '40px'
            }}
        >

            <span
                style={{
                    display: 'inline-flex',
                    padding: '10px 18px',
                    borderRadius: '40px',
                    background: '#e8f0f7',
                    color: '#274472',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                }}
            >
                EXPLORA COMPARISON GUIDE
            </span>

            <h2
                style={{
                    fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '28px' : '48px',
                    color: '#1f3555',
                    margin: '0',
                    fontWeight: '600',
                    lineHeight: '1.2'
                }}
            >
                Explore the Explora Luxury Experience
            </h2>

        </div>

        {/* TABS */}
        <div
            style={{
                display: 'flex',
                gap: '14px',
                overflowX: 'auto',
                paddingBottom: '12px',
                marginBottom: '35px',
                scrollbarWidth: 'none'
            }}
        >

            {exploraComparisonSections.map((section, index) => (

                <button
                    key={index}
                    onClick={() => setMediSelectedItinerary(index)}
                    style={{
                        minWidth: window.innerWidth <= 480 ? '220px' : '260px',
                        padding: window.innerWidth <= 480 ? '18px' : '22px',
                        borderRadius: '24px',
                        border:
                            mediSelectedItinerary === index
                                ? '1px solid #274472'
                                : '1px solid rgba(39,68,114,0.08)',
                        background:
                            mediSelectedItinerary === index
                                ? '#274472'
                                : '#ffffff',
                        color:
                            mediSelectedItinerary === index
                                ? '#ffffff'
                                : '#274472',
                        cursor: 'pointer',
                        transition: 'all 0.35s ease',
                        textAlign: 'left',
                        flexShrink: 0,
                        boxShadow:
                            mediSelectedItinerary === index
                                ? '0 20px 40px rgba(39,68,114,0.18)'
                                : '0 10px 30px rgba(15,23,42,0.04)'
                    }}
                    onMouseEnter={(e) => {
                        if (mediSelectedItinerary !== index) {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow =
                                '0 18px 40px rgba(15,23,42,0.08)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (mediSelectedItinerary !== index) {
                            e.currentTarget.style.transform = 'translateY(0px)';
                            e.currentTarget.style.boxShadow =
                                '0 10px 30px rgba(15,23,42,0.04)';
                        }
                    }}
                >

                    <div
                        style={{
                            fontSize: '13px',
                            letterSpacing: '0.12em',
                            opacity: '0.7',
                            marginBottom: '10px',
                            fontWeight: '700'
                        }}
                    >
                        0{index + 1}
                    </div>

                    <h3
                        style={{
                            margin: '0',
                            fontSize: window.innerWidth <= 480 ? '18px' : '22px',
                            lineHeight: '1.4',
                            fontWeight: '600'
                        }}
                    >
                        {section.title}
                    </h3>

                </button>

            ))}

        </div>

        {/* ACTIVE CONTENT */}
        <div
            style={{
                background: '#ffffff',
                borderRadius: window.innerWidth <= 480 ? '24px' : '36px',
                padding:
                    window.innerWidth <= 480
                        ? '24px'
                        : window.innerWidth <= 768
                            ? '35px'
                            : '55px',
                boxShadow: '0 20px 60px rgba(15,23,42,0.05)',
                border: '1px solid rgba(39,68,114,0.06)'
            }}
        >

            {/* TITLE */}
            <div
                style={{
                    marginBottom: '35px'
                }}
            >

                <span
                    style={{
                        display: 'inline-flex',
                        padding: '8px 14px',
                        borderRadius: '40px',
                        background: '#eef5f7',
                        color: '#274472',
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '18px'
                    }}
                >
                    {exploraComparisonSections[mediSelectedItinerary].eyebrow}
                </span>

                <h2
                    style={{
                        margin: '0',
                        color: '#1f3555',
                        fontSize:
                            window.innerWidth <= 480
                                ? '24px'
                                : window.innerWidth <= 768
                                    ? '28px'
                                    : '48px',
                        lineHeight: '1.2',
                        fontWeight: '600'
                    }}
                >
                    {exploraComparisonSections[mediSelectedItinerary].title}
                </h2>

            </div>

            {/* GRID */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns:
                        window.innerWidth <= 768
                            ? '1fr'
                            : '1fr 1fr',
                    gap: '28px'
                }}
            >

                {/* LEFT CARD */}
                <div
                    style={{
                        background: '#f8fbfd',
                        borderRadius: '28px',
                        padding:
                            window.innerWidth <= 480
                                ? '22px'
                                : '32px',
                        border: '1px solid rgba(39,68,114,0.06)'
                    }}
                >

                    <h3
                        style={{
                            margin: '0 0 24px',
                            color: '#1f3555',
                            fontSize:
                                window.innerWidth <= 480
                                    ? '22px'
                                    : '30px',
                            lineHeight: '1.3',
                            fontWeight: '600'
                        }}
                    >
                        {
                            exploraComparisonSections[mediSelectedItinerary]
                                .leftTitle
                        }
                    </h3>

                    <div
                        style={{
                            display: 'grid',
                            gap: '16px'
                        }}
                    >

                        {exploraComparisonSections[
                            mediSelectedItinerary
                        ].leftItems.map((item, idx) => (

                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '14px',
                                    background: '#ffffff',
                                    padding:
                                        window.innerWidth <= 480
                                            ? '15px'
                                            : '18px',
                                    borderRadius: '18px',
                                    border:
                                        '1px solid rgba(39,68,114,0.05)',
                                    transition: 'all 0.35s ease'
                                }}
                            >

                                <div
                                    style={{
                                        width: '38px',
                                        height: '38px',
                                        minWidth: '38px',
                                        borderRadius: '12px',
                                        background: '#274472',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}
                                >
                                    <CheckCircle size={16} />
                                </div>

                                <span
                                    style={{
                                        fontSize:
                                            window.innerWidth <= 480
                                                ? '16px'
                                                : window.innerWidth <= 768
                                                    ? '17px'
                                                    : '18px',
                                        lineHeight: '1.7',
                                        color: '#274472',
                                        fontWeight: '500'
                                    }}
                                >
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

                {/* RIGHT CARD */}
                <div
                    style={{
                        background: '#f8fbfd',
                        borderRadius: '28px',
                        padding:
                            window.innerWidth <= 480
                                ? '22px'
                                : '32px',
                        border: '1px solid rgba(39,68,114,0.06)'
                    }}
                >

                    <h3
                        style={{
                            margin: '0 0 24px',
                            color: '#1f3555',
                            fontSize:
                                window.innerWidth <= 480
                                    ? '22px'
                                    : '30px',
                            lineHeight: '1.3',
                            fontWeight: '600'
                        }}
                    >
                        {
                            exploraComparisonSections[mediSelectedItinerary]
                                .rightTitle
                        }
                    </h3>

                    <div
                        style={{
                            display: 'grid',
                            gap: '16px'
                        }}
                    >

                        {exploraComparisonSections[
                            mediSelectedItinerary
                        ].rightItems.map((item, idx) => (

                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '14px',
                                    background: '#ffffff',
                                    padding:
                                        window.innerWidth <= 480
                                            ? '15px'
                                            : '18px',
                                    borderRadius: '18px',
                                    border:
                                        '1px solid rgba(39,68,114,0.05)'
                                }}
                            >

                                <div
                                    style={{
                                        width: '38px',
                                        height: '38px',
                                        minWidth: '38px',
                                        borderRadius: '12px',
                                        background: '#5b7aa5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}
                                >
                                    <Sparkles size={16} />
                                </div>

                                <span
                                    style={{
                                        fontSize:
                                            window.innerWidth <= 480
                                                ? '16px'
                                                : window.innerWidth <= 768
                                                    ? '17px'
                                                    : '18px',
                                        lineHeight: '1.7',
                                        color: '#274472',
                                        fontWeight: '500'
                                    }}
                                >
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* EXTRA CARD */}
            {exploraComparisonSections[mediSelectedItinerary].extraTitle && (

                <div
                    style={{
                        marginTop: '28px',
                        background: '#f8fbfd',
                        borderRadius: '28px',
                        padding:
                            window.innerWidth <= 480
                                ? '22px'
                                : '32px',
                        border: '1px solid rgba(39,68,114,0.06)'
                    }}
                >

                    <h3
                        style={{
                            margin: '0 0 24px',
                            color: '#1f3555',
                            fontSize:
                                window.innerWidth <= 480
                                    ? '22px'
                                    : '30px',
                            lineHeight: '1.3',
                            fontWeight: '600'
                        }}
                    >
                        {
                            exploraComparisonSections[
                                mediSelectedItinerary
                            ].extraTitle
                        }
                    </h3>

                    <div
                        style={{
                            display: 'grid',
                            gap: '16px'
                        }}
                    >

                        {exploraComparisonSections[
                            mediSelectedItinerary
                        ].extraItems.map((item, idx) => (

                            <div
                                key={idx}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '14px',
                                    background: '#ffffff',
                                    padding:
                                        window.innerWidth <= 480
                                            ? '15px'
                                            : '18px',
                                    borderRadius: '18px',
                                    border:
                                        '1px solid rgba(39,68,114,0.05)'
                                }}
                            >

                                <div
                                    style={{
                                        width: '38px',
                                        height: '38px',
                                        minWidth: '38px',
                                        borderRadius: '12px',
                                        background: '#274472',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}
                                >
                                    <MapPin size={16} />
                                </div>

                                <span
                                    style={{
                                        fontSize:
                                            window.innerWidth <= 480
                                                ? '16px'
                                                : window.innerWidth <= 768
                                                    ? '17px'
                                                    : '18px',
                                        lineHeight: '1.7',
                                        color: '#274472',
                                        fontWeight: '500'
                                    }}
                                >
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            )}

            {/* BOTTOM NOTE */}
            {exploraComparisonSections[mediSelectedItinerary].bottomText && (

                <div
                    style={{
                        marginTop: '30px',
                        padding:
                            window.innerWidth <= 480
                                ? '22px'
                                : '32px',
                        borderRadius: '26px',
                        background:
                            'linear-gradient(135deg,#274472 0%,#1f3555 100%)'
                    }}
                >

                    <p
                        style={{
                            margin: '0',
                            color: '#ffffff',
                            fontSize:
                                window.innerWidth <= 480
                                    ? '16px'
                                    : window.innerWidth <= 768
                                        ? '17px'
                                        : '18px',
                            lineHeight: '1.9',
                            fontWeight: '500'
                        }}
                    >
                        {
                            exploraComparisonSections[
                                mediSelectedItinerary
                            ].bottomText
                        }
                    </p>

                </div>

            )}

        </div>

    </div>

</section>

            {/* COMMON MISTAKES SLIDER */}
            <section
                className="medi-mistakes-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="medi-section-heading">Common Mistakes Travelers Make Before Booking Explora</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-mistakes-slider-wrapper">
                        {/* Left Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-mistakes-slides-track">
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx
                                return (
                                    <div
                                        key={idx}
                                        className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}
                                    >
                                        <div className="medi-mistake-slide-header">
                                            <span className="medi-mistake-card-num">0{idx + 1}</span>
                                            <h3 className="medi-mistake-card-title">{mistake.title}</h3>
                                        </div>

                                        <div className="medi-mistake-slide-body">
                                            <p className="medi-mistake-card-description">{mistake.desc}</p>

                                            {mistake.bullets && mistake.bullets.length > 0 && (
                                                <ul className="medi-mistake-card-bullets-list">
                                                    {mistake.bullets.map((bullet, bulletIdx) => (
                                                        <li key={bulletIdx} className="medi-mistake-card-bullet-item">
                                                            <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                                onClick={() => setMediActiveMistake(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY WORK WITH US */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">

                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Luxury cruise planning has become increasingly specialized. Experienced advisors help travelers maximize every aspect of an Explora Journeys experience.
                        </p>
                    </div>

                    <div className="medi-work-timeline-flow">
                        <div className="medi-timeline-line"></div>

                        {/* Step 1 */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Compass size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Working with experienced luxury advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        { icon: CheckCircle, text: 'Compare suite categories accurately' },
                                        { icon: Calendar, text: 'Select ideal itineraries' },
                                        { icon: Crown, text: 'Access exclusive amenities' },
                                        { icon: Gem, text: 'Coordinate international logistics' },
                                        { icon: Compass, text: 'Match cruise style with travel preferences' },
                                        { icon: MapPin, text: 'Avoid costly booking mistakes' }
                                    ].map(({ icon: Icon, text }, i) => (
                                        <li key={i}>
                                            <Icon size={18} className="medi-pillar-list-icon icon-theme" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node">
                                <Award size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is globally recognized for luxury travel expertise through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        { icon: Mic, text: 'Travel industry speaking engagements' },
                                        { icon: FileText, text: 'Weekly travel columns' },
                                        { icon: Award, text: 'Advisory board leadership' },
                                        { icon: Globe, text: 'International media recognition' },
                                        { icon: GraduationCap, text: 'Luxury Travel University training programs' }
                                    ].map(({ icon: Icon, text }, i) => (
                                        <li key={i}>
                                            <Icon size={18} className="medi-pillar-list-icon icon-theme" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Ship size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 03</div>
                                <h3 className="medi-pillar-title">Trips & Ships Luxury Travel specializes in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    {[
                                        { icon: Ship, text: 'Ultra-luxury cruises' },
                                        { icon: Anchor, text: 'Boutique ship experiences' },
                                        { icon: Compass, text: 'Expedition cruising' },
                                        { icon: Star, text: 'Personalized luxury travel' },
                                        { icon: MapPin, text: 'Global premium travel planning' }
                                    ].map(({ icon: Icon, text }, i) => (
                                        <li key={i}>
                                            <Icon size={18} className="medi-pillar-list-icon icon-theme" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY BOX */}
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
                                <span className="medi-prestige-initials">AH</span>
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
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
                                    { text: "International luxury travel speaker", icon: Mic, category: "SPEAKING" },
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
                                            <div className="medi-prestige-item-icon-box">
                                                <IconComp size={16} />
                                            </div>
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

       


            {/* FAQ SECTION */}
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
                                        {mediActiveFaq === index ? "−" : "+"}
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

                 {/* CTA SECTION */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Experience Explora Journeys?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury cruising is deeply personal. Explora Journeys offers one of the most compelling modern ultra-luxury cruise experiences available today — designed for travelers who prioritize contemporary elegance, spacious suites, and wellness-focused exploration.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently compare luxury cruise lines, select ideal suites, and design highly personalized luxury vacations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Mediterranean luxury cruises",
                                    "Caribbean voyages",
                                    "Boutique ship experiences",
                                    "Wellness-focused travel",
                                    "Ultra-luxury cruising"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips & Ships Luxury Travel provides expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploraJourneys