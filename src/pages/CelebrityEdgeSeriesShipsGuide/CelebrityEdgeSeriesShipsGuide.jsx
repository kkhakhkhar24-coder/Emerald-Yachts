// CelebrityEdgeSeriesShipsGuide.jsx
import Navbar from '../../components/Navbar/Navbar'
import './CelebrityEdgeSeriesShipsGuide.css'
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
    Leaf, Shirt, ListChecks, Waves, Building, Mountain, Trees, Plane,
    ShipWheel, Home, Hotel, Coffee as CoffeeIcon, Utensils as UtensilsIcon,
    Armchair, Sofa, DoorOpen, Maximize, Minimize, RefreshCw,
    Wind, Sunrise, Sunset, Cloud, Umbrella, Sailboat,
    Tent, Compass as CompassIcon, Navigation, Map, Binoculars,
    Music as MusicIcon, Tv as TvIcon, Wine as WineIcon, Bed as BedIcon,
    Bath as BathIcon, Wifi as WifiIcon, Phone as PhoneIcon, Camera as CameraIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CesPlaceholder({ label, className = '' }) {
    return (
        <div className={`ces-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityEdgeSeriesShipsGuide() {
    const [cesActiveFaq, setCesActiveFaq] = useState(null)
    const cesToggleFaq = i => setCesActiveFaq(cesActiveFaq === i ? null : i)
    const [cesHeroExpanded, setCesHeroExpanded] = useState(false)

    const cesShipsTable = [
        { ship: 'Celebrity Edge', year: '2018', identity: 'First Edge Series ship' },
        { ship: 'Celebrity Apex', year: '2020', identity: 'Second ship with refined Edge design' },
        { ship: 'Celebrity Beyond', year: '2022', identity: 'Larger version with expanded outdoor spaces' },
        { ship: 'Celebrity Ascent', year: '2023', identity: 'Expanded Edge Series design' },
        { ship: 'Celebrity Xcel', year: '2025', identity: 'Latest evolution of the series' }
    ]

    const cesKeyFeatures = [
        'Resort-style outdoor spaces',
        'Multiple complimentary main dining restaurants',
        'Infinite Veranda staterooms',
        'The Magic Carpet on applicable ships',
        'Rooftop Garden',
        'Eden',
        'The Retreat suite areas',
        'Luminae for The Retreat guests',
        'Blu for AquaClass guests',
        'Modern specialty restaurants',
        'Large entertainment venues',
        'Destination-inspired public spaces'
    ]

    const cesShipComparison = [
        { ship: 'Celebrity Edge', position: 'First', characteristics: 'Original Edge Series design' },
        { ship: 'Celebrity Apex', position: 'Second', characteristics: 'Refined version of Edge' },
        { ship: 'Celebrity Beyond', position: 'Third', characteristics: 'Expanded ship with additional outdoor space' },
        { ship: 'Celebrity Ascent', position: 'Fourth', characteristics: 'Further development of Beyond' },
        { ship: 'Celebrity Xcel', position: 'Fifth', characteristics: 'Newest evolution of the Edge concept' }
    ]

    const cesInfiniteVerandaTable = [
        { feature: 'Balcony arrangement', infinite: 'Integrated into cabin', traditional: 'Separate exterior space' },
        { feature: 'Interior space', infinite: 'Can extend toward the window area', traditional: 'Remains separate' },
        { feature: 'Outdoor seating', infinite: 'Depends on configuration', traditional: 'Outside' },
        { feature: 'Weather exposure', infinite: 'More protected', traditional: 'More exposed' },
        { feature: 'Design', infinite: 'Contemporary', traditional: 'Conventional cruise balcony' }
    ]

    const cesSuiteCategories = [
        'Sky Suite',
        'Celebrity Suite',
        'Royal Suite',
        'Edge Villa',
        'Iconic Suite',
        'Penthouse',
        'Ship-specific premium categories'
    ]

    const cesRetreatBenefits = [
        'Suite-only spaces',
        'Luminae',
        'Retreat Lounge',
        'Retreat Sundeck',
        'Dedicated concierge services',
        'Enhanced suite amenities'
    ]

    const cesEdgeRestaurants = [
        'Cosmopolitan',
        'Cyprus',
        'Normandie',
        'Tuscan',
        'Oceanview Café',
        'Eden Café',
        'Spa Café',
        'Mast Grill'
    ]

    const cesSpecialtyRestaurants = [
        'Fine Cut Steakhouse',
        'Le Grand Bistro',
        'Le Petit Chef',
        'Raw on 5',
        'Eden Restaurant',
        'Rooftop Garden Grill',
        'Ship-specific specialty concepts'
    ]

    const cesEntertainmentOptions = [
        'Theater productions',
        'Live music',
        'Guest performers',
        'Comedy',
        'Destination-themed performances',
        'Outdoor entertainment',
        'Nightlife',
        'Interactive experiences'
    ]

    const cesOutdoorSpaces = [
        'Resort Deck',
        'Rooftop Garden',
        'Pool areas',
        'Sunset Bar',
        'Outdoor dining',
        'Relaxation areas',
        'The Retreat Sundeck'
    ]

    const cesEdenFunctions = [
        'A restaurant',
        'A lounge',
        'A social space',
        'An entertainment venue'
    ]

    const cesCabinTypes = [
        { type: 'Interior', suited: 'Budget-conscious travelers' },
        { type: 'Ocean View', suited: 'Guests who want a window without a balcony' },
        { type: 'Infinite Veranda', suited: 'Travelers wanting a modern balcony-style design' },
        { type: 'Concierge Class', suited: 'Guests seeking additional accommodation benefits' },
        { type: 'AquaClass', suited: 'Travelers prioritizing wellness and Blu dining' },
        { type: 'Suite', suited: 'Guests wanting more space and premium amenities' },
        { type: 'The Retreat', suited: 'Travelers seeking the highest level of suite-focused amenities' }
    ]

    const cesShipSelectionGuide = [
        { ship: 'Celebrity Edge', when: 'You want the original Edge Series experience' },
        { ship: 'Celebrity Apex', when: 'You want a later version of the original design' },
        { ship: 'Celebrity Beyond', when: 'You want more outdoor space' },
        { ship: 'Celebrity Ascent', when: 'You want a newer Edge Series vessel' },
        { ship: 'Celebrity Xcel', when: 'You want the newest Edge Series design' }
    ]

    const cesVsSolsticeTable = [
        { feature: 'Design generation', edge: 'Newer', solstice: 'Earlier' },
        { feature: 'Infinite Veranda', edge: 'Yes, on applicable cabins', solstice: 'Generally no' },
        { feature: 'Magic Carpet', edge: 'Yes', solstice: 'No' },
        { feature: 'Multiple main restaurants', edge: 'Prominent feature', solstice: 'More traditional layout' },
        { feature: 'Rooftop Garden', edge: 'Yes', solstice: 'No equivalent' },
        { feature: 'The Retreat', edge: 'Yes', solstice: 'Selected ships have suite concepts, but layouts differ' },
        { feature: 'Overall design', edge: 'Contemporary', solstice: 'Classic Celebrity design' }
    ]

    const cesItineraryDestinations = [
        'Caribbean',
        'Mediterranean',
        'Europe',
        'Alaska',
        'The Bahamas',
        'Mexico',
        'Other seasonal destinations'
    ]

    const cesIncludedFeatures = [
        'Main dining',
        'Casual dining',
        'Select cafés',
        'Basic onboard entertainment',
        'Pools',
        'Fitness facilities',
        'Public spaces',
        'Standard activities'
    ]

    const cesExtraCharges = [
        'Specialty dining',
        'Premium beverages',
        'Certain excursions',
        'Spa treatments',
        'Some onboard services',
        'Internet packages',
        'Certain premium experiences'
    ]

    const cesPlanningTips = [
        'Compare the ship and itinerary together — A beautiful ship does not compensate for an itinerary that does not match your travel priorities.',
        'Study the deck plan — Look for cabins away from nightclubs, elevators, theater spaces, pool decks, service areas and machinery.',
        'Decide whether an Infinite Veranda suits you — If having a traditional exterior balcony is important, investigate the cabin configuration carefully.',
        'Check restaurant availability — Dining concepts differ between Edge Series ships.',
        'Consider your cabin category — AquaClass and The Retreat can change your dining and onboard experience significantly.',
        'Book popular specialty dining early — Popular restaurants and preferred times can become limited during busy sailings.'
    ]

    const cesKeyTakeaways = [
        "Celebrity's Edge Series includes Celebrity Edge, Apex, Beyond, Ascent and Xcel.",
        'Edge was the first ship in the series, while later ships refined and expanded the design.',
        "The Magic Carpet is one of the series' defining features.",
        'Infinite Veranda staterooms provide a distinctive alternative to conventional balconies.',
        'Edge Series ships feature multiple complimentary dining concepts.',
        'Blu is associated with AquaClass.',
        'Luminae is exclusive to The Retreat.',
        'The Rooftop Garden and Eden provide distinctive social and outdoor spaces.'
    ]

    const cesInternalLinks = [
        { text: 'Celebrity Cruises Complete Guide', url: '/celebrity-cruises' },
        { text: 'Celebrity Cruises Ships Guide', url: '/celebrity-cruises/ships' },
        { text: 'Celebrity Staterooms and Suites Guide', url: '/celebrity-cruises/staterooms-suites' },
        { text: 'Celebrity Cruises Dining Guide', url: '/celebrity-cruises/dining' },
        { text: 'Celebrity Cruises Drink Packages', url: '/celebrity-cruises/drink-packages' },
        { text: 'Celebrity The Retreat', url: '/celebrity-cruises/the-retreat' },
        { text: 'Celebrity All Included Explained', url: '/celebrity-cruises/all-included' },
        { text: 'What Is Included on a Celebrity Cruise?', url: '/celebrity-cruises/whats-included' }
    ]

    const cesFaqs = [
        { question: 'What ships are in the Celebrity Edge Series?', answer: 'The Celebrity Edge Series includes Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel.' },
        { question: 'What is the newest Celebrity Edge Series ship?', answer: 'Celebrity Xcel is the newest ship in the Edge Series. It continues the design and features introduced by earlier Edge Series vessels while adding newer experiences.' },
        { question: 'What is the difference between Celebrity Edge and Celebrity Apex?', answer: 'Celebrity Edge was the first ship in the series, while Celebrity Apex is the second. Both share the core Edge design, including the Magic Carpet and Infinite Veranda concept, but Apex incorporates refinements to the original design.' },
        { question: 'Is Celebrity Beyond bigger than Celebrity Edge?', answer: 'Yes. Celebrity Beyond expanded on the original Edge design and has additional space and refinements compared with Celebrity Edge.' },
        { question: 'What is the Magic Carpet on Celebrity Edge Series ships?', answer: 'The Magic Carpet is a movable cantilevered platform attached to the side of applicable Edge Series ships. Its position and function can change depending on where it is located.' },
        { question: 'Do all Celebrity Edge Series ships have Infinite Verandas?', answer: 'Infinite Verandas are a major accommodation feature of the Edge Series, but cabin configurations and categories vary. Travelers should check the deck plan for the specific ship and cabin before booking.' },
        { question: 'What is an Infinite Veranda on Celebrity Cruises?', answer: 'An Infinite Veranda integrates the balcony concept into the stateroom. The design allows part of the cabin to open toward the sea, creating a different experience from a conventional exterior balcony.' },
        { question: 'What dining is included on Celebrity Edge Series ships?', answer: 'Complimentary dining varies by ship but can include multiple main restaurants, Oceanview Café, Mast Grill, Spa Café and other ship-specific venues.' },
        { question: 'Does Celebrity Edge Series have specialty restaurants?', answer: 'Yes. Edge Series ships offer specialty restaurants, although the exact lineup varies by vessel. Specialty dining generally requires an additional charge.' },
        { question: 'What is Luminae on Celebrity Edge Series ships?', answer: 'Luminae is the exclusive restaurant associated with The Retreat. It provides a dedicated dining experience for eligible suite guests.' },
        { question: 'What is Blu on Celebrity Edge Series ships?', answer: 'Blu is a restaurant associated with AquaClass accommodations. It focuses on fresh, contemporary and wellness-oriented dining.' },
        { question: 'Which Celebrity Edge Series ship has the best outdoor spaces?', answer: 'The later Edge Series ships, particularly Beyond, Ascent and Xcel, build on the outdoor-space concept introduced with Edge. The best choice depends on which specific spaces and itinerary matter most to you.' },
        { question: 'Is Celebrity Edge Series good for families?', answer: 'Edge Series ships offer pools, entertainment, activities, dining and public spaces that can appeal to families. Families should compare the specific ship\'s activities, cabin configuration and itinerary before booking.' },
        { question: 'Which Celebrity Edge Series ship should first-time cruisers choose?', answer: 'Celebrity Edge, Apex, Beyond, Ascent and Xcel can all suit first-time cruisers. The best choice depends on itinerary, sailing date, cabin preference, dining options and budget rather than ship age alone.' },
        { question: 'What is the difference between Celebrity Edge Series and Solstice Series ships?', answer: 'The Edge Series uses a newer design focused on features such as Infinite Verandas, the Magic Carpet, multiple main dining restaurants and expanded outdoor spaces, while Solstice Series ships use an earlier and more traditional Celebrity design.' }
    ]

    const cesSchemaData = {
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/edge-series#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/edge-series",
                "name": "Celebrity Edge Series Ships Guide",
                "description": "Explore Celebrity Edge Series ships, including Edge, Apex, Beyond, Ascent and Xcel, with cabins, dining, amenities, itineraries and key differences.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/edge-series" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/edge-series#article",
                "headline": "Celebrity Edge Series Ships Guide",
                "description": "A complete guide to Celebrity Edge Series ships, including Edge, Apex, Beyond, Ascent and Xcel, with information about cabins, dining, amenities and itineraries.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/edge-series" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/edge-series#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Edge Series Ships Guide", "item": "https://www.tripsandships.com/celebrity-cruises/edge-series" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/edge-series#faq",
                "mainEntity": [
                    { "@type": "Question", "name": "What ships are in the Celebrity Edge Series?", "acceptedAnswer": { "@type": "Answer", "text": "The Celebrity Edge Series includes Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel." } },
                    { "@type": "Question", "name": "What is the newest Celebrity Edge Series ship?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Xcel is the newest ship in the Edge Series. It continues the design and features introduced by earlier Edge Series vessels while adding newer experiences." } },
                    { "@type": "Question", "name": "What is the difference between Celebrity Edge and Celebrity Apex?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Edge was the first ship in the series, while Celebrity Apex is the second. Both share the core Edge design, including the Magic Carpet and Infinite Veranda concept, but Apex incorporates refinements to the original design." } },
                    { "@type": "Question", "name": "Is Celebrity Beyond bigger than Celebrity Edge?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Beyond expanded on the original Edge design and has additional space and refinements compared with Celebrity Edge." } },
                    { "@type": "Question", "name": "What is the Magic Carpet on Celebrity Edge Series ships?", "acceptedAnswer": { "@type": "Answer", "text": "The Magic Carpet is a movable cantilevered platform attached to the side of applicable Edge Series ships. Its position and function can change depending on where it is located." } },
                    { "@type": "Question", "name": "Do all Celebrity Edge Series ships have Infinite Verandas?", "acceptedAnswer": { "@type": "Answer", "text": "Infinite Verandas are a major accommodation feature of the Edge Series, but cabin configurations and categories vary. Travelers should check the deck plan for the specific ship and cabin before booking." } },
                    { "@type": "Question", "name": "What is an Infinite Veranda on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "An Infinite Veranda integrates the balcony concept into the stateroom. The design allows part of the cabin to open toward the sea, creating a different experience from a conventional exterior balcony." } },
                    { "@type": "Question", "name": "What dining is included on Celebrity Edge Series ships?", "acceptedAnswer": { "@type": "Answer", "text": "Complimentary dining varies by ship but can include multiple main restaurants, Oceanview Café, Mast Grill, Spa Café and other ship-specific venues." } },
                    { "@type": "Question", "name": "Does Celebrity Edge Series have specialty restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Edge Series ships offer specialty restaurants, although the exact lineup varies by vessel. Specialty dining generally requires an additional charge." } },
                    { "@type": "Question", "name": "What is Luminae on Celebrity Edge Series ships?", "acceptedAnswer": { "@type": "Answer", "text": "Luminae is the exclusive restaurant associated with The Retreat. It provides a dedicated dining experience for eligible suite guests." } },
                    { "@type": "Question", "name": "What is Blu on Celebrity Edge Series ships?", "acceptedAnswer": { "@type": "Answer", "text": "Blu is a restaurant associated with AquaClass accommodations. It focuses on fresh, contemporary and wellness-oriented dining." } },
                    { "@type": "Question", "name": "Which Celebrity Edge Series ship has the best outdoor spaces?", "acceptedAnswer": { "@type": "Answer", "text": "The later Edge Series ships, particularly Beyond, Ascent and Xcel, build on the outdoor-space concept introduced with Edge. The best choice depends on which specific spaces and itinerary matter most to you." } },
                    { "@type": "Question", "name": "Is Celebrity Edge Series good for families?", "acceptedAnswer": { "@type": "Answer", "text": "Edge Series ships offer pools, entertainment, activities, dining and public spaces that can appeal to families. Families should compare the specific ship's activities, cabin configuration and itinerary before booking." } },
                    { "@type": "Question", "name": "Which Celebrity Edge Series ship should first-time cruisers choose?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Edge, Apex, Beyond, Ascent and Xcel can all suit first-time cruisers. The best choice depends on itinerary, sailing date, cabin preference, dining options and budget rather than ship age alone." } },
                    { "@type": "Question", "name": "What is the difference between Celebrity Edge Series and Solstice Series ships?", "acceptedAnswer": { "@type": "Answer", "text": "The Edge Series uses a newer design focused on features such as Infinite Verandas, the Magic Carpet, multiple main dining restaurants and expanded outdoor spaces, while Solstice Series ships use an earlier and more traditional Celebrity design." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Edge Series Ships Guide</title>
                <meta name="title" content="Celebrity Edge Series Ships Guide" />
                <meta name="description" content="Explore Celebrity Edge Series ships, including Edge, Apex, Beyond, Ascent and Xcel, with cabins, dining, amenities, itineraries and key differences." />
                <meta name="keywords" content="Celebrity Edge Series ships, Celebrity Edge, Celebrity Apex, Celebrity Beyond, Celebrity Ascent, Celebrity Xcel, Edge Class ships, Celebrity Cruises Edge Series, Celebrity Edge Class, Edge Series cabins, Edge Series dining, Edge Series amenities" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/edge-series" />
                <script type="application/ld+json">{JSON.stringify(cesSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="ces-page">

                {/* ── HERO ── */}
                <section className="ces-hero-section">
                    <CesPlaceholder label="Celebrity Edge Series cruise ship at sea" className="ces-hero-bg-placeholder" />
                    <div className="ces-hero-overlay-layer"></div>
                    <div className="ces-hero-content-wrapper">
                        <div className="ces-hero-eyebrow-tag">
                            <Ship size={16} />
                            <span>Ship Guide · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="ces-hero-main-title">Celebrity Edge <br /> Series Ships Guide</h1>
                        <p className="ces-hero-subtitle-text">
                            Celebrity Cruises' Edge Series introduced a new generation of ships designed around open-air spaces, distinctive accommodations, multiple dining concepts and innovative onboard venues. The series began with Celebrity Edge and expanded with Celebrity Apex, Celebrity Beyond, Celebrity Ascent and Celebrity Xcel.
                            {cesHeroExpanded && (
                                <>
                                    {' '}While the ships share the same design family, they are not identical. Each vessel has its own restaurants, entertainment spaces, itineraries and selected features. The later ships also build on the original Edge concept with additional outdoor spaces and refinements.
                                </>
                            )}
                        </p>
                        <button
                            className="ces-hero-read-more"
                            onClick={() => setCesHeroExpanded(prev => !prev)}
                            aria-expanded={cesHeroExpanded}
                        >
                            {cesHeroExpanded ? 'Read less' : 'Read more'}
                        </button>
                    </div>
                </section>

                {/* ── INTRO / WHICH SHIPS ── */}
                <section className="ces-intro-section">
                    <div className="ces-intro-container">
                        <span className="ces-eyebrow ces-eyebrow-center">GETTING STARTED</span>
                        <h2 className="ces-section-heading" style={{ textAlign: 'center' }}>Which Ships Are in Celebrity's Edge Series?</h2>
                        <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        <p className="ces-intro-lead">
                            The Edge Series currently includes five ships.
                        </p>

                        <div className="ces-table-wrapper">
                            <div className="ces-table-row ces-table-head">
                                <span>Ship</span>
                                <span>Entered Service</span>
                                <span>Key Identity</span>
                            </div>
                            {cesShipsTable.map((row, idx) => (
                                <div key={idx} className="ces-table-row">
                                    <span data-label="Ship">{row.ship}</span>
                                    <span data-label="Entered Service">{row.year}</span>
                                    <span data-label="Key Identity">{row.identity}</span>
                                </div>
                            ))}
                        </div>

                        <p className="ces-intro-lead" style={{ marginTop: '18px' }}>
                            The series is commonly referred to as Celebrity Edge Class, although Celebrity Cruises generally uses the Edge Series name in its current guest-facing materials.
                        </p>
                    </div>
                </section>

                {/* ── WHAT MAKES EDGE SERIES DIFFERENT ── */}
                <section className="ces-features-section">
                    <div className="ces-features-container">
                        <div className="ces-features-header">
                            <span className="ces-eyebrow ces-eyebrow-light ces-eyebrow-center">INNOVATIVE DESIGN</span>
                            <h2 className="ces-section-heading ces-white-heading" style={{ textAlign: 'center' }}>What Makes Celebrity Edge Series Ships Different?</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered ces-separator-white"></div>
                            <p className="ces-features-intro" style={{ color: '#ffffff' }}>The Edge Series was designed to change how passengers use both indoor and outdoor spaces. Several features distinguish these ships from Celebrity's older Solstice and Millennium Series vessels.</p>
                        </div>

                        <div className="ces-features-grid">
                            {cesKeyFeatures.map((feature, idx) => (
                                <div key={idx} className="ces-feature-card">
                                    <Sparkles size={18} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className="ces-features-note" style={{ color: '#ffffff' }}>The design puts considerable emphasis on connecting passengers with the sea rather than keeping outdoor areas limited to traditional pool decks.</p>
                    </div>
                </section>

                {/* ── SHIP COMPARISON ── */}
                <section className="ces-comparison-section">
                    <div className="ces-comparison-container">
                        <span className="ces-eyebrow ces-eyebrow-center">SHIP-BY-SHIP COMPARISON</span>
                        <h2 className="ces-section-heading" style={{ textAlign: 'center' }}>Celebrity Edge vs. Apex vs. <br /> Beyond vs. Ascent vs. Xcel</h2>
                        <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        <p className="ces-comparison-intro">The five ships share a common design language, but their size, features and onboard details differ.</p>

                        <div className="ces-comparison-grid">
                            {cesShipComparison.map((row, idx) => (
                                <div key={idx} className="ces-comparison-card">
                                    <span className="ces-comparison-pos">{row.position}</span>
                                    <h4>{row.ship}</h4>
                                    <p className="ces-comparison-desc">{row.characteristics}</p>
                                </div>
                            ))}
                        </div>

                        <p className="ces-comparison-note">For travelers choosing a cruise, the itinerary and departure date can be just as important as the ship because each vessel operates different routes throughout the year.</p>
                    </div>
                </section>

                {/* ── CELEBRITY EDGE ── */}
                <section className="ces-edge-ship-section">
                    <div className="ces-edge-ship-container">
                        <div className="ces-edge-ship-grid">
                            <div className="ces-edge-ship-text-col">
                                <span className="ces-eyebrow">FIRST OF THE SERIES</span>
                                <h2 className="ces-section-heading">Celebrity Edge</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-edge-ship-lead">Celebrity Edge introduced the Edge Series concept.</p>
                                <p className="ces-edge-ship-sub">Its design includes the signature Magic Carpet, a movable platform attached to the side of the ship that changes function depending on its position.</p>
                                <p className="ces-edge-ship-sub-label">Other major features include:</p>
                                <div className="ces-edge-ship-list">
                                    {['Infinite Veranda staterooms', 'Rooftop Garden', 'Eden', 'Multiple dining venues', 'The Retreat', 'Luminae', 'Blu', 'Resort Deck', 'Modern entertainment spaces'].map((item, idx) => (
                                        <div key={idx} className="ces-edge-ship-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-edge-ship-note">Celebrity Edge is particularly significant for travelers who want to experience the original version of the Edge Series design.</p>
                            </div>
                            <div className="ces-edge-ship-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series cruise ship" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CELEBRITY APEX ── */}
                <section className="ces-apex-section">
                    <div className="ces-apex-container">
                        <div className="ces-apex-grid">
                            <div className="ces-apex-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Apex Edge Series cruise ship" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ces-apex-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">SECOND OF THE SERIES</span>
                                <h2 className="ces-section-heading ces-white-heading">Celebrity Apex</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-apex-lead">Celebrity Apex is the second Edge Series ship.</p>
                                <p className="ces-apex-sub">It retains the core design introduced on Edge while adding refinements to accommodations, dining, public areas and onboard experiences.</p>
                                <p className="ces-apex-sub-label">Key features include:</p>
                                <div className="ces-apex-list">
                                    {['Magic Carpet', 'Infinite Veranda staterooms', 'The Retreat', 'Rooftop Garden', 'Eden', 'Multiple restaurants', 'Outdoor spaces', 'Destination-inspired public areas'].map((item, idx) => (
                                        <div key={idx} className="ces-apex-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-apex-note" style={{ color: '#ffffff' }}>Celebrity Apex is a useful choice for travelers who like the Edge concept but want a later-generation ship.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CELEBRITY BEYOND ── */}
                <section className="ces-beyond-section">
                    <div className="ces-beyond-container">
                        <div className="ces-beyond-grid">
                            <div className="ces-beyond-text-col">
                                <span className="ces-eyebrow">THIRD OF THE SERIES</span>
                                <h2 className="ces-section-heading">Celebrity Beyond</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-beyond-lead">Celebrity Beyond expanded the Edge Series concept.</p>
                                <p className="ces-beyond-sub">It is larger than the first two Edge Series ships and introduced additional outdoor space and design refinements.</p>
                                <p className="ces-beyond-sub-label">Notable areas include:</p>
                                <div className="ces-beyond-list">
                                    {['Rooftop Garden', 'Resort Deck', 'The Retreat', 'Magic Carpet', 'Eden', 'Infinite Verandas', 'Multiple restaurants', 'Outdoor entertainment areas'].map((item, idx) => (
                                        <div key={idx} className="ces-beyond-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-beyond-note">Beyond is especially relevant to travelers who prioritize outdoor spaces and a broader selection of places to relax.</p>
                            </div>
                            <div className="ces-beyond-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Beyond cruise ship" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CELEBRITY ASCENT ── */}
                <section className="ces-ascent-section">
                    <div className="ces-ascent-container">
                        <div className="ces-ascent-grid">
                            <div className="ces-ascent-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Ascent Edge Series cruise ship" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ces-ascent-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">FOURTH OF THE SERIES</span>
                                <h2 className="ces-section-heading ces-white-heading">Celebrity Ascent</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-ascent-lead">Celebrity Ascent continued the evolution of the Edge Series.</p>
                                <p className="ces-ascent-sub">The ship retains the defining features of its predecessors while adding further refinements to outdoor spaces, dining, accommodation and entertainment.</p>
                                <p className="ces-ascent-sub-label">Travelers considering Ascent should compare:</p>
                                <div className="ces-ascent-list">
                                    {['Cabin category', 'Retreat accommodation', 'Dining lineup', 'Itinerary', 'Sailing length', 'Departure port', 'Seasonal route'].map((item, idx) => (
                                        <div key={idx} className="ces-ascent-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-ascent-note" style={{ color: '#ffffff' }}>The newest ship is not automatically the best match for every traveler; the itinerary and accommodation can have a larger impact on the overall cruise experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CELEBRITY XCEL ── */}
                <section className="ces-xcel-section">
                    <div className="ces-xcel-container">
                        <div className="ces-xcel-grid">
                            <div className="ces-xcel-text-col">
                                <span className="ces-eyebrow">FIFTH OF THE SERIES</span>
                                <h2 className="ces-section-heading">Celebrity Xcel</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-xcel-lead">Celebrity Xcel is the latest ship in the Edge Series.</p>
                                <p className="ces-xcel-sub">As the newest evolution of the design, Xcel builds on the Edge Series foundation while introducing new and updated experiences.</p>
                                <p className="ces-xcel-note">Travelers interested in Xcel should check Celebrity's current ship information for the latest restaurant lineup, entertainment, public spaces and itineraries because new ships can introduce concepts that are not available on earlier Edge Series vessels.</p>
                            </div>
                            <div className="ces-xcel-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Xcel Edge Series cruise ship" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── THE MAGIC CARPET ── */}
                <section className="ces-magic-carpet-section">
                    <div className="ces-magic-carpet-container">
                        <div className="ces-magic-carpet-grid">
                            <div className="ces-magic-carpet-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series Magic Carpet platform" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ces-magic-carpet-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">SIGNATURE FEATURE</span>
                                <h2 className="ces-section-heading ces-white-heading">The Magic Carpet</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-magic-carpet-lead">The Magic Carpet is one of the most recognizable features of the Edge Series.</p>
                                <p className="ces-magic-carpet-sub">It is a cantilevered platform mounted on the side of the ship that can move between decks. Its position changes its purpose, allowing it to function as different types of spaces depending on where it is located.</p>
                                <p className="ces-magic-carpet-sub-label">The Magic Carpet can be used for:</p>
                                <div className="ces-magic-carpet-list">
                                    {['Scenic views', 'Outdoor relaxation', 'Dining experiences', 'Embarkation and tender operations', 'Special events'].map((item, idx) => (
                                        <div key={idx} className="ces-magic-carpet-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-magic-carpet-note" style={{ color: '#ffffff' }}>It provides one of the most distinctive visual features of the Edge Series.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── INFINITE VERANDA ── */}
                <section className="ces-infinite-section">
                    <div className="ces-infinite-container">
                        <span className="ces-eyebrow ces-eyebrow-center">ACCOMMODATION INNOVATION</span>
                        <h2 className="ces-section-heading" style={{ textAlign: 'center' }}>Infinite Veranda Staterooms</h2>
                        <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        <p className="ces-infinite-intro">One of the most important accommodation innovations on Edge Series ships is the Infinite Veranda.</p>
                        <p className="ces-infinite-sub">Instead of a conventional balcony extending outside the cabin, the Infinite Veranda uses a portion of the cabin itself to create a balcony-like experience. When the exterior window is opened and the internal doors are positioned appropriately, the cabin can feel more connected to the sea.</p>

                        <div className="ces-table-wrapper">
                            <div className="ces-table-row ces-table-head">
                                <span>Feature</span>
                                <span>Infinite Veranda</span>
                                <span>Traditional Balcony</span>
                            </div>
                            {cesInfiniteVerandaTable.map((row, idx) => (
                                <div key={idx} className="ces-table-row">
                                    <span data-label="Feature">{row.feature}</span>
                                    <span data-label="Infinite Veranda">{row.infinite}</span>
                                    <span data-label="Traditional Balcony">{row.traditional}</span>
                                </div>
                            ))}
                        </div>

                        <p className="ces-infinite-note">Travelers who specifically want a completely separate outdoor balcony should examine the deck plan and cabin category before booking.</p>
                    </div>
                </section>

                {/* ── SUITES ── */}
                <section className="ces-suites-section">
                    <div className="ces-suites-container">
                        <div className="ces-suites-grid">
                            <div className="ces-suites-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">PREMIUM ACCOMMODATIONS</span>
                                <h2 className="ces-section-heading ces-white-heading">Edge Series Suites</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-suites-lead">The Edge Series includes a broad selection of suites, from entry-level suite categories to premium accommodations within The Retreat.</p>
                                <p className="ces-suites-sub-label">Suite categories can include:</p>
                                <div className="ces-suites-list">
                                    {cesSuiteCategories.map((item, idx) => (
                                        <div key={idx} className="ces-suites-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-suites-note" style={{ color: '#ffffff' }}>The exact categories vary by ship.</p>
                            </div>
                            <div className="ces-suites-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series suite accommodation" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── THE RETREAT ── */}
                <section className="ces-retreat-section">
                    <div className="ces-retreat-container">
                        <div className="ces-retreat-grid">
                            <div className="ces-retreat-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series The Retreat" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ces-retreat-text-col">
                                <span className="ces-eyebrow">PREMIUM SUITE EXPERIENCE</span>
                                <h2 className="ces-section-heading">The Retreat</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-retreat-lead">The Retreat is Celebrity's suite-focused experience.</p>
                                <p className="ces-retreat-sub">Depending on the ship and accommodation, The Retreat can include access to:</p>
                                <div className="ces-retreat-list">
                                    {cesRetreatBenefits.map((item, idx) => (
                                        <div key={idx} className="ces-retreat-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-retreat-note">The exact benefits depend on the suite category and ship.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DINING ── */}
                <section className="ces-dining-section">
                    <div className="ces-dining-container">
                        <div className="ces-dining-header">
                            <span className="ces-eyebrow ces-eyebrow-light ces-eyebrow-center">CULINARY EXPERIENCES</span>
                            <h2 className="ces-section-heading ces-white-heading" style={{ textAlign: 'center' }}>Edge Series Dining</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered ces-separator-white"></div>
                            <p className="ces-dining-intro" style={{ color: '#ffffff' }}>Dining is a major component of the Edge Series design.</p>
                            <p className="ces-dining-sub" style={{ color: '#ffffff' }}>Unlike some older cruise ships that rely heavily on a single main dining room, Edge Series ships offer several complimentary main restaurants with different themes.</p>
                            <p className="ces-dining-sub-label" style={{ color: '#ffffff' }}>Depending on the ship, guests may find restaurants such as:</p>
                        </div>

                        <div className="ces-dining-grid">
                            {cesEdgeRestaurants.map((restaurant, idx) => (
                                <div key={idx} className="ces-dining-card">
                                    <Utensils size={18} />
                                    <span>{restaurant}</span>
                                </div>
                            ))}
                        </div>

                        <div className="ces-dining-note-box">
                            <p><strong>Dining for The Retreat:</strong> Guests staying in The Retreat have access to Luminae, an exclusive restaurant offering an elevated dining experience.</p>
                            <p><strong>Dining for AquaClass:</strong> AquaClass guests have access to Blu, which focuses on fresh, wellness-oriented cuisine.</p>
                        </div>
                    </div>
                </section>

                {/* ── SPECIALTY RESTAURANTS ── */}
                <section className="ces-specialty-dining-section">
                    <div className="ces-specialty-dining-container">
                        <div className="ces-specialty-split-grid">
                            <div className="ces-specialty-text-col">
                                <span className="ces-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>PREMIUM DINING</span>
                                <h2 className="ces-section-heading">Edge Series Specialty Restaurants</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-specialty-dining-intro" style={{ marginBottom: '24px' }}>The specialty dining lineup varies by ship, but Edge Series vessels can offer concepts such as:</p>
                                <div className="ces-specialty-dining-note" style={{ margin: 0 }}>
                                    <Info size={16} style={{ color: 'var(--ces-navy)', flexShrink: 0, marginTop: '2px' }} />
                                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--ces-text-body)', lineHeight: '1.55' }}>Specialty dining usually carries an additional charge. Because restaurant lineups can change between ships, travelers should check the dining page for the exact vessel they are considering.</p>
                                </div>
                            </div>

                            <div className="ces-specialty-grid-col">
                                <div className="ces-specialty-dining-grid">
                                    {cesSpecialtyRestaurants.map((item, idx) => (
                                        <div key={idx} className="ces-specialty-dining-item">
                                            <Utensils size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ENTERTAINMENT ── */}
                <section className="ces-entertainment-section">
                    <div className="ces-entertainment-container">
                        <div className="ces-entertainment-grid">
                            <div className="ces-entertainment-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">ONBOARD EXPERIENCES</span>
                                <h2 className="ces-section-heading ces-white-heading">Celebrity Edge Series Entertainment</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-entertainment-lead">Entertainment is integrated throughout the Edge Series rather than being limited to one large theater.</p>
                                <p className="ces-entertainment-sub-label">Depending on the ship, entertainment can include:</p>
                                <div className="ces-entertainment-list">
                                    {cesEntertainmentOptions.map((item, idx) => (
                                        <div key={idx} className="ces-entertainment-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-entertainment-note" style={{ color: '#ffffff' }}>The Edge Series also uses architectural features such as Eden and the Rooftop Garden as social and entertainment spaces.</p>
                            </div>
                            <div className="ces-entertainment-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series entertainment venue" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── OUTDOOR SPACES ── */}
                <section className="ces-outdoor-section">
                    <div className="ces-outdoor-container">
                        <div className="ces-outdoor-grid">
                            <div className="ces-outdoor-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series outdoor pool deck" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ces-outdoor-text-col">
                                <span className="ces-eyebrow">OPEN-AIR DESIGN</span>
                                <h2 className="ces-section-heading">Celebrity Edge Series Pools and Outdoor Spaces</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-outdoor-lead">Outdoor areas are a central part of the Edge Series design.</p>
                                <p className="ces-outdoor-sub">Guests can find spaces such as:</p>
                                <div className="ces-outdoor-list">
                                    {cesOutdoorSpaces.map((item, idx) => (
                                        <div key={idx} className="ces-outdoor-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-outdoor-note">Later Edge Series ships generally expanded or refined the outdoor-space concept. This makes the series particularly appealing to travelers who enjoy spending time outside while cruising.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ROOFTOP GARDEN ── */}
                <section className="ces-rooftop-section">
                    <div className="ces-rooftop-container">
                        <div className="ces-rooftop-grid">
                            <div className="ces-rooftop-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">SIGNATURE SPACE</span>
                                <h2 className="ces-section-heading ces-white-heading">Rooftop Garden</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-rooftop-lead">The Rooftop Garden is a signature Edge Series space.</p>
                                <p className="ces-rooftop-sub">It combines landscaping, seating and open-air areas with ocean views. Depending on the ship, it can serve as a place to:</p>
                                <div className="ces-rooftop-list">
                                    {['Relax', 'Read', 'Watch the sunset', 'Meet friends', 'Enjoy entertainment', 'Dine at selected venues'].map((item, idx) => (
                                        <div key={idx} className="ces-rooftop-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-rooftop-note" style={{ color: '#ffffff' }}>It provides an alternative to the traditional pool-deck environment.</p>
                            </div>
                            <div className="ces-rooftop-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series Rooftop Garden" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── EDEN ── */}
                <section className="ces-eden-section">
                    <div className="ces-eden-container">
                        <div className="ces-eden-grid">
                            <div className="ces-eden-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series Eden venue" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                            <div className="ces-eden-text-col">
                                <span className="ces-eyebrow">DISTINCTIVE VENUE</span>
                                <h2 className="ces-section-heading">Eden</h2>
                                <div className="ces-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-eden-lead">Eden is another distinctive Edge Series venue.</p>
                                <p className="ces-eden-sub">The space combines dramatic architecture, ocean views, dining and entertainment. On applicable ships, Eden can function as:</p>
                                <div className="ces-eden-list">
                                    {cesEdenFunctions.map((item, idx) => (
                                        <div key={idx} className="ces-eden-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-eden-note">Its multi-purpose design is one of the clearest examples of how the Edge Series blends dining, entertainment and public spaces.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CABIN SELECTION ── */}
                <section className="ces-cabin-selection-section">
                    <div className="ces-cabin-selection-container">
                        <span className="ces-eyebrow ces-eyebrow-center">CHOOSING YOUR CABIN</span>
                        <h2 className="ces-section-heading" style={{ textAlign: 'center' }}>Edge Series Cabins: <br /> Which Should You Choose?</h2>
                        <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        <p className="ces-cabin-selection-intro">Choosing a cabin depends on budget, views, balcony preferences and how much time you expect to spend in your room.</p>

                        <div className="ces-cabin-selection-grid">
                            {cesCabinTypes.map((row, idx) => (
                                <div key={idx} className="ces-cabin-selection-card">
                                    <h4>{row.type}</h4>
                                    <p className="ces-cabin-selection-desc">{row.suited}</p>
                                </div>
                            ))}
                        </div>

                        <p className="ces-cabin-selection-note">Always examine the deck plan before selecting a specific cabin. Two cabins in the same category can feel different depending on their position relative to elevators, public spaces, machinery and other potential sources of noise.</p>
                    </div>
                </section>

                {/* ── WHICH SHIP IS BEST ── */}
                <section className="ces-which-ship-section">
                    <div className="ces-which-ship-container">
                        <div className="ces-which-ship-header">
                            <span className="ces-eyebrow ces-eyebrow-light ces-eyebrow-center">DECISION GUIDE</span>
                            <h2 className="ces-section-heading ces-white-heading" style={{ textAlign: 'center' }}>Which Edge Series Ship <br /> Is Best for You?</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered ces-separator-white"></div>
                            <p className="ces-which-ship-intro">There is no single best Edge Series ship for every traveler.</p>
                        </div>

                        <div className="ces-which-ship-grid">
                            {cesShipSelectionGuide.map((item, idx) => (
                                <div key={idx} className="ces-which-ship-card">
                                    <h4 className="ces-which-ship-label">{item.ship}</h4>
                                    <p className="ces-which-ship-value">{item.when}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── VS SOLSTICE ── */}
                <section className="ces-vs-solstice-section">
                    <div className="ces-vs-solstice-container">
                        <span className="ces-eyebrow ces-eyebrow-center">COMPARING SHIP CLASSES</span>
                        <h2 className="ces-section-heading" style={{ textAlign: 'center' }}>Edge Series vs. Celebrity Solstice Series</h2>
                        <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        <p className="ces-vs-solstice-intro">The Edge Series represents a newer design philosophy than Celebrity's Solstice Series.</p>

                        <div className="ces-table-wrapper">
                            <div className="ces-table-row ces-table-head">
                                <span>Feature</span>
                                <span>Edge Series</span>
                                <span>Solstice Series</span>
                            </div>
                            {cesVsSolsticeTable.map((row, idx) => (
                                <div key={idx} className="ces-table-row">
                                    <span data-label="Feature">{row.feature}</span>
                                    <span data-label="Edge Series">{row.edge}</span>
                                    <span data-label="Solstice Series">{row.solstice}</span>
                                </div>
                            ))}
                        </div>

                        <p className="ces-vs-solstice-note">Travelers who prefer innovative architecture and modern cabin layouts may find the Edge Series particularly interesting, while guests who prefer a more traditional cruise-ship arrangement may prefer older Celebrity vessels.</p>
                    </div>
                </section>

                {/* ── ITINERARIES ── */}
                <section className="ces-itineraries-section">
                    <div className="ces-itineraries-container">
                        <div className="ces-itineraries-grid">
                            <div className="ces-itineraries-text-col">
                                <span className="ces-eyebrow ces-eyebrow-light">DESTINATIONS</span>
                                <h2 className="ces-section-heading ces-white-heading">Edge Series Itineraries</h2>
                                <div className="ces-heading-separator-bar ces-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="ces-itineraries-lead">Celebrity Edge Series ships operate a variety of itineraries depending on season and ship deployment.</p>
                                <p className="ces-itineraries-sub">Routes can include destinations such as:</p>
                                <div className="ces-itineraries-list">
                                    {cesItineraryDestinations.map((item, idx) => (
                                        <div key={idx} className="ces-itineraries-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="ces-itineraries-note" style={{ color: '#ffffff' }}>Itinerary availability changes regularly.</p>
                            </div>
                            <div className="ces-itineraries-image-col">
                                <div className="ces-image-frame">
                                    <CesPlaceholder label="Celebrity Edge Series itinerary destinations" />
                                    <div className="ces-frame-overlay"></div>
                                </div>
                            </div>
                        </div>

                        <div className="ces-itineraries-tip-box">
                            <p>When comparing Edge Series cruises, look beyond the ship and compare: ports of call, number of sea days, departure port, cruise length, cabin category, dining options, seasonal weather, and excursion opportunities. A slightly older Edge Series ship can be the better choice if it offers the itinerary and dates that suit your travel plans.</p>
                        </div>
                    </div>
                </section>

                <section className="ces-included-cruise-section">
                    <div className="ces-included-cruise-container ces-included-full-width">
                        <span className="ces-eyebrow ces-eyebrow-center">CRUISE FARE INCLUSIONS</span>
                        <h2 className="ces-section-heading" style={{ textAlign: 'center' }}>What Is Included on an Edge Series Cruise?</h2>
                        <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        <p className="ces-included-cruise-lead" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 24px auto' }}>The standard cruise fare generally includes access to a range of complimentary dining, entertainment and onboard amenities.</p>
                        
                        <p className="ces-included-cruise-sub-label">Depending on the booking and sailing, included features can include:</p>
                        <div className="ces-included-features-grid">
                            {cesIncludedFeatures.map((item, idx) => (
                                <div key={idx} className="ces-included-feature-card">
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        <p className="ces-included-cruise-sub-label" style={{ marginTop: '24px' }}>Additional charges can apply to:</p>
                        <div className="ces-included-features-grid">
                            {cesExtraCharges.map((item, idx) => (
                                <div key={idx} className="ces-included-feature-card">
                                    <DollarSign size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="ces-included-cruise-note" style={{ marginTop: '24px' }}>Always review the fare inclusions attached to your specific booking.</p>
                    </div>
                </section>

                {/* ── PLANNING TIPS ── */}
                <section className="ces-planning-section">
                    <div className="ces-planning-container">
                        <div className="ces-planning-header">
                            <span className="ces-eyebrow ces-eyebrow-light ces-eyebrow-center">EXPERT ADVICE</span>
                            <h2 className="ces-section-heading ces-white-heading" style={{ textAlign: 'center' }}>Edge Series <br /> Cruise Planning Tips</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered ces-separator-white"></div>
                        </div>

                        <div className="ces-planning-grid">
                            {cesPlanningTips.map((item, idx) => (
                                <div key={idx} className="ces-planning-card">
                                    <div className="ces-planning-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="ces-planning-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="ces-takeaway-section">
                    <div className="ces-takeaway-container">
                        <div className="ces-takeaway-header">
                            <span className="ces-eyebrow ces-eyebrow-center">SUMMARY</span>
                            <h2 className="ces-section-heading">Key Takeaways</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        </div>

                        <div className="ces-takeaway-grid">
                            {cesKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="ces-takeaway-card">
                                    <div className="ces-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="ces-takeaway-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CONCLUSION ── */}
                <section className="ces-conclusion-section">
                    <div className="ces-conclusion-container">
                        <div className="ces-conclusion-header">
                            <span className="ces-eyebrow ces-eyebrow-center">FINAL THOUGHTS</span>
                            <h2 className="ces-section-heading">Conclusion</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered"></div>
                            <p className="ces-conclusion-intro">
                                Celebrity's Edge Series represents one of the cruise line's most distinctive ship designs. Beginning with Celebrity Edge and continuing through Apex, Beyond, Ascent and Xcel, the series combines contemporary accommodations, multiple dining venues, innovative outdoor spaces and dedicated premium experiences.
                            </p>
                            <p className="ces-conclusion-intro">
                                The ships share important characteristics, but each has differences that can matter when choosing a cruise. Edge and Apex offer the original Edge concept, while Beyond, Ascent and Xcel represent later developments with additional refinements.
                            </p>
                            <p className="ces-conclusion-intro">
                                For the best match, compare the specific ship, itinerary, cabin category, dining lineup and included amenities rather than choosing solely by ship name or launch year.
                            </p>
                        </div>

                        <div className="ces-conclusion-cta">
                            <div className="ces-conclusion-cta-icon">
                                <Phone size={20} />
                            </div>
                            <p>
                                Planning a Celebrity Edge Series cruise? Compare the ships, cabin categories, dining options and itineraries before choosing your sailing. Start with the route you want, then select the Edge Series ship and accommodation that best match your travel style and budget.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="ces-expert-section">
                    <div className="ces-expert-container">

                        <div className="ces-expert-portrait-panel">
                            <div className="ces-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="ces-expert-stats-strip">
                                <div className="ces-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="ces-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="ces-expert-content-panel">
                            <span className="ces-eyebrow ces-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="ces-section-heading">Insight from Angela Hughes</h2>
                            <div className="ces-heading-separator-bar"></div>

                            <p className="ces-expert-quote">
                                &ldquo;Choosing the right ship isn't about picking the newest one. It's about matching the ship's personality to your travel style. The Edge Series has a distinctly modern feel, but Beyond, Ascent and Xcel each bring something different. The itinerary and the cabin you choose will define your experience as much as the ship itself.&rdquo;
                            </p>

                            <div className="ces-expert-priorities">
                                <h5>Edge Series Prioritization Matrix:</h5>
                                <div className="ces-expert-pills">
                                    {['Match Ship to Itinerary', 'Choose Cabin Carefully', 'Book Specialty Dining Early', 'Compare Edge vs Apex vs Beyond', 'Check AquaClass & Retreat Benefits', 'Study the Deck Plan'].map(pill => (
                                        <span key={pill} className="ces-expert-pill">
                                            <Ship size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="ces-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom ship selection and itinerary planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="ces-faq-section">
                    <div className="ces-faq-container">
                        <div className="ces-faq-header">
                            <span className="ces-eyebrow ces-eyebrow-center">QUESTIONS BEFORE YOU SAIL</span>
                            <h2 className="ces-section-heading">Frequently Asked Questions</h2>
                            <div className="ces-heading-separator-bar ces-bar-centered"></div>
                        </div>
                        <div className="ces-faq-list-wrapper">
                            {cesFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="ces-faq-item"
                                    onClick={() => cesToggleFaq(index)}
                                >
                                    <div className="ces-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="ces-faq-toggle-icon">{cesActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {cesActiveFaq === index && (
                                        <p className="ces-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="ces-cta-section">
                    <div className="ces-cta-aurora-glow"></div>
                    <div className="ces-cta-crystal ces-cta-crystal-1"></div>
                    <div className="ces-cta-crystal ces-cta-crystal-2"></div>
                    <div className="ces-cta-crystal ces-cta-crystal-3"></div>
                    <div className="ces-cta-grid-lines"></div>

                    <div className="ces-cta-content">
                        <div className="ces-cta-compass-ring">
                            <Ship size={28} />
                        </div>
                        <span className="ces-cta-eyebrow">FIND YOUR PERFECT SHIP</span>
                        <h2 className="ces-cta-title">Ready to Choose Your <br /> Celebrity Edge Series Ship?</h2>
                        <div className="ces-cta-bar"></div>
                        <p className="ces-cta-subtitle">
                            Compare the Edge, Apex, Beyond, Ascent and Xcel, then let our specialists help you select the ship, cabin and itinerary that match your travel style.
                        </p>
                        <div className="ces-cta-actions">
                            <Link to="/contact" className="ces-cta-primary-btn">
                                <span>Speak with a Celebrity Edge Series specialist</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default CelebrityEdgeSeriesShipsGuide