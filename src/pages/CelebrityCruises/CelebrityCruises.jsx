import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruises.css'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Ship, MapPin, Star, Users, CheckCircle, XCircle,
    ArrowRight, Compass, Sparkles, Anchor, Gem,
    Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, Mic,
    Globe, DollarSign, Wifi, Plane, Wine, Bed,
    Bell, Waves, ShieldCheck, Coffee, AlertCircle,
    List, Calendar, TrendingUp, Snowflake
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CelebrityCruisesGuide() {

    const [ccActiveFaq, setCcActiveFaq] = useState(null)
    const ccToggleFaq = i => setCcActiveFaq(ccActiveFaq === i ? null : i)

    const ccFaqs = [
        { question: 'What is Celebrity Cruises known for?', answer: 'Celebrity Cruises is known for premium cruising, contemporary ship design, destination-focused itineraries, dining, wellness experiences, and modern accommodations. Its Edge Series is particularly associated with innovative ship design.' },
        { question: 'Is Celebrity Cruises a luxury cruise line?', answer: 'Celebrity Cruises is positioned as a premium cruise line rather than a traditional ultra-luxury cruise line. It offers elevated accommodations, dining, service, and suite experiences while operating larger ships with extensive onboard facilities.' },
        { question: 'Which Celebrity Cruises ship is the newest?', answer: "Celebrity Xcel is the newest addition to Celebrity Cruises' Edge Series. Celebrity's current fleet information identifies Xcel as the newest Edge Series ship." },
        { question: 'What destinations does Celebrity Cruises visit?', answer: 'Celebrity Cruises sails to destinations including the Caribbean, Mediterranean and wider Europe, Alaska, Asia, Australia and New Zealand, South America, Antarctica, and the Galápagos Islands. Its itinerary portfolio changes by season.' },
        { question: 'Does Celebrity Cruises sail to the Caribbean?', answer: 'Yes. Celebrity Cruises operates Caribbean cruises ranging from short three- and four-night escapes to longer itineraries visiting multiple Caribbean destinations.' },
        { question: 'Does Celebrity Cruises sail the Mediterranean?', answer: 'Yes. Celebrity operates Mediterranean itineraries from ports including Barcelona, Rome, Ravenna, Athens, and Lisbon, depending on the season and sailing.' },
        { question: 'What types of cabins are available on Celebrity Cruises?', answer: 'Celebrity accommodations can include interior, ocean-view, veranda, Infinite Veranda, AquaClass, and suite categories. Exact categories vary by ship.' },
        { question: 'What is an Infinite Veranda on Celebrity Cruises?', answer: "An Infinite Veranda is an Edge Series stateroom concept designed to extend the cabin's usable living space toward the exterior and provide a closer connection to the ocean view." },
        { question: 'What is The Retreat on Celebrity Cruises?', answer: "The Retreat is Celebrity's suite-focused experience. Depending on the ship, suite guests can receive access to exclusive spaces and amenities, including Luminae, the suites-only restaurant." },
        { question: 'Does Celebrity Cruises have specialty restaurants?', answer: 'Yes. Celebrity ships offer a mixture of included dining and specialty restaurants, although the exact venues and additional charges vary by ship and sailing.' },
        { question: 'Are drinks included on Celebrity Cruises?', answer: 'Drink inclusions depend on the selected fare, package, promotion, and sailing. Travelers should check the specific booking terms to determine which beverages are included and whether a beverage package is necessary.' },
        { question: 'Is Wi-Fi included on Celebrity Cruises?', answer: 'Wi-Fi inclusion depends on the fare or package selected. Travelers should check the current conditions for their specific sailing because inclusions and promotions can change.' },
        { question: 'Is Celebrity Cruises good for couples?', answer: 'Celebrity Cruises can be well suited to couples who value contemporary ships, dining, wellness, scenic destinations, and evening entertainment. Mediterranean and Caribbean itineraries are popular choices for couples.' },
        { question: 'How much does a Celebrity Cruise cost?', answer: 'Celebrity cruise prices vary according to the ship, itinerary, departure date, cabin type, season, availability, and included benefits. The complete vacation cost should also account for transportation, excursions, drinks, Wi-Fi, specialty dining, and other extras.' },
        { question: 'How do I choose the best Celebrity Cruises ship?', answer: 'Choose the destination and itinerary first, then compare ships based on accommodations, dining, entertainment, outdoor spaces, wellness facilities, ship size, and overall price. The best ship depends on your travel style and the itinerary you want.' }
    ]

    const ccWhoSuited = [
        'Couples looking for an upscale cruise experience', 'Adults seeking sophisticated dining and entertainment',
        'Families wanting modern ships and varied activities', 'Travelers interested in European and Caribbean itineraries',
        'Guests who value wellness and spa experiences', 'Travelers who prefer contemporary ship design',
        'Suite guests seeking more private accommodations and dedicated spaces', 'Destination-focused travelers who want longer or more varied itineraries'
    ]

    const ccEdgeSeriesShips = [
        { ship: 'Celebrity Edge', notable: 'Original Edge Series ship with innovative design', regions: 'Alaska, Australia & New Zealand, Hawaii, Transpacific' },
        { ship: 'Celebrity Apex', notable: 'Modern Edge Series design and Magic Carpet', regions: 'Caribbean, Europe, Transatlantic' },
        { ship: 'Celebrity Beyond', notable: 'Expanded Edge Series spaces and large outdoor areas', regions: 'Caribbean' },
        { ship: 'Celebrity Ascent', notable: 'Fourth Edge Series ship with extensive dining and outdoor spaces', regions: 'Caribbean, Europe, Transatlantic' },
        { ship: 'Celebrity Xcel', notable: 'Newest Edge Series addition with new onboard concepts', regions: 'Caribbean, Europe' }
    ]

    const ccAscentFeatures = ['32 restaurants, bars, and lounges', 'Le Voyage by Chef Daniel Boulud', 'Infinite Veranda accommodations', 'AquaClass staterooms', 'The Retreat suite experience', 'The Rooftop Garden', 'Cantilevered pools']

    const ccSolsticeShips = ['Celebrity Solstice', 'Celebrity Equinox', 'Celebrity Eclipse', 'Celebrity Silhouette', 'Celebrity Reflection']
    const ccMillenniumShips = ['Celebrity Millennium', 'Celebrity Infinity', 'Celebrity Constellation', 'Celebrity Summit']

    const ccCaribbeanPorts = ['Grand Cayman', 'Cozumel', 'St. Maarten', 'Tortola', 'Antigua', 'Puerto Rico', 'Aruba', 'Bonaire', 'Curaçao', 'The Bahamas']
    const ccMedRegions = ['Barcelona', 'Rome', 'Athens', 'Ravenna', 'Lisbon', 'Greece', 'Italy', 'Croatia', 'France', 'Turkey', 'Spain', 'Portugal', 'Malta']
    const ccAsiaDestinations = ['Japan', 'South Korea', 'Vietnam', 'Thailand', 'Taiwan', 'Southeast Asia']

    const ccTripLength = [
        { length: '3–4 nights', goodFor: 'Short getaway', consider: 'Fewer ports and limited onboard time' },
        { length: '5–7 nights', goodFor: 'First cruise or standard vacation', consider: 'Good balance between ship and destinations' },
        { length: '8–11 nights', goodFor: 'Deeper regional exploration', consider: 'More ports or longer stays' },
        { length: '12+ nights', goodFor: 'Extended vacation', consider: 'More destinations and sea days' },
        { length: 'Long/global voyage', goodFor: 'Experienced travelers', consider: 'Extensive planning and more time away' }
    ]

    const ccInteriorGoodFor = ['Budget-conscious cruisers', 'Travelers who spend little time in their room', 'Shorter cruises', 'Guests who prefer to allocate more budget toward excursions and specialty experiences']

    const ccDiningVenues = ['Main dining restaurants', 'Oceanview Café', 'Specialty restaurants', 'Poolside food', 'Cafés', 'Bars and lounges', 'Suite dining', 'Chef-led culinary experiences']

    const ccDiningStyles = [
        { title: 'Couples', desc: 'Specialty restaurants and intimate dining venues can complement an evening-focused itinerary.' },
        { title: 'Families', desc: 'Flexible casual dining can be useful when everyone wants different meals or schedules.' },
        { title: 'Food-focused travelers', desc: 'Look closely at each ship\u2019s restaurant lineup because specialty venues vary between ships.' },
        { title: 'Suite guests', desc: 'The Retreat experience includes access to Luminae on applicable ships.' }
    ]

    const ccPackages = ['Beverage packages', 'Wi-Fi packages', 'Specialty dining', 'Shore excursions', 'Spa treatments', 'Premium onboard experiences']

    const ccActivities = ['Swimming pools', 'Fitness centers', 'Spa facilities', 'Live entertainment', 'Theater productions', 'Bars and lounges', 'Outdoor decks', 'Rooftop spaces', 'Culinary activities', 'Shopping', 'Nightlife', 'Destination-focused activities']

    const ccWellness = ['Fitness facilities', 'Spa treatments', 'Thermal and relaxation areas', 'Yoga or fitness classes', 'Wellness-oriented accommodations']

    const ccCouplesPriorities = ['A veranda or Infinite Veranda stateroom', 'A Mediterranean or Caribbean itinerary', 'Specialty dining', 'Spa or wellness experiences', 'Longer port stays or overnight calls', 'A newer Edge Series ship']

    const ccFamiliesConsider = ['Cabin configuration', 'Connecting rooms', "Kids' and teen programming", 'Pool facilities', 'Dining flexibility', 'Shore excursions', 'Number of sea days', 'Port duration']

    const ccCostBudget = [
        { expense: 'Accommodation', included: 'Usually' },
        { expense: 'Main dining', included: 'Usually' },
        { expense: 'Selected entertainment', included: 'Usually' },
        { expense: 'Basic onboard activities', included: 'Usually' },
        { expense: 'Specialty dining', included: 'Often additional' },
        { expense: 'Premium beverages', included: 'Often additional' },
        { expense: 'Wi-Fi', included: 'Depends on fare/package' },
        { expense: 'Shore excursions', included: 'Usually additional' },
        { expense: 'Spa treatments', included: 'Additional' },
        { expense: 'Flights', included: 'Usually separate' },
        { expense: 'Pre/post-cruise hotel', included: 'Usually separate' },
        { expense: 'Transfers', included: 'Depends on booking' }
    ]

    const ccBookEarlyReasons = ['You want a specific suite', 'You need connecting rooms', 'You want a particular sailing date', 'You are traveling during a popular season', 'You need flights around fixed dates']

    const ccChooseShipSteps = [
        { title: 'Choose Your Destination', desc: 'Decide whether you prefer Caribbean beaches, Mediterranean culture, Alaska scenery, Asia, Australia and New Zealand, South America, Antarctica, or Galápagos exploration.' },
        { title: 'Choose Your Cruise Length', desc: 'Determine whether a long weekend, week-long vacation, extended regional journey, or longer voyage fits your schedule.' },
        { title: 'Compare Ships', desc: 'Look at ship age, ship class, restaurants, pools, entertainment, staterooms, suite facilities, outdoor spaces, and spa and fitness options.' },
        { title: 'Compare the Full Cost', desc: 'Include packages, excursions, transportation, hotels, and other expenses.' },
        { title: 'Check the Itinerary', desc: 'Look at number of ports, sea days, port arrival and departure times, overnight stays, embarkation port, and disembarkation port.' }
    ]

    const ccComparisonFactors = [
        { factor: 'Overall style', value: 'Contemporary premium cruising' },
        { factor: 'Ship design', value: 'Strong focus on modern design' },
        { factor: 'Destinations', value: 'Broad global portfolio' },
        { factor: 'Dining', value: 'Multiple casual and specialty options' },
        { factor: 'Wellness', value: 'Significant focus' },
        { factor: 'Suites', value: 'Dedicated premium suite experience' },
        { factor: 'Best known newer ships', value: 'Edge Series' },
        { factor: 'Expedition option', value: 'Galápagos' },
        { factor: 'Short cruises', value: 'Available in selected regions' },
        { factor: 'Longer voyages', value: 'Available, including global itineraries' }
    ]

    const ccBeforeFirstCruise = [
        { title: 'Check Your Travel Documents', desc: 'Passport, visa, entry, and transit requirements depend on nationality and itinerary. Check official government and cruise-line requirements before departure.' },
        { title: 'Arrive at the Embarkation Port Early', desc: 'If you are flying to the departure city, consider arriving at least one day before the cruise when practical. This reduces the risk of a flight delay causing you to miss embarkation.' },
        { title: 'Download the Cruise App', desc: 'Use the official cruise app and pre-cruise information to review check-in requirements, schedules, reservations, and onboard information.' },
        { title: 'Reserve Popular Experiences', desc: 'Specialty dining, excursions, and certain activities can have limited availability.' },
        { title: 'Pack for the Itinerary', desc: 'A Caribbean cruise and an Alaska cruise can require very different clothing and equipment.' },
        { title: 'Budget for Extras', desc: 'Plan for excursions, drinks, Wi-Fi, specialty dining, transportation, hotels, and other expenses that may not be included in the base fare.' }
    ]

    const cc2026Highlights = ['Caribbean island-hopping', 'Mediterranean cruises', 'European destinations', 'Iceland', 'Norway', 'Asia', 'Australia and New Zealand', 'South America', 'Antarctica', 'Galápagos', 'Longer global voyages']

    const ccKeyTakeaways = [
        'Celebrity Cruises is a premium cruise line focused on contemporary design, dining, wellness, and destinations.',
        'The fleet includes Edge Series, Solstice Series, Millennium Series, and the specialized Celebrity Flora.',
        'Celebrity Xcel is the newest Edge Series ship, while Celebrity Ascent is another recent addition to the fleet.',
        'Major destinations include the Caribbean, Mediterranean, Europe, Alaska, Asia, Australia and New Zealand, South America, Antarctica, and the Galápagos.',
        'Mediterranean itineraries can depart from cities including Barcelona, Rome, Athens, Ravenna, and Lisbon.',
        'Caribbean cruises range from short escapes to longer regional itineraries.',
        'Accommodation choices range from interior cabins to veranda staterooms, AquaClass rooms, and suites in The Retreat.',
        'Edge Series ships feature distinctive design concepts such as Infinite Verandas and the Magic Carpet.',
        'Celebrity Flora provides a specialized all-suite option for Galápagos exploration.',
        'Cruise prices vary according to ship, itinerary, cabin, date, season, availability, and included packages.',
        'Compare total vacation costs rather than focusing only on the advertised cruise fare.',
        'For the best choice, evaluate the ship and itinerary together. Always verify current sailing schedules, inclusions, documentation, and booking terms before traveling.'
    ]

    const ccInternalLinks = [
        { text: 'Cruise Lines', path: '/cruise-lines' },
        { text: 'Cruise Deals', path: '/cruise-deals' },
        { text: 'Caribbean Cruises', path: '/caribbean-cruises' },
        { text: 'Mediterranean Cruises', path: '/mediterranean-cruises' },
        { text: 'Alaska Cruises', path: '/alaska-cruises' },
        { text: 'Europe Cruises', path: '/europe-cruises' },
        { text: 'Cruise Ships', path: '/cruise-ships' },
        { text: 'Cruise Destinations', path: '/cruise-destinations' },
        { text: 'Cruise Travel Guide', path: '/cruise-travel-guide' },
        { text: 'Celebrity Cruises', path: '/celebrity-cruises' }
    ]

    const ccSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises",
                "name": "Celebrity Cruises: Complete Guide",
                "description": "Explore Celebrity Cruises ships, destinations, cabins, dining, packages, onboard experiences, costs, and planning tips for your next cruise vacation.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises" },
                "breadcrumb": { "@id": "https://www.tripsandships.com/celebrity-cruises#breadcrumb" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises#article",
                "url": "https://www.tripsandships.com/celebrity-cruises",
                "headline": "Celebrity Cruises: Complete Guide",
                "description": "A comprehensive guide to Celebrity Cruises covering ships, destinations, accommodations, dining, onboard experiences, pricing, and cruise-planning advice.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises#faq",
                "mainEntity": ccFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com#organization",
                "name": "Trips and Ships",
                "url": "https://www.tripsandships.com"
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Cruises: Complete Guide</title>
                <meta name="title" content="Celebrity Cruises: Complete Guide" />
                <meta name="description" content="Explore Celebrity Cruises ships, destinations, cabins, dining, packages, onboard experiences, costs, and planning tips for your next cruise vacation." />
                <meta name="keywords" content="Celebrity Cruises, Celebrity Cruises ships, Celebrity Cruises destinations, Celebrity Cruises itineraries, Celebrity Cruises cabins, Celebrity Cruises dining, Celebrity Cruises packages, Celebrity Cruises prices, Celebrity Cruises Edge Series, Celebrity Xcel, Celebrity Ascent, Celebrity Beyond, Celebrity Apex, Celebrity cruise guide" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises" />
                <script type="application/ld+json">{JSON.stringify(ccSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="cc-hero-section">
                <div className="cc-hero-overlay-layer"></div>
                <div className="cc-hero-content-wrapper">
                    <div className="cc-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="cc-hero-main-title">Celebrity Cruises: Complete Guide</h1>
                    <p className="cc-hero-subtitle-text">
                        Explore Celebrity Cruises ships, destinations, cabins, dining, packages, onboard experiences, costs, and planning tips for your next cruise vacation.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="cc-intro-section">
                <div className="cc-intro-container">
                    <div className="cc-intro-grid">
                        <div className="cc-intro-text-col">
                            <div className="cc-intro-lead-card">
                                <p className="cc-intro-lead">
                                    Celebrity Cruises is a premium cruise line known for modern ship design, destination-focused itineraries, elevated dining, wellness experiences, and a strong emphasis on contemporary onboard spaces. Its fleet includes Edge Series ships such as Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent, and Celebrity Xcel, alongside Solstice and Millennium Series ships and the expedition-oriented Celebrity Flora.
                                </p>
                            </div>
                            <p className="cc-intro-body">
                                Celebrity Cruises currently offers itineraries across regions including the Caribbean, Europe, Alaska, Asia, Australia and New Zealand, South America, Antarctica, and the Galápagos Islands. Its 2026–2027 program includes sailings across more than 70 countries and all seven continents.
                            </p>
                            <p className="cc-intro-body">
                                For travelers comparing premium cruise lines, Celebrity Cruises can be particularly interesting if you want a vacation that combines resort-style amenities with multiple destinations in one trip.
                            </p>
                        </div>
                        <div className="cc-intro-image-col">
                            <div className="cc-intro-image-frame cc-placeholder-frame">
                                <div className="cc-placeholder-content">
                                    <Ship size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Celebrity Edge Series Ship Sailing at Sunset</span>
                                </div>
                                <div className="cc-intro-image-badge">
                                    <Anchor size={14} />
                                    <span>Premium Cruising</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS CELEBRITY KNOWN FOR / WHO IS IT SUITED TO ── */}
            <section className="cc-different-section">
                <div className="cc-different-split-container">
                    {/* Left column – context + body */}
                    <div className="cc-different-left-col">
                        <span className="cc-eyebrow">WHAT IS CELEBRITY CRUISES KNOWN FOR?</span>
                        <h2 className="cc-section-heading cc-different-heading">Contemporary Design, Culinary Experiences, and Destination Immersion</h2>
                        <div className="cc-heading-separator-bar"></div>
                        <p className="cc-different-body-new">
                            Celebrity Cruises occupies the premium segment of the cruise market and places considerable emphasis on contemporary design, culinary experiences, wellness, accommodations, and destination immersion.
                        </p>
                        <p className="cc-different-body-new">
                            Its newer Edge Series introduced several distinctive ship concepts, including the Magic Carpet, Infinite Veranda staterooms, large outdoor spaces, and redesigned public areas. Celebrity Xcel builds on the Edge Series concept with additional dining, entertainment, and destination-focused experiences.
                        </p>
                        <p className="cc-different-body-new">
                            Celebrity's fleet also provides different styles of cruising, from large resort-style ships to the purpose-built Celebrity Flora, which operates in the Galápagos.
                        </p>
                        <div className="cc-different-footer-card-new">
                            <ShieldCheck size={20} />
                            <span>It is worth comparing individual ships and itineraries rather than judging the entire fleet as one product because onboard layouts, venues, accommodations, and destinations vary considerably.</span>
                        </div>
                    </div>

                    {/* Right column – who is it suited to */}
                    <div className="cc-different-right-col">
                        <div className="cc-suited-header">
                            <div className="cc-suited-header-icon">
                                <Users size={20} />
                            </div>
                            <div>
                                <p className="cc-suited-header-label">BEST SUITED TO</p>
                                <p className="cc-suited-header-title">Who Should Choose Celebrity Cruises?</p>
                            </div>
                        </div>
                        <div className="cc-included-grid-new">
                            {ccWhoSuited.map((item, idx) => (
                                <div key={idx} className="cc-included-chip-new">
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHIPS: EDGE SERIES ── */}
            <section className="cc-table-section">
                <div className="cc-table-container" style={{ maxWidth: '1080px' }}>
                    <span className="cc-eyebrow">CELEBRITY CRUISES SHIPS</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center' }}>Celebrity Edge Series</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    <p className="cc-table-intro">
                        Celebrity Cruises operates several generations and styles of ships. The fleet includes Edge Series, Solstice Series, Millennium Series, and specialized Galápagos vessels. The Edge Series represents Celebrity's most contemporary ship design. Celebrity's official fleet information lists these ships and their current regional deployment.
                    </p>
                    <div className="cc-compare-wrapper">
                        <table className="cc-compare-table">
                            <thead>
                                <tr>
                                    <th>Ship</th>
                                    <th className="cc-uni-header"><Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--cc-accent-light)' }} />Notable Characteristics</th>
                                    <th className="cc-typical-header">Example Regions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ccEdgeSeriesShips.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cc-feature-title">{row.ship}</td>
                                        <td className="cc-uni-cell"><span className="cc-uni-badge"><CheckCircle size={13} /><span>{row.notable}</span></span></td>
                                        <td className="cc-typical-cell"><span className="cc-typical-value">{row.regions}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── CELEBRITY ASCENT ── */}
            <section className="cc-feature-section cc-bg-accomm">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame cc-placeholder-frame">
                                <div className="cc-placeholder-content">
                                    <Ship size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Celebrity Ascent Outdoor Deck and Design</span>
                                </div>
                                <div className="cc-image-badge"><Anchor size={13} /><span>Edge Series</span></div>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">FEATURED SHIP</span>
                            <h2 className="cc-section-heading">Celebrity Ascent</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">Celebrity Ascent is the fourth Edge Series ship and features an extensive dining, wellness, and outdoor experience.</p>
                            <p className="cc-feature-body">Highlights include:</p>
                            <ul className="cc-check-list">
                                {ccAscentFeatures.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CELEBRITY XCEL ── */}
            <section className="cc-feature-section cc-bg-soft">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid cc-reverse">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame cc-placeholder-frame">
                                <div className="cc-placeholder-content">
                                    <Sparkles size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Celebrity Xcel Modern Design</span>
                                </div>
                                <div className="cc-image-badge"><Ship size={13} /><span>Newest Ship</span></div>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">FEATURED SHIP</span>
                            <h2 className="cc-section-heading">Celebrity Xcel</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">Celebrity Xcel is the newest addition to the Edge Series.</p>
                            <p className="cc-feature-body">It combines the design language of earlier Edge Series ships with new spaces, dining concepts, entertainment, and destination-oriented experiences. Its 2026 deployment includes Caribbean and European itineraries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SOLSTICE / MILLENNIUM / FLORA ── */}
            <section className="cc-fleet-section">
                <div className="cc-fleet-container">

                    {/* Section header */}
                    <div className="cc-fleet-header">
                        <span className="cc-fleet-eyebrow">MORE OF THE FLEET</span>
                        <h2 className="cc-fleet-main-heading">Solstice Series, Millennium Series &amp; Celebrity Flora</h2>
                        <div className="cc-fleet-separator"></div>
                    </div>

                    {/* Two series blocks side-by-side */}
                    <div className="cc-fleet-blocks">

                        {/* Solstice Series */}
                        <div className="cc-fleet-block">
                            <div className="cc-fleet-block-head">
                                <div className="cc-fleet-block-icon-wrap"><Ship size={20} /></div>
                                <div>
                                    <h3 className="cc-fleet-block-title">Solstice Series</h3>
                                    <p className="cc-fleet-block-desc">
                                        Operates across Europe, Caribbean, Alaska, Bermuda, Canada, South America and other seasonal regions.
                                    </p>
                                </div>
                            </div>
                            <div className="cc-fleet-row-list">
                                {ccSolsticeShips.map((item, idx) => (
                                    <div key={idx} className="cc-fleet-row-item">
                                        <div className="cc-fleet-row-icon"><Ship size={16} /></div>
                                        <span className="cc-fleet-row-name">{item}</span>
                                        <ArrowRight size={14} className="cc-fleet-row-arrow" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Millennium Series */}
                        <div className="cc-fleet-block">
                            <div className="cc-fleet-block-head">
                                <div className="cc-fleet-block-icon-wrap"><Ship size={20} /></div>
                                <div>
                                    <h3 className="cc-fleet-block-title">Millennium Series</h3>
                                    <p className="cc-fleet-block-desc">
                                        A premium cruise experience on a different layout and scale from the newest Edge Series vessels. Deployment varies by season.
                                    </p>
                                </div>
                            </div>
                            <div className="cc-fleet-row-list">
                                {ccMillenniumShips.map((item, idx) => (
                                    <div key={idx} className="cc-fleet-row-item">
                                        <div className="cc-fleet-row-icon"><Ship size={16} /></div>
                                        <span className="cc-fleet-row-name">{item}</span>
                                        <ArrowRight size={14} className="cc-fleet-row-arrow" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Celebrity Flora banner */}
                    <div className="cc-fleet-flora-banner">
                        <div className="cc-fleet-flora-icon-wrap">
                            <Snowflake size={28} />
                        </div>
                        <div className="cc-fleet-flora-content">
                            <span className="cc-fleet-flora-tag">EXPEDITION · ALL-SUITE</span>
                            <h4 className="cc-fleet-flora-title">Celebrity Flora — Purpose-Built for the Galápagos</h4>
                            <p className="cc-fleet-flora-text">
                                Celebrity Flora is designed specifically for exploring the Galápagos Islands. It is an all-suite ship intended for expedition-style travel, combining accommodation and expedition access in one specialized vessel.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── DESTINATIONS: CARIBBEAN & MEDITERRANEAN ── */}
            <section className="cc-feature-section cc-bg-accomm">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame">
                                <div className="cc-frame-overlay"></div>
                                <div className="cc-image-badge"><MapPin size={13} /><span>Caribbean</span></div>
                            </div>
                            <div className="cc-left-footnote-card">
                                <Compass size={16} className="cc-footnote-card-icon" />
                                <p className="cc-left-footnote-text">
                                    Celebrity's 2026–2027 Caribbean program includes both traditional seven-night cruises and shorter three- and four-night escapes.
                                </p>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">WHERE DOES CELEBRITY SAIL?</span>
                            <h2 className="cc-section-heading">Caribbean</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">The Caribbean is one of Celebrity's major cruising regions, with itineraries visiting destinations throughout the eastern, western, and southern Caribbean.</p>
                            <p className="cc-feature-body">Depending on the itinerary, ports can include:</p>
                            <div className="cc-pill-grid">
                                {ccCaribbeanPorts.map((item, idx) => <span key={idx} className="cc-pill">{item}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cc-feature-section cc-bg-soft">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid cc-reverse">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame">
                                <div className="cc-frame-overlay"></div>
                                <div className="cc-image-badge"><MapPin size={13} /><span>Mediterranean</span></div>
                            </div>
                            <div className="cc-left-footnote-card">
                                <Compass size={16} className="cc-footnote-card-icon" />
                                <p className="cc-left-footnote-text">
                                    Celebrity's 2026–2027 Mediterranean program includes sailings from Barcelona, Rome, Ravenna, Athens, and Lisbon, with itineraries designed around destinations throughout the Mediterranean.
                                </p>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">EUROPE</span>
                            <h2 className="cc-section-heading">Mediterranean and Europe</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">European cruises are a major part of Celebrity's itinerary portfolio.</p>
                            <p className="cc-feature-body">Common departure or destination regions include:</p>
                            <div className="cc-pill-grid">
                                {ccMedRegions.map((item, idx) => <span key={idx} className="cc-pill">{item}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ALASKA / ASIA / AUSTRALIA / SOUTH AMERICA / GALAPAGOS ── */}
            <section className="cc-destinations-section">
                <div className="cc-destinations-container">
                    <span className="cc-eyebrow">MORE DESTINATIONS</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center', color: '#fff' }}>Alaska, Asia, Australia &amp; New Zealand, <br /> South America &amp; Antarctica, and the Galápagos</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>

                    <div className="cc-dest-grid">
                        <div className="cc-dest-col">
                            <div className="cc-dest-block">
                                <div className="cc-dest-block-head">
                                    <div className="cc-dest-block-icon"><Compass size={20} /></div>
                                    <h3 className="cc-dest-block-title">Alaska</h3>
                                </div>
                                <p className="cc-dest-block-text">
                                    Alaska cruises combine coastal scenery, wildlife, glaciers, and port visits. Celebrity's Alaska program includes itineraries involving destinations such as Vancouver, Seattle, and Seward, depending on the sailing. For travelers choosing an Alaska cruise, itinerary direction, glacier viewing, port time, and the time of year can be as important as the ship itself.
                                </p>
                            </div>
                            <div className="cc-dest-block">
                                <div className="cc-dest-block-head">
                                    <div className="cc-dest-block-icon"><Globe size={20} /></div>
                                    <h3 className="cc-dest-block-title">Asia</h3>
                                </div>
                                <p className="cc-dest-block-text">
                                    Celebrity itineraries can include destinations in Japan, South Korea, Vietnam, Thailand, Taiwan, and Southeast Asia. Longer voyages can make Asia especially attractive for travelers who want to combine several countries without changing hotels between destinations. Celebrity's current global program highlights Japan, South Korea, Thailand, Vietnam, and a newly added Taiwan port of call.
                                </p>
                                <div className="cc-dest-chip-grid">
                                    {ccAsiaDestinations.map((item, idx) => (
                                        <span key={idx} className="cc-dest-chip">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="cc-dest-col">
                            <div className="cc-dest-block">
                                <div className="cc-dest-block-head">
                                    <div className="cc-dest-block-icon"><Ship size={20} /></div>
                                    <h3 className="cc-dest-block-title">Australia &amp; New Zealand</h3>
                                </div>
                                <p className="cc-dest-block-text">
                                    Celebrity also operates itineraries around Australia and New Zealand, making it possible to combine major cities with coastal and natural attractions.
                                </p>
                            </div>
                            <div className="cc-dest-block">
                                <div className="cc-dest-block-head">
                                    <div className="cc-dest-block-icon"><Snowflake size={20} /></div>
                                    <h3 className="cc-dest-block-title">South America &amp; Antarctica</h3>
                                </div>
                                <p className="cc-dest-block-text">
                                    Selected longer itineraries travel through South America and into Antarctic waters. Celebrity's 2026–2027 program includes sailings into the Antarctic Circle as well as voyages around the southern tip of South America.
                                </p>
                            </div>
                            <div className="cc-dest-galapagos-banner">
                                <div className="cc-dest-galapagos-icon"><Compass size={22} /></div>
                                <div>
                                    <span className="cc-dest-galapagos-tag">EXPEDITION</span>
                                    <h4 className="cc-dest-galapagos-title">The Galápagos</h4>
                                    <p className="cc-dest-galapagos-text">
                                        The Galápagos offers a very different Celebrity experience because the focus is expedition-style exploration rather than a traditional large-ship cruise. Celebrity Flora is purpose-built for the region and provides an all-suite experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ITINERARIES: HOW TO CHOOSE ── */}
            <section className="cc-table-section">
                <div className="cc-table-container" style={{ maxWidth: '900px' }}>
                    <span className="cc-eyebrow">PLANNING</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises Itineraries: <br /> How to Choose One</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    <p className="cc-table-intro">
                        The best Celebrity itinerary depends on how much time you have, which destinations you want to visit, and whether the ship or ports are your priority.
                    </p>
                    <div className="cc-compare-wrapper">
                        <table className="cc-compare-table">
                            <thead>
                                <tr><th>Trip Length</th><th className="cc-uni-header">Good For</th><th className="cc-typical-header">What to Consider</th></tr>
                            </thead>
                            <tbody>
                                {ccTripLength.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cc-feature-title">{row.length}</td>
                                        <td className="cc-uni-cell"><span className="cc-uni-badge"><CheckCircle size={13} /><span>{row.goodFor}</span></span></td>
                                        <td className="cc-typical-cell"><span className="cc-typical-value">{row.consider}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cc-table-footnote-badge">
                        <Sparkles size={15} />
                        <span>Celebrity's current programs also include overnight stays on selected itineraries, allowing travelers to experience destinations after normal daytime excursion hours.</span>
                    </div>
                </div>
            </section>

            {/* ── ACCOMMODATIONS ── */}
            <section className="cc-feature-section cc-bg-accomm">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame">
                                <div className="cc-frame-overlay"></div>
                                <div className="cc-image-badge"><Bed size={13} /><span>Interior Stateroom</span></div>
                            </div>
                            <div className="cc-left-footnote-card">
                                <Sparkles size={16} className="cc-footnote-card-icon" />
                                <p className="cc-left-footnote-text">Ocean-view cabins provide a window and natural light without the outdoor space of a traditional balcony.</p>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">CELEBRITY CRUISES ACCOMMODATIONS</span>
                            <h2 className="cc-section-heading">Interior and Ocean View Staterooms</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">Celebrity accommodations range from interior and ocean-view rooms to verandas, AquaClass staterooms, and suites. Interior rooms are generally the most straightforward choice for travelers who prioritize itinerary and onboard activities over having a view from the cabin.</p>
                            <p className="cc-feature-body">They can work well for:</p>
                            <ul className="cc-check-list">
                                {ccInteriorGoodFor.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cc-feature-section cc-bg-soft">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid cc-reverse">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame">
                                <div className="cc-frame-overlay"></div>
                                <div className="cc-image-badge"><Bed size={13} /><span>Infinite Veranda</span></div>
                            </div>
                            <div className="cc-left-footnote-card">
                                <Waves size={16} className="cc-footnote-card-icon" />
                                <p className="cc-left-footnote-text">The Retreat is Celebrity's suite experience, providing access to dedicated spaces and services.</p>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">VERANDA, AQUACLASS &amp; SUITES</span>
                            <h2 className="cc-section-heading">Veranda, Infinite Veranda, AquaClass &amp; The Retreat</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <ul className="cc-check-list">
                                <li><CheckCircle size={16} /><span>Traditional veranda cabins provide private outdoor space, which can be particularly valuable on scenic itineraries such as Alaska or Mediterranean cruises.</span></li>
                                <li><CheckCircle size={16} /><span>Selected Edge Series ships feature Infinite Veranda staterooms, an accommodation concept designed to bring the exterior view closer into the cabin through a convertible indoor-outdoor space.</span></li>
                                <li><CheckCircle size={16} /><span>AquaClass is designed around wellness-focused amenities and access to additional wellness-oriented experiences.</span></li>
                                <li><CheckCircle size={16} /><span>Suite guests can have access to areas including Luminae, a suites-only restaurant, along with other exclusive spaces depending on the ship.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DINING ── */}
            <section className="cc-feature-section cc-bg-accomm">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame cc-placeholder-frame" style={{ height: '360px' }}>
                                <div className="cc-placeholder-content">
                                    <Utensils size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Specialty Dining Restaurant Onboard</span>
                                </div>
                                <div className="cc-image-badge"><Utensils size={13} /><span>Dining</span></div>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">DINING ON CELEBRITY CRUISES</span>
                            <h2 className="cc-section-heading">A Major Component of the Celebrity Experience</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">Food is a major component of the Celebrity experience, with options ranging from casual venues to specialty restaurants. Dining can vary by ship, but travelers may encounter:</p>
                            <div className="cc-pill-grid">
                                {ccDiningVenues.map((item, idx) => <span key={idx} className="cc-pill">{item}</span>)}
                            </div>
                            <div className="cc-wine-footnote-badge">
                                <Sparkles size={14} />
                                <span>Celebrity Ascent, for example, has 32 restaurants, bars, and lounges across the ship.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cc-simple-section">
                <div className="cc-simple-container">
                    <span className="cc-eyebrow">SPECIALTY DINING</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center' }}>Dining for Different Travel Styles</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    <p className="cc-simple-intro">Specialty restaurants generally require an additional charge or may be included in certain packages or promotional offers. Before booking, check whether your selected fare includes specialty dining or whether it should be added separately.</p>
                    <div className="cc-card-grid">
                        {ccDiningStyles.map((item, idx) => (
                            <div key={idx} className="cc-mini-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px', textAlign: 'left' }}>
                                <strong style={{ color: '#ffffff', fontSize: '15px' }}>{item.title}</strong>
                                <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DRINKS / WIFI / PACKAGES ── */}
            <section className="cc-triple-section cc-triple-redesign-section">
                <div className="cc-triple-container">
                    <div className="cc-triple-card">
                        <div className="cc-triple-icon-wrapper"><Wine size={24} /></div>
                        <h3 className="cc-triple-title">Drinks, Wi-Fi and Cruise Packages</h3>
                        <p className="cc-triple-body">Cruise fares and inclusions can differ according to sailing, fare type, promotion, destination, and booking conditions. Possible package categories can include:</p>
                        <ul className="cc-triple-checklist">
                            {ccPackages.map((item, idx) => (<li key={idx}><CheckCircle size={15} /><span>{item}</span></li>))}
                        </ul>
                        <p className="cc-triple-note">Always compare the total trip cost rather than only the advertised cruise fare. A lower base fare can become more expensive if you add drinks, Wi-Fi, specialty dining, excursions, gratuities, flights, hotels, and transfers separately.</p>
                    </div>

                    <div className="cc-triple-card">
                        <div className="cc-triple-icon-wrapper"><Sun size={24} /></div>
                        <h3 className="cc-triple-title">Things to Do on a Celebrity Cruise</h3>
                        <p className="cc-triple-body">Celebrity ships are designed to provide activities throughout the day as well as evening entertainment. Depending on the ship, travelers can find:</p>
                        <ul className="cc-triple-checklist">
                            {ccActivities.slice(0, 8).map((item, idx) => (<li key={idx}><CheckCircle size={15} /><span>{item}</span></li>))}
                        </ul>
                        <p className="cc-triple-note">Edge Series ships place particular emphasis on open-air spaces and unconventional ship design, including the Magic Carpet and large outdoor social spaces.</p>
                    </div>

                    <div className="cc-triple-card">
                        <div className="cc-triple-icon-wrapper"><Heart size={24} /></div>
                        <h3 className="cc-triple-title">Wellness &amp; Entertainment</h3>
                        <p className="cc-triple-body">Wellness options can include:</p>
                        <ul className="cc-triple-checklist">
                            {ccWellness.map((item, idx) => (<li key={idx}><CheckCircle size={15} /><span>{item}</span></li>))}
                        </ul>
                        <p className="cc-triple-note">AquaClass is particularly relevant for travelers who want wellness to be a more central part of their cruise experience. Entertainment varies by ship and sailing but can include theater performances, live music, parties, lounges, and other evening activities. Check the specific ship's current entertainment program before booking if a particular type of show or nightlife is important to you.</p>
                    </div>
                </div>
            </section>

            {/* ── COUPLES / FAMILIES / SOLO ── */}
            <section className="cc-feature-section cc-bg-soft">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame cc-placeholder-frame" style={{ height: '360px' }}>
                                <div className="cc-placeholder-content">
                                    <Heart size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Mediterranean Cruise Destination</span>
                                </div>
                                <div className="cc-image-badge"><Heart size={13} /><span>For Couples</span></div>
                            </div>
                            <div className="cc-wine-footnote-badge">
                                <Sparkles size={14} />
                                <span>For a romantic European trip, Mediterranean itineraries can combine cities such as Rome, Barcelona, Athens, and other coastal destinations in one vacation.</span>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">CELEBRITY CRUISES FOR COUPLES</span>
                            <h2 className="cc-section-heading">A Balance of Relaxation, Dining, and Destinations</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">Celebrity Cruises can be a strong option for couples who want a balance between relaxation, dining, destinations, and evening entertainment. Couples may want to prioritize:</p>
                            <ul className="cc-check-list">
                                {ccCouplesPriorities.map((item, idx) => (<li key={idx}><CheckCircle size={16} /><span>{item}</span></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cc-feature-section cc-bg-accomm">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid cc-reverse">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame cc-placeholder-frame" style={{ height: '360px' }}>
                                <div className="cc-placeholder-content">
                                    <Users size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Family Cruise Onboard Activities</span>
                                </div>
                                <div className="cc-image-badge"><Users size={13} /><span>For Families</span></div>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">CELEBRITY CRUISES FOR FAMILIES</span>
                            <h2 className="cc-section-heading">Modern Ships and Varied Activities</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">Celebrity Cruises offers activities and accommodations suitable for multigenerational travel, although families should compare individual ships carefully. When choosing a family cruise, consider:</p>
                            <ul className="cc-check-list cc-check-list-2col">
                                {ccFamiliesConsider.map((item, idx) => (<li key={idx}><CheckCircle size={16} /><span>{item}</span></li>))}
                            </ul>
                            <div className="cc-wine-footnote-badge">
                                <Sparkles size={14} />
                                <span>For families traveling with children, the itinerary can be just as important as the ship. A cruise with shorter port days may feel very different from one with long destination stays.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cc-simple-section">
                <div className="cc-simple-container">
                    <span className="cc-eyebrow">CELEBRITY CRUISES FOR SOLO TRAVELERS</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center' }}>Compare Cabins, Pricing, and Activities</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    <p className="cc-simple-intro">
                        Solo travelers should compare current cabin categories, solo pricing, onboard activities, and itinerary structure before booking. A ship with numerous social venues and activities can make it easier to meet other travelers, while longer itineraries provide more time to settle into the ship and destination schedule. Solo pricing can vary significantly, so compare the total fare rather than assuming that a particular ship or itinerary will have the lowest single-occupancy cost.
                    </p>
                </div>
            </section>

            {/* ── COST ── */}
            <section className="cc-table-section cc-comparison-section-redesign">
                <div className="cc-table-container" style={{ maxWidth: '900px' }}>
                    <span className="cc-eyebrow">HOW MUCH DOES A CELEBRITY CRUISE COST?</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center' }}>Costs to Budget For</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    <p className="cc-table-intro">
                        There is no single Celebrity Cruises price because fares vary according to ship, destination, departure date, cruise length, cabin category, number of guests, season, promotions, included packages, taxes and fees, and availability. The most useful comparison is the total vacation cost, not simply the initial cruise fare.
                    </p>
                    <div className="cc-compare-wrapper">
                        <table className="cc-compare-table">
                            <thead>
                                <tr><th>Expense</th><th className="cc-uni-header">May Be Included in Cruise Fare?</th></tr>
                            </thead>
                            <tbody>
                                {ccCostBudget.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cc-feature-title">{row.expense}</td>
                                        <td className="cc-uni-cell"><span className="cc-uni-badge"><CheckCircle size={13} /><span>{row.included}</span></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cc-table-footnote-badge">
                        <AlertCircle size={15} />
                        <span>Because inclusions and promotions change, check the conditions attached to the exact sailing before comparing prices.</span>
                    </div>
                </div>
            </section>

            {/* ── BEST TIME TO BOOK ── */}
            <section className="cc-feature-section cc-bg-soft">
                <div className="cc-feature-container">
                    <div className="cc-feature-grid">
                        <div className="cc-feature-image-col">
                            <div className="cc-image-frame cc-placeholder-frame" style={{ height: '340px' }}>
                                <div className="cc-placeholder-content">
                                    <Calendar size={48} className="cc-placeholder-icon" />
                                    <span className="cc-placeholder-text">Booking Timeline Planning</span>
                                </div>
                                <div className="cc-image-badge"><Calendar size={13} /><span>Booking Timing</span></div>
                            </div>
                        </div>
                        <div className="cc-feature-text-col">
                            <span className="cc-eyebrow">WHEN IS THE BEST TIME TO BOOK?</span>
                            <h2 className="cc-section-heading">There Is No Universal Best Booking Date</h2>
                            <div className="cc-heading-separator-bar"></div>
                            <p className="cc-feature-lead">There is no universal best booking date for every traveler. Booking earlier can be useful when:</p>
                            <ul className="cc-check-list">
                                {ccBookEarlyReasons.map((item, idx) => (<li key={idx}><CheckCircle size={16} /><span>{item}</span></li>))}
                            </ul>
                            <p className="cc-feature-body">Waiting for a promotion may be useful when your dates and cabin category are flexible. For highly specific itineraries, availability can matter more than trying to predict the lowest possible fare.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE THE RIGHT SHIP ── */}
            <section className="cc-choose-section">
                <div className="cc-choose-container">

                    {/* Header */}
                    <div className="cc-choose-header">
                        <span className="cc-choose-eyebrow">STEP BY STEP</span>
                        <h2 className="cc-choose-heading">How to Choose the Right Celebrity Ship</h2>
                        <p className="cc-choose-subtext">Start with the destination rather than choosing the ship first. Follow these five steps to find the best match for your travel style.</p>
                    </div>

                    {/* Step cards */}
                    <div className="cc-choose-steps">
                        {[
                            { icon: <MapPin size={22} />, title: 'Choose Your Destination', desc: 'Decide whether you prefer Caribbean beaches, Mediterranean culture, Alaska scenery, Asia, Australia and New Zealand, South America, Antarctica, or Galápagos exploration.' },
                            { icon: <Calendar size={22} />, title: 'Choose Your Cruise Length', desc: 'Determine whether a long weekend, week-long vacation, extended regional journey, or longer voyage fits your schedule.' },
                            { icon: <Ship size={22} />, title: 'Compare Ships', desc: 'Look at ship age, ship class, restaurants, pools, entertainment, staterooms, suite facilities, outdoor spaces, and spa and fitness options.' },
                            { icon: <DollarSign size={22} />, title: 'Compare the Full Cost', desc: 'Include packages, excursions, transportation, hotels, and other expenses — not just the base cruise fare.' },
                            { icon: <Compass size={22} />, title: 'Check the Itinerary', desc: 'Look at number of ports, sea days, port arrival and departure times, overnight stays, embarkation port, and disembarkation port.' },
                        ].map((step, idx) => (
                            <div key={idx} className="cc-choose-step-card" data-num={String(idx + 1).padStart(2, '0')}>
                                <div className="cc-choose-step-top">
                                    <div className="cc-choose-step-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="cc-choose-step-icon-wrap">{step.icon}</div>
                                </div>
                                <div className="cc-choose-step-body">
                                    <h3 className="cc-choose-step-title">{step.title}</h3>
                                    <p className="cc-choose-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Closing tip */}
                    <div className="cc-choose-tip">
                        <Sparkles size={18} />
                        <span>The best Celebrity ship is the one that fits your destination, travel dates, cabin preference, and budget — not just the newest or largest vessel in the fleet.</span>
                    </div>

                </div>
            </section>

            {/* ── COMPARISON VS OTHER PREMIUM LINES ── */}
            <section className="cc-table-section cc-comparison-section-redesign">
                <div className="cc-table-container" style={{ maxWidth: '900px' }}>
                    <span className="cc-eyebrow">HOW CELEBRITY COMPARES</span>
                    <h2 className="cc-section-heading" style={{ textAlign: 'center' }}>Celebrity Cruises vs. Other Premium Cruise Options</h2>
                    <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    <p className="cc-table-intro">Celebrity Cruises is best compared by travel style rather than simply by brand.</p>
                    <div className="cc-compare-wrapper">
                        <table className="cc-compare-table">
                            <thead>
                                <tr><th>Factor</th><th className="cc-uni-header"><Sparkles size={15} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--cc-accent-light)' }} />Celebrity Cruises</th></tr>
                            </thead>
                            <tbody>
                                {ccComparisonFactors.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="cc-feature-title">{row.factor}</td>
                                        <td className="cc-uni-cell"><span className="cc-uni-badge"><CheckCircle size={13} /><span>{row.value}</span></span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cc-table-footnote-badge">
                        <Award size={15} />
                        <span>The right alternative depends on whether you prioritize luxury, expedition travel, family entertainment, traditional cruising, smaller ships, or destination immersion.</span>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO KNOW BEFORE YOUR FIRST CRUISE ── */}
            <section className="cc-know-section">
                <div className="cc-know-container">

                    {/* Header */}
                    <div className="cc-know-header">
                        <span className="cc-know-eyebrow">FIRST-TIME TRAVELERS</span>
                        <h2 className="cc-know-heading">What to Know Before Your First Celebrity Cruise</h2>
                        <p className="cc-know-subtext">Ensure a smooth voyage by preparing these essential details before you arrive at the embarkation port.</p>
                    </div>

                    {/* Step cards */}
                    <div className="cc-know-steps">
                        {[
                            { icon: <ShieldCheck size={22} />, title: 'Check Your Travel Documents', desc: 'Passport, visa, entry, and transit requirements depend on nationality and itinerary. Check official government and cruise-line requirements before departure.' },
                            { icon: <Anchor size={22} />, title: 'Arrive at the Embarkation Port Early', desc: 'If you are flying to the departure city, consider arriving at least one day before the cruise when practical. This reduces the risk of a flight delay causing you to miss embarkation.' },
                            { icon: <Phone size={22} />, title: 'Download the Cruise App', desc: 'Use the official cruise app and pre-cruise information to review check-in requirements, schedules, reservations, and onboard information.' },
                            { icon: <Sparkles size={22} />, title: 'Reserve Popular Experiences', desc: 'Specialty dining, excursions, and certain activities can have limited availability.' },
                            { icon: <DollarSign size={22} />, title: 'Pack for the Itinerary', desc: 'A Caribbean cruise and an Alaska cruise can require very different clothing and equipment.' },
                            { icon: <AlertCircle size={22} />, title: 'Budget for Extras', desc: 'Plan for excursions, drinks, Wi-Fi, specialty dining, transportation, hotels, and other expenses that may not be included in the base fare.' },
                        ].map((step, idx) => (
                            <div key={idx} className="cc-know-step-card" data-num={String(idx + 1).padStart(2, '0')}>
                                <div className="cc-know-step-top">
                                    <div className="cc-know-step-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="cc-know-step-icon-wrap">{step.icon}</div>
                                </div>
                                <div className="cc-know-step-body">
                                    <h3 className="cc-know-step-title">{step.title}</h3>
                                    <p className="cc-know-step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── 2026-2027 HIGHLIGHTS ── */}
            <section className="cc-highlights-section">
                <div className="cc-highlights-container">
                    <div className="cc-highlights-header">
                        <span className="cc-highlights-eyebrow">LOOKING AHEAD</span>
                        <h2 className="cc-highlights-title">Celebrity Cruises 2026–2027 Highlights</h2>
                        <p className="cc-highlights-subtext">Celebrity's current 2026–2027 program includes a particularly broad range of global travel opportunities.</p>
                    </div>
                    <div className="cc-highlights-grid">
                        {cc2026Highlights.map((item, idx) => (
                            <div key={idx} className="cc-highlight-card">
                                <div className="cc-highlight-icon"><TrendingUp size={18} /></div>
                                <span className="cc-highlight-text">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="cc-highlights-footer">
                        <div className="cc-highlights-footer-icon"><Globe size={20} /></div>
                        <p className="cc-highlights-footer-text">Celebrity's published 2026–2027 program describes itineraries spanning more than 70 countries and all seven continents, with more than 280 destinations represented across the program. The fleet and itinerary schedule can change, so travelers should verify current sailing details before booking.</p>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="cc-expert-insight-section">
                <div className="cc-expert-insight-container">
                    <div className="cc-expert-portrait-panel">
                        <div className="cc-expert-img-frame">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - Luxury Cruise Travel Expert" className="cc-expert-img" />
                            <div className="cc-expert-img-overlay"></div>
                            <span className="cc-expert-badge">EXPERT ADVISOR</span>
                        </div>
                        <div className="cc-expert-stats-strip">
                            <div className="cc-expert-stat-box">
                                <div className="cc-expert-stat-num">40+</div>
                                <div className="cc-expert-stat-lbl">Years Experience</div>
                            </div>
                            <div className="cc-expert-stat-box">
                                <div className="cc-expert-stat-num">121+</div>
                                <div className="cc-expert-stat-lbl">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    <div className="cc-expert-content-panel">
                        <div className="cc-expert-eyebrow-row">
                            <Sparkles size={16} />
                            <span className="cc-eyebrow">MEET THE CEO</span>
                        </div>
                        <h2 className="cc-section-heading1">Insight from Angela Hughes</h2>
                        <div className="cc-heading-separator-bar"></div>

                        <div className="cc-expert-quote-card">
                            <span className="cc-expert-quote-mark">"</span>
                            <p className="cc-expert-quote-text">
                                Celebrity Cruises earns its premium reputation by pairing contemporary ship design with genuinely destination-focused itineraries. The Edge Series proves that innovative architecture and thoughtful travel planning can work beautifully together.
                            </p>
                        </div>

                        <div className="cc-expert-priorities">
                            <h5 className="cc-priorities-title">What Makes Celebrity Cruises Stand Out:</h5>
                            <div className="cc-expert-pills">
                                {['Contemporary Edge Series Design', 'Global Destination Portfolio', 'Elevated Culinary Program', 'The Retreat Suite Experience', 'Wellness-Focused AquaClass', 'Galápagos Expedition Access'].map(pill => (
                                    <span key={pill} className="cc-expert-pill">
                                        <CheckCircle size={12} />
                                        <span>{pill}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="cc-expert-footer-bio">
                            <p className="cc-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom travel planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="cc-takeaways-section">
                <div className="cc-takeaways-container">
                    <div className="cc-takeaways-header">
                        <span className="cc-takeaways-eyebrow">SUMMARY</span>
                        <h2 className="cc-takeaways-title">Key Takeaways</h2>
                    </div>
                    <div className="cc-takeaways-grid">
                        {ccKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="cc-takeaway-card">
                                <div className="cc-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                <p className="cc-takeaway-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="cc-faq-section">
                <div className="cc-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="cc-section-heading">Frequently Asked Questions About Celebrity Cruises</h2>
                        <div className="cc-heading-separator-bar cc-bar-centered"></div>
                    </div>
                    <div className="cc-faq-list-wrapper">
                        {ccFaqs.map((faq, index) => (
                            <div key={index} className="cc-faq-item" onClick={() => ccToggleFaq(index)}>
                                <div className="cc-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="cc-faq-toggle-icon">{ccActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {ccActiveFaq === index && (
                                    <p className="cc-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cc-cta-redesign-section">
                <div className="cc-cta-aurora-glow"></div>
                <div className="cc-cta-crystal cc-cta-crystal-1"></div>
                <div className="cc-cta-crystal cc-cta-crystal-2"></div>
                <div className="cc-cta-crystal cc-cta-crystal-3"></div>
                <div className="cc-cta-grid-lines"></div>

                <div className="cc-cta-content">
                    <div className="cc-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="cc-cta-eyebrow">PLAN YOUR CELEBRITY CRUISE WITH TRIPS AND SHIPS</span>
                    <h2 className="cc-cta-title">Ready to Compare Celebrity Cruises Ships, Destinations, and Itineraries?</h2>
                    <div className="cc-cta-bar"></div>
                    <p className="cc-cta-subtitle">
                        Start with the destination you want to explore, compare the ships sailing there, then evaluate cabin categories and the complete trip cost. Whether you're considering a Caribbean escape, Mediterranean voyage, Alaska cruise, or a longer global itinerary, choosing the right combination of ship + itinerary + cabin + inclusions can make the planning process much easier. Explore the latest Celebrity Cruises options and use Trips and Ships to continue researching your next cruise vacation.
                    </p>
                    <div className="cc-cta-actions">
                        <Link to="/contact" className="cc-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="cc-cta-btn-arrow" />
                        </Link>
                        <Link to="/celebrity-cruises" className="cc-cta-secondary-btn">
                            <LayoutList size={18} />
                            <span>Explore Celebrity Cruises Itineraries</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CelebrityCruisesGuide