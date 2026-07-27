import Navbar from '../../components/Navbar/Navbar'
import './Sceniceclipsereviews.css'
import {
    Sparkles, Phone, LayoutList, Star, CheckCircle, XCircle,
    Ship, Anchor, Compass, Users, Heart, Wifi, Coffee, Waves,
    Snowflake, Mountain, Globe, Award, Crown, MapPin, Wind,
    Plane, ChefHat, Bed, Home, Sun, Utensils
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

// import hero1 from '../../assets/ScenicEclipseReviews/scenic-eclipse-luxury-expedition-yacht-exterior.jpg'
// import hero2 from '../../assets/ScenicEclipseReviews/scenic-eclipse-discovery-yacht-antarctica-cruise.jpg'
// import hero3 from '../../assets/ScenicEclipseReviews/scenic-eclipse-suite-ocean-view-veranda.jpg'

// import introImg from '../../assets/ScenicEclipseReviews/scenic-eclipse-discovery-yacht-six-star-luxury.jpg'
// import impressionsImg from '../../assets/ScenicEclipseReviews/scenic-eclipse-observation-lounge-interior-design.jpg'
// import suitesImg from '../../assets/ScenicEclipseReviews/scenic-eclipse-suite-butler-service-luxury-bed.jpg'

function ScenicEclipseReviews() {

    /* Hero rotating background images */
    const sceHeroImages = []
    const [sceCurrentHero, setSceCurrentHero] = useState(0)
    useEffect(() => {
        const sceTimer = setInterval(() => {
            setSceCurrentHero((prev) => (prev + 1) % sceHeroImages.length)
        }, 5000)
        return () => clearInterval(sceTimer)
    }, [sceHeroImages.length])

    const [sceActiveFaq, setSceActiveFaq] = useState(null)
    const sceToggleFaq = (index) => {
        setSceActiveFaq(sceActiveFaq === index ? null : index)
    }

    /* Reusable star rating renderer */
    const SceRating = ({ label, dark }) => (
        <div className={`sce-rating ${dark ? 'sce-rating-dark' : ''}`}>
            <span className="sce-rating-stars">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} />
                ))}
            </span>
            <span className="sce-rating-text">{label}</span>
        </div>
    )

    /* First Impressions */
    const sceFirstImpressionsList = [
        { text: 'Elegant contemporary interiors', icon: Sparkles },
        { text: 'Spacious observation lounges', icon: LayoutList },
        { text: 'Floor-to-ceiling windows', icon: Sun },
        { text: 'Exceptional crew attention', icon: Users },
        { text: 'Relaxed luxury atmosphere', icon: Heart },
        { text: 'Small ship intimacy', icon: Ship }
    ]

    /* Suites & Accommodations */
    const sceSuiteHighlights = [
        'Butler service for every suite', 'King-size Scenic Slumber Bed', 'Spacious seating area',
        'Walk-in closet (select categories)', 'Marble bathrooms', 'Luxury bath amenities',
        'Pillow menu', 'Fully stocked mini-bar', 'In-suite dining'
    ]

    /* Dining */
    const sceDiningVenues = [
        'Elements', 'Lumière', "Koko's Asian Fusion", "Night Market @ Koko's",
        "Sushi @ Koko's", 'Azure Bar & Café', 'Yacht Club Grill', "Chef's Table (select experiences)"
    ]
    const sceDiningPraises = [
        'High food quality', 'Fresh ingredients', 'Excellent wine selections',
        'Diverse menus', 'Personalized service', 'Flexible dining'
    ]

    /* Service */
    const sceServiceHighlights = [
        { text: 'Butler service', icon: Bed },
        { text: 'Friendly expedition staff', icon: Compass },
        { text: 'Professional dining teams', icon: ChefHat },
        { text: 'Personalized attention', icon: Heart },
        { text: 'Fast response times', icon: Sparkles },
        { text: 'Luxury hotel-level hospitality', icon: Crown }
    ]

    /* Expedition Experiences */
    const sceExpeditionList = [
        'Zodiac cruises', 'Guided wildlife viewing', 'Hiking', 'Kayaking',
        'Snorkeling', 'Paddleboarding', 'Photography excursions', 'Cultural visits'
    ]
    const scePremiumList = [
        { text: 'Helicopter sightseeing', icon: Plane },
        { text: 'Submarine dives', icon: Waves }
    ]

    /* Wellness & Spa */
    const sceWellnessList = [
        'Indoor vitality pools', 'Infrared sauna', 'Steam room', 'Salt therapy lounge',
        'Yoga studio', 'Fitness center', 'Massage treatments', 'Beauty services'
    ]

    /* Destinations */
    const sceDestinations = [
        { name: 'Antarctica', desc: "Witness glaciers, penguins, whales, and Zodiac landings in one of the world's most remote destinations.", icon: Snowflake },
        { name: 'Arctic', desc: 'Explore polar landscapes, remote wilderness, and incredible wildlife.', icon: Mountain },
        { name: 'Greenland', desc: 'Discover colossal icebergs, spectacular fjords, and remote polar landscapes.', icon: Wind },
        { name: 'Mediterranean', desc: 'Visit iconic ports alongside smaller coastal towns inaccessible to larger ships.', icon: Anchor },
        { name: 'Norwegian Fjords', desc: 'Cruise breathtaking fjords surrounded by waterfalls and mountain scenery.', icon: Waves },
        { name: 'South Pacific', desc: 'Discover remote islands, vibrant marine life, and unique cultural experiences.', icon: Globe }
    ]

    /* What's Included */
    const sceIncludedList = [
        { text: 'Luxury suite accommodations', icon: Bed },
        { text: 'Butler service', icon: Users },
        { text: 'Premium beverages', icon: Coffee },
        { text: 'Specialty dining', icon: Utensils },
        { text: 'Wi-Fi', icon: Wifi },
        { text: 'Gratuities', icon: CheckCircle },
        { text: 'Scenic Freechoice excursions', icon: Compass },
        { text: 'Scenic Enrich experiences', icon: Sparkles },
        { text: 'Expedition equipment', icon: LayoutList },
        { text: 'Zodiac excursions', icon: Ship }
    ]

    /* Who Should Choose */
    const sceAudienceList = [
        'Luxury travelers', 'Couples', 'Expedition enthusiasts', 'Adventure seekers',
        'Food lovers', 'Bucket-list travelers', 'Small ship cruise fans', 'Travelers seeking all-inclusive value'
    ]

    /* Pros & Cons */
    const scePros = [
        'Six-star luxury experience', 'Spacious all-veranda suites', 'Butler service for every guest',
        'Outstanding dining', 'Small ship atmosphere', 'Exceptional expedition program',
        'Nearly all-inclusive pricing', 'Excellent wellness facilities', 'Polar expedition capabilities',
        'Helicopter and submarine experiences'
    ]
    const sceCons = [
        'Premium pricing', 'Limited entertainment compared to large cruise ships',
        'Expedition itineraries may involve challenging weather',
        'Helicopter and submarine experiences may not be available on every voyage'
    ]

    /* Why Book with Trips & Ships */
    const sceWhyBookList = [
        { text: 'Compare Scenic itineraries', icon: LayoutList },
        { text: 'Select the best suite', icon: Bed },
        { text: 'Understand inclusions', icon: CheckCircle },
        { text: 'Choose the ideal sailing season', icon: Sun },
        { text: 'Arrange pre- and post-cruise travel', icon: MapPin },
        { text: 'Secure exclusive offers', icon: Award },
        { text: 'Coordinate flights', icon: Plane },
        { text: 'Plan private tours', icon: Compass },
        { text: 'Provide concierge-level support', icon: Crown }
    ]

    /* FAQs */
    const sceFaqs = [
        { question: 'Is Scenic Eclipse worth the price?', answer: 'Yes. Many travelers feel Scenic Eclipse offers outstanding value thanks to its all-inclusive luxury, butler service, fine dining, and expedition experiences.' },
        { question: 'Is Scenic Eclipse all-inclusive?', answer: 'Yes. Most voyages include accommodations, dining, premium beverages, Wi-Fi, gratuities, butler service, and many shore excursions.' },
        { question: 'Does every suite include butler service?', answer: 'Yes. Every suite aboard Scenic Eclipse includes personalized butler service.' },
        { question: 'Is Scenic Eclipse a true expedition ship?', answer: 'Yes. Scenic Eclipse is Polar Class 6 certified and purpose-built for expedition cruising with Zodiac operations and expert Discovery Teams.' },
        { question: 'Does Scenic Eclipse have a submarine?', answer: 'Yes. Scenic Eclipse features a custom-built submarine available on select itineraries and conditions.' },
        { question: 'Does Scenic Eclipse have helicopters?', answer: 'Yes. Scenic Eclipse carries onboard helicopters for sightseeing experiences on select voyages.' },
        { question: 'What destinations does Scenic Eclipse visit?', answer: 'Scenic Eclipse sails to Antarctica, the Arctic, Greenland, Iceland, the Mediterranean, Norwegian Fjords, Australia, New Zealand, the South Pacific, and other remote destinations.' },
        { question: 'Is Scenic Eclipse suitable for first-time expedition cruisers?', answer: 'Absolutely. Its combination of luxury, personalized service, and expert expedition teams makes it ideal for first-time expedition travelers.' },
        { question: 'What is the dress code onboard?', answer: 'The atmosphere is elegant yet relaxed, with smart casual attire recommended for most evenings.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included for guests.' },
        { question: 'How many guests does Scenic Eclipse carry?', answer: 'Scenic Eclipse accommodates approximately 228 guests, with reduced capacity in Polar Regions.' },
        { question: 'Who should choose Scenic Eclipse?', answer: 'Scenic Eclipse is perfect for travelers seeking six-star luxury combined with authentic expedition adventures, personalized service, and all-inclusive value.' }
    ]

    const sceSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews",
                "name": "Scenic Eclipse Reviews",
                "url": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews",
                "description": "Read our expert Scenic Eclipse reviews covering accommodations, dining, expedition experiences, destinations, service, inclusions, and whether Scenic Eclipse is worth the investment.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews#article",
                "headline": "Scenic Eclipse Reviews",
                "url": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews",
                "description": "Expert Scenic Eclipse review covering accommodations, dining, service, expedition experiences, wellness, destinations, inclusions, and overall value.",
                "image": "https://www.tripsshipsluxurytravel.com/images/scenic-eclipse-reviews.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Expedition Cruise Consulting",
                "description": "Expert Scenic Eclipse cruise planning and comparison services helping travelers choose the best Discovery Yacht, itinerary, suite, and destination."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsshipsluxurytravel.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Eclipse Reviews", "item": "https://www.tripsshipsluxurytravel.com/scenic-eclipse-reviews" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Scenic Eclipse worth the price?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse delivers exceptional value through six-star accommodations, butler service, premium dining, expedition experiences, and comprehensive all-inclusive pricing." } },
                    { "@type": "Question", "name": "Is Scenic Eclipse all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Scenic Eclipse voyages include luxury accommodations, butler service, fine dining, premium beverages, Wi-Fi, gratuities, and many shore excursions." } },
                    { "@type": "Question", "name": "Does every suite include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse includes personalized butler service." } },
                    { "@type": "Question", "name": "Is Scenic Eclipse a true expedition ship?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse is Polar Class 6 certified and purpose-built for luxury expedition cruising with Zodiac operations and expert Discovery Teams." } },
                    { "@type": "Question", "name": "Does Scenic Eclipse have a submarine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse features a custom-built submarine available for select voyages and weather conditions." } },
                    { "@type": "Question", "name": "Does Scenic Eclipse have helicopters?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse carries onboard helicopters that offer optional sightseeing experiences on select itineraries." } },
                    { "@type": "Question", "name": "What destinations does Scenic Eclipse visit?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse sails to Antarctica, the Arctic, Greenland, Iceland, the Mediterranean, Norwegian Fjords, Australia, New Zealand, the South Pacific, and other remote destinations." } },
                    { "@type": "Question", "name": "Is Scenic Eclipse suitable for first-time expedition cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse combines luxurious accommodations with expert expedition guidance, making it an excellent choice for first-time expedition travelers." } },
                    { "@type": "Question", "name": "What is the dress code onboard Scenic Eclipse?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse offers an elegant yet relaxed atmosphere, with smart casual attire recommended for most evenings." } },
                    { "@type": "Question", "name": "Is Wi-Fi included on Scenic Eclipse?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is included for guests throughout most Scenic Eclipse voyages." } },
                    { "@type": "Question", "name": "How many guests does Scenic Eclipse accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse accommodates approximately 228 guests, with reduced capacity during Polar expeditions." } },
                    { "@type": "Question", "name": "Who should choose Scenic Eclipse?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse is ideal for travelers seeking six-star luxury, immersive expedition experiences, personalized service, and access to bucket-list destinations around the world." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Eclipse Reviews | Honest Luxury Expedition Cruise Review & Expert Guide</title>
                <meta name="title" content="Scenic Eclipse Reviews | Is Scenic Eclipse Worth It?" />
                <meta
                    name="description"
                    content="Read our expert Scenic Eclipse reviews covering accommodations, dining, expedition experiences, destinations, service, inclusions, and who should sail aboard Scenic's six-star Discovery Yachts."
                />
                <meta name="keywords" content="Scenic Eclipse Reviews, Scenic Eclipse review, Scenic Eclipse cruise reviews, Scenic Discovery Yacht reviews, Scenic Eclipse experience, Scenic luxury yacht review, Scenic Eclipse Antarctica review, Scenic Eclipse II review, Luxury expedition cruise reviews" />
                <script type="application/ld+json">
                    {JSON.stringify(sceSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION */}
                <section className="fcel-hero-section">
                    {sceHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`fcel-hero-slide ${sceCurrentHero === idx ? 'fcel-slide-active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Honest Luxury Expedition Cruise Review & Expert Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">Scenic Eclipse Reviews</h1>
                        <p className="fcel-hero-subtitle">
                            Is Scenic Eclipse Worth It?
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
                                <span className="fcel-eyebrow-label">SIX-STAR EXPEDITION LUXURY</span>
                                <h2 className="fcel-section-heading">Is Scenic Eclipse Worth It?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Scenic Eclipse has earned a reputation as one of the world's most luxurious expedition ships, combining six-star accommodations with the ability to explore some of the planet's most remote destinations. Marketed as "The World's First Discovery Yachts™," Scenic Eclipse and Scenic Eclipse II offer a unique blend of adventure and elegance.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    If you're considering a Scenic Eclipse cruise, this review covers everything from accommodations and dining to expedition experiences, service, inclusions, and overall value to help you decide if it's the right luxury cruise line for your travel style.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                {/* <img src={introImg} alt="Scenic Eclipse Discovery Yacht six-star luxury expedition ship" /> */}
                                <div className="fcel-intro-badge-float">
                                    <Crown size={15} />
                                    <span>The World's First Discovery Yachts™</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Scenic Eclipse successfully combines luxury cruising with authentic expedition travel, giving guests the best of both adventure and comfort.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FIRST IMPRESSIONS */}
                <section className="sce-impressions-section">
                    <div className="sce-impressions-container">
                        <div className="sce-impressions-grid">
                            <div className="sce-impressions-media">
                                {/* <img src={impressionsImg} alt="Scenic Eclipse observation lounge interior design" /> */}
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    First Impressions
                                </span>
                                <h2 className="fcel-section-heading">Not a traditional cruise ship.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    From the moment you step aboard Scenic Eclipse, it's clear this is not a traditional cruise ship. The atmosphere feels more like an elegant private yacht than a large ocean liner.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Contemporary design, spacious public areas, attentive service, and luxurious finishes create an upscale environment without feeling formal or crowded.
                                </p>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: 0 }}>Guests immediately notice:</p>
                                <ul className="sce-impressions-list">
                                    {sceFirstImpressionsList.map((item, idx) => {
                                        const SceIcon = item.icon
                                        return (
                                            <li key={idx} className="sce-impressions-list-item">
                                                <SceIcon size={16} className="sce-impressions-icon" />
                                                <span>{item.text}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <SceRating label="Rating: 5/5" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUITES & ACCOMMODATIONS */}
                <section className="sce-suites-section">
                    <div className="sce-suites-container">
                        <div className="sce-suites-grid">
                            <div className="sce-suites-image-frame">
                                {/* <img src={suitesImg} alt="Scenic Eclipse suite with butler service and luxury bed" /> */}
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">
                                    <Bed size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Suites & Accommodations
                                </span>
                                <h2 className="fcel-section-heading">One of Scenic Eclipse's biggest strengths.</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    One of Scenic Eclipse's biggest strengths is its accommodations. Every guest stays in an ocean-view suite with a private veranda, creating a residential feel that makes even longer voyages exceptionally comfortable.
                                </p>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: 0 }}>Suite highlights include:</p>
                                <div className="sce-suites-features-grid">
                                    {sceSuiteHighlights.map((item, idx) => (
                                        <div key={idx} className="sce-suites-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '22px' }}>
                                    Even entry-level suites are larger than many accommodations found on traditional luxury cruise ships.
                                </p>
                                <SceRating label="Rating: 5/5" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA BANNER #1 */}
                <section className="sce-cta-banner">
                    <div className="sce-cta-banner-inner">
                        <p className="sce-cta-banner-text">Ready to reserve your Scenic Eclipse suite?</p>
                        <Link to="/contact" className="sce-cta-banner-btn">
                            <Phone size={16} />
                            Speak With an Advisor
                        </Link>
                    </div>
                </section>

                {/* DINING EXPERIENCE */}
                <section className="sce-dining-section">
                    <div className="sce-dining-container">
                        <div className="sce-dining-header">
                            <span className="fcel-eyebrow-label">
                                <Utensils size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Dining Experience
                            </span>
                            <h2 className="fcel-section-heading">Exceptional culinary experiences.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ color: '#cbd5e1' }}>
                                Scenic Eclipse delivers exceptional culinary experiences with multiple restaurants offering international cuisine and destination-inspired menus.
                            </p>
                        </div>
                        <div className="sce-dining-venues-grid">
                            {sceDiningVenues.map((venue, idx) => (
                                <div key={idx} className="sce-dining-venue-card">{venue}</div>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ color: '#cbd5e1', textAlign: 'center' }}>Guests consistently praise:</p>
                        <div className="sce-dining-praises-wrap">
                            {sceDiningPraises.map((praise, idx) => (
                                <span key={idx} className="sce-dining-praise-pill">{praise}</span>
                            ))}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ color: '#cbd5e1', textAlign: 'center', maxWidth: '780px', margin: '30px auto 0' }}>
                            Unlike many cruise lines, there are no crowded buffets or rushed dining experiences.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px' }}>
                            <SceRating label="Rating: 5/5" dark />
                        </div>
                    </div>
                </section>

                {/* SERVICE */}
                <section className="sce-service-section">
                    <div className="sce-service-container">
                        <span className="fcel-eyebrow-label">
                            <Crown size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Service
                        </span>
                        <h2 className="fcel-section-heading">Service is one of Scenic Eclipse's defining features.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            With nearly a 1:1 crew-to-guest ratio, staff members quickly learn guests' names and preferences.
                        </p>
                        <div className="sce-service-grid">
                            {sceServiceHighlights.map((item, idx) => {
                                const SceIcon = item.icon
                                return (
                                    <div key={idx} className="sce-service-card">
                                        <SceIcon size={18} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ marginTop: '26px' }}>
                            Many guests describe the service as comparable to the world's finest luxury hotels.
                        </p>
                        <SceRating label="Rating: 5/5" />
                    </div>
                </section>

                {/* EXPEDITION EXPERIENCES */}
                <section className="sce-expedition-section">
                    <div className="sce-expedition-container">
                        <span className="fcel-eyebrow-label">
                            <Compass size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Expedition Experiences
                        </span>
                        <h2 className="fcel-section-heading">Scenic Eclipse isn't just about luxury—it is a true expedition vessel.</h2>
                        <div className="fcel-heading-bar"></div>
                        <p className="fcel-lead-paragraph" style={{ marginBottom: '0' }}>Depending on your itinerary, you may enjoy:</p>
                        <div className="sce-expedition-grid" style={{ marginTop: '20px' }}>
                            <ul className="sce-expedition-list">
                                {sceExpeditionList.map((item, idx) => (
                                    <li key={idx} className="sce-expedition-list-item">
                                        <CheckCircle size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <div className="sce-expedition-premium-box">
                                    <p className="sce-expedition-premium-title">Select voyages also feature:</p>
                                    {scePremiumList.map((item, idx) => {
                                        const SceIcon = item.icon
                                        return (
                                            <div key={idx} className="sce-expedition-premium-item">
                                                <SceIcon size={18} />
                                                <span>{item.text}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="sce-expedition-discovery-note">
                                    The Discovery Team includes naturalists, historians, marine biologists, photographers, and destination experts who enrich every excursion.
                                </p>
                            </div>
                        </div>
                        <div style={{ marginTop: '24px' }}>
                            <SceRating label="Rating: 5/5" />
                        </div>
                    </div>
                </section>

                {/* CTA BANNER #2 */}
                <section className="sce-cta-banner">
                    <div className="sce-cta-banner-inner">
                        <p className="sce-cta-banner-text">Curious about Zodiac excursions, helicopters, or submarine dives?</p>
                        <Link to="/contact" className="sce-cta-banner-btn">
                            <LayoutList size={16} />
                            Request Itinerary Options
                        </Link>
                    </div>
                </section>

                {/* WELLNESS & SPA */}
                <section className="sce-wellness-section">
                    <div className="sce-wellness-container">
                        <span className="fcel-eyebrow-label">
                            <Waves size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Wellness & Spa
                        </span>
                        <h2 className="fcel-section-heading">The Senses Spa rivals many luxury resorts.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Guests can enjoy:</p>
                        <div className="sce-wellness-grid">
                            {sceWellnessList.map((item, idx) => (
                                <div key={idx} className="sce-wellness-list-item">{item}</div>
                            ))}
                        </div>
                        <p className="sce-wellness-note">
                            The wellness facilities are especially appreciated during sea days and longer expedition voyages.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px' }}>
                            <SceRating label="Rating: 5/5" dark />
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="sce-destinations-section">
                    <div className="sce-destinations-container">
                        <div className="sce-destinations-header">
                            <span className="fcel-eyebrow-label">
                                <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Destinations
                            </span>
                            <h2 className="fcel-section-heading">Scenic Eclipse sails to many of the world's most spectacular locations.</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Popular itineraries include:</p>
                        </div>
                        <div className="sce-destinations-grid">
                            {sceDestinations.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="sce-destination-card">
                                        <div className="sce-destination-icon">
                                            <DestIcon size={22} />
                                        </div>
                                        <h4 className="sce-destination-name">{dest.name}</h4>
                                        <p className="sce-destination-desc">{dest.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="sce-included-section">
                    <div className="sce-included-container">
                        <span className="fcel-eyebrow-label">
                            <CheckCircle size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            What's Included?
                        </span>
                        <h2 className="fcel-section-heading">One of the most inclusive luxury cruise experiences available.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Most voyages include:</p>
                        <div className="sce-included-grid">
                            {sceIncludedList.map((item, idx) => {
                                const SceIcon = item.icon
                                return (
                                    <div key={idx} className="sce-included-item">
                                        <SceIcon size={16} />
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sce-included-note">
                            Some premium helicopter and submarine experiences may require an additional fee depending on the itinerary.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="sce-audience-section">
                    <div className="sce-audience-container">
                        <span className="fcel-eyebrow-label">
                            <Users size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Who Should Choose Scenic Eclipse?
                        </span>
                        <h2 className="fcel-section-heading">Scenic Eclipse is ideal for:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="sce-audience-pills-wrap">
                            {sceAudienceList.map((item, idx) => (
                                <span key={idx} className="sce-audience-pill">{item}</span>
                            ))}
                        </div>
                        <p className="sce-audience-note">
                            It is especially appealing to guests who want immersive exploration without sacrificing comfort or service.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="sce-proscons-section">
                    <div className="sce-proscons-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">Honest Review Breakdown</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="sce-proscons-grid">
                            <div className="sce-proscons-col">
                                <h3 className="sce-proscons-col-title">Pros</h3>
                                <ul className="sce-proscons-list">
                                    {scePros.map((item, idx) => (
                                        <li key={idx} className="sce-proscons-item">
                                            <CheckCircle size={17} className="sce-pros-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="sce-proscons-col">
                                <h3 className="sce-proscons-col-title">Cons</h3>
                                <ul className="sce-proscons-list">
                                    {sceCons.map((item, idx) => (
                                        <li key={idx} className="sce-proscons-item">
                                            <XCircle size={17} className="sce-cons-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR VERDICT */}
                <section className="sce-verdict-section">
                    <div className="sce-verdict-container">
                        <span className="fcel-eyebrow-label">Our Verdict</span>
                        <h2 className="fcel-section-heading">Scenic Eclipse successfully combines luxury cruising with authentic expedition travel.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="sce-verdict-text">
                            Rather than choosing between adventure and comfort, guests enjoy both. Spacious suites, exceptional dining, personalized service, and immersive expedition experiences create one of the most complete luxury cruise experiences available today.
                        </p>
                        <p className="sce-verdict-text">
                            For travelers seeking Antarctica, the Arctic, the Mediterranean, or other bucket-list destinations, Scenic Eclipse consistently ranks among the finest expedition ships in the world.
                        </p>
                        <div className="sce-verdict-rating-wrap">
                            <SceRating label="Overall Rating: 5/5" dark />
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="sce-whybook-section">
                    <div className="sce-whybook-container">
                        <span className="fcel-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Why Book with Trips & Ships Luxury Travel?
                        </span>
                        <h2 className="fcel-section-heading">Choosing the right Scenic itinerary is just as important as choosing the ship.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Our advisors help you:</p>
                        <ul className="sce-whybook-list">
                            {sceWhyBookList.map((item, idx) => {
                                const SceIcon = item.icon
                                return (
                                    <li key={idx} className="sce-whybook-item">
                                        <SceIcon size={16} />
                                        <span>{item.text}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className="fcel-lead-paragraph">
                            Our expertise helps ensure your Scenic Eclipse journey is as seamless as it is unforgettable.
                        </p>
                        <div className="sce-whybook-cta-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
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
                            {sceFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => sceToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {sceActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {sceActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Book Your Scenic Eclipse Voyage?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Our advisors help you compare Scenic itineraries, select the best suite, understand inclusions, choose the ideal sailing season, arrange pre- and post-cruise travel, secure exclusive offers, coordinate flights, plan private tours, and provide concierge-level support.
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

export default ScenicEclipseReviews