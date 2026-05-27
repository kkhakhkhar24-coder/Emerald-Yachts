import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import azamaraShip from "../../assets/image.webp"

import FirstTimeLuxury from '../../assets/FirstTimeLuxuryTravelers/EXPLORA III-IV CR 17.webp'
import CulinaryExperiences from '../../assets/FirstTimeLuxuryTravelers/EXPLORA III-IV - Anthology.webp'
import ExploraCruises from '../../assets/FirstTimeLuxuryTravelers/EXPLORA III-IV CR 16.webp'
import CaribbeanLuxuryCruises from '../../assets/FirstTimeLuxuryTravelers/EXPLORA II sailing in Miami.webp'
import NorthernEurope from '../../assets/FirstTimeLuxuryTravelers/greenland-expedition-cruise-arctic-luxury-voyage.webp'
import LuxurySuite from '../../assets/FirstTimeLuxuryTravelers/luxury-couple-relaxing-on-explora-journeys-pool-deck.webp'


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
    Coffee
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect, Activity } from 'react'
import hero1 from '../../assets/FirstTimeLuxuryTravelers/greenland-expedition-cruise-arctic-luxury-voyage.webp'
import hero2 from '../../assets/FirstTimeLuxuryTravelers/explora-I-exterior-ship-view-greek-islands.webp'
import hero3 from '../../assets/FirstTimeLuxuryTravelers/EXPLORA II sailing in Miami.webp'

function FirstTimeLuxuryTravelers() {
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
            title: "Caribbean Luxury Cruises",
            description: "For travelers prioritizing relaxation and warm-weather luxury, the Caribbean offers an excellent first Explora experience.",
            bestFor: ["Honeymooners", "Couples", "Travelers new to ocean cruising", "Winter luxury escapes"],
            highlights: ["Beach destinations", "Wellness-focused sea days", "Luxury marina experiences", "Private island atmospheres", "Spa and pool relaxation"]
        },
        {
            title: "Northern Europe & Scandinavia",
            description: "Travelers seeking scenic sophistication and cultural depth often gravitate toward Northern European itineraries.",
            bestFor: ["Cultural enrichment", "Cooler climates", "Photography opportunities", "Nature-focused luxury travel"],
            highlights: ["Norwegian fjords", "Copenhagen", "Iceland", "Baltic capitals", "Scenic cruising"]
        }
    ];

    const mediFaqs = [
        {
            question: 'What is the best Explora cruise for first-time travelers?',
            answer: 'Mediterranean and Caribbean voyages are among the most popular choices because they combine relaxation, scenic cruising, and immersive destinations.'
        },
        {
            question: 'Is Explora Journeys truly luxury?',
            answer: 'Yes. Explora Journeys is considered an ultra-luxury cruise brand with spacious suites, premium inclusions, and highly personalized service.'
        },
        {
            question: 'Are Explora cruises all inclusive?',
            answer: 'Explora includes many premium amenities including dining, beverages, gratuities, Wi-Fi, and wellness experiences.'
        },
        {
            question: 'What type of travelers choose Explora Journeys?',
            answer: 'Explora appeals primarily to sophisticated travelers seeking relaxed luxury, wellness, fine dining, and boutique ship experiences.'
        },
        {
            question: 'How does Explora compare to Seabourn?',
            answer: 'Explora emphasizes modern lifestyle luxury and contemporary design, while Seabourn leans more toward traditional luxury cruising.'
        },
        {
            question: 'Is Explora better than Silversea?',
            answer: 'They appeal to different traveler styles. Explora focuses on relaxed modern luxury, while Silversea is particularly known for expedition expertise and classic ultra-luxury traditions.'
        },
        {
            question: 'Are Explora suites spacious?',
            answer: 'Yes. Explora Journeys offers some of the largest entry-level suites in luxury cruising.'
        },
        {
            question: 'Which Explora itinerary is best for beginners?',
            answer: 'Mediterranean voyages are often ideal for first-time luxury cruisers because of the combination of culture, scenery, and port variety.'
        }
    ];


    const mediMistakes = [
        {
            title: 'Choosing Based Only on Price',
            desc: 'Luxury cruise lines vary dramatically in their atmosphere and service. Choosing solely on price can lead to mismatched expectations in:',
            bullets: [
                'Atmosphere',
                'Included amenities',
                'Dining style',
                'Excursion philosophy',
                'Social environment'
            ]
        },
        {
            title: 'Booking the Wrong Itinerary Length',
            desc: 'First-time travelers often benefit most from 7–10 night itineraries. This allows for:',
            bullets: [
                'Destination-rich voyages',
                'Moderate sea day balance',
                'Avoiding itinerary fatigue'
            ]
        },
        {
            title: 'Underestimating Suite Selection',
            desc: 'Suite location and category significantly impact the onboard experience. Experienced cruise advisors help travelers evaluate:',
            bullets: [
                'Deck placement',
                'Noise levels',
                'Suite size',
                'Balcony preferences',
                'Included privileges'
            ]
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
                "name": "Best Explora Cruises for First-Time Luxury Travelers",
                "url": "https://www.tripsandships.com/best-explora-cruises-for-first-time-luxury-travelers",
                "description": "Expert guide to the best Explora Journeys cruises for first-time luxury travelers."
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
                        "name": "Luxury Cruises",
                        "item": "https://www.tripsandships.com/luxury-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Best Explora Cruises for First-Time Luxury Travelers",
                        "item": "https://www.tripsandships.com/best-explora-cruises-for-first-time-luxury-travelers"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the best Explora cruise for first-time travelers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mediterranean and Caribbean voyages are among the best Explora cruises for first-time luxury travelers because they combine immersive destinations with relaxed luxury."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Explora Journeys truly luxury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Explora Journeys is considered an ultra-luxury cruise line with spacious suites, premium inclusions, and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Explora cruises all inclusive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora Journeys includes many luxury amenities including dining, beverages, gratuities, Wi-Fi, and wellness experiences."
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
                    Best Explora Cruises for First-Time Luxury Travelers | Expert Guide 2026


                </title>
                <meta
                    name="title"
                    content="Best Explora Cruises for First-Time Luxury Travelers in 2026

"
                />
                <meta
                    name="description"
                    content="Discover the best Explora Journeys cruises for first-time luxury travelers. Learn which itineraries, suites, destinations, and onboard experiences deliver the ideal introduction to ultra-luxury cruising in 2026 with expert insights from Angela Hughes of Trips & Ships Luxury Travel.
"
                />
                <meta name="keywords" content="Best Explora Cruises for First-Time Luxury Travelers
, Explora Journeys review
, Best Explora itineraries
, Explora Journeys for beginners
" />
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
                        <Anchor size={16} />
                        <span>Luxury Exploration Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best Explora Cruises for First-Time Luxury Travelers
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
                            <span className="medi-premium-mini-badge">ULTRA-LUXURY EVOLUTION</span>
                            <h2 className="medi-premium-heading">Why First-Time Luxury Travelers Are Choosing Explora Journeys</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Luxury cruising has evolved dramatically in recent years. This is precisely where Explora Journeys has captured significant attention in the luxury cruise market. For travelers considering their very first ultra-luxury cruise experience, Explora Journeys offers a modern interpretation of luxury cruising that feels contemporary, refined, and intentionally unhurried.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Today’s sophisticated travelers seek smaller ships with fewer crowds and meaningful destination immersion through:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Maximize size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Spacious accommodations</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Relaxed elegance</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Globe size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Destination immersion</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Utensils size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Exceptional dining</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            {/* REPLACED Activity WITH Heart FOR WELLNESS */}
                                            <Heart size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Wellness experiences</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Personalized service</span>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes frequently recommends Explora Journeys to travelers seeking:
                                    Elegant but approachable luxury, spacious suite accommodations, elevated dining experiences, sophisticated international clientele, boutique ship atmospheres, and relaxed luxury without formality.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes helps travelers identify which luxury cruise line best aligns with their travel style and expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS EXPLORA JOURNEYS SECTION */}
            <section className="medi-excel-section">
                {/* CSS for Responsive Conclusion Block */}
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
                margin-bottom: 10px;
            }
            .explora-quote-text {
                font-size: 22px !important;
            }
        }
    `}</style>

                {/* Visual coordinate watermarks */}
                <div className="medi-excel-coord coord-tl">EXPLORA JOURNEYS // OCEAN STATE OF MIND</div>
                <div className="medi-excel-coord coord-tr">46.2044° N, 6.1432° E</div>
                <div className="medi-excel-coord coord-bl">45.8117° N, 13.5358° E</div>
                <div className="medi-excel-coord coord-br">41.3851° N, 2.1734° E</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    {/* Header/Intro Block */}
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">What Is Explora Journeys?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Explora Journeys is the ultra-luxury lifestyle cruise brand created by the MSC Group.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="medi-excel-grid">
                        {/* Column 1: The Competition */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    The brand was specifically designed to compete with premium luxury cruise lines including:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Ship size={18} /></div><span>Seabourn</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Crown size={18} /></div><span>Silversea</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Award size={18} /></div><span>Regent Seven Seas</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Anchor size={18} /></div><span>Oceania Cruises</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Compass size={18} /></div><span>Viking Cruises</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Modern Luxury Focus */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Explora brings a distinctly modern and European-inspired approach focusing on:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Maximize size={18} /></div><span>Spacious design</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Heart size={18} /></div><span>Ocean wellness</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Utensils size={18} /></div><span>Culinary excellence</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Moon size={18} /></div><span>Sophisticated relaxation</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Sparkles size={18} /></div><span>Elegant contemporary interiors</span></li>
                                    <li className="medi-excel-list-item"><div className="medi-excel-icon-wrapper"><Globe size={18} /></div><span>Destination enrichment</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* FIXED CONCLUSION BLOCK */}
                    <div style={{ marginTop: '60px', width: '100%', padding: '0 10px' }}>
                        <div className="explora-conclusion-card">

                            {/* Visual Accent Line - Responsive via CSS above */}
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
                                    “A luxury boutique hotel at sea.”
                                </h4>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.7',
                                    color: '#cbd5e1',
                                    margin: 0,
                                    fontWeight: '400'
                                }}>
                                    For many first-time luxury travelers, this creates a more comfortable and less intimidating introduction to luxury cruising.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY EXPLORA IS IDEAL SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '60px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    {/* LEFT SIDE: SMALLER IMAGE SECTION */}
                    <div style={{
                        flex: '0 1 380px', // Fixed basis makes it smaller than the text side
                        minWidth: '300px',
                        position: 'relative'
                    }}>
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            aspectRatio: '3/4', // Taller, narrower aspect ratio for a smaller footprint
                            backgroundColor: '#f1f5f9'
                        }}>
                            <img
                                src={FirstTimeLuxury}
                                alt="Luxury Suite Placeholder"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Subtle Brand Accent behind image */}
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '-15px',
                            width: '100px',
                            height: '100px',
                            borderTop: '2px solid #0f1c2e',
                            borderLeft: '2px solid #0f1c2e',
                            zIndex: -1,
                            borderRadius: '24px 0 0 0'
                        }}></div>
                    </div>

                    {/* RIGHT SIDE: CONTENT SECTION (WIDER) */}
                    <div style={{
                        flex: '1 1 500px',
                        minWidth: '320px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                            <span style={{
                                color: '#3b82f6',
                                fontWeight: '700',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Boutique Excellence
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            color: '#0f1c2e',
                            lineHeight: '1.2',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Why Explora Is Ideal for First-Time Luxury Travelers
                        </h2>

                        <h3 style={{ fontSize: '22px', color: '#334155', fontWeight: '600', marginBottom: '15px' }}>
                            Spacious Oceanfront Suites
                        </h3>

                        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', marginBottom: '25px' }}>
                            One of the most impressive aspects of Explora Journeys is suite size. Every accommodation is oceanfront, creating a residential atmosphere that feels exceptionally comfortable and private.
                        </p>

                        {/* Features List */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '12px 20px',
                            marginBottom: '35px'
                        }}>
                            {[
                                "Private terraces",
                                "Floor-to-ceiling windows",
                                "Walk-in closets",
                                "Heated bathroom floors",
                                "Luxury bedding",
                                "High-end European design"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Check size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                    <span style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Statement Block */}
                        <div style={{
                            backgroundColor: '#f8fafc',
                            padding: '25px 30px',
                            borderRadius: '16px',
                            borderLeft: '4px solid #0f1c2e'
                        }}>
                            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                <strong style={{ color: '#0f1c2e', display: 'block', marginBottom: '5px' }}>Residential Comfort</strong>
                                For travelers transitioning from luxury hotels, Explora suites feel familiar yet elevated. Many first-time luxury cruisers are surprised by the generous amount of personal space provided onboard.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* WHAT MAKES EXPLORA DIFFERENT */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DISTINCTIVE CRUISE STYLE</span>
                        <h2 className="medi-diff-main-title">Relaxed Luxury Atmosphere</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Pillar 1: The Environment */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Sparkles size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Relaxed Luxury</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Explora avoids the overly formal environment found on some traditional luxury cruise lines.
                            </p>
                            <p className="medi-diff-card-text-secondary">
                                Travelers will find:
                            </p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">No rigid dress codes</span>
                                <span className="medi-diff-chip">No crowded pool decks</span>
                                <span className="medi-diff-chip">No loud onboard announcements</span>
                                <span className="medi-diff-chip">No oversized casinos</span>
                                <span className="medi-diff-chip">No rushed schedules</span>
                            </div>
                        </div>

                        {/* Pillar 2: The Emphasis */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Compass size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Atmosphere Emphasis</h3>
                            </div>

                            <p className="medi-diff-card-text">
                                Instead, the atmosphere emphasizes:
                            </p>
                            <ul className="medi-diff-experience-list">
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Sophisticated relaxation</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Wellness</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Quiet luxury</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Elegant social spaces</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Personalized experiences</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: The Audience */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Users size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Target Audience</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                This makes Explora especially appealing to:
                            </p>
                            <ul className="medi-diff-focus-list-premium">
                                <li>
                                    <span className="medi-diff-list-num">01</span>
                                    <span>Couples</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">02</span>
                                    <span>Professionals</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">03</span>
                                    <span>Empty nesters</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">04</span>
                                    <span>Luxury hotel travelers</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">05</span>
                                    <span>Travelers new to cruising</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* EXCEPTIONAL CULINARY EXPERIENCES SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#fcfcfc',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '60px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    {/* LEFT SIDE: CONTENT SECTION */}
                    <div style={{
                        flex: '1 1 500px',
                        minWidth: '320px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                            <span style={{
                                color: '#3b82f6',
                                fontWeight: '700',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Epicurean Journeys
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            color: '#0f1c2e',
                            lineHeight: '1.2',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Exceptional Culinary Experiences
                        </h2>

                        <p style={{ fontSize: '17px', color: '#334155', fontWeight: '500', marginBottom: '15px' }}>
                            Dining is one of Explora Journeys’ strongest features.
                        </p>

                        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', marginBottom: '25px' }}>
                            Unlike some luxury cruise lines with highly formal dining environments, Explora balances refinement with comfort, offering an unhurried approach to world-class cuisine.
                        </p>

                        {/* Culinary Features Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '12px 20px',
                            marginBottom: '35px'
                        }}>
                            {[
                                "Multiple specialty restaurants",
                                "Mediterranean-inspired cuisine",
                                "International fine dining",
                                "High-quality ingredients",
                                "Flexible dining schedules",
                                "Elegant but relaxed service"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Check size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                    <span style={{ fontSize: '15px', color: '#1e293b', fontWeight: '500' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Endorsement Callout */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '25px 30px',
                            borderRadius: '16px',
                            borderLeft: '4px solid #3b82f6',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                <Utensils size={24} style={{ color: '#0f1c2e', marginTop: '3px' }} />
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                                    Food-focused travelers often compare the onboard culinary experience favorably with luxury boutique hotels and upscale European resorts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: SMALLER IMAGE SECTION */}
                    <div style={{
                        flex: '0 1 400px',
                        minWidth: '300px',
                        position: 'relative'
                    }}>
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                            aspectRatio: '3/4',
                            backgroundColor: '#f1f5f9'
                        }}>
                            <img
                                src={CulinaryExperiences}
                                alt="Fine Dining Experience"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Visual Accent behind image */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-15px',
                            right: '-15px',
                            width: '100px',
                            height: '100px',
                            borderBottom: '2px solid #0f1c2e',
                            borderRight: '2px solid #0f1c2e',
                            zIndex: -1,
                            borderRadius: '0 0 24px 0'
                        }}></div>
                    </div>

                </div>
            </section>

            {/* BEST EXPLORA CRUISES SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '60px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    {/* LEFT SIDE: SMALLER IMAGE SECTION */}
                    <div style={{
                        flex: '0 1 400px',
                        minWidth: '300px',
                        position: 'relative'
                    }}>
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                            aspectRatio: '3/4',
                            backgroundColor: '#f1f5f9'
                        }}>
                            <img
                                src={ExploraCruises}
                                alt="Mediterranean Coastline"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Visual Accent behind image */}
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '-15px',
                            width: '100px',
                            height: '100px',
                            borderTop: '2px solid #0f1c2e',
                            borderLeft: '2px solid #0f1c2e',
                            zIndex: -1,
                            borderRadius: '24px 0 0 0'
                        }}></div>
                    </div>

                    {/* RIGHT SIDE: CONTENT SECTION */}
                    <div style={{
                        flex: '1 1 500px',
                        minWidth: '320px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                            <span style={{
                                color: '#3b82f6',
                                fontWeight: '700',
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Destination Showcase
                            </span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }}></div>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            color: '#0f1c2e',
                            lineHeight: '1.2',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Best Explora Cruises for First-Time Luxury Travelers
                        </h2>

                        <h3 style={{ fontSize: '22px', color: '#334155', fontWeight: '600', marginBottom: '15px' }}>
                            Mediterranean Voyages
                        </h3>

                        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', marginBottom: '20px' }}>
                            Mediterranean itineraries remain among the best introductions to luxury cruising. These voyages beautifully showcase Explora’s elegant outdoor spaces.
                        </p>

                        {/* Popular Destinations Chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                            {["Italy", "Greece", "Croatia", "Spain", "France", "Turkey"].map((city, idx) => (
                                <div key={idx} style={{
                                    padding: '6px 16px',
                                    backgroundColor: '#f1f5f9',
                                    borderRadius: '50px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#0f1c2e',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                }}>
                                    <MapPin size={12} style={{ color: '#3b82f6' }} />
                                    {city}
                                </div>
                            ))}
                        </div>

                        <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '700', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Why First-Time Travelers Love Them:
                        </p>

                        {/* Why They Love Them Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '12px 20px',
                            marginBottom: '35px'
                        }}>
                            {[
                                "Scenic coastal cruising",
                                "Historic cities",
                                "Culinary immersion",
                                "Shorter flight options",
                                "Port-intensive exploration",
                                "Warm weather and relaxed atmosphere"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Check size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                    <span style={{ fontSize: '15px', color: '#475569', fontWeight: '500' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Closing Note */}
                        <div style={{
                            padding: '20px 25px',
                            backgroundColor: 'rgba(15, 28, 46, 0.02)',
                            borderRadius: '12px',
                            borderLeft: '4px solid #3b82f6'
                        }}>
                            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                                Mediterranean voyages provide a perfect balance of unhurried luxury and world-class discovery.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* EXPLORA ITINERARIES SHOWCASE */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED JOURNEYS</span>
                        <h2 className="medi-itinerary-showcase-heading">Best Explora Journeys Itineraries</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
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

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={
                                        mediSelectedItinerary === 0
                                            ? CaribbeanLuxuryCruises
                                            : NorthernEurope
                                    }
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">RECOMMENDED VOYAGE</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>

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

            {/* WHAT IS INCLUDED SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#f8fafc',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Seamless Value
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#0f1c2e',
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            What Is Included on Explora Journeys?
                        </h2>
                        <p style={{ fontSize: '18px', color: '#475569', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                            Explora Journeys includes many premium amenities within the fare. This creates a more seamless luxury experience with fewer surprise charges onboard.
                        </p>
                    </div>

                    {/* Inclusions Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '50px'
                    }}>
                        {[
                            { text: "Oceanfront suites", icon: <Maximize size={20} /> },
                            { text: "Fine dining venues", icon: <Utensils size={20} /> },
                            { text: "Premium beverages", icon: <GlassWater size={20} /> },
                            { text: "Gratuities", icon: <CircleDollarSign size={20} /> },
                            { text: "High-speed Wi-Fi", icon: <Wifi size={20} /> },
                            { text: "Wellness programs", icon: <Heart size={20} /> },
                            { text: "Thermal spa access", icon: <Waves size={20} /> },
                            { text: "Fitness classes", icon: <Dumbbell size={20} /> },
                            { text: "In-suite minibar", icon: <Coffee size={20} /> },
                            { text: "Concierge services", icon: <Users size={20} /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#ffffff',
                                padding: '20px',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0 4px 12px rgba(15, 28, 46, 0.03)',
                                border: '1px solid rgba(15, 28, 46, 0.05)'
                            }}>
                                <div style={{
                                    color: '#3b82f6',
                                    marginBottom: '12px',
                                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Outro / Conclusion Box */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        padding: '40px',
                        borderRadius: '24px',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        <p style={{
                            fontSize: '17px',
                            color: '#cbd5e1',
                            lineHeight: '1.8',
                            margin: '0 auto',
                            maxWidth: '850px'
                        }}>
                            For many first-time luxury travelers, these comprehensive inclusions <span style={{ color: '#ffffff', fontWeight: '700' }}>simplify budgeting and reduce travel stress</span>, allowing you to focus entirely on the destination and the unhurried "Ocean State of Mind."
                        </p>
                    </div>

                </div>
            </section>

            {/* IS EXPLORA LUXURY */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">DEFINING LUXURY</span>
                        <h2 className="medi-luxury-heading">Is Explora Journeys Truly Luxury?</h2>

                        <p className="medi-luxury-paragraph">
                            Yes — Explora Journeys is widely considered an ultra-luxury cruise line.
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Explora emphasizes:</h3>
                            <div className="medi-luxury-features-grid">
                                {[
                                    "Spacious accommodations",
                                    "High crew-to-guest ratios",
                                    "Sophisticated design",
                                    "Personalized service",
                                    "Culinary excellence",
                                    "Wellness experiences",
                                    "Boutique atmosphere"
                                ].map((item, idx) => (
                                    <div key={idx} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                However, Explora’s luxury style differs from older traditional luxury cruise brands.
                                Explora focuses more on <strong>modern elegance, lifestyle luxury, relaxed sophistication, contemporary design, and wellness-oriented travel</strong> rather than formal luxury rituals, traditional cruise entertainment, or ultra-formal evenings.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For many modern affluent travelers, this feels significantly more aligned with current luxury travel preferences.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        {/* Ensure you use an Explora Journeys image variable here if available */}
                        <img src={LuxurySuite} alt="Explora Journeys luxury suite" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* EXPLORA VS SEABOURN COMPARISON SECTION */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#f8fafc',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* HEADER */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            fontWeight: '800',
                            color: '#0f1c2e',
                            marginBottom: '15px',
                            letterSpacing: '-0.02em'
                        }}>
                            Explora vs Seabourn
                        </h2>
                        <p style={{ fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
                            Travelers often compare Explora with Seabourn.
                        </p>
                    </div>

                    {/* COMPARISON CARD WRAPPER */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(15, 28, 46, 0.1)',
                        border: '1px solid rgba(15, 28, 46, 0.05)'
                    }}>

                        {/* EXPLORA JOURNEYS - MODERN SIDE */}
                        <div style={{
                            flex: '1 1 450px',
                            backgroundColor: '#0f1c2e',
                            padding: '60px 50px',
                            color: '#ffffff',
                            position: 'relative'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#3b82f6'
                                }}>
                                    <Sparkles size={28} />
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: '700', margin: 0 }}>Explora Journeys</h3>
                            </div>

                            <p style={{
                                fontSize: '13px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: '#3b82f6',
                                marginBottom: '25px'
                            }}>
                                Best for travelers seeking:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    'Modern luxury',
                                    'Contemporary design',
                                    'Wellness experiences',
                                    'Larger suites',
                                    'Lifestyle-focused cruising'
                                ].map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        marginBottom: '20px',
                                        fontSize: '17px',
                                        fontWeight: '400',
                                        color: '#e2e8f0'
                                    }}>
                                        <Check size={18} style={{ color: '#3b82f6' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SEABOURN - TRADITIONAL SIDE */}
                        <div style={{
                            flex: '1 1 450px',
                            backgroundColor: '#ffffff',
                            padding: '60px 50px',
                            color: '#0f1c2e'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    backgroundColor: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0f1c2e'
                                }}>
                                    <Anchor size={28} />
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: '700', margin: 0 }}>Seabourn</h3>
                            </div>

                            <p style={{
                                fontSize: '13px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                color: '#64748b',
                                marginBottom: '25px'
                            }}>
                                Best for travelers prioritizing:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    'Traditional luxury cruising',
                                    'Expedition expertise',
                                    'Intimate service culture',
                                    'Classic luxury atmosphere'
                                ].map((item, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        marginBottom: '20px',
                                        fontSize: '17px',
                                        fontWeight: '500',
                                        color: '#334155'
                                    }}>
                                        <Check size={18} style={{ color: '#0f1c2e', opacity: 0.3 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* FOOTER NOTE */}
                    <div style={{
                        marginTop: '40px',
                        textAlign: 'center',
                        padding: '25px',
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <p style={{
                            fontSize: '16px',
                            color: '#475569',
                            margin: 0,
                            lineHeight: '1.6',
                            fontStyle: 'italic'
                        }}>
                            "Both deliver exceptional experiences, but the onboard atmosphere differs noticeably."
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPLORA VS SILVERSEA - CRASH FIXED */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#ffffff',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* HEADER */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            fontWeight: '800',
                            color: '#0f1c2e',
                            marginBottom: '15px',
                            letterSpacing: '-0.02em'
                        }}>
                            Explora vs Silversea
                        </h2>
                        <div style={{ width: '50px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* COMPARISON WRAPPER */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(15, 28, 46, 0.12)',
                        border: '1px solid rgba(15, 28, 46, 0.05)'
                    }}>

                        {/* EXPLORA JOURNEYS - MODERN SIDE */}
                        <div style={{
                            flex: '1 1 400px',
                            backgroundColor: '#0f1c2e',
                            padding: '60px 40px',
                            color: '#ffffff'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#3b82f6'
                                }}>
                                    <Sparkles size={24} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Explora Journeys</h3>
                            </div>

                            <p style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px' }}>Known for:</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    { text: 'Spacious suites', icon: <Maximize size={18} /> },
                                    // FIXED: Changed 'Layout' to 'Sparkles' to prevent ReferenceError
                                    { text: 'Contemporary interiors', icon: <Sparkles size={18} /> },
                                    { text: 'Relaxed luxury', icon: <Moon size={18} /> },
                                    { text: 'Younger affluent demographic', icon: <Users size={18} /> }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', color: '#e2e8f0', fontSize: '16px' }}>
                                        <div style={{ color: '#3b82f6', display: 'flex' }}>{item.icon}</div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SILVERSEA - TRADITIONAL SIDE */}
                        <div style={{
                            flex: '1 1 400px',
                            backgroundColor: '#f8fafc',
                            padding: '60px 40px',
                            color: '#0f1c2e',
                            borderLeft: '1px solid rgba(15, 28, 46, 0.05)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '10px',
                                    backgroundColor: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0f1c2e',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                }}>
                                    <Ship size={24} />
                                </div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Silversea</h3>
                            </div>

                            <p style={{ color: '#64748b', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px' }}>Known for:</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    { text: 'Expedition cruising', icon: <Compass size={18} /> },
                                    { text: 'Butler service', icon: <CheckCircle size={18} /> },
                                    { text: 'Global itineraries', icon: <Globe size={18} /> },
                                    // FIXED: Using 'Anchor' instead of 'History' to avoid browser keyword conflicts
                                    { text: 'Traditional ultra-luxury structure', icon: <Anchor size={18} /> }
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', color: '#334155', fontSize: '16px' }}>
                                        <div style={{ color: '#0f1c2e', opacity: 0.6, display: 'flex' }}>{item.icon}</div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* VERDICT BOX */}
                    <div style={{
                        marginTop: '40px',
                        textAlign: 'center',
                        padding: '30px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '20px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <p style={{ fontSize: '17px', color: '#1e293b', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                            "Travelers often choose based on <span style={{ color: '#3b82f6', fontWeight: '700' }}>preferred travel style</span> rather than overall quality."
                        </p>
                    </div>

                </div>
            </section>

            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.12)',
                        border: '1px solid rgba(39, 68, 114, 0.1)',
                        aspectRatio: '16/9',
                        background: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/2nuohDzg2Oo"


                            title="Experience the Mediterranean with Azamara"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* WHO SHOULD CHOOSE */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best Travelers for Explora Journeys</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Explora Is Ideal For:</h3>
                            <ul className="medi-audience-list">
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Heart size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Couples</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Compass size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Sophisticated professionals</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <MapPin size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Luxury hotel travelers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Sparkles size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>First-time luxury cruisers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Sun size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Wellness-focused travelers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Utensils size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Food and wine enthusiasts</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Ship size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Travelers avoiding mega ships</span>
                                </li>
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Explora May Not Be Ideal For:</h3>
                            <ul className="medi-audience-list">
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Baby size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Families seeking water parks</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Music size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Travelers wanting large-scale entertainment</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Moon size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Guests seeking nightlife-heavy environments</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Crown size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Travelers preferring highly formal luxury traditions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMON MISTAKES AUTO-SLIDER - NEW BACKGROUND THEME */}
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
                            Common Mistakes First-Time Luxury Cruisers Make
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
            <section id="explora-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        {/* Left Side: Editorial Portrait and Floating Stat Badge */}
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={azamaraShip} alt="Angela Hughes - Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>

                            {/* Authority stats remain relevant to Angela Hughes personally */}
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
                                According to Angela Hughes, many travelers who initially hesitate about luxury cruising quickly realize that ship atmosphere dramatically impacts overall satisfaction.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Explora Journeys consistently appeals to travelers seeking:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Elevated comfort',
                                        'Quiet sophistication',
                                        'Personalized service',
                                        'Modern luxury',
                                        'Spacious accommodations',
                                        'Immersive travel experiences'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes specializes in helping travelers compare luxury cruise lines realistically based on travel personality, preferred atmosphere, destination interests, wellness priorities, and luxury expectations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruises', icon: Anchor },
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
                                <h3 className="medi-pillar-title">Working with experienced advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Compare cruise lines accurately</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Identify ideal itineraries</span>
                                    </li>
                                    <li>
                                        <Gem size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Maximize onboard value</span>
                                    </li>
                                    <li>
                                        <Crown size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Secure premium suite locations</span>
                                    </li>
                                    <li>
                                        <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Access exclusive amenities</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Navigate international travel logistics</span>
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
                                        <span>Ultra-luxury cruises</span>
                                    </li>
                                    <li>
                                        <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Boutique ship cruising</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition travel</span>
                                    </li>
                                    <li>
                                        <Heart size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Personalized luxury experiences</span>
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


            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15, 28, 46, 0.12)',
                        border: '1px solid rgba(39, 68, 114, 0.1)',
                        aspectRatio: '16/9',
                        background: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/C_BMby4dyDE"


                            title="Experience the Mediterranean with Azamara"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
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
                            Luxury cruising is deeply personal. For travelers seeking <strong>contemporary elegance, spacious suites, wellness-focused travel, boutique luxury, personalized service, relaxed sophistication, and destination immersion</strong>, Explora Journeys offers one of the most compelling introductions to modern ultra-luxury cruising.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal luxury cruise experience based on their travel style and expectations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Mediterranean luxury cruises",
                                    "Caribbean voyages",
                                    "Boutique ship experiences",
                                    "Wellness-focused travel",
                                    "Ultra-luxury ocean cruising"
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

export default FirstTimeLuxuryTravelers
