import Navbar from '../../components/Navbar/Navbar'
import './Executivefamilyretreats.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Globe, LayoutList, Heart,
    Sun, Award, Mic, FileText, GraduationCap,
    Home, Waves, ShieldCheck, Plane, Briefcase, Camera
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import heroImg1 from '../../assets/seo_images/family-governance-retreat-luxury-mountain-lodge-private-family-office-meeting.webp'
import heroImg2 from '../../assets/seo_images/multigenerational-luxury-family-vacation-oceanfront-villa-private-resort.webp'
import heroImg3 from '../../assets/seo_images/luxury-wellness-retreat-infinity-pool-private-spa-villa-ocean-view.webp'
import familyReconnectImg from '../../assets/seo_images/multigenerational-family-beach-vacation-luxury-tropical-family-travel.webp'
import privateVillaImg from '../../assets/seo_images/private-luxury-ocean-view-villa-infinity-pool-exclusive-family-vacation.webp'
import luxuryCruiseImg from '../../assets/seo_images/luxury-rhine-river-cruise-ship-sunset-germany-european-waterways.webp'
import wellnessRetreatImg from '../../assets/seo_images/luxury-wellness-retreat-spa-with-ocean-view-infinity-pool-private-resort.webp'
import adventureSafariImg from '../../assets/seo_images/luxury-african-safari-family-wildlife-experience-elephant-viewing-private-game-drive.webp'
import conciergeTravelImg from '../../assets/seo_images/private-helicopter-transfer-luxury-travel-concierge-villa-arrival-service.webp'
import audiencePhotoImg from '../../assets/seo_images/multigenerational-family-walking-tour-luxury-european-village-vacation.webp'
import celebrationImg from '../../assets/seo_images/luxury-family-celebration-private-villa-cocktail-gathering-mediterranean-coast.webp'
import executiveMeetingImg from '../../assets/seo_images/luxury-executive-group-travel-networking-event-private-cultural-experience.webp'
import Profile_AH from '../../assets/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/Angela_Hughes.jpg'
import { Link } from 'react-router'

