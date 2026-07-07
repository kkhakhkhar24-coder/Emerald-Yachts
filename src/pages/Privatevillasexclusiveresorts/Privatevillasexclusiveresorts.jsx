import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import './PrivateVillasExclusiveResorts.css'

// import hero1 from '../../assets/PrivateVillasExclusiveResorts/hero1.jpg'
// import hero2 from '../../assets/PrivateVillasExclusiveResorts/hero2.jpg'
// import hero3 from '../../assets/PrivateVillasExclusiveResorts/hero3.jpg'

// import exclusiveResortImg from '../../assets/PrivateVillasExclusiveResorts/exclusive-luxury-resort.webp'
// import familyVillaImg from '../../assets/PrivateVillasExclusiveResorts/family-villa-vacation.webp'

// import destCaribbean from '../../assets/PrivateVillasExclusiveResorts/destination-caribbean-islands.webp'
// import destHawaii from '../../assets/PrivateVillasExclusiveResorts/destination-hawaii.webp'
// import destItaly from '../../assets/PrivateVillasExclusiveResorts/destination-italy.webp'
// import destGreece from '../../assets/PrivateVillasExclusiveResorts/destination-greece.webp'
// import destFrance from '../../assets/PrivateVillasExclusiveResorts/destination-france.webp'
// import destCostaRica from '../../assets/PrivateVillasExclusiveResorts/destination-costa-rica.webp'
// import destMexico from '../../assets/PrivateVillasExclusiveResorts/destination-mexico.webp'
// import destMaldives from '../../assets/PrivateVillasExclusiveResorts/destination-maldives.webp'
// import destBali from '../../assets/PrivateVillasExclusiveResorts/destination-bali.webp'
// import destSouthAfrica from '../../assets/PrivateVillasExclusiveResorts/destination-south-africa.webp'

// import wellnessYoga from '../../assets/PrivateVillasExclusiveResorts/wellness-private-yoga.webp'
// import wellnessSpa from '../../assets/PrivateVillasExclusiveResorts/wellness-in-villa-spa.webp'
// import wellnessMeditation from '../../assets/PrivateVillasExclusiveResorts/wellness-meditation-class.webp'
// import wellnessFitness from '../../assets/PrivateVillasExclusiveResorts/wellness-personal-fitness.webp'
// import wellnessDining from '../../assets/PrivateVillasExclusiveResorts/wellness-healthy-dining.webp'
// import wellnessBeachfront from '../../assets/PrivateVillasExclusiveResorts/wellness-beachfront-experience.webp'
// import wellnessHolistic from '../../assets/PrivateVillasExclusiveResorts/wellness-holistic-therapy.webp'
// import wellnessNature from '../../assets/PrivateVillasExclusiveResorts/wellness-nature-excursion.webp'

