import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './Scenicmediterraneancruises.css'
import italyImg from "../../assets/Scenicmediterraneancruises/amalfi-coast-italy-scenic-coastal-village-sea-view-travel-vacation.webp"
import greeceImg from "../../assets/Scenicmediterraneancruises/santorini-greece-oia-blue-domed-churches-whitewashed-village-caldera-sea-view.webp"
import croatiaImg from "../../assets/Scenicmediterraneancruises/porto-timoni-twin-bays-corfu-greece-turquoise-water-pink-flowers-scenic-coastal-view.webp"
import franceImg from "../../assets/Scenicmediterraneancruises/colmar-france-petite-venise-colorful-half-timbered-houses-canal-flowers-alsace-travel.webp"
import spainImg from "../../assets/Scenicmediterraneancruises/positano-amalfi-coast-italy-cliffside-village-sea-view-bougainvillea.webp"
import portugalImg from "../../assets/Scenicmediterraneancruises/portofino-liguria-italy-colorful-harbor-village-boat-travel-destination.webp"
import montenegroImg from "../../assets/Scenicmediterraneancruises/zakynthos-greece-navagio-beach-shipwreck-cove-turquoise-water-cliffs.webp"
import {
    Sparkles, Phone, LayoutList, CheckCircle, Ship, Anchor, Compass, Users, Heart, Wifi, Coffee, Waves, Globe, Award, Crown, MapPin, Sun, Utensils, Image as ImageIcon, Wine, Music, Landmark, ShoppingBag, Camera, Flower2, CloudSun, Umbrella, Grape, Palette, Star, Plane, Bed, Gem, ChefHat, Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ScenicMediterraneanCruises() {

    /* Hero rotating gradient tints (no photos used) */
    const smcHeroTints = [
        'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 60%, #274472 100%)',
        'linear-gradient(135deg, #1c2f4a 0%, #274472 60%, #0f1c2e 100%)',
        'linear-gradient(135deg, #274472 0%, #0f1c2e 60%, #1c2f4a 100%)'
    ]
    const [smcCurrentHero, setSmcCurrentHero] = useState(0)
    useEffect(() => {
        const smcTimer = setInterval(() => {
            setSmcCurrentHero((prev) => (prev + 1) % smcHeroTints.length)
        }, 5000)
        return () => clearInterval(smcTimer)
    }, [smcHeroTints.length])

    const [smcActiveFaq, setSmcActiveFaq] = useState(null)
    const smcToggleFaq = (index) => {
        setSmcActiveFaq(smcActiveFaq === index ? null : index)
    }

    /* Reusable placeholder visual block (used instead of real images) */
    const SmcPlaceholder = ({ label, dark, small, icon: Icon = ImageIcon }) => (
        <div className={`smc-img-placeholder ${dark ? 'smc-img-placeholder-dark' : ''} ${small ? 'smc-img-placeholder-sm' : ''}`}>
            <Icon size={small ? 22 : 30} />
            <span>{label}</span>
        </div>
    )

    /* Why Choose Scenic */
    const smcWhyList = [
        { text: 'Six-star Discovery Yacht experience', icon: Crown },
        { text: 'Spacious all-veranda suites', icon: Bed },
        { text: 'Butler service for every guest', icon: Users },
        { text: 'Multiple fine dining venues', icon: Utensils },
        { text: 'Premium beverages included', icon: Wine },
        { text: 'Complimentary Wi-Fi', icon: Wifi },
        { text: 'Included gratuities', icon: CheckCircle },
        { text: 'Scenic Freechoice excursions', icon: Compass },
        { text: 'Scenic Enrich experiences', icon: Sparkles },
        { text: 'Personalized service', icon: Heart },
        { text: 'Small ship atmosphere', icon: Ship }
    ]

    /* Mediterranean Destinations — using local assets from src/assets/Scenicmediterraneancruises/ */
    const smcDestinations = [
        { name: 'Italy', desc: 'Experience Rome, Venice, Florence, Sicily, the Amalfi Coast, Portofino, and charming seaside villages filled with history, art, and exceptional cuisine.', img: italyImg },
        { name: 'Greece', desc: 'Visit Athens, Santorini, Mykonos, Crete, Rhodes, and smaller Greek islands famous for whitewashed villages and stunning sunsets.', img: greeceImg },
        { name: 'Croatia', desc: "Explore Dubrovnik, Split, Hvar, Korčula, and the breathtaking Dalmatian Coast.", img: croatiaImg },
        { name: 'France', desc: 'Discover Nice, Cannes, Monaco, Marseille, Corsica, and the glamorous French Riviera.', img: franceImg },
        { name: 'Spain', desc: 'Sail to Barcelona, Valencia, Málaga, Palma de Mallorca, Ibiza, and historic Mediterranean ports.', img: spainImg },
        { name: 'Portugal', desc: "Select itineraries include Lisbon and Portugal's scenic Atlantic coastline before entering the Mediterranean.", img: portugalImg },
        { name: 'Montenegro', desc: "Cruise into the spectacular Bay of Kotor, one of Europe's most beautiful natural harbors.", img: montenegroImg }
    ]

    /* Scenic Eclipse Experience */
    const smcExperienceList = [
        'Observation lounges', 'Multiple outdoor viewing areas', 'Infinity pools', 'Spacious sun decks',
        'Elegant lounges', 'Private verandas', 'Butler service', 'Contemporary luxury design'
    ]

    /* Dining & Culinary */
    const smcDiningList = [
        { text: 'Mediterranean cuisine', icon: Utensils },
        { text: 'Fresh seafood', icon: Anchor },
        { text: 'Italian specialties', icon: ChefHat },
        { text: 'French cuisine', icon: Utensils },
        { text: 'Spanish tapas', icon: Utensils },
        { text: 'Greek favorites', icon: Utensils },
        { text: 'International menus', icon: Globe },
        { text: 'Premium wines', icon: Wine }
    ]

    /* Scenic Freechoice Excursions */
    const smcExcursionsList = [
        { text: 'Walking tours', icon: MapPin },
        { text: 'Historic landmarks', icon: Landmark },
        { text: 'Wine tastings', icon: Grape },
        { text: 'Cooking classes', icon: Utensils },
        { text: 'Museum visits', icon: Palette },
        { text: 'Local markets', icon: ShoppingBag },
        { text: 'Coastal villages', icon: Waves },
        { text: 'Archaeological sites', icon: Landmark },
        { text: 'Scenic drives', icon: Compass },
        { text: 'Cultural performances', icon: Music }
    ]

    /* Scenic Enrich Experiences */
    const smcEnrichList = [
        { text: 'Private concerts', icon: Music },
        { text: 'Historic palace events', icon: Landmark },
        { text: 'Local cultural performances', icon: Sparkles },
        { text: 'Exclusive dinners', icon: Utensils },
        { text: 'Behind-the-scenes access', icon: Camera },
        { text: 'Special evening events', icon: Gem }
    ]

    /* Wellness at Sea */
    const smcWellnessList = [
        'Senses Spa', 'Steam rooms', 'Infrared sauna', 'Salt Therapy Lounge',
        'Yoga studio', 'Fitness center', 'Vitality pools', 'Massage treatments', 'Beauty salon'
    ]

    /* What's Included */
    const smcIncludedList = [
        { text: 'Luxury suite accommodations', icon: Bed },
        { text: 'Butler service', icon: Users },
        { text: 'Fine dining', icon: Utensils },
        { text: 'Premium beverages', icon: Wine },
        { text: 'Specialty restaurants', icon: ChefHat },
        { text: 'Wi-Fi', icon: Wifi },
        { text: 'Gratuities', icon: CheckCircle },
        { text: 'Scenic Freechoice excursions', icon: Compass },
        { text: 'Scenic Enrich experiences', icon: Sparkles },
        { text: 'Fitness facilities', icon: Heart },
        { text: 'Entertainment', icon: Music },
        { text: 'Concierge service', icon: Crown }
    ]

    /* Best Time to Cruise */
    const smcSeasons = [
        { title: 'Spring (April–May)', desc: 'Comfortable temperatures, blooming landscapes, and fewer crowds.', icon: Flower2 },
        { title: 'Summer (June–August)', desc: 'Warm weather, lively coastal towns, and vibrant beach destinations.', icon: Sun },
        { title: 'Fall (September–October)', desc: 'Pleasant temperatures, excellent wine harvests, and ideal sightseeing conditions.', icon: CloudSun }
    ]

    /* Who Should Choose */
    const smcAudienceList = [
        'Couples', 'Luxury travelers', 'Honeymooners', 'Retirees', 'Small ship enthusiasts',
        'Food and wine lovers', 'Cultural travelers', 'First-time Mediterranean visitors', 'Experienced luxury cruisers'
    ]

    /* Why Book with Trips & Ships */
    const smcWhyBookList = [
        { text: 'Compare Scenic itineraries', icon: LayoutList },
        { text: 'Select the ideal suite', icon: Bed },
        { text: 'Choose the best sailing season', icon: Sun },
        { text: 'Arrange flights and hotels', icon: Plane },
        { text: 'Coordinate private transfers', icon: MapPin },
        { text: 'Secure exclusive offers', icon: Award },
        { text: 'Plan pre- and post-cruise stays', icon: Umbrella },
        { text: 'Provide concierge-level travel support', icon: Crown }
    ]

    /* FAQs */
    const smcFaqs = [
        { question: 'Where do Scenic Mediterranean Cruises sail?', answer: 'Scenic sails throughout the Mediterranean, including Italy, Greece, Croatia, France, Spain, Montenegro, Malta, and Portugal on select itineraries.' },
        { question: 'Which ships sail the Mediterranean?', answer: 'Scenic Eclipse and Scenic Eclipse II both operate luxury Mediterranean voyages.' },
        { question: 'Are Scenic Mediterranean Cruises all-inclusive?', answer: 'Yes. Most voyages include luxury accommodations, butler service, dining, premium beverages, Wi-Fi, gratuities, and many shore excursions.' },
        { question: 'Does every suite include butler service?', answer: 'Yes. Every suite aboard Scenic Eclipse and Scenic Eclipse II includes personalized butler service.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences on many Mediterranean itineraries.' },
        { question: 'What dining options are available?', answer: 'Guests enjoy multiple restaurants serving Mediterranean specialties, international cuisine, fresh seafood, and premium wines.' },
        { question: 'What is the best time to cruise the Mediterranean?', answer: 'Spring (April–May) and Fall (September–October) offer pleasant weather, fewer crowds, and excellent sightseeing opportunities.' },
        { question: 'Is Scenic suitable for first-time Mediterranean cruisers?', answer: "Absolutely. Scenic's all-inclusive experience and personalized service make it ideal for first-time luxury cruisers." },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included throughout most Scenic Mediterranean cruises.' },
        { question: 'Are gratuities included?', answer: 'Yes. Scenic includes onboard gratuities in the cruise fare.' },
        { question: 'How many guests do Scenic Discovery Yachts accommodate?', answer: 'Scenic Eclipse and Scenic Eclipse II accommodate approximately 228 guests, creating an intimate luxury yacht atmosphere.' },
        { question: 'Why choose Scenic over larger cruise ships?', answer: 'Scenic offers a more personalized experience with spacious suites, butler service, fewer guests, immersive excursions, and nearly all-inclusive luxury, making it ideal for travelers seeking a refined Mediterranean journey.' }
    ]

    const smcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-mediterranean-cruises",
                "name": "Scenic Mediterranean Cruises",
                "url": "https://www.tripsandships.com/scenic-mediterranean-cruises",
                "description": "Discover Scenic Mediterranean Cruises aboard Scenic Eclipse and Scenic Eclipse II. Explore Italy, Greece, Croatia, France, Spain, and the Adriatic with six-star luxury, immersive excursions, and all-inclusive experiences.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/scenic-mediterranean-cruises#article" }
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
                "@id": "https://www.tripsandships.com/scenic-mediterranean-cruises#article",
                "headline": "Scenic Mediterranean Cruises",
                "url": "https://www.tripsandships.com/scenic-mediterranean-cruises",
                "description": "Expert guide to Scenic Mediterranean Cruises featuring Scenic Eclipse and Scenic Eclipse II, including destinations, dining, accommodations, excursions, inclusions, and luxury travel experiences.",
                "image": "https://www.tripsandships.com/images/scenic-mediterranean-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-mediterranean-cruises" }
            },
            {
                "@type": "Service",
                "name": "Scenic Mediterranean Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Mediterranean Cruise Consulting",
                "description": "Expert Scenic Mediterranean cruise planning and consultation services helping travelers choose the ideal Discovery Yacht, itinerary, suite, and Mediterranean destination."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Mediterranean Cruises", "item": "https://www.tripsandships.com/scenic-mediterranean-cruises" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Where do Scenic Mediterranean Cruises sail?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic sails throughout the Mediterranean, including Italy, Greece, Croatia, France, Spain, Montenegro, Malta, and Portugal on select itineraries." } },
                    { "@type": "Question", "name": "Which Scenic ships cruise the Mediterranean?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse and Scenic Eclipse II both operate luxury Mediterranean voyages." } },
                    { "@type": "Question", "name": "Are Scenic Mediterranean Cruises all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Scenic Mediterranean voyages include luxury accommodations, butler service, fine dining, premium beverages, Wi-Fi, gratuities, and many shore excursions." } },
                    { "@type": "Question", "name": "Does every suite include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse and Scenic Eclipse II includes personalized butler service." } },
                    { "@type": "Question", "name": "Are shore excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic includes Scenic Freechoice excursions and Scenic Enrich experiences on many Mediterranean itineraries." } },
                    { "@type": "Question", "name": "What dining options are available?", "acceptedAnswer": { "@type": "Answer", "text": "Guests enjoy multiple restaurants serving Mediterranean specialties, fresh seafood, regional cuisine, international favorites, and premium wines." } },
                    { "@type": "Question", "name": "What is the best time for a Scenic Mediterranean Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Spring (April to May) and Fall (September to October) offer pleasant weather, fewer crowds, and ideal sightseeing conditions." } },
                    { "@type": "Question", "name": "Is Scenic suitable for first-time Mediterranean cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic's all-inclusive experience, luxury accommodations, and personalized service make it an excellent choice for first-time Mediterranean travelers." } },
                    { "@type": "Question", "name": "Is Wi-Fi included on Scenic Mediterranean Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is included for guests throughout most Scenic Mediterranean voyages." } },
                    { "@type": "Question", "name": "Are gratuities included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic includes onboard gratuities, creating a truly all-inclusive luxury experience." } },
                    { "@type": "Question", "name": "How many guests do Scenic Discovery Yachts accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse and Scenic Eclipse II accommodate approximately 228 guests, creating an intimate luxury yacht atmosphere." } },
                    { "@type": "Question", "name": "Why choose Scenic for a Mediterranean cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic combines six-star luxury, spacious all-veranda suites, butler service, immersive shore excursions, outstanding dining, and small-ship experiences for an unforgettable Mediterranean vacation." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Mediterranean Cruises | Luxury Mediterranean Cruises & Discovery Yachts</title>
                <meta name="title" content="Scenic Mediterranean Cruises | Luxury Cruise Guide" />
                <meta
                    name="description"
                    content="Discover Scenic Mediterranean Cruises aboard Scenic Eclipse and Scenic Eclipse II. Explore Italy, Greece, Croatia, France, Spain, and the Adriatic with six-star luxury, immersive excursions, and all-inclusive experiences."
                />
                <meta name="keywords" content="Scenic Mediterranean Cruises, Scenic Mediterranean cruise, Scenic Eclipse Mediterranean, Luxury Mediterranean cruises, Scenic Discovery Yacht Mediterranean, Mediterranean luxury cruise, Scenic Europe cruises, Mediterranean yacht cruise" />
                <script type="application/ld+json">
                    {JSON.stringify(smcSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION — rotating gradient tints, no photos */}
                <section className="fcel-hero-section">
                    {smcHeroTints.map((tint, idx) => (
                        <div
                            key={idx}
                            className={`fcel-hero-slide ${smcCurrentHero === idx ? 'fcel-slide-active' : ''}`}
                            style={{ backgroundImage: tint }}
                        />
                    ))}
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Six-Star Discovery Yacht Cruising</span>
                        </div>
                        <h1 className="fcel-hero-title">Scenic Mediterranean Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Discover the Mediterranean in Six-Star Luxury
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
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
                                <span className="fcel-eyebrow-label">SIX-STAR MEDITERRANEAN LUXURY</span>
                                <h2 className="fcel-section-heading">Discover the Mediterranean in Six-Star Luxury</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    The Mediterranean has captivated travelers for centuries with its ancient civilizations, picturesque coastal villages, world-famous cuisine, and crystal-clear waters. A Scenic Mediterranean Cruise combines these unforgettable destinations with the exceptional luxury of Scenic's Discovery Yachts, creating a truly immersive travel experience.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Unlike larger cruise ships that often focus on crowded ports and rigid schedules, Scenic Eclipse and Scenic Eclipse II provide an intimate yacht-style atmosphere, allowing guests to explore iconic cities and hidden gems while enjoying six-star accommodations, personalized service, and nearly all-inclusive luxury.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <SmcPlaceholder label="Scenic Eclipse in the Mediterranean" />
                                <div className="fcel-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Discovery Yacht Experience</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Whether you're strolling through the charming streets of Dubrovnik, enjoying wine in Tuscany, exploring ancient Greek ruins, or relaxing on the French Riviera, Scenic delivers one of the most refined Mediterranean cruise experiences available.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE SCENIC */}
                <section className="smc-why-section">
                    <div className="smc-why-container">
                        <span className="fcel-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Why Choose Scenic for a Mediterranean Cruise?
                        </span>
                        <h2 className="fcel-section-heading">A luxury travel experience unlike traditional cruise lines.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Highlights include:</p>
                        <div className="smc-why-grid">
                            {smcWhyList.map((item, idx) => {
                                const SmcIcon = item.icon
                                return (
                                    <div key={idx} className="smc-icon-pill">
                                        <SmcIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="smc-why-note">
                            Every detail is designed to create a seamless luxury vacation where guests simply relax and enjoy the journey.
                        </p>
                    </div>
                </section>

                {/* MEDITERRANEAN DESTINATIONS */}
                <section className="smc-destinations-section">
                    <div className="smc-destinations-container">
                        <div className="smc-destinations-header">
                            <span className="fcel-eyebrow-label">
                                <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Mediterranean Destinations
                            </span>
                            <h2 className="fcel-section-heading">Europe's most spectacular destinations.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Scenic itineraries visit many of Europe's most spectacular destinations.</p>
                        </div>
                        <div className="smc-destinations-grid">
                            {smcDestinations.map((dest, idx) => {
                                const isWide = dest.name === 'Montenegro'
                                return (
                                    <div key={idx} className={`smc-destination-card ${isWide ? 'smc-destinations-wide' : ''}`}>
                                        <img src={dest.img} alt={dest.name} className="smc-destination-img" />
                                        <div className="smc-destination-card-body">
                                            <h4 className="smc-destination-name">{dest.name}</h4>
                                            <p className="smc-destination-desc">{dest.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA BANNER #1 */}
                <section className="smc-cta-banner">
                    <div className="smc-cta-banner-inner">
                        <p className="smc-cta-banner-text">Ready to explore Italy, Greece, Croatia, and beyond?</p>
                        <Link to="/contact" className="smc-cta-banner-btn">
                            <Phone size={16} />
                            Speak With an Advisor
                        </Link>
                    </div>
                </section>

                {/* SCENIC ECLIPSE EXPERIENCE */}
                <section className="smc-experience-section">
                    <div className="smc-experience-container">
                        <div className="smc-experience-grid">
                            <div className="smc-experience-gallery">
                                <SmcPlaceholder label="Scenic Eclipse Sun Deck" />
                                <SmcPlaceholder label="Observation Lounge" small />
                                <SmcPlaceholder label="Infinity Pool" small />
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <Ship size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Scenic Eclipse Experience
                                </span>
                                <h2 className="fcel-section-heading">A luxury yacht experience.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Scenic Eclipse transforms Mediterranean cruising into a luxury yacht experience.
                                </p>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: 0 }}>Guests enjoy:</p>
                                <div className="smc-experience-list-grid">
                                    {smcExperienceList.map((item, idx) => (
                                        <div key={idx} className="smc-icon-pill">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Unlike larger cruise ships carrying thousands of guests, Scenic's smaller ships create a peaceful and intimate atmosphere.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING & CULINARY EXPERIENCES */}
                <section className="smc-dining-section">
                    <div className="smc-dining-container">
                        <div className="smc-dining-header">
                            <span className="fcel-eyebrow-label">
                                <Utensils size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Dining & Culinary Experiences
                            </span>
                            <h2 className="fcel-section-heading">Food is an essential part of every Mediterranean journey.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Scenic offers multiple dining venues featuring:</p>
                        </div>
                        <div className="smc-dining-banner">
                            <SmcPlaceholder label="Onboard Fine Dining" dark />
                            <SmcPlaceholder label="Regional Tasting Menu" dark />
                            <SmcPlaceholder label="Wine Cellar" dark />
                        </div>
                        <div className="smc-dining-pills-wrap">
                            {smcDiningList.map((item, idx) => {
                                const SmcIcon = item.icon
                                return (
                                    <span key={idx} className="smc-dining-pill">
                                        <SmcIcon size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                        {item.text}
                                    </span>
                                )
                            })}
                        </div>
                        <p className="smc-dining-note">
                            Every meal reflects the destinations you're visiting while maintaining exceptional culinary standards.
                        </p>
                    </div>
                </section>

                {/* SCENIC FREECHOICE EXCURSIONS */}
                <section className="smc-excursions-section">
                    <div className="smc-excursions-container">
                        <span className="fcel-eyebrow-label">
                            <Compass size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Scenic Freechoice Excursions
                        </span>
                        <h2 className="fcel-section-heading">Immersive shore experiences.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Scenic includes a variety of immersive shore experiences. Examples include:</p>
                        <div className="smc-excursions-grid">
                            {smcExcursionsList.map((item, idx) => {
                                const SmcIcon = item.icon
                                return (
                                    <div key={idx} className="smc-excursion-card">
                                        <SmcIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="smc-excursions-note">
                            Guests can personalize their vacation by selecting experiences that match their interests.
                        </p>
                    </div>
                </section>

                {/* CTA BANNER #2 */}
                <section className="smc-cta-banner">
                    <div className="smc-cta-banner-inner">
                        <p className="smc-cta-banner-text">Want help choosing your Scenic Freechoice excursions?</p>
                        <Link to="/contact" className="smc-cta-banner-btn">
                            <LayoutList size={16} />
                            Request Itinerary Options
                        </Link>
                    </div>
                </section>

                {/* SCENIC ENRICH EXPERIENCES */}
                <section className="smc-enrich-section">
                    <div className="smc-enrich-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">
                                <Gem size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Scenic Enrich Experiences
                            </span>
                            <h2 className="fcel-section-heading">Exclusive experiences unavailable to most travelers.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Depending on your itinerary, these may include:</p>
                        </div>
                        <div className="smc-enrich-grid">
                            {smcEnrichList.map((item, idx) => {
                                const SmcIcon = item.icon
                                return (
                                    <div key={idx} className="smc-enrich-card">
                                        <div className="smc-enrich-card-icon">
                                            <SmcIcon size={20} />
                                        </div>
                                        <p className="smc-enrich-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="smc-enrich-note">
                            These curated moments create unforgettable memories beyond traditional sightseeing.
                        </p>
                    </div>
                </section>

                {/* WELLNESS AT SEA */}
                <section className="smc-wellness-section">
                    <div className="smc-wellness-container">
                        <div className="smc-wellness-grid">
                            <div>
                                <SmcPlaceholder label="Senses Spa Vitality Pool" dark />
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <Waves size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Wellness at Sea
                                </span>
                                <h2 className="fcel-section-heading">Relax and recharge.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph" style={{ color: '#cbd5e1', marginBottom: 0 }}>
                                    Sea days are an opportunity to relax and recharge. Guests enjoy:
                                </p>
                                <ul className="smc-wellness-list">
                                    {smcWellnessList.map((item, idx) => (
                                        <li key={idx} className="smc-wellness-list-item">
                                            <CheckCircle size={15} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="smc-wellness-note">
                                    The wellness facilities rival many of the world's finest luxury resorts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="smc-included-section">
                    <div className="smc-included-container">
                        <span className="fcel-eyebrow-label">
                            <CheckCircle size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            What's Included?
                        </span>
                        <h2 className="fcel-section-heading">Scenic Mediterranean Cruises include:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="smc-included-grid">
                            {smcIncludedList.map((item, idx) => {
                                const SmcIcon = item.icon
                                return (
                                    <div key={idx} className="smc-included-item">
                                        <SmcIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="smc-included-note">
                            This all-inclusive approach allows guests to focus on enjoying their vacation instead of worrying about extra costs.
                        </p>
                    </div>
                </section>

                {/* BEST TIME FOR A SCENIC MEDITERRANEAN CRUISE */}
                <section className="smc-seasons-section">
                    <div className="smc-seasons-container">
                        <span className="fcel-eyebrow-label">
                            <Sun size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Best Time for a Scenic Mediterranean Cruise
                        </span>
                        <h2 className="fcel-section-heading">Plan your ideal sailing season.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="smc-seasons-grid">
                            {smcSeasons.map((season, idx) => {
                                const SmcIcon = season.icon
                                return (
                                    <div key={idx} className="smc-season-card">
                                        <div className="smc-season-icon">
                                            <SmcIcon size={22} />
                                        </div>
                                        <h4 className="smc-season-title">{season.title}</h4>
                                        <p className="smc-season-desc">{season.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="smc-seasons-note">
                            Many luxury travelers prefer spring and fall for their comfortable climate and smaller crowds.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="smc-audience-section">
                    <div className="smc-audience-container">
                        <span className="fcel-eyebrow-label">
                            <Users size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Who Should Choose Scenic Mediterranean Cruises?
                        </span>
                        <h2 className="fcel-section-heading">Scenic is perfect for:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="smc-audience-pills-wrap">
                            {smcAudienceList.map((item, idx) => (
                                <span key={idx} className="smc-audience-pill">{item}</span>
                            ))}
                        </div>
                        <p className="smc-audience-note">
                            If you value exceptional service, spacious accommodations, and immersive destination experiences, Scenic is an outstanding choice.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="smc-whybook-section">
                    <div className="smc-whybook-container">
                        <span className="fcel-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Why Book with Trips & Ships Luxury Travel?
                        </span>
                        <h2 className="fcel-section-heading">Our luxury cruise advisors help you:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <ul className="smc-whybook-list">
                            {smcWhyBookList.map((item, idx) => {
                                const SmcIcon = item.icon
                                return (
                                    <li key={idx} className="smc-whybook-item">
                                        <SmcIcon size={16} />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="fcel-lead-paragraph">
                            We ensure every Scenic Mediterranean Cruise is customized to your travel style.
                        </p>
                        <div className="smc-whybook-cta-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                        </div>
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
                            {smcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => smcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {smcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {smcActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Book Your Scenic Mediterranean Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Our luxury cruise advisors help you compare Scenic itineraries, select the ideal suite, choose the best sailing season, arrange flights and hotels, coordinate private transfers, secure exclusive offers, plan pre- and post-cruise stays, and provide concierge-level travel support.
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

export default ScenicMediterraneanCruises