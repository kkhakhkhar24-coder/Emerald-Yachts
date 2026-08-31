import ProfilePictureAH from "../../assets/Media (2).jpg"
import Navbar from '../../components/Navbar/Navbar'
import './ScenicvsPonant.css'
import scenicDestImg from "../../assets/ScenicvsPonant/glacier-express-switzerland-scenic-railway-snowy-alps-winter.webp"
import ponantDestImg from "../../assets/ScenicvsPonant/santorini-greece-oia-blue-domed-churches-whitewashed-village-caldera-sea-view.webp"

import {
    Ship, MapPin, Users, CheckCircle, Compass, Sparkles, Anchor, Gem, ChevronRight, Crown, Phone, LayoutList, Utensils, Sun, Award, Music, GraduationCap, Wifi, Wine, Image as ImageIcon, Waves, DollarSign, ShieldCheck, Leaf, Globe, Mountain
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

/* ── Reusable image placeholder (swap for real photography later) ── */
function SvpImagePlaceholder({ label = 'Image Placeholder', tone = '' }) {
    return (
        <div className={`svp-img-placeholder ${tone}`}>
            <ImageIcon size={30} strokeWidth={1.5} />
            <span>{label}</span>
        </div>
    )
}

function ScenicVsPonant() {

    const [svpCurrentHero, setSvpCurrentHero] = useState(0)
    const svpHeroSlides = [
        'Scenic Eclipse Discovery Yacht',
        'Ponant French Expedition Ship',
        'Polar & Remote Expedition Voyages'
    ]

    useEffect(() => {
        const svpTimer = setInterval(() => {
            setSvpCurrentHero(prev => (prev + 1) % svpHeroSlides.length)
        }, 5000)
        return () => clearInterval(svpTimer)
    }, [svpHeroSlides.length])

    const [svpActiveFaq, setSvpActiveFaq] = useState(null)
    const svpToggleFaq = i => setSvpActiveFaq(svpActiveFaq === i ? null : i)

    /* ── At-a-Glance comparison table ── */
    const svpGlanceRows = [
        { feature: 'Cruise Style', scenic: 'Ultra-Luxury Ocean & Expedition', ponant: 'Luxury Expedition & Small Ship Cruises' },
        { feature: 'Fleet', scenic: 'Scenic Eclipse I & II', ponant: '13+ Luxury Expedition Ships' },
        { feature: 'Butler Service', scenic: 'Every Suite', ponant: 'Select Suite Categories' },
        { feature: 'Specialty Dining', scenic: 'Included', ponant: 'Included' },
        { feature: 'Premium Beverages', scenic: 'Included', ponant: 'Included' },
        { feature: 'Wi-Fi', scenic: 'Included', ponant: 'Included' },
        { feature: 'Gratuities', scenic: 'Included', ponant: 'Included' },
        { feature: 'Expedition Cruises', scenic: 'Yes', ponant: 'Yes' },
        { feature: 'Helicopter & Submarine', scenic: 'Select Voyages', ponant: 'No' },
        { feature: 'Luxury Level', scenic: 'Ultra-Luxury', ponant: 'Luxury' }
    ]

    /* ── Ships & Onboard Experience ── */
    const svpShipsScenic = ['Contemporary luxury design', 'Spacious observation lounges', 'Helicopter excursions (select voyages)', 'Submarine experiences (select voyages)', 'Multiple dining venues', 'Luxury spa and wellness facilities']
    const svpShipsPonant = ['French-inspired interiors', 'Panoramic observation lounges', 'Outdoor viewing decks', 'Boutique luxury atmosphere', 'Small passenger capacity', 'Personalized service']

    /* ── Suites & Accommodations ── */
    const svpSuitesScenic = ['Butler service', 'Private veranda', 'Luxury bedding', 'Premium minibar', 'Spacious marble bathroom', 'Personalized amenities']
    const svpSuitesPonant = ['Ocean views or private balconies', 'Premium bedding', 'Modern bathrooms', 'Luxury bath products', 'French-inspired décor', 'Spacious living areas in higher-category suites']

    /* ── Dining ── */
    const svpDiningScenic = ['Fine dining restaurants', 'Specialty venues', 'Casual dining', "Chef's Table experiences", 'In-suite dining', 'Every dining venue included in the fare']
    const svpDiningPonant = ['Elegant fine dining', 'French cuisine', 'International specialties', 'Regional dishes inspired by destinations', 'Open seating dining', 'Outdoor dining areas']

    /* ── Destinations ── */
    const svpDestinationsScenic = ['Antarctica', 'Arctic', 'Greenland', 'Iceland', 'Norwegian Fjords', 'Mediterranean', 'South Pacific', 'Australia', 'New Zealand']
    const svpDestinationsPonant = ['Antarctica', 'Arctic', 'Greenland', 'Iceland', 'Mediterranean', 'Alaska', 'French Polynesia', 'Japan', 'Australia', 'Kimberley Region']

    /* ── Expedition Experience ── */
    const svpExpeditionScenic = ['Zodiac excursions', 'Polar exploration', 'Helicopter flights (select voyages)', 'Submarine dives (select voyages)', 'Expert expedition leaders', 'Wildlife viewing', 'Educational presentations']
    const svpExpeditionPonant = ['Zodiac landings', 'Naturalist-led excursions', 'Wildlife encounters', 'Cultural exploration', 'Polar expeditions', 'Scientific partnerships', 'Environmental education']

    /* ── Included Amenities ── */
    const svpIncludedScenic = [
        { Icon: Crown, text: 'Butler service' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: Utensils, text: 'Fine dining' },
        { Icon: Sparkles, text: 'Specialty restaurants' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: Gem, text: 'Minibar' },
        { Icon: Ship, text: 'Airport transfers on many itineraries' }
    ]
    const svpIncludedPonant = [
        { Icon: Utensils, text: 'Gourmet dining' },
        { Icon: Wine, text: 'Premium beverages' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: DollarSign, text: 'Gratuities' },
        { Icon: Compass, text: 'Expedition activities' },
        { Icon: GraduationCap, text: 'Enrichment programs' },
        { Icon: Music, text: 'Entertainment' },
        { Icon: MapPin, text: 'Selected shore experiences' }
    ]

    /* ── Wellness ── */
    const svpWellnessScenic = ['Full-service spa', 'Sauna', 'Steam room', 'Yoga', 'Fitness center', 'Wellness treatments']
    const svpWellnessPonant = ['Spa', 'Fitness center', 'Beauty treatments', 'Relaxation lounge', 'Outdoor pool (select ships)']

    /* ── Entertainment ── */
    const svpEntertainmentScenic = ['Destination lectures', 'Expedition briefings', 'Live music', 'Guest speakers', 'Culinary demonstrations']
    const svpEntertainmentPonant = ['French cultural entertainment', 'Live music', 'Destination presentations', 'Guest lecturers', 'Educational programming']

    /* ── Who should choose ── */
    const svpChooseScenic = [
        'Want a truly all-inclusive luxury experience',
        'Plan an expedition to Antarctica or the Arctic',
        'Value butler service in every suite',
        'Want optional helicopter and submarine experiences',
        'Prefer contemporary Discovery Yachts'
    ]
    const svpChoosePonant = [
        'Appreciate French elegance and cuisine',
        'Prefer intimate boutique ships',
        'Enjoy cultural immersion',
        'Want environmentally focused expeditions',
        'Like smaller guest capacities'
    ]

    /* ── Why book with T&S ── */
    const svpWhyBook = [
        { Icon: Compass, text: 'Personalized cruise recommendations' },
        { Icon: MapPin, text: 'Expert expedition planning' },
        { Icon: Gem, text: 'Exclusive promotions and amenities' },
        { Icon: Ship, text: 'Pre- and post-cruise travel arrangements' },
        { Icon: ShieldCheck, text: 'Dedicated support throughout your journey' }
    ]

    /* ── FAQ ── */
    const svpFaqs = [
        { question: 'Is Scenic more luxurious than Ponant?', answer: 'Scenic is generally considered more ultra-luxury due to its all-inclusive approach, butler service in every suite, and innovative Discovery Yachts. Ponant offers refined luxury with a distinctive French style.' },
        { question: 'Which cruise line is better for expedition cruising?', answer: 'Both are excellent. Scenic emphasizes cutting-edge exploration with helicopters and submarines on select voyages, while Ponant focuses on authentic expeditions, environmental stewardship, and cultural discovery.' },
        { question: 'Does Scenic include butler service?', answer: 'Yes. Every Scenic suite includes personalized butler service.' },
        { question: 'Does Ponant offer butler service?', answer: 'Ponant provides enhanced personalized service in select suite categories, though butler service is not available across all accommodations.' },
        { question: 'Are drinks included on both cruise lines?', answer: 'Yes. Premium beverages are included on both Scenic and Ponant cruises.' },
        { question: 'Which cruise line has better dining?', answer: 'Scenic offers exceptional all-inclusive gourmet dining, while Ponant is celebrated for its French-inspired cuisine and elegant culinary experiences.' },
        { question: 'Does Ponant sail to Antarctica?', answer: 'Yes. Ponant operates luxury expedition cruises to Antarctica and other polar destinations.' },
        { question: 'Does Scenic offer helicopter excursions?', answer: 'Yes. Scenic Eclipse offers helicopter excursions on select voyages where operational conditions permit.' },
        { question: 'Is Wi-Fi included?', answer: 'Yes. Complimentary Wi-Fi is included on both cruise lines.' },
        { question: 'Which cruise line is better for couples?', answer: 'Both are excellent choices for couples seeking intimate luxury and extraordinary destinations.' },
        { question: 'Does Scenic operate river cruises?', answer: 'Yes. Scenic also offers luxury river cruises throughout Europe and Southeast Asia.' },
        { question: 'Are gratuities included?', answer: 'Yes. Gratuities are included in the fare on both Scenic and Ponant cruises.' },
        { question: 'Which cruise line visits more remote destinations?', answer: 'Both cruise lines specialize in remote destinations, though Ponant has an extensive portfolio of culturally focused expedition itineraries.' },
        { question: 'Which cruise line has a more intimate atmosphere?', answer: "Ponant's smaller ships provide a boutique, intimate ambiance, while Scenic combines luxury with slightly larger Discovery Yachts." },
        { question: 'Which cruise line is best overall?', answer: 'Scenic is ideal for travelers seeking all-inclusive luxury and advanced expedition technology, while Ponant is perfect for guests who appreciate French hospitality, cultural immersion, and elegant small-ship cruising.' }
    ]

    const svpSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/scenic-vs-ponant",
                "name": "Scenic vs Ponant",
                "url": "https://www.tripsandships.com/scenic-vs-ponant",
                "description": "Compare Scenic and Ponant to discover which luxury expedition cruise line offers the best ships, dining, suites, destinations, and exploration experiences.",
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
                "description": "Luxury travel advisors specializing in luxury ocean, river, and expedition cruises worldwide."
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
                "name": "Scenic vs Ponant",
                "about": [
                    { "@type": "Brand", "name": "Scenic Luxury Cruises & Tours" },
                    { "@type": "Brand", "name": "Ponant" }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Cruise Comparisons", "item": "https://www.tripsandships.com/cruise-comparisons" },
                    { "@type": "ListItem", "position": 3, "name": "Scenic vs Ponant", "item": "https://www.tripsandships.com/scenic-vs-ponant" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": svpFaqs.map(f => ({
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
                <title>Scenic vs Ponant | Which Luxury Expedition Cruise Line Is Best?</title>
                <meta name="title" content="Scenic vs Ponant | Which Luxury Expedition Cruise Line Is Best?" />
                <meta name="description" content="Compare Scenic vs Ponant cruises, including ships, expedition experiences, dining, suites, destinations, pricing, and inclusions to choose the ideal luxury cruise." />
                <meta name="keywords" content="Scenic vs Ponant, Scenic vs Ponant Cruises, Scenic Eclipse vs Ponant, Ponant Cruise Review, Luxury Expedition Cruise Comparison, Scenic Luxury Cruises, Ponant Luxury Cruises, Best Expedition Cruise Line, Polar Expedition Cruises" />
                <script type="application/ld+json">{JSON.stringify(svpSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="svp-hero-section">
                {svpHeroSlides.map((label, idx) => (
                    <div
                        key={idx}
                        className={`svp-hero-background svp-hero-bg-${idx % 3} ${svpCurrentHero === idx ? 'svp-active' : ''}`}
                    />
                ))}
                <div className="svp-hero-overlay-layer"></div>
                <div className="svp-hero-content-wrapper">
                    <div className="svp-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Luxury Expedition Comparison · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="svp-hero-main-title">
                        Scenic vs Ponant: <br className="svp-hero-break" /> Which Luxury Expedition Cruise Line Is Right for You?
                    </h1>
                    <p className="svp-hero-subtitle-text">
                        Compare ships, suites, dining, destinations, and expedition experiences to find the ideal luxury expedition cruise line for your journey.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="svp-intro-section">
                <div className="svp-intro-container">
                    <div className="svp-intro-grid">
                        <div className="svp-intro-text-side">
                            <p className="svp-intro-lead">For travelers seeking extraordinary adventures without sacrificing comfort, Scenic Luxury Cruises &amp; Tours and Ponant stand among the world's leading luxury expedition cruise lines.</p>
                            <div className="svp-heading-separator-bar"></div>
                            <p className="svp-intro-body">Both brands combine small-ship luxury with immersive exploration, taking guests to remote destinations such as Antarctica, the Arctic, Iceland, and the South Pacific. However, their onboard atmosphere, expedition style, and luxury experience differ in several important ways.</p>
                            <p className="svp-intro-body">Scenic is known for its truly all-inclusive Discovery Yachts featuring helicopters and a submarine on select voyages, while Ponant blends French sophistication with authentic expedition travel aboard elegant small ships. This comparison will help you determine which cruise line best aligns with your travel preferences.</p>
                        </div>
                        <div className="svp-intro-image-side">
                            <SvpImagePlaceholder label="Luxury Expedition Cruise" />
                            <div className="svp-intro-image-caption">Scenic Eclipse &amp; Ponant luxury expedition ships</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AT A GLANCE TABLE ── */}
            <section className="svp-glance-section">
                <div className="svp-glance-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="svp-eyebrow">SIDE-BY-SIDE COMPARISON</span>
                        <h2 className="svp-section-heading">Scenic vs Ponant at a Glance</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>

                    <div className="svp-glance-table-wrap">
                        <table className="svp-glance-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Scenic</th>
                                    <th>Ponant</th>
                                </tr>
                            </thead>
                            <tbody>
                                {svpGlanceRows.map((row, idx) => (
                                    <tr key={idx}>
                                        <td data-label="Feature" className="svp-glance-feature-cell">{row.feature}</td>
                                        <td data-label="Scenic">{row.scenic}</td>
                                        <td data-label="Ponant">{row.ponant}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile card fallback */}
                    <div className="svp-glance-cards">
                        {svpGlanceRows.map((row, idx) => (
                            <div key={idx} className="svp-glance-card">
                                <div className="svp-glance-card-feature">{row.feature}</div>
                                <div className="svp-glance-card-row">
                                    <span className="svp-glance-card-label">Scenic</span>
                                    <span className="svp-glance-card-value">{row.scenic}</span>
                                </div>
                                <div className="svp-glance-card-row">
                                    <span className="svp-glance-card-label">Ponant</span>
                                    <span className="svp-glance-card-value">{row.ponant}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="svp-mid-cta-wrap">
                        <Link to='/contact' className="svp-mid-cta-button">
                            <Phone size={16} />
                            Book Your Discovery Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── ABOUT SCENIC / PONANT ── */}
            <section className="svp-about-section">
                <div className="svp-about-container">
                    <div className="svp-about-grid">

                        <div className="svp-about-card svp-about-scenic">
                            <div className="svp-about-card-img">
                                <SvpImagePlaceholder label="Scenic Eclipse Yacht" />
                            </div>
                            <div className="svp-about-card-body">
                                <span className="svp-about-chip svp-about-chip-scenic">
                                    <Ship size={13} strokeWidth={2} />SCENIC
                                </span>
                                <h3 className="svp-about-card-title">Scenic Luxury Cruises</h3>
                                <div className="svp-about-card-divider"></div>
                                <p className="svp-about-card-text">Scenic has become a leader in ultra-luxury cruising through its all-inclusive philosophy and innovative Discovery Yachts.</p>
                                <p className="svp-about-card-text">Its ocean fleet includes Scenic Eclipse and Scenic Eclipse II — purpose-built expedition yachts combining luxurious accommodations with advanced exploration technology, allowing guests to experience some of the world's most remote destinations while enjoying five-star service.</p>
                                <p className="svp-about-card-text">Scenic also operates award-winning river cruises throughout Europe and Southeast Asia.</p>
                            </div>
                        </div>

                        <div className="svp-about-card svp-about-ponant">
                            <div className="svp-about-card-img">
                                <SvpImagePlaceholder label="Ponant Expedition Ship" />
                            </div>
                            <div className="svp-about-card-body">
                                <span className="svp-about-chip svp-about-chip-ponant">
                                    <Anchor size={13} strokeWidth={2} />PONANT
                                </span>
                                <h3 className="svp-about-card-title">Ponant</h3>
                                <div className="svp-about-card-divider"></div>
                                <p className="svp-about-card-text">Founded in France, Ponant specializes in luxury small-ship cruising with a strong emphasis on expedition travel and cultural exploration.</p>
                                <p className="svp-about-card-text">Its modern fleet includes ships such as Le Commandant Charcot, Le Bougainville, Le Dumont-d'Urville, Le Bellot, Le Jacques-Cartier, and Le Champlain.</p>
                                <p className="svp-about-card-text">Ponant is recognized for blending refined French hospitality with environmentally conscious exploration.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHIPS & ONBOARD EXPERIENCE ── */}
            <section className="svp-ships-section">
                <div className="svp-ships-container">
                    <div className="svp-ships-top">
                        <span className="svp-eyebrow">ONBOARD EXPERIENCE</span>
                        <h2 className="svp-section-heading">Ships and Onboard Experience</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-ships-intro">Scenic's atmosphere is sophisticated while remaining adventure-focused. Ponant's ships are intentionally intimate and elegant, delivering a refined European cruising experience with an emphasis on exploration.</p>
                    </div>
                    <div className="svp-ships-grid">
                        <div className="svp-ships-card svp-ships-scenic">
                            <div className="svp-ships-image">
                                <SvpImagePlaceholder label="Scenic Eclipse Discovery Yacht" />
                            </div>
                            <div className="svp-ships-body">
                                <div className="svp-ships-header">
                                    <Ship size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <ul className="svp-ships-list">
                                    {svpShipsScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-ships-card svp-ships-ponant">
                            <div className="svp-ships-image">
                                <SvpImagePlaceholder label="Ponant Expedition Ship" />
                            </div>
                            <div className="svp-ships-body">
                                <div className="svp-ships-header">
                                    <Ship size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <ul className="svp-ships-list">
                                    {svpShipsPonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SUITES & ACCOMMODATIONS ── */}
            <section className="svp-suites-section">
                <div className="svp-suites-container">
                    <div className="svp-suites-top">
                        <span className="svp-eyebrow">STAYING ABOARD</span>
                        <h2 className="svp-section-heading">Suites and Accommodations</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-suites-intro">Scenic accommodations are designed to provide residential-style comfort, while Ponant's select suite categories include enhanced personalized services.</p>
                    </div>
                    <div className="svp-suites-grid">
                        <div className="svp-suites-card svp-suites-scenic">
                            <div className="svp-suites-image">
                                <SvpImagePlaceholder label="Scenic Suite & Accommodation" />
                            </div>
                            <div className="svp-suites-body">
                                <div className="svp-suites-header">
                                    <Crown size={18} />
                                    <h3>Scenic — Every Suite Includes</h3>
                                </div>
                                <ul className="svp-suites-list">
                                    {svpSuitesScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-suites-card svp-suites-ponant">
                            <div className="svp-suites-image">
                                <SvpImagePlaceholder label="Ponant Stateroom & Suite" />
                            </div>
                            <div className="svp-suites-body">
                                <div className="svp-suites-header">
                                    <Crown size={18} />
                                    <h3>Ponant — Staterooms &amp; Suites Feature</h3>
                                </div>
                                <ul className="svp-suites-list">
                                    {svpSuitesPonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="svp-dining-section">
                <div className="svp-dining-container">
                    <div className="svp-dining-top">
                        <span className="svp-eyebrow">CULINARY PROGRAM</span>
                        <h2 className="svp-section-heading">Dining Experience</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-dining-intro">Every dining venue is included in the fare on Scenic voyages, while Ponant celebrates French gastronomy with a culinary experience that reflects the cruise line's heritage.</p>
                    </div>
                    <div className="svp-dining-grid">
                        <div className="svp-dining-card svp-dining-scenic">
                            <div className="svp-dining-image">
                                <SvpImagePlaceholder label="Scenic Fine Dining" />
                            </div>
                            <div className="svp-dining-body">
                                <div className="svp-dining-header">
                                    <Utensils size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <ul className="svp-dining-list">
                                    {svpDiningScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-dining-card svp-dining-ponant">
                            <div className="svp-dining-image">
                                <SvpImagePlaceholder label="Ponant Dining Experience" />
                            </div>
                            <div className="svp-dining-body">
                                <div className="svp-dining-header">
                                    <Utensils size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <ul className="svp-dining-list">
                                    {svpDiningPonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DESTINATIONS ── */}
            <section className="svp-dest-section">
                <div className="svp-dest-container">
                    <div className="svp-dest-top">
                        <span className="svp-eyebrow">WHERE YOU'LL SAIL</span>
                        <h2 className="svp-section-heading">Destinations</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-dest-intro">Scenic specializes in luxury expedition travel, while Ponant's itineraries often feature culturally immersive and environmentally focused experiences.</p>
                    </div>
                    <div className="svp-dest-grid">
                        <div className="svp-dest-card svp-dest-scenic">
                            <div className="svp-dest-image">
                                <img src={scenicDestImg} alt="Scenic Global Destinations" className="svp-dest-img" />
                            </div>
                            <div className="svp-dest-body">
                                <div className="svp-dest-header">
                                    <MapPin size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <div className="svp-tag-cloud">
                                    {svpDestinationsScenic.map((item, idx) => (
                                        <span key={idx} className="svp-tag svp-tag-scenic">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="svp-dest-card svp-dest-ponant">
                            <div className="svp-dest-image">
                                <img src={ponantDestImg} alt="Ponant Itineraries" className="svp-dest-img" />
                            </div>
                            <div className="svp-dest-body">
                                <div className="svp-dest-header">
                                    <MapPin size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <div className="svp-tag-cloud">
                                    {svpDestinationsPonant.map((item, idx) => (
                                        <span key={idx} className="svp-tag svp-tag-ponant">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPEDITION EXPERIENCE ── */}
            <section className="svp-expedition-section">
                <div className="svp-expedition-container">
                    <div className="svp-expedition-top">
                        <span className="svp-eyebrow">ADVENTURE AT SEA</span>
                        <h2 className="svp-section-heading">Expedition Experience</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-expedition-intro">Both cruise lines provide exceptional expedition programs, though Scenic emphasizes advanced exploration technology while Ponant highlights cultural and environmental discovery.</p>
                    </div>
                    <div className="svp-expedition-grid">
                        <div className="svp-expedition-card svp-expedition-scenic">
                            <div className="svp-expedition-image">
                                <SvpImagePlaceholder label="Scenic Expedition" />
                            </div>
                            <div className="svp-expedition-body">
                                <div className="svp-expedition-header">
                                    <Compass size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <ul className="svp-expedition-list">
                                    {svpExpeditionScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-expedition-card svp-expedition-ponant">
                            <div className="svp-expedition-image">
                                <SvpImagePlaceholder label="Ponant Expedition" />
                            </div>
                            <div className="svp-expedition-body">
                                <div className="svp-expedition-header">
                                    <Compass size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <ul className="svp-expedition-list">
                                    {svpExpeditionPonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INCLUDED AMENITIES ── */}
            <section className="svp-amenities-section">
                <div className="svp-amenities-container">
                    <div className="svp-amenities-top">
                        <span className="svp-eyebrow">WHAT'S INCLUDED</span>
                        <h2 className="svp-section-heading">Included Amenities</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>
                    <div className="svp-amenities-grid">
                        <div className="svp-amenities-card svp-amenities-scenic">
                            <div className="svp-amenities-image">
                                <SvpImagePlaceholder label="Scenic All-Inclusive Amenities" />
                            </div>
                            <div className="svp-amenities-body">
                                <div className="svp-amenities-header">
                                    <Gem size={18} />
                                    <h3>Scenic Includes</h3>
                                </div>
                                <div className="svp-amenities-list">
                                    {svpIncludedScenic.map(({ Icon, text }, idx) => (
                                        <div key={idx} className="svp-amenities-item">
                                            <div className="svp-amenities-icon"><Icon size={16} /></div>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="svp-amenities-card svp-amenities-ponant">
                            <div className="svp-amenities-image">
                                <SvpImagePlaceholder label="Ponant Premium Amenities" />
                            </div>
                            <div className="svp-amenities-body">
                                <div className="svp-amenities-header">
                                    <Gem size={18} />
                                    <h3>Ponant Includes</h3>
                                </div>
                                <div className="svp-amenities-list">
                                    {svpIncludedPonant.map(({ Icon, text }, idx) => (
                                        <div key={idx} className="svp-amenities-item">
                                            <div className="svp-amenities-icon"><Icon size={16} /></div>
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
            <section className="svp-wellness-section">
                <div className="svp-wellness-container">
                    <div className="svp-wellness-top">
                        <span className="svp-eyebrow">MIND &amp; BODY</span>
                        <h2 className="svp-section-heading">Wellness and Spa</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-wellness-intro">Both brands provide relaxing wellness spaces after days of exploration.</p>
                    </div>
                    <div className="svp-wellness-grid">
                        <div className="svp-wellness-card svp-wellness-scenic">
                            <div className="svp-wellness-image">
                                <SvpImagePlaceholder label="Scenic Spa & Wellness" />
                            </div>
                            <div className="svp-wellness-body">
                                <div className="svp-wellness-header">
                                    <Sun size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <ul className="svp-wellness-list">
                                    {svpWellnessScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-wellness-card svp-wellness-ponant">
                            <div className="svp-wellness-image">
                                <SvpImagePlaceholder label="Ponant Wellness Center" />
                            </div>
                            <div className="svp-wellness-body">
                                <div className="svp-wellness-header">
                                    <Sun size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <ul className="svp-wellness-list">
                                    {svpWellnessPonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="svp-entertainment-section">
                <div className="svp-entertainment-container">
                    <div className="svp-entertainment-top">
                        <span className="svp-eyebrow">EVENINGS ONBOARD</span>
                        <h2 className="svp-section-heading">Entertainment</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-entertainment-intro">Entertainment on both cruise lines remains understated, allowing destinations to take center stage.</p>
                    </div>
                    <div className="svp-entertainment-grid">
                        <div className="svp-entertainment-card svp-entertainment-scenic">
                            <div className="svp-entertainment-image">
                                <SvpImagePlaceholder label="Scenic Onboard Entertainment" />
                            </div>
                            <div className="svp-entertainment-body">
                                <div className="svp-entertainment-header">
                                    <Music size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <ul className="svp-entertainment-list">
                                    {svpEntertainmentScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-entertainment-card svp-entertainment-ponant">
                            <div className="svp-entertainment-image">
                                <SvpImagePlaceholder label="Ponant Evening Entertainment" />
                            </div>
                            <div className="svp-entertainment-body">
                                <div className="svp-entertainment-header">
                                    <Music size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <ul className="svp-entertainment-list">
                                    {svpEntertainmentPonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICE COMPARISON ── */}
            <section className="svp-service-section">
                <div className="svp-service-container">
                    <div className="svp-service-top">
                        <span className="svp-eyebrow">HOSPITALITY</span>
                        <h2 className="svp-section-heading">Service Comparison</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                        <p className="svp-service-intro">Both cruise lines receive excellent ratings for attentive service and guest satisfaction.</p>
                    </div>
                    <div className="svp-service-grid">
                        <div className="svp-service-card svp-service-scenic">
                            <div className="svp-service-image">
                                <SvpImagePlaceholder label="Scenic Personalized Service" />
                            </div>
                            <div className="svp-service-body">
                                <div className="svp-service-header">
                                    <Users size={18} />
                                    <h3>Scenic</h3>
                                </div>
                                <ul className="svp-service-list">
                                    <li><CheckCircle size={15} /><span>Butler service in every suite</span></li>
                                    <li><CheckCircle size={15} /><span>Personalized luxury</span></li>
                                    <li><CheckCircle size={15} /><span>High crew-to-guest ratio</span></li>
                                    <li><CheckCircle size={15} /><span>Comprehensive all-inclusive experience</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="svp-service-card svp-service-ponant">
                            <div className="svp-service-image">
                                <SvpImagePlaceholder label="Ponant French Hospitality" />
                            </div>
                            <div className="svp-service-body">
                                <div className="svp-service-header">
                                    <Users size={18} />
                                    <h3>Ponant</h3>
                                </div>
                                <ul className="svp-service-list">
                                    <li><CheckCircle size={15} /><span>Warm French hospitality</span></li>
                                    <li><CheckCircle size={15} /><span>Personalized attention</span></li>
                                    <li><CheckCircle size={15} /><span>Intimate guest experience</span></li>
                                    <li><CheckCircle size={15} /><span>Multilingual crew</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="svp-pricing-section">
                <div className="svp-pricing-container">
                    <div className="svp-pricing-top">
                        <span className="svp-eyebrow">INVESTMENT</span>
                        <h2 className="svp-section-heading">Pricing</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>
                    <div className="svp-pricing-cards">
                        <div className="svp-pricing-card svp-pricing-scenic">
                            <div className="svp-pricing-card-icon"><Gem size={22} /></div>
                            <h3 className="svp-pricing-card-title">Scenic</h3>
                            <p className="svp-pricing-card-text">Commands premium pricing because of its all-inclusive approach, Discovery Yacht technology, and luxury expedition amenities.</p>
                        </div>
                        <div className="svp-pricing-card svp-pricing-ponant">
                            <div className="svp-pricing-card-icon"><Waves size={22} /></div>
                            <h3 className="svp-pricing-card-title">Ponant</h3>
                            <p className="svp-pricing-card-text">Offers competitive luxury pricing with a focus on cultural exploration, smaller ships, and French-inspired hospitality.</p>
                        </div>
                    </div>
                    <p className="svp-pricing-footer">The best value depends on your preferred itinerary, travel season, and suite category.</p>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="svp-choose-section">
                <div className="svp-choose-container">
                    <div className="svp-choose-top">
                        <span className="svp-eyebrow">MAKE YOUR DECISION</span>
                        <h2 className="svp-section-heading">Which Cruise Line Is Right for You?</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>
                    <div className="svp-choose-grid">
                        <div className="svp-choose-card svp-choose-scenic">
                            <div className="svp-choose-image">
                                <SvpImagePlaceholder label="Who Should Choose Scenic?" />
                            </div>
                            <div className="svp-choose-body">
                                <div className="svp-choose-header">
                                    <Compass size={18} />
                                    <h3>Who Should Choose Scenic?</h3>
                                </div>
                                <ul className="svp-choose-list">
                                    {svpChooseScenic.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="svp-choose-card svp-choose-ponant">
                            <div className="svp-choose-image">
                                <SvpImagePlaceholder label="Who Should Choose Ponant?" />
                            </div>
                            <div className="svp-choose-body">
                                <div className="svp-choose-header">
                                    <Waves size={18} />
                                    <h3>Who Should Choose Ponant?</h3>
                                </div>
                                <ul className="svp-choose-list">
                                    {svpChoosePonant.map((item, idx) => (
                                        <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="svp-mid-cta-wrap">
                        <Link to='/contact' className="svp-mid-cta-button">
                            <Phone size={16} />
                            Ready to Book? Let's Talk
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── WHY BOOK WITH TRIPS & SHIPS ── */}
            <section className="svp-whybook-section">
                <div className="svp-whybook-container">
                    <span className="svp-eyebrow">YOUR LUXURY EXPEDITION SPECIALISTS</span>
                    <h2 className="svp-section-heading">Why Book with Trips &amp; Ships Luxury Travel?</h2>
                    <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    <p className="svp-whybook-lead">Luxury expedition cruises require expert planning to ensure you choose the right ship, itinerary, and accommodations.</p>
                    <p className="svp-whybook-sub">When you book with Trips &amp; Ships Luxury Travel, you'll receive:</p>

                    <div className="svp-whybook-grid">
                        {svpWhyBook.map(({ Icon, text }, idx) => (
                            <div key={idx} className="svp-whybook-item">
                                <div className="svp-whybook-icon"><Icon size={22} /></div>
                                <span className="svp-whybook-text">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
                {/* EXPERT INSIGHT — Celebrity Cruises: Complete Guide inspired, tight */}
                <section id="svp-growth-insight" className="svp-expert-insight-section">
                    <div className="svp-expert-insight-container">
                        <div className="svp-expert-portrait-panel">
                            <div className="svp-expert-img-frame">
                                <img src={ProfilePictureAH} alt="Angela Hughes - Luxury Cruise Expert" className="svp-expert-img" />
                                <div className="svp-expert-img-overlay"></div>
                                <span className="svp-expert-badge">EXPERT ADVISOR</span>
                            </div>
                            <div className="svp-expert-stats-strip">
                                <div className="svp-expert-stat-box">
                                    <div className="svp-expert-stat-num">40+</div>
                                    <div className="svp-expert-stat-lbl">Years Experience</div>
                                </div>
                                <div className="svp-expert-stat-box">
                                    <div className="svp-expert-stat-num">121+</div>
                                    <div className="svp-expert-stat-lbl">Countries Visited</div>
                                </div>
                            </div>
                        </div>

                        <div className="svp-expert-content-panel">
                            <div className="svp-expert-eyebrow-row">
                                <Award size={14} />
                                <span className="svp-eyebrow">Expert Insight from Angela Hughes</span>
                            </div>
                            <h2 className="svp-editorial-title">
                                Why Modern Luxury Travelers Are Choosing Scenic
                            </h2>
                            <div className="svp-heading-separator-bar"></div>

                            <div className="svp-expert-quote-card">
                                <span className="svp-expert-quote-mark">“</span>
                                <p className="svp-expert-quote-text svp-expert-quote">
                                    According to Angela Hughes, many travelers are initially attracted to Scenic because of its ultra-luxury discovery yachts — but ultimately fall in love with the all-inclusive onboard expedition experience.
                                </p>
                            </div>

                            <div className="svp-expert-priorities">
                                <h5 className="svp-priorities-title">Scenic travelers consistently prioritize:</h5>
                                <div className="svp-expert-pills">
                                    {[
                                        'Polar discovery yachting',
                                        'Truly all-inclusive luxury',
                                        'Butler service for every suite',
                                        'Helicopter & submarine features',
                                        'Up to 10 dining experiences',
                                        'Immersive Zodiac excursions'
                                    ].map((pill) => (
                                        <span key={pill} className="svp-expert-pill">
                                            <CheckCircle size={12} />
                                            <span>{pill}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="svp-editorial-body-para svp-expert-quote">
                                As founder of Luxury Travel University and a globally recognized luxury travel speaker, Angela Hughes helps travelers compare luxury cruise experiences realistically — based on real-world expertise rather than generic online recommendations.
                            </p>

                            <div className="svp-expert-footer-bio">
                                <p className="svp-expert-bio">Her expertise spans ultra-luxury yachting, polar expeditions, butler services, luxury cruise planning and custom expedition travel — backed by 40+ years and 121+ countries visited.</p>
                            </div>
                        </div>
                    </div>
                </section>


            {/* ── CONCLUSION ── */}
            <section className="svp-final-section">
                <div className="svp-final-bg"></div>
                <div className="svp-final-container">

                    <div className="svp-final-eyebrow-row">
                        <Gem size={18} />
                        <span className="svp-final-eyebrow-text">CONCLUSION</span>
                    </div>

                    <h2 className="svp-final-heading">Two Distinct Paths to <br /> Luxury Expedition Travel</h2>
                    <div className="svp-final-separator"></div>

                    <div className="svp-final-card">
                        <p className="svp-final-body">Scenic and Ponant each offer exceptional luxury expedition experiences, but they cater to different travel styles.</p>
                        <p className="svp-final-body">Scenic stands out for its truly all-inclusive Discovery Yachts, butler service, and innovative exploration technology. Ponant distinguishes itself through French elegance, boutique ships, and immersive cultural expeditions.</p>
                        <p className="svp-final-body svp-final-emphasis">Whether you dream of exploring Antarctica, the Arctic, or the Mediterranean, both cruise lines provide unforgettable journeys filled with luxury, discovery, and personalized service.</p>
                    </div>

                    <div className="svp-mid-cta-wrap">
                        <Link to='/contact' className="svp-mid-cta-button">
                            <Phone size={16} />
                            Start Your Expedition Journey
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="svp-faq-main-section">
                <div className="svp-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="svp-section-heading">Frequently Asked Questions</h2>
                        <div className="svp-heading-separator-bar svp-bar-centered"></div>
                    </div>
                    <div className="svp-faq-list-wrapper">
                        {svpFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="svp-faq-individual-item"
                                onClick={() => svpToggleFaq(index)}
                            >
                                <div className="svp-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="svp-faq-toggle-icon">{svpActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {svpActiveFaq === index && (
                                    <p className="svp-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="svp-cta-main-section">
                <div className="svp-cta-bg-pattern-layer"></div>
                <div className="svp-cta-content-relative">
                    <div className="svp-cta-inner-wrapper">
                        <h2 className="svp-cta-heading-white">Ready to Choose Your Luxury Expedition?</h2>
                        <div className="svp-cta-separator-white"></div>
                        <p className="svp-cta-paragraph-white">
                            Whether Scenic's all-inclusive Discovery Yachts or Ponant's French boutique elegance calls to you, our specialists will match you with the ship, suite, and itinerary that fit your travel style.
                        </p>
                        <p className="svp-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 16px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers navigate every detail of luxury expedition cruising.
                        </p>
                        <div className="svp-cta-considerations-box">
                            <div className="svp-cta-box-top-bar"></div>
                            <span className="svp-cta-considerations-title">Whether you are considering:</span>
                            <div className="svp-cta-grid-items">
                                {[
                                    { icon: Ship, label: 'Scenic Eclipse expedition voyages' },
                                    { icon: Anchor, label: 'Ponant French boutique expeditions' },
                                    { icon: Compass, label: 'Antarctica and polar itineraries' },
                                    { icon: Leaf, label: 'Cultural and environmental exploration cruises' },
                                    { icon: Gem, label: 'Suite upgrades and exclusive offers' }
                                ].map(({ icon: Icon, label }, idx) => (
                                    <div key={idx} className="svp-cta-grid-item">
                                        <div className="svp-cta-grid-item-icon"><Icon size={15} /></div>
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="svp-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 28px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel delivers expert guidance backed by real-world luxury travel expertise.
                        </p>
                        <div className="svp-cta-button-group">
                            <Link to='/contact' className="svp-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="svp-secondary-outline-button">
                                <LayoutList size={18} />
                                Explore Luxury Expedition Cruises
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ScenicVsPonant