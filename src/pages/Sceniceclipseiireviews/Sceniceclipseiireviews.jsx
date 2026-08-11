import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './Sceniceclipseiireviews.css'
import {
    Star, CheckCircle, XCircle, Phone, LayoutList, Award, Users, Ship, Utensils, Sparkles, Compass, Wind, HeartPulse, Plane, Globe, MapPin, Anchor, Crown, ChevronRight, Home, Sun, Waves, Camera, Mountain, Snowflake, Palmtree
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function ScenicEclipseIIReviews() {

    const [seirActiveFaq, setSeirActiveFaq] = useState(null)
    const seirToggleFaq = (index) => {
        setSeirActiveFaq(seirActiveFaq === index ? null : index)
    }

    /* First impressions */
    const seirFirstImpressions = [
        { text: 'Boutique yacht atmosphere', icon: Ship },
        { text: 'Contemporary interior design', icon: Sparkles },
        { text: 'Spacious public areas', icon: Home },
        { text: 'Quiet ambiance', icon: Wind },
        { text: 'Personalized service', icon: Users },
        { text: 'Beautiful outdoor viewing decks', icon: Sun }
    ]

    /* Suite features */
    const seirSuiteFeatures = [
        'Private veranda', 'Butler service', 'King-size Scenic Slumber Bed', 'Separate sitting area',
        'Spacious marble bathroom', 'Luxury bath amenities', 'Pillow menu', 'In-suite dining',
        'Complimentary mini-bar'
    ]

    /* Dining venues */
    const seirDiningVenues = [
        'Elements', 'Lumière', "Koko's Asian Fusion", "Sushi @ Koko's", "Night Market @ Koko's",
        'Azure Bar & Café', 'Yacht Club Grill', "Chef's Table", 'In-suite dining'
    ]

    const seirDiningPraise = [
        'Excellent food quality', 'Fresh regional ingredients', 'Outstanding wine selections',
        'Flexible dining schedules', 'Attentive service', 'Elegant presentation'
    ]

    /* Service highlights */
    const seirServiceHighlights = [
        { text: 'Butler service for every suite', icon: Users },
        { text: 'Friendly crew', icon: Sparkles },
        { text: 'Professional expedition staff', icon: Compass },
        { text: 'Personalized dining service', icon: Utensils },
        { text: 'Efficient housekeeping', icon: Home },
        { text: 'Luxury hotel-level hospitality', icon: Crown }
    ]

    /* Expedition activities */
    const seirExpeditionActivities = [
        'Zodiac cruises', 'Wildlife encounters', 'Guided hikes', 'Kayaking',
        'Snorkeling', 'Paddleboarding', 'Photography excursions', 'Cultural visits'
    ]

    /* Wellness facilities */
    const seirWellnessFacilities = [
        { text: 'Senses Spa', icon: Sparkles },
        { text: 'Outdoor Vitality Pool', icon: Waves },
        { text: 'New Sky Bar', icon: Sun },
        { text: 'Infrared sauna', icon: Wind },
        { text: 'Salt Therapy Lounge', icon: HeartPulse },
        { text: 'Steam rooms', icon: Wind },
        { text: 'Yoga & Pilates studio', icon: Users },
        { text: 'Modern fitness center', icon: HeartPulse },
        { text: 'Massage treatments', icon: HeartPulse },
        { text: 'Beauty salon', icon: Sparkles },
        { text: 'Sea days made enjoyable', icon: Anchor }
    ]

    /* Destinations */
    const seirDestinations = [
        { name: 'Antarctica', icon: Snowflake, desc: "Penguins, whales, glaciers, Zodiac landings, and extraordinary expedition experiences." },
        { name: 'Arctic', icon: Mountain, desc: 'Polar bears, sea ice, Svalbard, remote archipelagos, and tundra wilderness.' },
        { name: 'Greenland', icon: Wind, desc: 'Towering icebergs, deep fjords, coastal communities, and spectacular Arctic scenery.' },
        { name: 'Mediterranean', icon: Anchor, desc: 'Historic ports, boutique coastal towns, and luxury yacht cruising.' },
        { name: 'South Pacific', icon: Palmtree, desc: 'French Polynesia, Fiji, Indonesia, Papua New Guinea, and tropical islands.' },
        { name: 'Australia & New Zealand', icon: Compass, desc: "The Kimberley, Tasmania, New Zealand, and Australia's remarkable coastline." }
    ]

    /* What's included */
    const seirIncluded = [
        'Luxury suite accommodations', 'Butler service', 'Premium beverages', 'Fine dining',
        'Specialty restaurants', 'Wi-Fi', 'Gratuities', 'Scenic Freechoice excursions',
        'Expedition equipment', 'Zodiac excursions'
    ]

    /* Pros & Cons */
    const seirPros = [
        'Six-star luxury', 'Spacious veranda suites', 'Butler service', 'Outstanding dining',
        'Exceptional Discovery Team', 'Nearly all-inclusive pricing', 'Polar expedition capability',
        'Helicopters and submersible', 'Enhanced wellness facilities', 'Small-ship atmosphere'
    ]

    const seirCons = [
        'Premium pricing', 'Limited nightlife', 'Expedition itineraries depend on weather conditions',
        'Helicopter and submersible experiences are not available on every sailing'
    ]

    /* Why book with us */
    const seirWhyBook = [
        { title: 'Compare Scenic itineraries', icon: LayoutList },
        { title: 'Choose the right suite', icon: Home },
        { title: 'Select the best sailing season', icon: Sun },
        { title: 'Compare Scenic with other luxury cruise lines', icon: Ship },
        { title: 'Arrange flights and hotels', icon: Plane },
        { title: 'Secure exclusive offers', icon: Award },
        { title: 'Coordinate private transfers', icon: MapPin },
        { title: 'Provide concierge-level travel support', icon: Crown }
    ]

    /* FAQs */
    const seirFaqs = [
        { question: 'Is Scenic Eclipse II worth the price?', answer: 'Yes. Scenic Eclipse II offers exceptional value through all-inclusive luxury, butler service, premium dining, and immersive expedition experiences.' },
        { question: 'What is new on Scenic Eclipse II?', answer: 'Scenic Eclipse II introduced enhanced wellness facilities, a new Sky Bar, expanded outdoor relaxation areas, and a next-generation submersible while maintaining the luxury features of the original Scenic Eclipse.' },
        { question: 'Is Scenic Eclipse II all-inclusive?', answer: 'Yes. Most voyages include luxury accommodations, butler service, premium beverages, dining, Wi-Fi, gratuities, and many shore excursions.' },
        { question: 'Does every suite include butler service?', answer: 'Yes. Every suite aboard Scenic Eclipse II includes personalized butler service.' },
        { question: 'Does Scenic Eclipse II have helicopters?', answer: 'Yes. Scenic Eclipse II carries two helicopters for optional sightseeing experiences on select itineraries.' },
        { question: 'Does Scenic Eclipse II have a submarine?', answer: 'Yes. Scenic Eclipse II features a next-generation submersible available on select voyages and weather conditions.' },
        { question: 'What destinations does Scenic Eclipse II visit?', answer: 'The ship sails to Antarctica, the Arctic, Greenland, Iceland, the Mediterranean, Australia, New Zealand, the South Pacific, and other remote destinations.' },
        { question: 'Is Scenic Eclipse II suitable for first-time expedition cruisers?', answer: 'Absolutely. The combination of expert expedition guidance and six-star luxury makes it ideal for first-time expedition travelers.' },
        { question: 'What is the dress code onboard?', answer: 'Scenic Eclipse II maintains an elegant yet relaxed atmosphere, with smart casual attire suitable for most evenings.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included throughout most Scenic Eclipse II voyages.' },
        { question: 'How many guests does Scenic Eclipse II accommodate?', answer: 'The ship accommodates up to 228 guests, or 200 guests during Polar expeditions.' },
        { question: 'Who should choose Scenic Eclipse II?', answer: 'Scenic Eclipse II is perfect for travelers seeking six-star luxury, authentic expedition adventures, personalized service, and access to some of the world\'s most extraordinary destinations.' }
    ]

    const seirSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-eclipse-ii-reviews",
                "name": "Scenic Eclipse II Reviews",
                "url": "https://www.tripsandships.com/scenic-eclipse-ii-reviews",
                "description": "Read our expert Scenic Eclipse II reviews covering accommodations, dining, expedition experiences, destinations, service, inclusions, and whether Scenic Eclipse II is worth the investment.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsandships.com/scenic-eclipse-ii-reviews#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, and personalized travel planning."
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
                "@id": "https://www.tripsandships.com/scenic-eclipse-ii-reviews#article",
                "headline": "Scenic Eclipse II Reviews",
                "url": "https://www.tripsandships.com/scenic-eclipse-ii-reviews",
                "description": "Expert Scenic Eclipse II review covering suites, dining, wellness, expedition experiences, service, destinations, onboard amenities, and overall value.",
                "image": "https://www.tripsandships.com/images/scenic-eclipse-ii-reviews.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/scenic-eclipse-ii-reviews" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Expedition Cruise Consulting",
                "description": "Expert Scenic Eclipse II cruise planning and comparison services helping travelers choose the ideal Discovery Yacht, itinerary, suite, and destination."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Eclipse II Reviews", "item": "https://www.tripsandships.com/scenic-eclipse-ii-reviews" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Scenic Eclipse II worth the price?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse II delivers exceptional value through six-star accommodations, butler service, premium dining, expedition experiences, and nearly all-inclusive pricing." } },
                    { "@type": "Question", "name": "What is new on Scenic Eclipse II?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse II features enhanced wellness facilities, a redesigned Sky Bar, expanded outdoor spaces, and next-generation expedition technology." } },
                    { "@type": "Question", "name": "Is Scenic Eclipse II all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Scenic Eclipse II voyages include luxury accommodations, butler service, fine dining, premium beverages, Wi-Fi, gratuities, and many shore excursions." } },
                    { "@type": "Question", "name": "Does every suite include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse II includes personalized butler service." } },
                    { "@type": "Question", "name": "Does Scenic Eclipse II have helicopters?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse II carries onboard helicopters for optional sightseeing experiences on select itineraries." } },
                    { "@type": "Question", "name": "Does Scenic Eclipse II have a submarine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse II features a next-generation submersible available on select voyages and weather permitting." } },
                    { "@type": "Question", "name": "What destinations does Scenic Eclipse II visit?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse II sails to Antarctica, the Arctic, Greenland, Iceland, the Mediterranean, Australia, New Zealand, the South Pacific, and many other remote destinations." } },
                    { "@type": "Question", "name": "Is Scenic Eclipse II suitable for first-time expedition cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse II combines luxury accommodations with expert expedition guidance, making it an excellent choice for first-time expedition travelers." } },
                    { "@type": "Question", "name": "What is the dress code onboard Scenic Eclipse II?", "acceptedAnswer": { "@type": "Answer", "text": "The atmosphere is elegant yet relaxed, with smart casual attire recommended for most evenings." } },
                    { "@type": "Question", "name": "Is Wi-Fi included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Complimentary Wi-Fi is included throughout most Scenic Eclipse II voyages." } },
                    { "@type": "Question", "name": "How many guests does Scenic Eclipse II accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse II accommodates approximately 228 guests, with reduced capacity during Polar expeditions." } },
                    { "@type": "Question", "name": "Who should choose Scenic Eclipse II?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse II is ideal for travelers seeking six-star luxury, immersive expedition experiences, personalized service, and unforgettable journeys to bucket-list destinations." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Eclipse II Reviews | Honest Review of Scenic's Newest Discovery Yacht</title>
                <meta name="title" content="Scenic Eclipse II Reviews | Is Scenic Eclipse II Worth It?" />
                <meta
                    name="description"
                    content="Read our expert Scenic Eclipse II reviews covering suites, dining, wellness, expedition experiences, service, destinations, and whether Scenic's newest Discovery Yacht is worth the investment."
                />
                <meta name="keywords" content="Scenic Eclipse II Reviews, Scenic Eclipse II review, Scenic Eclipse II cruise reviews, Scenic Eclipse II Discovery Yacht, Scenic luxury yacht reviews, Scenic Eclipse II Antarctica, Scenic Eclipse II expedition cruise, Scenic Eclipse II luxury cruise, Scenic Eclipse II experience" />
                <script type="application/ld+json">
                    {JSON.stringify(seirSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION */}
                <section className="fcel-hero-section">
                    <div className="seir-hero-placeholder">
                        <Ship size={220} />
                    </div>
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Honest Review of Scenic's Newest Discovery Yacht</span>
                        </div>
                        <h1 className="fcel-hero-title">Scenic Eclipse II Reviews</h1>
                        <p className="fcel-hero-subtitle">
                            Is Scenic Eclipse II Worth It?
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
                                <span className="fcel-eyebrow-label">SCENIC ECLIPSE II REVIEW</span>
                                <h2 className="fcel-section-heading">Is Scenic Eclipse II Worth the Investment?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Launched in 2023, Scenic Eclipse II builds on the success of the original Scenic Eclipse while introducing enhanced wellness facilities, a redesigned Sky Bar, an expanded outdoor relaxation area, and Scenic's next-generation expedition technology. Carrying just 228 guests (200 in Polar regions), the ship combines six-star luxury with true expedition capability.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    If you're considering a voyage aboard Scenic Eclipse II, this review explores every aspect of the experience—from accommodations and dining to expedition activities, destinations, service, and overall value.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <div className="seir-placeholder seir-intro-frame">
                                    <Ship size={48} />
                                    <span>Image Placeholder: Scenic Eclipse II Exterior</span>
                                </div>
                                <div className="fcel-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Six-Star Discovery Yacht</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Stepping aboard Scenic Eclipse II feels more like boarding a private superyacht than a cruise ship—featuring elegant contemporary interiors, museum-quality artwork, spacious observation lounges, panoramic windows, and a relaxed atmosphere that immediately distinguishes it from traditional luxury cruises.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FIRST IMPRESSIONS */}
                <section className="seir-impression-section">
                    <div className="seir-impression-container">
                        <div className="seir-impression-header">
                            <span className="fcel-eyebrow-label">FIRST IMPRESSIONS</span>
                            <h2 className="fcel-section-heading">What Guests Love About Scenic Eclipse II</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="seir-impression-grid">
                            {seirFirstImpressions.map((item, idx) => {
                                const SeirIcon = item.icon
                                return (
                                    <div key={idx} className="seir-impression-card">
                                        <div className="seir-impression-icon">
                                            <SeirIcon size={22} />
                                        </div>
                                        <p className="seir-impression-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* SUITES & ACCOMMODATIONS */}
                <section className="fcel-occasion-section">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid">
                            <div className="fcel-occasion-media">
                                <div className="fcel-media-tall seir-placeholder">
                                    <Home size={40} />
                                    <span>Image Placeholder: All-Veranda Suite Interior</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Waves size={32} />
                                    <span>Image Placeholder: Private Veranda View</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Crown size={32} />
                                    <span>Image Placeholder: Suite Marble Bathroom</span>
                                </div>
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">SUITES & ACCOMMODATIONS</span>
                                <h2 className="fcel-section-heading">Every Guest Enjoys an All-Veranda Suite With Butler Service</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-occasion-intro">Suite features include:</p>
                                <div className="fcel-villa-features-grid">
                                    {seirSuiteFeatures.map((feature, idx) => (
                                        <div key={idx} className="fcel-villa-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="fcel-occasion-intro" style={{ marginTop: '22px', marginBottom: '18px' }}>
                                    Suites are among the largest in the expedition cruise industry and feel comparable to luxury hotel accommodations.
                                </p>
                                <p className="fcel-occasion-intro" style={{ marginTop: '22px', marginBottom: '16px', fontWeight: 600, fontSize: '18px' }}>Ready to Reserve Your All-Veranda Suite?</p>
                                <div className="fcel-hero-btn-row" style={{ justifyContent: 'flex-start' }}>
                                    <Link to="/contact" className="fcel-btn-primary">
                                        <Phone size={18} />
                                        Schedule a Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING EXPERIENCE */}
                <section className="fcel-occasion-section fcel-occasion-soft">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid fcel-occasion-reverse">
                            <div className="fcel-occasion-media">
                                <div className="fcel-media-tall seir-placeholder">
                                    <Utensils size={40} />
                                    <span>Image Placeholder: Elements Dining Room</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Ship size={32} />
                                    <span>Image Placeholder: Yacht Club Grill</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Sparkles size={32} />
                                    <span>Image Placeholder: Chef's Table Setting</span>
                                </div>
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">DINING EXPERIENCE</span>
                                <h2 className="fcel-section-heading">Up to Ten Dining Venues Offering Global Cuisine</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-occasion-intro">Dining venues include:</p>
                                <div className="seir-venues-wrap">
                                    <div className="seir-venues-grid">
                                        {seirDiningVenues.map((venue, idx) => (
                                            <div key={idx} className="seir-venue-card">
                                                <Utensils size={15} />
                                                <span>{venue}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="fcel-occasion-intro">Guests consistently praise:</p>
                                <ul className="fcel-occasion-list">
                                    {seirDiningPraise.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE */}
                <section className="fcel-occasion-section">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid">
                            <div className="fcel-occasion-media">
                                <div className="fcel-media-tall seir-placeholder">
                                    <Users size={40} />
                                    <span>Image Placeholder: Butler Greeting Guests</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Crown size={32} />
                                    <span>Image Placeholder: Crew at Reception</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Compass size={32} />
                                    <span>Image Placeholder: Expedition Staff Briefing</span>
                                </div>
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">SERVICE</span>
                                <h2 className="fcel-section-heading">Six-Star Hospitality With a One-to-One Crew-to-Guest Ratio</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-occasion-intro">
                                    With nearly a one-to-one crew-to-guest ratio, staff quickly recognize guest preferences and provide personalized attention throughout the voyage. Highlights include:
                                </p>
                                <div className="fcel-villa-features-grid">
                                    {seirServiceHighlights.map((item, idx) => {
                                        const SeirIcon = item.icon
                                        return (
                                            <div key={idx} className="fcel-villa-feature-pill">
                                                <SeirIcon size={16} />
                                                <span>{item.text}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPEDITION EXPERIENCE */}
                <section className="fcel-occasion-section fcel-occasion-soft">
                    <div className="fcel-occasion-container">
                        <div className="fcel-occasion-grid fcel-occasion-reverse">
                            <div className="fcel-occasion-media">
                                <div className="fcel-media-tall seir-placeholder">
                                    <Compass size={40} />
                                    <span>Image Placeholder: Zodiac Cruise Landing</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Camera size={32} />
                                    <span>Image Placeholder: Wildlife Photography Excursion</span>
                                </div>
                                <div className="fcel-media-short seir-placeholder">
                                    <Waves size={32} />
                                    <span>Image Placeholder: Kayaking Near Icebergs</span>
                                </div>
                            </div>
                            <div>
                                <span className="fcel-eyebrow-label">EXPEDITION EXPERIENCE</span>
                                <h2 className="fcel-section-heading">Genuine Expedition Experiences Led by Expert Discovery Teams</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-occasion-intro">Depending on the itinerary, guests may enjoy:</p>
                                <ul className="fcel-occasion-list">
                                    {seirExpeditionActivities.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="fcel-occasion-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fcel-occasion-footnote">
                                    The expert Discovery Team includes marine biologists, naturalists, historians, photographers, and destination specialists who provide lectures and accompany shore excursions.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HELICOPTERS & SUBMERSIBLE */}
                <section className="seir-heli-section">
                    <div className="seir-heli-container">
                        <span className="fcel-eyebrow-label">HELICOPTERS & SUBMERSIBLE</span>
                        <h2 className="fcel-section-heading">Exclusive Expedition Technology: Helicopters & Submersible</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center' }}>Select itineraries offer optional experiences such as:</p>
                        <div className="seir-heli-grid">
                            <div className="seir-heli-card">
                                <div className="seir-heli-icon">
                                    <Plane size={26} />
                                </div>
                                <h3 className="seir-heli-card-title">Helicopter Sightseeing</h3>
                                <p className="seir-heli-card-text">Scenic aerial photography flights and remote landings that reveal landscapes inaccessible by ship or Zodiac.</p>
                            </div>
                            <div className="seir-heli-card">
                                <div className="seir-heli-icon">
                                    <Waves size={26} />
                                </div>
                                <h3 className="seir-heli-card-title">Submersible Dives</h3>
                                <p className="seir-heli-card-text">Explore beneath the ocean's surface aboard Scenic's next-generation submersible on select voyages.</p>
                            </div>
                        </div>
                        <p className="seir-heli-note">Few luxury expedition ships provide these exclusive opportunities.</p>
                    </div>
                </section>

                {/* WELLNESS & SPA */}
                <section className="seir-wellness-section">
                    <div className="seir-wellness-container">
                        <div className="seir-wellness-header">
                            <span className="fcel-eyebrow-label">WELLNESS & SPA</span>
                            <h2 className="fcel-section-heading">Enhanced Wellness Facilities Designed for Relaxation at Sea</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Facilities include:</p>
                        </div>
                        <div className="seir-wellness-grid">
                            {seirWellnessFacilities.map((item, idx) => {
                                const SeirIcon = item.icon
                                return (
                                    <div key={idx} className="seir-wellness-card">
                                        <div className="seir-wellness-icon">
                                            <SeirIcon size={22} />
                                        </div>
                                        <p className="seir-wellness-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '760px', margin: '40px auto 0' }}>
                            Sea days are especially enjoyable thanks to the ship's expanded wellness facilities.
                        </p>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="seir-dest-section">
                    <div className="seir-dest-container">
                        <div className="seir-dest-header">
                            <span className="fcel-eyebrow-label">DESTINATIONS</span>
                            <h2 className="fcel-section-heading">Spectacular Destinations From Antarctica to the South Pacific</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Popular itineraries include:</p>
                        </div>
                        <div className="seir-dest-grid">
                            {seirDestinations.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="seir-dest-card">
                                        <div className="seir-dest-card-content">
                                            <div className="seir-dest-icon-wrap">
                                                <DestIcon size={24} />
                                            </div>
                                            <h4 className="seir-dest-card-name">{dest.name}</h4>
                                            <p className="seir-dest-card-desc">{dest.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="fcel-hero-btn-row" style={{ marginTop: '40px' }}>
                            <button className="fcel-btn-primary" style={{ background: 'var(--fcel-navy)', color: '#ffffff' }}>
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="seir-included-section">
                    <div className="seir-included-container">
                        <span className="fcel-eyebrow-label">WHAT'S INCLUDED</span>
                        <h2 className="fcel-section-heading">Comprehensive All-Inclusive Luxury: What's Included</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Most voyages include:</p>
                        <div className="fcel-villa-features-grid">
                            {seirIncluded.map((item, idx) => (
                                <div key={idx} className="fcel-villa-feature-pill">
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="seir-included-note">
                            Optional helicopter and submarine experiences may have additional charges depending on the itinerary.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="seir-proscons-section">
                    <div className="seir-proscons-container">
                        <div className="seir-proscons-header">
                            <span className="fcel-eyebrow-label">HONEST ASSESSMENT</span>
                            <h2 className="fcel-section-heading">Pros & Cons: An Objective Look at Scenic Eclipse II</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="seir-proscons-grid">
                            <div className="seir-pros-col">
                                <h3 className="seir-proscons-col-title">Pros</h3>
                                <ul className="seir-proscons-list">
                                    {seirPros.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="seir-pros-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="seir-cons-col">
                                <h3 className="seir-proscons-col-title">Cons</h3>
                                <ul className="seir-proscons-list">
                                    {seirCons.map((item, idx) => (
                                        <li key={idx}>
                                            <XCircle size={18} className="seir-cons-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR VERDICT */}
                <section className="seir-verdict-section">
                    <div className="seir-verdict-container">
                        <span className="fcel-eyebrow-label seir-eyebrow-light">OUR VERDICT</span>
                        <h2 className="fcel-section-heading">Our Verdict: Scenic Eclipse II Elevates an Already Exceptional Experience</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="seir-verdict-text">
                            The upgraded wellness spaces, improved outdoor amenities, luxurious accommodations, and world-class expedition program make it one of the finest ultra-luxury expedition ships sailing today.
                        </p>
                        <p className="seir-verdict-text">
                            For travelers seeking bucket-list destinations without sacrificing comfort, Scenic Eclipse II is among the very best choices available.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="seir-why-us-section">
                    <div className="seir-why-us-container">
                        <div className="seir-why-us-top">
                            <span className="fcel-eyebrow-label">TRUSTED SCENIC SPECIALISTS</span>
                            <h2 className="fcel-section-heading">Why Book Scenic Eclipse II With Trips & Ships Luxury Travel</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Our Scenic specialists help you:</p>
                        </div>
                        <div className="seir-why-us-grid">
                            {seirWhyBook.map((item, idx) => {
                                const SeirIcon = item.icon
                                return (
                                    <div key={idx} className="seir-why-us-card">
                                        <div className="seir-why-us-icon">
                                            <SeirIcon size={22} />
                                        </div>
                                        <p className="seir-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            We ensure every Scenic Eclipse II voyage is tailored to your travel style.
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
                            {seirFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => seirToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {seirActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {seirActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Set Sail Aboard Scenic Eclipse II?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            From Antarctica's glaciers to the Mediterranean's coastlines, let our Scenic specialists design the perfect Discovery Yacht voyage for you.
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

export default ScenicEclipseIIReviews