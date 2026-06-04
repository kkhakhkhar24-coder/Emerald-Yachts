import Navbar from '../../components/Navbar/Navbar'
import Profile_AH from '../../assets/Hxexpeditionsantarctica/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/Media (3).jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Waves, Snowflake, Camera, Wind,
    X, ZoomIn
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/Hxexpeditionsantarctica/Antarctica_Orne Harbour_KayFochtmann.jpg'
import hero2 from '../../assets/Hxexpeditionsantarctica/Antarctica_Damoy Point_KayFochtmann-3.jpg'
import hero3 from '../../assets/Hxexpeditionsantarctica/Antarctica_YuriChoufour.jpg'

// Gallery Images
import drakePassageSunset from '../../assets/Hxexpeditionsantarctica/20251222_Drake Passage_Sunset_Guest_KayFochtmann.jpg'
import deceptionIsland from '../../assets/Hxexpeditionsantarctica/Deception_Island_Antarctica_HX_36640.jpg'
import seaIceLanding from '../../assets/Hxexpeditionsantarctica/20191119_SEA ICE LANDING_2756_PRINT_BYANDREAKLAUSSNER.jpg'
import whalersBay from '../../assets/Hxexpeditionsantarctica/20260116_Antarctica_Deception Island_Whalers Bay_KayFochtmann-6.jpg'
import msNansenAerial from '../../assets/Hxexpeditionsantarctica/Aerial_photo_MS_Fridtjof_Nansen_HX_34605_Photo_Espen_Mills_v2RGB.jpg'
import msAmundsenSuite from '../../assets/Hxexpeditionsantarctica/md-expedition-suite-ms-roald-amundsen_v1RGB.jpg'
import msAmundsenSuite2 from '../../assets/Hxexpeditionsantarctica/md-expedition-suite-ms-roald-amundsen-2_v1RGB.jpg'
import cabin716 from '../../assets/Hxexpeditionsantarctica/20191023_CABIN 716_2884_BYANDREAKLAUSSNER.jpg'
import cabin576 from '../../assets/Hxexpeditionsantarctica/20191024_CABIN 576_2921_BYANDREAKLAUSSNER.jpg'
import penguinsAntarctica from '../../assets/Hxexpeditionsantarctica/penguins-in-antarctica.webp'
import whaleDiving from '../../assets/Hxexpeditionsantarctica/whale-diving-antarctica.webp'
import sealOnIce from '../../assets/Hxexpeditionsantarctica/seal-on-antarctic-ice.webp'

// Itinerary Section Images (unused assets)
import itiOrneIslands from '../../assets/Hxexpeditionsantarctica/20251206_Antarctica_Orne Islands_KayFochtmann.jpg'
import itiPetermannPenguins from '../../assets/Hxexpeditionsantarctica/20251223_Antarctica_Petermann Island_Gentoo Penguins_KayFochtmann-3.jpg'
import itiYalourCruising from '../../assets/Hxexpeditionsantarctica/20260102_Antarctica_Yalour Island_Cruising_KayFochtmann.jpg'
import itiDscPolar from '../../assets/Hxexpeditionsantarctica/DSC09923_V1RGB.jpg'

function HXExpeditionsAntarctica() {
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
    const [antarcticaHoveredCard, setAntarcticaHoveredCard] = useState(null)
    const [activeAntarcticaTab, setActiveAntarcticaTab] = useState(0)
    const [isMobileViewport, setIsMobileViewport] = useState(false)
    const [expHoverCard1, setExpHoverCard1] = useState(false)
    const [expHoverCard2, setExpHoverCard2] = useState(false)
    const [isIntroExpanded, setIsIntroExpanded] = useState(false)

    // Gallery States
    const [activeGalleryTab, setActiveGalleryTab] = useState('all')
    const [lightboxIndex, setLightboxIndex] = useState(null)

    const galleryItems = [
        {
            category: 'drake',
            categoryName: 'The Drake Passage',
            img: drakePassageSunset,
            title: 'Drake Passage Sunset',
            desc: 'A serene sunset over the Drake Passage, showcasing its calmer "Drake Lake" conditions.'
        },
        {
            category: 'drake',
            categoryName: 'The Drake Passage',
            img: deceptionIsland,
            title: 'Deception Island Entrance',
            desc: 'Sailing through Neptune\'s Bellows into the volcanic caldera of Deception Island.'
        },
        {
            category: 'drake',
            categoryName: 'The Drake Passage',
            img: seaIceLanding,
            title: 'Polar Sea Ice Navigation',
            desc: 'Navigating through thick sea ice fields in the early polar season.'
        },
        {
            category: 'drake',
            categoryName: 'The Drake Passage',
            img: whalersBay,
            title: 'Whalers Bay Landscape',
            desc: 'The rugged volcanic black sands and icy ruins at Deception Island\'s Whalers Bay.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: msNansenAerial,
            title: 'MS Fridtjof Nansen',
            desc: 'An aerial view of the state-of-the-art hybrid-powered polar expedition vessel.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: msAmundsenSuite,
            title: 'Expedition Suite Interior',
            desc: 'Scandinavian-inspired design on MS Roald Amundsen featuring premium comfort and materials.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: msAmundsenSuite2,
            title: 'Suite Balcony View',
            desc: 'Modern cabin layout with large panoramic windows and private balcony access.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: cabin716,
            title: 'Deck 7 Cabin 716',
            desc: 'Comfortable and stylishly appointed mid-ship cabin on the polar deck.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: cabin576,
            title: 'Deck 5 Cabin 576',
            desc: 'Elegant cabin design on Deck 5 optimized for polar explorers.'
        },
        {
            category: 'wildlife',
            categoryName: 'Wildlife Sightings',
            img: penguinsAntarctica,
            title: 'Gentoo Penguins',
            desc: 'A colony of curious penguins gathering on the rocky shores of the Antarctic Peninsula.'
        },
        {
            category: 'wildlife',
            categoryName: 'Wildlife Sightings',
            img: whaleDiving,
            title: 'Humpback Whale Dive',
            desc: 'A humpback whale showing its fluke before diving into the cold Southern Ocean.'
        },
        {
            category: 'wildlife',
            categoryName: 'Wildlife Sightings',
            img: sealOnIce,
            title: 'Leopard Seal',
            desc: 'A leopard seal resting peacefully on a floating ice floe.'
        }
    ]

    const filteredGalleryItems = galleryItems.filter(
        (item) => activeGalleryTab === 'all' || item.category === activeGalleryTab
    )

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev === 0 ? filteredGalleryItems.length - 1 : prev - 1));
            } else if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev === filteredGalleryItems.length - 1 ? 0 : prev + 1));
            } else if (e.key === 'Escape') {
                setLightboxIndex(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredGalleryItems.length]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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

    // --- EXACT DOC CONTENT ---

    const mediItineraries = [
        {
            title: 'Classic Antarctica Peninsula',
            img: itiOrneIslands,
            imgAlt: 'Antarctica Orne Islands – classic peninsula scenery',
            bestFor: [
                'First time travelers',
                'Best balance of expedition depth',
                'Wildlife and landing opportunities',
                'Best trip length and value'
            ],
            highlights: ['Drake Passage', 'Lemaire Channel', 'Paradise Bay', 'Zodiac landings', 'Penguin colonies']
        },
        {
            title: 'Antarctica & South Georgia',
            img: itiPetermannPenguins,
            imgAlt: 'Gentoo penguins at Petermann Island, Antarctica',
            bestFor: [
                'Travelers wanting deeper exploration',
                'Wildlife photography lovers',
                'Experienced expedition travelers',
                'Marine wildlife enthusiasts'
            ],
            highlights: ['South Georgia', 'King penguins', 'Albatross colonies', 'Shackleton history', 'Grytviken']
        },
        {
            title: 'Falklands + Antarctica',
            img: itiYalourCruising,
            imgAlt: 'Cruising near Yalour Islands, Antarctica',
            bestFor: [
                'Travelers wanting multiple ecosystems',
                'History enthusiasts',
                'Bird watchers',
                'Photography lovers'
            ],
            highlights: ['Stanley', 'Rockhopper penguins', 'Sea lions', 'Antarctic Peninsula', 'Unique wildlife']
        },
        {
            title: 'Extended Polar Expeditions',
            img: itiDscPolar,
            imgAlt: 'Dramatic polar wilderness scenery in Antarctica',
            bestFor: [
                'Seasoned expedition travelers',
                'Travelers with flexible schedules',
                'Deep polar explorers',
                'Ultimate bucket list seekers'
            ],
            highlights: ['South Sandwich Islands', 'Remote landings', 'Extended ice scenery', 'Rare wildlife', 'Polar wilderness']
        }
    ]

    const mediFaqs = [
        { question: 'Is Antarctica worth it for first time expedition travelers?', answer: 'Yes. Antarctica is widely considered one of the world\'s most extraordinary expedition destinations.' },
        { question: 'How rough is the Drake Passage?', answer: 'Conditions vary greatly. Some crossings are calm while others can be rough depending on weather.' },
        { question: 'What wildlife can you see in Antarctica?', answer: 'Penguins, whales, seals and seabirds are among the most common wildlife sightings.' },
        { question: 'What is the best month for Antarctica cruises?', answer: 'December and January are generally best for first time travelers.' },
        { question: 'Are HX Antarctica cruises luxury cruises?', answer: 'HX focuses more on expedition comfort and exploration than traditional ultra luxury cruising.' },
        { question: 'Do Antarctica cruises include Zodiac landings?', answer: 'Yes. Most HX Antarctica itineraries include regular Zodiac landings.' },
        { question: 'How cold is Antarctica during cruise season?', answer: 'Temperatures are often milder than expected, generally ranging from about 20°F to 40°F.' },
        { question: 'Do you need to be physically fit for Antarctica cruises?', answer: 'Moderate mobility is important for Zodiac boarding and shore landings.' },
        { question: 'What should I pack for Antarctica?', answer: 'Layered waterproof clothing, thermal gear, gloves and proper footwear are essential.' },
        { question: 'Are Antarctica landings guaranteed?', answer: 'No. Weather and ice conditions always determine landing safety.' },
        { question: 'Can you kayak in Antarctica?', answer: 'Some HX itineraries offer optional kayaking experiences.' },
        { question: 'Is Antarctica safe for travelers?', answer: 'Yes. Antarctica expedition travel is highly regulated and professionally managed.' },
        { question: 'How far in advance should Antarctica cruises be booked?', answer: 'Ideally 12 to 18 months in advance for best cabin selection and pricing.' },
        { question: 'What is the difference between expedition cruises and regular cruises?', answer: 'Expedition cruises focus on exploration, education and destination immersion rather than onboard entertainment.' },
        { question: 'Why should I use a travel advisor for Antarctica cruises?', answer: 'Antarctica trips involve complex logistics, ship differences and itinerary planning where expert guidance is extremely valuable.' }
    ]

    const mediMistakes = [
        {
            title: 'Choosing the Wrong Itinerary Length',
            desc: 'Many first time travelers make the mistake of choosing too short an itinerary. The classic Antarctica Peninsula offers the best balance of expedition depth, wildlife, landing opportunities, trip length and value.',
            bullets: [
                'First-timers: classic peninsula is ideal',
                'Deeper explorers: consider South Georgia extensions'
            ]
        },
        {
            title: 'Underestimating the Drake Passage',
            desc: 'The Drake Passage is one of the biggest concerns for first time Antarctica travelers. Located between South America and Antarctica, this ocean crossing can vary dramatically. Travelers should prepare for possible motion sickness.'
        },
        {
            title: 'Booking Based Only on Price',
            desc: 'Choosing ships that do not fit their travel style is a common and costly mistake. Ship quality, expedition team expertise, cabin location, and itinerary depth vary significantly across Antarctica operators.'
        },
        {
            title: 'Waiting Too Long to Reserve Cabins',
            desc: 'Popular Antarctica sailings — especially December and January departures — often sell out 12 to 18 months in advance. Early booking secures the best cabins and pricing.'
        }
    ]

    const hxSchemaData =
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-antarctica-cruises",
                "name": "HX Expeditions Antarctica Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/hx-expeditions-antarctica-cruises",
                "description": "Explore HX Expeditions Antarctica cruises with expert guidance from Trips & Ships Luxury Travel. Learn about Drake Passage crossings, wildlife, ships, seasons and Antarctica cruise planning.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
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
                "headline": "HX Expeditions Antarctica Cruises",
                "description": "Complete guide to HX Expeditions Antarctica cruises including Drake Passage crossings, wildlife, ships, itineraries and planning advice.",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-antarctica-cruises"
                }
            },
            {
                "@type": "Service",
                "name": "Antarctica Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Antarctica Cruise Planning",
                "description": "Expert Antarctica cruise planning services including HX Expeditions recommendations, itinerary guidance and expedition travel consulting."
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
                        "name": "HX Expeditions Antarctica Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions-antarctica-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Antarctica worth it for first time expedition travelers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Antarctica is widely considered one of the world's most extraordinary expedition destinations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How rough is the Drake Passage?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Conditions vary greatly. Some crossings are calm while others can be rough depending on weather."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What wildlife can you see in Antarctica?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Penguins, whales, seals and seabirds are among the most common wildlife sightings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best month for Antarctica cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "December and January are generally best for first time travelers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are HX Antarctica cruises luxury cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "HX focuses more on expedition comfort and exploration than traditional ultra luxury cruising."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do Antarctica cruises include Zodiac landings?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most HX Antarctica itineraries include regular Zodiac landings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How cold is Antarctica during cruise season?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Temperatures are often milder than expected, generally ranging from about 20°F to 40°F."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you need to be physically fit for Antarctica cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Moderate mobility is important for Zodiac boarding and shore landings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I pack for Antarctica?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Layered waterproof clothing, thermal gear, gloves and proper footwear are essential."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Antarctica landings guaranteed?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Weather and ice conditions always determine landing safety."
                        }
                    }
                ]
            }
        ]
    }


    return (
        <>
            <Helmet>
                <title>HX Expeditions Antarctica Cruises | Drake Passage, Wildlife & First Timer Guide
                </title>
                <meta name="title" content="HX Expeditions Antarctica Cruises | Luxury Antarctica Expedition Experts
" />
                <meta name="description" content="Explore HX Expeditions Antarctica cruises with expert guidance from Trips & Ships Luxury Travel. Learn about Drake Passage crossings, wildlife, ships, seasons and Antarctica cruise planning." />
                <meta name="keywords" content="HX Expeditions Antarctica Cruises, Antarctica expedition cruises
, HX Antarctica cruises
, Antarctica luxury expedition, Drake Passage cruise, Antarctica small ship cruises" />
                <script type="application/ld+json">{JSON.stringify(hxSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
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
                        <span>Polar Expedition Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        HX Expeditions Antarctica Cruises
                    </h1>
                </div>
            </section>

            {/* ── PREMIUM INTRO ── */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
                    .medi-premium-editorial-block::-webkit-scrollbar {
                        width: 6px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb {
                        background: rgba(39, 68, 114, 0.2);
                        border-radius: 3px;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover {
                        background: rgba(39, 68, 114, 0.4);
                    }
                `}</style>
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                        }}>
                            <span className="medi-premium-mini-badge">ONCE IN A LIFETIME EXPEDITION</span>
                            <h2 className="medi-premium-heading">Antarctica Is Not Just Another Cruise Destination</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Antarctica changes travelers. For many guests, it becomes the single most unforgettable travel experience of their lives. Towering glaciers, massive icebergs, penguin colonies, breaching whales and the silence of the White Continent create a type of travel experience few destinations on Earth can match.
                            </p>

                            <div style={{
                                maxHeight: isIntroExpanded ? '1000px' : '0px',
                                opacity: isIntroExpanded ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in-out',
                            }}>
                                <p className="medi-premium-lead-text">
                                    HX Expeditions Antarctica cruises are designed for travelers who want true exploration, not simply scenic cruising from a distance. These voyages focus on immersive expedition travel with Zodiac landings, wildlife encounters, educational programming and flexible daily exploration shaped by weather and ice conditions.
                                </p>

                                <p className="medi-premium-lead-text">
                                    At Trips & Ships Luxury Travel, we help travelers navigate the complexities of Antarctica expedition planning so they choose the right itinerary, ship, season and expedition style based on their comfort level, travel goals and expectations.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#1a5fa8',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '8px 0',
                                    marginBottom: '20px',
                                    transition: 'color 0.2s ease',
                                    outline: 'none'
                                }}
                            >
                                <span>{isIntroExpanded ? 'Read Less' : 'Read More'}</span>
                                <ChevronRight
                                    size={16}
                                    style={{
                                        transform: isIntroExpanded ? 'rotate(90deg)' : 'none',
                                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                />
                            </button>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    Luxury travel today is increasingly about access, transformation and meaningful experiences. Antarctica delivers:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: Globe, label: 'Extreme remoteness' },
                                        { icon: Star, label: 'Wildlife encounters' },
                                        { icon: Compass, label: 'Rare expedition experiences' },
                                        { icon: Heart, label: 'Emotional impact' },
                                        { icon: Ship, label: 'Adventure with comfort' },
                                        { icon: Anchor, label: 'Small ship exploration' },
                                        { icon: Sparkles, label: 'Once in a lifetime memories' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box"><Icon size={20} /></div>
                                            <span className="medi-immersion-card-title">{label}</span>
                                        </div>
                                    ))}
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
                                    With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team bring expert expedition guidance travelers can trust.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        For sophisticated travelers who have already visited Europe, the Caribbean and major luxury cruise destinations, Antarctica often becomes the next extraordinary frontier.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHY HX EXCELS ── */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">POLAR EXPEDITION // HX EXPEDITIONS ANTARCTICA</div>
                <div className="medi-excel-coord coord-tr">90.0000° S, 0.0000° W</div>
                <div className="medi-excel-coord coord-bl">54.2500° S, 36.5000° W</div>
                <div className="medi-excel-coord coord-br">51.7000° S, 57.8500° W</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>

                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Why Choose HX Expeditions For Antarctica?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            HX Expeditions is one of the most established names in expedition travel, with roots dating back to 1896.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Unlike conventional cruise lines, HX specializes in exploration focused voyages built around:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Star, label: 'Wildlife encounters' },
                                        { icon: GraduationCap, label: 'Science and education' },
                                        { icon: Waves, label: 'Expedition landings' },
                                        { icon: Users, label: 'Expert expedition teams' },
                                        { icon: Calendar, label: 'Flexible exploration schedules' },
                                        { icon: MapPin, label: 'Remote destination access' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    HX ships also appeal to environmentally conscious luxury travelers seeking:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Ship, label: 'Smaller ships than mainstream vessels' },
                                        { icon: Compass, label: 'Deeper destination immersion' },
                                        { icon: Globe, label: 'More authentic expedition experiences' },
                                        { icon: Sparkles, label: 'Modern hybrid expedition ships' },
                                        { icon: Crown, label: 'Sustainable expedition travel' },
                                        { icon: Gem, label: 'Eco-conscious polar travel' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            HX ships are intentionally smaller than mainstream cruise vessels, allowing deeper destination immersion and more authentic expedition experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES HX DIFFERENT ── */}
            <section style={{
                background: 'linear-gradient(180deg, var(--bg-light) 0%, var(--bg-light2) 100%)',
                backgroundImage: 'radial-gradient(var(--navy-border) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                borderTop: '1px solid var(--navy-border)',
                borderBottom: '1px solid var(--navy-border)',
                padding: isMobileViewport ? '60px 16px' : '100px 24px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <style>{`
                    .drake-passage-tabs::-webkit-scrollbar {
                        height: 5px;
                    }
                    .drake-passage-tabs::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .drake-passage-tabs::-webkit-scrollbar-thumb {
                        background: rgba(39, 68, 114, 0.3);
                        border-radius: 3px;
                    }
                    .drake-passage-tabs::-webkit-scrollbar-thumb:hover {
                        background: rgba(39, 68, 114, 0.5);
                    }
                    @media (max-width: 600px) {
                        .drake-passage-wildlife-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
                {/* Polar Glowing Auras using root colors */}
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    // background: 'radial-gradient(circle, var(--navy-light) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--navy-soft) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}></div>

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    boxSizing: 'border-box'
                }}>
                    <div className="drake-passage-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1.6fr',
                        gap: '40px',
                        width: '100%',
                        boxSizing: 'border-box',
                        alignItems: 'start'
                    }}>
                        {/* Left Column: Navigation Console */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            position: isMobileViewport ? 'static' : 'sticky',
                            top: '100px',
                            zIndex: 5,
                            minWidth: 0,
                            maxWidth: '100%',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{ textAlign: isMobileViewport ? 'center' : 'left' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    // background: 'var(--navy-soft)',
                                    // border: '1px solid var(--navy-border)',
                                    padding: '6px 16px',
                                    borderRadius: '100px',
                                    marginBottom: '16px'
                                }}>
                                    <Compass size={14} />
                                    <span style={{
                                        // color: 'var(--bg-soft)',
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase'
                                    }}>
                                        EXPEDITION DATA DECK
                                    </span>
                                </div>
                                <h2 style={{
                                    // color: 'var(--navy-light)',
                                    // fontSize: isMobileViewport ? '1.6rem' : 'clamp(1.9rem, 3.5vw, 2.6rem)',
                                    fontWeight: '500',
                                    lineHeight: '1.25',
                                    margin: '0 0 16px 0',
                                    fontFamily: 'var(--font-display)',
                                    // textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                                    wordBreak: 'break-word',
                                    overflowWrap: 'break-word'
                                }}>
                                    Understanding The Drake Passage & Antarctica Expedition Travel
                                </h2>
                                <p style={{
                                    // color: 'var(--bg-soft)',
                                    fontSize: '0.95rem',
                                    margin: '0 0 24px 0',
                                    lineHeight: '1.6',
                                    fontWeight: '400'
                                }}>
                                    Select a topic below to explore the essential elements of an Antarctic polar voyage.
                                </p>
                            </div>

                            {/* Tab Buttons Stack */}
                            <div className="drake-passage-tabs" style={{
                                display: 'flex',
                                flexDirection: isMobileViewport ? 'row' : 'column',
                                gap: '12px',
                                overflowX: isMobileViewport ? 'auto' : 'visible',
                                paddingBottom: isMobileViewport ? '12px' : '0',
                                scrollSnapType: isMobileViewport ? 'x mandatory' : 'none',
                                maxWidth: '100%',
                                minWidth: 0,
                                boxSizing: 'border-box'
                            }}>
                                {[
                                    { number: '01', title: 'The Drake Passage', desc: 'Ocean crossing details' },
                                    { number: '02', title: 'HX Polar Ships', desc: 'MS Amundsen & MS Nansen' },
                                    { number: '03', title: 'Wildlife Sightings', desc: 'Penguins, whales & seals' }
                                ].map((tab, idx) => {
                                    const isActive = activeAntarcticaTab === idx;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveAntarcticaTab(idx)}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '20px 24px',
                                                background: isActive ? 'var(--bg-dark2)' : 'transparent',
                                                border: isActive ? '1px solid var(--bg-soft)' : '1px solid var(--navy-border)',
                                                borderRadius: '16px',
                                                cursor: 'pointer',
                                                textAlign: 'left',
                                                width: isMobileViewport ? '260px' : '100%',
                                                flexShrink: 0,
                                                scrollSnapAlign: 'start',
                                                transform: isActive && !isMobileViewport ? 'translateX(8px)' : 'translateX(0)',
                                                boxShadow: isActive ? 'var(--shadow-lg)' : 'none',
                                                transition: 'var(--transition)',
                                                outline: 'none'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <span style={{
                                                    fontSize: '1.25rem',
                                                    fontWeight: '800',
                                                    color: isActive ? 'var(--bg-white)' : 'var(--text-muted)',
                                                    fontFamily: 'monospace'
                                                }}>
                                                    {tab.number}
                                                </span>
                                                <div>
                                                    <div style={{
                                                        fontSize: '0.95rem',
                                                        fontWeight: '700',
                                                        color: isActive ? 'var(--bg-white)' : 'var(--text-muted)'
                                                    }}>
                                                        {tab.title}
                                                    </div>
                                                    {!isMobileViewport && (
                                                        <div style={{
                                                            fontSize: '0.75rem',
                                                            color: isActive ? 'var(--bg-soft)' : 'var(--text-muted)',
                                                            marginTop: '4px'
                                                        }}>
                                                            {tab.desc}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: isActive ? 'var(--bg-soft)' : 'var(--navy-border)',
                                                boxShadow: isActive ? '0 0 10px var(--bg-soft)' : 'none',
                                                transition: 'var(--transition)'
                                            }} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Console Screen */}
                        <div style={{
                            background: 'var(--bg-dark2)',
                            border: '1px solid var(--navy-border)',
                            borderRadius: '24px',
                            padding: isMobileViewport ? '24px' : '48px',
                            boxShadow: 'var(--shadow-lg)',
                            minHeight: '450px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                            overflow: 'hidden',
                            boxSizing: 'border-box'
                        }}>
                            {/* Sleek coordinate grid background overlay */}
                            <div style={{
                                position: 'absolute',
                                bottom: '24px',
                                right: '28px',
                                color: 'var(--navy-soft)',
                                fontFamily: 'monospace',
                                fontSize: '11px',
                                fontWeight: '700',
                                letterSpacing: '2px',
                                pointerEvents: 'none',
                                zIndex: 1
                            }}>
                                ANTARCTICA EXPEDITION // 60.0000° S, 65.0000° W
                            </div>

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                {activeAntarcticaTab === 0 && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '12px',
                                                background: 'var(--navy-soft)',
                                                border: '1px solid var(--navy-border)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Waves size={22} color="var(--bg-soft)" />
                                            </div>
                                            <h3 style={{
                                                color: 'var(--bg-white)',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                margin: 0
                                            }}>
                                                Understanding The Drake Passage
                                            </h3>
                                        </div>
                                        <p style={{
                                            color: 'var(--bg-soft)',
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                            margin: '0 0 28px 0',
                                            fontWeight: '300'
                                        }}>
                                            The Drake Passage is one of the biggest concerns for first time Antarctica travelers. Located between South America and Antarctica, this ocean crossing can vary dramatically depending on weather conditions.
                                        </p>

                                        <div style={{ marginBottom: '28px' }}>
                                            <p style={{
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                color: 'var(--text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1.5px',
                                                margin: '0 0 12px 0'
                                            }}>
                                                Travelers often hear two phrases:
                                            </p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                                <div style={{
                                                    background: 'var(--navy-soft)',
                                                    border: '1px solid var(--navy-border)',
                                                    padding: '12px 20px',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                }}>
                                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--bg-soft)' }} />
                                                    <span style={{ color: 'var(--bg-white)', fontSize: '0.9rem', fontWeight: '600' }}>
                                                        The Drake Lake (calm crossing)
                                                    </span>
                                                </div>
                                                <div style={{
                                                    background: 'var(--bg-dark)',
                                                    border: '1px solid var(--navy-border)',
                                                    padding: '12px 20px',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                }}>
                                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                                                    <span style={{ color: 'var(--bg-soft)', fontSize: '0.9rem', fontWeight: '600' }}>
                                                        The Drake Shake (rough crossing)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p style={{
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                color: 'var(--text-muted)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1.5px',
                                                margin: '0 0 14px 0'
                                            }}>
                                                Most Antarctica itineraries spend two days crossing in each direction. Modern HX expedition ships feature:
                                            </p>
                                            <ul style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: 0,
                                                display: 'grid',
                                                gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                                                gap: '14px'
                                            }}>
                                                {[
                                                    'Advanced stabilizers',
                                                    'Polar navigation technology',
                                                    'Fly-cruise options available'
                                                ].map((item, i) => (
                                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <CheckCircle size={16} color="var(--bg-soft)" style={{ flexShrink: 0 }} />
                                                        <span style={{ color: 'var(--bg-white)', fontSize: '0.92rem' }}>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeAntarcticaTab === 1 && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '12px',
                                                background: 'var(--navy-soft)',
                                                border: '1px solid var(--navy-border)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Ship size={22} color="var(--bg-soft)" />
                                            </div>
                                            <h3 style={{
                                                color: 'var(--bg-white)',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                margin: 0
                                            }}>
                                                HX Antarctica Ships
                                            </h3>
                                        </div>

                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                                            gap: '32px'
                                        }}>
                                            {/* MS Roald Amundsen */}
                                            <div style={{
                                                background: 'var(--bg-dark)',
                                                border: '1px solid var(--navy-border)',
                                                borderRadius: '16px',
                                                padding: '24px'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                                    <span style={{
                                                        background: 'var(--navy-soft)',
                                                        border: '1px solid var(--navy-border)',
                                                        color: 'var(--bg-soft)',
                                                        padding: '4px 8px',
                                                        borderRadius: '6px',
                                                        fontSize: '9px',
                                                        fontWeight: '800',
                                                        letterSpacing: '1px',
                                                        textTransform: 'uppercase'
                                                    }}>
                                                        HYBRID
                                                    </span>
                                                    <h4 style={{
                                                        color: 'var(--bg-white)',
                                                        fontSize: '0.95rem',
                                                        fontWeight: '700',
                                                        margin: 0
                                                    }}>
                                                        MS ROALD AMUNDSEN
                                                    </h4>
                                                </div>
                                                <p style={{
                                                    color: 'var(--bg-soft)',
                                                    fontSize: '0.88rem',
                                                    lineHeight: '1.6',
                                                    margin: '0 0 16px 0',
                                                    fontWeight: '300'
                                                }}>
                                                    One of the world's first hybrid powered expedition ships featuring modern Scandinavian design and advanced expedition technology.
                                                </p>
                                                <p style={{
                                                    fontSize: '0.7rem',
                                                    fontWeight: '700',
                                                    color: 'var(--text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    margin: '0 0 8px 0'
                                                }}>
                                                    Best for:
                                                </p>
                                                <ul style={{
                                                    listStyle: 'none',
                                                    padding: 0,
                                                    margin: 0,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                }}>
                                                    {['Comfortable expedition travel', 'Modern amenities', 'Eco conscious travelers'].map((item, i) => (
                                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                            <CheckCircle size={13} color="var(--bg-soft)" style={{ flexShrink: 0 }} />
                                                            <span style={{ color: 'var(--bg-white)', fontSize: '0.85rem' }}>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* MS Fridtjof Nansen */}
                                            <div style={{
                                                background: 'var(--bg-dark)',
                                                border: '1px solid var(--navy-border)',
                                                borderRadius: '16px',
                                                padding: '24px'
                                            }}>
                                                <h4 style={{
                                                    color: 'var(--bg-white)',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '700',
                                                    margin: '0 0 12px 0'
                                                }}>
                                                    MS Fridtjof Nansen
                                                </h4>
                                                <p style={{
                                                    color: 'var(--bg-soft)',
                                                    fontSize: '0.88rem',
                                                    lineHeight: '1.6',
                                                    margin: '0 0 16px 0',
                                                    fontWeight: '300'
                                                }}>
                                                    A sister ship to Roald Amundsen offering immersive expedition experiences with modern comfort.
                                                </p>
                                                <p style={{
                                                    fontSize: '0.7rem',
                                                    fontWeight: '700',
                                                    color: 'var(--text-muted)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    margin: '0 0 8px 0'
                                                }}>
                                                    Best for:
                                                </p>
                                                <ul style={{
                                                    listStyle: 'none',
                                                    padding: 0,
                                                    margin: 0,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                }}>
                                                    {['Travelers wanting expedition comfort', 'Educational enrichment', 'Polar exploration'].map((item, i) => (
                                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                            <CheckCircle size={13} color="var(--bg-soft)" style={{ flexShrink: 0 }} />
                                                            <span style={{ color: 'var(--bg-white)', fontSize: '0.85rem' }}>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeAntarcticaTab === 2 && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '12px',
                                                background: 'var(--navy-soft)',
                                                border: '1px solid var(--navy-border)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Camera size={22} color="var(--bg-soft)" />
                                            </div>
                                            <h3 style={{
                                                color: 'var(--bg-white)',
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                margin: 0
                                            }}>
                                                Antarctica Wildlife Experiences
                                            </h3>
                                        </div>
                                        <p style={{
                                            color: 'var(--bg-soft)',
                                            fontSize: '1rem',
                                            lineHeight: '1.7',
                                            margin: '0 0 24px 0',
                                            fontWeight: '300'
                                        }}>
                                            Wildlife is one of the biggest reasons travelers choose Antarctica expeditions. Common sightings may include:
                                        </p>

                                        <ul className="drake-passage-wildlife-grid" style={{
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: 0,
                                            display: 'grid',
                                            gridTemplateColumns: isMobileViewport ? '1fr 1fr' : '1fr 1fr 1fr',
                                            gap: '14px',
                                            marginBottom: '28px'
                                        }}>
                                            {[
                                                'Gentoo penguins',
                                                'Chinstrap penguins',
                                                'Adelie penguins',
                                                'Humpback whales',
                                                'Orcas',
                                                'Leopard seals',
                                                'Crabeater seals',
                                                'Albatross',
                                                'Massive seabird colonies',
                                            ].map((item, i) => (
                                                <li key={i} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    background: 'var(--bg-dark)',
                                                    border: '1px solid var(--navy-border)',
                                                    padding: '12px 14px',
                                                    borderRadius: '10px'
                                                }}>
                                                    <span style={{
                                                        background: 'var(--navy-soft)',
                                                        border: '1px solid var(--navy-border)',
                                                        color: 'var(--bg-soft)',
                                                        padding: '2px 6px',
                                                        borderRadius: '4px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: '700',
                                                        fontFamily: 'monospace'
                                                    }}>
                                                        0{i + 1}
                                                    </span>
                                                    <span style={{ color: 'var(--bg-white)', fontSize: '0.85rem', fontWeight: '500' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{
                                            background: 'var(--navy-soft)',
                                            borderLeft: '3px solid var(--bg-soft)',
                                            padding: '16px',
                                            borderRadius: '0 12px 12px 0'
                                        }}>
                                            <p style={{
                                                color: 'var(--bg-white)',
                                                fontSize: '0.85rem',
                                                fontStyle: 'italic',
                                                margin: 0,
                                                lineHeight: '1.5'
                                            }}>
                                                Wildlife encounters vary by itinerary, season and weather conditions.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION PHOTO GALLERY SECTION ── */}
            <section className="antarctica-gallery-section" style={{
                backgroundImage: 'radial-gradient(rgba(39, 68, 114, 0.15) 1px, transparent 1px), linear-gradient(180deg, var(--bg-dark2) 0%, #030810 100%)',
                backgroundSize: '32px 32px, 100% 100%',
                borderTop: '1px solid var(--navy-border)',
                borderBottom: '1px solid var(--navy-border)',
                padding: isMobileViewport ? '60px 16px' : '100px 24px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <style>{`
                    /* Southern Lights Animation */
                    @keyframes auroraPulse {
                        0% {
                            transform: scale(1) translate(0, 0) rotate(0deg);
                            opacity: 0.1;
                        }
                        50% {
                            transform: scale(1.1) translate(20px, -15px) rotate(3deg);
                            opacity: 0.2;
                            filter: hue-rotate(15deg);
                        }
                        100% {
                            transform: scale(0.95) translate(-10px, 10px) rotate(-3deg);
                            opacity: 0.1;
                        }
                    }

                    .aurora-glow-1 {
                        animation: auroraPulse 14s infinite alternate ease-in-out;
                    }
                    .aurora-glow-2 {
                        animation: auroraPulse 18s infinite alternate ease-in-out-reverse;
                    }

                    /* Glass Floating control dock for filters */
                    .gallery-filter-dock {
                        background: rgba(15, 28, 46, 0.45);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        border: 1px solid rgba(39, 68, 114, 0.4);
                        border-radius: 100px;
                        padding: 6px;
                        display: inline-flex;
                        gap: 6px;
                        flex-wrap: wrap;
                        justify-content: center;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05);
                    }

                    @media (max-width: 768px) {
                        .gallery-filter-dock {
                            border-radius: 20px;
                            padding: 10px;
                            width: 100%;
                            max-width: 480px;
                        }
                    }

                    .gallery-tab-btn {
                        background: transparent;
                        border: 1px solid transparent;
                        color: var(--text-muted);
                        padding: 10px 24px;
                        border-radius: 100px;
                        font-size: 0.88rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        outline: none;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .gallery-tab-btn:hover {
                        color: var(--bg-white);
                        background: rgba(255, 255, 255, 0.04);
                    }
                    .gallery-tab-btn.active {
                        background: var(--bg-soft);
                        border-color: rgba(255, 255, 255, 0.1);
                        color: var(--bg-dark2);
                        box-shadow: 0 4px 16px rgba(231, 243, 245, 0.25);
                    }

                    /* Smooth card entrance when switching tabs */
                    @keyframes cardEntrance {
                        from {
                            opacity: 0;
                            transform: translateY(20px) scale(0.96);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    /* Premium Card Design with Frosted Glass Footer */
                    .gallery-card {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        border: 1px solid rgba(39, 68, 114, 0.4);
                        background: rgba(15, 28, 46, 0.3);
                        cursor: pointer;
                        transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                        animation: cardEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
                    }

                    .gallery-card:hover {
                        transform: translateY(-6px);
                        border-color: var(--bg-soft);
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(231, 243, 245, 0.12);
                    }

                    .gallery-image-wrapper {
                        position: relative;
                        width: 100%;
                        aspect-ratio: 4/3;
                        overflow: hidden;
                    }

                    .gallery-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    .gallery-card:hover .gallery-image {
                        transform: scale(1.08);
                    }

                    /* Category Badge on Image */
                    .gallery-category-badge {
                        position: absolute;
                        top: 16px;
                        left: 16px;
                        background: rgba(3, 8, 16, 0.55);
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        color: var(--bg-soft);
                        padding: 6px 12px;
                        border-radius: 30px;
                        font-size: 10px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        z-index: 4;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        pointer-events: none;
                        transition: all 0.3s ease;
                    }

                    .gallery-card:hover .gallery-category-badge {
                        background: rgba(231, 243, 245, 0.95);
                        color: var(--bg-dark2);
                        border-color: var(--bg-soft);
                        box-shadow: 0 4px 12px rgba(231, 243, 245, 0.2);
                    }

                    /* Glass Details Footer Overlay */
                    .gallery-card-footer {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(to top, rgba(3, 8, 16, 0.98) 0%, rgba(3, 8, 16, 0.8) 60%, rgba(3, 8, 16, 0) 100%);
                        padding: 24px;
                        z-index: 3;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        border-top: 1px solid transparent;
                    }

                    .gallery-card:hover .gallery-card-footer {
                        background: rgba(3, 8, 16, 0.96);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        border-top: 1px solid rgba(255, 255, 255, 0.06);
                    }

                    .gallery-card-title {
                        color: var(--bg-white);
                        font-size: 1.15rem;
                        font-weight: 700;
                        margin: 0;
                        font-family: var(--font-body);
                        transition: color 0.3s ease;
                    }

                    .gallery-card:hover .gallery-card-title {
                        color: var(--bg-soft);
                    }

                    .gallery-card-desc {
                        max-height: 0;
                        opacity: 0;
                        overflow: hidden;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        margin: 0;
                        font-size: 0.82rem;
                        color: var(--text-muted);
                        line-height: 1.5;
                    }

                    .gallery-card:hover .gallery-card-desc {
                        max-height: 80px;
                        opacity: 1;
                        margin-top: 10px;
                    }

                    /* Zoom Hover Indicator */
                    .gallery-zoom-indicator {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: rgba(3, 8, 16, 0.55);
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: var(--bg-soft);
                        opacity: 0;
                        transform: scale(0.8);
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        z-index: 4;
                    }

                    .gallery-card:hover .gallery-zoom-indicator {
                        opacity: 1;
                        transform: scale(1);
                        background: var(--bg-soft);
                        color: var(--bg-dark2);
                        border-color: var(--bg-soft);
                        box-shadow: 0 4px 12px rgba(231, 243, 245, 0.2);
                    }

                    /* Lightbox Premium Styling */
                    .lightbox-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(3, 8, 16, 0.96);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        z-index: 99999;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                        animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    /* Floating Lightbox Navigation Buttons */
                    .lightbox-nav-btn {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(3, 8, 16, 0.6);
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        border-radius: 50%;
                        width: 52px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        z-index: 1000000;
                        outline: none;
                        box-shadow: 0 8px 24px rgba(0,0,0,0.5);
                    }
                    .lightbox-nav-btn:hover {
                        background: var(--bg-soft);
                        color: var(--bg-dark2);
                        border-color: var(--bg-soft);
                        transform: translateY(-50%) scale(1.1);
                        box-shadow: 0 0 20px rgba(231, 243, 245, 0.4);
                    }
                    .lightbox-nav-btn:active {
                        transform: translateY(-50%) scale(0.95);
                    }
                    .lightbox-nav-btn.btn-prev {
                        left: -80px;
                    }
                    .lightbox-nav-btn.btn-next {
                        right: -80px;
                    }
                    @media (max-width: 1100px) {
                        .lightbox-nav-btn.btn-prev {
                            left: 16px;
                        }
                        .lightbox-nav-btn.btn-next {
                            right: 16px;
                        }
                    }
                `}</style>

                {/* Animated Auroral glows simulating Southern Lights */}
                <div className="aurora-glow-1" style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39, 68, 114, 0.2) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />
                <div className="aurora-glow-2" style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(231, 243, 245, 0.05) 0%, transparent 70%)',
                    filter: 'blur(110px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />

                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, width: '100%', boxSizing: 'border-box' }}>

                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            color: '#e7f3f5',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            padding: '8px 20px',
                            borderRadius: '100px',
                            marginBottom: '20px',
                            textTransform: 'uppercase'
                        }}>
                            <Camera size={12} color="#e7f3f5" />
                            Visualizing the Expedition
                        </span>
                        <h2 style={{
                            color: '#ffffff',
                            fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                            fontWeight: '800',
                            margin: '0 0 16px',
                            fontFamily: 'var(--font-display)',
                            lineHeight: '1.2',
                            letterSpacing: '-0.5px'
                        }}>
                            Antarctica Expedition Photo Gallery
                        </h2>
                        <div style={{
                            width: '60px',
                            height: '3px',
                            background: 'var(--bg-soft)',
                            margin: '0 auto 20px',
                            borderRadius: '2px'
                        }} />
                        <p style={{
                            color: '#cbd5e1',
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontWeight: '300',
                            lineHeight: '1.7',
                            opacity: 0.95
                        }}>
                            Explore high-definition captures of the voyage, modern polar vessel details, and incredible polar wildlife encounters.
                        </p>
                    </div>

                    {/* Glass Floating Control Dock for Filter Tabs */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '50px'
                    }}>
                        <div className="gallery-filter-dock">
                            {[
                                { id: 'all', label: 'All Photos', icon: <Globe size={14} /> },
                                { id: 'drake', label: 'The Drake Passage', icon: <Waves size={14} /> },
                                { id: 'ships', label: 'HX Polar Ships', icon: <Ship size={14} /> },
                                { id: 'wildlife', label: 'Wildlife Sightings', icon: <Camera size={14} /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    className={`gallery-tab-btn ${activeGalleryTab === tab.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveGalleryTab(tab.id);
                                        setLightboxIndex(null); // Close lightbox when tab changes to avoid indices shifting
                                    }}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport
                            ? '1fr'
                            : 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '24px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {filteredGalleryItems.map((item, idx) => (
                            <div
                                key={`${item.title}-${activeGalleryTab}`} // Changing key based on tab forces React to remount, triggering CSS animation
                                className="gallery-card"
                                onClick={() => setLightboxIndex(idx)}
                            >
                                <div className="gallery-image-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Category badge displayed on image */}
                                <div className="gallery-category-badge">
                                    {item.category === 'drake' && <Waves size={12} />}
                                    {item.category === 'ships' && <Ship size={12} />}
                                    {item.category === 'wildlife' && <Camera size={12} />}
                                    <span>{item.categoryName}</span>
                                </div>

                                {/* Zoom hover button */}
                                <div className="gallery-zoom-indicator">
                                    <ZoomIn size={16} />
                                </div>

                                {/* Glass Details Footer */}
                                <div className="gallery-card-footer">
                                    <h3 className="gallery-card-title">
                                        {item.title}
                                    </h3>
                                    <p className="gallery-card-desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {lightboxIndex !== null && (
                    <div
                        className="lightbox-overlay"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <div
                            style={{
                                position: 'relative',
                                maxWidth: '900px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setLightboxIndex(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-55px',
                                    right: '0',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    borderRadius: '50%',
                                    width: '42px',
                                    height: '42px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    outline: 'none',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                                    e.currentTarget.style.transform = 'scale(1.05)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                                    e.currentTarget.style.transform = 'scale(1)'
                                }}
                            >
                                <X size={20} />
                            </button>

                            {/* Left Navigation Arrow */}
                            <button
                                className="lightbox-nav-btn btn-prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(prev => (prev === 0 ? filteredGalleryItems.length - 1 : prev - 1));
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                            </button>

                            {/* Right Navigation Arrow */}
                            <button
                                className="lightbox-nav-btn btn-next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(prev => (prev === filteredGalleryItems.length - 1 ? 0 : prev + 1));
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Lightbox Image Frame */}
                            <div style={{
                                position: 'relative',
                                maxWidth: '100%',
                                maxHeight: '70vh',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8)'
                            }}>
                                <img
                                    src={filteredGalleryItems[lightboxIndex].img}
                                    alt={filteredGalleryItems[lightboxIndex].title}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '70vh',
                                        display: 'block',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            {/* Caption details panel */}
                            <div style={{
                                marginTop: '24px',
                                textAlign: 'center',
                                maxWidth: '650px',
                                background: 'rgba(15, 28, 46, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                padding: '20px 30px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}>
                                <span style={{
                                    fontSize: '10px',
                                    fontWeight: '700',
                                    color: 'var(--bg-soft)',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    marginBottom: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    fontFamily: 'monospace'
                                }}>
                                    {filteredGalleryItems[lightboxIndex].category === 'drake' && <Waves size={12} />}
                                    {filteredGalleryItems[lightboxIndex].category === 'ships' && <Ship size={12} />}
                                    {filteredGalleryItems[lightboxIndex].category === 'wildlife' && <Camera size={12} />}
                                    <span>{filteredGalleryItems[lightboxIndex].categoryName}</span>
                                </span>
                                <h3 style={{
                                    color: 'var(--bg-white)',
                                    fontSize: '1.4rem',
                                    fontWeight: '700',
                                    margin: '0 0 8px 0',
                                    fontFamily: 'var(--font-body)'
                                }}>
                                    {filteredGalleryItems[lightboxIndex].title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.92rem',
                                    lineHeight: '1.6',
                                    margin: 0,
                                    fontWeight: '400'
                                }}>
                                    {filteredGalleryItems[lightboxIndex].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* ── WHAT EXPEDITION TRAVEL FEELS LIKE (NEW SECTION — inline styled) ── */}
            <section style={{
                backgroundImage: 'radial-gradient(var(--navy-border) 1.5px, transparent 1.5px), linear-gradient(180deg, var(--bg-dark) 0%, #080f1a 100%)',
                backgroundSize: '40px 40px, 100% 100%',
                padding: isMobileViewport ? '80px 16px' : '120px 24px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box',
                borderTop: '1px solid var(--navy-border)',
                borderBottom: '1px solid var(--navy-border)'
            }}>
                {/* Dynamic auroral glows in the background using root colors */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '15%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39, 68, 114, 0.15) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(231, 243, 245, 0.04) 0%, transparent 75%)',
                    filter: 'blur(120px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />

                {/* Cyber line indicators */}
                <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, var(--navy-border) 50%, transparent 100%)',
                    zIndex: 1
                }} />

                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, width: '100%', boxSizing: 'border-box' }}>

                    {/* HUD console header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '16px',
                        borderBottom: '1px solid var(--navy-border)',
                        paddingBottom: '12px'
                    }}>

                        <span style={{
                            fontFamily: 'monospace',
                            fontSize: '11px',
                            color: 'var(--bg-soft)',
                            letterSpacing: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>


                        </span>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'var(--navy-soft)',
                            border: '1px solid var(--navy-border)',
                            color: 'var(--bg-soft)',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            padding: '8px 20px',
                            borderRadius: '100px',
                            marginBottom: '20px',
                            textTransform: 'uppercase'
                        }}>
                            <Compass size={12} color="var(--bg-soft)" />
                            EXPEDITION REALITY
                        </span>
                        <h2 style={{
                            color: 'var(--bg-white)',
                            fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                            fontWeight: '800',
                            margin: '0 0 20px',
                            fontFamily: 'var(--font-display)',
                            lineHeight: '1.2',
                            letterSpacing: '-0.5px'
                        }}>
                            What Antarctica Expedition Travel Actually Feels Like
                        </h2>
                        <p style={{
                            color: 'var(--bg-soft)',
                            fontSize: '1.15rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontWeight: '300',
                            lineHeight: '1.7',
                            opacity: 0.95
                        }}>
                            Expedition cruising feels very different from mainstream luxury cruising.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1.1fr 0.9fr',
                        gap: '40px',
                        alignItems: 'stretch',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>

                        {/* You Should Expect */}
                        <div
                            onMouseEnter={() => setExpHoverCard1(true)}
                            onMouseLeave={() => setExpHoverCard1(false)}
                            style={{
                                background: expHoverCard1
                                    ? 'linear-gradient(135deg, var(--bg-dark2) 0%, var(--bg-dark) 100%)'
                                    : 'linear-gradient(135deg, rgba(28, 47, 74, 0.45) 0%, rgba(15, 28, 46, 0.6) 100%)',
                                border: expHoverCard1 ? '1px solid var(--bg-soft)' : '1px solid var(--navy-border)',
                                borderRadius: '24px',
                                padding: isMobileViewport ? '32px 20px' : '48px 40px',
                                boxShadow: expHoverCard1 ? 'var(--shadow-lg)' : 'var(--shadow)',
                                transform: expHoverCard1 ? 'translateY(-6px)' : 'translateY(0)',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                boxSizing: 'border-box'
                            }}
                        >
                            {/* Corner marks simulating ship radar instrumentation */}
                            <div style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                display: 'flex',
                                gap: '4px'
                            }}>
                                <div style={{ width: '4px', height: '4px', background: 'var(--bg-soft)', opacity: 0.3 }} />
                                <div style={{ width: '4px', height: '4px', background: 'var(--bg-soft)', opacity: 0.5 }} />
                                <div style={{ width: '4px', height: '4px', background: 'var(--bg-soft)', opacity: expHoverCard1 ? 1 : 0.7, boxShadow: expHoverCard1 ? '0 0 6px var(--bg-soft)' : 'none' }} />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '36px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '14px',
                                    background: 'var(--navy-soft)',
                                    border: '1px solid var(--navy-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: expHoverCard1 ? '0 0 15px rgba(231, 243, 245, 0.1)' : 'none'
                                }}>
                                    <CheckCircle size={24} color="var(--bg-soft)" />
                                </div>
                                <div>
                                    <span style={{
                                        fontSize: '10px',
                                        fontWeight: '700',
                                        color: 'var(--bg-soft)',
                                        letterSpacing: '1.5px',
                                        textTransform: 'uppercase',
                                        opacity: 0.8
                                    }}>
                                        CORE ADVENTURE ELEMENTS
                                    </span>
                                    <h3 style={{
                                        color: 'var(--bg-white)',
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                        margin: 0,
                                        fontFamily: 'var(--font-body)',
                                        letterSpacing: '-0.3px'
                                    }}>
                                        You Should Expect
                                    </h3>
                                </div>
                            </div>

                            {/* The Expectation List */}
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px'
                            }}>
                                {[
                                    { text: 'Flexible schedules', icon: Calendar },
                                    { text: 'Early wildlife announcements', icon: Wind },
                                    { text: 'Zodiac boarding', icon: Waves },
                                    { text: 'Outdoor exploration', icon: Snowflake },
                                    { text: 'Expedition briefings', icon: FileText },
                                    { text: 'Casual atmosphere', icon: Heart },
                                    { text: 'Destination focused programming', icon: Compass }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <li
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '16px 20px',
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '1px solid var(--navy-border)',
                                                borderRadius: '16px',
                                                width: '100%',
                                                boxSizing: 'border-box'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <div style={{
                                                    background: 'var(--navy-soft)',
                                                    border: '1px solid var(--navy-border)',
                                                    color: 'var(--bg-soft)',
                                                    borderRadius: '10px',
                                                    width: '38px',
                                                    height: '38px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <Icon size={18} color="var(--bg-soft)" />
                                                </div>
                                                <span style={{
                                                    color: 'var(--bg-white)',
                                                    fontSize: '0.98rem',
                                                    fontWeight: '600'
                                                }}>
                                                    {item.text}
                                                </span>
                                            </div>
                                            <div style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: '#10b981',
                                                boxShadow: '0 0 8px #10b981',
                                                flexShrink: 0
                                            }} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* You Should Not Expect */}
                        <div
                            onMouseEnter={() => setExpHoverCard2(true)}
                            onMouseLeave={() => setExpHoverCard2(false)}
                            style={{
                                background: expHoverCard2
                                    ? 'linear-gradient(135deg, var(--bg-dark2) 0%, var(--bg-dark) 100%)'
                                    : 'linear-gradient(135deg, rgba(28, 47, 74, 0.35) 0%, rgba(15, 28, 46, 0.5) 100%)',
                                border: expHoverCard2 ? '1px solid var(--bg-soft)' : '1px solid var(--navy-border)',
                                borderRadius: '24px',
                                padding: isMobileViewport ? '32px 20px' : '48px 40px',
                                boxShadow: expHoverCard2 ? 'var(--shadow-lg)' : 'var(--shadow)',
                                transform: expHoverCard2 ? 'translateY(-6px)' : 'translateY(0)',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                overflow: 'hidden',
                                boxSizing: 'border-box'
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '36px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '14px',
                                        background: 'var(--navy-soft)',
                                        border: '1px solid var(--navy-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Minus size={24} color="var(--text-muted)" />
                                    </div>
                                    <div>
                                        <span style={{
                                            fontSize: '10px',
                                            fontWeight: '700',
                                            color: 'var(--text-muted)',
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase'
                                        }}>
                                            ABSENT FROM EXPEDITION
                                        </span>
                                        <h3 style={{
                                            color: 'var(--bg-white)',
                                            fontSize: '1.5rem',
                                            fontWeight: '800',
                                            margin: 0,
                                            fontFamily: 'var(--font-body)',
                                            letterSpacing: '-0.3px'
                                        }}>
                                            You Should Not Expect
                                        </h3>
                                    </div>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '14px',
                                    marginBottom: '40px'
                                }}>
                                    {[
                                        { text: 'Casinos', icon: Music },
                                        { text: 'Broadway style entertainment', icon: Mic },
                                        { text: 'Large scale nightlife', icon: Moon },
                                        { text: 'Formal cruise environments', icon: Crown }
                                    ].map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <li
                                                key={i}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '16px 20px',
                                                    background: 'rgba(255, 255, 255, 0.01)',
                                                    border: '1px solid var(--navy-border)',
                                                    borderRadius: '16px',
                                                    width: '100%',
                                                    boxSizing: 'border-box',
                                                    opacity: 0.8
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                    <div style={{
                                                        background: 'var(--navy-soft)',
                                                        border: '1px solid var(--navy-border)',
                                                        color: 'var(--text-muted)',
                                                        borderRadius: '10px',
                                                        width: '38px',
                                                        height: '38px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <Icon size={18} color="var(--text-muted)" />
                                                    </div>
                                                    <span style={{
                                                        color: 'var(--text-muted)',
                                                        fontSize: '0.98rem',
                                                        fontWeight: '500',
                                                        textDecoration: 'line-through',
                                                        textDecorationColor: 'rgba(90, 106, 122, 0.4)'
                                                    }}>
                                                        {item.text}
                                                    </span>
                                                </div>
                                                <div style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: '#ef4444',
                                                    boxShadow: '0 0 6px rgba(239, 68, 68, 0.6)',
                                                    flexShrink: 0,
                                                    opacity: 0.5
                                                }} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Premium styled quote block */}
                            <div style={{
                                marginTop: 'auto',
                                padding: '24px',
                                borderRadius: '20px',
                                background: 'linear-gradient(135deg, rgba(39, 68, 114, 0.2) 0%, rgba(39, 68, 114, 0.05) 100%)',
                                borderLeft: '4px solid var(--bg-soft)',
                                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'var(--transition)'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    right: '16px',
                                    bottom: '0px',
                                    fontSize: '90px',
                                    color: 'var(--bg-soft)',
                                    opacity: 0.07,
                                    fontFamily: 'Georgia, serif',
                                    lineHeight: '1',
                                    pointerEvents: 'none'
                                }}>
                                    ”
                                </div>
                                <span style={{
                                    fontFamily: 'monospace',
                                    fontSize: '10px',
                                    color: 'var(--bg-soft)',
                                    letterSpacing: '2px',
                                    display: 'block',
                                    marginBottom: '8px',
                                    textTransform: 'uppercase',
                                    fontWeight: '600'
                                }}>
                                    THE CORE PRINCIPLE
                                </span>
                                <p style={{
                                    color: 'var(--bg-white)',
                                    fontSize: '1.2rem',
                                    margin: 0,
                                    fontFamily: 'var(--font-display)',
                                    fontStyle: 'italic',
                                    lineHeight: '1.5',
                                    fontWeight: '400'
                                }}>
                                    "Antarctica is the main attraction."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO CRUISE (inline styled seasonal section) ── */}
            <section style={{ background: '#f8fafc', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: '#e8f0fb',
                            color: '#1a5fa8', fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
                            padding: '6px 18px', borderRadius: '20px', marginBottom: '16px'
                        }}>
                            PLAN YOUR VOYAGE
                        </span>
                        <h2 className="medi-section-heading">Best Time To Cruise Antarctica</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Different Antarctica seasons create dramatically different experiences, which is why choosing the right departure matters.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            {
                                months: 'October & November',
                                icon: Snowflake,
                                color: '#3b7fc4',
                                bg: '#e8f0fb',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                items: ['Snow covered landscapes', 'Ice scenery', 'Photography', 'Penguin courtship season']
                            },
                            {
                                months: 'December & January',
                                icon: Sun,
                                color: '#3b7fc4',
                                bg: '#fef3c7',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                items: ['First time travelers', 'Long daylight hours', 'Active wildlife', 'Milder conditions', 'Penguin chicks']
                            },
                            {
                                months: 'February & March',
                                icon: Waves,
                                color: '#3b7fc4',
                                bg: '#d1fae5',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                items: ['Whale watching', 'Marine wildlife', 'Slightly lower pricing', 'Photography opportunities']
                            }
                        ].map(({ months, icon: Icon, color, bg, items }, i) => (
                            <div key={i} style={{
                                background: '#ffffff', borderRadius: '16px', padding: '28px',
                                boxShadow: '0 4px 20px rgba(15,28,46,0.08)',
                                border: '1px solid rgba(15,28,46,0.06)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '12px',
                                        background: '#e8f0fb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                    }}>
                                        <Icon size={22} color="#1a5fa8" />
                                    </div>
                                    <h3 style={{ color: '#0f1c2e', fontSize: '1rem', fontWeight: 700, margin: 0 }}>{months}</h3>
                                </div>
                                <p style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Best for:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0 }}></div>
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VIDEO SHOWCASE ── */}
            <section className="medi-video-section" style={{ background: '#ffffff', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience Antarctica with HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of polar wildlife, towering icebergs, Zodiac landings, and the extraordinary world that awaits on an HX Antarctica expedition.
                    </p>
                    <div style={{
                        maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)',
                        aspectRatio: '16/9', background: '#000'
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/pKKV8tPotDQ"
                            title="Experience Antarctica with HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── ITINERARIES SHOWCASE ── */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED EXPEDITIONS</span>
                        <h2 className="medi-itinerary-showcase-heading">Best HX Antarctica Cruises For First Timers</h2>
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
                                    key={mediSelectedItinerary}
                                    src={mediItineraries[mediSelectedItinerary].img}
                                    alt={mediItineraries[mediSelectedItinerary].imgAlt}
                                    className="medi-itinerary-showcase-img"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        display: 'block',
                                        transition: 'opacity 0.5s ease',
                                        borderRadius: '0'
                                    }}
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

            {/* ── EXPERT INSIGHT ── */}
            <section id="antarctica-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Expedition Expert" />
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
                                    Why Antarctica Matters <br className="medi-growth-title-break" />To Luxury Travelers
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes and her team specialize in matching travelers with the right expedition experiences based on travel style, comfort expectations and destination priorities.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Antarctica delivers what sophisticated travelers increasingly prioritize:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Extreme remoteness',
                                        'Wildlife encounters',
                                        'Rare expedition experiences',
                                        'Emotional impact',
                                        'Adventure with comfort',
                                        'Once in a lifetime memories'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                For sophisticated travelers who have already visited Europe, the Caribbean and major luxury cruise destinations, Antarctica often becomes the next extraordinary frontier.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Expedition cruising', icon: Compass },
                                        { title: 'Polar travel', icon: Snowflake },
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Global luxury travel planning', icon: Globe }
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

            {/* ── COMMON MISTAKES SLIDER ── */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID EXPEDITION PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common Antarctica Cruise Mistakes
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx
                                return (
                                    <div key={idx} className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}>
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

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

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

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Compass, label: 'Adventure minded luxury travelers' },
                                    { icon: Star, label: 'Wildlife enthusiasts' },
                                    { icon: Camera, label: 'Photography lovers' },
                                    { icon: Globe, label: 'Bucket list travelers' },
                                    { icon: Crown, label: 'Experienced cruisers seeking something extraordinary' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Not Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Music, label: 'Travelers wanting traditional cruise entertainment' },
                                    { icon: Moon, label: 'Guests uncomfortable with flexibility' },
                                    { icon: Sun, label: 'Travelers seeking hot weather relaxation vacations' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── VIDEO SHOWCASE ── */}
            <section className="medi-video-section" style={{ background: '#ffffff', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div style={{
                        maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,28,46,0.12)', border: '1px solid rgba(39,68,114,0.1)',
                        aspectRatio: '16/9', background: '#000'
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/1Cw9rh_kzYs"
                            title="Experience Antarctica with HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>



            {/* ── ANGELA HUGHES AUTHORITY BOX ── */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes <br /> Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '80px', height: '80px', borderRadius: '50%',
                                        objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
                                    }}
                                />
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
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Sparkles, category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
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

            {/* ── FAQ ── */}
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
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Plan Your Antarctica Expedition?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Antarctica is not a trip most travelers take twice. Choosing the right ship, itinerary and season matters enormously.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips & Ships Luxury Travel helps travelers confidently navigate Antarctica expedition planning with expert guidance tailored to their goals, comfort level and travel style.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Contact Trips & Ships Luxury Travel today to begin planning your HX Expeditions Antarctica cruise.</span>
                        </div>

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

export default HXExpeditionsAntarctica