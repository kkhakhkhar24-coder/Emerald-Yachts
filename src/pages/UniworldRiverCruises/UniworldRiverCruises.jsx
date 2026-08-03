import Navbar from '../../components/Navbar/Navbar'
import './UniworldRiverCruises.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, ThumbsUp, AlertTriangle,
    Image as ImageIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

/* Placeholder block for images — swap for real assets when available */
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
        { question: 'What is Uniworld River Cruises?', answer: 'Uniworld Boutique River Cruises is a luxury river cruise line offering all-inclusive voyages across Europe, Asia, Egypt, India, and South America.' },
        { question: 'Is Uniworld all-inclusive?', answer: 'Yes. Most fares include accommodations, gourmet dining, premium beverages, shore excursions, gratuities, Wi-Fi, and more.' },
        { question: 'Where does Uniworld cruise?', answer: 'Uniworld sails on the Danube, Rhine, Seine, Douro, Rhône, Nile, Mekong, Ganges, Peruvian Amazon, and other famous rivers.' },
        { question: 'Are gratuities included?', answer: 'Yes. Gratuities are generally included on Uniworld cruises.' },
        { question: 'Does Uniworld offer butler service?', answer: 'Yes. Butler service is available in select suite categories.' },
        { question: 'What is the dress code?', answer: 'The atmosphere is elegant yet relaxed, with smart casual attire appropriate for most evenings.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Daily guided excursions are typically included in the cruise fare.' },
        { question: 'Does Uniworld include alcoholic beverages?', answer: 'Yes. Premium wines, beer, spirits, and many other beverages are generally included.' },
        { question: 'Is Uniworld suitable for first-time river cruisers?', answer: 'Absolutely. Its all-inclusive experience and personalized service make it an excellent choice for first-time luxury river cruisers.' },
        { question: 'How many guests are on a Uniworld ship?', answer: 'Guest capacity varies by ship, but most accommodate approximately 120–160 passengers, creating an intimate atmosphere.' },
        { question: 'Is Uniworld worth the price?', answer: 'Many travelers consider Uniworld worth the investment thanks to its luxury accommodations, inclusive pricing, exceptional dining, and outstanding service.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Our experts provide personalized recommendations, exclusive offers, concierge-level planning, and ongoing support to ensure your Uniworld vacation exceeds expectations.' }
    ]

    const uniDestinations = [
        'Danube River', 'Rhine River', 'Main River', 'Moselle River', 'Seine River',
        'Douro River', 'Rhône River', 'Po River', 'Nile River', 'Mekong River',
        'Ganges River', 'Peruvian Amazon'
    ]

    const uniWhyChoose = [
        { Icon: Ship, text: 'Boutique-style river ships' },
        { Icon: Gem, text: 'All-inclusive luxury' },
        { Icon: Bed, text: 'Elegant accommodations' },
        { Icon: Utensils, text: 'Award-winning dining' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: MapPin, text: 'Curated shore excursions' },
        { Icon: UserCheck, text: 'Personalized service' },
        { Icon: Users, text: 'Small guest capacity' },
        { Icon: Compass, text: 'Unique itineraries' },
        { Icon: Sparkles, text: 'Exceptional onboard atmosphere' }
    ]

    const uniShipHighlights = [
        'Individually designed interiors',
        'Handcrafted furnishings',
        'Original artwork',
        'Elegant public spaces',
        'Luxurious lounges',
        'Boutique hotel ambiance',
        'Spacious sun decks',
        'Panoramic observation lounges'
    ]

    const uniStateroomTypes = [
        { Icon: Bed, label: 'Classic Staterooms' },
        { Icon: Star, label: 'Deluxe Staterooms' },
        { Icon: Sun, label: 'French Balcony Staterooms' },
        { Icon: Gem, label: 'Suites' },
        { Icon: Crown, label: 'Grand Suites' },
        { Icon: Award, label: 'Royal Suites (select ships)' }
    ]

    const uniSuiteFeatures = [
        { Icon: Bed, text: 'Handmade beds' },
        { Icon: Bath, text: 'Marble bathrooms' },
        { Icon: Sparkles, text: 'Luxury linens' },
        { Icon: Gem, text: 'Premium bath amenities' },
        { Icon: Tv, text: 'Flat-screen televisions' },
        { Icon: Wifi, text: 'Complimentary Wi-Fi' },
        { Icon: Sun, text: 'Climate control' },
        { Icon: Eye, text: 'River views' }
    ]

    const uniDining = [
        { Icon: Globe, text: 'Destination-inspired cuisine' },
        { Icon: Leaf2, text: 'Farm-to-table ingredients' },
        { Icon: Utensils, text: 'Multi-course gourmet dinners' },
        { Icon: MapPin, text: 'Regional specialties' },
        { Icon: Sun, text: 'Fresh seasonal menus' },
        { Icon: Wine, text: 'Premium wines' },
        { Icon: Moon, text: 'Specialty coffees' },
        { Icon: Gift, text: 'Elegant desserts' },
        { Icon: Clock, text: 'Flexible dining' }
    ]

    function Leaf2(props) {
        return <Landmark {...props} />
    }

    const uniIncluded = [
        'Luxury accommodations',
        'Gourmet meals',
        'Unlimited premium beverages',
        'Wine, beer, and spirits',
        'Daily shore excursions',
        'Gratuities',
        'Wi-Fi',
        'Onboard entertainment',
        'Fitness classes',
        'Airport transfers on eligible bookings'
    ]

    const uniExcursions = [
        { Icon: Users, text: 'Walking tours' },
        { Icon: Landmark, text: 'Castle visits' },
        { Icon: Wine, text: 'Wine tastings' },
        { Icon: Palette, text: 'Museum tours' },
        { Icon: Utensils, text: 'Culinary experiences' },
        { Icon: Bike, text: 'Bicycle tours' },
        { Icon: MapPin, text: 'Scenic countryside drives' },
        { Icon: Music, text: 'Cultural performances' },
        { Icon: Camera, text: 'Local market visits' }
    ]

    const uniService = [
        { Icon: Heart, text: 'Personalized attention' },
        { Icon: Smile, text: 'Friendly crew' },
        { Icon: ShieldCheck, text: 'Professional service' },
        { Icon: Users, text: 'High crew-to-guest ratio' },
        { Icon: Crown, text: 'Butler service in select suites' },
        { Icon: MessageSquare, text: 'Concierge assistance' },
        { Icon: Eye, text: 'Attention to detail' },
        { Icon: Sparkles, text: 'Warm onboard atmosphere' }
    ]

    const uniWhoShould = [
        'Couples', 'Honeymooners', 'Luxury travelers', 'Food and wine enthusiasts',
        'History lovers', 'Cultural explorers', 'Multi-generational families',
        'Special celebrations', 'First-time river cruisers'
    ]

    const uniStrengths = [
        'Boutique ship design',
        'Truly all-inclusive fares',
        'Exceptional service',
        'Award-winning cuisine',
        'Elegant accommodations',
        'Destination-focused experiences',
        'High staff-to-guest ratio',
        'Individually decorated ships'
    ]

    const uniWorthReasons = [
        'Luxury accommodations',
        'Exceptional dining',
        'Inclusive pricing',
        'Personalized service',
        'Boutique atmosphere',
        'Premium excursions',
        'Unique itineraries',
        'Outstanding guest satisfaction'
    ]

    const uniLoveList = [
        'Beautiful boutique ships',
        'Truly all-inclusive luxury',
        'Outstanding dining',
        'Exceptional service',
        'Elegant accommodations',
        'Cultural immersion',
        'Excellent shore excursions',
        'High attention to detail'
    ]

    const uniConsiderList = [
        'Premium pricing compared to standard river cruises.',
        'Some itineraries sell out well in advance.',
        'Smaller ships offer fewer onboard entertainment venues than ocean cruises.',
        'River water levels may occasionally affect itineraries.'
    ]

    const uniBookingHelp = [
        'Compare Uniworld itineraries',
        'Choose the right ship and suite',
        'Find the best travel dates',
        'Explain inclusions and promotions',
        'Arrange flights and pre- or post-cruise stays',
        'Secure exclusive offers',
        'Provide personalized concierge service',
        'Plan every detail of your vacation'
    ]

    const uniSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises",
                "name": "Uniworld River Cruises: The Complete Guide",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises",
                "description": "Complete guide to Uniworld River Cruises, including destinations, ships, dining, suites, excursions, all-inclusive amenities, and expert advice.",
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
                    { "@type": "Question", "name": "Is Uniworld all-inclusive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most Uniworld fares include accommodations, gourmet dining, premium beverages, shore excursions, gratuities, and Wi-Fi." } },
                    { "@type": "Question", "name": "Where does Uniworld cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Uniworld sails throughout Europe, Egypt, India, Asia, and South America on many of the world's most iconic rivers." } },
                    { "@type": "Question", "name": "Is Uniworld worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Many travelers consider Uniworld worth the premium because of its boutique ships, all-inclusive luxury, exceptional dining, and personalized service." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld River Cruises | The Complete Guide to Luxury River Cruising</title>
                <meta name="title" content="Uniworld River Cruises: The Complete Guide | Ships, Destinations & Reviews" />
                <meta name="description" content="Discover everything you need to know about Uniworld River Cruises. Explore destinations, ships, suites, dining, excursions, fares, and why Uniworld is one of the world's leading luxury river cruise lines." />
                <meta name="keywords" content="Uniworld River Cruises, Uniworld Boutique River Cruises, luxury river cruises, Uniworld cruise guide, Uniworld Europe cruises, Uniworld river ships, all-inclusive river cruises, best luxury river cruises, Uniworld review, river cruise vacations" />
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
                        Everything you need to know about Uniworld River Cruises — destinations, ships, suites, dining, excursions, and why it remains one of the world's leading luxury river cruise lines.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uni-intro-section">
                <div className="uni-intro-container">
                    <span className="uni-eyebrow" style={{ textAlign: 'center', display: 'block' }}>ABOUT UNIWORLD</span>
                    <h2 className="uni-section-heading uni-heading-center">Everything You Need to Know About Uniworld River Cruises</h2>
                    <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    <p className="uni-intro-body">
                        Uniworld Boutique River Cruises is widely recognized as one of the world's most luxurious river cruise lines, offering elegant boutique-style ships, exceptional service, immersive cultural experiences, and truly all-inclusive vacations. Every voyage is carefully designed to provide travelers with an intimate way to explore historic cities, charming villages, and iconic rivers while enjoying five-star comfort.
                    </p>
                    <p className="uni-intro-body">
                        Unlike larger ocean cruises, Uniworld's boutique river ships sail directly into the heart of each destination, allowing guests to experience Europe, Asia, Egypt, India, Peru, and beyond without the crowds. From beautifully designed suites and award-winning dining to curated excursions and personalized hospitality, every aspect of a Uniworld journey is crafted to exceed expectations.
                    </p>
                    <p className="uni-intro-body">
                        Whether you're planning your first river cruise or comparing luxury cruise lines, this complete guide explains why Uniworld continues to be one of the most respected names in luxury river cruising.
                    </p>
                </div>
            </section>

            {/* ── WHY CHOOSE UNIWORLD ── */}
            <section className="uni-why-section">
                <div className="uni-why-container">
                    <div className="uni-why-grid">

                        <div className="uni-why-text-col">
                            <span className="uni-eyebrow">THE UNIWORLD DIFFERENCE</span>
                            <h2 className="uni-section-heading">Why Choose Uniworld River Cruises?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-why-lead">Uniworld combines luxury, culture, and personalized service into one seamless travel experience.</p>
                            <p className="uni-why-sub">Guests enjoy:</p>

                            <div className="uni-why-list">
                                {uniWhyChoose.map(({ Icon, text }, idx) => {
                                    void Icon;
                                    return (
                                        <div key={idx} className="uni-why-item">
                                            <div className="uni-why-icon"><Icon size={17} /></div>
                                            <span>{text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="uni-why-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Uniworld Boutique Ship Image" />
                                <div className="uni-frame-overlay"></div>
                                <div className="uni-image-badge">
                                    <Ship size={13} />
                                    <span>Boutique Luxury on Europe's Rivers</span>
                                </div>
                            </div>
                            <div className="uni-why-statement-box">
                                <div className="uni-why-statement-accent"></div>
                                <div className="uni-why-statement-text">
                                    <p className="uni-why-statement-bold">A floating luxury boutique hotel.</p>
                                    <p className="uni-why-statement-primary">Each voyage is designed to feel exactly like one.</p>
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
                        <h2 className="uni-section-heading uni-white-heading">Destinations Visited by Uniworld</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="uni-destinations-intro">Uniworld offers itineraries across many of the world's most celebrated rivers.</p>
                    </div>

                    <div className="uni-destinations-grid">
                        {uniDestinations.map((river, idx) => (
                            <div key={idx} className="uni-destination-card">
                                <div className="uni-destination-icon"><MapPin size={18} /></div>
                                <span>{river}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-destinations-footer">
                        <p>These itineraries visit world-famous cities, UNESCO World Heritage Sites, vineyards, castles, and picturesque villages.</p>
                    </div>
                </div>
            </section>

            {/* ── BOUTIQUE SHIPS ── */}
            <section className="uni-ships-section">
                <div className="uni-ships-container">
                    <div className="uni-ships-grid">

                        <div className="uni-ships-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Uniworld Ship Interior Image" />
                                <div className="uni-frame-overlay uni-overlay-soft"></div>
                            </div>
                            <div className="uni-ships-pivot-box">
                                <p className="uni-ships-pivot-text">Every Uniworld ship has its own distinctive décor and personality.</p>
                                <p className="uni-ships-pivot-sub">Each ship reflects the culture and history of the destinations it visits.</p>
                            </div>
                        </div>

                        <div className="uni-ships-text-col">
                            <span className="uni-eyebrow">SHIP DESIGN</span>
                            <h2 className="uni-section-heading">Boutique Ships with Individual Character</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-ships-lead">Unlike many cruise lines that use similar ship designs, Uniworld's fleet stands apart.</p>
                            <p className="uni-ships-sub">Highlights include:</p>

                            <div className="uni-ships-highlights">
                                {uniShipHighlights.map((item, idx) => (
                                    <div key={idx} className="uni-highlight-item">
                                        <ChevronRight size={15} className="uni-highlight-chevron" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITES AND STATEROOMS ── */}
            <section className="uni-suites-section">
                <div className="uni-suites-container">
                    <div className="uni-suites-header">
                        <span className="uni-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Suites and Staterooms</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-suites-intro">Uniworld accommodations are among the finest available on European rivers.</p>
                        <p className="uni-suites-sub">Guests can choose from:</p>
                    </div>

                    <div className="uni-stateroom-row">
                        {uniStateroomTypes.map(({ Icon, label }, idx) => {
                            void Icon;
                            return (
                                <div key={idx} className="uni-stateroom-pill">
                                    <Icon size={16} />
                                    <span>{label}</span>
                                </div>
                            );
                        })}
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
                                {uniSuiteFeatures.map(({ Icon, text }, idx) => {
                                    void Icon;
                                    return (
                                        <div key={idx} className="uni-feature-card">
                                            <div className="uni-feature-icon"><Icon size={20} /></div>
                                            <span>{text}</span>
                                        </div>
                                    );
                                })}
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
                    <h2 className="uni-dining-heading">Dining and Culinary Experiences</h2>
                    <div className="uni-dining-separator"></div>
                    <p className="uni-dining-note">Dining is one of the highlights of every Uniworld voyage.</p>

                    <div className="uni-dining-points">
                        {uniDining.map(({ Icon, text }, idx) => {
                            void Icon;
                            return (
                                <div key={idx} className="uni-dining-point">
                                    <div className="uni-dining-point-icon"><Icon size={18} /></div>
                                    <span>{text}</span>
                                </div>
                            );
                        })}
                    </div>

                    <p className="uni-dining-footer">Menus frequently change throughout the itinerary to reflect local flavors and regional traditions.</p>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="uni-included-section">
                <div className="uni-included-container">
                    <div className="uni-included-header">
                        <span className="uni-eyebrow">ALL-INCLUSIVE VALUE</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>What's Included?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-included-intro">Uniworld is known for offering one of the most comprehensive all-inclusive experiences in river cruising.</p>
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
                        <p>This all-inclusive approach allows guests to relax without worrying about additional onboard expenses.</p>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="uni-excursions-section">
                <div className="uni-excursions-container">
                    <div className="uni-excursions-grid">

                        <div className="uni-excursions-text-col">
                            <span className="uni-eyebrow">GUIDED EXPERIENCES</span>
                            <h2 className="uni-section-heading">Shore Excursions and Experiences</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-excursions-lead">Every itinerary includes thoughtfully planned excursions led by knowledgeable local guides.</p>
                            <p className="uni-excursions-sub">Popular experiences include:</p>

                            <div className="uni-excursions-list">
                                {uniExcursions.map(({ Icon, text }, idx) => {
                                    void Icon;
                                    return (
                                        <div key={idx} className="uni-excursion-item">
                                            <div className="uni-excursion-icon"><Icon size={17} /></div>
                                            <span>{text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="uni-excursions-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Guided Shore Excursion Image" />
                                <div className="uni-frame-overlay"></div>
                            </div>
                            <div className="uni-excursions-conclusion-box">
                                <p>Many itineraries also offer wellness walks, active excursions, and exclusive experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE AND HOSPITALITY ── */}
            <section className="uni-service-section">
                <div className="uni-service-container">
                    <div className="uni-service-grid">

                        <div className="uni-service-image-col">
                            <div className="uni-image-frame">
                                <UniPlaceholder label="Uniworld Crew Hospitality Image" />
                                <div className="uni-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="uni-service-text-col">
                            <span className="uni-eyebrow">HOSPITALITY</span>
                            <h2 className="uni-section-heading">Service and Hospitality</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-service-lead">Exceptional hospitality has become one of Uniworld's defining characteristics.</p>
                            <p className="uni-service-sub">Guests appreciate:</p>

                            <div className="uni-service-pillars">
                                {uniService.map(({ Icon, text }, idx) => {
                                    void Icon;
                                    return (
                                        <div key={idx} className="uni-service-pillar">
                                            <div className="uni-service-pillar-icon"><Icon size={20} /></div>
                                            <span className="uni-service-pillar-label">{text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="uni-service-conclusion-box">
                                <p>The intimate size of each ship allows crew members to quickly learn guest preferences and deliver highly personalized service.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE UNIWORLD ── */}
            <section className="uni-who-section">
                <div className="uni-who-container">
                    <div className="uni-who-header">
                        <span className="uni-eyebrow">IDEAL TRAVELERS</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Who Should Choose Uniworld?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-who-intro">Uniworld appeals to travelers looking for a refined and immersive travel experience.</p>
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
                        <p>Its combination of luxury and cultural enrichment makes it one of the most appealing choices for discerning travelers.</p>
                    </div>
                </div>
            </section>

            {/* ── UNIWORLD VS OTHERS ── */}
            <section className="uni-compare-section">
                <div className="uni-compare-container">
                    <div className="uni-compare-header">
                        <span className="uni-eyebrow">COMPETITIVE STANDING</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Uniworld vs Other Luxury River Cruise Lines</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-compare-intro">Uniworld consistently ranks among the top luxury river cruise brands.</p>
                        <p className="uni-compare-sub">Its strengths include:</p>
                    </div>

                    <div className="uni-compare-grid">
                        {uniStrengths.map((item, idx) => (
                            <div key={idx} className="uni-compare-card">
                                <div className="uni-compare-num">0{idx + 1}</div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-compare-footer">
                        <p>Travelers seeking an upscale and immersive river cruise often place Uniworld alongside the industry's leading luxury brands.</p>
                    </div>
                </div>
            </section>

            {/* ── IS IT WORTH IT ── */}
            <section className="uni-worth-section">
                <div className="uni-worth-container">
                    <div className="uni-worth-grid">

                        <div className="uni-worth-text-col">
                            <span className="uni-eyebrow">VALUE ASSESSMENT</span>
                            <h2 className="uni-section-heading">Is Uniworld Worth It?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-worth-lead">Although Uniworld cruises generally cost more than mainstream river cruise lines, many travelers believe the value justifies the investment.</p>
                            <p className="uni-worth-sub">Reasons include:</p>
                        </div>

                        <div className="uni-worth-list-col">
                            <div className="uni-worth-list">
                                {uniWorthReasons.map((item, idx) => (
                                    <div key={idx} className="uni-worth-item">
                                        <CheckCircle size={16} className="uni-worth-check" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="uni-worth-conclusion-box">
                                <p>For travelers who value comfort, culture, and convenience, Uniworld offers one of the finest river cruise experiences available.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── EXPERT REVIEW ── */}
            <section className="uni-review-section">
                <div className="uni-review-container">
                    <div className="uni-review-header">
                        <span className="uni-eyebrow">OUR VERDICT</span>
                        <h2 className="uni-section-heading" style={{ textAlign: 'center' }}>Our Expert Review</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-review-intro">After evaluating Uniworld's ships, itineraries, service, and guest experience, our overall impression is extremely positive.</p>
                    </div>

                    <div className="uni-review-grid">
                        <div className="uni-review-card uni-review-love">
                            <div className="uni-review-card-header">
                                <ThumbsUp size={20} />
                                <h3>What We Love</h3>
                            </div>
                            <ul className="uni-review-list">
                                {uniLoveList.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={15} className="uni-review-icon-love" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        <div className="uni-review-card uni-review-consider">
                            <div className="uni-review-card-header">
                                <AlertTriangle size={20} />
                                <h3>Areas to Consider</h3>
                            </div>
                            <ul className="uni-review-list">
                                {uniConsiderList.map((item, idx) => (
                                    <li key={idx}><ChevronRight size={15} className="uni-review-icon-consider" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="uni-review-footer">
                        <p>Overall, Uniworld River Cruises delivers one of the most luxurious and immersive river cruise experiences available anywhere in the world.</p>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK WITH US ── */}
            <section className="uni-booking-section">
                <div className="uni-booking-container">
                    <div className="uni-booking-header">
                        <span className="uni-eyebrow uni-eyebrow-light">EXPERT PLANNING</span>
                        <h2 className="uni-section-heading uni-white-heading" style={{ textAlign: 'center' }}>Why Book with Trips &amp; Ships Luxury Travel?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="uni-booking-intro">Our Uniworld specialists help you:</p>
                    </div>

                    <div className="uni-booking-grid">
                        {uniBookingHelp.map((item, idx) => (
                            <div key={idx} className="uni-booking-card">
                                <div className="uni-booking-num">0{idx + 1}</div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="uni-booking-footer">
                        <p>We make booking your Uniworld river cruise simple, seamless, and stress-free.</p>
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
                                    <span className="uni-faq-toggle-icon">{uniActiveFaq === index ? '−' : '+'}</span>
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

                        <h2 className="uni-cta-heading-white">Ready to Sail with Uniworld?</h2>
                        <div className="uni-cta-separator-white"></div>

                        <p className="uni-cta-paragraph-white">
                            A Uniworld river cruise offers boutique luxury, all-inclusive comfort, and unforgettable destinations across Europe, Asia, Egypt, India, and Peru.
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
                                    'Personalized concierge-level planning'
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