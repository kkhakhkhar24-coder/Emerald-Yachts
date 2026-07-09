import Navbar from '../../components/Navbar/Navbar'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'
import './Philanthropicpurposedriventravel.css'


// import hero1 from '../../assets/PhilanthropicPurposeDrivenTravel/hero1.jpg'
// import hero2 from '../../assets/PhilanthropicPurposeDrivenTravel/hero2.jpg'
// import hero3 from '../../assets/PhilanthropicPurposeDrivenTravel/hero3.jpg'

// import familyPhilanthropyImg from '../../assets/PhilanthropicPurposeDrivenTravel/family-philanthropy-travel.webp'
// import luxuryPurposeImg from '../../assets/PhilanthropicPurposeDrivenTravel/luxury-accommodations-with-purpose.webp'

// import consWildlifeResearch from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-wildlife-research.webp'
// import consMarine from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-marine-conservation.webp'
// import consSeaTurtle from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-sea-turtle-protection.webp'
// import consElephant from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-elephant-sanctuary.webp'
// import consRhino from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-rhino-conservation.webp'
// import consGorilla from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-gorilla-conservation.webp'
// import consNationalPark from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-national-park-initiative.webp'
// import consHabitat from '../../assets/PhilanthropicPurposeDrivenTravel/conservation-habitat-restoration.webp'

// import eduSchoolVisits from '../../assets/PhilanthropicPurposeDrivenTravel/education-school-visits.webp'
// import eduPartnerships from '../../assets/PhilanthropicPurposeDrivenTravel/education-educational-partnerships.webp'
// import eduWorkshops from '../../assets/PhilanthropicPurposeDrivenTravel/education-cultural-workshops.webp'
// import eduArtisan from '../../assets/PhilanthropicPurposeDrivenTravel/education-local-artisan-programs.webp'
// import eduLanguage from '../../assets/PhilanthropicPurposeDrivenTravel/education-language-experiences.webp'
// import eduHistorical from '../../assets/PhilanthropicPurposeDrivenTravel/education-historical-tours.webp'
// import eduCommunity from '../../assets/PhilanthropicPurposeDrivenTravel/education-community-development.webp'
// import eduIndigenous from '../../assets/PhilanthropicPurposeDrivenTravel/education-indigenous-cultural-exchange.webp'

