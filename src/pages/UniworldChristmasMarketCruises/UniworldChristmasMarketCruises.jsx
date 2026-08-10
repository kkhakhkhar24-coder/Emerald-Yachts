import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'
import './UniworldChristmasMarketCruises.css'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Globe, BookOpen, Smile, Leaf, Eye, Shield,
    Ticket, Music, ShoppingBag, Snowflake, Thermometer,
    Map, Coffee, Gift, Cloud, AlertCircle, Briefcase
} from 'lucide-react'

export default function UniworldChristmasMarketCruises() {
    const [ucmCurrentHero, setUcmCurrentHero] = useState(0)
    const ucmHeroImages = [
        'https://placehold.co/1920x800/162d50/ffffff?text=Christmas+Market+Cruise',
        'https://placehold.co/1920x800/1a3a5c/ffffff?text=European+Holiday+Markets',
        'https://placehold.co/1920x800/0f1c2e/ffffff?text=Festive+River+Journey'
    ]

    useEffect(() => {
        const ucmTimer = setInterval(() => {
            setUcmCurrentHero(prev => (prev + 1) % ucmHeroImages.length)
        }, 5000)
        return () => clearInterval(ucmTimer)
    }, [ucmHeroImages.length])

    const [ucmActiveFaq, setUcmActiveFaq] = useState(null)
    const ucmToggleFaq = i => setUcmActiveFaq(ucmActiveFaq === i ? null : i)

    const ucmFaqs = [
        { question: 'What is a Uniworld Christmas Market River Cruise?', answer: 'It is a seasonal luxury river cruise that visits Europe\'s famous Christmas markets while offering festive onboard experiences.' },
        { question: 'Which rivers feature Christmas Market cruises?', answer: 'The Danube and Rhine are the most popular, with select itineraries also including the Main and Moselle.' },
        { question: 'When do Christmas Market cruises operate?', answer: 'Most departures take place between late November and December.' },
        { question: 'Which cities are included?', answer: 'Popular destinations include Vienna, Strasbourg, Cologne, Budapest, Passau, Rüdesheim, and Bratislava.' },
        { question: 'Are Christmas Market excursions included?', answer: 'Yes. Guided shore excursions are generally included.' },
        { question: 'Is food included?', answer: 'Yes. Meals and many beverages are included, often featuring holiday-inspired menus.' },
        { question: 'What should I wear?', answer: 'Warm layers, a winter coat, gloves, waterproof footwear, and a hat are recommended.' },
        { question: 'Is snow guaranteed?', answer: 'No. Snow is possible but weather varies each season.' },
        { question: 'Can families join these cruises?', answer: 'Yes. Some holiday departures are suitable for families.' },
        { question: 'Are Christmas Markets open every day?', answer: 'Most markets operate daily during the holiday season, though schedules vary by city.' },
        { question: 'Are holiday decorations onboard?', answer: 'Yes. Ships are typically decorated throughout the holiday season.' },
        { question: 'What can I buy at Christmas Markets?', answer: 'Popular purchases include handmade ornaments, crafts, gifts, candles, and regional foods.' },
        { question: 'How far are the markets from the ship?', answer: 'River ships usually dock close to city centers, making many markets accessible on foot.' },
        { question: 'When should I book?', answer: 'Booking nine to twelve months in advance is recommended for the best availability.' },
        { question: 'Are Christmas Market cruises worth it?', answer: 'They offer an excellent combination of festive traditions, cultural experiences, and luxury river cruising.' }
    ]

    const ucmSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/christmas-markets/",
                "name": "Uniworld Christmas Market River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/christmas-markets/",
                "description": "Complete guide to Uniworld Christmas Market River Cruises including itineraries, destinations, onboard holiday experiences, and travel tips.",
                "inLanguage": "en-US"
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Christmas Market River Cruises",
                "author": { "@id": "https://www.tripsandships.com/#organization" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/christmas-markets/" },
                "datePublished": "2026-08-08",
                "dateModified": "2026-08-08"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Christmas Market Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/christmas-markets/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is a Uniworld Christmas Market River Cruise?", "acceptedAnswer": { "@type": "Answer", "text": "It is a seasonal luxury river cruise that visits Europe's famous Christmas markets while offering festive onboard experiences." } },
                    { "@type": "Question", "name": "Which rivers feature Christmas Market cruises?", "acceptedAnswer": { "@type": "Answer", "text": "The Danube and Rhine are the most popular, with select itineraries also including the Main and Moselle." } },
                    { "@type": "Question", "name": "When do Christmas Market cruises operate?", "acceptedAnswer": { "@type": "Answer", "text": "Most departures take place between late November and December." } },
                    { "@type": "Question", "name": "Which cities are included?", "acceptedAnswer": { "@type": "Answer", "text": "Popular destinations include Vienna, Strasbourg, Cologne, Budapest, Passau, Rüdesheim, and Bratislava." } },
                    { "@type": "Question", "name": "Are Christmas Market excursions included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Guided shore excursions are generally included." } },
                    { "@type": "Question", "name": "Is food included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Meals and many beverages are included, often featuring holiday-inspired menus." } },
                    { "@type": "Question", "name": "What should I wear?", "acceptedAnswer": { "@type": "Answer", "text": "Warm layers, a winter coat, gloves, waterproof footwear, and a hat are recommended." } },
                    { "@type": "Question", "name": "Is snow guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "No. Snow is possible but weather varies each season." } },
                    { "@type": "Question", "name": "Can families join these cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Some holiday departures are suitable for families." } },
                    { "@type": "Question", "name": "Are Christmas Markets open every day?", "acceptedAnswer": { "@type": "Answer", "text": "Most markets operate daily during the holiday season, though schedules vary by city." } },
                    { "@type": "Question", "name": "Are holiday decorations onboard?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Ships are typically decorated throughout the holiday season." } },
                    { "@type": "Question", "name": "What can I buy at Christmas Markets?", "acceptedAnswer": { "@type": "Answer", "text": "Popular purchases include handmade ornaments, crafts, gifts, candles, and regional foods." } },
                    { "@type": "Question", "name": "How far are the markets from the ship?", "acceptedAnswer": { "@type": "Answer", "text": "River ships usually dock close to city centers, making many markets accessible on foot." } },
                    { "@type": "Question", "name": "When should I book?", "acceptedAnswer": { "@type": "Answer", "text": "Booking nine to twelve months in advance is recommended for the best availability." } },
                    { "@type": "Question", "name": "Are Christmas Market cruises worth it?", "acceptedAnswer": { "@type": "Answer", "text": "They offer an excellent combination of festive traditions, cultural experiences, and luxury river cruising." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Christmas Market River Cruises</title>
                <meta name="title" content="Uniworld Christmas Market River Cruises" />
                <meta name="description" content="Discover Uniworld Christmas Market River Cruises with festive itineraries, famous European markets, onboard holiday traditions, travel tips, and booking advice." />
                <meta name="keywords" content="Uniworld Christmas Market River Cruises, Uniworld Christmas Markets, Christmas Market river cruises, European Christmas cruises, Danube Christmas Markets, Rhine Christmas Markets, holiday river cruises, Uniworld winter cruises" />
                                <script type="application/ld+json">{JSON.stringify(ucmSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {ucmHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${ucmCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Snowflake size={16} />
                        <span>Uniworld River Cruises · Holiday Travel Guide</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Uniworld Christmas Market River Cruises
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Experience Europe's most enchanting holiday traditions aboard a luxury Uniworld river cruise, visiting centuries-old Christmas markets across the Danube, Rhine, and beyond.
                    </p>
                </div>
            </section>

            {/* ── INTRO / OVERVIEW ── */}
            <section className="ucm-intro-section">
                <div className="ucm-intro-container">
                    <div className="ucm-intro-grid">
                        <div className="ucm-intro-text-col">
                            <span className="ucm-eyebrow">FESTIVE RIVER CRUISING</span>
                            <h2 className="medi-section-heading">A Magical Way to Celebrate the Holidays in Europe</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-intro-lead">Few travel experiences capture the magic of the holiday season quite like a European Christmas Market cruise.</p>
                            <p className="ucm-intro-body">Uniworld Boutique River Cruises offers festive sailings that combine luxury accommodations with visits to centuries-old Christmas markets, beautifully decorated historic cities, and seasonal traditions across Europe.</p>
                            <p className="ucm-intro-body">From sipping mulled wine beneath twinkling lights to browsing handcrafted ornaments in medieval town squares, Uniworld Christmas Market River Cruises offer an immersive way to celebrate the holidays while exploring multiple destinations without changing hotels.</p>
                        </div>
                        <div className="ucm-intro-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/162d50/ffffff?text=Christmas+Market+Cruise" alt="Uniworld Christmas Market River Cruise" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                                <div className="ucm-image-badge">
                                    <Snowflake size={13} />
                                    <span>Festive Holiday Experiences</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE A CHRISTMAS MARKET CRUISE ── */}
            <section className="ucm-why-section">
                <div className="ucm-why-container">
                    <div className="ucm-why-grid">
                        <div className="ucm-why-text-col">
                            <span className="ucm-eyebrow">KEY BENEFITS</span>
                            <h2 className="medi-section-heading">Why Choose a Christmas Market River Cruise?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-why-lead">European Christmas markets are renowned for their festive atmosphere, handcrafted gifts, local cuisine, and historic settings.</p>
                            <p className="ucm-why-body">A river cruise allows travelers to visit several markets on one itinerary while enjoying the comfort of a luxury boutique ship.</p>

                            <div className="ucm-why-pillars">
                                {[
                                    { Icon: MapPin, label: 'Multiple destinations in one trip' },
                                    { Icon: Anchor, label: 'City-center docking' },
                                    { Icon: Compass, label: 'Holiday-themed excursions' },
                                    { Icon: Gem, label: 'Luxury accommodations' },
                                    { Icon: Utensils, label: 'Gourmet dining' },
                                    { Icon: Music, label: 'Seasonal onboard entertainment' },
                                    { Icon: Smile, label: 'Stress-free travel between cities' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="ucm-why-pillar">
                                        <div className="ucm-why-pillar-icon"><Icon size={18} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ucm-why-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Holiday+Cruise" alt="Christmas market river cruise experience" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT MAKES UNIWORLD CHRISTMAS CRUISES SPECIAL ── */}
            <section className="ucm-special-section">
                <div className="ucm-special-container">
                    <div className="ucm-special-header">
                        <span className="ucm-eyebrow ucm-eyebrow-light">ONBOARD EXPERIENCE</span>
                        <h2 className="medi-section-heading ucm-white-heading">What Makes Uniworld Christmas Cruises Special?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered ucm-separator-white"></div>
                        <p className="ucm-special-intro">Uniworld transforms its ships into festive floating boutique hotels during the holiday season.</p>
                        <p className="ucm-special-sub">Guests may enjoy:</p>
                    </div>

                    <div className="ucm-special-features">
                        {[
                            { Icon: Gift, label: 'Christmas decorations throughout the ship' },
                            { Icon: Utensils, label: 'Holiday-inspired menus' },
                            { Icon: Sparkles, label: 'Seasonal desserts' },
                            { Icon: Music, label: 'Traditional music performances' },
                            { Icon: Coffee, label: 'Festive cocktails' },
                            { Icon: Heart, label: 'Warm hospitality' }
                        ].map(({ Icon, label }, idx) => (
                            <div key={idx} className="ucm-special-feature">
                                <div className="ucm-special-feature-icon"><Icon size={20} /></div>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    <p className="ucm-special-note">The onboard atmosphere complements the festive experiences ashore.</p>
                </div>
            </section>

            {/* ── BEST CHRISTMAS MARKET ITINERARIES ── */}
            <section className="ucm-itineraries-section">
                <div className="ucm-itineraries-container">
                    <div className="ucm-itineraries-header">
                        <span className="ucm-eyebrow">POPULAR ROUTES</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best Christmas Market Itineraries</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ucm-itineraries-grid">
                        {[
                            {
                                river: 'Danube Christmas Markets',
                                img: 'https://placehold.co/400x260/162d50/ffffff?text=Danube+Christmas',
                                highlights: ['Vienna', 'Budapest', 'Bratislava', 'Passau', 'Linz', 'Imperial palaces, classical music, handcrafted ornaments']
                            },
                            {
                                river: 'Rhine Christmas Markets',
                                img: 'https://placehold.co/400x260/1a3a5c/ffffff?text=Rhine+Christmas',
                                highlights: ['Cologne', 'Koblenz', 'Rüdesheim', 'Strasbourg', 'Basel', 'Illuminated cathedrals, gingerbread, medieval streets']
                            },
                            {
                                river: 'Main & Moselle Holiday Cruises',
                                img: 'https://placehold.co/400x260/0f1c2e/ffffff?text=Main+Moselle',
                                highlights: ['Wine culture towns', 'Medieval architecture', 'Smaller local markets', 'Scenic river valleys', 'Quieter holiday atmosphere']
                            }
                        ].map(({ river, img, highlights }, idx) => (
                            <div key={idx} className="ucm-itinerary-card">
                                <div className="ucm-itinerary-img-wrap">
                                    <img src={img} alt={`${river} cruise`} className="ucm-itinerary-img" />
                                    <div className="ucm-itinerary-img-overlay"></div>
                                    <h3 className="ucm-itinerary-title">{river}</h3>
                                </div>
                                <div className="ucm-itinerary-body">
                                    <ul className="ucm-itinerary-list">
                                        {highlights.map((item, iIdx) => (
                                            <li key={iIdx} className="ucm-itinerary-item">
                                                <ChevronRight size={13} className="ucm-itinerary-chevron" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAMOUS CHRISTMAS MARKETS TABLE ── */}
            <section className="ucm-markets-section">
                <div className="ucm-markets-container">
                    <div className="ucm-markets-header">
                        <span className="ucm-eyebrow">DESTINATIONS</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Famous Christmas Markets You May Visit</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="ucm-markets-table-wrap">
                        <table className="ucm-markets-table">
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>Known For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Vienna</td><td>Elegant Christmas villages and traditional crafts</td></tr>
                                <tr><td>Strasbourg</td><td>One of Europe's oldest Christmas markets</td></tr>
                                <tr><td>Cologne</td><td>Cathedral Christmas Market</td></tr>
                                <tr><td>Budapest</td><td>Ice skating and Hungarian cuisine</td></tr>
                                <tr><td>Passau</td><td>Bavarian holiday traditions</td></tr>
                                <tr><td>Rüdesheim</td><td>International Christmas Market of Nations</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="ucm-markets-note">Market visits vary by itinerary and sailing date.</p>
                </div>
            </section>

            {/* ── SEASONAL FOOD AND DRINKS ── */}
            <section className="ucm-food-section">
                <div className="ucm-food-container">
                    <div className="ucm-food-grid">
                        <div className="ucm-food-text-col">
                            <span className="ucm-eyebrow">FESTIVE FLAVORS</span>
                            <h2 className="medi-section-heading">Seasonal Food and Drinks</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-food-lead">Holiday cruises feature a variety of festive treats both onboard and ashore.</p>
                            <p className="ucm-food-body">Popular specialties include:</p>

                            <div className="ucm-food-features">
                                {[
                                    { Icon: Coffee, text: 'Mulled wine (Glühwein)' },
                                    { Icon: Utensils, text: 'Gingerbread' },
                                    { Icon: Sparkles, text: 'Roasted chestnuts' },
                                    { Icon: Gift, text: 'Stollen' },
                                    { Icon: Heart, text: 'Christmas cookies' },
                                    { Icon: Star, text: 'Sausages' },
                                    { Icon: Leaf, text: 'Raclette' },
                                    { Icon: Coffee, text: 'Hot chocolate' },
                                    { Icon: Smile, text: 'Regional pastries' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ucm-food-feature">
                                        <div className="ucm-food-feature-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="ucm-food-note">Many menus also incorporate seasonal local ingredients.</p>
                        </div>
                        <div className="ucm-food-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Festive+Food" alt="Festive food at European Christmas Market" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHOPPING AT CHRISTMAS MARKETS ── */}
            <section className="ucm-shopping-section">
                <div className="ucm-shopping-container">
                    <div className="ucm-shopping-grid">
                        <div className="ucm-shopping-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/162d50/ffffff?text=Christmas+Shopping" alt="Christmas market shopping ornaments" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                            </div>
                            <div className="ucm-shopping-conclusion">
                                <p>Many items are handcrafted by local artisans.</p>
                            </div>
                        </div>
                        <div className="ucm-shopping-text-col">
                            <span className="ucm-eyebrow">UNIQUE GIFTS</span>
                            <h2 className="medi-section-heading">Shopping at Christmas Markets</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-shopping-lead">Markets are ideal for finding unique gifts.</p>
                            <p className="ucm-shopping-body">Popular purchases include:</p>

                            <div className="ucm-shopping-pillars">
                                {[
                                    { Icon: Gift, label: 'Handmade ornaments' },
                                    { Icon: Star, label: 'Wooden toys' },
                                    { Icon: Sparkles, label: 'Candles' },
                                    { Icon: Gem, label: 'Glass decorations' },
                                    { Icon: BookOpen, label: 'Local artwork' },
                                    { Icon: Utensils, label: 'Seasonal sweets' },
                                    { Icon: Leaf, label: 'Wool scarves' },
                                    { Icon: Crown, label: 'Ceramics' }
                                ].map(({ Icon, label }, idx) => (
                                    <div key={idx} className="ucm-shopping-pillar">
                                        <div className="ucm-shopping-pillar-icon"><Icon size={18} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WEATHER ── */}
            <section className="ucm-weather-section">
                <div className="ucm-weather-container">
                    <div className="ucm-weather-header">
                        <span className="ucm-eyebrow ucm-eyebrow-light">TRAVEL PLANNING</span>
                        <h2 className="medi-section-heading ucm-white-heading">Weather During Christmas Market Cruises</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered ucm-separator-white"></div>
                        <p className="ucm-weather-intro">Late November and December are generally cool throughout Central Europe.</p>
                        <p className="ucm-weather-sub">Typical temperatures range from:</p>
                    </div>

                    <div className="ucm-weather-table-wrap">
                        <table className="ucm-weather-table">
                            <thead>
                                <tr>
                                    <th>Region</th>
                                    <th>Approximate Temperature</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Germany</td><td>30–45°F (-1–7°C)</td></tr>
                                <tr><td>Austria</td><td>28–42°F (-2–6°C)</td></tr>
                                <tr><td>Hungary</td><td>30–45°F (-1–7°C)</td></tr>
                                <tr><td>France</td><td>35–48°F (2–9°C)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="ucm-weather-note">Snow is possible but not guaranteed.</p>
                </div>
            </section>

            {/* ── WHAT TO PACK ── */}
            <section className="ucm-packing-section">
                <div className="ucm-packing-container">
                    <div className="ucm-packing-grid">
                        <div className="ucm-packing-text-col">
                            <span className="ucm-eyebrow">ESSENTIALS</span>
                            <h2 className="medi-section-heading">What to Pack</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-packing-lead">Essential items include:</p>

                            <div className="ucm-packing-list">
                                {[
                                    { Icon: Thermometer, text: 'Warm winter coat' },
                                    { Icon: Shield, text: 'Waterproof boots' },
                                    { Icon: Sun, text: 'Hat' },
                                    { Icon: Leaf, text: 'Gloves' },
                                    { Icon: Sparkles, text: 'Scarf' },
                                    { Icon: Heart, text: 'Thermal layers' },
                                    { Icon: Compass, text: 'Comfortable walking shoes' },
                                    { Icon: Cloud, text: 'Umbrella' },
                                    { Icon: Eye, text: 'Portable charger' },
                                    { Icon: Briefcase, text: 'Day backpack' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ucm-packing-item">
                                        <div className="ucm-packing-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ucm-packing-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Winter+Packing" alt="Winter packing for Christmas market cruise" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                            </div>
                            <div className="ucm-packing-note">
                                <Sparkles size={16} className="ucm-packing-note-icon" />
                                <span>Layering is the best strategy for changing weather conditions.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INCLUDED EXPERIENCES ── */}
            <section className="ucm-included-section">
                <div className="ucm-included-container">
                    <div className="ucm-included-header">
                        <span className="ucm-eyebrow">WHAT'S INCLUDED</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Included Experiences</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="ucm-included-intro">Most Uniworld Christmas Market cruises include:</p>
                    </div>

                    <div className="ucm-included-cards">
                        {[
                            { Icon: Gem, label: 'Luxury accommodations' },
                            { Icon: Utensils, label: 'Daily meals' },
                            { Icon: Coffee, label: 'Premium beverages' },
                            { Icon: Compass, label: 'Guided shore excursions' },
                            { Icon: Globe, label: 'Wi-Fi' },
                            { Icon: Heart, label: 'Gratuities' },
                            { Icon: Star, label: 'Cultural experiences' },
                            { Icon: Music, label: 'Evening entertainment' }
                        ].map(({ Icon, label }, idx) => (
                            <div key={idx} className="ucm-included-card">
                                <div className="ucm-included-card-icon"><Icon size={22} /></div>
                                <h3 className="ucm-included-card-title">{label}</h3>
                            </div>
                        ))}
                    </div>

                    <p className="ucm-included-note">Specific inclusions may vary by itinerary.</p>
                </div>
            </section>

            {/* ── BEST TIME TO BOOK ── */}
            <section className="ucm-booking-section">
                <div className="ucm-booking-container">
                    <div className="ucm-booking-grid">
                        <div className="ucm-booking-text-col">
                            <span className="ucm-eyebrow">PLANNING AHEAD</span>
                            <h2 className="medi-section-heading">Best Time to Book</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-booking-lead">Christmas Market cruises are among Uniworld's most popular seasonal departures.</p>
                            <p className="ucm-booking-body">For the best selection:</p>

                            <div className="ucm-booking-list">
                                {[
                                    { Icon: Calendar, text: 'Book 9–12 months in advance.' },
                                    { Icon: CheckCircle, text: 'Consider early booking promotions.' },
                                    { Icon: Gem, text: 'Reserve preferred cabin categories early.' },
                                    { Icon: Users, text: 'Travel during late November or early December for fewer crowds.' },
                                    { Icon: AlertCircle, text: 'Holiday sailings frequently sell out well before departure.' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ucm-booking-item">
                                        <div className="ucm-booking-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ucm-booking-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/162d50/ffffff?text=Book+Early" alt="Book your Christmas market cruise early" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="ucm-who-section">
                <div className="ucm-who-container">
                    <div className="ucm-who-grid">
                        <div className="ucm-who-text-col">
                            <span className="ucm-eyebrow">IDEAL GUESTS</span>
                            <h2 className="medi-section-heading">Who Should Choose a Christmas Market Cruise?</h2>
                            <div className="medi-heading-separator-bar"></div>
                            <p className="ucm-who-lead">These itineraries are ideal for:</p>
 
                            <div className="ucm-who-list">
                                {[
                                    { Icon: Heart, text: 'Couples' },
                                    { Icon: Users, text: 'Families' },
                                    { Icon: Compass, text: 'Solo travelers' },
                                    { Icon: Eye, text: 'Photography enthusiasts' },
                                    { Icon: ShoppingBag, text: 'Holiday shoppers' },
                                    { Icon: Utensils, text: 'Food lovers' },
                                    { Icon: Star, text: 'First-time river cruisers' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ucm-who-item">
                                        <div className="ucm-who-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="ucm-who-image-col">
                            <div className="ucm-image-frame">
                                <img src="https://placehold.co/600x400/1a3a5c/ffffff?text=Holiday+Travelers" alt="Holiday travelers enjoying a Christmas market cruise" className="ucm-frame-img" />
                                <div className="ucm-frame-overlay"></div>
                            </div>
                            <div className="ucm-who-note">
                                <Sparkles size={16} className="ucm-who-note-icon" />
                                <span>Anyone interested in European holiday traditions will likely enjoy the experience.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
            {/* ── IS IT WORTH IT ── */}
            <section className="ucm-worth-section">
                <div className="ucm-worth-container">
                    <div className="ucm-worth-card">
                        <div className="ucm-worth-icon"><Award size={32} /></div>
                        <h2 className="ucm-worth-heading">Is a Christmas Market Cruise Worth It?</h2>
                        <div className="ucm-worth-separator"></div>
                        <p className="ucm-worth-body">For travelers who enjoy festive celebrations, historic cities, and seasonal traditions, Uniworld Christmas Market cruises offer a memorable way to experience Europe during one of its most magical times of year.</p>
                        <p className="ucm-worth-body">The combination of luxury accommodations, destination-focused excursions, and holiday ambiance creates an experience that is both relaxing and culturally enriching.</p>
                    </div>
                </div>
            </section>
 
            {/* ── KEY TAKEAWAYS ── */}
            <section className="ucm-takeaways-section">
                <div className="ucm-takeaways-container">
                    <div className="ucm-takeaways-eyebrow-row">
                        <Gem size={18} />
                        <span className="ucm-takeaways-eyebrow">KEY TAKEAWAYS</span>
                    </div>
                    <h2 className="ucm-takeaways-heading">What to Remember</h2>
                    <div className="ucm-takeaways-separator"></div>
 
                    <div className="ucm-takeaways-list">
                        {[
                            'Christmas Market cruises visit several festive European cities on one itinerary.',
                            'Popular routes include the Danube, Rhine, and Main rivers.',
                            'Ships are decorated for the holiday season with festive entertainment and dining.',
                            'City-center docking provides easy access to Christmas markets.',
                            'Winter clothing and comfortable walking shoes are essential.',
                            'Holiday sailings are extremely popular, so early booking is recommended.',
                            'The experience combines luxury cruising with authentic European holiday traditions.'
                        ].map((item, idx) => (
                            <div key={idx} className="ucm-takeaway-item">
                                <CheckCircle size={18} className="ucm-takeaway-check" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
 
            {/* ── INTERNAL LINKS ── */}
            <section className="ucm-links-section">
                <div className="ucm-links-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Explore More Uniworld Guides</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
 
                    <div className="ucm-links-grid">
                        {[
                            { text: 'Best Uniworld River Cruise Itineraries', url: '/uniworld-river-cruises/best-itineraries/' },
                            { text: 'First-Time Uniworld River Cruise Guide', url: '/uniworld-river-cruises/first-time-guide/' },
                            { text: 'Uniworld Dress Code and Packing Guide', url: '/uniworld-river-cruises/dress-code-packing/' },
                            { text: 'What Is Included on a Uniworld River Cruise', url: '/uniworld-river-cruises/whats-included/' },
                            { text: 'Uniworld Food and Dining', url: '/uniworld-river-cruises/food-dining/' },
                            { text: 'Uniworld Ships and Suites', url: '/uniworld-river-cruises/ships-suites/' }
                        ].map(({ text, url }, idx) => (
                            <Link key={idx} to={url} className="ucm-link-card">
                                <span>{text}</span>
                                <ArrowRight size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="ucm-expert-insight-section">
                <div className="ucm-expert-insight-container">

                    <div className="ucm-expert-portrait-panel">
                        <div className="ucm-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Christmas Market Specialist" />
                        </div>
                        <div className="ucm-expert-stats-strip">
                            <div className="ucm-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="ucm-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Visited</p>
                            </div>
                        </div>
                    </div>

                    <div className="ucm-expert-content-panel">
                        <span className="ucm-eyebrow">MEET THE CEO</span>
                        <h2 className="ucm-section-heading">Insight from Angela Hughes</h2>
                        <div className="ucm-heading-separator-bar"></div>

                        <p className="ucm-expert-quote">
                            "European Christmas markets are pure magic, but the true luxury is sailing right into the heart of them. With Uniworld, you avoid the cold transfer busses and return each evening to a warm, beautifully decorated ship serving hot glühwein and fresh gingerbread. It's the most comfortable way to experience Europe's holiday season."
                        </p>

                        <div className="ucm-expert-priorities">
                            <h5>Christmas Market Priorities Matrix:</h5>
                            <div className="ucm-expert-pills">
                                {['Rhine &amp; Danube Classics', 'Onboard Glühwein Tastings', 'Thermal Packing Layers', 'Artisanal Gift Shopping', 'Local Gingerbread Classes', 'Warm Shipboard Sanctuary'].map(pill => (
                                    <span key={pill} className="ucm-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="ucm-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers navigate seasonal packing, select the best river routes, and book early enough to secure scarce holiday-season suites.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {ucmFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => ucmToggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{ucmActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {ucmActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Experience Europe's Most Enchanting Holiday Traditions</h2>
                        <div className="medi-cta-separator-white"></div>
                        <p className="medi-cta-paragraph-white">
                            Experience Europe's most enchanting holiday traditions by booking a Uniworld Christmas Market River Cruise and enjoying festive cities, luxury accommodations, and unforgettable seasonal experiences.
                        </p>
                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help you find the perfect holiday cruise experience.
                        </p>

                        <div className="medi-cta-button-group">
                            <Link to='/contact' className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Christmas Market Cruises
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
