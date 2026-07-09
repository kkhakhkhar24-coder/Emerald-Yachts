import Navbar from '../../components/Navbar/Navbar'
import './Privatejetconciergetravel.css'
import {
    Shield, Plane, PlaneTakeoff, Ship, Compass, Heart, Star, Anchor, Calendar, Gem, Globe,
    Utensils, Sun, Briefcase, Home, UserCheck, Building2, Car, Lock, MessageCircle,
    ShoppingBag, Ticket, Flower2, PartyPopper, Flag, Clock, MapPin, CheckCircle, Phone,
    Users, Wine, PawPrint, Navigation, Landmark, Palmtree, Zap, ShieldCheck, Armchair,
    ChefHat, LayoutList
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ============================================================
   IMAGE PLACEHOLDERS (Unsplash) — grouped here for easy swapping.
   Replace any URL below with a final licensed/brand image using
   the same variable name; no other code changes are required.
   ============================================================ */
const heroImages = [
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600", // Private jet interior
    "https://images.unsplash.com/photo-1583396618422-b4d2828b1e6c?q=80&w=1600", // Private jet on tarmac
    "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=1600"  // Luxury concierge lounge
]

const whyJetImage = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200"          // Private jet cabin interior
const aviationBannerImage = "https://images.unsplash.com/photo-1583396618422-b4d2828b1e6c?q=80&w=1800"  // Private jet on tarmac at sunset
const accommodationsImage = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600"   // Luxury resort infinity pool
const experiencesCenterImage = "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800" // Luxury yacht
const executiveImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000"        // Executives traveling
const conciergeImage = "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000"           // Concierge desk
const privacyBannerImage = "https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=1800"    // Private secure villa corridor

function PrivateJetConciergeTravel() {
    const [heroIndex, setHeroIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const [activeFaq, setActiveFaq] = useState(null)
    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const experiencesList = [
        { title: "Private yacht charters", desc: "Navigate pristine waters on exclusive private vessels.", icon: <Anchor size={24} /> },
        { title: "Wine tastings", desc: "Sip private reserve vintages with master sommeliers.", icon: <Wine size={24} /> },
        { title: "Cultural tours", desc: "Deep dive into local traditions with private local guides.", icon: <Compass size={24} /> },
        { title: "Golf experiences", desc: "Tee off at championship courses with priority slot booking.", icon: <Flag size={24} /> },
        { title: "Wildlife safaris", desc: "Encounter raw nature with certified luxury trackers.", icon: <PawPrint size={24} /> },
        { title: "Helicopter excursions", desc: "Savor breathtaking aerial vistas via chartered helicopters.", icon: <Navigation size={24} /> },
        { title: "Private museum access", desc: "Explore world heritage after-hours, free of crowds.", icon: <Landmark size={24} /> },
        { title: "Culinary experiences", desc: "Indulge in Michelin-starred menus by private chefs.", icon: <Utensils size={24} /> }
    ]

    const pjcFaqs = [
        {
            question: "What is private jet and concierge travel?",
            answer: "Private jet and concierge travel combines private aviation with personalized travel planning, luxury accommodations, transportation, and VIP concierge services."
        },
        {
            question: "Who uses private aviation travel services?",
            answer: "Executives, entrepreneurs, family offices, celebrities, athletes, and ultra-high-net-worth travelers commonly use private aviation and concierge travel services."
        },
        {
            question: "Can you arrange private jet charters?",
            answer: "Yes. We coordinate private jet charters, aircraft selection, flight scheduling, and international travel logistics."
        },
        {
            question: "What are VIP airport services?",
            answer: "VIP airport services include meet-and-greet assistance, private terminals, fast-track immigration, baggage handling, and luxury airport transfers."
        },
        {
            question: "Do you arrange luxury accommodations?",
            answer: "Yes. We arrange luxury hotels, resorts, private villas, safari lodges, private islands, and luxury cruise suites."
        },
        {
            question: "Can business and leisure travel be combined?",
            answer: "Absolutely. We create customized itineraries that seamlessly combine executive meetings with luxury vacations."
        },
        {
            question: "Do you provide concierge services during the trip?",
            answer: "Yes. Our concierge team remains available throughout your journey to assist with reservations, itinerary changes, transportation, and special requests."
        },
        {
            question: "Can you coordinate yacht charters?",
            answer: "Yes. We arrange private yacht charters in destinations around the world."
        },
        {
            question: "Is private aviation safer and more flexible?",
            answer: "Private aviation offers greater scheduling flexibility, privacy, and convenience while utilizing trusted aviation partners and professional operators."
        },
        {
            question: "How do you protect client privacy?",
            answer: "We use confidential itineraries, private accommodations, trusted partners, secure transportation, and personalized communication throughout every journey."
        },
        {
            question: "Can you accommodate last-minute travel requests?",
            answer: "Yes. We regularly assist clients with urgent travel arrangements and itinerary changes whenever availability permits."
        },
        {
            question: "Why choose Trips & Ships Luxury Travel?",
            answer: "Trips & Ships Luxury Travel provides personalized luxury travel planning, private aviation expertise, concierge-level service, exclusive partnerships, and seamless travel experiences tailored to every client."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel",
                "name": "Private Jet & Concierge Travel",
                "url": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel",
                "description": "Luxury private jet and concierge travel featuring private aviation, VIP airport services, luxury accommodations, personalized travel planning, and end-to-end concierge support.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel#article"
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
                "description": "Luxury travel agency specializing in private jet travel, concierge services, luxury vacations, cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel#article",
                "headline": "Private Jet & Concierge Travel",
                "url": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel",
                "description": "Expert guide to private jet and concierge travel including private aviation, VIP airport services, luxury accommodations, executive travel, and personalized concierge planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/private-jet-concierge-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Private Jet & Concierge Travel",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Private Aviation & Concierge Travel Consulting",
                "description": "Comprehensive luxury travel planning including private jet charters, VIP airport services, luxury accommodations, concierge support, executive travel, and personalized itineraries."
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
                        "name": "Luxury Family Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Private Jet & Concierge Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/private-jet-concierge-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is private jet and concierge travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private jet and concierge travel combines private aviation with personalized luxury travel planning, VIP services, accommodations, and transportation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who uses private aviation travel services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Executives, entrepreneurs, family offices, celebrities, athletes, and ultra-high-net-worth travelers frequently use private aviation services."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you arrange private jet charters?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We coordinate private jet charters, aircraft selection, flight scheduling, and international travel logistics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are VIP airport services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "VIP airport services include meet-and-greet assistance, private terminals, fast-track immigration, baggage handling, and chauffeur coordination."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you arrange luxury accommodations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We arrange luxury hotels, private villas, resorts, safari lodges, private islands, and luxury cruise suites."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can business and leisure travel be combined?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Customized itineraries can seamlessly combine executive travel with luxury vacations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you provide concierge services during travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Our concierge team assists with reservations, transportation, itinerary changes, and exclusive experiences throughout your trip."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can yacht charters be arranged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We arrange luxury yacht charters in premier destinations worldwide."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is private aviation more flexible than commercial travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private aviation offers greater scheduling flexibility, privacy, and access to more airports."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you protect client privacy?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We prioritize confidential itineraries, private accommodations, secure transportation, and trusted travel partners."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you accommodate last-minute travel requests?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We regularly assist with urgent travel arrangements and itinerary adjustments whenever possible."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert private aviation coordination, concierge-level service, luxury travel planning, and personalized experiences from departure to return."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Private Jet & Concierge Travel | Luxury Private Aviation & VIP Travel Planning</title>
                <meta name="title" content="Private Jet & Concierge Travel | Luxury Aviation Concierge" />
                <meta name="description" content="Experience seamless private jet and concierge travel with personalized luxury vacations, VIP airport services, private aviation, luxury accommodations, and end-to-end travel management from Trips & Ships Luxury Travel." />
                <meta name="keywords" content="Private Jet & Concierge Travel, Private jet travel, Luxury concierge travel, Private aviation vacations, VIP travel planning, Private aviation, Luxury travel concierge, Executive travel, Personalized travel planning, Private luxury vacations, Concierge travel services" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ============================ HERO SECTION ============================ */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${heroIndex === idx ? 'medi-active' : ''}`}
                        /* style={{ backgroundImage: `url(${img})` }} */
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Gem size={16} />
                        <span>Trips & Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Private Jet & Concierge Travel
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Luxury Travel Without Limits
                    </p>
                </div>
            </section>

            {/* ============================ INTRO SECTION ============================ */}
            <section className="medi-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div>
                            <span className="medi-premium-mini-badge">PRIVATE AVIATION & CONCIERGE</span>
                            <h2 className="medi-premium-heading">Luxury Travel Without Limits</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Luxury travel should begin long before you arrive at your destination. For discerning travelers, every part of the journey matters—from departing on a private jet to arriving at a luxury resort where every detail has already been arranged.
                            </p>
                            <p className="medi-intro-desc-text">
                                At Trips & Ships Luxury Travel, we specialize in private jet and concierge travel, providing complete end-to-end travel management for executives, entrepreneurs, family offices, and ultra-high-net-worth travelers. We coordinate every aspect of your journey, including private aviation, luxury accommodations, VIP airport services, private transfers, exclusive experiences, and personalized concierge support.
                            </p>
                            <p className="medi-intro-desc-text">
                                Our goal is simple: create effortless travel experiences where every detail is handled with precision, discretion, and exceptional service.
                            </p>
                        </div>

                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CEO & FOUNDER</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    As CEO of Trips & Ships Luxury Travel, Angela Hughes leads private aviation and concierge travel planning for the world's most discerning travelers.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        We create effortless travel experiences where every detail is handled with precision, discretion, and exceptional service.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================ WHY CHOOSE PRIVATE JET TRAVEL? ============================ */}
            <section className="pjc-why-section">
                <div className="pjc-why-container">

                    <div
                        className="pjc-why-image-wrap"
                        /* style={{ backgroundImage: `url('${whyJetImage}')` }} */
                    >
                        <div className="pjc-why-image-tint"></div>
                        <div className="pjc-why-floating-badge">
                            <div className="pjc-why-floating-badge-icon">
                                <PlaneTakeoff size={20} color="#ffffff" />
                            </div>
                            <p className="pjc-why-floating-badge-text">
                                Whether traveling for business or leisure, private aviation allows you to maximize your time while minimizing stress.
                            </p>
                        </div>
                    </div>

                    <div className="pjc-why-content-side">
                        <h2 className="medi-section-heading">Why Choose Private Jet Travel?</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <p className="pjc-why-p">
                            Private aviation offers far more than luxury—it provides flexibility, privacy, efficiency, and convenience.
                        </p>
                        <p className="pjc-why-lead">Benefits include:</p>

                        <div className="pjc-why-list">
                            {[
                                { label: "Flexible departure schedules", icon: <Clock size={18} /> },
                                { label: "Access to private terminals (FBOs)", icon: <Building2 size={18} /> },
                                { label: "Reduced travel time", icon: <Zap size={18} /> },
                                { label: "Greater privacy", icon: <Lock size={18} /> },
                                { label: "Personalized onboard service", icon: <Heart size={18} /> },
                                { label: "Direct flights to more destinations", icon: <Globe size={18} /> },
                                { label: "Comfortable cabins", icon: <Armchair size={18} /> },
                                { label: "Customized catering", icon: <Utensils size={18} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="pjc-why-list-item">
                                    <span className="pjc-why-list-icon">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ============================ PERSONALIZED TRAVEL PLANNING ============================ */}
            <section className="pjc-personalize-section">
                <div className="pjc-personalize-container">
                    <h2 className="medi-section-heading">Personalized Travel Planning</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <p className="pjc-personalize-p">
                        Every journey begins with understanding your travel goals.
                    </p>
                    <p className="pjc-personalize-lead">We customize every itinerary based on:</p>

                    <div className="pjc-personalize-cloud">
                        {[
                            { label: "Preferred destinations", icon: <MapPin size={16} /> },
                            { label: "Business schedules", icon: <Briefcase size={16} /> },
                            { label: "Family travel needs", icon: <Home size={16} /> },
                            { label: "Privacy requirements", icon: <Lock size={16} /> },
                            { label: "Celebration occasions", icon: <PartyPopper size={16} /> },
                            { label: "Wellness preferences", icon: <Flower2 size={16} /> },
                            { label: "Adventure interests", icon: <Compass size={16} /> },
                            { label: "Lifestyle priorities", icon: <Gem size={16} /> }
                        ].map((item, idx) => (
                            <span key={idx} className="pjc-personalize-tag">
                                {item.icon}
                                {item.label}
                            </span>
                        ))}
                    </div>

                    <p className="pjc-personalize-outro">
                        Every recommendation is carefully tailored to your personal travel style.
                    </p>
                </div>
            </section>

            {/* ============================ PRIVATE AVIATION COORDINATION ============================ */}
            <section className="pjc-aviation-section">
                <div className="pjc-aviation-overlay"></div>
                <div className="pjc-aviation-container">
                    <div className="pjc-aviation-header">
                        <span className="pjc-aviation-eyebrow">
                            <Plane size={14} /> Aviation Coordination
                        </span>
                        <h2 className="pjc-aviation-heading">Private Aviation Coordination</h2>
                        <div className="pjc-aviation-separator"></div>
                        <p className="pjc-aviation-p">
                            Our travel advisors coordinate every aspect of private air travel. We work closely with trusted aviation partners to deliver seamless travel experiences.
                        </p>
                    </div>

                    <div className="pjc-aviation-grid">
                        {[
                            { label: "Private jet charters", icon: <Plane size={22} /> },
                            { label: "Aircraft selection", icon: <CheckCircle size={22} /> },
                            { label: "Flight scheduling", icon: <Calendar size={22} /> },
                            { label: "International flight coordination", icon: <Globe size={22} /> },
                            { label: "Airport slot management", icon: <MapPin size={22} /> },
                            { label: "Ground handling", icon: <Car size={22} /> },
                            { label: "FBO services", icon: <Building2 size={22} /> },
                            { label: "Luxury ground transportation", icon: <Car size={22} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="pjc-aviation-card">
                                <div className="pjc-aviation-icon-wrapper">
                                    {item.icon}
                                </div>
                                <p className="pjc-aviation-card-label">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <p className="pjc-aviation-outro">
                        Services include the above and more, tailored to every itinerary.
                    </p>
                </div>
            </section>

            {/* ============================ VIP AIRPORT SERVICES ============================ */}
            <section className="pjc-vip-section">
                <div className="pjc-vip-container">
                    <h2 className="medi-section-heading">VIP Airport Services</h2>
                    <div className="medi-heading-separator-bar"></div>

                    <p className="pjc-vip-p">
                        Travel becomes significantly easier with personalized airport assistance.
                    </p>
                    <p className="pjc-vip-lead">Our VIP services may include:</p>

                    <div className="pjc-vip-ticket-grid">
                        {[
                            { title: "Meet-and-greet assistance", icon: <UserCheck size={22} /> },
                            { title: "Fast-track immigration", icon: <Zap size={22} /> },
                            { title: "Priority customs clearance", icon: <ShieldCheck size={22} /> },
                            { title: "Private airport lounges", icon: <Building2 size={22} /> },
                            { title: "Baggage assistance", icon: <Briefcase size={22} /> },
                            { title: "Chauffeur coordination", icon: <Car size={22} /> },
                            { title: "Private terminal access", icon: <Plane size={22} /> },
                            { title: "Personalized airport escorts", icon: <Users size={22} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="pjc-vip-ticket">
                                <div className="pjc-vip-ticket-icon">{item.icon}</div>
                                <span className="pjc-vip-ticket-label">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    <p className="pjc-vip-outro">
                        These services provide a smooth transition from aircraft to destination.
                    </p>
                </div>
            </section>

            {/* ============================ LUXURY ACCOMMODATIONS ============================ */}
            <section className="pjc-accom-section">
                <div className="pjc-accom-container">
                    <div className="pjc-accom-grid">
                        
                        <div className="pjc-accom-image-column">
                            <div className="pjc-accom-image-wrapper">
                                <img src="https://placehold.co/800x1000?text=Luxury+Accommodations" alt="Luxury suite accommodation" className="pjc-accom-image" />
                                <div className="pjc-accom-image-badge">
                                    <Home size={18} />
                                    <span>Vetted Luxury Estates</span>
                                </div>
                            </div>
                        </div>

                        <div className="pjc-accom-content-column">
                            <span className="pjc-accom-eyebrow">ACCOMMODATIONS & RETREATS</span>
                            <h2 className="pjc-accom-heading">Luxury Accommodations</h2>
                            <div className="pjc-accom-separator"></div>
                            
                            <p className="pjc-accom-p">
                                Your accommodations should reflect the same level of comfort and exclusivity as your journey.
                            </p>
                            <p className="pjc-accom-lead">We arrange:</p>

                            <div className="pjc-accom-list-grid">
                                {[
                                    { label: "Five-star hotels", icon: <Star size={18} /> },
                                    { label: "Luxury resorts", icon: <Sun size={18} /> },
                                    { label: "Private villas", icon: <Home size={18} /> },
                                    { label: "Boutique properties", icon: <Gem size={18} /> },
                                    { label: "Private islands", icon: <Palmtree size={18} /> },
                                    { label: "Safari lodges", icon: <PawPrint size={18} /> },
                                    { label: "Luxury cruise suites", icon: <Ship size={18} /> },
                                    { label: "Exclusive residences", icon: <Building2 size={18} /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="pjc-accom-item-card">
                                        <div className="pjc-accom-item-icon-box">
                                            {item.icon}
                                        </div>
                                        <span className="pjc-accom-item-label">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="pjc-accom-outro">
                                Every property is selected based on your preferences and travel objectives.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================ EXCLUSIVE EXPERIENCES ============================ */}
            <section className="pjc-experiences-section">
                <div className="pjc-experiences-container">
                    <div className="pjc-experiences-header">
                        <span className="pjc-experiences-eyebrow">CURATED ADVENTURES</span>
                        <h2 className="medi-section-heading">Exclusive Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="pjc-experiences-p">
                            Luxury travel is about creating unforgettable moments. We handcraft unique activities tailored to your passions.
                        </p>
                    </div>

                    <div className="pjc-experiences-grid">
                        {experiencesList.map((item, idx) => (
                            <div key={idx} className="pjc-experiences-card">
                                <div className="pjc-experiences-icon-box">
                                    {item.icon}
                                </div>
                                <h3 className="pjc-experiences-card-title">{item.title}</h3>
                                <p className="pjc-experiences-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="pjc-experiences-outro">
                        Every itinerary includes personalized recommendations that match your interests.
                    </p>
                </div>
            </section>

            {/* ============================ EXECUTIVE & FAMILY TRAVEL ============================ */}
            <section className="pjc-executive-section">
                <div className="pjc-executive-container">

                    <div
                        className="pjc-executive-image-wrap"
                        /* style={{ backgroundImage: `url('${executiveImage}')` }} */
                    ></div>

                    <div>
                        <h2 className="medi-section-heading">Executive & Family Travel</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <p className="pjc-executive-lead">We plan travel for:</p>

                        <div className="pjc-executive-stack">
                            {[
                                { title: "Executives" },
                                { title: "Entrepreneurs" },
                                { title: "Family offices" },
                                { title: "Multigenerational families" },
                                { title: "Corporate leaders" },
                                { title: "Celebrity clients" },
                                { title: "Athletes" },
                                { title: "Private investors" }
                            ].map((item, idx) => (
                                <div key={idx} className="pjc-executive-stack-item">
                                    <div className="pjc-executive-stack-number">{idx + 1}</div>
                                    <span className="pjc-executive-stack-text">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <p className="pjc-executive-outro">
                            Whether traveling alone or with extended family, we coordinate every detail with professionalism and discretion.
                        </p>
                    </div>

                </div>
            </section>

            {/* ============================ CONCIERGE SERVICES ============================ */}
            <section className="pjc-concierge-section">
                <div className="pjc-concierge-container">

                    <div>
                        <h2 className="medi-section-heading">Concierge Services</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <p className="pjc-concierge-p">
                            Our concierge support extends well beyond travel reservations.
                        </p>
                        <p className="pjc-concierge-lead">Services include:</p>

                        <div className="pjc-concierge-menu-list">
                            {[
                                { label: "Restaurant reservations", icon: <Utensils size={17} /> },
                                { label: "Spa appointments", icon: <Flower2 size={17} /> },
                                { label: "Private guides", icon: <Compass size={17} /> },
                                { label: "Event tickets", icon: <Ticket size={17} /> },
                                { label: "Luxury shopping", icon: <ShoppingBag size={17} /> },
                                { label: "Personal chefs", icon: <ChefHat size={17} /> },
                                { label: "Yacht charters", icon: <Anchor size={17} /> },
                                { label: "Security coordination", icon: <Shield size={17} /> },
                                { label: "Last-minute itinerary changes", icon: <Clock size={17} /> },
                                { label: "24/7 travel assistance", icon: <Phone size={17} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="pjc-concierge-menu-item">
                                    <span className="pjc-concierge-menu-icon">{item.icon}</span>
                                    <span className="pjc-concierge-menu-name">{item.label}</span>
                                    <span className="pjc-concierge-menu-dots"></span>
                                </div>
                            ))}
                        </div>

                        <p className="pjc-concierge-outro">
                            We remain available throughout your entire journey.
                        </p>
                    </div>

                    <div
                        className="pjc-concierge-image-wrap"
                        /* style={{ backgroundImage: `url('${conciergeImage}')` }} */
                    ></div>

                </div>
            </section>

            {/* ============================ PRIVACY & SECURITY ============================ */}
            <section
                className="pjc-privacy-section"
                /* style={{ backgroundImage: `url('${privacyBannerImage}')` }} */
            >
                <div className="pjc-privacy-overlay"></div>
                <div className="pjc-privacy-seal-panel">
                    <div className="pjc-privacy-seal-icon-wrap">
                        <Lock size={26} />
                    </div>
                    <h2 className="pjc-privacy-heading">Privacy & Security</h2>
                    <p className="pjc-privacy-p">
                        Discretion is a cornerstone of luxury travel. We prioritize:
                    </p>

                    <div className="pjc-privacy-grid-list">
                        {[
                            { label: "Confidential itineraries", icon: <Lock size={16} /> },
                            { label: "Trusted travel partners", icon: <Shield size={16} /> },
                            { label: "Secure transportation", icon: <Car size={16} /> },
                            { label: "Private accommodations", icon: <Gem size={16} /> },
                            { label: "Personalized communication", icon: <MessageCircle size={16} /> },
                            { label: "Flexible scheduling", icon: <Calendar size={16} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="pjc-privacy-item">
                                <span className="pjc-privacy-item-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="pjc-privacy-outro">
                        Every journey is planned with complete respect for your privacy.
                    </p>
                </div>
            </section>

            {/* ============================ FAQ SECTION ============================ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {pjcFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================ CTA SECTION — "Why Choose Trips & Ships Luxury Travel?" ============================ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury travelers expect more than reservations—they expect flawless execution.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Clients choose us because we provide:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Personalized itinerary planning",
                                    "Luxury travel expertise",
                                    "Private aviation coordination",
                                    "Concierge-level service",
                                    "Global destination knowledge",
                                    "Exclusive travel partnerships",
                                    "Flexible support",
                                    "Exceptional attention to detail"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Whether planning a weekend getaway, international business trip, luxury cruise, or around-the-world vacation, we deliver a seamless travel experience from departure to return.
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

export default PrivateJetConciergeTravel