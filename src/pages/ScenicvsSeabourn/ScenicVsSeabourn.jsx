import Navbar from '../../components/Navbar/Navbar'
import './ScenicVsSeabourn.css'

import {
    Ship, MapPin, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem,
    ChevronRight, Crown, Phone, LayoutList, Utensils,
    Sun, Award, Music, GraduationCap,
    Wifi, Wine, Image as ImageIcon, Waves, DollarSign, ShieldCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

/* ── Reusable image placeholder (swap for real photography later) ── */
function SvsImagePlaceholder({ label = 'Image Placeholder', tone = '' }) {
    return (
        <div className={`svs-img-placeholder ${tone}`}>
            <ImageIcon size={30} strokeWidth={1.5} />
            <span>{label}</span>
        </div>
    )
}

function ScenicVsSeabourn() {

    const [svsCurrentHero, setSvsCurrentHero] = useState(0)
    const svsHeroSlides = [
        'Scenic Eclipse Discovery Yacht',
        'Seabourn Ocean Suite Living',
        'Ultra-Luxury Expedition Voyages'
    ]

    useEffect(() => {
        const svsTimer = setInterval(() => {
            setSvsCurrentHero(prev => (prev + 1) % svsHeroSlides.length)
        }, 5000)
        return () => clearInterval(svsTimer)
    }, [svsHeroSlides.length])

    const [svsActiveFaq, setSvsActiveFaq] = useState(null)
    const svsToggleFaq = i => setSvsActiveFaq(svsActiveFaq === i ? null : i)

    /* ── At-a-Glance comparison table ── */
    const svsGlanceRows = [
        { feature: 'Cruise Style', scenic: 'Ultra-Luxury Ocean & Expedition', seabourn: 'Ultra-Luxury Ocean & Expedition' },
        { feature: 'Fleet', scenic: 'Scenic Eclipse I & II plus River Cruises', seabourn: 'Ocean Ships & Expedition Ships' },
        { feature: 'Butler Service', scenic: 'Every Suite', seabourn: 'Every Suite' },
        { feature: 'Specialty Dining', scenic: 'Included', seabourn: 'Included' },
        { feature: 'Premium Beverages', scenic: 'Included', seabourn: 'Included' },
        { feature: 'Wi-Fi', scenic: 'Included', seabourn: 'Included' },
        { feature: 'Gratuities', scenic: 'Included', seabourn: 'Included' },
        { feature: 'Expedition Cruises', scenic: 'Yes', seabourn: 'Yes' },
        { feature: 'Private Balconies', scenic: 'Every Suite', seabourn: 'Every Suite' },
        { feature: 'Luxury Level', scenic: 'Ultra-Luxury', seabourn: 'Ultra-Luxury' }
    ]

    /* ── Ships & Atmosphere ── */
    const svsShipsScenic = ['Spacious observation lounges', 'Helicopter excursions (select voyages)', 'Submarine experiences (select voyages)', 'State-of-the-art expedition equipment', 'Modern contemporary design', 'Intimate guest capacity']
    const svsShipsSeabourn = ['Yacht-inspired ambiance', 'Contemporary interiors', 'Spacious public lounges', 'Outdoor sun decks', 'Marina experiences (select sailings)', 'Boutique luxury atmosphere']

    /* ── Suites & Accommodations ── */
    const svsSuitesScenic = ['Butler service', 'Private veranda', 'King-size bedding', 'Premium minibar', 'Spacious marble bathroom', 'Luxury bath amenities']
    const svsSuitesSeabourn = ['Private veranda', 'Walk-in closet', 'Marble bathroom', 'Sitting area', 'Personalized minibar', 'Suite host and attentive service']

    /* ── Dining ── */
    const svsDiningScenic = ['Fine dining restaurants', 'Specialty venues', "Chef's Table experiences", 'Casual dining', 'In-suite dining', 'All meals & specialty dining included']
    const svsDiningSeabourn = ['The Restaurant', 'Solis', 'Sushi', 'The Colonnade', 'Patio Grill', 'In-suite dining']

    /* ── Destinations ── */
    const svsDestinationsScenic = ['Antarctica', 'Arctic', 'Iceland', 'Greenland', 'Norwegian Fjords', 'Mediterranean', 'South Pacific', 'Australia', 'New Zealand']
    const svsDestinationsSeabourn = ['Mediterranean', 'Caribbean', 'Alaska', 'Antarctica', 'South America', 'Northern Europe', 'Asia', 'Australia', 'Africa']

    /* ── Expedition ── */
    const svsExpeditionScenic = ['Zodiac excursions', 'Expert expedition teams', 'Polar exploration', 'Helicopter flights (select voyages)', 'Submarine dives (select voyages)', 'Advanced Discovery Yacht technology']
    const svsExpeditionSeabourn = ['Expedition submarines (select voyages)', 'Zodiac landings', 'Kayaking', 'Wildlife observation', 'Expert naturalists', 'Polar-certified expedition ships']

    /* ── Included Amenities ── */
    const svsIncludedScenic = [
        { Icon: Crown, text: 'Butler service' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: Utensils, text: 'Specialty dining' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: Sparkles, text: 'Minibar' },
        { Icon: Ship, text: 'Airport transfers on many itineraries' },
        { Icon: MapPin, text: 'Shore excursions on select voyages' }
    ]
    const svsIncludedSeabourn = [
        { Icon: Crown, text: 'Luxury suite accommodations' },
        { Icon: Utensils, text: 'Fine dining' },
        { Icon: Wine, text: 'Premium beverages' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Wifi, text: 'Wi-Fi packages on many sailings' },
        { Icon: Sparkles, text: 'Caviar events (select itineraries)' },
        { Icon: Music, text: 'Entertainment' },
        { Icon: GraduationCap, text: 'Enrichment programs' }
    ]

    /* ── Wellness ── */
    const svsWellnessScenic = ['Luxury spa', 'Sauna', 'Steam room', 'Yoga', 'Fitness center', 'Wellness treatments']
    const svsWellnessSeabourn = ['Spa & Wellness Center', 'Fitness classes', 'Personal training', 'Beauty salon', 'Thermal area', 'Mindful living programs']

    /* ── Entertainment ── */
    const svsEntertainmentScenic = ['Live music', 'Destination lectures', 'Expedition briefings', 'Guest speakers', 'Culinary demonstrations']
    const svsEntertainmentSeabourn = ['Live music', 'Production shows', 'Cabaret performances', 'Guest entertainers', 'Enrichment lectures', 'Social lounges']

    /* ── Who should choose ── */
    const svsChooseScenic = [
        'Want a truly all-inclusive luxury experience',
        'Plan to visit Antarctica, the Arctic, or other expedition destinations',
        'Appreciate butler service in every suite',
        'Enjoy educational expedition programs',
        'Value innovative experiences like helicopters and submarines on select voyages'
    ]
    const svsChooseSeabourn = [
        'Prefer elegant yacht-style cruising',
        'Enjoy award-winning dining and personalized service',
        'Want access to unique ports around the world',
        'Appreciate sophisticated onboard entertainment',
        'Prefer a relaxed atmosphere with refined luxury'
    ]

    /* ── Why book with T&S ── */
    const svsWhyBook = [
        { Icon: Compass, text: 'Expert luxury cruise advice' },
        { Icon: MapPin, text: 'Personalized itinerary planning' },
        { Icon: Gem, text: 'Access to exclusive offers and amenities' },
        { Icon: Ship, text: 'Pre- and post-cruise travel assistance' },
        { Icon: ShieldCheck, text: 'Dedicated support throughout your journey' }
    ]

    /* ── FAQ ── */
    const svsFaqs = [
        { question: 'Is Scenic more luxurious than Seabourn?', answer: 'Both are considered ultra-luxury cruise lines. Scenic is known for its all-inclusive expedition experiences, while Seabourn excels in elegant yacht-style ocean cruising and personalized service.' },
        { question: 'Which cruise line is better for Antarctica?', answer: 'Both offer exceptional Antarctica expeditions. Scenic stands out with its Discovery Yachts and optional helicopter and submarine experiences on select voyages, while Seabourn provides immersive polar expeditions aboard Seabourn Venture and Seabourn Pursuit.' },
        { question: 'Does Scenic include butler service?', answer: 'Yes. Every Scenic suite includes personalized butler service.' },
        { question: 'Does Seabourn offer butler service?', answer: "Seabourn provides personalized suite hosts and attentive service in every suite, though the service model differs slightly from Scenic's dedicated butler concept." },
        { question: 'Are drinks included on both cruise lines?', answer: 'Yes. Premium beverages are included on both Scenic and Seabourn.' },
        { question: 'Which cruise line has better dining?', answer: 'Both cruise lines are renowned for exceptional dining. Scenic emphasizes all-inclusive gourmet experiences, while Seabourn is celebrated for its destination-inspired cuisine and award-winning culinary program.' },
        { question: 'Which cruise line is better for expedition travel?', answer: 'Both excel in expedition cruising, but Scenic offers additional exploration features such as helicopters and submarines on select sailings.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included on Scenic voyages, and Seabourn includes Wi-Fi packages on many sailings.' },
        { question: 'Which cruise line has larger ships?', answer: "Scenic's Discovery Yachts and Seabourn's expedition ships are similarly intimate, creating personalized guest experiences rather than large-ship cruising." },
        { question: 'Does Scenic operate river cruises?', answer: 'Yes. Scenic also offers luxury river cruises throughout Europe and Southeast Asia.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent for couples seeking luxury, romance, and exceptional service. The best choice depends on itinerary preferences and desired onboard atmosphere.' },
        { question: 'Which cruise line visits more destinations?', answer: 'Seabourn offers one of the broadest global destination portfolios, while Scenic specializes in expedition and luxury-focused itineraries.' },
        { question: 'Are gratuities included?', answer: 'Yes. Both Scenic and Seabourn include gratuities in their cruise fares.' },
        { question: 'Which cruise line has a more relaxed atmosphere?', answer: 'Both provide relaxed luxury, though Seabourn has a more traditional yacht-club ambiance, while Scenic blends contemporary luxury with exploration.' },
        { question: 'Which cruise line is best overall?', answer: 'Scenic is an outstanding choice for travelers seeking expedition adventures with truly all-inclusive luxury, while Seabourn is ideal for those who value elegant ocean cruising, world-class service, and destination-focused itineraries.' }
    ]

    const svsSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-vs-seabourn",
                "name": "Scenic vs Seabourn",
                "url": "https://www.tripsandships.com/scenic-vs-seabourn",
                "description": "Compare Scenic and Seabourn to discover which ultra-luxury cruise line offers the best ships, dining, suites, expedition experiences, and destinations.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" }
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
                "description": "Luxury travel advisors specializing in ocean, river, expedition, and luxury cruise vacations worldwide."
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
                "@type": "ComparisonPage",
                "name": "Scenic vs Seabourn",
                "about": [
                    { "@type": "Brand", "name": "Scenic Luxury Cruises & Tours" },
                    { "@type": "Brand", "name": "Seabourn" }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Cruise Comparisons", "item": "https://www.tripsandships.com/cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic vs Seabourn", "item": "https://www.tripsandships.com/scenic-vs-seabourn" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": svsFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Scenic vs Seabourn | Which Ultra-Luxury Cruise Line Is Best?</title>
                <meta name="title" content="Scenic vs Seabourn | Which Ultra-Luxury Cruise Line Is Best?" />
                <meta name="description" content="Compare Scenic vs Seabourn cruises, including ships, suites, dining, destinations, expedition voyages, pricing, and inclusions to find the perfect ultra-luxury cruise." />
                <meta name="keywords" content="Scenic vs Seabourn, Scenic vs Seabourn Cruise, Scenic Cruises vs Seabourn, Scenic Eclipse vs Seabourn Venture, Best Ultra-Luxury Cruise Line, Luxury Cruise Comparison, Seabourn Cruise Reviews, Scenic Luxury Cruises, Expedition Cruise Comparison" />
                <script type="application/ld+json">{JSON.stringify(svsSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="svs-hero-section">
                {svsHeroSlides.map((label, idx) => (
                    <div
                        key={idx}
                        className={`svs-hero-background svs-hero-bg-${idx % 3} ${svsCurrentHero === idx ? 'svs-active' : ''}`}
                    />
                ))}
                <div className="svs-hero-overlay-layer"></div>
                <div className="svs-hero-content-wrapper">
                    <div className="svs-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury Cruise Comparison · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="svs-hero-main-title">
                        Scenic vs Seabourn: <br className="svs-hero-break" /> Which Ultra-Luxury Cruise Line Is Right for You?
                    </h1>
                    <p className="svs-hero-subtitle-text">
                        Compare ships, suites, dining, destinations, and expedition experiences to find the perfect ultra-luxury cruise line for your next voyage.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="svs-intro-section">
                <div className="svs-intro-container">
                    <p className="svs-intro-lead">For travelers seeking exceptional service, elegant accommodations, gourmet dining, and immersive destinations, Scenic Luxury Cruises &amp; Tours and Seabourn consistently rank among the world's finest cruise lines.</p>
                    <p className="svs-intro-body">While both brands deliver all-inclusive luxury experiences with outstanding personalized service, they each have their own strengths. Scenic is renowned for its truly all-inclusive approach and expedition expertise aboard the Scenic Eclipse fleet, while Seabourn combines intimate yacht-like ships with award-winning hospitality and destination-focused itineraries.</p>
                    <p className="svs-intro-body">Whether you're dreaming of exploring Antarctica, sailing the Mediterranean, or discovering Alaska, this comparison will help you decide which cruise line best matches your travel style.</p>
                </div>
            </section>

            {/* ── AT A GLANCE TABLE ── */}
            <section className="svs-glance-section">
                <div className="svs-glance-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">SIDE-BY-SIDE COMPARISON</span>
                        <h2 className="svs-section-heading">Scenic vs Seabourn at a Glance</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    </div>

                    <div className="svs-glance-table-wrap">
                        <table className="svs-glance-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Scenic</th>
                                    <th>Seabourn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {svsGlanceRows.map((row, idx) => (
                                    <tr key={idx}>
                                        <td data-label="Feature" className="svs-glance-feature-cell">{row.feature}</td>
                                        <td data-label="Scenic">{row.scenic}</td>
                                        <td data-label="Seabourn">{row.seabourn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile card fallback */}
                    <div className="svs-glance-cards">
                        {svsGlanceRows.map((row, idx) => (
                            <div key={idx} className="svs-glance-card">
                                <div className="svs-glance-card-feature">{row.feature}</div>
                                <div className="svs-glance-card-row">
                                    <span className="svs-glance-card-label">Scenic</span>
                                    <span className="svs-glance-card-value">{row.scenic}</span>
                                </div>
                                <div className="svs-glance-card-row">
                                    <span className="svs-glance-card-label">Seabourn</span>
                                    <span className="svs-glance-card-value">{row.seabourn}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT SCENIC / SEABOURN ── */}
            <section className="svs-about-section">
                <div className="svs-about-container">
                    <div className="svs-about-grid">

                        <div className="svs-about-card">
                            <SvsImagePlaceholder label="Scenic Eclipse Discovery Yacht" />
                            <div className="svs-about-card-body">
                                <span className="svs-eyebrow">ABOUT SCENIC LUXURY CRUISES</span>
                                <h3 className="svs-about-card-title">Scenic Luxury Cruises</h3>
                                <p className="svs-about-card-text">Scenic has earned a global reputation for delivering truly all-inclusive luxury vacations.</p>
                                <p className="svs-about-card-text">Its ocean fleet includes Scenic Eclipse and Scenic Eclipse II — purpose-built Discovery Yachts for expedition cruising that combine luxury accommodations with advanced technology, allowing guests to explore destinations ranging from Antarctica to the Mediterranean.</p>
                                <p className="svs-about-card-text">Scenic also operates award-winning river cruises throughout Europe and Southeast Asia, making it a versatile choice for travelers who enjoy both ocean and river experiences.</p>
                            </div>
                        </div>

                        <div className="svs-about-card">
                            <SvsImagePlaceholder label="Seabourn Ocean Suite Living" />
                            <div className="svs-about-card-body">
                                <span className="svs-eyebrow">ABOUT SEABOURN</span>
                                <h3 className="svs-about-card-title">Seabourn</h3>
                                <p className="svs-about-card-text">Seabourn has been a leader in ultra-luxury cruising for decades, offering intimate ships with exceptional personalized service.</p>
                                <p className="svs-about-card-text">Its fleet includes Seabourn Ovation, Seabourn Encore, Seabourn Quest, Seabourn Sojourn, Seabourn Pursuit, and Seabourn Venture.</p>
                                <p className="svs-about-card-text">Seabourn is known for creating a yacht-like atmosphere where guests enjoy sophisticated luxury, attentive hospitality, and destination-rich itineraries around the globe.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIPS & ONBOARD ATMOSPHERE ── */}
            <section className="svs-compare-section svs-bg-soft">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">ONBOARD EXPERIENCE</span>
                        <h2 className="svs-section-heading">Ships and Onboard Atmosphere</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                        <p className="svs-compare-intro">Scenic's Discovery Yachts are designed for exploration without sacrificing comfort, appealing to travelers seeking adventure combined with uncompromising luxury. Seabourn's ships emphasize elegant relaxation and personalized service in a refined, social, and quietly luxurious atmosphere.</p>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <Ship size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsShipsScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <Ship size={20} />
                                <h3>Seabourn</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsShipsSeabourn.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ── */}
            <section className="svs-compare-section">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">STAYING ABOARD</span>
                        <h2 className="svs-section-heading">Suites and Accommodations</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                        <p className="svs-compare-intro">Every suite on both cruise lines is designed for comfort, privacy, and elegance — with higher categories offering expanded living spaces and exclusive privileges.</p>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <Crown size={20} />
                                <h3>Scenic — Every Suite Includes</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsSuitesScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <Crown size={20} />
                                <h3>Seabourn — Every Suite Includes</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsSuitesSeabourn.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="svs-compare-section svs-bg-soft">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">CULINARY PROGRAM</span>
                        <h2 className="svs-section-heading">Dining Experience</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                        <p className="svs-compare-intro">All meals and specialty dining venues are included on Scenic voyages, while Seabourn is widely recognized for its exceptional culinary program featuring regional ingredients and destination-inspired cuisine.</p>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <Utensils size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsDiningScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <Utensils size={20} />
                                <h3>Seabourn</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsDiningSeabourn.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="svs-compare-section">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">WHERE YOU'LL SAIL</span>
                        <h2 className="svs-section-heading">Destinations</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                        <p className="svs-compare-intro">Scenic's expedition cruises are among the most comprehensive in the luxury market, while Seabourn sails to more than 400 destinations worldwide with unique ports and immersive destination experiences.</p>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <MapPin size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <div className="svs-tag-cloud">
                                {svsDestinationsScenic.map((item, idx) => (
                                    <span key={idx} className="svs-tag svs-tag-scenic">{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <MapPin size={20} />
                                <h3>Seabourn</h3>
                            </div>
                            <div className="svs-tag-cloud">
                                {svsDestinationsSeabourn.map((item, idx) => (
                                    <span key={idx} className="svs-tag svs-tag-seabourn">{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION CRUISING ── */}
            <section className="svs-expedition-section">
                <div className="svs-expedition-bg-placeholder">
                    <SvsImagePlaceholder label="Polar Expedition Voyage" tone="svs-placeholder-dark" />
                </div>
                <div className="svs-expedition-overlay"></div>
                <div className="svs-expedition-content">
                    <span className="svs-eyebrow svs-eyebrow-light">ADVENTURE AT SEA</span>
                    <h2 className="svs-section-heading svs-white-heading">Expedition Cruising</h2>
                    <div className="svs-heading-separator-bar svs-bar-centered svs-separator-white"></div>
                    <p className="svs-expedition-intro">Both cruise lines excel in expedition travel, but their experiences differ. Both brands provide exceptional expedition experiences with knowledgeable guides and immersive exploration.</p>

                    <div className="svs-expedition-grid">
                        <div className="svs-expedition-col">
                            <h3>Scenic</h3>
                            <ul className="svs-expedition-list">
                                {svsExpeditionScenic.map((item, idx) => (
                                    <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-expedition-col">
                            <h3>Seabourn</h3>
                            <ul className="svs-expedition-list">
                                {svsExpeditionSeabourn.map((item, idx) => (
                                    <li key={idx}><ChevronRight size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INCLUDED AMENITIES ── */}
            <section className="svs-compare-section">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">WHAT'S INCLUDED</span>
                        <h2 className="svs-section-heading">Included Amenities</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <Gem size={20} />
                                <h3>Scenic Includes</h3>
                            </div>
                            <div className="svs-icon-list">
                                {svsIncludedScenic.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="svs-icon-list-item">
                                        <div className="svs-icon-list-icon svs-icon-scenic"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <Gem size={20} />
                                <h3>Seabourn Includes</h3>
                            </div>
                            <div className="svs-icon-list">
                                {svsIncludedSeabourn.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="svs-icon-list-item">
                                        <div className="svs-icon-list-icon svs-icon-seabourn"><Icon size={17} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WELLNESS ── */}
            <section className="svs-compare-section svs-bg-soft">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">MIND &amp; BODY</span>
                        <h2 className="svs-section-heading">Wellness and Relaxation</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <Sun size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsWellnessScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <Sun size={20} />
                                <h3>Seabourn</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsWellnessSeabourn.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="svs-compare-section">
                <div className="svs-compare-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">EVENINGS ONBOARD</span>
                        <h2 className="svs-section-heading">Entertainment</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                        <p className="svs-compare-intro">Scenic entertainment emphasizes cultural enrichment, while Seabourn offers a broader mix of performances — though the onboard atmosphere on both remains elegant rather than high-energy.</p>
                    </div>

                    <div className="svs-compare-grid">
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-scenic">
                                <Music size={20} />
                                <h3>Scenic</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsEntertainmentScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-compare-col">
                            <div className="svs-compare-col-header svs-col-seabourn">
                                <Music size={20} />
                                <h3>Seabourn</h3>
                            </div>
                            <ul className="svs-compare-list">
                                {svsEntertainmentSeabourn.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE COMPARISON ── */}
            <section className="svs-service-section">
                <div className="svs-service-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">HOSPITALITY</span>
                        <h2 className="svs-section-heading">Service Comparison</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                        <p className="svs-compare-intro">Both Scenic and Seabourn consistently receive high marks for personalized service.</p>
                    </div>

                    <div className="svs-service-grid">
                        <div className="svs-service-card">
                            <Users size={22} />
                            <h3>Scenic</h3>
                            <ul>
                                <li>Butler service for every suite</li>
                                <li>Intimate guest-to-crew ratio</li>
                                <li>Personalized luxury</li>
                            </ul>
                        </div>
                        <div className="svs-service-card">
                            <Users size={22} />
                            <h3>Seabourn</h3>
                            <ul>
                                <li>Attentive suite hosts</li>
                                <li>Friendly and intuitive hospitality</li>
                                <li>Relaxed yet refined service</li>
                            </ul>
                        </div>
                    </div>

                    <div className="svs-service-footer">
                        <p>Both cruise lines are recognized for creating meaningful guest relationships and delivering exceptional onboard experiences.</p>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="svs-pricing-section">
                <div className="svs-pricing-container">
                    <span className="svs-eyebrow">INVESTMENT</span>
                    <h2 className="svs-section-heading">Pricing</h2>
                    <div className="svs-heading-separator-bar"></div>
                    <p className="svs-pricing-text">Both Scenic and Seabourn occupy the ultra-luxury segment, with pricing varying based on itinerary, suite category, and season.</p>
                    <p className="svs-pricing-text">Scenic often commands premium pricing for expedition voyages due to its advanced Discovery Yacht features and all-inclusive offerings. Seabourn provides excellent value with elegant accommodations, exceptional dining, and immersive itineraries across its fleet.</p>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="svs-choose-section">
                <div className="svs-choose-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svs-eyebrow">MAKE YOUR DECISION</span>
                        <h2 className="svs-section-heading">Which Cruise Line Is Right for You?</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    </div>

                    <div className="svs-choose-grid">
                        <div className="svs-choose-card">
                            <div className="svs-choose-card-header svs-col-scenic">
                                <Compass size={22} />
                                <h3>Who Should Choose Scenic?</h3>
                            </div>
                            <ul className="svs-choose-list">
                                {svsChooseScenic.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={17} className="svs-choose-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="svs-choose-card">
                            <div className="svs-choose-card-header svs-col-seabourn">
                                <Waves size={22} />
                                <h3>Who Should Choose Seabourn?</h3>
                            </div>
                            <ul className="svs-choose-list">
                                {svsChooseSeabourn.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={17} className="svs-choose-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK WITH TRIPS & SHIPS ── */}
            <section className="svs-whybook-section">
                <div className="svs-whybook-container">
                    <span className="svs-eyebrow">YOUR LUXURY CRUISE SPECIALISTS</span>
                    <h2 className="svs-section-heading">Why Book with Trips &amp; Ships Luxury Travel?</h2>
                    <div className="svs-heading-separator-bar"></div>
                    <p className="svs-whybook-lead">Choosing between two exceptional cruise lines can be challenging. The luxury cruise specialists at Trips &amp; Ships Luxury Travel provide personalized guidance to help you select the itinerary, ship, and suite that best fit your travel goals.</p>
                    <p className="svs-whybook-sub">When you book with us, you'll enjoy:</p>

                    <div className="svs-whybook-grid">
                        {svsWhyBook.map(({ Icon, text }, idx) => (
                            <div key={idx} className="svs-whybook-item">
                                <div className="svs-whybook-icon"><Icon size={20} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES ── */}
            <section className="svs-editorial-section">
                <div className="svs-editorial-container">
                    <div className="svs-editorial-card">

                        <div className="svs-editorial-image-side">
                            <SvsImagePlaceholder label="Angela Hughes — Luxury Travel Expert" />
                            <div className="svs-editorial-stats">
                                <div className="svs-editorial-stat-item">
                                    <span className="svs-editorial-stat-number">40+</span>
                                    <span className="svs-editorial-stat-label">Years Experience</span>
                                </div>
                                <div className="svs-editorial-stat-divider"></div>
                                <div className="svs-editorial-stat-item">
                                    <span className="svs-editorial-stat-number">121+</span>
                                    <span className="svs-editorial-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="svs-editorial-content-side">
                            <div className="svs-editorial-badge">
                                <Award size={16} />
                                <span>Angela Hughes: Luxury Cruise Expertise You Can Trust</span>
                            </div>
                            <h2 className="svs-editorial-title">Trusted Guidance From an Industry Leader</h2>
                            <div className="svs-editorial-bar"></div>

                            <p className="svs-editorial-text">Angela Hughes has spent more than 40 years helping travelers experience the world's finest destinations.</p>

                            <div className="svs-editorial-services">
                                <span className="svs-editorial-services-label">Her credentials include:</span>
                                <div className="svs-editorial-services-list">
                                    {[
                                        'Founder of Luxury Travel University',
                                        'Traveled to more than 121 countries',
                                        'Travel Leaders Network Advisory Board Member',
                                        'Luxury Travel Influencer of the Year',
                                        'International travel educator',
                                        'Weekly travel columnist'
                                    ].map((item, idx) => (
                                        <div key={idx} className="svs-editorial-pill">
                                            <CheckCircle size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="svs-editorial-text">Her expertise ensures travelers receive trusted recommendations and exceptional service when planning luxury cruise vacations.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CONCLUSION ── */}
            <section className="svs-final-section">
                <div className="svs-final-bg"></div>
                <div className="svs-final-container">

                    <div className="svs-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="svs-final-eyebrow-text">CONCLUSION</span>
                    </div>

                    <h2 className="svs-final-heading">Two of the Finest Names in <br /> Ultra-Luxury Cruising</h2>
                    <div className="svs-final-separator"></div>

                    <div className="svs-final-card">
                        <p className="svs-final-body">Scenic and Seabourn represent two of the finest names in ultra-luxury cruising, each offering exceptional service, spacious suites, gourmet dining, and unforgettable destinations.</p>
                        <p className="svs-final-body">If you're looking for adventure, polar exploration, and comprehensive all-inclusive amenities, Scenic is an excellent choice. If your ideal vacation centers on refined yacht-style cruising, outstanding hospitality, and immersive global itineraries, Seabourn delivers an equally remarkable experience.</p>
                        <p className="svs-final-body svs-final-emphasis">No matter which cruise line you choose, both promise an extraordinary luxury vacation at sea.</p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="svs-faq-main-section">
                <div className="svs-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="svs-section-heading">Frequently Asked Questions</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    </div>
                    <div className="svs-faq-list-wrapper">
                        {svsFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="svs-faq-individual-item"
                                onClick={() => svsToggleFaq(index)}
                            >
                                <div className="svs-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="svs-faq-toggle-icon">{svsActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {svsActiveFaq === index && (
                                    <p className="svs-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="svs-cta-main-section">
                <div className="svs-cta-bg-pattern-layer"></div>
                <div className="svs-cta-content-relative">
                    <div className="svs-cta-inner-wrapper">

                        <h2 className="svs-cta-heading-white">Ready to Choose Your Ultra-Luxury Cruise?</h2>
                        <div className="svs-cta-separator-white"></div>

                        <p className="svs-cta-paragraph-white">
                            Whether Scenic's expedition-driven Discovery Yachts or Seabourn's yacht-like elegance calls to you, our specialists will match you with the ship, suite, and itinerary that fit your travel style.
                        </p>

                        <p className="svs-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers navigate every detail of ultra-luxury cruising.
                        </p>

                        <div className="svs-cta-considerations-box">
                            <span className="svs-cta-considerations-title">Whether you are considering:</span>
                            <ul className="svs-cta-considerations-list">
                                {[
                                    'Scenic Eclipse expedition voyages',
                                    'Seabourn ocean and expedition sailings',
                                    'Antarctica and polar itineraries',
                                    'Mediterranean and river cruise pairings',
                                    'Suite upgrades and exclusive offers'
                                ].map((item, idx) => (
                                    <li key={idx} className="svs-cta-considerations-item">
                                        <CheckCircle size={16} className="svs-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="svs-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="svs-cta-button-group">
                            <Link to='/contact' className="svs-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="svs-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Luxury Cruise Lines
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScenicVsSeabourn