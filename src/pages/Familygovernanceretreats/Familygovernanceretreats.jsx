import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import './Familygovernanceretreats.css'

import hero1 from '../../assets/FamilyGovernanceRetreats/tuscany-luxury-estate-family-governance-retreat-italy.jpg'
import hero2 from '../../assets/FamilyGovernanceRetreats/swiss-alps-chalet-family-leadership-retreat.jpg'
import hero3 from '../../assets/FamilyGovernanceRetreats/caribbean-oceanfront-villa-multigenerational-family-retreat.jpg'

import destTuscany from '../../assets/FamilyGovernanceRetreats/tuscany-vineyard-villa-family-legacy-planning.jpg'
import destProvence from '../../assets/FamilyGovernanceRetreats/provence-lavender-estate-family-business-retreat-france.jpg'
import destScottish from '../../assets/FamilyGovernanceRetreats/scottish-highlands-castle-succession-planning-retreat.jpg'
import destNapa from '../../assets/FamilyGovernanceRetreats/napa-valley-luxury-wine-estate-family-retreat-california.jpg'
import destJackson from '../../assets/FamilyGovernanceRetreats/luxury-mountain-ski-retreat-private-lodge-winter-vacation.png'
import destCostaRica from '../../assets/FamilyGovernanceRetreats/costa-rica-eco-luxury-resort-family-retreat.jpg'
import destCaribbean from '../../assets/FamilyGovernanceRetreats/caribbean-oceanfront-villa-multigenerational-family-retreat.jpg'
import destSwissAlps from '../../assets/FamilyGovernanceRetreats/luxury-alpine-chalet-scenic-train-journey-swiss-mountains.png'

import familyBusinessImg from '../../assets/FamilyGovernanceRetreats/family-business-governance-meeting-retreat.jpg'
import successionPlanningImg from '../../assets/FamilyGovernanceRetreats/multigenerational-family-succession-planning-retreat.jpg'
import privateVillaImg from '../../assets/FamilyGovernanceRetreats/exclusive-private-villa-family-office-retreat.jpg'

import expWineTasting from '../../assets/FamilyGovernanceRetreats/family-wine-tasting-experience-tuscany.jpg'
import expCookingClass from '../../assets/FamilyGovernanceRetreats/family-gourmet-cooking-class-retreat-experience.jpg'
import expYachtCharter from '../../assets/FamilyGovernanceRetreats/private-yacht-charter-family-governance-cruise.jpg'
import expCulturalTour from '../../assets/FamilyGovernanceRetreats/multigenerational-cultural-tour-family-bonding.jpg'
import expGolf from '../../assets/FamilyGovernanceRetreats/luxury-golf-vacation-championship-golf-course-mountain-resort.png'
import expWellness from '../../assets/FamilyGovernanceRetreats/holistic-wellness-session-family-governance-retreat.jpg'
import expHiking from '../../assets/FamilyGovernanceRetreats/mountain-hiking-adventure-family-bonding.jpg'
import expSafari from '../../assets/FamilyGovernanceRetreats/luxury-african-safari-family-legacy-retreat.jpg'

import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Users, Heart, Compass, Handshake, TrendingUp, Trophy, MessageCircle,
    Sparkles, Briefcase, Landmark, UserCog, Target, Repeat, ListChecks,
    GraduationCap, PiggyBank, ScrollText, UserCheck, Shield,
    MapPin, Home, Lock, ChefHat, Wine, Anchor, Flag, HeartPulse,
    Mountain, Ship, CheckCircle, Award, Star, Crown, Phone, LayoutList,
    Calendar, Globe, Clock, Building2, KeyRound, Eye, Mic, FileText
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function FamilyGovernanceRetreats() {
    const [fgrCurrentHero, setFgrCurrentHero] = useState(0)
    const fgrHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const fgrTimer = setInterval(() => {
            setFgrCurrentHero((prev) => (prev + 1) % fgrHeroImages.length)
        }, 5000)
        return () => clearInterval(fgrTimer)
    }, [fgrHeroImages.length])

    const [fgrActiveFaq, setFgrActiveFaq] = useState(null)
    const fgrToggleFaq = (index) => {
        setFgrActiveFaq(fgrActiveFaq === index ? null : index)
    }

    const fgrMatterItems = [
        { text: 'Discuss family values', icon: Heart },
        { text: 'Develop future leadership', icon: TrendingUp },
        { text: 'Prepare the next generation', icon: GraduationCap },
        { text: 'Strengthen communication', icon: MessageCircle },
        { text: 'Plan for succession', icon: Repeat },
        { text: 'Encourage collaboration', icon: Handshake },
        { text: 'Celebrate shared achievements', icon: Trophy },
        { text: 'Create lasting traditions', icon: Sparkles }
    ]

    const fgrBusinessItems = [
        { text: 'Leadership transitions', icon: UserCog },
        { text: 'Governance structures', icon: Landmark },
        { text: 'Ownership responsibilities', icon: Briefcase },
        { text: 'Business vision', icon: Target },
        { text: 'Family roles', icon: Users },
        { text: 'Future opportunities', icon: Compass },
        { text: 'Long-term planning', icon: ScrollText },
        { text: 'Decision-making processes', icon: ListChecks }
    ]

    const fgrSuccessionItems = [
        { text: 'Leadership development', icon: TrendingUp },
        { text: 'Family values', icon: Heart },
        { text: 'Wealth stewardship', icon: PiggyBank },
        { text: 'Business continuity', icon: Repeat },
        { text: 'Estate planning discussions', icon: ScrollText },
        { text: 'Mentorship opportunities', icon: GraduationCap },
        { text: 'Next-generation engagement', icon: UserCheck },
        { text: 'Shared responsibilities', icon: Handshake }
    ]

    const fgrDestinations = [
        { name: 'Tuscany, Italy', img: destTuscany },
        { name: 'Provence, France', img: destProvence },
        { name: 'Scottish Highlands', img: destScottish },
        { name: 'Napa Valley', img: destNapa },
        { name: 'Jackson Hole', img: destJackson },
        { name: 'Costa Rica', img: destCostaRica },
        { name: 'The Caribbean', img: destCaribbean },
        { name: 'Swiss Alps', img: destSwissAlps }
    ]

    const fgrVillaItems = [
        { text: 'Private meeting spaces', icon: Landmark },
        { text: 'Spacious family gathering areas', icon: Home },
        { text: 'Concierge services', icon: Star },
        { text: 'Personal chefs', icon: ChefHat },
        { text: 'Luxury amenities', icon: Crown },
        { text: 'Wellness facilities', icon: HeartPulse },
        { text: 'Outdoor recreation', icon: Mountain },
        { text: 'Complete discretion', icon: Lock }
    ]

    const fgrExperiences = [
        { text: 'Wine tastings', img: expWineTasting, icon: Wine },
        { text: 'Cooking classes', img: expCookingClass, icon: ChefHat },
        { text: 'Private yacht charters', img: expYachtCharter, icon: Anchor },
        { text: 'Cultural tours', img: expCulturalTour, icon: Compass },
        { text: 'Golf outings', img: expGolf, icon: Flag },
        { text: 'Wellness sessions', img: expWellness, icon: HeartPulse },
        { text: 'Hiking adventures', img: expHiking, icon: Mountain },
        { text: 'Safari experiences', img: expSafari, icon: Globe },
    ]

    const fgrPlanningItems = [
        { text: 'Destination selection', icon: MapPin },
        { text: 'Luxury accommodations', icon: Home },
        { text: 'Meeting logistics', icon: Landmark },
        { text: 'Transportation', icon: Compass },
        { text: 'Private dining', icon: ChefHat },
        { text: 'Concierge services', icon: Star },
        { text: 'Activity planning', icon: Calendar },
        { text: 'Executive support', icon: Briefcase },
        { text: 'Family celebrations', icon: Sparkles },
        { text: 'Personalized itineraries', icon: ListChecks }
    ]

    const fgrPrivacyItems = [
        { text: 'Confidential planning', icon: Lock },
        { text: 'Private venues', icon: Home },
        { text: 'Secure transportation', icon: Shield },
        { text: 'Trusted travel partners', icon: Handshake },
        { text: 'Flexible scheduling', icon: Calendar },
        { text: 'Personalized communication', icon: MessageCircle },
        { text: 'Discreet concierge services', icon: Eye }
    ]

    const fgrWhyChooseItems = [
        { text: 'Personalized retreat planning', icon: ListChecks },
        { text: 'Luxury travel expertise', icon: Crown },
        { text: 'Family office experience', icon: Building2 },
        { text: 'Concierge-level service', icon: Star },
        { text: 'Worldwide destination knowledge', icon: Globe },
        { text: 'Exclusive partnerships', icon: KeyRound },
        { text: 'Seamless coordination', icon: Repeat },
        { text: 'Exceptional attention to detail', icon: Award }
    ]

    const fgrFaqs = [
        { question: 'What is a family governance retreat?', answer: 'A family governance retreat combines luxury travel with structured family meetings focused on leadership, communication, succession planning, and long-term family goals.' },
        { question: 'Who should attend a family governance retreat?', answer: 'These retreats are ideal for multigenerational families, family businesses, family offices, and high-net-worth families preparing future leaders.' },
        { question: 'What topics are discussed during governance retreats?', answer: 'Common topics include family values, succession planning, governance structures, philanthropy, wealth stewardship, leadership development, and communication.' },
        { question: 'Why hold governance meetings during a luxury retreat?', answer: 'A relaxed environment encourages open conversations, stronger family connections, and greater participation from every generation.' },
        { question: 'Can retreats include business discussions?', answer: 'Yes. Many families combine business strategy sessions with family experiences and leisure activities.' },
        { question: 'Where are governance retreats typically held?', answer: 'Popular destinations include Italy, France, Switzerland, the Caribbean, Costa Rica, Napa Valley, and luxury mountain resorts.' },
        { question: 'Are private villas recommended?', answer: 'Yes. Private villas provide privacy, dedicated meeting space, flexible schedules, and personalized services.' },
        { question: 'Can retreats include recreational activities?', answer: 'Absolutely. Families often enjoy golf, cooking classes, wellness programs, cultural tours, safaris, and luxury cruises alongside governance discussions.' },
        { question: 'How long should a governance retreat last?', answer: 'Most retreats range from three to seven days depending on family objectives and travel schedules.' },
        { question: 'Do you coordinate meeting logistics?', answer: 'Yes. We arrange meeting venues, private dining, accommodations, transportation, concierge services, and personalized itineraries.' },
        { question: 'How do you ensure privacy?', answer: 'We prioritize confidential planning, private accommodations, secure transportation, and trusted luxury travel partners throughout the retreat.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel specializes in designing luxury governance retreats that combine seamless travel planning with personalized experiences, allowing families to focus on leadership, relationships, and building a lasting legacy.' }
    ]

    const fgrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/family-governance-retreats",
                "name": "Family Governance Retreats",
                "url": "https://www.tripsshipsluxurytravel.com/family-governance-retreats",
                "description": "Luxury family governance retreats combining succession planning, family leadership, governance discussions, and meaningful multigenerational travel experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/family-governance-retreats#article"
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
                "description": "Luxury travel agency specializing in family governance retreats, family business retreats, executive travel, and personalized luxury travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/family-governance-retreats#article",
                "headline": "Family Governance Retreats",
                "url": "https://www.tripsshipsluxurytravel.com/family-governance-retreats",
                "description": "Expert guide to family governance retreats featuring succession planning, family leadership, governance meetings, luxury destinations, and concierge retreat planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/family-governance-retreats.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/family-governance-retreats"
                }
            },
            {
                "@type": "Service",
                "name": "Family Governance Retreat Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Family Retreat Consulting",
                "description": "Expert planning services for family governance retreats, succession planning retreats, family business meetings, and multigenerational luxury travel experiences."
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
                        "name": "Family Governance Retreats",
                        "item": "https://www.tripsshipsluxurytravel.com/family-governance-retreats"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is a family governance retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A family governance retreat combines luxury travel with structured family meetings focused on leadership, succession planning, governance, and family values."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should attend a family governance retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Family governance retreats are ideal for multigenerational families, family businesses, family offices, and high-net-worth families preparing future leaders."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What topics are discussed during governance retreats?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Topics commonly include succession planning, leadership development, governance structures, family values, communication, philanthropy, and wealth stewardship."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why combine governance meetings with luxury travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury retreats create a relaxed environment that encourages meaningful conversations, collaboration, and stronger family relationships."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can family business discussions be included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many governance retreats include family business strategy sessions, leadership planning, and ownership discussions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the best destinations for governance retreats?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Tuscany, Provence, Switzerland, Napa Valley, Costa Rica, and luxury Caribbean resorts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are private villas recommended?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private villas provide privacy, dedicated meeting spaces, luxury amenities, and flexible schedules."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can recreational activities be included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Activities such as golf, cooking classes, wellness sessions, safaris, wine tastings, and cultural tours can be incorporated."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long should a governance retreat last?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most family governance retreats last between three and seven days, depending on family goals and schedules."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you coordinate meeting logistics?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We arrange meeting venues, accommodations, transportation, concierge services, and customized itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How is confidentiality maintained?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We prioritize confidential planning, private accommodations, secure transportation, and trusted luxury travel partners."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel specializes in luxury governance retreats that combine personalized travel planning with meaningful family experiences and leadership development."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Family Governance Retreats | Luxury Retreats for Family Leadership & Succession Planning</title>
                <meta
                    name="title"
                    content="Family Governance Retreats | Luxury Family Business Retreats"
                />
                <meta
                    name="description"
                    content="Plan meaningful family governance retreats that combine luxury travel with succession planning, family leadership, governance discussions, and multigenerational experiences. Expertly designed by Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Family governance retreats, Family business retreats, Succession planning retreats, Family meetings, Family leadership retreats, Multigenerational family retreats, Family legacy planning, Luxury family retreats, Family office retreats, Executive family travel" />
                <script type="application/ld+json">
                    {JSON.stringify(fgrSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="medi-hero-section">
                {fgrHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${fgrCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Users size={16} />
                        <span>Where Luxury Travel Meets Family Leadership</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Family Governance Retreats
                    </h1>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="fgr-intro-section">
                <div className="fgr-intro-glow-one"></div>
                <div className="fgr-intro-glow-two"></div>
                <div className="fgr-intro-container">
                    <p className="fgr-intro-lead-para">
                        The world's most successful families understand that wealth alone doesn't create a lasting legacy. Strong relationships, shared values, thoughtful leadership, and open communication are equally important for preserving a family's future.
                    </p>
                    <p className="fgr-intro-body-para">
                        Family governance retreats provide a unique opportunity to step away from daily routines and bring multiple generations together in an inspiring setting. By combining luxury travel with meaningful conversations, families can strengthen relationships while discussing leadership, succession planning, philanthropy, and long-term goals.
                    </p>
                    <div className="fgr-intro-highlight-box">
                        <Sparkles size={22} className="fgr-intro-highlight-icon" />
                        <p className="fgr-intro-highlight-text">
                            At Trips & Ships Luxury Travel, we create customized family governance retreats that balance productive family meetings with unforgettable luxury experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY FAMILY GOVERNANCE RETREATS MATTER */}
            <section className="fgr-matter-section">
                <div className="fgr-matter-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Family Governance Retreats Matter</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="fgr-matter-lead-para">
                        Families often find it difficult to have meaningful conversations while juggling busy careers, school schedules, and business responsibilities.
                    </p>
                    <p className="fgr-matter-subtext">
                        A dedicated retreat creates the ideal environment to:
                    </p>
                    <div className="fgr-matter-grid">
                        {fgrMatterItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="fgr-matter-card">
                                    <div className="fgr-matter-icon-box">
                                        <IconComp size={22} />
                                    </div>
                                    <span className="fgr-matter-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="fgr-matter-closing-para">
                        Holding these conversations in a relaxed luxury setting encourages openness, engagement, and stronger family connections.
                    </p>
                </div>
            </section>

            {/* FAMILY BUSINESS RETREATS */}
            <section className="fgr-business-section">
                <div className="fgr-business-container">
                    <div className="fgr-business-image-block">
                        <img src={familyBusinessImg} alt="Family business governance meeting retreat" className="fgr-business-image" />
                        <div className="fgr-business-image-overlay"></div>
                    </div>
                    <div className="fgr-business-content-block">
                        <span className="fgr-business-eyebrow">MULTI-GENERATIONAL ENTERPRISE</span>
                        <h2 className="fgr-business-heading">Family Business Retreats</h2>
                        <div className="fgr-business-separator"></div>
                        <p className="fgr-business-lead-para">
                            Many successful families own businesses that span multiple generations.
                        </p>
                        <p className="fgr-business-subtext">
                            Family business retreats provide dedicated time to discuss:
                        </p>
                        <ul className="fgr-business-list">
                            {fgrBusinessItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <li key={idx} className="fgr-business-list-item">
                                        <IconComp size={17} className="fgr-business-list-icon" />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="fgr-business-closing-para">
                            Combining business discussions with quality family time creates a more balanced and productive experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* SUCCESSION PLANNING RETREATS */}
            <section className="fgr-succession-section">
                <div className="fgr-succession-container">
                    <div className="fgr-succession-content-block">
                        <span className="fgr-succession-eyebrow">LEGACY & LEADERSHIP</span>
                        <h2 className="fgr-succession-heading">Succession Planning Retreats</h2>
                        <div className="fgr-succession-separator"></div>
                        <p className="fgr-succession-lead-para">
                            Preparing future generations for leadership requires thoughtful planning and communication.
                        </p>
                        <p className="fgr-succession-subtext">
                            Our succession planning retreats provide the ideal environment for conversations about:
                        </p>
                        <div className="fgr-succession-pills-grid">
                            {fgrSuccessionItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="fgr-succession-pill">
                                        <IconComp size={15} className="fgr-succession-pill-icon" />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fgr-succession-closing-para">
                            These retreats help families approach succession planning in a collaborative and positive atmosphere.
                        </p>
                    </div>
                    <div className="fgr-succession-image-block">
                        <img src={successionPlanningImg} alt="Multigenerational family succession planning retreat" className="fgr-succession-image" />
                        <div className="fgr-succession-badge">
                            <Repeat size={18} />
                            <span>Generational Continuity</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* LUXURY DESTINATIONS GALLERY */}
            <section className="fgr-destinations-section">
                <div className="fgr-destinations-container">
                    <div className="fgr-destinations-header">
                        <span className="fgr-destinations-eyebrow">CURATED SETTINGS</span>
                        <h2 className="medi-section-heading">Luxury Destinations for Family Governance Retreats</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="fgr-destinations-lead-para">
                        The right destination encourages meaningful conversations while providing opportunities for relaxation and exploration.
                    </p>
                    <p className="fgr-destinations-subtext">
                        Popular retreat locations include:
                    </p>
                    <div className="fgr-destinations-gallery">
                        {fgrDestinations.map((dest, idx) => (
                            <div key={idx} className="fgr-destination-card">
                                <img src={dest.img} alt={dest.name} className="fgr-destination-img" />
                                <div className="fgr-destination-card-label">
                                    <MapPin size={14} />
                                    <span>{dest.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="fgr-destinations-closing-para">
                        Each destination is selected based on your family's objectives, privacy needs, and preferred travel style.
                    </p>
                </div>
            </section>

            {/* PRIVATE VILLAS & EXCLUSIVE RESORTS */}
            <section className="fgr-villa-section">
                <div className="fgr-villa-container">
                    <div className="fgr-villa-content-block">
                        <span className="fgr-villa-eyebrow">DISCREET ACCOMMODATIONS</span>
                        <h2 className="fgr-villa-heading">Private Villas & Exclusive Resorts</h2>
                        <div className="fgr-villa-separator"></div>
                        <p className="fgr-villa-lead-para">
                            Privacy is essential during governance retreats.
                        </p>
                        <p className="fgr-villa-subtext">
                            We recommend accommodations that provide:
                        </p>
                        <div className="fgr-villa-features-grid">
                            {fgrVillaItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="fgr-villa-feature">
                                        <CheckCircle size={18} className="fgr-villa-feature-check" />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fgr-villa-closing-para">
                            Private villas and boutique luxury resorts allow families to transition seamlessly between meetings and leisure activities.
                        </p>
                    </div>
                    <div className="fgr-villa-image-wrapper">
                        <img src={privateVillaImg} alt="Exclusive private villa family office retreat" className="fgr-villa-main-image" />
                        <div className="fgr-villa-image-glow"></div>
                    </div>
                </div>
            </section>

            {/* BALANCING MEETINGS WITH MEANINGFUL EXPERIENCES */}
            <section className="fgr-experiences-section">
                <div className="fgr-experiences-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Balancing Meetings with Meaningful Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered fgr-separator-light"></div>
                    </div>
                    <p className="fgr-experiences-lead-para">
                        Successful governance retreats aren't spent entirely in boardrooms.
                    </p>
                    <p className="fgr-experiences-subtext">
                        We incorporate experiences that encourage family bonding, including:
                    </p>
                    <div className="fgr-experiences-gallery">
                        {fgrExperiences.map((exp, idx) => {
                            const IconComp = exp.icon
                            return (
                                <div key={idx} className="fgr-experience-card">
                                    <img src={exp.img} alt={exp.text} className="fgr-experience-img" />
                                    <div className="fgr-experience-icon-badge">
                                        <IconComp size={16} />
                                    </div>
                                    <span className="fgr-experience-label">{exp.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="fgr-experiences-closing-para">
                        Shared experiences often create the strongest family connections.
                    </p>
                </div>
            </section>

            {/* PROFESSIONAL RETREAT PLANNING */}
            <section className="fgr-planning-section">
                <div className="fgr-planning-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="fgr-planning-eyebrow">WHITE-GLOVE COORDINATION</span>
                        <h2 className="medi-section-heading">Professional Retreat Planning</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="fgr-planning-lead-para">
                        Every retreat is customized around your family's goals.
                    </p>
                    <p className="fgr-planning-subtext">
                        Our planning services include:
                    </p>
                    <div className="fgr-planning-grid">
                        {fgrPlanningItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="fgr-planning-card">
                                    <div className="fgr-planning-num">0{idx + 1}</div>
                                    <div className="fgr-planning-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="fgr-planning-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="fgr-planning-closing-para">
                        We handle every detail so your family can focus on meaningful conversations.
                    </p>
                </div>
            </section>

            {/* PRIVACY & CONFIDENTIALITY */}
            <section className="fgr-privacy-section">
                <div className="fgr-privacy-container">
                    <div className="fgr-privacy-header-block">
                        <div className="fgr-privacy-icon-circle">
                            <Lock size={26} />
                        </div>
                        <h2 className="fgr-privacy-heading">Privacy & Confidentiality</h2>
                        <div className="fgr-privacy-separator"></div>
                        <p className="fgr-privacy-lead-para">
                            Governance discussions often involve sensitive personal and business matters.
                        </p>
                        <p className="fgr-privacy-subtext">
                            We prioritize:
                        </p>
                    </div>
                    <div className="fgr-privacy-list-wrap">
                        {fgrPrivacyItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="fgr-privacy-list-item">
                                    <IconComp size={18} className="fgr-privacy-list-icon" />
                                    <span>{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="fgr-privacy-closing-para">
                        Your family's privacy remains our highest priority throughout every stage of the retreat.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE TRIPS & SHIPS */}
            <section className="fgr-whychoose-section">
                <div className="fgr-whychoose-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="fgr-whychoose-lead-para">
                        Planning a successful family governance retreat requires expertise in both luxury travel and complex family logistics.
                    </p>
                    <p className="fgr-whychoose-subtext">
                        Families choose us because we provide:
                    </p>
                    <div className="fgr-whychoose-grid">
                        {fgrWhyChooseItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="fgr-whychoose-card">
                                    <div className="fgr-whychoose-accent-bar"></div>
                                    <div className="fgr-whychoose-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="fgr-whychoose-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="fgr-whychoose-closing-para">
                        Whether your goal is succession planning, strengthening family relationships, or building a lasting legacy, we'll create an unforgettable retreat tailored to your family's vision.
                    </p>
                </div>
            </section>

            {/* EXPERT INSIGHT - ANGELA HUGHES */}
            <section id="family-governance-insight" className="medi-expert-editorial-section fgr-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Family Retreat Advisor" />
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

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Why Family Governance Retreats Are Becoming <br className="medi-growth-title-break" />Essential for Legacy Families
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, multigenerational families increasingly recognize that a thoughtfully planned retreat can accomplish what years of scattered phone calls and email threads cannot.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees families prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Privacy and discretion',
                                        'Meaningful family time',
                                        'Clear communication',
                                        'Personalized service',
                                        'Seamless logistics',
                                        'Multigenerational bonding'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps families navigate the details of governance retreat planning with real-world expertise rather than generic recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Family retreat planning', icon: Users },
                                        { title: 'Private villa curation', icon: Home },
                                        { title: 'Executive family travel', icon: Briefcase },
                                        { title: 'Multigenerational itineraries', icon: Globe },
                                        { title: 'Concierge-level coordination', icon: Sparkles }
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

            {/* FAQ SECTION */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {fgrFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => fgrToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {fgrActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {fgrActiveFaq === index && (
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
                        <h2 className="medi-cta-heading-white">Ready to Plan Your Family Governance Retreat?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Whether your goal is succession planning, strengthening family relationships, or building a lasting legacy, Trips & Ships Luxury Travel will create an unforgettable retreat tailored to your family's vision.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "A multigenerational family business retreat",
                                    "A succession planning gathering",
                                    "A private villa family meeting",
                                    "A legacy and philanthropy retreat",
                                    "An executive family office retreat"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips & Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Retreat Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FamilyGovernanceRetreats