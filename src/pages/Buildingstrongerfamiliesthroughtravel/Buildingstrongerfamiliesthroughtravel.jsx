import Navbar from '../../components/Navbar/Navbar'
import './Buildingstrongerfamiliesthroughtravel.css'

// import hero1 from '../../assets/BuildingStrongerFamiliesThroughTravel/hero1.jpg'
// import hero2 from '../../assets/BuildingStrongerFamiliesThroughTravel/hero2.jpg'
// import hero3 from '../../assets/BuildingStrongerFamiliesThroughTravel/hero3.jpg'

// import introPrimaryImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Multigenerational family on luxury vacation.webp'
// import introSecondaryImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Family sharing travel memories together.webp'

// import strengthenImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Family quality time on vacation.webp'

// import memorySafariImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Grandchildren spotting elephant on safari.webp'
// import memoryRiverCruiseImg from '../../assets/BuildingStrongerFamiliesThroughTravel/European river cruise anniversary celebration.webp'
// import memoryMediterraneanImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Mediterranean sunset three generations.webp'
// import memoryCookingClassImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Family cooking class in Italy.webp'
// import memoryAntarcticaImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Antarctica expedition family explorers.webp'

// import intentionalImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Intentional family travel planning.webp'

// import legacyHolidayImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Annual holiday family vacation.webp'
// import legacyCruiseImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Family luxury cruise tradition.webp'
// import legacySafariImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Safari adventure family tradition.webp'
// import legacyCulturalImg from '../../assets/BuildingStrongerFamiliesThroughTravel/International cultural journey family.webp'
// import legacyGraduationImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Graduation trip celebration.webp'
// import legacyMilestoneImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Milestone celebration family travel.webp'
// import legacyGrandparentImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Grandparent grandchild adventure.webp'
// import legacyReunionImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Multi-generational family reunion.webp'

// import generationGrandparentsImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Grandparents sharing wisdom travel.webp'
// import generationParentsImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Parents reconnecting family vacation.webp'
// import generationChildrenImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Children curiosity cultural travel.webp'

// import learningImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Family learning through travel experience.webp'

// import celebrateBirthdayImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Milestone birthday celebration travel.webp'
// import celebrateAnniversaryImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Anniversary celebration luxury travel.webp'
// import celebrateGraduationImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Graduation celebration family trip.webp'
// import celebrateReunionImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Family reunion celebration.webp'

// import chooseImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Trips and Ships family travel planning.webp'
// import angelaHughesImg from '../../assets/BuildingStrongerFamiliesThroughTravel/Angela Hughes CEO Trips and Ships.webp'

