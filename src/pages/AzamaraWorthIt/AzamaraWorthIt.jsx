import Navbar from '../../components/Navbar/Navbar'

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
    Mic, FileText, GraduationCap,
    Zap
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/AzamaraMediterraneanCruises/Azamara Greece cruise itinerary.jpg'
import hero2 from '../../assets/AzamaraMediterraneanCruises/Luxury Mediterranean small ship cruise.jpg'
import hero3 from '../../assets/AzamaraMediterraneanCruises/Azamara Mediterranean cruise ship.jpg'

function MediterraneanCruises() {
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
            title: 'Mediterranean Cruises',
            listHeading: 'Popular for:',
            items: ['Overnight stays', 'Historic cities', 'Culinary experiences', 'Coastal exploration']
        },
        {
            title: 'Japan & Asia Cruises',
            listHeading: 'Highlights include:',
            items: ['Tokyo', 'Kyoto access', 'Busan', 'Cultural immersion', 'Cherry blossom sailings']
        },
        {
            title: 'South America Voyages',
            listHeading: 'Ideal for travelers seeking:',
            items: ['Scenic cruising', 'Cultural diversity', 'Longer itineraries', 'Smaller ports']
        }
    ]

    const mediFaqs = [
        {
            question: 'Is Azamara worth it?',
            answer: 'Yes, particularly for travelers seeking cultural immersion, boutique ships, and destination-focused luxury cruising.'
        },
        {
            question: 'Is Azamara considered luxury?',
            answer: 'Azamara is considered an upper-premium boutique cruise line with many luxury-level features.'
        },
        {
            question: 'Is Azamara all inclusive?',
            answer: 'Azamara includes gratuities, select beverages, cultural experiences, and several onboard amenities.'
        },
        {
            question: 'What type of travelers choose Azamara?',
            answer: 'Azamara appeals primarily to sophisticated travelers, couples, and culturally curious explorers.'
        },
        {
            question: 'Is Azamara better than Viking?',
            answer: 'Azamara emphasizes immersive port experiences and boutique cruising, while Viking Cruises focuses heavily on destination enrichment and Scandinavian-inspired design.'
        },
        {
            question: 'How does Azamara compare to Oceania?',
            answer: 'Azamara prioritizes destination immersion, while Oceania is particularly known for culinary excellence.'
        },
        {
            question: 'Are Azamara shore excursions worth it?',
            answer: 'Many travelers value Azamara’s curated cultural experiences and local immersion opportunities.'
        },
        {
            question: 'What are the best Azamara itineraries?',
            answer: 'Mediterranean, Japan, and culturally immersive Asia itineraries remain among the most popular.'
        },
        {
            question: 'Does Azamara attract younger travelers?',
            answer: 'While Azamara traditionally attracts experienced travelers, younger affluent travelers increasingly appreciate immersive small-ship cruising.'
        },
        {
            question: 'Is Azamara formal?',
            answer: 'No. Azamara maintains a relaxed luxury atmosphere with elegant resort-casual dress standards.'
        }
    ];


    const mediMistakes = [
        {
            title: 'Expecting Mega-Ship Entertainment',
            desc: 'Azamara is intentionally quieter and more destination-focused.'
        },
        {
            title: 'Booking Too Late',
            desc: 'Popular itineraries often sell out early, especially:',
            bullets: [
                'Japan cherry blossom cruises',
                'Mediterranean summer voyages',
                'Holiday sailings'
            ]
        },
        {
            title: 'Choosing the Wrong Cabin Category',
            desc: 'Experienced cruise advisors can help travelers balance:',
            bullets: [
                'Budget',
                'Space preferences',
                'Deck locations',
                'Included amenities'
            ]
        },
        {
            title: 'Underestimating Activity Levels',
            desc: 'Many Azamara itineraries involve:',
            bullets: [
                'Walking tours',
                'Historic districts',
                'Active sightseeing',
                'Port-intensive schedules'
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
                        <span>Boutique Luxury Mediterranean Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Is Azamara Worth It? Honest Luxury Cruise Insights for Sophisticated Travelers

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
                            <h2 className="medi-premium-heading">Why Travelers Are Asking if Azamara Is Worth It
                            </h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                For travelers considering premium and luxury cruises, one question appears consistently:“Is Azamara worth it?”

                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    The answer depends largely on what type of cruise experience travelers value most.  For travelers seeking:


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
                                        <span className="medi-immersion-card-title">Boutique ship experiences
                                        </span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Ship size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Longer stays in port
                                        </span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Relaxed luxury
                                        </span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Anchor size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Destination-focused itineraries
                                        </span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Sophisticated but approachable cruising
                                        </span>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers select the ideal Mediterranean cruise experience based on decades of firsthand luxury travel expertise.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year by Travel Leaders Network, Angela Hughes offers unmatched insight into luxury Mediterranean cruising.
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
                <div className="medi-excel-coord coord-tl">MEDITERRANEAN EXPLORATION // AZAMARA</div>
                <div className="medi-excel-coord coord-tr">37.9838° N, 23.7275° E</div>
                <div className="medi-excel-coord coord-bl">41.9028° N, 12.4964° E</div>
                <div className="medi-excel-coord coord-br">43.7001° N, 7.2620° E</div>

                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">

                    {/* Header/Intro Block */}
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">What Type of Cruise Line Is Azamara?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Azamara is best described as:
                            “Boutique upper-premium cruising with strong destination immersion.”
                            The cruise line occupies a unique space between mainstream premium cruising and ultra-luxury cruising.

                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="medi-excel-grid">

                        {/* Column 1: Focusing On */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Travelers often compare Azamara with:

                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Compass size={18} />
                                        </div>
                                        <span>Oceania Cruises
                                        </span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Ship size={18} />
                                        </div>
                                        <span>Seabourn
                                        </span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Clock size={18} />
                                        </div>
                                        <span>Silversea Cruises
                                        </span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Sparkles size={18} />
                                        </div>
                                        <span>Viking Cruises
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Appeals to */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    However, Azamara stands out because of its emphasis on:

                                </h3>
                                <ul className="medi-excel-list">
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Gem size={18} />
                                        </div>
                                        <span>Longer port stays
                                        </span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <MapPin size={18} />
                                        </div>
                                        <span>Overnight destinations</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Utensils size={18} />
                                        </div>
                                        <span>Cultural experiences
                                        </span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Globe size={18} />
                                        </div>
                                        <span>Smaller ships
                                        </span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Star size={18} />
                                        </div>
                                        <span>Relaxed luxury atmosphere</span>
                                    </li>
                                    <li className="medi-excel-list-item">
                                        <div className="medi-excel-icon-wrapper">
                                            <Users size={18} />
                                        </div>
                                        <span>Destination-focused itineraries
                                        </span>
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
                            For many sophisticated travelers, this creates a more enriching experience than larger cruise lines
                        </p>
                    </div>

                </div>
            </section>

            {/* WHAT MAKES AZAMARA DIFFERENT */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DISTINCTIVE CRUISE STYLE</span>
                        <h2 className="medi-diff-main-title">What Makes Azamara Different?
                        </h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">

                        {/* Pillar 1: Extended Port Stays */}
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Clock size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Longer Time in Port
                                </h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Azamara is known throughout the cruise industry for extended port stays.This allows travelers to enjoy:


                            </p>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">Evening cultural events
                                </span>
                                <span className="medi-diff-chip">Local dining experiences</span>
                                <span className="medi-diff-chip">Nightlife exploration
                                </span>
                                <span className="medi-diff-chip">Reduced daytime crowds
                                </span>
                                <span className="medi-diff-chip">More immersive sightseeing
                                </span>

                            </div>

                        </div>

                        {/* Pillar 2: Smaller Ship Access */}
                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Ship size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Boutique Small-Ship Atmosphere</h3>
                            </div>

                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num">700</div>
                                </div>
                                <div className="medi-diff-stat-label">GUESTS CAPACITY</div>
                            </div>

                            <p className="medi-diff-card-text">
                                Azamara ships typically carry around 700 guests. Smaller ships can also access ports larger vessels cannot easily reach.


                            </p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">
                                    This creates :
                                </p>
                            </div>
                            <div className="medi-diff-destination-chips">
                                <span className="medi-diff-chip">More personalized service
                                </span>
                                <span className="medi-diff-chip">Less crowded public spaces

                                </span>
                                <span className="medi-diff-chip">Easier embarkation and disembarkation

                                </span>
                                <span className="medi-diff-chip">Intimate onboard environments
                                </span>

                                <span className="medi-diff-chip">Greater destination access

                                </span>

                            </div>
                        </div>

                        {/* Pillar 3: Destination Immersion Focus */}
                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box">
                                    <Compass size={24} />
                                </div>
                                <h3 className="medi-diff-card-title">Destination-Focused Cruising
                                </h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Unlike some cruise lines that emphasize onboard attractions, Azamara prioritizes destinations.Travelers who value:


                            </p>
                            <ul className="medi-diff-focus-list-premium">
                                <li>
                                    <span className="medi-diff-list-num">01</span>
                                    <span>History
                                    </span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">02</span>
                                    <span>Culture
                                    </span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">03</span>
                                    <span>Culinary experiences
                                    </span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">04</span>
                                    <span>Local immersion
                                    </span>
                                </li>
                                <li>
                                    <span className="medi-diff-list-num">05</span>
                                    <span>Authentic exploration
                                    </span>
                                </li>
                            </ul>

                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">
                                    often find Azamara significantly more rewarding.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHAT IS INCLUDED ON AZAMARA CRUISES */}
            <section className="azw-included-section">
                <div className="azw-included-container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-itinerary-eyebrow">PREMIUM AMENITIES</span>
                        <h2 className="medi-section-heading">What Is Included on Azamara Cruises?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="azw-included-intro">
                            One reason many travelers consider Azamara worth the price is the number of included amenities. Azamara typically includes:
                        </p>
                    </div>

                    <div className="azw-included-grid">
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Award size={24} /></div>
                            <span>Gratuities</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Star size={24} /></div>
                            <span>Select alcoholic beverages</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Sun size={24} /></div>
                            <span>Specialty coffees and teas</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Anchor size={24} /></div>
                            <span>Bottled water</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><MapPin size={24} /></div>
                            <span>Shuttle services in many ports</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Music size={24} /></div>
                            <span>Cultural events</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Crown size={24} /></div>
                            <span>Concierge services</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Heart size={24} /></div>
                            <span>Fitness classes</span>
                        </div>
                        <div className="azw-included-card">
                            <div className="azw-included-icon"><Sparkles size={24} /></div>
                            <span>Self-service laundry</span>
                        </div>
                    </div>

                    <div className="azw-included-header" style={{ marginTop: '50px', marginBottom: '0' }}>
                        <p className="azw-included-subtext">
                            Compared to some cruise lines with extensive add-on charges, Azamara offers a more inclusive experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* IS AZAMARA WORTH THE MONEY */}
            <section className="azw-worth-section">
                <div className="azw-worth-container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-itinerary-eyebrow">VALUE ASSESSMENT</span>
                        <h2 className="medi-section-heading">Is Azamara Worth the Money?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="azw-worth-columns">
                        {/* Left Column: Excellent value for */}
                        <div className="azw-worth-panel azw-worth-panel-positive">
                            <div className="azw-worth-panel-bar"></div>
                            <div className="azw-worth-panel-header">
                                <div className="azw-worth-panel-icon-circle azw-icon-positive">
                                    <CheckCircle size={22} />
                                </div>
                                <h3 className="azw-worth-panel-heading">For travelers who prioritize:</h3>
                            </div>
                            <ul className="azw-worth-items">
                                {[
                                    'Destination immersion',
                                    'Smaller ships',
                                    'Cultural travel',
                                    'Relaxed luxury',
                                    'Extended port access'
                                ].map((item, idx) => (
                                    <li key={idx} className="azw-worth-item">
                                        <span className="azw-worth-dot azw-dot-navy"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="azw-worth-verdict azw-verdict-positive">
                                <Sparkles size={16} />
                                <span>Azamara is often considered an excellent value.</span>
                            </div>
                        </div>

                        {/* Right Column: Better value elsewhere */}
                        <div className="azw-worth-panel azw-worth-panel-alt">
                            <div className="azw-worth-panel-bar azw-bar-alt"></div>
                            <div className="azw-worth-panel-header">
                                <div className="azw-worth-panel-icon-circle azw-icon-alt">
                                    <Compass size={22} />
                                </div>
                                <h3 className="azw-worth-panel-heading">Travelers primarily seeking:</h3>
                            </div>
                            <ul className="azw-worth-items">
                                {[
                                    'Broadway-style entertainment',
                                    'Huge casino complexes',
                                    'Theme park-style attractions'
                                ].map((item, idx) => (
                                    <li key={idx} className="azw-worth-item">
                                        <span className="azw-worth-dot azw-dot-slate"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="azw-worth-verdict azw-verdict-alt">
                                <ArrowRight size={16} />
                                <span>may find better value elsewhere.</span>
                            </div>
                        </div>
                    </div>

                    <div className="azw-worth-bottom-banner">
                        <div className="azw-worth-banner-icon">
                            <Anchor size={20} />
                        </div>
                        <p className="azw-worth-banner-text">
                            Ultimately, Azamara appeals most strongly to travelers who view cruising as a gateway to deeper exploration rather than simply onboard entertainment.
                        </p>
                    </div>
                </div>
            </section>

            {/* ITINERARIES SHOWCASE */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED JOURNEYS</span>
                        <h2 className="medi-itinerary-showcase-heading">Best Azamara Itineraries</h2>
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
                                        mediSelectedItinerary === 0 ? greeceCruise :
                                            mediSelectedItinerary === 1 ? italyCruise : croatiaCoast
                                    }
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">RECOMMENDED VOYAGE</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>

                                <div className="medi-itinerary-details-grid" style={{ gridTemplateColumns: '1fr' }}>
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">{mediItineraries[mediSelectedItinerary].listHeading}</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {mediItineraries[mediSelectedItinerary].items.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
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

                            {/* Floating stat board preserved for design consistency */}
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
                                    <span className="medi-editorial-eyebrow">Expert Insight</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Expert Insight from Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, many travelers underestimate how important ship size and itinerary design become in overall cruise satisfaction.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After decades of luxury cruise planning, Angela consistently sees travelers gravitate toward Azamara because of:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Relaxed sophistication',
                                        'Immersive travel experiences',
                                        'Personalized service',
                                        'Destination depth',
                                        'Cultural connection'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and an internationally recognized luxury travel advisor, Angela Hughes helps travelers compare cruise lines realistically based on travel style rather than marketing hype.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Cultural travel', icon: Globe },
                                        { title: 'Global premium travel planning', icon: Sparkles }
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
                            This is one of the most common questions travelers ask. <br />
                            The answer depends on how travelers define “luxury.”
                        </p>

                        {/* List 1: Azamara Offers */}
                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Azamara Offers:</h3>
                            <div className="medi-luxury-features-grid">
                                {[
                                    "Personalized service",
                                    "Gourmet dining",
                                    "Boutique atmosphere",
                                    "Elegant accommodations",
                                    "Curated itineraries",
                                    "High staff-to-guest attention"
                                ].map((item, idx) => (
                                    <div key={idx} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* List 2: Azamara Does Not Focus On */}
                        <div className="medi-luxury-appreciated-box" style={{ marginTop: '30px' }}>
                            <h3 className="medi-luxury-subheading">Azamara Does Not Focus On:</h3>
                            <div className="medi-luxury-features-grid">
                                {[
                                    "Extreme opulence",
                                    "Ultra-formal environments",
                                    "Massive suites across all categories",
                                    "Butler service for every cabin",
                                    "Ultra-luxury exclusivity"
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
                                Travelers expecting experiences identical to ultra-luxury lines like <strong>Seabourn</strong> or <strong>Silversea</strong> should understand that Azamara offers a more approachable style of luxury.
                            </p>
                            <p className="medi-luxury-paragraph">
                                For many experienced travelers, this balance feels more authentic and relaxed.
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
                            Common Mistakes Travelers Make When Choosing Azamara
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
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best Travelers for Azamara</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Azamara Is Ideal For:</h3>
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
                                    <span>Experienced travelers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Sun size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Empty nesters</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Globe size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Cultural explorers</span>
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
                                <li>
                                    <div className="medi-audience-icon-wrapper best">
                                        <Users size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Sophisticated international travelers</span>
                                </li>
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Azamara May Not Be Ideal For:</h3>
                            <ul className="medi-audience-list">
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Baby size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Families with young children</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Zap size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Travelers wanting water parks or large-scale entertainment</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Music size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Party-focused travelers</span>
                                </li>
                                <li>
                                    <div className="medi-audience-icon-wrapper not-ideal">
                                        <Moon size={20} className="medi-audience-icon" />
                                    </div>
                                    <span>Guests seeking nonstop nightlife onboard</span>
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
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Identify the best itineraries</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Secure premium accommodations</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Maximize cruise value</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Access exclusive amenities</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Navigate complex international travel logistics</span>
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
                                <h3 className="medi-pillar-title">Angela Hughes is internationally recognized for expertise in:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <Ship size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Luxury cruising</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition travel</span>
                                    </li>
                                    <li>
                                        <Star size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Boutique cruise experiences</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Cultural travel planning</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Premium international travel</span>
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
                                        <Anchor size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Small ship cruising</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition voyages</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Asia travel</span>
                                    </li>
                                    <li>
                                        <Star size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Personalized luxury travel experiences</span>
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
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
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
                        <h2 className="medi-cta-heading-white">Ready to Decide if Azamara Is Right for You?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury cruising is highly personal. For travelers seeking <strong>cultural immersion, smaller ships, relaxed sophistication, longer port stays, and authentic destination experiences</strong>, Azamara often delivers exceptional value and memorable travel experiences.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently compare cruise lines and select the ideal luxury cruise experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Mediterranean voyages",
                                    "Japan luxury cruises",
                                    "Boutique cultural cruising",
                                    "Small ship exploration",
                                    "Luxury world cruises"
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
                                {/* Swapped ExternalLink for Globe to avoid the error */}
                                <Globe size={18} />
                                Azamara Official Site
                            </button>
                        </div>

                        {/* External Resource Links */}
                        <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', opacity: 0.8, fontSize: '0.85rem' }}>
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

export default MediterraneanCruises