import Navbar from '../../components/Navbar/Navbar'
import '../../pages/Luxuryfamilycelebrations/Luxuryfamilycelebrations.css'
import './Whatisincludedonscenic.css'
import {
    Sparkles, Phone, LayoutList, CheckCircle, Home, BedDouble, Wine,
    UtensilsCrossed, Gift, Wifi, Compass, MapPin, Users, Star,
    Plane, XCircle, Dumbbell
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function WhatIsIncludedOnScenic() {

    const [wisActiveFaq, setWisActiveFaq] = useState(null)
    const wisToggleFaq = (index) => {
        setWisActiveFaq(wisActiveFaq === index ? null : index)
    }

    /* Luxury Accommodations */
    const wisAccommodations = [
        'Spacious suites', 'Private verandas or balconies', 'Luxury bedding',
        'Marble bathrooms', 'Premium bath amenities', 'In-suite minibar',
        'Daily housekeeping', 'Room service'
    ]

    /* Butler Service */
    const wisButlerServices = [
        'Unpacking luggage', 'In-suite dining', 'Laundry arrangements',
        'Beverage service', 'Restaurant reservations', 'Special requests',
        'Daily itinerary planning'
    ]

    /* Fine Dining */
    const wisDining = [
        'Breakfast', 'Lunch', 'Dinner', 'Specialty restaurants',
        'Casual dining', 'Regional cuisine', 'Fresh local ingredients',
        'Destination-inspired menus'
    ]

    /* Premium Beverages */
    const wisBeverages = [
        'Premium wines', 'Champagne', 'Cocktails', 'Spirits',
        'Beer', 'Specialty coffees', 'Soft drinks', 'Bottled water'
    ]

    /* Shore Excursions */
    const wisExcursions = [
        'Walking tours', 'Cultural experiences', 'Museum visits', 'Wine tastings',
        'Local guides', 'Scenic drives', 'Nature experiences', 'Historic landmarks'
    ]

    /* Scenic Enrich Experiences */
    const wisEnrichExperiences = [
        'Private concerts', 'Historic castle events', 'Local performances',
        'Cultural ceremonies', 'After-hours museum visits', 'Special dining experiences',
        'Private palace receptions', 'Exclusive winery tours'
    ]

    /* Expedition Experiences */
    const wisExpeditionExperiences = [
        'Zodiac cruises', 'Expedition landings', 'Expert Discovery Team', 'Wildlife viewing',
        'Guided hikes', 'Kayaking (select voyages)', 'Snorkeling (select itineraries)', 'Educational lectures'
    ]

    /* Wellness & Fitness */
    const wisWellnessAmenities = [
        'Fitness center', 'Yoga studio', 'Sauna', 'Steam room', 'Vitality pools', 'Relaxation lounges'
    ]

    /* What's Not Included */
    const wisNotIncluded = [
        'Spa treatments', 'Beauty salon services', 'Boutique purchases', 'Premium helicopter excursions',
        'Submarine dives', 'Private tours', 'Travel insurance', 'Some premium wines and spirits'
    ]

   /* Why Book with Trips & Ships */
const wisWhyBookUs = [
    { title: "Compare Scenic River and Ocean voyages", icon: Compass },
    { title: "Understand what's included", icon: CheckCircle },
    { title: "Choose the right suite", icon: BedDouble },
    { title: "Select the best itinerary", icon: MapPin },
    { title: "Arrange flights and hotels", icon: Plane },
    { title: "Secure exclusive offers", icon: Gift },
    { title: "Coordinate pre- and post-cruise travel", icon: LayoutList },
    { title: "Provide concierge-level service before, during, and after your trip", icon: Phone },
];

    /* FAQs */
    const wisFaqs = [
        { question: 'Are Scenic cruises all-inclusive?', answer: 'Yes. Scenic is one of the most all-inclusive luxury cruise brands, with accommodations, dining, beverages, Wi-Fi, gratuities, and many excursions included.' },
        { question: 'Does Scenic include alcoholic beverages?', answer: 'Yes. Premium wines, beer, spirits, cocktails, soft drinks, and specialty coffees are generally included throughout your cruise.' },
        { question: 'Is butler service included?', answer: 'Yes. Butler service is included on Scenic Eclipse and available on many Scenic River Cruise suite categories.' },
        { question: 'Are gratuities included?', answer: 'Yes. Scenic includes onboard gratuities in the cruise fare.' },
        { question: 'Does Scenic include Wi-Fi?', answer: 'Yes. Complimentary Wi-Fi is included for guests.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Scenic includes a variety of guided shore excursions, including Scenic Freechoice experiences on many itineraries.' },
        { question: 'What are Scenic Enrich experiences?', answer: 'Scenic Enrich experiences are exclusive cultural events, private performances, and special access experiences included on select itineraries.' },
        { question: 'Are specialty restaurants included?', answer: 'Yes. Most onboard dining venues and specialty restaurants are included in your cruise fare.' },
        { question: 'Does Scenic include airport transfers?', answer: "Many itineraries include airport transfers when flights are booked according to Scenic's guidelines." },
        { question: 'Are helicopter and submarine excursions included?', answer: 'No. These premium experiences aboard Scenic Eclipse are typically optional and available for an additional charge.' },
        { question: 'Are spa treatments included?', answer: 'No. Access to wellness facilities is included, but spa treatments and salon services generally cost extra.' },
        { question: 'Is Scenic worth the price?', answer: 'For travelers seeking luxury, convenience, and transparent pricing, Scenic offers excellent value through its comprehensive all-inclusive experience.' }
    ]

    const wisSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic",
                "name": "What Is Included on Scenic?",
                "url": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic",
                "description": "Discover everything included on Scenic Cruises, from luxury accommodations and butler service to fine dining, premium beverages, excursions, Wi-Fi, and gratuities.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, river cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic#article",
                "headline": "What Is Included on Scenic?",
                "url": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic",
                "description": "Expert guide explaining everything included on Scenic Cruises, including accommodations, butler service, dining, beverages, shore excursions, wellness, Wi-Fi, and gratuities.",
                "image": "https://www.tripsshipsluxurytravel.com/images/what-is-included-on-scenic.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Scenic cruise planning and consultation services helping travelers understand cruise inclusions, compare itineraries, and select the ideal luxury cruise experience."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsshipsluxurytravel.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "What Is Included on Scenic?", "item": "https://www.tripsshipsluxurytravel.com/what-is-included-on-scenic" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Are Scenic cruises all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic is one of the most all-inclusive luxury cruise brands, with accommodations, dining, beverages, Wi-Fi, gratuities, and many excursions included." } },
                    { "@type": "Question", "name": "Does Scenic include alcoholic beverages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Premium wines, beer, spirits, cocktails, soft drinks, and specialty coffees are generally included throughout your cruise." } },
                    { "@type": "Question", "name": "Is butler service included on Scenic cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Butler service is included on Scenic Eclipse and available in many suite categories on Scenic River Cruises." } },
                    { "@type": "Question", "name": "Are gratuities included on Scenic?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic includes onboard gratuities, allowing guests to enjoy a truly all-inclusive experience." } },
                    { "@type": "Question", "name": "Does Scenic include Wi-Fi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is included for guests throughout most Scenic cruises." } },
                    { "@type": "Question", "name": "Are shore excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic includes a variety of guided shore excursions, including Scenic Freechoice experiences on many itineraries." } },
                    { "@type": "Question", "name": "What are Scenic Enrich experiences?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Enrich experiences are exclusive cultural events, private performances, and unique destination experiences included on select itineraries." } },
                    { "@type": "Question", "name": "Are specialty restaurants included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most dining venues and specialty restaurants aboard Scenic ships are included in your cruise fare." } },
                    { "@type": "Question", "name": "Does Scenic include airport transfers?", "acceptedAnswer": { "@type": "Answer", "text": "Many Scenic itineraries include airport transfers when flights are booked according to Scenic's transfer guidelines." } },
                    { "@type": "Question", "name": "Are helicopter and submarine excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "No. Helicopter flights and submarine dives aboard Scenic Eclipse are premium optional experiences that usually require an additional fee." } },
                    { "@type": "Question", "name": "Are spa treatments included?", "acceptedAnswer": { "@type": "Answer", "text": "Access to wellness facilities is included, but spa treatments, massages, and salon services are generally available at an additional cost." } },
                    { "@type": "Question", "name": "Is Scenic worth the price?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic offers exceptional value through its comprehensive all-inclusive luxury experience, personalized service, premium dining, and immersive excursions." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>What Is Included on Scenic? | Scenic Luxury Cruise Inclusions Guide</title>
                <meta name="title" content="What Is Included on Scenic Cruises? | Complete Guide" />
                <meta
                    name="description"
                    content="Discover what is included on Scenic Cruises, from luxury suites and butler service to fine dining, premium beverages, Wi-Fi, shore excursions, and expedition experiences."
                />
                <meta name="keywords" content="What Is Included on Scenic, Scenic cruise inclusions, Scenic all-inclusive cruises, Scenic luxury cruise benefits, Scenic Discovery Yacht inclusions, Scenic river cruise inclusions, Scenic expedition cruises" />
                <script type="application/ld+json">
                    {JSON.stringify(wisSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION — reused fcel-hero-* classes */}
                <section className="fcel-hero-section">
                    <div
                        className="fcel-hero-slide fcel-slide-active"
                        style={{ backgroundImage: `url(https://placehold.co/1920x1080/0f1c2e/ffffff?text=Scenic+All-Inclusive+Cruising)` }}
                    />
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Scenic Cruise Inclusions Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">What Is Included on Scenic?</h1>
                        <p className="fcel-hero-subtitle">
                            One of the biggest reasons travelers choose Scenic is its truly all-inclusive approach to luxury travel.
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION — reused fcel-intro-* classes */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">ALL-INCLUSIVE LUXURY TRAVEL</span>
                                <h2 className="fcel-section-heading">One of the biggest reasons travelers choose Scenic is its truly all-inclusive approach to luxury travel.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Whether you're sailing on a Scenic River Cruise or aboard one of Scenic's Discovery Yachts, your fare includes far more than just your suite and meals.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    From personalized butler service to premium beverages, immersive excursions, gratuities, and luxury accommodations, Scenic removes the stress of planning so you can simply enjoy your journey.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <img src="https://placehold.co/700x900/274472/ffffff?text=Scenic+Suite" alt="Luxury Scenic suite with premium in-suite amenities" />
                                <div className="fcel-intro-badge-float">
                                    <Star size={15} />
                                    <span>All-Inclusive Six-Star Service</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Here's everything you can expect when sailing with Scenic.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS — reused fcel-occasion-* classes */}
                <section className="fcel-occasion-section">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid">
                            <div className="fcel-occasion-media">
                                <img className="fcel-media-tall" src="https://placehold.co/500x700/274472/ffffff?text=Veranda+Suite" alt="Spacious veranda suite aboard Scenic" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/1c2f4a/ffffff?text=Marble+Bathroom" alt="Marble bathroom in a Scenic suite" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/0f1c2e/ffffff?text=In-Suite+Minibar" alt="In-suite minibar aboard Scenic" />
                            </div>
                            <div>
                                <span className="fcel-occasion-eyebrow">Luxury Accommodations</span>
                                <h3 className="fcel-occasion-title">Every Scenic voyage begins with elegant accommodations designed for comfort and relaxation.</h3>
                                <p className="fcel-occasion-intro">Depending on your ship and itinerary, accommodations may include:</p>
                                <ul className="fcel-occasion-list">
                                    {wisAccommodations.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    Guests aboard Scenic Eclipse enjoy all-veranda suites with butler service, while Scenic river ships feature elegantly appointed balcony suites.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BUTLER SERVICE — reused fcel-occasion-* classes (soft bg, reversed) */}
                <section className="fcel-occasion-section fcel-occasion-soft">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid fcel-occasion-reverse">
                            <div className="fcel-occasion-media">
                                <img className="fcel-media-tall" src="https://placehold.co/500x700/1c2f4a/ffffff?text=Butler+Service" alt="Personal butler service aboard Scenic" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/274472/ffffff?text=In-Suite+Dining" alt="In-suite dining arranged by a Scenic butler" />
                                <img className="fcel-media-short" src="https://placehold.co/500x340/0f1c2e/ffffff?text=Turndown+Service" alt="Turndown service provided by a Scenic butler" />
                            </div>
                            <div>
                                <span className="fcel-occasion-eyebrow">Butler Service</span>
                                <h3 className="fcel-occasion-title">One of Scenic's signature luxury features is personalized butler service.</h3>
                                <p className="fcel-occasion-intro">Depending on your suite category, your butler can assist with:</p>
                                <ul className="fcel-occasion-list">
                                    {wisButlerServices.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    Scenic Eclipse provides butler service for every suite.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINE DINING — reused fcel-concierge-* classes (pill tags) */}
                <section className="fcel-concierge-section">
                    <div className="fcel-concierge-container">
                        <span className="fcel-eyebrow-label">
                            <UtensilsCrossed size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Fine Dining
                        </span>
                        <h2 className="fcel-section-heading">Dining is included throughout your voyage.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Guests enjoy:</p>
                        <div className="fcel-concierge-pills-wrap">
                            {wisDining.map((item, idx) => (
                                <span key={idx} className="fcel-concierge-pill">{item}</span>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ marginTop: '30px' }}>
                            Scenic Eclipse offers multiple dining venues, while Scenic River Cruises feature elegant onboard restaurants and specialty experiences.
                        </p>
                    </div>
                </section>

                {/* PREMIUM BEVERAGES — reused fcel-villa-* classes (gallery + feature pills) */}
                <section className="fcel-villa-section">
                    <div className="fcel-villa-container">
                        <div className="fcel-villa-grid">
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <Wine size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Premium Beverages
                                </span>
                                <h2 className="fcel-section-heading">Most Scenic cruises include:</h2>
                                <div className="fcel-heading-bar"></div>
                                <div className="fcel-villa-features-grid">
                                    {wisBeverages.map((item, idx) => (
                                        <div key={idx} className="fcel-villa-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Guests can enjoy beverages throughout the day without worrying about additional charges.
                                </p>
                            </div>
                            <div className="fcel-villa-gallery">
                                <img src="https://placehold.co/400x400/274472/ffffff?text=Premium+Wines" alt="Premium wine selection aboard Scenic" />
                                <img src="https://placehold.co/400x400/1c2f4a/ffffff?text=Champagne" alt="Champagne service aboard Scenic" />
                                <img src="https://placehold.co/400x400/0f1c2e/ffffff?text=Specialty+Coffee" alt="Specialty coffee bar aboard Scenic" />
                                <img src="https://placehold.co/400x400/274472/ffffff?text=Cocktails" alt="Handcrafted cocktails aboard Scenic" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SHORE EXCURSIONS — reused fcel-birthday-* classes (media collage + numbered cards) */}
                <section className="fcel-birthday-section">
                    <div className="fcel-birthday-container">
                        <div className="fcel-birthday-grid">
                            <div className="fcel-birthday-media-collage">
                                <div className="fcel-collage-img-wrap fcel-collage-tall">
                                    <img src="https://placehold.co/500x650/274472/ffffff?text=Walking+Tour" alt="Guided walking tour shore excursion" />
                                </div>
                                <div className="fcel-collage-img-wrap fcel-collage-short-1">
                                    <img src="https://placehold.co/500x400/1c2f4a/ffffff?text=Wine+Tasting" alt="Wine tasting shore excursion" />
                                </div>
                                <div className="fcel-collage-img-wrap fcel-collage-short-2">
                                    <img src="https://placehold.co/500x400/0f1c2e/ffffff?text=Local+Guide" alt="Local guide leading a cultural experience" />
                                </div>
                                <div className="fcel-collage-glow"></div>
                            </div>
                            <div className="fcel-birthday-copy">
                                <span className="fcel-birthday-eyebrow">
                                    <MapPin size={16} className="fcel-cake-icon" />
                                    Shore Excursions
                                </span>
                                <h3 className="fcel-birthday-title">Scenic includes a wide variety of excursions designed to immerse travelers in each destination.</h3>
                                <p className="fcel-birthday-intro">Experiences may include:</p>
                                <div className="fcel-birthday-cards-container">
                                    {wisExcursions.map((item, idx) => (
                                        <div key={idx} className="fcel-birthday-card">
                                            <div className="fcel-birthday-card-badge">{idx + 1}</div>
                                            <div className="fcel-birthday-card-content">
                                                <span className="fcel-birthday-card-title">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="fcel-birthday-footnote">
                                    <Sparkles size={16} className="fcel-footnote-sparkle" />
                                    <span>Many itineraries also include Scenic Freechoice excursions, allowing guests to personalize their day.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SCENIC ENRICH EXPERIENCES — reused fcel-grad-* classes (polaroid board) */}
                <section className="fcel-grad-section">
                    <div className="fcel-grad-container">
                        <div className="fcel-grad-header">
                            <span className="fcel-birthday-eyebrow">
                                <Sparkles size={16} className="fcel-cake-icon" />
                                Scenic Enrich Experiences
                            </span>
                            <h3 className="fcel-grad-title">Scenic Enrich offers exclusive experiences unavailable to most travelers.</h3>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-grad-intro">Examples include:</p>
                        </div>

                        <div className="fcel-grad-board">
                            {wisEnrichExperiences.map((item, idx) => {
                                const angles = [-3, 2, -1.5, 3, -2, 1.5]
                                const angle = angles[idx % angles.length]
                                return (
                                    <div key={idx} className="fcel-grad-polaroid" style={{ transform: `rotate(${angle}deg)` }}>
                                        <div className="fcel-grad-polaroid-tape"></div>
                                        <div className="fcel-grad-polaroid-inner">
                                            <div className="fcel-grad-polaroid-badge">
                                                <Sparkles size={16} />
                                            </div>
                                            <h4 className="fcel-grad-polaroid-text">{item}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="fcel-grad-footer">
                            <div className="fcel-grad-footnote">
                                <Sparkles size={16} className="fcel-footnote-sparkle" />
                                <span>These curated events provide memorable moments unique to Scenic guests.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPEDITION EXPERIENCES — reused fcel-retire-* classes (dark numbered grid) */}
                <section className="fcel-retire-section">
                    <div className="fcel-retire-container">
                        <div className="fcel-retire-header">
                            <span className="fcel-birthday-eyebrow">
                                <Compass size={16} className="fcel-cake-icon" />
                                Expedition Experiences
                            </span>
                            <h3 className="fcel-retire-title">Guests sailing aboard Scenic Eclipse also enjoy:</h3>
                            <div className="fcel-heading-bar"></div>
                        </div>

                        <div className="fcel-retire-grid">
                            {wisExpeditionExperiences.map((item, idx) => (
                                <div key={idx} className="fcel-retire-card">
                                    <div className="fcel-retire-card-number">
                                        <span>{idx + 1}</span>
                                    </div>
                                    <h4 className="fcel-retire-card-text">{item}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="fcel-retire-footnote-wrapper">
                            <div className="fcel-retire-footnote">
                                <Sparkles size={16} className="fcel-footnote-sparkle" />
                                <span>Optional helicopter and submarine excursions may be available on select voyages for an additional charge.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WELLNESS & FITNESS — reused fcel-reunion-* classes */}
                <section className="fcel-reunion-section">
                    <div className="fcel-reunion-container">
                        <div className="fcel-reunion-grid-layout">
                            <div className="fcel-reunion-media-col">
                                <div className="fcel-reunion-framed-card">
                                    <img src="https://placehold.co/700x800/274472/ffffff?text=Wellness+%26+Fitness" alt="Wellness and fitness facilities aboard Scenic" />
                                    <div className="fcel-reunion-frame-badge">Destination-Inspired Wellness</div>
                                </div>
                            </div>
                            <div className="fcel-reunion-copy-col">
                                <span className="fcel-birthday-eyebrow">
                                    <Dumbbell size={16} className="fcel-cake-icon" />
                                    Wellness & Fitness
                                </span>
                                <h3 className="fcel-reunion-title">Scenic offers exceptional wellness facilities.</h3>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-reunion-intro">Included amenities typically include:</p>
                                <div className="fcel-reunion-cards-grid">
                                    {wisWellnessAmenities.map((item, idx) => (
                                        <div key={idx} className="fcel-reunion-card">
                                            <CheckCircle size={16} className="fcel-reunion-card-icon" />
                                            <span className="fcel-reunion-card-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="fcel-reunion-footnote">
                                    Spa treatments and salon services are available for an additional fee.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WI-FI / GRATUITIES / AIRPORT TRANSFERS — new wis-quicknotes section */}
                <section className="wis-quicknotes-section">
                    <div className="wis-quicknotes-container">
                        <div className="wis-quicknotes-header">
                            <span className="fcel-eyebrow-label">GOOD TO KNOW</span>
                            <h2 className="fcel-section-heading">A Few More Details Worth Knowing</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="wis-quicknotes-grid">
                            <div className="wis-quicknotes-card">
                                <div className="wis-quicknotes-icon">
                                    <Wifi size={22} />
                                </div>
                                <h3 className="wis-quicknotes-title">Wi-Fi</h3>
                                <p className="wis-quicknotes-text">
                                    Complimentary Wi-Fi is included throughout your Scenic cruise, allowing guests to stay connected while traveling.
                                </p>
                            </div>
                            <div className="wis-quicknotes-card">
                                <div className="wis-quicknotes-icon">
                                    <Gift size={22} />
                                </div>
                                <h3 className="wis-quicknotes-title">Gratuities</h3>
                                <p className="wis-quicknotes-text">
                                    Unlike many cruise lines, Scenic includes gratuities in your fare. Guests don't need to budget separately for onboard tipping.
                                </p>
                            </div>
                            <div className="wis-quicknotes-card">
                                <div className="wis-quicknotes-icon">
                                    <Plane size={22} />
                                </div>
                                <h3 className="wis-quicknotes-title">Airport Transfers</h3>
                                <p className="wis-quicknotes-text">
                                    Many Scenic itineraries include airport transfers when flights are arranged according to Scenic's booking guidelines. Your travel advisor can explain which itineraries qualify.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S NOT INCLUDED — new wis-notincluded section */}
                <section className="wis-notincluded-section">
                    <div className="wis-notincluded-container">
                        <span className="fcel-eyebrow-label">What's Not Included?</span>
                        <h2 className="fcel-section-heading">While Scenic is among the industry's most inclusive cruise lines, some experiences may have additional costs, including:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="wis-notincluded-grid">
                            {wisNotIncluded.map((item, idx) => (
                                <div key={idx} className="wis-notincluded-item">
                                    <XCircle size={18} className="wis-notincluded-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY SCENIC OFFERS EXCELLENT VALUE — new wis-value section */}
                <section className="wis-value-section">
                    <div className="wis-value-container">
                        <h3 className="wis-value-title">Although Scenic cruises may have a higher upfront price than some competitors, the overall value is exceptional because so many services are already included.</h3>
                        <p className="wis-value-text">
                            Instead of paying separately for beverages, gratuities, excursions, specialty dining, and luxury amenities, guests enjoy one comprehensive vacation price.
                        </p>
                        <p className="wis-value-text">
                            For many travelers, this creates a more relaxing and transparent luxury travel experience.
                        </p>
                        <div className="wis-value-cta-wrap">
                            <button className="fcel-btn-primary">
                                <Phone size={18} />
                                Get My Scenic Cruise Quote
                            </button>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL — reused fcel-why-us-* classes */}
                <section className="fcel-why-us-section">
                    <div className="fcel-why-us-container">
                        <div className="fcel-why-us-top">
                            <div className="fcel-why-us-copy">
                                <span className="fcel-eyebrow-label">TRUSTED SCENIC CRUISE SPECIALISTS</span>
                                <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Our Scenic specialists help you:
                                </p>
                            </div>
                            <div className="fcel-why-us-image">
                                <img src="https://placehold.co/700x600/1c2f4a/ffffff?text=Trips+%26+Ships+Advisors" alt="Trips and Ships Luxury Travel advisors planning a Scenic voyage" />
                            </div>
                        </div>
                        <div className="fcel-why-us-grid">
                            {wisWhyBookUs.map((item, idx) => {
                                const WisIcon = item.icon
                                return (
                                    <div key={idx} className="fcel-why-us-card">
                                        <div className="fcel-why-us-icon">
                                            <WisIcon size={22} />
                                        </div>
                                        <p className="fcel-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            We help ensure you get the maximum value from your Scenic vacation.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                            <Link to="/contact" className="fcel-btn-outline" style={{ color: 'var(--fcel-navy)', borderColor: 'rgba(39, 68, 114, 0.35)' }}>
                                <Users size={18} />
                                Speak with a Scenic Specialist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION — reused fcel-faq-* classes */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {wisFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => wisToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {wisActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {wisActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION — reused fcel-cta-* classes */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Enjoy a Truly All-Inclusive Scenic Voyage?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Let our Scenic specialists walk you through every inclusion, compare itineraries, and help you choose the perfect voyage for your next luxury getaway.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
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

export default WhatIsIncludedOnScenic