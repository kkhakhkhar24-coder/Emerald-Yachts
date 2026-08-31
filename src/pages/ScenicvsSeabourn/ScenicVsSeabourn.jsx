import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './ScenicVsSeabourn.css'
import scenicDestImg from "../../assets/ScenicVsSeabourn/glacier-express-switzerland-scenic-railway-snowy-alps-winter.webp"
import seabournDestImg from "../../assets/ScenicVsSeabourn/santorini-greece-oia-blue-domed-churches-whitewashed-village-caldera-sea-view.webp"

import {
    Ship, MapPin, Users, CheckCircle, Compass, Sparkles, Anchor, Gem, Crown, Phone, LayoutList, Utensils, Sun, Award, Music, GraduationCap, Wifi, Wine, Image as ImageIcon, Waves, DollarSign, ShieldCheck, Leaf, Globe, Mountain
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
                    <div className="svs-intro-grid">
                        <div className="svs-intro-text-side">
                            <p className="svs-intro-lead">For travelers seeking exceptional service, elegant accommodations, gourmet dining, and immersive destinations, Scenic Luxury Cruises &amp; Tours and Seabourn consistently rank among the world's finest cruise lines.</p>
                            <div className="svs-heading-separator-bar"></div>
                            <p className="svs-intro-body">While both brands deliver all-inclusive luxury experiences with outstanding personalized service, they each have their own strengths. Scenic is renowned for its truly all-inclusive approach and expedition expertise aboard the Scenic Eclipse fleet, while Seabourn combines intimate yacht-like ships with award-winning hospitality and destination-focused itineraries.</p>
                            <p className="svs-intro-body">Whether you're dreaming of exploring Antarctica, sailing the Mediterranean, or discovering Alaska, this comparison will help you decide which cruise line best matches your travel style.</p>
                        </div>
                        <div className="svs-intro-image-side">
                            <SvsImagePlaceholder label="Luxury Expedition Cruise" />
                            <div className="svs-intro-image-caption">Scenic Eclipse &amp; Seabourn luxury cruise ships</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE TABLE ── */}
            <section className="svs-glance-section">
                <div className="svs-glance-container">
                    <div className="svs-glance-top">
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
                    <div className="svs-mid-cta-wrap">
                        <Link to='/contact' className="svs-mid-cta-button">
                            <Phone size={16} />
                            Book Your Discovery Call
                        </Link>
                    </div>
                </div>
            </section>

            <section className="svs-about-section">
                <div className="svs-about-container">
                    <div className="svs-about-grid">

                        <div className="svs-about-card svs-about-scenic">
                            <div className="svs-about-card-img">
                                <SvsImagePlaceholder label="Scenic Eclipse Discovery Yacht" />
                            </div>
                            <div className="svs-about-card-body">
                                <span className="svs-about-chip svs-about-chip-scenic">
                                    <Ship size={13} strokeWidth={2} />SCENIC
                                </span>
                                <h3 className="svs-about-card-title">Scenic Luxury Cruises</h3>
                                <div className="svs-about-card-divider"></div>
                                <p className="svs-about-card-text">Scenic has earned a global reputation for delivering truly all-inclusive luxury vacations.</p>
                                <p className="svs-about-card-text">Its ocean fleet includes Scenic Eclipse and Scenic Eclipse II — purpose-built Discovery Yachts for expedition cruising that combine luxury accommodations with advanced technology, allowing guests to explore destinations ranging from Antarctica to the Mediterranean.</p>
                                <p className="svs-about-card-text">Scenic also operates award-winning river cruises throughout Europe and Southeast Asia, making it a versatile choice for travelers who enjoy both ocean and river experiences.</p>
                            </div>
                        </div>

                        <div className="svs-about-card svs-about-seabourn">
                            <div className="svs-about-card-img">
                                <SvsImagePlaceholder label="Seabourn Ocean Suite Living" />
                            </div>
                            <div className="svs-about-card-body">
                                <span className="svs-about-chip svs-about-chip-seabourn">
                                    <Anchor size={13} strokeWidth={2} />SEABOURN
                                </span>
                                <h3 className="svs-about-card-title">Seabourn</h3>
                                <div className="svs-about-card-divider"></div>
                                <p className="svs-about-card-text">Seabourn has been a leader in ultra-luxury cruising for decades, offering intimate ships with exceptional personalized service.</p>
                                <p className="svs-about-card-text">Its fleet includes Seabourn Ovation, Seabourn Encore, Seabourn Quest, Seabourn Sojourn, Seabourn Pursuit, and Seabourn Venture.</p>
                                <p className="svs-about-card-text">Seabourn is known for creating a yacht-like atmosphere where guests enjoy sophisticated luxury, attentive hospitality, and destination-rich itineraries around the globe.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIPS & ONBOARD ATMOSPHERE ── */}
            <section className="svs-ships-section svs-bg-soft">
              <div className="svs-ships-container">
                <div className="svs-ships-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">ONBOARD EXPERIENCE</span>
                  <h2 className="svs-section-heading">Ships and Onboard Atmosphere</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-compare-intro">Scenic's Discovery Yachts are designed for exploration without sacrificing comfort, appealing to travelers seeking adventure combined with uncompromising luxury. Seabourn's ships emphasize elegant relaxation and personalized service in a refined, social, and quietly luxurious atmosphere.</p>
                </div>
                <div className="svs-ships-grid">
                  <div className="svs-ships-card svs-ships-scenic">
                    <div className="svs-ships-image">
                      <SvsImagePlaceholder label="Scenic Eclipse Discovery Yacht" />
                    </div>
                    <div className="svs-ships-body">
                      <div className="svs-ships-header">
                        <Ship size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <ul className="svs-ships-list">
                        {svsShipsScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-ships-card svs-ships-seabourn">
                    <div className="svs-ships-image">
                      <SvsImagePlaceholder label="Seabourn Yacht-Style Living" />
                    </div>
                    <div className="svs-ships-body">
                      <div className="svs-ships-header">
                        <Ship size={18} />
                        <h3>Seabourn</h3>
                      </div>
                      <ul className="svs-ships-list">
                        {svsShipsSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ── */}
            <section className="svs-suites-section">
              <div className="svs-suites-container">
                <div className="svs-suites-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">STAYING ABOARD</span>
                  <h2 className="svs-section-heading">Suites and Accommodations</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-compare-intro">Every suite on both cruise lines is designed for comfort, privacy, and elegance — with higher categories offering expanded living spaces and exclusive privileges.</p>
                </div>
                <div className="svs-suites-grid">
                  <div className="svs-suites-card svs-suites-scenic">
                    <div className="svs-suites-image">
                      <SvsImagePlaceholder label="Scenic Suite & Accommodation" />
                    </div>
                    <div className="svs-suites-body">
                      <div className="svs-suites-header">
                        <Crown size={18} />
                        <h3>Scenic — Every Suite Includes</h3>
                      </div>
                      <ul className="svs-suites-list">
                        {svsSuitesScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-suites-card svs-suites-seabourn">
                    <div className="svs-suites-image">
                      <SvsImagePlaceholder label="Seabourn Suite Accommodation" />
                    </div>
                    <div className="svs-suites-body">
                      <div className="svs-suites-header">
                        <Crown size={18} />
                        <h3>Seabourn — Every Suite Includes</h3>
                      </div>
                      <ul className="svs-suites-list">
                        {svsSuitesSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── DINING ── */}
            <section className="svs-dining-section svs-bg-soft">
              <div className="svs-dining-container">
                <div className="svs-dining-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">CULINARY PROGRAM</span>
                  <h2 className="svs-section-heading">Dining Experience</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-compare-intro">All meals and specialty dining venues are included on Scenic voyages, while Seabourn is widely recognized for its exceptional culinary program featuring regional ingredients and destination-inspired cuisine.</p>
                </div>
                <div className="svs-dining-grid">
                  <div className="svs-dining-card svs-dining-scenic">
                    <div className="svs-dining-image">
                      <SvsImagePlaceholder label="Scenic Fine Dining" />
                    </div>
                    <div className="svs-dining-body">
                      <div className="svs-dining-header">
                        <Utensils size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <ul className="svs-dining-list">
                        {svsDiningScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-dining-card svs-dining-seabourn">
                    <div className="svs-dining-image">
                      <SvsImagePlaceholder label="Seabourn Dining Experience" />
                    </div>
                    <div className="svs-dining-body">
                      <div className="svs-dining-header">
                        <Utensils size={18} />
                        <h3>Seabourn</h3>
                      </div>
                      <ul className="svs-dining-list">
                        {svsDiningSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="svs-dest-section">
              <div className="svs-dest-container">
                <div className="svs-dest-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">WHERE YOU'LL SAIL</span>
                  <h2 className="svs-section-heading">Destinations</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-compare-intro">Scenic's expedition cruises are among the most comprehensive in the luxury market, while Seabourn sails to more than 400 destinations worldwide with unique ports and immersive destination experiences.</p>
                </div>
                <div className="svs-dest-grid">
                  <div className="svs-dest-card svs-dest-scenic">
                    <div className="svs-dest-image">
                      <img src={scenicDestImg} alt="Scenic Global Destinations" className="svs-dest-img" />
                    </div>
                    <div className="svs-dest-body">
                      <div className="svs-dest-header">
                        <MapPin size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <div className="svs-tag-cloud">
                        {svsDestinationsScenic.map((item, idx) => (
                          <span key={idx} className="svs-tag svs-tag-scenic">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="svs-dest-card svs-dest-seabourn">
                    <div className="svs-dest-image">
                      <img src={seabournDestImg} alt="Seabourn Itineraries" className="svs-dest-img" />
                    </div>
                    <div className="svs-dest-body">
                      <div className="svs-dest-header">
                        <MapPin size={18} />
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
              </div>
            </section>

            {/* ── EXPEDITION CRUISING ── */}
            <section className="svs-expedition-section svs-bg-soft">
              <div className="svs-expedition-container">
                <div className="svs-expedition-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">ADVENTURE AT SEA</span>
                  <h2 className="svs-section-heading">Expedition Cruising</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-compare-intro">Both cruise lines excel in expedition travel, but their experiences differ. Both brands provide exceptional expedition experiences with knowledgeable guides and immersive exploration.</p>
                </div>
                <div className="svs-expedition-grid">
                  <div className="svs-expedition-card svs-expedition-scenic">
                    <div className="svs-expedition-image">
                      <SvsImagePlaceholder label="Scenic Expedition Voyage" />
                    </div>
                    <div className="svs-expedition-body">
                      <div className="svs-expedition-header">
                        <Compass size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <ul className="svs-expedition-list">
                        {svsExpeditionScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-expedition-card svs-expedition-seabourn">
                    <div className="svs-expedition-image">
                      <SvsImagePlaceholder label="Seabourn Expedition Voyage" />
                    </div>
                    <div className="svs-expedition-body">
                      <div className="svs-expedition-header">
                        <Compass size={18} />
                        <h3>Seabourn</h3>
                      </div>
                      <ul className="svs-expedition-list">
                        {svsExpeditionSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── INCLUDED AMENITIES ── */}
            <section className="svs-amenities-section">
              <div className="svs-amenities-container">
                <div className="svs-amenities-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">WHAT'S INCLUDED</span>
                  <h2 className="svs-section-heading">Included Amenities</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                </div>
                <div className="svs-amenities-grid">
                  <div className="svs-amenities-card svs-amenities-scenic">
                    <div className="svs-amenities-image">
                      <SvsImagePlaceholder label="Scenic All-Inclusive Amenities" />
                    </div>
                    <div className="svs-amenities-body">
                      <div className="svs-amenities-header">
                        <Gem size={18} />
                        <h3>Scenic Includes</h3>
                      </div>
                      <div className="svs-amenities-list">
                        {svsIncludedScenic.map(({ Icon, text }, idx) => (
                          <div key={idx} className="svs-amenities-item">
                            <div className="svs-amenities-icon"><Icon size={16} /></div>
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="svs-amenities-card svs-amenities-seabourn">
                    <div className="svs-amenities-image">
                      <SvsImagePlaceholder label="Seabourn Premium Amenities" />
                    </div>
                    <div className="svs-amenities-body">
                      <div className="svs-amenities-header">
                        <Gem size={18} />
                        <h3>Seabourn Includes</h3>
                      </div>
                      <div className="svs-amenities-list">
                        {svsIncludedSeabourn.map(({ Icon, text }, idx) => (
                          <div key={idx} className="svs-amenities-item">
                            <div className="svs-amenities-icon"><Icon size={16} /></div>
                            <span>{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── WELLNESS ── */}
            <section className="svs-wellness-section svs-bg-soft">
              <div className="svs-wellness-container">
                <div className="svs-wellness-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">MIND &amp; BODY</span>
                  <h2 className="svs-section-heading">Wellness and Relaxation</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                </div>
                <div className="svs-wellness-grid">
                  <div className="svs-wellness-card svs-wellness-scenic">
                    <div className="svs-wellness-image">
                      <SvsImagePlaceholder label="Scenic Spa & Wellness" />
                    </div>
                    <div className="svs-wellness-body">
                      <div className="svs-wellness-header">
                        <Sun size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <ul className="svs-wellness-list">
                        {svsWellnessScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-wellness-card svs-wellness-seabourn">
                    <div className="svs-wellness-image">
                      <SvsImagePlaceholder label="Seabourn Wellness Center" />
                    </div>
                    <div className="svs-wellness-body">
                      <div className="svs-wellness-header">
                        <Sun size={18} />
                        <h3>Seabourn</h3>
                      </div>
                      <ul className="svs-wellness-list">
                        {svsWellnessSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="svs-entertainment-section">
              <div className="svs-entertainment-container">
                <div className="svs-entertainment-top" style={{ textAlign: 'center' }}>
                  <span className="svs-eyebrow">EVENINGS ONBOARD</span>
                  <h2 className="svs-section-heading">Entertainment</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-compare-intro">Scenic entertainment emphasizes cultural enrichment, while Seabourn offers a broader mix of performances — though the onboard atmosphere on both remains elegant rather than high-energy.</p>
                </div>
                <div className="svs-entertainment-grid">
                  <div className="svs-entertainment-card svs-entertainment-scenic">
                    <div className="svs-entertainment-image">
                      <SvsImagePlaceholder label="Scenic Onboard Entertainment" />
                    </div>
                    <div className="svs-entertainment-body">
                      <div className="svs-entertainment-header">
                        <Music size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <ul className="svs-entertainment-list">
                        {svsEntertainmentScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-entertainment-card svs-entertainment-seabourn">
                    <div className="svs-entertainment-image">
                      <SvsImagePlaceholder label="Seabourn Evening Entertainment" />
                    </div>
                    <div className="svs-entertainment-body">
                      <div className="svs-entertainment-header">
                        <Music size={18} />
                        <h3>Seabourn</h3>
                      </div>
                      <ul className="svs-entertainment-list">
                        {svsEntertainmentSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SERVICE COMPARISON ── */}
            <section className="svs-service-section">
              <div className="svs-service-container">
                <div className="svs-service-top">
                  <span className="svs-eyebrow">HOSPITALITY</span>
                  <h2 className="svs-section-heading">Service Comparison</h2>
                  <div className="svs-heading-separator-bar svs-bar-centered"></div>
                  <p className="svs-service-intro">Both Scenic and Seabourn consistently receive high marks for personalized service.</p>
                </div>
                <div className="svs-service-grid">
                  <div className="svs-service-card svs-service-scenic">
                    <div className="svs-service-image">
                      <SvsImagePlaceholder label="Scenic Personalized Service" />
                    </div>
                    <div className="svs-service-body">
                      <div className="svs-service-header">
                        <Users size={18} />
                        <h3>Scenic</h3>
                      </div>
                      <ul className="svs-service-list">
                        <li><CheckCircle size={15} /><span>Butler service for every suite</span></li>
                        <li><CheckCircle size={15} /><span>Intimate guest-to-crew ratio</span></li>
                        <li><CheckCircle size={15} /><span>Personalized luxury</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="svs-service-card svs-service-seabourn">
                    <div className="svs-service-image">
                      <SvsImagePlaceholder label="Seabourn Hospitality" />
                    </div>
                    <div className="svs-service-body">
                      <div className="svs-service-header">
                        <Users size={18} />
                        <h3>Seabourn</h3>
                      </div>
                      <ul className="svs-service-list">
                        <li><CheckCircle size={15} /><span>Attentive suite hosts</span></li>
                        <li><CheckCircle size={15} /><span>Friendly and intuitive hospitality</span></li>
                        <li><CheckCircle size={15} /><span>Relaxed yet refined service</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── PRICING ── */}
            <section className="svs-pricing-section">
                <div className="svs-pricing-container">
                    <div className="svs-pricing-top">
                        <span className="svs-eyebrow">INVESTMENT</span>
                        <h2 className="svs-section-heading">Pricing</h2>
                        <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    </div>
                    <div className="svs-pricing-cards">
                        <div className="svs-pricing-card svs-pricing-scenic">
                            <div className="svs-pricing-card-icon"><Gem size={22} /></div>
                            <h3 className="svs-pricing-card-title">Scenic</h3>
                            <p className="svs-pricing-card-text">Commands premium pricing for expedition voyages due to its advanced Discovery Yacht features and all-inclusive offerings.</p>
                        </div>
                        <div className="svs-pricing-card svs-pricing-seabourn">
                            <div className="svs-pricing-card-icon"><Waves size={22} /></div>
                            <h3 className="svs-pricing-card-title">Seabourn</h3>
                            <p className="svs-pricing-card-text">Provides excellent value with elegant accommodations, exceptional dining, and immersive itineraries across its fleet.</p>
                        </div>
                    </div>
                    <p className="svs-pricing-footer">The best value depends on your preferred itinerary, travel season, and suite category.</p>
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
                  <div className="svs-choose-card svs-choose-scenic">
                    <div className="svs-choose-image">
                      <SvsImagePlaceholder label="Who Should Choose Scenic?" />
                    </div>
                    <div className="svs-choose-body">
                      <div className="svs-choose-header">
                        <Compass size={18} />
                        <h3>Who Should Choose Scenic?</h3>
                      </div>
                      <ul className="svs-choose-list">
                        {svsChooseScenic.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} style={{ color: '#16a34a' }} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="svs-choose-card svs-choose-seabourn">
                    <div className="svs-choose-image">
                      <SvsImagePlaceholder label="Who Should Choose Seabourn?" />
                    </div>
                    <div className="svs-choose-body">
                      <div className="svs-choose-header">
                        <Waves size={18} />
                        <h3>Who Should Choose Seabourn?</h3>
                      </div>
                      <ul className="svs-choose-list">
                        {svsChooseSeabourn.map((item, idx) => (
                          <li key={idx}><CheckCircle size={15} style={{ color: '#16a34a' }} /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  </div>
                    <div className="svs-mid-cta-wrap">
                        <Link to='/contact' className="svs-mid-cta-button">
                            <Phone size={16} />
                            Ready to Book? Let's Talk
                        </Link>
                    </div>
                </div>
              </section>

              {/* ── WHY BOOK WITH TRIPS & SHIPS ── */}
            <section className="svs-whybook-section">
                <div className="svs-whybook-container">
                    <span className="svs-eyebrow">YOUR LUXURY CRUISE SPECIALISTS</span>
                    <h2 className="svs-section-heading">Why Book with Trips &amp; Ships Luxury Travel?</h2>
                    <div className="svs-heading-separator-bar svs-bar-centered"></div>
                    <p className="svs-whybook-lead">Choosing between two exceptional cruise lines can be challenging. The luxury cruise specialists at Trips &amp; Ships Luxury Travel provide personalized guidance to help you select the itinerary, ship, and suite that best fit your travel goals.</p>
                    <p className="svs-whybook-sub">When you book with us, you'll enjoy:</p>

                    <div className="svs-whybook-grid">
                        {svsWhyBook.map(({ Icon, text }, idx) => (
                            <div key={idx} className="svs-whybook-item">
                                <div className="svs-whybook-icon"><Icon size={22} /></div>
                                <span className="svs-whybook-text">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
                {/* EXPERT INSIGHT — Celebrity Cruises: Complete Guide inspired, tight */}
                <section id="svs-growth-insight" className="svs-expert-insight-section">
                    <div className="svs-expert-insight-container">
                        <div className="svs-expert-portrait-panel">
                            <div className="svs-expert-img-frame">
                                <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="svs-expert-img" />
                                <div className="svs-expert-img-overlay"></div>
                                <span className="svs-expert-badge">EXPERT ADVISOR</span>
                            </div>
                            <div className="svs-expert-stats-strip">
                                <div className="svs-expert-stat-box">
                                    <div className="svs-expert-stat-num">40+</div>
                                    <div className="svs-expert-stat-lbl">Years Experience</div>
                                </div>
                                <div className="svs-expert-stat-box">
                                    <div className="svs-expert-stat-num">121+</div>
                                    <div className="svs-expert-stat-lbl">Countries Visited</div>
                                </div>
                            </div>
                        </div>

                        <div className="svs-expert-content-panel">
                            <div className="svs-expert-eyebrow-row">
                                <Award size={14} />
                                <span className="svs-eyebrow">Expert Insight from Angela Hughes</span>
                            </div>
                            <h2 className="svs-editorial-title">
                                Why Modern Luxury Travelers Are Choosing Scenic
                            </h2>
                            <div className="svs-heading-separator-bar"></div>

                            <div className="svs-expert-quote-card">
                                <span className="svs-expert-quote-mark">“</span>
                                <p className="svs-expert-quote-text svs-expert-quote">
                                    According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                                </p>
                            </div>

                            <div className="svs-expert-priorities">
                                <h5 className="svs-priorities-title">Scenic travelers consistently prioritize:</h5>
                                <div className="svs-expert-pills">
                                    {[
                                        'Polar discovery yachting',
                                        'Truly all-inclusive luxury',
                                        'Butler service for every suite',
                                        'Helicopter & submarine features',
                                        'Up to 10 dining experiences',
                                        'Immersive Zodiac excursions'
                                    ].map((pill) => (
                                        <span key={pill} className="svs-expert-pill">
                                            <CheckCircle size={12} />
                                            <span>{pill}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="svs-editorial-body-para svs-expert-quote">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="svs-expert-footer-bio">
                                <p className="svs-expert-bio">Her expertise spans ultra-luxury yachting, polar expeditions, butler services, luxury cruise planning and custom expedition travel — backed by 40+ years and 121+ countries visited.</p>
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
                <div className="svs-cta-bg-gradient"></div>
                <div className="svs-cta-bg-orb svs-cta-orb-1"></div>
                <div className="svs-cta-bg-orb svs-cta-orb-2"></div>
                <div className="svs-cta-bg-orb svs-cta-orb-3"></div>

                <div className="svs-cta-content-relative">
                    <div className="svs-cta-inner-wrapper">

                        <div className="svs-cta-eyebrow">
                            <Compass size={16} />
                            <span>PERSONALIZED VOYAGE PLANNING</span>
                        </div>

                        <h2 className="svs-cta-heading-white">Ready to Choose Your Ultra-Luxury Cruise?</h2>
                        <div className="svs-cta-heading-line"></div>

                        <p className="svs-cta-paragraph-white">
                            Whether Scenic's expedition-driven Discovery Yachts or Seabourn's yacht-like elegance calls to you, our specialists will match you with the ship, suite, and itinerary that fit your travel style.
                        </p>

                        <div className="svs-cta-highlights">
                            {[
                                { icon: Ship, text: 'Scenic Eclipse expedition voyages' },
                                { icon: Anchor, text: 'Seabourn ocean and expedition sailings' },
                                { icon: Compass, text: 'Antarctica and polar itineraries' },
                                { icon: Leaf, text: 'Mediterranean and river cruise pairings' },
                                { icon: Gem, text: 'Suite upgrades and exclusive offers' }
                            ].map(({ icon: Icon, text }, idx) => (
                                <div key={idx} className="svs-cta-highlight-item">
                                    <div className="svs-cta-highlight-icon"><Icon size={16} /></div>
                                    <span className="svs-cta-highlight-text">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="svs-cta-actions">
                            <Link to='/contact' className="svs-primary-cta-button">
                                <Phone size={18} />
                                Plan My Perfect Voyage
                            </Link>
                        </div>

                        <div className="svs-cta-trust-grid">
                            <div className="svs-cta-trust-card">
                                <div className="svs-cta-trust-icon-wrap">
                                    <Award size={20} />
                                </div>
                                <div className="svs-cta-trust-card-content">
                                    <span className="svs-cta-trust-label">40+ Years</span>
                                    <span className="svs-cta-trust-desc">of luxury travel expertise</span>
                                </div>
                            </div>
                            <div className="svs-cta-trust-card">
                                <div className="svs-cta-trust-icon-wrap">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="svs-cta-trust-card-content">
                                    <span className="svs-cta-trust-label">Dedicated Support</span>
                                    <span className="svs-cta-trust-desc">throughout your journey</span>
                                </div>
                            </div>
                            <div className="svs-cta-trust-card">
                                <div className="svs-cta-trust-icon-wrap">
                                    <Sparkles size={20} />
                                </div>
                                <div className="svs-cta-trust-card-content">
                                    <span className="svs-cta-trust-label">Exclusive Offers</span>
                                    <span className="svs-cta-trust-desc">and premium amenities</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ScenicVsSeabourn
