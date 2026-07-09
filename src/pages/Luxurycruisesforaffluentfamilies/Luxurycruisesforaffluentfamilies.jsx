import Navbar from '../../components/Navbar/Navbar'
import './Luxurycruisesforaffluentfamilies.css'
import {
    Ship, Users, Globe, Calendar, Sparkles, Anchor,
    Home, Star, Phone, CheckCircle, LayoutList, Utensils,
    Waves, Snowflake, MapPin, Award, Compass, Crown, Wifi
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function LuxuryCruisesForAffluentFamilies() {

    /* Hero rotating background images */
    const lcafHeroImages = [
        // 'https://picsum.photos/seed/lcaf-hero-1/1800/1200',
        // 'https://picsum.photos/seed/lcaf-hero-2/1800/1200',
        // 'https://picsum.photos/seed/lcaf-hero-3/1800/1200'
    ]
    const [lcafCurrentHero, setLcafCurrentHero] = useState(0)
    useEffect(() => {
        const lcafTimer = setInterval(() => {
            setLcafCurrentHero((prev) => (prev + 1) % lcafHeroImages.length)
        }, 5000)
        return () => clearInterval(lcafTimer)
    }, [lcafHeroImages.length])

    const [lcafActiveFaq, setLcafActiveFaq] = useState(null)
    const lcafToggleFaq = (index) => {
        setLcafActiveFaq(lcafActiveFaq === index ? null : index)
    }

    /* Why luxury cruises are different */
    const lcafWhyDifferent = [
        { text: 'Spacious suites', icon: Home },
        { text: 'Personalized service', icon: Star },
        { text: 'Fine dining', icon: Utensils },
        { text: 'Smaller guest capacity', icon: Users },
        { text: 'Exclusive shore excursions', icon: Compass },
        { text: 'Luxury accommodations', icon: Crown },
        { text: 'Premium inclusions', icon: Sparkles },
        { text: 'Concierge-level experiences', icon: Award }
    ]

    /* River destinations with images */
    const lcafRivers = [
        { name: 'Rhine', img: 'https://picsum.photos/seed/lcaf-rhine/600/700' },
        { name: 'Danube', img: 'https://picsum.photos/seed/lcaf-danube/600/700' },
        { name: 'Rhône', img: 'https://picsum.photos/seed/lcaf-rhone/600/700' },
        { name: 'Seine', img: 'https://picsum.photos/seed/lcaf-seine/600/700' },
        { name: 'Douro', img: 'https://picsum.photos/seed/lcaf-douro/600/700' },
        { name: 'Mekong', img: 'https://picsum.photos/seed/lcaf-mekong/600/700' },
        { name: 'Nile', img: 'https://picsum.photos/seed/lcaf-nile/600/700' },
        { name: 'Mississippi', img: 'https://picsum.photos/seed/lcaf-mississippi/600/700' }
    ]

    /* Concierge services */
    const lcafConciergeServices = [
        'Cruise line comparisons', 'Suite selection', 'Private pre- and post-cruise accommodations',
        'Shore excursion planning', 'Private transfers', 'VIP airport assistance', 'Private jet coordination',
        'Travel insurance recommendations', 'Special celebrations', '24/7 travel support'
    ]

    /* Why choose us */
    const lcafWhyChooseUs = [
        { title: 'Personalized cruise recommendations', icon: LayoutList },
        { title: 'Luxury cruise expertise', icon: Ship },
        { title: 'Access to exclusive amenities', icon: Star },
        { title: 'Concierge-level planning', icon: Award },
        { title: 'Trusted cruise partnerships', icon: Anchor },
        { title: 'Multigenerational travel specialists', icon: Users },
        { title: 'Worldwide destination knowledge', icon: Globe },
        { title: 'Ongoing travel support', icon: Phone }
    ]

    /* FAQs */
    const lcafFaqs = [
        { question: 'What is considered a luxury cruise?', answer: 'Luxury cruises offer premium accommodations, exceptional service, fine dining, smaller ships, and more inclusive experiences than mainstream cruise lines.' },
        { question: 'Are luxury cruises suitable for families?', answer: 'Yes. Many luxury cruise lines welcome multigenerational families and offer spacious suites, family activities, and personalized service.' },
        { question: 'What is a small ship cruise?', answer: 'Small ship cruises typically carry fewer guests, providing more personalized service, unique itineraries, and access to smaller ports.' },
        { question: 'What is an expedition cruise?', answer: 'Expedition cruises combine luxury accommodations with guided exploration, wildlife encounters, and educational experiences in remote destinations.' },
        { question: 'What is the difference between a river cruise and an ocean cruise?', answer: 'River cruises travel through inland waterways with frequent cultural stops, while ocean cruises visit coastal and international destinations.' },
        { question: 'Are yacht cruises all-inclusive?', answer: 'Many luxury yacht cruises include accommodations, gourmet dining, beverages, Wi-Fi, gratuities, and selected shore excursions.' },
        { question: 'Which destinations are popular for luxury cruises?', answer: 'Popular destinations include the Mediterranean, Alaska, Antarctica, the Galápagos Islands, Northern Europe, the Caribbean, and Europe\'s major rivers.' },
        { question: 'Can I book a private shore excursion?', answer: 'Yes. Private and customized shore excursions can be arranged in most destinations.' },
        { question: 'Do luxury cruises include Wi-Fi and gratuities?', answer: 'Many luxury cruise lines include Wi-Fi, gratuities, beverages, and specialty dining, although inclusions vary by cruise line.' },
        { question: 'Can private jet travel be combined with a luxury cruise?', answer: 'Absolutely. We coordinate private aviation, VIP airport services, luxury hotels, and seamless cruise transfers.' },
        { question: 'How far in advance should I book a luxury cruise?', answer: 'For the best suite availability and preferred itineraries, booking 9 to 18 months in advance is recommended.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel provides expert cruise guidance, personalized planning, exclusive partner benefits, concierge-level service, and carefully curated luxury cruise experiences for discerning families.' }
    ]

    const lcafSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families",
                "name": "Luxury Cruises for Affluent Families",
                "url": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families",
                "description": "Luxury cruises for affluent families featuring small ship cruises, expedition cruises, river cruises, yacht cruises, and personalized cruise planning.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families#article" }
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
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, river cruises, yacht cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families#article",
                "headline": "Luxury Cruises for Affluent Families",
                "url": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families",
                "description": "Expert guide to luxury cruises for affluent families including small ship cruises, river cruises, expedition cruises, yacht cruises, destinations, and concierge planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/luxury-cruises-for-affluent-families.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families" }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert planning services for luxury ocean cruises, small ship cruises, expedition cruises, river cruises, yacht cruises, and personalized family cruise vacations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Family Travel", "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel" },
                    { "@type": "ListItem", "position": 3, "name": "Luxury Cruises for Affluent Families", "item": "https://www.tripsshipsluxurytravel.com/luxury-cruises-for-affluent-families" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is considered a luxury cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Luxury cruises feature premium accommodations, exceptional service, gourmet dining, smaller ships, and more inclusive experiences." } },
                    { "@type": "Question", "name": "Are luxury cruises suitable for families?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many luxury cruise lines offer family-friendly suites, activities, and personalized service for multigenerational travelers." } },
                    { "@type": "Question", "name": "What is a small ship cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Small ship cruises carry fewer guests, allowing for personalized service, unique itineraries, and access to smaller ports." } },
                    { "@type": "Question", "name": "What is an expedition cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Expedition cruises combine luxury accommodations with guided exploration, wildlife encounters, and educational experiences in remote destinations." } },
                    { "@type": "Question", "name": "How is a river cruise different from an ocean cruise?", "acceptedAnswer": { "@type": "Answer", "text": "River cruises travel inland with cultural stops, while ocean cruises explore coastal and international destinations." } },
                    { "@type": "Question", "name": "Are yacht cruises all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Many luxury yacht cruises include accommodations, gourmet dining, beverages, Wi-Fi, gratuities, and selected excursions." } },
                    { "@type": "Question", "name": "Which destinations are popular for luxury cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Top destinations include the Mediterranean, Alaska, Antarctica, the Galápagos Islands, Northern Europe, the Caribbean, and Europe's rivers." } },
                    { "@type": "Question", "name": "Can I book private shore excursions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private and customized shore excursions can be arranged in most cruise destinations." } },
                    { "@type": "Question", "name": "Do luxury cruises include Wi-Fi and gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "Many luxury cruise lines include Wi-Fi, gratuities, beverages, and specialty dining, though inclusions vary by cruise line." } },
                    { "@type": "Question", "name": "Can private jet travel be combined with a luxury cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private aviation, VIP airport services, luxury hotels, and cruise transfers can all be coordinated." } },
                    { "@type": "Question", "name": "How far in advance should I book a luxury cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Booking 9 to 18 months in advance is recommended for the best suite selection and itinerary availability." } },
                    { "@type": "Question", "name": "Why choose Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel provides expert cruise planning, exclusive luxury partnerships, concierge-level service, and personalized cruise experiences for affluent families." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Luxury Cruises for Affluent Families | Small Ship, River & Expedition Cruises</title>
                <meta name="title" content="Luxury Cruises for Affluent Families | Luxury Cruise Vacations" />
                <meta
                    name="description"
                    content="Discover luxury cruises designed for affluent families, featuring small ship cruises, expedition cruises, river cruises, yacht cruises, personalized service, exclusive experiences, and unforgettable destinations with Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Luxury cruises, Small ship cruises, Expedition cruises, River cruises, Yacht cruises, Family luxury cruises, Private luxury cruises, Luxury family vacations, Luxury cruise planning, Concierge cruise travel" />
                <script type="application/ld+json">
                    {JSON.stringify(lcafSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="lcaf-page-wrapper">

                {/* HERO SECTION */}
                <section className="lcaf-hero-section">
                    {/* lcafHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`lcaf-hero-slide ${lcafCurrentHero === idx ? 'lcaf-slide-active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    )) */}
                    <div className="lcaf-hero-overlay"></div>
                    <div className="lcaf-hero-content">
                        <div className="lcaf-hero-tag">
                            <Ship size={16} />
                            <span>Small Ship, River & Expedition Cruises</span>
                        </div>
                        <h1 className="lcaf-hero-title">Luxury Cruises for Affluent Families</h1>
                        <p className="lcaf-hero-subtitle">
                            Extraordinary Cruise Experiences Designed Around Your Family
                        </p>
                        <div className="lcaf-hero-btn-row">
                            <button className="lcaf-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="lcaf-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="lcaf-intro-section">
                    <div className="lcaf-intro-container">
                        <div className="lcaf-intro-grid">
                            <div className="lcaf-intro-copy">
                                <span className="lcaf-eyebrow-label">CRAFTED FOR DISCERNING TRAVELERS</span>
                                <h2 className="lcaf-section-heading">Extraordinary Cruise Experiences Designed Around Your Family</h2>
                                <div className="lcaf-heading-bar"></div>
                                <p className="lcaf-lead-paragraph">
                                    For affluent families, a cruise should be more than transportation—it should be a seamless luxury experience where every detail is thoughtfully planned and every destination inspires discovery.
                                </p>
                                <p className="lcaf-lead-paragraph">
                                    At Trips & Ships Luxury Travel, we specialize in luxury cruises that combine exceptional service, spacious accommodations, immersive itineraries, and personalized experiences. Whether you dream of sailing through Europe's rivers, exploring Antarctica, cruising the Mediterranean aboard a luxury yacht, or discovering Alaska on a small expedition ship, we help you find the perfect voyage.
                                </p>
                                <div className="lcaf-intro-highlight-box">
                                    Every itinerary is carefully matched to your family's travel style, interests, and expectations.
                                </div>
                            </div>
                            {/* <div className="lcaf-intro-image-frame">
                                <img src="https://picsum.photos/seed/lcaf-intro-cruise/900/1000" alt="Luxury cruise ship sailing at sunset" />
                                <div className="lcaf-intro-badge-float">
                                    <Anchor size={18} />
                                    <span>Voyages Matched to Your Family</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* WHY LUXURY CRUISES ARE DIFFERENT */}
                <section className="lcaf-why-section">
                    <div className="lcaf-why-container">
                        <div className="lcaf-why-header">
                            <span className="lcaf-eyebrow-label">BEYOND TRADITIONAL CRUISING</span>
                            <h2 className="lcaf-section-heading">Why Luxury Cruises Are Different</h2>
                            <div className="lcaf-heading-bar lcaf-bar-center"></div>
                            <p className="lcaf-lead-paragraph">
                                Luxury cruises offer a level of comfort, privacy, and service that goes far beyond traditional cruising. Benefits include:
                            </p>
                        </div>
                        <div className="lcaf-why-grid">
                            {lcafWhyDifferent.map((item, idx) => {
                                const LcafIcon = item.icon
                                return (
                                    <div key={idx} className="lcaf-why-card">
                                        <div className="lcaf-why-icon-ring">
                                            <LcafIcon size={22} />
                                        </div>
                                        <p className="lcaf-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="lcaf-lead-paragraph" style={{ textAlign: 'center', color: '#cbd5e1', maxWidth: '780px', margin: '40px auto 0' }}>
                            Instead of crowds and long lines, luxury cruises focus on meaningful travel and exceptional hospitality.
                        </p>
                    </div>
                </section>

                {/* SMALL SHIP CRUISES */}
                <section className="lcaf-cruisetype-section">
                    <div className="lcaf-cruisetype-container">
                        <div className="lcaf-cruisetype-grid">
                            {/* <div className="lcaf-cruisetype-media">
                                <img className="lcaf-media-tall" src="https://picsum.photos/seed/lcaf-smallship-1/700/900" alt="Small ship luxury cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-smallship-2/700/440" alt="Boutique small ship atmosphere" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-smallship-3/700/440" alt="Small ship reaching unique port" />
                            </div> */}
                            <div className="lcaf-cruisetype-copy">
                                <span className="lcaf-cruisetype-eyebrow">
                                    <Ship size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Small Ship Cruises
                                </span>
                                <h3 className="lcaf-cruisetype-title">Small ship cruises provide intimate experiences with access to destinations that larger ships simply cannot reach.</h3>
                                <p className="lcaf-cruisetype-intro">Advantages include:</p>
                                <ul className="lcaf-cruisetype-list">
                                    {['Fewer guests', 'Personalized service', 'Boutique atmosphere', 'Unique ports', 'Overnight stays', 'Local cultural experiences', 'Scenic cruising', 'Flexible itineraries'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="lcaf-cruisetype-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="lcaf-cruisetype-footnote">
                                    These voyages are ideal for travelers seeking authenticity, comfort, and personalized attention.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY EXPEDITION CRUISES */}
                <section className="lcaf-cruisetype-section lcaf-cruisetype-soft">
                    <div className="lcaf-cruisetype-container">
                        <div className="lcaf-cruisetype-grid lcaf-cruisetype-reverse">
                            {/* <div className="lcaf-cruisetype-media">
                                <img className="lcaf-media-tall" src="https://picsum.photos/seed/lcaf-expedition-1/700/900" alt="Luxury expedition cruise in Antarctica" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-expedition-2/700/440" alt="Zodiac excursion expedition cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-expedition-3/700/440" alt="Wildlife encounter expedition cruise" />
                            </div> */}
                            <div className="lcaf-cruisetype-copy">
                                <span className="lcaf-cruisetype-eyebrow">
                                    <Snowflake size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Luxury Expedition Cruises
                                </span>
                                <h3 className="lcaf-cruisetype-title">For adventurous families, expedition cruises offer extraordinary access to some of the world's most remote destinations.</h3>
                                <p className="lcaf-cruisetype-intro">Popular expedition destinations include:</p>
                                <ul className="lcaf-cruisetype-list">
                                    {['Antarctica', 'Arctic', 'Greenland', 'Iceland', 'Alaska', 'Galápagos Islands', 'Norwegian Fjords', 'South Pacific'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="lcaf-cruisetype-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="lcaf-cruisetype-footnote">
                                    Expedition cruises combine luxury accommodations with expert guides, Zodiac excursions, wildlife encounters, and educational experiences.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY RIVER CRUISES - DESTINATION GRID */}
                <section className="lcaf-river-section">
                    <div className="lcaf-river-container">
                        <div className="lcaf-river-header">
                            <span className="lcaf-eyebrow-label">
                                <Waves size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Luxury River Cruises
                            </span>
                            <h2 className="lcaf-section-heading">River cruising offers an elegant way to experience historic cities and beautiful countryside.</h2>
                            <div className="lcaf-heading-bar lcaf-bar-center"></div>
                            <p className="lcaf-lead-paragraph">Popular rivers include:</p>
                        </div>
                        <div className="lcaf-river-grid">
                            {lcafRivers.map((river, idx) => (
                                <div key={idx} className="lcaf-river-card">
                                    {/* <img src={river.img} alt={`${river.name} luxury river cruise`} /> */}
                                    <div className="lcaf-river-card-overlay">
                                        <h4 className="lcaf-river-card-name">{river.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="lcaf-river-footer-note">
                            Guests enjoy boutique ships, immersive cultural experiences, locally inspired cuisine, and convenient access to iconic destinations.
                        </p>
                    </div>
                </section>

                {/* YACHT CRUISES */}
                <section className="lcaf-cruisetype-section lcaf-cruisetype-soft">
                    <div className="lcaf-cruisetype-container">
                        <div className="lcaf-cruisetype-grid">
                            {/* <div className="lcaf-cruisetype-media">
                                <img className="lcaf-media-tall" src="https://picsum.photos/seed/lcaf-yacht-1/700/900" alt="Luxury yacht cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-yacht-2/700/440" alt="Elegant yacht suite" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-yacht-3/700/440" alt="Private beach yacht cruise" />
                            </div> */}
                            <div className="lcaf-cruisetype-copy">
                                <span className="lcaf-cruisetype-eyebrow">
                                    <Anchor size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Yacht Cruises
                                </span>
                                <h3 className="lcaf-cruisetype-title">Luxury yacht cruises deliver an exclusive atmosphere with personalized service and access to hidden harbors and secluded coastlines.</h3>
                                <p className="lcaf-cruisetype-intro">Highlights include:</p>
                                <ul className="lcaf-cruisetype-list">
                                    {['Boutique yachts', 'Elegant suites', 'Fine dining', 'Marina platforms', 'Private beaches', 'Water sports', 'Personalized excursions', 'Relaxed luxury'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="lcaf-cruisetype-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="lcaf-cruisetype-footnote">
                                    Yacht cruises are perfect for couples, families, and travelers seeking an intimate luxury experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAMILY-FRIENDLY LUXURY CRUISING */}
                <section className="lcaf-cruisetype-section">
                    <div className="lcaf-cruisetype-container">
                        <div className="lcaf-cruisetype-grid lcaf-cruisetype-reverse">
                            {/* <div className="lcaf-cruisetype-media">
                                <img className="lcaf-media-tall" src="https://picsum.photos/seed/lcaf-familycruise-1/700/900" alt="Family-friendly luxury cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-familycruise-2/700/440" alt="Connecting suites family cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-familycruise-3/700/440" alt="Kids program on luxury cruise" />
                            </div> */}
                            <div className="lcaf-cruisetype-copy">
                                <span className="lcaf-cruisetype-eyebrow">
                                    <Users size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Family-Friendly Luxury Cruising
                                </span>
                                <h3 className="lcaf-cruisetype-title">Luxury cruises are increasingly designed for multigenerational families.</h3>
                                <p className="lcaf-cruisetype-intro">Options may include:</p>
                                <ul className="lcaf-cruisetype-list">
                                    {['Connecting suites', 'Family accommodations', 'Private excursions', 'Kids\' programs', 'Teen activities', 'Educational experiences', 'Celebration planning', 'Flexible dining'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="lcaf-cruisetype-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="lcaf-cruisetype-footnote">
                                    Every family member can enjoy experiences tailored to their interests while traveling together.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXCEPTIONAL DINING */}
                <section className="lcaf-cruisetype-section lcaf-cruisetype-soft">
                    <div className="lcaf-cruisetype-container">
                        <div className="lcaf-cruisetype-grid">
                            {/* <div className="lcaf-cruisetype-media">
                                <img className="lcaf-media-tall" src="https://picsum.photos/seed/lcaf-dining-1/700/900" alt="Gourmet dining aboard a luxury cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-dining-2/700/440" alt="Chef's tasting menu on cruise" />
                                <img className="lcaf-media-short" src="https://picsum.photos/seed/lcaf-dining-3/700/440" alt="Wine pairing dinner cruise" />
                            </div> */}
                            <div className="lcaf-cruisetype-copy">
                                <span className="lcaf-cruisetype-eyebrow">
                                    <Utensils size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Exceptional Dining
                                </span>
                                <h3 className="lcaf-cruisetype-title">Cuisine is an essential part of the luxury cruise experience.</h3>
                                <p className="lcaf-cruisetype-intro">Guests can enjoy:</p>
                                <ul className="lcaf-cruisetype-list">
                                    {['Gourmet restaurants', 'Regional specialties', 'Farm-to-table cuisine', 'Private dining', 'Wine pairings', "Chef's tasting menus", 'Healthy dining options', 'Personalized dietary accommodations'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="lcaf-cruisetype-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="lcaf-cruisetype-footnote">
                                    Many cruise lines also offer exclusive culinary experiences ashore.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCIERGE CRUISE PLANNING */}
                <section className="lcaf-concierge-section">
                    <div className="lcaf-concierge-container">
                        <span className="lcaf-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Concierge Cruise Planning
                        </span>
                        <h2 className="lcaf-section-heading">Our advisors manage every detail of your cruise vacation.</h2>
                        <div className="lcaf-heading-bar lcaf-bar-center"></div>
                        <p className="lcaf-lead-paragraph">Services include:</p>
                        <div className="lcaf-concierge-pills-wrap">
                            {lcafConciergeServices.map((service, idx) => (
                                <span key={idx} className="lcaf-concierge-pill">{service}</span>
                            ))}
                        </div>
                        <p className="lcaf-lead-paragraph" style={{ marginTop: '30px' }}>
                            We ensure your journey is effortless from beginning to end.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE TRIPS & SHIPS */}
                <section className="lcaf-why-us-section">
                    <div className="lcaf-why-us-container">
                        <div className="lcaf-why-us-top">
                            <div className="lcaf-why-us-copy">
                                <span className="lcaf-eyebrow-label">TRUSTED LUXURY CRUISE ADVISORS</span>
                                <h2 className="lcaf-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                                <div className="lcaf-heading-bar"></div>
                                <p className="lcaf-lead-paragraph">
                                    Luxury cruising is about selecting the right ship, itinerary, and experience—not simply booking a cabin. Families choose us because we provide:
                                </p>
                            </div>
                            {/* <div className="lcaf-why-us-image">
                                <img src="https://picsum.photos/seed/lcaf-whychoose/900/650" alt="Family enjoying a luxury cruise vacation" />
                            </div> */}
                        </div>
                        <div className="lcaf-why-us-grid">
                            {lcafWhyChooseUs.map((item, idx) => {
                                const LcafIcon = item.icon
                                return (
                                    <div key={idx} className="lcaf-why-us-card">
                                        <div className="lcaf-why-us-icon">
                                            <LcafIcon size={22} />
                                        </div>
                                        <p className="lcaf-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="lcaf-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            Whether you're considering a luxury yacht, a river cruise through Europe, an expedition to Antarctica, or a Mediterranean voyage, we'll help you create an unforgettable cruise experience tailored to your family.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="lcaf-faq-section">
                    <div className="lcaf-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="lcaf-section-heading">Frequently Asked Questions</h2>
                            <div className="lcaf-heading-bar lcaf-bar-center"></div>
                        </div>
                        <div className="lcaf-faq-list">
                            {lcafFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="lcaf-faq-item"
                                    onClick={() => lcafToggleFaq(index)}
                                >
                                    <div className="lcaf-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="lcaf-faq-toggle">
                                            {lcafActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {lcafActiveFaq === index && (
                                        <p className="lcaf-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="lcaf-cta-section">
                    <div className="lcaf-cta-bg-pattern"></div>
                    <div className="lcaf-cta-inner">
                        <h2 className="lcaf-cta-heading">Ready to Plan Your Family's Next Luxury Voyage?</h2>
                        <div className="lcaf-cta-separator"></div>
                        <p className="lcaf-cta-text">
                            Whether you're considering a luxury yacht, a river cruise through Europe, an expedition to Antarctica, or a Mediterranean voyage, we'll help you create an unforgettable cruise experience tailored to your family.
                        </p>
                        <div className="lcaf-cta-btn-row">
                            <button className="lcaf-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="lcaf-btn-outline">
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

export default LuxuryCruisesForAffluentFamilies