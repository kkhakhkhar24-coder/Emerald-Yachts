import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import './Vikingalaskacruises.css'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Wifi, Wine, Plane, X,
    Mountain, Fish, Bird, PawPrint, Camera, Snowflake,
    Sofa, BedDouble, Bath, UtensilsCrossed, ChefHat, Coffee,
    Binoculars, TreePine, Waves, Landmark
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   IMAGE PLACEHOLDERS — swap with real imports like the Azamara page
   e.g. import alaskaHero1 from '../../assets/VikingAlaska/hero1.jpg'
──────────────────────────────────────────────────────────────── */
const ALASKA_HERO_1       = 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1600&q=80'
const ALASKA_HERO_2       = 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1600&q=80'
const ALASKA_HERO_3       = 'https://images.unsplash.com/photo-1531176175280-33ee2d5fab15?w=1600&q=80'

const JUNEAU_IMG          = 'https://images.unsplash.com/photo-1605640840605-58c45afe411a?w=900&q=80'
const KETCHIKAN_IMG       = 'https://images.unsplash.com/photo-1604335398980-26491c7a7268?w=900&q=80'
const SITKA_IMG           = 'https://images.unsplash.com/photo-1559825481-12a583e8badc?w=900&q=80'
const GLACIER_BAY_IMG     = 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=900&q=80'
const HUBBARD_GLACIER_IMG = 'https://images.unsplash.com/photo-1496150873860-fae5ad55b3d3?w=900&q=80'

const SHIP_EXTERIOR_IMG   = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80'
const VERANDA_ROOM_IMG    = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80'
const PENTHOUSE_ROOM_IMG  = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80'
const EXPLORER_SUITE_IMG  = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80'

const ANGELA_PORTRAIT_IMG = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'

/* ════════════════════════════════════════════════════════════ */

