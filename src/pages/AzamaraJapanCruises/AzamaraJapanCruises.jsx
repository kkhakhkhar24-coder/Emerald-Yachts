import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import azamaraShip from "../../assets/image.webp"
import greeceCruise from '../../assets/AzamaraMediterraneanCruises/Lofoten Links - Gimsøysand, Norway by Kevin Murray.jpg'
import italyCruise from '../../assets/AzamaraMediterraneanCruises/Lofoten Links - Gimsøysand, Norway by Kevin Murray.jpg'
import croatiaCoast from '../../assets/AzamaraMediterraneanCruises/Ship_Oslo_003.jpg'
import luxurySuite from '../../assets/AzamaraMediterraneanCruises/Tauranga_Rotorua_TePuia_Geyser_JLP_0144.jpg'
import destinationDining from '../../assets/AzamaraCabinsGuide/Casual_Dining.webp'
import spainCruise from '../../assets/AzamaraMediterraneanCruises/Tauranga_Rotorua_TePuia_Geyser_JLP_0144.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/AzamaraMediterraneanCruises/Azamara Greece cruise itinerary.jpg'
import hero2 from '../../assets/AzamaraMediterraneanCruises/Luxury Mediterranean small ship cruise.jpg'
import hero3 from '../../assets/AzamaraMediterraneanCruises/Azamara Mediterranean cruise ship.jpg'

function AzamaraJapanCruises() {
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
            title: "Japan Intensive Cruises",
            bestFor: ["First-time Japan travelers", "Cultural enthusiasts", "Luxury exploration"],
            highlights: ["Tokyo", "Kyoto access", "Osaka", "Hiroshima", "Kanazawa"]
        },
        {
            title: "Cherry Blossom Season Cruises",
            bestFor: ["Scenic travelers", "Photographers", "Spring luxury travel"],
            highlights: ["Sakura season", "Traditional gardens", "Scenic coastal cruising", "Seasonal festivals"]
        },
        {
            title: "Japan & South Korea Voyages",
            bestFor: ["Experienced Asia travelers", "Multi-country exploration", "Cultural immersion"],
            highlights: ["Tokyo", "Busan", "Nagasaki", "Fukuoka", "Seoul access"]
        },
        {
            title: "Japan & Northern Asia Cruises",
            bestFor: ["Adventure-focused luxury travelers", "Unique Asia itineraries", "Extended cultural exploration"],
            highlights: ["Hokkaido", "Northern Japan", "Scenic coastal regions", "Historic ports"]
        }
    ];

    const mediFaqs = [
        {
            question: 'Are Azamara Japan cruises worth it?',
            answer: 'Yes. Azamara offers immersive Japan experiences with boutique ships, longer port stays, and culturally focused itineraries.'
        },
        {
            question: 'Does Azamara cruise Japan during cherry blossom season?',
            answer: 'Yes. Select Azamara itineraries operate during Japan’s famous cherry blossom season.'
        },
        {
            question: 'Which Azamara Japan itinerary is best?',
            answer: 'Japan intensive itineraries featuring Tokyo, Kyoto access, and cultural destinations are especially popular.'
        },
        {
            question: 'Is Azamara considered luxury?',
            answer: 'Azamara is considered an upper-premium boutique cruise line with many luxury-level features.'
        },
        {
            question: 'Are Azamara Japan cruises all inclusive?',
            answer: 'Azamara includes gratuities, select beverages, cultural programming, and various onboard amenities.'
        },
        {
            question: 'What ports does Azamara visit in Japan?',
            answer: 'Common ports include Tokyo, Osaka, Hiroshima, Nagasaki, Kanazawa, Kobe, and Fukuoka.'
        },
        {
            question: 'Is Azamara good for cultural travelers?',
            answer: 'Yes. Azamara’s destination-focused itineraries strongly appeal to culturally curious luxury travelers.'
        },
        {
            question: 'When should travelers book Japan cruises?',
            answer: 'Luxury Japan cruises should ideally be booked 9–18 months in advance, especially for cherry blossom season.'
        },
        {
            question: 'Does Azamara attract younger travelers?',
            answer: 'While Azamara primarily attracts experienced travelers, younger affluent travelers increasingly appreciate immersive cruising.'
        },
        {
            question: 'Which Azamara ship is best for Japan cruises?',
            answer: 'Azamara Pursuit and Azamara Onward are especially popular for Asia itineraries.'
        },
        {
            question: 'Is Azamara better than Oceania for Japan cruises?',
            answer: 'Azamara emphasizes destination immersion while Oceania is particularly known for culinary experiences.'
        },
        {
            question: 'What is the dress code on Azamara Japan cruises?',
            answer: 'Azamara maintains a relaxed luxury atmosphere with elegant resort-casual attire.'
        },
        {
            question: 'Are Azamara shore excursions worth it?',
            answer: 'Many travelers value Azamara’s curated cultural excursions and authentic local experiences.'
        },
        {
            question: 'Why use a luxury cruise advisor for Japan cruises?',
            answer: 'Luxury advisors help travelers maximize value, navigate complex itineraries, and select the best cultural experiences.'
        }
    ];


    const mediMistakes = [
        {
            title: 'Ignoring Seasonal Timing',
            desc: 'Japan changes dramatically by season. Popular periods include:',
            bullets: [
                'Cherry blossom season',
                'Autumn foliage season',
                'Summer festivals'
            ]
        },
        {
            title: 'Waiting Too Long to Book',
            desc: 'Luxury Japan itineraries often sell out quickly, especially during cherry blossom season.'
        },
        {
            title: 'Underestimating Walking & Touring',
            desc: 'Japan itineraries can involve:',
            bullets: [
                'Extensive walking',
                'Train transfers',
                'Historic districts',
                'Active sightseeing'
            ]
        },
        {
            title: 'Choosing Large Mega Ships',
            desc: 'Large ships may offer less immersive and more crowded port experiences.',
            bullets: [
                'Boutique ships often provide a more culturally connected experience.'
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
                "mainEntity": mediFaqs.slice(0, 5).map(faq => ({
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
                <title>Azamara Mediterranean Cruises Guide 2026 | Expert Luxury Cruise Insights</title>
                <meta name="description" content="Explore Azamara Mediterranean Cruises with expert luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Discover immersive Mediterranean itineraries, boutique luxury ships, extended port stays, and personalized cruise planning for 2026." />
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
                        <Anchor size={16} />
                        <span>Boutique Luxury Japan Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Azamara Japan Cruises: Boutique Luxury Through Japan’s Most Fascinating Destinations
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
                            <span className="medi-premium-mini-badge">EXCLUSIVELY IMMERSIVE</span>
                            <h2 className="medi-premium-heading">Discover Why Luxury Travelers Choose Azamara for Japan Cruises</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                For travelers seeking immersive cultural experiences, refined luxury, and destination-focused cruising, Azamara Japan Cruises have become one of the most compelling ways to explore Japan.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Unlike larger cruise lines focused primarily on onboard entertainment, Azamara emphasizes:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Clock size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Cultural immersion</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sun size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Boutique ship intimacy</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Ship size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Longer stays in port</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Authentic local experiences</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Anchor size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Personalized luxury service</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Curated destination exploration</span>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers select the ideal Japan cruise experience using decades of firsthand luxury travel expertise.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes brings a rare level of expertise to luxury Asia cruising.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHY AZAMARA EXCELS */}
            <section className="medi-excel-section">
                {/* Visual coordinate watermarks for premium destination-themed look */}
                <div className="medi-excel-coord coord-tl">JAPAN EXPLORATION // AZAMARA</div>
                <div className="medi-excel-coord coord-tr">35.6764° N, 139.6500° E</div>
                <div className="medi-excel-coord coord-bl">35.0116° N, 135.7681° E</div>
                <div className="medi-excel-coord coord-br">34.6937° N, 135.5023° E</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    {/* Header/Intro Block */}
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Why Azamara Excels in Japan</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Japan is one of the world’s most fascinating and culturally layered cruise destinations.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="medi-excel-grid">

                        {/* Column 1: Focusing On (Challenges) */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    However, many travelers quickly discover that navigating Japan independently can feel overwhelming due to:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Compass size={18} />
                                        </div>
                                        <span>Language barriers</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Ship size={18} />
                                        </div>
                                        <span>Transportation complexity</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Clock size={18} />
                                        </div>
                                        <span>Seasonal planning</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Sparkles size={18} />
                                        </div>
                                        <span>Regional cultural differences</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Appeals to (Solutions) */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Azamara helps simplify luxury Japan travel through carefully curated itineraries that combine:
                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Gem size={18} />
                                        </div>
                                        <span>Convenience</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <MapPin size={18} />
                                        </div>
                                        <span>Cultural depth</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Utensils size={18} />
                                        </div>
                                        <span>Boutique luxury</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Globe size={18} />
                                        </div>
                                        <span>Scenic cruising</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Star size={18} />
                                        </div>
                                        <span>Expert destination access</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Footer Statement */}
                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge">
                            <Sparkles size={20} />
                        </div>
                        <p className="medi-excel-footer-paragraph">
                            For sophisticated travelers seeking meaningful exploration rather than rushed tourism, Azamara delivers an ideal balance.
                        </p>
                    </div>

                </div>
            </section>

            {/* WHAT MAKES AZAMARA DIFFERENT */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DISTINCTIVE CRUISE STYLE</span>
                        <h2 className="medi-diff-main-title">What Makes Azamara Japan Cruises Different?</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Pillar 1: Longer Time in Port */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Clock size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Longer Time in Port</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Azamara is known for extended stays and immersive port experiences throughout Japan.
                            </p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Tokyo</span>
                                <span className="medi-diff-chip">Osaka</span>
                                <span className="medi-diff-chip">Kyoto</span>
                                <span className="medi-diff-chip">Hiroshima</span>
                                <span className="medi-diff-chip">Nagasaki</span>
                                <span className="medi-diff-chip">Shimizu</span>
                            </div>
                            <p className="medi-diff-card-text-secondary">
                                This allows travelers to enjoy:
                            </p>
                            <ul className="medi-diff-experience-list">
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Evening cultural performances</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Local dining experiences</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Historic district exploration</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Seasonal festivals</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="medi-diff-list-icon" />
                                    <span>Reduced daytime crowds</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Boutique Small-Ship Experience */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Ship size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Boutique Small-Ship Experience</h3>
                            </div>

                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num">700</div>
                                </div>
                                <div className="medi-diff-stat-label">GUESTS CAPACITY</div>
                            </div>

                            <p className="medi-diff-card-text">
                                Azamara ships carry approximately 700 guests, creating a more intimate and relaxed luxury atmosphere compared to mega ships.
                            </p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">
                                    Smaller ships also provide access to unique ports throughout Japan and Asia.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 3: Deep Cultural Immersion */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Compass size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Deep Cultural Immersion</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Azamara places heavy emphasis on:
                            </p>
                            <ul className="medi-diff-focus-list-premium">
                                <li>
                                    <span className="medi-diff-list-num">01</span>
                                    <span>Japanese culture</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">02</span>
                                    <span>Culinary experiences</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">03</span>
                                    <span>Historic exploration</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">04</span>
                                    <span>Local traditions</span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">05</span>
                                    <span>Enrichment programming</span>
                                </li>
                            </ul>

                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">
                                    For travelers seeking authentic cultural connection, this creates a far richer experience than traditional cruise tourism.
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
                        <span className="medi-itinerary-eyebrow">CURATED JOURNEYS</span>
                        <h2 className="medi-itinerary-showcase-heading">Best Azamara Japan Cruise Itineraries</h2>
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
                                <img
                                    src={
                                        mediSelectedItinerary === 0 ? greeceCruise : // You can replace these variable names with Japan images
                                            mediSelectedItinerary === 1 ? italyCruise :
                                                mediSelectedItinerary === 2 ? croatiaCoast : spainCruise
                                    }
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">RECOMMENDED VOYAGE</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>

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

            {/* EXPERT INSIGHT */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        {/* Left Side: Editorial Portrait and Floating Stat Badge */}
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={azamaraShip} alt="Angela Hughes - Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>

                            {/* Differentiated floating stat board using roots colors */}
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
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Japan Has Become One of the Fastest Growing <br />Luxury Cruise Destinations
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, sophisticated travelers increasingly view Japan as one of the most rewarding destinations for immersive luxury travel.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in global travel and visits to over 121 countries, Angela consistently sees travelers drawn to Japan for:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Exceptional hospitality',
                                        'Rich culture',
                                        'Culinary excellence',
                                        'Safety',
                                        'Scenic beauty',
                                        'Historic traditions'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate increasingly complex Asia cruise planning with real-world expertise rather than generic online advice.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Expedition travel', icon: Compass },
                                        { title: 'Cultural travel experiences', icon: Globe },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Premium global travel planning', icon: Sparkles }
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


            {/* IS AZAMARA LUXURY */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">DEFINING LUXURY</span>
                        <h2 className="medi-luxury-heading">Is Azamara Truly Luxury?</h2>

                        <p className="medi-luxury-paragraph">
                            Azamara is best described as: <br />
                            <strong>“Boutique upper-premium luxury with strong cultural immersion.”</strong>
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Luxury travelers appreciate Azamara for:</h3>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Personalized service</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Gourmet dining</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Relaxed sophistication</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Intimate ship atmosphere</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Destination-focused itineraries</span>
                                </div>
                                <div className="medi-luxury-feature">
                                    <CheckCircle size={20} className="medi-feature-check-icon" />
                                    <span>Extended port stays</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note">
                            <p className="medi-luxury-paragraph">
                                Travelers expecting ultra-luxury experiences similar to <strong>Seabourn, Regent Seven Seas Cruises,</strong> or <strong>Silversea Cruises</strong> should understand Azamara offers a more approachable and culturally immersive luxury experience.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For many sophisticated travelers, this creates the ideal balance between comfort and exploration.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={luxurySuite} alt="Azamara luxury suite" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* COMMON MISTAKES AUTO-SLIDER */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID CRUISE PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common Mistakes Travelers Make When Booking <br /> Japan Cruises
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        {/* Left Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            aria-label="Previous slide"
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

                    {/* Progress Indicator Dots */}
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

            {/* WHO SHOULD CHOOSE */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Who Should Choose Azamara Japan Cruises?</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Compass size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Experienced travelers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Globe size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Cultural explorers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Heart size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Couples</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <MapPin size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Luxury travelers seeking immersion</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Crown size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Asia cruise enthusiasts</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Ship size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Travelers avoiding mega ships</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Sun size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Sophisticated international travelers</span>
                                </li>
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Not Ideal For</h3>
                            <ul className="medi-audience-list">
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Baby size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Families wanting extensive kids programs</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Moon size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Travelers prioritizing nonstop nightlife onboard</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Music size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Guests seeking large-scale entertainment complexes</span>
                                </li>
                            </ul>
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
                        <h2 className="medi-section-heading white-heading">Why Travelers Work with <br /> Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar custom-bar"></div>
                        <p className="medi-work-intro-para">
                            Luxury Japan cruise planning has become increasingly specialized.
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
                                <h3 className="medi-pillar-title">Working with experienced luxury advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Calendar size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Select ideal sailing seasons</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Choose culturally immersive itineraries</span>
                                    </li>
                                    <li>
                                        <Crown size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Secure premium suites</span>
                                    </li>
                                    <li>
                                        <Gem size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Access exclusive amenities</span>
                                    </li>
                                    <li>
                                        <Ship size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Navigate complex Asia cruise logistics</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Match travel goals with the right cruise experience</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 2: Global Recognition (Right Aligned) */}
                        <div className="medi-timeline-step step-right">
                            <div className="medi-timeline-node">
                                <Award size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 02</div>
                                <h3 className="medi-pillar-title">Angela Hughes is internationally recognized for luxury travel expertise through:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Mic size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Industry speaking engagements</span>
                                    </li>
                                    <li>
                                        <FileText size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Weekly travel columns</span>
                                    </li>
                                    <li>
                                        <Award size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Advisory board leadership</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>International media recognition</span>
                                    </li>
                                    <li>
                                        <GraduationCap size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Luxury Travel University training programs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 3: Specializations (Left Aligned) */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Ship size={18} />
                            </div>
                            <div className="medi-timeline-card">
                                <div className="medi-card-step-badge">STEP 03</div>
                                <h3 className="medi-pillar-title">Trips & Ships Luxury Travel specializes in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Ship size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Luxury cruises</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Asia travel</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition voyages</span>
                                    </li>
                                    <li>
                                        <Anchor size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>River cruising</span>
                                    </li>
                                    <li>
                                        <Star size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Premium global travel experiences</span>
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
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Angela Hughes Authority Box</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        {/* Left Side: The Identity Board */}
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

                        {/* Right Side: Cascading Accolade Cards */}
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
                                    <span>{index + 1}. {faq.question}</span>
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
                        <h2 className="medi-cta-heading-white">Ready to Experience <br /> Japan with Azamara?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury Japan cruising is about more than simply visiting ports — it is about cultural immersion, authentic experiences, personalized service, and seamless planning.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium cruise planning, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal Azamara Japan cruise experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Cherry blossom cruises",
                                    "Cultural Japan itineraries",
                                    "Boutique Asia voyages",
                                    "Luxury small-ship exploration",
                                    "Extended Asia cruise experiences"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips & Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
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

                        <p className="medi-cta-paragraph-white" style={{ fontSize: '0.9rem', marginTop: '20px', opacity: 0.8 }}>
                            Schedule a personalized Japan luxury cruise consultation with Trips & Ships Luxury Travel today.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AzamaraJapanCruises