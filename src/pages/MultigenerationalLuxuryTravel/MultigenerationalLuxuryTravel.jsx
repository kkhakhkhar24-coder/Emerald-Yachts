import Navbar from '../../components/Navbar/Navbar'
import './MultigenerationalLuxuryTravel.css'
import {
    Shield, Plane, Ship, Compass, Heart, Award, Sparkles, Users, Clock, MapPin, CheckCircle,
    Phone, LayoutList, Star, Anchor, Calendar, Gem, Globe, Utensils, Sun, Briefcase, BookOpen, Flame,
    ArrowUpRight
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// Import SEO images
import heroOutdoorsImg from '../../assets/seo_images/multigenerational-family-walking-tour-luxury-european-village-vacation.webp'
import heroDiningImg from '../../assets/seo_images/luxury-family-dining-private-oceanfront-villa-multigenerational-travel-experience.webp'
import heroVillaImg from '../../assets/seo_images/private-luxury-tropical-villa-exclusive-high-end-vacation-retreat.webp'


import privacyImg from '../../assets/seo_images/multigenerational-family-vacation-rome-colosseum-luxury-italy-travel.webp'

// Legacy Section Images
import legacyRiverImg from '../../assets/seo_images/douro-river-cruise-porto-portugal-luxury-river-vacation.webp'
import legacyYachtImg from '../../assets/seo_images/private-yacht-arrival-luxury-concierge-travel-vip-marina-welcome.webp'
import legacyLodgeImg from '../../assets/seo_images/family-governance-retreat-luxury-mountain-lodge-private-family-office-meeting.webp'
import legacyBeachImg from '../../assets/seo_images/multigenerational-family-beach-vacation-luxury-tropical-family-travel.webp'
import legacyCultureImg from '../../assets/seo_images/multigenerational-family-walking-through-tuscan-village-luxury-italy-vacation.webp'
import legacyHolidayImg from '../../assets/seo_images/luxury-family-relaxing-private-seaside-villa-outdoor-lounge-mediterranean-holiday.webp'
import legacyChristmasImg from '../../assets/seo_images/cologne-christmas-market-gothic-cathedral-germany-holiday-river-cruise.webp'
import legacySafariImg from '../../assets/seo_images/luxury-african-safari-family-wildlife-experience-elephant-viewing-private-game-drive.webp'

// Services Images
import svcReunionImg from '../../assets/seo_images/luxury-multigenerational-family-dinner-seaside-private-villa-mediterranean-vacation.webp'
import svcVillaImg from '../../assets/seo_images/luxury-private-villa-with-infinity-pool-mediterranean-coastal-family-vacation.webp'
import svcCruiseImg from '../../assets/seo_images/luxury-rhine-river-cruise-ship-sunset-germany-european-waterways.webp'
import svcSafariImg from '../../assets/seo_images/luxury-african-safari-lodge-elephant-watering-hole-wildlife-view-family-travel.webp'
import svcWellnessImg from '../../assets/seo_images/multigenerational-family-wellness-yoga-retreat-luxury-resort-vacation.webp'
import svcMilestoneImg from '../../assets/seo_images/luxury-family-celebration-private-villa-cocktail-gathering-mediterranean-coast.webp'
import svcConciergeImg from '../../assets/seo_images/luxury-travel-advisor-personalized-vacation-planning-private-consultation.webp'
import { Link } from 'react-router'

function MultigenerationalLuxuryTravel() {
    const [heroIndex, setHeroIndex] = useState(0)
    const heroImages = [
        heroOutdoorsImg,
        heroDiningImg,
        heroVillaImg
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const multiFaqs = [
        {
            question: "What is multigenerational luxury travel?",
            answer: "Multigenerational luxury travel brings grandparents, parents, children, and grandchildren together on customized luxury vacations designed to create meaningful shared experiences."
        },
        {
            question: "Why are multigenerational vacations becoming more popular?",
            answer: "Families increasingly value spending quality time together and creating lifelong memories through travel rather than giving material gifts."
        },
        {
            question: "What destinations are best for multigenerational travel?",
            answer: "Popular destinations include Italy, Greece, France, Alaska, the Caribbean, South Africa, Costa Rica, and luxury cruise itineraries throughout Europe and the Mediterranean."
        },
        {
            question: "Are luxury cruises good for families with multiple generations?",
            answer: "Yes. Luxury cruises provide accommodations, dining, entertainment, and activities for every age while simplifying travel logistics."
        },
        {
            question: "Why are private villas ideal for family vacations?",
            answer: "Private villas offer spacious accommodations, privacy, private pools, chefs, and flexible schedules that work well for extended families."
        },
        {
            question: "Can grandparents comfortably travel with young children?",
            answer: "Yes. Customized itineraries ensure activities and accommodations are suitable for travelers of all ages."
        },
        {
            question: "Are African safaris suitable for families?",
            answer: "Yes. Many luxury safari lodges welcome families and provide guided wildlife experiences designed for children and adults."
        },
        {
            question: "What concierge services are available?",
            answer: "Concierge services include transportation, accommodations, private guides, dining reservations, excursions, VIP experiences, and personalized travel support."
        },
        {
            question: "How far in advance should we plan a family reunion vacation?",
            answer: "Planning 9–18 months ahead provides the best availability for luxury villas, cruises, and private experiences."
        },
        {
            question: "Can we accommodate different activity levels?",
            answer: "Yes. Every itinerary is customized to ensure each generation enjoys activities suited to their interests and abilities."
        },
        {
            question: "What occasions are ideal for multigenerational travel?",
            answer: "Popular occasions include anniversaries, birthdays, retirements, graduations, family reunions, and holiday celebrations."
        },
        {
            question: "Why use a luxury travel advisor for multigenerational vacations?",
            answer: "A luxury travel advisor coordinates complex logistics, secures exclusive experiences, and ensures every family member enjoys a seamless and memorable vacation."
        }
    ]

    const servicesData = [
        {
            title: "Family Reunion Vacations",
            icon: <Users size={20} />,
            img: svcReunionImg,
            text: "Family reunions deserve extraordinary destinations. Rather than gathering in a hotel ballroom, celebrate through immersive travel experiences in destinations like Italy, Greece, France, Caribbean, Hawaii, Alaska, South Africa, and Costa Rica.",
            bullets: [
                "Luxury accommodations",
                "Private excursions & guides",
                "Group dining coordination",
                "Seamless logistics for all guests"
            ]
        },
        {
            title: "Private Villas",
            icon: <Gem size={20} />,
            img: svcVillaImg,
            text: "Luxury villas are among the most popular options for multigenerational vacations. Families enjoy the comfort of staying together while maintaining plenty of personal space.",
            bullets: [
                "Spacious living areas & bedrooms",
                "Private swimming pools & kitchens",
                "Personal chefs & housekeeping",
                "Outdoor entertaining & complete privacy"
            ]
        },
        {
            title: "Luxury Cruises",
            icon: <Ship size={20} />,
            img: svcCruiseImg,
            text: "Cruises offer an easy way for multiple generations to travel together, eliminating the hassle of packing and unpacking between ports. Partners include Explora Journeys, Regent Seven Seas, Crystal, Silversea, Viking, and Seabourn.",
            bullets: [
                "Spacious suites & multiple dining venues",
                "Children's programs & teen clubs",
                "Adult-only areas & wellness spas",
                "Excursions for every interest"
            ]
        },
        {
            title: "Family Safari Adventures",
            icon: <Compass size={20} />,
            img: svcSafariImg,
            text: "Luxury African safaris provide unforgettable experiences for every generation in destinations like Kenya, Tanzania, Botswana, South Africa, Namibia, and Rwanda.",
            bullets: [
                "Private game drives & walks",
                "Luxury lodges & kids programs",
                "Wildlife photography & stargazing",
                "Conservation & cultural visits"
            ]
        },
        {
            title: "Wellness Retreats",
            icon: <Heart size={20} />,
            img: svcWellnessImg,
            text: "Luxury travel isn't only about sightseeing. Many families include wellness experiences that help everyone recharge, allowing every generation to enjoy their vacation at their own pace.",
            bullets: [
                "Luxury spas & thermal spas",
                "Yoga sessions & meditation",
                "Nature walks & fitness classes",
                "Healthy dining & beach relaxation"
            ]
        },
        {
            title: "Celebrating Milestones",
            icon: <Award size={20} />,
            img: svcMilestoneImg,
            text: "Multigenerational travel provides the perfect setting for life's biggest celebrations, creating another chapter in your family's legacy and building traditions.",
            bullets: [
                "Anniversary & birthday celebrations",
                "Retirement & graduation vacations",
                "Family reunions & holiday gatherings",
                "Generational achievements & new traditions"
            ]
        },
        {
            title: "Concierge Planning",
            icon: <Sparkles size={20} />,
            img: svcConciergeImg,
            text: "Planning travel for several generations can be complex. We manage every detail so your family can simply enjoy the journey.",
            bullets: [
                "Flight & ground transport coordination",
                "Luxury accommodations & villa rentals",
                "Private tours & cruise planning",
                "Restaurant reservations & activities",
                "Special celebrations & VIP support"
            ]
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel",
                "name": "Multigenerational Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel",
                "description": "Discover multigenerational luxury travel with personalized vacations for grandparents, parents, children, and grandchildren. Explore luxury cruises, private villas, safaris, and concierge travel planning.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel#article"
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
                "description": "Luxury travel agency specializing in multi-generational vacations, luxury cruises, safaris, private villas, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel#article",
                "headline": "Multigenerational Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel",
                "description": "Expert guide to multigenerational luxury travel featuring family reunion vacations, grandparent travel, luxury cruises, private villas, safaris, and concierge travel planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/multigenerational-luxury-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Multigenerational Luxury Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Family Vacation Consulting",
                "description": "Expert travel planning for grandparents, parents, children, and grandchildren seeking luxury family vacations, family reunion trips, private villas, cruises, safaris, and personalized concierge travel services."
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
                        "name": "Multigenerational Luxury Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/multigenerational-luxury-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is multigenerational luxury travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Multigenerational luxury travel brings grandparents, parents, children, and grandchildren together on customized vacations designed to create lasting memories."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are multigenerational vacations becoming more popular?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Families increasingly value shared experiences that strengthen relationships and create lifelong memories across generations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What destinations are best for multigenerational travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Italy, Greece, France, Alaska, the Caribbean, South Africa, Costa Rica, and luxury cruise itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are luxury cruises good for family vacations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Luxury cruises offer accommodations, dining, entertainment, and activities suitable for every generation while simplifying travel logistics."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose a private villa for a family reunion?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private villas provide spacious accommodations, privacy, private pools, personalized service, and flexible schedules for extended families."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can grandparents travel comfortably with young children?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Customized itineraries ensure activities, accommodations, and pacing are appropriate for every age group."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are African safaris suitable for multigenerational families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many luxury safari lodges welcome families and offer age-appropriate wildlife experiences led by expert guides."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What concierge services are included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Concierge services may include flights, luxury accommodations, private transportation, restaurant reservations, excursions, and VIP experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should we plan a multigenerational vacation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Planning 9 to 18 months in advance provides the best availability for luxury accommodations, cruises, and exclusive experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can everyone have different activity levels?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Personalized itineraries balance shared family activities with individual interests and free time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What occasions are ideal for multigenerational travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular occasions include anniversaries, birthdays, retirements, graduations, holiday celebrations, and family reunions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why work with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel specializes in customized luxury family vacations with concierge service, exclusive travel partnerships, and seamless planning for every generation."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Multigenerational Luxury Travel | Luxury Family Vacations for Every Generation</title>
                <meta name="title" content="Multigenerational Luxury Travel | Luxury Family Vacation Planning" />
                <meta name="description" content="Plan unforgettable multigenerational luxury travel with personalized vacations for grandparents, parents, children, and grandchildren. Discover luxury cruises, private villas, safaris, family reunions, and concierge travel planning." />
                <meta name="keywords" content="Multigenerational Luxury Travel, Luxury family vacations, Grandparent travel, Family reunion vacations, Luxury family travel, Multi-generational vacations, Family cruise vacations, Luxury villa vacations, Family safari vacations, Concierge family travel, Luxury travel advisor" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="multigenerational-page-wrapper">
                {/* HERO SECTION */}
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
                        Multigenerational Luxury Travel
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Creating Extraordinary Family Vacations Across Every Generation
                    </p>
                </div>
            </section>

            {/* PREMIUM INTRO SECTION */}
            <section className="medi-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        {/* Left Side: Content */}
                        <div>
                            <span className="medi-premium-mini-badge">FAMILY VACATIONS</span>
                            <h2 className="medi-premium-heading">Shared Experiences Across Every Generation</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Some of life's most meaningful moments happen when multiple generations come together to share new experiences. From grandparents introducing grandchildren to new cultures, to parents celebrating milestones with extended family, luxury travel creates memories that become treasured family traditions.
                            </p>
                            <p className="medi-intro-desc-text">
                                At Trips & Ships Luxury Travel, we specialize in designing personalized multigenerational luxury vacations that bring grandparents, parents, children, and grandchildren together in extraordinary destinations around the world. Every itinerary is carefully crafted to balance relaxation, adventure, cultural experiences, and luxury accommodations, ensuring every family member enjoys an unforgettable journey.
                            </p>
                            <p className="medi-intro-desc-text">
                                Whether you're planning a European river cruise, a private villa in Tuscany, an African safari, or an Alaska expedition cruise, we handle every detail so your family can focus on what matters most—spending time together.
                            </p>
                        </div>

                        {/* Right Side: Signature Expert Panel */}
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
                                    With over 40 years of industry experience and global luxury travel relationships, Angela Hughes customizes itineraries designed to connect families of all ages.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        We coordinate complex schedules, activity preferences, and flight arrivals so that every member of the family, from toddlers to grandparents, experiences pure vacation magic.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHY MULTIGENERATIONAL TRAVEL IS POPULAR */}
            <section className="pe-different-section">
                <div className="pe-different-container">
                    <div className="pe-different-row-grid-reversed">

                        {/* Left Side: Vertical Cards Stack */}
                        <div className="pe-different-cards-col">
                            {[
                                { 
                                    title: "Reconnect with Extended Family", 
                                    icon: <Users size={24} />, 
                                    desc: "Spend quality time building deeper connections across generations." 
                                },
                                { 
                                    title: "Celebrate Milestone Moments", 
                                    icon: <Award size={24} />, 
                                    desc: "Commemorate birthdays, anniversaries, and family achievements." 
                                },
                                { 
                                    title: "Create Life-Long Traditions", 
                                    icon: <Flame size={24} />, 
                                    desc: "Form recurring annual journeys and storytelling customs." 
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="pe-different-card-horizontal">
                                    <div className="pe-different-icon-wrapper">
                                        {item.icon}
                                    </div>
                                    <div className="pe-different-card-content">
                                        <h4 className="pe-different-card-title">{item.title}</h4>
                                        <p className="pe-different-card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side: Content & Callout */}
                        <div className="pe-different-text-col">
                            <h2 className="medi-section-heading">Why Multigenerational Travel Is More Popular Than Ever</h2>
                            <div className="medi-heading-separator-bar"></div>

                            <p className="pe-different-lead">
                                Today's families are often spread across different cities, states, and countries. Busy careers, school schedules, and everyday responsibilities make quality family time increasingly difficult.
                            </p>
                            <p className="pe-different-desc">
                                Luxury travel provides an opportunity to reconnect, celebrate important milestones, and strengthen relationships through shared experiences. Many families now choose unforgettable vacations instead of traditional gifts, creating memories that last far longer than material possessions.
                            </p>

                            <div className="pe-different-callout">
                                <p className="pe-different-callout-text">
                                    Multigenerational travel builds a bridge between the past, present, and future of your family story.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* DESIGNED FOR EVERY GENERATION */}
            <section className="pe-privacy-section">
                <div className="pe-privacy-container">
                    <div className="pe-privacy-split-card">

                        {/* Text Content */}
                        <div className="pe-privacy-content-side">
                            <span className="pe-privacy-eyebrow">
                                <Gem size={14} /> Custom Planning
                            </span>
                            <h2 className="pe-privacy-heading">Luxury Vacations Designed for Every Generation</h2>
                            <p className="pe-privacy-p1">
                                Planning travel for multiple generations requires thoughtful coordination and expert planning. Every family member has different interests, energy levels, and travel expectations.
                            </p>
                            <p className="pe-privacy-p2">
                                Our customized itineraries ensure every traveler enjoys a vacation designed around their individual interests while sharing meaningful experiences with the entire family.
                            </p>

                            <div className="pe-privacy-grid-list">
                                {[
                                    "Relaxation and adventure balance",
                                    "Family time and personal space",
                                    "Cultural experiences & Fine dining",
                                    "Wellness activities & excursions",
                                    "Outdoor adventures & kids activities",
                                    "Adult-only experiences & spa time"
                                ].map((item, idx) => (
                                    <div key={idx} className="pe-privacy-item">
                                        <CheckCircle size={16} className="pe-privacy-item-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Side */}
                        <div
                            className="pe-privacy-image-side"
                            style={{ backgroundImage: `url(${privacyImg})` }}
                        >
                            <div className="pe-privacy-image-overlay"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* GRANDPARENT TRAVEL EXPERIENCES */}
            <section className="pe-legacy-section">
                <div className="pe-legacy-container">
                    <div className="pe-legacy-intro">
                        <h2 className="medi-section-heading">Grandparent Travel Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="pe-legacy-desc">
                            Grandparents often play an important role in creating family traditions through travel, spending quality time with grandchildren through memorable vacations.
                        </p>
                    </div>

                    <div className="pe-legacy-portfolio-grid">
                        {[
                            { title: "European river cruises", tag: "Cruise", img: legacyRiverImg },
                            { title: "Mediterranean cruises", tag: "Yachting", img: legacyYachtImg },
                            { title: "National park adventures", tag: "Expedition", img: legacyLodgeImg },
                            { title: "Luxury beach resorts", tag: "Resort", img: legacyBeachImg },
                            { title: "Cultural tours", tag: "Heritage", img: legacyCultureImg },
                            { title: "Holiday vacations", tag: "Celebration", img: legacyHolidayImg },
                            { title: "Christmas Market cruises", tag: "Seasonal", img: legacyChristmasImg },
                            { title: "Wildlife safaris", tag: "Wildlife", img: legacySafariImg }
                        ].map((card, idx) => (
                            <div key={idx} className="pe-legacy-portfolio-card">
                                <div className="pe-legacy-portfolio-img-wrapper">
                                    <img src={card.img} alt={card.title} className="pe-legacy-portfolio-img" />
                                    <div className="pe-legacy-portfolio-tag-badge">
                                        <span>{card.tag}</span>
                                    </div>
                                </div>
                                <div className="pe-legacy-portfolio-body">
                                    <h4 className="pe-legacy-portfolio-title">{card.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="pe-legacy-outro">
                        These experiences often become cherished family stories shared for generations.
                    </p>
                </div>
            </section>

            {/* BESPOKE SERVICES SHOWCASE */}
            <section className="pe-services-section">
                <div className="pe-services-container">
                    <div className="pe-services-heading-block">
                        <h2 className="medi-section-heading">Bespoke Travel Solutions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pe-services-arch-grid">
                        {servicesData.map((svc, idx) => (
                            <div 
                                key={idx} 
                                className={`pe-services-arch-card ${idx === 6 ? 'highlight-banner' : ''}`}
                            >
                                <div className="pe-services-arch-img-wrapper">
                                    <img src={svc.img} alt={svc.title} className="pe-services-arch-img" />
                                    <div className="pe-services-arch-badge">
                                        {svc.icon}
                                    </div>
                                </div>
                                <div className="pe-services-arch-body">
                                    <h3 className="pe-services-arch-title">{svc.title}</h3>
                                    <p className="pe-services-arch-text">{svc.text}</p>
                                    <ul className="pe-services-arch-bullets">
                                        {svc.bullets.map((b, i) => (
                                            <li key={i} className="pe-services-arch-bullet">
                                                <CheckCircle size={14} className="pe-services-arch-bullet-icon" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
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
                        {multiFaqs.map((faq, index) => (
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

            {/* CTA SECTION */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Luxury family travel requires experience, relationships, and personalized service. At Trips & Ships Luxury Travel, we create unforgettable vacations that reflect your family's interests, traditions, and travel style.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Our clients trust us for:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Personalized itinerary design",
                                    "Luxury travel expertise",
                                    "Exclusive travel partnerships",
                                    "Multi-generational planning",
                                    "Concierge-level service",
                                    "Seamless logistics",
                                    "Flexible travel arrangements",
                                    "Exceptional customer care"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Whether you're planning your first family reunion vacation or continuing a cherished annual tradition, we'll help create an experience your family will remember for generations.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/Contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default MultigenerationalLuxuryTravel
