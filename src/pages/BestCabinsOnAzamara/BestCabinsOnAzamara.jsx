import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import azamaraShip from "../../assets/Media (1).jpg"
import Profile_AH from '../../assets/Profile_AH.jpg'



import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap,
    Shield,
    Quote
} from 'lucide-react'
import { Helmet } from 'react-helmet-async' 
import { useState, useEffect } from 'react'
import hero1 from '../../assets/BestCabinsOnAzamara/Azamara-night.webp'
import hero2 from '../../assets/BestCabinsOnAzamara/AzamaraNorway.webp'
import hero3 from '../../assets/AzamaraMediterraneanCruises/Azamara Italy luxury cruise.webp'
import cabinimg from "../../assets/AzamaraAlaskaCruises/Hero1.webp"
import cabinGallery1 from '../../assets/BestCabinsOnAzamara/Onboard_Embarkation_004.webp'
import cabinGallery2 from '../../assets/BestCabinsOnAzamara/Singapore_GardensByTheBay_252.webp'
import cabinGallery3 from '../../assets/BestCabinsOnAzamara/Singapore_RiverCruise_035 (1).webp'
import suiteSlide1 from '../../assets/BestCabinsOnAzamara/Azamara-night.webp'
import suiteSlide2 from '../../assets/BestCabinsOnAzamara/AzamaraNorway.webp'
import suiteSlide3 from '../../assets/BestCabinsOnAzamara/Napier_GannetSafari_JLP_0344_VSCO.webp'
import suiteSlide4 from '../../assets/BestCabinsOnAzamara/Tauranga_Rotorua_TePuia_Geyser_JLP_0069.webp'
import suiteSlide5 from '../../assets/BestCabinsOnAzamara/Tauranga_Rotorua_TePuia_Haka_JLP_0426.webp'

