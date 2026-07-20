import Navbar from '../../components/Navbar/Navbar'
import './FamilyLegacyTravel.css'
import {
    Shield, Plane, Ship, Compass, Heart, Award, Sparkles, Users, Clock, MapPin, CheckCircle,
    Phone, LayoutList, Star, Anchor, Calendar, Gem, Globe, Utensils, Sun, Briefcase, BookOpen, Flame
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// Import SEO images
import heroFamilyImg from '../../assets/seo_images/luxury-multigenerational-family-dinner-seaside-private-villa-mediterranean-vacation.webp'
import heroSceneryImg from '../../assets/seo_images/luxury-wellness-retreat-infinity-pool-private-spa-villa-ocean-view.webp'
import heroVillaImg from '../../assets/seo_images/luxury-private-villa-with-infinity-pool-mediterranean-coastal-family-vacation.webp'


import privacyImg from '../../assets/seo_images/multigenerational-family-beach-vacation-luxury-tropical-family-travel.webp'

// Legacy Section Images
import legacyHolidayImg from '../../assets/seo_images/luxury-family-relaxing-private-seaside-villa-outdoor-lounge-mediterranean-holiday.webp'
import legacyReunionImg from '../../assets/seo_images/multigenerational-luxury-family-vacation-oceanfront-villa-private-resort.webp'
import legacyRiverImg from '../../assets/seo_images/douro-river-cruise-porto-portugal-luxury-river-vacation.webp'
import legacyYachtImg from '../../assets/seo_images/private-yacht-arrival-luxury-concierge-travel-vip-marina-welcome.webp'
import legacyChristmasImg from '../../assets/seo_images/cologne-christmas-market-gothic-cathedral-germany-holiday-river-cruise.webp'

import legacyCelebrationImg from '../../assets/seo_images/luxury-family-celebration-private-villa-cocktail-gathering-mediterranean-coast.webp'
import legacyNationalParkImg from '../../assets/seo_images/national-park-adventure.png'
import legacySkiImg from '../../assets/seo_images/luxury-ski-vacation.png'

// Services Images
import svcMultiGenImg from '../../assets/seo_images/luxury-family-dining-private-oceanfront-villa-multigenerational-travel-experience.webp'
import svcVillaImg from '../../assets/seo_images/private-luxury-ocean-view-villa-infinity-pool-exclusive-family-vacation.webp'
import svcCruiseImg from '../../assets/seo_images/luxury-rhine-river-cruise-ship-sunset-germany-european-waterways.webp'
import svcSafariImg from '../../assets/seo_images/luxury-african-safari-lodge-elephant-watering-hole-wildlife-view-family-travel.webp'
import svcCultureImg from '../../assets/seo_images/multigenerational-family-walking-through-tuscan-village-luxury-italy-vacation.webp'
import svcMilestoneImg from '../../assets/seo_images/luxury-family-celebration-private-villa-cocktail-gathering-mediterranean-coast.webp'
import svcConciergeImg from '../../assets/seo_images/luxury-travel-advisor-personalized-vacation-planning-private-consultation.webp'
import { Link } from 'react-router'

function FamilyLegacyTravel() {
    const [heroIndex, setHeroIndex] = useState(0)
    const heroImages = [
        heroFamilyImg,
        heroSceneryImg,
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

    const legacyFaqs = [
        {
            question: "What is family legacy travel?",
            answer: "Family legacy travel focuses on creating meaningful shared experiences that strengthen relationships, preserve traditions, and build lasting memories across generations."
        },
        {
            question: "Why is multi-generational travel becoming more popular?",
            answer: "Families increasingly value shared experiences over material gifts, using travel to reconnect and spend quality time together."
        },
        {
            question: "What destinations are best for family legacy travel?",
            answer: "Popular destinations include Italy, France, Greece, Alaska, South Africa, Tanzania, Kenya, the Caribbean, and European river cruise destinations."
        },
        {
            question: "Are luxury cruises good for multi-generational families?",
            answer: "Yes. Luxury cruises offer activities, dining, accommodations, and entertainment suitable for all ages while making travel logistics simple."
        },
        {
            question: "What are the benefits of renting a private villa?",
            answer: "Private villas provide space, privacy, flexible schedules, private chefs, and dedicated staff, making them ideal for extended family gatherings."
        },
        {
            question: "Can family legacy trips include children and grandparents?",
            answer: "Absolutely. These trips are specifically designed to accommodate travelers of all ages and interests."
        },
        {
            question: "Are African safaris suitable for families?",
            answer: "Yes. Many luxury safari lodges welcome families and offer age-appropriate wildlife experiences with experienced guides."
        },
        {
            question: "Can travel help preserve family traditions?",
            answer: "Yes. Annual trips, milestone celebrations, and shared adventures often become treasured traditions that continue for generations."
        },
        {
            question: "What is included in concierge travel planning?",
            answer: "Services may include flights, accommodations, transportation, private tours, dining reservations, special events, and ongoing travel support."
        },
        {
            question: "How far in advance should family legacy trips be planned?",
            answer: "For large multi-generational vacations, planning 9–18 months in advance provides the best selection of accommodations and experiences."
        },
        {
            question: "Can heritage travel be customized?",
            answer: "Yes. Heritage journeys can include genealogy research, ancestral hometown visits, cultural experiences, and private historical tours."
        },
        {
            question: "Why work with a luxury travel advisor?",
            answer: "A luxury travel advisor coordinates every aspect of the trip, manages complex logistics, secures exclusive experiences, and ensures a seamless vacation for every family member."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/family-legacy-travel",
                "name": "Family Legacy Travel",
                "url": "https://www.tripsshipsluxurytravel.com/family-legacy-travel",
                "description": "Discover luxury family legacy travel with multi-generational vacations, private villas, luxury cruises, safaris, and personalized travel planning designed to create lasting family traditions and memories.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/family-legacy-travel#article"
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
                "description": "Luxury travel agency specializing in family vacations, luxury cruises, safaris, private villas, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/family-legacy-travel#article",
                "headline": "Family Legacy Travel",
                "url": "https://www.tripsshipsluxurytravel.com/family-legacy-travel",
                "description": "Expert guide to family legacy travel featuring luxury multi-generational vacations, private villas, cruises, safaris, cultural journeys, and concierge travel planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/family-legacy-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/family-legacy-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Family Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Multi-Generational Luxury Travel Consulting",
                "description": "Expert luxury travel planning for families seeking multi-generational vacations, family reunions, luxury cruises, private villas, safaris, and customized travel experiences."
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
                        "name": "Family Legacy Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/family-legacy-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is family legacy travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Family legacy travel focuses on creating meaningful shared experiences that strengthen family relationships and build traditions across generations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is multi-generational travel important?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Multi-generational travel brings grandparents, parents, and children together to create lasting memories while strengthening family bonds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the best destinations for family legacy travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Italy, France, Greece, Alaska, Africa, the Caribbean, and Europe for luxury cruises and cultural experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are luxury cruises good for family legacy vacations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Luxury cruises offer accommodations, dining, entertainment, and activities suitable for travelers of every generation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose a private villa for a family vacation?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private villas provide spacious accommodations, privacy, personalized service, and flexible schedules for extended families."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can children and grandparents travel together comfortably?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Multi-generational itineraries are carefully designed to include activities and accommodations suitable for every age group."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are African safaris suitable for families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many luxury safari lodges welcome families and provide age-appropriate wildlife experiences led by expert guides."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can travel become a family tradition?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Annual vacations, milestone celebrations, and shared adventures often become meaningful traditions that continue for generations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can heritage travel be customized?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Heritage journeys can include genealogy research, ancestral hometown visits, private tours, and cultural experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What concierge services are available?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Concierge services include flights, accommodations, private transportation, restaurant reservations, private guides, VIP experiences, and activity planning."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should family legacy travel be planned?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Planning 9 to 18 months in advance provides the best availability for luxury accommodations, cruises, and private experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel specializes in personalized multi-generational vacations with luxury accommodations, concierge planning, and customized itineraries designed to create lasting family memories."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Family Legacy Travel | Luxury Multi-Generational Vacations & Meaningful Family Experiences</title>
                <meta name="title" content="Family Legacy Travel | Luxury Multi-Generational Travel Planning" />
                <meta name="description" content="Create lasting memories with luxury family legacy travel. Discover multi-generational vacations, private villas, cruises, safaris, and custom travel experiences that strengthen family bonds and build traditions." />
                <meta name="keywords" content="Family Legacy Travel, Luxury family travel, Multi-generational travel, Family traditions through travel, Luxury family vacations, Private family travel, Family reunion travel, Family heritage travel, Luxury travel advisor for families, Family office travel, Luxury multi-generational vacations" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="family-legacy-page-wrapper">
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
                        Family Legacy Travel
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Create Traditions That Last for Generations
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
                            <span className="medi-premium-mini-badge">BUILDING TRADITIONS</span>
                            <h2 className="medi-premium-heading">Meaningful Shared Experiences Across Generations</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                The greatest inheritance families can leave behind isn't always financial—it's the memories, traditions, and shared experiences that bring generations together. Family legacy travel transforms vacations into meaningful opportunities for connection, storytelling, and creating lifelong traditions that children, grandchildren, and future generations will cherish.
                            </p>
                            <p className="medi-intro-desc-text">
                                At Trips & Ships Luxury Travel, we specialize in designing luxury multi-generational vacations that celebrate family milestones, strengthen relationships, and create unforgettable experiences around the world. Whether you're planning a European cultural journey, an African safari, an Alaska expedition cruise, or a private villa in the Mediterranean, every itinerary is thoughtfully designed around your family's unique interests and goals.
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
                                    Guided by over 40 years of luxury travel planning, Angela Hughes specializes in tailoring bespoke journeys that bind generations together.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        Travel allows us to step away from daily routines and focus entirely on the people who matter most. We build legacies, one journey at a time.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHY FAMILY LEGACY TRAVEL MATTERS */}
            <section className="pe-different-section">
                <div className="pe-different-container">
                    <div className="pe-different-row-grid">
                        
                        {/* Left Side: Content & Callout */}
                        <div className="pe-different-text-col">
                            <h2 className="medi-section-heading">Why Family Legacy Travel Matters</h2>
                            <div className="medi-heading-separator-bar"></div>

                            <p className="pe-different-lead">
                                Today's successful families often live in different cities, states, or even countries. Busy careers, school schedules, and daily responsibilities can make quality family time increasingly rare.
                            </p>
                            <p className="pe-different-desc">
                                Travel provides an opportunity to slow down, reconnect, and create experiences that become part of your family's story. Rather than exchanging gifts, many families are choosing to invest in shared adventures that inspire learning, strengthen relationships, and create traditions that continue year after year.
                            </p>

                            <div className="pe-different-callout">
                                <p className="pe-different-callout-text">
                                    Family legacy travel is about creating moments that become stories told for decades.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Vertical Cards Stack */}
                        <div className="pe-different-cards-col">
                            {[
                                { 
                                    title: "Inspire Learning & Traditions", 
                                    icon: <BookOpen size={24} />, 
                                    desc: "Enrich younger generations with heritage tours and historical context." 
                                },
                                { 
                                    title: "Strengthen Intergenerational Bonds", 
                                    icon: <Users size={24} />, 
                                    desc: "Foster meaningful ties between grandparents, parents, and children." 
                                },
                                { 
                                    title: "Shared Legacy & Storytelling", 
                                    icon: <Flame size={24} />, 
                                    desc: "Carry forward precious values and family milestones through shared adventures." 
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

                    </div>
                </div>
            </section>

            {/* STRENGTHENING FAMILY RELATIONSHIPS */}
            <section className="pe-privacy-section">
                <div className="pe-privacy-container">
                    <div className="pe-privacy-split-card">

                        {/* Text Content */}
                        <div className="pe-privacy-content-side">
                            <span className="pe-privacy-eyebrow">
                                <Heart size={14} /> Stronger Family Bonds
                            </span>
                            <h2 className="pe-privacy-heading">Strengthening Family Relationships</h2>
                            <p className="pe-privacy-p1">
                                Travel naturally brings families together. Sharing meals, exploring new cultures, overcoming adventures, and celebrating milestones create meaningful connections that are difficult to replicate at home.
                            </p>
                            <p className="pe-privacy-p2">
                                Luxury travel offers opportunities for every generation to enjoy experiences together while still allowing personal space and individual interests.
                            </p>
                            <p className="pe-privacy-p2" style={{ color: '#cbd5e1', marginBottom: 0 }}>
                                Whether it's grandparents introducing grandchildren to Europe, parents celebrating an anniversary, or cousins experiencing an African safari together, every journey strengthens family bonds.
                            </p>
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

            {/* CREATING FAMILY TRADITIONS THROUGH TRAVEL */}
            <section className="pe-legacy-section">
                <div className="pe-legacy-container">
                    <div className="pe-legacy-intro">
                        <h2 className="medi-section-heading">Creating Family Traditions <br /> Through Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="pe-legacy-desc">
                            Many families establish annual or milestone trips that become treasured traditions.
                        </p>
                    </div>

                    <div className="pe-legacy-mosaic-grid">
                        {[
                            { title: "Annual Holiday Vacations", img: legacyHolidayImg, num: "01", icon: <Sun size={20} />, desc: "Cherished annual breaks to relax and reflect together as a family." },
                            { title: "Summer Family Reunions", img: legacyReunionImg, num: "02", icon: <Users size={20} />, desc: "Summertime gatherings at exclusive oceanfront villas and private resorts." },
                            { title: "European River Cruises", img: legacyRiverImg, num: "03", icon: <Ship size={20} />, desc: "Scenic river routes linking history, cuisine, and local culture." },
                            { title: "Mediterranean Yacht Charters", img: legacyYachtImg, num: "04", icon: <Anchor size={20} />, desc: "Cruising coastal islands and hidden coves in absolute privacy." },
                            { title: "Christmas Market Cruises", img: legacyChristmasImg, num: "05", icon: <Calendar size={20} />, desc: "Enchanting winter cruises visiting Europe's traditional holiday markets." },
                            { title: "National Park Adventures", img: legacyNationalParkImg, num: "06", icon: <Compass size={20} />, desc: "Active exploration of historic trails and wilderness." },
                            { title: "Luxury Ski Vacations", img: legacySkiImg, num: "07", icon: <Gem size={20} />, desc: "Private chalet retreats near premier ski fields and winter resorts." },
                            { title: "Birthday Celebrations Abroad", img: legacyCelebrationImg, num: "08", icon: <Award size={20} />, desc: "Unforgettable birthday memories spent exploring luxury destinations together." }
                        ].map((card, idx) => (
                            <div key={idx} className={`pe-legacy-mosaic-card card-span-${idx + 1}`}>
                                <div
                                    className="pe-legacy-mosaic-bg"
                                    style={{ backgroundImage: `url(${card.img})` }}
                                />
                                <div className="pe-legacy-mosaic-overlay"></div>
                                <div className="pe-legacy-mosaic-badge">
                                    <span className="pe-legacy-mosaic-badge-num">{card.num}</span>
                                    <div className="pe-legacy-mosaic-badge-icon">{card.icon}</div>
                                </div>
                                <div className="pe-legacy-mosaic-content">
                                    <h4 className="pe-legacy-mosaic-title">{card.title}</h4>
                                    <p className="pe-legacy-mosaic-desc">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="pe-legacy-outro">
                        Over time, these experiences become part of the family's identity and create anticipation for future generations.
                    </p>
                </div>
            </section>

            {/* BESPOKE SERVICES SHOWCASE */}
            <section className="pe-services-section">
                <div className="pe-services-container">
                    <div className="pe-services-heading-block">
                        <h2 className="medi-section-heading">Bespoke Multi-Generational Options</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="fl-services-grid-arched">

                        {/* Multi-Generational Luxury Travel */}
                        <div className="fl-services-card-arched">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcMultiGenImg})` }}>
                                <div className="fl-services-card-badge-arched"><Users size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Multi-Generational Luxury Travel</h3>
                                <p className="fl-services-text-arched">
                                    Planning travel for multiple generations requires thoughtful coordination. Every traveler has different interests, activity levels, and expectations. From toddlers to grandparents, every family member enjoys an experience tailored to their needs.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Adventure and relaxation balance",
                                        "Cultural experiences & Fine dining",
                                        "Family activities & Excursions",
                                        "Wellness experiences & free time",
                                        "Luxury accommodations for all"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Luxury Villas for Family Gatherings */}
                        <div className="fl-services-card-arched">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcVillaImg})` }}>
                                <div className="fl-services-card-badge-arched"><Gem size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Luxury Villas</h3>
                                <p className="fl-services-text-arched">
                                    Private villas provide one of the best settings for family legacy travel, allowing families to spend meaningful time together while enjoying the comforts of a private home. Destinations include Italy, France, Greece, Spain, Portugal, and Caribbean Islands.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Spacious multi-bedroom setups",
                                        "Private pools & dining spaces",
                                        "Personal chefs & dedicated staff",
                                        "Flexible, private schedules"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Luxury Cruises for Families */}
                        <div className="fl-services-card-arched">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcCruiseImg})` }}>
                                <div className="fl-services-card-badge-arched"><Ship size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Luxury Cruises</h3>
                                <p className="fl-services-text-arched">
                                    Luxury cruises make multi-generational travel remarkably easy, eliminating the need to unpack between destinations. Recommended cruise partners include Explora Journeys, Regent Seven Seas Cruises, Crystal Cruises, Silversea Cruises, Viking Cruises, and Seabourn.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Spacious suites & multiple dining options",
                                        "Entertainment & wellness facilities",
                                        "Kids, teens & adult-only spaces",
                                        "Enriching age-appropriate excursions"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Family Safaris */}
                        <div className="fl-services-card-arched">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcSafariImg})` }}>
                                <div className="fl-services-card-badge-arched"><Compass size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Family Safaris</h3>
                                <p className="fl-services-text-arched">
                                    African safaris are among the most memorable family legacy experiences. Destinations include Kenya, Tanzania, Botswana, South Africa, Namibia, and Rwanda. Safaris create unforgettable moments that families remember for generations.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Private game drives & nature walks",
                                        "Luxury lodges & custom conservation",
                                        "Guided photography & stargazing",
                                        "Family-oriented rangers & local culture"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Heritage & Cultural Journeys */}
                        <div className="fl-services-card-arched">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcCultureImg})` }}>
                                <div className="fl-services-card-badge-arched"><Globe size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Heritage & Cultural Journeys</h3>
                                <p className="fl-services-text-arched">
                                    Many families choose travel to reconnect with their ancestry and cultural heritage. These experiences help younger generations better understand their family's history while creating new memories together.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Visiting ancestral towns & landmarks",
                                        "Exploring heritage & local historians",
                                        "Genealogy research & private tours",
                                        "Local cooking & family storytelling"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Celebrating Life's Biggest Milestones */}
                        <div className="fl-services-card-arched">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcMilestoneImg})` }}>
                                <div className="fl-services-card-badge-arched"><Award size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Celebrating Milestones</h3>
                                <p className="fl-services-text-arched">
                                    Family legacy travel is ideal for celebrating life's most meaningful moments. Each celebration becomes another chapter in your family's story, customized to reflect your traditions.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Milestone birthdays & anniversaries",
                                        "Graduations & retirement celebrations",
                                        "Family reunions & holiday gatherings",
                                        "Business achievements & life milestones"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Concierge Planning for Effortless Travel */}
                        <div className="fl-services-card-arched highlight-banner-card">
                            <div className="fl-services-image-arched" style={{ backgroundImage: `url(${svcConciergeImg})` }}>
                                <div className="fl-services-card-badge-arched"><Sparkles size={16} /></div>
                            </div>
                            <div className="fl-services-body-arched">
                                <h3 className="fl-services-title-arched">Concierge Planning</h3>
                                <p className="fl-services-text-arched">
                                    Coordinating travel for multiple generations can quickly become overwhelming. We manage every detail so your family can focus on spending time together.
                                </p>
                                <ul className="fl-services-bullets-arched">
                                    {[
                                        "Flight & ground transport coordination",
                                        "Luxury accommodations & VIP access",
                                        "Private guides & dining reservations",
                                        "Last-minute itinerary adjustments"
                                    ].map((b, i) => (
                                        <li key={i} className="fl-services-bullet-arched">
                                            <CheckCircle size={14} className="fl-services-bullet-icon-arched" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
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
                        {legacyFaqs.map((faq, index) => (
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
                            Luxury family travel requires expertise, thoughtful planning, and personalized service. At Trips & Ships Luxury Travel, we create customized journeys that reflect your family's values, traditions, and travel style.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Our clients appreciate:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Personalized itinerary design",
                                    "Multi-generational travel expertise",
                                    "Luxury accommodations",
                                    "Exclusive travel partnerships",
                                    "Concierge-level service",
                                    "Seamless logistics",
                                    "Private experiences",
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
                            Every trip is designed to create unforgettable memories while strengthening family connections for generations to come.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to="/contact" className="medi-primary-cta-button">
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

export default FamilyLegacyTravel
