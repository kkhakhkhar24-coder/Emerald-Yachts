import Navbar from '../../components/Navbar/Navbar'

import './VikingMediterraneancruises.css'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music, Wifi, Wine, Wallet, Plane,
    Sunrise, CloudSun, Leaf, BedDouble, Bath, Sofa,
    UtensilsCrossed, ChefHat, Coffee, X, Dice5
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ─────────────────────────────────────────────────────────────
   IMAGE PLACEHOLDERS — swap with real imports like the Azamara page
   e.g. import vikingHero1 from '../../assets/Viking/hero1.jpg'
──────────────────────────────────────────────────────────────── */
const VIKING_HERO_1 = 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1600&q=80'
const VIKING_HERO_2 = 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&q=80'
const VIKING_HERO_3 = 'https://images.unsplash.com/photo-1469796466635-455ede028aca?w=1600&q=80'

const ITALY_IMG = 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=900&q=80'
const GREECE_IMG = 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=900&q=80'
const CROATIA_IMG = 'https://images.unsplash.com/photo-1555990538-ceba70a39cb6?w=900&q=80'
const SPAIN_IMG = 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=900&q=80'

const SHIP_EXTERIOR_IMG = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&q=80'
const VERANDA_ROOM_IMG = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80'
const PENTHOUSE_ROOM_IMG = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80'
const EXPLORER_SUITE_IMG = 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80'

const ANGELA_PORTRAIT_IMG = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'

/* ════════════════════════════════════════════════════════════ */