function VikingAlaskaCruises() {

    const heroImages = [ALASKA_HERO_1, ALASKA_HERO_2, ALASKA_HERO_3]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)
    const [selectedItinerary, setSelectedItinerary] = useState(0)

    const itineraries = [
        {
            title: 'Alaska & the Inside Passage',
            desc: 'One of Viking\'s most popular Alaska voyages. This itinerary combines wildlife viewing, scenic cruising, and cultural exploration.',
            ports: ['Vancouver', 'Ketchikan', 'Sitka', 'Juneau', 'Icy Strait Point', 'Valdez', 'Seward']
        },
        {
            title: 'Alaska, British Columbia & Pacific Coast',
            desc: 'Ideal for travelers seeking both Alaska and Canada\'s west coast.',
            ports: ['Vancouver', 'Victoria', 'Ketchikan', 'Juneau', 'Sitka', 'Seward']
        },
        {
            title: 'Alaska Explorer Voyages',
            desc: 'Longer itineraries provide deeper immersion into Alaska\'s wilderness.',
            ports: ['Glacier Bay', 'Hubbard Glacier', 'Prince William Sound', 'Kenai Peninsula']
        },
    ]

    const wildlife = [
        ['Humpback whales', Waves],
        ['Orcas', Waves],
        ['Sea otters', PawPrint],
        ['Bald eagles', Bird],
        ['Brown bears', PawPrint],
        ['Black bears', PawPrint],
        ['Moose', PawPrint],
        ['Harbor seals', Fish],
    ]

    const faqs = [
        { question: 'Are Viking Alaska Cruises adults only?', answer: 'Yes. Viking Ocean Cruises welcomes guests age 18 and older.' },
        { question: 'What is included on a Viking Alaska Cruise?', answer: 'Wi-Fi, one shore excursion in every port, specialty dining, beer and wine with meals, and enrichment programs are included.' },
        { question: 'Does Viking sail to Glacier Bay?', answer: 'Some Viking Alaska itineraries include Glacier Bay National Park or other glacier-viewing experiences depending on permits and itinerary schedules.' },
        { question: 'What wildlife can you see on a Viking Alaska Cruise?', answer: 'Guests commonly see whales, sea otters, eagles, seals, bears, and other Alaska wildlife.' },
        { question: 'What is the best month for an Alaska cruise?', answer: 'June through August are the most popular months, while September offers fewer crowds and beautiful fall scenery.' },
        { question: 'Are Viking Alaska Cruises luxury cruises?', answer: 'Viking is generally considered an upper-premium to luxury cruise line offering destination-focused experiences.' },
        { question: 'Do Viking ships have casinos?', answer: 'No. Viking ships do not have casinos.' },
        { question: 'Does Viking include shore excursions?', answer: 'Yes. Viking includes at least one complimentary excursion in every port.' },
        { question: 'Are drinks included on Viking?', answer: 'Beer, wine, and soft drinks are included during lunch and dinner.' },
        { question: 'How long are Viking Alaska Cruises?', answer: 'Most Alaska itineraries range from 8 to 15 days.' },
        { question: 'What ships does Viking use in Alaska?', answer: 'Ships may include Viking Orion, Viking Venus, Viking Jupiter, and Viking Saturn.' },
        { question: 'Is Alaska a good first Viking cruise?', answer: 'Yes. Alaska is one of Viking\'s most popular destinations for first-time guests.' },
        { question: 'Are balconies included on Viking Alaska Cruises?', answer: 'Yes. Every Viking Ocean stateroom includes a private veranda.' },
        { question: 'Can I see glaciers on a Viking Alaska Cruise?', answer: 'Yes. Glacier viewing is one of the major highlights of most Viking Alaska itineraries.' },
        { question: 'Is Viking good for wildlife viewing?', answer: 'Absolutely. Alaska is one of Viking\'s best destinations for wildlife observation and photography.' },
    ]

    const vikingAlaskaSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises",
                "name": "Viking Alaska Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises",
                "description": "Explore Viking Alaska Cruises including glacier viewing, wildlife encounters, Inside Passage itineraries, luxury ships, shore excursions, and expert planning advice.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises#article"
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
                "description": "Luxury travel agency specializing in cruise vacations, expedition cruises, river cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises#article",
                "headline": "Viking Alaska Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises",
                "description": "Complete guide to Viking Alaska Cruises including itineraries, glacier viewing, wildlife encounters, ships, destinations, and travel planning tips.",
                "image": "https://www.tripsshipsluxurytravel.com/images/viking-alaska-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises"
                }
            },
            {
                "@type": "Service",
                "name": "Alaska Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Alaska Cruise Consulting",
                "description": "Expert Alaska cruise planning services helping travelers choose the best Viking Alaska itinerary, ship, stateroom, and shore excursions."
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
                        "name": "Viking Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/viking-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Viking Alaska Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/viking-alaska-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Are Viking Alaska Cruises adults only?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Viking Ocean Cruises welcomes guests age 18 and older, creating a quieter and more refined onboard experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Viking Alaska Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking includes Wi-Fi, one shore excursion in every port, specialty dining, beer and wine with lunch and dinner, and enrichment lectures."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Viking sail to Glacier Bay?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Some Viking Alaska itineraries include Glacier Bay National Park or other major glacier-viewing destinations depending on seasonal scheduling and permits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What wildlife can I see on a Viking Alaska Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Guests commonly see humpback whales, orcas, sea otters, bald eagles, harbor seals, brown bears, and other Alaska wildlife."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best month for an Alaska cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "June through August are the most popular months, while September offers fewer crowds and beautiful fall scenery."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Viking Alaska Cruises luxury cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking is generally considered an upper-premium to luxury cruise line known for destination-focused experiences and elegant ships."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do Viking ships have casinos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Viking ships do not have casinos and instead focus on enrichment, relaxation, and destination immersion."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are shore excursions included with Viking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Viking includes at least one complimentary shore excursion in every port."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long are Viking Alaska Cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most Alaska itineraries range from 8 to 15 days, although longer voyages are sometimes available."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What ships does Viking use in Alaska?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking may deploy ships such as Viking Orion, Viking Venus, Viking Jupiter, and Viking Saturn in Alaska."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Alaska a good first Viking cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Alaska is one of Viking's most popular destinations and an excellent introduction to the Viking cruise experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do all Viking Alaska staterooms have balconies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Every Viking Ocean Cruises stateroom includes a private veranda."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I see glaciers on a Viking Alaska Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Glacier viewing is one of the major highlights of most Viking Alaska itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Viking good for wildlife viewing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Alaska is one of the best destinations in the world for wildlife viewing, and Viking itineraries are designed to showcase the region's natural beauty."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should choose a Viking Alaska Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking Alaska Cruises are ideal for couples, retirees, luxury travelers, photographers, nature lovers, and travelers seeking an adults-only cruise experience."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking Alaska Cruises | Best Alaska Cruise Itineraries, Ships & Travel Guide</title>
                <meta name="title" content="Viking Alaska Cruises: Complete Guide for Luxury Travelers" />
                <meta name="description" content="Discover Viking Alaska Cruises including itineraries, destinations, ships, excursions, wildlife, pricing, and travel tips. Learn why Viking offers one of the best adults-only Alaska cruise experiences." />
                <meta name="keywords" content="Viking Alaska Cruises, Viking Alaska Cruise, Alaska Cruises Viking, Viking Ocean Alaska Cruises, Best Viking Alaska Cruise, Viking Alaska Itinerary" />
                <script type="application/ld+json">
                    {JSON.stringify(vikingAlaskaSchemaData)}
                </script>
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
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Destination-Focused Ocean Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Viking Alaska Cruises: The Ultimate Guide for Luxury Travelers
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Towering glaciers, snow-capped mountains, abundant wildlife, and charming coastal towns create an unforgettable travel experience.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════
                INTRO SECTION (TWO-COLUMN)
            ══════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-intro-container">
                    <div className="medi-intro-grid-layout">

                        <div className="medi-intro-heading-column">
                            <span className="medi-premium-mini-badge">DESTINATION-FOCUSED LUXURY</span>
                            <h2 className="medi-section-heading">Why Choose Viking for an Alaska Cruise?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <div className="medi-intro-highlight-box">
                                "Unlike larger family-focused cruise lines, Viking emphasizes destination immersion, cultural enrichment, elegant ships, and meaningful experiences."
                            </div>
                        </div>

                        <div className="medi-intro-content-column">
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                Alaska is one of the world's most spectacular cruise destinations. For travelers seeking a refined, adults-only cruise vacation, Viking Alaska Cruises offer an exceptional way to explore the Last Frontier.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '24px' }}>
                                Whether you're hoping to witness humpback whales, explore glacier-filled fjords, learn about Alaska Native culture, or simply enjoy breathtaking scenery from your veranda, Viking delivers a sophisticated Alaska cruise experience.
                            </p>

                            <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--medi-navy)', marginBottom: '16px' }}>
                                Viking has become one of the most respected names in premium and luxury cruising. Travelers choose Viking Alaska Cruises because of:
                            </p>

                            <div className="vak-why-grid">
                                {[
                                    [Heart, 'Adults-only atmosphere'],
                                    [MapPin, 'Destination-focused itineraries'],
                                    [Ship, 'Smaller ship experience'],
                                    [CheckCircle, 'Included shore excursions'],
                                    [Crown, 'Scandinavian-inspired design'],
                                    [X, 'No casinos'],
                                    [Waves, 'No waterslides'],
                                    [Sparkles, 'Enrichment programs'],
                                    [Wifi, 'Complimentary Wi-Fi'],
                                    [Utensils, 'Included specialty dining'],
                                    [Award, 'Exceptional service'],
                                ].map(([Icon, text], i) => (
                                    <div key={i} className="vak-why-card">
                                        <div className="vak-why-icon-box">
                                            <Icon size={20} />
                                        </div>
                                        <p className="vak-why-text">{text}</p>
                                    </div>
                                ))}
                            </div>

                            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.7', marginTop: '24px' }}>
                                For travelers seeking culture and exploration rather than onboard attractions, Viking is an outstanding choice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHAT MAKES VIKING DIFFERENT
            ══════════════════════════════════ */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">ALASKA-FIRST PHILOSOPHY</span>
                        <h2 className="medi-diff-main-title">What Makes Viking Alaska Cruises Different?</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '16px', color: '#4a5568', maxWidth: '750px', margin: '0 auto 48px', lineHeight: '1.7' }}>
                        Many Alaska cruise lines focus on family entertainment and large-ship attractions. Viking takes a different approach. The focus is on Alaska itself. Guests enjoy:
                    </p>

                    <div className="medi-diff-grid">
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Mountain size={24} /></div>
                                <h3 className="medi-diff-card-title">Destination Immersion</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                More time exploring Alaska's natural beauty and history.
                            </p>
                        </div>

                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Landmark size={24} /></div>
                                <h3 className="medi-diff-card-title">Educational Programs</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Experts provide lectures on glaciers, wildlife, indigenous cultures, and regional history.
                            </p>
                        </div>

                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Sun size={24} /></div>
                                <h3 className="medi-diff-card-title">Scenic Cruising</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Relax from your private veranda while taking in Alaska's breathtaking landscapes.
                            </p>
                        </div>

                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Users size={24} /></div>
                                <h3 className="medi-diff-card-title">Adults-Only Experience</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Guests must be at least 18 years old, creating a quieter atmosphere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                ITINERARIES (new section, own css)
            ══════════════════════════════════ */}
            <section className="vak-voyages-section">
                <div className="vak-voyages-container">
                    <div className="vak-voyages-header">
                        <span className="medi-itinerary-eyebrow">CURATED VOYAGES</span>
                        <h2 className="medi-section-heading">Popular Viking Alaska Cruise Itineraries</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vak-voyages-grid">
                        {itineraries.map((itin, idx) => (
                            <div key={idx} className="vak-voyage-card">
                                <h3 className="vak-voyage-title">{itin.title}</h3>
                                <p className="vak-voyage-desc">{itin.desc}</p>
                                <div className="vak-voyage-ports">
                                    {itin.ports.map((port, i) => (
                                        <span key={i} className="vak-voyage-port-chip">
                                            <MapPin size={12} />
                                            {port}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                TOP ALASKA DESTINATIONS (new section, own css)
            ══════════════════════════════════ */}
            <section className="vak-destinations-section">
                <div className="vak-destinations-container">
                    <div className="vak-destinations-header">
                        <span className="medi-itinerary-eyebrow">SHORE TO SHORE</span>
                        <h2 className="medi-section-heading">Top Alaska Destinations on Viking Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vak-destinations-grid">
                        <div className="vak-destination-card">
                            <div className="vak-destination-image-wrap">
                                <img src={JUNEAU_IMG} alt="Juneau, Alaska" />
                                <span className="vak-destination-badge">Capital City</span>
                            </div>
                            <div className="vak-destination-body">
                                <h3 className="vak-destination-title">Juneau</h3>
                                <p className="vak-destination-subtitle">Alaska's capital city offers:</p>
                                <ul className="vak-destination-list">
                                    <li><CheckCircle size={15} /><span>Whale watching</span></li>
                                    <li><CheckCircle size={15} /><span>Mendenhall Glacier</span></li>
                                    <li><CheckCircle size={15} /><span>Hiking trails</span></li>
                                    <li><CheckCircle size={15} /><span>Historic downtown</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vak-destination-card">
                            <div className="vak-destination-image-wrap">
                                <img src={KETCHIKAN_IMG} alt="Ketchikan, Alaska" />
                                <span className="vak-destination-badge">First City</span>
                            </div>
                            <div className="vak-destination-body">
                                <h3 className="vak-destination-title">Ketchikan</h3>
                                <p className="vak-destination-subtitle">Known as Alaska's "First City." Highlights include:</p>
                                <ul className="vak-destination-list">
                                    <li><CheckCircle size={15} /><span>Totem heritage</span></li>
                                    <li><CheckCircle size={15} /><span>Salmon fishing</span></li>
                                    <li><CheckCircle size={15} /><span>Rainforest excursions</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vak-destination-card">
                            <div className="vak-destination-image-wrap">
                                <img src={SITKA_IMG} alt="Sitka, Alaska" />
                                <span className="vak-destination-badge">Cultural Heritage</span>
                            </div>
                            <div className="vak-destination-body">
                                <h3 className="vak-destination-title">Sitka</h3>
                                <p className="vak-destination-subtitle">A fascinating blend of Russian and Native Alaskan history. Popular experiences include:</p>
                                <ul className="vak-destination-list">
                                    <li><CheckCircle size={15} /><span>Wildlife tours</span></li>
                                    <li><CheckCircle size={15} /><span>Historic sites</span></li>
                                    <li><CheckCircle size={15} /><span>Scenic coastal exploration</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vak-destination-card">
                            <div className="vak-destination-image-wrap">
                                <img src={GLACIER_BAY_IMG} alt="Glacier Bay National Park" />
                                <span className="vak-destination-badge">National Park</span>
                            </div>
                            <div className="vak-destination-body">
                                <h3 className="vak-destination-title">Glacier Bay National Park</h3>
                                <p className="vak-destination-subtitle">One of Alaska's greatest highlights. Travelers may witness:</p>
                                <ul className="vak-destination-list">
                                    <li><CheckCircle size={15} /><span>Massive glaciers</span></li>
                                    <li><CheckCircle size={15} /><span>Sea lions</span></li>
                                    <li><CheckCircle size={15} /><span>Eagles</span></li>
                                    <li><CheckCircle size={15} /><span>Humpback whales</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vak-destination-card">
                            <div className="vak-destination-image-wrap">
                                <img src={HUBBARD_GLACIER_IMG} alt="Hubbard Glacier" />
                                <span className="vak-destination-badge">Tidewater Glacier</span>
                            </div>
                            <div className="vak-destination-body">
                                <h3 className="vak-destination-title">Hubbard Glacier</h3>
                                <p className="vak-destination-subtitle">North America's largest tidewater glacier is often a favorite scenic cruising experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WILDLIFE (new section, own css, dark)
            ══════════════════════════════════ */}
            <section className="vak-wildlife-section">
                <div className="vak-wildlife-container">
                    <div className="vak-wildlife-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>NATURE & WILDLIFE</span>
                        <h2 className="medi-section-heading">Wildlife You May See</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="vak-wildlife-intro">
                        Alaska is one of the best wildlife destinations in the world. Guests frequently spot:
                    </p>

                    <div className="vak-wildlife-grid">
                        {wildlife.map(([name, Icon], i) => (
                            <div key={i} className="vak-wildlife-chip">
                                <div className="vak-wildlife-icon-box">
                                    <Icon size={22} />
                                </div>
                                <p className="vak-wildlife-name">{name}</p>
                            </div>
                        ))}
                    </div>

                    <p className="vak-wildlife-footnote">Wildlife sightings vary by season and itinerary.</p>
                </div>
            </section>

            {/* ══════════════════════════════════
                SHIPS / FLEET
            ══════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">VIKING OCEAN FLEET // ALASKA</div>
                <div className="medi-excel-coord coord-tr">CONSISTENCY ACROSS THE FLEET</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Viking Alaska Ships</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            Viking typically operates its ocean ships in Alaska. Guests enjoy consistency across the fleet.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">Popular Vessels</h3>
                                <ul className="medi-excel-list">
                                    {['Viking Orion', 'Viking Venus'].map((s, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Ship size={18} /></div>
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">More of the Fleet</h3>
                                <ul className="medi-excel-list">
                                    {['Viking Jupiter', 'Viking Saturn'].map((s, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Ship size={18} /></div>
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            Every Viking Ocean stateroom includes a private veranda, king-size bed, heated bathroom floors, luxury toiletries, premium bedding, and complimentary Wi-Fi.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                STATEROOMS & SUITES (new section, own css)
            ══════════════════════════════════ */}
            <section className="vak-staterooms-section">
                <div className="vak-staterooms-container">
                    <div className="vak-staterooms-header">
                        <span className="medi-itinerary-eyebrow">ONBOARD COMFORT</span>
                        <h2 className="medi-section-heading">Staterooms and Suites</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vak-staterooms-grid">
                        <div className="vak-stateroom-card">
                            <div className="vak-stateroom-image-wrap">
                                <img src={VERANDA_ROOM_IMG} alt="Veranda Stateroom" />
                                <span className="vak-stateroom-badge">Every Stateroom</span>
                            </div>
                            <div className="vak-stateroom-body">
                                <h3 className="vak-stateroom-title">Every Viking Ocean Stateroom</h3>
                                <ul className="vak-stateroom-features">
                                    <li><BedDouble size={16} /><span>Private veranda &amp; king-size bed</span></li>
                                    <li><Bath size={16} /><span>Heated bathroom floors</span></li>
                                    <li><Sparkles size={16} /><span>Luxury toiletries</span></li>
                                    <li><Sofa size={16} /><span>Premium bedding</span></li>
                                    <li><Wifi size={16} /><span>Complimentary Wi-Fi</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vak-stateroom-card">
                            <div className="vak-stateroom-image-wrap">
                                <img src={PENTHOUSE_ROOM_IMG} alt="Penthouse Veranda Stateroom" />
                                <span className="vak-stateroom-badge">Premium</span>
                            </div>
                            <div className="vak-stateroom-body">
                                <h3 className="vak-stateroom-title">Penthouse Veranda Staterooms</h3>
                                <ul className="vak-stateroom-features">
                                    <li><CheckCircle size={16} /><span>Provide additional space</span></li>
                                    <li><CheckCircle size={16} /><span>Enhanced amenities</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vak-stateroom-card">
                            <div className="vak-stateroom-image-wrap">
                                <img src={EXPLORER_SUITE_IMG} alt="Explorer Suite" />
                                <span className="vak-stateroom-badge">Most Luxurious</span>
                            </div>
                            <div className="vak-stateroom-body">
                                <h3 className="vak-stateroom-title">Explorer Suites</h3>
                                <p style={{ fontSize: '13.5px', color: '#64748b', margin: '0 0 12px' }}>Among the most luxurious accommodations onboard. Features may include:</p>
                                <ul className="vak-stateroom-features">
                                    <li><Sofa size={16} /><span>Separate living areas</span></li>
                                    <li><Sun size={16} /><span>Large private verandas</span></li>
                                    <li><Star size={16} /><span>Premium services</span></li>
                                    <li><Gem size={16} /><span>Priority reservations</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                DINING (new section, own css)
            ══════════════════════════════════ */}
            <section className="vak-dining-section">
                <div className="vak-dining-container">
                    <div className="vak-dining-header">
                        <span className="medi-itinerary-eyebrow">CULINARY EXPERIENCE</span>
                        <h2 className="medi-section-heading">Dining on Viking Alaska Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Food is an important part of the Viking experience.
                        </p>
                    </div>

                    <div className="vak-dining-grid">
                        <div className="vak-dining-card">
                            <div className="vak-dining-icon-box"><UtensilsCrossed size={24} /></div>
                            <h3 className="vak-dining-card-title">The Restaurant</h3>
                            <p className="vak-dining-card-text">Offers regional and international cuisine.</p>
                        </div>
                        <div className="vak-dining-card">
                            <div className="vak-dining-icon-box"><ChefHat size={24} /></div>
                            <h3 className="vak-dining-card-title">Manfredi's Italian Restaurant</h3>
                            <p className="vak-dining-card-text">One of the fleet's most popular specialty venues.</p>
                        </div>
                        <div className="vak-dining-card">
                            <div className="vak-dining-icon-box"><Utensils size={24} /></div>
                            <h3 className="vak-dining-card-title">Chef's Table</h3>
                            <p className="vak-dining-card-text">Multi-course tasting menus inspired by global flavors.</p>
                        </div>
                        <div className="vak-dining-card">
                            <div className="vak-dining-icon-box"><Coffee size={24} /></div>
                            <h3 className="vak-dining-card-title">World Café</h3>
                            <p className="vak-dining-card-text">Casual dining with panoramic views.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                INCLUDED VS EXTRA COSTS (new section, own css)
            ══════════════════════════════════ */}
            <section className="vak-costs-section">
                <div className="vak-costs-container">
                    <div className="vak-costs-header">
                        <span className="medi-itinerary-eyebrow">TRANSPARENT PRICING</span>
                        <h2 className="medi-section-heading">Included vs Extra Costs</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vak-costs-grid">
                        <div className="vak-costs-card included">
                            <h3 className="vak-costs-card-heading">
                                <div className="vak-costs-icon-box"><CheckCircle size={20} /></div>
                                Included with Viking
                            </h3>
                            <ul className="vak-costs-list">
                                <li><CheckCircle size={17} /><span>One complimentary shore excursion in every port</span></li>
                                <li><Wifi size={17} /><span>Wi-Fi</span></li>
                                <li><Utensils size={17} /><span>Specialty dining</span></li>
                                <li><Wine size={17} /><span>Beer and wine with lunch and dinner</span></li>
                                <li><CheckCircle size={17} /><span>Port charges and fees</span></li>
                                <li><Landmark size={17} /><span>Educational lectures</span></li>
                            </ul>
                        </div>

                        <div className="vak-costs-card extra">
                            <h3 className="vak-costs-card-heading">
                                <div className="vak-costs-icon-box"><Minus size={20} /></div>
                                Additional Costs
                            </h3>
                            <ul className="vak-costs-list">
                                <li><MapPin size={17} /><span>Premium excursions</span></li>
                                <li><Heart size={17} /><span>Spa services</span></li>
                                <li><Wine size={17} /><span>Beverage packages</span></li>
                                <li><Plane size={17} /><span>Airfare (unless included in promotions)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                BEST TIME TO CRUISE — 5 months (new section, own css)
            ══════════════════════════════════ */}
            <section className="vak-season-section">
                <div className="vak-season-container">
                    <div className="vak-season-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>WHEN TO SAIL</span>
                        <h2 className="medi-section-heading">Best Time for a Viking Alaska Cruise</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vak-season-grid">
                        <div className="vak-season-card">
                            <div className="vak-season-icon-box"><Snowflake size={22} /></div>
                            <h3 className="vak-season-month">May</h3>
                            <p className="vak-season-text">Fewer crowds and beautiful spring scenery.</p>
                        </div>
                        <div className="vak-season-card peak">
                            <div className="vak-season-icon-box"><Sun size={22} /></div>
                            <h3 className="vak-season-month">June</h3>
                            <p className="vak-season-text">Long daylight hours and excellent wildlife viewing.</p>
                        </div>
                        <div className="vak-season-card peak">
                            <div className="vak-season-icon-box"><Sun size={22} /></div>
                            <h3 className="vak-season-month">July</h3>
                            <p className="vak-season-text">Warmest weather and peak Alaska season.</p>
                        </div>
                        <div className="vak-season-card peak">
                            <div className="vak-season-icon-box"><TreePine size={22} /></div>
                            <h3 className="vak-season-month">August</h3>
                            <p className="vak-season-text">Excellent wildlife activity and lush landscapes.</p>
                        </div>
                        <div className="vak-season-card">
                            <div className="vak-season-icon-box"><TreePine size={22} /></div>
                            <h3 className="vak-season-month">September</h3>
                            <p className="vak-season-text">Fall colors and fewer visitors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHO SHOULD / SHOULD NOT TAKE A VIKING ALASKA CRUISE
            ══════════════════════════════════ */}
            <section className="vak-traveler-section">
                <div className="vak-traveler-container">
                    <div className="vak-traveler-header">
                        <span className="medi-itinerary-eyebrow">IS VIKING RIGHT FOR YOU?</span>
                        <h2 className="medi-section-heading">Who Should Take a Viking Alaska Cruise?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vak-traveler-grid">
                        <div className="vak-traveler-card yes">
                            <h3 className="vak-traveler-card-heading"><CheckCircle size={20} /> Viking Alaska Cruises Are Ideal For</h3>
                            <ul className="vak-traveler-list">
                                {['Couples', 'Retirees', 'Empty nesters', 'Luxury travelers', 'Nature enthusiasts', 'Wildlife lovers', 'First-time Alaska visitors', 'Photographers'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="vak-traveler-card no">
                            <h3 className="vak-traveler-card-heading"><X size={20} /> Who May Prefer Another Cruise Line</h3>
                            <ul className="vak-traveler-list">
                                {['Families with young children', 'Travelers seeking waterslides', 'Guests wanting casinos', 'Travelers prioritizing nightlife'].map((item, i) => (
                                    <li key={i}><X size={17} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY BOOK THROUGH TRIPS & SHIPS
            ══════════════════════════════════ */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={ANGELA_PORTRAIT_IMG} alt="Angela Hughes - Luxury Cruise Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-eyebrow-container">
                                <Award size={16} className="medi-editorial-icon-badge" />
                                <span className="medi-editorial-eyebrow">EXPERT GUIDANCE</span>
                            </div>
                            <h2 className="medi-editorial-title">Why Book Through Trips &amp; Ships Luxury Travel?</h2>
                            <div className="medi-editorial-accent-bar"></div>
                            <p className="medi-editorial-lead-para">
                                Choosing the right Alaska cruise involves more than selecting a ship. Trips &amp; Ships Luxury Travel helps travelers navigate every decision with confidence.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Trips &amp; Ships Luxury Travel helps travelers:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Compare itineraries', 'Choose the best stateroom', 'Understand promotions', 'Arrange pre- and post-cruise travel', 'Plan Alaska land extensions'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                Led by Angela Hughes, our team helps travelers create unforgettable Alaska cruise vacations.
                            </p>
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
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
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
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Sail Alaska with Viking?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing the right Alaska cruise involves more than selecting a ship.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Led by Angela Hughes, our team helps travelers create unforgettable Alaska cruise vacations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Alaska & the Inside Passage', 'Alaska, British Columbia & Pacific Coast', 'Alaska Explorer Voyages', 'Glacier viewing & wildlife photography', 'First-time Alaska cruise planning'].map((item, idx) => (
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
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingAlaskaCruises