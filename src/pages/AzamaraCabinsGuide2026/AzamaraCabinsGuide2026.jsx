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
    Mic, FileText, GraduationCap,
    Shield,
    ShieldCheck,
    ShieldAlert
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/AzamaraMediterraneanCruises/Azamara Greece cruise itinerary.jpg'
import hero2 from '../../assets/AzamaraMediterraneanCruises/Luxury Mediterranean small ship cruise.jpg'
import hero3 from '../../assets/AzamaraMediterraneanCruises/Azamara Mediterranean cruise ship.jpg'

function AzamaraCabinsGuide2026() {
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
            title: "Inside Staterooms",
            bestFor: [
                "Budget-conscious luxury travelers",
                "Port-intensive itineraries",
                "Travelers spending minimal time in the cabin"
            ],
            highlights: [
                "Comfortable queen bed configuration",
                "Sitting area",
                "Flat-screen television",
                "Premium bedding",
                "Modern bathroom design",
                "24-hour room service"
            ],
            footerText: "Inside cabins offer strong value for travelers prioritizing destinations over cabin space. However, travelers spending significant time onboard may prefer balcony accommodations."
        },
        {
            title: "Oceanview Staterooms",
            bestFor: [
                "Travelers wanting natural light",
                "Scenic itineraries",
                "Moderate luxury budgets"
            ],
            highlights: [
                "Large picture windows",
                "Ocean views",
                "Bright interior atmosphere",
                "Comfortable living space"
            ],
            footerText: "Oceanview cabins often provide an excellent middle ground between affordability and comfort."
        },
        {
            title: "Veranda Staterooms",
            bestFor: [
                "Couples",
                "Scenic cruising",
                "Luxury relaxation",
                "Mediterranean and Asia itineraries"
            ],
            highlights: [
                "Private balcony",
                "Floor-to-ceiling glass doors",
                "Sitting area",
                "Premium bedding",
                "Expanded outdoor living space"
            ],
            extraNote: "Travelers especially appreciate veranda cabins during: Japan cruises, Mediterranean sailings, Scenic coastal itineraries, and Cherry blossom season voyages.",
            footerText: "Most Popular Azamara Cabin Category. For many travelers, veranda cabins deliver the ideal Azamara experience. For travelers who value private outdoor space, veranda cabins are often worth the upgrade."
        },
        {
            title: "Club Continent Suites",
            bestFor: [
                "Experienced luxury travelers",
                "Travelers seeking elevated boutique luxury",
                "Those wanting personalized service without ultra-luxury pricing"
            ],
            highlights: [
                "Priority embarkation",
                "Personalized concierge service",
                "Upgraded amenities",
                "Larger living areas",
                "Enhanced bathroom features",
                "Preferred suite locations"
            ],
            extraNote: "Elevated Boutique Luxury. Club Continent Suites provide a more premium Azamara experience while maintaining the line's relaxed atmosphere.",
            footerText: "These suites appeal strongly to experienced luxury travelers seeking additional comfort without moving into ultra-luxury pricing."
        },
        {
            title: "Spa Suites",
            bestFor: [
                "Wellness-focused travelers",
                "Travelers seeking rejuvenation",
                "Those prioritizing relaxation-focused experiences"
            ],
            highlights: [
                "Spa-inspired amenities",
                "Priority spa access",
                "Premium bath products",
                "Spacious suite layouts",
                "Relaxation-focused atmosphere"
            ],
            extraNote: "Best For Wellness-Focused Travelers. Spa Suites combine luxury accommodations with wellness-oriented experiences.",
            footerText: "Travelers seeking rejuvenation and wellness often favor these accommodations."
        },
        {
            title: "Ocean Suites",
            bestFor: [
                "Travelers celebrating special occasions",
                "Milestone anniversary voyages",
                "Those prioritizing expansive private verandas"
            ],
            highlights: [
                "Expansive living space",
                "Large private verandas",
                "Luxury bathroom finishes",
                "Butler service",
                "Premium dining privileges",
                "Priority reservations"
            ],
            extraNote: "The Most Luxurious Azamara Experience. Ocean Suites represent one of Azamara's highest accommodation categories.",
            footerText: "For travelers celebrating honeymoons, milestone anniversaries, retirement trips, or luxury world cruises, Ocean Suites deliver an elevated and deeply personal experience."
        },
        {
            title: "World Owner's Suites",
            bestFor: [
                "Travelers prioritizing maximum space and privacy",
                "Honeymoons and luxury celebrations",
                "Those seeking Azamara's pinnacle onboard experience"
            ],
            highlights: [
                "Expansive living space",
                "Large private verandas",
                "Luxury bathroom finishes",
                "Butler service",
                "Premium dining privileges",
                "Personalized onboard attention",
                "Priority reservations"
            ],
            extraNote: "Azamara's Pinnacle Accommodation. World Owner's Suites represent the absolute top of the Azamara experience.",
            footerText: "These suites deliver Azamara's most elevated experience."
        }
    ];

    const mediFaqs = [
        { question: 'Which Azamara cabin is best?', answer: 'Veranda staterooms are often considered the best balance of luxury, comfort, and value.' },
        { question: 'Are Azamara suites worth it?', answer: 'Yes, particularly for travelers prioritizing additional space, premium amenities, and personalized service.' },
        { question: 'Do Azamara cabins have balconies?', answer: 'Veranda staterooms and suites include private balconies.' },
        { question: 'Which deck is best on Azamara?', answer: 'Midship cabins on higher decks are often preferred for stability and scenic views.' },
        { question: 'Are Azamara cabins small?', answer: 'Azamara cabins are generally comparable to other boutique luxury cruise lines and prioritize efficient comfort.' },
        { question: 'What is the difference between veranda cabins and suites?', answer: 'Suites provide significantly more space, upgraded amenities, concierge services, and additional luxury inclusions.' },
        { question: 'Which Azamara cabin should I avoid?', answer: 'Some travelers prefer avoiding cabins near elevators, service areas, or directly below pool decks due to potential noise.' },
        { question: 'Is Azamara good for couples?', answer: 'Yes. Azamara strongly appeals to couples seeking immersive luxury travel and relaxed boutique cruising.' },
        { question: 'Are Azamara cabins updated?', answer: 'Azamara ships have undergone modernization updates designed to maintain a contemporary boutique luxury atmosphere.' },
        { question: 'Are Azamara veranda cabins worth the extra cost?', answer: 'For scenic itineraries and travelers valuing private outdoor space, many consider veranda cabins highly worthwhile.' }
    ];

    const mediMistakes = [
        {
            title: 'Choosing the Cheapest Cabin Without Considering Itinerary',
            desc: 'On scenic itineraries, balconies can dramatically improve the cruise experience.'
        },
        {
            title: 'Ignoring Cabin Location',
            desc: 'Noise, motion, and accessibility vary significantly by deck placement.'
        },
        {
            title: 'Waiting Too Long to Book Suites',
            desc: 'Premium Azamara suites often sell out early on popular itineraries.'
        },
        {
            title: 'Overpaying for Unnecessary Space',
            desc: 'Some travelers spend minimal time in the cabin and may not need top-tier suites.'
        }
    ]

    const whichCabinBest = [
        {
            label: 'Best Overall Value',
            title: 'Veranda Staterooms',
            reasons: ['Comfort', 'Scenic access', 'Price', 'Luxury experience'],
            icon: Star
        },
        {
            label: 'Best Luxury Experience',
            title: "World Owner's Suites",
            reasons: ['Space', 'Privacy', 'Personalized service', 'Premium luxury'],
            icon: Crown
        },
        {
            label: 'Best Budget Option',
            title: 'Oceanview Staterooms',
            reasons: ['Excellent compromise between price and comfort'],
            icon: Gem
        }
    ]

    const cabinLocations = [
        {
            title: 'Midship Cabins',
            desc: 'Highly recommended for travelers concerned about motion sensitivity.',
            bullets: ['Greater stability', 'Central location', 'Easier access to elevators and dining'],
            icon: Anchor
        },
        {
            title: 'Higher Deck Verandas',
            desc: 'Ideal for:',
            bullets: ['Scenic viewing', 'Photography', 'Quiet outdoor relaxation'],
            icon: Compass
        },
        {
            title: 'Cabins to Avoid',
            desc: 'Some travelers prefer avoiding:',
            bullets: ['Cabins directly below pool decks', 'Cabins near elevators', 'Cabins adjacent to service areas'],
            icon: Shield
        }
    ]

    const whatsIncluded = [
        { category: 'Azamara cabins generally include:', items: ['Premium bedding', 'Luxury bath amenities', 'Flat-screen television', 'In-room dining', 'Daily housekeeping', 'Mini refrigerator', 'Safe', 'Wi-Fi access options'] },
        { category: 'Suite guests may also receive:', items: ['Butler service', 'Priority reservations', 'Complimentary specialty dining', 'Concierge support'] }
    ]

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
                "name": "Azamara Cabins Guide",
                "url": "https://www.tripsandships.com/azamara-cabins-guide",
                "description": "Expert guide to Azamara cabins, suites, veranda staterooms, and luxury cruise accommodations."
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
                        "name": "Azamara Cabins Guide",
                        "item": "https://www.tripsandships.com/azamara-cabins-guide"
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
                <title>Azamara Cabins Guide 2026 | Best Cabins & Suites Explained</title>
                <meta name="description" content="Discover the ultimate Azamara Cabins Guide with expert luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Explore Azamara cabin categories, suite options, veranda staterooms, best cabin locations, luxury amenities, and expert cruise planning advice for 2026." />
                <meta name="keywords" content="Azamara Cabins Guide, Azamara cabins, Azamara suites, Azamara veranda cabins, Azamara stateroom guide, Best Azamara cabins, Azamara cabin categories, Azamara suite experience, Small ship luxury cruise cabins" />
                <script type="application/ld+json">
                    {JSON.stringify(mediSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
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
                        <Ship size={16} />
                        <span>Official Azamara Accommodations Guide</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Azamara Cabins Guide: Choosing the Best Staterooms & Suites for Luxury Cruising
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
                            <span className="medi-premium-mini-badge">EXPERT CABIN SELECTION</span>
                            <h2 className="medi-premium-heading">Why Choosing the Right Azamara Cabin Matters</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                For luxury travelers planning an Azamara cruise, selecting the right cabin can significantly shape the overall onboard experience.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    While Azamara is known for destination-focused cruising and immersive itineraries, travelers quickly discover that cabin selection plays an important role in:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Heart size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Comfort</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Shield size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Privacy</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sun size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Scenic views</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <MapPin size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Convenience</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Anchor size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Relaxation</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Crown size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Overall cruise value</span>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers compare Azamara cabin categories based on travel style, budget, itinerary, and personal preferences.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years of luxury travel expertise and visits to over 121 countries, Angela Hughes provides real-world cruise insight beyond generic online cabin reviews.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNDERSTANDING CABIN CATEGORIES */}
            <section className="azc-categories-section">
                <div className="azc-categories-container">
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="medi-itinerary-eyebrow">ACCOMMODATION OPTIONS</span>
                        <h2 className="medi-section-heading">Understanding Azamara Cabin Categories</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="azc-intro-text">
                        Azamara offers several primary accommodation categories designed for different styles of luxury travelers. These include:
                    </p>

                    <div className="azc-categories-grid">
                        {[
                            'Inside Staterooms',
                            'Oceanview Staterooms',
                            'Veranda Staterooms',
                            'Club Continent Suites',
                            'Spa Suites',
                            'Ocean Suites',
                            'World Owner’s Suites'
                        ].map((category, idx) => (
                            <div key={idx} className="azc-category-card">
                                <CheckCircle size={20} className="azc-category-icon" />
                                <span>{category}</span>
                            </div>
                        ))}
                    </div>

                    <div className="azc-conclusion-box">
                        <Anchor size={20} className="azc-conclusion-icon" />
                        <p>
                            Because Azamara ships are boutique-sized, even standard accommodations tend to feel more intimate and personalized compared to larger mega ships.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHICH CABIN IS BEST */}
            <section className="medi-diff-section">
                <div className="medi-diff-container">
                    <div className="medi-diff-header-block">
                        <span className="medi-diff-eyebrow-tag">CABIN COMPARISON</span>
                        <h2 className="medi-diff-main-title">Which Azamara Cabin is Best?</h2>
                        <div className="medi-diff-separator"></div>
                    </div>

                    <div className="medi-diff-grid">
                        {whichCabinBest.map((item, idx) => {
                            const IconComponent = item.icon
                            return (
                                <div key={idx} className={`medi-diff-card ${idx === 0 ? 'medi-diff-card-navy' : idx === 1 ? 'medi-diff-card-white' : 'medi-diff-card-soft'}`}>
                                    <div className="medi-diff-icon-header">
                                        <div className="medi-diff-icon-box">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="medi-diff-card-title">{item.label}</h3>
                                    </div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: idx === 0 ? '#ffffff' : '#1e293b' }}>{item.title}</h4>
                                    <ul className="medi-diff-experience-list">
                                        {item.reasons.map((reason, rIdx) => (
                                            <li key={rIdx}>
                                                <CheckCircle size={16} className="medi-diff-list-icon" />
                                                <span>{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* AZAMARA CABINS SHOWCASE */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">ACCOMMODATION GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Choosing the Best Azamara Staterooms & Suites</h2>
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
                                            mediSelectedItinerary === 1 ? italyCruise :
                                                croatiaCoast // Placeholder, can be mapped to specific cabin images
                                    }
                                    alt={mediItineraries[mediSelectedItinerary].title}
                                    className="medi-itinerary-showcase-img"
                                />
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">EXPERT SELECTION</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">{mediItineraries[mediSelectedItinerary].title}</h3>

                                <div className="medi-itinerary-details-grid">
                                    {/* Best For Column */}
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

                                    {/* Features Column */}
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Features Include:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {mediItineraries[mediSelectedItinerary].highlights.map((item, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <CheckCircle size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{item}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '20px', borderTop: '1px solid rgba(39, 68, 114, 0.1)', paddingTop: '18px' }}>
                                    {mediItineraries[mediSelectedItinerary].extraNote && (
                                        <p style={{ color: '#475569', fontSize: '15px', marginBottom: '12px', fontStyle: 'italic', lineHeight: '1.6' }}>
                                            {mediItineraries[mediSelectedItinerary].extraNote}
                                        </p>
                                    )}
                                    <p style={{ color: '#334155', fontSize: '16px', lineHeight: '1.6', fontWeight: '500' }}>
                                        {mediItineraries[mediSelectedItinerary].footerText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST CABIN LOCATIONS ON AZAMARA SHIPS */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best Cabin Locations on Azamara Ships</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        {cabinLocations.map((location, idx) => {
                            const IconComponent = location.icon;
                            const isAvoidColumn = location.title.toLowerCase().includes("avoid");

                            return (
                                <div key={idx} className={`medi-audience-column ${isAvoidColumn ? 'medi-not-ideal-column' : 'medi-best-for-column'}`}>
                                    <h3 className="medi-audience-column-heading">
                                        <IconComponent size={22} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                                        {location.title}
                                    </h3>
                                    <p style={{ marginBottom: '20px', color: '#475569', fontSize: '15px' }}>{location.desc}</p>

                                    <ul className="medi-audience-list">
                                        {location.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx}>
                                                <div className={`medi-audience-icon-wrapper ${isAvoidColumn ? 'not-ideal' : 'best'}`}>
                                                    {isAvoidColumn ? <Minus size={16} strokeWidth={3} /> : <CheckCircle size={16} strokeWidth={3} />}
                                                </div>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* NEW LOOK: ADVISOR NOTE FOR THE AVOID BOX */}
                                    {isAvoidColumn && (
                                        <div className="medi-advisor-tip-box">
                                            <ShieldAlert size={20} className="medi-advisor-tip-icon" />
                                            <p className="medi-advisor-tip-text">
                                                An experienced cruise advisor can help travelers identify ideal cabin locations based on specific ships and itineraries.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ARE AZAMARA SUITES WORTH IT */}
            <section className="medi-luxury-definition-section">
                <div className="medi-luxury-definition-container">
                    <div className="medi-luxury-content-wrapper">
                        <span className="medi-luxury-eyebrow-label">PREMIUM UPGRADES</span>
                        <h2 className="medi-luxury-heading">Are Azamara Suites Worth It?</h2>

                        <p className="medi-luxury-paragraph">
                            For many luxury travelers, yes.
                        </p>

                        <div className="medi-luxury-appreciated-box">
                            <h3 className="medi-luxury-subheading">Azamara suites provide:</h3>

                            <div className="medi-luxury-features-grid">
                                {[
                                    "Additional space",
                                    "Personalized attention",
                                    "Premium amenities",
                                    "Better privacy",
                                    "Elevated comfort"
                                ].map((item, idx) => (
                                    <div key={idx} className="medi-luxury-feature">
                                        <CheckCircle size={20} className="medi-feature-check-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="medi-luxury-comparison-note" style={{ marginTop: '30px' }}>
                            <p className="medi-luxury-paragraph">
                                However, travelers spending most of their time exploring destinations may find veranda cabins provide better overall value.
                            </p>
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={luxurySuite} alt="Azamara luxury suite" className="medi-luxury-main-image" />
                    </div>
                </div>
            </section>

            {/* WHAT IS INCLUDED IN AZAMARA CABINS */}
            <section className="medi-luxury-definition-section" style={{ backgroundColor: '#ffffff' }}>
                <div className="medi-luxury-definition-container" style={{ flexDirection: 'row-reverse' }}>
                    <div className="medi-luxury-content-wrapper">
                        <h2 className="medi-luxury-heading">What Is Included in Azamara Cabins?</h2>

                        <div className="medi-luxury-appreciated-box" style={{ background: 'transparent', padding: '0', boxShadow: 'none' }}>
                            {whatsIncluded.map((included, idx) => (
                                <div key={idx} style={{ marginBottom: '30px' }}>
                                    <h4 style={{ fontWeight: 'bold', marginBottom: '15px', color: '#1e293b', fontSize: '18px' }}>{included.category}</h4>
                                    <div className="medi-luxury-features-grid">
                                        {included.items.map((item, iIdx) => (
                                            <div key={iIdx} className="medi-luxury-feature">
                                                <CheckCircle size={20} className="medi-feature-check-icon" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="medi-luxury-visual-wrapper">
                        <img src={destinationDining} alt="Azamara cabin amenities" className="medi-luxury-main-image" />
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
                            Common Mistakes When Choosing Azamara Cabins
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

            {/* EXPERT INSIGHT */}
            <section className="medi-expert-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        {/* Left Side */}
                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={azamaraShip} alt="Angela Hughes - Luxury Cruise Expert" />
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

                        {/* Right Side */}
                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Expert Insight from Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-body-para">
                                According to Angela Hughes, cabin selection is one of the most overlooked aspects of luxury cruise planning.
                            </p>
                            <p className="medi-editorial-body-para">
                                After decades of luxury cruise advising, Angela consistently sees travelers maximize satisfaction when accommodations align with:
                            </p>

                            <ul className="medi-editorial-list-classic">
                                <li><CheckCircle size={16} className="medi-editorial-list-icon" /> Travel style</li>
                                <li><CheckCircle size={16} className="medi-editorial-list-icon" /> Activity level</li>
                                <li><CheckCircle size={16} className="medi-editorial-list-icon" /> Budget priorities</li>
                                <li><CheckCircle size={16} className="medi-editorial-list-icon" /> Scenic preferences</li>
                                <li><CheckCircle size={16} className="medi-editorial-list-icon" /> Itinerary intensity</li>
                            </ul>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel expert, Angela Hughes helps travelers compare cabin categories realistically rather than relying solely on marketing descriptions.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'Boutique ships', icon: Anchor },
                                        { title: 'Cultural travel', icon: Globe },
                                        { title: 'Premium international travel planning', icon: Sparkles }
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
                        <p className="medi-work-intro-para" style={{ color: 'white', marginTop: '15px', opacity: 0.9 }}>
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
                                    <li><CheckCircle size={18} className="medi-pillar-list-icon icon-theme" /><span>Compare cabin categories accurately</span></li>
                                    <li><CheckCircle size={18} className="medi-pillar-list-icon icon-theme" /><span>Select ideal cabin locations</span></li>
                                    <li><CheckCircle size={18} className="medi-pillar-list-icon icon-theme" /><span>Maximize cruise value</span></li>
                                    <li><CheckCircle size={18} className="medi-pillar-list-icon icon-theme" /><span>Access exclusive amenities</span></li>
                                    <li><CheckCircle size={18} className="medi-pillar-list-icon icon-theme" /><span>Avoid poor cabin placement</span></li>
                                    <li><CheckCircle size={18} className="medi-pillar-list-icon icon-theme" /><span>Match accommodations to travel style</span></li>
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
                                    <li><Ship size={18} className="medi-pillar-list-icon icon-theme" /><span>Luxury cruising</span></li>
                                    <li><Star size={18} className="medi-pillar-list-icon icon-theme" /><span>Boutique ship experiences</span></li>
                                    <li><Globe size={18} className="medi-pillar-list-icon icon-theme" /><span>Small ship travel</span></li>
                                    <li><Compass size={18} className="medi-pillar-list-icon icon-theme" /><span>Expedition voyages</span></li>
                                    <li><MapPin size={18} className="medi-pillar-list-icon icon-theme" /><span>Premium global travel planning</span></li>
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
                                    <li><Ship size={18} className="medi-pillar-list-icon icon-theme" /><span>Luxury cruises</span></li>
                                    <li><Anchor size={18} className="medi-pillar-list-icon icon-theme" /><span>Small ship cruising</span></li>
                                    <li><Globe size={18} className="medi-pillar-list-icon icon-theme" /><span>Asia travel</span></li>
                                    <li><Compass size={18} className="medi-pillar-list-icon icon-theme" /><span>Luxury expedition voyages</span></li>
                                    <li><Star size={18} className="medi-pillar-list-icon icon-theme" /><span>Personalized luxury travel experiences</span></li>
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
                        <h2 className="medi-cta-heading-white">Ready to Choose the Perfect Azamara Cabin?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Selecting the right cabin can dramatically enhance a luxury cruise experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether travelers prioritize:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Scenic balconies",
                                    "Spacious suites",
                                    "Budget-conscious comfort",
                                    "Wellness-focused accommodations",
                                    "Boutique luxury experiences"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 12px' }}>
                            Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal Azamara accommodations for their travel goals.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            With over four decades of luxury cruise expertise, Trips & Ships Luxury Travel provides personalized guidance backed by real-world travel experience.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Personalized Azamara Cruise Consultation Today
                            </button>
                        </div>

                        {/* Resource Links Block */}
                        <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', opacity: 0.8, fontSize: '0.85rem' }}>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Globe size={14} /> Azamara Cruises Official Website
                            </span>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>CLIA</span>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Travel Leaders Network</span>
                            <span className="medi-cta-paragraph-white" style={{ margin: 0 }}>Condé Nast Traveler</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AzamaraCabinsGuide2026