function VikingMediterraneanCruises() {

    const heroImages = [VIKING_HERO_1, VIKING_HERO_2, VIKING_HERO_3]
    const [currentHero, setCurrentHero] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setCurrentHero(p => (p + 1) % heroImages.length), 5000)
        return () => clearInterval(t)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)
    const [selectedItinerary, setSelectedItinerary] = useState(0)

    const itineraries = [
        {
            title: 'Mediterranean Odyssey',
            desc: 'One of Viking\'s most requested Mediterranean voyages. This itinerary offers a broad introduction to the Mediterranean.',
            ports: ['Barcelona', 'Marseille', 'Florence', 'Rome', 'Naples', 'Sicily', 'Valletta', 'Athens'],
            img: ITALY_IMG
        },
        {
            title: 'Empires of the Mediterranean',
            desc: 'Perfect for travelers interested in history and culture. Guests experience centuries of history spanning multiple civilizations.',
            ports: ['Venice', 'Dubrovnik', 'Kotor', 'Athens', 'Santorini', 'Ephesus', 'Istanbul'],
            img: CROATIA_IMG
        },
        {
            title: 'Italian Sojourn',
            desc: 'Ideal for travelers focused on Italy. This itinerary combines art, cuisine, history, and coastal beauty.',
            ports: ['Venice', 'Florence', 'Rome', 'Naples', 'Sicily'],
            img: ITALY_IMG
        },
        {
            title: 'Greek Odyssey',
            desc: 'A favorite among first-time Mediterranean cruisers. Guests experience iconic Greek islands and ancient history.',
            ports: ['Athens', 'Mykonos', 'Santorini', 'Rhodes', 'Crete'],
            img: GREECE_IMG
        },
        {
            title: 'Iberian Explorer',
            desc: 'Focused on Spain and Portugal. Perfect for food, wine, and culture enthusiasts.',
            ports: ['Lisbon', 'Porto', 'Seville', 'Malaga', 'Barcelona'],
            img: SPAIN_IMG
        },
    ]

    const faqs = [
        { question: 'Are Viking Mediterranean Cruises adults only?', answer: 'Yes. Viking Ocean Cruises welcomes guests ages 18 and older.' },
        { question: 'What is included on a Viking Mediterranean Cruise?', answer: 'Wi-Fi, one shore excursion per port, specialty dining, beer and wine with meals, and enrichment programs are included.' },
        { question: 'What are the best Viking Mediterranean itineraries?', answer: 'Mediterranean Odyssey, Empires of the Mediterranean, Greek Odyssey, and Italian Sojourn are among the most popular.' },
        { question: 'Does Viking sail to Greece?', answer: 'Yes. Greece is one of Viking\'s most popular Mediterranean destinations.' },
        { question: 'Are Viking ships large?', answer: 'No. Viking Ocean ships are considered small to mid-sized and carry approximately 930 guests.' },
        { question: 'Is airfare included?', answer: 'Sometimes. Viking frequently offers promotional airfare packages.' },
        { question: 'What is the best month for a Mediterranean cruise?', answer: 'September and October are often considered the best months due to pleasant weather and fewer crowds.' },
        { question: 'Does Viking have formal nights?', answer: 'No. Viking maintains a relaxed and elegant dress code.' },
        { question: 'Are excursions included?', answer: 'Yes. At least one complimentary shore excursion is included at every port.' },
        { question: 'Does Viking have casinos?', answer: 'No. Viking ships do not feature casinos.' },
        { question: 'What is the average Mediterranean cruise length?', answer: 'Most itineraries range from 8 to 15 days.' },
        { question: 'Is Viking considered a luxury cruise line?', answer: 'Viking is generally considered an upper-premium to luxury cruise line.' },
        { question: 'Are drinks included?', answer: 'Beer, wine, and soft drinks are included with lunch and dinner.' },
        { question: 'Is Viking good for first-time Mediterranean travelers?', answer: 'Absolutely. Viking\'s destination-focused itineraries are ideal for first-time visitors.' },
        { question: 'Which Mediterranean countries does Viking visit?', answer: 'Italy, Greece, Croatia, Spain, France, Turkey, Malta, Portugal, and several others.' },
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises",
                "name": "Viking Mediterranean Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises",
                "description": "Explore Viking Mediterranean Cruises including Greece, Italy, Croatia, Spain, France, and Turkey. Discover ships, itineraries, pricing, destinations, and expert travel advice.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises#article"
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
                "description": "Luxury travel agency specializing in ocean cruises, river cruises, expedition voyages, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises#article",
                "headline": "Viking Mediterranean Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises",
                "description": "Complete guide to Viking Mediterranean Cruises including destinations, ships, itineraries, excursions, pricing, and travel tips for luxury travelers.",
                "image": "https://www.tripsshipsluxurytravel.com/images/viking-mediterranean-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises"
                }
            },
            {
                "@type": "Service",
                "name": "Mediterranean Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Mediterranean Cruise Consulting",
                "description": "Expert cruise planning services helping travelers choose the best Viking Mediterranean itinerary, ship, and stateroom."
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
                        "name": "Viking Mediterranean Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/viking-mediterranean-cruises"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Are Viking Mediterranean Cruises adults only?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Viking Ocean Cruises is an adults-only cruise line and welcomes guests age 18 and older."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Viking Mediterranean Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Included amenities typically include Wi-Fi, one shore excursion in every port, specialty dining, beer and wine with lunch and dinner, and enrichment programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the most popular Viking Mediterranean itineraries?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular itineraries include Mediterranean Odyssey, Empires of the Mediterranean, Italian Sojourn, Greek Odyssey, and Iberian Explorer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Viking visit Greece?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Greece is one of Viking's most popular Mediterranean destinations, including Athens, Santorini, Mykonos, Rhodes, and Crete."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How large are Viking Ocean ships?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most Viking Ocean ships accommodate approximately 930 guests, providing a more intimate cruise experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best time for a Viking Mediterranean Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many experienced travelers prefer April through May and September through October because of pleasant weather and smaller crowds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Viking have formal nights?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Viking maintains a relaxed and elegant atmosphere without formal nights."
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
                        "name": "Does Viking have casinos onboard?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Viking ships do not have casinos."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long are Viking Mediterranean Cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most Mediterranean itineraries range from 8 to 15 days, though longer voyages are also available."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Viking considered a luxury cruise line?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking is generally considered an upper-premium to luxury cruise line known for destination-focused travel and exceptional service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which Mediterranean countries does Viking visit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking visits Italy, Greece, Croatia, Spain, France, Turkey, Portugal, Malta, and many other Mediterranean destinations."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking Mediterranean Cruises | Best Mediterranean Voyages with Viking Ocean Cruises</title>
                <meta name="title" content="Viking Mediterranean Cruises: Destinations, Ships, Pricing & Tips" />
                <meta name="description" content="Explore Viking Mediterranean Cruises including Italy, Greece, Croatia, Spain, France, and Turkey. Discover itineraries, pricing, ships, excursions, and why luxury travelers love Viking Ocean Cruises." />
                <meta name="keywords" content="Viking Mediterranean Cruises, Viking Mediterranean Cruise, Mediterranean Cruises Viking, Viking Ocean Mediterranean Cruises, Best Viking Mediterranean Itineraries, Viking Cruises Mediterranean 2026" />
                <script type="application/ld+json">
                    {JSON.stringify(vikingSchemaData)}
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
                        Viking Mediterranean Cruises: The Ultimate Guide for Luxury Travelers
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Ancient civilizations, world-famous cuisine, stunning coastlines, charming villages, and iconic cities create a travel experience unlike anywhere else in the world.
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
                            <h2 className="medi-section-heading">Why Choose Viking for a Mediterranean Cruise?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <div className="medi-intro-highlight-box">
                                "Unlike large resort-style ships that focus heavily on onboard attractions, Viking emphasizes the destinations themselves."
                            </div>
                        </div>

                        <div className="medi-intro-content-column">
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '20px' }}>
                                When it comes to exploring the Mediterranean in comfort and style, Viking Ocean Cruises has become one of the most respected names in the industry. Known for destination-focused itineraries, elegant Scandinavian design, exceptional service, and an adults-only atmosphere, Viking offers a sophisticated alternative to larger mainstream cruise lines.
                            </p>
                            <p style={{ fontSize: '17px', color: '#4a5568', lineHeight: '1.8', marginBottom: '0px' }}>
                                Whether you're dreaming of sailing through the Greek Isles, exploring Italy's historic ports, discovering Croatia's coastline, or experiencing the cultural treasures of Spain and France, Viking Mediterranean Cruises deliver an immersive luxury experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHY CHOOSE VIKING (SEPARATED FEATURE BLOCK)
            ══════════════════════════════════ */}
            <section className="vmc-why-viking-separated-section">
                <div className="vmc-why-viking-separated-container">
                    <div className="vmc-why-viking-separated-grid">
                        
                        <div className="vmc-why-viking-left-panel">
                            <span className="vmc-separated-eyebrow">The Viking Difference</span>
                            <p className="vmc-separated-intro-text">
                                The Mediterranean is one of Viking's most popular regions. Unlike large resort-style ships that focus heavily on onboard attractions, Viking emphasizes the destinations themselves. Guests choose Viking because of:
                            </p>
                            <div className="vmc-separated-accent-bar"></div>
                        </div>

                        <div className="vmc-why-viking-right-panel">
                            <div className="vmc-why-viking-horizontal-grid">
                                {[
                                    [Heart, 'Adults-only atmosphere'],
                                    [MapPin, 'Destination-focused itineraries'],
                                    [CheckCircle, 'Included shore excursions'],
                                    [Ship, 'Smaller ship experience'],
                                    [Crown, 'Scandinavian elegance'],
                                    [X, 'No casinos'],
                                    [Baby, 'No children onboard'],
                                    [Sparkles, 'Excellent enrichment programs'],
                                    [Wifi, 'Complimentary Wi-Fi'],
                                    [Utensils, 'Included specialty dining'],
                                    [Award, 'Outstanding service'],
                                ].map(([Icon, text], i) => (
                                    <div key={i} className="vmc-separated-card">
                                        <div className="vmc-separated-card-icon">
                                            <Icon size={18} />
                                        </div>
                                        <span className="vmc-separated-card-text">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHAT MAKES VIKING DIFFERENT
            ══════════════════════════════════ */}
            <section className="medi-diff-section vmc-diff-custom-override">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">DESTINATION IMMERSION</span>
                        <h2 className="medi-diff-main-title">What Makes Viking Mediterranean Cruises Different?</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">
                        <div className="medi-diff-card medi-diff-card-navy">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Clock size={24} /></div>
                                <h3 className="medi-diff-card-title">Longer Port Stays</h3>
                            </div>
                            <p className="medi-diff-card-text">
                                Viking's philosophy centers around cultural exploration. Rather than spending days at sea, Viking itineraries are designed to maximize time in port. More time exploring destinations.
                            </p>
                            <p className="medi-diff-card-text-secondary">Guests enjoy:</p>
                            <ul className="medi-diff-experience-list">
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Overnight Visits — select itineraries include overnight stays in major cities</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Enrichment Programs — experts provide lectures and destination insights</span></li>
                                <li><CheckCircle size={16} className="medi-diff-list-icon" /><span>Included Excursions — every port includes at least one complimentary excursion</span></li>
                            </ul>
                        </div>

                        <div className="medi-diff-card medi-diff-card-white">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Ship size={24} /></div>
                                <h3 className="medi-diff-card-title">Smaller Ships</h3>
                            </div>
                            <div className="medi-diff-ship-stat-box">
                                <div className="medi-diff-stat-ring">
                                    <div className="medi-diff-stat-num">930</div>
                                </div>
                                <div className="medi-diff-stat-label">GUESTS CAPACITY</div>
                            </div>
                            <p className="medi-diff-card-text">
                                Viking Ocean ships typically accommodate around 930 guests, creating a more intimate experience than mega-ship cruising.
                            </p>
                            <div className="medi-diff-quote-wrapper">
                                <p className="medi-diff-quote-text">A boutique-scale alternative to traditional resort-style cruising.</p>
                            </div>
                        </div>

                        <div className="medi-diff-card medi-diff-card-soft">
                            <div className="medi-diff-icon-header">
                                <div className="medi-diff-icon-box"><Compass size={24} /></div>
                                <h3 className="medi-diff-card-title">Cultural Exploration</h3>
                            </div>
                            <p className="medi-diff-card-text">Viking's philosophy centers around:</p>
                            <ul className="medi-diff-focus-list-premium">
                                <li><span className="medi-diff-list-num">01</span><span>Enrichment programs</span></li>
                                <li><span className="medi-diff-list-num">02</span><span>Included excursions</span></li>
                                <li><span className="medi-diff-list-num">03</span><span>Overnight city visits</span></li>
                                <li><span className="medi-diff-list-num">04</span><span>Smaller, walkable ports</span></li>
                            </ul>
                            <div className="medi-diff-conclusion-box">
                                <p className="medi-diff-conclusion-text">
                                    Every port includes at least one complimentary excursion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                ITINERARIES SHOWCASE
            ══════════════════════════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">CURATED VOYAGES</span>
                        <h2 className="medi-itinerary-showcase-heading">Most Popular Viking Mediterranean Cruise Itineraries</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {itineraries.map((itin, idx) => (
                                <button
                                    key={idx}
                                    className={`medi-itinerary-tab-btn ${selectedItinerary === idx ? 'active' : ''}`}
                                    onClick={() => setSelectedItinerary(idx)}
                                >
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{itin.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper">
                                <img
                                    src={itineraries[selectedItinerary].img}
                                    alt={itineraries[selectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">VIKING MEDITERRANEAN</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{itineraries[selectedItinerary].title}</h3>
                                <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.7', margin: '0 0 20px' }}>
                                    {itineraries[selectedItinerary].desc}
                                </p>
                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col" style={{ gridColumn: '1 / -1' }}>
                                        <h4 className="medi-itinerary-details-heading">Popular Ports:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {itineraries[selectedItinerary].ports.map((port, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{port}</span>
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

            {/* ══════════════════════════════════
                TOP DESTINATIONS — all 5 countries, exact doc content
            ══════════════════════════════════ */}
            <section className="medi-luxury-definition-section vmc-destinations-custom-override">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">SHORE TO SHORE</span>
                        <h2 className="medi-luxury-heading">Top Mediterranean Destinations on Viking Cruises</h2>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Italy</h3>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '12px' }}>
                                Italy remains Viking's most popular Mediterranean destination.
                            </p>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '6px', fontWeight: '600' }}>Highlights include:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Rome</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Florence</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Venice</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Naples</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Sicily</span></div>
                            </div>
                            <p className="medi-luxury-paragraph" style={{ margin: '14px 0 6px', fontWeight: '600' }}>Travelers enjoy:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Ancient ruins</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>World-class museums</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Italian cuisine</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Coastal scenery</span></div>
                            </div>
                        </div>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Greece</h3>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '12px' }}>
                                Greece combines stunning islands with rich history.
                            </p>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '6px', fontWeight: '600' }}>Popular ports include:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Athens</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Santorini</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Mykonos</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Rhodes</span></div>
                            </div>
                            <p className="medi-luxury-paragraph" style={{ margin: '14px 0 6px', fontWeight: '600' }}>Travelers enjoy:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Whitewashed villages</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Archaeological sites</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Beautiful beaches</span></div>
                            </div>
                        </div>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Croatia</h3>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '12px' }}>
                                Croatia has become one of Europe's hottest cruise destinations.
                            </p>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '6px', fontWeight: '600' }}>Highlights include:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Dubrovnik</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Split</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Hvar</span></div>
                            </div>
                            <p className="medi-luxury-paragraph" style={{ margin: '14px 0 0' }}>
                                The Adriatic coastline offers spectacular scenery.
                            </p>
                        </div>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">France</h3>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '12px' }}>
                                Southern France delivers elegance and culture.
                            </p>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '6px', fontWeight: '600' }}>Popular ports include:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Marseille</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Nice</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Monte Carlo</span></div>
                            </div>
                            <p className="medi-luxury-paragraph" style={{ margin: '14px 0 0' }}>
                                Travelers enjoy food, wine, and Mediterranean charm.
                            </p>
                        </div>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Spain</h3>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '12px' }}>
                                Spain combines vibrant culture with exceptional cuisine.
                            </p>
                            <p className="medi-luxury-paragraph" style={{ marginBottom: '6px', fontWeight: '600' }}>Highlights include:</p>
                            <div className="medi-luxury-features-grid">
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Barcelona</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Valencia</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Malaga</span></div>
                                <div className="medi-luxury-feature"><CheckCircle size={20} className="medi-feature-check-icon" /><span>Palma de Mallorca</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={GREECE_IMG} alt="Viking Mediterranean destinations" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SHIPS / FLEET
            ══════════════════════════════════ */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">VIKING OCEAN FLEET // 2026</div>
                <div className="medi-excel-coord coord-tr">CONSISTENCY ACROSS THE FLEET</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Viking Mediterranean Ships</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            All Viking Ocean ships share a similar design and experience, so guests enjoy consistency across the fleet.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">Popular Vessels</h3>
                                <ul className="medi-excel-list">
                                    {['Viking Star', 'Viking Sea', 'Viking Sky', 'Viking Jupiter'].map((s, i) => (
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
                                    {['Viking Venus', 'Viking Mars', 'Viking Neptune', 'Viking Saturn'].map((s, i) => (
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
                            Every Viking Ocean stateroom includes a private veranda, king-size bed, heated bathroom floors, luxury toiletries, a spacious layout, and complimentary Wi-Fi.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                STATEROOMS & SUITES (new section, own CSS)
            ══════════════════════════════════ */}
            <section className="vmc-staterooms-section">
                <div className="vmc-staterooms-container">
                    <div className="vmc-staterooms-header">
                        <span className="medi-itinerary-eyebrow">ONBOARD COMFORT</span>
                        <h2 className="medi-section-heading">Staterooms and Suites</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vmc-staterooms-grid">
                        <div className="vmc-stateroom-card">
                            <div className="vmc-stateroom-image-wrap">
                                <img src={VERANDA_ROOM_IMG} alt="Veranda Stateroom" />
                                <span className="vmc-stateroom-badge">Every Stateroom</span>
                            </div>
                            <div className="vmc-stateroom-body">
                                <h3 className="vmc-stateroom-title">Every Veranda Stateroom</h3>
                                <ul className="vmc-stateroom-features">
                                    <li><BedDouble size={16} /><span>Private veranda &amp; king-size bed</span></li>
                                    <li><Bath size={16} /><span>Heated bathroom floors</span></li>
                                    <li><Sparkles size={16} /><span>Luxury toiletries</span></li>
                                    <li><Sofa size={16} /><span>Spacious layout</span></li>
                                    <li><Wifi size={16} /><span>Complimentary Wi-Fi</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vmc-stateroom-card">
                            <div className="vmc-stateroom-image-wrap">
                                <img src={PENTHOUSE_ROOM_IMG} alt="Penthouse Veranda Stateroom" />
                                <span className="vmc-stateroom-badge">Premium</span>
                            </div>
                            <div className="vmc-stateroom-body">
                                <h3 className="vmc-stateroom-title">Penthouse Veranda Staterooms</h3>
                                <ul className="vmc-stateroom-features">
                                    <li><CheckCircle size={16} /><span>Ideal for travelers seeking additional comfort</span></li>
                                    <li><CheckCircle size={16} /><span>Enhanced perks over standard verandas</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="vmc-stateroom-card">
                            <div className="vmc-stateroom-image-wrap">
                                <img src={EXPLORER_SUITE_IMG} alt="Explorer Suite" />
                                <span className="vmc-stateroom-badge">Most Luxurious</span>
                            </div>
                            <div className="vmc-stateroom-body">
                                <h3 className="vmc-stateroom-title">Explorer Suites</h3>
                                <ul className="vmc-stateroom-features">
                                    <li><Sofa size={16} /><span>Separate living room</span></li>
                                    <li><Sun size={16} /><span>Large veranda</span></li>
                                    <li><Star size={16} /><span>Priority reservations</span></li>
                                    <li><Gem size={16} /><span>Premium amenities</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                DINING (new section, own CSS)
            ══════════════════════════════════ */}
            <section className="vmc-dining-section">
                <div className="vmc-dining-container">
                    <div className="vmc-dining-header">
                        <span className="medi-itinerary-eyebrow">CULINARY EXPERIENCE</span>
                        <h2 className="medi-section-heading">Dining on Viking Mediterranean Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vmc-dining-grid">
                        <div className="vmc-dining-card">
                            <div className="vmc-dining-icon-box"><UtensilsCrossed size={24} /></div>
                            <h3 className="vmc-dining-card-title">The Restaurant</h3>
                            <p className="vmc-dining-card-text">Regional and international cuisine.</p>
                        </div>
                        <div className="vmc-dining-card">
                            <div className="vmc-dining-icon-box"><ChefHat size={24} /></div>
                            <h3 className="vmc-dining-card-title">Manfredi's Italian Restaurant</h3>
                            <p className="vmc-dining-card-text">One of Viking's most popular specialty restaurants.</p>
                        </div>
                        <div className="vmc-dining-card">
                            <div className="vmc-dining-icon-box"><Utensils size={24} /></div>
                            <h3 className="vmc-dining-card-title">Chef's Table</h3>
                            <p className="vmc-dining-card-text">Multi-course tasting menus inspired by global cuisines.</p>
                        </div>
                        <div className="vmc-dining-card">
                            <div className="vmc-dining-icon-box"><Coffee size={24} /></div>
                            <h3 className="vmc-dining-card-title">World Café</h3>
                            <p className="vmc-dining-card-text">Casual dining with Mediterranean influences.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                INCLUDED VS EXTRA COSTS (new section, own CSS)
            ══════════════════════════════════ */}
            <section className="vmc-costs-section">
                <div className="vmc-costs-container">
                    <div className="vmc-costs-header">
                        <span className="medi-itinerary-eyebrow">TRANSPARENT PRICING</span>
                        <h2 className="medi-section-heading">Included vs Extra Costs</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            One reason travelers appreciate Viking is its transparent pricing.
                        </p>
                    </div>

                    <div className="vmc-costs-grid">
                        <div className="vmc-costs-card included">
                            <h3 className="vmc-costs-card-heading">
                                <div className="vmc-costs-icon-box"><CheckCircle size={20} /></div>
                                Included
                            </h3>
                            <ul className="vmc-costs-list">
                                <li><CheckCircle size={17} /><span>One complimentary excursion per port</span></li>
                                <li><Wifi size={17} /><span>Wi-Fi</span></li>
                                <li><Utensils size={17} /><span>Specialty dining</span></li>
                                <li><Wine size={17} /><span>Beer and wine at lunch and dinner</span></li>
                                <li><CheckCircle size={17} /><span>Port taxes and fees</span></li>
                                <li><Sparkles size={17} /><span>Enrichment lectures</span></li>
                            </ul>
                        </div>

                        <div className="vmc-costs-card extra">
                            <h3 className="vmc-costs-card-heading">
                                <div className="vmc-costs-icon-box"><Minus size={20} /></div>
                                Additional Costs
                            </h3>
                            <ul className="vmc-costs-list">
                                <li><MapPin size={17} /><span>Premium excursions</span></li>
                                <li><Heart size={17} /><span>Spa treatments</span></li>
                                <li><Wine size={17} /><span>Premium beverages</span></li>
                                <li><Plane size={17} /><span>Airfare (unless included in promotions)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                BEST TIME TO CRUISE (new section, own CSS)
            ══════════════════════════════════ */}
            <section className="vmc-season-section">
                <div className="vmc-season-container">
                    <div className="vmc-season-header">
                        <span className="medi-itinerary-eyebrow" style={{ color: '#94a3b8' }}>WHEN TO SAIL</span>
                        <h2 className="medi-section-heading">Best Time for a Viking Mediterranean Cruise</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vmc-season-grid">
                        <div className="vmc-season-card">
                            <div className="vmc-season-icon-box"><Sunrise size={24} /></div>
                            <h3 className="vmc-season-title">Spring (April–May)</h3>
                            <p className="vmc-season-text">Ideal temperatures and fewer crowds.</p>
                        </div>
                        <div className="vmc-season-card">
                            <div className="vmc-season-icon-box"><Sun size={24} /></div>
                            <h3 className="vmc-season-title">Summer (June–August)</h3>
                            <p className="vmc-season-text">Warm weather and vibrant atmosphere. Expect larger crowds.</p>
                        </div>
                        <div className="vmc-season-card best">
                            <div className="vmc-season-icon-box"><Leaf size={24} /></div>
                            <span className="vmc-season-badge">Most Recommended</span>
                            <h3 className="vmc-season-title">Fall (September–October)</h3>
                            <p className="vmc-season-text">Many experienced travelers consider this the best time to visit. Pleasant weather and fewer tourists.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                WHO SHOULD / SHOULD NOT TAKE A VIKING CRUISE
                (new section, own CSS to avoid colliding with shared
                .medi-audience-* component used elsewhere on the site)
            ══════════════════════════════════ */}
            <section className="vmc-traveler-section">
                <div className="vmc-traveler-container">
                    <div className="vmc-traveler-header">
                        <span className="medi-itinerary-eyebrow">IS VIKING RIGHT FOR YOU?</span>
                        <h2 className="medi-section-heading">Who Should Take a Viking Mediterranean Cruise?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vmc-traveler-grid">
                        <div className="vmc-traveler-card yes">
                            <h3 className="vmc-traveler-card-heading"><CheckCircle size={20} /> Viking Is Perfect For</h3>
                            <ul className="vmc-traveler-list">
                                {['Couples', 'Retirees', 'Empty nesters', 'Luxury travelers', 'Cultural explorers', 'First-time Mediterranean visitors', 'Food and wine enthusiasts'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="vmc-traveler-card no">
                            <h3 className="vmc-traveler-card-heading"><X size={20} /> Who May Prefer Another Cruise Line</h3>
                            <ul className="vmc-traveler-list">
                                {['Families with young children', 'Travelers seeking casinos', 'Guests wanting waterslides and attractions', 'Nightlife-focused cruisers'].map((item, i) => (
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
                                Choosing the right Mediterranean itinerary can be overwhelming. Trips &amp; Ships Luxury Travel helps travelers navigate every decision with confidence.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">Trips &amp; Ships Luxury Travel helps travelers:</p>
                                <div className="medi-priorities-grid-pills">
                                    {['Compare itineraries', 'Select the best stateroom', 'Understand promotions', 'Maximize onboard benefits', 'Arrange pre- and post-cruise travel'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                Led by luxury travel expert Angela Hughes, our team helps travelers create unforgettable Mediterranean cruise experiences.
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
                FINAL THOUGHTS / CTA
            ══════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready to Sail the Mediterranean with Viking?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Viking Mediterranean Cruises offer one of the most immersive ways to explore Europe's most iconic region.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With destination-focused itineraries, elegant ships, included excursions, and an adults-only atmosphere, Viking provides a sophisticated alternative to traditional cruising.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether you're sailing through the Greek Isles, exploring the Italian coast, discovering Croatia's Adriatic treasures, or enjoying the culture and cuisine of Spain and France, a Viking Mediterranean cruise delivers an unforgettable journey filled with history, beauty, and discovery.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Greek Isles cruising', 'Italian Sojourn voyages', 'Adriatic & Croatia exploration', 'Iberian Explorer itineraries', 'First-time Mediterranean planning'].map((item, idx) => (
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

export default VikingMediterraneanCruises