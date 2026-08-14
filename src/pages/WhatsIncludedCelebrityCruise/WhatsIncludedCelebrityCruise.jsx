import Navbar from '../../components/Navbar/Navbar'
import './WhatsIncludedCelebrityCruise.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Ship, MapPin, Star, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Gem,
    Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, Mic,
    Globe, DollarSign, Wifi, Plane, Wine, Bed,
    Bell, Waves, ShieldCheck, Coffee, AlertCircle,
    List, Calendar, Dumbbell, Baby, Martini, Wallet,
    CreditCard, HelpCircle
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function WhatsIncludedCelebrityCruise() {

    const [cewiActiveFaq, setCewiActiveFaq] = useState(null)
    const cewiToggleFaq = i => setCewiActiveFaq(cewiActiveFaq === i ? null : i)

    const cewiFaqs = [
        { question: 'What is included on a Celebrity Cruise?', answer: 'Celebrity Cruise fares generally include your stateroom, main dining, selected casual dining, entertainment, pools, fitness facilities, and many onboard activities. Drinks, Wi-Fi, and gratuities depend on the fare selected.' },
        { question: 'Are meals included on Celebrity Cruises?', answer: 'Yes. Breakfast, lunch, dinner, and many snacks are included, along with dining at selected complimentary venues. Specialty restaurants generally cost extra.' },
        { question: 'Are drinks included on Celebrity Cruises?', answer: 'Drinks depend on the fare. Cruise-Only fares generally charge separately for beverages, while eligible All Included bookings include the Classic Drinks Package.' },
        { question: 'Does Celebrity All Included include alcohol?', answer: 'Yes. The Classic Drinks Package included with eligible All Included bookings covers a selection of alcoholic and non-alcoholic beverages subject to package rules and limits.' },
        { question: 'Is Wi-Fi included on Celebrity Cruises?', answer: 'Basic Wi-Fi is included with eligible All Included fares. Cruise-Only guests can purchase Wi-Fi separately, while Premium Wi-Fi provides additional capabilities such as streaming and video calls.' },
        { question: 'Are gratuities included on Celebrity Cruises?', answer: "Gratuities depend on the fare. Celebrity's current All Included terms include applicable tips, while Cruise-Only fares can charge gratuities separately." },
        { question: 'Is specialty dining included on Celebrity Cruises?', answer: 'Generally, no. Specialty restaurants usually require an additional charge or dining package, while the main dining and selected casual venues are included.' },
        { question: 'Are shore excursions included on Celebrity Cruises?', answer: 'No. Shore excursions are generally purchased separately. Prices vary depending on the destination, activity, duration, and excursion type.' },
        { question: 'Is room service included on Celebrity Cruises?', answer: 'Room-service availability and charges vary by item and service. Travelers should check the current onboard menu and applicable charges before ordering.' },
        { question: 'Are pools and fitness centers included on Celebrity Cruises?', answer: 'Yes. Standard pool access and fitness-center access are generally included in the cruise fare. Certain specialized fitness services or treatments may cost extra.' },
        { question: 'Are entertainment and shows included on Celebrity Cruises?', answer: 'Yes. Many theater shows, live performances, activities, and entertainment programs are included in the cruise fare, although offerings vary by ship and sailing.' },
        { question: 'What is included in Celebrity The Retreat?', answer: "The Retreat is Celebrity's suite-level experience. Current benefits can include suite accommodations, Premium Drinks, Premium Wi-Fi, enhanced service, and access to suite-focused amenities, with exact benefits varying by ship and fare." },
        { question: 'Is Celebrity Cruises fully all inclusive?', answer: "No. Celebrity's All Included pricing bundles specified benefits such as drinks, Wi-Fi, and applicable tips, but optional expenses including specialty dining, excursions, spa treatments, shopping, and some other services can remain extra." },
        { question: 'Is Celebrity All Included worth it?', answer: 'It depends on how much you expect to use the included drinks and Wi-Fi and whether you value having applicable tips bundled into the fare. Compare the Cruise-Only and All Included prices for the same sailing before deciding.' },
        { question: 'Can I add All Included after booking a Celebrity cruise?', answer: "Celebrity's current information says All Included is selected at booking and is not generally available to add afterward as the same fare option. Existing guests should check their booking or contact Celebrity for options specific to their reservation." }
    ]

    const cewiCoreInclusions = [
        'Stateroom accommodation', 'Main dining', 'Selected casual dining', 'Breakfast, lunch, and dinner',
        'Many snacks and desserts', 'Broadway-style and live entertainment', 'Pools', 'Fitness center access',
        'Many onboard activities', 'Destination and enrichment programming', 'Access to public areas and lounges'
    ]

    const cewiGlanceTable = [
        { feature: 'Stateroom', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Main dining', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Selected casual dining', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Entertainment', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Pools', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Fitness center', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Many onboard activities', cruiseOnly: 'Included', allIncluded: 'Included' },
        { feature: 'Classic Drinks Package', cruiseOnly: 'Extra', allIncluded: 'Included' },
        { feature: 'Basic Wi-Fi', cruiseOnly: 'Extra', allIncluded: 'Included' },
        { feature: 'Beverage-package gratuities', cruiseOnly: 'Extra', allIncluded: 'Included' },
        { feature: 'Onboard staff gratuities', cruiseOnly: 'Fare-dependent', allIncluded: 'Included under current terms' },
        { feature: 'Specialty dining', cruiseOnly: 'Extra', allIncluded: 'Generally extra' },
        { feature: 'Shore excursions', cruiseOnly: 'Extra', allIncluded: 'Extra' },
        { feature: 'Spa treatments', cruiseOnly: 'Extra', allIncluded: 'Extra' },
        { feature: 'Premium Wi-Fi', cruiseOnly: 'Extra/upgrade', allIncluded: 'Upgrade generally available' },
        { feature: 'Premium drinks', cruiseOnly: 'Extra/upgrade', allIncluded: 'Upgrade generally available' }
    ]

    const cewiIncludedDining = ['Main Restaurant meals', 'Buffet or marketplace-style dining', 'Poolside casual food', 'Selected café options', 'Snacks', 'Room-service items where included under the applicable service terms', 'Desserts']

    const cewiSpecialtyCuisines = ['Steak', 'Seafood', 'Italian cuisine', 'Sushi', 'Contemporary cuisine', 'Chef-led experiences']

    const cewiClassicPackage = ['Beers', 'Spirits', 'Cocktails', 'Liqueurs', 'Frozen drinks', 'Wines by the glass', 'Bottled water', 'Coca-Cola selections', 'Specialty coffees', 'Organic teas']

    const cewiWifiCompare = [
        { feature: 'Web browsing', basic: 'Yes', premium: 'Yes' },
        { feature: 'Email', basic: 'Yes', premium: 'Yes' },
        { feature: 'Messaging', basic: 'Yes', premium: 'Yes' },
        { feature: 'Social media', basic: 'Limited/basic use', premium: 'Yes' },
        { feature: 'Video calls', basic: 'No', premium: 'Yes' },
        { feature: 'Streaming', basic: 'No', premium: 'Yes' },
        { feature: 'Streaming music', basic: 'No', premium: 'Yes' }
    ]

    const cewiEntertainment = ['Theater performances', 'Live music', 'Production shows', 'Guest performers', 'Poolside entertainment', 'Enrichment activities', 'Trivia', 'Games', 'Lectures and presentations', 'Nightlife']

    const cewiPoolFeatures = ['Main pool', 'Solarium', 'Whirlpools', 'Outdoor lounging areas', 'Sports and recreation spaces']

    const cewiFitnessFeatures = ['Cardio equipment', 'Strength-training equipment', 'Exercise areas', 'Fitness classes or scheduled activities']

    const cewiKidsCheck = ["Kids' clubs", 'Teen spaces', 'Scheduled youth activities', 'Family entertainment', 'Age requirements']

    const cewiExcursionTypes = ['City tours', 'Historical sightseeing', 'Beach trips', 'Food and wine experiences', 'Wildlife excursions', 'Outdoor adventures', 'Cultural activities']

    const cewiRetreatIncludes = ['Suite accommodation', 'Premium Drinks Package', 'Premium Wi-Fi', 'Suite-exclusive spaces', 'Enhanced service', 'Luminae dining on applicable ships', 'Additional suite amenities']

    const cewiNotIncludedList = ['Specialty restaurants', 'Premium beverage upgrades', 'Some beverages outside package limits', 'Spa treatments', 'Salon services', 'Shore excursions', 'Casino spending', 'Shopping', 'Photography packages', 'Some fitness services', 'Internet upgrades', 'Medical services', 'Flights', 'Hotels before or after the cruise', 'Airport transfers', 'Travel insurance']

    const cewiCruiseOnlyReasons = ['You do not drink much.', 'You rarely use Wi-Fi.', 'You want the lowest upfront cruise fare.', 'You plan to spend most of your time ashore.', 'You prefer paying only for services you actually use.']
    const cewiAllIncludedReasons = ['You drink regularly.', 'You want Wi-Fi throughout the cruise.', 'You value predictable vacation costs.', 'You would otherwise purchase beverage and internet packages.', 'You want applicable tips bundled into the fare.']

    const cewiAllIncludedCostFactors = ['Sailing', 'Cruise length', 'Stateroom category', 'Number of guests', 'Market and currency', 'Promotional offers']

    const cewiBudgetBefore = ['Flights', 'Hotels', 'Airport transfers', 'Travel insurance', 'Visas where applicable']
    const cewiBudgetDuring = ['Specialty dining', 'Excursions', 'Spa treatments', 'Premium beverages', 'Wi-Fi upgrades', 'Shopping', 'Casino spending', 'Additional onboard services']
    const cewiBudgetAfter = ['Airport transportation', 'Hotel accommodation', 'Additional sightseeing', 'Meals before your flight']

    const cewiValueSteps = [
        { title: 'Compare the Same Sailing', desc: 'Never compare a Cruise-Only fare on one sailing with an All Included fare on another and assume one is cheaper. Use the same ship, sailing date, cabin category, occupancy, and cruise length, then compare the total price.' },
        { title: 'Calculate Your Beverage Usage', desc: 'If you drink very little, paying extra for a beverage package may not provide much value. If you regularly purchase cocktails, wine, specialty coffee, bottled water, and soft drinks, an included package may be more attractive.' },
        { title: 'Consider Your Wi-Fi Needs', desc: 'If you only need occasional email and messaging, Basic Wi-Fi may be enough. If you need video calls, streaming, work applications, or frequent social media uploads, Premium Wi-Fi may be more appropriate.' },
        { title: 'Check What Your Cabin Already Includes', desc: 'AquaClass and The Retreat can have additional benefits, so do not purchase separate packages without checking what is already included in your fare.' }
    ]

    const cewiFirstTimeCore = ['Your stateroom', 'Included dining', 'Entertainment', 'Pools and many recreational facilities', 'Fitness center', 'Many onboard activities']
    const cewiFirstTimeCheck = ['Drinks', 'Wi-Fi', 'Gratuities']

    const cewiByCategory = [
        { category: 'Stateroom', included: 'Yes', note: 'Depends on booked category' },
        { category: 'Main meals', included: 'Yes', note: 'Included dining venues vary' },
        { category: 'Casual dining', included: 'Yes, at selected venues', note: 'Ship-specific' },
        { category: 'Specialty dining', included: 'No', note: 'Usually extra' },
        { category: 'Entertainment', included: 'Yes', note: 'Shows and programming vary' },
        { category: 'Pools', included: 'Yes', note: 'Standard facilities' },
        { category: 'Fitness center', included: 'Yes', note: 'Certain services may cost extra' },
        { category: "Kids' programming", included: 'Many activities', note: 'Ship and age dependent' },
        { category: 'Classic drinks', included: 'All Included', note: 'Subject to package rules' },
        { category: 'Premium drinks', included: 'No', note: 'Usually upgrade/extra' },
        { category: 'Basic Wi-Fi', included: 'All Included', note: 'Basic service' },
        { category: 'Premium Wi-Fi', included: 'No', note: 'Upgrade/extra unless included by fare' },
        { category: 'Gratuities', included: 'Fare dependent', note: 'Check current fare terms' },
        { category: 'Shore excursions', included: 'No', note: 'Purchased separately' },
        { category: 'Spa treatments', included: 'No', note: 'Additional cost' },
        { category: 'Casino', included: 'No', note: 'Gaming is separate' },
        { category: 'Flights', included: 'No', note: 'Unless separately bundled' },
        { category: 'Airport transfers', included: 'Usually no', note: 'Check package/booking' },
        { category: 'Travel insurance', included: 'No', note: 'Separate purchase' }
    ]

    const cewiKeyTakeaways = [
        'Celebrity Cruise fares include the core cruise experience, including accommodation, dining, entertainment, pools, fitness facilities, and many onboard activities.',
        'Cruise-Only fares generally do not include the same drinks, Wi-Fi, and gratuity benefits as All Included.',
        "All Included currently bundles a Classic Drinks Package and Basic Wi-Fi for eligible bookings, with applicable tips included under Celebrity's current terms.",
        'The Retreat provides enhanced suite-level benefits, including Premium Drinks and Premium Wi-Fi under the applicable All Included structure.',
        'Specialty dining, shore excursions, spa treatments, shopping, and many other optional services can cost extra.',
        'Basic Wi-Fi is designed for browsing, email, and messaging, while Premium Wi-Fi adds more demanding capabilities such as streaming and video calls.',
        'Comparing Cruise-Only and All Included pricing for the exact same sailing is the best way to determine which fare offers better value.'
    ]

    const cewiInternalLinks = [
        { text: 'Celebrity Cruises Complete Guide', path: '/celebrity-cruises' },
        { text: 'Celebrity Cruises Ships and Classes', path: '/celebrity-cruises/ships/' },
        { text: 'Celebrity Cruises Cabin Guide', path: '/celebrity-cruises/cabins/' },
        { text: 'Celebrity Cruises Food and Dining', path: '/celebrity-cruises/food-dining/' },
        { text: 'Celebrity Cruises Drink Packages', path: '/celebrity-cruises/drinks/' },
        { text: 'Celebrity Cruises Best Itineraries', path: '/celebrity-cruises/best-itineraries/' },
        { text: 'Celebrity Cruises Dress Code and Packing Guide', path: '/celebrity-cruises/dress-code-packing/' },
        { text: 'Celebrity Cruises First-Time Guide', path: '/celebrity-cruises/first-time-guide/' },
        { text: 'Is Celebrity Cruises Worth It?', path: '/celebrity-cruises/is-celebrity-worth-it/' }
    ]

    const cewiSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com#organization",
                "name": "Trips and Ships",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/whats-included#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/whats-included",
                "name": "What Is Included on a Celebrity Cruise?",
                "description": "Complete guide to what is included on a Celebrity Cruise, including accommodation, dining, entertainment, drinks, Wi-Fi, gratuities, activities, and optional costs.",
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/whats-included" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/whats-included#article",
                "headline": "What Is Included on a Celebrity Cruise?",
                "description": "Complete guide to what is included on a Celebrity Cruise, including accommodation, dining, entertainment, drinks, Wi-Fi, gratuities, activities, and optional costs.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/whats-included" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/whats-included#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "What's Included", "item": "https://www.tripsandships.com/celebrity-cruises/whats-included" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/whats-included#faq",
                "mainEntity": cewiFaqs.map(f => ({
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
                <title>What's Included on a Celebrity Cruise?</title>
                <meta name="title" content="What's Included on a Celebrity Cruise?" />
                <meta name="description" content="Find out what is included on a Celebrity Cruise, from accommodation and dining to entertainment, pools, activities, Wi-Fi, drinks, gratuities, and more." />
                <meta name="keywords" content="What Is Included on a Celebrity Cruise, Celebrity Cruise inclusions, Celebrity Cruises what's included, Celebrity cruise fare, Celebrity All Included, Celebrity drinks package, Celebrity Wi-Fi, Celebrity gratuities, Celebrity dining, Celebrity onboard activities, Celebrity cruise costs" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/whats-included" />
                <script type="application/ld+json">{JSON.stringify(cewiSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="cewi-hero-section">
                <div className="cewi-hero-overlay-layer"></div>
                <div className="cewi-hero-content-wrapper">
                    <div className="cewi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="cewi-hero-main-title">What Is Included on a Celebrity Cruise?</h1>
                    <p className="cewi-hero-subtitle-text">
                        Find out what is included on a Celebrity Cruise, from accommodation and dining to entertainment, pools, activities, Wi-Fi, drinks, gratuities, and more.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="cewi-intro-section">
                <div className="cewi-intro-container">
                    <div className="cewi-intro-grid">
                        <div className="cewi-intro-text-col">
                            <div className="cewi-intro-lead-card">
                                <p className="cewi-intro-lead">
                                    Understanding what is included on a Celebrity Cruise is important before comparing fares. Celebrity Cruises offers both Cruise-Only and All Included pricing, and the difference can significantly affect the total cost of a vacation.
                                </p>
                            </div>
                            <p className="cewi-intro-body">
                                A standard Celebrity cruise fare covers your stateroom, main dining, entertainment, pools, fitness facilities, and many onboard activities. Depending on the fare selected, drinks, Wi-Fi, and gratuities may also be bundled into the price. Celebrity's current All Included option packages a Classic Drinks Package and Basic Wi-Fi with eligible bookings, while The Retreat includes enhanced beverage and Wi-Fi benefits.
                            </p>
                            <p className="cewi-intro-body">
                                The key is to distinguish between what every cruise fare includes, what All Included adds, and what remains an additional expense.
                            </p>
                        </div>
                        <div className="cewi-intro-image-col">
                            <div className="cewi-intro-image-frame cewi-placeholder-frame">
                                <div className="cewi-placeholder-content">
                                    <Ship size={48} className="cewi-placeholder-icon" />
                                    <span className="cewi-placeholder-text">Celebrity Cruises Ship Sailing at Sea</span>
                                </div>
                                <div className="cewi-intro-image-badge">
                                    <Anchor size={14} />
                                    <span>Cruise Fare Guide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT DOES A FARE INCLUDE ── */}
            <section className="cewi-core-fare-new-section">
                <div className="cewi-corefare-container">
                    <div className="cewi-corefare-grid">

                        {/* Left Column: Heading and info text */}
                        <div className="cewi-corefare-info-col">
                            <span className="cewi-eyebrow">WHAT DOES A CELEBRITY CRUISE FARE INCLUDE?</span>
                            <h2 className="cewi-section-heading">The Core Cruise Experience, Without Automatically Bundling Drinks and Wi-Fi</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-corefare-body-text">
                                Celebrity's Cruise-Only fare is designed to cover the core cruise experience without automatically bundling drinks and Wi-Fi. Celebrity states that Cruise-Only rates include accommodation, dining, entertainment, onboard activities, and many other amenities, while drinks, Wi-Fi, and gratuities can be purchased separately.
                            </p>
                            <div className="cewi-corefare-footer-banner">
                                <ShieldCheck size={18} className="cewi-banner-icon" />
                                <span>The exact venues, activities, and amenities depend on the ship and itinerary.</span>
                            </div>
                        </div>

                        {/* Right Column: Inclusions chips list */}
                        <div className="cewi-corefare-chips-col">
                            <h3 className="cewi-corefare-chips-title">Core Inclusions Generally Include:</h3>
                            <div className="cewi-corefare-chips-list">
                                {cewiCoreInclusions.map((item, idx) => (
                                    <div key={idx} className="cewi-corefare-chip">
                                        <CheckCircle size={15} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── INCLUSIONS AT A GLANCE TABLE ── */}
            <section className="cewi-table-section">
                <div className="cewi-table-container" style={{ maxWidth: '1080px' }}>
                    <span className="cewi-eyebrow">AT A GLANCE</span>
                    <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Inclusions at a Glance</h2>
                    <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                    <div className="cewi-compare-wrapper">
                        <table className="cewi-compare-table">
                            <thead>
                                <tr>
                                    <th>Included or Optional</th>
                                    <th className="cewi-typical-header">Cruise-Only</th>
                                    <th className="cewi-uni-header"><Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--cewi-accent-light)' }} />All Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cewiGlanceTable.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cewi-feature-title">{row.feature}</td>
                                        <td className="cewi-typical-cell"><span className="cewi-typical-value">{row.cruiseOnly}</span></td>
                                        <td className="cewi-uni-cell"><span className="cewi-uni-badge"><CheckCircle size={13} /><span>{row.allIncluded}</span></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cewi-table-footnote-badge">
                        <AlertCircle size={15} />
                        <span>Celebrity's current All Included terms should be checked for the specific sailing because packages, eligibility, prices, and promotional conditions can change.</span>
                    </div>
                </div>
            </section>

            {/* ── FOOD INCLUDED ── */}
            <section className="cewi-feature-section cewi-bg-accomm">
                <div className="cewi-feature-container">
                    <div className="cewi-feature-grid">

                        {/* Left Column: Styled Image Placeholder */}
                        <div className="cewi-feature-image-col">
                            <div className="cewi-image-frame cewi-placeholder-frame" style={{ height: '360px' }}>
                                <div className="cewi-placeholder-content">
                                    <Utensils size={48} className="cewi-placeholder-icon" style={{ color: 'var(--cewi-navy)', opacity: 0.6 }} />
                                    <span className="cewi-placeholder-text" style={{ color: 'var(--cewi-navy)', opacity: 0.7, fontWeight: 600 }}>Main Dining Room Experience Aboard Celebrity Cruises</span>
                                </div>
                                <div className="cewi-image-badge"><Utensils size={13} /><span>Included Dining</span></div>
                            </div>
                            <div className="cewi-left-footnote-card">
                                <Sparkles size={16} className="cewi-footnote-card-icon" />
                                <p className="cewi-left-footnote-text">The specific complimentary restaurants available depend on your ship.</p>
                            </div>
                        </div>

                        {/* Right Column: Content and tags */}
                        <div className="cewi-feature-text-col">
                            <span className="cewi-eyebrow">IS FOOD INCLUDED ON CELEBRITY CRUISES?</span>
                            <h2 className="cewi-section-heading">Yes, Meals Are Included in the Standard Fare</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-feature-lead">
                                Celebrity states that breakfast, lunch, dinner, and late-night snacks are part of the core cruise experience. Standard dining venues vary by ship but provide excellent options.
                            </p>

                            <h3 className="cewi-corefare-chips-title" style={{ marginTop: '20px', color: 'var(--cewi-navy)', fontSize: '14px' }}>Complimentary Dining Options Include:</h3>
                            <div className="cewi-pill-grid">
                                {cewiIncludedDining.map((item, idx) => (
                                    <span key={idx} className="cewi-pill">
                                        <CheckCircle size={12} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--cewi-accent)' }} />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SPECIALTY DINING ── */}
            <section className="cewi-feature-section cewi-bg-soft">
                <div className="cewi-feature-container">
                    <div className="cewi-feature-grid cewi-reverse">
                        <div className="cewi-feature-image-col">
                            <div className="cewi-image-frame cewi-placeholder-frame" style={{ height: '360px' }}>
                                <div className="cewi-placeholder-content">
                                    <Utensils size={48} className="cewi-placeholder-icon" />
                                    <span className="cewi-placeholder-text">Specialty Dining Restaurant Aboard Celebrity Cruises</span>
                                </div>
                                <div className="cewi-image-badge"><Utensils size={13} /><span>Specialty Dining</span></div>
                            </div>
                        </div>
                        <div className="cewi-feature-text-col">
                            <span className="cewi-eyebrow">IS SPECIALTY DINING INCLUDED?</span>
                            <h2 className="cewi-section-heading">Usually, No</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-feature-lead">Celebrity offers specialty restaurants in addition to its included dining venues. These restaurants generally require an additional charge or dining package. Specialty dining can include premium restaurants focused on:</p>
                            <div className="cewi-pill-grid">
                                {cewiSpecialtyCuisines.map((item, idx) => <span key={idx} className="cewi-pill">{item}</span>)}
                            </div>
                            <div className="cewi-wine-footnote-badge">
                                <Sparkles size={14} />
                                <span>If dining is an important part of your cruise, check the restaurant lineup for your particular ship before booking.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DRINKS INCLUDED ── */}
            <section className="cewi-drinks-section">
                <div className="cewi-drinks-container">
                    <div className="cewi-drinks-header">
                        <span className="cewi-drinks-eyebrow">BEVERAGES</span>
                        <h2 className="cewi-drinks-title">What Drinks Are Included?</h2>
                        <p className="cewi-drinks-subtext">Celebrity's drink inclusion depends on your fare type. Here's what each option offers.</p>
                    </div>
                    <div className="cewi-drinks-grid">
                        <div className="cewi-drinks-card">
                            <div className="cewi-drinks-card-icon"><Wine size={22} /></div>
                            <h3 className="cewi-drinks-card-title">Cruise-Only Fare</h3>
                            <p className="cewi-drinks-card-text">With a Cruise-Only fare, drinks are generally purchased separately. You can buy beverage packages onboard or pay per drink.</p>
                        </div>
                        <div className="cewi-drinks-card cewi-drinks-card-featured">
                            <div className="cewi-drinks-card-badge">MOST POPULAR</div>
                            <div className="cewi-drinks-card-icon"><Martini size={22} /></div>
                            <h3 className="cewi-drinks-card-title">All Included Fare</h3>
                            <p className="cewi-drinks-card-text">Celebrity's All Included package bundles a Classic Drinks Package with eligible bookings, covering a selection of alcoholic and non-alcoholic beverages.</p>
                        </div>
                        <div className="cewi-drinks-card">
                            <div className="cewi-drinks-card-icon"><Coffee size={22} /></div>
                            <h3 className="cewi-drinks-card-title">Premium Upgrade</h3>
                            <p className="cewi-drinks-card-text">Celebrity also offers a Premium Drinks Package for travelers who want a broader selection of wines, spirits, and cocktails.</p>
                        </div>
                    </div>
                    <div className="cewi-drinks-included-section">
                        <h3 className="cewi-drinks-included-title">Classic Drinks Package Includes:</h3>
                        <div className="cewi-drinks-included-grid">
                            {cewiClassicPackage.map((item, idx) => (
                                <div key={idx} className="cewi-drinks-included-item">
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cewi-drinks-note">The Classic package covers wines by the glass up to the specified package limit, while Premium extends the selection and price range.</p>
                    </div>
                </div>
            </section>

            {/* ── WIFI ── */}
            <section className="cewi-feature-section cewi-bg-accomm">
                <div className="cewi-feature-container">
                    <div className="cewi-feature-grid">
                        <div className="cewi-feature-image-col">
                            <div className="cewi-image-frame cewi-placeholder-frame" style={{ height: '340px' }}>
                                <div className="cewi-placeholder-content">
                                    <Wifi size={48} className="cewi-placeholder-icon" />
                                    <span className="cewi-placeholder-text">Guest Using Wi-Fi Aboard a Celebrity Cruises Ship</span>
                                </div>
                                <div className="cewi-image-badge"><Wifi size={13} /><span>Wi-Fi Included</span></div>
                            </div>
                            <div className="cewi-left-footnote-card">
                                <Sparkles size={16} className="cewi-footnote-card-icon" />
                                <p className="cewi-left-footnote-text">Travelers who need streaming, video calls, or more demanding internet access should compare the cost of upgrading to Premium Wi-Fi.</p>
                            </div>
                        </div>
                        <div className="cewi-feature-text-col">
                            <span className="cewi-eyebrow">IS WI-FI INCLUDED ON CELEBRITY CRUISES?</span>
                            <h2 className="cewi-section-heading">Basic Wi-Fi Is Included With Eligible All Included Fares</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-feature-lead">Celebrity describes Basic Wi-Fi as suitable for web browsing, email, and text messaging. It does not provide the same streaming and video-call capabilities as Premium Wi-Fi.</p>
                            <p className="cewi-feature-body">With Cruise-Only pricing, Wi-Fi is generally available for an additional charge.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BASIC VS PREMIUM WIFI TABLE ── */}
            <section className="cewi-table-section cewi-comparison-section-redesign">
                <div className="cewi-table-container" style={{ maxWidth: '900px' }}>
                    <span className="cewi-eyebrow">BASIC VS. PREMIUM</span>
                    <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>What Is the Difference Between Basic and Premium Wi-Fi?</h2>
                    <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                    <div className="cewi-compare-wrapper">
                        <table className="cewi-compare-table">
                            <thead>
                                <tr><th>Feature</th><th className="cewi-typical-header">Basic Wi-Fi</th><th className="cewi-uni-header"><Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--cewi-accent-light)' }} />Premium Wi-Fi</th></tr>
                            </thead>
                            <tbody>
                                {cewiWifiCompare.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cewi-feature-title">{row.feature}</td>
                                        <td className="cewi-typical-cell"><span className="cewi-typical-value">{row.basic}</span></td>
                                        <td className="cewi-uni-cell"><span className="cewi-uni-badge"><CheckCircle size={13} /><span>{row.premium}</span></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cewi-table-footnote-badge">
                        <Sparkles size={15} />
                        <span>Celebrity currently describes Premium Wi-Fi as supporting video chat, social media, browsing, email, and streaming video and music.</span>
                    </div>
                </div>
            </section>

            {/* ── GRATUITIES ── */}
            <section className="cewi-simple-section">
                <div className="cewi-simple-container">
                    <span className="cewi-eyebrow">ARE GRATUITIES INCLUDED ON CELEBRITY CRUISES?</span>
                    <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>This Depends on the Fare and Booking Terms</h2>
                    <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                    <p className="cewi-simple-intro">
                        Celebrity's current All Included package includes tips as part of the package for eligible bookings, while Cruise-Only rates can have gratuities charged separately. Celebrity's current terms distinguish beverage-package gratuities from other onboard gratuities, so travelers should review the exact fare conditions. This is one reason comparing the total fare is more useful than comparing the headline cruise price.
                    </p>
                </div>
            </section>

            {/* ── ENTERTAINMENT ── */}
            <section className="cewi-simple-section cewi-bg-entertainment cewi-entertainment-sidebyside-section">
                <div className="cewi-entertainment-container">
                    <div className="cewi-entertainment-grid-layout">
                        {/* Left Column: Heading & Content */}
                        <div className="cewi-entertainment-left-col">
                            <span className="cewi-eyebrow">ONBOARD LIFE</span>
                            <h2 className="cewi-section-heading">Are Entertainment and Shows Included?</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-entertainment-intro-text">
                                Yes. A wide range of onboard entertainment is included in the cruise fare. From Broadway-style theater performances to intimate live music sets, Celebrity Cruises provides diverse daily programming to suit all preferences.
                            </p>
                            <div className="cewi-entertainment-footnote-badge">
                                <Sparkles size={14} />
                                <span>Entertainment varies by ship and sailing, so the onboard program should be checked once the itinerary is confirmed.</span>
                            </div>
                        </div>

                        {/* Right Column: Mini Cards Grid */}
                        <div className="cewi-entertainment-right-col">
                            <div className="cewi-entertainment-card-grid">
                                {cewiEntertainment.map((item, idx) => {
                                    const icons = [Music, Star, Globe, Utensils, Mic, Wine, Award, Sparkles, Gem, Moon]
                                    const Icon = icons[idx % icons.length]
                                    return (
                                        <div key={idx} className="cewi-mini-card">
                                            <Icon size={20} />
                                            <span>{item}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── POOLS / FITNESS / KIDS ── */}
            <section className="cewi-recreation-section">
                <div className="cewi-recreation-container">
                    <div className="cewi-recreation-grid">

                        {/* Pools Card */}
                        <div className="cewi-recreation-card">
                            <div className="cewi-recreation-top-glow"></div>
                            <div className="cewi-recreation-icon-wrap"><Waves size={24} /></div>
                            <h3 className="cewi-recreation-title">Are Pools Included?</h3>
                            <p className="cewi-recreation-body">
                                Yes. Access to the ship's standard pools and outdoor deck spaces is included in the fare. Depending on the vessel, Celebrity features:
                            </p>
                            <ul className="cewi-recreation-checklist">
                                {cewiPoolFeatures.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <div className="cewi-recreation-note">
                                Note: Specialized Solarium spaces are adults-only.
                            </div>
                        </div>

                        {/* Fitness Card */}
                        <div className="cewi-recreation-card">
                            <div className="cewi-recreation-top-glow"></div>
                            <div className="cewi-recreation-icon-wrap"><Dumbbell size={24} /></div>
                            <h3 className="cewi-recreation-title">Is the Fitness Center Included?</h3>
                            <p className="cewi-recreation-body">
                                Access to standard cardio, strength-training equipment, and designated workout zones is fully included. Facilities feature:
                            </p>
                            <ul className="cewi-recreation-checklist">
                                {cewiFitnessFeatures.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <div className="cewi-recreation-note">
                                Note: Personal training or specialized classes carry a fee.
                            </div>
                        </div>

                        {/* Kids Card */}
                        <div className="cewi-recreation-card">
                            <div className="cewi-recreation-top-glow"></div>
                            <div className="cewi-recreation-icon-wrap"><Baby size={24} /></div>
                            <h3 className="cewi-recreation-title">Are Kids' Activities Included?</h3>
                            <p className="cewi-recreation-body">
                                Celebrity provides included youth programming at Camp at Sea. Age-appropriate spaces and scheduled programs include:
                            </p>
                            <ul className="cewi-recreation-checklist">
                                {cewiKidsCheck.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={15} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <div className="cewi-recreation-note">
                                Note: Late-night care or baby services may be extra.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="cewi-feature-section cewi-bg-soft">
                <div className="cewi-feature-container">
                    <div className="cewi-feature-grid">
                        <div className="cewi-feature-image-col">
                            <div className="cewi-image-frame cewi-placeholder-frame" style={{ height: '360px' }}>
                                <div className="cewi-placeholder-content">
                                    <Compass size={48} className="cewi-placeholder-icon" />
                                    <span className="cewi-placeholder-text">Celebrity Cruises Guests Exploring a Cruise Port</span>
                                </div>
                                <div className="cewi-image-badge"><MapPin size={13} /><span>Shore Excursions</span></div>
                            </div>
                        </div>
                        <div className="cewi-feature-text-col">
                            <span className="cewi-eyebrow">ARE SHORE EXCURSIONS INCLUDED?</span>
                            <h2 className="cewi-section-heading">Generally, No</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-feature-lead">Shore excursions are normally an additional expense. Celebrity offers destination experiences that can include:</p>
                            <div className="cewi-pill-grid">
                                {cewiExcursionTypes.map((item, idx) => <span key={idx} className="cewi-pill">{item}</span>)}
                            </div>
                            <div className="cewi-wine-footnote-badge">
                                <Sparkles size={14} />
                                <span>Travelers can choose whether to purchase organized excursions or explore ports independently.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COFFEE / ROOM SERVICE / MINI-BAR / RETREAT ── */}
            <section className="cewi-simple-section">
                <div className="cewi-simple-container">
                    <span className="cewi-eyebrow">GOOD TO KNOW</span>
                    <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>Coffee, Room Service, and Mini-Bar</h2>
                    <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                    <div className="cewi-coffee-grid">
                        <div className="cewi-coffee-card">
                            <h3 className="cewi-coffee-card-title">Is Specialty Coffee Included?</h3>
                            <p className="cewi-coffee-card-text">It depends on the beverage package and the specific drink. Some specialty coffee and tea options are covered by the Classic Drinks Package, while premium selections may fall under different package rules. Celebrity's package terms should be checked before assuming a particular beverage is included.</p>
                        </div>
                        <div className="cewi-coffee-card">
                            <h3 className="cewi-coffee-card-title">Is Room Service Included?</h3>
                            <p className="cewi-coffee-card-text">Room-service availability and charges can vary by item and service. Do not assume that everything delivered to your cabin is included simply because meals are included in the cruise fare. Before ordering, check menu price, delivery or service charges, beverage-package eligibility, and special dining promotions.</p>
                        </div>
                        <div className="cewi-coffee-card">
                            <h3 className="cewi-coffee-card-title">Is the Mini-Bar Included?</h3>
                            <p className="cewi-coffee-card-text">Mini-bar items are generally not covered by the standard beverage package. Celebrity specifically excludes mini-bar items and certain in-stateroom purchases from its Classic and Premium Drinks Package.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── THE RETREAT ── */}
            <section className="cewi-retreat-section">
                <div className="cewi-retreat-container">
                    <div className="cewi-retreat-grid">

                        {/* Left Column: Image placeholder */}
                        <div className="cewi-retreat-image-col">
                            <div className="cewi-image-frame cewi-placeholder-frame" style={{ height: '380px' }}>
                                <div className="cewi-placeholder-content">
                                    <Crown size={48} className="cewi-placeholder-icon" style={{ color: 'var(--cewi-navy)', opacity: 0.6 }} />
                                    <span className="cewi-placeholder-text" style={{ color: 'var(--cewi-navy)', opacity: 0.7, fontWeight: 600 }}>The Retreat Suite Accommodation on Celebrity Cruises</span>
                                </div>
                                <div className="cewi-image-badge" style={{ background: 'var(--cewi-navy)', color: '#fff' }}><Crown size={13} /><span>The Retreat</span></div>
                            </div>
                        </div>

                        {/* Right Column: Explanatory Content */}
                        <div className="cewi-retreat-text-col">
                            <span className="cewi-eyebrow">IS THE RETREAT INCLUDED?</span>
                            <h2 className="cewi-section-heading">A Suite-Level Experience, Not a Standard Inclusion</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-retreat-lead-text">
                                The Retreat is Celebrity's suite-level experience rather than a standard inclusion. Guests booked in The Retreat receive enhanced benefits, including a Premium Drinks Package, Premium Wi-Fi, and additional suite-level benefits under the applicable terms.
                            </p>
                            <ul className="cewi-retreat-checklist">
                                {cewiRetreatIncludes.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="cewi-retreat-body-text">
                                Specialty restaurants generally remain an additional cost even under The Retreat. Always verify the benefits listed for your exact suite because facilities differ between vessels.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT'S NOT INCLUDED ── */}
            <section className="cewi-not-included-section">
                <div className="cewi-not-included-container">
                    <div className="cewi-not-included-header">
                        <span className="cewi-not-included-eyebrow">GOOD TO KNOW</span>
                        <h2 className="cewi-not-included-title">What's Not Included on a Celebrity Cruise?</h2>
                        <p className="cewi-not-included-subtext">Even when many parts of the cruise are included, you should budget separately for certain expenses.</p>
                    </div>
                    <div className="cewi-not-included-card">
                        <div className="cewi-not-included-card-header">
                            <XCircle size={22} />
                            <h3>Common Additional Costs</h3>
                        </div>
                        <div className="cewi-not-included-grid">
                            {cewiNotIncludedList.map((item, idx) => (
                                <div key={idx} className="cewi-not-included-item">
                                    <XCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cewi-not-included-note">
                        <AlertCircle size={16} />
                        <span>The exact charges depend on the sailing and services purchased.</span>
                    </div>
                </div>
            </section>

            {/* ── CRUISE-ONLY VS ALL INCLUDED ── */}
            <section className="cewi-vs-section">
                <div className="cewi-vs-container">
                    <div className="cewi-vs-grid">

                        {/* Left Column: Heading and info */}
                        <div className="cewi-vs-info-col">
                            <span className="cewi-eyebrow">THE BIGGEST FARE DECISION</span>
                            <h2 className="cewi-section-heading">Celebrity Cruise-Only vs. All Included</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-vs-intro-text">
                                The biggest fare decision is often whether to select Cruise-Only or All Included. Celebrity says All Included bundles Classic Drinks and Basic Wi-Fi for eligible bookings, with the current package also including applicable tips.
                            </p>
                            <div className="cewi-vs-badge">
                                <Award size={15} />
                                <span>Compare actual Cruise-Only and All Included prices for the same sailing before deciding.</span>
                            </div>
                        </div>

                        {/* Right Column: Comparative panels */}
                        <div className="cewi-vs-cards-col">
                            <div className="cewi-vs-card-grid">

                                {/* Cruise-Only */}
                                <div className="cewi-vs-panel">
                                    <div className="cewi-vs-panel-header">
                                        <XCircle size={18} className="cewi-vs-panel-icon-x" />
                                        <h3 className="cewi-vs-panel-title">Cruise-Only If:</h3>
                                    </div>
                                    <ul className="cewi-vs-panel-list">
                                        {cewiCruiseOnlyReasons.map((item, idx) => (
                                            <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>

                                {/* All Included */}
                                <div className="cewi-vs-panel cewi-vs-panel-featured">
                                    <div className="cewi-vs-panel-header">
                                        <CheckCircle size={18} className="cewi-vs-panel-icon-check" />
                                        <h3 className="cewi-vs-panel-title">All Included If:</h3>
                                    </div>
                                    <ul className="cewi-vs-panel-list">
                                        {cewiAllIncludedReasons.map((item, idx) => (
                                            <li key={idx}><CheckCircle size={14} /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── HOW MUCH DOES ALL INCLUDED COST / ADD AFTER BOOKING / SAME PACKAGE ── */}
            <section className="cewi-all-included-cost-section">
                <div className="cewi-cost-container">
                    <div className="cewi-cost-grid">

                        {/* Cost Card 1 */}
                        <div className="cewi-cost-card">
                            <div className="cewi-cost-icon-wrap"><DollarSign size={24} /></div>
                            <h3 className="cewi-cost-title">How Much Does All Included Cost?</h3>
                            <p className="cewi-cost-body">There is no single price for All Included because pricing depends on factors such as:</p>
                            <ul className="cewi-cost-checklist">
                                {cewiAllIncludedCostFactors.map((item, idx) => (<li key={idx}><CheckCircle size={15} /><span>{item}</span></li>))}
                            </ul>
                            <p className="cewi-cost-note">Compare the actual Cruise-Only and All Included prices for the same sailing before booking.</p>
                        </div>

                        {/* Cost Card 2 */}
                        <div className="cewi-cost-card">
                            <div className="cewi-cost-icon-wrap"><CreditCard size={24} /></div>
                            <h3 className="cewi-cost-title">Can You Add It After Booking?</h3>
                            <p className="cewi-cost-body">Celebrity's current info says the package is selected at booking and is not generally available to add afterward in the same way as a normal package.</p>
                            <p className="cewi-cost-note">Existing guests should check their Cruise Planner or contact Celebrity for options applicable to their booking.</p>
                        </div>

                        {/* Cost Card 3 */}
                        <div className="cewi-cost-card">
                            <div className="cewi-cost-icon-wrap"><Users size={24} /></div>
                            <h3 className="cewi-cost-title">Same Package for All Guests?</h3>
                            <p className="cewi-cost-body">For eligible All Included bookings, Celebrity states that all guests in the same stateroom must choose the same pricing package.</p>
                            <p className="cewi-cost-note">This is particularly important for couples or families where one traveler drinks alcohol and another does not.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHAT TO BUDGET SEPARATELY ── */}
            <section className="cewi-budget-section">
                <div className="cewi-budget-container">
                    <div className="cewi-budget-grid">

                        {/* Left Column: Heading and intro */}
                        <div className="cewi-budget-info-col">
                            <span className="cewi-eyebrow">PLAN AHEAD</span>
                            <h2 className="cewi-section-heading">What Should You Budget for Separately?</h2>
                            <div className="cewi-heading-separator-bar"></div>
                            <p className="cewi-budget-intro-text">
                                A realistic Celebrity cruise budget should account for more than just the base cruise fare. Divide your extra expenses into three distinct phases to ensure no surprises.
                            </p>
                        </div>

                        {/* Right Column: Timeline budget cards */}
                        <div className="cewi-budget-cards-col">
                            <div className="cewi-budget-timeline">

                                {/* Before Sailing */}
                                <div className="cewi-budget-timeline-card">
                                    <div className="cewi-budget-card-header">
                                        <div className="cewi-budget-icon-wrap"><Calendar size={18} /></div>
                                        <h3 className="cewi-budget-card-title">Before Sailing</h3>
                                    </div>
                                    <ul className="cewi-budget-pill-list">
                                        {cewiBudgetBefore.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                {/* During the Cruise */}
                                <div className="cewi-budget-timeline-card">
                                    <div className="cewi-budget-card-header">
                                        <div className="cewi-budget-icon-wrap"><Ship size={18} /></div>
                                        <h3 className="cewi-budget-card-title">During the Cruise</h3>
                                    </div>
                                    <ul className="cewi-budget-pill-list">
                                        {cewiBudgetDuring.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                                {/* After the Cruise */}
                                <div className="cewi-budget-timeline-card">
                                    <div className="cewi-budget-card-header">
                                        <div className="cewi-budget-icon-wrap"><Plane size={18} /></div>
                                        <h3 className="cewi-budget-card-title">After the Cruise</h3>
                                    </div>
                                    <ul className="cewi-budget-pill-list">
                                        {cewiBudgetAfter.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── HOW TO GET BEST VALUE ── */}
            <section className="cewi-value-steps-section">
                <div className="cewi-valsteps-container">

                    {/* Centered Header */}
                    <div className="cewi-valsteps-header">
                        <span className="cewi-eyebrow">MAXIMIZE VALUE</span>
                        <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>How to Get the Best Value From <br /> Celebrity Cruise Inclusions</h2>
                        <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                        <p className="cewi-valsteps-intro-text" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 44px' }}>
                            Get the most out of your fare inclusions by planning ahead. Follow these steps to optimize your options before you book.
                        </p>
                    </div>

                    {/* Single Row 4 Grid cards */}
                    <div className="cewi-valsteps-card-grid-row">
                        {cewiValueSteps.map((item, idx) => (
                            <div key={idx} className="cewi-valsteps-card" data-num={String(idx + 1).padStart(2, '0')}>
                                <div className="cewi-valsteps-card-num">0{idx + 1}</div>
                                <div className="cewi-valsteps-card-body">
                                    <h3 className="cewi-valsteps-card-title">{item.title}</h3>
                                    <p className="cewi-valsteps-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── IS IT ALL INCLUSIVE? ── */}
            <section className="cewi-value-section">
                <div className="cewi-value-container">
                    <div className="cewi-value-grid">
                        <div className="cewi-value-left-col">
                            <div className="cewi-value-eyebrow-row">
                                <Wallet size={18} />
                                <span className="cewi-value-eyebrow-text">IS A CELEBRITY CRUISE ALL INCLUSIVE?</span>
                            </div>
                            <h2 className="cewi-value-heading">Not Fully All Inclusive in the Traditional Sense</h2>
                            <div className="cewi-value-separator"></div>
                            <p className="cewi-value-body-lead">
                                Celebrity Cruises should not automatically be considered fully all-inclusive in the traditional luxury-resort sense. Celebrity offers All Included pricing, but the package covers specific benefits rather than every possible onboard or vacation expense.
                            </p>
                            <p className="cewi-value-body-desc">
                                For example, specialty dining, shore excursions, spa treatments, shopping, flights, and other optional purchases can still cost extra. The phrase All Included therefore means a bundled Celebrity fare with specified amenities, not that every expense during the trip is covered.
                            </p>
                            <div className="cewi-value-quote-card">
                                <span className="cewi-quote-mark">"</span>
                                <p className="cewi-value-emphasis">
                                    Compare the complete cost of the same sailing under each fare option before deciding which one fits your travel style.
                                </p>
                            </div>
                        </div>

                        <div className="cewi-value-right-col">
                            <div className="cewi-value-inclusion-card">
                                <h3 className="cewi-inclusion-card-title">What Is Included for First-Time Cruisers</h3>
                                <p className="cewi-inclusion-card-subtitle">Your cruise fare pays for the core ship experience:</p>
                                <div className="cewi-value-list-items">
                                    {cewiFirstTimeCore.map((item, idx) => (
                                        <div key={idx} className="cewi-value-list-item">
                                            <CheckCircle size={16} className="cewi-value-item-icon" />
                                            <div className="cewi-value-item-details">
                                                <span className="cewi-value-item-title">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="cewi-inclusion-card-subtitle" style={{ marginTop: '18px' }}>Then check whether your fare also includes:</p>
                                <div className="cewi-value-list-items">
                                    {cewiFirstTimeCheck.map((item, idx) => (
                                        <div key={idx} className="cewi-value-list-item">
                                            <HelpCircle size={16} className="cewi-value-item-icon" />
                                            <div className="cewi-value-item-details">
                                                <span className="cewi-value-item-title">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── INCLUSIONS BY CATEGORY TABLE ── */}
            <section className="cewi-table-section cewi-comparison-section-redesign">
                <div className="cewi-table-container" style={{ maxWidth: '1080px' }}>
                    <span className="cewi-eyebrow">FULL BREAKDOWN</span>
                    <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruise Inclusions by Category</h2>
                    <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                    <div className="cewi-compare-wrapper">
                        <table className="cewi-compare-table">
                            <thead>
                                <tr><th>Category</th><th className="cewi-uni-header">Usually Included?</th><th className="cewi-typical-header">Important Note</th></tr>
                            </thead>
                            <tbody>
                                {cewiByCategory.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cewi-feature-title">{row.category}</td>
                                        <td className="cewi-uni-cell"><span className="cewi-uni-badge"><CheckCircle size={13} /><span>{row.included}</span></span></td>
                                        <td className="cewi-typical-cell"><span className="cewi-typical-value">{row.note}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="cewi-expert-insight-section">
                <div className="cewi-expert-insight-container">
                    <div className="cewi-expert-portrait-panel">
                        <div className="cewi-expert-img-frame">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Travel Expert" className="cewi-expert-img" />
                            <div className="cewi-expert-img-overlay"></div>
                            <span className="cewi-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="cewi-expert-stats-strip">
                            <div className="cewi-expert-stat-box">
                                <div className="cewi-expert-stat-num">40+</div>
                                <div className="cewi-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="cewi-expert-stat-box">
                                <div className="cewi-expert-stat-num">121+</div>
                                <div className="cewi-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    <div className="cewi-expert-content-panel">
                        <div className="cewi-expert-eyebrow-row">
                            <Sparkles size={16} />
                            <span className="cewi-eyebrow">MEET THE CEO</span>
                        </div>
                        <h2 className="cewi-section-heading1">Insight from Angela Hughes</h2>
                        <div className="cewi-heading-separator-bar"></div>

                        <div className="cewi-expert-quote-card">
                            <span className="cewi-expert-quote-mark">"</span>
                            <p className="cewi-expert-quote-text">
                                The smartest way to shop a Celebrity fare is to price out Cruise-Only and All Included on the exact same sailing. Once you know your real drink and Wi-Fi habits, the better value becomes obvious.
                            </p>
                        </div>

                        <div className="cewi-expert-priorities">
                            <h5 className="cewi-priorities-title">What to Compare Before Booking:</h5>
                            <div className="cewi-expert-pills">
                                {['Cruise-Only vs All Included Pricing', 'Classic vs Premium Drinks', 'Basic vs Premium Wi-Fi', 'Gratuity Terms', 'Specialty Dining Costs', 'The Retreat Benefits'].map(pill => (
                                    <span key={pill} className="cewi-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="cewi-expert-footer-bio">
                            <p className="cewi-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom travel planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="cewi-takeaways-new-section">
                <div className="cewi-takeaways-new-container">

                    {/* Centered Header */}
                    <div className="cewi-takeaways-new-header">
                        <span className="cewi-eyebrow">SUMMARY</span>
                        <h2 className="cewi-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                        <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                        <p className="cewi-takeaways-new-intro" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
                            Review the most essential facts regarding Celebrity Cruise fare inclusions to help plan your cruise budget effectively.
                        </p>
                    </div>

                    {/* 4-3 Grid Container */}
                    <div className="cewi-takeaways-grid-row-4-3">
                        {cewiKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="cewi-takeaway-new-card" data-num={String(idx + 1).padStart(2, '0')}>
                                <div className="cewi-takeaway-new-badge">0{idx + 1}</div>
                                <p className="cewi-takeaway-new-desc">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="cewi-faq-section">
                <div className="cewi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="cewi-section-heading">Frequently Asked Questions</h2>
                        <div className="cewi-heading-separator-bar cewi-bar-centered"></div>
                    </div>
                    <div className="cewi-faq-list-wrapper">
                        {cewiFaqs.map((faq, index) => (
                            <div key={index} className="cewi-faq-item" onClick={() => cewiToggleFaq(index)}>
                                <div className="cewi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="cewi-faq-toggle-icon">{cewiActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {cewiActiveFaq === index && (
                                    <p className="cewi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONCLUSION ── */}
            <section className="cewi-conclusion-new-section">
                <div className="cewi-conclusion-new-container">
                    <div className="cewi-conclusion-new-grid">

                        {/* Left Column: Styled summary card */}
                        <div className="cewi-conclusion-visual-card">
                            <div className="cewi-conclusion-card-overlay"></div>
                            <div className="cewi-conclusion-card-header">
                                <Award size={30} className="cewi-conclusion-award-icon" />
                                <span className="cewi-conclusion-tag">SUMMARY</span>
                            </div>
                            <div className="cewi-conclusion-card-body">
                                <h3 className="cewi-conclusion-card-title">Booking Advice</h3>
                                <p className="cewi-conclusion-card-desc">
                                    "A Celebrity Cruise delivers an exceptional premium resort experience, but booking smart means choosing the fare package that fits your lifestyle."
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Key summary blocks */}
                        <div className="cewi-conclusion-text-col">
                            <span className="cewi-eyebrow">FINAL VERDICT</span>
                            <h2 className="cewi-section-heading">Compare the Complete Cost Before You Book</h2>
                            <div className="cewi-heading-separator-bar"></div>

                            <div className="cewi-conclusion-bullets">
                                <div className="cewi-conclusion-bullet">
                                    <CheckCircle size={18} className="cewi-bullet-icon" />
                                    <p><strong>Standard Essentials:</strong> The core fare includes stateroom accommodations, main meals, entertainment, pools, and fitness center access.</p>
                                </div>
                                <div className="cewi-conclusion-bullet">
                                    <CheckCircle size={18} className="cewi-bullet-icon" />
                                    <p><strong>The Fare Choice:</strong> All Included bundles Classic Drinks, Basic Wi-Fi, and gratuities, while Cruise-Only lets you pay separately for individual choices.</p>
                                </div>
                                <div className="cewi-conclusion-bullet">
                                    <CheckCircle size={18} className="cewi-bullet-icon" />
                                    <p><strong>Additional Expenses:</strong> Specialty dining, shore excursions, spa services, and casino spending remain optional extras across all standard bookings.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cewi-cta-redesign-section">
                <div className="cewi-cta-aurora-glow"></div>
                <div className="cewi-cta-crystal cewi-cta-crystal-1"></div>
                <div className="cewi-cta-crystal cewi-cta-crystal-2"></div>
                <div className="cewi-cta-crystal cewi-cta-crystal-3"></div>
                <div className="cewi-cta-grid-lines"></div>

                <div className="cewi-cta-content">
                    <div className="cewi-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="cewi-cta-eyebrow">PLAN YOUR CELEBRITY CRUISE WITH TRIPS AND SHIPS</span>
                    <h2 className="cewi-cta-title">Ready to Compare Cruise-Only and All Included Pricing?</h2>
                    <div className="cewi-cta-bar"></div>
                    <p className="cewi-cta-subtitle">
                        Planning a Celebrity cruise? Before you book, compare the Cruise-Only and All Included fares for the same ship, sailing date, and cabin category. Check drinks, Wi-Fi, gratuities, dining, and other inclusions against your expected spending so you can choose the fare that best matches your travel style and budget.
                    </p>
                    <div className="cewi-cta-actions">
                        <Link to="/contact" className="cewi-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="cewi-cta-btn-arrow" />
                        </Link>
                        <Link to="/celebrity-cruises" className="cewi-cta-secondary-btn">
                            <LayoutList size={18} />
                            <span>Explore Celebrity Cruises</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatsIncludedCelebrityCruise