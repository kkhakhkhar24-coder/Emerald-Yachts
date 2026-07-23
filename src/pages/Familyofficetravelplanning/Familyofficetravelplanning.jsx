import Navbar from '../../components/Navbar/Navbar'
import './Familyofficetravelplanning.css'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import {
    Shield, Plane, PlaneTakeoff, Ship, Compass, Heart, Award, Sparkles, Users, Clock,
    MapPin, CheckCircle, Phone, LayoutList, Star, Anchor, Calendar, Gem, Globe, Utensils,
    Sun, Briefcase, Home, UserCheck, Baby, Building2, Car, Route, Lock, MessageCircle,
    ShoppingBag, Ticket, Flower2, PartyPopper, Flag
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

/* ============================================================
   IMAGE ASSETS — loaded from local assets folder
   ============================================================ */
import hero1 from '../../assets/FamilyOfficeTravelPlanning/hero1.jpeg'
import hero2 from '../../assets/FamilyOfficeTravelPlanning/hero2.jpeg'
import hero3 from '../../assets/FamilyOfficeTravelPlanning/hero3.jpeg'

import principalImg from '../../assets/FamilyOfficeTravelPlanning/principal.webp'
import spouseImg from '../../assets/FamilyOfficeTravelPlanning/spouse.webp'
import childrenImg from '../../assets/FamilyOfficeTravelPlanning/children.webp'
import grandchildrenImg from '../../assets/FamilyOfficeTravelPlanning/grandchildren.webp'
import extendedFamilyImg from '../../assets/FamilyOfficeTravelPlanning/extended-family.webp'
import householdStaffImg from '../../assets/FamilyOfficeTravelPlanning/household-staff.webp'
import executiveAssistantsImg from '../../assets/FamilyOfficeTravelPlanning/assistant.webp'
import businessAssociatesImg from '../../assets/FamilyOfficeTravelPlanning/business.webp'

import privateTravelImageFile from '../../assets/FamilyOfficeTravelPlanning/private-travel.webp'
import privateJetBannerFile from '../../assets/FamilyOfficeTravelPlanning/private-jet-tarmac.webp'
import executiveBusinessImageFile from '../../assets/FamilyOfficeTravelPlanning/executive-meeting.webp'
import privacySecurityImageFile from '../../assets/FamilyOfficeTravelPlanning/secure-villa.jpeg'

import vacationMedCruises from '../../assets/FamilyOfficeTravelPlanning/vacation-med-cruises.jpeg'
import vacationCulturalJourneys from '../../assets/FamilyOfficeTravelPlanning/vacation-cultural-journeys.jpg'
import vacationSafaris from '../../assets/FamilyOfficeTravelPlanning/vacation-safaris.jpg'
import vacationBeachResorts from '../../assets/FamilyOfficeTravelPlanning/vacation-beach-resorts.jpg'
import vacationIslandEscapes from '../../assets/FamilyOfficeTravelPlanning/vacation-island-escapes.webp'
import vacationSkiVacations from '../../assets/FamilyOfficeTravelPlanning/vacation-ski-vacations.jpg'
import vacationWellnessRetreats from '../../assets/FamilyOfficeTravelPlanning/vacation-wellness-retreats.webp'
import vacationExpeditionCruises from '../../assets/FamilyOfficeTravelPlanning/vacation-expedition-cruises.webp'

import cruiseExplora from '../../assets/FamilyOfficeTravelPlanning/cruise-explora.jpg'
import cruiseRegent from '../../assets/FamilyOfficeTravelPlanning/cruise-regent.png'
import cruiseCrystal from '../../assets/FamilyOfficeTravelPlanning/cruise-crystal.jpg'
import cruiseSilversea from '../../assets/FamilyOfficeTravelPlanning/cruise-silversea.webp'
import cruiseSeabourn from '../../assets/FamilyOfficeTravelPlanning/cruise-seabourn.webp'
import cruiseViking from '../../assets/FamilyOfficeTravelPlanning/cruise-viking.webp'

const heroImages = [
    hero1,
    hero2,
    hero3
]

const membersImages = {
    principals: principalImg,
    spouses: spouseImg,
    children: childrenImg,
    grandchildren: grandchildrenImg,
    extendedFamily: extendedFamilyImg,
    householdStaff: householdStaffImg,
    executiveAssistants: executiveAssistantsImg,
    businessAssociates: businessAssociatesImg
}

const privateTravelImage = privateTravelImageFile
const privateJetBanner = privateJetBannerFile
const executiveBusinessImage = executiveBusinessImageFile
const privacySecurityImage = privacySecurityImageFile

const vacationImages = {
    mediterraneanCruises: vacationMedCruises,
    europeanCulturalJourneys: vacationCulturalJourneys,
    africanSafaris: vacationSafaris,
    luxuryBeachResorts: vacationBeachResorts,
    privateIslandEscapes: vacationIslandEscapes,
    skiVacations: vacationSkiVacations,
    wellnessRetreats: vacationWellnessRetreats,
    expeditionCruises: vacationExpeditionCruises
}

const cruiseLineImages = {
    exploraJourneys: cruiseExplora,
    regentSevenSeas: cruiseRegent,
    crystalCruises: cruiseCrystal,
    silversea: cruiseSilversea,
    seabourn: cruiseSeabourn,
    viking: cruiseViking
}

function FamilyOfficeTravelPlanning() {
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

    const fotpFaqs = [
        {
            question: "What is family office travel planning?",
            answer: "Family office travel planning provides comprehensive travel management services for affluent families, including luxury vacations, executive travel, concierge services, and complex itinerary coordination."
        },
        {
            question: "Who uses family office travel services?",
            answer: "Family offices, ultra-high-net-worth families, executives, entrepreneurs, and private investment firms frequently use specialized travel planning services."
        },
        {
            question: "Can you coordinate private jet travel?",
            answer: "Yes. We arrange private jet charters, airport VIP services, FBO coordination, and luxury ground transportation."
        },
        {
            question: "Do you plan both business and leisure travel?",
            answer: "Absolutely. We coordinate executive travel, investor meetings, conferences, and luxury vacations within the same itinerary when needed."
        },
        {
            question: "Can you manage travel for multiple family members?",
            answer: "Yes. We specialize in coordinating travel for principals, spouses, children, grandparents, household staff, and executive assistants."
        },
        {
            question: "What luxury destinations do you recommend?",
            answer: "Popular destinations include Italy, Greece, France, Switzerland, the Caribbean, Alaska, Africa, Japan, and luxury cruise destinations worldwide."
        },
        {
            question: "Do you arrange luxury cruises?",
            answer: "Yes. We plan luxury ocean cruises, river cruises, expedition cruises, and private yacht charters."
        },
        {
            question: "Can travel plans be customized?",
            answer: "Every itinerary is fully customized to match the family's preferences, schedule, privacy requirements, and travel goals."
        },
        {
            question: "What concierge services do you provide?",
            answer: "Services include dining reservations, private guides, event tickets, transportation, wellness appointments, golf tee times, and personalized experiences."
        },
        {
            question: "How do you protect client privacy?",
            answer: "We work with trusted partners, maintain confidential itineraries, coordinate secure transportation, and prioritize discretion throughout every trip."
        },
        {
            question: "Can you assist with last-minute travel requests?",
            answer: "Yes. We regularly assist clients with urgent travel arrangements and itinerary changes whenever possible."
        },
        {
            question: "Why work with Trips & Ships Luxury Travel?",
            answer: "Trips & Ships Luxury Travel offers personalized service, luxury travel expertise, concierge support, and seamless travel management specifically designed for family offices and ultra-high-net-worth families."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning",
                "name": "Family Office Travel Planning",
                "url": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning",
                "description": "Luxury family office travel planning with concierge services, private travel management, executive travel, luxury vacations, and personalized itinerary planning.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning#article"
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
                "description": "Luxury travel agency specializing in family office travel, luxury vacations, private jet travel, cruises, and concierge travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning#article",
                "headline": "Family Office Travel Planning",
                "url": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning",
                "description": "Expert guide to family office travel planning featuring luxury concierge services, private travel management, executive travel, private aviation, and luxury vacations.",
                "image": "https://www.tripsshipsluxurytravel.com/images/family-office-travel-planning.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning"
                }
            },
            {
                "@type": "Service",
                "name": "Family Office Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Travel Concierge Services",
                "description": "Personalized travel management services for family offices, executives, and ultra-high-net-worth families including luxury vacations, private aviation, concierge services, and global itinerary planning."
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
                        "name": "Family Office Travel Planning",
                        "item": "https://www.tripsshipsluxurytravel.com/family-office-travel-planning"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is family office travel planning?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Family office travel planning provides personalized travel management services for affluent families, including luxury vacations, executive travel, concierge services, and itinerary coordination."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who uses family office travel services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Family offices, ultra-high-net-worth families, entrepreneurs, executives, and investment professionals commonly use these services."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you coordinate private jet travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private jet charters, airport VIP services, FBO coordination, and luxury ground transportation can all be arranged."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you plan both business and leisure travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We coordinate executive travel, meetings, conferences, and luxury vacations within customized itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you manage travel for multiple family members?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We coordinate travel for principals, spouses, children, grandparents, household staff, and executive assistants."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What destinations do you recommend?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Europe, the Caribbean, Africa, Alaska, Japan, and luxury cruise destinations worldwide."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you arrange luxury cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We plan luxury ocean cruises, river cruises, expedition cruises, and private yacht charters."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can travel plans be customized?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Every itinerary is customized based on the family's schedule, preferences, privacy requirements, and travel goals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What concierge services do you provide?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Services include dining reservations, transportation, private guides, event tickets, wellness appointments, and VIP experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you protect client privacy?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We prioritize discretion through confidential itineraries, secure transportation, trusted travel partners, and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you assist with last-minute travel requests?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We regularly accommodate urgent travel requests and itinerary changes whenever possible."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert travel planning, concierge service, exclusive partnerships, and seamless travel management tailored to family offices and ultra-high-net-worth families."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Family Office Travel Planning | Luxury Concierge Travel Services for Family Offices</title>
                <meta name="title" content="Family Office Travel Planning | Luxury Travel Concierge" />
                <meta name="description" content="Discover personalized family office travel planning with luxury concierge services, private travel management, executive travel, private jets, luxury vacations, and seamless itinerary coordination for ultra-high-net-worth families." />
                <meta name="keywords" content="Family Office Travel Planning, Family office travel, Luxury travel concierge, Family office concierge services, Private travel planning, Executive travel planning, Luxury family travel, Private jet travel, Concierge travel services, UHNW travel planning, Luxury travel management" />
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
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Gem size={16} />
                        <span>Trips & Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Family Office Travel Planning
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Personalized Luxury Travel Management for Family Offices
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
                            <span className="medi-premium-mini-badge">FAMILY OFFICE TRAVEL</span>
                            <h2 className="medi-premium-heading">Personalized Luxury Travel Management for Family Offices</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Managing travel for ultra-high-net-worth families requires far more than booking flights and hotels. Family offices often coordinate complex travel involving multiple family members, executives, household staff, business associates, and personal assistants—all while maintaining complete discretion, efficiency, and exceptional service.
                            </p>
                            <p className="medi-intro-desc-text">
                                At Trips & Ships Luxury Travel, we provide comprehensive family office travel planning tailored to the unique needs of affluent families. From luxury vacations and executive retreats to private jet coordination, luxury cruises, villa rentals, and global concierge services, we manage every aspect of travel with precision and care.
                            </p>
                            <p className="medi-intro-desc-text">
                                Our goal is simple: eliminate the stress of travel planning so families can focus on business, personal time, and creating unforgettable experiences.
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
                                    As CEO of Trips & Ships Luxury Travel, Angela Hughes guides family offices and ultra-high-net-worth families through high-touch concierge travel planning.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        We eliminate the stress of travel planning so families can focus on business, personal time, and creating unforgettable experiences.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================ WHY FAMILY OFFICES NEED SPECIALIZED TRAVEL PLANNING ============================ */}
            <section className="fotp-why-section">
                <div className="fotp-why-container">
                    <h2 className="medi-section-heading">Why Family Offices Need Specialized Travel Planning</h2>
                    <div className="medi-heading-separator-bar"></div>

                    <div className="fotp-why-intro-block">
                        <p className="fotp-why-p">
                            Family offices oversee a wide range of responsibilities, including wealth management, estate planning, philanthropy, business operations, and lifestyle management.
                        </p>
                        <p className="fotp-why-p">
                            Travel often becomes one of the most time-consuming responsibilities.
                        </p>
                    </div>
                    <p className="fotp-why-lead">Professional travel management provides:</p>

                    <div className="fotp-why-grid">
                        {[
                            { title: "Time savings", icon: <Clock size={22} /> },
                            { title: "Personalized service", icon: <Heart size={22} /> },
                            { title: "Global travel expertise", icon: <Globe size={22} /> },
                            { title: "VIP experiences", icon: <Star size={22} /> },
                            { title: "Secure travel arrangements", icon: <Shield size={22} /> },
                            { title: "Complete itinerary management", icon: <LayoutList size={22} /> },
                            { title: "Flexible planning", icon: <Compass size={22} /> },
                            { title: "Dedicated travel support", icon: <Phone size={22} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="fotp-why-card">
                                <div className="fotp-why-icon-wrapper">
                                    {item.icon}
                                </div>
                                <span className="fotp-why-card-title">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="fotp-why-callout">
                        <p className="fotp-why-callout-text">
                            Rather than managing dozens of reservations independently, family offices benefit from having one trusted luxury travel partner.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================ CUSTOMIZED TRAVEL FOR EVERY FAMILY MEMBER ============================ */}
            <section className="fotp-members-section">
                <div className="fotp-members-container">
                    <h2 className="medi-section-heading">Customized Travel for Every Family Member</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <p className="fotp-members-p">
                        No two travelers have the same preferences.
                    </p>
                    <p className="fotp-members-p">
                        Some family members prefer relaxing beach vacations, while others seek adventure, cultural exploration, or wellness retreats.
                    </p>
                    <p className="fotp-members-lead">Our advisors create personalized itineraries for:</p>

                    <div className="fotp-members-grid">
                        {[
                            { title: "Principals", icon: <Award size={16} />, img: membersImages.principals },
                            { title: "Spouses", icon: <Heart size={16} />, img: membersImages.spouses },
                            { title: "Children", icon: <Baby size={16} />, img: membersImages.children },
                            { title: "Grandchildren", icon: <Users size={16} />, img: membersImages.grandchildren },
                            { title: "Extended family", icon: <Home size={16} />, img: membersImages.extendedFamily },
                            { title: "Household staff", icon: <Briefcase size={16} />, img: membersImages.householdStaff },
                            { title: "Executive assistants", icon: <UserCheck size={16} />, img: membersImages.executiveAssistants },
                            { title: "Business associates", icon: <Building2 size={16} />, img: membersImages.businessAssociates }
                        ].map((item, idx) => (
                            <div key={idx} className="fotp-members-tile">
                                <div className="fotp-members-tile-bg" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                <div className="fotp-members-tile-overlay"></div>
                                <div className="fotp-members-tile-content">
                                    <div className="fotp-members-tile-icon">{item.icon}</div>
                                    <span className="fotp-members-tile-name">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="fotp-members-outro">
                        Every itinerary is customized while remaining seamlessly coordinated.
                    </p>
                </div>
            </section>

            {/* ============================ PRIVATE TRAVEL PLANNING ============================ */}
            <section className="fotp-private-section">
                <div className="fotp-private-container">
                    <div className="fotp-private-split-card">

                        <div
                            className="fotp-private-image-side"
                            style={{ backgroundImage: `url('${privateTravelImage}')` }}
                        >
                            <div className="fotp-private-image-overlay"></div>
                        </div>

                        <div className="fotp-private-content-side">
                            <span className="medi-premium-mini-badge">SEAMLESS COORDINATION</span>
                            <h2 className="medi-premium-heading" style={{ fontSize: '36px' }}>Private Travel Planning</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="fotp-private-p">Luxury travel should feel effortless.</p>
                            <p className="fotp-private-p-strong">We coordinate every aspect of each journey, including:</p>

                            <div className="fotp-private-checklist">
                                {[
                                    { label: "International flights", icon: <Plane size={16} /> },
                                    { label: "Private aviation", icon: <PlaneTakeoff size={16} /> },
                                    { label: "Luxury accommodations", icon: <Gem size={16} /> },
                                    { label: "Ground transportation", icon: <Car size={16} /> },
                                    { label: "Private guides", icon: <Compass size={16} /> },
                                    { label: "Yacht charters", icon: <Anchor size={16} /> },
                                    { label: "Restaurant reservations", icon: <Utensils size={16} /> },
                                    { label: "Exclusive experiences", icon: <Sparkles size={16} /> },
                                    { label: "Security coordination", icon: <Shield size={16} /> },
                                    { label: "Special requests", icon: <CheckCircle size={16} /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="fotp-private-check-item">
                                        <span className="fotp-private-check-icon">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="fotp-private-outro">Every detail is managed before departure.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================ PRIVATE JET COORDINATION ============================ */}
            <section
                className="fotp-jet-section"
                style={{ backgroundImage: `url('${privateJetBanner}')` }}
            >
                <div className="fotp-jet-overlay"></div>
                <div className="fotp-jet-container">
                    <div>
                        <span className="fotp-jet-eyebrow">
                            <PlaneTakeoff size={14} /> Private Aviation
                        </span>
                        <h2 className="fotp-jet-heading">Private Jet Coordination</h2>
                        <p className="fotp-jet-p">
                            Many family offices prefer the flexibility, privacy, and convenience of private aviation.
                        </p>
                    </div>

                    <div className="fotp-jet-list">
                        <p style={{ gridColumn: '1 / -1', color: '#cbd5e1', fontSize: '15px', fontWeight: 600, margin: '0 0 4px' }}>
                            Our travel planning includes:
                        </p>
                        {[
                            { title: "Private jet charters", icon: <Plane size={18} /> },
                            { title: "Airport VIP services", icon: <Star size={18} /> },
                            { title: "FBO coordination", icon: <Building2 size={18} /> },
                            { title: "Multi-city flight planning", icon: <Route size={18} /> },
                            { title: "International flight logistics", icon: <Globe size={18} /> },
                            { title: "Luxury ground transportation", icon: <Car size={18} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="fotp-jet-list-item">
                                <span className="fotp-jet-list-icon-wrap">{item.icon}</span>
                                <span>{item.title}</span>
                            </div>
                        ))}
                        <p className="fotp-jet-outro">
                            Private aviation allows families to maximize their time while minimizing travel stress.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================ LUXURY VACATION PLANNING ============================ */}
            <section className="fotp-vacation-section">
                <div className="fotp-vacation-container">
                    <div className="fotp-vacation-heading-block">
                        <h2 className="medi-section-heading">Luxury Vacation Planning</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <p className="fotp-vacation-p">
                        Whether traveling for relaxation or celebration, we design exceptional luxury vacations worldwide.
                    </p>
                    <p className="fotp-vacation-lead">Popular experiences include:</p>

                    <div className="fotp-vacation-grid">
                        {[
                            { title: "Mediterranean cruises", img: vacationImages.mediterraneanCruises },
                            { title: "European cultural journeys", img: vacationImages.europeanCulturalJourneys },
                            { title: "African safaris", img: vacationImages.africanSafaris },
                            { title: "Luxury beach resorts", img: vacationImages.luxuryBeachResorts },
                            { title: "Private island escapes", img: vacationImages.privateIslandEscapes },
                            { title: "Ski vacations", img: vacationImages.skiVacations },
                            { title: "Wellness retreats", img: vacationImages.wellnessRetreats },
                            { title: "Expedition cruises", img: vacationImages.expeditionCruises }
                        ].map((card, idx) => (
                            <div key={idx} className="fotp-vacation-card">
                                <div className="fotp-vacation-card-bg" style={{ backgroundImage: `url('${card.img}')` }}></div>
                                <div className="fotp-vacation-card-overlay"></div>
                                <div className="fotp-vacation-card-content">
                                    <h4 className="fotp-vacation-card-title">{card.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="fotp-vacation-outro">
                        Each itinerary reflects the family's interests, schedule, and preferred travel style.
                    </p>
                </div>
            </section>

            {/* ============================ EXECUTIVE & BUSINESS TRAVEL ============================ */}
            <section className="fotp-business-section">
                <div className="fotp-business-container">

                    <div
                        className="fotp-business-image-wrap"
                        style={{ backgroundImage: `url('${executiveBusinessImage}')` }}
                    >
                        <div className="fotp-business-image-overlay"></div>
                    </div>

                    <div>
                        <h2 className="medi-section-heading">Executive & Business Travel</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <p className="fotp-business-p">
                            Family office travel often includes business alongside leisure. We assist with:
                        </p>

                        <div className="fotp-business-list">
                            {[
                                { title: "Executive retreats", icon: <Briefcase size={18} /> },
                                { title: "Board meetings", icon: <Users size={18} /> },
                                { title: "Investor travel", icon: <Award size={18} /> },
                                { title: "Corporate events", icon: <Calendar size={18} /> },
                                { title: "Incentive trips", icon: <Gem size={18} /> },
                                { title: "Conference travel", icon: <Globe size={18} /> },
                                { title: "Bleisure itineraries", icon: <Sun size={18} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="fotp-business-item">
                                    <span className="fotp-business-item-icon">{item.icon}</span>
                                    <span className="fotp-business-item-text">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <p className="fotp-business-outro">
                            Business travel can easily transition into luxury family vacations with carefully coordinated schedules.
                        </p>
                    </div>

                </div>
            </section>

            {/* ============================ LUXURY CRUISES & PRIVATE CHARTERS ============================ */}
            <section className="fotp-cruises-section">
                <div className="fotp-cruises-container">
                    <h2 className="medi-section-heading">Luxury Cruises & Private Charters</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <p className="fotp-cruises-p">
                        Luxury cruises offer exceptional convenience for affluent families.
                    </p>
                    <p className="fotp-cruises-lead">Recommended partners include:</p>

                    <div className="fotp-cruises-grid">
                        {[
                            { name: "Explora Journeys", img: cruiseLineImages.exploraJourneys },
                            { name: "Regent Seven Seas Cruises", img: cruiseLineImages.regentSevenSeas },
                            { name: "Crystal Cruises", img: cruiseLineImages.crystalCruises },
                            { name: "Silversea Cruises", img: cruiseLineImages.silversea },
                            { name: "Seabourn", img: cruiseLineImages.seabourn },
                            { name: "Viking", img: cruiseLineImages.viking }
                        ].map((line, idx) => (
                            <div key={idx} className="fotp-cruises-chip" style={{ backgroundImage: `url('${line.img}')` }}>
                                <div className="fotp-cruises-chip-overlay"></div>
                                <span className="fotp-cruises-chip-name">{line.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="fotp-cruises-yacht-callout">
                        <Anchor size={28} className="fotp-cruises-yacht-icon" />
                        <p className="fotp-cruises-yacht-text">
                            For additional privacy, private yacht charters can be arranged in destinations around the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================ CONCIERGE SERVICES BEYOND TRAVEL ============================ */}
            <section className="fotp-concierge-section">
                <div className="fotp-concierge-container">
                    <h2 className="medi-section-heading">Concierge Services Beyond Travel</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <p className="fotp-concierge-p">
                        Our concierge support extends well beyond transportation and accommodations.
                    </p>
                    <p className="fotp-concierge-lead">Services include:</p>

                    <div className="fotp-concierge-grid">
                        {[
                            { title: "Restaurant reservations", icon: <Utensils size={20} /> },
                            { title: "Private shopping", icon: <ShoppingBag size={20} /> },
                            { title: "Event tickets", icon: <Ticket size={20} /> },
                            { title: "Spa appointments", icon: <Flower2 size={20} /> },
                            { title: "Golf tee times", icon: <Flag size={20} /> },
                            { title: "Personal guides", icon: <Compass size={20} /> },
                            { title: "Celebration planning", icon: <PartyPopper size={20} /> },
                            { title: "Local experiences", icon: <MapPin size={20} /> },
                            { title: "Family activities", icon: <Heart size={20} /> },
                            { title: "Last-minute itinerary changes", icon: <Clock size={20} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="fotp-concierge-card">
                                <div className="fotp-concierge-icon-wrapper">{item.icon}</div>
                                <span className="fotp-concierge-card-title">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    <p className="fotp-concierge-outro">
                        Our team remains available throughout every journey.
                    </p>
                </div>
            </section>

            {/* ============================ PRIVACY, SECURITY & DISCRETION ============================ */}
            <section className="fotp-privacy-section">
                <div className="fotp-privacy-container">
                    <div className="fotp-privacy-split-card">

                        <div className="fotp-privacy-content-side">
                            <span className="fotp-privacy-eyebrow">
                                <Lock size={14} /> Confidential & Secure
                            </span>
                            <h2 className="fotp-privacy-heading">Privacy, Security & Discretion</h2>
                            <p className="fotp-privacy-p1">
                                Confidentiality is essential when managing travel for high-profile families. We prioritize:
                            </p>

                            <div className="fotp-privacy-grid-list">
                                {[
                                    { label: "Private accommodations", icon: <Gem size={16} /> },
                                    { label: "Secure transportation", icon: <Car size={16} /> },
                                    { label: "Confidential itineraries", icon: <Lock size={16} /> },
                                    { label: "Trusted travel partners", icon: <Shield size={16} /> },
                                    { label: "Personalized communication", icon: <MessageCircle size={16} /> },
                                    { label: "Flexible scheduling", icon: <Calendar size={16} /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="fotp-privacy-item">
                                        <span className="fotp-privacy-item-icon">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="fotp-privacy-outro">
                                Every itinerary is handled with professionalism and discretion.
                            </p>
                        </div>

                        <div
                            className="fotp-privacy-image-side"
                            style={{ backgroundImage: `url('${privacySecurityImage}')` }}
                        >
                            <div className="fotp-privacy-image-overlay"></div>
                        </div>

                    </div>
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
                        {fotpFaqs.map((faq, index) => (
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
                            Family offices require a travel partner who understands complex logistics, luxury expectations, and personalized service.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Clients choose us because we provide:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Dedicated travel advisors",
                                    "Personalized itinerary design",
                                    "Luxury travel expertise",
                                    "Worldwide destination knowledge",
                                    "Exclusive travel partnerships",
                                    "Concierge-level service",
                                    "Seamless logistics",
                                    "Ongoing travel support"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Whether planning a single luxury vacation or managing travel throughout the year, we provide exceptional service tailored to your family's needs.
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

export default FamilyOfficeTravelPlanning