import {
    Heart, Users, Sparkles, Compass, GraduationCap, Award,
    Calendar, Globe, CheckCircle, ArrowRight, Plus, Minus,
    Phone, LayoutList, Crown, Star, Gem, Baby, Gift,
    BookOpen, Feather, Mountain, Utensils
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function BuildingStrongerFamiliesThroughTravel() {
    const [bsfCurrentHero, setBsfCurrentHero] = useState(0)
    const bsfHeroImages = []

    useEffect(() => {
        const bsfTimer = setInterval(() => {
            setBsfCurrentHero((prev) => (prev + 1) % bsfHeroImages.length)
        }, 5000)
        return () => clearInterval(bsfTimer)
    }, [bsfHeroImages.length])

    const [bsfActiveFaq, setBsfActiveFaq] = useState(null)

    const bsfToggleFaq = (index) => {
        setBsfActiveFaq(bsfActiveFaq === index ? null : index)
    }

    const bsfRelationshipList = [
        'Spend uninterrupted time together',
        'Strengthen communication',
        'Create shared experiences',
        'Build trust and understanding',
        'Celebrate achievements',
        'Learn from one another',
        'Discover new cultures together',
        'Develop lifelong traditions'
    ]

    const bsfMemoryGallery = [
        // { img: memorySafariImg, caption: 'The safari where grandchildren spotted their first elephant.', wide: true },
        // { img: memoryRiverCruiseImg, caption: 'The European river cruise celebrating an anniversary.', wide: false },
        // { img: memoryMediterraneanImg, caption: 'The Mediterranean sunset shared by three generations.', wide: false },
        // { img: memoryCookingClassImg, caption: 'The family cooking class in Italy.', wide: false },
        // { img: memoryAntarcticaImg, caption: 'The expedition to Antarctica that inspired future explorers.', wide: true }
    ]

    const bsfIntentionalGoals = [
        'Celebrate a milestone birthday',
        'Honor a retirement',
        'Reconnect after busy seasons',
        'Introduce children to new cultures',
        'Strengthen relationships between generations',
        'Inspire curiosity and lifelong learning',
        'Create annual family traditions'
    ]

    const bsfLegacyTraditions = [
        // { img: legacyHolidayImg, name: 'Annual holiday vacations' },
        // { img: legacyCruiseImg, name: 'Family cruises' },
        // { img: legacySafariImg, name: 'Safari adventures' },
        // { img: legacyCulturalImg, name: 'International cultural journeys' },
        // { img: legacyGraduationImg, name: 'Graduation trips' },
        // { img: legacyMilestoneImg, name: 'Milestone celebrations' },
        // { img: legacyGrandparentImg, name: 'Grandparent-grandchild adventures' },
        // { img: legacyReunionImg, name: 'Multi-generational reunions' }
    ]

    const bsfGenerationCards = [
        {
            // img: generationGrandparentsImg,
            icon: Crown,
            title: 'Grandparents',
            text: 'Grandparents can share wisdom and life experiences.'
        },
        {
            // img: generationParentsImg,
            icon: Heart,
            title: 'Parents',
            text: 'Parents can step away from professional responsibilities and focus on meaningful family time.'
        },
        {
            // img: generationChildrenImg,
            icon: Baby,
            title: 'Children',
            text: 'Children develop confidence, curiosity, and cultural awareness.'
        }
    ]

    const bsfLearningTags = [
        { icon: Globe, label: 'Cultural appreciation' },
        { icon: Compass, label: 'Global awareness' },
        { icon: BookOpen, label: 'Historical understanding' },
        { icon: Feather, label: 'Environmental stewardship' },
        { icon: Sparkles, label: 'Curiosity' },
        { icon: Heart, label: 'Compassion' },
        { icon: Star, label: 'Confidence' },
        { icon: Mountain, label: 'Adaptability' }
    ]

    const bsfCelebrateItems = [
        // { img: celebrateBirthdayImg, label: 'Milestone birthdays' },
        // { img: celebrateAnniversaryImg, label: 'Anniversaries' },
        // { img: celebrateGraduationImg, label: 'Graduations' },
        // { img: celebrateReunionImg, label: 'Family reunions' }
    ]

    const bsfCelebrateChips = ['Retirements', 'Business successes', 'Holiday traditions', 'Special achievements']

    const bsfChooseFeatures = [
        { icon: Gem, label: 'Personalized family itineraries' },
        { icon: Award, label: 'Luxury travel expertise' },
        { icon: Users, label: 'Multigenerational planning' },
        { icon: Crown, label: 'Concierge-level service' },
        { icon: Sparkles, label: 'Exclusive travel experiences' },
        { icon: Globe, label: 'Global destination knowledge' },
        { icon: Compass, label: 'Private travel options' },
        { icon: Calendar, label: 'Ongoing travel support' }
    ]

    const bsfFaqs = [
        { question: 'Why is travel important for family relationships?', answer: 'Travel creates uninterrupted quality time, shared experiences, and meaningful memories that strengthen family bonds.' },
        { question: 'What is intentional family travel?', answer: "Intentional family travel focuses on creating experiences that reflect your family's values, goals, and relationships rather than simply visiting destinations." },
        { question: 'How does travel help children?', answer: 'Travel encourages curiosity, cultural awareness, confidence, adaptability, and lifelong learning through real-world experiences.' },
        { question: 'Is luxury travel suitable for multigenerational families?', answer: 'Yes. Luxury travel offers flexibility, comfort, and personalized experiences that appeal to grandparents, parents, and children alike.' },
        { question: 'What types of trips work best for family bonding?', answer: 'Luxury cruises, safaris, private villa vacations, cultural tours, wellness retreats, and adventure travel all provide excellent opportunities for family connection.' },
        { question: 'Can travel become a family tradition?', answer: 'Absolutely. Many families create annual vacations, milestone trips, or holiday journeys that become cherished traditions.' },
        { question: 'Why are experiences more valuable than possessions?', answer: 'Shared experiences create lasting memories, strengthen relationships, and often bring greater long-term happiness than material purchases.' },
        { question: 'Can travel help busy families reconnect?', answer: 'Yes. Traveling together removes many everyday distractions and allows families to focus on spending meaningful time together.' },
        { question: 'How do you plan vacations for multiple generations?', answer: 'We design customized itineraries that balance activities, relaxation, accessibility, and interests for every family member.' },
        { question: 'Do you help plan milestone celebrations?', answer: 'Yes. We specialize in birthdays, anniversaries, graduations, reunions, retirements, and other meaningful family celebrations.' },
        { question: 'Can family travel include educational experiences?', answer: 'Absolutely. Cultural immersion, wildlife encounters, historical sites, culinary experiences, and local interactions provide valuable learning opportunities.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel creates personalized luxury journeys that strengthen relationships, build family traditions, and create unforgettable memories across generations.' }
    ]

    const bsfSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel",
                "name": "Building Stronger Families Through Travel",
                "url": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel",
                "description": "Discover how intentional luxury travel strengthens family relationships, builds lasting traditions, and creates meaningful memories across generations.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel#article"
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
                "description": "Luxury travel agency specializing in multigenerational family travel, luxury cruises, safaris, private villas, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel#article",
                "headline": "Building Stronger Families Through Travel",
                "url": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel",
                "description": "Expert guide to strengthening family relationships through intentional luxury travel, shared experiences, multigenerational vacations, and meaningful family traditions.",
                "image": "https://www.tripsshipsluxurytravel.com/images/building-stronger-families-through-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Family Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Family Travel Consulting",
                "description": "Expert planning services for intentional family travel, multigenerational vacations, luxury cruises, safaris, family reunions, and meaningful travel experiences."
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
                        "name": "Building Stronger Families Through Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/building-stronger-families-through-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why is travel important for family relationships?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Travel creates quality time, shared experiences, and lasting memories that strengthen family relationships."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is intentional family travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Intentional family travel focuses on creating meaningful experiences that reflect your family's values and strengthen relationships."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does travel help children?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Travel helps children develop curiosity, confidence, cultural awareness, adaptability, and lifelong learning."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is luxury travel suitable for multigenerational families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Luxury travel offers personalized experiences, comfort, and flexibility for every generation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What trips are best for family bonding?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury cruises, safaris, private villas, cultural tours, wellness retreats, and adventure vacations all encourage meaningful family connection."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can travel become a family tradition?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many families create annual vacations and milestone trips that become cherished traditions across generations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are experiences more valuable than possessions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Shared experiences create lifelong memories and stronger relationships that often provide greater long-term happiness than material possessions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can travel help busy families reconnect?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Travel removes everyday distractions and allows families to spend meaningful time together."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How are multigenerational vacations planned?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Customized itineraries balance relaxation, activities, accessibility, and interests for grandparents, parents, and children."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you help plan milestone celebrations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We specialize in anniversaries, birthdays, graduations, reunions, retirements, and family celebrations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can travel include educational experiences?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Cultural immersion, wildlife encounters, historical sites, and local experiences provide meaningful educational opportunities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel creates personalized luxury journeys that strengthen relationships, build traditions, and create unforgettable family memories."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Building Stronger Families Through Travel | Intentional Luxury Family Experiences</title>
                <meta
                    name="title"
                    content="Building Stronger Families Through Travel | Luxury Family Bonding Vacations"
                />
                <meta
                    name="description"
                    content="Discover how intentional luxury travel strengthens family relationships, creates lasting memories, and builds meaningful traditions across generations. Learn why travel is one of the greatest investments you can make in your family."
                />
                <meta
                    name="keywords"
                    content="Building Stronger Families Through Travel, Strengthening family relationships through travel, Family bonding vacations, Luxury family experiences, Intentional family travel, Family connection through travel, Multigenerational travel, Family legacy travel, Meaningful family vacations, Luxury family travel, Shared family experiences"
                />
                <script type="application/ld+json">
                    {JSON.stringify(bsfSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="bsf-hero-section">
                {bsfHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`bsf-hero-background ${bsfCurrentHero === idx ? 'bsf-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="bsf-hero-overlay-layer"></div>
                <div className="bsf-hero-content-wrapper">
                    <div className="bsf-hero-eyebrow-tag">
                        <Heart size={16} />
                        <span>The Greatest Investment Isn't a Destination—It's Your Family</span>
                    </div>
                    <h1 className="bsf-hero-main-title">
                        Building Stronger Families Through Travel
                    </h1>
                    <p className="bsf-hero-subtitle-text">
                        Intentional luxury journeys that reconnect, celebrate, and create traditions built to last for generations.
                    </p>
                </div>
                <div className="bsf-hero-dots-row">
                    {bsfHeroImages.map((_, idx) => (
                        <div key={idx} className={`bsf-hero-dot ${bsfCurrentHero === idx ? 'bsf-dot-active' : ''}`}></div>
                    ))}
                </div>
            </section>

            {/* EDITORIAL INTRO SECTION */}
            <section className="bsf-intro-section">
                <div className="bsf-intro-container">
                    <div className="bsf-intro-split-grid">
                        <div className="bsf-intro-editorial-text">
                            <span className="bsf-intro-mini-badge">A LEGACY WORTH LIVING</span>
                            <h2 className="bsf-intro-headline">The Greatest Investment Isn't a Destination—It's Your Family</h2>
                            <p className="bsf-intro-lead-paragraph">
                                Luxury travel is often associated with beautiful destinations, five-star resorts, and unforgettable experiences. While those elements certainly matter, the true value of travel goes far beyond where you stay or what you see.
                            </p>
                            <p className="bsf-intro-body-paragraph">
                                At Trips & Ships Luxury Travel, we believe travel is one of the most meaningful investments you can make in your family. Shared journeys create opportunities to reconnect, strengthen relationships, celebrate milestones, and build traditions that can last for generations.
                            </p>
                            <p className="bsf-intro-pullquote">
                                "The memories created together often become far more valuable than any material possession."
                            </p>
                        </div>
                        <div className="bsf-intro-image-stack">
                            {/* <img src={introPrimaryImg} alt="Multigenerational family on luxury vacation" className="bsf-intro-img-primary" />
                            <img src={introSecondaryImg} alt="Family sharing travel memories together" className="bsf-intro-img-secondary" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TRAVEL STRENGTHENS FAMILY RELATIONSHIPS */}
            <section className="bsf-strengthen-section">
                <div className="bsf-strengthen-container">
                    <div className="bsf-strengthen-image-frame">
                        {/* <img src={strengthenImg} alt="Family quality time on vacation" /> */}
                        <div className="bsf-strengthen-caption-tag">Slowing down, together</div>
                    </div>
                    <div className="bsf-strengthen-content-col">
                        <span className="bsf-strengthen-eyebrow">CONNECTION OVER DISTRACTION</span>
                        <h2 className="bsf-section-heading">Why Travel Strengthens Family Relationships</h2>
                        <div className="bsf-heading-separator-bar"></div>
                        <p className="bsf-strengthen-intro-text">
                            Modern families face constant distractions. Busy work schedules, school commitments, technology, and everyday responsibilities can make quality time increasingly difficult.
                        </p>
                        <p className="bsf-strengthen-intro-text">
                            Travel creates space to slow down. Without the pressures of daily life, families have the opportunity to:
                        </p>
                        <ul className="bsf-strengthen-checklist">
                            {bsfRelationshipList.map((item, idx) => (
                                <li key={idx} className="bsf-strengthen-checklist-item">
                                    <CheckCircle size={18} className="bsf-strengthen-checklist-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="bsf-strengthen-footnote">
                            These moments often become the stories families tell for decades.
                        </p>
                    </div>
                </div>
            </section>

            {/* EXPERIENCES CREATE LASTING MEMORIES - MOSAIC GALLERY */}
            <section className="bsf-memories-section">
                <div className="bsf-memories-header-block">
                    <h2 className="bsf-section-heading">Experiences Create Lasting Memories</h2>
                    <div className="bsf-heading-separator-bar bsf-bar-centered"></div>
                    <p className="bsf-memories-lead-paragraph">
                        Research consistently shows that shared experiences bring greater long-term happiness than material possessions. A luxury vacation becomes more than a trip. It becomes:
                    </p>
                </div>
                <div className="bsf-memories-mosaic-grid">
                    {bsfMemoryGallery.map((memory, idx) => (
                        <div key={idx} className={`bsf-memory-tile ${memory.wide ? 'bsf-tile-wide' : ''}`}>
                            {/* <img src={memory.img} alt={memory.caption} /> */}
                            <div className="bsf-memory-tile-overlay">
                                <p className="bsf-memory-tile-caption">{memory.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bsf-memories-header-block" style={{ marginTop: '48px', marginBottom: 0 }}>
                    <p className="bsf-memories-lead-paragraph">
                        These memories continue to strengthen family bonds long after everyone returns home.
                    </p>
                </div>
            </section>

            {/* INTENTIONAL FAMILY TRAVEL */}
            <section className="bsf-intentional-section">
                <div className="bsf-intentional-glow"></div>
                <div className="bsf-intentional-container">
                    <div className="bsf-intentional-image-col">
                        {/* <img src={intentionalImg} alt="Intentional family travel planning" /> */}
                    </div>
                    <div className="bsf-intentional-text-col">
                        <span className="bsf-hero-eyebrow-tag" style={{ marginBottom: '16px' }}>
                            <Compass size={16} />
                            <span>DESIGNED AROUND WHAT MATTERS</span>
                        </span>
                        <h2 className="bsf-section-heading">Intentional Family Travel</h2>
                        <div className="bsf-heading-separator-bar"></div>
                        <p className="bsf-intentional-lead">
                            The most meaningful vacations don't happen by accident. Intentional travel means designing experiences around your family's values and goals. You may want to:
                        </p>
                        <div className="bsf-intentional-goals-list">
                            {bsfIntentionalGoals.map((goal, idx) => (
                                <div key={idx} className="bsf-intentional-goal-row">
                                    <span className="bsf-intentional-goal-number">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="bsf-intentional-goal-text">{goal}</span>
                                </div>
                            ))}
                        </div>
                        <p className="bsf-intentional-closing-line">
                            Every itinerary should reflect what matters most to your family.
                        </p>
                    </div>
                </div>
            </section>

            {/* BUILDING A FAMILY LEGACY THROUGH TRAVEL */}
            <section className="bsf-legacy-section">
                <div className="bsf-legacy-header-block">
                    <h2 className="bsf-section-heading">Building a Family Legacy Through Travel</h2>
                    <div className="bsf-heading-separator-bar bsf-bar-centered"></div>
                    <p className="bsf-legacy-lead-paragraph">
                        Many affluent families focus on leaving financial legacies. Travel creates something equally valuable—a legacy of shared experiences.
                    </p>
                    <p className="bsf-legacy-lead-paragraph">
                        Over time, families develop traditions such as:
                    </p>
                </div>
                <div className="bsf-legacy-traditions-grid">
                    {bsfLegacyTraditions.map((tradition, idx) => (
                        <div key={idx} className="bsf-legacy-tradition-card">
                            {/* <img src={tradition.img} alt={tradition.name} /> */}
                            <div className="bsf-legacy-tradition-overlay">
                                <span className="bsf-legacy-tradition-name">{tradition.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bsf-legacy-header-block" style={{ marginTop: '48px', marginBottom: 0 }}>
                    <p className="bsf-legacy-lead-paragraph">
                        These traditions become part of a family's identity and strengthen relationships across generations.
                    </p>
                </div>
            </section>

            {/* TRAVEL ACROSS EVERY GENERATION */}
            <section className="bsf-generations-section">
                <div className="bsf-generations-header-block">
                    <h2 className="bsf-section-heading">Travel Across Every Generation</h2>
                    <div className="bsf-heading-separator-bar bsf-bar-centered"></div>
                    <p className="bsf-legacy-lead-paragraph">
                        Luxury travel offers unique opportunities for every age group.
                    </p>
                </div>
                <div className="bsf-generations-grid">
                    {bsfGenerationCards.map((card, idx) => {
                        const IconComp = card.icon
                        return (
                            <div key={idx} className="bsf-generation-card">
                                <div className="bsf-generation-card-image">
                                    {/* <img src={card.img} alt={card.title} /> */}
                                </div>
                                <div className="bsf-generation-card-body">
                                    <div className="bsf-generation-card-icon-badge">
                                        <IconComp size={20} />
                                    </div>
                                    <h3 className="bsf-generation-card-title">{card.title}</h3>
                                    <p className="bsf-generation-card-text">{card.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className="bsf-generations-footer-line">
                    Together, families create memories that connect generations in ways everyday life rarely allows.
                </p>
            </section>

            {/* LEARNING THROUGH TRAVEL */}
            <section className="bsf-learning-section">
                <div className="bsf-learning-container">
                    <div className="bsf-learning-image-col">
                        {/* <img src={learningImg} alt="Family learning through travel experience" /> */}
                    </div>
                    <div>
                        <h2 className="bsf-section-heading">Learning Through Travel</h2>
                        <div className="bsf-heading-separator-bar"></div>
                        <p className="bsf-learning-lead-text">
                            Every destination becomes a classroom. Children and adults alike gain valuable perspectives through immersive experiences. Travel encourages:
                        </p>
                        <div className="bsf-learning-tags-grid">
                            {bsfLearningTags.map((tag, idx) => {
                                const IconComp = tag.icon
                                return (
                                    <div key={idx} className="bsf-learning-tag-chip">
                                        <IconComp size={16} />
                                        <span>{tag.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="bsf-learning-closing-text">
                            Luxury travel combines comfort with opportunities for lifelong learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* CELEBRATING LIFE TOGETHER */}
            <section className="bsf-celebrate-section">
                <div className="bsf-celebrate-header-block">
                    <h2 className="bsf-section-heading">Celebrating Life Together</h2>
                    <div className="bsf-heading-separator-bar bsf-bar-centered"></div>
                    <p className="bsf-celebrate-lead-paragraph">
                        Some of life's most important moments deserve extraordinary settings. We help families celebrate:
                    </p>
                </div>
                <div className="bsf-celebrate-collage-grid">
                    {bsfCelebrateItems.map((item, idx) => (
                        <div key={idx} className="bsf-celebrate-collage-tile">
                            {/* <img src={item.img} alt={item.label} /> */}
                        </div>
                    ))}
                </div>
                <div className="bsf-celebrate-chip-row">
                    {bsfCelebrateChips.map((chip, idx) => (
                        <span key={idx} className="bsf-celebrate-chip">{chip}</span>
                    ))}
                </div>
                <p className="bsf-generations-footer-line" style={{ color: '#cbd5e1', marginTop: '32px' }}>
                    Every celebration becomes an opportunity to strengthen family connections.
                </p>
            </section>

            {/* WHY CHOOSE US + ANGELA HUGHES AUTHORITY */}
            <section className="bsf-choose-section">
                <div className="bsf-choose-container">
                    <div className="bsf-choose-top-grid">
                        <div>
                            <h2 className="bsf-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                            <div className="bsf-heading-separator-bar"></div>
                            <p className="bsf-choose-lead-paragraph">
                                Planning meaningful family travel requires more than selecting a destination. Our advisors help families create experiences that reflect their values, priorities, and vision for the future. Clients choose us because we provide:
                            </p>
                            <div className="bsf-choose-features-grid">
                                {bsfChooseFeatures.map((feature, idx) => {
                                    const IconComp = feature.icon
                                    return (
                                        <div key={idx} className="bsf-choose-feature-item">
                                            <IconComp size={18} />
                                            <span>{feature.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="bsf-choose-image-col">
                            {/* <img src={chooseImg} alt="Trips and Ships family travel planning" /> */}
                        </div>
                    </div>

                    <p className="bsf-choose-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
                        Whether you're beginning a new family tradition or celebrating generations of shared memories, we're here to help you create journeys that truly matter.
                    </p>

                    <div className="bsf-authority-card">
                        <div className="bsf-authority-photo-wrap">
                            {/* <img src={angelaHughesImg} alt="Angela Hughes, CEO of Trips & Ships Luxury Travel" /> */}
                            <div className="bsf-authority-badge-ring">
                                <Award size={20} />
                            </div>
                        </div>
                        <div>
                            <h3 className="bsf-authority-name">Angela Hughes</h3>
                            <span className="bsf-authority-title">CEO, Trips & Ships Luxury Travel</span>
                            <div className="bsf-authority-credentials-row">
                                <span className="bsf-authority-credential-chip">40+ Years Experience</span>
                                <span className="bsf-authority-credential-chip">121+ Countries Visited</span>
                                <span className="bsf-authority-credential-chip">Founder, Luxury Travel University</span>
                                <span className="bsf-authority-credential-chip">2024 Luxury Travel Influencer of the Year</span>
                                <span className="bsf-authority-credential-chip">Most Influential Women in Travel 2026 — TravelPulse</span>
                            </div>
                            <p className="bsf-authority-bio-text">
                                With more than four decades guiding families toward journeys that matter, Angela Hughes and the Trips & Ships Luxury Travel team specialize in multigenerational planning, concierge-level service, and itineraries designed around what your family values most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="bsf-faq-main-section">
                <div className="bsf-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="bsf-section-heading">Frequently Asked Questions</h2>
                        <div className="bsf-heading-separator-bar bsf-bar-centered"></div>
                    </div>

                    <div className="bsf-faq-list-wrapper">
                        {bsfFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bsf-faq-individual-item"
                                onClick={() => bsfToggleFaq(index)}
                            >
                                <div className="bsf-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="bsf-faq-toggle-icon">
                                        {bsfActiveFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </div>
                                {bsfActiveFaq === index && (
                                    <p className="bsf-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bsf-cta-main-section">
                <div className="bsf-cta-bg-pattern-layer"></div>
                <div className="bsf-cta-content-relative">
                    <div className="bsf-cta-inner-wrapper">
                        <h2 className="bsf-cta-heading-white">Ready to Build Your Family's Next Chapter?</h2>
                        <div className="bsf-cta-separator-white"></div>

                        <p className="bsf-cta-paragraph-white">
                            Planning meaningful family travel requires more than selecting a destination. Our advisors help families create experiences that reflect their values, priorities, and vision for the future.
                        </p>

                        <div className="bsf-cta-considerations-box">
                            <span className="bsf-cta-considerations-title">Clients choose us because we provide:</span>
                            <ul className="bsf-cta-considerations-list">
                                {bsfChooseFeatures.map((feature, idx) => (
                                    <li key={idx} className="bsf-cta-considerations-item">
                                        <CheckCircle size={16} className="bsf-cta-considerations-icon" />
                                        <span>{feature.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="bsf-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff' }}>
                            Whether you're beginning a new family tradition or celebrating generations of shared memories, we're here to help you create journeys that truly matter.
                        </p>

                        <div className="bsf-cta-button-group">
                            <button className="bsf-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="bsf-secondary-outline-button">
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

export default BuildingStrongerFamiliesThroughTravel