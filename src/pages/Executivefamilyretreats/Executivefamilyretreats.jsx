import Navbar from '../../components/Navbar/Navbar'
import './ExecutiveFamilyRetreats.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Globe, LayoutList, Heart,
    Sun, Award, Mic, FileText, GraduationCap,
    Home, Waves, ShieldCheck, Plane, Briefcase, Camera
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
// import heroImg1 from '../../assets/ExecutiveFamilyRetreats/hero1.jpg'
// import heroImg2 from '../../assets/ExecutiveFamilyRetreats/hero2.jpg'
// import heroImg3 from '../../assets/ExecutiveFamilyRetreats/hero3.jpg'
// import familyReconnectImg from '../../assets/ExecutiveFamilyRetreats/Executive family reconnecting on retreat.webp'
// import privateVillaImg from '../../assets/ExecutiveFamilyRetreats/Private luxury villa for executive families.webp'
// import luxuryCruiseImg from '../../assets/ExecutiveFamilyRetreats/Luxury family cruise experience.webp'
// import wellnessRetreatImg from '../../assets/ExecutiveFamilyRetreats/Executive family wellness retreat spa.webp'
// import adventureSafariImg from '../../assets/ExecutiveFamilyRetreats/Family safari adventure travel.webp'
// import conciergeTravelImg from '../../assets/ExecutiveFamilyRetreats/Private aviation concierge travel planning.webp'
// import audiencePhotoImg from '../../assets/ExecutiveFamilyRetreats/Multigenerational family luxury travel.webp'
// import Profile_AH from '../../assets/ExecutiveFamilyRetreats/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/ExecutiveFamilyRetreats/Profile_Picture_AH.jpg'

