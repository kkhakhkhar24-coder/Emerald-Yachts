import Navbar from '../../components/Navbar/Navbar'
import './Internationalfamilyadventures.css'
import {
    Heart, Users, Globe, Calendar, Sparkles, Gift,
    Compass, Home, Star, CheckCircle, Phone, LayoutList,
    Plane, Ship, Sun, Crown, Award, MapPin, Clock,
    Landmark, UtensilsCrossed, Footprints, Palette, Music,
    Languages, PartyPopper, PawPrint, ChefHat, Sailboat,
    GraduationCap, BookOpen, Mountain, Waves, Car, ShieldCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// Import SEO images
import heroTuscanImg from '../../assets/seo_images/multigenerational-family-walking-through-tuscan-village-luxury-italy-vacation.webp'
import heroSafariImg from '../../assets/seo_images/luxury-african-safari-family-wildlife-experience-elephant-viewing-private-game-drive.webp'
import heroRomeImg from '../../assets/seo_images/multigenerational-family-vacation-rome-colosseum-luxury-italy-travel.webp'
import introFamilyImg from '../../assets/seo_images/multigenerational-family-walking-tour-luxury-european-village-vacation.webp'
import cultureMuseumImg from '../../assets/seo_images/private-guided-cultural-tour-luxury-small-group-historic-city-experience.webp'
import cultureCulinaryImg from '../../assets/seo_images/luxury-family-dining-private-oceanfront-villa-multigenerational-travel-experience.webp'
import cultureWorkshopImg from '../../assets/seo_images/luxury-multigenerational-family-dinner-seaside-private-villa-mediterranean-vacation.webp'
import cultureLandscapeImg from '../../assets/seo_images/douro-valley-portugal-vineyards-river-scenic-wine-country-cruise.webp'
import accomHotelImg from '../../assets/seo_images/private-luxury-ocean-view-villa-infinity-pool-exclusive-family-vacation.webp'
import accomVillaImg from '../../assets/seo_images/private-luxury-tropical-villa-exclusive-high-end-vacation-retreat.webp'
import accomSafariImg from '../../assets/seo_images/luxury-african-safari-lodge-elephant-watering-hole-wildlife-view-family-travel.webp'
import accomResortImg from '../../assets/seo_images/luxury-resort-personalized-concierge-vip-hotel-check-in-experience.webp'
import showcaseFamilyImg from '../../assets/seo_images/luxury-family-celebration-private-villa-cocktail-gathering-mediterranean-coast.webp'
import { Link } from 'react-router'

function InternationalFamilyAdventures() {

    /* Hero rotating background images */
    const ifadHeroImages = [
        { url: heroTuscanImg, position: 'center' },
        { url: heroSafariImg, position: 'center' },
        { url: heroRomeImg, position: 'center' }
    ]
    const [ifadCurrentHero, setIfadCurrentHero] = useState(0)
    useEffect(() => {
        const ifadTimer = setInterval(() => {
            setIfadCurrentHero((prev) => (prev + 1) % ifadHeroImages.length)
        }, 5000)
        return () => clearInterval(ifadTimer)
    }, [ifadHeroImages.length])

    const [ifadActiveFaq, setIfadActiveFaq] = useState(null)
    const ifadToggleFaq = (index) => {
        setIfadActiveFaq(ifadActiveFaq === index ? null : index)
    }

    /* Why choose international family travel */
    const ifadWhyTravel = [
        { text: 'Meaningful cultural experiences', icon: Globe },
        { text: 'Educational opportunities', icon: BookOpen },
        { text: 'Family bonding', icon: Heart },
        { text: 'Personalized itineraries', icon: LayoutList },
        { text: 'Luxury accommodations', icon: Home },
        { text: 'Private guides', icon: Users },
        { text: 'Exclusive experiences', icon: Sparkles },
        { text: 'Stress-free planning', icon: CheckCircle }
    ]

    /* Around-the-world popular combinations */
    const ifadCombinations = [
        { name: 'Europe & Africa', img: 'https://placehold.co/700x520?text=Europe+%26+Africa' },
        { name: 'Australia & New Zealand', img: 'https://placehold.co/700x520?text=Australia+%26+New+Zealand' },
        { name: 'Japan & Southeast Asia', img: 'https://placehold.co/700x520?text=Japan+%26+Southeast+Asia' },
        { name: 'South America & Antarctica', img: 'https://placehold.co/700x520?text=South+America+%26+Antarctica' },
        { name: 'Mediterranean & Middle East', img: 'https://placehold.co/700x520?text=Mediterranean+%26+Middle+East' },
        { name: 'Alaska & Canada', img: 'https://placehold.co/700x520?text=Alaska+%26+Canada' }
    ]

    /* Luxury cultural experiences */
    const ifadCulturalExperiences = [
        { text: 'Private museum tours', icon: Landmark },
        { text: 'Local culinary experiences', icon: UtensilsCrossed },
        { text: 'Historical walking tours', icon: Footprints },
        { text: 'Artisan workshops', icon: Palette },
        { text: 'Cultural performances', icon: Music },
        { text: 'Language immersion', icon: Languages },
        { text: 'Local festivals', icon: PartyPopper },
        { text: 'UNESCO World Heritage Sites', icon: Award }
    ]

    const ifadCulturalImages = [
        cultureMuseumImg,
        cultureCulinaryImg,
        cultureWorkshopImg,
        cultureLandscapeImg
    ]

    /* Extraordinary destinations */
    const ifadDestinations = [
        { name: 'Europe', icon: Landmark, img: 'https://placehold.co/300x300?text=Europe' },
        { name: 'Africa', icon: Sun, img: 'https://placehold.co/300x300?text=Africa' },
        { name: 'Asia', icon: Mountain, img: 'https://placehold.co/300x300?text=Asia' },
        { name: 'Australia', icon: Compass, img: 'https://placehold.co/300x300?text=Australia' },
        { name: 'New Zealand', icon: Waves, img: 'https://placehold.co/300x300?text=New+Zealand' },
        { name: 'Antarctica', icon: Ship, img: 'https://placehold.co/300x300?text=Antarctica' },
        { name: 'Arctic', icon: Compass, img: 'https://placehold.co/300x300?text=Arctic' },
        { name: 'South America', icon: Globe, img: 'https://placehold.co/300x300?text=South+America' },
        { name: 'Middle East', icon: MapPin, img: 'https://placehold.co/300x300?text=Middle+East' },
        { name: 'Gal\u00e1pagos Islands', icon: PawPrint, img: 'https://placehold.co/300x300?text=Galapagos+Islands' }
    ]

    /* Luxury accommodations */
    const ifadAccommodations = [
        'Luxury hotels', 'Boutique properties', 'Private villas', 'Safari lodges',
        'Luxury cruises', 'River cruises', 'Yacht charters', 'Exclusive resorts'
    ]

    const ifadAccommodationImages = [
        accomHotelImg,
        accomVillaImg,
        accomSafariImg,
        accomResortImg
    ]

    /* Personalized family experiences */
    const ifadFamilyExperiences = [
        { text: 'Wildlife encounters', icon: PawPrint },
        { text: 'Cooking classes', icon: ChefHat },
        { text: 'Private yacht charters', icon: Sailboat },
        { text: 'Helicopter sightseeing', icon: Plane },
        { text: 'Adventure excursions', icon: Compass },
        { text: 'Wellness experiences', icon: Sparkles },
        { text: 'Family celebrations', icon: Gift },
        { text: 'Educational activities', icon: GraduationCap }
    ]

    /* Concierge travel planning services */
    const ifadConciergeServices = [
        'Destination recommendations', 'International flights', 'Private aviation', 'Luxury accommodations',
        'Private transportation', 'Visa guidance', 'Travel insurance recommendations', 'VIP airport services',
        'Restaurant reservations', '24/7 travel support'
    ]

    /* Why choose Trips & Ships */
    const ifadWhyChooseUs = [
        { title: 'Personalized itineraries', icon: LayoutList },
        { title: 'Worldwide destination expertise', icon: Globe },
        { title: 'Luxury travel partnerships', icon: Award },
        { title: 'Concierge-level service', icon: Star },
        { title: 'Multigenerational travel planning', icon: Users },
        { title: 'Exclusive experiences', icon: Sparkles },
        { title: 'Private travel arrangements', icon: Car },
        { title: 'Ongoing travel support', icon: Phone }
    ]

    /* FAQs */
    const ifadFaqs = [
        { question: 'What is an international family adventure?', answer: 'An international family adventure is a customized luxury vacation designed to explore multiple countries or regions while creating meaningful experiences for every family member.' },
        { question: 'Can itineraries be customized?', answer: 'Yes. Every itinerary is completely personalized based on your family\u2019s interests, schedule, and travel style.' },
        { question: 'Are international trips suitable for young children?', answer: 'Absolutely. We design age-appropriate experiences and family-friendly itineraries for travelers of all ages.' },
        { question: 'Can grandparents travel too?', answer: 'Yes. We specialize in multigenerational vacations that accommodate grandparents, parents, children, and grandchildren.' },
        { question: 'Do you arrange private guides?', answer: 'Yes. Private guides, interpreters, and destination experts can be arranged worldwide.' },
        { question: 'Can private jet travel be included?', answer: 'Yes. We coordinate private aviation, VIP airport services, luxury transfers, and concierge travel support.' },
        { question: 'What destinations are most popular?', answer: 'Europe, Africa, Japan, Australia, New Zealand, Antarctica, Alaska, the Gal\u00e1pagos Islands, and the Mediterranean are among our most requested destinations.' },
        { question: 'Can cruises be part of the itinerary?', answer: 'Absolutely. Luxury ocean cruises, river cruises, expedition cruises, and yacht charters can all be incorporated into your journey.' },
        { question: 'How far in advance should international travel be planned?', answer: 'We recommend planning 9 to 18 months in advance, particularly for peak travel seasons and exclusive accommodations.' },
        { question: 'Do you assist with visas and travel requirements?', answer: 'Yes. We provide guidance on passports, visas, and destination-specific travel requirements.' },
        { question: 'Are luxury accommodations included?', answer: 'Yes. We arrange premium hotels, villas, resorts, safari lodges, and luxury cruise accommodations tailored to your preferences.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel creates seamless international journeys with personalized planning, luxury accommodations, trusted global partners, concierge-level service, and unforgettable experiences for families.' }
    ]

    const ifadSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/international-family-adventures",
                "name": "International Family Adventures",
                "url": "https://www.tripsshipsluxurytravel.com/international-family-adventures",
                "description": "Luxury international family travel featuring around-the-world vacations, cultural experiences, private guides, luxury accommodations, and personalized travel planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsshipsluxurytravel.com/international-family-adventures#article" }
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
                "description": "Luxury travel agency specializing in international family vacations, luxury cruises, safaris, expedition travel, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/international-family-adventures#article",
                "headline": "International Family Adventures",
                "url": "https://www.tripsshipsluxurytravel.com/international-family-adventures",
                "description": "Expert guide to luxury international family travel including around-the-world vacations, cultural experiences, luxury accommodations, private guides, and concierge travel planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/international-family-adventures.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/international-family-adventures" }
            },
            {
                "@type": "Service",
                "name": "International Family Travel Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury International Travel Consulting",
                "description": "Expert planning services for international family vacations, around-the-world itineraries, cultural journeys, luxury accommodations, and concierge travel experiences."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Family Travel", "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel" },
                    { "@type": "ListItem", "position": 3, "name": "International Family Adventures", "item": "https://www.tripsshipsluxurytravel.com/international-family-adventures" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is an international family adventure?", "acceptedAnswer": { "@type": "Answer", "text": "An international family adventure is a customized luxury vacation that combines multiple destinations, cultural experiences, and personalized activities for families." } },
                    { "@type": "Question", "name": "Can itineraries be customized?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every itinerary is tailored to your family's interests, travel goals, and preferred pace." } },
                    { "@type": "Question", "name": "Are international trips suitable for young children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Family-friendly itineraries are designed for travelers of all ages, including young children." } },
                    { "@type": "Question", "name": "Can grandparents join the trip?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in multigenerational travel for grandparents, parents, children, and grandchildren." } },
                    { "@type": "Question", "name": "Do you arrange private guides?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private guides and destination experts can be arranged around the world." } },
                    { "@type": "Question", "name": "Can private jet travel be included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private aviation and VIP airport services can be integrated into your itinerary." } },
                    { "@type": "Question", "name": "What destinations are most popular?", "acceptedAnswer": { "@type": "Answer", "text": "Europe, Africa, Japan, Australia, Antarctica, Alaska, the Gal\u00e1pagos Islands, and the Mediterranean are among the most popular destinations." } },
                    { "@type": "Question", "name": "Can cruises be included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Luxury ocean cruises, expedition cruises, river cruises, and yacht charters can all be incorporated into your vacation." } },
                    { "@type": "Question", "name": "How far in advance should I plan?", "acceptedAnswer": { "@type": "Answer", "text": "Booking 9 to 18 months in advance provides the best availability for luxury accommodations and experiences." } },
                    { "@type": "Question", "name": "Do you assist with visas and travel documentation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide guidance regarding passports, visas, and destination-specific entry requirements." } },
                    { "@type": "Question", "name": "Are luxury accommodations included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We arrange luxury hotels, private villas, safari lodges, resorts, and premium cruise accommodations." } },
                    { "@type": "Question", "name": "Why choose Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel offers personalized itineraries, worldwide destination expertise, concierge-level planning, luxury partnerships, and seamless international travel experiences." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>International Family Adventures | Luxury Family Travel Around the World</title>
                <meta name="title" content="International Family Adventures | Luxury World Travel for Families" />
                <meta
                    name="description"
                    content="Discover custom-designed international family adventures featuring luxury world travel, around-the-world vacations, private guides, cultural immersion, safaris, cruises, and unforgettable experiences with Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="International Family Adventures, Luxury international travel, Family world travel, Around-the-world vacations, Luxury family adventures, International luxury vacations, Multigenerational world travel, Cultural family travel, Luxury guided tours, Private family travel, Luxury travel planning" />
                <script type="application/ld+json">
                    {JSON.stringify(ifadSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="ifad-page-wrapper">

                {/* HERO SECTION */}
                <section className="ifad-hero-section">
                    {ifadHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`ifad-hero-slide ${ifadCurrentHero === idx ? 'ifad-slide-active' : ''}`}
                            style={{ 
                                backgroundImage: `url(${img.url})`,
                                backgroundPosition: img.position || 'center'
                            }}
                        />
                    ))}
                    <div className="ifad-hero-overlay"></div>
                    <div className="ifad-hero-content">
                        <div className="ifad-hero-tag">
                            <Globe size={16} />
                            <span>Luxury World Travel for Families</span>
                        </div>
                        <h1 className="ifad-hero-title">International Family Adventures</h1>
                        <p className="ifad-hero-subtitle">Discover the World Together</p>
                        <div className="ifad-hero-btn-row">
                            <Link to='/contact' className="ifad-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="ifad-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION - framed image with floating badge */}
                <section className="ifad-intro-section">
                    <div className="ifad-intro-container">
                        <div className="ifad-intro-grid">
                            <div className="ifad-intro-copy">
                                <span className="ifad-eyebrow-label">DISCOVER THE WORLD TOGETHER</span>
                                <h2 className="ifad-section-heading">Discover the World Together</h2>
                                <div className="ifad-heading-bar"></div>
                                <p className="ifad-lead-paragraph">
                                    The most meaningful family vacations go beyond sightseeing&mdash;they create shared experiences, strengthen relationships, and inspire curiosity across generations.
                                </p>
                                <p className="ifad-lead-paragraph">
                                    At Trips & Ships Luxury Travel, we design custom international journeys for families seeking extraordinary destinations, authentic cultural experiences, and seamless luxury. Whether you're exploring Europe, embarking on an African safari, sailing through Antarctica, or planning an around-the-world adventure, every itinerary is crafted around your family's interests and travel style.
                                </p>
                            </div>
                            <div className="ifad-intro-image-frame">
                                <img src={introFamilyImg} alt="Family exploring the world together" />
                                <div className="ifad-intro-badge-float">
                                    <Heart size={18} />
                                    <span>Crafted for Every Generation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE INTERNATIONAL FAMILY TRAVEL - full-bleed dark banner */}
                <section
                    className="ifad-why-section"

                >
                    <div className="ifad-why-overlay"></div>
                    <div className="ifad-why-container">
                        <div className="ifad-why-header">
                            <span className="ifad-eyebrow-label ifad-eyebrow-light">WHY CHOOSE INTERNATIONAL FAMILY TRAVEL?</span>
                            <h2 className="ifad-section-heading ifad-heading-light">Why Choose International <br /> Family Travel?</h2>
                            <div className="ifad-heading-bar ifad-bar-center"></div>
                            <p className="ifad-lead-paragraph ifad-paragraph-light">
                                Traveling internationally allows families to connect with different cultures while creating lifelong memories.
                            </p>
                            <p className="ifad-lead-paragraph ifad-paragraph-light ifad-benefits-lead">Benefits include:</p>
                        </div>
                        <div className="ifad-why-grid">
                            {ifadWhyTravel.map((item, idx) => {
                                const IfadIcon = item.icon
                                return (
                                    <div key={idx} className="ifad-why-card">
                                        <div className="ifad-why-icon-ring">
                                            <IfadIcon size={22} />
                                        </div>
                                        <p className="ifad-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ifad-lead-paragraph ifad-paragraph-light" style={{ textAlign: 'center', maxWidth: '780px', margin: '40px auto 0' }}>
                            Each journey is designed to balance adventure, relaxation, <br /> and comfort for every generation.
                        </p>
                    </div>
                </section>

                {/* AROUND-THE-WORLD VACATIONS - simple grid layout */}
                <section className="ifad-journey-section">
                    <div className="ifad-journey-container">
                        <div className="ifad-journey-header">
                            <h2 className="ifad-section-heading" style={{ textAlign: 'center' }}>
                                <Plane size={28} style={{ verticalAlign: 'middle', marginRight: '10px', color: 'var(--ifad-navy)' }} />
                                Around-the-World Vacations
                            </h2>
                            <div className="ifad-heading-bar ifad-bar-center"></div>
                            <p className="ifad-lead-paragraph" style={{ textAlign: 'center' }}>
                                For families dreaming of a once-in-a-lifetime journey, an around-the-world itinerary offers the opportunity to experience multiple continents in one unforgettable adventure.
                            </p>
                            <p className="ifad-lead-paragraph" style={{ textAlign: 'center', fontWeight: '600' }}>Popular combinations include:</p>
                        </div>

                        <div className="ifad-simple-grid">
                            {ifadCombinations.map((combo, idx) => (
                                <div key={idx} className="ifad-simple-card">
                                    <div className="ifad-simple-card-inner">
                                        <span className="ifad-simple-route-number">Route {String(idx + 1).padStart(2, '0')}</span>
                                        <div className="ifad-simple-info">
                                            <MapPin size={16} />
                                            <span>{combo.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="ifad-lead-paragraph" style={{ textAlign: 'center', maxWidth: '780px', margin: '30px auto 0' }}>
                            Every itinerary is customized with flexible pacing, premium accommodations, and seamless logistics.
                        </p>
                    </div>
                </section>

                {/* LUXURY CULTURAL EXPERIENCES - bento masonry collage */}
                <section className="ifad-culture-section">
                    <div className="ifad-culture-container">
                        <div className="ifad-culture-grid">
                            <div className="ifad-culture-bento">
                                <div className="ifad-bento-item ifad-bento-tall">
                                    <img src={ifadCulturalImages[1]} alt="Local culinary experience" />
                                </div>
                                <div className="ifad-bento-item ifad-bento-square-1">
                                    <img src={ifadCulturalImages[0]} alt="Private museum tour" />
                                </div>
                                <div className="ifad-bento-item ifad-bento-square-2">
                                    <img src={ifadCulturalImages[2]} alt="Artisan workshop" />
                                </div>
                                <div className="ifad-bento-item ifad-bento-wide">
                                    <img src={ifadCulturalImages[3]} alt="Cultural travel destination" />
                                </div>
                            </div>
                            <div className="ifad-culture-copy">
                                <span className="ifad-eyebrow-label">
                                    <Palette size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Luxury Cultural Experiences
                                </span>
                                <h2 className="ifad-section-heading">We believe travel should inspire deeper connections with the world.</h2>
                                <div className="ifad-heading-bar"></div>
                                <p className="ifad-lead-paragraph">Experiences may include:</p>
                                <div className="ifad-culture-list">
                                    {ifadCulturalExperiences.map((item, idx) => {
                                        const CultureIcon = item.icon
                                        return (
                                            <div key={idx} className="ifad-culture-list-item">
                                                <CultureIcon size={18} className="ifad-culture-list-icon" />
                                                <span>{item.text}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="ifad-lead-paragraph" style={{ marginTop: '20px' }}>
                                    These authentic encounters help families understand the people, history, and traditions behind each destination.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXTRAORDINARY DESTINATIONS - image-free grid */}
                <section className="ifad-dest-section">
                    <div className="ifad-dest-container">
                        <div className="ifad-dest-header">
                            <span className="ifad-eyebrow-label">
                                <Compass size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Extraordinary Destinations
                            </span>
                            <h2 className="ifad-section-heading">We create personalized journeys to some of the world's most remarkable places, including:</h2>
                            <div className="ifad-heading-bar ifad-bar-center"></div>
                        </div>
                        <div className="ifad-dest-grid">
                            {ifadDestinations.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="ifad-dest-card">
                                        <div className="ifad-dest-icon-container">
                                            <DestIcon size={20} />
                                        </div>
                                        <span className="ifad-dest-name">{dest.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ifad-lead-paragraph" style={{ textAlign: 'center', maxWidth: '780px', margin: '40px auto 0' }}>
                            Every destination is selected based on your family's interests, <br /> preferred pace, and travel goals.
                        </p>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS - layered stacked gallery */}
                <section className="ifad-stay-section">
                    <div className="ifad-stay-container">
                        <div className="ifad-stay-grid">
                            <div className="ifad-stay-stack">
                                {ifadAccommodationImages.map((img, idx) => (
                                    <div key={idx} className={`ifad-stay-stack-item ifad-stack-${idx + 1}`}>
                                        <img src={img} alt="Luxury accommodation" />
                                    </div>
                                ))}
                            </div>
                            <div className="ifad-stay-copy">
                                <span className="ifad-eyebrow-label">
                                    <Home size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Luxury Accommodations
                                </span>
                                <h2 className="ifad-section-heading">Exceptional accommodations are an important part of every journey.</h2>
                                <div className="ifad-heading-bar"></div>
                                <p className="ifad-lead-paragraph">Options include:</p>
                                <div className="ifad-stay-pill-grid">
                                    {ifadAccommodations.map((item, idx) => (
                                        <div key={idx} className="ifad-stay-pill">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ifad-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Every property is selected for comfort, service, and family-friendly amenities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PERSONALIZED FAMILY EXPERIENCES - showcase split with card grid */}
                <section className="ifad-showcase-section">
                    <div className="ifad-showcase-container">
                        <div className="ifad-showcase-grid">
                            <div className="ifad-showcase-copy">
                                <h2 className="ifad-section-heading">Personalized Family Experiences</h2>
                                <div className="ifad-heading-bar"></div>
                                <p className="ifad-showcase-intro">No two families travel alike. We customize experiences such as:</p>
                                
                                <div className="ifad-showcase-card-grid">
                                    {ifadFamilyExperiences.map((item, idx) => {
                                        const ExpIcon = item.icon
                                        return (
                                            <div key={idx} className="ifad-showcase-card-item">
                                                <div className="ifad-showcase-icon-wrap">
                                                    <ExpIcon size={18} />
                                                </div>
                                                <span className="ifad-showcase-card-text">{item.text}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                                <div className="ifad-showcase-footnote">
                                    <Sparkles size={16} className="ifad-footnote-sparkle" />
                                    <span>Each itinerary reflects your family's interests and creates opportunities for meaningful shared experiences.</span>
                                </div>
                            </div>
                            <div className="ifad-showcase-media">
                                <img src={showcaseFamilyImg} alt="Personalized family adventure experience" />
                                <div className="ifad-showcase-media-tag">Tailored to Your Family</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCIERGE TRAVEL PLANNING - full-width banner */}
                <section
                    className="ifad-concierge-section"
                    
                >
                    <div className="ifad-concierge-overlay"></div>
                    <div className="ifad-concierge-container">
                        <span className="ifad-eyebrow-label ifad-eyebrow-light">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Concierge Travel Planning
                        </span>
                        <h2 className="ifad-section-heading ifad-heading-light">Our advisors handle every aspect of your international journey.</h2>
                        <div className="ifad-heading-bar ifad-bar-center"></div>
                        <p className="ifad-lead-paragraph ifad-paragraph-light">Services include:</p>
                        <div className="ifad-concierge-pills-wrap">
                            {ifadConciergeServices.map((service, idx) => (
                                <span key={idx} className="ifad-concierge-pill">{service}</span>
                            ))}
                        </div>
                        <p className="ifad-lead-paragraph ifad-paragraph-light" style={{ marginTop: '30px' }}>
                            Our goal is to make international travel effortless and enjoyable.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE TRIPS & SHIPS - stacked offset frame + icon grid */}
                <section className="ifad-why-us-section">
                    <div className="ifad-why-us-container">
                        <div className="ifad-why-us-header">
                            <span className="ifad-eyebrow-label">WHY CHOOSE TRIPS & SHIPS LUXURY TRAVEL?</span>
                            <h2 className="ifad-section-heading">International family travel requires expertise, trusted global partners, and meticulous planning.</h2>
                            <div className="ifad-heading-bar ifad-bar-center"></div>
                            <p className="ifad-lead-paragraph">
                                Families choose us because we provide:
                            </p>
                        </div>
                        <div className="ifad-why-us-grid">
                            {ifadWhyChooseUs.map((item, idx) => {
                                const UsIcon = item.icon
                                return (
                                    <div key={idx} className="ifad-why-us-card">
                                        <div className="ifad-why-us-icon">
                                            <UsIcon size={22} />
                                        </div>
                                        <p className="ifad-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="ifad-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            Whether you're planning your first international family vacation or an around-the-world adventure, we'll create a journey that inspires lifelong memories.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="ifad-faq-section">
                    <div className="ifad-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="ifad-section-heading">Frequently Asked Questions</h2>
                            <div className="ifad-heading-bar ifad-bar-center"></div>
                        </div>
                        <div className="ifad-faq-list">
                            {ifadFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ifad-faq-item"
                                    onClick={() => ifadToggleFaq(index)}
                                >
                                    <div className="ifad-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ifad-faq-toggle">
                                            {ifadActiveFaq === index ? "\u2212" : "+"}
                                        </span>
                                    </div>
                                    {ifadActiveFaq === index && (
                                        <p className="ifad-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="ifad-cta-section">
                    <div className="ifad-cta-bg-pattern"></div>
                    <div className="ifad-cta-inner">
                        <h2 className="ifad-cta-heading">Ready to Discover the World as a Family?</h2>
                        <div className="ifad-cta-separator"></div>
                        <p className="ifad-cta-text">
                            Whether you're planning your first international family vacation or an around-the-world adventure, we'll create a journey that inspires lifelong memories.
                        </p>
                        <div className="ifad-cta-btn-row">
                            <Link to='/contact' className="ifad-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="ifad-btn-outline">
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

export default InternationalFamilyAdventures