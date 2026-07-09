import Navbar from '../../components/Navbar/Navbar'
import './Luxurywellnessretreats.css'

import {
    Sparkles, Phone, LayoutList, Brain, Activity, Moon, Dumbbell, Apple, Smile, Flame,
    Target, Zap, TrendingUp, Scale, Calendar, Hand, Droplet, Flower2, Leaf, Waves,
    HeartHandshake, PersonStanding, Mountain, Bike, Trophy, Compass, Wind, Trees, WifiOff,
    Music, BookOpen, Heart, MapPin, Stethoscope, Ship, Home, Gem, Car, ClipboardCheck,
    Utensils, Plane, PlaneTakeoff, Globe, Star, Award, Briefcase
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function LuxuryWellnessRetreats() {

    const lwrHeroImages = [
        'https://placehold.co/1800x1200?text=Luxury+Spa+Retreat',
        'https://placehold.co/1800x1200?text=Mindfulness+%26+Meditation',
        'https://placehold.co/1800x1200?text=Executive+Wellness+Escape'
    ]

    const [lwrCurrentHero, setLwrCurrentHero] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setLwrCurrentHero((prev) => (prev + 1) % lwrHeroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [lwrHeroImages.length])

    const [lwrActiveFaq, setLwrActiveFaq] = useState(null)
    const lwrToggleFaq = (index) => {
        setLwrActiveFaq(lwrActiveFaq === index ? null : index)
    }

    const [isConciergeExpanded, setIsConciergeExpanded] = useState(false)


    const lwrWellnessBenefits = [
        { title: "Stress reduction", icon: Heart },
        { title: "Mental clarity", icon: Brain },
        { title: "Physical recovery", icon: Activity },
        { title: "Better sleep", icon: Moon },
        { title: "Improved fitness", icon: Dumbbell },
        { title: "Mindfulness", icon: Sparkles },
        { title: "Healthy nutrition", icon: Apple },
        { title: "Emotional well-being", icon: Smile }
    ]

    const lwrExecutiveList = [
        { title: "Reduce burnout", icon: Flame },
        { title: "Improve focus", icon: Target },
        { title: "Recharge mentally", icon: Zap },
        { title: "Enhance productivity", icon: TrendingUp },
        { title: "Restore work-life balance", icon: Scale },
        { title: "Improve sleep quality", icon: Moon },
        { title: "Practice mindfulness", icon: Sparkles },
        { title: "Build healthier routines", icon: Calendar }
    ]

    const lwrSpaExperiences = [
        { title: "Therapeutic massages", icon: Hand },
        { title: "Hydrotherapy", icon: Droplet },
        { title: "Aromatherapy", icon: Flower2 },
        { title: "Facial treatments", icon: Sparkles },
        { title: "Detox therapies", icon: Leaf },
        { title: "Sauna and steam experiences", icon: Flame },
        { title: "Thermal pools", icon: Waves },
        { title: "Holistic healing", icon: HeartHandshake }
    ]

    const lwrFitnessActivities = [
        { title: "Personal fitness training", icon: Dumbbell },
        { title: "Yoga classes", icon: PersonStanding },
        { title: "Pilates", icon: Activity },
        { title: "Hiking", icon: Mountain },
        { title: "Cycling", icon: Bike },
        { title: "Swimming", icon: Waves },
        { title: "Tennis", icon: Trophy },
        { title: "Outdoor adventure activities", icon: Compass }
    ]

    const lwrMindfulnessSteps = [
        { title: "Guided meditation", icon: Sparkles },
        { title: "Breathwork sessions", icon: Wind },
        { title: "Mindfulness coaching", icon: Brain },
        { title: "Nature immersion", icon: Trees },
        { title: "Digital detox programs", icon: WifiOff },
        { title: "Sound healing", icon: Music },
        { title: "Journaling workshops", icon: BookOpen },
        { title: "Stress management sessions", icon: Heart }
    ]

    const lwrDestinations = [
        { name: "Maldives", img: "https://placehold.co/440x560?text=Maldives" },
        { name: "Bali", img: "https://placehold.co/440x560?text=Bali" },
        { name: "Costa Rica", img: "https://placehold.co/440x560?text=Costa+Rica" },
        { name: "Switzerland", img: "https://placehold.co/440x560?text=Switzerland" },
        { name: "Italy", img: "https://placehold.co/440x560?text=Italy" },
        { name: "Thailand", img: "https://placehold.co/440x560?text=Thailand" },
        { name: "Iceland", img: "https://placehold.co/440x560?text=Iceland" },
        { name: "Arizona", img: "https://placehold.co/440x560?text=Arizona" },
        { name: "California", img: "https://placehold.co/440x560?text=California" },
        { name: "Caribbean", img: "https://placehold.co/440x560?text=Caribbean" }
    ]

    const lwrPersonalizedExperiences = [
        { title: "Spa vacations", icon: Flower2 },
        { title: "Nutrition-focused retreats", icon: Apple },
        { title: "Sleep improvement programs", icon: Moon },
        { title: "Detox retreats", icon: Leaf },
        { title: "Medical wellness programs", icon: Stethoscope },
        { title: "Luxury cruises with wellness facilities", icon: Ship },
        { title: "Private wellness villas", icon: Home },
        { title: "Mind-body retreats", icon: Brain }
    ]

    const lwrConciergeServices = [
        { label: "Luxury accommodations", icon: Gem },
        { label: "Private transportation", icon: Car },
        { label: "Wellness consultations", icon: ClipboardCheck },
        { label: "Spa appointments", icon: Flower2 },
        { label: "Fitness sessions", icon: Dumbbell },
        { label: "Healthy dining reservations", icon: Utensils },
        { label: "Private excursions", icon: Compass },
        { label: "Airport VIP services", icon: Plane },
        { label: "Private aviation", icon: PlaneTakeoff },
        { label: "Personalized travel support", icon: Phone }
    ]

    const lwrWhyChooseUs = [
        { title: "Personalized wellness planning", icon: ClipboardCheck },
        { title: "Luxury destination expertise", icon: Globe },
        { title: "Concierge-level service", icon: Star },
        { title: "Exclusive wellness partnerships", icon: Award },
        { title: "Flexible itineraries", icon: Calendar },
        { title: "Executive travel specialists", icon: Briefcase },
        { title: "Global luxury travel knowledge", icon: Globe },
        { title: "Ongoing travel support", icon: Phone }
    ]

    const lwrFaqs = [
        {
            question: "What is a luxury wellness retreat?",
            answer: "A luxury wellness retreat combines premium accommodations with experiences focused on physical health, mental well-being, relaxation, and personal renewal."
        },
        {
            question: "Who should consider a wellness vacation?",
            answer: "Wellness vacations are ideal for executives, busy professionals, couples, families, and anyone seeking rest, recovery, and improved well-being."
        },
        {
            question: "What is executive wellness travel?",
            answer: "Executive wellness travel is designed to help business leaders reduce stress, recover from burnout, improve focus, and restore work-life balance."
        },
        {
            question: "What treatments are available at luxury spa retreats?",
            answer: "Luxury spas typically offer massages, hydrotherapy, facials, aromatherapy, detox therapies, thermal pools, and holistic wellness treatments."
        },
        {
            question: "Can wellness retreats include fitness programs?",
            answer: "Yes. Many retreats feature yoga, Pilates, personal training, hiking, cycling, swimming, and other fitness activities."
        },
        {
            question: "What is a digital detox retreat?",
            answer: "A digital detox retreat encourages guests to disconnect from technology and focus on mindfulness, relaxation, and meaningful experiences."
        },
        {
            question: "Which destinations are best for luxury wellness travel?",
            answer: "Popular destinations include the Maldives, Bali, Costa Rica, Switzerland, Italy, Thailand, Iceland, Arizona, California, and the Caribbean."
        },
        {
            question: "Can wellness retreats be customized?",
            answer: "Absolutely. Every itinerary is tailored to your wellness goals, preferred activities, accommodations, and travel style."
        },
        {
            question: "Do you arrange private wellness villas?",
            answer: "Yes. We can arrange private luxury villas featuring wellness amenities, personal chefs, spa treatments, and concierge services."
        },
        {
            question: "Can private aviation be included?",
            answer: "Yes. We coordinate private jet travel, VIP airport services, luxury transfers, and personalized travel logistics."
        },
        {
            question: "How far in advance should I plan a wellness retreat?",
            answer: "For the best accommodations and wellness programs, we recommend booking 6 to 12 months before your preferred travel dates."
        },
        {
            question: "Why choose Trips & Ships Luxury Travel?",
            answer: "Trips & Ships Luxury Travel offers personalized wellness planning, luxury accommodations, concierge-level service, and carefully curated wellness experiences designed to help you relax, recover, and thrive."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats",
                "name": "Luxury Wellness Retreats",
                "url": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats",
                "description": "Luxury wellness retreats featuring spa vacations, executive wellness travel, fitness escapes, mindfulness experiences, and personalized wellness journeys.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats#article"
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
                "description": "Luxury travel agency specializing in wellness vacations, executive wellness retreats, luxury spa escapes, cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats#article",
                "headline": "Luxury Wellness Retreats",
                "url": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats",
                "description": "Expert guide to luxury wellness retreats including executive wellness travel, spa vacations, mindfulness retreats, fitness escapes, luxury accommodations, and personalized wellness experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/luxury-wellness-retreats.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Wellness Retreat Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Wellness Travel Consulting",
                "description": "Expert planning services for luxury wellness retreats, executive wellness vacations, spa escapes, fitness retreats, mindfulness experiences, and personalized wellness travel."
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
                        "name": "Luxury Wellness Retreats",
                        "item": "https://www.tripsshipsluxurytravel.com/luxury-wellness-retreats"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a luxury wellness retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A luxury wellness retreat combines premium accommodations with spa treatments, fitness programs, mindfulness experiences, and holistic wellness activities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should consider a wellness vacation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Wellness vacations are ideal for professionals, executives, couples, families, and anyone seeking relaxation, recovery, and improved well-being."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is executive wellness travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Executive wellness travel helps business leaders reduce stress, recover from burnout, improve focus, and restore work-life balance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What treatments are available at luxury spa retreats?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury spa retreats commonly offer massages, hydrotherapy, facials, aromatherapy, detox therapies, thermal pools, and holistic wellness treatments."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can wellness retreats include fitness programs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many retreats offer yoga, Pilates, hiking, cycling, swimming, personal training, and other wellness-focused activities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a digital detox retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A digital detox retreat encourages travelers to disconnect from technology and focus on relaxation, mindfulness, and personal well-being."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which destinations are best for luxury wellness travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular wellness destinations include the Maldives, Bali, Costa Rica, Switzerland, Italy, Thailand, Iceland, Arizona, California, and the Caribbean."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can wellness retreats be customized?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Every wellness retreat is customized around your personal health goals, interests, and preferred travel style."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you arrange private wellness villas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private wellness villas with spa services, chefs, and concierge support can be arranged."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can private aviation be included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We coordinate private jet travel, VIP airport services, luxury transfers, and personalized travel logistics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should I plan a wellness retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking 6 to 12 months in advance provides the best availability for luxury wellness resorts and exclusive programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel offers expert wellness planning, concierge-level service, exclusive partnerships, and personalized luxury wellness experiences."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Luxury Wellness Retreats | Wellness Vacations, Spa Retreats & Executive Wellness Travel</title>
                <meta name="title" content="Luxury Wellness Retreats | Executive Wellness & Spa Vacations" />
                <meta name="description" content="Discover luxury wellness retreats designed to restore your mind, body, and spirit. Explore wellness vacations, executive wellness travel, luxury spa retreats, fitness escapes, and personalized wellness experiences with Trips & Ships Luxury Travel." />
                <meta name="keywords" content="Luxury Wellness Retreats, Luxury wellness retreats, Wellness vacations, Executive wellness travel, Luxury spa retreats, Wellness travel, Mental wellness vacations, Luxury health retreats, Holistic wellness travel, Luxury relaxation vacations, Mindfulness retreats" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="lwr-page-wrapper">

                {/* ============================ HERO SECTION ============================ */}
                <section className="lwr-hero-section">
                    {lwrHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`lwr-hero-slide ${lwrCurrentHero === idx ? 'lwr-slide-active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                    <div className="lwr-hero-overlay"></div>
                    <div className="lwr-hero-content">
                        <div className="lwr-hero-tag">
                            <Sparkles size={16} />
                            <span>Wellness Vacations & Spa Retreats</span>
                        </div>
                        <h1 className="lwr-hero-title">Luxury Wellness Retreats</h1>
                        <p className="lwr-hero-subtitle">
                            Reconnect, Recharge, and Restore
                        </p>
                        <div className="lwr-hero-btn-row">
                            <button className="lwr-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="lwr-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* ============================ INTRO SECTION ============================ */}
                <section className="lwr-intro-section">
                    <div className="lwr-intro-container">
                        <div className="lwr-intro-grid">
                            <div className="lwr-intro-copy">
                                <span className="lwr-eyebrow-label">RECONNECT, RECHARGE, AND RESTORE</span>
                                <h2 className="lwr-section-heading">Reconnect, Recharge, and Restore</h2>
                                <div className="lwr-heading-bar"></div>
                                <p className="lwr-lead-paragraph">
                                    Luxury travel isn't always about seeing more—sometimes it's about slowing down, finding balance, and investing in your well-being.
                                </p>
                                <p className="lwr-lead-paragraph">
                                    At Trips & Ships Luxury Travel, we design luxury wellness retreats that combine exceptional accommodations with transformative experiences focused on physical health, mental well-being, relaxation, and personal renewal.
                                </p>
                                <div className="lwr-intro-highlight-box">
                                    Whether you're seeking a peaceful spa escape, a fitness-focused vacation, a mindfulness retreat, or an executive wellness getaway, every itinerary is thoughtfully customized to help you return home feeling refreshed and inspired.
                                </div>
                            </div>
                            <div className="lwr-intro-image-frame">
                                <img src="https://placehold.co/900x1000?text=Luxury+Wellness+Retreat" alt="Luxury wellness retreat with spa and relaxation" />
                                <div className="lwr-intro-badge-float">
                                    <Sparkles size={18} />
                                    <span>Mind, Body & Spirit Renewal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================ WHY CHOOSE A WELLNESS VACATION? ============================ */}
                <section className="lwr-why-section">
                    <div className="lwr-why-container">

                        <div className="lwr-why-image-wrap">
                            <img src="https://placehold.co/900x1000?text=Peaceful+Spa+Escape" alt="Peaceful spa escape for relaxation" />
                            <div className="lwr-why-image-tint"></div>
                            <div className="lwr-why-floating-badge">
                                <div className="lwr-why-floating-badge-icon">
                                    <Heart size={20} color="#ffffff" />
                                </div>
                                <p className="lwr-why-floating-badge-text">
                                    Luxury wellness travel combines relaxation with meaningful experiences that promote long-term health.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="lwr-section-heading">Why Choose a Wellness Vacation?</h2>
                            <div className="lwr-heading-bar"></div>

                            <p className="lwr-lead-paragraph">
                                Modern life is busy, demanding, and often overwhelming. A wellness retreat provides the opportunity to disconnect from daily stress while reconnecting with yourself.
                            </p>
                            <p className="lwr-why-lead">Benefits include:</p>

                            <div className="lwr-why-list">
                                {lwrWellnessBenefits.map((item, idx) => {
                                    const LwrIcon = item.icon
                                    return (
                                        <div key={idx} className="lwr-why-list-item">
                                            <span className="lwr-why-list-icon"><LwrIcon size={18} /></span>
                                            <span>{item.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ============================ EXECUTIVE WELLNESS TRAVEL ============================ */}
                <section className="lwr-exec-section">
                    <div className="lwr-exec-container">

                        <div>
                            <span className="lwr-eyebrow-label lwr-exec-eyebrow">FOR BUSY PROFESSIONALS</span>
                            <h2 className="lwr-section-heading lwr-exec-heading">Executive Wellness Travel</h2>
                            <div className="lwr-heading-bar"></div>

                            <p className="lwr-exec-p">
                                Executives and business leaders often struggle to prioritize personal wellness.
                            </p>

                            <div className="lwr-exec-quote-panel">
                                <span className="lwr-exec-quote-mark">"</span>
                                <p className="lwr-exec-quote-text">
                                    Whether traveling solo or with family, these retreats offer space to reset away from daily responsibilities.
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="lwr-exec-lead">Our executive wellness retreats are designed to help professionals:</p>
                            <div className="lwr-exec-stack">
                                {lwrExecutiveList.map((item, idx) => (
                                    <div key={idx} className="lwr-exec-stack-item">
                                        <div className="lwr-exec-stack-number">{idx + 1}</div>
                                        <span className="lwr-exec-stack-text">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ============================ LUXURY SPA RETREATS ============================ */}
                <section className="lwr-spa-grid-section">
                    {/* Header */}
                    <div className="lwr-spa-grid-header">
                        <span className="lwr-spa-grid-eyebrow">
                            <Flower2 size={12} /> World-Class Spas
                        </span>
                        <h2 className="lwr-spa-grid-heading">Luxury Spa Retreats</h2>
                        <p className="lwr-spa-grid-desc">
                            World-class spas provide the foundation for many wellness journeys. Each spa experience is tailored to your wellness goals and preferences.
                        </p>
                    </div>

                    {/* Simple Grid */}
                    <div className="lwr-spa-grid">
                        {lwrSpaExperiences.map((item, idx) => {
                            const LwrIcon = item.icon
                            return (
                                <div key={idx} className="lwr-spa-grid-card">
                                    <div className="lwr-spa-grid-icon">
                                        <LwrIcon size={22} />
                                    </div>
                                    <span className="lwr-spa-grid-label">{item.title}</span>
                                    <span className="lwr-spa-grid-num">0{idx + 1}</span>
                                </div>
                            )
                        })}
                    </div>

                    <p className="lwr-spa-grid-note">
                        Experiences may include the above and more, tailored to your goals.
                    </p>
                </section>

                {/* ============================ FITNESS & ACTIVE WELLNESS ============================ */}
                <section className="lwr-fitness-section">
                    <div className="lwr-fitness-container">
                        <h2 className="lwr-section-heading">Fitness & Active Wellness</h2>
                        <div className="lwr-heading-bar lwr-bar-center"></div>

                        <p className="lwr-lead-paragraph" style={{ textAlign: 'center' }}>
                            Wellness extends beyond relaxation.
                        </p>
                        <p className="lwr-fitness-lead">Many retreats offer:</p>

                        <div className="lwr-fitness-cloud">
                            {lwrFitnessActivities.map((item, idx) => {
                                const LwrIcon = item.icon
                                return (
                                    <span key={idx} className="lwr-fitness-tag">
                                        <LwrIcon size={16} />
                                        {item.title}
                                    </span>
                                )
                            })}
                        </div>

                        <p className="lwr-fitness-outro">
                            Whether you're beginning a fitness journey or maintaining an active lifestyle, we help you find the right destination.
                        </p>
                    </div>
                </section>

                {/* ============================ MINDFULNESS & MENTAL WELL-BEING ============================ */}
                <section className="lwr-mind-grid-section">
                    <div className="lwr-mind-grid-header">
                        <span className="lwr-mind-grid-eyebrow">
                            <Brain size={12} /> Mental Wellness
                        </span>
                        <h2 className="lwr-mind-grid-heading">Mindfulness & Mental Well-Being</h2>
                        <p className="lwr-mind-grid-desc">
                            Mental wellness is an essential part of luxury travel.
                        </p>
                    </div>

                    {/* Simple Grid */}
                    <div className="lwr-mind-grid">
                        {lwrMindfulnessSteps.map((item, idx) => {
                            const LwrIcon = item.icon
                            return (
                                <div key={idx} className="lwr-mind-grid-card">
                                    <div className="lwr-mind-grid-icon">
                                        <LwrIcon size={22} />
                                    </div>
                                    <span className="lwr-mind-grid-label">{item.title}</span>
                                    <span className="lwr-mind-grid-num">0{idx + 1}</span>
                                </div>
                            )
                        })}
                    </div>

                    <p className="lwr-mind-grid-note">
                        These experiences encourage relaxation while supporting long-term emotional wellness.
                    </p>
                </section>

                {/* ============================ LUXURY WELLNESS DESTINATIONS ============================ */}
                <section className="lwr-dest-split-section">
                    <div className="lwr-dest-split-container">
                        {/* Left Side: Content & List */}
                        <div className="lwr-dest-split-left">
                            <div className="lwr-dest-split-header">
                                <span className="lwr-dest-split-eyebrow">
                                    <MapPin size={12} /> Global Destinations
                                </span>
                                <h2 className="lwr-dest-split-heading">Luxury Wellness Destinations</h2>
                                <p className="lwr-dest-split-desc">
                                    We recommend exceptional wellness destinations around the world.
                                </p>
                            </div>

                            <div className="lwr-dest-split-grid">
                                {lwrDestinations.map((dest, idx) => (
                                    <div key={idx} className="lwr-dest-split-item">
                                        <span className="lwr-dest-split-num">0{idx + 1}</span>
                                        <span className="lwr-dest-split-name">{dest.name}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="lwr-dest-split-outro">
                                Each destination offers unique opportunities for relaxation, healing, and personal growth.
                            </p>
                        </div>

                        {/* Right Side: Two Placeholder Images */}
                        <div className="lwr-dest-split-images">
                            <img src="https://placehold.co/600x405?text=Luxury+Resort" alt="Luxury Wellness Destination 1" className="lwr-dest-split-img" />
                            <img src="https://placehold.co/600x405?text=Wellness+Retreat" alt="Luxury Wellness Destination 2" className="lwr-dest-split-img" />
                        </div>
                    </div>
                </section>

                {/* ============================ PERSONALIZED WELLNESS EXPERIENCES ============================ */}
                <section className="lwr-pers-new-section">
                    <div className="lwr-pers-new-inner">
                        {/* Left: heading + placeholder image */}
                        <div className="lwr-pers-new-left">
                            <span className="lwr-pers-new-eyebrow">
                                <Sparkles size={12} /> Tailored For You
                            </span>
                            <h2 className="lwr-pers-new-heading">Personalized Wellness Experiences</h2>
                            <div className="lwr-pers-new-rule"></div>
                            <p className="lwr-pers-new-desc">
                                Every traveler has different wellness goals. We customize experiences based on your interests.
                            </p>
                            
                            {/* Placeholder image */}
                            <img src="https://placehold.co/600x400?text=Personalized+Itinerary" alt="Personalized Itinerary Placeholder" className="lwr-pers-new-img" />

                            <p className="lwr-pers-new-outro">
                                Your itinerary is designed around your lifestyle, schedule, and personal preferences.
                            </p>
                        </div>

                        {/* Right: stacked feature items */}
                        <div className="lwr-pers-new-right">
                            {lwrPersonalizedExperiences.map((item, idx) => {
                                const LwrIcon = item.icon
                                return (
                                    <div key={idx} className="lwr-pers-new-item">
                                        <div className="lwr-pers-new-item-icon"><LwrIcon size={18} /></div>
                                        <span className="lwr-pers-new-item-label">{item.title}</span>
                                        <span className="lwr-pers-new-item-num">0{idx + 1}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ============================ CONCIERGE WELLNESS PLANNING ============================ */}
                <section className="lwr-concierge-section">
                    <div className="lwr-concierge-container">

                        <div>
                            <h2 className="lwr-section-heading">Concierge Wellness Planning</h2>
                            <div className="lwr-heading-bar"></div>

                            <p className="lwr-lead-paragraph">
                                Our concierge services ensure a seamless wellness journey.
                            </p>
                            <p className="lwr-concierge-lead">We coordinate:</p>
                             <div className="lwr-concierge-menu-list">
                                {(isConciergeExpanded ? lwrConciergeServices : lwrConciergeServices.slice(0, 5)).map((item, idx) => {
                                    const LwrIcon = item.icon
                                    return (
                                        <div key={idx} className="lwr-concierge-menu-item">
                                            <span className="lwr-concierge-menu-icon"><LwrIcon size={17} /></span>
                                            <span className="lwr-concierge-menu-name">{item.label}</span>
                                            <span className="lwr-concierge-menu-dots"></span>
                                        </div>
                                    )
                                })}
                            </div>

                            <button 
                                onClick={() => setIsConciergeExpanded(!isConciergeExpanded)}
                                className="lwr-concierge-readmore-btn"
                            >
                                {isConciergeExpanded ? "Read Less" : "Read More"}
                            </button>

                            <p className="lwr-concierge-outro">
                                Every detail is carefully managed from departure through your return home.
                            </p>
                        </div>



                        <div className="lwr-concierge-image-wrap">
                            <img src="https://placehold.co/900x1000?text=Concierge+Wellness+Planning" alt="Concierge planning a wellness journey" />
                        </div>

                    </div>
                </section>

                {/* ============================ WHY CHOOSE TRIPS & SHIPS LUXURY TRAVEL? ============================ */}
                <section className="lwr-whyus-section">
                    <div className="lwr-whyus-container">
                        <div className="lwr-whyus-top">
                            <div className="lwr-whyus-copy">
                                <span className="lwr-eyebrow-label">TRUSTED WELLNESS PLANNING</span>
                                <h2 className="lwr-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                                <div className="lwr-heading-bar"></div>
                                <p className="lwr-lead-paragraph">
                                    Planning a luxury wellness retreat requires more than booking a spa resort—it requires understanding your personal goals and selecting experiences that truly support your well-being. Clients choose us because we provide:
                                </p>
                            </div>
                        </div>

                        <div className="lwr-whyus-grid">
                            {lwrWhyChooseUs.map((item, idx) => {
                                const LwrIcon = item.icon
                                return (
                                    <div key={idx} className="lwr-whyus-card">
                                        <div className="lwr-whyus-icon">
                                            <LwrIcon size={22} />
                                        </div>
                                        <p className="lwr-whyus-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="lwr-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            Whether you're seeking relaxation, recovery, fitness, or complete renewal, we'll design a wellness journey tailored specifically to you.
                        </p>
                    </div>
                </section>

                {/* ============================ FAQ SECTION ============================ */}
                <section className="lwr-faq-section">
                    <div className="lwr-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="lwr-section-heading">Frequently Asked Questions</h2>
                            <div className="lwr-heading-bar lwr-bar-center"></div>
                        </div>
                        <div className="lwr-faq-list">
                            {lwrFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="lwr-faq-item"
                                    onClick={() => lwrToggleFaq(index)}
                                >
                                    <div className="lwr-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="lwr-faq-toggle">
                                            {lwrActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {lwrActiveFaq === index && (
                                        <p className="lwr-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============================ CTA SECTION ============================ */}
                <section className="lwr-cta-section">
                    <div className="lwr-cta-bg-pattern"></div>
                    <div className="lwr-cta-inner">
                        <h2 className="lwr-cta-heading">Ready to Begin Your Wellness Journey?</h2>
                        <div className="lwr-cta-separator"></div>
                        <p className="lwr-cta-text">
                            Whether you're seeking relaxation, recovery, fitness, or complete renewal, we'll design a wellness journey tailored specifically to you.
                        </p>
                        <div className="lwr-cta-btn-row">
                            <button className="lwr-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="lwr-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default LuxuryWellnessRetreats