function BestCabinsOnAzamara() {
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
    const [suiteSliderIndex, setSuiteSliderIndex] = useState(0)
    const [isSuiteSliderHovered, setIsSuiteSliderHovered] = useState(false)

    const suiteSliderImages = [
        { src: suiteSlide1, caption: 'Azamara Night Sailing' },
        { src: suiteSlide2, caption: 'Norwegian Fjords' },
        { src: suiteSlide3, caption: 'Exclusive Shore Experiences' },
        { src: suiteSlide4, caption: 'Scenic Destinations' },
        { src: suiteSlide5, caption: 'Cultural Immersion' },
    ]

    useEffect(() => {
        if (isSuiteSliderHovered) return
        const suiteTimer = setInterval(() => {
            setSuiteSliderIndex((prev) => (prev + 1) % suiteSliderImages.length)
        }, 3500)
        return () => clearInterval(suiteTimer)
    }, [isSuiteSliderHovered, suiteSliderImages.length])

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
            title: "World Owner’s Suite",
            bestFor: [
                "Luxury-focused travelers",
                "Special celebrations",
                "Honeymoons",
                "Anniversary cruises",
                "Extended voyages"
            ],
            highlights: [
                "Expansive living areas",
                "Oversized balconies",
                "Butler service",
                "Luxury bathroom finishes",
                "Concierge support",
                "Priority dining reservations",
                "Personalized onboard service"
            ],
            description: "These suites represent Azamara’s highest level of onboard luxury. Travelers prioritizing space and premium service often consider them worth the investment."
        }
    ];

    const mediFaqs = [
        {
            question: 'What are the best cabins on Azamara Cruises?',
            answer: 'The best cabins on Azamara are Club Veranda cabins and Club Suites, offering the ideal balance of comfort, views, and luxury amenities.'
        },
        {
            question: 'Which Azamara cabin is best for first-time cruisers?',
            answer: 'Club Veranda cabins are the best choice for first-time guests due to their private balcony and overall value.'
        },
        {
            question: 'Are Azamara suites worth the upgrade?',
            answer: 'Yes. Suites offer significantly more space, priority services, and enhanced onboard amenities, making them ideal for luxury travelers.'
        },
        {
            question: 'What is the difference between Interior and Oceanview cabins on Azamara?',
            answer: 'Interior cabins have no windows, while Oceanview cabins provide natural light and sea views.'
        },
        {
            question: 'Do Azamara cabins have balconies?',
            answer: 'Only Club Veranda cabins and Suites include private balconies; Interior and Oceanview cabins do not.'
        },
        {
            question: 'What is included in Azamara Club Suites?',
            answer: 'Club Suites include spacious layouts, butler service, priority embarkation, and upgraded onboard benefits.'
        },
        {
            question: 'Which cabin is best for couples on Azamara?',
            answer: 'Veranda cabins and Suites are most popular with couples due to privacy, views, and comfort.'
        },
        {
            question: 'Are Azamara cabins small compared to other cruise lines?',
            answer: 'They are cozy but well-designed; Suites and Veranda cabins offer more space and comfort.'
        },
        {
            question: 'What is the most affordable cabin on Azamara?',
            answer: 'Interior cabins are the most budget-friendly option while still offering Azamara’s premium service.'
        },
        {
            question: 'Which deck is best for Azamara cabins?',
            answer: 'Midship cabins on middle decks are preferred for stability, convenience, and smoother sailing.'
        },
        {
            question: 'What is the difference between Club Veranda and Club Veranda Plus?',
            answer: 'Club Veranda Plus includes extra perks like beverage packages, Wi-Fi credits, and additional amenities.'
        },
        {
            question: 'Do Azamara suites include butler service?',
            answer: 'Yes, most suite categories include personalized butler service and premium attention.'
        },
        {
            question: 'Are Azamara cabins good for long cruises?',
            answer: 'Yes. Veranda cabins and Suites are especially comfortable for extended itineraries.'
        },
        {
            question: 'Which cabin offers the best value on Azamara?',
            answer: 'Club Veranda cabins offer the best overall value for luxury, comfort, and views.'
        },
        {
            question: 'How do I choose the right Azamara cabin?',
            answer: 'Consider your budget, desired space, balcony preference, and how much time you plan to spend in your cabin.'
        }
    ];

    const mediMistakes = [
        {
            title: 'Booking the Cheapest Cabin Without Considering the Itinerary',
            desc: 'On highly scenic itineraries, balconies can dramatically improve the experience.'
        },
        {
            title: 'Ignoring Cabin Placement',
            desc: 'Noise levels, motion, and convenience vary significantly by location.'
        },
        {
            title: 'Waiting Too Long to Reserve Suites',
            desc: 'Premium suites often sell out early on popular sailings.'
        },
        {
            title: 'Overpaying for Unused Space',
            desc: 'Some travelers spend little time in their cabin and may not benefit from expensive suite upgrades.'
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
                "name": "Best Cabins on Azamara",
                "url": "https://www.tripsandships.com/best-cabins-on-azamara",
                "description": "Expert guide to the best Azamara cabins, suites, veranda staterooms, and luxury cruise accommodations."
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
                        "name": "Best Cabins on Azamara",
                        "item": "https://www.tripsandships.com/best-cabins-on-azamara"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which cabin is best on Azamara?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Veranda staterooms are widely considered the best overall combination of luxury, comfort, and value."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Azamara veranda cabins worth it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many travelers consider private balconies highly worthwhile, especially on scenic itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Azamara suites worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For travelers prioritizing luxury space and personalized service, Azamara suites can provide excellent value."
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
                    Best Cabins on Azamara 2026 | Expert Luxury Cruise Cabin Guide

                </title>
                <meta
                    name="title"
                    content="Best Cabins on Azamara | Luxury Cruise Cabin Guide 2026

"
                />
                <meta
                    name="description"
                    content="Discover the best cabins on Azamara with expert luxury cruise insights from Angela Hughes, CEO of Trips & Ships Luxury Travel. Explore the top Azamara suites, veranda staterooms, ideal cabin locations, and expert recommendations for luxury cruising in 2026.
"
                />
                <meta name="keywords" content="Best Cabins on Azamara
, Best Azamara cabins
, Azamara suites
, Best Azamara staterooms
s" />
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
                        <Ship size={16} />
                        <span>Azamara Stateroom & Suite Guide</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Best Cabins on Azamara: How to Choose the Perfect Luxury Cruise Accommodation
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
                            <span className="medi-premium-mini-badge">EXPERT CABIN GUIDE</span>
                            <h2 className="medi-premium-heading">Why Cabin Selection Matters on Azamara</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                For travelers planning a luxury cruise with Azamara, choosing the right cabin can significantly influence the overall experience.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    While Azamara is celebrated for boutique ships and destination immersion, the right cabin selection dramatically improves:
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
                                        <span className="medi-immersion-card-title">Scenic enjoyment</span>
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
                                        <span className="medi-immersion-card-title">Relaxation onboard</span>
                                    </div>

                                    <div className="medi-immersion-card-item">
                                        <div className="medi-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="medi-immersion-card-title">Boutique luxury</span>
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
                                    At Trips & Ships Luxury Travel, luxury cruise expert Angela Hughes helps travelers compare Azamara cabin categories and identify the best accommodations based on itinerary, budget, and travel style.
                                </p>

                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years of luxury travel expertise and visits to over 121 countries, Angela Hughes provides practical cruise insights far beyond generic online reviews.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNDERSTANDING AZAMARA CABIN CATEGORIES */}
            <section className="medi-excellence-section">
                <div className="medi-excellence-container">
                    <div className="medi-excel-header-block" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="medi-diff-eyebrow-tag">ACCOMMODATION OVERVIEW</span>
                        <h2 className="medi-section-heading">Understanding Azamara Cabin Categories</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="medi-body-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Because Azamara ships are smaller and more intimate than mega ships, even standard accommodations feel more refined and personalized. However, some cabin categories clearly stand out depending on traveler priorities.
                        </p>
                    </div>

                    <div className="medi-differentiator-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h3 className="medi-card-title" style={{ marginBottom: '30px' }}>
                            Azamara ships feature several primary accommodation categories:
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                            {['Inside Staterooms', 'Oceanview Staterooms', 'Veranda Staterooms', 'Club Continent Suites', 'Spa Suites', 'Ocean Suites', 'World Owner’s Suites'].map((cat, idx) => (
                                <span key={idx} className="medi-itinerary-details-chip">
                                    <CheckCircle size={16} className="medi-itinerary-chip-icon" />
                                    <span>{cat}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CABIN CATEGORIES IMAGE GALLERY */}
            <section style={{ background: '#f8fafc', padding: '60px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '24px'
                    }}>
                        {/* Image 1 */}
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(15,28,46,0.13)',
                            position: 'relative',
                            aspectRatio: '4/3',
                            background: '#0f1c2e'
                        }}>
                            <img
                                src={cabinGallery1}
                                alt="Azamara onboard embarkation experience"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 0.4s ease'
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '20px 20px 16px',
                                background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 100%)'
                            }}>
                                <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                                    Onboard Experience
                                </span>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(15,28,46,0.13)',
                            position: 'relative',
                            aspectRatio: '4/3',
                            background: '#0f1c2e'
                        }}>
                            <img
                                src={cabinGallery2}
                                alt="Singapore Gardens by the Bay Azamara cruise destination"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 0.4s ease'
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '20px 20px 16px',
                                background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 100%)'
                            }}>
                                <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                                    Destination Immersion
                                </span>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(15,28,46,0.13)',
                            position: 'relative',
                            aspectRatio: '4/3',
                            background: '#0f1c2e'
                        }}>
                            <img
                                src={cabinGallery3}
                                alt="Singapore River Cruise Azamara scenic sailing"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 0.4s ease'
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '20px 20px 16px',
                                background: 'linear-gradient(to top, rgba(15,28,46,0.85) 0%, transparent 100%)'
                            }}>
                                <span style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '0.02em' }}>
                                    Scenic Sailing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST OVERALL CABIN */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative medi-intro-container">
                    <div className="medi-excel-header-block" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span className="medi-diff-eyebrow-tag" style={{ color: '#93c5fd' }}>TOP RECOMMENDATION</span>
                        <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Best Overall Cabin on Azamara: Veranda Staterooms</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            For many luxury travelers, veranda staterooms offer the ideal balance between price, comfort, and scenic access.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>

                        {/* Column 1 */}
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ background: 'rgba(147, 197, 253, 0.1)', color: '#93c5fd', padding: '10px', borderRadius: '10px' }}>
                                    <Heart size={24} />
                                </div>
                                <h3 className="medi-card-title" style={{ color: '#ffffff', margin: 0, fontSize: '22px' }}>Why Travelers Love Them</h3>
                            </div>
                            <ul className="medi-excel-list">
                                {['Price value', 'Exceptional comfort', 'Unobstructed scenic access', 'Relaxed luxury atmosphere', 'Private outdoor space'].map((item, idx) => (
                                    <li key={idx} className="medi-excel-list-item">
                                        <CheckCircle size={18} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ fontSize: '16px', color: '#e2e8f0' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ background: 'rgba(147, 197, 253, 0.1)', color: '#93c5fd', padding: '10px', borderRadius: '10px' }}>
                                    <Sparkles size={24} />
                                </div>
                                <h3 className="medi-card-title" style={{ color: '#ffffff', margin: 0, fontSize: '22px' }}>Features Include</h3>
                            </div>
                            <ul className="medi-excel-list">
                                {['Private balcony', 'Floor-to-ceiling glass doors', 'Sitting area', 'Premium bedding', 'Modern bathrooms', 'Comfortable cabin layouts'].map((item, idx) => (
                                    <li key={idx} className="medi-excel-list-item">
                                        <CheckCircle size={18} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ fontSize: '16px', color: '#e2e8f0' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ background: 'rgba(147, 197, 253, 0.1)', color: '#93c5fd', padding: '10px', borderRadius: '10px' }}>
                                    <MapPin size={24} />
                                </div>
                                <h3 className="medi-card-title" style={{ color: '#ffffff', margin: 0, fontSize: '22px' }}>Valuable On</h3>
                            </div>
                            <ul className="medi-excel-list">
                                {['Japan cruises', 'Mediterranean itineraries', 'Scenic coastal sailings', 'Norway voyages', 'Alaska-style scenic routes'].map((item, idx) => (
                                    <li key={idx} className="medi-excel-list-item">
                                        <CheckCircle size={18} style={{ color: '#93c5fd', flexShrink: 0 }} />
                                        <span style={{ fontSize: '16px', color: '#e2e8f0' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Highlight Box */}
                    <div style={{ background: 'rgba(147, 197, 253, 0.1)', border: '1px solid rgba(147, 197, 253, 0.2)', borderLeft: '4px solid #93c5fd', borderRadius: '0 12px 12px 0', color: '#ffffff', maxWidth: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 32px' }}>
                        <div style={{ background: 'rgba(147, 197, 253, 0.15)', padding: '12px', borderRadius: '50%' }}>
                            <Star size={32} style={{ color: '#93c5fd', flexShrink: 0 }} />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.6', color: '#e2e8f0' }}>
                            Travelers who enjoy relaxing privately while enjoying ocean views consistently rate veranda cabins among the best choices on Azamara.
                        </span>
                    </div>
                </div>
            </section>

            {/* BEST LUXURY CABIN SHOWCASE */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">ACCOMMODATION SHOWCASE</span>
                        <h2 className="medi-itinerary-showcase-heading">Best Luxury Cabin on Azamara</h2>
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
                                {/* Placeholder for cabin image - keeping overlay/badge design */}
                                <div className="medi-itinerary-showcase-img-overlay"><img src={cabinimg} alt="" /></div>
                                <span className="medi-itinerary-showcase-badge">ULTIMATE LUXURY</span>
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
                                        <h4 className="medi-itinerary-details-heading">Premium Features:</h4>
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

                                {/* Added description paragraph using standard spacing to fit design */}
                                <div style={{ marginTop: '20px' }}>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: '1.6', color: '#4b5563' }}>
                                        {mediItineraries[mediSelectedItinerary].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BEST AZAMARA CABIN FOR COUPLES */}
            <section className="medi-excel-section">
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <span className="medi-itinerary-eyebrow">COUPLES ACCOMMODATION</span>
                        <h2 className="medi-excel-main-title">Best Azamara Cabin for Couples</h2>
                        <div className="medi-excel-separator"></div>
                        <h3 style={{ color: '#93c5fd', fontSize: '1.4rem', fontWeight: '500', margin: '16px 0 8px' }}>Club Veranda Staterooms</h3>
                        <p className="medi-excel-lead-paragraph">
                            Couples frequently choose Club Veranda cabins because they provide:
                        </p>
                    </div>

                    <div className="medi-excel-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <ul className="medi-excel-list">
                                    {['Romantic private balconies', 'Comfortable layout', 'Scenic ocean views', 'Relaxed boutique atmosphere', 'Strong value compared to suites'].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                {idx === 0 ? <Heart size={18} /> : idx === 1 ? <LayoutList size={18} /> : idx === 2 ? <Compass size={18} /> : idx === 3 ? <Sparkles size={18} /> : <Gem size={18} />}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(147, 197, 253, 0.1)', border: '1px solid rgba(147, 197, 253, 0.2)', borderLeft: '4px solid #93c5fd', borderRadius: '0 12px 12px 0', color: '#ffffff', maxWidth: '100%', margin: '40px auto 0', display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 32px' }}>
                        <div style={{ background: 'rgba(147, 197, 253, 0.15)', padding: '12px', borderRadius: '50%' }}>
                            <Heart size={32} style={{ color: '#93c5fd', flexShrink: 0 }} />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.6', color: '#e2e8f0' }}>
                            Azamara's destination-focused itineraries pair exceptionally well with balcony accommodations for couples seeking immersive luxury travel.
                        </span>
                    </div>
                </div>
            </section>

            {/* BEST AZAMARA CABIN FOR MOTION SENSITIVITY */}
            <section className="medi-excel-section">
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <span className="medi-itinerary-eyebrow">COMFORT & STABILITY</span>
                        <h2 className="medi-excel-main-title">Best Azamara Cabin for Motion Sensitivity</h2>
                        <div className="medi-excel-separator"></div>
                        <h3 style={{ color: '#93c5fd', fontSize: '1.4rem', fontWeight: '500', margin: '16px 0 8px' }}>Midship Cabins on Lower to Mid Decks</h3>
                        <p className="medi-excel-lead-paragraph">
                            Travelers concerned about seasickness often benefit from:
                        </p>
                    </div>

                    <div className="medi-excel-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <ul className="medi-excel-list">
                                    {['Midship placement', 'Lower deck stability', 'Centralized ship positioning'].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                {idx === 0 ? <Anchor size={18} /> : idx === 1 ? <Shield size={18} /> : <Ship size={18} />}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(147, 197, 253, 0.1)', border: '1px solid rgba(147, 197, 253, 0.2)', borderLeft: '4px solid #93c5fd', borderRadius: '0 12px 12px 0', color: '#ffffff', maxWidth: '100%', margin: '40px auto 0', display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 32px' }}>
                        <div style={{ background: 'rgba(147, 197, 253, 0.15)', padding: '12px', borderRadius: '50%' }}>
                            <Ship size={32} style={{ color: '#93c5fd', flexShrink: 0 }} />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.6', color: '#e2e8f0' }}>
                            These cabins experience less noticeable movement during rougher seas. Experienced cruise advisors often prioritize these locations for travelers new to cruising.
                        </span>
                    </div>
                </div>
            </section>


            {/* VIDEO SHOWCASE SECTION */}
            <section className="medi-video-section" style={{ background: '#f8fafc', padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* <h2 className="medi-section-heading">Experience the Japan with Azamara</h2> */}
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

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
                            src="https://www.youtube.com/embed/gF5XBSByguQ"
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

            {/* BEST AZAMARA SUITES */}
            <section className="medi-excel-section">
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <span className="medi-itinerary-eyebrow">PREMIUM SUITES</span>
                        <h2 className="medi-excel-main-title">Best Azamara Suites</h2>
                        <div className="medi-excel-separator"></div>
                        <h3 style={{ color: '#93c5fd', fontSize: '1.4rem', fontWeight: '500', margin: '16px 0 8px' }}>Club Continent Suites</h3>
                        <p className="medi-excel-lead-paragraph">
                            Excellent Balance of Luxury & Value
                        </p>
                    </div>

                    <div className="medi-excel-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">These suites offer:</h3>
                                <ul className="medi-excel-list">
                                    {['More space', 'Enhanced amenities', 'Concierge service', 'Preferred locations', 'Upgraded bathrooms', 'Priority embarkation'].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                {idx === 0 ? <LayoutList size={18} /> : idx === 1 ? <Sparkles size={18} /> : idx === 2 ? <Users size={18} /> : idx === 3 ? <MapPin size={18} /> : idx === 4 ? <Star size={18} /> : <Crown size={18} />}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(147, 197, 253, 0.1)', border: '1px solid rgba(147, 197, 253, 0.2)', borderLeft: '4px solid #93c5fd', borderRadius: '0 12px 12px 0', color: '#ffffff', maxWidth: '100%', margin: '40px auto 0', display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 32px' }}>
                        <div style={{ background: 'rgba(147, 197, 253, 0.15)', padding: '12px', borderRadius: '50%' }}>
                            <Crown size={32} style={{ color: '#93c5fd', flexShrink: 0 }} />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.6', color: '#e2e8f0' }}>
                            For many travelers, Club Continent Suites provide the "sweet spot" between affordability and premium luxury.
                        </span>
                    </div>

                    {/* AUTO IMAGE SLIDER */}
                    <div
                        style={{ position: 'relative', maxWidth: '900px', margin: '50px auto 0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', userSelect: 'none' }}
                        onMouseEnter={() => setIsSuiteSliderHovered(true)}
                        onMouseLeave={() => setIsSuiteSliderHovered(false)}
                    >
                        {/* Slides */}
                        {suiteSliderImages.map((slide, idx) => (
                            <div
                                key={idx}
                                style={{
                                    position: idx === 0 ? 'relative' : 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    opacity: suiteSliderIndex === idx ? 1 : 0,
                                    transition: 'opacity 0.8s ease-in-out',
                                    zIndex: suiteSliderIndex === idx ? 1 : 0,
                                }}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.caption}
                                    style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                                />
                                {/* Caption overlay */}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                    padding: '40px 30px 24px',
                                    background: 'linear-gradient(to top, rgba(10,18,35,0.9) 0%, transparent 100%)'
                                }}>
                                    <span style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: '600', letterSpacing: '0.03em' }}>
                                        {slide.caption}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Prev Arrow */}
                        <button
                            onClick={() => setSuiteSliderIndex((prev) => (prev - 1 + suiteSliderImages.length) % suiteSliderImages.length)}
                            style={{
                                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 10, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
                                border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%',
                                width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: '#ffffff', fontSize: '20px', transition: 'background 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        >&#8249;</button>

                        {/* Next Arrow */}
                        <button
                            onClick={() => setSuiteSliderIndex((prev) => (prev + 1) % suiteSliderImages.length)}
                            style={{
                                position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 10, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
                                border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%',
                                width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: '#ffffff', fontSize: '20px', transition: 'background 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        >&#8250;</button>

                        {/* Dot Indicators */}
                        <div style={{
                            position: 'absolute', bottom: '16px', right: '20px',
                            zIndex: 10, display: 'flex', gap: '8px', alignItems: 'center'
                        }}>
                            {suiteSliderImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSuiteSliderIndex(idx)}
                                    style={{
                                        width: suiteSliderIndex === idx ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        background: suiteSliderIndex === idx ? '#93c5fd' : 'rgba(255,255,255,0.45)',
                                        border: 'none', cursor: 'pointer', padding: 0,
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ARE AZAMARA VERANDA CABINS WORTH IT? */}
            <section className="medi-veranda-worth-section">
                <div className="medi-veranda-glow"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Are Azamara Veranda Cabins Worth It?</h2>
                        <div className="medi-excel-separator"></div>
                        <h3 className="medi-veranda-subtitle">
                            For most travelers, yes.
                        </h3>
                        <p className="medi-excel-lead-paragraph">
                            Having private balcony access creates a significantly elevated cruising experience, especially on scenic coastal sailings.
                        </p>
                    </div>

                    <div className="medi-excel-grid bco-veranda-grid">
                        {/* Column 1: General Benefits */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card bco-veranda-card">
                                <h3 className="medi-excel-card-heading bco-veranda-card-heading">
                                    <Sparkles size={20} />
                                    Benefits Include:
                                </h3>
                                <ul className="medi-excel-list bco-veranda-list">
                                    {[
                                        'Private outdoor space',
                                        'Scenic relaxation',
                                        'Better natural light',
                                        'More spacious atmosphere',
                                        'Enhanced luxury feeling'
                                    ].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                {idx === 0 ? <Sun size={18} /> :
                                                    idx === 1 ? <Compass size={18} /> :
                                                        idx === 2 ? <Sparkles size={18} /> :
                                                            idx === 3 ? <LayoutList size={18} /> :
                                                                <Crown size={18} />}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Scenic Itineraries */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card bco-veranda-card">
                                <h3 className="medi-excel-card-heading bco-veranda-card-heading">
                                    <Globe size={20} />
                                    Scenic Itinerary Value:
                                </h3>
                                <p className="bco-veranda-desc">
                                    Travelers on scenic itineraries especially appreciate having private balcony access during:
                                </p>
                                <ul className="medi-excel-list bco-veranda-list">
                                    {[
                                        'Coastal sailings',
                                        'Cherry blossom cruises',
                                        'Mediterranean sunsets',
                                        'Glacier and fjord viewing'
                                    ].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                {idx === 0 ? <Ship size={18} /> :
                                                    idx === 1 ? <Sparkles size={18} /> :
                                                        idx === 2 ? <Sun size={18} /> :
                                                            <Compass size={18} />}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Callout */}
                    <div className="medi-veranda-worth-callout">
                        <div className="medi-veranda-worth-callout-icon-box">
                            <Crown size={32} style={{ flexShrink: 0 }} />
                        </div>
                        <span className="medi-veranda-worth-callout-text">
                            Many experienced cruisers consider balcony cabins one of the most worthwhile upgrades.
                        </span>
                    </div>
                </div>
            </section>

            {/* WHICH DECK IS BEST ON AZAMARA? */}
            <section className="medi-excel-section">
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>
                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <span className="medi-itinerary-eyebrow">DECK SELECTION GUIDE</span>
                        <h2 className="medi-excel-main-title">Which Deck Is Best on Azamara?</h2>
                        <div className="medi-excel-separator"></div>
                    </div>

                    <div className="medi-excel-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                        {/* Preferred Decks */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card" style={{ height: '100%' }}>
                                <h3 className="medi-excel-card-heading" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Crown size={20} style={{ color: '#93c5fd' }} />
                                    Preferred Decks
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.6' }}>
                                    Higher decks are highly popular among experienced cruisers for:
                                </p>
                                <ul className="medi-excel-list">
                                    {[
                                        'Better views',
                                        'Reduced obstruction',
                                        'Scenic photography',
                                        'Quiet relaxation'
                                    ].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper">
                                                {idx === 0 ? <Sun size={18} /> :
                                                    idx === 1 ? <Shield size={18} /> :
                                                        idx === 2 ? <Sparkles size={18} /> :
                                                            <Compass size={18} />}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(147, 197, 253, 0.05)', borderRadius: '12px', borderLeft: '3px solid #93c5fd' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
                                        <strong>Pro Tip:</strong> Midship cabins remain highly recommended for stability and convenience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cabins Some Travelers Avoid */}
                        <div className="medi-excel-column">
                            <div className="medi-excel-card" style={{ height: '100%' }}>
                                <h3 className="medi-excel-card-heading" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Shield size={20} style={{ color: '#f87171' }} />
                                    Cabins Some Travelers Avoid
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.6' }}>
                                    Some travelers prefer avoiding specific cabin locations:
                                </p>
                                <ul className="medi-excel-list">
                                    {[
                                        'Near elevators',
                                        'Below pool decks',
                                        'Adjacent to service areas',
                                        'Close to late-night venues'
                                    ].map((item, idx) => (
                                        <li key={idx} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper" style={{ background: 'rgba(248, 113, 113, 0.1)' }}>
                                                <Minus size={18} style={{ color: '#f87171' }} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Callout */}
                    <div style={{ background: 'rgba(147, 197, 253, 0.1)', border: '1px solid rgba(147, 197, 253, 0.2)', borderLeft: '4px solid #93c5fd', borderRadius: '0 12px 12px 0', color: '#ffffff', maxWidth: '100%', margin: '40px auto 0', display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 32px' }}>
                        <div style={{ background: 'rgba(147, 197, 253, 0.15)', padding: '12px', borderRadius: '50%' }}>
                            <Compass size={32} style={{ color: '#93c5fd', flexShrink: 0 }} />
                        </div>
                        <span style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.6', color: '#e2e8f0' }}>
                            An experienced luxury cruise advisor can help identify the most desirable cabin locations for specific ships and itineraries.
                        </span>
                    </div>
                </div>
            </section>

            {/* DECK GUIDE IMAGE BANNER */}
            <div style={{ width: '100%', position: 'relative', overflow: 'hidden', maxHeight: '460px', lineHeight: 0 }}>
                <img
                    src={suiteSlide2}
                    alt="Azamara ship deck scenic view"
                    style={{
                        width: '100%',
                        height: '460px',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'brightness(0.82)'
                    }}
                />
                {/* Top fade */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
                    background: 'linear-gradient(to bottom, rgba(15,28,46,0.7) 0%, transparent 100%)'
                }} />
                {/* Bottom fade */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
                    background: 'linear-gradient(to top, rgba(15,28,46,0.75) 0%, transparent 100%)'
                }} />
                {/* Caption */}
                <div style={{
                    position: 'absolute', bottom: '32px', left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center', zIndex: 2
                }}>
                    <span style={{
                        color: '#ffffff',
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        letterSpacing: '0.04em',
                        textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                        background: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        borderRadius: '30px',
                        padding: '10px 28px',
                        display: 'inline-block'
                    }}>
                        Azamara — Where Every Deck Tells a Story
                    </span>
                </div>
            </div>

            {/* ARE AZAMARA SUITES WORTH THE MONEY? */}
            <section className="suites-worth-section">
                <div className="suites-worth-bg-accent"></div>

                <div className="medi-excel-container">
                    {/* Header Block */}
                    <div className="suites-worth-header">
                        <span className="suites-worth-eyebrow">Upgrade Analysis</span>
                        <h2 className="suites-worth-title">Are Azamara Suites Worth the Money?</h2>
                        <div className="suites-worth-divider"></div>
                    </div>

                    <div className="suites-worth-grid">

                        {/* Left Side: The Suite Advantage */}
                        <div className="suites-card-luxury">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                                <div className="suites-icon-box">
                                    <Crown size={22} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                    The Suite Advantage
                                </h3>
                            </div>

                            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6' }}>
                                For travelers who prioritize an elevated onboard lifestyle, Azamara suites deliver significant value through:
                            </p>

                            <ul className="suites-list">
                                {[
                                    { text: 'Expanded living space', icon: <LayoutList size={18} /> },
                                    { text: 'Personalized attention', icon: <Users size={18} /> },
                                    { text: 'Premium luxury amenities', icon: <Gem size={18} /> },
                                    { text: 'Extended time enjoying onboard life', icon: <Clock size={18} /> },
                                    { text: 'Highest level of comfort', icon: <Heart size={18} /> }
                                ].map((item, idx) => (
                                    <li key={idx} className="suites-list-item">
                                        <span className="suites-list-icon">{item.icon}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Strategic Perspective */}
                        <div className="suites-card-strategic">
                            <Quote size={40} className="suites-quote-icon" />

                            <h3 className="suites-strategic-label">Strategic Perspective</h3>

                            <p className="suites-strategic-text">
                                "However, travelers spending most of their time ashore exploring destinations may find
                                <span className="suites-highlight"> veranda cabins</span> offer better overall cost efficiency."
                            </p>

                            <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.3)' }}></div>
                                <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
                                    Advisor Insight
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Callout Bottom */}
                    <div className="suites-floating-callout">
                        <div className="suites-callout-icon">
                            <Sparkles size={20} />
                        </div>
                        <p className="suites-callout-text">
                            An experienced advisor can help compare suite perks vs. cabin value to match your specific travel goals.
                        </p>
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

                            {/* Floating stat board preserved for authority */}
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
                                    Expert Insight from Angela Hughes
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, one of the most common mistakes travelers make is underestimating how much cabin selection impacts overall cruise satisfaction.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After decades of luxury cruise planning, Angela consistently sees travelers maximize enjoyment when cabin categories align with:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Itinerary style',
                                        'Budget priorities',
                                        'Scenic expectations',
                                        'Travel pace',
                                        'Personal comfort preferences'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and an internationally recognized luxury cruise expert, Angela Hughes helps travelers evaluate cabin options based on real-world experience rather than marketing descriptions alone.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Boutique ships', icon: Star },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Cultural travel experiences', icon: Globe }
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

            {/* COMMON MISTAKES AUTO-SLIDER */}
            <section
                className="medi-mistakes-slider-section"
                style={{
                    backgroundColor: '#ffffff', // Clean White Section Background
                    padding: '80px 0',
                    color: '#0f1c2e' // Navy Blue text
                }}
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        {/* EYEBROW: Navy blue */}
                        <span className="medi-mistakes-eyebrow" style={{ color: '#0f1c2e', opacity: 0.7, fontWeight: '700' }}>
                            AVOID BOOKING PITFALLS
                        </span>

                        {/* MAIN TITLE: Deep Navy Blue */}
                        <h2 className="medi-mistakes-slider-title" style={{ color: 'var(--medi-navy)', marginBottom: '15px', fontWeight: '500' }}>
                            Common Mistakes Travelers Make When Choosing Azamara Cabins
                        </h2>

                        {/* SEPARATOR: Navy Blue */}
                        <div className="medi-mistakes-slider-separator" style={{ backgroundColor: '#0f1c2e', margin: '0 auto', width: '60px', height: '4px' }}></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper" style={{ marginTop: '40px' }}>
                        {/* Left Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-left"
                            style={{ color: '#0f1c2e', borderColor: '#0f1c2e' }}
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
                                            backgroundColor: '#0f1c2e', // Deep Navy Blue Card
                                            borderRadius: '16px',
                                            padding: '40px',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <div className="medi-mistake-slide-header">
                                            <span className="medi-mistake-card-num" style={{ color: '#ffffff', opacity: 0.5 }}>0{idx + 1}</span>
                                            <h3 className="medi-mistake-card-title" style={{ color: '#ffffff', fontSize: '1.5rem', marginTop: '10px' }}>
                                                {mistake.title}
                                            </h3>
                                        </div>

                                        <div className="medi-mistake-slide-body" style={{ marginTop: '20px' }}>
                                            <p className="medi-mistake-card-description bco-mistake-desc" style={{ color: '#ffffff', opacity: 0.9, lineHeight: '1.7', fontSize: '1.05rem' }}>
                                                {mistake.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="medi-slider-nav-btn btn-right"
                            style={{ color: '#0f1c2e', borderColor: '#0f1c2e' }}
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="medi-slider-progress-dots" style={{ marginTop: '30px' }}>
                        {mediMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                                style={{
                                    backgroundColor: mediActiveFaq === idx ? '#0f1c2e' : '#cbd5e1', // Navy Blue for active
                                    width: mediActiveMistake === idx ? '24px' : '8px',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => setMediActiveMistake(idx)}
                            />
                        ))}
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
                                <h3 className="medi-pillar-title">Working with experienced cruise advisors helps travelers:</h3>
                                <div className="medi-pillar-line-bar"></div>
                                <ul className="medi-pillar-list">
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Compare cabin categories accurately</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Select ideal deck locations</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Avoid problematic cabin placement</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Maximize luxury value</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Access exclusive amenities</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Match accommodations with travel style</span>
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
                                        <Sparkles size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Boutique ships</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Small ship travel</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Cultural travel experiences</span>
                                    </li>
                                    <li>
                                        <Anchor size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Expedition voyages</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 3: Specializations (Left Aligned) */}
                        <div className="medi-timeline-step step-left">
                            <div className="medi-timeline-node">
                                <Star size={18} />
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
                                        <Globe size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Premium global travel</span>
                                    </li>
                                    <li>
                                        <MapPin size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Asia itineraries</span>
                                    </li>
                                    <li>
                                        <Crown size={18} className="medi-pillar-list-icon icon-theme" />
                                        <span>Personalized luxury travel planning</span>
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
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Work with Trips & Ships <br /> Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '15px', fontSize: '1.1rem' }}>
                            Luxury cruise planning has become increasingly specialized.
                        </p>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        {/* Left Side: The Identity Board */}
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                {/* <span className="medi-prestige-initials">AH</span> */}
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
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

                        {/* Right Side: Cascading Accolade Cards */}
                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "Compare cabin categories accurately", icon: CheckCircle, category: "EXPERTISE" },
                                    { text: "Select ideal deck locations", icon: MapPin, category: "STRATEGY" },
                                    { text: "Avoid problematic cabin placement", icon: Shield, category: "ADVISORY" },
                                    { text: "Maximize luxury value", icon: Gem, category: "VALUE" },
                                    { text: "Access exclusive amenities", icon: Crown, category: "ACCESS" },
                                    { text: "Match accommodations with travel style", icon: Heart, category: "PERSONALIZATION" },
                                    { text: "Internationally recognized cruise expert", icon: Award, category: "RECOGNITION" },
                                    { text: "Boutique & Small ship travel specialist", icon: Ship, category: "SPECIALTY" },
                                    { text: "Asia & Expedition voyage planning", icon: Globe, category: "DESTINATIONS" },
                                    { text: "Personalized luxury travel planning", icon: Sparkles, category: "SERVICE" }
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
                            src="https://www.youtube.com/embed/rv_Kv5ExJVc"

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
                        <h2 className="medi-cta-heading-white">Ready to Choose the Best Cabin on Azamara?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            The right cabin can transform a luxury cruise experience.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether travelers prioritize:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Scenic balconies",
                                    "Spacious suites",
                                    "Romantic accommodations",
                                    "Stability at sea",
                                    "Boutique luxury comfort"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Angela Hughes and the team at Trips & Ships Luxury Travel help travelers confidently select the ideal Azamara accommodations for their cruise goals.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            With more than four decades of luxury travel expertise, Trips & Ships Luxury Travel provides personalized cruise guidance backed by real-world luxury travel experience.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Personalized Azamara Cruise Consultation Today
                            </button>
                        </div>

                       
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestCabinsOnAzamara