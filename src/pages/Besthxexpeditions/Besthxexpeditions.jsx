import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import Profile_AH from "../../assets/Media (3).jpg"
import Profile_AH_image from "../../assets/Media (2).jpg"


import heroImg1 from '../../assets/Besthxexpeditions/_CebacoIsland_Panama_Fram_YuriChoufour-10-98.webp'
import heroImg2 from '../../assets/Besthxexpeditions/ANDREA KLAUSSNER - 20220703_CAMP FRIEDA_8854_BYANDREAKLAUSSNER-2.webp'
import heroImg3 from '../../assets/Besthxexpeditions/ANDREA KLAUSSNER - 20220706_IVITTUUT_9417_BYANDREAKLAUSSNER.webp'

import antarcticaImg from '../../assets/Besthxexpeditions/antarticacruise.jpg'
import galapagosImg from '../../assets/Besthxexpeditions/galapagoscruise.webp'
import svalbardImg from '../../assets/Besthxexpeditions/svalbardcruise.jpg'
import greenlandImg from '../../assets/Besthxexpeditions/greenlandcruise.jpg'

import roaldAmundsenImg from '../../assets/Besthxexpeditions/amundsen.webp'
import fridtjofNansenImg from '../../assets/Besthxexpeditions/nansencruise.webp'
import santaCruzImg from '../../assets/Besthxexpeditions/santacruise.jpg'
import spitsbergenImg from '../../assets/Besthxexpeditions/spitsbergen.webp'

import antarcticaImg1 from '../../assets/Besthxexpeditions/antarcticaImg1.jpg'
import zodiacLandingImg1 from '../../assets/Besthxexpeditions/zodiacLandingImg1.webp'
import svalbardImg1 from '../../assets/Besthxexpeditions/svalbardImg1.webp'
import galapagosImg1 from '../../assets/Besthxexpeditions/galapagosImg1.webp'
import greenlandImg1 from '../../assets/Besthxexpeditions/greenlandImg1.webp'
import wildlifeImg1 from '../../assets/Besthxexpeditions/wildlifeImg1.webp'

import Gal_pagos_Islands from '../../assets/Besthxexpeditions/Gal_pagos_Islands.jpg'