function ExecutiveFamilyRetreats() {
    const [efrCurrentHero, setEfrCurrentHero] = useState(0)
    const efrHeroImages = []

    useEffect(() => {
        const efrTimer = setInterval(() => {
            setEfrCurrentHero((prev) => (prev + 1) % efrHeroImages.length)
        }, 5000)
        return () => clearInterval(efrTimer)
    }, [efrHeroImages.length])

    const [efrActiveFaq, setEfrActiveFaq] = useState(null)
    const [efrSelectedCategory, setEfrSelectedCategory] = useState(0)
    const [efrActiveTip, setEfrActiveTip] = useState(0)
    const [isEfrSliderHovered, setIsEfrSliderHovered] = useState(false)

    useEffect(() => {
        if (isEfrSliderHovered) return
        const interval = setInterval(() => {
            setEfrActiveTip((prev) => (prev + 1) % 4)
        }, 5000)
        return () => clearInterval(interval)
    }, [isEfrSliderHovered])

    const efrToggleFaq = (index) => {
        setEfrActiveFaq(efrActiveFaq === index ? null : index)
    }

    const efrShowcaseCategories = [
        {
            title: 'Private Villas & Luxury Resorts',
            bestFor: ['Spacious accommodations', 'Private swimming pools', 'Personal chefs', 'Complete privacy'],
            highlights: ['Tuscany', 'Provence', 'Greek Islands', 'Caribbean', 'Hawaii', 'Costa Rica']
        },
        {
            title: 'Luxury Cruises for Families',
            bestFor: ['Spacious suites', 'Fine dining', "Children's programs", 'Adult-only spaces'],
            highlights: ['Explora Journeys', 'Regent Seven Seas Cruises', 'Crystal Cruises', 'Silversea Cruises', 'Seabourn', 'Viking']
        },
        {
            title: 'Wellness & Rejuvenation',
            bestFor: ['Luxury spas', 'Yoga sessions', 'Meditation', 'Healthy cuisine'],
            highlights: ['Fitness programs', 'Nature hikes', 'Thermal spas', 'Beach relaxation']
        },
        {
            title: 'Adventure & Cultural Experiences',
            bestFor: ['African safaris', 'Private yacht charters', 'Cultural tours', 'Wildlife encounters'],
            highlights: ['Cooking classes', 'Wine tastings', 'National parks', 'Expedition cruises']
        }
    ]

    const efrPrivacyPoints = [
        {
            title: 'Discreet Planning',
            desc: 'Privacy is often a top priority for executives and their families.',
            bullets: ['Discreet planning', 'Confidential itineraries']
        },
        {
            title: 'Secure & Trusted Travel',
            desc: 'We work with trusted travel partners at every step of the journey.',
            bullets: ['Secure transportation', 'Trusted travel partners']
        },
        {
            title: 'Private Accommodations',
            desc: 'Every stay is arranged with comfort and discretion in mind.',
            bullets: ['Private accommodations', 'Personalized communication']
        },
        {
            title: 'Flexible Scheduling',
            desc: 'Every itinerary is designed with discretion and professionalism.',
            bullets: ['Flexible scheduling']
        }
    ]

    const efrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/executive-family-retreats",
                "name": "Executive Family Retreats",
                "url": "https://www.tripsshipsluxurytravel.com/executive-family-retreats",
                "description": "Luxury executive family retreats with personalized vacations, private villas, luxury cruises, wellness escapes, and concierge travel planning.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/executive-family-retreats#article"
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
                "description": "Luxury travel agency specializing in executive family travel, luxury vacations, private villas, cruises, and concierge travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/executive-family-retreats#article",
                "headline": "Executive Family Retreats",
                "url": "https://www.tripsshipsluxurytravel.com/executive-family-retreats",
                "description": "Expert guide to executive family retreats featuring luxury vacations, wellness retreats, private villas, cruises, concierge services, and personalized travel planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/executive-family-retreats.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/executive-family-retreats"
                }
            },
            {
                "@type": "Service",
                "name": "Executive Family Retreat Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Executive Travel Consulting",
                "description": "Personalized executive family retreat planning including luxury vacations, wellness escapes, private villas, cruises, concierge services, and private travel management."
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
                        "name": "Executive Family Retreats",
                        "item": "https://www.tripsshipsluxurytravel.com/executive-family-retreats"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is an executive family retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "An executive family retreat is a luxury vacation designed to help busy professionals reconnect with their families through meaningful travel experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who are executive family retreats designed for?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Executive retreats are ideal for business leaders, entrepreneurs, professionals, and their families seeking quality time together."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the best destinations for executive family retreats?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Italy, Greece, Hawaii, the Caribbean, Costa Rica, Alaska, and African safari destinations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can retreats combine wellness and adventure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Customized itineraries can include spa experiences, outdoor adventures, cultural tours, and family activities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you arrange private villas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We arrange luxury villas with private chefs, concierge services, housekeeping, and personalized amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are luxury cruises suitable for executive families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Luxury cruises offer spacious accommodations, premium dining, entertainment, and seamless travel between destinations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can private jet travel be arranged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private jet charters, VIP airport services, and luxury ground transportation can all be coordinated."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What concierge services are available?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Services include transportation, accommodations, private tours, restaurant reservations, wellness appointments, and VIP experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can retreats celebrate milestones?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Executive family retreats are perfect for anniversaries, birthdays, retirements, graduations, and family celebrations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should we plan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Planning 6 to 12 months ahead ensures the best selection of luxury accommodations and exclusive experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How is privacy maintained during travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We prioritize confidential itineraries, private accommodations, secure transportation, and trusted travel partners."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides personalized executive retreat planning, luxury travel expertise, concierge service, and seamless travel management."
                        }
                    }
                ]
            }
        ]
    }

    const efrFaqs = [
        { question: 'What is an executive family retreat?', answer: 'An executive family retreat is a luxury vacation designed to help busy professionals reconnect with their families through personalized travel experiences.' },
        { question: 'Who are executive family retreats designed for?', answer: 'They are ideal for executives, entrepreneurs, business owners, professionals, and their families seeking meaningful time together.' },
        { question: 'What destinations are popular for executive retreats?', answer: 'Popular destinations include Italy, Greece, France, Hawaii, Costa Rica, the Caribbean, Alaska, and African safari destinations.' },
        { question: 'Can retreats include both relaxation and adventure?', answer: 'Yes. Every itinerary is customized to balance wellness, leisure, cultural experiences, and adventure.' },
        { question: 'Are luxury cruises good for executive families?', answer: 'Absolutely. Luxury cruises provide premium accommodations, exceptional dining, entertainment, and convenient travel between destinations.' },
        { question: 'Can private villas be arranged?', answer: 'Yes. We arrange luxury villas with private chefs, concierge services, housekeeping, and personalized experiences.' },
        { question: 'Do you coordinate private jet travel?', answer: 'Yes. Private aviation, airport VIP services, and luxury ground transportation can all be arranged.' },
        { question: 'What concierge services are included?', answer: 'Services include transportation, accommodations, restaurant reservations, private guides, wellness appointments, VIP experiences, and activity planning.' },
        { question: 'Can retreats celebrate special occasions?', answer: 'Yes. We frequently plan anniversary trips, milestone birthdays, retirements, graduations, and family celebrations.' },
        { question: 'How far in advance should executive retreats be planned?', answer: 'Planning 6–12 months ahead provides the best availability for luxury accommodations and exclusive experiences.' },
        { question: 'How do you ensure privacy during travel?', answer: 'We work with trusted luxury partners, arrange private accommodations, maintain confidential itineraries, and prioritize discretion throughout every journey.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel specializes in personalized executive family retreats, offering concierge-level planning, luxury travel expertise, exclusive partnerships, and seamless travel experiences.' }
    ]

    return (
        <>
            <Helmet>
                <title>
                    Executive Family Retreats | Luxury Executive Family Travel & Private Retreats
                </title>
                <meta
                    name="title"
                    content="Executive Family Retreats | Luxury Executive Family Vacations"
                />
                <meta
                    name="description"
                    content="Reconnect with what matters most through executive family retreats. Discover luxury executive vacations, private villas, wellness retreats, luxury cruises, and concierge travel designed for busy professionals and their families."
                />
                <meta name="keywords" content="Executive Family Retreats, Executive retreats, Family retreats, Luxury executive vacations, Executive family travel, Luxury family retreats, Executive wellness retreats, Family vacation planning, Private luxury travel, Luxury travel concierge, Executive travel planning" />
                <script type="application/ld+json">
                    {JSON.stringify(efrSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="efr-hero-section">
                {efrHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`efr-hero-background ${efrCurrentHero === idx ? 'efr-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="efr-hero-overlay-layer"></div>
                <div className="efr-hero-content-wrapper">
                    <div className="efr-hero-eyebrow-tag">
                        <Heart size={16} />
                        <span>Luxury Executive Family Travel</span>
                    </div>
                    <h1 className="efr-hero-main-title">
                        Executive Family Retreats: Reconnect, Recharge, and Rediscover Time Together
                    </h1>
                </div>
            </section>

            {/* PREMIUM INTRO SECTION */}
            <section className="efr-intro-section efr-premium-intro-section">
                <div className="efr-premium-intro-glow-one"></div>
                <div className="efr-premium-intro-glow-two"></div>
                <div className="efr-intro-container">
                    <div className="efr-premium-intro-grid">

                        {/* Title & Core editorial intro */}
                        <div className="efr-premium-editorial-block">
                            <span className="efr-premium-mini-badge">REDEFINING FAMILY TIME</span>
                            <h2 className="efr-premium-heading">Reconnect, Recharge, and Rediscover Time Together</h2>
                            <div className="efr-premium-separator"></div>

                            <p className="efr-premium-lead-text">
                                Success often comes with demanding schedules, constant travel, and limited opportunities to spend uninterrupted time with family. While business achievements are important, meaningful experiences with loved ones create the memories that last a lifetime.
                            </p>

                            <div className="efr-immersion-list-wrapper">
                                <p className="efr-immersion-lead-in">
                                    At Trips & Ships Luxury Travel, we design executive family retreats that allow busy professionals to step away from daily responsibilities and reconnect with their families through thoughtfully planned luxury travel. Whether you're celebrating a milestone, taking a well-deserved break, or simply creating uninterrupted family time, every itinerary is customized around your family's interests and lifestyle. From private villas and luxury resorts to expedition cruises and wellness escapes, we handle every detail so you can focus on enjoying time together.
                                </p>
                                <div className="efr-immersion-cards-grid">
                                    <div className="efr-immersion-card-item">
                                        <div className="efr-immersion-icon-box">
                                            <Heart size={20} />
                                        </div>
                                        <span className="efr-immersion-card-title">Strengthen family relationships</span>
                                    </div>

                                    <div className="efr-immersion-card-item">
                                        <div className="efr-immersion-icon-box">
                                            <Sun size={20} />
                                        </div>
                                        <span className="efr-immersion-card-title">Reduce stress</span>
                                    </div>

                                    <div className="efr-immersion-card-item">
                                        <div className="efr-immersion-icon-box">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="efr-immersion-card-title">Celebrate milestones</span>
                                    </div>

                                    <div className="efr-immersion-card-item">
                                        <div className="efr-immersion-icon-box">
                                            <Camera size={20} />
                                        </div>
                                        <span className="efr-immersion-card-title">Create lasting memories</span>
                                    </div>

                                    <div className="efr-immersion-card-item">
                                        <div className="efr-immersion-icon-box">
                                            <Briefcase size={20} />
                                        </div>
                                        <span className="efr-immersion-card-title">Improve work-life balance</span>
                                    </div>

                                    <div className="efr-immersion-card-item">
                                        <div className="efr-immersion-icon-box">
                                            <Users size={20} />
                                        </div>
                                        <span className="efr-immersion-card-title">Build new family traditions</span>
                                    </div>
                                </div>
                            </div>

                            <div className="efr-intro-photo-frame">
                                {/* <img src={familyReconnectImg} alt="Executive family reconnecting on a luxury retreat" /> */}
                                <div className="efr-intro-photo-caption">Uninterrupted family time, thoughtfully planned</div>
                            </div>
                        </div>

                        {/* Signature Expert Block */}
                        <div className="efr-premium-signature-panel">
                            <div className="efr-premium-signature-glow"></div>
                            <div className="efr-premium-signature-content">
                                <div className="efr-expert-profile-row">
                                    <div className="efr-expert-avatar-frame">
                                        <Star size={24} className="efr-star-accent" />
                                    </div>
                                    <div>
                                        <span className="efr-expert-card-subtitle">LIFETIME ADVISOR</span>
                                        <h3 className="efr-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>

                                <p className="efr-premium-expert-desc">
                                    At Trips & Ships Luxury Travel, luxury travel expert Angela Hughes helps executive families design personalized retreats built around their destinations, interests, and privacy requirements.
                                </p>

                                <div className="efr-premium-expert-quote-box">
                                    <span className="efr-quote-mark">"</span>
                                    <p className="efr-premium-expert-quote-text">
                                        With over 40 years in the travel industry, visits to more than 121 countries, and recognition as the 2024 Luxury Travel Influencer of the Year, Angela Hughes helps busy executives design travel that truly reconnects their families.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* PERSONALIZED LUXURY FAMILY RETREATS */}
            <section className="efr-excel-section">
                {/* Visual coordinate watermarks for premium destination-themed look */}
                <div className="efr-excel-coord coord-tl">EXECUTIVE FAMILY RETREATS // TRIPS & SHIPS</div>
                <div className="efr-excel-coord coord-tr">43.7696° N, 11.2558° E</div>
                <div className="efr-excel-coord coord-bl">21.4691° N, 158.0778° W</div>
                <div className="efr-excel-coord coord-br">9.7489° N, 83.7534° W</div>

                <div className="efr-excel-glow-one"></div>
                <div className="efr-excel-glow-two"></div>
                <div className="efr-excel-container">

                    {/* Header/Intro Block */}
                    <div className="efr-excel-header-block">
                        <h2 className="efr-excel-main-title">Personalized Luxury Family Retreats</h2>
                        <div className="efr-excel-separator"></div>
                        <p className="efr-excel-lead-paragraph">
                            Every executive family has unique travel preferences.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="efr-excel-grid">

                        {/* Column 1 */}
                        <div className="efr-excel-column">
                            <div className="efr-excel-card">
                                <h3 className="efr-excel-card-heading">
                                    Our customized retreats are designed around:
                                </h3>
                                <ul className="efr-excel-list">
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <MapPin size={18} />
                                        </div>
                                        <span>Preferred destinations</span>
                                    </li>
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <Heart size={18} />
                                        </div>
                                        <span>Family interests</span>
                                    </li>
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <Compass size={18} />
                                        </div>
                                        <span>Activity levels</span>
                                    </li>
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <Calendar size={18} />
                                        </div>
                                        <span>Travel schedules</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="efr-excel-column">
                            <div className="efr-excel-card">
                                <h3 className="efr-excel-card-heading">
                                    As well as every family's:
                                </h3>
                                <ul className="efr-excel-list">
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <span>Privacy requirements</span>
                                    </li>
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <Waves size={18} />
                                        </div>
                                        <span>Wellness goals</span>
                                    </li>
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <Sparkles size={18} />
                                        </div>
                                        <span>Celebration occasions</span>
                                    </li>
                                    <li className="efr-excel-list-item">
                                        <div className="efr-excel-icon-wrapper">
                                            <Crown size={18} />
                                        </div>
                                        <span>Lifestyle preferences</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Footer Statement */}
                    <div className="efr-excel-footer-block">
                        <div className="efr-excel-footer-badge">
                            <Sparkles size={20} />
                        </div>
                        <p className="efr-excel-footer-paragraph">
                            Every itinerary is completely personalized to provide a seamless luxury experience.
                        </p>
                    </div>

                </div>
            </section>

            {/* SIGNATURE RETREAT EXPERIENCES */}
            <section className="efr-diff-section">
                <div className="efr-diff-container">
                    <div className="efr-diff-header-block">
                        <span className="efr-diff-eyebrow-tag">SIGNATURE RETREAT EXPERIENCES</span>
                        <h2 className="efr-diff-main-title">How We Design Your Executive Family Retreat</h2>
                        <div className="efr-diff-separator"></div>
                    </div>

                    <div className="efr-diff-grid">

                        {/* Pillar 1: Private Villas & Luxury Resorts */}
                        <div className="efr-diff-card efr-diff-card-navy">
                            {/* <img src={privateVillaImg} alt="Private luxury villa for executive families" className="efr-diff-card-photo" /> */}
                            <div className="efr-diff-icon-header">
                                <div className="efr-diff-icon-box">
                                    <Home size={24} />
                                </div>
                                <h3 className="efr-diff-card-title">Private Villas & Luxury Resorts</h3>
                            </div>
                            <p className="efr-diff-card-text">
                                Private accommodations provide the ideal setting for executive families seeking privacy and flexibility. Popular destinations include:
                            </p>
                            <div className="efr-diff-destination-chips">
                                <span className="efr-diff-chip">Tuscany</span>
                                <span className="efr-diff-chip">Provence</span>
                                <span className="efr-diff-chip">Greek Islands</span>
                                <span className="efr-diff-chip">Caribbean</span>
                                <span className="efr-diff-chip">Hawaii</span>
                                <span className="efr-diff-chip">Costa Rica</span>
                            </div>
                            <p className="efr-diff-card-text-secondary">
                                Benefits include:
                            </p>
                            <ul className="efr-diff-experience-list">
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Spacious accommodations</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Private swimming pools</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Personal chefs</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Dedicated housekeeping</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Concierge services</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Family gathering spaces</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Flexible schedules</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Complete privacy</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Luxury Cruises for Families */}
                        <div className="efr-diff-card efr-diff-card-white">
                            {/* <img src={luxuryCruiseImg} alt="Luxury family cruise experience" className="efr-diff-card-photo" /> */}
                            <div className="efr-diff-icon-header">
                                <div className="efr-diff-icon-box">
                                    <Ship size={24} />
                                </div>
                                <h3 className="efr-diff-card-title">Luxury Cruises for Families</h3>
                            </div>

                            <div className="efr-diff-ship-stat-box">
                                <div className="efr-diff-stat-ring">
                                    <div className="efr-diff-stat-num">6</div>
                                </div>
                                <div className="efr-diff-stat-label">CURATED CRUISE LINES</div>
                            </div>

                            <p className="efr-diff-card-text">
                                Luxury cruises combine relaxation with exploration while eliminating the stress of coordinating multiple destinations. Recommended cruise lines include:
                            </p>
                            <div className="efr-diff-destination-chips">
                                <span className="efr-diff-chip">Explora Journeys</span>
                                <span className="efr-diff-chip">Regent Seven Seas Cruises</span>
                                <span className="efr-diff-chip">Crystal Cruises</span>
                                <span className="efr-diff-chip">Silversea Cruises</span>
                                <span className="efr-diff-chip">Seabourn</span>
                                <span className="efr-diff-chip">Viking</span>
                            </div>
                            <p className="efr-diff-card-text-secondary">
                                Families enjoy:
                            </p>
                            <ul className="efr-diff-experience-list">
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Spacious suites</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Fine dining</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Children's programs</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Adult-only spaces</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Wellness facilities</span>
                                </li>
                                <li>
                                    <CheckCircle size={16} className="efr-diff-list-icon" />
                                    <span>Private shore excursions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Wellness & Rejuvenation */}
                        <div className="efr-diff-card efr-diff-card-soft">
                            {/* <img src={wellnessRetreatImg} alt="Executive family wellness retreat spa" className="efr-diff-card-photo" /> */}
                            <div className="efr-diff-icon-header">
                                <div className="efr-diff-icon-box">
                                    <Waves size={24} />
                                </div>
                                <h3 className="efr-diff-card-title">Wellness & Rejuvenation</h3>
                            </div>
                            <p className="efr-diff-card-text">
                                Executive retreats often include wellness experiences that benefit every family member. Popular options include:
                            </p>
                            <ul className="efr-diff-focus-list-premium">
                                <li>
                                    <span className="efr-diff-list-num">01</span>
                                    <span>Luxury spas</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">02</span>
                                    <span>Yoga sessions</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">03</span>
                                    <span>Meditation</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">04</span>
                                    <span>Fitness programs</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">05</span>
                                    <span>Nature hikes</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">06</span>
                                    <span>Healthy cuisine</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">07</span>
                                    <span>Thermal spas</span>
                                </li>
                                <li>
                                    <span className="efr-diff-list-num">08</span>
                                    <span>Beach relaxation</span>
                                </li>
                            </ul>

                            <div className="efr-diff-conclusion-box">
                                <p className="efr-diff-conclusion-text">
                                    Wellness activities help families recharge while spending meaningful time together.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ADVENTURE & CULTURAL EXPERIENCES — FULL-WIDTH IMAGE BANNER */}
            <section className="efr-video-section efr-adventure-banner-section">
                {/* <img src={adventureSafariImg} alt="Family safari adventure travel" className="efr-adventure-banner-photo" /> */}
                <div className="efr-adventure-banner-overlay">
                    <div className="efr-adventure-banner-content">
                        <span className="efr-adventure-eyebrow">
                            <Compass size={14} />
                            Adventure & Cultural Experiences
                        </span>
                        <h2 className="efr-adventure-banner-title">Combining Relaxation With Immersive Experiences</h2>
                        <p className="efr-adventure-banner-text">
                            Many executive families enjoy combining relaxation with immersive experiences. Every experience is selected based on your family's interests and travel style.
                        </p>
                        <div className="efr-adventure-tag-grid">
                            <span className="efr-adventure-tag-chip"><Camera size={14} />African safaris</span>
                            <span className="efr-adventure-tag-chip"><Anchor size={14} />Private yacht charters</span>
                            <span className="efr-adventure-tag-chip"><Globe size={14} />Cultural tours</span>
                            <span className="efr-adventure-tag-chip"><Sparkles size={14} />Cooking classes</span>
                            <span className="efr-adventure-tag-chip"><Compass size={14} />Wildlife encounters</span>
                            <span className="efr-adventure-tag-chip"><Gem size={14} />Wine tastings</span>
                            <span className="efr-adventure-tag-chip"><MapPin size={14} />National parks</span>
                            <span className="efr-adventure-tag-chip"><Ship size={14} />Expedition cruises</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHOWCASE OF RETREAT STYLES */}
            <section className="efr-itinerary-showcase-section">
                <div className="efr-itinerary-showcase-container">
                    <div className="efr-itinerary-showcase-header">
                        <span className="efr-itinerary-eyebrow">EXPLORE YOUR RETREAT STYLE</span>
                        <h2 className="efr-itinerary-showcase-heading">Every Retreat, Personalized to Your Family</h2>
                        <div className="efr-itinerary-showcase-separator"></div>
                    </div>

                    <div className="efr-itinerary-dashboard">
                        {/* Left Side: Navigation Tabs */}
                        <div className="efr-itinerary-tabs">
                            {efrShowcaseCategories.map((category, idx) => (
                                <button
                                    key={idx}
                                    className={`efr-itinerary-tab-btn ${efrSelectedCategory === idx ? 'active' : ''}`}
                                    onClick={() => setEfrSelectedCategory(idx)}
                                >
                                    <span className="efr-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="efr-itinerary-tab-meta">
                                        <span className="efr-itinerary-tab-title">{category.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="efr-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Right Side: Showcase Content View */}
                        <div className="efr-itinerary-showcase-card">
                            <div className="efr-itinerary-showcase-image-wrapper">
                                {/* <img
                                    src={
                                        efrSelectedCategory === 0 ? privateVillaImg :
                                            efrSelectedCategory === 1 ? luxuryCruiseImg :
                                                efrSelectedCategory === 2 ? wellnessRetreatImg : adventureSafariImg
                                    }
                                    alt={efrShowcaseCategories[efrSelectedCategory].title}
                                    className="efr-itinerary-showcase-img"
                                /> */}
                                <div className="efr-itinerary-showcase-img-overlay"></div>
                                <span className="efr-itinerary-showcase-badge">RECOMMENDED EXPERIENCE</span>
                            </div>

                            <div className="efr-itinerary-showcase-body">
                                <h3 className="efr-itinerary-showcase-title">{efrShowcaseCategories[efrSelectedCategory].title}</h3>

                                <div className="efr-itinerary-details-grid">
                                    <div className="efr-itinerary-details-col">
                                        <h4 className="efr-itinerary-details-heading">Includes:</h4>
                                        <ul className="efr-itinerary-details-list">
                                            {efrShowcaseCategories[efrSelectedCategory].bestFor.map((item, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="efr-itinerary-detail-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="efr-itinerary-details-col">
                                        <h4 className="efr-itinerary-details-heading">Highlights:</h4>
                                        <div className="efr-itinerary-details-chips">
                                            {efrShowcaseCategories[efrSelectedCategory].highlights.map((item, i) => (
                                                <span key={i} className="efr-itinerary-details-chip">
                                                    <MapPin size={12} className="efr-itinerary-chip-icon" />
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

            {/* CELEBRATING IMPORTANT MILESTONES */}
            <section id="executive-milestones-insight" className="efr-expert-editorial-section efr-growth-insight-section">
                <div className="efr-expert-editorial-container">
                    <div className="efr-expert-editorial-card">

                        {/* Left Side: Editorial Portrait and Floating Stat Badge */}
                        <div className="efr-editorial-portrait-block">
                            <div className="efr-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Travel Expert" /> */}
                                <div className="efr-editorial-gradient-layer"></div>
                            </div>

                            <div className="efr-editorial-floating-stat">
                                <div className="efr-stat-tile">
                                    <span className="efr-stat-number">40+</span>
                                    <span className="efr-stat-label">Years Experience</span>
                                </div>
                                <div className="efr-stat-divider"></div>
                                <div className="efr-stat-tile">
                                    <span className="efr-stat-number">121+</span>
                                    <span className="efr-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Editorial Text & Structured Lists */}
                        <div className="efr-editorial-content-block">
                            <div className="efr-editorial-header">
                                <div className="efr-editorial-eyebrow-container">
                                    <Award size={18} className="efr-editorial-icon-badge" />
                                    <span className="efr-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="efr-editorial-title">
                                    Celebrating Important <br className="efr-growth-title-break" />Milestones
                                </h2>
                                <div className="efr-editorial-accent-bar"></div>
                            </div>

                            <p className="efr-editorial-lead-para">
                                Executive family retreats are ideal for celebrating life's biggest achievements.
                            </p>

                            <div className="efr-priorities-box">
                                <p className="efr-priorities-intro">
                                    Popular occasions include:
                                </p>
                                <div className="efr-priorities-grid-pills">
                                    {[
                                        'Anniversary celebrations',
                                        'Retirement',
                                        'Birthday milestones',
                                        'Graduations',
                                        'Career achievements',
                                        'Family reunions',
                                        'Holiday vacations',
                                        'Business success celebrations'
                                    ].map((item, idx) => (
                                        <div key={idx} className="efr-priority-pill-item">
                                            <CheckCircle size={15} className="efr-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="efr-editorial-body-para">
                                Every celebration becomes a memorable experience shared with those who matter most. As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps executive families navigate increasingly complex travel choices with real-world expertise.
                            </p>

                            <div className="efr-expertise-section-box">
                                <span className="efr-expertise-intro-label">Her expertise spans:</span>
                                <div className="efr-expertise-horizontal-strip">
                                    {[
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'Private villas', icon: Home },
                                        { title: 'Wellness travel', icon: Waves },
                                        { title: 'Safaris', icon: Globe },
                                        { title: 'Premium global travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="efr-expertise-pills-row">
                                                <div className="efr-expertise-pill-icon-box">
                                                    <IconComponent size={14} />
                                                </div>
                                                <span className="efr-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CONCIERGE TRAVEL MANAGEMENT */}
            <section className="efr-luxury-definition-section">
                <div className="efr-luxury-definition-container">
                    <div className="efr-luxury-content-wrapper">
                        <span className="efr-luxury-eyebrow-label">SEAMLESS TRAVEL PLANNING</span>
                        <h2 className="efr-luxury-heading">Concierge Travel Management</h2>

                        <p className="efr-luxury-paragraph">
                            Busy executives need travel planning that is efficient, flexible, and effortless.
                        </p>

                        <div className="efr-luxury-appreciated-box">
                            <h3 className="efr-luxury-subheading">Our concierge services include:</h3>
                            <div className="efr-luxury-features-grid">
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Flight coordination</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <Plane size={20} className="efr-feature-check-icon" />
                                    <span>Private aviation</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Luxury accommodations</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Ground transportation</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Restaurant reservations</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Private guides</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>VIP experiences</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Activity reservations</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>Last-minute itinerary adjustments</span>
                                </div>
                                <div className="efr-luxury-feature">
                                    <CheckCircle size={20} className="efr-feature-check-icon" />
                                    <span>24/7 travel support</span>
                                </div>
                            </div>
                        </div>

                        <div className="efr-luxury-comparison-note">
                            <p className="efr-luxury-paragraph">
                                We manage every detail from departure through your return home.
                            </p>
                        </div>
                    </div>

                    <div className="efr-luxury-visual-wrapper">
                        {/* <img src={conciergeTravelImg} alt="Private aviation concierge travel planning" className="efr-luxury-main-image" /> */}
                    </div>
                </div>
            </section>

            {/* PRIVACY & PERSONALIZED SERVICE AUTO-SLIDER */}
            <section
                className="efr-mistakes-slider-section"
                onMouseEnter={() => setIsEfrSliderHovered(true)}
                onMouseLeave={() => setIsEfrSliderHovered(false)}
            >
                <div className="efr-mistakes-slider-container">
                    <div className="efr-mistakes-slider-header">
                        <span className="efr-mistakes-eyebrow">DISCREET, PERSONALIZED TRAVEL</span>
                        <h2 className="efr-mistakes-slider-title">
                            Privacy & Personalized Service
                        </h2>
                        <div className="efr-mistakes-slider-separator"></div>
                    </div>

                    <div className="efr-mistakes-carousel-wrapper">
                        {/* Left Arrow */}
                        <button
                            className="efr-slider-nav-btn btn-left"
                            onClick={() => setEfrActiveTip((prev) => (prev === 0 ? efrPrivacyPoints.length - 1 : prev - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        {/* Slider Card Viewport */}
                        <div className="efr-slider-card-viewport">
                            {efrPrivacyPoints.map((point, idx) => {
                                const isActive = efrActiveTip === idx
                                return (
                                    <div
                                        key={idx}
                                        className={`efr-mistakes-slider-card ${isActive ? 'active' : ''}`}
                                    >
                                        <div className="efr-mistake-slide-header">
                                            <span className="efr-mistake-card-num">0{idx + 1}</span>
                                            <h3 className="efr-mistake-card-title">{point.title}</h3>
                                        </div>

                                        <div className="efr-mistake-slide-body">
                                            <p className="efr-mistake-card-description">{point.desc}</p>

                                            {point.bullets && point.bullets.length > 0 && (
                                                <ul className="efr-mistake-card-bullets-list">
                                                    {point.bullets.map((bullet, bulletIdx) => (
                                                        <li key={bulletIdx} className="efr-mistake-card-bullet-item">
                                                            <ShieldCheck size={16} className="efr-mistake-bullet-check" />
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
                            className="efr-slider-nav-btn btn-right"
                            onClick={() => setEfrActiveTip((prev) => (prev === efrPrivacyPoints.length - 1 ? 0 : prev + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="efr-slider-progress-dots">
                        {efrPrivacyPoints.map((_, idx) => (
                            <button
                                key={idx}
                                className={`efr-slider-dot ${efrActiveTip === idx ? 'active' : ''}`}
                                onClick={() => setEfrActiveTip(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO EXECUTIVE FAMILY RETREATS ARE DESIGNED FOR */}
            <section className="efr-audience-section">
                <div className="efr-audience-container">
                    <h2 className="efr-section-heading" style={{ textAlign: 'center' }}>Why Choose Trips & Ships Luxury Travel?</h2>
                    <div className="efr-heading-separator-bar efr-bar-centered"></div>

                    <div className="efr-audience-split-layout">
                        <div className="efr-audience-column efr-best-for-column">
                            <h3 className="efr-audience-column-heading">Designed For</h3>
                            <ul className="efr-audience-list">
                                <li>
                                    <div className="efr-audience-icon-wrapper best">
                                        <Briefcase size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Executives</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper best">
                                        <Sparkles size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Entrepreneurs</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper best">
                                        <Crown size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Business owners</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper best">
                                        <Gem size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Professionals</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper best">
                                        <Heart size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Families seeking meaningful time together</span>
                                </li>
                            </ul>
                        </div>

                        <div className="efr-audience-column efr-not-ideal-column">
                            <h3 className="efr-audience-column-heading">Our Advisors Provide</h3>
                            <ul className="efr-audience-list">
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <LayoutList size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Personalized itinerary design</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <Star size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Luxury travel expertise</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <Phone size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Concierge-level service</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <Globe size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Global destination knowledge</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <Gem size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Exclusive travel partnerships</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <Calendar size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Flexible planning</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <Compass size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Seamless logistics</span>
                                </li>
                                <li>
                                    <div className="efr-audience-icon-wrapper not-ideal">
                                        <ShieldCheck size={20} className="efr-audience-icon" />
                                    </div>
                                    <span>Ongoing travel support</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <img src={audiencePhotoImg} alt="Multigenerational family luxury travel" className="efr-audience-photo-strip" /> */}
                </div>
            </section>

            {/* WHY WORK WITH US — ANGELA HUGHES RECOGNITION */}
            <section className="efr-work-with-us-section">
                <div className="efr-work-with-us-container">

                    {/* Header Block */}
                    <div className="efr-work-header-card">
                        <span className="efr-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="efr-section-heading white-heading">Why Executive Families Trust Trips & Ships Luxury Travel</h2>
                        <div className="efr-heading-separator-bar custom-bar"></div>
                        <p className="efr-work-intro-para">
                            Whether you're planning a relaxing family retreat, celebrating a milestone, or simply creating time together, we'll design a journey that exceeds every expectation.
                        </p>
                    </div>

                    {/* Stepped Timeline Journey */}
                    <div className="efr-work-timeline-flow">
                        <div className="efr-timeline-line"></div>

                        {/* Pillar 1 */}
                        <div className="efr-timeline-step step-left">
                            <div className="efr-timeline-node">
                                <Compass size={18} />
                            </div>
                            <div className="efr-timeline-card">
                                <div className="efr-card-step-badge">STEP 01</div>
                                <h3 className="efr-pillar-title">Executive families require more than a traditional travel agency:</h3>
                                <div className="efr-pillar-line-bar"></div>
                                <ul className="efr-pillar-list">
                                    <li>
                                        <LayoutList size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Personalized itinerary design</span>
                                    </li>
                                    <li>
                                        <Star size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Luxury travel expertise</span>
                                    </li>
                                    <li>
                                        <Phone size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Concierge-level service</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Global destination knowledge</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 2: Global Recognition */}
                        <div className="efr-timeline-step step-right">
                            <div className="efr-timeline-node">
                                <Award size={18} />
                            </div>
                            <div className="efr-timeline-card">
                                <div className="efr-card-step-badge">STEP 02</div>
                                <h3 className="efr-pillar-title">Angela Hughes is globally recognized for luxury travel expertise through:</h3>
                                <div className="efr-pillar-line-bar"></div>
                                <ul className="efr-pillar-list">
                                    <li>
                                        <Mic size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Travel industry speaking engagements</span>
                                    </li>
                                    <li>
                                        <FileText size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Weekly travel columns</span>
                                    </li>
                                    <li>
                                        <Award size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Advisory board leadership</span>
                                    </li>
                                    <li>
                                        <Globe size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>International media recognition</span>
                                    </li>
                                    <li>
                                        <GraduationCap size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Luxury Travel University training programs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pillar 3: Ongoing Support */}
                        <div className="efr-timeline-step step-left">
                            <div className="efr-timeline-node">
                                <ShieldCheck size={18} />
                            </div>
                            <div className="efr-timeline-card">
                                <div className="efr-card-step-badge">STEP 03</div>
                                <h3 className="efr-pillar-title">Trips & Ships Luxury Travel delivers expert guidance backed by real-world expertise, including:</h3>
                                <div className="efr-pillar-line-bar"></div>
                                <ul className="efr-pillar-list">
                                    <li>
                                        <Gem size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Exclusive travel partnerships</span>
                                    </li>
                                    <li>
                                        <Calendar size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Flexible planning</span>
                                    </li>
                                    <li>
                                        <Compass size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Seamless logistics</span>
                                    </li>
                                    <li>
                                        <ShieldCheck size={18} className="efr-pillar-list-icon icon-theme" />
                                        <span>Ongoing travel support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ANGELA HUGHES AUTHORITY BOX */}
            <section className="efr-authority-section">
                <div className="efr-authority-container">

                    {/* Header Block */}
                    <div className="efr-authority-header-block">
                        <span className="efr-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="efr-section-heading" style={{ textAlign: 'center' }}>Angela Hughes Authority Box</h2>
                        <div className="efr-heading-separator-bar efr-bar-centered"></div>
                    </div>

                    <div className="efr-prestige-plaque-wrapper">
                        {/* Left Side: The Identity Board */}
                        <div className="efr-prestige-identity-card">
                            <div className="efr-prestige-seal-ring">
                                {/* <img
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
                                /> */}
                            </div>
                            <span className="efr-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="efr-prestige-name">Meet Angela Hughes</h3>
                            <div className="efr-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>

                            <div className="efr-prestige-meta-box">
                                <div className="efr-prestige-meta-line"></div>
                                <span className="efr-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        {/* Right Side: Cascading Accolade Cards */}
                        <div className="efr-prestige-credentials-column">
                            <div className="efr-prestige-list">
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
                                    { text: "Luxury family retreat and concierge travel specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
                                    return (
                                        <div key={idx} className="efr-prestige-item-card">
                                            <div className="efr-prestige-item-accent-bar"></div>
                                            <div className="efr-prestige-item-icon-box">
                                                <IconComp size={16} />
                                            </div>
                                            <div className="efr-prestige-item-content">
                                                <span className="efr-prestige-item-category">{accolade.category}</span>
                                                <h4 className="efr-prestige-item-text">{accolade.text}</h4>
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
            <section className="efr-faq-main-section">
                <div className="efr-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="efr-section-heading">Frequently Asked Questions</h2>
                        <div className="efr-heading-separator-bar efr-bar-centered"></div>
                    </div>

                    <div className="efr-faq-list-wrapper">
                        {efrFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="efr-faq-individual-item"
                                onClick={() => efrToggleFaq(index)}
                            >
                                <div className="efr-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="efr-faq-toggle-icon">
                                        {efrActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {efrActiveFaq === index && (
                                    <p className="efr-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="efr-cta-main-section">
                <div className="efr-cta-bg-pattern-layer"></div>
                <div className="efr-cta-content-relative">
                    <div className="efr-cta-inner-wrapper">
                        <h2 className="efr-cta-heading-white">Ready to Reconnect With What Matters Most?</h2>
                        <div className="efr-cta-separator-white"></div>

                        <p className="efr-cta-paragraph-white">
                            Whether you're planning a relaxing family retreat, celebrating a milestone, or simply creating time together, we'll design a journey that exceeds every expectation.
                        </p>

                        <p className="efr-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise and global recognition in premium travel planning, Angela Hughes and the team at Trips & Ships Luxury Travel help executive families confidently design the ideal retreat experience.
                        </p>

                        <div className="efr-cta-considerations-box">
                            <span className="efr-cta-considerations-title">Whether you are considering:</span>
                            <ul className="efr-cta-considerations-list">
                                {[
                                    "Private villa escapes",
                                    "Luxury family cruises",
                                    "Wellness retreats",
                                    "Milestone celebrations",
                                    "Global adventure travel"
                                ].map((item, idx) => (
                                    <li key={idx} className="efr-cta-considerations-item">
                                        <CheckCircle size={16} className="efr-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="efr-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips & Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="efr-cta-button-group">
                            <button className="efr-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="efr-secondary-outline-button">
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

export default ExecutiveFamilyRetreats