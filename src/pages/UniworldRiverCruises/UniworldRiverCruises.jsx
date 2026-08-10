import Navbar from '../../components/Navbar/Navbar'
import './UniworldRiverCruises.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem, ArrowRight,
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

function UrcPlaceholder({ label, className = '' }) {
    return (
        <div className={`urc-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldRiverCruises() {
    const [urcActiveFaq, setUrcActiveFaq] = useState(null)
    const urcToggleFaq = i => setUrcActiveFaq(urcActiveFaq === i ? null : i)
    const [urcActiveDestTab, setUrcActiveDestTab] = useState(0)
    const [urcActiveExcursionTab, setUrcActiveExcursionTab] = useState(0)

    const urcFaqs = [
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

    const urcWhyChoose = [
        { Icon: Ship, text: 'Boutique luxury ships' },
        { Icon: CheckCircle, text: 'All-inclusive pricing' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: Utensils, text: 'Gourmet dining' },
        { Icon: Crown, text: 'Butler service in select suites' },
        { Icon: MapPin, text: 'Carefully curated excursions' },
        { Icon: Users, text: 'Small passenger capacity' },
        { Icon: UserCheck, text: 'Personalized service' }
    ]

    const urcDestinations = [
        {
            region: 'Europe',
            imageLabel: 'European River Cruise Image',
            tag: 'Most Popular',
            description: 'Explore the heart of Europe along its most iconic waterways, from the Danube to the Douro.',
            rivers: 'Danube, Rhine, Seine, Douro, Po & more',
            countries: 'France, Germany, Portugal, Italy, Austria'
        },
        {
            region: 'Egypt',
            imageLabel: 'Nile River Cruise Image',
            tag: 'Exotic',
            description: 'Sail the timeless Nile and discover ancient wonders like the Valley of the Kings in absolute luxury.',
            rivers: 'Nile River',
            countries: 'Egypt'
        },
        {
            region: 'India',
            imageLabel: 'Ganges River Cruise Image',
            tag: 'Immersive',
            description: 'A soul-stirring journey along the sacred Ganges, exploring vibrant Kolkata and historic temples.',
            rivers: 'Ganges River',
            countries: 'India'
        },
        {
            region: 'Peru',
            imageLabel: 'Amazon River Cruise Image',
            tag: 'Adventure',
            description: 'Venture into the Amazon rainforest or explore the Sacred Valley and Machu Picchu.',
            rivers: 'Amazon River',
            countries: 'Peru'
        },
        {
            region: 'Vietnam & Cambodia',
            imageLabel: 'Mekong River Cruise Image',
            tag: 'Cultural',
            description: 'Experience the magic of the Mekong, from the temples of Angkor Wat to the bustling life of the delta.',
            rivers: 'Mekong River',
            countries: 'Vietnam, Cambodia'
        }
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
        { Icon: Bed, label: 'Luxury accommodations' },
        { Icon: Utensils, label: 'All meals' },
        { Icon: Wine, label: 'Unlimited premium beverages' },
        { Icon: Wine, label: 'Wine and spirits' },
        { Icon: Compass, label: 'Shore excursions' },
        { Icon: Globe, label: 'Airport transfers' },
        { Icon: Gift, label: 'Gratuities' },
        { Icon: Wifi, label: 'Wi-Fi' },
        { Icon: Music, label: 'Onboard entertainment' },
        { Icon: Sun, label: 'Fitness facilities' }
    ]

    const uniExcursions = [
        { 
            Icon: Users, 
            text: 'Guided walking tours',
            description: 'Explore historic city centers, winding cobblestone streets, and local neighborhoods with an expert local guide who brings history, architecture, and folklore to life.',
            tag: 'Cultural',
            imageLabel: 'Guided Walking Tour Image',
            highlights: ['Local expert guides', 'Whisper audio headsets included', 'Small group pacing']
        },
        { 
            Icon: Landmark, 
            text: 'Museum visits',
            description: 'Enjoy skip-the-line access to world-renowned museums and galleries, discovering masterpiece collections with insights from dedicated art historians.',
            tag: 'Art & History',
            imageLabel: 'Museum Visit Image',
            highlights: ['Pre-booked tickets', 'Expert art commentators', 'Iconic collections']
        },
        { 
            Icon: Palette, 
            text: 'Castle tours',
            description: 'Step back in time at magnificent cliffside castles, medieval fortresses, and opulent palaces that line the banks of Europe\'s historic waterways.',
            tag: 'Architecture',
            imageLabel: 'Castle Tour Image',
            highlights: ['Panoramic views', 'Royal history stories', 'Private garden access']
        },
        { 
            Icon: Utensils, 
            text: 'Culinary experiences',
            description: 'Indulge in authentic regional flavors with hands-on cooking demonstrations, local food tastings, and visits to artisanal producers.',
            tag: 'Local Flavor',
            imageLabel: 'Culinary Experience Image',
            highlights: ['Local food markets', 'Regional specialties', 'Cooking lessons']
        },
        { 
            Icon: Wine, 
            text: 'Wine tastings',
            description: 'Visit historic family-run vineyards and grand estates to sample award-winning local vintages and learn about traditional winemaking methods.',
            tag: 'Tastings',
            imageLabel: 'Wine Tasting Image',
            highlights: ['Sommelier-led tours', 'Scenic vineyard walks', 'Wine & food pairings']
        },
        { 
            Icon: Bike, 
            text: 'Bike tours',
            description: 'Pedal along scenic river paths and through picturesque countryside with guided bicycle excursions, using the ship\'s high-quality fleet of bikes.',
            tag: 'Active',
            imageLabel: 'Bike Tour Image',
            highlights: ['Helmets & gear provided', 'Guided routes', 'Active exploration']
        },
        { 
            Icon: MapPin, 
            text: 'Village visits',
            description: 'Wander through charming, untouched fairytale villages and small towns, meeting local artisans and experiencing traditional daily life firsthand.',
            tag: 'Immersive',
            imageLabel: 'Village Visit Image',
            highlights: ['Off-the-beaten-path locations', 'Local craft interactions', 'Authentic hospitality']
        },
        { 
            Icon: Music, 
            text: 'Cultural performances',
            description: 'Experience exclusive musical concerts, traditional dance shows, and theatrical performances at historic, atmospheric venues onshore.',
            tag: 'Entertainment',
            imageLabel: 'Cultural Performance Image',
            highlights: ['Private concerts', 'Historic venues', 'Local musicians']
        },
        { 
            Icon: Camera, 
            text: 'Market tours',
            description: 'Navigate bustling local craft and food markets with guides who point out authentic items, regional treats, and the best local vendors.',
            tag: 'Lifestyle',
            imageLabel: 'Market Tour Image',
            highlights: ['Street food sampling', 'Souvenir tips', 'Seasonal market vibes']
        }
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

    const urcWhoShould = [
        'Couples',
        'Honeymooners',
        'Luxury travelers',
        'Retirees',
        'Food enthusiasts',
        'Cultural travelers',
        'Multi-generational families on select sailings',
        'Experienced cruisers seeking boutique experiences'
    ]

    const urcComparisonData = [
        { feature: 'Ship Design', uniworld: 'Individually designed', typical: 'Mostly standardized' },
        { feature: 'Dining', uniworld: 'Gourmet regional cuisine', typical: 'High quality' },
        { feature: 'Butler Service', uniworld: 'Select suites', typical: 'Limited' },
        { feature: 'Excursions', uniworld: 'Included', typical: 'Mostly included' },
        { feature: 'Drinks', uniworld: 'Premium included', typical: 'Varies' },
        { feature: 'Passenger Capacity', uniworld: 'Small', typical: 'Small' },
        { feature: 'Luxury Level', uniworld: 'Boutique luxury', typical: 'Premium luxury' }
    ]

    const urcBookingTips = [
        'Reserve early for the best cabin selection',
        'Compare seasonal promotions',
        'Consider airfare packages',
        'Review included excursions',
        'Check passport validity',
        'Purchase travel insurance',
        'Book specialty suites well in advance',
        'Consider extending your trip before or after the cruise'
    ]

    const urcKeyTakeaways = [
        'Boutique luxury ships with unique interior designs',
        'All-inclusive experience with premium amenities',
        'Extensive European, Egyptian, Indian, and Peruvian itineraries',
        'Gourmet regional cuisine and immersive excursions',
        'Small ships deliver personalized service',
        'Multiple accommodation categories, including luxury suites',
        'Ideal for travelers seeking cultural experiences with luxury comfort'
    ]

    const urcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises",
                "name": "Uniworld River Cruises: Complete Guide to Luxury River Travel",
                "url": "https://www.tripsandships.com/uniworld-river-cruises",
                "description": "Discover everything about Uniworld River Cruises, including destinations, ships, suites, dining, pricing, itineraries, and booking tips.",
                "inLanguage": "en-US"
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
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises#article",
                "headline": "Uniworld River Cruises: The Complete Guide",
                "url": "https://www.tripsandships.com/uniworld-river-cruises",
                "description": "Expert guide to Uniworld River Cruises, featuring ships, destinations, luxury accommodations, dining, excursions, and all-inclusive experiences.",
                "image": "https://www.tripsandships.com/images/uniworld-river-cruises.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises" }
            },
            {
                "@type": "Service",
                "name": "Uniworld River Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning and personalized advice for Uniworld River Cruises."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "River Cruises", "item": "https://www.tripsandships.com/river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises" }
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
                <script type="application/ld+json">{JSON.stringify(urcSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="urc-hero-section">
                <UrcPlaceholder className="urc-hero-bg-placeholder" />
                <div className="urc-hero-overlay-layer"></div>
                <div className="urc-hero-content-wrapper">
                    <div className="urc-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury River Cruising · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="urc-hero-main-title">
                        Uniworld River Cruises: The Complete Guide
                    </h1>
                    <p className="urc-hero-subtitle-text">
                        Uniworld River Cruises is known for transforming river travel into a luxury boutique hotel experience on water. With individually designed ships, all-inclusive amenities, immersive cultural excursions, and award-winning service, Uniworld appeals to travelers seeking elegance, comfort, and authentic destination experiences.
                    </p>
                </div>
            </section>

            {/* ── WHAT MAKES UNIWORLD UNIQUE ── */}
            <section className="urc-why-section">
                <div className="urc-why-container">
                    <div className="urc-why-grid">

                        <div className="urc-why-text-col">
                            <span className="urc-eyebrow urc-eyebrow-center">THE UNIWORLD DIFFERENCE</span>
                            <h2 className="urc-section-heading">What Makes Uniworld River Cruises Unique?</h2>
                            <div className="urc-heading-separator-bar"></div>
                            <p className="urc-why-lead">Uniworld Boutique River Cruises combines luxury hospitality with destination-focused travel. Every ship is individually decorated using handcrafted furnishings, artwork, and locally inspired interiors, creating an experience unlike traditional cruise ships.</p>
                            <p className="urc-why-sub">Key highlights:</p>

                            <div className="urc-why-list">
                                {urcWhyChoose.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="urc-why-item">
                                        <div className="urc-why-icon"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="urc-why-image-col">
                            <div className="urc-image-frame">
                                <UrcPlaceholder label="Uniworld Boutique Ship Image" />
                                <div className="urc-frame-overlay"></div>
                                <div className="urc-image-badge">
                                    <Ship size={13} />
                                    <span>Boutique Luxury on Europe&apos;s Rivers</span>
                                </div>
                            </div>
                            <div className="urc-why-statement-box" style={{ marginTop: '24px' }}>
                                <div className="urc-why-statement-accent"></div>
                                <div className="urc-why-statement-text">
                                    <p className="urc-why-statement-primary" style={{ fontSize: '14.5px', color: '#4a5568', lineHeight: 1.6 }}>
                                        Unlike large ocean cruises, Uniworld&apos;s intimate ships provide a relaxed atmosphere while docking directly in the heart of historic cities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="urc-destinations-section">
                <div className="urc-destinations-container">
                    <div className="urc-destinations-header">
                        <span className="urc-eyebrow uni-eyebrow-light uni-eyebrow-center">WORLDWIDE ITINERARIES</span>
                        <h2 className="urc-section-heading uni-white-heading" style={{ fontSize: '34px' }}>Destinations Covered by <br /> Uniworld River Cruises</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="urc-destinations-intro">From the heart of Europe to the Nile, the Ganges, and the Amazon, Uniworld&apos;s boutique ships unlock the world&apos;s most iconic waterways.</p>
                    </div>

                    <div className="urc-tabs-wrapper">
                        <div className="urc-tabs-sidebar">
                            <div className="urc-tabs-header">
                                {urcDestinations.map((dest, idx) => (
                                    <button
                                        key={idx}
                                        className={`urc-tab-btn ${urcActiveDestTab === idx ? 'active' : ''}`}
                                        onClick={() => setUrcActiveDestTab(idx)}
                                    >
                                        {dest.region}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="urc-tabs-content">
                            {urcDestinations.map((dest, idx) => (
                                <div key={idx} className={`urc-tab-panel ${urcActiveDestTab === idx ? 'active' : ''}`}>
                                    <div className="urc-tab-dest-layout">
                                        <div className="urc-tab-dest-image">
                                            <UrcPlaceholder label={dest.imageLabel} />
                                            <div className="urc-dest-card-overlay"></div>
                                            <div className="urc-dest-card-tag">{dest.tag}</div>
                                        </div>
                                        <div className="urc-tab-dest-content">
                                            <h3 className="urc-tab-dest-title">{dest.region}</h3>
                                            <p className="urc-tab-dest-desc">{dest.description}</p>
                                            <div className="urc-tab-dest-details">
                                                <div className="urc-tab-detail-item">
                                                    <Anchor size={16} />
                                                    <span><strong>Rivers:</strong> {dest.rivers}</span>
                                                </div>
                                                <div className="urc-tab-detail-item">
                                                    <Globe size={16} />
                                                    <span><strong>Countries:</strong> {dest.countries}</span>
                                                </div>
                                            </div>
                                            <Link to="/river-cruises" className="urc-tab-dest-cta">
                                                Explore This Region <ChevronRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="urc-destinations-statement-box">
                        <Compass className="urc-destinations-statement-icon" size={24} />
                        <p className="urc-destinations-statement-text">
                            Whether you seek the <em>cultural riches of the Rhine</em> or the <em>natural wonders of the Amazon</em>, Uniworld offers meticulously planned itineraries that bring the best of each destination to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FLEET OVERVIEW ── */}
            <section className="urc-ships-section">
                <div className="urc-ships-container">
                    <div className="urc-ships-header">
                        <span className="urc-eyebrow uni-eyebrow-center">SHIP DESIGN</span>
                        <h2 className="urc-section-heading" style={{ textAlign: 'center' }}>Uniworld Fleet Overview</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-ships-intro">Every ship has its own personality rather than following a standardized design.</p>
                    </div>

                    <div className="urc-fleet-layout">
                        <div className="urc-fleet-image-col">
                            <div className="urc-image-frame">
                                <UrcPlaceholder label="Uniworld Fleet Image" />
                                <div className="urc-frame-overlay"></div>
                                <div className="urc-fleet-image-badge">
                                    <Ship size={16} />
                                    <span>Award-Winning Boutique Fleet</span>
                                </div>
                            </div>
                            <div className="urc-ships-pivot-box">
                                <p className="urc-ships-pivot-text">Each vessel typically accommodates between 120 and 160 guests.</p>
                                <p className="urc-ships-pivot-sub">Creating an intimate atmosphere on every sailing.</p>
                            </div>
                        </div>

                        <div className="urc-fleet-table-col">
                            <div className="urc-fleet-ships-row">
                                <div className="urc-fleet-col-head">Ship Name</div>
                                <div className="urc-fleet-col-head">Primary Region</div>
                            </div>
                            <div className="urc-fleet-ships-list">
                                {uniFleetData.map((ship, idx) => (
                                    <div key={idx} className="urc-fleet-ship-item">
                                        <span className="urc-fleet-ship-name"><Ship size={14} /> {ship.name}</span>
                                        <span className="urc-fleet-ship-region">{ship.region}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ACCOMMODATION OPTIONS ── */}
            <section className="urc-suites-section">
                <div className="urc-suites-container">
                    <div className="urc-suites-header">
                        <span className="urc-eyebrow uni-eyebrow-center">ACCOMMODATIONS</span>
                        <h2 className="urc-section-heading" style={{ textAlign: 'center' }}>Accommodation Options</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-suites-intro">Guests can choose from several accommodation categories, each offering comfort and elegance.</p>
                    </div>

                    <div className="urc-stateroom-row">
                        {uniStateroomTypes.map(({ Icon, label }, idx) => (
                            <div key={idx} className="urc-stateroom-pill">
                                <Icon size={16} />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="urc-suites-content">
                        <div className="urc-suites-image-col">
                            <div className="urc-image-frame">
                                <UrcPlaceholder label="Luxury Uniworld Suite Image" />
                                <div className="urc-frame-overlay"></div>
                            </div>
                        </div>
                        <div className="urc-suites-features-col">
                            <p className="urc-suites-features-label">Features often include:</p>
                            <div className="urc-suites-features-grid">
                                {uniSuiteFeatures.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="urc-feature-card">
                                        <div className="urc-feature-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="urc-suites-note">
                                <p>Higher-category suites may also include butler service and additional exclusive amenities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="urc-dining-section">
                <div className="urc-dining-container">
                    <div className="urc-dining-grid">
                        <div className="urc-dining-content">
                            <span className="urc-eyebrow urc-eyebrow-center">CULINARY EXCELLENCE</span>
                            <h2 className="urc-section-heading">Dining on Uniworld</h2>
                            <div className="urc-heading-separator-bar"></div>
                            <p className="urc-dining-note" style={{ textAlign: 'left' }}>Dining emphasizes regional cuisine prepared using fresh ingredients sourced throughout each itinerary.</p>

                            <div className="urc-dining-points">
                                {uniDining.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="urc-dining-point">
                                        <div className="urc-dining-point-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="urc-dining-footer">
                                <div className="urc-dining-footer-icon">
                                    <Info size={16} />
                                </div>
                                <p>Menus change throughout the voyage to reflect local destinations.</p>
                            </div>
                        </div>

                        <div className="urc-dining-image-col">
                            <div className="urc-image-frame">
                                <UrcPlaceholder label="Uniworld Dining Image" />
                                <div className="urc-frame-overlay"></div>
                                <div className="urc-dining-image-badge">
                                    <Utensils size={15} />
                                    <span>Gourmet Regional Cuisine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="urc-included-section">
                <div className="urc-included-container">
                    <div className="urc-included-header">
                        <span className="urc-eyebrow uni-eyebrow-center">ALL-INCLUSIVE VALUE</span>
                        <h2 className="urc-section-heading" style={{ textAlign: 'center' }}>What&apos;s Included?</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-included-intro">One reason travelers choose Uniworld is its comprehensive all-inclusive experience.</p>
                    </div>

                    <div className="urc-included-grid">
                        {uniIncluded.map(({ Icon, label }, idx) => (
                            <div key={idx} className="urc-included-card">
                                <div className="urc-included-icon-wrap">
                                    <Icon size={20} />
                                </div>
                                <span className="urc-included-label">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="urc-included-footer">
                        <Info size={16} className="urc-included-footer-icon" />
                        <p>Some specialty excursions or extensions may involve additional costs.</p>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="urc-experience-section">
                <div className="urc-excursions-container">
                    <div className="urc-excursions-header">
                        <span className="urc-eyebrow uni-eyebrow-center">GUIDED EXPERIENCES</span>
                        <h2 className="urc-section-heading" style={{ textAlign: 'center', fontSize: '34px' }}>Shore Excursions</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-excursions-lead" style={{ textAlign: 'center' }}>Uniworld focuses on immersive local experiences led by knowledgeable guides.</p>
                    </div>

                    <div className="urc-tabs-wrapper">
                        <div className="urc-tabs-sidebar">
                            <div className="urc-tabs-header">
                                {uniExcursions.map((excursion, idx) => {
                                    const Icon = excursion.Icon;
                                    return (
                                        <button
                                            key={idx}
                                            className={`urc-tab-btn ${urcActiveExcursionTab === idx ? 'active' : ''}`}
                                            onClick={() => setUrcActiveExcursionTab(idx)}
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                        >
                                            <Icon size={16} />
                                            {excursion.text}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="urc-tabs-content">
                            {uniExcursions.map((excursion, idx) => (
                                <div key={idx} className={`urc-tab-panel ${urcActiveExcursionTab === idx ? 'active' : ''}`}>
                                    <div className="urc-tab-dest-layout">
                                        <div className="urc-tab-dest-image">
                                            <UrcPlaceholder label={excursion.imageLabel} />
                                            <div className="urc-dest-card-overlay"></div>
                                            <div className="urc-dest-card-tag">{excursion.tag}</div>
                                        </div>
                                        <div className="urc-tab-dest-content">
                                            <h3 className="urc-tab-dest-title">{excursion.text}</h3>
                                            <p className="urc-tab-dest-desc">{excursion.description}</p>
                                            <div className="urc-tab-dest-details">
                                                {excursion.highlights.map((highlight, hIdx) => (
                                                    <div key={hIdx} className="urc-tab-detail-item">
                                                        <CheckCircle size={16} style={{ color: '#4a9eff' }} />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="urc-destinations-statement-box">
                        <Compass className="urc-destinations-statement-icon" size={24} />
                        <p className="urc-destinations-statement-text">
                            Many sailings also include <em>exclusive evening events</em> at historic venues, offering a rare look into local culture and heritage.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WELLNESS AND ONBOARD ACTIVITIES ── */}
            <section className="urc-service-section">
                <div className="urc-service-container">
                    <div className="urc-service-grid">

                        <div className="urc-service-image-col">
                            <div className="urc-image-frame">
                                <UrcPlaceholder label="Onboard Wellness and Activities Image" />
                                <div className="urc-frame-overlay"></div>
                            </div>
                            <div className="urc-service-conclusion-box" style={{ marginTop: '20px' }}>
                                <p>Wellness activities and enrichment programs complement the immersive destination experiences on every voyage.</p>
                            </div>
                        </div>

                        <div className="urc-service-text-col">
                            <span className="urc-eyebrow urc-eyebrow-center">ONBOARD ENRICHMENT</span>
                            <h2 className="urc-section-heading">Wellness and Onboard Activities</h2>
                            <div className="urc-heading-separator-bar"></div>
                            <p className="urc-service-lead">Although river cruises emphasize destinations, Uniworld also provides onboard enrichment.</p>
                            <p className="urc-service-sub">Guests can enjoy:</p>

                            <div className="urc-service-pillars">
                                {uniWellness.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="urc-service-pillar">
                                        <div className="urc-service-pillar-icon"><Icon size={20} /></div>
                                        <span className="urc-service-pillar-label">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BEST TIME ── */}
            <section className="urc-besttime-section">
                <div className="urc-besttime-container">
                    <div className="urc-besttime-header">
                        <span className="urc-eyebrow uni-eyebrow-center">SEASONAL GUIDE</span>
                        <h2 className="urc-section-heading">Best Time to Take a Uniworld River Cruise</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="urc-besttime-grid">
                        {uniBestTime.map((item, idx) => (
                            <div key={idx} className="urc-besttime-card">
                                <div className="urc-besttime-card-accent"></div>
                                <h4 className="urc-besttime-card-season">{item.season}</h4>
                                <p className="urc-besttime-card-text">{item.highlights}</p>
                            </div>
                        ))}
                    </div>

                    <div className="urc-besttime-footer">
                        <div className="urc-besttime-footer-icon">
                            <Compass size={18} />
                        </div>
                        <p>Travel goals often determine the ideal season for your Uniworld river cruise.</p>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="urc-pricing-section">
                <div className="urc-pricing-container">
                    <div className="urc-pricing-header">
                        <span className="urc-eyebrow uni-eyebrow-center">VALUE &amp; INVESTMENT</span>
                        <h2 className="urc-section-heading">Understanding Uniworld Pricing</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-pricing-intro">Pricing depends on destination, cruise length, cabin category, travel season, promotions, and included land programs.</p>
                    </div>

                    <div className="urc-pricing-card">
                        <div className="urc-pricing-card-icon">
                            <DollarSign size={26} />
                        </div>
                        <div className="urc-pricing-divider"></div>
                        <p className="urc-pricing-card-text">
                            Luxury inclusions often reduce additional onboard expenses compared with lower-priced alternatives.
                        </p>
                        <p className="urc-pricing-card-sub">
                            Making Uniworld a compelling value for discerning travelers who appreciate all-inclusive elegance.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="urc-who-section">
                <div className="urc-who-container">
                    <div className="urc-who-header">
                        <span className="urc-eyebrow uni-eyebrow-center">IDEAL TRAVELERS</span>
                        <h2 className="urc-section-heading">Who Should Choose Uniworld?</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-who-intro">Uniworld appeals to travelers looking for refined, culturally immersive experiences.</p>
                        <p className="urc-who-sub">Ideal for:</p>
                    </div>

                    <div className="urc-who-grid">
                        {urcWhoShould.map((item, idx) => (
                            <div key={idx} className="urc-who-card">
                                <div className="urc-who-num">{String(idx + 1).padStart(2, '0')}</div>
                                <span className="urc-who-label">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="urc-who-footer">
                        <div className="urc-who-footer-icon">
                            <Info size={16} />
                        </div>
                        <p>Travelers looking for nightlife or large-scale entertainment may prefer ocean cruises instead.</p>
                    </div>
                </div>
            </section>

            {/* ── UNIWORLD VS OTHERS ── */}
            <section className="urc-compare-section">
                <div className="urc-compare-container">
                    <div className="urc-compare-header">
                        <span className="urc-eyebrow uni-eyebrow-center">COMPETITIVE STANDING</span>
                        <h2 className="urc-section-heading uni-white-heading">Uniworld Compared with Other Luxury River Cruise Lines</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>

                    <div className="urc-compare-table">
                        <div className="urc-compare-row uni-compare-head">
                            <span className="urc-compare-col-feature">Feature</span>
                            <span className="urc-compare-col-uni">Uniworld</span>
                            <span className="urc-compare-col-typical">Typical Premium River Cruise</span>
                        </div>
                        {urcComparisonData.map((row, idx) => (
                            <div key={idx} className="urc-compare-row">
                                <span className="urc-compare-col-feature">{row.feature}</span>
                                <span className="urc-compare-col-uni">{row.uniworld}</span>
                                <span className="urc-compare-col-typical">{row.typical}</span>
                            </div>
                        ))}
                    </div>

                    <div className="urc-compare-footer">
                        <div className="urc-compare-footer-icon">
                            <Award size={16} />
                        </div>
                        <p>Uniworld distinguishes itself through personalized service and highly distinctive ship interiors.</p>
                    </div>
                </div>
            </section>

            {/* ── BOOKING TIPS ── */}
            <section className="urc-booking-section">
                <div className="urc-booking-container">
                    <div className="urc-booking-header">
                        <span className="urc-eyebrow uni-eyebrow-center">EXPERT PLANNING</span>
                        <h2 className="urc-section-heading uni-white-heading">Booking Tips</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="urc-booking-intro">Our expert recommendations for planning your Uniworld river cruise:</p>
                    </div>

                    <div className="urc-booking-grid">
                        {urcBookingTips.map((item, idx) => (
                            <div key={idx} className="urc-booking-card">
                                <div className="urc-booking-num">{String(idx + 1).padStart(2, '0')}</div>
                                <span className="urc-booking-label">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="urc-booking-footer">
                        <div className="urc-booking-footer-icon">
                            <CheckCircle size={16} />
                        </div>
                        <p>We make booking your Uniworld river cruise simple, seamless, and stress-free.</p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="urc-takeaway-section">
                <div className="urc-takeaway-container">
                    <div className="urc-takeaway-header">
                        <span className="urc-eyebrow uni-eyebrow-center">SUMMARY</span>
                        <h2 className="urc-section-heading">Key Takeaways</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="urc-takeaway-grid">
                        {urcKeyTakeaways.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="urc-takeaway-card">
                                <div className="urc-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                <span className="urc-takeaway-label">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="urc-takeaway-grid uni-takeaway-grid-center">
                        {urcKeyTakeaways.slice(4).map((item, idx) => (
                            <div key={idx} className="urc-takeaway-card">
                                <div className="urc-takeaway-num">{String(idx + 5).padStart(2, '0')}</div>
                                <span className="urc-takeaway-label">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONCLUSION ── */}
            <section className="urc-review-section">
                <div className="urc-review-container">
                    <div className="urc-review-header">
                        <span className="urc-eyebrow uni-eyebrow-center">FINAL THOUGHTS</span>
                        <h2 className="urc-section-heading">Conclusion</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                        <p className="urc-review-intro">
                            Uniworld River Cruises offers an elevated river cruising experience through boutique ships, destination-inspired design, personalized service, and comprehensive all-inclusive amenities. Whether exploring the castles of the Rhine, the vineyards of the Douro, or the ancient temples of Egypt, travelers enjoy immersive journeys paired with exceptional hospitality. By understanding the destinations, ships, pricing, and onboard experience, you can confidently determine whether Uniworld is the right choice for your next luxury river cruise.
                        </p>
                    </div>

                    <div className="urc-review-cta">
                        <div className="urc-review-cta-icon">
                            <Info size={20} />
                        </div>
                        <p>
                            Contact Trips &amp; Ships Luxury Travel for personalized guidance and exclusive Uniworld offers tailored to your travel preferences.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="urc-expert-section">
                <div className="urc-expert-container">

                    <div className="urc-expert-portrait-panel">
                        <div className="urc-expert-img-container">
                            <img src={Profile_AH} alt="Angela Hughes - Expedition Travel Designer" />
                        </div>
                        <div className="urc-expert-stats-strip">
                            <div className="urc-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Designing Travel</p>
                            </div>
                            <div className="urc-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Traveled</p>
                            </div>
                        </div>
                    </div>

                    <div className="urc-expert-content-panel">
                        <span className="urc-eyebrow urc-expert-eyebrow">MEET THE CEO</span>
                        <h2 className="urc-section-heading">Insight from Angela Hughes</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>

                        <p className="urc-expert-quote">
                            &ldquo;Expedition cruising is not just a vacation&mdash;it is a transformation. True luxury is having the access to step ashore on polar ice and untouched islands while returning to an all-suite sanctuary at the end of the day.&rdquo;
                        </p>

                        <div className="urc-expert-priorities">
                            <h5>Travel Prioritization Matrix:</h5>
                            <div className="urc-expert-pills">
                                {['Custom Zodiac Outings', 'Expert Naturalist Guides', 'Intimate Small-Ship Luxury', 'Remote Landing Access', 'Butler Services', 'Scientific Lectures'].map(pill => (
                                    <span key={pill} className="urc-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="urc-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the adventure cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="urc-faq-section">
                <div className="urc-faq-container">
                    <div className="urc-faq-header">
                        <span className="urc-eyebrow uni-eyebrow-center">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="urc-section-heading">Frequently Asked Questions</h2>
                        <div className="urc-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="urc-faq-list-wrapper">
                        {urcFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="urc-faq-item"
                                onClick={() => urcToggleFaq(index)}
                            >
                                <div className="urc-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="urc-faq-toggle-icon">{urcActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {urcActiveFaq === index && (
                                    <p className="urc-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="urc-cta-section">
                <div className="urc-cta-aurora-glow"></div>
                <div className="urc-cta-crystal uni-cta-crystal-1"></div>
                <div className="urc-cta-crystal uni-cta-crystal-2"></div>
                <div className="urc-cta-crystal uni-cta-crystal-3"></div>
                <div className="urc-cta-grid-lines"></div>

                <div className="urc-cta-content">
                    <div className="urc-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="urc-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="urc-cta-title">Ready to Experience <br /> Luxury River Cruising?</h2>
                    <div className="urc-cta-bar"></div>
                    <p className="urc-cta-subtitle">
                        Explore available Uniworld itineraries, compare destinations, and start planning your unforgettable boutique river cruise vacation today.
                    </p>
                    <div className="urc-cta-actions">
                        <Link to="/contact" className="urc-cta-primary-btn">
                            <Phone size={18} />
                            <span>Speak with a luxury river cruise specialist</span>
                            <ArrowRight size={16} className="urc-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default UniworldRiverCruises