import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Camera, Wind, Binoculars, Snowflake
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function BestHXExpeditions() {

    // ── Hero slider ────────────────────────────────────────────────────────
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [heroImg1, heroImg2, heroImg3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero(prev => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    // ── FAQ ────────────────────────────────────────────────────────────────
    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const mediToggleFaq = index => setMediActiveFaq(mediActiveFaq === index ? null : index)

    // ── Destination tabs ───────────────────────────────────────────────────
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)

    // ── Mistakes slider ────────────────────────────────────────────────────
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)
    useEffect(() => {
        if (isMediSliderHovered) return
        const t = setInterval(() => setMediActiveMistake(p => (p + 1) % 6), 5000)
        return () => clearInterval(t)
    }, [isMediSliderHovered])

    // ── Ship tabs (new section) ────────────────────────────────────────────
    const [activeShip, setActiveShip] = useState(0)

    // ── What To Expect tabs ───────────────────────────────────────────────
    const [activeExpectTab, setActiveExpectTab] = useState(0)

    // ── Mobile viewport ──────────────────────────────────────────────────
    const [isMobileViewport, setIsMobileViewport] = useState(false)
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
            setWindowWidth(window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // ─────────────────────────────────────────────────────────────────────
    // DATA
    // ─────────────────────────────────────────────────────────────────────

    const mediItineraries = [
        {
            title: 'Antarctica Cruises',
            img: antarcticaImg,
            badge: 'MOST POPULAR',
            bestFor: ['Bucket list travelers', 'Wildlife lovers', 'Dramatic scenery seekers', 'Travelers wanting the iconic expedition experience'],
            highlights: ['Penguin colonies', 'Whale sightings', 'Icebergs', 'Zodiac landings', 'Glacier scenery'],
            note: 'Antarctica is the most popular first expedition destination for many travelers. For many travelers, Antarctica becomes a life changing travel experience.'
        },
        {
            title: 'Galápagos Cruises',
            img: galapagosImg,
            badge: 'EASIEST FOR BEGINNERS',
            bestFor: ['Wildlife lovers', 'Warmer weather travelers', 'Softer expedition experiences', 'First time expedition cruisers nervous about polar travel'],
            highlights: ['Incredible wildlife encounters', 'Easy Zodiac landings', 'Snorkeling opportunities', 'Educational naturalist programs', 'Smaller ship atmosphere'],
            note: 'The Galápagos offers one of the easiest and most approachable expedition cruise experiences. HX operates the MS Santa Cruz II in the Galápagos.'
        },
        {
            title: 'Svalbard Cruises',
            img: svalbardImg,
            badge: 'TRUE ARCTIC EXPERIENCE',
            bestFor: ['Arctic wildlife lovers', 'Polar bear enthusiasts', 'Travelers seeking remote Arctic exploration'],
            highlights: ['Polar bears', 'Walrus', 'Arctic foxes', 'Massive glaciers', 'Midnight sun'],
            note: 'Svalbard feels more remote and unpredictable than many first timers expect. Wildlife sightings are never guaranteed and weather can significantly impact itineraries.'
        },
        {
            title: 'Greenland Cruises',
            img: greenlandImg,
            badge: 'SCENIC ARCTIC',
            bestFor: ['Scenic travelers', 'Cultural exploration', 'Iceberg photography', 'Travelers wanting less crowded Arctic experiences'],
            highlights: ['Massive icebergs', 'Inuit culture', 'Remote villages', 'Dramatic fjords', 'Arctic scenery'],
            note: 'Many travelers find Greenland slightly less intimidating than Antarctica while still delivering an authentic expedition experience.'
        }
    ]

    const ships = [
        {
            name: 'MS Roald Amundsen',
            img: roaldAmundsenImg,
            bestFor: ['Antarctica', 'Modern comfort', 'First time polar travelers'],
            note: "HX's hybrid powered ships have become particularly popular with first time expedition travelers seeking modern comfort."
        },
        {
            name: 'MS Fridtjof Nansen',
            img: fridtjofNansenImg,
            bestFor: ['Arctic exploration', 'Hybrid expedition travel', 'Comfortable expedition experiences'],
            note: 'A sister ship to Roald Amundsen, offering the same hybrid technology with excellent expedition programming.'
        },
        {
            name: 'MS Santa Cruz II',
            img: santaCruzImg,
            bestFor: ['Galápagos wildlife', 'Smaller ship atmosphere', 'Beginner expedition travelers'],
            note: 'The MS Santa Cruz II is purpose-built for Galápagos exploration with expert naturalist guides onboard.'
        },
        {
            name: 'MS Spitsbergen',
            img: spitsbergenImg,
            bestFor: ['Arctic wildlife', 'More traditional expedition atmosphere'],
            note: 'MS Spitsbergen offers a classic expedition vessel experience for those seeking a more traditional atmosphere.'
        }
    ]

    const mediMistakes = [
        {
            title: 'Booking the Wrong Destination',
            desc: 'Each HX destination delivers a very different experience. Antarctica, Galápagos, Svalbard and Greenland each suit different traveler personalities and comfort levels.',
            bullets: ['Antarctica is dramatic but includes the Drake Passage', 'Galápagos is warmer and far more approachable for beginners']
        },
        {
            title: 'Underestimating Activity Levels',
            desc: 'Zodiac boarding and walking excursions are common. Moderate mobility is helpful for most HX expedition itineraries.'
        },
        {
            title: 'Packing Incorrectly',
            desc: 'Layered clothing, waterproof gear and proper footwear are essential. Many first timers underpack for polar conditions.'
        },
        {
            title: 'Choosing Based Only on Price',
            desc: 'Ship atmosphere, destination fit, activity levels and expedition leadership quality all matter far more than base pricing on expedition cruises.'
        },
        {
            title: 'Ignoring Ship Atmosphere Differences',
            desc: 'The MS Santa Cruz II in the Galápagos offers a very different atmosphere from the MS Roald Amundsen in Antarctica. Matching ship to destination matters.'
        },
        {
            title: 'Waiting Too Long to Book',
            desc: 'Popular HX expedition itineraries — especially Antarctica and Galápagos — sell out well in advance. Early booking secures better cabin choices and pricing.'
        }
    ]

    const mediFaqs = [
        { question: 'What is the best HX Expeditions cruise for first timers?', answer: 'For many travelers, Antarctica and the Galápagos are the best first HX expedition cruises.' },
        { question: 'Is Antarctica good for a first expedition cruise?', answer: 'Yes. Antarctica is one of the world\'s most iconic expedition destinations for first time travelers.' },
        { question: 'Which HX destination is easiest for beginners?', answer: 'The Galápagos is generally considered the easiest and most approachable expedition destination.' },
        { question: 'Are HX expedition cruises physically demanding?', answer: 'Moderate mobility is helpful because Zodiac boarding and walking excursions are common.' },
        { question: 'What should first time expedition travelers expect?', answer: 'Expect wildlife encounters, educational programming, flexible itineraries and outdoor exploration.' },
        { question: 'Is the Drake Passage rough?', answer: 'It can be. Conditions vary significantly from sailing to sailing.' },
        { question: 'Which HX ship is best for beginners?', answer: 'MS Roald Amundsen and MS Santa Cruz II are excellent beginner friendly expedition ships.' },
        { question: 'Are expedition cruises good for older travelers?', answer: 'Yes, although mobility and activity levels should be considered carefully.' },
        { question: 'What is included on HX expedition cruises?', answer: 'Most HX cruises include accommodations, meals, lectures and many expedition activities.' },
        { question: 'Is the Galápagos a good first expedition cruise?', answer: 'Yes. The Galápagos offers exceptional wildlife with easier logistics and warmer weather.' },
        { question: 'Which is better for beginners, Antarctica or the Arctic?', answer: 'Antarctica is often more iconic, while Greenland and some Arctic itineraries may feel slightly less intimidating.' },
        { question: 'How many people are on HX expedition ships?', answer: 'Passenger counts vary by ship, typically ranging from smaller vessels to ships carrying around 500 guests.' },
        { question: 'What should I pack for my first expedition cruise?', answer: 'Layered clothing, waterproof gear and proper footwear are essential.' },
        { question: 'How expensive are HX expedition cruises?', answer: 'Pricing varies greatly depending on destination, season and cabin category.' },
        { question: 'Why use a travel advisor for expedition cruises?', answer: 'Expedition cruising involves major differences in ship style, destinations and activity levels where expert guidance is extremely valuable.' }
    ]

    const mediSchemaData =
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers",
                "name": "Best HX Expeditions Cruises for First Timers",
                "url": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers",
                "description": "Discover the best HX Expeditions cruises for first timers. Compare Antarctica, Svalbard, Greenland and Galápagos expeditions with expert guidance from Trips & Ships Luxury Travel.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers#article"
                }
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
                "description": "Luxury travel agency specializing in cruise vacations, expedition cruises and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers#article",
                "headline": "Best HX Expeditions Cruises for First Timers",
                "url": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers",
                "description": "Expert guide to the best HX Expeditions cruises for first timers including Antarctica, Galápagos, Greenland and Svalbard expedition cruise recommendations.",
                "image": "https://www.tripsshipsluxurytravel.com/images/best-hx-expeditions-for-first-timers.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers"
                }
            },
            {
                "@type": "Service",
                "name": "HX Expedition Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Expedition Cruise Consulting",
                "description": "Personalized expedition cruise planning services helping travelers choose the best HX Expeditions itinerary, destination and ship for their first expedition cruise."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsshipsluxurytravel.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "HX Expeditions",
                        "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Best HX Expeditions Cruises for First Timers",
                        "item": "https://www.tripsshipsluxurytravel.com/best-hx-expeditions-cruises-for-first-timers"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the best HX Expeditions cruise for first timers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For many travelers, Antarctica and the Galápagos are the best first HX expedition cruises because they offer exceptional wildlife, memorable scenery and well-developed expedition programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Antarctica good for a first expedition cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Antarctica is one of the world's most iconic expedition destinations and is often the top choice for first-time expedition travelers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which HX destination is easiest for beginners?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Galápagos is generally considered the easiest and most approachable expedition destination due to warmer weather, predictable operations and exceptional wildlife."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are HX expedition cruises physically demanding?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Moderate mobility is helpful because Zodiac boarding, shore landings and walking excursions are common on many HX expeditions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should first time expedition travelers expect?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Expect wildlife encounters, educational programming, Zodiac excursions, flexible itineraries and outdoor exploration focused on destination immersion."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the Drake Passage rough?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It can be. Conditions vary significantly depending on weather and sea state, ranging from calm crossings to rougher experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which HX ship is best for beginners?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "MS Roald Amundsen and MS Santa Cruz II are among the best HX ships for beginners because they combine comfort, expedition expertise and excellent destination experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are expedition cruises good for older travelers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many older travelers enjoy expedition cruises, although activity levels and mobility requirements should be considered carefully."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on HX expedition cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most HX cruises include accommodations, meals, educational lectures, expedition activities and onboard enrichment programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the Galápagos a good first expedition cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The Galápagos offers incredible wildlife encounters, easy logistics and a beginner-friendly expedition experience."
                        }
                    }
                ]
            }
        ]
    };



    // ─────────────────────────────────────────────────────────────────────
    // RENDER
    // ─────────────────────────────────────────────────────────────────────
    return (
        <>
            <Helmet>
                <title>Best HX Expeditions Cruises for First Timers | Antarctica, Arctic & Galápagos Guide

                </title>
                <meta name="title" content="Best HX Expeditions Cruises for Beginners | Expert Planning Guide
" />
                <meta name="description" content="Discover the best HX Expeditions cruises for first timers. Compare Antarctica, Svalbard, Greenland and Galápagos expeditions with expert guidance from Trips & Ships Luxury Travel." />
                <meta name="keywords" content="Best HX Expeditions Cruises for First Timers
, HX expedition cruises
, beginner expedition cruises, Antarctica expedition cruises, Arctic expedition cruises" />
                <script type="application/ld+json">{JSON.stringify(mediSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════════════
                HERO
            ════════════════════════════════════════════════════════════ */}
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
                        <span>Expert Expedition Cruise Planning</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best HX Expeditions Cruises for First Timers
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                PREMIUM INTRO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Left: Editorial */}
                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">FIRST TIMER EXPEDITION GUIDE</span>
                            <h2 className="medi-premium-heading">Choosing Your First Expedition Cruise Can Feel Overwhelming</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                For many travelers, expedition cruising represents a completely different type of travel experience compared to traditional cruises. Instead of casinos, Broadway style entertainment and crowded ports, expedition cruising focuses on:
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    HX Expeditions combines authentic exploration with approachable comfort through:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Binoculars size={20} />, label: 'Wildlife' },
                                        { icon: <Compass size={20} />, label: 'Exploration' },
                                        { icon: <Globe size={20} />, label: 'Nature' },
                                        { icon: <GraduationCap size={20} />, label: 'Education' },
                                        { icon: <MapPin size={20} />, label: 'Remote destinations' },
                                        { icon: <Anchor size={20} />, label: 'Zodiac landings' },
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Signature Expert */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">EXPEDITION CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, we help travelers determine which HX destination, ship and itinerary best matches comfort level, activity level, wildlife interests, travel experience, adventure tolerance, budget and luxury expectations.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips &amp; Ships Luxury Travel team provide trusted luxury expedition guidance travelers can rely on.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHY HX IS GREAT FOR BEGINNERS  (medi-excel-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">EXPEDITION CRUISE PLANNING // HX EXPEDITIONS</div>
                <div className="medi-excel-coord coord-tr">78.2232° N, 15.6267° E</div>
                <div className="medi-excel-coord coord-bl">-64.2823° S, -56.3214° W</div>
                <div className="medi-excel-coord coord-br">-0.9537° S, -90.9656° W</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Why HX Expeditions Is Great For Beginners</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            HX has been operating expedition voyages since 1896 and remains one of the most established names in expedition travel.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">First time expedition travelers often appreciate:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <CheckCircle size={18} />, label: 'Strong onboard organization' },
                                        { icon: <Users size={18} />, label: 'Experienced expedition teams' },
                                        { icon: <GraduationCap size={18} />, label: 'Educational programs' },
                                        { icon: <Ship size={18} />, label: 'Comfortable ships' },
                                        { icon: <Star size={18} />, label: 'All inclusive style pricing' },
                                        { icon: <Binoculars size={18} />, label: 'Science focused experiences' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">HX also offers a wide range of destinations:</h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: <Snowflake size={18} />, label: 'Antarctica – iconic polar experience' },
                                        { icon: <Wind size={18} />, label: 'Svalbard – true Arctic adventure' },
                                        { icon: <Globe size={18} />, label: 'Greenland – scenic Arctic exploration' },
                                        { icon: <Sun size={18} />, label: 'Galápagos – beginner friendly wildlife' },
                                        { icon: <Anchor size={18} />, label: 'Alaska – softer expedition experience' },
                                        { icon: <MapPin size={18} />, label: 'Norway – fjord expedition travel' },
                                    ].map((item, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">{item.icon}</div>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            HX also offers a wide range of destinations from softer expedition experiences in Alaska and Norway to more adventurous polar expeditions in Antarctica and Svalbard.
                        </p>
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BEST HX DESTINATIONS  (medi-itinerary-showcase-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED EXPEDITION DESTINATIONS</span>
                        <h2 className="medi-itinerary-showcase-heading">The Best HX Expeditions Cruises For First Timers</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        {/* Left tabs */}
                        <div className="medi-itinerary-tabs">
                            {mediItineraries.map((dest, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${mediSelectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setMediSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{dest.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Right showcase */}
                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={mediItineraries[mediSelectedItinerary].img}
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">
                                    {mediItineraries[mediSelectedItinerary].badge}
                                </span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {mediItineraries[mediSelectedItinerary].title}
                                </h3>

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
                                        <p style={{ marginTop: '14px', fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                                            {mediItineraries[mediSelectedItinerary].note}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                DESTINATION COMPARISON TABLE  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{ background: '#f0f4f8', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#274472', opacity: 0.7, display: 'block', marginBottom: '10px' }}>
                            SIDE BY SIDE BREAKDOWN
                        </span>
                        <h2 className="medi-section-heading">Antarctica vs Arctic vs Galápagos For Beginners</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    {/* Desktop table */}
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 32px rgba(15,28,46,0.10)' }}>
                            <thead>
                                <tr style={{ background: '#0f1c2e' }}>
                                    {['Destination', 'Best For', 'Difficulty Level', 'Wildlife Focus', 'Weather'].map(h => (
                                        <th key={h} style={{ padding: '18px 20px', color: '#93c5fd', fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: 'Antarctica', bestFor: 'Bucket list adventure', diff: 'Moderate', wildlife: 'Penguins & whales', weather: 'Cold', icon: <Snowflake size={16} /> },
                                    { dest: 'Galápagos', bestFor: 'Easy first expedition', diff: 'Easy', wildlife: 'Dense wildlife', weather: 'Warm', icon: <Sun size={16} /> },
                                    { dest: 'Svalbard', bestFor: 'Polar bears & Arctic exploration', diff: 'Moderate to advanced', wildlife: 'Arctic wildlife', weather: 'Cold', icon: <Wind size={16} /> },
                                    { dest: 'Greenland', bestFor: 'Scenic Arctic exploration', diff: 'Moderate', wildlife: 'Icebergs & culture', weather: 'Cold', icon: <Globe size={16} /> },
                                ].map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                        <td style={{ padding: '16px 20px', fontWeight: '600', color: '#0f1c2e', display: 'flex', alignItems: 'center', gap: '10px', minWidth: '160px' }}>
                                            <span style={{ color: '#274472' }}>{row.icon}</span>{row.dest}
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.bestFor}</td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <span style={{
                                                background: row.diff === 'Easy' ? '#dcfce7' : row.diff === 'Moderate' ? '#fef9c3' : '#fee2e2',
                                                color: row.diff === 'Easy' ? '#166534' : row.diff === 'Moderate' ? '#854d0e' : '#991b1b',
                                                fontSize: '12px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap'
                                            }}>{row.diff}</span>
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.wildlife}</td>
                                        <td style={{ padding: '16px 20px', color: '#334155', fontSize: '14px' }}>{row.weather}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHICH HX SHIP IS BEST  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{
                background: '#0f1c2e',
                padding: 'clamp(48px, 8vw, 80px) clamp(16px, 3vw, 20px)',
                position: 'relative',
                overflow: 'visible'
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse at 20% 50%, rgba(39,68,114,0.35) 0%, transparent 60%)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    position: 'relative', zIndex: 1,
                    minWidth: 0, overflow: 'visible'
                }}>
                    {/* ── Header ── */}
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 5vw, 52px)', minWidth: 0 }}>
                        <span style={{
                            fontSize: isMobileViewport ? '10px' : '12px',
                            fontWeight: 700, letterSpacing: '0.25em',
                            textTransform: 'uppercase', color: '#93c5fd',
                            display: 'block', marginBottom: '10px'
                        }}>FLEET GUIDE</span>
                        <h2 style={{
                            fontSize: isMobileViewport
                                ? 'clamp(1.6rem, 6vw, 2.2rem)'
                                : 'clamp(2rem, 3.5vw, 40px)',
                            fontWeight: 500, color: '#ffffff',
                            margin: '0 0 20px', lineHeight: 1.2,
                            fontFamily: 'var(--font-display)',
                            overflowWrap: 'break-word', wordBreak: 'break-word'
                        }}>
                            Which HX Ship Is Best For First Timers?
                        </h2>
                        <div style={{
                            width: '56px', height: '4px',
                            background: '#274472', margin: '0 auto'
                        }} />
                    </div>

                    {/* ── Ship Selector Tabs ── */}
                    {isMobileViewport ? (
                        /* Mobile: horizontal scroll */
                        <div style={{ position: 'relative', marginBottom: '28px' }}>
                            <div style={{
                                position: 'absolute', top: 0, right: 0, bottom: 0,
                                width: '28px', background: 'linear-gradient(to left, #0f1c2e 0%, transparent 100%)',
                                pointerEvents: 'none', zIndex: 3, borderRadius: '0 30px 30px 0'
                            }} />
                            <div style={{
                                display: 'flex', gap: '10px',
                                overflowX: 'auto', overflowY: 'hidden',
                                paddingBottom: '4px',
                                scrollSnapType: 'x mandatory',
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                paddingLeft: '0', paddingRight: '36px'
                            }}>
                                {ships.map((ship, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveShip(idx)}
                                        style={{
                                            padding: '10px 18px',
                                            borderRadius: '30px',
                                            border: `2px solid ${activeShip === idx ? '#274472' : 'rgba(255,255,255,0.15)'}`,
                                            background: activeShip === idx ? '#274472' : 'transparent',
                                            color: activeShip === idx ? '#ffffff' : '#94a3b8',
                                            fontSize: '13px', fontWeight: 600,
                                            cursor: 'pointer', transition: 'all 0.25s ease',
                                            outline: 'none', whiteSpace: 'nowrap',
                                            flexShrink: 0, scrollSnapAlign: 'start'
                                        }}
                                    >{ship.name}</button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Desktop: centered wrap */
                        <div style={{
                            display: 'flex', gap: '12px',
                            justifyContent: 'center', flexWrap: 'wrap',
                            marginBottom: 'clamp(28px, 4vw, 40px)'
                        }}>
                            {ships.map((ship, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveShip(idx)}
                                    style={{
                                        padding: '10px 22px',
                                        borderRadius: '30px',
                                        border: `2px solid ${activeShip === idx ? '#274472' : 'rgba(255,255,255,0.15)'}`,
                                        background: activeShip === idx ? '#274472' : 'transparent',
                                        color: activeShip === idx ? '#ffffff' : '#94a3b8',
                                        fontSize: '14px', fontWeight: 600,
                                        cursor: 'pointer', transition: 'all 0.25s ease', outline: 'none'
                                    }}
                                >{ship.name}</button>
                            ))}
                        </div>
                    )}

                    {/* ── Ship Showcase Card ── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                        gap: '0px',
                        alignItems: 'stretch',
                        background: 'rgba(255,255,255,0.04)',
                        borderRadius: isMobileViewport ? '16px' : '20px',
                        overflow: 'visible',
                        border: '1px solid rgba(255,255,255,0.08)',
                        minWidth: 0
                    }}>
                        {/* Image */}
                        <div style={{
                            height: isMobileViewport ? 'clamp(220px, 50vw, 300px)' : 'clamp(320px, 30vw, 420px)',
                            overflow: 'hidden',
                            position: 'relative',
                            borderRadius: isMobileViewport ? '16px 16px 0 0' : '20px 0 0 20px'
                        }}>
                            <img
                                src={ships[activeShip].img}
                                alt={ships[activeShip].name}
                                loading="lazy"
                                style={{
                                    width: '100%', height: '100%',
                                    objectFit: 'cover', display: 'block'
                                }}
                            />
                            {/* Desktop: right fade into dark bg */}
                            {!isMobileViewport && (
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to right, transparent 50%, rgba(15,28,46,0.9) 100%)'
                                }} />
                            )}
                            {/* Mobile: bottom fade */}
                            {isMobileViewport && (
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,28,46,0.6) 0%, transparent 50%)'
                                }} />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{
                            padding: isMobileViewport
                                ? '24px 20px 28px 20px'
                                : 'clamp(28px, 3.5vw, 48px) clamp(24px, 3vw, 48px) clamp(28px, 3.5vw, 48px) clamp(20px, 2.5vw, 0px)',
                            minWidth: 0,
                            overflow: 'visible',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            boxSizing: 'border-box'
                        }}>
                            <span style={{
                                fontSize: isMobileViewport ? '9px' : '11px',
                                fontWeight: 700, letterSpacing: '0.2em',
                                color: '#93c5fd', textTransform: 'uppercase',
                                display: 'block', marginBottom: '10px',
                                whiteSpace: 'nowrap'
                            }}>FEATURED SHIP</span>

                            <h3 style={{
                                fontSize: isMobileViewport
                                    ? 'clamp(1.3rem, 5.5vw, 1.6rem)'
                                    : 'clamp(1.5rem, 2.5vw, 28px)',
                                fontWeight: 500, color: '#ffffff',
                                marginBottom: '16px', lineHeight: 1.2,
                                overflowWrap: 'break-word', wordBreak: 'break-word'
                            }}>{ships[activeShip].name}</h3>

                            <div style={{
                                width: '40px', height: '3px',
                                background: '#274472', marginBottom: '18px'
                            }} />

                            <h4 style={{
                                fontSize: isMobileViewport ? '11px' : '14px',
                                fontWeight: 600, color: '#93c5fd',
                                marginBottom: '10px', textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                overflowWrap: 'break-word', wordBreak: 'break-word'
                            }}>Best For:</h4>

                            <ul style={{
                                listStyle: 'none', padding: 0,
                                margin: '0 0 18px',
                                display: 'flex', flexDirection: 'column',
                                gap: isMobileViewport ? '8px' : '10px',
                                minWidth: 0
                            }}>
                                {ships[activeShip].bestFor.map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex', alignItems: 'flex-start',
                                        gap: '10px', color: '#e2e8f0',
                                        fontSize: isMobileViewport ? '0.88rem' : '15px',
                                        lineHeight: 1.4, minWidth: 0
                                    }}>
                                        <CheckCircle
                                            size={isMobileViewport ? 14 : 15}
                                            style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }}
                                        />
                                        <span style={{
                                            minWidth: 0,
                                            overflowWrap: 'break-word',
                                            wordBreak: 'break-word'
                                        }}>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p style={{
                                color: '#94a3b8',
                                fontSize: isMobileViewport ? '0.84rem' : '14px',
                                lineHeight: 1.7, fontStyle: 'italic',
                                margin: 0,
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word'
                            }}>{ships[activeShip].note}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHAT TO EXPECT  — Premium tabbed design
            ════════════════════════════════════════════════════════════ */}
            <section style={{
                background: 'linear-gradient(180deg, var(--bg-soft) 0%, var(--bg-white) 100%)',
                backgroundImage: 'radial-gradient(var(--navy-border) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                borderTop: '1px solid var(--navy-border)',
                borderBottom: '1px solid var(--navy-border)',
                padding: 'clamp(40px, 8vw, 100px) clamp(16px, 3vw, 24px)',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Glowing auras */}
                <div style={{
                    position: 'absolute', top: '5%', left: '5%',
                    width: 'clamp(150px, 25vw, 350px)', height: 'clamp(150px, 25vw, 350px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%',
                    width: 'clamp(180px, 30vw, 400px)', height: 'clamp(180px, 30vw, 400px)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39,68,114,0.10) 0%, transparent 70%)',
                    filter: 'blur(70px)', pointerEvents: 'none', zIndex: 1
                }} />

                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    position: 'relative', zIndex: 2,
                    width: '100%', boxSizing: 'border-box'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.6fr)',
                        gap: isMobileViewport ? '24px' : 'clamp(24px, 3vw, 40px)',
                        width: '100%', boxSizing: 'border-box',
                        alignItems: 'start'
                    }}>

                        {/* ── Left: sticky navigation console ── */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '20px',
                            position: isMobileViewport ? 'static' : 'sticky',
                            top: '100px', zIndex: 5, minWidth: 0
                        }}>
                            <div style={{
                                textAlign: isMobileViewport ? 'center' : 'left', minWidth: 0
                            }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '6px 16px', borderRadius: '100px',
                                    background: 'rgba(39,68,114,0.08)',
                                    border: '1px solid rgba(39,68,114,0.15)',
                                    marginBottom: '14px'
                                }}>
                                    <Compass size={14} color="#274472" />
                                    <span style={{
                                        fontSize: isMobileViewport ? '9px' : '11px',
                                        fontWeight: 700, letterSpacing: '2px',
                                        textTransform: 'uppercase', color: '#274472',
                                        whiteSpace: 'nowrap'
                                    }}>EXPEDITION REALITY CHECK</span>
                                </div>
                                <h2 style={{
                                    fontWeight: '500', lineHeight: 1.25,
                                    margin: '0 0 14px 0',
                                    fontSize: isMobileViewport
                                        ? 'clamp(1.6rem, 7vw, 2.2rem)'
                                        : 'clamp(1.8rem, 2.5vw, 2.2rem)',
                                    color: '#274472',
                                    fontFamily: 'var(--font-display)',
                                    wordBreak: 'break-word', overflowWrap: 'break-word'
                                }}>
                                    What To Expect On Your First Expedition Cruise
                                </h2>
                                <p style={{
                                    fontSize: isMobileViewport ? '0.9rem' : '0.95rem',
                                    margin: '0 0 20px 0', lineHeight: 1.6,
                                    fontWeight: '400', color: '#475569',
                                    overflowWrap: 'break-word', wordBreak: 'break-word'
                                }}>
                                    Select a topic below to explore what first-time expedition travelers should know.
                                </p>
                            </div>

                            {/* ── Mobile: Horizontal scroll pills ── */}
                            {isMobileViewport ? (
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute', top: 0, right: 0, bottom: '8px',
                                        width: '32px',
                                        background: 'linear-gradient(to left, var(--bg-soft) 0%, transparent 100%)',
                                        pointerEvents: 'none', zIndex: 3, borderRadius: '0 16px 16px 0'
                                    }} />
                                    <div style={{
                                        display: 'flex', gap: '10px',
                                        overflowX: 'auto', overflowY: 'hidden',
                                        paddingBottom: '8px',
                                        scrollSnapType: 'x mandatory',
                                        WebkitOverflowScrolling: 'touch',
                                        scrollbarWidth: 'none',
                                        paddingLeft: '0', paddingRight: '40px'
                                    }}>
                                        {[
                                            { number: '01', title: 'Should Expect' },
                                            { number: '02', title: 'Should Not Expect' },
                                            { number: '03', title: 'HX Philosophy' }
                                        ].map((tab, idx) => {
                                            const isActive = activeExpectTab === idx;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => setActiveExpectTab(idx)}
                                                    style={{
                                                        display: 'flex', alignItems: 'center', gap: '8px',
                                                        padding: '12px 16px',
                                                        background: isActive ? '#0f1c2e' : 'rgba(39,68,114,0.06)',
                                                        border: isActive
                                                            ? '1px solid rgba(255,255,255,0.08)'
                                                            : '1px solid rgba(39,68,114,0.15)',
                                                        borderRadius: '14px', cursor: 'pointer',
                                                        textAlign: 'left', flexShrink: 0,
                                                        scrollSnapAlign: 'start',
                                                        boxShadow: isActive ? '0 6px 24px rgba(15,28,46,0.18)' : 'none',
                                                        transition: 'all 0.25s ease', outline: 'none',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                >
                                                    <span style={{
                                                        fontSize: '0.8rem', fontWeight: '800',
                                                        color: isActive ? '#93c5fd' : '#94a3b8',
                                                        fontFamily: 'monospace', flexShrink: 0
                                                    }}>{tab.number}</span>
                                                    <span style={{
                                                        fontSize: '0.82rem', fontWeight: '700',
                                                        color: isActive ? '#ffffff' : '#334155',
                                                        lineHeight: 1.3
                                                    }}>{tab.title}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                /* ── Desktop: Vertical stacked buttons ── */
                                <div style={{
                                    display: 'flex', flexDirection: 'column',
                                    gap: '10px', minWidth: 0
                                }}>
                                    {[
                                        { number: '01', title: 'Travelers Should Expect', desc: 'Wildlife, landings & outdoor life' },
                                        { number: '02', title: 'Travelers Should Not Expect', desc: 'What expedition cruising is not' },
                                        { number: '03', title: 'The HX Expedition Philosophy', desc: 'Science, leadership & exploration' }
                                    ].map((tab, idx) => {
                                        const isActive = activeExpectTab === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveExpectTab(idx)}
                                                style={{
                                                    display: 'flex', alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: 'clamp(14px, 1.5vw, 20px) clamp(14px, 2vw, 24px)',
                                                    background: isActive ? '#0f1c2e' : 'transparent',
                                                    border: isActive
                                                        ? '1px solid rgba(255,255,255,0.08)'
                                                        : '1px solid rgba(39,68,114,0.2)',
                                                    borderRadius: '16px', cursor: 'pointer',
                                                    textAlign: 'left', width: '100%',
                                                    transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                                                    boxShadow: isActive ? '0 8px 32px rgba(15,28,46,0.18)' : 'none',
                                                    transition: 'all 0.3s ease', outline: 'none',
                                                    minWidth: 0
                                                }}
                                            >
                                                <div style={{
                                                    display: 'flex', alignItems: 'center',
                                                    gap: '14px', minWidth: 0, flex: '1 1 0%'
                                                }}>
                                                    <span style={{
                                                        fontSize: 'clamp(1rem, 1.1vw, 1.25rem)',
                                                        fontWeight: '800',
                                                        color: isActive ? '#93c5fd' : '#94a3b8',
                                                        fontFamily: 'monospace', flexShrink: 0
                                                    }}>{tab.number}</span>
                                                    <div style={{ minWidth: 0, flex: '1 1 0%' }}>
                                                        <div style={{
                                                            fontSize: 'clamp(0.82rem, 0.95vw, 0.95rem)',
                                                            fontWeight: '700',
                                                            color: isActive ? '#ffffff' : '#334155',
                                                            overflowWrap: 'break-word', wordBreak: 'break-word',
                                                            lineHeight: 1.35
                                                        }}>{tab.title}</div>
                                                        <div style={{
                                                            fontSize: 'clamp(0.68rem, 0.75vw, 0.75rem)',
                                                            color: '#94a3b8', marginTop: '3px',
                                                            overflowWrap: 'break-word', wordBreak: 'break-word'
                                                        }}>{tab.desc}</div>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    width: '8px', height: '8px', borderRadius: '50%',
                                                    background: isActive ? '#93c5fd' : 'rgba(39,68,114,0.3)',
                                                    boxShadow: isActive ? '0 0 10px #93c5fd' : 'none',
                                                    transition: 'all 0.3s ease',
                                                    flexShrink: 0, marginLeft: '12px'
                                                }} />
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* ── Right: dark content panel ── */}
                        <div style={{
                            background: '#0f1c2e',
                            border: '1px solid rgba(39,68,114,0.3)',
                            borderRadius: isMobileViewport ? '16px' : '24px',
                            padding: isMobileViewport
                                ? '20px 18px 44px 18px'
                                : 'clamp(28px, 3.5vw, 48px)',
                            paddingBottom: isMobileViewport ? '48px' : undefined,
                            boxShadow: '0 20px 60px rgba(15,28,46,0.25)',
                            display: 'flex', flexDirection: 'column',
                            position: 'relative', overflow: 'visible',
                            boxSizing: 'border-box', minWidth: 0, width: '100%'
                        }}>
                            {/* Watermark */}
                            <div style={{
                                position: 'absolute',
                                bottom: isMobileViewport ? '14px' : '24px',
                                right: isMobileViewport ? '16px' : '28px',
                                color: 'rgba(39,68,114,0.4)', fontFamily: 'monospace',
                                fontSize: isMobileViewport ? '7px' : '11px',
                                fontWeight: 700,
                                letterSpacing: isMobileViewport ? '1px' : '2px',
                                pointerEvents: 'none', zIndex: 1,
                                opacity: isMobileViewport ? 0.5 : 1,
                                whiteSpace: 'nowrap'
                            }}>HX EXPEDITIONS // FIRST TIMER GUIDE</div>

                            <div style={{
                                position: 'relative', zIndex: 2,
                                minWidth: 0, overflow: 'visible', width: '100%'
                            }}>

                                {/* ══════════ Tab 01: Should Expect ══════════ */}
                                {activeExpectTab === 0 && (
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '10px' : '16px',
                                            marginBottom: isMobileViewport ? '16px' : '28px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '38px' : '48px',
                                                height: isMobileViewport ? '38px' : '48px',
                                                borderRadius: isMobileViewport ? '10px' : '12px',
                                                background: 'rgba(39,68,114,0.4)',
                                                border: '1px solid rgba(39,68,114,0.5)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Compass size={isMobileViewport ? 18 : 22} color="#93c5fd" />
                                            </div>
                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: isMobileViewport
                                                    ? 'clamp(1.05rem, 5vw, 1.2rem)'
                                                    : 'clamp(1.2rem, 1.5vw, 1.4rem)',
                                                fontWeight: '700', margin: 0, lineHeight: 1.3,
                                                minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>Travelers Should Expect</h3>
                                        </div>

                                        <p style={{
                                            color: '#94a3b8',
                                            fontSize: isMobileViewport ? '0.88rem' : '0.95rem',
                                            marginBottom: '18px', lineHeight: 1.6,
                                            overflowWrap: 'break-word', wordBreak: 'break-word'
                                        }}>
                                            Expedition cruising feels very different from mainstream cruising.
                                        </p>

                                        <ul style={{
                                            listStyle: 'none', padding: 0,
                                            margin: '0 0 18px', minWidth: 0
                                        }}>
                                            {['Zodiac landings', 'Flexible itineraries', 'Outdoor exploration', 'Casual atmosphere', 'Educational lectures', 'Wildlife focused days', 'Early mornings for sightings'].map((item, i) => (
                                                <li key={i} style={{
                                                    display: 'flex', alignItems: 'flex-start',
                                                    gap: isMobileViewport ? '10px' : '12px',
                                                    padding: '4px 0', minWidth: 0
                                                }}>
                                                    <CheckCircle
                                                        size={isMobileViewport ? 14 : 16}
                                                        style={{ color: '#93c5fd', flexShrink: 0, marginTop: '2px' }}
                                                    />
                                                    <span style={{
                                                        color: '#e2e8f0',
                                                        fontSize: isMobileViewport ? '0.85rem' : '0.92rem',
                                                        lineHeight: 1.45, minWidth: 0,
                                                        overflowWrap: 'break-word', wordBreak: 'break-word'
                                                    }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{
                                            marginTop: '12px', paddingTop: '14px',
                                            borderTop: '1px solid rgba(255,255,255,0.1)', minWidth: 0
                                        }}>
                                            <p style={{
                                                color: '#94a3b8', fontStyle: 'italic',
                                                fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                                lineHeight: 1.6, margin: 0,
                                                overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>The destination itself becomes the entertainment on every expedition cruise.</p>
                                        </div>
                                    </div>
                                )}

                                {/* ══════════ Tab 02: Should NOT Expect ══════════ */}
                                {activeExpectTab === 1 && (
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '10px' : '16px',
                                            marginBottom: isMobileViewport ? '16px' : '28px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '38px' : '48px',
                                                height: isMobileViewport ? '38px' : '48px',
                                                borderRadius: isMobileViewport ? '10px' : '12px',
                                                background: 'rgba(39,68,114,0.4)',
                                                border: '1px solid rgba(39,68,114,0.5)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Moon size={isMobileViewport ? 18 : 22} color="#93c5fd" />
                                            </div>
                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: isMobileViewport
                                                    ? 'clamp(1.05rem, 5vw, 1.2rem)'
                                                    : 'clamp(1.2rem, 1.5vw, 1.4rem)',
                                                fontWeight: '700', margin: 0, lineHeight: 1.3,
                                                minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>Travelers Should Not Expect</h3>
                                        </div>

                                        {/* ADV badge */}
                                        <div style={{
                                            background: 'rgba(39,68,114,0.2)',
                                            border: '1px solid rgba(39,68,114,0.3)',
                                            borderRadius: isMobileViewport ? '12px' : '16px',
                                            padding: isMobileViewport ? '14px 16px' : '20px 24px',
                                            marginBottom: '20px',
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '12px' : '20px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '44px' : '56px',
                                                height: isMobileViewport ? '44px' : '56px',
                                                borderRadius: '50%',
                                                border: '2px solid #93c5fd',
                                                background: 'rgba(255,255,255,0.03)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <span style={{
                                                    fontSize: isMobileViewport ? '8px' : '10px',
                                                    fontWeight: 700, color: '#ffffff',
                                                    textAlign: 'center', lineHeight: 1.1
                                                }}>ADV</span>
                                            </div>
                                            <span style={{
                                                color: '#93c5fd',
                                                fontSize: isMobileViewport ? '0.72rem' : '0.8rem',
                                                fontWeight: 700, letterSpacing: '2px',
                                                textTransform: 'uppercase', whiteSpace: 'nowrap'
                                            }}>ADVENTURE FIRST</span>
                                        </div>

                                        <p style={{
                                            color: '#94a3b8',
                                            fontSize: isMobileViewport ? '0.87rem' : '0.95rem',
                                            marginBottom: '14px', lineHeight: 1.6, fontWeight: 700,
                                            overflowWrap: 'break-word', wordBreak: 'break-word',
                                            margin: '0 0 14px 0'
                                        }}>The following are not part of expedition cruising:</p>

                                        <ul style={{
                                            listStyle: 'none', padding: 0,
                                            margin: '0 0 18px', minWidth: 0
                                        }}>
                                            {['Casinos', 'Broadway shows', 'Large ship nightlife', 'Massive entertainment venues'].map((item, i) => (
                                                <li key={i} style={{
                                                    display: 'flex', alignItems: 'flex-start',
                                                    gap: isMobileViewport ? '10px' : '12px',
                                                    padding: '5px 0', minWidth: 0
                                                }}>
                                                    <span style={{
                                                        width: isMobileViewport ? '20px' : '22px',
                                                        height: isMobileViewport ? '20px' : '22px',
                                                        borderRadius: '50%',
                                                        background: 'rgba(239,68,68,0.15)',
                                                        border: '1px solid rgba(239,68,68,0.4)',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        flexShrink: 0, color: '#ef4444',
                                                        fontWeight: 700,
                                                        fontSize: isMobileViewport ? '11px' : '13px'
                                                    }}>✕</span>
                                                    <span style={{
                                                        color: '#e2e8f0',
                                                        fontSize: isMobileViewport ? '0.85rem' : '0.92rem',
                                                        lineHeight: 1.45, minWidth: 0,
                                                        overflowWrap: 'break-word', wordBreak: 'break-word'
                                                    }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{
                                            marginTop: '12px', paddingTop: '14px',
                                            borderTop: '1px solid rgba(255,255,255,0.1)', minWidth: 0
                                        }}>
                                            <p style={{
                                                color: '#94a3b8', fontStyle: 'italic',
                                                fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                                lineHeight: 1.6, margin: 0,
                                                overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>The destination itself becomes the entertainment.</p>
                                        </div>
                                    </div>
                                )}

                                {/* ══════════ Tab 03: HX Philosophy ══════════ */}
                                {activeExpectTab === 2 && (
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            gap: isMobileViewport ? '10px' : '16px',
                                            marginBottom: isMobileViewport ? '16px' : '28px', minWidth: 0
                                        }}>
                                            <div style={{
                                                width: isMobileViewport ? '38px' : '48px',
                                                height: isMobileViewport ? '38px' : '48px',
                                                borderRadius: isMobileViewport ? '10px' : '12px',
                                                background: 'rgba(39,68,114,0.4)',
                                                border: '1px solid rgba(39,68,114,0.5)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0
                                            }}>
                                                <Camera size={isMobileViewport ? 18 : 22} color="#93c5fd" />
                                            </div>
                                            <h3 style={{
                                                color: '#ffffff',
                                                fontSize: isMobileViewport
                                                    ? 'clamp(1.05rem, 5vw, 1.2rem)'
                                                    : 'clamp(1.2rem, 1.5vw, 1.4rem)',
                                                fontWeight: '700', margin: 0, lineHeight: 1.3,
                                                minWidth: 0, overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>The HX Expedition Philosophy</h3>
                                        </div>

                                        <p style={{
                                            color: '#94a3b8',
                                            fontSize: isMobileViewport ? '0.87rem' : '0.95rem',
                                            marginBottom: '14px', lineHeight: 1.6, fontWeight: 700,
                                            overflowWrap: 'break-word', wordBreak: 'break-word',
                                            margin: '0 0 14px 0'
                                        }}>HX emphasizes:</p>

                                        <ul style={{
                                            listStyle: 'none', padding: 0,
                                            margin: '0 0 18px', minWidth: 0
                                        }}>
                                            {['Science focused experiences', 'Expert expedition leadership', 'Strong onboard organization', 'Beginner friendly atmosphere', 'Educational programming'].map((item, i) => (
                                                <li key={i} style={{
                                                    display: 'flex', alignItems: 'flex-start',
                                                    gap: isMobileViewport ? '10px' : '14px',
                                                    padding: '5px 0', minWidth: 0
                                                }}>
                                                    <span style={{
                                                        minWidth: isMobileViewport ? '28px' : '32px',
                                                        height: isMobileViewport ? '28px' : '32px',
                                                        borderRadius: isMobileViewport ? '6px' : '8px',
                                                        background: 'rgba(39,68,114,0.4)',
                                                        border: '1px solid rgba(39,68,114,0.5)',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        fontSize: isMobileViewport ? '0.68rem' : '0.75rem',
                                                        fontWeight: 800, color: '#93c5fd',
                                                        fontFamily: 'monospace', flexShrink: 0
                                                    }}>0{i + 1}</span>
                                                    <span style={{
                                                        color: '#e2e8f0',
                                                        fontSize: isMobileViewport ? '0.85rem' : '0.92rem',
                                                        lineHeight: 1.45, minWidth: 0,
                                                        overflowWrap: 'break-word', wordBreak: 'break-word'
                                                    }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{
                                            marginTop: '12px', paddingTop: '14px',
                                            borderTop: '1px solid rgba(255,255,255,0.1)', minWidth: 0
                                        }}>
                                            <p style={{
                                                color: '#94a3b8', fontStyle: 'italic',
                                                fontSize: isMobileViewport ? '0.83rem' : '0.88rem',
                                                lineHeight: 1.6, margin: 0,
                                                overflowWrap: 'break-word', wordBreak: 'break-word'
                                            }}>For travelers prioritizing exploration over onboard spectacle, this approach is highly appealing.</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                IMAGE GALLERY STRIP  ← NEW SECTION (inline CSS)
            ════════════════════════════════════════════════════════════ */}
            <section style={{
                background: '#ffffff',
                padding: 'clamp(48px, 6vw, 70px) clamp(16px, 3vw, 20px)',
                overflow: 'visible'
            }}>
                <style>{`
        .gal-card { position: relative; overflow: hidden; cursor: pointer; }
        .gal-card img { transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .gal-card:hover img { transform: scale(1.06); }
        .gal-cap { transition: opacity 0.3s ease, transform 0.3s ease; }
        .gal-card:hover .gal-cap { opacity: 1 !important; transform: translateY(0) !important; }
    `}</style>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* ── Header ── */}
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 44px)' }}>
                        <span style={{
                            fontSize: 'clamp(9px, 1.2vw, 12px)', fontWeight: 700,
                            letterSpacing: '0.25em', textTransform: 'uppercase',
                            color: '#274472', opacity: 0.7, display: 'block', marginBottom: '10px'
                        }}>EXPEDITION IMAGERY</span>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                            fontWeight: 500, color: '#274472',
                            margin: '0', lineHeight: 1.25,
                            fontFamily: 'var(--font-display)',
                            overflowWrap: 'break-word', wordBreak: 'break-word'
                        }}>Experience HX Expeditions</h2>
                        <div style={{
                            width: '50px', height: '3px',
                            background: '#274472', margin: '16px auto 0',
                            borderRadius: '2px'
                        }} />
                    </div>

                    {/* ── Grid Container ── */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : 'repeat(3, 1fr)',
                        gridTemplateAreas: isMobileViewport
                            ? undefined
                            : '"hero hero zodiac" "hero hero svalbard" "galapagos greenland wildlife"',
                        gridAutoRows: isMobileViewport ? undefined : 'clamp(160px, 20vw, 220px)',
                        gap: isMobileViewport ? '10px' : '12px'
                    }}>
                        {[
                            { img: antarcticaImg1, caption: 'First time Antarctica expedition cruise', area: 'hero', featured: true },
                            { img: zodiacLandingImg1, caption: 'HX expedition travelers boarding Zodiac', area: 'zodiac' },
                            { img: svalbardImg1, caption: 'Polar bear during Svalbard expedition', area: 'svalbard' },
                            { img: galapagosImg1, caption: 'Galápagos wildlife expedition cruise', area: 'galapagos' },
                            { img: greenlandImg1, caption: 'Greenland icebergs expedition', area: 'greenland' },
                            { img: wildlifeImg1, caption: 'Beginner expedition cruise travelers', area: 'wildlife' }
                        ].map((item, i) => {
                            const isHero = item.featured && !isMobileViewport;

                            return (
                                <div
                                    key={i}
                                    className="gal-card"
                                    style={{
                                        gridArea: isMobileViewport ? undefined : item.area,
                                        borderRadius: isMobileViewport ? '12px' : '14px',
                                        boxShadow: isHero
                                            ? '0 8px 32px rgba(15,28,46,0.12)'
                                            : '0 2px 16px rgba(15,28,46,0.08)',
                                        aspectRatio: isMobileViewport ? '16 / 10' : undefined
                                    }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.caption}
                                        loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                    <div
                                        className="gal-cap"
                                        style={{
                                            position: 'absolute', bottom: 0, left: 0, right: 0,
                                            background: isHero
                                                ? 'linear-gradient(to top, rgba(15,28,46,0.9) 0%, rgba(15,28,46,0.3) 40%, transparent 100%)'
                                                : 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, rgba(15,28,46,0.15) 70%, transparent 100%)',
                                            padding: isHero
                                                ? 'clamp(28px, 3.5vw, 48px) clamp(16px, 2vw, 24px) clamp(16px, 1.5vw, 20px)'
                                                : isMobileViewport
                                                    ? 'clamp(20px, 4vw, 32px) 14px 12px'
                                                    : 'clamp(20px, 2.5vw, 30px) clamp(12px, 1.5vw, 18px) clamp(10px, 1.2vw, 14px)',
                                            opacity: isMobileViewport ? 0.95 : 0.85,
                                            transform: 'translateY(2px)'
                                        }}
                                    >
                                        {isHero && (
                                            <span style={{
                                                display: 'inline-block',
                                                fontSize: '0.65rem', fontWeight: 700,
                                                letterSpacing: '0.15em', textTransform: 'uppercase',
                                                color: '#93c5fd', marginBottom: '6px',
                                                background: 'rgba(147, 197, 253, 0.12)',
                                                padding: '3px 10px', borderRadius: '4px'
                                            }}>Featured</span>
                                        )}
                                        <span style={{
                                            color: '#ffffff',
                                            fontSize: isHero
                                                ? 'clamp(0.95rem, 1.1vw, 1.1rem)'
                                                : isMobileViewport
                                                    ? '0.82rem'
                                                    : 'clamp(0.8rem, 0.9vw, 0.9rem)',
                                            fontWeight: isHero ? 600 : 500,
                                            lineHeight: 1.4, display: 'block',
                                            overflowWrap: 'break-word', wordBreak: 'break-word'
                                        }}>{item.caption}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════════════ */}
            <section id="hx-expedition-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_AH} alt="Angela Hughes – Luxury Expedition Expert" />
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
                                    Expert Insight from
                                    <br className="medi-growth-title-break" />Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes and her team specialize in helping travelers choose the right expedition cruise experience based on comfort level, destination goals and travel style.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Angela consistently helps first timers evaluate:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Comfort level', 'Activity level', 'Wildlife interests', 'Travel experience', 'Adventure tolerance', 'Budget'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate increasingly complex expedition choices with real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Safaris', icon: Globe },
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


            {/* ════════════════════════════════════════════════════════════
                VIDEO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of authentic expedition adventures, stunning wildlife encounters and remote destinations that await aboard HX Expeditions.
                    </p>
                    <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)', aspectRatio: '16/9', background: '#000' }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/qg6IWVuv2nQ"
                            title="Experience HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>
            </section>



            {/* ════════════════════════════════════════════════════════════
                IS HX LUXURY  (medi-luxury-definition-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">DEFINING THE EXPERIENCE</span>
                        <h2 className="medi-luxury-heading">Is HX Expeditions Good For Beginners?</h2>

                        <p className="medi-luxury-paragraph">
                            HX Expeditions is best described as "Authentic expedition travel with approachable comfort, strong expedition leadership and well organized operations."
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">HX Expeditions Is Best For:</h3>
                            <div className="medi-luxury-features-grid">
                                {['First time expedition travelers', 'Wildlife enthusiasts', 'Curious travelers', 'Nature photographers', 'Travelers seeking educational experiences', 'Bucket list adventurers', 'Older travelers with moderate mobility', 'Those wanting all-inclusive-style pricing'].map((f, i) => (
                                    <div key={i} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                HX Expeditions May Not Be Best For: Travelers wanting traditional luxury cruising, guests seeking nightlife and entertainment, travelers uncomfortable with flexible itineraries, or travelers with significant mobility limitations.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For most first time expedition travelers, however, HX provides the ideal balance of comfort, education and authentic adventure.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={Gal_pagos_Islands} alt="HX expedition Zodiac landing" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                COMMON MISTAKES SLIDER  (medi-mistakes-slider-section)
            ════════════════════════════════════════════════════════════ */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID EXPEDITION PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common First Time Expedition Cruise Mistakes
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake(p => (p === 0 ? mediMistakes.length - 1 : p - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => (
                                <div key={idx} className={`medi-mistakes-slider-card ${mediActiveMistake === idx ? 'active' : ''}`}>
                                    <div className="medi-mistake-slide-header">
                                        <span className="medi-mistake-card-num">0{idx + 1}</span>
                                        <h3 className="medi-mistake-card-title">{mistake.title}</h3>
                                    </div>
                                    <div className="medi-mistake-slide-body">
                                        <p className="medi-mistake-card-description">{mistake.desc}</p>
                                        {mistake.bullets && (
                                            <ul className="medi-mistake-card-bullets-list">
                                                {mistake.bullets.map((b, bi) => (
                                                    <li key={bi} className="medi-mistake-card-bullet-item">
                                                        <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake(p => (p === mediMistakes.length - 1 ? 0 : p + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button key={idx} className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`} onClick={() => setMediActiveMistake(idx)} aria-label={`Slide ${idx + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BEST FOR / NOT BEST FOR  (medi-audience-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>HX Expeditions: Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">HX Expeditions Is Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Compass size={20} className="medi-audience-icon" />, label: 'First time expedition travelers' },
                                    { icon: <Binoculars size={20} className="medi-audience-icon" />, label: 'Wildlife enthusiasts' },
                                    { icon: <GraduationCap size={20} className="medi-audience-icon" />, label: 'Curious travelers' },
                                    { icon: <Camera size={20} className="medi-audience-icon" />, label: 'Nature photographers' },
                                    { icon: <Star size={20} className="medi-audience-icon" />, label: 'Travelers seeking educational experiences' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper best">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">HX Expeditions May Not Be Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: <Crown size={20} className="medi-audience-icon" />, label: 'Travelers wanting traditional luxury cruising' },
                                    { icon: <Moon size={20} className="medi-audience-icon" />, label: 'Guests seeking nightlife and entertainment' },
                                    { icon: <Music size={20} className="medi-audience-icon" />, label: 'Travelers uncomfortable with flexible itineraries' },
                                    { icon: <Baby size={20} className="medi-audience-icon" />, label: 'Travelers with significant mobility limitations' },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <div className="medi-audience-icon-wrapper not-ideal">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section" style={{
                padding: windowWidth < 480 ? '40px 12px' : windowWidth < 768 ? '60px 16px' : windowWidth < 992 ? '80px 20px' : '100px 24px'
            }}>
                <div className="medi-authority-container" style={{
                    padding: windowWidth < 480 ? '0' : undefined
                }}>

                    <div className="medi-authority-header-block" style={{
                        marginBottom: windowWidth < 768 ? '32px' : '50px'
                    }}>
                        <span className="medi-authority-eyebrow" style={{
                            fontSize: windowWidth < 768 ? '11px' : undefined,
                            letterSpacing: windowWidth < 768 ? '1.5px' : undefined
                        }}>ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{
                            textAlign: 'center',
                            fontSize: windowWidth < 480 ? '22px' : windowWidth < 768 ? '26px' : '36px',
                            lineHeight: 1.25
                        }}>Why Travelers Trust Angela Hughes <br /> Trips &amp; Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper" style={{
                        borderRadius: windowWidth < 480 ? '16px' : '24px',
                        display: 'flex',
                        flexDirection: windowWidth < 992 ? 'column' : 'row',
                        gap: windowWidth < 480 ? '24px' : undefined
                    }}>
                        <div className="medi-prestige-identity-card" style={{
                            padding: windowWidth < 480 ? '30px 16px' : windowWidth < 768 ? '40px 24px' : '50px 40px',
                            flex: windowWidth < 992 ? '1 0 auto' : '0 0 380px'
                        }}>
                            <div className="medi-prestige-seal-ring" style={{
                                width: windowWidth < 768 ? '80px' : '100px',
                                height: windowWidth < 768 ? '80px' : '100px',
                                animation: 'none',
                                border: 'none',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: windowWidth < 768 ? '16px' : '24px'
                            }}>
                                {/* Spinning dashed border */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    border: '2px dashed rgba(255, 255, 255, 0.25)',
                                    animation: 'slow-spin 30s linear infinite',
                                    boxSizing: 'border-box',
                                    pointerEvents: 'none'
                                }} />
                                {/* Static image */}
                                <img
                                    src={Profile_AH_image}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '76%',
                                        height: '76%',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name" style={{
                                fontSize: windowWidth < 480 ? '20px' : windowWidth < 768 ? '22px' : '28px'
                            }}>Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill" style={{
                                fontSize: windowWidth < 768 ? '12px' : '13px',
                                padding: windowWidth < 768 ? '6px 12px' : '6px 14px',
                                marginBottom: windowWidth < 768 ? '16px' : '24px'
                            }}>CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column" style={{
                            padding: windowWidth < 480 ? '20px 12px' : windowWidth < 768 ? '30px 16px' : '40px',
                            height: windowWidth < 992 ? '400px' : '100%'
                        }}>
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
                                    return (
                                        <div key={idx} className="medi-prestige-item-card" style={{
                                            padding: windowWidth < 480 ? '10px 12px' : windowWidth < 768 ? '12px 16px' : '16px 24px',
                                            gap: windowWidth < 480 ? '10px' : '14px',
                                            borderRadius: windowWidth < 480 ? '10px' : '14px'
                                        }}>
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box" style={{
                                                width: windowWidth < 768 ? '32px' : '40px',
                                                height: windowWidth < 768 ? '32px' : '40px',
                                                minWidth: windowWidth < 768 ? '32px' : '40px'
                                            }}><IconComp size={16} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category" style={{
                                                    fontSize: windowWidth < 768 ? '9px' : '10px'
                                                }}>{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text" style={{
                                                    fontSize: windowWidth < 480 ? '12px' : windowWidth < 768 ? '13px' : '15px'
                                                }}>{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                VIDEO
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of authentic expedition adventures, stunning wildlife encounters and remote destinations that await aboard HX Expeditions.
                    </p>
                    <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)', aspectRatio: '16/9', background: '#000' }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/GxZwFr4SNBY"
                            title="Experience HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                FAQ  (medi-faq-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CTA  (medi-cta-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Plan Your First <br /> HX  Expedition Cruise?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing the right first expedition cruise can dramatically shape how much you enjoy the experience. The right destination, ship and season truly matter.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips &amp; Ships Luxury Travel provides personalized expert guidance to help travelers confidently choose the best HX expedition cruise for their goals, comfort level and budget.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Antarctica expedition cruises', 'Svalbard Arctic adventures', 'Greenland scenic cruises', 'Galápagos wildlife expeditions', 'HX expedition cruises for beginners'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips &amp; Ships Luxury Travel today to begin planning your first expedition adventure.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Expedition Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BestHXExpeditions