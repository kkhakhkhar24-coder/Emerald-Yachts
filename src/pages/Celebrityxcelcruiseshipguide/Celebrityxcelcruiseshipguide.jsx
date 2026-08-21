// Celebrityxcelcruiseshipguide.jsx
import Navbar from '../../components/Navbar/Navbar'
import './Celebrityxcelcruiseshipguide.css'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem, ArrowRight,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, Calendar, DollarSign, Info,
    Image as ImageIcon, Coffee, Salad, Fish, Soup, PartyPopper,
    Leaf, Shirt, ListChecks, Waves, Coffee as CoffeeIcon,
    Layers
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CxPlaceholder({ label, className = '' }) {
    return (
        <div className={`cx-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function Celebrityxcelcruiseshipguide() {
    const [cxActiveFaq, setCxActiveFaq] = useState(null)
    const cxToggleFaq = i => setCxActiveFaq(cxActiveFaq === i ? null : i)
    const [cxActiveDiningTab, setCxActiveDiningTab] = useState(0)

    const cxAtAGlance = [
        { feature: 'Ship Series', detail: 'Celebrity Edge Series', Icon: Ship },
        { feature: 'Maiden Voyage', detail: 'November 18, 2025', Icon: Calendar },
        { feature: 'Decks', detail: '17 Decks', Icon: Layers },
        { feature: 'Design', detail: 'Edge Series outward-facing design', Icon: Compass },
        { feature: 'Accommodation Types', detail: 'Inside, Ocean View, Veranda, Infinite Veranda, Suites', Icon: Bed },
        { feature: 'Signature Element', detail: 'Magic Carpet', Icon: Sparkles },
        { feature: 'Key Dining', detail: 'Spice Café, Oceanview Café, Mast Grill, Cyprus Restaurant', Icon: Utensils },
        { feature: 'Itinerary Focus', detail: 'Caribbean and Europe', Icon: Globe },
        { feature: 'Sister Ships', detail: 'Celebrity Edge, Apex, Beyond, Ascent', Icon: Anchor }
    ]

    const cxCabinTypes = [
        { type: 'Inside Staterooms', size: '181–202 sq ft', desc: 'Enclosed accommodation without a private exterior view. Can accommodate up to four guests in selected configurations.', Icon: Moon, tag: 'Best Value' },
        { type: 'Ocean View Staterooms', size: '200–242 sq ft', desc: 'Replace a traditional balcony with large windows overlooking the sea.', Icon: Eye, tag: 'Natural Light' },
        { type: 'Veranda Staterooms', size: '202–228 sq ft', desc: 'Provide a private outdoor balcony, with veranda sizes varying by category.', Icon: Sun, tag: 'Private Balcony' },
        { type: 'Infinite Veranda Staterooms', size: '~243 sq ft', desc: 'Allows the exterior space to become part of the stateroom through a floor-to-ceiling opening.', Icon: Waves, tag: 'Most Popular' },
        { type: 'Suites & The Retreat', size: 'Varies', desc: "Suite accommodations associated with The Retreat, Celebrity's suite experience with dedicated spaces and services.", Icon: Crown, tag: 'Premium' }
    ]

    const cxCabinFeatures = [
        { Icon: Bed, label: 'eXhale bedding' },
        { Icon: Bath, label: 'Private bathroom' },
        { Icon: Tv, label: 'Interactive TV' },
        { Icon: Wifi, label: 'Wi-Fi access' },
        { Icon: CoffeeIcon, label: 'Coffee maker (select categories)' },
        { Icon: Gift, label: 'Premium amenities (suites)' }
    ]

    const cxDeckPlanConsiderations = [
        'Distance from elevators — convenient, but potentially busier.',
        'Location below public areas — important if you prefer quiet nights.',
        'Location above entertainment venues — check carefully if you are sensitive to sound.',
        'Proximity to pools — useful for travelers who prioritize outdoor access.',
        'Forward, midship, or aft position — each offers a different onboard experience.',
        'Connecting rooms — useful for families traveling together.',
        'Accessible cabins — designed with features such as wider doors and roll-in showers where applicable.'
    ]

    const cxCabinPriorityGuide = [
        { priority: 'Lowest accommodation cost', feature: 'Inside stateroom', Icon: DollarSign },
        { priority: 'Natural light', feature: 'Ocean View', Icon: Eye },
        { priority: 'Traditional outdoor space', feature: 'Veranda', Icon: Sun },
        { priority: 'Indoor/outdoor flexibility', feature: 'Infinite Veranda', Icon: Waves },
        { priority: 'More space & premium benefits', feature: 'Suite / The Retreat', Icon: Crown },
        { priority: 'Families', feature: 'Connecting or larger accommodations', Icon: Users },
        { priority: 'Mobility considerations', feature: 'Accessible stateroom', Icon: UserCheck },
        { priority: 'Quiet relaxation', feature: 'Away from high-traffic areas', Icon: Moon }
    ]

    const cxDiningVenues = [
        {
            name: 'Spice Café',
            Icon: Utensils,
            tag: 'Destination-Inspired · Included',
            imageLabel: 'Spice Café destination-inspired dining',
            description: 'Spice Café is designed around destination-inspired flavors. Celebrity describes its menus as changing with the destinations and festivals featured at The Bazaar. This makes it particularly relevant for travelers who want the food onboard to reflect the places they are visiting.',
            useful: ['Destination-inspired flavors', 'Changing menus based on ports', 'Connection to The Bazaar concept']
        },
        {
            name: 'Oceanview Café',
            Icon: Globe,
            tag: 'Marketplace Style · Included',
            imageLabel: 'Oceanview Café buffet and seating',
            description: 'Oceanview Café provides a marketplace-style dining experience with a broad selection of food and international flavors. It is a useful option for flexible meals when guests do not want a formal dining experience.',
            useful: ['Flexible dining times', 'International cuisine variety', 'Casual atmosphere']
        },
        {
            name: 'Mast Grill',
            Icon: Sun,
            tag: 'Casual · Poolside · Included',
            imageLabel: 'Poolside meal at Mast Grill',
            description: 'Mast Grill offers casual poolside dining, including burgers and other relaxed fare. It is positioned for guests who want to eat without leaving the outdoor pool area.',
            useful: ['Convenient on sea days', 'Poolside convenience', 'Casual dining experience']
        },
        {
            name: 'Cyprus Restaurant',
            Icon: Landmark,
            tag: 'Mediterranean · Included',
            imageLabel: 'Cyprus Restaurant Mediterranean cuisine',
            description: 'Cyprus Restaurant focuses on Mediterranean-inspired cuisine, with seafood and clean, simple flavors highlighted by Celebrity. It is one of the featured dining venues on Celebrity Xcel.',
            useful: ['Mediterranean-inspired dishes', 'Seafood selections', 'Clean, simple flavors']
        }
    ]

    const cxSpecialtyDining = [
        'Premium steak and seafood options',
        'Interactive dining experiences',
        'International cuisine specialties',
        'Wine-pairing dinners',
        'Chef\'s table experiences'
    ]

    const cxBarsLounges = [
        { label: 'Cocktail & Lounge Bars', desc: 'Evening social spaces for cocktails and conversations.', Icon: Wine },
        { label: 'Poolside Drinks', desc: 'Refreshments served at and around the pool deck.', Icon: Sun },
        { label: 'Coffee & Café Options', desc: 'Casual spots for morning coffee and light bites.', Icon: CoffeeIcon },
        { label: 'Destination Beverages', desc: 'Drinks inspired by the ports and places on the itinerary.', Icon: Globe },
        { label: 'Evening Social Spaces', desc: 'Venues designed for after-dinner drinks and nightlife.', Icon: Moon },
        { label: 'Premium Experiences', desc: 'Curated beverage menus and elevated drink selections.', Icon: Gem }
    ]

    const cxThingsToDo = [
        { Icon: Anchor, label: 'Magic Carpet cantilevered platform' },
        { Icon: Palette, label: 'The Bazaar destination experiences' },
        { Icon: Waves, label: 'Pools and outdoor spaces' },
        { Icon: Sparkles, label: 'Spa and wellness facilities' },
        { Icon: Music, label: 'Live entertainment and performances' },
        { Icon: Camera, label: 'Destination-inspired activities' }
    ]

    const cxEntertainment = [
        { label: 'Theater Live Performances', Icon: Sparkles },
        { label: 'Live Music & Lounges', Icon: Music },
        { label: 'Interactive Shows', Icon: Users },
        { label: 'Destination Programming', Icon: Globe },
        { label: 'Social Theme Events', Icon: Wine },
        { label: 'Pool-Deck Parties', Icon: Sun },
        { label: 'Active Nightlife', Icon: Moon }
    ]

    const cxItineraries = [
        { region: 'Caribbean', desc: 'Warm-weather destinations, beaches, island excursions, and plenty of time outdoors.' },
        { region: 'Europe', desc: 'Mediterranean and other European cruise regions, depending on the season and sailing schedule.' }
    ]

    const cxComparisonTable = [
        { ship: 'Celebrity Edge', position: 'First Edge Series ship', consideration: 'Introduced the distinctive Edge design' },
        { ship: 'Celebrity Apex', position: 'Second', consideration: 'Expanded the Edge concept' },
        { ship: 'Celebrity Beyond', position: 'Third', consideration: 'Larger evolution of the design' },
        { ship: 'Celebrity Ascent', position: 'Fourth', consideration: 'Adds further dining and outdoor concepts' },
        { ship: 'Celebrity Xcel', position: 'Fifth', consideration: 'Builds on the series with newer experiences' }
    ]

    const cxPlanningFactors = [
        { title: 'Choose the Right Itinerary', desc: 'Look at ports, sea days, embarkation location, and total cruise length.' },
        { title: 'Compare Cabin Categories', desc: 'A cheaper cabin may provide less space or fewer benefits. An Infinite Veranda or suite may make sense for travelers who value the accommodation itself.' },
        { title: 'Check Dining Options', desc: 'Review included and specialty dining choices before deciding whether additional dining reservations or packages are worthwhile.' },
        { title: 'Review the Deck Plan', desc: 'Use the current deck plan to identify potential noise sources and walking distances.' },
        { title: 'Check What\'s Included', desc: 'Cruise fare inclusions can differ by fare type, promotion, cabin category, and sailing.' }
    ]

    const cxWhoIsItFor = [
        { label: 'Contemporary Ship Design', Icon: Ship },
        { label: 'Premium Cruising Experience', Icon: Award },
        { label: 'Modern Accommodations', Icon: Bed },
        { label: 'Ocean Views & Open Air', Icon: Sun },
        { label: 'Specialty Dining & Varied Food', Icon: Utensils },
        { label: 'Wellness & Active Recovery', Icon: Heart },
        { label: 'Destination-Inspired Culturing', Icon: Globe },
        { label: 'Couples & Adult Getaways', Icon: Users },
        { label: 'Edge Series Enthusiasts', Icon: Sparkles }
    ]

    const cxKeyTakeaways = [
        { title: 'Edge Series Linage', desc: 'Celebrity Xcel is the fifth addition to Celebrity Cruises\' acclaimed Edge Series family.' },
        { title: 'Debut Timeline', desc: 'The modern vessel made its maiden voyage on November 18, 2025.' },
        { title: 'Decks Layout', desc: 'Features a total of 17 passenger-accessible decks to explore onboard.' },
        { title: 'Staterooms Options', desc: 'Offers Inside, Ocean View, Veranda, Infinite Veranda, and premium suite categories.' },
        { title: 'Magic Carpet', desc: 'Showcases the signature cantilevered floating platform as a focal feature.' },
        { title: 'Diverse Dining', desc: 'Includes key venues like Spice Café, Oceanview Café, Mast Grill, and Cyprus Restaurant.' },
        { title: 'Itinerary Focus', desc: 'Routes sail across sunny Caribbean routes and cultural European destinations.' },
        { title: 'Deck Selection', desc: 'Check the deck plan carefully to inspect noise levels and distances before booking.' },
        { title: 'Ideal Audience', desc: 'Perfect for travelers who value modern ship designs, premium dining, and wellness.' }
    ]

    const cxFaqs = [
        { question: 'When did Celebrity Xcel enter service?', answer: 'Celebrity Xcel\'s maiden voyage was on November 18, 2025, making it the newest ship in Celebrity Cruises\' Edge Series.' },
        { question: 'How many decks does Celebrity Xcel have?', answer: 'Celebrity Xcel has 17 decks, according to Celebrity Cruises\' current deck-plan information.' },
        { question: 'Is Celebrity Xcel an Edge Series ship?', answer: 'Yes. Celebrity Xcel is the fifth ship in Celebrity Cruises\' Edge Series, following Celebrity Edge, Apex, Beyond, and Ascent.' },
        { question: 'What is special about Celebrity Xcel?', answer: 'Celebrity Xcel combines the established Edge Series design with newer dining, entertainment, and destination-focused concepts. Its features include outward-facing spaces, Infinite Verandas, and the Magic Carpet.' },
        { question: 'Does Celebrity Xcel have Infinite Veranda cabins?', answer: 'Yes. Celebrity Xcel offers Infinite Veranda staterooms, which use a floor-to-ceiling opening to create an indoor/outdoor-style connection with the sea.' },
        { question: 'How large are Celebrity Xcel Infinite Veranda rooms?', answer: 'Celebrity lists the referenced Infinite Veranda accommodation at approximately 243 square feet, including the integrated veranda space. Exact dimensions can vary by cabin category.' },
        { question: 'What restaurants are on Celebrity Xcel?', answer: 'Celebrity\'s current Xcel information highlights dining venues including Spice Café, Oceanview Café, Mast Grill, and Cyprus Restaurant, along with additional dining and specialty options.' },
        { question: 'Does Celebrity Xcel have specialty dining?', answer: 'Yes. Celebrity Xcel offers specialty dining experiences in addition to its included dining venues. Specific restaurants, menus, prices, and reservation requirements can vary by sailing.' },
        { question: 'Where does Celebrity Xcel sail?', answer: 'Celebrity currently lists Celebrity Xcel itineraries in the Caribbean and Europe. Exact ports and cruise lengths depend on the sailing date and itinerary.' },
        { question: 'Does Celebrity Xcel have the Magic Carpet?', answer: 'Yes. The Magic Carpet is one of the signature features associated with Celebrity\'s Edge Series and is part of the ship\'s distinctive design.' },
        { question: 'What cabin types are available on Celebrity Xcel?', answer: 'Cabin choices include Inside, Ocean View, Veranda, Infinite Veranda, and suite accommodations, with accessible staterooms also available.' },
        { question: 'Is Celebrity Xcel good for couples?', answer: 'Celebrity Xcel can be a strong option for couples seeking contemporary design, premium dining, ocean views, wellness spaces, and a sophisticated cruise environment.' },
        { question: 'Is Celebrity Xcel family-friendly?', answer: 'Families can sail on Celebrity Xcel, although the ship\'s overall positioning emphasizes premium design, dining, relaxation, and destination experiences.' },
        { question: 'How should I choose a Celebrity Xcel cabin?', answer: 'Start with your priorities—budget, balcony access, space, views, location, and suite benefits—then use the current deck plan to check nearby venues, elevators, public spaces, and potential sources of noise.' },
        { question: 'Where can I find Celebrity Xcel deck plans?', answer: 'Celebrity Cruises publishes the current Xcel deck plans through its official website. Travelers should use the latest version when choosing a specific stateroom.' }
    ]

    const cxSchemaData = {
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel",
                "name": "Celebrity Xcel Cruise Ship Guide",
                "description": "Explore Celebrity Xcel with this complete ship guide covering cabins, dining, entertainment, pools, Edge Series features, decks, and itineraries.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#article",
                "headline": "Celebrity Xcel Cruise Ship Guide",
                "description": "A comprehensive guide to Celebrity Xcel covering accommodations, dining, entertainment, Edge Series features, deck plans, itineraries, and planning advice.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Cruises Ships", "item": "https://www.tripsandships.com/celebrity-cruises/ships/" },
                    { "@type": "ListItem", "position": 4, "name": "Celebrity Xcel", "item": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel#faq",
                "mainEntity": cxFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Xcel Cruise Ship Guide</title>
                <meta name="title" content="Celebrity Xcel Cruise Ship Guide" />
                <meta name="description" content="Explore Celebrity Xcel with this complete ship guide covering cabins, dining, entertainment, pools, Edge Series features, decks, and itineraries." />
                <meta name="keywords" content="Celebrity Xcel cruise ship, Celebrity Xcel ship guide, Celebrity Xcel cabins, Celebrity Xcel deck plans, Celebrity Xcel restaurants, Celebrity Xcel amenities, Celebrity Xcel itinerary, Celebrity Xcel Edge Series" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/ships/celebrity-xcel" />
                <script type="application/ld+json">{JSON.stringify(cxSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="cx-page">

                {/* ── HERO ── */}
                <section className="cx-hero-section">
                    <CxPlaceholder label="Celebrity Xcel cruise ship at sea" className="cx-hero-bg-placeholder" />
                    <div className="cx-hero-overlay-layer"></div>
                    <div className="cx-hero-content-wrapper">
                        <div className="cx-hero-eyebrow-tag">
                            <Ship size={16} />
                            <span>Edge Series · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="cx-hero-main-title">Celebrity Xcel <br /> Cruise Ship Guide</h1>
                        <p className="cx-hero-subtitle-text">
                            Celebrity Xcel is the newest addition to Celebrity Cruises' Edge Series, joining Celebrity Edge, Celebrity Apex, Celebrity Beyond, and Celebrity Ascent. The ship combines the design concepts established by the Edge Series with additional dining, entertainment, outdoor, and destination-focused experiences.
                        </p>
                    </div>
                </section>

                {/* ── INTRO / AT A GLANCE ── */}
                <section className="cx-intro-section">
                    <div className="cx-intro-container">
                        <span className="cx-eyebrow cx-eyebrow-center">SHIP OVERVIEW</span>
                        <h2 className="cx-section-heading" style={{ textAlign: 'center' }}>Celebrity Xcel at a Glance</h2>
                        <div className="cx-heading-separator-bar cx-bar-centered"></div>
                        <p className="cx-intro-lead">
                            Celebrity Xcel entered service in November 2025 as the fifth ship in the Edge Series — designed around outward-facing spaces, innovative accommodations, multiple dining venues, and destination-focused experiences.
                        </p>

                        <div className="cx-glance-grid">
                            {cxAtAGlance.map((row, idx) => (
                                <div key={idx} className="cx-glance-card">
                                    <div className="cx-glance-card-icon">
                                        <row.Icon size={20} />
                                    </div>
                                    <div className="cx-glance-card-body">
                                        <span className="cx-glance-card-feature">{row.feature}</span>
                                        <span className="cx-glance-card-detail">{row.detail}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cx-intro-statement-box">
                            <Info className="cx-intro-statement-icon" size={24} />
                            <p className="cx-intro-statement-text">
                                Celebrity's current fleet information places Xcel within its Edge Series alongside Edge, Apex, Beyond, and Ascent. Celebrity's official ship information lists Xcel's maiden voyage as November 18, 2025.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── WHAT MAKES XCEL DIFFERENT ── */}
                <section className="cx-different-section">
                    <div className="cx-different-container">
                        <div className="cx-different-grid">
                            <div className="cx-different-text-col">
                                <span className="cx-eyebrow">EDGE SERIES EVOLUTION</span>
                                <h2 className="cx-section-heading">What Makes Celebrity Xcel Different?</h2>
                                <div className="cx-heading-separator-bar"></div>
                                <p className="cx-different-lead">Celebrity Xcel builds on the design language introduced with the Edge Series rather than simply adding another conventional cruise ship to the fleet.</p>
                                <p className="cx-different-sub-label">Its design emphasizes:</p>
                                <div className="cx-different-list">
                                    {[
                                        'Open and outward-facing public spaces',
                                        'Large areas designed around ocean and destination views',
                                        'Innovative Infinite Veranda staterooms',
                                        'The Magic Carpet cantilevered platform',
                                        'Multiple restaurants, cafés, bars, and lounges',
                                        'Destination-inspired food and entertainment',
                                        'Dedicated wellness and relaxation spaces',
                                        'A mixture of contemporary indoor and outdoor areas'
                                    ].map((item, idx) => (
                                        <div key={idx} className="cx-different-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cx-different-image-col">
                                <div className="cx-image-frame">
                                    <CxPlaceholder label="Celebrity Xcel Magic Carpet and exterior" />
                                    <div className="cx-frame-overlay"></div>
                                    <div className="cx-image-badge">
                                        <Sparkles size={13} />
                                        <span>Edge Series Innovation</span>
                                    </div>
                                </div>
                                <p className="cx-different-note">The result is a ship designed to make the ocean and destinations part of the onboard experience rather than treating them simply as scenery outside the ship. Celebrity describes Xcel as combining the established Edge Series experiences with new spaces and food-and-drink concepts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CABINS AND SUITES ── */}
                <section className="cx-cabins-section">
                    <div className="cx-cabins-container">

                        {/* Header row: text left, image right */}
                        <div className="cx-cabins-header-grid">
                            <div className="cx-cabins-header-text">
                                <span className="cx-eyebrow cx-eyebrow-light">ACCOMMODATIONS</span>
                                <h2 className="cx-section-heading cx-white-heading">Celebrity Xcel Cabins and Suites</h2>
                                <div className="cx-heading-separator-bar cx-separator-white"></div>
                                <p className="cx-cabins-intro">Celebrity Xcel offers several accommodation categories — from economical inside rooms to ocean-view cabins, private verandas, the innovative Infinite Veranda, and premium suite accommodations through The Retreat.</p>
                            </div>
                            <div className="cx-cabins-header-image">
                                <CxPlaceholder label="Celebrity Xcel Infinite Veranda stateroom interior" />
                                <div className="cx-frame-overlay cx-overlay-soft"></div>
                                <div className="cx-image-badge">
                                    <Bed size={13} />
                                    <span>Cabins &amp; Suites</span>
                                </div>
                            </div>
                        </div>

                        {/* Cabin type cards */}
                        <div className="cx-cabins-grid">
                            {cxCabinTypes.map((cabin, idx) => (
                                <div key={idx} className="cx-cabins-card">
                                    <div className="cx-cabins-card-top">
                                        <div className="cx-cabins-card-icon-wrap">
                                            <cabin.Icon size={18} />
                                        </div>
                                        <span className="cx-cabins-card-tag">{cabin.tag}</span>
                                    </div>
                                    <h3 className="cx-cabins-card-title">{cabin.type}</h3>
                                    <span className="cx-cabins-card-size">{cabin.size}</span>
                                    <p className="cx-cabins-card-desc">{cabin.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stateroom features strip */}
                        <div className="cx-cabins-features">
                            <h4 className="cx-cabins-features-title">What to Expect in Your Stateroom</h4>
                            <div className="cx-cabins-features-grid">
                                {cxCabinFeatures.map((item, idx) => (
                                    <div key={idx} className="cx-cabins-feature-item">
                                        <item.Icon size={16} />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tip footer */}
                        <div className="cx-cabins-footer">
                            <Info size={16} className="cx-cabins-footer-icon" />
                            <p>Tip: Compare the benefits included with each suite category rather than choosing solely by cabin size. Suite amenities and access can vary.</p>
                        </div>

                    </div>
                </section>

                {/* ── DECK PLANS ── */}
                <section className="cx-deck-section">
                    <div className="cx-deck-container">

                        {/* Split layout: intro left, cards right */}
                        <div className="cx-deck-split">

                            {/* Left: heading + stat + note */}
                            <div className="cx-deck-left">
                                <span className="cx-eyebrow">NAVIGATING THE SHIP</span>
                                <h2 className="cx-section-heading">Celebrity Xcel Deck Plans</h2>
                                <div className="cx-heading-separator-bar"></div>
                                <p className="cx-deck-intro">Celebrity Xcel has 17 decks. Choosing the right stateroom goes beyond the cabin category — your position on the deck plan matters just as much.</p>

                                <div className="cx-deck-stat-card">
                                    <span className="cx-deck-stat-number">17</span>
                                    <div className="cx-deck-stat-label">
                                        <span className="cx-deck-stat-title">Total Decks</span>
                                        <span className="cx-deck-stat-sub">Celebrity Xcel</span>
                                    </div>
                                </div>

                                <div className="cx-deck-note">
                                    <Info size={16} className="cx-deck-note-icon" />
                                    <p>Celebrity specifically notes accessible accommodations with wider doors, roll-in showers, and grab bars.</p>
                                </div>
                            </div>

                            {/* Right: numbered consideration cards */}
                            <div className="cx-deck-right">
                                <p className="cx-deck-sub">What to check on the deck plan before booking:</p>
                                <div className="cx-deck-grid">
                                    {cxDeckPlanConsiderations.map((item, idx) => (
                                        <div key={idx} className="cx-deck-card">
                                            <div className="cx-deck-card-num">{idx + 1}</div>
                                            <div className="cx-deck-card-icon"><Compass size={16} /></div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── CHOOSING A CABIN ── */}
                <section className="cx-cabin-choice-section">
                    <div className="cx-cabin-choice-container">

                        <div className="cx-cabin-choice-split">

                            {/* Left: heading + intro + image */}
                            <div className="cx-cabin-choice-left">
                                <span className="cx-eyebrow cx-eyebrow-light">CABIN SELECTION</span>
                                <h2 className="cx-section-heading cx-white-heading">Choosing the Best Celebrity Xcel Cabin</h2>
                                <div className="cx-heading-separator-bar cx-separator-white"></div>
                                <p className="cx-cabin-choice-intro">There is no single cabin location ideal for every traveler. Match your priority to the right cabin type.</p>

                                <div className="cx-cabin-choice-img">
                                    <CxPlaceholder label="Celebrity Xcel balcony cabin ocean view" />
                                    <div className="cx-frame-overlay cx-overlay-soft"></div>
                                    <div className="cx-image-badge">
                                        <Compass size={13} />
                                        <span>Cabin Selection</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: priority guide rows */}
                            <div className="cx-cabin-choice-right">
                                <div className="cx-cabin-choice-grid">
                                    {cxCabinPriorityGuide.map((item, idx) => (
                                        <div key={idx} className="cx-cabin-choice-card">
                                            <div className="cx-cabin-choice-card-icon">
                                                <item.Icon size={16} />
                                            </div>
                                            <div className="cx-cabin-choice-card-body">
                                                <span className="cx-cabin-choice-priority">{item.priority}</span>
                                                <span className="cx-cabin-choice-arrow">→</span>
                                                <span className="cx-cabin-choice-feature">{item.feature}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cx-cabin-choice-footer">
                                    <Info size={16} className="cx-cabin-choice-footer-icon" />
                                    <p>Before selecting a cabin, use the current deck plan and check what is directly above, below, and beside it.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── DINING ── */}
                <section className="cx-dining-section">
                    <div className="cx-dining-container">

                        {/* Section header */}
                        <span className="cx-eyebrow cx-eyebrow-center">ONBOARD DINING</span>
                        <h2 className="cx-section-heading" style={{ textAlign: 'center' }}>Celebrity Xcel Dining</h2>
                        <div className="cx-heading-separator-bar cx-bar-centered"></div>
                        <p className="cx-dining-intro">Dining is a major part of the Xcel experience — from casual poolside bites to destination-inspired restaurants including Spice Café, Oceanview Café, Mast Grill, and Cyprus Restaurant.</p>

                        {/* Horizontal pill tab bar */}
                        <div className="cx-dining-tab-bar">
                            {cxDiningVenues.map((venue, idx) => (
                                <button
                                    key={idx}
                                    className={`cx-dining-pill ${cxActiveDiningTab === idx ? 'active' : ''}`}
                                    onClick={() => setCxActiveDiningTab(idx)}
                                >
                                    <venue.Icon size={15} />
                                    <span>{venue.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab panels */}
                        <div className="cx-dining-panels">
                            {cxDiningVenues.map((venue, idx) => (
                                <div key={idx} className={`cx-dining-panel ${cxActiveDiningTab === idx ? 'active' : ''}`}>
                                    <div className="cx-dining-panel-layout">

                                        {/* Image side */}
                                        <div className="cx-dining-panel-img">
                                            <CxPlaceholder label={venue.imageLabel} />
                                            <div className="cx-dining-card-overlay"></div>
                                            <div className="cx-dining-card-tag">{venue.tag}</div>
                                        </div>

                                        {/* Content side */}
                                        <div className="cx-dining-panel-content">
                                            <div className="cx-dining-panel-icon-row">
                                                <venue.Icon size={18} className="cx-dining-panel-icon" />
                                                <h3 className="cx-dining-tab-title">{venue.name}</h3>
                                            </div>
                                            <p className="cx-dining-tab-desc">{venue.description}</p>
                                            <p className="cx-dining-tab-sublabel">Why guests choose this venue:</p>
                                            <div className="cx-dining-tab-details">
                                                {venue.useful.map((point, pIdx) => (
                                                    <div key={pIdx} className="cx-dining-tab-detail-item">
                                                        <CheckCircle size={14} />
                                                        <span>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Specialty dining strip */}
                        <div className="cx-dining-specialty">
                            <div className="cx-dining-specialty-header">
                                <h3 className="cx-dining-specialty-title">Specialty Dining</h3>
                                <p className="cx-dining-specialty-desc">Celebrity Xcel also offers specialty and premium culinary experiences. Menus, pricing, and reservation requirements vary by sailing.</p>
                            </div>
                            <div className="cx-dining-specialty-grid">
                                {cxSpecialtyDining.map((item, idx) => (
                                    <div key={idx} className="cx-dining-specialty-item">
                                        <Utensils size={13} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── BARS AND LOUNGES ── */}
                <section className="cx-bars-section">
                    <div className="cx-bars-container">

                        {/* Header */}
                        <div className="cx-bars-header">
                            <span className="cx-eyebrow cx-eyebrow-light cx-eyebrow-center">BEVERAGES &amp; SOCIAL</span>
                            <h2 className="cx-section-heading cx-white-heading" style={{ textAlign: 'center' }}>Bars, Lounges and Drinks</h2>
                            <div className="cx-heading-separator-bar cx-bar-centered cx-separator-white"></div>
                            <p className="cx-bars-lead">Xcel includes a variety of social spaces for coffee, cocktails, casual drinks, and evening entertainment.</p>
                        </div>

                        {/* Cards + image grid */}
                        <div className="cx-bars-grid">

                            {/* Left: 2-col sub-grid of 6 cards */}
                            <div className="cx-bars-cards-sub">
                                {cxBarsLounges.map((item, idx) => (
                                    <div key={idx} className="cx-bars-card">
                                        <div className="cx-bars-card-icon">
                                            <item.Icon size={18} />
                                        </div>
                                        <div className="cx-bars-card-body">
                                            <span className="cx-bars-card-label">{item.label}</span>
                                            <span className="cx-bars-card-desc">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: tall image */}
                            <div className="cx-bars-img-card">
                                <CxPlaceholder label="Celebrity Xcel bar and lounge" />
                                <div className="cx-frame-overlay"></div>
                                <div className="cx-image-badge">
                                    <Wine size={13} />
                                    <span>Bars &amp; Lounges</span>
                                </div>
                            </div>

                        </div>

                        {/* Tip note */}
                        <div className="cx-bars-note">
                            <Info size={16} className="cx-bars-note-icon" />
                            <p>If you are considering a beverage package, compare the package inclusions with the drinks you actually expect to order rather than assuming a package automatically provides better value.</p>
                        </div>

                    </div>
                </section>

                {/* ── THINGS TO DO ── */}
                <section className="cx-things-section">
                    <div className="cx-things-container">

                        {/* Split Hero Header */}
                        <div className="cx-things-hero-split">
                            <div className="cx-things-hero-text">
                                <span className="cx-eyebrow">ACTIVITIES &amp; EXPERIENCES</span>
                                <h2 className="cx-section-heading">Things to Do on Celebrity Xcel</h2>
                                <div className="cx-heading-separator-bar"></div>
                                <p className="cx-things-intro">Celebrity Xcel is designed with a mixture of entertainment, relaxation, wellness, and destination-focused activities. Take advantage of unique Edge-series features right from the deck plans.</p>

                                <div className="cx-things-highlights-grid">
                                    {cxThingsToDo.map((item, idx) => (
                                        <div key={idx} className="cx-things-highlight-item">
                                            <div className="cx-things-hl-icon"><item.Icon size={16} /></div>
                                            <span className="cx-things-hl-label">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cx-things-hero-img">
                                <CxPlaceholder label="Celebrity Xcel Magic Carpet and pool deck activities" />
                                <div className="cx-frame-overlay"></div>
                                <div className="cx-image-badge">
                                    <Sparkles size={13} />
                                    <span>Onboard Activities</span>
                                </div>
                            </div>
                        </div>

                        {/* Detailed highlights grid */}
                        <div className="cx-things-details">
                            <div className="cx-things-detail">
                                <h4 className="cx-things-detail-title">The Magic Carpet</h4>
                                <p className="cx-things-detail-desc">A signature cantilevered platform that moves along the ship's side, offering changing viewpoints and functions depending on the deck it's positioned on.</p>
                            </div>
                            <div className="cx-things-detail">
                                <h4 className="cx-things-detail-title">The Bazaar</h4>
                                <p className="cx-things-detail-desc">A destination-themed culture hub combining local shopping, foods, and experiences inspired by the specific ports of call.</p>
                            </div>
                            <div className="cx-things-detail">
                                <h4 className="cx-things-detail-title">Pools &amp; Open Air</h4>
                                <p className="cx-things-detail-desc">Expansive outdoor decks designed to bring you closer to the ocean, featuring modern pools, lounge spaces, and beautiful vistas.</p>
                            </div>
                            <div className="cx-things-detail">
                                <h4 className="cx-things-detail-title">Spa &amp; Wellness</h4>
                                <p className="cx-things-detail-desc">Dedicated wellness spaces and fitness options designed for active relaxation and recovery. Best booked in advance on sea days.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ENTERTAINMENT ── */}
                <section className="cx-entertainment-section">
                    <div className="cx-entertainment-container">
                        <div className="cx-entertainment-grid">

                            {/* Left Image Side */}
                            <div className="cx-entertainment-image-col">
                                <div className="cx-image-frame">
                                    <CxPlaceholder label="Celebrity Xcel entertainment venue" />
                                    <div className="cx-frame-overlay"></div>
                                    <div className="cx-image-badge">
                                        <Music size={13} />
                                        <span>Showtimes &amp; Events</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Text & List Side */}
                            <div className="cx-entertainment-text-col">
                                <span className="cx-eyebrow">NIGHTLIFE &amp; SHOWS</span>
                                <h2 className="cx-section-heading">Celebrity Xcel Entertainment</h2>
                                <div className="cx-heading-separator-bar"></div>
                                <p className="cx-entertainment-lead">Entertainment onboard is designed to extend beyond traditional theater performances, blending music, technology, and interactive events.</p>

                                <div className="cx-entertainment-list">
                                    {cxEntertainment.map((item, idx) => (
                                        <div key={idx} className="cx-entertainment-list-item">
                                            <item.Icon size={15} />
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="cx-entertainment-note">
                                    <Info size={16} className="cx-entertainment-note-icon" />
                                    <p>Programming changes by itinerary and sailing date. Check your daily schedule in the mobile app for accurate showtimes.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── ITINERARIES ── */}
                <section className="cx-itineraries-section">
                    <div className="cx-itineraries-container">

                        {/* Split Hero layout */}
                        <div className="cx-itineraries-split">
                            <div className="cx-itineraries-text-col">
                                <span className="cx-eyebrow cx-eyebrow-light">DESTINATIONS</span>
                                <h2 className="cx-section-heading cx-white-heading">Where Does Celebrity Xcel Sail?</h2>
                                <div className="cx-heading-separator-bar cx-separator-white"></div>
                                <p className="cx-itineraries-intro">Celebrity currently lists Caribbean and European itineraries for Celebrity Xcel, offering warm island getaways and cultural Mediterranean journeys.</p>
                            </div>
                            <div className="cx-itineraries-img-col">
                                <CxPlaceholder label="Celebrity Xcel Caribbean and Europe cruise itinerary destinations" />
                                <div className="cx-frame-overlay cx-overlay-soft"></div>
                                <div className="cx-image-badge">
                                    <MapPin size={13} />
                                    <span>Destinations</span>
                                </div>
                            </div>
                        </div>

                        {/* Destination cards */}
                        <div className="cx-itineraries-grid">
                            {cxItineraries.map((item, idx) => (
                                <div key={idx} className="cx-itineraries-card">
                                    <div className="cx-itineraries-card-header">
                                        <div className="cx-itineraries-icon"><MapPin size={18} /></div>
                                        <h3 className="cx-itineraries-card-title">{item.region}</h3>
                                    </div>
                                    <p className="cx-itineraries-card-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tip block */}
                        <div className="cx-itineraries-footer">
                            <Info size={16} className="cx-itineraries-footer-icon" />
                            <p>Tip: Caribbean routes focus on outdoor relaxation and beach stops, whereas European cruises emphasize history and sightseeing. Select based on your vacation style.</p>
                        </div>

                    </div>
                </section>

                {/* ── WHO IS IT FOR ── */}
                <section className="cx-who-section">
                    <div className="cx-who-container">

                        <div className="cx-who-split">
                            {/* Left side: text and highlights */}
                            <div className="cx-who-text-col">
                                <span className="cx-eyebrow">IDEAL GUESTS</span>
                                <h2 className="cx-section-heading">Who Is Celebrity Xcel Best Suited For?</h2>
                                <div className="cx-heading-separator-bar"></div>
                                <p className="cx-who-intro">Celebrity Xcel is an excellent match for travelers who appreciate modern amenities, premium services, and stylish spaces. It is particularly appealing to those who prioritize:</p>

                                <div className="cx-who-grid">
                                    {cxWhoIsItFor.map((item, idx) => (
                                        <div key={idx} className="cx-who-card">
                                            <div className="cx-who-icon"><item.Icon size={16} /></div>
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right side: image card and note */}
                            <div className="cx-who-img-col">
                                <div className="cx-image-frame">
                                    <CxPlaceholder label="Celebrity Xcel deck lounging adult atmosphere" />
                                    <div className="cx-frame-overlay"></div>
                                    <div className="cx-image-badge">
                                        <Users size={13} />
                                        <span>Ideal Vibe</span>
                                    </div>
                                </div>

                                <div className="cx-who-note">
                                    <Info size={16} className="cx-who-note-icon" />
                                    <p>Note: While families are welcome, travelers looking for large-scale waterparks or rollercoasters might prefer comparing Xcel with mass-market family brands.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── COMPARISON TABLE ── */}
                <section className="cx-comparison-section">
                    <div className="cx-comparison-container">
                        <div className="cx-comparison-split-grid">
                            <div className="cx-comparison-image-col">
                                <div className="cx-section-banner cx-section-banner-dark cx-comparison-image">
                                    <CxPlaceholder label="Celebrity Xcel and Edge Series fleet at sea" />
                                    <div className="cx-section-banner-badge">
                                        <Ship size={14} />
                                        <span>Edge Series Fleet</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cx-comparison-content-col">
                                <span className="cx-eyebrow cx-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>FLEET COMPARISON</span>
                                <h2 className="cx-section-heading cx-white-heading">Celebrity Xcel vs. Other Edge Series Ships</h2>
                                <div className="cx-heading-separator-bar cx-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cx-comparison-intro" style={{ color: '#ffffff' }}>Celebrity Xcel belongs to the same Edge Series family as Celebrity Edge, Celebrity Apex, Celebrity Beyond, and Celebrity Ascent. The ships share major design principles, but individual venues, dining concepts, itineraries, and onboard experiences can differ.</p>
                            </div>
                        </div>

                        <div className="cx-table-wrapper">
                            <div className="cx-table-row cx-table-head cx-table-three-col">
                                <span>Ship</span>
                                <span>Position in Edge Series</span>
                                <span>Key Consideration</span>
                            </div>
                            {cxComparisonTable.map((row, idx) => (
                                <div key={idx} className="cx-table-row cx-table-three-col">
                                    <span data-label="Ship">{row.ship}</span>
                                    <span data-label="Position in Edge Series">{row.position}</span>
                                    <span data-label="Key Consideration">{row.consideration}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cx-comparison-footer">
                            <Info size={16} className="cx-comparison-footer-icon" />
                            <p>Celebrity's fleet information identifies Xcel as the newest addition to the five-ship Edge Series currently listed by the cruise line.</p>
                        </div>
                    </div>
                </section>

                {/* ── PLANNING ── */}
                <section className="cx-planning-section">
                    <div className="cx-planning-container">
                        <span className="cx-eyebrow cx-eyebrow-center">BEFORE YOU BOOK</span>
                        <h2 className="cx-section-heading" style={{ textAlign: 'center' }}>Planning a Celebrity Xcel Cruise</h2>
                        <div className="cx-heading-separator-bar cx-bar-centered"></div>
                        <p className="cx-planning-intro">Compare these key factors before finalizing your booking details:</p>

                        <div className="cx-planning-grid">
                            {cxPlanningFactors.map((item, idx) => (
                                <div key={idx} className="cx-planning-card">
                                    <div className="cx-planning-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="cx-planning-content">
                                        <h4 className="cx-planning-card-title">{item.title}</h4>
                                        <p className="cx-planning-card-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── IS IT A GOOD CHOICE ── */}
                <section className="cx-good-choice-section">
                    <div className="cx-good-choice-container">

                        <div className="cx-good-choice-split">
                            {/* Left Column: Heading & Content */}
                            <div className="cx-good-choice-text-col">
                                <span className="cx-eyebrow cx-eyebrow-light">FINAL ASSESSMENT</span>
                                <h2 className="cx-section-heading cx-white-heading">Is Celebrity Xcel a Good Choice for Your Cruise?</h2>
                                <div className="cx-heading-separator-bar cx-separator-white"></div>
                                <p className="cx-good-choice-intro">Celebrity Xcel is particularly worth considering if your priorities are modern design, premium cruising, innovative accommodations, varied dining, and destination-focused experiences.</p>
                                <p className="cx-good-choice-sub">The ship's Edge Series architecture gives it a distinctive identity, while the newer Xcel concepts expand on the features introduced aboard earlier Edge Series ships. The best choice ultimately depends on your itinerary, preferred cabin, budget, dining priorities, and the type of onboard atmosphere you want.</p>
                            </div>

                            {/* Right Column: Image */}
                            <div className="cx-good-choice-img-col">
                                <div className="cx-image-frame">
                                    <CxPlaceholder label="Celebrity Xcel sailing at sunset" />
                                    <div className="cx-frame-overlay cx-overlay-soft"></div>
                                    <div className="cx-image-badge">
                                        <Star size={13} />
                                        <span>Final Assessment</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="cx-expert-section">
                    <div className="cx-expert-container">

                        <div className="cx-expert-portrait-panel">
                            <div className="cx-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="cx-expert-stats-strip">
                                <div className="cx-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="cx-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="cx-expert-content-panel">
                            <span className="cx-eyebrow cx-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="cx-section-heading">Insight from Angela Hughes</h2>
                            <div className="cx-heading-separator-bar"></div>

                            <p className="cx-expert-quote">
                                &ldquo;The Edge Series ships, including Xcel, represent a fundamental shift in how Celebrity thinks about the guest experience. It's not just about getting from port to port—it's about creating a destination onboard that competes with the ports themselves. The Magic Carpet, Infinite Verandas, and the dining concepts like Spice Café are not gimmicks; they are intentional design choices that change how you experience the ocean.&rdquo;
                            </p>

                            <div className="cx-expert-priorities">
                                <h5>Xcel Considerations for the Discerning Traveler:</h5>
                                <div className="cx-expert-pills">
                                    {['Innovative Infinite Verandas', 'Spice Café Destination Dining', 'Magic Carpet Perspectives', 'The Retreat Suite Experience', 'Caribbean & Europe Itineraries', 'Contemporary Design'].map(pill => (
                                        <span key={pill} className="cx-expert-pill">
                                            <Ship size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="cx-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom cruise planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="cx-takeaway-section">
                    <div className="cx-takeaway-container">
                        <div className="cx-takeaway-header">
                            <span className="cx-eyebrow cx-takeaway-header cx-eyebrow-center">SUMMARY</span>
                            <h2 className="cx-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                            <div className="cx-heading-separator-bar cx-bar-centered"></div>
                        </div>

                        <div className="cx-takeaway-grid">
                            {cxKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="cx-takeaway-card">
                                    <div className="cx-takeaway-card-top">
                                        <div className="cx-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                        <h4 className="cx-takeaway-card-title">{item.title}</h4>
                                    </div>
                                    <p className="cx-takeaway-card-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="cx-faq-section">
                    <div className="cx-faq-container">
                        <div className="cx-faq-header">
                            <span className="cx-eyebrow cx-eyebrow-center">QUESTIONS BEFORE YOU SAIL</span>
                            <h2 className="cx-section-heading" style={{ textAlign: 'center' }}>Frequently Asked Questions <br /> About Celebrity Xcel</h2>
                            <div className="cx-heading-separator-bar cx-bar-centered"></div>
                        </div>
                        <div className="cx-faq-list-wrapper">
                            {cxFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cx-faq-item"
                                    onClick={() => cxToggleFaq(index)}
                                >
                                    <div className="cx-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cx-faq-toggle-icon">{cxActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {cxActiveFaq === index && (
                                        <p className="cx-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="cx-cta-section">
                    <div className="cx-cta-aurora-glow"></div>
                    <div className="cx-cta-crystal cx-cta-crystal-1"></div>
                    <div className="cx-cta-crystal cx-cta-crystal-2"></div>
                    <div className="cx-cta-crystal cx-cta-crystal-3"></div>
                    <div className="cx-cta-grid-lines"></div>

                    <div className="cx-cta-content">
                        <div className="cx-cta-compass-ring">
                            <Ship size={28} />
                        </div>
                        <span className="cx-cta-eyebrow">PLAN YOUR VOYAGE</span>
                        <h2 className="cx-cta-title">Ready to Book <br /> Celebrity Xcel?</h2>
                        <div className="cx-cta-bar"></div>
                        <p className="cx-cta-subtitle">
                            Compare the ship's cabins, dining options, onboard experiences, deck locations, and current itineraries before choosing your sailing. Let our specialists help you find the perfect Celebrity Xcel cruise.
                        </p>
                        <div className="cx-cta-actions">
                            <Link to="/contact" className="cx-cta-primary-btn">
                                <span>Speak with a Celebrity Xcel Specialist</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Celebrityxcelcruiseshipguide