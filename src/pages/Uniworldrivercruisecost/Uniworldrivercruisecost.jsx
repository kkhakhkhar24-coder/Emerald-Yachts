import Navbar from '../../components/Navbar/Navbar'
import './UniworldRiverCruiseCost.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

// import hero1 from '../../assets/UniworldRiverCruiseCost/uniworld-river-ship-sailing-europe.jpg'
// import hero2 from '../../assets/UniworldRiverCruiseCost/elegant-suite-interior.jpg'
// import hero3 from '../../assets/UniworldRiverCruiseCost/danube-castle-scenery.jpg'

// import imgSuite from '../../assets/UniworldRiverCruiseCost/elegant-suite-interior.jpg'
// import imgDining from '../../assets/UniworldRiverCruiseCost/fine-dining-onboard.jpg'
// import imgExcursion from '../../assets/UniworldRiverCruiseCost/guided-city-excursion.jpg'
// import imgValue from '../../assets/UniworldRiverCruiseCost/danube-castle-scenery.jpg'
// import imgDeals from '../../assets/UniworldRiverCruiseCost/uniworld-river-ship-sailing-europe.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, TrendingUp, TrendingDown, Wallet,
    DollarSign, Wifi, Plane, Wine, Bed, Snowflake, Leaf,
    Tag, PiggyBank, CalendarClock, BadgePercent, AlertCircle, CalendarDays
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function UniworldRiverCruiseCost() {
    const [uicActiveFaq, setUicActiveFaq] = useState(null)
    const uicToggleFaq = i => setUicActiveFaq(uicActiveFaq === i ? null : i)

    const [uicSelectedFactor, setUicSelectedFactor] = useState(0)

    const uicFaqs = [
        { question: 'How much does a Uniworld River Cruise cost?', answer: 'Most itineraries start around $2,800 per person, with luxury suites and longer cruises costing considerably more.' },
        { question: 'Are Uniworld cruises all-inclusive?', answer: 'Yes. Most fares include accommodations, meals, beverages, excursions, Wi-Fi, and gratuities.' },
        { question: 'Why are Uniworld River Cruises expensive?', answer: 'They include many luxury services that are charged separately on other vacations, including premium drinks, excursions, and gratuities.' },
        { question: 'What is the average price for a 7-night Uniworld cruise?', answer: 'A typical 7-night itinerary ranges from approximately $2,800 to $6,000 or more per person.' },
        { question: 'Do prices include airfare?', answer: 'Generally, airfare is not included unless part of a special promotion.' },
        { question: 'When are Uniworld cruises cheapest?', answer: 'Early spring, late autumn, and promotional booking periods often offer the lowest fares.' },
        { question: 'Do prices include gratuities?', answer: 'Yes. Onboard gratuities are generally included in the cruise fare.' },
        { question: 'Are shore excursions included?', answer: 'Yes. Most daily guided excursions are included.' },
        { question: 'Does cabin type affect pricing?', answer: 'Yes. Suites and balcony cabins cost significantly more than entry-level staterooms.' },
        { question: 'Are drinks included?', answer: 'Yes. Premium wines, cocktails, beer, spirits, coffee, tea, and many soft drinks are typically included.' },
        { question: 'Are there discounts for early bookings?', answer: 'Uniworld frequently offers early booking promotions, depending on the sailing and availability.' },
        { question: 'Is travel insurance included?', answer: 'No. Travel insurance is generally purchased separately.' },
        { question: 'Can solo travelers find deals?', answer: 'Occasionally. Selected departures feature reduced or waived single supplements.' },
        { question: 'Are Christmas Market cruises more expensive?', answer: 'Yes. These popular seasonal departures often carry premium pricing.' },
        { question: 'Is a Uniworld River Cruise worth the cost?', answer: 'For travelers seeking an upscale, highly inclusive vacation with exceptional service and immersive excursions, many consider Uniworld to offer strong overall value.' }
    ]

    const uicPriceRange = [
        { length: '7 Nights', price: '$2,800–$6,000+' },
        { length: '8–10 Nights', price: '$3,800–$7,500+' },
        { length: '11–14 Nights', price: '$5,000–$10,000+' },
        { length: 'Grand Voyages', price: '$9,000–$18,000+' }
    ]

    const uicDestinations = [
        'Danube River', 'Rhine River', 'Seine River', 'Douro River', 'Venice Lagoon',
        'Burgundy & Provence', 'Egypt (Nile)', 'India (Ganges)', 'Peru (Amazon)'
    ]

    const uicDuration = [
        { title: '7-night cruises', desc: 'ideal for first-time travelers.' },
        { title: '10–14-night itineraries', desc: 'allow deeper destination exploration.' },
        { title: 'Grand journeys', desc: 'combine multiple cruises for extended vacations.' }
    ]

    const uicCabinTypes = [
        { type: 'Classic Stateroom', level: 'Lowest' },
        { type: 'Deluxe Stateroom', level: 'Moderate' },
        { type: 'French Balcony', level: 'Mid-High' },
        { type: 'Balcony Suite', level: 'Premium' },
        { type: 'Royal Suite', level: 'Luxury' }
    ]

    const uicSeasons = [
        { season: 'Early Spring', pricing: 'Lower', low: true },
        { season: 'Late Spring', pricing: 'High', low: false },
        { season: 'Summer', pricing: 'High', low: false },
        { season: 'Autumn', pricing: 'High', low: false },
        { season: 'Christmas Markets', pricing: 'Peak', low: false },
        { season: 'Winter (select itineraries)', pricing: 'Lower', low: true }
    ]

    const uicFactors = [
        {
            title: 'Destination',
            icon: MapPin,
            text: 'European itineraries generally offer the widest range of pricing, while more specialized destinations often command higher fares.',
            tags: uicDestinations,
            note: 'Long-haul and exotic destinations usually cost more due to limited departures and higher operating expenses.',
            type: 'tags'
        },
        {
            title: 'Cruise Duration',
            icon: Ship,
            text: 'Longer itineraries naturally increase the total fare but often provide better value on a per-night basis.',
            list: uicDuration,
            type: 'list'
        },
        {
            title: 'Stateroom Category',
            icon: Bed,
            text: 'Cabin selection has a significant impact on pricing. From classic staterooms to royal suites:',
            rows: uicCabinTypes,
            note: 'Higher-category accommodations typically include additional space, upgraded amenities, and enhanced services such as butler assistance.',
            type: 'rows'
        },
        {
            title: 'Travel Season',
            icon: Calendar,
            text: 'Pricing fluctuates throughout the year. Holiday cruises and Christmas Market sailings are usually among the most expensive.',
            seasons: uicSeasons,
            type: 'seasons'
        }
    ]

    const uicIncludedFare = [
        'Luxury accommodations', 'All meals', 'Fine dining experiences', 'Unlimited premium wines and spirits',
        'Specialty coffee and beverages', 'Daily guided shore excursions', 'Complimentary Wi-Fi',
        'Onboard gratuities', 'Entertainment', 'Fitness facilities', 'Concierge-level service',
        'Airport transfers on eligible itineraries'
    ]

    const uicExtraCosts = [
        { expense: 'International airfare', always: true, icon: Plane, desc: 'Flights to and from your cruise departure cities.' },
        { expense: 'Travel insurance', always: true, icon: Award, desc: 'Essential protection for trip cancellation and medical coverage.' },
        { expense: 'Spa treatments', always: true, icon: Sparkles, desc: 'Onboard massages, facials, and wellness services.' },
        { expense: 'Personal shopping', always: true, icon: Tag, desc: 'Souvenirs, boutique purchases, and local goods.' },
        { expense: 'Passport & visa fees', always: true, icon: MapPin, desc: 'Necessary international travel documentation.' },
        { expense: 'Independent private tours', always: true, icon: Compass, desc: 'Custom shore excursions organized independently.' },
        { expense: 'Pre/post-cruise hotels', always: false, icon: Bed, desc: 'Hotel stays before embarkation or after disembarkation.' },
        { expense: 'Optional premium experiences', always: false, icon: Crown, desc: 'Exclusive curated tours or premium tastings.' }
    ]

    const uicCoupleCost = [
        { length: '7 Nights', price: '$5,600–$12,000+' },
        { length: '10 Nights', price: '$7,600–$15,000+' },
        { length: '14 Nights', price: '$10,000–$20,000+' }
    ]

    const uicWorthIncluded = [
        'Unlimited premium drinks', 'Daily guided excursions', 'Fine dining', 'Gratuities',
        'Luxury accommodations', 'Personalized service', 'Wi-Fi', 'Entertainment'
    ]

    const uicDealTips = [
        {
            Icon: CalendarClock,
            title: 'Book Early',
            body: 'Early reservations often provide:',
            items: ['Best cabin selection', 'Promotional fares', 'Reduced deposits', 'Added onboard benefits']
        },
        {
            Icon: BadgePercent,
            title: 'Watch for Seasonal Promotions',
            body: 'Common offers may include:',
            items: ['Limited-time savings', 'Complimentary airfare promotions', 'Reduced single supplements', 'Suite upgrades', 'Included airfare credits', 'Bonus travel credits']
        },
        {
            Icon: Leaf,
            title: 'Consider Shoulder Season Travel',
            body: 'Spring and late autumn departures often offer:',
            items: ['Lower prices', 'Fewer crowds', 'Comfortable weather', 'Greater cabin availability']
        },
        {
            Icon: Calendar,
            title: 'Travel with Flexible Dates',
            body: 'Being flexible by even one or two weeks may reduce pricing considerably, especially outside major holiday periods.',
            items: []
        }
    ]

    const uicComparison = [
        { feature: 'Premium beverages', uniworld: 'Included', typical: 'Often included' },
        { feature: 'Shore excursions', uniworld: 'Included', typical: 'Included' },
        { feature: 'Gratuities', uniworld: 'Included', typical: 'Sometimes extra' },
        { feature: 'Butler service', uniworld: 'Select suites', typical: 'Limited' },
        { feature: 'Luxury décor', uniworld: 'Boutique style', typical: 'Varies' },
        { feature: 'Airport transfers', uniworld: 'Eligible sailings', typical: 'Varies' },
        { feature: 'Overall inclusiveness', uniworld: 'Excellent', typical: 'Good–Excellent' }
    ]

    const uicCheapestTimes = [
        'Early booking promotions', 'Shoulder season departures', 'Selected spring cruises',
        'Late autumn itineraries', 'Limited-time promotional events'
    ]

    const uicBudgetItems = [
        'Flights', 'Travel insurance', 'Hotel nights before embarkation', 'Transfers not included',
        'Souvenirs', 'Spa services', 'Optional private excursions'
    ]

    const uicKeyTakeaways = [
        'Uniworld River Cruise prices vary by destination, season, itinerary, and cabin category.',
        'Seven-night cruises typically start around $2,800 per person.',
        'Luxury suites and holiday departures carry premium pricing.',
        'Most fares include dining, premium beverages, excursions, Wi-Fi, and gratuities.',
        'Airfare, spa treatments, and travel insurance are generally extra.',
        'Early booking and shoulder season travel often provide the best value.',
        'Comparing inclusions—not just base fare—gives a better picture of overall cost.',
        'Consulting an expert travel advisor helps secure exclusive promotions and benefits.'
    ]

    const uicSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com/",
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.tripsshipsluxurytravel.com/#logo",
                    "url": "https://www.tripsshipsluxurytravel.com/logo.png",
                    "caption": "Trips & Ships Luxury Travel"
                },
                "image": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#logo"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cost-deals/",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cost-deals/",
                "name": "How Much Does a Uniworld River Cruise Cost?",
                "isPartOf": { "@id": "https://www.tripsshipsluxurytravel.com/#website" },
                "about": { "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cost-deals/#article" }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cost-deals/#article",
                "headline": "How Much Does a Uniworld River Cruise Cost?",
                "description": "Discover Uniworld River Cruise prices, what's included, average costs by itinerary, suite types, seasonal pricing, and tips to find the best deals.",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cost-deals/" }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "How Much Does a Uniworld River Cruise Cost?", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cost-deals/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uicFaqs.map(f => ({
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
                <title>How Much Does a Uniworld River Cruise Cost? | Pricing Guide</title>
                <meta name="description" content="Discover average prices, cabin options, inclusions, and tips for budgeting a Uniworld Boutique River Cruise." />
                <link rel="canonical" href="https://www.tripsshipsluxurytravel.com/uniworld-river-cruise-cost" />
                <script type="application/ld+json">{JSON.stringify(uicSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO SECTION ── */}
            <section className="uic-hero-section">
                <div className="uic-hero-placeholder"></div>
                <div className="uic-hero-content-wrapper">
                    <div className="uic-hero-eyebrow-tag">
                        <Wallet size={16} />
                        <span>UNIWORLD COST GUIDE</span>
                    </div>
                    <h1 className="uic-hero-main-title">How Much Does a Uniworld River Cruise Cost?</h1>
                    <p className="uic-hero-subtitle-text">
                        An honest breakdown of fares, suites, everyday inclusions, and out-of-pocket costs.
                    </p>
                </div>
            </section>

            {/* ── INTRO SECTION (GRID) ── */}
            <section className="uic-intro-section">
                <div className="uic-intro-container">
                    <div className="uic-intro-grid">
                        <div className="uic-intro-text-col">
                            <span className="uic-eyebrow">EXCLUSIVE TRAVEL EXPERIENCE</span>
                            <h2 className="uic-section-heading">How Much Does a Uniworld River Cruise Cost?</h2>
                            <div className="uic-heading-separator-bar"></div>
                            <p className="uic-intro-paragraph">
                                Luxury river cruising is often associated with premium pricing, but understanding what you receive for the fare helps put the cost into perspective. Uniworld Boutique River Cruises is one of the most inclusive luxury river cruise lines, with fares covering accommodations, gourmet dining, premium beverages, daily excursions, gratuities, and many onboard amenities.
                            </p>
                        </div>
                        <div className="uic-intro-image-col">
                            <div className="uic-image-frame">
                                {/* <img src={imgSuite} alt="Elegant Suite on a Uniworld Boutique River Cruise" className="uic-frame-img" /> */}
                                <div className="uic-frame-overlay"></div>
                                <div className="uic-image-badge"><Crown size={13} /><span>Boutique Luxury</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TYPICAL PRICE RANGE (GRID) ── */}
            <section className="uic-price-section uic-bg-blue-tint">
                <div className="uic-price-container">
                    <span className="uic-eyebrow">ESTIMATED FARES</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>Typical Uniworld River Cruise Price Range</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-price-intro">Cruise fares vary significantly based on itinerary duration, destination, cabin category, and season. Below are average starting prices per person.</p>

                    <div className="uic-price-grid">
                        {uicPriceRange.map((row, idx) => (
                            <div key={idx} className="uic-price-card">
                                <div className="uic-price-card-header">
                                    <div className="uic-price-card-icon"><Compass size={28} /></div>
                                    <h3 className="uic-price-card-title">{row.length}</h3>
                                </div>
                                <div className="uic-price-card-divider"></div>
                                <div className="uic-price-card-body">
                                    <span className="uic-price-card-label">Avg. Price Range</span>
                                    <span className="uic-price-card-value">{row.price}</span>
                                    <span className="uic-price-card-note">Per Person / Double Occ.</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uic-price-footnote-badge">
                        <AlertCircle size={15} />
                        <span>Luxury suites, holiday sailings, and limited-capacity departures can exceed these ranges.</span>
                    </div>
                </div>
            </section>

            {/* ── PRICING FACTORS (TABBED) ── */}
            <section className="uic-factors-section">
                <div className="uic-factors-container">
                    <span className="uic-eyebrow">PRICING FACTORS</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>What Affects the Cost of a Uniworld River Cruise?</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-factors-intro">Several key factors determine the final fare of your Uniworld River Cruise. Select a factor to explore how it impacts pricing.</p>

                    <div className="uic-factors-dashboard">

                        {/* ── LEFT: Vertical Step Menu ── */}
                        <div className="uic-factors-tabs">
                            {uicFactors.map((factor, idx) => {
                                const Icon = factor.icon
                                const isActive = uicSelectedFactor === idx
                                return (
                                    <button
                                        key={idx}
                                        className={`uic-factor-tab-btn ${isActive ? 'active' : ''}`}
                                        onClick={() => setUicSelectedFactor(idx)}
                                    >
                                        <div className="uic-factor-tab-number">{String(idx + 1).padStart(2, '0')}</div>
                                        <div className="uic-factor-tab-info">
                                            <div className="uic-factor-tab-icon"><Icon size={16} /></div>
                                            <span className="uic-factor-tab-title">{factor.title}</span>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>

                        {/* ── RIGHT: Detail Panel ── */}
                        <div className="uic-factor-panel">
                            <div className="uic-factor-panel-inner">

                                {/* Image Placeholder Column */}
                                <div className="uic-factor-panel-image">
                                    <div className="uic-factor-panel-image-bg">
                                        {(() => { const BgIcon = uicFactors[uicSelectedFactor].icon; return <BgIcon size={110} className="uic-factor-panel-bg-icon" /> })()}
                                    </div>
                                    <div className="uic-factor-panel-image-overlay">
                                        <div className="uic-factor-panel-img-details">
                                            <p className="uic-factor-panel-label" style={{ color: 'rgba(255, 255, 255, 0.7)', border: 'none', margin: '0 0 4px', padding: 0 }}>
                                                FACTOR {String(uicSelectedFactor + 1).padStart(2, '0')} OF {uicFactors.length}
                                            </p>
                                            <h3 className="uic-factor-panel-title" style={{ color: '#fff', margin: 0, fontSize: '26px', fontWeight: '800' }}>
                                                {uicFactors[uicSelectedFactor].title}
                                            </h3>
                                        </div>
                                        <span className="uic-factor-panel-img-num">{String(uicSelectedFactor + 1).padStart(2, '0')}</span>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="uic-factor-panel-content">
                                    <p className="uic-factor-panel-desc">{uicFactors[uicSelectedFactor].text}</p>

                                    {/* TAGS grid */}
                                    {uicFactors[uicSelectedFactor].type === 'tags' && (
                                        <div className="uic-factor-tags">
                                            {uicFactors[uicSelectedFactor].tags.map((item, idx) => (
                                                <span key={idx} className="uic-factor-tag"><MapPin size={12} />{item}</span>
                                            ))}
                                        </div>
                                    )}

                                    {/* LIST grid */}
                                    {uicFactors[uicSelectedFactor].type === 'list' && (
                                        <div className="uic-factor-list">
                                            {uicFactors[uicSelectedFactor].list.map((item, idx) => (
                                                <div key={idx} className="uic-factor-list-card">
                                                    <div className="uic-factor-list-num">{String(idx + 1).padStart(2, '0')}</div>
                                                    <div>
                                                        <p className="uic-factor-list-title">{item.title}</p>
                                                        <p className="uic-factor-list-desc">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* ROWS grid */}
                                    {uicFactors[uicSelectedFactor].type === 'rows' && (
                                        <div className="uic-factor-rows">
                                            {uicFactors[uicSelectedFactor].rows.map((row, idx) => (
                                                <div key={idx} className="uic-factor-row">
                                                    <div className="uic-factor-row-rank">{idx + 1}</div>
                                                    <span className="uic-factor-row-label">{row.type}</span>
                                                    <span className="uic-factor-row-value">{row.level}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* SEASONS grid */}
                                    {uicFactors[uicSelectedFactor].type === 'seasons' && (
                                        <div className="uic-factor-seasons">
                                            {uicFactors[uicSelectedFactor].seasons.map((row, idx) => (
                                                <div key={idx} className="uic-factor-season">
                                                    <span className="uic-factor-season-icon">
                                                        {row.low ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                                                    </span>
                                                    <span className="uic-factor-season-label">{row.season}</span>
                                                    <span className={`uic-season-tag ${row.low ? 'uic-season-low' : 'uic-season-high'}`}>
                                                        {row.pricing}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Note */}
                                    {uicFactors[uicSelectedFactor].note && (
                                        <div className="uic-factor-panel-note">
                                            <AlertCircle size={15} />
                                            <span>{uicFactors[uicSelectedFactor].note}</span>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED IN FARE ── */}
            <section className="uic-feature-section uic-bg-azure">
                <div className="uic-feature-container">
                    <div className="uic-feature-grid uic-reverse">
                        <div className="uic-feature-text-col">
                            <span className="uic-eyebrow">CRUISE FARE INCLUSIONS</span>
                            <h2 className="uic-section-heading">What Is Included in the Cruise Fare?</h2>
                            <div className="uic-heading-separator-bar"></div>
                            <p className="uic-feature-lead">One reason Uniworld commands premium pricing is its extensive list of inclusions.</p>
                            <p className="uic-feature-body">Most fares include:</p>
                            <ul className="uic-check-list uic-check-list-2col">
                                {uicIncludedFare.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="uic-feature-image-col">
                            <div className="uic-image-frame">
                                {/* <img src={imgDining} alt="Gourmet dining included on a Uniworld River Cruise" className="uic-frame-img" /> */}
                                <div className="uic-frame-overlay"></div>
                                <div className="uic-image-badge"><Utensils size={13} /><span>All-Inclusive Fare</span></div>
                            </div>
                            <div className="uic-feature-callout">
                                <Sparkles size={18} />
                                <p>Because many additional costs are already covered, travelers often spend less onboard than expected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ADDITIONAL COSTS ── */}
            <section className="uic-costs-section uic-bg-alabaster">
                <div className="uic-costs-container">
                    <span className="uic-eyebrow">BUDGET PLANNING</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>Additional Costs to Budget For</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-costs-intro">Although Uniworld Boutique River Cruises is highly inclusive, certain out-of-pocket expenses may still apply when planning your trip.</p>

                    <div className="uic-costs-grid">
                        {uicExtraCosts.map((row, idx) => {
                            const CostIcon = row.icon
                            return (
                                <div key={idx} className="uic-cost-card">
                                    <div className="uic-cost-card-header">
                                        <div className="uic-cost-card-icon-wrap">
                                            <CostIcon size={20} />
                                        </div>
                                        <span className={`uic-cost-badge ${row.always ? 'always' : 'sometimes'}`}>
                                            {row.always ? 'Always Extra' : 'Sometimes'}
                                        </span>
                                    </div>
                                    <h3 className="uic-cost-card-title">{row.expense}</h3>
                                    <p className="uic-cost-card-desc">{row.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="uic-costs-footnote">
                        <AlertCircle size={15} />
                        <span>Take these additional travel expenses into consideration when drafting your final cruise budget.</span>
                    </div>
                </div>
            </section>

            {/* ── AVERAGE COST FOR COUPLES ── */}
            <section className="uic-couples-section">
                <div className="uic-couples-container">
                    <span className="uic-eyebrow">COUPLES PRICING</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>Average Cost for Couples</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-couples-intro">Many travelers book as couples. Typical total cruise fares before airfare may range from:</p>

                    <div className="uic-couples-grid">
                        {uicCoupleCost.map((row, idx) => (
                            <div key={idx} className="uic-couple-card">
                                {/* Card Top — navy header */}
                                <div className="uic-couple-card-header">
                                    <div className="uic-couple-icon"><Clock size={20} /></div>
                                    <span className="uic-couple-length">{row.length}</span>
                                    <div className="uic-couple-users"><Users size={13} /><span>Per Couple</span></div>
                                </div>
                                {/* Card Bottom — price row */}
                                <div className="uic-couple-card-body">
                                    <div className="uic-couple-price-row">
                                        <span className="uic-couple-label">Est. Cost</span>
                                        <span className="uic-couple-price">{row.price}</span>
                                    </div>
                                    <span className="uic-couple-note">Before airfare · Double Occ.</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uic-couples-footnote">
                        <AlertCircle size={15} />
                        <span>Prices vary depending on promotions, cabin selection, and departure date.</span>
                    </div>
                </div>
            </section>

            {/* ── WORTH THE PRICE ── */}
            <section className="uic-value-section">
                <div className="uic-value-container">
                    <div className="uic-value-grid-split">

                        {/* Left Side: Editorial Argument */}
                        <div className="uic-value-editorial-col">
                            <div className="uic-value-eyebrow-row">
                                <Gem size={18} />
                                <span className="uic-value-eyebrow-text">IS IT WORTH THE PRICE?</span>
                            </div>
                            <h2 className="uic-value-heading">Are Uniworld River Cruises Worth the Price?</h2>
                            <p className="uic-value-body">
                                Rather than comparing only the initial fare, many travelers evaluate the total vacation value. When all day-to-day luxuries are fully included, Uniworld offers highly competitive value in the luxury market.
                            </p>
                            <div className="uic-value-quote-box">
                                <p className="uic-value-emphasis">
                                    "When these inclusions are considered together, travelers often spend significantly less out-of-pocket onboard than on mainstream lines."
                                </p>
                            </div>
                        </div>

                        {/* Right Side: The Luxury Inclusion Card */}
                        <div className="uic-value-card">
                            <h3 className="uic-value-card-title">What's Covered in Your Fare</h3>
                            <p className="uic-value-card-subtitle">Included services that would typically cost extra on other cruises:</p>
                            <div className="uic-value-chip-row">
                                {uicWorthIncluded.map((item, idx) => (
                                    <span key={idx} className="uic-value-chip">
                                        <CheckCircle size={13} />
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── BEST DEALS ── */}
            <section className="uic-deals-section">
                <div className="uic-deals-container">
                    <span className="uic-eyebrow">SAVING STRATEGIES</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>How to Find the Best Uniworld River Cruise Deals</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-table-intro">Booking strategically can lead to significant savings.</p>

                    <div className="uic-deals-grid">
                        {uicDealTips.map((item, idx) => {
                            const DealIcon = item.Icon
                            return (
                                <div key={idx} className="uic-deal-card">
                                    <div className="uic-deal-card-header">
                                        <div className="uic-deal-icon"><DealIcon size={20} /></div>
                                        <span className="uic-deal-step-num">{String(idx + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="uic-deal-title">{item.title}</h3>
                                    <p className="uic-deal-body">{item.body}</p>
                                    {item.items.length > 0 && (
                                        <ul className="uic-deal-items-list">
                                            {item.items.map((listItem, i) => (
                                                <li key={i}>
                                                    <CheckCircle size={12} />
                                                    <span>{listItem}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── COMPARISON ── */}
            <section className="uic-comparison-section uic-bg-slate">
                <div className="uic-comparison-container">
                    <span className="uic-eyebrow">HOW UNIWORLD COMPARES</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>Comparing Uniworld with Other Luxury River Cruise Lines</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-comparison-intro">Comparing included services rather than base fares provides a more accurate measure of overall value.</p>

                    <div className="uic-compare-list">
                        {uicComparison.map((row, idx) => (
                            <div key={idx} className="uic-compare-item">
                                <div className="uic-compare-feature-name">
                                    <div className="uic-compare-indicator"></div>
                                    <span>{row.feature}</span>
                                </div>
                                <div className="uic-compare-grid-cols">
                                    <div className="uic-compare-brand-col uniworld">
                                        <span className="uic-compare-brand-label">Uniworld</span>
                                        <span className="uic-compare-value">{row.uniworld}</span>
                                    </div>
                                    <div className="uic-compare-brand-col typical">
                                        <span className="uic-compare-brand-label">Competitors</span>
                                        <span className="uic-compare-value">{row.typical}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uic-comparison-footnote">
                        <AlertCircle size={15} />
                        <span>Uniworld's boutique model ensures a high ratio of all-inclusive features per sailing compared to the industry standard.</span>
                    </div>
                </div>
            </section>

            {/* ── CHEAPEST TIME TO BOOK ── */}
            <section className="uic-timing-section">
                <div className="uic-timing-container">
                    <span className="uic-eyebrow">TIMING YOUR BOOKING</span>
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>When Is the Cheapest Time to Book?</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <p className="uic-timing-intro">Understanding seasonal pricing cycles can help you secure the best value.</p>

                    <div className="uic-timing-grid">
                        {uicCheapestTimes.map((item, idx) => (
                            <div key={idx} className="uic-timing-card">
                                <div className="uic-timing-card-icon">
                                    <CalendarDays size={20} />
                                </div>
                                <div className="uic-timing-card-content">
                                    <span className="uic-timing-card-label">Strategy {idx + 1}</span>
                                    <h4 className="uic-timing-card-title">{item}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="uic-timing-footnote">
                        <AlertCircle size={15} />
                        <span>Holiday cruises, tulip season, and Christmas Market sailings generally command premium pricing due to strong demand.</span>
                    </div>
                </div>
            </section>

            {/* ── BUDGETING TIPS ── */}
            <section className="uic-feature-section uic-bg-soft">
                <div className="uic-feature-container">
                    <div className="uic-feature-grid">
                        <div className="uic-feature-image-col">
                            <div className="uic-image-frame">
                                {/* <img src={imgDeals} alt="Luxury Uniworld River Cruise sailing through Europe" className="uic-frame-img" /> */}
                                <div className="uic-frame-overlay"></div>
                                <div className="uic-image-badge"><Tag size={13} /><span>Smart Budgeting</span></div>
                            </div>
                        </div>
                        <div className="uic-feature-text-col">
                            <span className="uic-eyebrow">PLAN AHEAD</span>
                            <h2 className="uic-section-heading">Tips for Budgeting Your Cruise</h2>
                            <div className="uic-heading-separator-bar"></div>
                            <p className="uic-feature-lead">Before booking, consider budgeting for:</p>
                            <ul className="uic-check-list uic-check-list-2col">
                                {uicBudgetItems.map((item, idx) => (
                                    <li key={idx}><Compass size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <div className="uic-budget-callout">
                                <AlertCircle size={16} />
                                <span>A complete travel budget helps avoid unexpected expenses.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uic-takeaways-section">
                <div className="uic-takeaways-container">
                    <h2 className="uic-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                    <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    <div className="uic-takeaways-grid">
                        {uicKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="uic-takeaway-item">
                                <CheckCircle size={18} />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="luxe-expert-insight-section">
                <div className="luxe-expert-insight-container">

                    {/* Left Column: Portrait & Stats Grid */}
                    <div className="luxe-expert-portrait-panel">
                        <div className="luxe-expert-img-frame">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury River Cruise Cost Expert" className="luxe-expert-img" />
                            <div className="luxe-expert-img-overlay"></div>
                            <span className="luxe-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="luxe-expert-stats-strip">
                            <div className="luxe-expert-stat-box">
                                <div className="luxe-expert-stat-num">40+</div>
                                <div className="luxe-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="luxe-expert-stat-box">
                                <div className="luxe-expert-stat-num">121+</div>
                                <div className="luxe-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Insight Editorial Panel */}
                    <div className="luxe-expert-content-panel">
                        <div className="luxe-expert-eyebrow-row">
                            <Sparkles size={16} />
                            <span className="luxe-eyebrow">MEET THE CEO</span>
                        </div>
                        <h2 className="medi-section-heading">Insight from Angela Hughes</h2>
                        <div className="medi-heading-separator-bar"></div>

                        <div className="luxe-expert-quote-card">
                            <span className="luxe-expert-quote-mark">“</span>
                            <p className="luxe-expert-quote-text">
                                When my clients compare Uniworld's pricing to a traditional luxury holiday, they quickly realize the math works in their favor. Once you factor in what's included, the per-day value is extraordinary.
                            </p>
                        </div>

                        <div className="luxe-expert-priorities">
                            <h5 className="luxe-priorities-title">Angela's Value Priorities Matrix:</h5>
                            <div className="luxe-expert-pills">
                                {['All-Inclusive Fares', 'Premium Cabin Selection', 'Early Booking Savings', 'Shoulder Season Value', 'Group Discounts', 'Solo Supplements'].map(pill => (
                                    <span key={pill} className="luxe-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="luxe-expert-footer-bio">
                            <p className="luxe-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the river cruising world to deliver custom travel planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uic-faq-section">
                <div className="uic-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="uic-section-heading">Frequently Asked Questions</h2>
                        <div className="uic-heading-separator-bar uic-bar-centered"></div>
                    </div>
                    <div className="uic-faq-list-wrapper">
                        {uicFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uic-faq-item"
                                onClick={() => uicToggleFaq(index)}
                            >
                                <div className="uic-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uic-faq-toggle-icon">{uicActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uicActiveFaq === index && (
                                    <p className="uic-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uic-cta-redesign-section">
                <div className="uic-cta-aurora-glow"></div>
                <div className="uic-cta-crystal uic-cta-crystal-1"></div>
                <div className="uic-cta-crystal uic-cta-crystal-2"></div>
                <div className="uic-cta-crystal uic-cta-crystal-3"></div>
                <div className="uic-cta-grid-lines"></div>

                <div className="uic-cta-content">
                    <div className="uic-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uic-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="uic-cta-title">Ready to Find Your <br /> Perfect Uniworld Sailing?</h2>
                    <div className="uic-cta-bar"></div>
                    <p className="uic-cta-subtitle">
                        Compare Uniworld itineraries, review current promotions, and choose the cruise that best fits your destination, travel style, and budget. Booking early can help secure preferred cabins and the most attractive fares.
                    </p>
                    <div className="uic-cta-actions">
                        <Link to="/contact" className="uic-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="uic-cta-btn-arrow" />
                        </Link>
                        <Link to="/uniworld-river-cruises" className="uic-cta-secondary-btn">
                            <LayoutList size={18} />
                            <span>Explore Uniworld Itineraries</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UniworldRiverCruiseCost