function ExecutiveFamilyRetreats() {
    const [efrCurrentHero, setEfrCurrentHero] = useState(0)
    const efrHeroImages = [heroImg1, heroImg2, heroImg3]

    useEffect(() => {
        const efrTimer = setInterval(() => {
            setEfrCurrentHero((prev) => (prev + 1) % efrHeroImages.length)
        }, 5000)
        return () => clearInterval(efrTimer)
    }, [efrHeroImages.length])

    const [efrActiveFaq, setEfrActiveFaq] = useState(null)
    const [efrSelectedCategory, setEfrSelectedCategory] = useState(0)
    const [efrActivePillar, setEfrActivePillar] = useState(0)
    const [isIntroExpanded, setIsIntroExpanded] = useState(false)
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
                                    At Trips & Ships Luxury Travel, we design executive family retreats that allow busy professionals to step away from daily responsibilities and reconnect with their families through thoughtfully planned luxury travel.
                                    {isIntroExpanded ? (
                                        <span>
                                            {" "}Whether you're celebrating a milestone, taking a well-deserved break, or simply creating uninterrupted family time, every itinerary is customized around your family's interests and lifestyle. From private villas and luxury resorts to expedition cruises and wellness escapes, we handle every detail so you can focus on enjoying time together.
                                        </span>
                                    ) : '...'}
                                </p>
                                <button
                                    onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#274472',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        padding: '4px 0 16px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        transition: 'all 0.2s ease',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    {isIntroExpanded ? 'Read Less' : 'Read More'}
                                </button>
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
                <div className="efr-excel-container">
                    <div className="efr-excel-header-block">
                        <span className="efr-excel-eyebrow">TAILORED TO YOUR FAMILY</span>
                        <h2 className="efr-excel-main-title">Personalized Luxury Family Retreats</h2>
                        <div className="efr-excel-separator"></div>
                    </div>

                    <div className="efr-excel-split">
                        <div className="efr-excel-image-col">
                            <img src={familyReconnectImg} alt="Executive family reconnecting on a luxury retreat" />
                            <div className="efr-excel-footer-block">
                                <p className="efr-excel-footer-paragraph">
                                    Every itinerary is completely personalized to provide a seamless luxury experience.
                                </p>
                            </div>
                        </div>
                        <div className="efr-excel-content-col">
                            <div className="efr-excel-card">
                                <h3 className="efr-excel-card-heading">Designed Around You</h3>
                                <ul className="efr-excel-list">
                                    <li className="efr-excel-list-item"><MapPin size={18} /><span>Preferred destinations</span></li>
                                    <li className="efr-excel-list-item"><Heart size={18} /><span>Family interests</span></li>
                                    <li className="efr-excel-list-item"><Compass size={18} /><span>Activity levels</span></li>
                                    <li className="efr-excel-list-item"><Calendar size={18} /><span>Travel schedules</span></li>
                                </ul>
                            </div>
                            <div className="efr-excel-card">
                                <h3 className="efr-excel-card-heading">Every Detail Considered</h3>
                                <ul className="efr-excel-list">
                                    <li className="efr-excel-list-item"><ShieldCheck size={18} /><span>Privacy requirements</span></li>
                                    <li className="efr-excel-list-item"><Waves size={18} /><span>Wellness goals</span></li>
                                    <li className="efr-excel-list-item"><Sparkles size={18} /><span>Celebration occasions</span></li>
                                    <li className="efr-excel-list-item"><Crown size={18} /><span>Lifestyle preferences</span></li>
                                </ul>
                            </div>
                        </div>
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

                    <div className="efr-diff-panel-layout">
                        <div className="efr-diff-selector-col">
                            {[
                                { id: 0, title: 'Private Villas & Luxury Resorts', icon: <Home size={22} />, desc: 'Privacy, dedicated chefs, and flexible schedules for families.' },
                                { id: 1, title: 'Luxury Cruises for Families', icon: <Ship size={22} />, desc: 'Exceptional dining and activities spanning multiple destinations.' },
                                { id: 2, title: 'Wellness & Rejuvenation', icon: <Waves size={22} />, desc: 'Custom wellness programs, spas, yoga, and healthy cuisine.' }
                            ].map((pillar) => {
                                const isActive = efrActivePillar === pillar.id;
                                return (
                                    <button
                                        key={pillar.id}
                                        onClick={() => setEfrActivePillar(pillar.id)}
                                        className={`efr-diff-pillar-btn ${isActive ? 'active' : ''}`}
                                    >
                                        <div className="efr-diff-pillar-icon">{pillar.icon}</div>
                                        <div className="efr-diff-pillar-text">
                                            <span className="efr-diff-pillar-num">PILLAR 0{pillar.id + 1}</span>
                                            <h3 className="efr-diff-pillar-title">{pillar.title}</h3>
                                            <p className="efr-diff-pillar-desc">{pillar.desc}</p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="efr-diff-detail-col">
                            {efrActivePillar === 0 && (
                                <div className="efr-diff-detail-card">
                                    <div className="efr-diff-detail-img">
                                        <img src={privateVillaImg} alt="Private luxury villa" />
                                    </div>
                                    <div className="efr-diff-detail-body">
                                        <h3 className="efr-diff-detail-title">Private Villas & Luxury Resorts</h3>
                                        <p className="efr-diff-detail-desc">Private accommodations provide the ideal setting for executive families seeking privacy and flexibility. Popular destinations include:</p>
                                        <div className="efr-diff-detail-tags">
                                            {['Tuscany', 'Provence', 'Greek Islands', 'Caribbean', 'Hawaii', 'Costa Rica'].map((dest, i) => (
                                                <span key={i} className="efr-diff-tag">{dest}</span>
                                            ))}
                                        </div>
                                        <div className="efr-diff-detail-divider"></div>
                                        <div>
                                            <p className="efr-diff-benefit-label">Benefits include:</p>
                                            <ul className="efr-diff-benefit-list">
                                                {['Spacious accommodations', 'Private swimming pools', 'Personal chefs', 'Dedicated housekeeping', 'Concierge services', 'Family gathering spaces', 'Flexible schedules', 'Complete privacy'].map((ben, i) => (
                                                    <li key={i}><CheckCircle size={15} /><span>{ben}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {efrActivePillar === 1 && (
                                <div className="efr-diff-detail-card">
                                    <div className="efr-diff-detail-img">
                                        <img src={luxuryCruiseImg} alt="Luxury family cruise"/>
                                        <div className="efr-diff-img-badge">6 CURATED CRUISE LINES</div>
                                    </div>
                                    <div className="efr-diff-detail-body">
                                        <h3 className="efr-diff-detail-title">Luxury Cruises for Families</h3>
                                        <p className="efr-diff-detail-desc">Luxury cruises combine relaxation with exploration while eliminating the stress of coordinating multiple destinations. Recommended cruise lines include:</p>
                                        <div className="efr-diff-detail-tags">
                                            {['Explora Journeys', 'Regent Seven Seas Cruises', 'Crystal Cruises', 'Silversea Cruises', 'Seabourn', 'Viking'].map((cruise, i) => (
                                                <span key={i} className="efr-diff-tag">{cruise}</span>
                                            ))}
                                        </div>
                                        <div className="efr-diff-detail-divider"></div>
                                        <div>
                                            <p className="efr-diff-benefit-label">Families enjoy:</p>
                                            <ul className="efr-diff-benefit-list">
                                                {['Spacious suites', 'Fine dining', "Children's programs", 'Adult-only spaces', 'Wellness facilities', 'Private shore excursions'].map((enj, i) => (
                                                    <li key={i}><CheckCircle size={15} /><span>{enj}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {efrActivePillar === 2 && (
                                <div className="efr-diff-detail-card">
                                    <div className="efr-diff-detail-img">
                                        <img src={wellnessRetreatImg} alt="Wellness retreat" />
                                    </div>
                                    <div className="efr-diff-detail-body">
                                        <h3 className="efr-diff-detail-title">Wellness & Rejuvenation</h3>
                                        <p className="efr-diff-detail-desc">Executive retreats often include wellness experiences that benefit every family member. Popular options include:</p>
                                        <div className="efr-diff-wellness-grid">
                                            {['Luxury spas', 'Yoga sessions', 'Meditation', 'Fitness programs', 'Nature hikes', 'Healthy cuisine', 'Thermal spas', 'Beach relaxation'].map((wel, i) => (
                                                <div key={i} className="efr-diff-wellness-item">
                                                    <span className="efr-diff-wellness-num">{String(i + 1).padStart(2, '0')}</span>
                                                    <span>{wel}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="efr-diff-wellness-quote">
                                            <p>Wellness activities help families recharge while spending meaningful time together.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ADVENTURE & CULTURAL EXPERIENCES — PREMIUM HORIZONTAL DUAL-COLUMN LAYOUT */}
            <section className="efr-adventure-new-section" style={{ padding: '80px 0', background: 'linear-gradient(180deg, rgba(231, 243, 245, 0.4) 0%, #ffffff 100%)', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>

                        {/* Left Side: Content Box */}
                        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(39, 68, 114, 0.06)', padding: '6px 14px', borderRadius: '100px', width: 'fit-content' }}>
                                <Compass size={16} style={{ color: '#274472' }} />
                                <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em', color: '#274472', textTransform: 'uppercase' }}>Adventure & Cultural Experiences</span>
                            </div>

                            <h2 style={{ fontSize: '38px', fontWeight: '600', color: '#274472', lineHeight: '1.25', margin: 0 }}>
                                Combining Relaxation With Immersive Experiences
                            </h2>

                            <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.7', margin: 0 }}>
                                Many executive families enjoy combining relaxation with immersive experiences. Every experience is selected based on your family's interests and travel style.
                            </p>

                            <div style={{ height: '1px', background: 'rgba(39, 68, 114, 0.1)', margin: '8px 0' }}></div>

                            <div>
                                <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em', color: '#718096', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Curated Experiences:</span>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                                    {[
                                        { label: 'African safaris', icon: <Camera size={14} style={{ color: '#274472' }} /> },
                                        { label: 'Private yacht charters', icon: <Anchor size={14} style={{ color: '#274472' }} /> },
                                        { label: 'Cultural tours', icon: <Globe size={14} style={{ color: '#274472' }} /> },
                                        { label: 'Cooking classes', icon: <Sparkles size={14} style={{ color: '#274472' }} /> },
                                        { label: 'Wildlife encounters', icon: <Compass size={14} style={{ color: '#274472' }} /> },
                                        { label: 'Wine tastings', icon: <Gem size={14} style={{ color: '#274472' }} /> },
                                        { label: 'National parks', icon: <MapPin size={14} style={{ color: '#274472' }} /> },
                                        { label: 'Expedition cruises', icon: <Ship size={14} style={{ color: '#274472' }} /> }
                                    ].map((exp, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#ffffff', borderRadius: '12px', border: '1px solid rgba(39, 68, 114, 0.08)', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                                            {exp.icon}
                                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#2d3748' }}>{exp.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Luxury Framed Image with Gold Accents */}
                        <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                            {/* Offset background luxury border */}
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                border: '2px solid rgba(39, 68, 114, 0.15)',
                                borderRadius: '24px',
                                top: '20px',
                                left: '20px',
                                zIndex: '0',
                                pointerEvents: 'none'
                            }}></div>

                            {/* Main Image Wrapper */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                height: '480px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                                zIndex: '1'
                            }}>
                                <img
                                    src={adventureSafariImg}
                                    alt="Family safari adventure travel"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(15, 28, 46, 0.4) 0%, rgba(15, 28, 46, 0) 100%)'
                                }}></div>
                            </div>
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

                    <div style={{ marginTop: '40px' }}>
                        {/* Horizontal Tabbed Timeline Selector */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '40px',
                            borderBottom: '1px solid rgba(39, 68, 114, 0.12)',
                            paddingBottom: '12px',
                            flexWrap: 'wrap'
                        }}>
                            {efrShowcaseCategories.map((category, idx) => {
                                const isActive = efrSelectedCategory === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setEfrSelectedCategory(idx)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            padding: '8px 16px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            position: 'relative',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <span style={{
                                            fontSize: '13px',
                                            fontWeight: '700',
                                            color: isActive ? '#274472' : '#a0aec0',
                                            fontFamily: 'monospace'
                                        }}>0{idx + 1}.</span>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: isActive ? '#1c2f4a' : '#718096',
                                            transition: 'color 0.3s ease'
                                        }}>{category.title}</span>

                                        {isActive && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '-13px',
                                                left: 0,
                                                right: 0,
                                                height: '3px',
                                                background: 'linear-gradient(90deg, #274472 0%, #10b981 100%)',
                                                borderRadius: '3px'
                                            }} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Splendid Double-Pane Card Layout */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(39, 68, 114, 0.1)',
                            border: '1px solid rgba(39, 68, 114, 0.08)',
                            flexWrap: 'wrap',
                            alignItems: 'stretch'
                        }}>
                            {/* Left Side: Photo Frame & Highlights */}
                            <div style={{
                                flex: '1.1 1 500px',
                                position: 'relative',
                                height: '520px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}>
                                <img
                                    src={
                                        efrSelectedCategory === 0 ? privateVillaImg :
                                            efrSelectedCategory === 1 ? luxuryCruiseImg :
                                                efrSelectedCategory === 2 ? wellnessRetreatImg : adventureSafariImg
                                    }
                                    alt={efrShowcaseCategories[efrSelectedCategory].title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 0
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(15, 28, 46, 0.9) 0%, rgba(15, 28, 46, 0.1) 60%, rgba(15, 28, 46, 0.3) 100%)',
                                    zIndex: 1
                                }}></div>

                                {/* Floating Tag */}
                                <div style={{
                                    position: 'absolute',
                                    top: '24px',
                                    left: '24px',
                                    background: 'rgba(255,255,255,0.95)',
                                    color: '#274472',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    padding: '6px 14px',
                                    borderRadius: '100px',
                                    letterSpacing: '0.05em',
                                    zIndex: 2,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                                }}>
                                    RECOMMENDED RETREAT STYLE
                                </div>

                                {/* Photo Content / Highlight Overlay */}
                                <div style={{ position: 'relative', zIndex: 2, padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>CURATED DESTINATIONS / BRANDS</span>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {efrShowcaseCategories[efrSelectedCategory].highlights.map((item, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    background: 'rgba(255,255,255,0.15)',
                                                    backdropFilter: 'blur(8px)',
                                                    color: '#ffffff',
                                                    fontSize: '13px',
                                                    fontWeight: '500',
                                                    padding: '6px 14px',
                                                    borderRadius: '100px',
                                                    border: '1px solid rgba(255,255,255,0.25)',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}
                                            >
                                                <MapPin size={12} style={{ color: '#10b981' }} />
                                                <span>{item}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Plaque Details (Dark Navy Card) */}
                            <div style={{
                                flex: '0.9 1 400px',
                                background: 'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 100%)',
                                padding: '48px',
                                color: '#ffffff',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '24px',
                                position: 'relative'
                            }}>
                                <div>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#10b981', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>EXCLUSIVE RETREAT OVERVIEW</span>
                                    <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#ffffff', margin: 0, lineHeight: '1.3', textAlign: 'left' }}>
                                        {efrShowcaseCategories[efrSelectedCategory].title}
                                    </h3>
                                </div>

                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 16px' }}>Retreat Includes:</h4>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: 0, margin: 0, listStyle: 'none' }}>
                                        {efrShowcaseCategories[efrSelectedCategory].bestFor.map((item, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#e2e8f0', lineHeight: '1.4' }}>
                                                <Sparkles size={16} style={{ color: '#f59e0b', marginTop: '2px', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4px 0' }}></div>

                                <button
                                    style={{
                                        background: 'linear-gradient(135deg, #274472 0%, #1c2f4a 100%)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: '#ffffff',
                                        padding: '14px 28px',
                                        borderRadius: '12px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        alignSelf: 'flex-start',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="efr-showcase-action-btn"
                                >
                                    <span>Plan This Retreat</span>
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CELEBRATING IMPORTANT MILESTONES */}
            <section id="executive-milestones-insight" className="efr-milestones-section">
                <div className="efr-milestones-split">

                    <div className="efr-milestones-img-col">
                        <div className="efr-milestones-img-wrap">
                            <img src={celebrationImg} alt="Family milestone celebration luxury travel" className="efr-milestones-img" />
                            <div className="efr-milestones-stats">
                                <div className="efr-milestones-stat">
                                    <span className="efr-milestones-stat-number">40+</span>
                                    <span className="efr-milestones-stat-label">Years of Expertise</span>
                                </div>
                                <div className="efr-milestones-divider" />
                                <div className="efr-milestones-stat">
                                    <span className="efr-milestones-stat-number">121+</span>
                                    <span className="efr-milestones-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="efr-milestones-content-col">

                        <div className="efr-milestones-eyebrow-row">
                            <Award size={15} className="efr-milestones-eyebrow-icon" />
                            <span className="efr-milestones-eyebrow">Expert Insight from Angela Hughes</span>
                        </div>

                        <h2 className="efr-milestones-title">Celebrating Important Milestones</h2>
                        <div className="efr-milestones-accent-bar" />

                        <p className="efr-milestones-lead">
                            Executive family retreats are ideal for celebrating life's biggest achievements. Every celebration becomes a memorable experience shared with those who matter most.
                        </p>

                        <span className="efr-milestones-occasions-label">Popular occasions include:</span>

                        <div className="efr-milestones-grid">
                            {[
                                { label: 'Anniversary celebrations', icon: Heart },
                                { label: 'Retirement', icon: Sparkles },
                                { label: 'Birthday milestones', icon: Star },
                                { label: 'Graduations', icon: Award },
                                { label: 'Career achievements', icon: Briefcase },
                                { label: 'Family reunions', icon: Users },
                                { label: 'Holiday vacations', icon: Sun },
                                { label: 'Business success celebrations', icon: Crown },
                            ].map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="efr-milestones-card">
                                        <div className="efr-milestones-card-icon">
                                            <IconComp size={18} />
                                        </div>
                                        <span className="efr-milestones-card-label">{item.label}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <p className="efr-milestones-expertise-text">
                            As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps executive families navigate complex travel choices with real-world expertise spanning luxury cruises, private villas, wellness travel, safaris, and premium global travel planning.
                        </p>

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
                        <img src={conciergeTravelImg} alt="Private aviation concierge travel planning" className="efr-luxury-main-image" />
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
                </div>
            </section>

            {/* WHY WORK WITH US — ANGELA HUGHES RECOGNITION */}
            <section className="efr-work-with-us-section">
                <div className="efr-work-with-us-container">

                    {/* Header Block */}
                    <div className="efr-work-header-card">
                        <span className="efr-work-eyebrow">ELITE TRAVEL ADVISOR ADVANTAGE</span>
                        <h2 className="efr-section-heading white-heading">Why Executive Families Trust <br /> Trips & Ships Luxury Travel</h2>
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
                        <h2 className="efr-cta-heading-white">Ready to Reconnect With <br /> What Matters Most?</h2>
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
                            <Link to="/contact" className="efr-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
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