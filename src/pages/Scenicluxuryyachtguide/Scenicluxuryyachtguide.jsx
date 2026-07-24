import Navbar from '../../components/Navbar/Navbar'
import './ScenicLuxuryYachtGuide.css'
import {
    Sparkles, Phone, LayoutList, CheckCircle, Crown, Users, Home,
    UtensilsCrossed, Wine, Gift, Wifi, Compass, Anchor, Plane, Ship,
    Snowflake, Mountain, Palmtree, Waves, MapPin, ChevronRight, Star,
    Calendar, Camera
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function ScenicLuxuryYachtGuide() {

    const [slyActiveFaq, setSlyActiveFaq] = useState(null)
    const slyToggleFaq = (index) => {
        setSlyActiveFaq(slyActiveFaq === index ? null : index)
    }

    /* Why Choose Scenic */
    const slyWhyChoose = [
        { text: 'Truly all-inclusive luxury', icon: Crown },
        { text: 'Butler service for every suite', icon: Users },
        { text: 'Spacious veranda suites', icon: Home },
        { text: 'Up to 10 dining experiences', icon: UtensilsCrossed },
        { text: 'Complimentary premium beverages', icon: Wine },
        { text: 'Included gratuities', icon: Gift },
        { text: 'Included Wi-Fi', icon: Wifi },
        { text: 'Scenic Enrich experiences', icon: Sparkles },
        { text: 'Scenic Freechoice excursions', icon: Compass },
        { text: 'Zodiac excursions', icon: Anchor },
        { text: 'Helicopter and submarine experiences (select voyages)', icon: Plane }
    ]

    /* Scenic Eclipse highlights */
    const slyEclipseHighlights = [
        'Approximately 228 guests (200 in Polar Regions)',
        'Spacious all-veranda suites',
        'Nearly 1:1 crew-to-guest ratio',
        'Two onboard helicopters (select itineraries)',
        'Custom-built submarine',
        'Polar Class 6 rating',
        'Advanced stabilization systems',
        'State-of-the-art expedition technology'
    ]

    /* Luxury suite features */
    const slySuiteFeatures = [
        'Private veranda',
        'Butler service',
        'King-size Scenic Slumber Bed',
        'Premium linens',
        'Spacious marble bathroom',
        'Mini-bar',
        'Luxury bath amenities',
        'Personalized in-suite dining'
    ]

    /* Dining venues */
    const slyDiningVenues = [
        'Elements', "Koko's Asian Fusion", "Night Market @ Koko's",
        'Lumière French Cuisine', "Sushi @ Koko's", 'Azure Bar & Café',
        'Yacht Club Grill', "Chef's Table", 'In-suite dining'
    ]

    /* Wellness facilities */
    const slyWellnessFacilities = [
        'Senses Spa', 'Infrared sauna', 'Salt therapy lounge', 'Steam room',
        'Yoga & Pilates studio', 'Gym', 'Vitality pools', 'Outdoor relaxation areas'
    ]

    /* Expedition experiences */
    const slyExpeditionExperiences = [
        'Zodiac cruises', 'Wildlife viewing', 'Hiking', 'Kayaking',
        'Snorkeling', 'Paddleboarding', 'Guided nature walks',
        'Cultural encounters', 'Photography excursions'
    ]

    /* Destinations */
    const slyDestinations = [
        {
            name: 'Antarctica',
            text: 'Experience towering glaciers, penguin colonies, whales, seals, and Zodiac landings.',
            icon: Snowflake,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Antarctica'
        },
        {
            name: 'Arctic & Greenland',
            text: 'Visit Svalbard, Iceland, Greenland, and the Canadian Arctic while searching for polar bears and incredible wildlife.',
            icon: Compass,
            img: 'https://placehold.co/600x500/274472/ffffff?text=Arctic+%26+Greenland'
        },
        {
            name: 'Mediterranean',
            text: 'Discover Italy, Greece, Croatia, France, Spain, and hidden coastal villages inaccessible to larger ships.',
            icon: Anchor,
            img: 'https://placehold.co/600x500/1c2f4a/ffffff?text=Mediterranean'
        },
        {
            name: 'Norwegian Fjords',
            text: 'Cruise dramatic fjords, charming villages, waterfalls, and spectacular mountain scenery.',
            icon: Mountain,
            img: 'https://placehold.co/600x500/0f1c2e/ffffff?text=Norwegian+Fjords'
        },
        {
            name: 'South Pacific',
            text: 'Explore Fiji, French Polynesia, Papua New Guinea, Indonesia, and remote tropical islands.',
            icon: Palmtree,
            img: 'https://placehold.co/600x500/274472/ffffff?text=South+Pacific'
        },
        {
            name: 'Australia & New Zealand',
            text: "Experience the Kimberley, Tasmania, New Zealand, and Australia's spectacular coastline.",
            icon: Waves,
            img: 'https://placehold.co/600x500/1c2f4a/ffffff?text=Australia+%26+New+Zealand'
        }
    ]

    /* What's included */
    const slyIncluded = [
        'Luxury accommodations', 'Butler service', 'Fine dining', 'Premium beverages',
        'Wi-Fi', 'Gratuities', 'Scenic Freechoice excursions', 'Scenic Enrich experiences',
        'Expedition equipment', 'Zodiac excursions', 'Airport transfers (select itineraries)'
    ]

    /* Who should cruise with Scenic */
    const slyWhoShouldCruise = [
        'Luxury expedition cruising', 'Small ship experiences', 'Adventure with comfort',
        'Exceptional dining', 'Personalized service', 'Couples travel',
        'Bucket-list destinations', 'All-inclusive value'
    ]

    /* Why book with Trips & Ships */
    const slyWhyBookUs = [
        { title: 'Compare Scenic itineraries', icon: LayoutList },
        { title: 'Choose the right suite', icon: Home },
        { title: 'Select the best sailing season', icon: Calendar },
        { title: "Understand what's included", icon: CheckCircle },
        { title: 'Compare Scenic with other luxury cruise lines', icon: Ship },
        { title: 'Arrange pre- and post-cruise travel', icon: Compass },
        { title: 'Coordinate airfare', icon: Plane },
        { title: 'Secure exclusive offers', icon: Gift },
        { title: 'Plan private tours', icon: MapPin },
        { title: 'Provide ongoing travel support', icon: Phone }
    ]

    /* Related Scenic guides */
    const slyRelatedGuides = [
        'Scenic vs Viking', 'Scenic vs Explora Journeys', 'Scenic vs Silversea',
        'Scenic vs Seabourn', 'Scenic Antarctica Cruises', 'Scenic Mediterranean Cruises',
        'Scenic Arctic Cruises', 'Scenic Eclipse vs Scenic Eclipse II'
    ]

    /* FAQs */
    const slyFaqs = [
        { question: 'What is Scenic Eclipse?', answer: 'Scenic Eclipse is a six-star luxury Discovery Yacht designed to combine expedition cruising with ultra-luxury accommodations and all-inclusive service.' },
        { question: 'How many Scenic luxury yachts are there?', answer: 'Scenic currently operates two Discovery Yachts: Scenic Eclipse and Scenic Eclipse II.' },
        { question: 'Is Scenic all-inclusive?', answer: 'Yes. Most Scenic voyages include accommodations, dining, premium beverages, butler service, gratuities, Wi-Fi, and many excursions.' },
        { question: 'Does every suite include butler service?', answer: 'Yes. Every suite aboard Scenic Eclipse includes personalized butler service.' },
        { question: 'What destinations does Scenic visit?', answer: 'Scenic sails to Antarctica, the Arctic, Mediterranean, Norwegian Fjords, South Pacific, Australia, New Zealand, and many other destinations.' },
        { question: 'Does Scenic offer expedition cruises?', answer: 'Yes. Scenic specializes in luxury expedition cruising with expert Discovery Teams and Zodiac excursions.' },
        { question: 'Are helicopter flights included?', answer: 'Helicopter experiences are available on select voyages but may require an additional fee depending on the itinerary.' },
        { question: 'Does Scenic have a submarine?', answer: 'Yes. Scenic Eclipse and Scenic Eclipse II feature custom-built submarines on select itineraries.' },
        { question: 'Is Scenic good for first-time luxury cruisers?', answer: "Absolutely. Scenic's all-inclusive approach and exceptional service make it an excellent choice for first-time luxury travelers." },
        { question: 'What is the dress code?', answer: 'The atmosphere is elegant but relaxed, with smart casual attire during most evenings.' },
        { question: 'Is Scenic adults only?', answer: 'Scenic primarily caters to adults, though minimum age requirements vary by itinerary.' },
        { question: 'Why choose Scenic over other luxury cruise lines?', answer: 'Scenic uniquely combines true expedition capability, six-star luxury, butler service, spacious suites, and comprehensive all-inclusive pricing.' }
    ]

    const slySchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide",
                "name": "Scenic Luxury Yacht Guide",
                "url": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide",
                "description": "Complete guide to Scenic Luxury Yachts including Scenic Eclipse, Scenic Eclipse II, destinations, suites, dining, expedition experiences, and expert cruise planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide#article" }
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
                "@id": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide#article",
                "headline": "Scenic Luxury Yacht Guide",
                "url": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide",
                "description": "Expert guide to Scenic Eclipse luxury yacht cruises including ships, suites, dining, expedition experiences, destinations, pricing, and all-inclusive luxury.",
                "image": "https://www.tripsshipsluxurytravel.com/images/scenic-luxury-yacht-guide.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Scenic cruise planning and comparison services helping travelers choose the ideal Scenic itinerary, suite, and destination."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsshipsluxurytravel.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic Luxury Yacht Guide", "item": "https://www.tripsshipsluxurytravel.com/scenic-luxury-yacht-guide" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is Scenic Eclipse?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic Eclipse is a six-star luxury Discovery Yacht designed for expedition cruising with all-inclusive luxury." } },
                    { "@type": "Question", "name": "Is Scenic all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic includes luxury accommodations, butler service, dining, premium beverages, Wi-Fi, gratuities, and many excursions." } },
                    { "@type": "Question", "name": "Does Scenic include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse includes personalized butler service." } },
                    { "@type": "Question", "name": "Does Scenic offer Antarctica cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic operates luxury expedition cruises to Antarctica featuring Zodiac landings and expert Discovery Teams." } },
                    { "@type": "Question", "name": "Does Scenic have helicopters and a submarine?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic Eclipse features onboard helicopters and a custom-built submarine on select itineraries." } },
                    { "@type": "Question", "name": "Which destinations does Scenic visit?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic sails to Antarctica, the Arctic, Mediterranean, Norwegian Fjords, Australia, New Zealand, the South Pacific, and more." } },
                    { "@type": "Question", "name": "Is Scenic good for first-time luxury cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Scenic is an excellent choice for travelers seeking a seamless all-inclusive luxury experience." } },
                    { "@type": "Question", "name": "How many Scenic luxury yachts are there?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic currently operates Scenic Eclipse and Scenic Eclipse II." } },
                    { "@type": "Question", "name": "What is included in the cruise fare?", "acceptedAnswer": { "@type": "Answer", "text": "Most fares include accommodations, dining, beverages, Wi-Fi, gratuities, butler service, and many shore experiences." } },
                    { "@type": "Question", "name": "Who should choose Scenic?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic is ideal for travelers seeking expedition adventures with six-star luxury, personalized service, and all-inclusive value." } },
                    { "@type": "Question", "name": "What makes Scenic different?", "acceptedAnswer": { "@type": "Answer", "text": "Scenic combines true expedition capability with spacious suites, butler service, fine dining, and world-class exploration." } },
                    { "@type": "Question", "name": "Why book Scenic with Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Our advisors provide expert guidance, itinerary recommendations, exclusive offers, and personalized cruise planning to help you choose the perfect Scenic voyage." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic Luxury Yacht Guide | Scenic Eclipse Cruises, Ships, Destinations & Expert Planning</title>
                <meta name="title" content="Scenic Luxury Yacht Guide | Scenic Eclipse Cruises & Luxury Expeditions" />
                <meta
                    name="description"
                    content="Explore the ultimate Scenic Luxury Yacht Guide. Learn about Scenic Eclipse ships, suites, destinations, expedition experiences, dining, inclusions, pricing, and expert cruise planning from Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Scenic Luxury Yacht Guide, Scenic Eclipse, Scenic luxury yachts, Scenic cruises, Luxury expedition cruises, Scenic Eclipse cruises, Scenic Eclipse II, Scenic cruise planning, Luxury yacht cruises, Scenic destinations, Scenic cruise guide" />
                <script type="application/ld+json">
                    {JSON.stringify(slySchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="sly-page-wrapper">

                {/* HERO SECTION */}
                <section className="sly-hero-section">
                    <div
                        className="sly-hero-slide"
                        style={{ backgroundImage: `url(https://placehold.co/1920x1080/0f1c2e/ffffff?text=Scenic+Eclipse)` }}
                    />
                    <div className="sly-hero-overlay"></div>
                    <div className="sly-hero-content">
                        <div className="sly-hero-tag">
                            <Sparkles size={16} />
                            <span>Scenic Eclipse Cruises & Luxury Expeditions</span>
                        </div>
                        <h1 className="sly-hero-title">Scenic Luxury Yacht Guide</h1>
                        <p className="sly-hero-subtitle">
                            Discover Scenic Eclipse — The World's First Discovery Yachts
                        </p>
                        <div className="sly-hero-btn-row">
                            <Link to="/contact" className="sly-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="sly-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="sly-intro-section">
                    <div className="sly-intro-container">
                        <div className="sly-intro-grid">
                            <div className="sly-intro-copy">
                                <span className="sly-eyebrow-label">THE WORLD'S FIRST DISCOVERY YACHTS</span>
                                <h2 className="sly-section-heading">Discover Scenic Eclipse — The World's First Discovery Yachts</h2>
                                <div className="sly-heading-bar"></div>
                                <p className="sly-lead-paragraph">
                                    Scenic has redefined luxury cruising with the introduction of Scenic Eclipse and Scenic Eclipse II, combining the elegance of a six-star luxury yacht with the capabilities of a true expedition vessel.
                                </p>
                                <p className="sly-lead-paragraph">
                                    Unlike traditional cruise ships, Scenic's Discovery Yachts are purpose-built to reach remote destinations while offering all-inclusive luxury, world-class dining, spacious suites, and unforgettable adventures.
                                </p>
                                <p className="sly-lead-paragraph">
                                    Whether you're dreaming of Antarctica, the Arctic, the Mediterranean, the South Pacific, or the Norwegian Fjords, Scenic delivers an experience where exploration and luxury exist in perfect harmony.
                                </p>
                            </div>
                            <div className="sly-intro-image-frame">
                                <img src="https://placehold.co/700x900/274472/ffffff?text=Scenic+Eclipse" alt="Scenic Eclipse luxury discovery yacht" />
                                <div className="sly-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Six-Star Expedition Luxury</span>
                                </div>
                            </div>
                            <div className="sly-intro-highlight-box">
                                <span className="sly-intro-quote-icon">"</span>
                                <div className="sly-intro-quote-content">
                                    This guide will help you understand everything Scenic offers and determine whether a Scenic luxury yacht is the right choice for your next journey.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE SCENIC */}
                <section className="sly-why-section">
                    <div className="sly-why-container">
                        <div className="sly-why-header">
                            <span className="sly-eyebrow-label">WHY CHOOSE SCENIC?</span>
                            <h2 className="sly-section-heading">Scenic appeals to travelers who want both adventure and uncompromising luxury.</h2>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-lead-paragraph">Guests enjoy:</p>
                        </div>
                        <div className="sly-why-grid">
                            {slyWhyChoose.map((item, idx) => {
                                const SlyIcon = item.icon
                                return (
                                    <div key={idx} className="sly-why-card">
                                        <div className="sly-why-icon-ring">
                                            <SlyIcon size={22} />
                                        </div>
                                        <p className="sly-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sly-why-footnote">
                            Every voyage is designed to eliminate hidden costs while maximizing unforgettable experiences.
                        </p>
                    </div>
                </section>

                {/* MID-PAGE CTA BANNER */}
                <section className="sly-midcta-section">
                    <div className="sly-midcta-container">
                        <p className="sly-midcta-text">Ready to experience true all-inclusive luxury expedition cruising?</p>
                        <Link to="/contact" className="sly-btn-primary">
                            <Phone size={18} />
                            Plan My Scenic Voyage
                        </Link>
                    </div>
                </section>

                {/* MEET THE SCENIC DISCOVERY YACHTS — SCENIC ECLIPSE */}
                <section className="sly-yacht-section">
                    <div className="sly-yacht-container">
                        <div className="sly-yacht-grid">
                            <div className="sly-yacht-media">
                                <img src="https://placehold.co/800x900/1c2f4a/ffffff?text=Scenic+Eclipse+2019" alt="Scenic Eclipse discovery yacht launched 2019" />
                                <div className="sly-yacht-badge">Meet The Scenic Discovery Yachts</div>
                            </div>
                            <div className="sly-yacht-copy">
                                <span className="sly-yacht-eyebrow">
                                    <Ship size={16} />
                                    Scenic Eclipse
                                </span>
                                <h3 className="sly-yacht-title">Launched in 2019, Scenic Eclipse introduced a completely new category of luxury cruising.</h3>
                                <p className="sly-yacht-intro">Highlights include:</p>
                                <ul className="sly-yacht-list">
                                    {slyEclipseHighlights.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} className="sly-yacht-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SCENIC ECLIPSE II */}
                <section className="sly-eclipse2-section">
                    <div className="sly-eclipse2-container">
                        <h3 className="sly-eclipse2-title">Scenic Eclipse II</h3>
                        <p className="sly-eclipse2-text">
                            Scenic Eclipse II builds upon the success of the original Discovery Yacht while offering refined public spaces, expanded wellness facilities, and even more immersive expedition experiences.
                        </p>
                        <p className="sly-eclipse2-text">
                            Guests enjoy the same six-star service with enhanced comfort and innovation.
                        </p>
                    </div>
                </section>

                {/* LUXURY SUITES */}
                <section className="sly-suites-section">
                    <div className="sly-suites-container">
                        <div className="sly-suites-grid">
                            <div className="sly-suites-copy">
                                <span className="sly-eyebrow-label">
                                    <Home size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Luxury Suites
                                </span>
                                <h2 className="sly-section-heading">Every accommodation aboard Scenic Eclipse features:</h2>
                                <div className="sly-heading-bar"></div>
                                <div className="sly-suites-features-grid">
                                    {slySuiteFeatures.map((feature, idx) => (
                                        <div key={idx} className="sly-suites-feature-pill">
                                            <CheckCircle size={16} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="sly-lead-paragraph sly-suites-note">
                                    Suite categories range from Deluxe Veranda Suites to the spectacular Two-Bedroom Owner's Penthouse Suite.
                                </p>
                            </div>
                            <div className="sly-suites-gallery">
                                <img src="https://placehold.co/500x400/274472/ffffff?text=Veranda+Suite" alt="Scenic Eclipse veranda suite with private balcony" />
                                <img src="https://placehold.co/500x400/1c2f4a/ffffff?text=Marble+Bathroom" alt="Spacious marble bathroom in a Scenic Eclipse suite" />
                                <img src="https://placehold.co/500x400/0f1c2e/ffffff?text=Owner%27s+Penthouse" alt="Two-Bedroom Owner's Penthouse Suite aboard Scenic Eclipse" />
                                <img src="https://placehold.co/500x400/274472/ffffff?text=In-Suite+Dining" alt="Personalized in-suite dining aboard Scenic Eclipse" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD */}
                <section className="sly-dining-section">
                    <div className="sly-dining-container">
                        <span className="sly-eyebrow-label">
                            <UtensilsCrossed size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Dining Onboard
                        </span>
                        <h2 className="sly-section-heading">Scenic offers one of the most impressive culinary programs at sea.</h2>
                        <div className="sly-heading-bar sly-bar-center"></div>
                        <p className="sly-lead-paragraph">Dining venues may include:</p>
                        <div className="sly-dining-pills-wrap">
                            {slyDiningVenues.map((venue, idx) => (
                                <span key={idx} className="sly-dining-pill">{venue}</span>
                            ))}
                        </div>
                        <p className="sly-lead-paragraph sly-dining-footnote">
                            Menus emphasize regional ingredients and international cuisine.
                        </p>
                    </div>
                </section>

                {/* WELLNESS & SPA */}
                <section className="sly-wellness-section">
                    <div className="sly-wellness-container">
                        <div className="sly-wellness-header">
                            <span className="sly-eyebrow-label">Wellness & Spa</span>
                            <h3 className="sly-wellness-title">Scenic Eclipse offers a destination-inspired wellness experience.</h3>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-wellness-intro">Facilities include:</p>
                        </div>

                        <div className="sly-wellness-grid">
                            {slyWellnessFacilities.map((item, idx) => (
                                <div key={idx} className="sly-wellness-card">
                                    <div className="sly-wellness-card-number">
                                        <span>{idx + 1}</span>
                                    </div>
                                    <h4 className="sly-wellness-card-text">{item}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="sly-wellness-footnote-wrapper">
                            <div className="sly-wellness-footnote">
                                <Sparkles size={16} className="sly-footnote-sparkle" />
                                <span>Guests can enjoy wellness treatments while sailing through some of the world's most spectacular scenery.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPEDITION EXPERIENCES */}
                <section className="sly-expedition-section">
                    <div className="sly-expedition-container">
                        <div className="sly-expedition-header">
                            <span className="sly-eyebrow-label">Expedition Experiences</span>
                            <h3 className="sly-expedition-title">Scenic's Discovery Team leads immersive adventures ashore.</h3>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-expedition-intro">Depending on your itinerary, experiences may include:</p>
                        </div>

                        <div className="sly-expedition-board">
                            {slyExpeditionExperiences.map((item, idx) => {
                                const angles = [-3, 2, -1.5, 3, -2, 1.5, -3, 2, -1.5]
                                const angle = angles[idx % angles.length]
                                return (
                                    <div key={idx} className="sly-expedition-polaroid" style={{ transform: `rotate(${angle}deg)` }}>
                                        <div className="sly-expedition-polaroid-tape"></div>
                                        <div className="sly-expedition-polaroid-inner">
                                            <div className="sly-expedition-polaroid-badge">
                                                <Camera size={16} />
                                            </div>
                                            <h4 className="sly-expedition-polaroid-text">{item}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="sly-expedition-footer">
                            <div className="sly-expedition-footnote">
                                <Sparkles size={16} className="sly-footnote-sparkle" />
                                <span>On select itineraries, guests can also enjoy helicopter sightseeing and submarine dives.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="sly-dest-section">
                    <div className="sly-dest-container">
                        <div className="sly-dest-header">
                            <span className="sly-eyebrow-label">
                                <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Destinations
                            </span>
                            <h2 className="sly-section-heading">Scenic Luxury Yachts explore destinations around the globe.</h2>
                            <div className="sly-heading-bar sly-bar-center"></div>
                            <p className="sly-lead-paragraph">Popular itineraries include:</p>
                        </div>
                        <div className="sly-dest-grid">
                            {slyDestinations.map((dest, idx) => {
                                const DestIcon = dest.icon
                                return (
                                    <div key={idx} className="sly-dest-card" style={{ backgroundImage: `url(${dest.img})` }}>
                                        <div className="sly-dest-card-overlay"></div>
                                        <div className="sly-dest-card-content">
                                            <div className="sly-dest-icon-wrap">
                                                <DestIcon size={22} />
                                            </div>
                                            <h4 className="sly-dest-card-name">{dest.name}</h4>
                                            <p className="sly-dest-card-text">{dest.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS CTA BANNER */}
                <section className="sly-destcta-section">
                    <div className="sly-destcta-inner">
                        <p className="sly-destcta-text">Dreaming of Antarctica, the Arctic, or the Mediterranean aboard Scenic Eclipse?</p>
                        <button className="sly-btn-outline">
                            <Calendar size={18} />
                            Check Sailing Dates & Pricing
                        </button>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="sly-included-section">
                    <div className="sly-included-container">
                        <span className="sly-eyebrow-label">What's Included?</span>
                        <h2 className="sly-section-heading">Scenic is known for exceptional value through comprehensive inclusions.</h2>
                        <div className="sly-heading-bar sly-bar-center"></div>
                        <p className="sly-lead-paragraph">Most voyages include:</p>
                        <div className="sly-included-grid">
                            {slyIncluded.map((item, idx) => (
                                <div key={idx} className="sly-included-item">
                                    <CheckCircle size={18} className="sly-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="sly-lead-paragraph sly-included-note">
                            Some premium experiences such as helicopter flights or submarine dives may carry an additional fee depending on the itinerary.
                        </p>
                    </div>
                </section>

                {/* WHO SHOULD CRUISE WITH SCENIC */}
                <section className="sly-who-section">
                    <div className="sly-who-container">
                        <div className="sly-who-grid">
                            <div className="sly-who-copy">
                                <span className="sly-eyebrow-label">
                                    <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Who Should Cruise with Scenic?
                                </span>
                                <h2 className="sly-section-heading">Scenic is ideal for travelers seeking:</h2>
                                <div className="sly-heading-bar"></div>
                                <div className="sly-who-cards">
                                    {slyWhoShouldCruise.map((item, idx) => (
                                        <div key={idx} className="sly-who-card">
                                            <div className="sly-who-card-badge">{idx + 1}</div>
                                            <span className="sly-who-card-title">{item}</span>
                                            <div className="sly-who-card-arrow">
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sly-who-footnote">
                                    <span>Travelers who enjoy both exploration and refined luxury often consider Scenic among the very best expedition cruise lines in the world.</span>
                                </div>
                            </div>
                            <div className="sly-who-media">
                                <img src="https://placehold.co/700x800/274472/ffffff?text=Couples+%26+Explorers" alt="Travelers enjoying a luxury expedition cruise with Scenic" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL */}
                <section className="sly-why-us-section">
                    <div className="sly-why-us-container">
                        <div className="sly-why-us-top">
                            <div className="sly-why-us-copy">
                                <span className="sly-eyebrow-label">TRUSTED SCENIC CRUISE SPECIALISTS</span>
                                <h2 className="sly-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                                <div className="sly-heading-bar"></div>
                                <p className="sly-lead-paragraph">
                                    Choosing the right Scenic itinerary involves much more than selecting a destination. Our advisors help you:
                                </p>
                            </div>
                            <div className="sly-why-us-image">
                                <img src="https://placehold.co/700x600/1c2f4a/ffffff?text=Trips+%26+Ships+Advisors" alt="Trips and Ships Luxury Travel advisors planning a Scenic voyage" />
                            </div>
                        </div>
                        <div className="sly-why-us-grid">
                            {slyWhyBookUs.map((item, idx) => {
                                const SlyIcon = item.icon
                                return (
                                    <div key={idx} className="sly-why-us-card">
                                        <div className="sly-why-us-icon">
                                            <SlyIcon size={20} />
                                        </div>
                                        <p className="sly-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="sly-why-us-footnote">
                            Our goal is to ensure every Scenic voyage exceeds your expectations.
                        </p>
                        <div className="sly-why-us-cta-wrap">
                            <Link to="/contact" className="sly-btn-primary">
                                <Phone size={18} />
                                Speak with a Scenic Specialist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* RELATED SCENIC GUIDES */}
                <section className="sly-related-section">
                    <div className="sly-related-container">
                        <span className="sly-eyebrow-label">Related Scenic Guides</span>
                        <h2 className="sly-section-heading">Continue your research with our expert Scenic resources:</h2>
                        <div className="sly-heading-bar sly-bar-center"></div>
                        <div className="sly-related-grid">
                            {slyRelatedGuides.map((guide, idx) => (
                                <div key={idx} className="sly-related-card">
                                    <Compass size={18} className="sly-related-card-icon" />
                                    <span className="sly-related-card-text">{guide}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="sly-faq-section">
                    <div className="sly-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="sly-section-heading">Frequently Asked Questions</h2>
                            <div className="sly-heading-bar sly-bar-center"></div>
                        </div>
                        <div className="sly-faq-list">
                            {slyFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="sly-faq-item"
                                    onClick={() => slyToggleFaq(index)}
                                >
                                    <div className="sly-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="sly-faq-toggle">
                                            {slyActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {slyActiveFaq === index && (
                                        <p className="sly-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="sly-cta-section">
                    <div className="sly-cta-bg-pattern"></div>
                    <div className="sly-cta-inner">
                        <h2 className="sly-cta-heading">Ready to Sail Aboard Scenic Eclipse?</h2>
                        <div className="sly-cta-separator"></div>
                        <p className="sly-cta-text">
                            From Antarctica to the Mediterranean, let our expert advisors help you choose the perfect Scenic voyage, suite, and season for an unforgettable six-star expedition.
                        </p>
                        <div className="sly-cta-btn-row">
                            <Link to="/contact" className="sly-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="sly-btn-outline">
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

export default ScenicLuxuryYachtGuide