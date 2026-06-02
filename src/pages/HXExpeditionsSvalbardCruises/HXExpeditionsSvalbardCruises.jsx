import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, ChevronLeft, Crown, Phone,
    Globe, Heart, Utensils, Award,
    Maximize, Home, Hotel, GlassWater, Wifi,
    CircleDollarSign, UserCheck, GraduationCap, Mic, FileText, Microscope, FlaskConical,
    Music,
    Moon,
    Minus,
    Camera,
    Snowflake,
    Sun,
    Check
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

import profileAH from '../../assets/Profile_AH.jpg'
import hero1 from '../../assets/HXExpeditionsSvalbardCruises/Hero_1.jpg'
import hero2 from '../../assets/HXExpeditionsSvalbardCruises/Hero_2.jpg'
import hero3 from '../../assets/HXExpeditionsSvalbardCruises/Hero_3.jpg'
import MS_Fram from '../../assets/HXExpeditionsSvalbardCruises/MS_Fram.jpg'
import MS_Roald_Amundsen from '../../assets/HXExpeditionsSvalbardCruises/MS_Roald_Amundsen.jpg'
import MS_Spitsbergen from '../../assets/HXExpeditionsSvalbardCruises/MS_Spitsbergen.jpg'
import Image1 from '../../assets/HXExpeditionsSvalbardCruises/Image_1.jpg'
import Image2 from '../../assets/HXExpeditionsSvalbardCruises/Image_2.jpg'
import Image3 from '../../assets/HXExpeditionsSvalbardCruises/Image_3.jpg'
import Image4 from '../../assets/HXExpeditionsSvalbardCruises/Image_4.jpg'
import Image5 from '../../assets/HXExpeditionsSvalbardCruises/Image_5.jpg'
import Image6 from '../../assets/HXExpeditionsSvalbardCruises/Image_6.jpg'