// import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Heart, Leaf, Users, Sparkles, GraduationCap, HandHeart, Compass, Award,
    Handshake, Globe2, BookOpen, TrendingUp, Repeat, Users2, Landmark,
    Fish, Waves, Rabbit, PawPrint, Bird, Trees, Mountain, Sprout,
    School, Building2, Palette, Hammer, Languages, ScrollText,
    Stethoscope, Droplet, Wheat, UserCheck, Baby, LifeBuoy,
    Home, Star, Tent, Ship, Building, ShieldCheck,
    Recycle, ThermometerSun, PawPrint as PawIcon, Scale, Package, Landmark as LandmarkIcon,
    MapPin, UserCog, Plane, Calendar, CheckCircle, Clock,
    Crown, KeyRound, Route, Phone, LayoutList
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function PhilanthropicPurposeDrivenTravel() {
    const [ppdCurrentHero, setPpdCurrentHero] = useState(0)
    const ppdHeroImages = []

    useEffect(() => {
        const ppdTimer = setInterval(() => {
            setPpdCurrentHero((prev) => (prev + 1) % ppdHeroImages.length)
        }, 5000)
        return () => clearInterval(ppdTimer)
    }, [ppdHeroImages.length])

    const [ppdActiveFaq, setPpdActiveFaq] = useState(null)
    const ppdToggleFaq = (index) => {
        setPpdActiveFaq(ppdActiveFaq === index ? null : index)
    }

    const ppdWhyItems = [
        { text: 'Support wildlife conservation', icon: Leaf },
        { text: 'Give back to local communities', icon: HandHeart },
        { text: 'Experience authentic cultures', icon: Globe2 },
        { text: 'Strengthen family values', icon: Heart },
        { text: 'Teach children global citizenship', icon: GraduationCap },
        { text: 'Participate in meaningful projects', icon: Handshake },
        { text: 'Travel responsibly', icon: Compass },
        { text: 'Leave a positive legacy', icon: Sparkles }
    ]

    const ppdFamilyItems = [
        { text: 'Volunteer together', icon: Handshake },
        { text: 'Learn about global cultures', icon: Globe2 },
        { text: 'Support educational initiatives', icon: BookOpen },
        { text: 'Participate in conservation efforts', icon: Leaf },
        { text: 'Strengthen family values', icon: Heart },
        { text: 'Inspire future generations', icon: TrendingUp },
        { text: 'Build shared experiences', icon: Users2 },
        { text: 'Create lasting family traditions', icon: Repeat }
    ]

    const ppdConservationItems = [
        // { text: 'Wildlife research programs', img: consWildlifeResearch, icon: PawPrint },
        // { text: 'Marine conservation', img: consMarine, icon: Waves },
        // { text: 'Sea turtle protection', img: consSeaTurtle, icon: Fish },
        // { text: 'Elephant sanctuaries', img: consElephant, icon: PawIcon },
        // { text: 'Rhino conservation', img: consRhino, icon: Rabbit },
        // { text: 'Gorilla conservation', img: consGorilla, icon: Trees },
        // { text: 'National park initiatives', img: consNationalPark, icon: Mountain },
        // { text: 'Habitat restoration', img: consHabitat, icon: Sprout }
    ]

    const ppdEducationItems = [
        // { text: 'School visits', img: eduSchoolVisits, icon: School },
        // { text: 'Educational partnerships', img: eduPartnerships, icon: Building2 },
        // { text: 'Cultural workshops', img: eduWorkshops, icon: Palette },
        // { text: 'Local artisan programs', img: eduArtisan, icon: Hammer },
        // { text: 'Language experiences', img: eduLanguage, icon: Languages },
        // { text: 'Historical tours', img: eduHistorical, icon: ScrollText },
        // { text: 'Community development projects', img: eduCommunity, icon: Home },
        // { text: 'Indigenous cultural exchanges', img: eduIndigenous, icon: Users }
    ]

    const ppdHumanitarianItems = [
        { text: 'Healthcare', icon: Stethoscope },
        { text: 'Education', icon: GraduationCap },
        { text: 'Clean water initiatives', icon: Droplet },
        { text: 'Community development', icon: Landmark },
        { text: 'Food security', icon: Wheat },
        { text: "Women's empowerment", icon: UserCheck },
        { text: 'Youth programs', icon: Baby },
        { text: 'Disaster recovery support', icon: LifeBuoy }
    ]

    const ppdAccommodationItems = [
        { text: 'Eco-luxury lodges', icon: Trees },
        { text: 'Sustainable resorts', icon: Recycle },
        { text: 'Boutique luxury hotels', icon: Building },
        { text: 'Conservation camps', icon: Tent },
        { text: 'Luxury safari lodges', icon: Home },
        { text: 'Expedition cruise lines', icon: Ship },
        { text: 'Private villas', icon: Star },
        { text: 'Environmentally responsible resorts', icon: Leaf }
    ]

    const ppdSustainableItems = [
        { text: 'Environmental stewardship', icon: Leaf },
        { text: 'Carbon reduction initiatives', icon: ThermometerSun },
        { text: 'Wildlife protection', icon: ShieldCheck },
        { text: 'Ethical tourism', icon: Scale },
        { text: 'Community partnerships', icon: Handshake },
        { text: 'Responsible sourcing', icon: Package },
        { text: 'Cultural preservation', icon: LandmarkIcon },
        { text: 'Sustainable hospitality', icon: Recycle }
    ]

    const ppdConciergeItems = [
        { text: 'Destination planning', icon: MapPin },
        { text: 'Private guides', icon: UserCog },
        { text: 'Conservation experiences', icon: Leaf },
        { text: 'Luxury accommodations', icon: Home },
        { text: 'Private aviation', icon: Plane },
        { text: 'VIP airport services', icon: Star },
        { text: 'Customized itineraries', icon: Route },
        { text: 'Educational experiences', icon: GraduationCap },
        { text: 'Family-focused planning', icon: Users2 },
        { text: '24/7 travel support', icon: Clock }
    ]

    const ppdWhyChooseItems = [
        { text: 'Personalized itinerary design', icon: Route },
        { text: 'Trusted conservation partners', icon: Handshake },
        { text: 'Luxury travel expertise', icon: Crown },
        { text: 'Concierge-level service', icon: Star },
        { text: 'Sustainable travel recommendations', icon: Recycle },
        { text: 'Family philanthropy planning', icon: HandHeart },
        { text: 'Global destination knowledge', icon: Globe2 },
        { text: 'Exceptional travel experiences', icon: Award }
    ]

    const ppdFaqs = [
        { question: 'What is philanthropic travel?', answer: 'Philanthropic travel combines luxury vacations with opportunities to support charitable organizations, conservation projects, education, and local communities.' },
        { question: 'What is purpose-driven travel?', answer: 'Purpose-driven travel focuses on meaningful experiences that positively impact destinations, communities, and the environment while providing exceptional travel experiences.' },
        { question: 'Can families participate in volunteer travel?', answer: 'Yes. Many volunteer and conservation programs are designed specifically for families and multigenerational travelers.' },
        { question: 'What conservation projects are available?', answer: 'Projects include wildlife conservation, marine protection, habitat restoration, elephant sanctuaries, sea turtle conservation, and national park initiatives.' },
        { question: 'Do I need previous volunteer experience?', answer: 'No. Most programs welcome travelers of all experience levels and provide appropriate guidance.' },
        { question: 'Is purpose-driven travel suitable for children?', answer: 'Yes. Many family-friendly experiences help children learn about conservation, sustainability, and global citizenship.' },
        { question: 'Can luxury accommodations still be included?', answer: 'Absolutely. We combine meaningful travel experiences with luxury hotels, safari lodges, expedition cruises, and private villas.' },
        { question: 'Do you work with trusted nonprofit organizations?', answer: 'Yes. We partner with reputable organizations committed to conservation, education, humanitarian work, and sustainable tourism.' },
        { question: 'Can philanthropic travel be customized?', answer: 'Yes. Every itinerary is tailored to your charitable interests, preferred destinations, and travel style.' },
        { question: 'Can private jet travel be included?', answer: 'Yes. Private aviation, VIP airport services, luxury transfers, and concierge support can all be arranged.' },
        { question: 'How far in advance should I plan a purpose-driven journey?', answer: 'Booking 6 to 12 months in advance is recommended for the best availability and customized experiences.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel provides expert planning, trusted conservation partnerships, concierge-level service, and personalized luxury journeys that create meaningful impact.' }
    ]

    const ppdSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel",
                "name": "Philanthropic & Purpose-Driven Travel",
                "url": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel",
                "description": "Luxury philanthropic travel experiences featuring conservation, volunteer travel, family philanthropy, humanitarian projects, and purpose-driven luxury vacations.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel#article"
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
                "description": "Luxury travel agency specializing in philanthropic travel, conservation safaris, volunteer luxury travel, expedition cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel#article",
                "headline": "Philanthropic & Purpose-Driven Travel",
                "url": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel",
                "description": "Expert guide to luxury philanthropic travel including conservation experiences, volunteer opportunities, humanitarian travel, sustainable tourism, and family philanthropy.",
                "image": "https://www.tripsshipsluxurytravel.com/images/philanthropic-purpose-driven-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Philanthropic & Purpose-Driven Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Philanthropic Travel Consulting",
                "description": "Expert planning services for conservation travel, volunteer luxury vacations, family philanthropy experiences, humanitarian travel, and purpose-driven luxury journeys."
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
                        "name": "Philanthropic & Purpose-Driven Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/philanthropic-purpose-driven-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is philanthropic travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Philanthropic travel combines luxury vacations with opportunities to support charitable organizations, conservation projects, education, and local communities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is purpose-driven travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Purpose-driven travel focuses on meaningful experiences that positively impact destinations, communities, and the environment while providing exceptional travel experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can families participate in volunteer travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many volunteer and conservation programs are designed specifically for families and multigenerational travelers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What conservation projects are available?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Projects include wildlife conservation, marine protection, habitat restoration, elephant sanctuaries, sea turtle conservation, and national park initiatives."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need previous volunteer experience?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Most programs welcome travelers of all experience levels and provide appropriate guidance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is purpose-driven travel suitable for children?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many family-friendly experiences help children learn about conservation, sustainability, and global citizenship."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can luxury accommodations still be included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We combine meaningful travel experiences with luxury hotels, safari lodges, expedition cruises, and private villas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you work with trusted nonprofit organizations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We partner with reputable organizations committed to conservation, education, humanitarian work, and sustainable tourism."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can philanthropic travel be customized?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Every itinerary is tailored to your charitable interests, preferred destinations, and travel style."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can private jet travel be included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private aviation, VIP airport services, luxury transfers, and concierge support can all be arranged."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How far in advance should I plan a purpose-driven journey?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking 6 to 12 months in advance is recommended for the best availability and customized experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert planning, trusted conservation partnerships, concierge-level service, and personalized luxury journeys that create meaningful impact."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Philanthropic & Purpose-Driven Travel | Luxury Volunteer & Conservation Travel</title>
                <meta
                    name="title"
                    content="Philanthropic Travel | Purpose-Driven Luxury Travel Experiences"
                />
                <meta
                    name="description"
                    content="Discover luxury philanthropic travel experiences that combine meaningful giving with extraordinary vacations. Explore conservation safaris, humanitarian travel, volunteer luxury travel, family philanthropy, and purpose-driven journeys with Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Philanthropic travel, Purpose-driven travel, Volunteer luxury travel, Family philanthropy, Luxury conservation travel, Humanitarian travel, Sustainable luxury travel, Educational travel experiences, Wildlife conservation travel, Giving back through travel" />
                <script type="application/ld+json">
                    {JSON.stringify(ppdSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="medi-hero-section">
                {ppdHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${ppdCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Leaf size={16} />
                        <span>Travel That Creates Lasting Impact</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Philanthropic & Purpose-Driven Travel
                    </h1>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="ppd-intro-section">
                <div className="ppd-intro-leaf-one"></div>
                <div className="ppd-intro-leaf-two"></div>
                <div className="ppd-intro-container">
                    <p className="ppd-intro-lead-para">
                        The most meaningful journeys don't just change where you go—they change how you see the world.
                    </p>
                    <p className="ppd-intro-body-para">
                        At Trips & Ships Luxury Travel, we create luxury travel experiences that combine exceptional accommodations with opportunities to support conservation, education, humanitarian initiatives, and local communities.
                    </p>
                    <div className="ppd-intro-highlight-box">
                        <Sparkles size={22} className="ppd-intro-highlight-icon" />
                        <p className="ppd-intro-highlight-text">
                            Whether you're traveling as an individual, couple, family, family office, or philanthropic organization, we help design purposeful journeys that leave a positive impact while creating unforgettable memories.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE PURPOSE-DRIVEN TRAVEL */}
            <section className="ppd-why-section">
                <div className="ppd-why-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Choose Purpose-Driven Travel?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="ppd-why-lead-para">
                        Luxury travel can be more than relaxation—it can inspire connection, education, and meaningful change.
                    </p>
                    <p className="ppd-why-subtext">
                        Purpose-driven travel allows travelers to:
                    </p>
                    <div className="ppd-why-grid">
                        {ppdWhyItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="ppd-why-card">
                                    <div className="ppd-why-icon-box">
                                        <IconComp size={22} />
                                    </div>
                                    <span className="ppd-why-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-why-closing-para">
                        Every journey is thoughtfully designed to balance luxury, comfort, and meaningful experiences.
                    </p>
                </div>
            </section>

            {/* FAMILY PHILANTHROPY THROUGH TRAVEL */}
            <section className="ppd-family-section">
                <div className="ppd-family-container">
                    <div className="ppd-family-image-block">
                        {/* <img src={familyPhilanthropyImg} alt="Family philanthropy through travel" className="ppd-family-image" /> */}
                        <div className="ppd-family-image-overlay"></div>
                    </div>
                    <div className="ppd-family-content-block">
                        <span className="ppd-family-eyebrow">GIVING BACK TOGETHER</span>
                        <h2 className="ppd-family-heading">Family Philanthropy Through Travel</h2>
                        <div className="ppd-family-separator"></div>
                        <p className="ppd-family-lead-para">
                            Many successful families want their children and grandchildren to understand the importance of giving back.
                        </p>
                        <p className="ppd-family-subtext">
                            Purpose-driven travel creates opportunities to:
                        </p>
                        <ul className="ppd-family-list">
                            {ppdFamilyItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <li key={idx} className="ppd-family-list-item">
                                        <IconComp size={17} className="ppd-family-list-icon" />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="ppd-family-closing-para">
                            Travel becomes an investment in both personal growth and family legacy.
                        </p>
                    </div>
                </div>
            </section>

            {/* WILDLIFE & CONSERVATION EXPERIENCES */}
            <section className="ppd-conservation-section">
                <div className="ppd-conservation-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppd-conservation-eyebrow">RESPONSIBLE TOURISM</span>
                        <h2 className="medi-section-heading">Wildlife & Conservation Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="ppd-conservation-lead-para">
                        Many of the world's most extraordinary destinations depend on responsible tourism.
                    </p>
                    <p className="ppd-conservation-subtext">
                        Travelers may participate in conservation experiences such as:
                    </p>
                    <div className="ppd-conservation-gallery">
                        {ppdConservationItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className={`ppd-conservation-card ppd-cons-card-${idx + 1}`}>
                                    {/* <img src={item.img} alt={item.text} className="ppd-conservation-img" /> */}
                                    <div className="ppd-conservation-card-overlay"></div>
                                    <div className="ppd-conservation-icon-badge">
                                        <IconComp size={16} />
                                    </div>
                                    <span className="ppd-conservation-label">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-conservation-closing-para">
                        These experiences offer unique access while supporting organizations dedicated to protecting wildlife.
                    </p>
                </div>
            </section>

            {/* EDUCATION & CULTURAL EXCHANGE */}
            <section className="ppd-education-section">
                <div className="ppd-education-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppd-education-eyebrow">DEEPER CONNECTIONS</span>
                        <h2 className="medi-section-heading">Education & Cultural Exchange</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="ppd-education-lead-para">
                        Meaningful travel often begins with understanding local cultures.
                    </p>
                    <p className="ppd-education-subtext">
                        Experiences may include:
                    </p>
                    <div className="ppd-education-masonry">
                        {ppdEducationItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="ppd-education-tile">
                                    {/* <img src={item.img} alt={item.text} className="ppd-education-img" /> */}
                                    <div className="ppd-education-tile-overlay"></div>
                                    <div className="ppd-education-tile-content">
                                        <div className="ppd-education-tile-icon">
                                            <IconComp size={16} />
                                        </div>
                                        <span className="ppd-education-tile-label">{item.text}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-education-closing-para">
                        These encounters create deeper connections with the destinations you visit.
                    </p>
                </div>
            </section>

            {/* HUMANITARIAN & COMMUNITY PROJECTS */}
            <section className="ppd-humanitarian-section">
                <div className="ppd-humanitarian-container">
                    <div className="ppd-humanitarian-header-block">
                        <div className="ppd-humanitarian-icon-circle">
                            <HandHeart size={26} />
                        </div>
                        <h2 className="ppd-humanitarian-heading">Humanitarian & Community Projects</h2>
                        <div className="ppd-humanitarian-separator"></div>
                        <p className="ppd-humanitarian-lead-para">
                            For travelers seeking to make a direct impact, we can arrange opportunities to support trusted organizations working in:
                        </p>
                    </div>
                    <div className="ppd-humanitarian-list-wrap">
                        {ppdHumanitarianItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="ppd-humanitarian-list-item">
                                    <IconComp size={18} className="ppd-humanitarian-list-icon" />
                                    <span>{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-humanitarian-closing-para">
                        Every project is carefully selected to ensure responsible, sustainable community engagement.
                    </p>
                </div>
            </section>

            {/* LUXURY ACCOMMODATIONS WITH PURPOSE */}
            <section className="ppd-accommodations-section">
                <div className="ppd-accommodations-container">
                    <div className="ppd-accommodations-content-block">
                        <span className="ppd-accommodations-eyebrow">COMFORT WITH CONSCIENCE</span>
                        <h2 className="ppd-accommodations-heading">Luxury Accommodations with Purpose</h2>
                        <div className="ppd-accommodations-separator"></div>
                        <p className="ppd-accommodations-lead-para">
                            Giving back doesn't mean sacrificing comfort.
                        </p>
                        <p className="ppd-accommodations-subtext">
                            We partner with:
                        </p>
                        <div className="ppd-accommodations-pills-grid">
                            {ppdAccommodationItems.map((item, idx) => {
                                const IconComp = item.icon
                                return (
                                    <div key={idx} className="ppd-accommodations-pill">
                                        <IconComp size={15} className="ppd-accommodations-pill-icon" />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ppd-accommodations-closing-para">
                            Many of these properties actively support conservation and community initiatives.
                        </p>
                    </div>
                    <div className="ppd-accommodations-image-block">
                        {/* <img src={luxuryPurposeImg} alt="Luxury accommodations with purpose" className="ppd-accommodations-image" /> */}
                        <div className="ppd-accommodations-image-overlay"></div>
                        <div className="ppd-accommodations-badge">
                            <Leaf size={18} />
                            <span>Conservation-Minded Stays</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUSTAINABLE LUXURY TRAVEL */}
            <section className="ppd-sustainable-section">
                <div className="ppd-sustainable-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Sustainable Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="ppd-sustainable-lead-para">
                        Responsible travel is an important part of modern luxury.
                    </p>
                    <p className="ppd-sustainable-subtext">
                        We work with partners committed to:
                    </p>
                    <div className="ppd-sustainable-grid">
                        {ppdSustainableItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="ppd-sustainable-card">
                                    <div className="ppd-sustainable-icon-box">
                                        <IconComp size={22} />
                                    </div>
                                    <span className="ppd-sustainable-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-sustainable-closing-para">
                        These partnerships help ensure tourism positively benefits both travelers and destinations.
                    </p>
                </div>
            </section>

            {/* CONCIERGE PLANNING FOR PURPOSEFUL JOURNEYS */}
            <section className="ppd-concierge-section">
                <div className="ppd-concierge-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppd-concierge-eyebrow">DETAIL-DRIVEN COORDINATION</span>
                        <h2 className="medi-section-heading" style={{ color: '#ffffff' }}>Concierge Planning for Purposeful Journeys</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered ppd-separator-light"></div>
                    </div>
                    <p className="ppd-concierge-lead-para">
                        Every itinerary is carefully personalized.
                    </p>
                    <p className="ppd-concierge-subtext">
                        Our services include:
                    </p>
                    <div className="ppd-concierge-grid">
                        {ppdConciergeItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="ppd-concierge-card">
                                    <div className="ppd-concierge-num">0{idx + 1}</div>
                                    <div className="ppd-concierge-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="ppd-concierge-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-concierge-closing-para">
                        We coordinate every detail while ensuring your journey reflects your personal values and interests.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE TRIPS & SHIPS */}
            <section className="ppd-whychoose-section">
                <div className="ppd-whychoose-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <p className="ppd-whychoose-lead-para">
                        Purpose-driven travel requires trusted relationships, careful planning, and a deep understanding of responsible tourism.
                    </p>
                    <p className="ppd-whychoose-subtext">
                        Clients choose us because we provide:
                    </p>
                    <div className="ppd-whychoose-grid">
                        {ppdWhyChooseItems.map((item, idx) => {
                            const IconComp = item.icon
                            return (
                                <div key={idx} className="ppd-whychoose-card">
                                    <div className="ppd-whychoose-accent-bar"></div>
                                    <div className="ppd-whychoose-icon-box">
                                        <IconComp size={20} />
                                    </div>
                                    <span className="ppd-whychoose-card-text">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p className="ppd-whychoose-closing-para">
                        Whether your goal is supporting conservation, inspiring future generations, or making a positive impact, we'll create a luxury journey with lasting meaning.
                    </p>
                </div>
            </section>

            {/* EXPERT INSIGHT - ANGELA HUGHES */}
            <section id="philanthropic-travel-insight" className="medi-expert-editorial-section ppd-editorial-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Philanthropic Travel Advisor" /> */}
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
                                    Why Purpose-Driven Travel Is Reshaping <br className="medi-growth-title-break" />How Families Give Back
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                According to Angela Hughes, travelers increasingly want their journeys to reflect their values, combining exceptional luxury with genuine, lasting impact.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees travelers prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Meaningful conservation impact',
                                        'Authentic cultural connection',
                                        'Family-centered giving',
                                        'Trusted local partners',
                                        'Responsible luxury',
                                        'Lasting personal legacy'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers design philanthropic journeys with real-world expertise rather than generic volunteer packages.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Conservation travel planning', icon: Leaf },
                                        { title: 'Family philanthropy design', icon: HandHeart },
                                        { title: 'Sustainable luxury partnerships', icon: Recycle },
                                        { title: 'Humanitarian travel logistics', icon: Handshake },
                                        { title: 'Purpose-driven itineraries', icon: Sparkles }
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
                        {ppdFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => ppdToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {ppdActiveFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {ppdActiveFaq === index && (
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
                        <h2 className="medi-cta-heading-white">Ready to Plan a Journey with Lasting Meaning?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Whether your goal is supporting conservation, inspiring future generations, or making a positive impact, Trips & Ships Luxury Travel will create a luxury journey with lasting meaning.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "A wildlife conservation expedition",
                                    "A family philanthropy journey",
                                    "A humanitarian community project",
                                    "An educational cultural exchange",
                                    "A sustainable luxury escape"
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
                                Request Journey Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PhilanthropicPurposeDrivenTravel