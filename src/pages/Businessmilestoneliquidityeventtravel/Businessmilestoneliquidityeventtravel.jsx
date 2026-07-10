import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import './Businessmilestoneliquidityeventtravel.css'

// import hero1 from '../../assets/BusinessMilestoneLiquidityEventTravel/hero1.jpg'
// import hero2 from '../../assets/BusinessMilestoneLiquidityEventTravel/hero2.jpg'
// import hero3 from '../../assets/BusinessMilestoneLiquidityEventTravel/hero3.jpg'

// import liquidityEventImg from '../../assets/BusinessMilestoneLiquidityEventTravel/liquidity-event-celebration.webp'
// import executiveMilestoneImg from '../../assets/BusinessMilestoneLiquidityEventTravel/executive-milestone-vacation.webp'

// import destMediterranean from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-mediterranean-yacht-cruise.webp'
// import destAfricanSafari from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-african-safari.webp'
// import destAntarctica from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-antarctica-expedition.webp'
// import destEuropeanRiver from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-european-river-cruise.webp'
// import destPrivateIsland from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-private-island-escape.webp'
// import destWellnessRetreat from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-luxury-wellness-retreat.webp'
// import destAlpine from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-alpine-resort.webp'
// import destTropicalVilla from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-tropical-villa.webp'
// import destLuxuryRail from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-luxury-rail-journey.webp'
// import destAroundWorld from '../../assets/BusinessMilestoneLiquidityEventTravel/destination-around-the-world-adventure.webp'

// import expYachtCharter from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-private-yacht-charter.webp'
// import expHelicopter from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-helicopter-tour.webp'
// import expWineTasting from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-wine-tasting.webp'
// import expMichelinDining from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-michelin-starred-dining.webp'
// import expCulturalTour from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-private-cultural-tour.webp'
// import expVipSporting from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-vip-sporting-event.webp'
// import expGolf from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-luxury-golf.webp'
// import expSafari from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-safari-adventure.webp'
// import expExpeditionCruise from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-expedition-cruise.webp'
// import expConcert from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-private-concert.webp'
// import expAnniversary from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-anniversary-celebration.webp'
// import expGiftsSurprises from '../../assets/BusinessMilestoneLiquidityEventTravel/experience-personalized-gifts-surprises.webp'

