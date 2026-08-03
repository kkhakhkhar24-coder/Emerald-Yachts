import Navbar from '../../components/Navbar/Navbar'
import './UniworldRiverCruises.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, Calendar, DollarSign, Info,
    Image as ImageIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function UniPlaceholder({ label, className = '' }) {
    return (
        <div className={`uni-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldRiverCruises() {
    const [uniActiveFaq, setUniActiveFaq] = useState(null)
    const uniToggleFaq = i => setUniActiveFaq(uniActiveFaq === i ? null : i)

    const uniFaqs = [
        { question: 'What is Uniworld River Cruises?', answer: 'Uniworld Boutique River Cruises is a luxury river cruise line offering all-inclusive voyages across Europe, Egypt, India, Peru, and Asia. Each ship is individually designed with boutique hotel-style interiors.' },
        { question: 'Is Uniworld all-inclusive?', answer: 'Yes. Most fares include accommodations, gourmet dining, unlimited premium beverages, shore excursions, gratuities, Wi-Fi, and onboard entertainment.' },
        { question: 'Where does Uniworld cruise?', answer: 'Uniworld sails on the Danube, Rhine, Main, Moselle, Seine, Rhône, Douro, Po, Nile, and Ganges rivers, as well as the Peruvian Amazon and Mekong.' },
        { question: 'Are gratuities included?', answer: 'Yes. Gratuities for onboard crew, guides, and drivers are generally included on Uniworld cruises.' },
        { question: 'Does Uniworld offer butler service?', answer: 'Yes. Butler service is available in select suite categories, providing personalized attention throughout your voyage.' },
        { question: 'What is the dress code?', answer: 'The atmosphere is elegant yet relaxed. Smart casual attire is appropriate for most evenings, with some guests choosing to dress up for special dinners.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Daily guided excursions led by knowledgeable local guides are typically included in the cruise fare.' },
        { question: 'Does Uniworld include alcoholic beverages?', answer: 'Yes. Premium wines, beer, spirits, and specialty coffees are generally included throughout your cruise.' },
        { question: 'Is Uniworld suitable for first-time river cruisers?', answer: 'Absolutely. Its all-inclusive experience, personalized service, and intimate ship size make it an excellent choice for first-time luxury river cruisers.' },
        { question: 'How many guests are on a Uniworld ship?', answer: 'Guest capacity varies by ship, but most accommodate approximately 120–160 passengers, creating an intimate and uncrowded atmosphere.' },
        { question: 'Is Uniworld worth the price?', answer: 'Many travelers consider Uniworld worth the investment thanks to its luxury accommodations, all-inclusive pricing, exceptional dining, personalized service, and boutique ship design.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Our experts provide personalized recommendations, exclusive offers, concierge-level planning, and ongoing support to ensure your Uniworld vacation exceeds expectations.' },
        { question: 'What is the best time to take a Uniworld river cruise?', answer: 'Spring offers tulips and mild weather, summer provides festivals and long daylight hours, autumn features wine harvests, and winter showcases magical Christmas Markets.' },
        { question: 'How far in advance should I book a Uniworld cruise?', answer: 'Popular itineraries and suite categories often sell out well in advance. Booking 6–12 months ahead is recommended for the best selection of cabins and dates.' },
        { question: 'Does Uniworld offer family-friendly cruises?', answer: 'While Uniworld primarily caters to adults, select sailings and multi-generational programs are available. Contact our specialists for guidance on family-appropriate itineraries.' }
    ]

    const uniWhyChoose = [
        { Icon: Ship, text: 'Boutique luxury ships' },
        { Icon: CheckCircle, text: 'All-inclusive pricing' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: Utensils, text: 'Gourmet dining' },
        { Icon: Crown, text: 'Butler service in select suites' },
        { Icon: MapPin, text: 'Carefully curated excursions' },
        { Icon: Users, text: 'Small passenger capacity' },
        { Icon: UserCheck, text: 'Personalized service' }
    ]

    const uniEuropeRivers = [
        'Danube River', 'Rhine River', 'Main River', 'Moselle River',
        'Seine River', 'Rhône River', 'Douro River', 'Po River'
    ]

    const uniEuropeCountries = [
        'France', 'Germany', 'Austria', 'Hungary', 'Netherlands',
        'Belgium', 'Portugal', 'Italy', 'Switzerland', 'Czech Republic'
    ]

    const uniFleetData = [
        { name: 'S.S. Joie de Vivre', region: 'France' },
        { name: 'S.S. Bon Voyage', region: 'France' },
        { name: 'S.S. Beatrice', region: 'Danube' },
        { name: 'S.S. Maria Theresa', region: 'Central Europe' },
        { name: 'S.S. Antoinette', region: 'Rhine' },
        { name: 'River Queen', region: 'Rhine' },
        { name: 'River Princess', region: 'Europe' },
        { name: 'River Duchess', region: 'Europe' },
        { name: 'S.S. São Gabriel', region: 'Portugal' },
        { name: 'S.S. La Venezia', region: 'Italy' }
    ]

    const uniStateroomTypes = [
        { Icon: Bed, label: 'Classic Staterooms' },
        { Icon: Star, label: 'Deluxe Staterooms' },
        { Icon: Sun, label: 'French Balcony Rooms' },
        { Icon: Gem, label: 'Suites' }
    ]

    const uniSuiteFeatures = [
        { Icon: Bed, text: 'Premium bedding' },
        { Icon: Bath, text: 'Marble bathrooms' },
        { Icon: Tv, text: 'Flat-screen TV' },
        { Icon: Sparkles, text: 'Luxury toiletries' },
        { Icon: Wifi, text: 'Complimentary Wi-Fi' },
        { Icon: Crown, text: 'Butler service (select suites)' },
        { Icon: Gem, text: 'Larger living areas' },
        { Icon: Award, text: 'Enhanced amenities' },
        { Icon: ShieldCheck, text: 'Premium furnishings' },
        { Icon: MessageSquare, text: 'Concierge assistance' },
        { Icon: Eye, text: 'Panoramic river views' },
        { Icon: Utensils, text: 'In-suite dining' }
    ]

    const uniDining = [
        { Icon: Utensils, text: 'Multiple-course dinners' },
        { Icon: MapPin, text: 'Regional specialties' },
        { Icon: Wine, text: 'Fine wines' },
        { Icon: Landmark, text: 'Farm-to-table ingredients' },
        { Icon: Users, text: 'Open seating' },
        { Icon: Clock, text: 'Afternoon tea' },
        { Icon: Gift, text: 'Specialty desserts' },
        { Icon: Sun, text: 'Seasonally changing menus' }
    ]

    const uniIncluded = [
        'Luxury accommodations',
        'All meals',
        'Unlimited premium beverages',
        'Wine and spirits',
        'Shore excursions',
        'Airport transfers (selected itineraries)',
        'Gratuities',
        'Wi-Fi',
        'Onboard entertainment',
        'Fitness facilities'
    ]

    const uniExcursions = [
        { Icon: Users, text: 'Guided walking tours' },
        { Icon: Landmark, text: 'Museum visits' },
        { Icon: Palette, text: 'Castle tours' },
        { Icon: Utensils, text: 'Culinary experiences' },
        { Icon: Wine, text: 'Wine tastings' },
        { Icon: Bike, text: 'Bike tours' },
        { Icon: MapPin, text: 'Village visits' },
        { Icon: Music, text: 'Cultural performances' },
        { Icon: Camera, text: 'Market tours' }
    ]

    const uniWellness = [
        { Icon: Heart, text: 'Fitness classes' },
        { Icon: Smile, text: 'Yoga sessions' },
        { Icon: MessageSquare, text: 'Lectures' },
        { Icon: Music, text: 'Local entertainment' },
        { Icon: Utensils, text: 'Cooking demonstrations' },
        { Icon: Wine, text: 'Wine tastings' },
        { Icon: Sparkles, text: 'Spa treatments (additional charge)' },
        { Icon: Sun, text: 'Sun deck relaxation' }
    ]

    const uniBestTime = [
        { season: 'Spring', highlights: 'Tulips, gardens, mild weather' },
        { season: 'Summer', highlights: 'Festivals, long daylight hours' },
        { season: 'Autumn', highlights: 'Wine harvests, colorful landscapes' },
        { season: 'Winter', highlights: 'Christmas Markets, festive atmosphere' }
    ]

    const uniWhoShould = [
        'Couples',
        'Honeymooners',
        'Luxury travelers',
        'Retirees',
        'Food enthusiasts',
        'Cultural travelers',
        'Multi-generational families on select sailings',
        'Experienced cruisers seeking boutique experiences'
    ]

    const uniComparisonData = [
        { feature: 'Ship Design', uniworld: 'Individually designed', typical: 'Mostly standardized' },
        { feature: 'Dining', uniworld: 'Gourmet regional cuisine', typical: 'High quality' },
        { feature: 'Butler Service', uniworld: 'Select suites', typical: 'Limited' },
        { feature: 'Excursions', uniworld: 'Included', typical: 'Mostly included' },
        { feature: 'Drinks', uniworld: 'Premium included', typical: 'Varies' },
        { feature: 'Passenger Capacity', uniworld: 'Small', typical: 'Small' },
        { feature: 'Luxury Level', uniworld: 'Boutique luxury', typical: 'Premium luxury' }
    ]

    const uniBookingTips = [
        'Reserve early for the best cabin selection',
        'Compare seasonal promotions',
        'Consider airfare packages',
        'Review included excursions',
        'Check passport validity',
        'Purchase travel insurance',
        'Book specialty suites well in advance',
        'Consider extending your trip before or after the cruise'
    ]

    const uniKeyTakeaways = [
        'Boutique luxury ships with unique interior designs',
        'All-inclusive experience with premium amenities',
        'Extensive European, Egyptian, Indian, and Peruvian itineraries',
        'Gourmet regional cuisine and immersive excursions',
        'Small ships deliver personalized service',
        'Multiple accommodation categories, including luxury suites',
        'Ideal for travelers seeking cultural experiences with luxury comfort'
    ]

    const uniSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises",
                "name": "Uniworld River Cruises: Complete Guide to Luxury River Travel",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises",
                "description": "Discover everything about Uniworld River Cruises, including destinations, ships, suites, dining, pricing, itineraries, and booking tips.",
                "inLanguage": "en-US"
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
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises#article",
                "headline": "Uniworld River Cruises: The Complete Guide",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises",
                "description": "Expert guide to Uniworld River Cruises, featuring ships, destinations, luxury accommodations, dining, excursions, and all-inclusive experiences.",
                "image": "https://www.tripsshipsluxurytravel.com/images/uniworld-river-cruises.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises" }
            },
            {
                "@type": "Service",
                "name": "Uniworld River Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning and personalized advice for Uniworld River Cruises."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsshipsluxurytravel.com/river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is Uniworld River Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Uniworld Boutique River Cruises is a luxury river cruise line offering all-inclusive voyages across Europe, Egypt, India, Peru, and Asia. Each ship is individually designed with boutique hotel-style interiors." } },
                    { "@type": "Question", "name": "Is Uniworld all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most fares include accommodations, gourmet dining, unlimited premium beverages, shore excursions, gratuities, Wi-Fi, and onboard entertainment." } },
                    { "@type": "Question", "name": "Where does Uniworld cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Uniworld sails on the Danube, Rhine, Main, Moselle, Seine, Rhône, Douro, Po, Nile, and Ganges rivers, as well as the Peruvian Amazon and Mekong." } },
                    { "@type": "Question", "name": "Are gratuities included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuities for onboard crew, guides, and drivers are generally included on Uniworld cruises." } },
                    { "@type": "Question", "name": "Does Uniworld offer butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Butler service is available in select suite categories, providing personalized attention throughout your voyage." } },
                    { "@type": "Question", "name": "What is the dress code?", "acceptedAnswer": { "@type": "Answer", "text": "The atmosphere is elegant yet relaxed. Smart casual attire is appropriate for most evenings, with some guests choosing to dress up for special dinners." } },
                    { "@type": "Question", "name": "Are shore excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Daily guided excursions led by knowledgeable local guides are typically included in the cruise fare." } },
                    { "@type": "Question", "name": "Does Uniworld include alcoholic beverages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Premium wines, beer, spirits, and specialty coffees are generally included throughout your cruise." } },
                    { "@type": "Question", "name": "Is Uniworld suitable for first-time river cruisers?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Its all-inclusive experience, personalized service, and intimate ship size make it an excellent choice for first-time luxury river cruisers." } },
                    { "@type": "Question", "name": "How many guests are on a Uniworld ship?", "acceptedAnswer": { "@type": "Answer", "text": "Guest capacity varies by ship, but most accommodate approximately 120-160 passengers, creating an intimate and uncrowded atmosphere." } },
                    { "@type": "Question", "name": "Is Uniworld worth the price?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers consider Uniworld worth the investment thanks to its luxury accommodations, all-inclusive pricing, exceptional dining, personalized service, and boutique ship design." } },
                    { "@type": "Question", "name": "Why choose Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Our experts provide personalized recommendations, exclusive offers, concierge-level planning, and ongoing support to ensure your Uniworld vacation exceeds expectations." } },
                    { "@type": "Question", "name": "What is the best time to take a Uniworld river cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Spring offers tulips and mild weather, summer provides festivals and long daylight hours, autumn features wine harvests, and winter showcases magical Christmas Markets." } },
                    { "@type": "Question", "name": "How far in advance should I book a Uniworld cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Popular itineraries and suite categories often sell out well in advance. Booking 6-12 months ahead is recommended for the best selection." } },
                    { "@type": "Question", "name": "Does Uniworld offer family-friendly cruises?", "acceptedAnswer": { "@type": "Answer", "text": "While Uniworld primarily caters to adults, select sailings and multi-generational programs are available. Contact our specialists for guidance on family-appropriate itineraries." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld River Cruises: Complete Guide to Luxury River Travel</title>
                <meta name="title" content="Uniworld River Cruises: Complete Guide to Luxury River Travel" />
                <meta name="description" content="Discover everything about Uniworld River Cruises, including destinations, ships, suites, dining, pricing, itineraries, and booking tips." />
                <meta name="keywords" content="Uniworld River Cruises, Uniworld Boutique River Cruises, Uniworld cruise ships, luxury river cruises, European river cruises, all-inclusive river cruises, Uniworld itineraries, Uniworld suites, Uniworld destinations, river cruise guide" />
                <script type="application/ld+json">{JSON.stringify(uniSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uni-hero-section">
                <UniPlaceholder label="Hero Background Image" className="uni-hero-bg-placeholder" />
                <div className="uni-hero-overlay-layer"></div>
                <div className="uni-hero-content-wrapper">
                    <div className="uni-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury River Cruising · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uni-hero-main-title">
                        Uniworld River Cruises: The Complete Guide
                    </h1>
                    <p className="uni-hero-subtitle-text">
                        Uniworld River Cruises is known for transforming river travel into a luxury boutique hotel experience on water. With individually designed ships, all-inclusive amenities, immersive cultural excursions, and award-winning service, Uniworld appeals to travelers seeking elegance, comfort, and authentic destination experiences.
                    </p>
                </div>
            </section>

            {/* ── WHAT MAKES UNIWORLD UNIQUE ── */}
            <section className="uni-why-section">
                <div className="uni-why-container">
                    <div className="uni-why-grid">

                        <div className="uni-why-text-col">
                            <span className="uni-eyebrow">THE UNIWORLD DIFFERENCE</span>
                            <h2 className="uni-section-heading">What Makes Uniworld River Cruises Unique?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-why-lead">Uniworld Boutique River Cruises combines luxury hospitality with destination-focused travel. Every ship is individually decorated using handcrafted furnishings, artwork, and locally inspired interiors, creating an experience unlike traditional cruise ships.</p>
                            <p className="uni-why-sub">Key highlights:</p>

                            <div className="uni-why-list">
                                {uniWhyChoose.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-why-item">
                                        <div className="uni-why-icon"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uni-why-statement-box" style={{ marginTop: '24px' }}>
                                <div className="uni-why-statement-accent"></div>
                                <div className="uni-why-statement-text">
                                    <p className="uni-why-statement-primary" style={{ fontSize: '14.5px', color: '#4a5568', lineHeight: 1.6 }}>
                                        Unlike large ocean cruises, Uniworld&apos;s intimate ships provide a relaxed atmosphere while docking directly in the heart of historic cities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="uni-why-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Uniworld Boutique Ship Image" />
                                <div className="uni-frame-overlay"></div>
                                <div className="uni-image-badge">
                                    <Ship size={13} />
                                    <span>Boutique Luxury on Europe&apos;s Rivers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="uni-destinations-section">
                <div className="uni-destinations-container">
                    <div className="uni-destinations-header">
                        <span className="uni-eyebrow uni-eyebrow-light">WORLDWIDE ITINERARIES</span>
                        <h2 className="uni-section-heading uni-white-heading">Destinations Covered by Uniworld River Cruises</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="uni-destinations-intro">Uniworld offers itineraries across some of the world&apos;s most scenic rivers.</p>
                    </div>

                    {/* Europe */}
                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.02em' }}>Europe</h3>
                        <div className="uni-destinations-grid">
                            {uniEuropeRivers.map((river, idx) => (
                                <div key={idx} className="uni-destination-card">
                                    <div className="uni-destination-icon"><MapPin size={18} /></div>
                                    <span>{river}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: 600, margin: '24px 0 14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Countries visited</p>
                        <div className="uni-destinations-grid">
                            {uniEuropeCountries.map((country, idx) => (
                                <div key={idx} className="uni-destination-card">
                                    <div className="uni-destination-icon"><Globe size={18} /></div>
                                    <span>{country}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Egypt */}
                    <div style={{ marginBottom: '36px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '28px 32px' }}>
                        <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', letterSpacing: '0.02em' }}>Egypt</h3>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15.5px', lineHeight: 1.7, margin: 0 }}>
                            Luxury Nile River cruises featuring Luxor, Aswan, Valley of the Kings, and Karnak Temple, combining ancient wonders with modern comfort.
                        </p>
                    </div>

                    {/* India */}
                    <div style={{ marginBottom: '36px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '28px 32px' }}>
                        <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', letterSpacing: '0.02em' }}>India</h3>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15.5px', lineHeight: 1.7, margin: 0 }}>
                            River cruises along the Ganges, exploring Kolkata, Varanasi, rural villages, and historic temples for an immersive cultural journey.
                        </p>
                    </div>

                    {/* Peru */}
                    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '28px 32px' }}>
                        <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: 700, marginBottom: '12px', letterSpacing: '0.02em' }}>Peru</h3>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15.5px', lineHeight: 1.7, margin: 0 }}>
                            Amazon River cruises and Sacred Valley extensions, offering unique perspectives on Peru&apos;s natural beauty and cultural heritage.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FLEET OVERVIEW ── */}
            <section className="uni-ships-section">
                <div className="uni-ships-container">
                    <div className="uni-ships-grid">

                        <div className="uni-ships-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Uniworld Fleet Image" />
                                <div className="uni-frame-overlay uni-overlay-soft"></div>
                            </div>
                            <div className="uni-ships-pivot-box">
                                <p className="uni-ships-pivot-text">Each vessel typically accommodates between 120 and 160 guests.</p>
                                <p className="uni-ships-pivot-sub">Creating an intimate atmosphere on every sailing.</p>
                            </div>
                        </div>

                        <div className="uni-ships-text-col">
                            <span className="uni-eyebrow">SHIP DESIGN</span>
                            <h2 className="uni-section-heading">Uniworld Fleet Overview</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-ships-lead">Every ship has its own personality rather than following a standardized design.</p>

                            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid rgba(39, 68, 114, 0.15)' }}>
                                        <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '12px', fontWeight: 700, color: '#274472', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Ship Name</th>
                                        <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: '12px', fontWeight: 700, color: '#274472', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Primary Region</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uniFleetData.map((ship, idx) => (
                                        <tr key={idx} style={{ borderBottom: '1px solid rgba(39, 68, 114, 0.08)' }}>
                                            <td style={{ padding: '11px 16px', fontSize: '14.5px', fontWeight: 600, color: '#2d3748' }}>{ship.name}</td>
                                            <td style={{ padding: '11px 16px', fontSize: '14.5px', color: '#4a5568' }}>{ship.region}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ACCOMMODATION OPTIONS ── */}
            <section className="uni-suites-section">
                <div className="uni-suites-container">
                    <div className="uni-suites-header">
                        <span className="uni-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Accommodation Options</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-suites-intro">Guests can choose from several accommodation categories, each offering comfort and elegance.</p>
                    </div>

                    <div className="uni-stateroom-row">
                        {uniStateroomTypes.map(({ Icon, label }, idx) => (
                            <div key={idx} className="uni-stateroom-pill">
                                <Icon size={16} />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-suites-content">
                        <div className="uni-suites-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Luxury Uniworld Suite Image" />
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>
                        <div className="uni-suites-features-col">
                            <p className="uni-suites-features-label">Features often include:</p>
                            <div className="uni-suites-features-grid">
                                {uniSuiteFeatures.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-feature-card">
                                        <div className="uni-feature-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="uni-suites-note">
                                <p>Higher-category suites may also include butler service and additional exclusive amenities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="uni-dining-section">
                <div className="uni-dining-bg">
                    <UniPlaceholder label="Uniworld Dining Image" className="uni-dining-bg-placeholder" />
                </div>
                <div className="uni-dining-overlay"></div>
                <div className="uni-dining-content">
                    <span className="uni-dining-eyebrow">CULINARY EXCELLENCE</span>
                    <h2 className="uni-dining-heading">Dining on Uniworld</h2>
                    <div className="uni-dining-separator"></div>
                    <p className="uni-dining-note">Dining emphasizes regional cuisine prepared using fresh ingredients sourced throughout each itinerary.</p>

                    <div className="uni-dining-points">
                        {uniDining.map(({ Icon, text }, idx) => (
                            <div key={idx} className="uni-dining-point">
                                <div className="uni-dining-point-icon"><Icon size={18} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="uni-dining-footer">Menus change throughout the voyage to reflect local destinations.</p>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="uni-included-section">
                <div className="uni-included-container">
                    <div className="uni-included-header">
                        <span className="uni-eyebrow">ALL-INCLUSIVE VALUE</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>What&apos;s Included?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-included-intro">One reason travelers choose Uniworld is its comprehensive all-inclusive experience.</p>
                        <p className="uni-included-sub">Typically included:</p>
                    </div>

                    <div className="uni-included-grid">
                        {uniIncluded.map((item, idx) => (
                            <div key={idx} className="uni-included-card">
                                <CheckCircle size={18} className="uni-included-check" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-included-footer">
                        <p>Some specialty excursions or extensions may involve additional costs.</p>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="uni-excursions-section">
                <div className="uni-excursions-container">
                    <div className="uni-excursions-grid">

                        <div className="uni-excursions-text-col">
                            <span className="uni-eyebrow">GUIDED EXPERIENCES</span>
                            <h2 className="uni-section-heading">Shore Excursions</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-excursions-lead">Uniworld focuses on immersive local experiences led by knowledgeable guides.</p>
                            <p className="uni-excursions-sub">Popular experiences include:</p>

                            <div className="uni-excursions-list">
                                {uniExcursions.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-excursion-item">
                                        <div className="uni-excursion-icon"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="uni-excursions-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Guided Shore Excursion Image" />
                                <div className="uni-frame-overlay"></div>
                            </div>
                            <div className="uni-excursions-conclusion-box">
                                <p>Many sailings also include exclusive evening events at historic venues.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WELLNESS AND ONBOARD ACTIVITIES ── */}
            <section className="uni-service-section">
                <div className="uni-service-container">
                    <div className="uni-service-grid">

                        <div className="uni-service-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Onboard Wellness and Activities Image" />
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="uni-service-text-col">
                            <span className="uni-eyebrow">ONBOARD ENRICHMENT</span>
                            <h2 className="uni-section-heading">Wellness and Onboard Activities</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-service-lead">Although river cruises emphasize destinations, Uniworld also provides onboard enrichment.</p>
                            <p className="uni-service-sub">Guests can enjoy:</p>

                            <div className="uni-service-pillars">
                                {uniWellness.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-service-pillar">
                                        <div className="uni-service-pillar-icon"><Icon size={20} /></div>
                                        <span className="uni-service-pillar-label">{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uni-service-conclusion-box">
                                <p>Wellness activities and enrichment programs complement the immersive destination experiences on every voyage.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BEST TIME ── */}
            <section className="uni-compare-section">
                <div className="uni-compare-container">
                    <div className="uni-compare-header">
                        <span className="uni-eyebrow uni-eyebrow-light">SEASONAL GUIDE</span>
                        <h2 className="uni-section-heading uni-white-heading">Best Time to Take a Uniworld River Cruise</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.2)' }}>
                                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Season</th>
                                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Highlights</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uniBestTime.map((item, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                    <td style={{ padding: '14px 20px', fontSize: '15px', fontWeight: 600, color: '#ffffff' }}>{item.season}</td>
                                    <td style={{ padding: '14px 20px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>{item.highlights}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="uni-compare-footer">
                        <p>Travel goals often determine the ideal season for your Uniworld river cruise.</p>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="uni-compare-section" style={{ background: '#182c49' }}>
                <div className="uni-compare-container">
                    <div className="uni-compare-header">
                        <span className="uni-eyebrow uni-eyebrow-light">VALUE &amp; INVESTMENT</span>
                        <h2 className="uni-section-heading uni-white-heading">Understanding Uniworld Pricing</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="uni-compare-intro">Pricing depends on destination, cruise length, cabin category, travel season, promotions, and included land programs.</p>
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px', padding: '28px 32px', display: 'inline-block', maxWidth: '720px' }}>
                            <DollarSign size={28} style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }} />
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
                                Luxury inclusions often reduce additional onboard expenses compared with lower-priced alternatives, making Uniworld a compelling value for discerning travelers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="uni-who-section">
                <div className="uni-who-container">
                    <div className="uni-who-header">
                        <span className="uni-eyebrow">IDEAL TRAVELERS</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Who Should Choose Uniworld?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-who-intro">Uniworld appeals to travelers looking for refined, culturally immersive experiences.</p>
                        <p className="uni-who-sub">Ideal for:</p>
                    </div>

                    <div className="uni-who-grid">
                        {uniWhoShould.map((item, idx) => (
                            <div key={idx} className="uni-who-card">
                                <Heart size={16} className="uni-who-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-who-footer">
                        <p>Travelers looking for nightlife or large-scale entertainment may prefer ocean cruises instead.</p>
                    </div>
                </div>
            </section>

            {/* ── UNIWORLD VS OTHERS ── */}
            <section className="uni-compare-section">
                <div className="uni-compare-container">
                    <div className="uni-compare-header">
                        <span className="uni-eyebrow uni-eyebrow-light">COMPETITIVE STANDING</span>
                        <h2 className="uni-section-heading uni-white-heading">Uniworld Compared with Other Luxury River Cruise Lines</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.2)' }}>
                                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Feature</th>
                                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Uniworld</th>
                                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Typical Premium River Cruise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uniComparisonData.map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                    <td style={{ padding: '14px 20px', fontSize: '14.5px', fontWeight: 600, color: '#ffffff' }}>{row.feature}</td>
                                    <td style={{ padding: '14px 20px', fontSize: '14.5px', color: 'rgba(255,255,255,0.9)' }}>{row.uniworld}</td>
                                    <td style={{ padding: '14px 20px', fontSize: '14.5px', color: 'rgba(255,255,255,0.75)' }}>{row.typical}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="uni-compare-footer">
                        <p>Uniworld distinguishes itself through personalized service and highly distinctive ship interiors.</p>
                    </div>
                </div>
            </section>

            {/* ── BOOKING TIPS ── */}
            <section className="uni-booking-section">
                <div className="uni-booking-container">
                    <div className="uni-booking-header">
                        <span className="uni-eyebrow uni-eyebrow-light">EXPERT PLANNING</span>
                        <h2 className="uni-section-heading uni-white-heading" style={{ textAlign: 'center' }}>Booking Tips</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="uni-booking-intro">Our expert recommendations for planning your Uniworld river cruise:</p>
                    </div>

                    <div className="uni-booking-grid">
                        {uniBookingTips.map((item, idx) => (
                            <div key={idx} className="uni-booking-card">
                                <CheckCircle size={18} style={{ color: '#274472', flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-booking-footer">
                        <p>We make booking your Uniworld river cruise simple, seamless, and stress-free.</p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uni-who-section" style={{ background: '#ffffff' }}>
                <div className="uni-who-container">
                    <div className="uni-who-header">
                        <span className="uni-eyebrow">SUMMARY</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-who-grid">
                        {uniKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="uni-who-card">
                                <CheckCircle size={16} className="uni-who-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONCLUSION ── */}
            <section className="uni-review-section">
                <div className="uni-review-container">
                    <div className="uni-review-header">
                        <span className="uni-eyebrow">FINAL THOUGHTS</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Conclusion</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-review-intro">
                            Uniworld River Cruises offers an elevated river cruising experience through boutique ships, destination-inspired design, personalized service, and comprehensive all-inclusive amenities. Whether exploring the castles of the Rhine, the vineyards of the Douro, or the ancient temples of Egypt, travelers enjoy immersive journeys paired with exceptional hospitality. By understanding the destinations, ships, pricing, and onboard experience, you can confidently determine whether Uniworld is the right choice for your next luxury river cruise.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '32px' }}>
                        <div style={{ background: '#f6f8fb', borderRadius: '14px', padding: '28px 32px', display: 'inline-block', maxWidth: '720px', border: '1px solid rgba(39, 68, 114, 0.08)' }}>
                            <Info size={28} style={{ color: '#274472', marginBottom: '14px' }} />
                            <p style={{ color: '#2d3748', fontSize: '15px', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                                Contact Trips &amp; Ships Luxury Travel for personalized guidance and exclusive Uniworld offers tailored to your travel preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uni-faq-main-section">
                <div className="uni-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="uni-section-heading">Frequently Asked Questions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="uni-faq-list-wrapper">
                        {uniFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uni-faq-individual-item"
                                onClick={() => uniToggleFaq(index)}
                            >
                                <div className="uni-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uni-faq-toggle-icon">{uniActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {uniActiveFaq === index && (
                                    <p className="uni-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uni-cta-main-section">
                <div className="uni-cta-bg-pattern-layer"></div>
                <div className="uni-cta-content-relative">
                    <div className="uni-cta-inner-wrapper">

                        <h2 className="uni-cta-heading-white">Ready to experience luxury river cruising?</h2>
                        <div className="uni-cta-separator-white"></div>

                        <p className="uni-cta-paragraph-white">
                            A Uniworld river cruise offers boutique luxury, all-inclusive comfort, and unforgettable destinations across Europe, Egypt, India, and Peru.
                        </p>

                        <p className="uni-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers choose the right ship, suite, and itinerary for an unforgettable Uniworld vacation.
                        </p>

                        <div className="uni-cta-considerations-box">
                            <span className="uni-cta-considerations-title">Let us help you with:</span>
                            <ul className="uni-cta-considerations-list">
                                {[
                                    'Comparing Uniworld itineraries',
                                    'Choosing the right ship and suite',
                                    'Finding exclusive offers and promotions',
                                    'Arranging flights and pre/post-cruise stays',
                                    'Personalized concierge-level planning',
                                    'Ensuring every detail exceeds expectations'
                                ].map((item, idx) => (
                                    <li key={idx} className="uni-cta-considerations-item">
                                        <CheckCircle size={16} className="uni-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="uni-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="uni-cta-button-group">
                            <Link to='/contact' className="uni-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="uni-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore River Cruise Programs
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default UniworldRiverCruises