function HXExpeditionsSvalbardCruises() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)

    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => {
            setMediActiveMistake((prev) => (prev + 1) % 3)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    const hxItineraryImages = [MS_Fram, MS_Spitsbergen, MS_Roald_Amundsen]

    const hxArcticShips = [
        {
            name: "MS Fram",
            title: "MS Fram", // For the dashboard
            icon: <Anchor size={26} />,
            desc: "A classic expedition ship designed specifically for polar exploration with a strong focus on comfort and expedition depth, honoring the heritage of original Norwegian explorers.",
            description: "A classic expedition ship designed specifically for polar exploration with a strong focus on comfort and expedition depth.", // For the dashboard
            best: ["Authentic expedition experiences", "Experienced travelers", "Arctic focused itineraries"],
            bestFor: ["Authentic expedition experiences", "Experienced travelers", "Arctic focused itineraries"], // For the dashboard
            highlights: ["Classic Heritage", "Polar Specialist", "Expedition Depth"]
        },
        {
            name: "MS Spitsbergen",
            title: "MS Spitsbergen",
            icon: <Compass size={26} />,
            desc: "Named after the largest island in Svalbard, this smaller expedition vessel delivers intimate Arctic exploration with exceptional maneuverability in narrow fjords.",
            description: "Named after the largest island in Svalbard, this smaller expedition ship delivers intimate Arctic exploration.",
            best: ["Small ship travelers", "Scenic fjord exploration", "Immersive wildlife viewing"],
            bestFor: ["Small ship travelers", "Scenic fjord exploration", "Immersive wildlife viewing"],
            highlights: ["High Maneuverability", "Boutique Atmosphere", "Intimate Access"]
        },
        {
            name: "MS Roald Amundsen",
            title: "MS Roald Amundsen",
            icon: <FlaskConical size={26} />,
            desc: "A hybrid powered modern expedition vessel combining sustainability with Scandinavian comfort, featuring advanced technology and a strong science focus.",
            description: "A hybrid powered modern expedition vessel combining sustainability with Scandinavian comfort.",
            best: ["Modern luxury expedition travelers", "Eco conscious travelers", "First time expedition guests"],
            bestFor: ["Modern luxury expedition travelers", "Eco conscious travelers", "First time expedition guests"],
            highlights: ["Hybrid Technology", "Scandinavian Design", "Eco-Friendly"]
        }
    ];

    const svalbardFaqs = [
        {
            question: "Can you see polar bears in Svalbard?",
            answer: "Yes. Svalbard is one of the best places in the world to potentially see polar bears in the wild."
        },
        {
            question: "What is the best month for Svalbard cruises?",
            answer: "July and August are often ideal for wildlife activity and milder Arctic conditions."
        },
        {
            question: "Is Svalbard worth visiting?",
            answer: "Absolutely. Svalbard offers one of the world’s most unique Arctic expedition experiences."
        },
        {
            question: "What wildlife can you see in Svalbard?",
            answer: "Polar bears, walrus, whales, Arctic foxes, seals and seabirds are common wildlife highlights."
        },
        {
            question: "What is the midnight sun?",
            answer: "The midnight sun occurs when the Arctic experiences continuous daylight during summer months."
        },
        {
            question: "Are Svalbard cruises cold?",
            answer: "Yes, but summer temperatures are often milder than many travelers expect."
        },
        {
            question: "Are HX Arctic cruises luxury cruises?",
            answer: "HX focuses more on expedition comfort and exploration than traditional ultra luxury cruising."
        },
        {
            question: "Do Svalbard cruises include Zodiac landings?",
            answer: "Most expedition cruises include Zodiac excursions and exploration opportunities."
        },
        {
            question: "What should I pack for Svalbard cruises?",
            answer: "Layered thermal clothing, waterproof outerwear and cold weather accessories are essential."
        },
        {
            question: "Can you see whales in Svalbard?",
            answer: "Yes. Depending on the season, travelers may see humpback whales, belugas and other marine wildlife."
        },
        {
            question: "Do you need to be physically fit for Arctic cruises?",
            answer: "Moderate mobility is important for Zodiac boarding and outdoor exploration."
        },
        {
            question: "Are Arctic expedition cruises safe?",
            answer: "Yes. Professional expedition teams and strict safety standards make Arctic cruises very safe."
        },
        {
            question: "How far in advance should Svalbard cruises be booked?",
            answer: "Ideally 12 to 18 months ahead for best cabin availability and pricing."
        },
        {
            question: "What makes Svalbard different from Alaska cruises?",
            answer: "Svalbard offers a much more remote and wildlife focused High Arctic expedition experience."
        },
        {
            question: "Why should I use a travel advisor for Arctic expeditions?",
            answer: "Expert guidance helps travelers choose the right ship, season, itinerary and expedition style."
        }
    ];

    const hxSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tripsandships.com/PNG%20image.png"
                },
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ]
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "image": "https://www.tripsandships.com/hx-expeditions-svalbard-cruise.jpg",
                "description": "Expert HX Expedition Svalbard cruise specialists providing personalized planning for Arctic, polar bear and midnight sun voyages."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#person",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Trips & Ships Luxury Travel"
                },
                "description": "Angela Hughes is one of the luxury travel industry's most respected travel advisors and educators."
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises#webpage",
                "url": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises",
                "name": "HX Expeditions Svalbard Cruises",
                "description": "Explore HX Expeditions Svalbard cruises with expert guidance from Trips & Ships Luxury Travel. Discover polar bears, Arctic wildlife, midnight sun voyages and luxury small ship exploration."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises#breadcrumb",
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
                        "name": "HX Expeditions Cruises",
                        "item": "https://www.tripsandships.com/hx-expeditions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Svalbard Cruises",
                        "item": "https://www.tripsandships.com/hx-expeditions-svalbard-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": svalbardFaqs.map(faq => ({
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
                <title>HX Expeditions Svalbard Cruises | Polar Bears, Arctic Wildlife & Small Ship Exploration</title>
                <meta name="title" content="HX Expeditions Svalbard Cruises | Luxury Arctic Expedition Experts" />
                <meta name="description" content="Explore HX Expeditions Svalbard cruises with expert guidance from Trips & Ships Luxury Travel. Discover polar bears, Arctic wildlife, midnight sun voyages and luxury small ship exploration." />
                <meta name="keywords" content="HX Expeditions Svalbard Cruises, Svalbard expedition cruises, Arctic expedition cruises, Polar bear cruises, Small ship Arctic cruises" />
                <script type="application/ld+json">{JSON.stringify(hxSchemaData)}</script>
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
                        <Compass size={16} />
                        <span>Polar Bears, Arctic Wildlife & Midnight Sun Expeditions</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        HX Expeditions Svalbard Cruises
                    </h1>
                </div>
            </section>

            {/* PREMIUM INTRO SECTION - SVALBARD EXPEDITION FULL CONTENT */}
            <section className="medi-intro-section medi-premium-intro-section">
                {/* STYLE BLOCK: Handles the hover interaction for icons */}
                <style>{`
        .medi-immersion-card-item:hover .medi-immersion-icon-box {
            background-color: #274472 !important;
            border-color: #274472 !important;
            transform: scale(1.1);
        }
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
                        {/* Left: Editorial intro */}
                        <div className="medi-premium-editorial-block" style={{
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            {/* EYEBROW BADGE */}
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
                                HIGH ARCTIC DISCOVERY
                            </span>

                            {/* HEADING */}
                            <h2 className="medi-premium-heading" style={{
                                color: '#274472',
                                fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2',
                                margin: '0 0 20px 0'
                            }}>
                                Explore One Of The World’s Last Great Wilderness Regions
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px',
                                height: '3px',
                                background: `#3b82f6`,
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Svalbard is one of the most extraordinary expedition cruise destinations on Earth. Located far above the Arctic Circle between mainland Norway and the North Pole, this remote Arctic archipelago delivers dramatic glaciers, towering ice formations, wildlife rich fjords and some of the planet’s best opportunities to see polar bears in the wild.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                HX Expeditions Svalbard cruises are designed for travelers who want true Arctic exploration rather than traditional sightseeing cruises. These journeys focus on immersive small ship experiences, Zodiac landings, wildlife encounters and expert led expedition travel deep into the High Arctic.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%', marginBottom: '24px' }}>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px',
                                    textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Polar Bear Viewing", i: <Compass size={20} /> },
                                        { t: "Glacial Exploration", i: <Anchor size={20} /> },
                                        { t: "Wildlife Encounters", i: <MapPin size={20} /> },
                                        { t: "Expert-Led Travel", i: <GraduationCap size={20} /> }
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

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569' }}>
                                For many luxury travelers, Svalbard becomes a transformational expedition experience combining adventure, wildlife and remote exploration in a way few destinations can match.
                            </p>
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
                                        <span className="medi-expert-card-subtitle">ARCTIC AUTHORITY</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    At Trips & Ships Luxury Travel, we help travelers select the right Arctic expedition itinerary, ship and season based on wildlife goals, comfort expectations and desired expedition depth.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>“</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team provide expert Arctic cruise guidance travelers can trust.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY SVALBARD IS THE BEST ARCTIC DESTINATION */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

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
                            Arctic Destination Profile
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Why Svalbard Is One Of The Best <br /> Arctic Expedition Destinations
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Rare Combination Grid */}
                    <div style={{ marginBottom: '60px' }}>
                        <p style={{
                            fontSize: '18px',
                            color: '#1e293b',
                            fontWeight: '600',
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}>
                            Svalbard offers a rare combination of:
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px'
                        }}>
                            {[
                                { t: "Polar bear viewing opportunities", i: <Compass size={20} /> },
                                { t: "Massive glaciers", i: <Anchor size={20} /> },
                                { t: "Arctic wildlife", i: <Users size={20} /> },
                                { t: "Remote landscapes", i: <Globe size={20} /> },
                                { t: "Midnight sun experiences", i: <Sun size={20} /> },
                                { t: "Small ship expedition access", i: <Ship size={20} /> },
                                { t: "Extraordinary photography", i: <Sparkles size={20} /> }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    padding: '20px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '15px',
                                    border: '1px solid #e2e8f0',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div style={{ color: '#3b82f6', display: 'flex', flexShrink: 0 }}>{item.i}</div>
                                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#334155' }}>{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison / Advantage Block */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        alignItems: 'stretch'
                    }}>
                        {/* The Remote Truth */}
                        <div style={{
                            flex: '1 1 450px',
                            backgroundColor: '#0f1c2e',
                            borderRadius: '24px',
                            padding: '40px',
                            color: '#ffffff',
                            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.1)'
                        }}>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                                Genuinely Remote Exploration
                            </h3>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#cbd5e1', margin: 0 }}>
                                Unlike larger cruise destinations, Svalbard remains genuinely remote and lightly visited.
                                Small expedition ships can navigate into narrow fjords, ice edges, and isolated Arctic
                                environments that are completely inaccessible to larger vessels.
                            </p>
                        </div>

                        {/* The Pure Experience */}
                        <div style={{
                            flex: '1 1 300px',
                            backgroundColor: '#f1f5f9',
                            borderRadius: '24px',
                            padding: '40px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <p style={{
                                fontSize: '19px',
                                color: '#274472',
                                fontWeight: '700',
                                lineHeight: '1.5',
                                margin: 0,
                                fontStyle: 'italic',
                                borderLeft: '4px solid #3b82f6',
                                paddingLeft: '20px'
                            }}>
                                "For travelers seeking authentic expedition travel, Svalbard represents one of the purest Arctic experiences available."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SVALBARD: A HIGH ARCTIC VISUAL NARRATIVE ── */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) 20px',
                backgroundColor: '#0f1c2e',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
          .hx-bento-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 240px;
            gap: 15px;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .hx-bento-item {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: #1e293b;
          }
          .hx-bento-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .hx-bento-item:hover .hx-bento-img {
            transform: scale(1.1);
          }
          .hx-bento-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(15, 28, 46, 0.95) 0%, rgba(15, 28, 46, 0.4) 40%, transparent 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 30px;
            color: #ffffff;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          .hx-bento-item:hover .hx-bento-overlay {
            opacity: 1;
          }
          .hx-overlay-title {
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #3b82f6;
            margin-bottom: 5px;
          }
          .hx-overlay-subtitle {
            font-size: 13px;
            color: #cbd5e1;
            line-height: 1.4;
            margin: 0;
          }

          @media (max-width: 1024px) {
            .hx-bento-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
            .item-large { grid-column: span 2; grid-row: span 2; }
            .item-wide { grid-column: span 2; grid-row: span 1; }
            .item-standard { grid-column: span 1; grid-row: span 1; }
          }

          @media (max-width: 600px) {
            .hx-bento-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; }
            .hx-bento-item { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}</style>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            Visual Narrative
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#ffffff',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Svalbard: The Spirit of High Arctic Discovery
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Airtight Bento Grid */}
                    <div className="hx-bento-grid">

                        {/* Image 1: Active Discovery (Large 2x2) */}
                        <div className="hx-bento-item item-large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
                            <img src={Image1} alt="Active Discovery" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Active Discovery</span>
                                <p className="hx-overlay-subtitle">Immersive exploration from the waterline of the world’s remote frontiers.</p>
                            </div>
                        </div>

                        {/* Image 2: Glacial Immersion (Top Right) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image2} alt="Glacial Immersion" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Glacial Immersion</span>
                                <p className="hx-overlay-subtitle">Unrivaled relaxation at the very edge of the Great Ice.</p>
                            </div>
                        </div>

                        {/* Image 3: Celestial Wonders (Middle Right) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image3} alt="Ocean Wellness" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Ocean Wellness</span>
                                <p className="hx-overlay-subtitle">Rejuvenating mind and body in the world’s purest air.</p>
                            </div>
                        </div>

                        {/* Image 4: Culinary Artistry (Bottom Left under large) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image4} alt="Residential Comfort" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Residential Comfort</span>
                                <p className="hx-overlay-subtitle">Scandinavian-designed suites tailored for Arctic rest and reflection.</p>
                            </div>
                        </div>

                        {/* Image 5: Gourmet Vistas (Bottom Middle) */}
                        <div className="hx-bento-item item-standard">
                            <img src={Image5} alt="Gourmet Vistas" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Gourmet Vistas</span>
                                <p className="hx-overlay-subtitle">Exceptional cuisine paired with floor-to-ceiling glacial landscapes.</p>
                            </div>
                        </div>

                        {/* Image 6: Epicurean Artistry (Wide Bottom) */}
                        <div className="hx-bento-item item-wide" style={{ gridColumn: 'span 4', gridRow: 'span 1' }}>
                            <img src={Image6} alt="Epicurean Artistry" className="hx-bento-img" />
                            <div className="hx-bento-overlay">
                                <span className="hx-overlay-title">Epicurean Artistry</span>
                                <p className="hx-overlay-subtitle">Handcrafted flavors inspired by the regions we explore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE HX EXPEDITIONS FOR SVALBARD SECTION */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            The HX Advantage
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Why Choose HX Expeditions For Svalbard Cruises?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            fontSize: '19px',
                            color: '#475569',
                            maxWidth: '850px',
                            margin: '30px auto 0',
                            lineHeight: '1.7',
                            fontWeight: '500'
                        }}>
                            HX Expeditions has decades of polar expedition experience and operates purpose-built expedition ships designed specifically for Arctic exploration.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '40px',
                        marginBottom: '50px'
                    }}>

                        {/* Pillar 1: The Core Experience */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '25px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Compass size={24} style={{ color: '#3b82f6' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>The Experience Focus</h3>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Wildlife encounters",
                                    "Polar education",
                                    "Expedition landings",
                                    "Science focused enrichment",
                                    "Flexible daily exploration",
                                    "Small group experiences",
                                    "Arctic immersion"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '16px', color: '#475569', fontWeight: '500' }}>
                                        <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pillar 2: Adaptive Itineraries */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '25px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#0f1c2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Anchor size={24} style={{ color: '#ffffff' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Adaptive Itineraries</h3>
                            </div>

                            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>
                                Unlike conventional cruises, expedition itineraries are often adjusted based on current environmental factors:
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Sea ice conditions",
                                    "Wildlife sightings",
                                    "Weather patterns",
                                    "Expedition opportunities"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '16px', color: '#475569', fontWeight: '600' }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%' }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '16px', borderLeft: '4px solid #0f1c2e' }}>
                                <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '600', margin: 0, lineHeight: '1.5' }}>
                                    This creates a far more authentic and unpredictable connection to the Arctic.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Note */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        padding: window.innerWidth <= 360 ? '28px 14px' : '40px 50px',
                        color: '#ffffff',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        <p style={{ fontSize: '19px', color: '#ffffff', lineHeight: '1.7', margin: 0, fontWeight: '700', fontStyle: 'italic' }}>
                            "This flexibility creates a far more dynamic and immersive Arctic experience."
                        </p>
                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 01: THE ARCTIC IN MOTION ── */}
            <section style={{
                padding: 'clamp(60px, 10vw, 100px) 20px',
                backgroundColor: '#0f1c2e',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            High Latitude Exploration
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#ffffff',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Arctic Immersion: Svalbard in Motion
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            color: '#cbd5e1',
                            fontSize: '18px',
                            marginTop: '25px',
                            lineHeight: '1.7',
                            maxWidth: '850px',
                            margin: '25px auto 0'
                        }}>
                            Seeing Svalbard is one thing; experiencing the silent power of a hybrid ship navigating sea ice and the thrill of a Zodiac landing is another. Watch how the High Arctic transforms through the lens of an HX expedition, where groundbreaking technology meets the raw beauty of the North Pole's doorstep.
                        </p>
                    </div>

                    {/* Video Player Container */}
                    <div style={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        aspectRatio: '16/9',
                        backgroundColor: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube-nocookie.com/embed/bKc925akhrQ"
                            title="HX Expeditions Svalbard Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* THE MIDNIGHT SUN EXPERIENCE SECTION */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

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
                            Arctic Phenomena
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            The Midnight Sun Experience
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            fontSize: '19px',
                            color: '#475569',
                            maxWidth: '800px',
                            margin: '30px auto 0',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            One of the most magical aspects of summer Svalbard cruises is the midnight sun.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div style={{ marginBottom: '60px' }}>
                        <p style={{
                            fontSize: '16px',
                            color: '#64748b',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            letterSpacing: '1px',
                            marginBottom: '40px'
                        }}>
                            During Arctic summer, the sun never fully sets, creating:
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '20px'
                        }}>
                            {[
                                { t: "Extended exploration hours", i: <Clock size={20} /> },
                                { t: "Extraordinary photography lighting", i: <Sparkles size={20} /> },
                                { t: "Continuous daylight", i: <Sun size={20} /> },
                                { t: "Unique Arctic scenery", i: <Globe size={20} /> },
                                { t: "Flexible wildlife opportunities", i: <Compass size={20} /> }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '30px 20px',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '20px',
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{
                                        color: '#3b82f6',
                                        marginBottom: '15px',
                                        backgroundColor: '#eff6ff',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.i}
                                    </div>
                                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2e', lineHeight: '1.4' }}>
                                        {item.t}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Highlight Photography Box */}
                    <div style={{
                        backgroundColor: '#0f1c2e',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        padding: window.innerWidth <= 360 ? '30px 20px' : '60px 40px',
                        color: '#ffffff',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(15, 28, 46, 0.15)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Visual glow effect */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                            zIndex: 0
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                <Sparkles size={32} style={{ color: '#3b82f6' }} />
                            </div>
                            <p style={{
                                fontSize: 'clamp(18px, 3vw, 24px)',
                                color: '#ffffff',
                                fontWeight: '600',
                                lineHeight: '1.5',
                                margin: '0 auto',
                                maxWidth: '900px',
                                fontFamily: 'serif',
                                fontStyle: 'italic'
                            }}>
                                "The golden Arctic light during late evening hours creates some of the most beautiful expedition photography conditions in the world."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST TIME TO CRUISE SVALBARD - SEASONAL ANALYSIS */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#e6edf7', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Expedition Planning
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Best Time To Cruise Svalbard
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    {/* Seasonal Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
                        gap: '30px',
                        marginBottom: '50px'
                    }}>

                        {/* May & June */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <Snowflake size={22} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>May & June</h3>
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Best For:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {[
                                    "Dramatic ice scenery",
                                    "Snow covered landscapes",
                                    "Polar bear opportunities",
                                    "Crisp Arctic conditions"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* July & August */}
                        <div style={{
                            backgroundColor: '#0f1c2e',
                            borderRadius: '24px',
                            padding: '40px',
                            color: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 20px 40px rgba(15, 28, 46, 0.2)',
                            transform: window.innerWidth > 1024 ? 'scale(1.05)' : 'none',
                            zIndex: 1
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <Sun size={22} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: 0 }}>July & August</h3>
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Best For:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {[
                                    "Wildlife activity",
                                    "Milder temperatures",
                                    "Accessible fjords",
                                    "Midnight sun experiences",
                                    "Whale sightings"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#cbd5e1', fontWeight: '500' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* September */}
                        <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                    <Camera size={22} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>September</h3>
                            </div>
                            <p style={{ fontSize: '12px', fontWeight: '800', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Best For:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {[
                                    "Autumn Arctic colors",
                                    "Photography",
                                    "Fewer ships",
                                    "Late season wildlife"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#475569', fontWeight: '500' }}>
                                        <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Expert Closing Statement */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        padding: '30px',
                        textAlign: 'center',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}>
                        <p style={{ fontSize: '17px', color: '#274472', fontWeight: '700', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                            "Different departures offer dramatically different Arctic experiences, making expert planning especially important."
                        </p>
                    </div>

                </div>
            </section>

            {/* HX ARCTIC SHIPS SHOWCASE - INTERACTIVE DASHBOARD */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">

                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">
                            THE ARCTIC FLEET
                        </span>
                        <h2 className="medi-itinerary-showcase-heading">
                            HX Expedition Ships In The Arctic
                        </h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* LEFT SIDE: SHIP SELECTION TABS */}
                        <div className="medi-itinerary-tabs">
                            {hxArcticShips.map((ship, idx) => (
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
                                            {ship.title}
                                        </span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* RIGHT SIDE: SHIP DETAIL CARD */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                                {/* Image Placeholder - Will show if you add paths to hxItineraryImages array */}
                                {hxItineraryImages[mediSelectedItinerary] ? (
                                    <img
                                        src={hxItineraryImages[mediSelectedItinerary]}
                                        alt={hxArcticShips[mediSelectedItinerary].title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                    />
                                ) : (
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Ship size={80} color="rgba(255,255,255,0.1)" />
                                    </div>
                                )}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">
                                    VESSEL SPOTLIGHT
                                </span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {hxArcticShips[mediSelectedItinerary].title}
                                </h3>

                                <p style={{ color: '#475569', fontSize: '16px', marginBottom: '25px', lineHeight: '1.7' }}>
                                    {hxArcticShips[mediSelectedItinerary].description}
                                </p>

                                <div className="medi-itinerary-details-grid">
                                    {/* LEFT COLUMN: BEST FOR */}
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">
                                            Best For:
                                        </h4>
                                        <ul className="medi-itinerary-details-list">
                                            {hxArcticShips[mediSelectedItinerary].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* RIGHT COLUMN: TECHNICAL HIGHLIGHTS */}
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">
                                            Vessel Highlights:
                                        </h4>
                                        <div className="medi-itinerary-details-chips">
                                            {hxArcticShips[mediSelectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <Check size={12} className="medi-itinerary-chip-icon" />
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

            {/* WHAT EXPEDITION TRAVEL ACTUALLY FEELS LIKE */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="medi-section-heading">What Arctic Expedition Travel Actually Feels Like</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '18px', color: '#475569', maxWidth: '800px', margin: '20px auto 0', lineHeight: '1.6' }}>
                            Svalbard expedition cruising feels very different from mainstream cruising.
                        </p>
                    </div>

                    <div className="medi-audience-split-layout">
                        {/* LEFT COLUMN: EXPECTATIONS */}
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Travelers should expect:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Flexible schedules", i: <Clock size={20} /> },
                                    { t: "Wildlife focused exploration", i: <Compass size={20} /> },
                                    { t: "Zodiac cruising", i: <Ship size={20} /> },
                                    { t: "Expedition briefings", i: <GraduationCap size={20} /> },
                                    { t: "Outdoor experiences", i: <MapPin size={20} /> },
                                    { t: "Casual onboard atmosphere", i: <Users size={20} /> },
                                    { t: "Educational programming", i: <Globe size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">
                                            {item.i}
                                        </div>
                                        <span>{item.t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT COLUMN: NOT EXPECTED */}
                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Travelers should not expect:</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { t: "Casinos", i: <CircleDollarSign size={20} /> },
                                    { t: "Formal cruise nights", i: <Crown size={20} /> },
                                    { t: "Broadway entertainment", i: <Music size={20} /> },
                                    { t: "Large ship nightlife", i: <Moon size={20} /> }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Minus size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{item.t}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{
                                marginTop: '40px',
                                padding: '25px',
                                backgroundColor: '#ffffff',
                                borderRadius: '20px',
                                borderLeft: '5px solid #3b82f6',
                                textAlign: 'left',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                            }}>
                                <p style={{ fontSize: '18px', color: '#0f1c2e', fontWeight: '800', margin: 0, fontStyle: 'italic' }}>
                                    "The Arctic itself is the experience."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMON SVALBARD CRUISE MISTAKES SECTION */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

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
                            Strategic Planning
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em'
                        }}>
                            Common Svalbard Cruise Mistakes
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: window.innerWidth <= 360 ? '18px' : '30px',
                        padding: window.innerWidth <= 360 ? '28px 14px' : '50px 45px',
                        boxShadow: '0 25px 50px -12px rgba(15, 28, 46, 0.08)',
                        border: '1px solid #e2e8f0'
                    }}>

                        <p style={{
                            fontSize: '19px',
                            color: '#0f1c2e',
                            fontWeight: '600',
                            marginBottom: '40px',
                            textAlign: 'center'
                        }}>
                            Many travelers make avoidable mistakes when planning Arctic expeditions including:
                        </p>

                        {/* Mistakes List Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                            gap: '20px 40px',
                            marginBottom: '40px'
                        }}>
                            {[
                                "Choosing the wrong season",
                                "Underestimating Arctic weather",
                                "Booking based only on price",
                                "Not understanding expedition style travel",
                                "Packing incorrectly",
                                "Waiting too long to reserve cabins"
                            ].map((mistake, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '15px 0',
                                    borderBottom: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ marginTop: '2px' }}>
                                        <CheckCircle size={20} style={{ color: '#3b82f6' }} />
                                    </div>
                                    <span style={{
                                        fontSize: '17px',
                                        color: '#475569',
                                        fontWeight: '500',
                                        lineHeight: '1.4'
                                    }}>
                                        {mistake}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Authority Footer Box */}
                        <div style={{
                            backgroundColor: '#0f1c2e',
                            borderRadius: window.innerWidth <= 360 ? '14px' : '20px',
                            padding: window.innerWidth <= 360 ? '20px 14px' : '30px',
                            textAlign: 'center',
                            boxShadow: '0 15px 30px rgba(15, 28, 46, 0.15)',
                            borderLeft: '6px solid #3b82f6'
                        }}>
                            <p style={{
                                fontSize: '18px',
                                color: '#ffffff',
                                margin: 0,
                                fontWeight: '700',
                                letterSpacing: '0.01em'
                            }}>
                                Svalbard expedition planning benefits enormously from expert guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST FOR / NOT BEST FOR SECTION - BRAND THEME */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Traveler Fit
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(30px, 5vw, 42px)',
                            color: "#274472",
                            fontWeight: '700',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            Is A Svalbard Expedition Right For You?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
                        gap: '30px'
                    }}>

                        {/* Best For Card - Azure Blue Accents */}
                        <div style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '28px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    backgroundColor: '#eff6ff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle size={22} style={{ color: '#3b82f6' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Best For</h3>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Wildlife lovers",
                                    "Adventure travelers",
                                    "Photography enthusiasts",
                                    "Experienced luxury travelers",
                                    "Expedition focused travelers"
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '16px',
                                        fontSize: '17px',
                                        color: '#334155',
                                        fontWeight: '600'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not Best For Card - Neutral Slate Accents */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: window.innerWidth <= 360 ? '18px' : '28px',
                            padding: window.innerWidth <= 360 ? '28px 16px' : '45px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 10px 30px rgba(15, 28, 46, 0.04)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '12px',
                                    backgroundColor: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <Minus size={22} style={{ color: '#64748b' }} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2e', margin: 0 }}>Not Best For</h3>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    "Travelers wanting traditional cruise entertainment",
                                    "Guests seeking beach style vacations",
                                    "Travelers uncomfortable with flexible itineraries"
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '16px',
                                        fontSize: '17px',
                                        color: '#475569',
                                        fontWeight: '600'
                                    }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#94a3b8', flexShrink: 0 }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Neutral Advisory Callout */}
                            <div style={{
                                marginTop: '28px',
                                padding: '20px',
                                backgroundColor: '#f8fafc',
                                borderRadius: '14px',
                                borderLeft: '4px solid #0f1c2e'
                            }}>
                                <p style={{ fontSize: '15px', color: '#0f1c2e', fontWeight: '700', margin: 0, lineHeight: '1.6' }}>
                                    Expedition travel is unique. We ensure your expectations align with the reality of the High Arctic.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── VIDEO SECTION 02: WILDLIFE & EMOTIONAL IMPACT ── */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#f8fafc',
                fontFamily: 'sans-serif'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{
                            color: '#3b82f6',
                            fontWeight: '700',
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            display: 'block',
                            marginBottom: '15px'
                        }}>
                            Wildlife & Wilderness
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(28px, 5vw, 42px)',
                            color: '#274472',
                            fontWeight: '800',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}>
                            The Realm of the Ice King
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{
                            color: '#475569',
                            fontSize: '18px',
                            marginTop: '25px',
                            lineHeight: '1.7',
                            maxWidth: '800px',
                            margin: '25px auto 0'
                        }}>
                            In Svalbard, the environment dictates the journey. Watch the silent, breathtaking moments of Arctic wildlife in their natural habitat—from the king of the north, the polar bear, to the massive walrus colonies of the high-latitude fjords. This is the heart of the expedition experience.
                        </p>
                    </div>

                    {/* Video Player */}
                    <div style={{
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(15, 28, 46, 0.12)',
                        border: '1px solid #e2e8f0',
                        aspectRatio: '16/9',
                        backgroundColor: '#000'
                    }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube-nocookie.com/embed/z11RmkKT8b0"
                            title="Wildlife Encounters in Svalbard"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY SECTION - UPDATED CONTENT */}
            <section className="medi-authority-section">
                <style>{`
          @keyframes prestige-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes prestige-reverse-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          .medi-prestige-seal-ring {
            animation: prestige-spin 25s linear infinite;
            border: 2px dashed rgba(255,255,255,0.4) !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .medi-prestige-static-img {
            animation: prestige-reverse-spin 25s linear infinite;
          }
        `}</style>

                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>
                            Why Travelers Trust Angela Hughes & Trips & Ships Luxury Travel
                        </h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{
                            textAlign: 'center',
                            maxWidth: '850px',
                            margin: '20px auto 0',
                            fontSize: '18px',
                            color: '#475569',
                            lineHeight: '1.6'
                        }}>
                            Angela Hughes is one of the luxury travel industry’s most respected travel advisors and educators.
                        </p>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        {/* Left Side: The Identity Board */}
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={profileAH}
                                    alt="Angela Hughes"
                                    className="medi-prestige-static-img"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)'
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        {/* Right Side: Credentials List */}
                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Ship, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "ADVISORY" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" }
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

                    {/* Concluding Specialization Box */}
                    <div style={{
                        marginTop: window.innerWidth <= 360 ? '30px' : '50px',
                        padding: window.innerWidth <= 360 ? '20px 14px' : '35px',
                        backgroundColor: '#f8fafc',
                        borderRadius: window.innerWidth <= 360 ? '16px' : '24px',
                        border: '1px solid #e2e8f0',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            color: '#0f1c2e',
                            fontWeight: '600',
                            lineHeight: '1.7',
                            margin: 0,
                            fontStyle: 'italic'
                        }}>
                            "Angela and her team specialize in helping travelers choose the right expedition experiences based on comfort expectations, travel style and destination priorities."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION - UPDATED WITH SVALBARD CONTENT */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">HX Expeditions Svalbard: <br /> Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {svalbardFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => mediToggleFaq(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="medi-faq-question-row">
                                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {mediActiveFaq === index ? "−" : "+"}
                                    </span>
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

            {/* STRONG CTA SECTION - SVALBARD FINAL CONVERSION */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Ready To Explore The Arctic With HX Expeditions?
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Svalbard is one of the world’s most unforgettable expedition cruise destinations.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '700', color: '#ffffff', margin: '0 auto 24px' }}>
                            Choosing the right itinerary, season and ship can dramatically impact your Arctic experience.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '850px', margin: '0 auto 24px' }}>
                            Trips & Ships Luxury Travel helps travelers confidently plan extraordinary HX Expeditions Svalbard cruises with expert personalized guidance.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#3b82f6', margin: '0 auto 36px', maxWidth: '850px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Contact Trips & Ships Luxury Travel today to begin planning your Arctic expedition.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Personalized Arctic Expedition Consultation Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HXExpeditionsSvalbardCruises