// import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Trophy, RefreshCw, Users, Heart, Sparkles, Compass, Award, Star,
    Briefcase, Building2, TrendingUp, Rocket, PieChart, Landmark,
    LineChart, Handshake, Crown, UserCog, UserCheck, Medal,
    CalendarClock, Target,
    Anchor, TreePine, Home, Globe2,
    User, Users2, Building, Landmark as LandmarkIcon2,
    Wine, Utensils, Compass as CompassIcon, Flag, Ship, Music,
    Gift, PartyPopper,
    MapPin, Plane, Car, CalendarCheck, ClipboardList, ShieldCheck,
    Clock, Phone, LayoutList, CheckCircle, KeyRound, Route
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function BusinessMilestoneLiquidityEventTravel() {
    const [bmlCurrentHero, setBmlCurrentHero] = useState(0)
    const bmlHeroImages = []

    useEffect(() => {
        const bmlTimer = setInterval(() => {
            setBmlCurrentHero((prev) => (prev + 1) % bmlHeroImages.length)
        }, 5000)
        return () => clearInterval(bmlTimer)
    }, [bmlHeroImages.length])

    const [bmlActiveFaq, setBmlActiveFaq] = useState(null)
    const bmlToggleFaq = (index) => {
        setBmlActiveFaq(bmlActiveFaq === index ? null : index)
    }

    const bmlWhyItems = [
        { text: 'Reflect on your accomplishments', icon: Compass },
        { text: 'Recharge before your next chapter', icon: RefreshCw },
        { text: 'Celebrate with family and friends', icon: Users },
        { text: 'Strengthen personal relationships', icon: Heart },
        { text: 'Create lifelong memories', icon: Sparkles },
        { text: 'Experience extraordinary destinations', icon: Globe2 },
        { text: 'Reward yourself and your team', icon: Trophy },
        { text: 'Mark a once-in-a-lifetime achievement', icon: Award }
    ]

    const bmlLiquidityItems = [
        { text: 'Business exits', icon: Briefcase },
        { text: 'Company acquisitions', icon: Building2 },
        { text: 'Successful mergers', icon: Handshake },
        { text: 'IPO celebrations', icon: TrendingUp },
        { text: 'Private equity transactions', icon: PieChart },
        { text: 'Investment fund launches', icon: Rocket },
        { text: 'Major fundraising milestones', icon: LineChart },
        { text: 'Entrepreneurial success', icon: Star }
    ]

    const bmlExecutiveItems = [
        { text: 'CEO appointments', icon: Crown },
        { text: 'Executive promotions', icon: UserCog },
        { text: 'Retirement celebrations', icon: Medal },
        { text: 'Board appointments', icon: Landmark },
        { text: 'Partnership promotions', icon: Handshake },
        { text: 'Professional awards', icon: Award },
        { text: 'Career anniversaries', icon: CalendarClock },
        { text: 'Leadership milestones', icon: Target }
    ]

    const bmlDestinations = [
        // { name: 'Mediterranean Yacht Cruises', img: destMediterranean },
        // { name: 'African Safaris', img: destAfricanSafari },
        // { name: 'Antarctica Expeditions', img: destAntarctica },
        // { name: 'European River Cruises', img: destEuropeanRiver },
        // { name: 'Private Island Escapes', img: destPrivateIsland },
        // { name: 'Luxury Wellness Retreats', img: destWellnessRetreat },
        // { name: 'Alpine Resorts', img: destAlpine },
        // { name: 'Tropical Villas', img: destTropicalVilla },
        // { name: 'Luxury Rail Journeys', img: destLuxuryRail },
        // { name: 'Around-the-World Adventures', img: destAroundWorld }
    ]

    const bmlAudienceItems = [
        { text: 'Couples', icon: User },
        { text: 'Families', icon: Users2 },
        { text: 'Executive teams', icon: Building },
        { text: 'Business partners', icon: Handshake },
        { text: 'Friends', icon: Users },
        { text: 'Family offices', icon: LandmarkIcon2 },
        { text: 'Investment groups', icon: PieChart },
        { text: 'Corporate leadership teams', icon: Briefcase }
    ]

    const bmlExperiences = [
        // { text: 'Private yacht charters', img: expYachtCharter, icon: Anchor },
        // { text: 'Helicopter tours', img: expHelicopter, icon: Plane },
        // { text: 'Wine tastings', img: expWineTasting, icon: Wine },
        // { text: 'Michelin-starred dining', img: expMichelinDining, icon: Utensils },
        // { text: 'Private cultural tours', img: expCulturalTour, icon: CompassIcon },
        // { text: 'VIP sporting events', img: expVipSporting, icon: Flag },
        // { text: 'Luxury golf experiences', img: expGolf, icon: Flag },
        // { text: 'Safari adventures', img: expSafari, icon: TreePine },
        // { text: 'Expedition cruises', img: expExpeditionCruise, icon: Ship },
        // { text: 'Private concerts', img: expConcert, icon: Music },
        // { text: 'Anniversary celebrations', img: expAnniversary, icon: PartyPopper },
        // { text: 'Personalized gifts and surprises', img: expGiftsSurprises, icon: Gift }
    ]

    const bmlConciergeItems = [
        { text: 'Destination consultation', icon: MapPin },
        { text: 'Private aviation', icon: Plane },
        { text: 'Luxury accommodations', icon: Home },
        { text: 'VIP airport services', icon: Star },
        { text: 'Private transportation', icon: Car },
        { text: 'Restaurant reservations', icon: Utensils },
        { text: 'Special event coordination', icon: CalendarCheck },
        { text: 'Celebration planning', icon: ClipboardList },
        { text: 'Travel insurance recommendations', icon: ShieldCheck },
        { text: '24/7 travel support', icon: Clock }
    ]

    const bmlWhyChooseItems = [
        { text: 'Personalized luxury itineraries', icon: Route },
        { text: 'Concierge-level service', icon: Star },
        { text: 'Global destination expertise', icon: Globe2 },
        { text: 'Private travel experiences', icon: KeyRound },
        { text: 'Trusted luxury partnerships', icon: Handshake },
        { text: 'Executive travel planning', icon: Briefcase },
        { text: 'Family celebration expertise', icon: Heart },
        { text: 'Ongoing travel support', icon: UserCheck }
    ]

    const bmlFaqs = [
        { question: 'What is business milestone travel?', answer: 'Business milestone travel is a luxury vacation designed to celebrate major professional achievements such as business sales, promotions, acquisitions, or retirement.' },
        { question: 'What is a liquidity event celebration?', answer: 'A liquidity event celebration marks significant financial milestones such as selling a company, completing an acquisition, launching an investment fund, or an IPO.' },
        { question: 'Can family members join the celebration?', answer: 'Yes. Many clients choose to celebrate with spouses, children, extended family, and close friends.' },
        { question: 'Do you plan executive group trips?', answer: 'Yes. We design luxury incentive and celebration trips for executive teams, partners, and leadership groups.' },
        { question: 'Can private jets be arranged?', answer: 'Yes. Private aviation, helicopter transfers, and VIP airport services can be included.' },
        { question: 'What destinations are popular for executive celebrations?', answer: 'Popular destinations include the Mediterranean, Africa, Antarctica, Europe, the Caribbean, Alaska, and private island resorts.' },
        { question: 'Can a luxury cruise be included?', answer: 'Yes. Ocean cruises, river cruises, expedition cruises, and private yacht charters can all be incorporated into your celebration.' },
        { question: 'Can you arrange private experiences?', answer: 'Yes. We organize private tours, exclusive dining, yacht charters, VIP events, and customized luxury experiences.' },
        { question: 'How far in advance should I plan?', answer: 'We recommend planning 6 to 12 months in advance for the best availability and exclusive experiences.' },
        { question: 'Do you coordinate celebration details?', answer: 'Yes. We arrange milestone dinners, private events, personalized gifts, and unique celebration experiences.' },
        { question: 'Is travel insurance recommended?', answer: 'Yes. Comprehensive travel insurance is recommended for all luxury travel itineraries.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: "Trips & Ships Luxury Travel provides concierge-level planning, personalized itineraries, luxury partnerships, and exceptional service to celebrate life's most important professional milestones." }
    ]

    const bmlSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel",
                "name": "Business Milestone & Liquidity Event Travel",
                "url": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel",
                "description": "Luxury travel experiences celebrating business milestones, successful exits, acquisitions, promotions, fund launches, and executive achievements.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel#article"
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
                "description": "Luxury travel agency specializing in executive travel, celebration vacations, luxury cruises, safaris, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel#article",
                "headline": "Business Milestone & Liquidity Event Travel",
                "url": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel",
                "description": "Expert guide to luxury travel celebrating business milestones including acquisitions, successful exits, executive promotions, fund launches, and career achievements.",
                "image": "https://www.tripsshipsluxurytravel.com/images/business-milestone-liquidity-event-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Business Celebration Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Executive Travel Consulting",
                "description": "Expert planning services for business celebration travel, executive milestone vacations, liquidity event celebrations, incentive travel, and personalized luxury experiences."
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
                        "name": "Business Milestone & Liquidity Event Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/business-milestone-liquidity-event-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is business milestone travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Business milestone travel is a luxury vacation designed to celebrate major professional achievements such as business sales, promotions, acquisitions, or retirement."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is a liquidity event celebration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A liquidity event celebration marks significant financial milestones such as selling a company, completing an acquisition, launching an investment fund, or an IPO."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can family members join the celebration?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many clients choose to celebrate with spouses, children, extended family, and close friends."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you plan executive group trips?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We design luxury incentive and celebration trips for executive teams, partners, and leadership groups."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can private jets be arranged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private aviation, helicopter transfers, and VIP airport services can be included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What destinations are popular for executive celebrations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include the Mediterranean, Africa, Antarctica, Europe, the Caribbean, Alaska, and private island resorts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can a luxury cruise be included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Ocean cruises, river cruises, expedition cruises, and private yacht charters can all be incorporated into your celebration."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you arrange private experiences?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We organize private tours, exclusive dining, yacht charters, VIP events, and customized luxury experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should I plan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We recommend planning 6 to 12 months in advance for the best availability and exclusive experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you coordinate celebration details?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We arrange milestone dinners, private events, personalized gifts, and unique celebration experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is travel insurance recommended?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Comprehensive travel insurance is recommended for all luxury travel itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides concierge-level planning, personalized itineraries, luxury partnerships, and exceptional service to celebrate life's most important professional milestones."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Business Milestone & Liquidity Event Travel | Luxury Executive Celebration Vacations</title>
                <meta
                    name="title"
                    content="Business Celebration Travel | Luxury Executive & Exit Celebration Vacations"
                />
                <meta
                    name="description"
                    content="Celebrate business milestones with custom luxury travel experiences. Whether you're marking a successful exit, acquisition, promotion, fund launch, or career achievement, Trips & Ships Luxury Travel creates unforgettable executive celebration vacations."
                />
                <meta name="keywords" content="Business celebration travel, Exit celebration vacations, Executive milestone travel, Luxury incentive travel, Business success vacations, Acquisition celebration travel, Executive luxury travel, Corporate milestone vacations, Luxury celebration trips, Private executive travel" />
                <script type="application/ld+json">
                    {JSON.stringify(bmlSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="medi-hero-section">
                {bmlHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${bmlCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Trophy size={16} />
                        <span>Celebrate Success with Extraordinary Travel Experiences</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Business Milestone & Liquidity Event Travel
                    </h1>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="bml-intro-section">
                <div className="bml-intro-shape-one"></div>
                <div className="bml-intro-shape-two"></div>
                <div className="bml-intro-container">
                    <p className="bml-intro-lead-para">
                        Major business achievements deserve more than a dinner or weekend getaway—they deserve an unforgettable journey.
                    </p>
                    <p className="bml-intro-body-para">
                        At Trips & Ships Luxury Travel, we design exceptional luxury vacations that celebrate life's biggest professional milestones. Whether you've completed a successful business sale, closed a major acquisition, launched a new investment fund, reached a leadership milestone, or celebrated a career-defining promotion, we'll create a personalized travel experience worthy of the occasion.
                    </p>
                    <div className="bml-intro-highlight-box">
                        <Sparkles size={22} className="bml-intro-highlight-icon" />
                        <p className="bml-intro-highlight-text">
                            Our concierge planning ensures every detail reflects the significance of your achievement.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CELEBRATE BUSINESS SUCCESS THROUGH TRAVEL */}
            <section className="bml-why-section">
                <div className="bml-why-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Celebrate Business Success Through Travel?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="bml-why-lead-para">
                        Professional milestones often represent years—or even decades—of hard work, sacrifice, and dedication.
                    </p>
                    <p className="bml-why-subtext">
                        Luxury travel offers an opportunity to:
                    </p>
                    <div className="bml-why-grid">
                        {bmlWhyItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="bml-why-card">
                                    <div className="bml-why-icon-box">
                                        <IconComp size={22} />
                                    </div>
                                    <span className="bml-why-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="bml-why-closing-para">
                        Rather than purchasing another luxury item, many successful individuals choose meaningful experiences that last forever.
                    </p>
                </div>
            </section>

            {/* CELEBRATING LIQUIDITY EVENTS */}
            <section className="bml-liquidity-section">
                <div className="bml-liquidity-container">
                    <div className="bml-liquidity-image-block">
                        {/* <img src={liquidityEventImg} alt="Liquidity event celebration" className="bml-liquidity-image" /> */}
                        <div className="bml-liquidity-image-overlay"></div>
                        <div className="bml-liquidity-floating-badge">
                            <TrendingUp size={16} />
                            <span>Milestone Achieved</span>
                        </div>
                    </div>
                    <div className="bml-liquidity-content-block">
                        <span className="bml-liquidity-eyebrow">DEFINING ACHIEVEMENTS</span>
                        <h2 className="bml-liquidity-heading">Celebrating Liquidity Events</h2>
                        <div className="bml-liquidity-separator"></div>
                        <p className="bml-liquidity-lead-para">
                            A business sale, IPO, merger, or acquisition is one of life's defining achievements.
                        </p>
                        <p className="bml-liquidity-subtext">
                            We create personalized journeys for clients celebrating:
                        </p>
                        <ul className="bml-liquidity-list">
                            {bmlLiquidityItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <li key={idx} className="bml-liquidity-list-item">
                                        <IconComp size={17} className="bml-liquidity-list-icon" />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="bml-liquidity-closing-para">
                            Whether you prefer relaxation, adventure, or cultural discovery, we'll design an itinerary that reflects your personal vision.
                        </p>
                    </div>
                </div>
            </section>

            {/* EXECUTIVE MILESTONE VACATIONS */}
            <section className="bml-executive-section">
                <div className="bml-executive-container">
                    <div className="bml-executive-content-block">
                        <span className="bml-executive-eyebrow">RECOGNITION & REWARD</span>
                        <h2 className="bml-executive-heading">Executive Milestone Vacations</h2>
                        <div className="bml-executive-separator"></div>
                        <p className="bml-executive-lead-para">
                            Career achievements deserve recognition.
                        </p>
                        <p className="bml-executive-subtext">
                            Popular celebrations include:
                        </p>
                        <div className="bml-executive-pills-grid">
                            {bmlExecutiveItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="bml-executive-pill">
                                        <IconComp size={15} className="bml-executive-pill-icon" />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="bml-executive-closing-para">
                            These journeys provide the perfect opportunity to pause, reflect, and enjoy the rewards of your success.
                        </p>
                    </div>
                    <div className="bml-executive-image-block">
                        {/* <img src={executiveMilestoneImg} alt="Executive milestone vacation" className="bml-executive-image" /> */}
                        <div className="bml-executive-image-overlay"></div>
                    </div>
                </div>
            </section>

            {/* LUXURY DESTINATIONS FOR CELEBRATIONS */}
            <section className="bml-destinations-section">
                <div className="bml-destinations-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="bml-destinations-eyebrow">CUSTOMIZED TO YOUR VISION</span>
                        <h2 className="medi-section-heading">Luxury Destinations for Celebrations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="bml-destinations-lead-para">
                        Our advisors recommend destinations based on your travel style and interests.
                    </p>
                    <p className="bml-destinations-subtext">
                        Popular options include:
                    </p>
                    <div className="bml-destinations-gallery">
                        {bmlDestinations.map((dest, idx) => (
                            <div key={idx} className="bml-destination-card">
                                <div className="bml-destination-photo">
                                    {/* <img src={dest.img} alt={dest.name} className="bml-destination-img" /> */}
                                </div>
                                <div className="bml-destination-caption">
                                    <MapPin size={13} />
                                    <span>{dest.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="bml-destinations-closing-para">
                        Each itinerary is completely customized to your preferences.
                    </p>
                </div>
            </section>

            {/* CELEBRATE WITH FAMILY, FRIENDS, OR YOUR TEAM */}
            <section className="bml-audience-section">
                <div className="bml-audience-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Celebrate with Family, Friends, or Your Team</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="bml-audience-lead-para">
                        Success is often shared with those who supported you along the way.
                    </p>
                    <p className="bml-audience-subtext">
                        We design celebrations for:
                    </p>
                    <div className="bml-audience-grid">
                        {bmlAudienceItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="bml-audience-card">
                                    <div className="bml-audience-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="bml-audience-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="bml-audience-closing-para">
                        Whether your celebration is intimate or large-scale, we create experiences that bring people together.
                    </p>
                </div>
            </section>

            {/* EXCLUSIVE LUXURY EXPERIENCES */}
            <section className="bml-experiences-section">
                <div className="bml-experiences-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="bml-experiences-eyebrow">PERSONALIZED TOUCHES</span>
                        <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Exclusive Luxury Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered bml-separator-light"></div>
                    </div>
                    <p className="bml-experiences-lead-para">
                        We elevate every celebration with personalized touches.
                    </p>
                    <p className="bml-experiences-subtext">
                        Experiences may include:
                    </p>
                    <div className="bml-experiences-gallery">
                        {bmlExperiences.map((exp, idx) => {
                            const IconComp = exp.icon
                            return (
                                <div key={idx} className="bml-experience-card">
                                    {/* <img src={exp.img} alt={exp.text} className="bml-experience-img" /> */}
                                    <div className="bml-experience-card-overlay"></div>
                                    <div className="bml-experience-icon-badge">
                                        <IconComp size={15} />
                                    </div>
                                    <span className="bml-experience-label">{exp.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="bml-experiences-closing-para">
                        Every itinerary is tailored to your vision.
                    </p>
                </div>
            </section>

            {/* CONCIERGE PLANNING FROM START TO FINISH */}
            <section className="bml-concierge-section">
                <div className="bml-concierge-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="bml-concierge-eyebrow">END-TO-END COORDINATION</span>
                        <h2 className="medi-section-heading">Concierge Planning from Start to Finish</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="bml-concierge-lead-para">
                        Our team manages every aspect of your celebration.
                    </p>
                    <p className="bml-concierge-subtext">
                        Services include:
                    </p>
                    <div className="bml-concierge-grid">
                        {bmlConciergeItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="bml-concierge-card">
                                    <div className="bml-concierge-num">0{idx + 1}</div>
                                    <div className="bml-concierge-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="bml-concierge-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="bml-concierge-closing-para">
                        From the moment you leave home until you return, every detail is carefully managed.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE TRIPS & SHIPS */}
            <section className="bml-whychoose-section">
                <div className="bml-whychoose-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="bml-whychoose-lead-para">
                        Celebrating a professional milestone requires more than booking a vacation.
                    </p>
                    <p className="bml-whychoose-subtext">
                        Clients choose us because we provide:
                    </p>
                    <div className="bml-whychoose-grid">
                        {bmlWhyChooseItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="bml-whychoose-card">
                                    <div className="bml-whychoose-accent-bar"></div>
                                    <div className="bml-whychoose-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="bml-whychoose-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="bml-whychoose-closing-para">
                        Whether you're celebrating a successful exit, executive promotion, retirement, or major business achievement, we'll create a luxury journey that honors your success and inspires your next chapter.
                    </p>
                </div>
            </section>

            {/* EXPERT INSIGHT - ANGELA HUGHES */}
            <section id="business-milestone-insight" className="medi-expert-editorial-section bml-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Executive Travel Advisor" /> */}
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
                                    Why Executives Are Choosing Travel <br className="medi-growth-title-break" />to Mark Their Biggest Wins
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, successful founders and executives increasingly choose extraordinary travel experiences over material purchases to mark their most significant achievements.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees clients prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Privacy and discretion',
                                        'Seamless logistics',
                                        'Meaningful family time',
                                        'Once-in-a-lifetime access',
                                        'Personalized itineraries',
                                        'Effortless celebration planning'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps executives and entrepreneurs design milestone celebrations with real-world expertise rather than generic corporate incentive packages.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Executive celebration planning', icon: Trophy },
                                        { title: 'Liquidity event travel', icon: TrendingUp },
                                        { title: 'Private aviation coordination', icon: Plane },
                                        { title: 'Corporate incentive travel', icon: Briefcase },
                                        { title: 'Concierge-level logistics', icon: Sparkles }
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
                        {bmlFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => bmlToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {bmlActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {bmlActiveFaq === index && (
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
                        <h2 className="medi-cta-heading-white">Ready to Celebrate Your Next Milestone?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Whether you're celebrating a successful exit, executive promotion, retirement, or major business achievement, Trips & Ships Luxury Travel will create a luxury journey that honors your success and inspires your next chapter.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "A business exit or acquisition celebration",
                                    "An executive promotion getaway",
                                    "A retirement milestone journey",
                                    "An executive team incentive trip",
                                    "A private, once-in-a-lifetime experience"
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
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Celebration Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessMilestoneLiquidityEventTravel