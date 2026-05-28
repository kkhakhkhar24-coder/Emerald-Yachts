import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
// Replace these imports with your actual Explora image assets
import exploraShip from "../../assets/image.webp"
import What_Included_Explora from '../../assets/ExploraFAQ/What_Included_Explora.webp'
import Explora_Cruises_Inclusive from '../../assets/ExploraFAQ/Explora_Cruises_Inclusive.webp'
import Explora_Suites_Like from '../../assets/ExploraFAQ/Explora_Suites_Like.webp'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Waves,
    Maximize
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/ExploraFAQ/Hero_1.webp'
import hero2 from '../../assets/ExploraFAQ/Hero_2.webp'
import hero3 from '../../assets/ExploraFAQ/Hero_3.webp'

function ExploraJourneys() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    const [exploraActiveTab, setExploraActiveTab] = useState(0);

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

    {/* 1. DATA ARRAY - Place this before the return statement */ }
    const exploraComparisonSections = [
        {
            tabTitle: "Dress Code",
            eyebrow: "Style Standards",
            title: "What Is the Dress Code on Explora?",
            leftTitle: "What to Wear",
            leftItems: ["Stylish resort attire", "Smart casual evening wear", "Relaxed luxury fashion"],
            rightTitle: "What is Avoided",
            rightItems: ["Formal nights", "Tuxedos", "Strict dress requirements"],
            bottomText: "Explora Journeys maintains a relaxed luxury atmosphere best described as 'Elegant resort casual.' This appeals strongly to travelers who prefer understated sophistication."
        },
        {
            tabTitle: "Explora vs Seabourn",
            eyebrow: "Brand Comparison",
            title: "How Does Explora Compare to Seabourn?",
            leftTitle: "Explora Journeys",
            leftItems: ["Modern luxury", "Wellness-focused travel", "Spacious suites", "Contemporary design", "Relaxed sophistication"],
            rightTitle: "Seabourn",
            rightItems: ["Traditional luxury cruising", "Classic onboard atmosphere", "Expedition expertise", "Traditional luxury rituals"],
            bottomText: "Both deliver exceptional service and boutique ship experiences, but the atmosphere differs considerably."
        },
        {
            tabTitle: "Explora vs Silversea",
            eyebrow: "Brand Comparison",
            title: "How Does Explora Compare to Silversea?",
            leftTitle: "Explora Journeys",
            leftItems: ["Contemporary interiors", "Spacious accommodations", "Lifestyle-focused luxury", "Younger affluent demographic"],
            rightTitle: "Silversea",
            rightItems: ["Expedition voyages", "Butler service", "Global itineraries", "Traditional ultra-luxury structure"],
            bottomText: "Travelers often choose based on personal travel style rather than overall quality."
        },
        {
            tabTitle: "Ideal Travelers",
            eyebrow: "Persona Matching",
            title: "What Type of Travelers Choose Explora?",
            leftTitle: "Explora Appeals To:",
            leftItems: ["Couples & Professionals", "Luxury hotel travelers", "Wellness-focused travelers", "Food and wine enthusiasts", "Travelers avoiding mega ships"],
            rightTitle: "May Not Be Ideal For:",
            rightItems: ["Families seeking water parks", "Nightlife-heavy environments", "Broadway-style entertainment", "Highly formal luxury traditions"],
            bottomText: "Explora is designed for sophisticated international travelers seeking an unhurried, residential feeling at sea."
        },
        {
            tabTitle: "Value Analysis",
            eyebrow: "Investment Insight",
            title: "Are Explora Cruises Worth the Money?",
            leftTitle: "Explora Delivers Value Through:",
            leftItems: ["Spacious suites", "Premium inclusions", "Personalized service", "Boutique ship atmosphere", "Wellness-focused luxury"],
            rightTitle: "Traveler Priorities:",
            rightItems: ["Relaxed luxury", "Contemporary elegance", "Ocean wellness", "Quiet sophistication", "Personalized experiences"],
            bottomText: "For many travelers, Explora Journeys represents an excellent value within the ultra-luxury market."
        },
        {
            tabTitle: "Best Itineraries",
            eyebrow: "Destination Guide",
            title: "Which Explora Itineraries Are Best?",
            leftTitle: "Mediterranean & Caribbean",
            leftItems: ["Culinary travel & Historic cities", "Scenic coastal cruising", "Warm-weather escapes", "Wellness-focused travel"],
            rightTitle: "Northern Europe",
            rightItems: ["Scenic cruising & Nature", "Cultural depth", "Cooler climates", "Photography opportunities"],
            bottomText: "Explora itineraries are specifically designed to showcase the brand's elegant outdoor spaces and boutique ports."
        },
        {
            tabTitle: "Advisor Benefits",
            eyebrow: "Booking Strategy",
            title: "Should You Book Through an Advisor?",
            leftTitle: "Advisors Help Travelers:",
            leftItems: ["Compare suite categories", "Select ideal itineraries", "Access exclusive amenities", "Coordinate international logistics"],
            rightTitle: "Strategic Advantages:",
            rightItems: ["Match style with preferences", "Simplify luxury planning", "Avoid costly booking mistakes", "Maximize overall value"],
            bottomText: "Luxury cruise planning has become increasingly specialized; experienced advisors help ensure your voyage aligns with your lifestyle."
        }
    ];


    const mediMistakes = [
        {
            title: 'Choosing Based Only on Price',
            desc: 'Luxury cruising is highly experience-driven. Travelers should evaluate:',
            bullets: [
                'Ship atmosphere',
                'Suite categories',
                'Included amenities',
                'Itinerary pacing',
                'Wellness offerings',
                'Destination immersion'
            ]
        },
        {
            title: 'Booking Too Late',
            desc: 'Popular Explora voyages and premium suites often sell out early, especially:',
            bullets: [
                'Mediterranean summer sailings',
                'Holiday cruises',
                'Longer itineraries',
                'Wellness-focused voyages'
            ]
        },
        {
            title: 'Underestimating Suite Selection',
            desc: 'Suite location and category significantly influence the onboard experience. Experienced advisors help travelers evaluate:',
            bullets: [
                'Deck positioning',
                'Motion sensitivity',
                'Balcony size',
                'Privacy preferences',
                'Lifestyle priorities'
            ]
        }
    ];

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
                "name": "Explora FAQ: Everything Travelers Need to Know Before Booking",
                "url": "https://www.tripsandships.com/explora-faq-before-booking",
                "description": "Comprehensive FAQ and luxury cruise guide for travelers considering Explora Journeys."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Cruises", "item": "https://www.tripsandships.com/luxury-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Explora FAQ: Everything Travelers Need to Know Before Booking", "item": "https://www.tripsandships.com/explora-faq-before-booking" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Explora Journeys?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora Journeys is an ultra-luxury lifestyle cruise brand focused on contemporary luxury, wellness, spacious suites, and boutique ship experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Explora Journeys truly luxury?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Explora Journeys is considered an ultra-luxury cruise line with spacious suites, premium dining, personalized service, and wellness-focused experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on Explora cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora includes luxury suites, dining, beverages, Wi-Fi, gratuities, wellness experiences, and many luxury amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Explora cruises all inclusive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora includes many premium amenities, although some specialty experiences and premium items may carry additional charges."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are Explora suites like?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora suites are spacious oceanfront accommodations featuring private terraces, luxury bathrooms, and contemporary European design."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Explora good for first-time luxury cruisers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The relaxed atmosphere and modern luxury approach make Explora especially appealing to first-time luxury travelers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the dress code on Explora?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora maintains an elegant resort-casual atmosphere without traditional formal nights."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Explora compare to Seabourn or Silversea?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Explora focuses on modern lifestyle luxury and wellness, while Seabourn and Silversea lean more toward traditional ultra-luxury cruising."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Explora cruises worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For travelers prioritizing spacious suites, wellness, boutique luxury, and personalized service, Explora often delivers exceptional value."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Should you book Explora through a travel advisor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many travelers benefit from working with luxury cruise advisors who provide suite guidance, itinerary planning, and personalized support."
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
                    Explora FAQ: Everything Travelers Need to Know Before Booking | Luxury Cruise Guide 2026
                </title>
                <meta
                    name="title"
                    content="Explora FAQ: Everything You Need to Know Before Booking in 2026"
                />
                <meta
                    name="description"
                    content="Discover everything travelers need to know before booking Explora Journeys in 2026. Explore FAQs about suites, pricing, inclusions, dining, dress code, itineraries, luxury level, onboard experience, and expert cruise insights from Angela Hughes of Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Explora FAQ, Explora Journeys FAQ, Explora cruise questions, Explora luxury cruise review, Explora cruise experience, Explora Journeys guide, Explora cruise planning, Ultra luxury cruises, Explora booking guide, Luxury cruise FAQ, Small ship luxury cruises, Everything to know before booking Explora, Is Explora Journeys worth it, What is included on Explora Journeys, Explora Journeys cruise reviews 2026, Explora luxury cruise FAQ, Are Explora cruises all inclusive, Explora Journeys suite guide, What travelers should know before booking Explora, Explora cruise line review, Best Explora itineraries, Luxury cruise advisor, Luxury cruise specialist, Ultra luxury travel consultant, Luxury cruise travel agency, Small ship cruise expert, Cruise planning specialist, Luxury travel advisor" />
                <link rel="canonical" href="https://www.tripsandships.com/explora-faq-before-booking" />
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

            {/* ── PREMIUM INTRO SECTION - FIXED HOVER & ALIGNMENT ── */}
            <section className="medi-intro-section medi-premium-intro-section">
                {/* STYLE BLOCK: Handles the hover interaction for icons */}
                <style>{`
        .medi-immersion-card-item:hover .medi-immersion-icon-box {
            background-color: #274472 !important;
            border-color: #274472 !important;
            transform: scale(1.1);
        }
        /* This forces the Lucide icon (SVG) to turn white on hover */
        .medi-immersion-card-item:hover .medi-immersion-icon-box svg {
            stroke: #ffffff !important;
        }
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

                        {/* Left Column: Editorial intro */}
                        <div className="medi-premium-editorial-block" style={{
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            {/* EYEBROW BADGE - Responsive Centering */}
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block',
                                fontSize: '12px',
                                fontWeight: '700',
                                color: '#274472',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
                            }}>
                                MODERN ULTRA-LUXURY
                            </span>

                            <h2 className="medi-premium-heading" style={{
                                color: '#274472',
                                fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2',
                                margin: '0 0 20px 0'
                            }}>
                                Discover Why Luxury Travelers Are Choosing Explora Journeys
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px',
                                height: '3px',
                                background: `linear-gradient(90deg, #274472 0%, transparent 100%)`,
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#475569',
                                marginBottom: '40px'
                            }}>
                                Explora Journeys has quickly become one of the most discussed names in ultra-luxury cruising. Created by the MSC Group, Explora was specifically designed to bring a modern, lifestyle-focused approach to high-end ocean travel.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{
                                    fontSize: '17px',
                                    color: '#1e293b',
                                    marginBottom: '24px',
                                    fontWeight: '600'
                                }}>
                                    Explora Journeys emphasizes a philosophy of:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px',
                                    textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Spacious oceanfront suites", i: <Maximize size={20} /> },
                                        { t: "Wellness-focused travel", i: <Sun size={20} /> },
                                        { t: "Boutique ship atmosphere", i: <Ship size={20} /> },
                                        { t: "Culinary excellence", i: <Utensils size={20} /> },
                                        { t: "Relaxed sophistication", i: <Crown size={20} /> },
                                        { t: "Contemporary elegance", i: <Anchor size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item">
                                            {/* FIXED: Removed hardcoded color here, allowing the style block above to work */}
                                            <div className="medi-immersion-icon-box" style={{
                                                transition: 'all 0.3s ease',
                                                color: '#274472'
                                            }}>
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
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}>
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569' }}>
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers determine whether Explora aligns with their travel style.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in luxury travel, Angela Hughes offers unmatched insight into the world of ultra-luxury cruising.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPLORA JOURNEYS BRAND VIDEO SECTION */}
            <section style={{
                padding: '100px 20px',
                backgroundColor: '#e6edf7', // Soft Blue Tint
                fontFamily: 'sans-serif',
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Experience Explora Journeys: The Ocean State of Mind
                        </h2>

                        {/* Horizontal Accent Line Above Text */}
                        <div style={{
                            width: '60px',
                            height: '3px',
                            backgroundColor: '#3b82f6', // Azure Blue accent
                            margin: '25px auto 25px auto',
                            borderRadius: '10px'
                        }}></div>

                        <p style={{
                            fontSize: 'clamp(16px, 2vw, 19px)',
                            color: '#475569', // Dark slate/grey for readability
                            maxWidth: '850px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                            fontWeight: '400'
                        }}>
                            Embark on a visual journey onboard Explora Journeys. Witness the elegant, contemporary European design, spacious residential-style suites, and wellness-focused luxury that create a truly restorative <span style={{ color: '#0f1c2e', fontWeight: '600' }}>"Ocean State of Mind."</span>
                        </p>
                    </div>

                    {/* Video Player Container */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        boxShadow: '0 40px 100px rgba(15, 28, 46, 0.15)', // Adjusted shadow for light background
                        border: '1px solid rgba(15, 28, 46, 0.1)',
                        aspectRatio: '16/9'
                    }}>
                        {/* The Video Embed - Official Explora Journeys Video */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Zi5FES_5OSc"
                            title="Explora Journeys Luxury Cruise Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        ></iframe>
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

            {/* IS EXPLORA JOURNEYS TRULY LUXURY - LIGHT NAVY THEME */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#e6edf7', // UPDATED: Light Navy / Steel Blue background
                fontFamily: 'sans-serif'
            }}>
                {/* Inner Container */}
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
                            Defining the Standard
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Is Explora Journeys Truly Luxury?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* HERO IMPACT PANEL - Deep Navy "Yes" Banner */}
                    <div style={{
                        position: 'relative',
                        background: 'linear-gradient(135deg, #0f1c2e 0%, #1e293b 100%)',
                        borderRadius: '30px',
                        padding: 'clamp(40px, 8vw, 70px) 30px',
                        textAlign: 'center',
                        color: '#ffffff',
                        boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.25)',
                        marginBottom: '40px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        {/* Subtle Abstract Background Decoration */}
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }}></div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '1px solid rgba(59, 130, 246, 0.3)'
                            }}>
                                <CheckCircle size={32} style={{ color: '#3b82f6' }} />
                            </div>
                            <h3 style={{ fontSize: 'clamp(40px, 10vw, 64px)', fontWeight: '700', margin: '0 0 15px 0', letterSpacing: '-0.03em', color: '#fff' }}>
                                Yes.
                            </h3>
                            <p style={{ fontSize: 'clamp(17px, 3vw, 20px)', opacity: 0.95, maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', color: '#fff' }}>
                                Explora Journeys is widely considered an ultra-luxury cruise line, redefining the market with a modern, European-inspired approach.
                            </p>
                        </div>
                    </div>

                    {/* DETAILS GRID */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px'
                    }}>

                        {/* LEFT CARD: FEATURES */}
                        <div style={{
                            flex: '1 1 450px',
                            minWidth: '320px',
                            backgroundColor: '#ffffff', // Clean white pops against light navy bg
                            borderRadius: '30px',
                            padding: '40px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <Crown size={28} style={{ color: '#0f1c2e' }} />
                                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>Ultra-Luxury Features</h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {[
                                    'Oceanfront suites throughout the ship',
                                    'Spacious private terraces',
                                    'High crew-to-guest ratios',
                                    'Personalized service',
                                    'Premium dining and beverages',
                                    'Elegant contemporary design',
                                    'Wellness-focused amenities'
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#0f1c2e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', flexShrink: 0 }}>
                                            {idx + 1}
                                        </div>
                                        <span style={{ fontSize: '15px', color: '#334155', fontWeight: '500' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT CARD: PHILOSOPHY */}
                        <div style={{
                            flex: '1 1 450px',
                            minWidth: '320px',
                            backgroundColor: '#ffffff',
                            borderRadius: '30px',
                            padding: '40px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2e', marginBottom: '25px' }}>Modern Luxury Philosophy</h3>

                            <p style={{ fontSize: '14px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '1px', marginBottom: '20px' }}>Explora Emphasizes:</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '35px' }}>
                                {['Modern luxury', 'Relaxed sophistication', 'Quiet social spaces', 'Wellness travel'].map((chip, idx) => (
                                    <span key={idx} style={{ padding: '8px 16px', backgroundColor: '#f1f5f9', borderRadius: '50px', fontSize: '13px', fontWeight: '600', color: '#0f1c2e', border: '1px solid #e2e8f0' }}>{chip}</span>
                                ))}
                            </div>

                            <div style={{ marginTop: 'auto', padding: '25px', backgroundColor: '#0f1c2e', borderRadius: '20px' }}>
                                <p style={{ fontSize: '15px', color: '#ffffff', lineHeight: '1.7', margin: 0, textAlign: 'center', fontWeight: '400' }}>
                                    "For many affluent travelers, this contemporary approach feels more aligned with <span style={{ color: '#3b82f6', fontWeight: '700' }}>current luxury travel preferences</span> than traditional formal cruising."
                                </p>
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
                                <img
                                    src={[What_Included_Explora, Explora_Cruises_Inclusive, Explora_Suites_Like][mediSelectedItinerary]}
                                    alt={exploraLuxuryExperienceTabs[mediSelectedItinerary].title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                />
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

            {/* ── IS EXPLORA GOOD FOR FIRST-TIME LUXURY CRUISERS? ── */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">

                    <div className="medi-luxury-content-wrapper">

                        {/* BLOCK 1: ADVISORY OVERVIEW */}
                        <div style={{ textAlign: window.innerWidth <= 1024 ? 'center' : 'left' }}>
                            <span className="medi-luxury-eyebrow-label" style={{
                                textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                                display: 'block',
                                width: '100%',
                                color: '#274472',
                                fontWeight: '700',
                                letterSpacing: '0.25em'
                            }}>
                                FIRST-TIME LUXURY CRUISING
                            </span>

                            <h2 className="medi-luxury-heading" style={{
                                color: '#274472', // Brand Navy
                                textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                                fontSize: 'clamp(28px, 5vw, 42px)',
                                lineHeight: '1.2',
                                marginTop: '12px'
                            }}>
                                Is Explora Good for First-Time Luxury Cruisers?
                            </h2>

                            <p className="medi-luxury-paragraph" style={{ fontWeight: '700', fontSize: '20px' }}>
                                Absolutely.
                            </p>

                            <p className="medi-luxury-paragraph">
                                Explora is particularly appealing for travelers new to luxury cruising because of its:
                            </p>
                        </div>

                        {/* FEATURE GRID */}
                        <div className="medi-luxury-appreciated-box" style={{ backgroundColor: '#f8fafc' }}>
                            <div className="medi-luxury-features-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                gap: '15px'
                            }}>
                                {[
                                    'Relaxed atmosphere',
                                    'Contemporary luxury style',
                                    'Spacious suites',
                                    'Flexible dining',
                                    'Less formal environment',
                                    'Boutique ship size'
                                ].map((feature, i) => (
                                    <div key={i} className="medi-luxury-feature">
                                        <CheckCircle size={18} style={{ color: '#274472' }} className="medi-feature-check-icon" />
                                        <span style={{ color: '#475569' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* TRANSITION TEXT */}
                        <div className="medi-luxury-comparison-note" style={{ borderLeftColor: '#274472', textAlign: window.innerWidth <= 1024 ? 'center' : 'left' }}>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '20px' }}>
                                Travelers transitioning from:
                            </p>

                            <div className="medi-luxury-features-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)',
                                gap: '10px'
                            }}>
                                {['Luxury resorts', 'Boutique hotels', 'Premium cruises'].map((feature, i) => (
                                    <div key={i} className="medi-luxury-feature" style={{ justifyContent: window.innerWidth <= 1024 ? 'center' : 'flex-start' }}>
                                        <CheckCircle size={18} style={{ color: '#274472' }} className="medi-feature-check-icon" />
                                        <span style={{ fontSize: '14px' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="medi-luxury-paragraph" style={{ marginTop: '24px', fontSize: '15px', fontStyle: 'italic' }}>
                                often find Explora to be a comfortable and approachable introduction to ultra-luxury cruising.
                            </p>
                        </div>

                        {/* BLOCK 2: DRESS CODE */}
                        <div className="medi-luxury-appreciated-box" style={{ marginTop: '40px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>

                            <span className="medi-luxury-eyebrow-label" style={{
                                textAlign: 'center',
                                display: 'block',
                                width: '100%',
                                color: '#64748b'
                            }}>
                                RELAXED LUXURY STYLE
                            </span>

                            <h2 className="medi-luxury-heading" style={{
                                textAlign: 'center',
                                color: '#274472',
                                fontSize: 'clamp(26px, 4vw, 36px)',
                                marginTop: '12px'
                            }}>
                                What Is the Dress Code on Explora?
                            </h2>

                            <p className="medi-luxury-paragraph" style={{ textAlign: 'center' }}>
                                Explora Journeys maintains a relaxed luxury atmosphere.
                            </p>

                            <div style={{
                                background: 'linear-gradient(135deg, #274472 0%, #1f3555 100%)',
                                padding: '30px 20px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                margin: '30px 0',
                                boxShadow: '0 10px 25px rgba(31, 53, 85, 0.15)'
                            }}>
                                <h3 style={{ color: '#ffffff', fontSize: 'clamp(24px, 4vw, 32px)', margin: '0', fontWeight: '600' }}>
                                    “Elegant resort casual.”
                                </h3>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                {/* Clothing List */}
                                <div>
                                    <p className="medi-luxury-paragraph" style={{ fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', color: '#274472' }}>What to Wear:</p>
                                    {['Stylish resort attire', 'Smart casual evening', 'Relaxed luxury fashion'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                            <CheckCircle size={16} style={{ color: '#274472' }} />
                                            <span style={{ fontSize: '14px' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Avoid List */}
                                <div>
                                    <p className="medi-luxury-paragraph" style={{ fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', color: '#64748b' }}>Not Emphasized:</p>
                                    {['Formal nights', 'Tuxedos', 'Strict requirements'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                            <div style={{ width: '16px', height: '2px', background: '#cbd5e1' }}></div>
                                            <span style={{ fontSize: '14px', color: '#64748b' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-luxury-paragraph" style={{ marginTop: '30px', textAlign: 'center', fontSize: '15px', color: '#64748b' }}>
                                This appeals strongly to modern luxury travelers who prefer understated sophistication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPLORA SELECTION GUIDE - REDESIGNED & FIXED */}
            <section style={{
                padding: '80px 20px',
                background: '#f8fafc', // Soft professional grey
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

                    {/* SECTION HEADER */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{
                            display: 'inline-flex',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: '#3b82f6',
                            fontSize: '12px',
                            fontWeight: '800',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '15px'
                        }}>
                            Expert Advisory
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            margin: '0',
                            fontWeight: '700',
                            letterSpacing: '-0.02em'
                        }}>
                            Explora Journeys Selection Guide
                        </h2>
                    </div>

                    {/* SCROLLABLE TABS CONTAINER */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        overflowX: 'auto',
                        padding: '10px 5px 25px',
                        marginBottom: '30px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}>
                        {exploraComparisonSections.map((section, index) => {
                            const isActive = exploraActiveTab === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setExploraActiveTab(index)}
                                    style={{
                                        minWidth: '200px',
                                        padding: '20px',
                                        borderRadius: '20px',
                                        border: '1px solid',
                                        borderColor: isActive ? '#0f1c2e' : '#e2e8f0',
                                        background: isActive ? '#0f1c2e' : '#ffffff',
                                        color: isActive ? '#ffffff' : '#0f1c2e',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        textAlign: 'center',
                                        flexShrink: 0,
                                        boxShadow: isActive ? '0 15px 30px rgba(15,28,46,0.15)' : '0 4px 10px rgba(0,0,0,0.02)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: '800',
                                        color: isActive ? '#3b82f6' : '#94a3b8'
                                    }}>
                                        0{index + 1}
                                    </span>
                                    <span style={{
                                        fontSize: '15px',
                                        fontWeight: '700',
                                        lineHeight: '1.2'
                                    }}>
                                        {section.tabTitle}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* ACTIVE CONTENT MAIN CARD */}
                    {exploraComparisonSections[exploraActiveTab] && (
                        <div style={{
                            background: '#ffffff',
                            borderRadius: '32px',
                            padding: 'clamp(30px, 5vw, 60px)',
                            boxShadow: '0 40px 100px -20px rgba(15, 23, 42, 0.1)',
                            border: '1px solid rgba(15, 28, 46, 0.05)',
                            position: 'relative'
                        }}>

                            {/* CARD HEADER */}
                            <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                                <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                    {exploraComparisonSections[exploraActiveTab].eyebrow}
                                </span>
                                <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: "#274472", marginTop: '12px', fontWeight: '700', letterSpacing: '-0.01em' }}>
                                    {exploraComparisonSections[exploraActiveTab].title}
                                </h2>
                                <div style={{ width: '40px', height: '3px', backgroundColor: '#3b82f6', margin: '20px auto 0', borderRadius: '10px' }}></div>
                            </div>

                            {/* RESPONSIVE COMPARISON GRID */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '30px'
                            }}>
                                {/* LEFT COLUMN PANEL */}
                                <div style={{
                                    background: '#f8fafc',
                                    borderRadius: '24px',
                                    padding: '35px',
                                    border: '1px solid #f1f5f9',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                                        <div style={{ width: '36px', height: '36px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            <Sparkles size={20} />
                                        </div>
                                        <h3 style={{ fontSize: '20px', color: '#0f1c2e', margin: 0, fontWeight: '700' }}>
                                            {exploraComparisonSections[exploraActiveTab].leftTitle}
                                        </h3>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {exploraComparisonSections[exploraActiveTab].leftItems.map((item, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                background: '#ffffff',
                                                padding: '14px 18px',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(15, 28, 46, 0.03)',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.01)'
                                            }}>
                                                <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                                <span style={{ fontSize: '15px', color: '#334155', fontWeight: '500' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN PANEL */}
                                <div style={{
                                    background: '#f8fafc',
                                    borderRadius: '24px',
                                    padding: '35px',
                                    border: '1px solid #f1f5f9',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                                        <div style={{ width: '36px', height: '36px', background: 'rgba(15, 28, 46, 0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f1c2e' }}>
                                            <Anchor size={20} />
                                        </div>
                                        <h3 style={{ fontSize: '20px', color: '#0f1c2e', margin: 0, fontWeight: '700' }}>
                                            {exploraComparisonSections[exploraActiveTab].rightTitle}
                                        </h3>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {exploraComparisonSections[exploraActiveTab].rightItems.map((item, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                background: '#ffffff',
                                                padding: '14px 18px',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(15, 28, 46, 0.03)',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.01)'
                                            }}>
                                                {/* Smart Icon Logic: Red minus for "Not Ideal" (Tab Index 3), Grey circle for others */}
                                                {exploraActiveTab === 3 ? (
                                                    <Minus size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                                                ) : (
                                                    <div style={{ width: '6px', height: '6px', background: '#cbd5e1', borderRadius: '50%', flexShrink: 0, marginLeft: '5px', marginRight: '5px' }}></div>
                                                )}
                                                <span style={{ fontSize: '15px', color: '#334155', fontWeight: '500' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM SUMMARY FOOTER */}
                            <div style={{
                                marginTop: '50px',
                                padding: '30px 40px',
                                borderRadius: '24px',
                                background: '#0f1c2e',
                                textAlign: 'center',
                                boxShadow: '0 20px 40px rgba(15,28,46,0.1)'
                            }}>
                                <p style={{ margin: '0 auto', color: '#ffffff', fontSize: '17px', lineHeight: '1.7', fontWeight: '400', maxWidth: '850px', opacity: 0.9 }}>
                                    {exploraComparisonSections[exploraActiveTab].bottomText}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* VIDEO SECTION 2: SILVERSEA HERITAGE EXPERIENCE - FULLY RESPONSIVE */}
            <section className="silversea-video-section" style={{
                padding: 'clamp(60px, 10vw, 100px) 20px',
                backgroundColor: '#0f1c2e', // Deep Navy
                fontFamily: 'sans-serif',
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Robust Responsive CSS */}
                <style>{`
        .ss-flex-wrapper {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 50px;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        .ss-content-side {
            flex: 1 1 450px;
            min-width: 300px;
        }
        .ss-video-side {
            flex: 1 1 550px;
            min-width: 300px;
            width: 100%;
        }
        .ss-video-frame {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9; /* Strictly maintains 16:9 for centered play button */
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
            background-color: #000;
            border: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 2;
        }
        
        /* Mobile Specific Layout */
        @media (max-width: 992px) {
            .ss-content-side {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                order: 1;
            }
            .ss-video-side {
                order: 2;
            }
            .ss-horizontal-line {
                margin: 0 auto 25px !important;
            }
            .ss-video-decor {
                right: 0 !important;
                top: -15px !important;
                width: 60px !important;
                height: 60px !important;
            }
        }
    `}</style>

                <div className="ss-flex-wrapper">

                    {/* LEFT SIDE: CONTENT */}
                    <div className="ss-content-side">
                        {/* Horizontal Accent Line */}
                        <div className="ss-horizontal-line" style={{
                            width: '50px',
                            height: '3px',
                            backgroundColor: '#3b82f6',
                            marginBottom: '25px',
                            borderRadius: '10px'
                        }}></div>

                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            Heritage Excellence
                        </span>

                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#ffffff',
                            fontWeight: '700',
                            lineHeight: '1.2',
                            marginBottom: '25px',
                            letterSpacing: '-0.02em'
                        }}>
                            The Art of Silversea: <br /> Defining Ultra-Luxury
                        </h2>

                        <p style={{
                            fontSize: '17px',
                            color: '#e2e8f0',
                            lineHeight: '1.8',
                            maxWidth: '550px',
                            margin: 0
                        }}>
                            Discover a world of timeless flavors, unrivaled comfort, and unmatched access.
                            From hidden harbors to coveted cities, see how Silversea elevates the journey
                            of a lifetime through personalized butler service and traditional refinement.
                        </p>
                    </div>

                    {/* RIGHT SIDE: VIDEO PLAYER */}
                    <div className="ss-video-side">
                        <div style={{ position: 'relative', width: '100%' }}>

                            {/* Decorative background element */}
                            <div className="ss-video-decor" style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                borderTop: '4px solid rgba(255, 255, 255, 0.1)',
                                borderRight: '4px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0 30px 0 0',
                                zIndex: 1
                            }}></div>

                            <div className="ss-video-frame">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://drive.google.com/file/d/17GNBgyXBsqL-dbDurk8HvFMatGs9KU9B/preview"
                                    title="Silversea Luxury Experience"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%'
                                    }}
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* COMMON MISTAKES SLIDER - FULLY RESPONSIVE */}
            <section
                className="medi-mistakes-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
                style={{
                    padding: 'clamp(50px, 10vw, 100px) 15px',
                    backgroundColor: '#f1f5f9',
                    fontFamily: 'sans-serif',
                    overflow: 'hidden'
                }}
            >
                {/* Responsive Utility CSS */}
                <style>{`
        @media (max-width: 768px) {
            .medi-mistakes-slider-wrapper {
                flex-direction: column !important;
                gap: 30px !important;
            }
            .medi-slider-nav-btn {
                display: none !important; /* Hide side arrows on mobile for better space */
            }
            .medi-mistake-card-content {
                padding: 30px 20px !important;
            }
        }
    `}</style>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 8vw, 60px)' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Expert Selection Guide
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(24px, 5vw, 40px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2',
                            padding: '0 10px'
                        }}>
                            Common Mistakes Travelers Make Before Booking Explora
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div
                        className="medi-mistakes-slider-wrapper"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            gap: '20px'
                        }}
                    >
                        {/* Left Arrow - Desktop Only */}
                        <button
                            className="medi-slider-nav-btn"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                border: '1px solid #cbd5e1',
                                backgroundColor: '#ffffff',
                                color: '#0f1c2e',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                zIndex: 10,
                                flexShrink: 0
                            }}
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        {/* Slider Viewport */}
                        <div style={{
                            flex: '1',
                            maxWidth: '850px',
                            position: 'relative',
                            display: 'grid', // Uses grid to maintain layout height
                            gridTemplateColumns: '1fr'
                        }}>
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="medi-mistake-card-content"
                                        style={{
                                            gridArea: '1 / 1 / 2 / 1', // Stacks cards on top of each other
                                            opacity: isActive ? 1 : 0,
                                            visibility: isActive ? 'visible' : 'hidden',
                                            transform: isActive ? 'translateX(0)' : 'translateX(30px)',
                                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                            backgroundColor: '#ffffff',
                                            borderRadius: '24px',
                                            padding: 'clamp(25px, 5vw, 50px)',
                                            boxShadow: isActive ? '0 30px 60px -12px rgba(15, 28, 46, 0.12)' : 'none',
                                            border: '1px solid rgba(15, 28, 46, 0.05)',
                                            zIndex: isActive ? 2 : 1
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                                            <span style={{
                                                fontSize: '12px',
                                                fontWeight: '800',
                                                color: '#3b82f6',
                                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                                padding: '4px 10px',
                                                borderRadius: '6px'
                                            }}>
                                                0{idx + 1}
                                            </span>
                                            <h3 style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>
                                                {mistake.title}
                                            </h3>
                                        </div>

                                        <div style={{ minHeight: '100px' }}>
                                            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                                                {mistake.desc}
                                            </p>

                                            {mistake.bullets && mistake.bullets.length > 0 && (
                                                <ul style={{
                                                    listStyle: 'none',
                                                    padding: 0,
                                                    margin: 0,
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                                                    gap: '12px'
                                                }}>
                                                    {mistake.bullets.map((bullet, bulletIdx) => (
                                                        <li key={bulletIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                                            <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                                                            <span style={{ fontSize: '14px', color: '#1e293b', fontWeight: '500', lineHeight: '1.4' }}>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Arrow - Desktop Only */}
                        <button
                            className="medi-slider-nav-btn"
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                border: '1px solid #cbd5e1',
                                backgroundColor: '#ffffff',
                                color: '#0f1c2e',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                zIndex: 10,
                                flexShrink: 0
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Dots / Mobile Nav */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        marginTop: 'clamp(30px, 8vw, 50px)'
                    }}>
                        {mediMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMediActiveMistake(idx)}
                                style={{
                                    width: mediActiveMistake === idx ? '30px' : '12px',
                                    height: '10px',
                                    borderRadius: '10px',
                                    backgroundColor: mediActiveMistake === idx ? '#3b82f6' : '#cbd5e1',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
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