import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './Scenicicelandcruises.css'
import {
    Ship, CheckCircle, Phone, LayoutList, Award, Users, Compass, Sparkles, Wind, Sun, Waves, Camera, Mountain, Snowflake, Utensils, HeartPulse, Plane, Globe, MapPin, Crown, Home, Fish, Bird, Anchor, Sunrise, CalendarDays, Heart, User, Users2
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function ScenicIcelandCruises() {

    const [sicActiveFaq, setSicActiveFaq] = useState(null)
    const sicToggleFaq = (index) => {
        setSicActiveFaq(sicActiveFaq === index ? null : index)
    }

    /* Why choose Scenic highlights */
    const sicWhyScenic = [
        'Six-star Discovery Yacht', 'Spacious all-veranda suites', 'Butler service for every guest',
        'Nearly all-inclusive pricing', 'Expert Discovery Team', 'Scenic Freechoice experiences',
        'Scenic Enrich events', 'Premium beverages included', 'Complimentary Wi-Fi',
        'Included gratuities', 'Personalized service', 'Small ship luxury'
    ]

    /* Landscapes / destinations */
    const sicLandscapes = [
        { name: 'Reykjavik', icon: Home, desc: "Begin or end your journey in Iceland's vibrant capital, known for colorful architecture, excellent restaurants, museums, and geothermal culture." },
        { name: 'Westfjords', icon: Mountain, desc: "Discover dramatic cliffs, secluded villages, and some of Iceland's least-visited landscapes." },
        { name: 'Ísafjörður', icon: Anchor, desc: "Explore one of Iceland's most picturesque fishing towns surrounded by towering mountains and pristine fjords." },
        { name: 'Akureyri', icon: Snowflake, desc: 'Known as the "Capital of North Iceland," offering botanical gardens, charming streets, and easy access to waterfalls and volcanic regions.' },
        { name: 'Seyðisfjörður', icon: Sparkles, desc: 'Nestled within a spectacular fjord, this colorful village is famous for its artistic community and breathtaking scenery.' },
        { name: 'East Fjords', icon: Waves, desc: 'Cruise through peaceful waterways lined with waterfalls, mountains, and abundant wildlife.' }
    ]

    /* Wildlife encounters */
    const sicWildlife = [
        { text: 'Humpback whales', icon: Waves },
        { text: 'Minke whales', icon: Waves },
        { text: 'Orcas', icon: Fish },
        { text: 'Puffins', icon: Bird },
        { text: 'Arctic terns', icon: Bird },
        { text: 'Seals', icon: Fish },
        { text: 'Arctic foxes', icon: Snowflake },
        { text: 'Dolphins', icon: Waves },
        { text: 'Sea eagles', icon: Bird }
    ]

    /* Expedition experiences */
    const sicExpeditionActivities = [
        'Zodiac cruises', 'Guided nature walks', 'Wildlife observation', 'Glacier viewing',
        'Volcanic landscapes', 'Photography opportunities', 'Expert lectures',
        'Local cultural visits', 'Scenic cruising through remote fjords'
    ]

    /* Scenic Eclipse luxury */
    const sicLuxuryItems = [
        'Butler service', 'Spacious veranda suites', 'Luxury bedding', 'Personalized concierge service',
        'Observation lounges', 'Multiple outdoor decks', 'Elegant public spaces', 'Contemporary yacht design'
    ]

    /* Dining */
    const sicDiningItems = [
        'Fresh Icelandic seafood', 'Nordic specialties', 'International cuisine', 'Fine dining restaurants',
        'Casual dining options', 'Premium wines', 'Specialty coffees', 'In-suite dining'
    ]

    /* Wellness */
    const sicWellness = [
        { text: 'Senses Spa', icon: Sparkles },
        { text: 'Sauna', icon: Wind },
        { text: 'Steam room', icon: Wind },
        { text: 'Salt Therapy Lounge', icon: HeartPulse },
        { text: 'Yoga studio', icon: Users },
        { text: 'Fitness center', icon: HeartPulse },
        { text: 'Vitality pools', icon: Waves },
        { text: 'Massage treatments', icon: HeartPulse },
        { text: 'Beauty salon', icon: Sparkles }
    ]

    /* What's included */
    const sicIncluded = [
        'Luxury suite accommodations', 'Butler service', 'Fine dining', 'Premium beverages',
        'Complimentary Wi-Fi', 'Included gratuities', 'Scenic Freechoice experiences',
        'Scenic Enrich events', 'Discovery Team experts', 'Fitness facilities',
        'Entertainment', 'Concierge service'
    ]

    /* Best time to cruise */
    const sicSeasons = [
        { title: 'May–June', icon: Sunrise, text: 'Long daylight hours, nesting puffins, blooming landscapes, and excellent wildlife viewing.' },
        { title: 'July–August', icon: Sun, text: 'Warmer temperatures, calm seas, and ideal exploration conditions.' },
        { title: 'September', icon: Sparkles, text: 'Beautiful autumn colors and opportunities to witness the Northern Lights on select departures.' }
    ]

    /* Who should choose */
    const sicAudience = [
        { text: 'Luxury travelers', icon: Crown },
        { text: 'Expedition enthusiasts', icon: Compass },
        { text: 'Wildlife lovers', icon: Bird },
        { text: 'Photography enthusiasts', icon: Camera },
        { text: 'Couples', icon: Heart },
        { text: 'Solo travelers', icon: User },
        { text: 'Nature lovers', icon: Mountain },
        { text: 'Bucket-list travelers', icon: Award },
        { text: 'Small ship cruise fans', icon: Ship }
    ]

    /* Why book with us */
    const sicWhyBook = [
        { title: 'Compare Iceland itineraries', icon: LayoutList },
        { title: 'Choose the best sailing season', icon: CalendarDays },
        { title: 'Select the ideal suite', icon: Home },
        { title: 'Arrange flights and hotels', icon: Plane },
        { title: 'Coordinate pre- and post-cruise stays', icon: MapPin },
        { title: 'Secure exclusive offers', icon: Award },
        { title: 'Plan customized land experiences', icon: Globe },
        { title: 'Provide concierge-level support before, during, and after your cruise', icon: Crown }
    ]

    /* FAQs */
    const sicFaqs = [
        { question: 'Where do Scenic Iceland Cruises sail?', answer: 'Scenic itineraries visit Reykjavik, Ísafjörður, Akureyri, Seyðisfjörður, the East Fjords, Westfjords, and other spectacular Icelandic destinations.' },
        { question: 'Which Scenic ships sail to Iceland?', answer: 'Scenic Eclipse and Scenic Eclipse II both operate luxury voyages to Iceland and the North Atlantic.' },
        { question: 'Are Scenic Iceland Cruises all-inclusive?', answer: 'Yes. Most voyages include luxury accommodations, butler service, premium dining, beverages, Wi-Fi, gratuities, and many shore excursions.' },
        { question: 'Is butler service included?', answer: 'Yes. Every suite aboard Scenic Eclipse and Scenic Eclipse II includes personalized butler service.' },
        { question: 'What wildlife can I see in Iceland?', answer: 'Guests may see whales, puffins, seals, Arctic foxes, dolphins, seabirds, and numerous marine mammals depending on the season.' },
        { question: 'Are Zodiac excursions included?', answer: 'Many expedition activities, including Zodiac cruises, are included when conditions permit.' },
        { question: 'What is the best time to cruise Iceland?', answer: 'May through September offers excellent cruising conditions, with September also providing opportunities to see the Northern Lights on select voyages.' },
        { question: 'Is Scenic suitable for first-time expedition travelers?', answer: 'Yes. Scenic combines expedition experiences with six-star luxury, making it ideal for first-time luxury expedition cruisers.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included throughout most Scenic voyages.' },
        { question: 'Are gratuities included?', answer: 'Yes. Scenic includes onboard gratuities as part of its all-inclusive pricing.' },
        { question: 'How many guests sail aboard Scenic Eclipse?', answer: 'Scenic Eclipse and Scenic Eclipse II accommodate approximately 228 guests, creating an intimate and personalized experience.' },
        { question: 'Why choose Scenic for an Iceland cruise?', answer: 'Scenic combines luxury accommodations, personalized butler service, expert-led expeditions, immersive shore experiences, and all-inclusive amenities to create one of the most refined ways to explore Iceland.' }
    ]

    const sicSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-iceland-cruises",
                "name": "Scenic Iceland Cruises",
                "url": "https://www.tripsandships.com/scenic-iceland-cruises",
                "description": "Discover Scenic Iceland Cruises aboard Scenic Eclipse and Scenic Eclipse II. Explore Iceland's glaciers, volcanoes, waterfalls, fjords, wildlife, and geothermal landscapes with six-star all-inclusive luxury.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-iceland-cruises#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/scenic-iceland-cruises#article",
                "headline": "Scenic Iceland Cruises",
                "url": "https://www.tripsandships.com/scenic-iceland-cruises",
                "description": "Expert guide to Scenic Iceland Cruises featuring Scenic Eclipse and Scenic Eclipse II, including Iceland destinations, expedition experiences, wildlife, dining, accommodations, and all-inclusive luxury.",
                "image": "https://www.tripsandships.com/images/scenic-iceland-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-iceland-cruises" }
            },
            {
                "@type": "Service",
                "name": "Scenic Iceland Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Iceland Cruise Consulting",
                "description": "Expert Scenic Iceland cruise planning and consultation services helping travelers choose the ideal Discovery Yacht, itinerary, suite, and Arctic adventure."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Iceland Cruises", "item": "https://www.tripsandships.com/scenic-iceland-cruises" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Where do Scenic Iceland Cruises sail?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic itineraries visit Reykjavik, Ísafjörður, Akureyri, Seyðisfjörður, the East Fjords, Westfjords, and other spectacular Icelandic destinations." } },
                    { "@type": "Question", "name": "Which Scenic ships sail to Iceland?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse and Scenic Eclipse II both operate luxury voyages to Iceland and the North Atlantic." } },
                    { "@type": "Question", "name": "Are Scenic Iceland Cruises all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most voyages include luxury accommodations, butler service, premium dining, beverages, Wi-Fi, gratuities, and many shore excursions." } },
                    { "@type": "Question", "name": "Does every suite include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse and Scenic Eclipse II includes personalized butler service." } },
                    { "@type": "Question", "name": "What wildlife can I see on an Iceland cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the season, guests may see humpback whales, orcas, puffins, seals, Arctic foxes, dolphins, and numerous seabirds." } },
                    { "@type": "Question", "name": "Are Zodiac excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many expedition activities, including Zodiac cruises and guided landings, are included when weather and sea conditions permit." } },
                    { "@type": "Question", "name": "What is the best time to cruise Iceland?", "acceptedAnswer": { "@type": "Answer", "text": "May through September offers excellent cruising conditions, while September may provide opportunities to see the Northern Lights on select departures." } },
                    { "@type": "Question", "name": "Is Scenic suitable for first-time expedition travelers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic combines expedition experiences with six-star luxury, making it an excellent choice for first-time luxury expedition travelers." } },
                    { "@type": "Question", "name": "Is Wi-Fi included on Scenic Iceland Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is included throughout most Scenic voyages." } },
                    { "@type": "Question", "name": "Are gratuities included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic includes onboard gratuities as part of its nearly all-inclusive luxury experience." } },
                    { "@type": "Question", "name": "How many guests sail aboard Scenic Eclipse?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse and Scenic Eclipse II accommodate approximately 228 guests, providing an intimate luxury yacht atmosphere." } },
                    { "@type": "Question", "name": "Why choose Scenic for an Iceland cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic combines six-star accommodations, butler service, expert-led expeditions, immersive shore experiences, and all-inclusive amenities to create one of the most luxurious ways to explore Iceland." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Iceland Cruises | Luxury Iceland Cruises & Discovery Yachts</title>
                <meta name="title" content="Scenic Iceland Cruises | Luxury Cruise Guide" />
                <meta
                    name="description"
                    content="Discover Scenic Iceland Cruises aboard Scenic Eclipse and Scenic Eclipse II. Explore Iceland's dramatic fjords, glaciers, volcanoes, waterfalls, wildlife, and geothermal wonders with six-star all-inclusive luxury."
                />
                <meta name="keywords" content="Scenic Iceland Cruises, Scenic Iceland cruise, Scenic Eclipse Iceland, Iceland luxury cruises, Iceland Discovery Yacht, Iceland expedition cruise, Scenic Arctic cruises, Iceland small ship cruise" />
                <script type="application/ld+json">
                    {JSON.stringify(sicSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION */}
                <section className="fcel-hero-section">
                    <div className="sic-hero-placeholder">
                        <Snowflake size={220} />
                    </div>
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Luxury Iceland Cruises & Discovery Yachts</span>
                        </div>
                        <h1 className="fcel-hero-title">Scenic Iceland Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Experience Iceland Like Never Before
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

                {/* INTRO SECTION */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <h2 className="fcel-occasion-title">Experience Iceland Like Never Before</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-section-heading">Iceland is a destination unlike anywhere else on Earth.</p>

                                <p className="fcel-lead-paragraph">
                                    Towering waterfalls, active volcanoes, massive glaciers, black sand beaches, geothermal lagoons, and abundant wildlife combine to create one of the world's most extraordinary travel experiences.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    A Scenic Iceland Cruise allows you to discover this remarkable island aboard the ultra-luxury Scenic Eclipse or Scenic Eclipse II. Unlike larger cruise ships, Scenic's Discovery Yachts provide an intimate, all-inclusive experience with personalized service, luxurious accommodations, and immersive excursions designed to bring you closer to Iceland's breathtaking natural beauty.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <div className="sic-placeholder sic-intro-frame">
                                    <Mountain size={48} />
                                    <span>Image Placeholder: Iceland Fjord Landscape</span>
                                </div>
                                <div className="fcel-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Six-Star Discovery Yacht</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Whether you're exploring remote fjords, watching whales surface beside the ship, hiking volcanic landscapes, or visiting charming fishing villages, every day offers unforgettable discoveries.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE SCENIC */}
                <section className="sic-whyscenic-section">
                    <div className="sic-whyscenic-container">
                        <h2 className="fcel-occasion-title">
                            Why Choose Scenic for an Iceland Cruise?
                        </h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>

                        <p className="fcel-section-heading">Six-star luxury combined with true expedition capability.</p>
                        <p className="fcel-lead-paragraph">Highlights include:</p>
                        <div className="fcel-villa-features-grid">
                            {sicWhyScenic.map((item, idx) => (
                                <div key={idx} className="fcel-villa-feature-pill" style={{backgroundColor: 'var(--bg-white)'}}>
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="sic-whyscenic-note">
                            Every journey is carefully designed to maximize both comfort and exploration.
                        </p>
                    </div>
                </section>

                {/* MID-PAGE CTA #2 */}
                <section className="sic-inline-cta" style={{backgroundColor: 'var(--bg-white)'}}>
                    <div className="sic-inline-cta-inner">
                        <h3 className="sic-inline-cta-heading">Ready to plan your Scenic Iceland voyage?</h3>
                        <div className="fcel-hero-btn-row">
                            <Link to="/contact" className="fcel-btn-primary" style={{ background: 'var(--fcel-navy)', color: '#ffffff' }}>
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </section>

                {/* LANDSCAPES */}
                <section className="sic-dest-section">
                    <div className="sic-dest-container">
                        <div className="sic-dest-header">
                            <h2 className="fcel-occasion-title">
                                Explore Iceland's Incredible Landscapes
                            </h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>

                            <p className="fcel-section-heading">Every Scenic Iceland itinerary showcases the country's extraordinary diversity.</p>
                        </div>
                        <div className="sic-dest-grid">
                            {sicLandscapes.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="sic-dest-card">
                                        <div className="sic-dest-card-content">
                                            <div className="sic-dest-icon-wrap">
                                                <DestIcon size={24} />
                                            </div>
                                            <h4 className="sic-dest-card-name">{dest.name}</h4>
                                            <p className="sic-dest-card-desc">{dest.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WILDLIFE ENCOUNTERS */}
                <section className="fcel-why-section">
                    <div className="fcel-why-container">
                        <div className="fcel-why-header">
                            <h2 className="fcel-occasion-title" style={{color: 'white'}}>
                                Incredible Wildlife Encounters
                            </h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>

                            <p className="fcel-section-heading">Iceland is one of Europe's premier wildlife destinations.</p>
                            <p className="fcel-lead-paragraph">Guests may encounter:</p>
                        </div>
                        <div className="fcel-why-grid">
                            {sicWildlife.map((item, idx) => {
                                const SicIcon = item.icon
                                return (
                                    <div key={idx} className="fcel-why-card">
                                        <div className="fcel-why-icon-ring">
                                            <SicIcon size={22} />
                                        </div>
                                        <p className="fcel-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', color: '#cbd5e1', maxWidth: '780px', margin: '40px auto 0' }}>
                            Scenic's expert Discovery Team helps guests understand Iceland's fascinating ecosystems throughout the voyage.
                        </p>
                    </div>
                </section>

                {/* EXPEDITION EXPERIENCES */}
                <section className="fcel-occasion-section">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid">
                            <div className="fcel-occasion-media seir-suites-layout">
                                <div className="sic-placeholder">
                                    <Compass size={40} />
                                    <span>Image Placeholder: Zodiac Cruise Near Glacier</span>
                                </div>
                                <div className="sic-placeholder">
                                    <Camera size={32} />
                                    <span>Image Placeholder: Wildlife Photography</span>
                                </div>
                                <div className="sic-placeholder seir-placeholder-full">
                                    <Mountain size={32} />
                                    <span>Image Placeholder: Volcanic Landscape Hike</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="fcel-occasion-title">
                                    Expedition Experiences
                                </h2>
                                <p className="fcel-occasion-intro">Scenic Eclipse is purpose-built for exploration.</p>
                                <p className="fcel-occasion-intro">Depending on your itinerary and weather conditions, experiences may include:</p>
                                <ul className="fcel-occasion-list">
                                    {sicExpeditionActivities.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    These immersive activities bring travelers closer to Iceland's remarkable natural environment.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SCENIC ECLIPSE LUXURY */}
                <section className="fcel-occasion-section fcel-occasion-soft">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid fcel-occasion-reverse">
                            <div className="fcel-occasion-media seir-suites-layout">
                                <div className="sic-placeholder">
                                    <Home size={40} />
                                    <span>Image Placeholder: Veranda Suite Onboard</span>
                                </div>
                                <div className="sic-placeholder">
                                    <Sun size={32} />
                                    <span>Image Placeholder: Outdoor Observation Deck</span>
                                </div>
                                <div className="sic-placeholder seir-placeholder-full">
                                    <Users size={32} />
                                    <span>Image Placeholder: Butler Service Onboard</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="fcel-occasion-title">
                                    Scenic Eclipse Luxury
                                </h2>
                                <p className="fcel-occasion-intro">While Iceland's landscapes are rugged, life onboard is exceptionally luxurious.</p>
                                <p className="fcel-occasion-intro">Guests enjoy:</p>
                                <ul className="fcel-occasion-list">
                                    {sicLuxuryItems.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    The result is a perfect balance between adventure and relaxation.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING & CULINARY EXPERIENCES */}
                <section className="fcel-occasion-section">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid">
                            <div className="fcel-occasion-media seir-suites-layout">
                                <div className="sic-placeholder">
                                    <Utensils size={40} />
                                    <span>Image Placeholder: Fine Dining Restaurant</span>
                                </div>
                                <div className="sic-placeholder">
                                    <Fish size={32} />
                                    <span>Image Placeholder: Fresh Icelandic Seafood</span>
                                </div>
                                <div className="sic-placeholder seir-placeholder-full">
                                    <Sparkles size={32} />
                                    <span>Image Placeholder: In-Suite Dining Setup</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="fcel-occasion-title">
                                    Dining & Culinary Experiences
                                </h2>
                                <p className="fcel-occasion-intro">Exceptional dining inspired by global cuisine and local flavors.</p>
                                <p className="fcel-occasion-intro">Guests enjoy:</p>
                                <ul className="fcel-occasion-list">
                                    {sicDiningItems.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    Every meal is prepared using premium ingredients and exceptional culinary expertise.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WELLNESS AT SEA */}
                <section className="sic-wellness-section">
                    <div className="sic-wellness-container">
                        <div className="sic-wellness-header">
                            <h2 className="fcel-occasion-title">
                                Wellness at Sea
                            </h2>
                                                        <div className="fcel-heading-bar fcel-bar-center"></div>

                            <p className="fcel-section-heading">After exploring Iceland's dramatic landscapes, guests can relax in Scenic's wellness facilities.</p>
                            <p className="fcel-lead-paragraph">Amenities include:</p>
                        </div>
                        <div className="sic-wellness-grid">
                            {sicWellness.map((item, idx) => {
                                const SicIcon = item.icon
                                return (
                                    <div key={idx} className="sic-wellness-card">
                                        <div className="sic-wellness-icon">
                                            <SicIcon size={22} />
                                        </div>
                                        <p className="sic-wellness-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '760px', margin: '40px auto 0' }}>
                            The spa provides the perfect retreat after a day of exploration.
                        </p>
                    </div>
                </section>

                {/* MID-PAGE CTA #3 */}
                <section className="sic-inline-cta" style={{backgroundColor: 'var(--bg-white)'}}>
                    <div className="sic-inline-cta-inner">
                        <h3 className="sic-inline-cta-heading">See what's included on your Scenic Iceland voyage</h3>
                        <div className="fcel-hero-btn-row">
                            <button className="fcel-btn-primary" style={{ background: 'var(--fcel-navy)', color: '#ffffff' }}>
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="sic-included-section">
                    <div className="sic-included-container">
                        <h2 className="fcel-occasion-title">
                            What's Included?
                        </h2>
                        <p className="fcel-section-heading">Scenic Iceland Cruises include:</p>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="fcel-villa-features-grid">
                            {sicIncluded.map((item, idx) => (
                                <div key={idx} className="fcel-villa-feature-pill" style={{backgroundColor: 'var(--bg-white)'}}>
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="sic-included-note">
                            Optional helicopter flights and submarine dives may be available on select voyages for an additional charge.
                        </p>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE ICELAND */}
                <section className="sic-season-section">
                    <div className="sic-season-container">
                        <h2 className="fcel-occasion-title" style={{color: 'white'}}>
                            Best Time to Cruise Iceland
                        </h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>

                        <p className="fcel-section-heading">Choose the season that matches your travel style.</p>
                        <div className="sic-season-grid">
                            {sicSeasons.map((season, idx) => {
                                const SicIcon = season.icon
                                return (
                                    <div key={idx} className="sic-season-card">
                                        <div className="sic-season-icon">
                                            <SicIcon size={22} />
                                        </div>
                                        <h3 className="sic-season-title">{season.title}</h3>
                                        <p className="sic-season-text">{season.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sic-season-note">
                            Every season offers unique experiences depending on your travel interests.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE SCENIC ICELAND CRUISES */}
                <section className="sic-audience-section">
                    <div className="sic-audience-container">
                        <h2 className="fcel-occasion-title">
                            Who Should Choose Scenic Iceland Cruises?
                        </h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>

                        <p className="fcel-section-heading">Scenic Iceland Cruises are ideal for:</p>
                        <div className="sic-audience-grid">
                            {sicAudience.map((item, idx) => {
                                const SicIcon = item.icon
                                return (
                                    <div key={idx} className="sic-audience-card">
                                        <div className="sic-audience-icon">
                                            <SicIcon size={20} />
                                        </div>
                                        <p className="sic-audience-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sic-audience-closing">
                            If you want to combine extraordinary landscapes with exceptional comfort, Scenic is one of the finest ways to experience Iceland.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="sic-why-us-section">
                    <div className="sic-why-us-container">
                        <div className="sic-why-us-top">
                            <h2 className="fcel-occasion-title">Trusted Scenic Specialists</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>

                            <p className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</p>
                            <p className="fcel-lead-paragraph">Our Scenic specialists help you:</p>
                        </div>
                        <div className="sic-why-us-grid">
                            {sicWhyBook.map((item, idx) => {
                                const SicIcon = item.icon
                                return (
                                    <div key={idx} className="sic-why-us-card">
                                        <div className="sic-why-us-icon">
                                            <SicIcon size={22} />
                                        </div>
                                        <p className="sic-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            We help ensure your Scenic Iceland adventure is seamless from beginning to end.
                        </p>
                    </div>
                </section>


                {/* EXPERT INSIGHT */}
                <section id="explora-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            {/* Left Side: Portrait and Floating Stat Badge */}
                            <div className="medi-editorial-portrait-block">
                                <div className="medi-editorial-image-frame">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" />
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

                            {/* Right Side: Editorial Text */}
                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <Award size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Modern Luxury Travelers <br className="medi-growth-title-break" />Are Choosing Scenic
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Scenic travelers prioritizing:
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Polar discovery yachting',
                                            'Truly all-inclusive luxury',
                                            'Butler service for every suite',
                                            'Helicopter & submarine features',
                                            'Up to 10 dining experiences',
                                            'Immersive Zodiac excursions'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <CheckCircle size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="medi-editorial-body-para">
                                    As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                                </p>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            { title: 'Ultra-luxury yachting', icon: Ship },
                                            { title: 'Polar expeditions', icon: Mountain },
                                            { title: 'Butler services', icon: Users },
                                            { title: 'Luxury cruise planning', icon: Compass },
                                            { title: 'Custom expedition travel', icon: Sparkles }
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
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {sicFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => sicToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {sicActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {sicActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Discover Iceland Aboard Scenic Eclipse?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            From dramatic fjords to abundant wildlife, let our Scenic specialists design the perfect Iceland Discovery Yacht voyage for you.
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

export default ScenicIcelandCruises