// import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Home, Lock, Sofa, BedDouble, Waves, ChefHat, TreePine, Star, Calendar,
    Building2, Anchor, Flag, Utensils, HeartPulse, Users2, Sparkles,
    MapPin, Baby, Tv, Gamepad2, UtensilsCrossed,
    Car, Plane, Bell, Scissors, Backpack, ChefHat as ChefHatIcon, CalendarHeart,
    Users, PartyPopper, Cake, GraduationCap as GradCapIcon, HeartHandshake,
    ShieldCheck, KeyRound, MapPinned, Route, Eye,
    Crown, Globe, Handshake, ListChecks, Award,
    CheckCircle, Phone, LayoutList
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function PrivateVillasExclusiveResorts() {
    const [pvrCurrentHero, setPvrCurrentHero] = useState(0)
    const pvrHeroImages = []

    useEffect(() => {
        const pvrTimer = setInterval(() => {
            setPvrCurrentHero((prev) => (prev + 1) % pvrHeroImages.length)
        }, 5000)
        return () => clearInterval(pvrTimer)
    }, [pvrHeroImages.length])

    const [pvrActiveFaq, setPvrActiveFaq] = useState(null)
    const pvrToggleFaq = (index) => {
        setPvrActiveFaq(pvrActiveFaq === index ? null : index)
    }

    const pvrVillaBenefits = [
        { text: 'Complete privacy', icon: Lock },
        { text: 'Spacious living areas', icon: Sofa },
        { text: 'Multiple bedrooms', icon: BedDouble },
        { text: 'Private pools', icon: Waves },
        { text: 'Gourmet kitchens', icon: ChefHat },
        { text: 'Outdoor entertaining spaces', icon: TreePine },
        { text: 'Personalized concierge services', icon: Star },
        { text: 'Flexible schedules', icon: Calendar }
    ]

    const pvrResortFeatures = [
        { text: 'Oceanfront suites', icon: Waves },
        { text: 'Private beach access', icon: Anchor },
        { text: 'Award-winning spas', icon: HeartPulse },
        { text: 'Championship golf courses', icon: Flag },
        { text: 'Fine dining', icon: Utensils },
        { text: 'Wellness centers', icon: HeartPulse },
        { text: 'Family-friendly activities', icon: Users2 },
        { text: 'Personalized concierge services', icon: Star }
    ]

    const pvrDestinations = [
        // { name: 'Caribbean Islands', img: destCaribbean },
        // { name: 'Hawaii', img: destHawaii },
        // { name: 'Italy', img: destItaly },
        // { name: 'Greece', img: destGreece },
        // { name: 'France', img: destFrance },
        // { name: 'Costa Rica', img: destCostaRica },
        // { name: 'Mexico', img: destMexico },
        // { name: 'Maldives', img: destMaldives },
        // { name: 'Bali', img: destBali },
        // { name: 'South Africa', img: destSouthAfrica }
    ]

    const pvrFamilyFeatures = [
        { text: 'Multiple master suites', icon: BedDouble },
        { text: "Children's rooms", icon: Baby },
        { text: 'Entertainment spaces', icon: Tv },
        { text: 'Private pools', icon: Waves },
        { text: 'Outdoor dining', icon: UtensilsCrossed },
        { text: 'Home theaters', icon: Tv },
        { text: 'Game rooms', icon: Gamepad2 },
        { text: 'Fully equipped kitchens', icon: ChefHat }
    ]

    const pvrConciergeServices = [
        { text: 'Private chefs', icon: ChefHatIcon },
        { text: 'Grocery stocking', icon: ListChecks },
        { text: 'Airport transfers', icon: Plane },
        { text: 'Chauffeur services', icon: Car },
        { text: 'Yacht charters', icon: Anchor },
        { text: 'Spa appointments', icon: Scissors },
        { text: 'Childcare services', icon: Baby },
        { text: 'Excursion planning', icon: Backpack },
        { text: 'Restaurant reservations', icon: Utensils },
        { text: 'Special celebrations', icon: CalendarHeart }
    ]

    const pvrWellnessItems = [
        // { text: 'Private yoga sessions', img: wellnessYoga, icon: HeartPulse },
        // { text: 'In-villa spa treatments', img: wellnessSpa, icon: Scissors },
        // { text: 'Meditation classes', img: wellnessMeditation, icon: Sparkles },
        // { text: 'Personal fitness training', img: wellnessFitness, icon: Flag },
        // { text: 'Healthy dining options', img: wellnessDining, icon: Utensils },
        // { text: 'Beachfront wellness experiences', img: wellnessBeachfront, icon: Waves },
        // { text: 'Holistic therapies', img: wellnessHolistic, icon: HeartHandshake },
        // { text: 'Nature excursions', img: wellnessNature, icon: TreePine }
    ]

    const pvrCelebrations = [
        { text: 'Family reunions', icon: Users },
        { text: 'Anniversary trips', icon: HeartHandshake },
        { text: 'Milestone birthdays', icon: Cake },
        { text: 'Retirement celebrations', icon: Award },
        { text: 'Graduation vacations', icon: GradCapIcon },
        { text: 'Wedding anniversaries', icon: HeartHandshake },
        { text: 'Holiday gatherings', icon: PartyPopper },
        { text: 'Private events', icon: Sparkles }
    ]

    const pvrPrivacyItems = [
        { text: 'Confidential bookings', icon: Lock },
        { text: 'Secure accommodations', icon: ShieldCheck },
        { text: 'Trusted hospitality partners', icon: Handshake },
        { text: 'Private transportation', icon: Car },
        { text: 'Personalized itineraries', icon: Route },
        { text: 'Flexible scheduling', icon: Calendar }
    ]

    const pvrWhyChooseItems = [
        { text: 'Personalized property recommendations', icon: MapPinned },
        { text: 'Luxury destination expertise', icon: Globe },
        { text: 'Concierge-level planning', icon: Bell },
        { text: 'Exclusive travel partnerships', icon: KeyRound },
        { text: 'Flexible itinerary design', icon: Route },
        { text: 'VIP travel experiences', icon: Crown },
        { text: 'Ongoing travel support', icon: Handshake },
        { text: 'Attention to every detail', icon: Eye }
    ]

    const pvrFaqs = [
        { question: 'What are private villa rentals?', answer: 'Private villa rentals are luxury homes offering exclusive accommodations, privacy, and personalized amenities for travelers.' },
        { question: 'Why choose a private villa over a hotel?', answer: 'Private villas provide greater privacy, spacious accommodations, personalized service, and flexible schedules.' },
        { question: 'What is included with a luxury villa?', answer: 'Luxury villas often include housekeeping, concierge services, private pools, gourmet kitchens, and optional chef services.' },
        { question: 'Can private chefs be arranged?', answer: 'Yes. Private chefs, customized dining experiences, and grocery stocking can all be arranged.' },
        { question: 'Are private villas suitable for families?', answer: 'Yes. Villas are ideal for multigenerational families thanks to multiple bedrooms, entertainment spaces, and shared living areas.' },
        { question: 'What are exclusive resorts?', answer: 'Exclusive resorts offer luxury accommodations, personalized service, wellness facilities, fine dining, and premium guest experiences.' },
        { question: 'Can villas be booked for special celebrations?', answer: 'Yes. Villas are perfect for anniversaries, birthdays, family reunions, retirement celebrations, and holiday gatherings.' },
        { question: 'Which destinations are popular for luxury villas?', answer: 'Popular destinations include the Caribbean, Hawaii, Italy, Greece, France, Costa Rica, Mexico, the Maldives, Bali, and South Africa.' },
        { question: 'Do luxury resorts offer concierge services?', answer: 'Yes. Most luxury resorts provide concierge assistance for dining, spa treatments, excursions, and personalized guest services.' },
        { question: 'Can airport transportation be arranged?', answer: 'Yes. Private airport transfers, chauffeur services, and helicopter transfers can be coordinated.' },
        { question: 'How far in advance should I reserve a luxury villa?', answer: 'Booking 6 to 12 months in advance is recommended for the best property selection and availability.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel offers expert villa recommendations, exclusive resort partnerships, personalized concierge planning, and exceptional luxury travel experiences.' }
    ]

    const pvrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts",
                "name": "Private Villas & Exclusive Resorts",
                "url": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts",
                "description": "Discover luxury private villa rentals and exclusive resorts offering privacy, personalized service, luxury accommodations, and unforgettable travel experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts#article"
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
                "description": "Luxury travel agency specializing in private villa rentals, exclusive resorts, luxury accommodations, cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts#article",
                "headline": "Private Villas & Exclusive Resorts",
                "url": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts",
                "description": "Expert guide to luxury private villa rentals and exclusive resorts including concierge services, family accommodations, wellness escapes, celebration travel, and personalized luxury experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/private-villas-exclusive-resorts.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts"
                }
            },
            {
                "@type": "Service",
                "name": "Private Villa & Luxury Resort Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Accommodation Consulting",
                "description": "Expert planning services for private villa rentals, luxury resorts, family accommodations, concierge services, and personalized luxury vacations."
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
                        "name": "Private Villas & Exclusive Resorts",
                        "item": "https://www.tripsshipsluxurytravel.com/private-villas-exclusive-resorts"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are private villa rentals?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private villa rentals are luxury homes offering exclusive accommodations, privacy, and personalized amenities for travelers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose a private villa over a hotel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private villas provide greater privacy, spacious accommodations, personalized service, and flexible schedules."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included with a luxury villa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury villas often include housekeeping, concierge services, private pools, gourmet kitchens, and optional chef services."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can private chefs be arranged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private chefs, customized dining experiences, and grocery stocking can all be arranged."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are private villas suitable for families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Villas are ideal for multigenerational families thanks to multiple bedrooms, entertainment spaces, and shared living areas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are exclusive resorts?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Exclusive resorts offer luxury accommodations, personalized service, wellness facilities, fine dining, and premium guest experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can villas be booked for special celebrations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Villas are perfect for anniversaries, birthdays, family reunions, retirement celebrations, and holiday gatherings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which destinations are popular for luxury villas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include the Caribbean, Hawaii, Italy, Greece, France, Costa Rica, Mexico, the Maldives, Bali, and South Africa."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do luxury resorts offer concierge services?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most luxury resorts provide concierge assistance for dining, spa treatments, excursions, and personalized guest services."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can airport transportation be arranged?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private airport transfers, chauffeur services, and helicopter transfers can be coordinated."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should I reserve a luxury villa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking 6 to 12 months in advance is recommended for the best property selection and availability."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel offers expert villa recommendations, exclusive resort partnerships, personalized concierge planning, and exceptional luxury travel experiences."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Private Villas & Exclusive Resorts | Luxury Villa Rentals & Private Accommodations</title>
                <meta
                    name="title"
                    content="Private Villas & Exclusive Resorts | Luxury Villa Rentals"
                />
                <meta
                    name="description"
                    content="Discover private villas and exclusive resorts designed for luxury, privacy, and personalized service. Explore luxury villa rentals, private estates, beachfront retreats, and curated accommodations with Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Private villa rentals, Luxury villas, Exclusive resorts, Luxury accommodations, Private luxury vacations, Beachfront villas, Family villa rentals, Luxury resort vacations, Private estates, Concierge villa services" />
                <script type="application/ld+json">
                    {JSON.stringify(pvrSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="medi-hero-section">
                {pvrHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${pvrCurrentHero === idx ? 'medi-active' : ''}`}
                        /* style={{ backgroundImage: `url(${img})` }} */
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Home size={16} />
                        <span>Experience Luxury with Complete Privacy</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Private Villas & Exclusive Resorts
                    </h1>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="pvr-intro-section">
                <div className="pvr-intro-shape-one"></div>
                <div className="pvr-intro-shape-two"></div>
                <div className="pvr-intro-container">
                    <p className="pvr-intro-lead-para">
                        For many luxury travelers, the perfect vacation isn't defined by the size of a hotel or the number of amenities—it's about privacy, personalized service, and the freedom to enjoy every moment on your own terms.
                    </p>
                    <p className="pvr-intro-body-para">
                        At Trips & Ships Luxury Travel, we specialize in arranging private villas and exclusive resort experiences for families, couples, executives, and ultra-high-net-worth travelers seeking exceptional accommodations around the world.
                    </p>
                    <div className="pvr-intro-highlight-box">
                        <Sparkles size={22} className="pvr-intro-highlight-icon" />
                        <p className="pvr-intro-highlight-text">
                            Whether you're planning a multigenerational family vacation, celebrating a milestone, hosting friends, or simply looking for a peaceful escape, we help you find extraordinary properties that combine luxury, comfort, and personalized service.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE A PRIVATE VILLA */}
            <section className="pvr-benefits-section">
                <div className="pvr-benefits-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Choose a Private Villa?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="pvr-benefits-lead-para">
                        Private villas offer a level of flexibility and exclusivity that traditional hotels simply cannot match.
                    </p>
                    <p className="pvr-benefits-subtext">
                        Benefits include:
                    </p>
                    <div className="pvr-benefits-grid">
                        {pvrVillaBenefits.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="pvr-benefit-card">
                                    <div className="pvr-benefit-icon-box">
                                        <IconComp size={22} />
                                    </div>
                                    <span className="pvr-benefit-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="pvr-benefits-closing-para">
                        Families, couples, and groups can relax together without sacrificing comfort or privacy.
                    </p>
                </div>
            </section>

            {/* EXCLUSIVE LUXURY RESORTS */}
            <section className="pvr-resorts-section">
                <div className="pvr-resorts-container">
                    <div className="pvr-resorts-image-block">
                        {/* <img src={exclusiveResortImg} alt="Exclusive luxury resort" className="pvr-resorts-image" /> */}
                        <div className="pvr-resorts-image-overlay"></div>
                        <div className="pvr-resorts-floating-badge">
                            <Star size={16} />
                            <span>Award-Winning Hospitality</span>
                        </div>
                    </div>
                    <div className="pvr-resorts-content-block">
                        <span className="pvr-resorts-eyebrow">WORLD-CLASS AMENITIES</span>
                        <h2 className="pvr-resorts-heading">Exclusive Luxury Resorts</h2>
                        <div className="pvr-resorts-separator"></div>
                        <p className="pvr-resorts-lead-para">
                            For travelers who appreciate world-class amenities alongside exceptional service, luxury resorts offer the best of both worlds.
                        </p>
                        <p className="pvr-resorts-subtext">
                            We partner with premier resorts that feature:
                        </p>
                        <ul className="pvr-resorts-list">
                            {pvrResortFeatures.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <li key={idx} className="pvr-resorts-list-item">
                                        <IconComp size={17} className="pvr-resorts-list-icon" />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="pvr-resorts-closing-para">
                            Every property is selected for its outstanding reputation and commitment to luxury hospitality.
                        </p>
                    </div>
                </div>
            </section>

            {/* LUXURY VILLA DESTINATIONS */}
            <section className="pvr-destinations-section">
                <div className="pvr-destinations-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="pvr-destinations-eyebrow">GLOBAL PROPERTY PORTFOLIO</span>
                        <h2 className="medi-section-heading">Luxury Villa Destinations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="pvr-destinations-lead-para">
                        We arrange luxury villa rentals in some of the world's most desirable destinations.
                    </p>
                    <p className="pvr-destinations-subtext">
                        Popular locations include:
                    </p>
                    <div className="pvr-destinations-gallery">
                        {pvrDestinations.map((dest, idx) => (
                            <div key={idx} className="pvr-destination-card">
                                {/* <img src={dest.img} alt={dest.name} className="pvr-destination-img" /> */}
                                <div className="pvr-destination-card-overlay"></div>
                                <div className="pvr-destination-card-label">
                                    <MapPin size={14} />
                                    <span>{dest.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="pvr-destinations-closing-para">
                        Whether you dream of a beachfront villa, a countryside estate, or a mountaintop retreat, we help you find the perfect setting.
                    </p>
                </div>
            </section>

            {/* FAMILY VILLA VACATIONS */}
            <section className="pvr-family-section">
                <div className="pvr-family-container">
                    <div className="pvr-family-content-block">
                        <span className="pvr-family-eyebrow">MULTIGENERATIONAL TRAVEL</span>
                        <h2 className="pvr-family-heading">Family Villa Vacations</h2>
                        <div className="pvr-family-separator"></div>
                        <p className="pvr-family-lead-para">
                            Private villas are ideal for multigenerational families traveling together.
                        </p>
                        <p className="pvr-family-subtext">
                            Features often include:
                        </p>
                        <div className="pvr-family-pills-grid">
                            {pvrFamilyFeatures.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="pvr-family-pill">
                                        <IconComp size={15} className="pvr-family-pill-icon" />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="pvr-family-closing-para">
                            Families enjoy quality time together while still having plenty of personal space.
                        </p>
                    </div>
                    <div className="pvr-family-image-block">
                        {/* <img src={familyVillaImg} alt="Family villa vacation" className="pvr-family-image" /> */}
                        <div className="pvr-family-image-overlay"></div>
                    </div>
                </div>
            </section>

            {/* PERSONALIZED CONCIERGE SERVICES */}
            <section className="pvr-concierge-section">
                <div className="pvr-concierge-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="pvr-concierge-eyebrow">SEAMLESS EXPERIENCES</span>
                        <h2 className="medi-section-heading">Personalized Concierge Services</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="pvr-concierge-lead-para">
                        Luxury accommodations become even more memorable with dedicated concierge support.
                    </p>
                    <p className="pvr-concierge-subtext">
                        Services may include:
                    </p>
                    <div className="pvr-concierge-grid">
                        {pvrConciergeServices.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="pvr-concierge-card">
                                    <div className="pvr-concierge-num">0{idx + 1}</div>
                                    <div className="pvr-concierge-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="pvr-concierge-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="pvr-concierge-closing-para">
                        Every detail is customized to create a seamless vacation experience.
                    </p>
                </div>
            </section>

            {/* WELLNESS & RELAXATION */}
            <section className="pvr-wellness-section">
                <div className="pvr-wellness-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Wellness & Relaxation</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered pvr-separator-light"></div>
                    </div>
                    <p className="pvr-wellness-lead-para">
                        Many travelers choose private villas and luxury resorts to focus on wellness and rejuvenation.
                    </p>
                    <p className="pvr-wellness-subtext">
                        Experiences may include:
                    </p>
                    <div className="pvr-wellness-gallery">
                        {pvrWellnessItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="pvr-wellness-card">
                                    {/* <img src={item.img} alt={item.text} className="pvr-wellness-img" /> */}
                                    <div className="pvr-wellness-card-overlay"></div>
                                    <div className="pvr-wellness-icon-badge">
                                        <IconComp size={16} />
                                    </div>
                                    <span className="pvr-wellness-label">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="pvr-wellness-closing-para">
                        Our advisors can recommend destinations that align with your wellness goals.
                    </p>
                </div>
            </section>

            {/* LUXURY CELEBRATIONS */}
            <section className="pvr-celebrations-section">
                <div className="pvr-celebrations-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="pvr-celebrations-eyebrow">MILESTONE MOMENTS</span>
                        <h2 className="medi-section-heading">Luxury Celebrations</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="pvr-celebrations-lead-para">
                        Private accommodations provide an unforgettable setting for life's biggest milestones.
                    </p>
                    <p className="pvr-celebrations-subtext">
                        Popular celebrations include:
                    </p>
                    <div className="pvr-celebrations-grid">
                        {pvrCelebrations.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="pvr-celebration-card">
                                    <div className="pvr-celebration-icon-box">
                                        <IconComp size={24} />
                                    </div>
                                    <span className="pvr-celebration-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="pvr-celebrations-closing-para">
                        Every celebration is thoughtfully planned with personalized experiences and concierge support.
                    </p>
                </div>
            </section>

            {/* PRIVACY & SECURITY */}
            <section className="pvr-privacy-section">
                <div className="pvr-privacy-container">
                    <div className="pvr-privacy-header-block">
                        <div className="pvr-privacy-icon-circle">
                            <ShieldCheck size={26} />
                        </div>
                        <h2 className="pvr-privacy-heading">Privacy & Security</h2>
                        <div className="pvr-privacy-separator"></div>
                        <p className="pvr-privacy-lead-para">
                            Discretion is essential for many of our clients.
                        </p>
                        <p className="pvr-privacy-subtext">
                            We prioritize:
                        </p>
                    </div>
                    <div className="pvr-privacy-list-wrap">
                        {pvrPrivacyItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="pvr-privacy-list-item">
                                    <IconComp size={18} className="pvr-privacy-list-icon" />
                                    <span>{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="pvr-privacy-closing-para">
                        Our team works closely with trusted luxury partners to ensure every journey is comfortable, secure, and completely private.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE TRIPS & SHIPS */}
            <section className="pvr-whychoose-section">
                <div className="pvr-whychoose-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="pvr-whychoose-lead-para">
                        Finding the perfect luxury villa or exclusive resort requires expertise and trusted relationships.
                    </p>
                    <p className="pvr-whychoose-subtext">
                        Clients choose us because we provide:
                    </p>
                    <div className="pvr-whychoose-grid">
                        {pvrWhyChooseItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="pvr-whychoose-card">
                                    <div className="pvr-whychoose-accent-bar"></div>
                                    <div className="pvr-whychoose-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="pvr-whychoose-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="pvr-whychoose-closing-para">
                        Whether you're looking for a private beachfront villa, a secluded mountain estate, or an award-winning luxury resort, we create accommodations that perfectly match your travel style.
                    </p>
                </div>
            </section>

            {/* EXPERT INSIGHT - ANGELA HUGHES */}
            <section id="private-villas-insight" className="medi-expert-editorial-section pvr-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Villa & Resort Advisor" /> */}
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
                                    Why Private Villas Continue <br className="medi-growth-title-break" />to Redefine Luxury Travel
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, sophisticated travelers increasingly prefer the privacy and personalization of a villa or exclusive resort over the anonymity of a standard hotel stay.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees travelers prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Complete privacy',
                                        'Personalized service',
                                        'Flexible schedules',
                                        'Family togetherness',
                                        'Seamless concierge support',
                                        'Exceptional properties'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers navigate the world's finest private villas and resorts with real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Private villa curation', icon: Home },
                                        { title: 'Exclusive resort partnerships', icon: Building2 },
                                        { title: 'Concierge-level planning', icon: Bell },
                                        { title: 'Family accommodations', icon: Users2 },
                                        { title: 'Premium global travel planning', icon: Sparkles }
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
                        {pvrFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => pvrToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {pvrActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {pvrActiveFaq === index && (
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
                        <h2 className="medi-cta-heading-white">Ready to Find Your Perfect Private Villa or Resort?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Whether you're looking for a private beachfront villa, a secluded mountain estate, or an award-winning luxury resort, Trips & Ships Luxury Travel will create accommodations that perfectly match your travel style.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "A private beachfront villa",
                                    "An exclusive luxury resort stay",
                                    "A multigenerational family villa",
                                    "A wellness-focused escape",
                                    "A milestone celebration retreat"
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
                                Request Property Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivateVillasExclusiveResorts