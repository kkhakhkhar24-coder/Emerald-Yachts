import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import azamaraShip from "../../assets/image.webp"
import greeceCruise from '../../assets/AzamaraMediterraneanCruises/Azamara Greece cruise itinerary.webp'
import italyCruise from '../../assets/AzamaraMediterraneanCruises/Azamara Italy luxury cruise.webp'
import croatiaCoast from '../../assets/AzamaraMediterraneanCruises/Boutique Mediterranean cruise experience.webp'
import spainCruise from '../../assets/AzamaraMediterraneanCruises/Angela Hughes luxury cruise expert.webp'
// import luxurySuite from '../../assets/AzamaraMediterraneanCruises/Azamara Truly Luxury.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap,
    Maximize,
    Check,
    GlassWater,
    CircleDollarSign,
    Wifi,
    Waves,
    Dumbbell,
    Coffee,
    Home
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect, Activity } from 'react'
import hero1 from '../../assets/AzamaraMediterraneanCruises/hero1.jpg'
import hero2 from '../../assets/AzamaraMediterraneanCruises/hero2.jpg'
import hero3 from '../../assets/AzamaraMediterraneanCruises/hero3.jpg'

function BestSuitesExploraJourneys() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

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
            title: "Ocean Terrace Suites",
            subTitle: "Best for First-Time Luxury Cruisers",
            description: "Ocean Terrace Suites are the entry-level category, but they remain among the most spacious standard accommodations in luxury cruising.",
            bestFor: ["Excellent value in ultra-luxury cruising", "Spacious layout", "Modern luxury design", "Comfortable for extended voyages", "Ideal introduction to Explora Journeys"],
            highlights: ["Private terrace with daybed", "Floor-to-ceiling windows", "Walk-in shower", "Heated bathroom floors", "King-size bed", "Sitting area", "Walk-in wardrobe", "In-suite minibar", "Espresso machine"],
            footer: "For many travelers, Ocean Terrace Suites already exceed expectations compared to premium cruise lines."
        },
        {
            title: "Ocean Grand Terrace Suites",
            subTitle: "Best for Outdoor Living",
            description: "Ocean Grand Terrace Suites expand significantly on balcony and outdoor living space. These suites are especially popular on Mediterranean itineraries, Caribbean voyages, and scenic coastal sailings.",
            bestFor: ["Mediterranean itineraries", "Caribbean voyages", "Scenic coastal sailings"],
            highlights: ["Larger private terrace", "Outdoor dining space", "Expanded seating areas", "Additional natural light", "Enhanced ocean views"],
            footer: "Travelers who prioritize private outdoor relaxation often consider this category one of the best value upgrades onboard."
        },
        {
            title: "Ocean Penthouses",
            subTitle: "Best for Elevated Luxury Experiences",
            description: "Ocean Penthouses introduce a noticeably more elevated luxury experience. The atmosphere feels more residential and exclusive while maintaining Explora’s relaxed luxury approach.",
            bestFor: ["Couples celebrating milestones", "Luxury hotel travelers", "Experienced cruisers", "Travelers prioritizing suite time"],
            highlights: ["Larger interior living areas", "Expanded concierge services", "Priority reservations", "Premium suite locations", "Enhanced privacy", "More luxurious finishes"],
            footer: ""
        },
        {
            title: "Ocean Residences",
            subTitle: "Best Overall Suites on Explora Journeys",
            description: "Ocean Residences represent some of the finest accommodations in luxury cruising. These suites are significantly larger and often compared favorably with luxury yacht residences, high-end boutique hotels, or private luxury apartments.",
            bestFor: ["Extended luxury voyages", "Entertaining", "Wellness-focused travel", "High-privacy luxury experiences"],
            highlights: ["Separate living and sleeping areas", "Expansive terraces", "Dining space", "Premium oceanfront positioning", "Personalized butler-style service", "Enhanced amenities", "Priority experiences"],
            footer: ""
        },
        {
            title: "Cocoon Residences",
            subTitle: "Best for Ultimate Privacy and Luxury",
            description: "Cocoon Residences are among the most prestigious accommodations onboard, representing Explora’s highest tier of contemporary luxury.",
            bestFor: ["Maximum space", "Private luxury", "VIP-level experiences", "Extended voyages", "Sophisticated entertaining"],
            highlights: ["Panoramic ocean views", "Large wraparound terraces", "Exclusive positioning on the ship", "Exceptional privacy", "Separate dining and living spaces", "Ultra-premium amenities"],
            footer: ""
        }
    ];

    const mediFaqs = [
        {
            question: 'What are the best suites on Explora Journeys?',
            answer: 'Ocean Residences and Cocoon Residences are widely considered among the best suites because of their space, privacy, and premium amenities.'
        },
        {
            question: 'Are Explora suites spacious?',
            answer: 'Yes. Explora Journeys offers some of the largest standard accommodations in luxury cruising.'
        },
        {
            question: 'What is included in Explora Ocean Residences?',
            answer: 'Ocean Residences typically include expanded living areas, premium concierge services, enhanced amenities, and luxury oceanfront positioning.'
        },
        {
            question: 'Which Explora suite is best for couples?',
            answer: 'Ocean Penthouses and Ocean Residences are especially popular with couples seeking privacy and elevated luxury experiences.'
        },
        {
            question: 'Are Explora suites worth the money?',
            answer: 'For travelers prioritizing space, luxury design, personalized service, and wellness-focused travel, Explora suites often deliver exceptional value.'
        },
        {
            question: 'Does Explora Journeys offer butler service?',
            answer: 'Higher suite categories and residences may include dedicated butler-style or enhanced concierge services.'
        },
        {
            question: 'Which deck is best on Explora Journeys?',
            answer: 'Mid-ship decks are often preferred for stability and convenience, while higher decks offer premium positioning and enhanced views.'
        },
        {
            question: 'What is the difference between Explora suites and residences?',
            answer: 'Residences are significantly larger and include expanded living space, additional luxury amenities, and more personalized services.'
        }
    ];


    const mediMistakes = [
        {
            title: 'Booking Too Late',
            desc: 'The most desirable suite categories often sell out early, especially:',
            bullets: [
                'Mediterranean summer sailings',
                'Holiday voyages',
                'Longer itineraries',
                'Specialty themed cruises'
            ]
        },
        {
            title: 'Choosing Based Only on Price',
            desc: 'Luxury suite experiences vary dramatically. The lowest-priced suite is not always the best overall value. Consider:',
            bullets: [
                'Layout',
                'Privacy',
                'Terrace size',
                'Deck location',
                'Included services'
            ]
        },
        {
            title: 'Underestimating Outdoor Space',
            desc: 'On destination-rich itineraries, private terraces become a major part of the onboard experience. Travelers frequently regret booking smaller outdoor spaces on scenic itineraries.'
        }
    ];

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
                "@type": "WebPage",
                "name": "Azamara Mediterranean Cruises",
                "url": "https://www.tripsandships.com/azamara-mediterranean-cruises",
                "description": "Expert Azamara Mediterranean cruise guide for luxury travelers."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsandships.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Mediterranean Cruises",
                        "item": "https://www.tripsandships.com/mediterranean-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Azamara Mediterranean Cruises",
                        "item": "https://www.tripsandships.com/azamara-mediterranean-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Are Azamara Mediterranean cruises worth it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Azamara offers immersive Mediterranean experiences with smaller ships, longer port stays, and boutique luxury service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes Azamara different in the Mediterranean?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Azamara focuses heavily on destination immersion, overnight stays, and smaller boutique ports."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Azamara considered luxury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Azamara is considered an upper-premium boutique cruise line with many luxury-level features."
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
                    Azamara Mediterranean Cruises 2026 | Luxury Small Ship Mediterranean Cruise Guide

                </title>
                <meta
                    name="title"
                    content="Azamara Mediterranean Cruises Guide 2026 | Expert Luxury Cruise Insights
"
                />
                <meta
                    name="description"
                    content="Explore Azamara Mediterranean Cruises with expert luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Discover immersive Mediterranean itineraries, boutique luxury ships, extended port stays, and personalized cruise planning for 2026."
                />
                <meta name="keywords" content="Azamara Mediterranean Cruises, Luxury Mediterranean cruises, Azamara Europe cruises, Small ship Mediterranean cruises" />
                <script type="application/ld+json">
                    {JSON.stringify(mediSchemaData)}
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
                        <Sparkles size={16} />
                        <span>The Home at Sea Collection</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best Suites on Explora Journeys
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
                            <span className="medi-premium-mini-badge">THE HOME AT SEA</span>
                            <h2 className="medi-premium-heading">Why Luxury Travelers Are Obsessed with Explora Journeys Suites</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Explora Journeys has rapidly become one of the most talked-about names in ultra-luxury cruising. A major reason is the exceptional quality of its accommodations, which feel closer to a luxury boutique hotel or private yacht residence than a traditional cruise cabin.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Unlike many cruise lines where entry-level cabins can feel compact, Explora Journeys suites prioritize:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Maximize size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Residential comfort</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Modern European luxury</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Heart size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Ocean wellness</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Compass size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Sophisticated design</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sun size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Spacious outdoor living</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Personalized luxury experiences</span>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes frequently helps travelers compare Explora suite categories to determine which accommodations best align with travel style, privacy preferences, budget, destination itinerary, wellness priorities, and entertaining needs.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes helps travelers navigate the increasingly sophisticated world of ultra-luxury cruising.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT MAKES EXPLORA SUITES DIFFERENT SECTION */}
            <section className="medi-excel-section">
                {/* CSS for Responsive Conclusion Block preserved from previous fix */}
                <style>{`
        .explora-conclusion-card {
            display: flex;
            align-items: stretch;
            gap: 25px;
            background-color: #0f1c2e;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            max-width: 850px;
            margin: 0 auto;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
        }

        .explora-line {
            width: 4px;
            background-color: #3b82f6;
            border-radius: 10px;
            min-height: 60px;
            flex-shrink: 0;
        }

        @media (max-width: 768px) {
            .explora-conclusion-card {
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 35px 25px;
            }
            .explora-line {
                width: 60px; /* Becomes horizontal */
                height: 4px;
                min-height: auto;
                margin-bottom: 15px;
            }
            .explora-quote-text {
                font-size: 22px !important;
            }
        }
    `}</style>

                {/* Visual coordinate watermarks */}
                <div className="medi-excel-coord coord-tl">EXPLORA JOURNEYS // SUITE COLLECTION</div>
                <div className="medi-excel-coord coord-tr">46.2044° N, 6.1432° E</div>
                <div className="medi-excel-coord coord-bl">45.8117° N, 13.5358° E</div>
                <div className="medi-excel-coord coord-br">41.3851° N, 2.1734° E</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    {/* Header/Intro Block */}
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">What Makes Explora Suites Different?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Explora Journeys created an entirely suite-based luxury experience.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="medi-excel-grid">
                        {/* Column 1: Onboard Offerings */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Every accommodation onboard offers:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Ship size={18} /></div><span>Ocean views & Private terraces</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Maximize size={18} /></div><span>Floor-to-ceiling windows</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Heart size={18} /></div><span>Elegant residential interiors</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Sparkles size={18} /></div><span>Luxury bedding & Linens</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Anchor size={18} /></div><span>Spacious bathrooms</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><LayoutList size={18} /></div><span>Walk-in wardrobes</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Comparative Design & Atmosphere */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Explora suites are notably larger and more contemporary, focusing on:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Moon size={18} /></div><span>Quiet sophistication</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Heart size={18} /></div><span>Wellness-focused travel</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Crown size={18} /></div><span>Relaxed elegance</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Maximize size={18} /></div><span>Spacious open design</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Globe size={18} /></div><span>Contemporary European luxury</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* FIXED CONCLUSION BLOCK */}
                    <div style={{ marginTop: '60px', width: '100%', padding: '0 10px' }}>
                        <div className="explora-conclusion-card">

                            {/* Visual Accent Line - Responsive horizontal on mobile */}
                            <div className="explora-line"></div>

                            {/* Text Content */}
                            <div style={{ flex: '1' }}>
                                <h4 className="explora-quote-text" style={{
                                    fontFamily: 'serif',
                                    fontSize: '26px',
                                    fontWeight: '600',
                                    color: '#ffffff',
                                    margin: '0 0 12px 0',
                                    lineHeight: '1.2'
                                }}>
                                    “Modern luxury residences at sea.”
                                </h4>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.7',
                                    color: '#cbd5e1',
                                    margin: 0,
                                    fontWeight: '400'
                                }}>
                                    Compared with many luxury cruise competitors, Explora Journeys provides a more unhurried and residential environment for sophisticated travelers.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* SUITE CATEGORIES SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#e8f0fe',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Accommodation Guide
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            color: '#0f1c2e',
                            fontWeight: '700',
                            lineHeight: '1.2',
                            marginBottom: '20px'
                        }}>
                            Understanding Explora Journeys Suite Categories
                        </h2>
                        <div style={{ width: '50px', height: '3px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '20px' }}></div>
                    </div>

                    {/* Categories Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '25px',
                        marginBottom: '50px'
                    }}>
                        {[
                            {
                                title: "Ocean Suites",
                                desc: "The entry-level standard for modern luxury.",
                                icon: <LayoutList size={24} />
                            },
                            {
                                title: "Ocean Penthouses",
                                desc: "Enhanced space with separate dining and living areas.",
                                icon: <Maximize size={24} />
                            },
                            {
                                title: "Ocean Residences",
                                desc: "Expansive terraces often featuring private whirlpools.",
                                icon: <Home size={24} />
                            },
                            {
                                title: "Owner’s Residences",
                                desc: "The pinnacle of the Home at Sea experience.",
                                icon: <Crown size={24} />
                            }
                        ].map((suite, idx) => (
                            <div key={idx} style={{
                                padding: '40px 30px',
                                backgroundColor: '#f8fafc',
                                borderRadius: '24px',
                                textAlign: 'center',
                                border: '1px solid #f1f5f9',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0f1c2e',
                                    marginBottom: '20px',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                }}>
                                    {suite.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', marginBottom: '12px' }}>
                                    {suite.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                                    {suite.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Progression Summary Box */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        padding: '30px 40px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)'
                    }}>
                        <Sparkles size={24} style={{ color: '#3b82f6' }} />
                        <p style={{
                            fontSize: '18px',
                            color: '#ffffff',
                            margin: 0,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}>
                            Each category offers progressively larger spaces and expanded luxury services.
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPLORA SUITE SHOWCASE */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">ACCOMMODATION GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Understanding Explora Journeys Suite Categories</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Left Side: Navigation Tabs */}
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((itinerary, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{itinerary.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Right Side: Showcase Content View */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                {/* Background image logic preserved via overlay/classes */}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">PREMIUM SELECTION</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>

                                {/* Subtitle Highlight */}
                                <p style={{ color: '#0f1c2e', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>
                                    {mediItineraries[mediSelectedItinerary].subTitle}
                                </p>

                                <p style={{ color: '#475569', fontSize: '15px', marginBottom: '20px', lineHeight: '1.6' }}>
                                    {mediItineraries[mediSelectedItinerary].description}
                                </p>

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
                                        <h4 className="medi-itinerary-details-heading">Features Include:</h4>
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

                                {/* Footer Note - Ensures 100% content visibility */}
                                {mediItineraries[mediSelectedItinerary].footer && (
                                    <div style={{ marginTop: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '15px' }}>
                                        <p style={{ color: '#475569', fontSize: '14px', fontStyle: 'italic', lineHeight: '1.5' }}>
                                            {mediItineraries[mediSelectedItinerary].footer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OWNER'S RESIDENCE SECTION - CLEAN VERSION */}
            <section style={{
                padding: '100px 20px',
                backgroundColor: '#e8f0fe',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Top Prestige Label */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '8px 24px',
                            backgroundColor: 'rgba(15, 28, 46, 0.05)',
                            borderRadius: '50px',
                            border: '1px solid #0f1c2e',
                            color: '#0f1c2e',
                            fontSize: '12px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            marginBottom: '20px'
                        }}>
                            The Pinnacle Collection
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(32px, 6vw, 48px)',
                            fontFamily: 'serif',
                            color: '#0f1c2e',
                            fontWeight: '500',
                            margin: 0,
                            lineHeight: '1.1'
                        }}>
                            Owner’s Residence
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#3b82f6',
                            fontWeight: '600',
                            marginTop: '15px',
                            letterSpacing: '0.5px'
                        }}>
                            The Most Exclusive Suite on Explora Journeys
                        </p>
                    </div>

                    {/* Main Split Layout */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '60px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        {/* LEFT: PRESTIGE IMAGE BLOCK (Box Removed) */}
                        <div style={{ flex: '1 1 450px', minWidth: '320px' }}>
                            <div style={{
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px -15px rgba(15, 28, 46, 0.2)',
                                aspectRatio: '1/1',
                                backgroundColor: '#f1f5f9'
                            }}>
                                <img
                                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000"
                                    alt="Owner's Residence Luxury Interior"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* RIGHT: FEATURE CONTENT */}
                        <div style={{ flex: '1 1 500px', minWidth: '320px' }}>
                            <p style={{ fontSize: '17px', color: '#475569', lineHeight: '1.8', marginBottom: '30px' }}>
                                The Owner’s Residence is the pinnacle of luxury onboard. The design philosophy emphasizes <strong>understated elegance</strong> rather than excessive opulence, creating a true residential masterpiece at sea.
                            </p>

                            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2e', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
                                Features Typically Include:
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px 30px', marginBottom: '40px' }}>
                                {[
                                    "Expansive residential-style layout",
                                    "Oversized terrace",
                                    "Separate dining area",
                                    "Private entertaining space",
                                    "Dedicated butler service",
                                    "Priority embarkation",
                                    "Premium personalized experiences"
                                ].map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ color: '#3b82f6', flexShrink: 0 }}>
                                            <CheckCircle size={18} />
                                        </div>
                                        <span style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Exclusive Use-Case Box */}
                            <div style={{
                                padding: '30px',
                                backgroundColor: '#f8fafc',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0'
                            }}>
                                <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
                                    "Travelers seeking the highest level of privacy often choose this category for milestone celebrations and extended luxury travel."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ARE EXPLORA SUITES WORTH IT SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Investment Analysis
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#0f1c2e',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Are Explora Suites Worth the Money?
                        </h2>
                        <p style={{ fontSize: '18px', color: '#475569', fontWeight: '500' }}>
                            For many luxury travelers, the answer is yes.
                        </p>
                    </div>

                    {/* Value Drivers Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        {[
                            { title: "Large living spaces", icon: <Maximize size={20} /> },
                            { title: "Premium inclusions", icon: <Award size={20} /> },
                            { title: "Contemporary luxury design", icon: <Sparkles size={20} /> },
                            { title: "Personalized service", icon: <CheckCircle size={20} /> },
                            { title: "Wellness-focused environments", icon: <Heart size={20} /> },
                            { title: "Private outdoor terraces", icon: <Sun size={20} /> },
                            { title: "Relaxed sophistication", icon: <Moon size={20} /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                padding: '20px 25px',
                                backgroundColor: '#f8fafc',
                                borderRadius: '16px',
                                border: '1px solid #e2e8f0'
                            }}>
                                <div style={{ color: '#3b82f6', flexShrink: 0 }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontSize: '16px', color: '#1e293b', fontWeight: '600' }}>
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Strategic Verdict Box */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        padding: '40px',
                        borderRadius: '24px',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Subtle decorative glow */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }}></div>

                        <p style={{
                            fontSize: '18px',
                            color: '#ffffff',
                            lineHeight: '1.7',
                            margin: '0 auto',
                            maxWidth: '850px',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            Compared to luxury hotels in major global cities, many travelers find Explora’s suite experience highly competitive in overall value, offering an unhurried residential atmosphere that is difficult to replicate in traditional land-based or cruise environments.
                        </p>
                    </div>

                </div>
            </section>

            {/* WHAT IS INCLUDED IN EXPLORA SUITES SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#e8f0fe',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Ocean Inclusions
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#0f1c2e',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.01em'
                        }}>
                            What Is Included in Explora Suites?
                        </h2>
                        <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
                            Depending on suite category, travelers may enjoy an extensive collection of premium amenities designed for a seamless travel experience.
                        </p>
                    </div>

                    {/* Standard Inclusions Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '15px',
                        marginBottom: '60px'
                    }}>
                        {[
                            { text: "Premium beverages", icon: <GlassWater size={18} /> },
                            { text: "Gratuities", icon: <CheckCircle size={18} /> },
                            { text: "High-speed Wi-Fi", icon: <Wifi size={18} /> },
                            { text: "Fine dining access", icon: <Utensils size={18} /> },
                            { text: "Wellness programs", icon: <Heart size={18} /> },
                            { text: "Concierge services", icon: <Users size={18} /> },
                            { text: "In-suite dining", icon: <Coffee size={18} /> },
                            { text: "Luxury bath amenities", icon: <Sparkles size={18} /> },
                            { text: "Minibar service", icon: <GlassWater size={18} /> },
                            { text: "Fitness access", icon: <Dumbbell size={18} /> },
                            { text: "Thermal spa access", icon: <Waves size={18} /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 20px',
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div style={{ color: '#3b82f6', display: 'flex' }}>{item.icon}</div>
                                <span style={{ fontSize: '15px', color: '#334155', fontWeight: '500' }}>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Higher Category Premium Callout */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '24px',
                        padding: '40px',
                        border: '2px solid #3b82f6',
                        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Background Accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '150px',
                            height: '150px',
                            background: 'linear-gradient(135deg, transparent 50%, rgba(59, 130, 246, 0.03) 50%)',
                            zIndex: 1
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                                <Crown size={24} style={{ color: '#0f1c2e' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>
                                    Higher suite categories may also include:
                                </h3>
                            </div>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '30px'
                            }}>
                                {[
                                    "Butler-style services",
                                    "Priority reservations",
                                    "Exclusive experiences",
                                    "Personalized concierge planning"
                                ].map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                                        <span style={{ fontSize: '16px', color: '#1e293b', fontWeight: '600' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* BEST EXPLORA SUITES FOR DIFFERENT TRAVELERS - CENTER ALIGNED */}
            <section style={{
                padding: '90px 20px',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Personalized Selection
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#0f1c2e',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.01em'
                        }}>
                            Best Explora Suites for Different Travelers
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Persona Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '25px'
                    }}>

                        {/* 1. Best for Couples */}
                        <div style={{
                            padding: '40px 30px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // CENTER ALIGNMENT
                            textAlign: 'center',    // CENTER ALIGNMENT
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Heart size={32} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', marginBottom: '15px' }}>
                                Best for Couples
                            </h3>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px' }}>Recommended:</span>
                                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '5px 0 0' }}>
                                    Ocean Penthouses & <br /> Ocean Residences
                                </p>
                            </div>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                Offering the ideal blend of romance, privacy, and luxury for shared moments.
                            </p>
                        </div>

                        {/* 2. Best for First-Time Luxury Cruisers */}
                        <div style={{
                            padding: '40px 30px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // CENTER ALIGNMENT
                            textAlign: 'center'     // CENTER ALIGNMENT
                        }}>
                            <div style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Sparkles size={32} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', marginBottom: '15px' }}>
                                First-Time Luxury Cruisers
                            </h3>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px' }}>Recommended:</span>
                                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '5px 0 0' }}>
                                    Ocean Terrace Suites
                                </p>
                            </div>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                Provides excellent value while still delivering a true ultra-luxury experience.
                            </p>
                        </div>

                        {/* 3. Best for Extended Voyages */}
                        <div style={{
                            padding: '40px 30px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // CENTER ALIGNMENT
                            textAlign: 'center'     // CENTER ALIGNMENT
                        }}>
                            <div style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Clock size={32} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', marginBottom: '15px' }}>
                                Best for Extended Voyages
                            </h3>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px' }}>Recommended:</span>
                                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '5px 0 0' }}>
                                    Ocean Residences & <br /> Cocoon Residences
                                </p>
                            </div>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                Provide additional living space and residential comfort for longer stays at sea.
                            </p>
                        </div>

                        {/* 4. Best for Wellness Travelers */}
                        <div style={{
                            padding: '40px 30px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', // CENTER ALIGNMENT
                            textAlign: 'center'     // CENTER ALIGNMENT
                        }}>
                            <div style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Waves size={32} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', marginBottom: '15px' }}>
                                Best for Wellness Travelers
                            </h3>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px' }}>Recommended:</span>
                                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '5px 0 0' }}>
                                    Ocean Grand Terrace Suites
                                </p>
                            </div>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                                Ideal for travelers prioritizing outdoor relaxation and private oceanfront living.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* DECK SELECTION GUIDE SECTION - FIXED */}
            <section style={{
                padding: '90px 20px',
                backgroundColor: '#e8f0fe',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Expert Positioning
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#0f1c2e',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Which Deck Is Best on Explora Journeys?
                        </h2>
                        <div style={{ width: '50px', height: '4px', backgroundColor: '#0f1c2e', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Comparison Grid */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        marginBottom: '40px'
                    }}>

                        {/* 1. Mid-Ship Benefits */}
                        <div style={{
                            flex: '1 1 450px',
                            backgroundColor: '#f8fafc',
                            padding: '40px',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <Anchor size={20} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Mid-Ship Locations</h3>
                            </div>
                            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '20px', fontWeight: '500' }}>Preferred by experienced travelers for:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Greater stability",
                                    "Convenient elevator access",
                                    "Reduced motion",
                                    "Easy access to dining venues"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 2. Higher Deck Benefits */}
                        <div style={{
                            flex: '1 1 450px',
                            backgroundColor: '#f8fafc',
                            padding: '40px',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(15, 28, 46, 0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                                    {/* CHANGED: Navigation to Compass to fix Illegal Constructor error */}
                                    <Compass size={20} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Higher Decks</h3>
                            </div>
                            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '20px', fontWeight: '500' }}>Ideal for travelers seeking:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Better panoramic views",
                                    "Larger terraces",
                                    "Premium suite positioning"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '16px', color: '#334155' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: '#94a3b8', borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Factors & Advisory Summary */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        borderRadius: '24px',
                        padding: '40px',
                        color: '#ffffff',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)'
                    }}>
                        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
                                Critical Selection Factors
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                                {["Itinerary Style", "Motion Sensitivity", "Lifestyle Preferences", "Proximity to Social Spaces"].map((factor, i) => (
                                    <div key={i} style={{ padding: '8px 20px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '14px', color: '#e2e8f0' }}>
                                        {factor}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            paddingTop: '25px',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <p style={{ fontSize: '17px', lineHeight: '1.6', color: '#cbd5e1', maxWidth: '800px', margin: 0 }}>
                                Working with an experienced luxury cruise advisor helps travelers identify the best suite location for their personal travel style and specific voyage requirements.
                            </p>
                            <div style={{ width: '40px', height: '2px', backgroundColor: '#3b82f6', borderRadius: '10px' }}></div>
                        </div>
                    </div>

                </div>
            </section>

            {/* COMMON MISTAKES AUTO-SLIDER - EXPLORA SUITES THEME */}
            <section
                className="medi-mistakes-slider-section"
                style={{
                    backgroundColor: '#f1f5f9', // Soft Luxury Slate-Blue
                    padding: '100px 20px',
                    position: 'relative'
                }}
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow" style={{ color: '#3b82f6', fontWeight: '700', letterSpacing: '2px' }}>
                            AVOID BOOKING PITFALLS
                        </span>
                        <h2 className="medi-mistakes-slider-title" style={{ color: '#0f1c2e', fontWeight: '700' }}>
                            Common Mistakes Travelers Make When Booking Explora Suites
                        </h2>
                        <div className="medi-mistakes-slider-separator" style={{ backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        {/* Left Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-left"
                            style={{ color: '#0f1c2e', borderColor: '#cbd5e1' }}
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        {/* Slider Card Viewport */}
                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx
                                return (
                                    <div
                                        key={idx}
                                        className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}
                                        style={{
                                            backgroundColor: '#ffffff', // Cards stay white to "pop" off the slate bg
                                            borderRadius: '24px',
                                            padding: '40px',
                                            boxShadow: isActive ? '0 30px 60px -12px rgba(15, 28, 46, 0.12)' : 'none'
                                        }}
                                    >
                                        <div className="medi-mistake-slide-header">
                                            <span className="medi-mistake-card-num" style={{ color: '#3b82f6', opacity: 0.4 }}>0{idx + 1}</span>
                                            <h3 className="medi-mistake-card-title" style={{ color: '#0f1c2e' }}>{mistake.title}</h3>
                                        </div>

                                        <div className="medi-mistake-slide-body">
                                            <p className="medi-mistake-card-description" style={{ color: '#475569' }}>{mistake.desc}</p>

                                            {mistake.bullets && mistake.bullets.length > 0 && (
                                                <ul className="medi-mistake-card-bullets-list">
                                                    {mistake.bullets.map((bullet, bulletIdx) => (
                                                        <li key={bulletIdx} className="medi-mistake-card-bullet-item">
                                                            <CheckCircle size={16} style={{ color: '#3b82f6' }} />
                                                            <span style={{ color: '#334155' }}>{bullet}</span>
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
                            style={{ color: '#0f1c2e', borderColor: '#cbd5e1' }}
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                                style={{
                                    backgroundColor: mediActiveMistake === idx ? '#3b82f6' : '#cbd5e1',
                                    width: mediActiveMistake === idx ? '24px' : '8px'
                                }}
                                onClick={() => setMediActiveMistake(idx)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERT INSIGHT */}
            <section id="explora-suite-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        {/* Left Side: Editorial Portrait and Floating Stat Badge */}
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={azamaraShip} alt="Angela Hughes - Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>

                            {/* Authority stats preserved */}
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

                        {/* Right Side: Editorial Text & Structured Lists */}
                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Professional Perspective</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Expert Insight from <br className="medi-growth-title-break" />Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, suite selection dramatically influences overall cruise satisfaction — particularly in ultra-luxury cruising.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Explora Journeys consistently appeals to travelers seeking:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Spacious accommodations',
                                        'Quiet luxury',
                                        'Residential comfort',
                                        'Wellness-focused travel',
                                        'Sophisticated design',
                                        'Boutique ship experiences'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes specializes in helping travelers compare luxury cruise lines, suite categories, itinerary styles, luxury travel experiences, and personalized cruise planning strategies.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Ultra-luxury cruises', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruises', icon: Anchor },
                                        { title: 'Boutique luxury travel', icon: Star },
                                        { title: 'Global premium travel planning', icon: Globe }
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

            {/* WHY WORK WITH US */}
            <section className="medi-work-with-us-section">
                <div className="medi-work-with-us-container">

                    {/* Header Block */}
                    <div className="medi-work-header-card">
                        <span className="medi-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Luxury cruise planning has become increasingly specialized.
                        </p>
                    </div>

                    {/* Stepped Timeline Journey */}
                    <div className="medi-work-timeline-flow">
                        {/* The Central Glowing Line */}
                        <div className="medi-timeline-line"></div>

                        {/* Pillar 1: Advisor Benefits (Left Aligned) */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Compass size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 01</div>
                                <h3 className="medi-pillar-title">Experienced advisors help travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Compare suite categories accurately</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Secure preferred suite locations</span>
                                    </li>
                                    <li>
                                        <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Access exclusive amenities</span>
                                    </li>
                                    <li>
                                        <Gem size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Maximize cruise value</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Navigate luxury cruise options</span>
                                    </li>
                                    <li>
                                        <Heart size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Match accommodations to travel style</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 2: Specializations (Right Aligned) */}
                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node">
                                <Ship size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Trips & Ships Luxury Travel specializes in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Ship size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Ultra-luxury cruising</span>
                                    </li>
                                    <li>
                                        <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Boutique ship experiences</span>
                                    </li>
                                    <li>
                                        <Heart size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Personalized luxury travel</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition cruising</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Global premium travel planning</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY BOX */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">

                    {/* Header Block */}
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        {/* Left Side: The Identity Board */}
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <span className="medi-prestige-initials">AH</span>
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>

                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        {/* Right Side: Cascading Accolade Cards */}
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
                        <h2 className="medi-cta-heading-white">Ready to Experience Explora Journeys Luxury Suites?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury cruising is deeply personal. For travelers seeking <strong>spacious oceanfront accommodations, contemporary European luxury, wellness-focused travel, personalized service, quiet sophistication, boutique ship experiences, and elevated suite living</strong>, Explora Journeys offers one of the most impressive luxury suite experiences at sea today.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal suite, itinerary, and luxury cruise experience based on their travel style and preferences.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Mediterranean luxury cruises",
                                    "Caribbean voyages",
                                    "Ultra-luxury suites",
                                    "Wellness-focused cruising",
                                    "Boutique luxury travel"
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
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Personalized Luxury Cruise Consultation Today
                            </button>
                        </div>

                        {/* Industry Resource Links */}
                        <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', opacity: 0.8, fontSize: '0.85rem' }}>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Globe size={14} /> Explora Journeys Official Website
                            </span>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>CLIA</span>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Condé Nast Traveler</span>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Travel Leaders Network</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSuitesExploraJourneys
