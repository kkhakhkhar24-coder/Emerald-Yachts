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
    const [uccActiveFaq, setUccActiveFaq] = useState(null)
    const uccToggleFaq = i => setUccActiveFaq(uccActiveFaq === i ? null : i)

    const [uccSelectedFactor, setUccSelectedFactor] = useState(0)

    const uccFaqs = [
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

    const uccPriceRange = [
        { length: '7 Nights', price: '$2,800–$6,000+' },
        { length: '8–10 Nights', price: '$3,800–$7,500+' },
        { length: '11–14 Nights', price: '$5,000–$10,000+' },
        { length: 'Grand Voyages', price: '$9,000–$18,000+' }
    ]

    const uccDestinations = [
        'Danube River', 'Rhine River', 'Seine River', 'Douro River', 'Venice Lagoon',
        'Burgundy & Provence', 'Egypt (Nile)', 'India (Ganges)', 'Peru (Amazon)'
    ]

    const uccDuration = [
        { title: '7-night cruises', desc: 'ideal for first-time travelers.' },
        { title: '10–14-night itineraries', desc: 'allow deeper destination exploration.' },
        { title: 'Grand journeys', desc: 'combine multiple cruises for extended vacations.' }
    ]

    const uccCabinTypes = [
        { type: 'Classic Stateroom', level: 'Lowest' },
        { type: 'Deluxe Stateroom', level: 'Moderate' },
        { type: 'French Balcony', level: 'Mid-High' },
        { type: 'Balcony Suite', level: 'Premium' },
        { type: 'Royal Suite', level: 'Luxury' }
    ]

    const uccSeasons = [
        { season: 'Early Spring', pricing: 'Lower', low: true },
        { season: 'Late Spring', pricing: 'High', low: false },
        { season: 'Summer', pricing: 'High', low: false },
        { season: 'Autumn', pricing: 'High', low: false },
        { season: 'Christmas Markets', pricing: 'Peak', low: false },
        { season: 'Winter (select itineraries)', pricing: 'Lower', low: true }
    ]

    const uccFactors = [
        {
            title: 'Destination',
            icon: MapPin,
            text: 'European itineraries generally offer the widest range of pricing, while more specialized destinations often command higher fares.',
            tags: uccDestinations,
            note: 'Long-haul and exotic destinations usually cost more due to limited departures and higher operating expenses.',
            type: 'tags'
        },
        {
            title: 'Cruise Duration',
            icon: Ship,
            text: 'Longer itineraries naturally increase the total fare but often provide better value on a per-night basis.',
            list: uccDuration,
            type: 'list'
        },
        {
            title: 'Stateroom Category',
            icon: Bed,
            text: 'Cabin selection has a significant impact on pricing. From classic staterooms to royal suites:',
            rows: uccCabinTypes,
            note: 'Higher-category accommodations typically include additional space, upgraded amenities, and enhanced services such as butler assistance.',
            type: 'rows'
        },
        {
            title: 'Travel Season',
            icon: Calendar,
            text: 'Pricing fluctuates throughout the year. Holiday cruises and Christmas Market sailings are usually among the most expensive.',
            seasons: uccSeasons,
            type: 'seasons'
        }
    ]

    const uccIncludedFare = [
        'Luxury accommodations', 'All meals', 'Fine dining experiences', 'Unlimited premium wines and spirits',
        'Specialty coffee and beverages', 'Daily guided shore excursions', 'Complimentary Wi-Fi',
        'Onboard gratuities', 'Entertainment', 'Fitness facilities', 'Concierge-level service',
        'Airport transfers on eligible itineraries'
    ]

    const uccExtraCosts = [
        { expense: 'International airfare', always: true, icon: Plane, desc: 'Flights to and from your cruise departure cities.' },
        { expense: 'Travel insurance', always: true, icon: Award, desc: 'Essential protection for trip cancellation and medical coverage.' },
        { expense: 'Spa treatments', always: true, icon: Sparkles, desc: 'Onboard massages, facials, and wellness services.' },
        { expense: 'Personal shopping', always: true, icon: Tag, desc: 'Souvenirs, boutique purchases, and local goods.' },
        { expense: 'Passport & visa fees', always: true, icon: MapPin, desc: 'Necessary international travel documentation.' },
        { expense: 'Independent private tours', always: true, icon: Compass, desc: 'Custom shore excursions organized independently.' },
        { expense: 'Pre/post-cruise hotels', always: false, icon: Bed, desc: 'Hotel stays before embarkation or after disembarkation.' },
        { expense: 'Optional premium experiences', always: false, icon: Crown, desc: 'Exclusive curated tours or premium tastings.' }
    ]

    const uccCoupleCost = [
        { length: '7 Nights', price: '$5,600–$12,000+' },
        { length: '10 Nights', price: '$7,600–$15,000+' },
        { length: '14 Nights', price: '$10,000–$20,000+' }
    ]

    const uccWorthIncluded = [
        'Unlimited premium drinks', 'Daily guided excursions', 'Fine dining', 'Gratuities',
        'Luxury accommodations', 'Personalized service', 'Wi-Fi', 'Entertainment'
    ]

    const uccDealTips = [
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

    const uccComparison = [
        { feature: 'Premium beverages', uniworld: 'Included', typical: 'Often included' },
        { feature: 'Shore excursions', uniworld: 'Included', typical: 'Included' },
        { feature: 'Gratuities', uniworld: 'Included', typical: 'Sometimes extra' },
        { feature: 'Butler service', uniworld: 'Select suites', typical: 'Limited' },
        { feature: 'Luxury décor', uniworld: 'Boutique style', typical: 'Varies' },
        { feature: 'Airport transfers', uniworld: 'Eligible sailings', typical: 'Varies' },
        { feature: 'Overall inclusiveness', uniworld: 'Excellent', typical: 'Good–Excellent' }
    ]

    const uccCheapestTimes = [
        'Early booking promotions', 'Shoulder season departures', 'Selected spring cruises',
        'Late autumn itineraries', 'Limited-time promotional events'
    ]

    const uccBudgetItems = [
        'Flights', 'Travel insurance', 'Hotel nights before embarkation', 'Transfers not included',
        'Souvenirs', 'Spa services', 'Optional private excursions'
    ]

    const uccKeyTakeaways = [
        'Uniworld River Cruise prices vary by destination, season, itinerary, and cabin category.',
        'Seven-night cruises typically start around $2,800 per person.',
        'Luxury suites and holiday departures carry premium pricing.',
        'Most fares include dining, premium beverages, excursions, Wi-Fi, and gratuities.',
        'Airfare, spa treatments, and travel insurance are generally extra.',
        'Early booking and shoulder season travel often provide the best value.',
        'Comparing inclusions—not just base fare—gives a better picture of overall cost.',
        'Consulting an expert travel advisor helps secure exclusive promotions and benefits.'
    ]

    const uccSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com/",
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://www.tripsandships.com/#logo",
                    "url": "https://www.tripsandships.com/logo.png",
                    "caption": "Trips & Ships Luxury Travel"
                },
                "image": {
                    "@id": "https://www.tripsandships.com/#logo"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/cost-deals/",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/cost-deals/",
                "name": "How Much Does a Uniworld River Cruise Cost?",
                "isPartOf": { "@id": "https://www.tripsandships.com/#website" },
                "about": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/cost-deals/#article" }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/cost-deals/#article",
                "headline": "How Much Does a Uniworld River Cruise Cost?",
                "description": "Discover Uniworld River Cruise prices, what's included, average costs by itinerary, suite types, seasonal pricing, and tips to find the best deals.",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/cost-deals/" }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "How Much Does a Uniworld River Cruise Cost?", "item": "https://www.tripsandships.com/uniworld-river-cruises/cost-deals/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uccFaqs.map(f => ({
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
                <script type="application/ld+json">{JSON.stringify(uccSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO SECTION ── */}
            <section className="ucc-hero-section">
                <div className="ucc-hero-placeholder"></div>
                <div className="ucc-hero-content-wrapper">
                    <div className="ucc-hero-eyebrow-tag">
                        <Wallet size={16} />
                        <span>UNIWORLD COST GUIDE</span>
                    </div>
                    <h1 className="ucc-hero-main-title">How Much Does a Uniworld River Cruise Cost?</h1>
                    <p className="ucc-hero-subtitle-text">
                        An honest breakdown of fares, suites, everyday inclusions, and out-of-pocket costs.
                    </p>
                </div>
            </section>

            {/* ── INTRO SECTION (GRID) ── */}
            <section className="ucc-intro-section">
                <div className="ucc-intro-container">
                    <div className="ucc-intro-grid">
                        <div className="ucc-intro-text-col">
                            <span className="ucc-eyebrow">EXCLUSIVE TRAVEL EXPERIENCE</span>
                            <h2 className="ucc-section-heading">How Much Does a Uniworld River Cruise Cost?</h2>
                            <div className="ucc-heading-separator-bar"></div>
                            <p className="ucc-intro-paragraph">
                                Luxury river cruising is often associated with premium pricing, but understanding what you receive for the fare helps put the cost into perspective. Uniworld Boutique River Cruises is one of the most inclusive luxury river cruise lines, with fares covering accommodations, gourmet dining, premium beverages, daily excursions, gratuities, and many onboard amenities.
                            </p>
                        </div>
                        <div className="ucc-intro-image-col">
                            <div className="ucc-image-frame">
                                {/* <img src={imgSuite} alt="Elegant Suite on a Uniworld Boutique River Cruise" className="ucc-frame-img" /> */}
                                <div className="ucc-frame-overlay"></div>
                                <div className="ucc-image-badge"><Crown size={13} /><span>Boutique Luxury</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TYPICAL PRICE RANGE (GRID) ── */}
            <section className="ucc-price-section ucc-bg-blue-tint">
                <div className="ucc-price-container">
                    <span className="ucc-eyebrow">ESTIMATED FARES</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>Typical Uniworld River Cruise Price Range</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-price-intro">Cruise fares vary significantly based on itinerary duration, destination, cabin category, and season. Below are average starting prices per person.</p>

                    <div className="ucc-price-grid">
                        {uccPriceRange.map((row, idx) => (
                            <div key={idx} className="ucc-price-card">
                                <div className="ucc-price-card-header">
                                    <div className="ucc-price-card-icon"><Compass size={28} /></div>
                                    <h3 className="ucc-price-card-title">{row.length}</h3>
                                </div>
                                <div className="ucc-price-card-divider"></div>
                                <div className="ucc-price-card-body">
                                    <span className="ucc-price-card-label">Avg. Price Range</span>
                                    <span className="ucc-price-card-value">{row.price}</span>
                                    <span className="ucc-price-card-note">Per Person / Double Occ.</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ucc-price-footnote-badge">
                        <AlertCircle size={15} />
                        <span>Luxury suites, holiday sailings, and limited-capacity departures can exceed these ranges.</span>
                    </div>
                </div>
            </section>

            {/* ── PRICING FACTORS (TABBED) ── */}
            <section className="ucc-factors-section">
                <div className="ucc-factors-container">
                    <span className="ucc-eyebrow">PRICING FACTORS</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>What Affects the Cost of a Uniworld River Cruise?</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-factors-intro">Several key factors determine the final fare of your Uniworld River Cruise. Select a factor to explore how it impacts pricing.</p>

                    <div className="ucc-factors-dashboard">

                        {/* ── LEFT: Vertical Step Menu ── */}
                        <div className="ucc-factors-tabs">
                            {uccFactors.map((factor, idx) => {
                                const Icon = factor.icon
                                const isActive = uccSelectedFactor === idx
                                return (
                                    <button
                                        key={idx}
                                        className={`ucc-factor-tab-btn ${isActive ? 'active' : ''}`}
                                        onClick={() => setUccSelectedFactor(idx)}
                                    >
                                        <div className="ucc-factor-tab-number">{String(idx + 1).padStart(2, '0')}</div>
                                        <div className="ucc-factor-tab-info">
                                            <div className="ucc-factor-tab-icon"><Icon size={16} /></div>
                                            <span className="ucc-factor-tab-title">{factor.title}</span>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>

                        {/* ── RIGHT: Detail Panel ── */}
                        <div className="ucc-factor-panel">
                            <div className="ucc-factor-panel-inner">

                                {/* Image Placeholder Column */}
                                <div className="ucc-factor-panel-image">
                                    <div className="ucc-factor-panel-image-bg">
                                        {(() => { const BgIcon = uccFactors[uccSelectedFactor].icon; return <BgIcon size={110} className="ucc-factor-panel-bg-icon" /> })()}
                                    </div>
                                    <div className="ucc-factor-panel-image-overlay">
                                        <div className="ucc-factor-panel-img-details">
                                            <p className="ucc-factor-panel-label" style={{ color: 'rgba(255, 255, 255, 0.7)', border: 'none', margin: '0 0 4px', padding: 0 }}>
                                                FACTOR {String(uccSelectedFactor + 1).padStart(2, '0')} OF {uccFactors.length}
                                            </p>
                                            <h3 className="ucc-factor-panel-title" style={{ color: '#fff', margin: 0, fontSize: '26px', fontWeight: '800' }}>
                                                {uccFactors[uccSelectedFactor].title}
                                            </h3>
                                        </div>
                                        <span className="ucc-factor-panel-img-num">{String(uccSelectedFactor + 1).padStart(2, '0')}</span>
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="ucc-factor-panel-content">
                                    <p className="ucc-factor-panel-desc">{uccFactors[uccSelectedFactor].text}</p>

                                    {/* TAGS grid */}
                                    {uccFactors[uccSelectedFactor].type === 'tags' && (
                                        <div className="ucc-factor-tags">
                                            {uccFactors[uccSelectedFactor].tags.map((item, idx) => (
                                                <span key={idx} className="ucc-factor-tag"><MapPin size={12} />{item}</span>
                                            ))}
                                        </div>
                                    )}

                                    {/* LIST grid */}
                                    {uccFactors[uccSelectedFactor].type === 'list' && (
                                        <div className="ucc-factor-list">
                                            {uccFactors[uccSelectedFactor].list.map((item, idx) => (
                                                <div key={idx} className="ucc-factor-list-card">
                                                    <div className="ucc-factor-list-num">{String(idx + 1).padStart(2, '0')}</div>
                                                    <div>
                                                        <p className="ucc-factor-list-title">{item.title}</p>
                                                        <p className="ucc-factor-list-desc">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* ROWS grid */}
                                    {uccFactors[uccSelectedFactor].type === 'rows' && (
                                        <div className="ucc-factor-rows">
                                            {uccFactors[uccSelectedFactor].rows.map((row, idx) => (
                                                <div key={idx} className="ucc-factor-row">
                                                    <div className="ucc-factor-row-rank">{idx + 1}</div>
                                                    <span className="ucc-factor-row-label">{row.type}</span>
                                                    <span className="ucc-factor-row-value">{row.level}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* SEASONS grid */}
                                    {uccFactors[uccSelectedFactor].type === 'seasons' && (
                                        <div className="ucc-factor-seasons">
                                            {uccFactors[uccSelectedFactor].seasons.map((row, idx) => (
                                                <div key={idx} className="ucc-factor-season">
                                                    <span className="ucc-factor-season-icon">
                                                        {row.low ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                                                    </span>
                                                    <span className="ucc-factor-season-label">{row.season}</span>
                                                    <span className={`ucc-season-tag ${row.low ? 'ucc-season-low' : 'ucc-season-high'}`}>
                                                        {row.pricing}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Note */}
                                    {uccFactors[uccSelectedFactor].note && (
                                        <div className="ucc-factor-panel-note">
                                            <AlertCircle size={15} />
                                            <span>{uccFactors[uccSelectedFactor].note}</span>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED IN FARE ── */}
            <section className="ucc-feature-section ucc-bg-azure">
                <div className="ucc-feature-container">
                    <div className="ucc-feature-grid ucc-reverse">
                        <div className="ucc-feature-text-col">
                            <span className="ucc-eyebrow">CRUISE FARE INCLUSIONS</span>
                            <h2 className="ucc-section-heading">What Is Included in the Cruise Fare?</h2>
                            <div className="ucc-heading-separator-bar"></div>
                            <p className="ucc-feature-lead">One reason Uniworld commands premium pricing is its extensive list of inclusions.</p>
                            <p className="ucc-feature-body">Most fares include:</p>
                            <ul className="ucc-check-list ucc-check-list-2col">
                                {uccIncludedFare.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="ucc-feature-image-col">
                            <div className="ucc-image-frame">
                                {/* <img src={imgDining} alt="Gourmet dining included on a Uniworld River Cruise" className="ucc-frame-img" /> */}
                                <div className="ucc-frame-overlay"></div>
                                <div className="ucc-image-badge"><Utensils size={13} /><span>All-Inclusive Fare</span></div>
                            </div>
                            <div className="ucc-feature-callout">
                                <Sparkles size={18} />
                                <p>Because many additional costs are already covered, travelers often spend less onboard than expected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ADDITIONAL COSTS ── */}
            <section className="ucc-costs-section ucc-bg-alabaster">
                <div className="ucc-costs-container">
                    <span className="ucc-eyebrow">BUDGET PLANNING</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>Additional Costs to Budget For</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-costs-intro">Although Uniworld Boutique River Cruises is highly inclusive, certain out-of-pocket expenses may still apply when planning your trip.</p>

                    <div className="ucc-costs-grid">
                        {uccExtraCosts.map((row, idx) => {
                            const CostIcon = row.icon
                            return (
                                <div key={idx} className="ucc-cost-card">
                                    <div className="ucc-cost-card-header">
                                        <div className="ucc-cost-card-icon-wrap">
                                            <CostIcon size={20} />
                                        </div>
                                        <span className={`ucc-cost-badge ${row.always ? 'always' : 'sometimes'}`}>
                                            {row.always ? 'Always Extra' : 'Sometimes'}
                                        </span>
                                    </div>
                                    <h3 className="ucc-cost-card-title">{row.expense}</h3>
                                    <p className="ucc-cost-card-desc">{row.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="ucc-costs-footnote">
                        <AlertCircle size={15} />
                        <span>Take these additional travel expenses into consideration when drafting your final cruise budget.</span>
                    </div>
                </div>
            </section>

            {/* ── AVERAGE COST FOR COUPLES ── */}
            <section className="ucc-couples-section">
                <div className="ucc-couples-container">
                    <span className="ucc-eyebrow">COUPLES PRICING</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>Average Cost for Couples</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-couples-intro">Many travelers book as couples. Typical total cruise fares before airfare may range from:</p>

                    <div className="ucc-couples-grid">
                        {uccCoupleCost.map((row, idx) => (
                            <div key={idx} className="ucc-couple-card">
                                {/* Card Top — navy header */}
                                <div className="ucc-couple-card-header">
                                    <div className="ucc-couple-icon"><Clock size={20} /></div>
                                    <span className="ucc-couple-length">{row.length}</span>
                                    <div className="ucc-couple-users"><Users size={13} /><span>Per Couple</span></div>
                                </div>
                                {/* Card Bottom — price row */}
                                <div className="ucc-couple-card-body">
                                    <div className="ucc-couple-price-row">
                                        <span className="ucc-couple-label">Est. Cost</span>
                                        <span className="ucc-couple-price">{row.price}</span>
                                    </div>
                                    <span className="ucc-couple-note">Before airfare · Double Occ.</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ucc-couples-footnote">
                        <AlertCircle size={15} />
                        <span>Prices vary depending on promotions, cabin selection, and departure date.</span>
                    </div>
                </div>
            </section>

            {/* ── WORTH THE PRICE ── */}
            <section className="ucc-value-section">
                <div className="ucc-value-container">
                    <div className="ucc-value-grid-split">

                        {/* Left Side: Editorial Argument */}
                        <div className="ucc-value-editorial-col">
                            <div className="ucc-value-eyebrow-row">
                                <Gem size={18} />
                                <span className="ucc-value-eyebrow-text">IS IT WORTH THE PRICE?</span>
                            </div>
                            <h2 className="ucc-value-heading">Are Uniworld River Cruises Worth the Price?</h2>
                            <p className="ucc-value-body">
                                Rather than comparing only the initial fare, many travelers evaluate the total vacation value. When all day-to-day luxuries are fully included, Uniworld offers highly competitive value in the luxury market.
                            </p>
                            <div className="ucc-value-quote-box">
                                <p className="ucc-value-emphasis">
                                    "When these inclusions are considered together, travelers often spend significantly less out-of-pocket onboard than on mainstream lines."
                                </p>
                            </div>
                        </div>

                        {/* Right Side: The Luxury Inclusion Card */}
                        <div className="ucc-value-card">
                            <h3 className="ucc-value-card-title">What's Covered in Your Fare</h3>
                            <p className="ucc-value-card-subtitle">Included services that would typically cost extra on other cruises:</p>
                            <div className="ucc-value-chip-row">
                                {uccWorthIncluded.map((item, idx) => (
                                    <span key={idx} className="ucc-value-chip">
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
            <section className="ucc-deals-section">
                <div className="ucc-deals-container">
                    <span className="ucc-eyebrow">SAVING STRATEGIES</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>How to Find the Best Uniworld River Cruise Deals</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-table-intro">Booking strategically can lead to significant savings.</p>

                    <div className="ucc-deals-grid">
                        {uccDealTips.map((item, idx) => {
                            const DealIcon = item.Icon
                            return (
                                <div key={idx} className="ucc-deal-card">
                                    <div className="ucc-deal-card-header">
                                        <div className="ucc-deal-icon"><DealIcon size={20} /></div>
                                        <span className="ucc-deal-step-num">{String(idx + 1).padStart(2, '0')}</span>
                                    </div>
                                    <h3 className="ucc-deal-title">{item.title}</h3>
                                    <p className="ucc-deal-body">{item.body}</p>
                                    {item.items.length > 0 && (
                                        <ul className="ucc-deal-items-list">
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
            <section className="ucc-comparison-section ucc-bg-slate">
                <div className="ucc-comparison-container">
                    <span className="ucc-eyebrow">HOW UNIWORLD COMPARES</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>Comparing Uniworld with Other Luxury River Cruise Lines</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-comparison-intro">Comparing included services rather than base fares provides a more accurate measure of overall value.</p>

                    <div className="ucc-compare-list">
                        {uccComparison.map((row, idx) => (
                            <div key={idx} className="ucc-compare-item">
                                <div className="ucc-compare-feature-name">
                                    <div className="ucc-compare-indicator"></div>
                                    <span>{row.feature}</span>
                                </div>
                                <div className="ucc-compare-grid-cols">
                                    <div className="ucc-compare-brand-col uniworld">
                                        <span className="ucc-compare-brand-label">Uniworld</span>
                                        <span className="ucc-compare-value">{row.uniworld}</span>
                                    </div>
                                    <div className="ucc-compare-brand-col typical">
                                        <span className="ucc-compare-brand-label">Competitors</span>
                                        <span className="ucc-compare-value">{row.typical}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ucc-comparison-footnote">
                        <AlertCircle size={15} />
                        <span>Uniworld's boutique model ensures a high ratio of all-inclusive features per sailing compared to the industry standard.</span>
                    </div>
                </div>
            </section>

            {/* ── CHEAPEST TIME TO BOOK ── */}
            <section className="ucc-timing-section">
                <div className="ucc-timing-container">
                    <span className="ucc-eyebrow">TIMING YOUR BOOKING</span>
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>When Is the Cheapest Time to Book?</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <p className="ucc-timing-intro">Understanding seasonal pricing cycles can help you secure the best value.</p>

                    <div className="ucc-timing-grid">
                        {uccCheapestTimes.map((item, idx) => (
                            <div key={idx} className="ucc-timing-card">
                                <div className="ucc-timing-card-icon">
                                    <CalendarDays size={20} />
                                </div>
                                <div className="ucc-timing-card-content">
                                    <span className="ucc-timing-card-label">Strategy {idx + 1}</span>
                                    <h4 className="ucc-timing-card-title">{item}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ucc-timing-footnote">
                        <AlertCircle size={15} />
                        <span>Holiday cruises, tulip season, and Christmas Market sailings generally command premium pricing due to strong demand.</span>
                    </div>
                </div>
            </section>

            {/* ── BUDGETING TIPS ── */}
            <section className="ucc-feature-section ucc-bg-soft">
                <div className="ucc-feature-container">
                    <div className="ucc-feature-grid">
                        <div className="ucc-feature-image-col">
                            <div className="ucc-image-frame">
                                {/* <img src={imgDeals} alt="Luxury Uniworld River Cruise sailing through Europe" className="ucc-frame-img" /> */}
                                <div className="ucc-frame-overlay"></div>
                                <div className="ucc-image-badge"><Tag size={13} /><span>Smart Budgeting</span></div>
                            </div>
                        </div>
                        <div className="ucc-feature-text-col">
                            <span className="ucc-eyebrow">PLAN AHEAD</span>
                            <h2 className="ucc-section-heading">Tips for Budgeting Your Cruise</h2>
                            <div className="ucc-heading-separator-bar"></div>
                            <p className="ucc-feature-lead">Before booking, consider budgeting for:</p>
                            <ul className="ucc-check-list ucc-check-list-2col">
                                {uccBudgetItems.map((item, idx) => (
                                    <li key={idx}><Compass size={14} /><span>{item}</span></li>
                                ))}
                            </ul>
                            <div className="ucc-budget-callout">
                                <AlertCircle size={16} />
                                <span>A complete travel budget helps avoid unexpected expenses.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="ucc-takeaways-section">
                <div className="ucc-takeaways-container">
                    <h2 className="ucc-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                    <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    <div className="ucc-takeaways-grid">
                        {uccKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="ucc-takeaway-item">
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
                        <h2 className="medi-section-heading1">Insight from Angela Hughes</h2>
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
            <section className="ucc-faq-section">
                <div className="ucc-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="ucc-section-heading">Frequently Asked Questions</h2>
                        <div className="ucc-heading-separator-bar ucc-bar-centered"></div>
                    </div>
                    <div className="ucc-faq-list-wrapper">
                        {uccFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="ucc-faq-item"
                                onClick={() => uccToggleFaq(index)}
                            >
                                <div className="ucc-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="ucc-faq-toggle-icon">{uccActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {uccActiveFaq === index && (
                                    <p className="ucc-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="ucc-cta-redesign-section">
                <div className="ucc-cta-aurora-glow"></div>
                <div className="ucc-cta-crystal ucc-cta-crystal-1"></div>
                <div className="ucc-cta-crystal ucc-cta-crystal-2"></div>
                <div className="ucc-cta-crystal ucc-cta-crystal-3"></div>
                <div className="ucc-cta-grid-lines"></div>

                <div className="ucc-cta-content">
                    <div className="ucc-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="ucc-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="ucc-cta-title">Ready to Find Your <br /> Perfect Uniworld Sailing?</h2>
                    <div className="ucc-cta-bar"></div>
                    <p className="ucc-cta-subtitle">
                        Compare Uniworld itineraries, review current promotions, and choose the cruise that best fits your destination, travel style, and budget. Booking early can help secure preferred cabins and the most attractive fares.
                    </p>
                    <div className="ucc-cta-actions">
                        <Link to="/contact" className="ucc-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="ucc-cta-btn-arrow" />
                        </Link>
                        <Link to="/uniworld-river-cruises" className="ucc-cta-secondary-btn">
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