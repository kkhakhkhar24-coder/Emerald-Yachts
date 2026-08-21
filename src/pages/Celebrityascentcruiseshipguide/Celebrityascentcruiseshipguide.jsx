import Navbar from '../../components/Navbar/Navbar'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'
import './Celebrityascentcruiseshipguide.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    Compass, Sparkles, Anchor, Gem, ArrowRight,
    Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Wifi, Wine, Bed, Bath, Tv,
    Globe, MessageSquare, Eye, Smile,
    Landmark, Palette, Music, ShieldCheck, Gift,
    UserCheck, Bike, Camera, Calendar, DollarSign, Info,
    Image as ImageIcon, Coffee, Salad, Fish, Soup, PartyPopper,
    Leaf, Shirt, ListChecks, Waves, LayoutGrid,
    Coffee as CoffeeIcon, Layers
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CagPlaceholder({ label, className = '' }) {
    return (
        <div className={`cag-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function Celebrityascentcruiseshipguide() {
    const [cagActiveFaq, setCagActiveFaq] = useState(null)
    const cagToggleFaq = i => setCagActiveFaq(cagActiveFaq === i ? null : i)
    const [cagActiveCabinTab, setCagActiveCabinTab] = useState(0)
    const [cagActiveSpaceTab, setCagActiveSpaceTab] = useState(0)
    const [cagActiveDiningTab, setCagActiveDiningTab] = useState(0)

    const cagAtAGlance = [
        { feature: 'Ship Series', detail: 'Celebrity Edge Series', Icon: Ship },
        { feature: 'Entered Service', detail: 'November 2023', Icon: Calendar },
        { feature: 'Decks', detail: '17 Decks', Icon: Layers },
        { feature: 'Design', detail: 'Edge Series outward-facing design', Icon: Compass },
        { feature: 'Accommodation Highlights', detail: 'Infinite Veranda, AquaClass, The Retreat', Icon: Bed },
        { feature: 'Signature Feature', detail: 'Magic Carpet', Icon: Sparkles },
        { feature: 'Key Dining', detail: 'Complimentary Main Restaurants, Raw on 5, Le Voyage', Icon: Utensils },
        { feature: 'Itinerary Focus', detail: 'Caribbean and Europe', Icon: Globe },
        { feature: 'Sister Ships', detail: 'Celebrity Edge, Apex, Beyond, Xcel', Icon: Anchor }
    ]

    const cagDiningVenues = [
        {
            name: 'Complimentary Main Dining',
            Icon: Utensils,
            tag: 'Included in Fare',
            imageLabel: 'Celebrity Ascent Cosmopolitan Restaurant interior',
            description: 'Celebrity Ascent features four complimentary main dining restaurants: Cosmopolitan, Normandie, Cyprus, and Tuscan. Each venue presents its own unique design, atmosphere, and selection of signature dishes, providing a variety of dining environments without the need for a single traditional dining room.',
            useful: [
                'Four distinct restaurant designs',
                'Custom signature dishes in each venue',
                'No additional surcharge required',
                'Flexible dining times available'
            ]
        },
        {
            name: 'Specialty Dining',
            Icon: Wine,
            tag: 'Surcharge Applies',
            imageLabel: 'Celebrity Ascent Le Voyage by Daniel Boulud interior',
            description: 'Ascent offers multiple specialty dining venues, including Le Voyage by Chef Daniel Boulud, Fine Cut Steakhouse, Raw on 5, and Eden Restaurant. These premium experiences focus on elevated culinary styles, chef-curated menus, and intimate designs.',
            useful: [
                'Menus by world-renowned chefs',
                'Premium ingredients and wine pairings',
                'Intimate, upscale atmospheres',
                'Perfect for celebrating special occasions'
            ]
        },
        {
            name: 'Complimentary Casual Dining',
            Icon: Coffee,
            tag: 'Included in Fare',
            imageLabel: 'Celebrity Ascent Oceanview Café buffet',
            description: 'For relaxed dining, guests can choose from multiple complimentary casual spots, including the extensive Oceanview Café buffet, Mast Grill for poolside burgers, Eden Café for light bites, and the wellness-focused Spa Café and Juice Bar.',
            useful: [
                'Relaxed, walk-in dining style',
                'Wide variety of food stations',
                'Poolside and outdoor seating options',
                'Quick snacks and fresh juices available'
            ]
        },
        {
            name: 'Exclusive Dining',
            Icon: Crown,
            tag: 'Suite/AquaClass Guests',
            imageLabel: 'Celebrity Ascent Luminae at The Retreat',
            description: 'Luminae at The Retreat provides a private dining experience exclusive to suite guests, featuring signature dishes curated by Daniel Boulud. Blu offers clean, spa-inspired cuisine exclusively for AquaClass guests.',
            useful: [
                'Private, keycard-access dining rooms',
                'Signature dishes by Daniel Boulud',
                'Highly personalized guest service',
                'Spa-focused wellness menus'
            ]
        }
    ]

    const cagDifferentHighlights = [
        'Open and outward-facing public spaces',
        'Large areas designed around ocean views',
        'Innovative Infinite Veranda staterooms',
        'The Magic Carpet cantilevered platform',
        'Multiple restaurants, cafés, bars, and lounges',
        'Destination-inspired food and entertainment',
        'Dedicated wellness and relaxation spaces',
        'Private suite keycard spaces at The Retreat'
    ]

    const cagCabinTypes = [
        { type: 'Inside Staterooms', size: '181–202 sq ft', desc: 'Enclosed accommodation without a private exterior view. Can accommodate up to four guests in selected configurations.', Icon: Moon, tag: 'Best Value' },
        { type: 'Ocean View Staterooms', size: '200–242 sq ft', desc: 'Replace a traditional balcony with large windows overlooking the sea.', Icon: Eye, tag: 'Natural Light' },
        { type: 'Veranda Staterooms', size: '202–228 sq ft', desc: 'Provide a private outdoor balcony, with veranda sizes varying by category.', Icon: Sun, tag: 'Private Balcony' },
        { type: 'Infinite Veranda Staterooms', size: '~243 sq ft', desc: 'Allows the exterior space to become part of the stateroom through a floor-to-ceiling opening.', Icon: Waves, tag: 'Most Popular' },
        { type: 'Suites & The Retreat', size: 'Varies', desc: "Suite accommodations associated with The Retreat, Celebrity's suite experience with dedicated spaces and services.", Icon: Crown, tag: 'Premium' }
    ]

    const cagCabinFeatures = [
        { Icon: Bed, label: 'eXhale bedding' },
        { Icon: Bath, label: 'Private bathroom' },
        { Icon: Tv, label: 'Interactive TV' },
        { Icon: Wifi, label: 'Wi-Fi access' },
        { Icon: CoffeeIcon, label: 'Coffee maker (select categories)' },
        { Icon: Shirt, label: 'Hair dryer & safe' }
    ]

    const cagMainDiningExpect = ['Four complimentary main restaurants', 'Each with its own design and culinary identity', 'Variety without one large traditional dining room', 'Main dining included in the cruise fare']

    const cagSpecialtyList = [
        'Le Voyage by Chef Daniel Boulud',
        'Fine Cut Steakhouse',
        'Raw on 5',
        'Other specialty culinary experiences'
    ]

    const cagCasualDiningList = ['Oceanview Caf\u00e9', 'Eden Caf\u00e9', 'Spa Caf\u00e9 and Juice Bar', 'Mast Grill', 'Caf\u00e9 al Bacio']

    const cagDiningCounts = [
        { Icon: Utensils, label: 'Four main dining restaurants' },
        { Icon: Wine, label: 'Eight specialty restaurants' },
        { Icon: Coffee, label: 'Four complimentary casual dining venues' },
        { Icon: Crown, label: 'Two exclusive restaurants' }
    ]

    const cagOutdoorAreas = [
        { name: 'Rooftop Garden', Icon: Leaf, description: 'The Rooftop Garden provides an open-air area for relaxing, socializing, and enjoying ocean views. Celebrity highlights its two cantilevered floating pools, which extend beyond the ship\u2019s edge.' },
        { name: 'Sunset Bar', Icon: Sun, description: 'Located toward the aft of the ship, Sunset Bar is designed around panoramic wake views. The venue combines seating, drinks, and an outdoor atmosphere.' },
        { name: 'Resort Deck', Icon: Waves, description: 'The main outdoor pool area provides space for swimming and relaxing, with the Magic Carpet able to become part of the pool-area experience depending on its operating position.' }
    ]

    const cagEntertainmentList = ['Grand Plaza', 'Rooftop Garden', 'Eden', 'Magic Carpet', 'Live entertainment spaces', 'Bars and lounges', 'Pool areas', 'Spa and wellness facilities', 'Fitness facilities']

    const cagCabinConsiderations = [
        { Icon: MapPin, label: 'Location', text: 'Midship cabins can be convenient for accessing different areas of the ship.' },
        { Icon: LayoutGrid, label: 'Deck height', text: 'Higher decks can provide easier access to some outdoor areas.' },
        { Icon: Info, label: 'Noise', text: 'Cabins directly below busy public spaces may experience more activity.' },
        { Icon: Eye, label: 'View', text: 'Check the deck plan for partial-view or obstruction notes.' },
        { Icon: UserCheck, label: 'Solo travel', text: 'Look specifically for Edge Single Staterooms.' },
        { Icon: Leaf, label: 'Wellness', text: 'AquaClass adds spa-oriented amenities.' },
        { Icon: Crown, label: 'Suite experience', text: 'The Retreat provides dedicated premium spaces.' }
    ]

    const cagSignatureSpaces = [
        { space: 'Magic Carpet', what: 'Movable open-air platform with changing uses and ocean views', Icon: Sparkles },
        { space: 'Sunset Bar', what: 'Aft outdoor bar with wake views', Icon: Wine },
        { space: 'Rooftop Garden', what: 'Open-air relaxation and entertainment area', Icon: Leaf },
        { space: 'Grand Plaza', what: 'Multi-level central social space', Icon: Compass },
        { space: 'Eden', what: 'Dining, drinks, entertainment, and panoramic surroundings', Icon: Eye },
        { space: 'Luminae at The Retreat', what: 'Suite-exclusive restaurant', Icon: Crown },
        { space: 'Caf\u00e9 al Bacio', what: 'Coffee, tea, pastries, and social seating', Icon: CoffeeIcon },
        { space: 'Oceanview Caf\u00e9', what: 'Casual buffet-style dining', Icon: Utensils },
        { space: 'Spa Caf\u00e9 & Juice Bar', what: 'Wellness-focused refreshments', Icon: Heart }
    ]

    const cagBestSuitedFor = ['Couples seeking a modern premium cruise', 'Travelers interested in culinary experiences', 'Adults who enjoy sophisticated bars and lounges', 'Solo travelers looking for dedicated single accommodation', 'Guests interested in wellness', 'Travelers who value innovative ship design', 'Suite guests looking for a dedicated premium area', 'Travelers visiting destinations in the Caribbean and other regions served by the ship']

    const cagEdgeSeriesTable = [
        { ship: 'Celebrity Edge', position: 'First Edge Series ship', point: 'Introduced the Edge Series concept' },
        { ship: 'Celebrity Apex', position: 'Second', point: 'Expanded the Edge Series design' },
        { ship: 'Celebrity Beyond', position: 'Third', point: 'Larger Edge Series evolution' },
        { ship: 'Celebrity Ascent', position: 'Fourth', point: 'Builds on Edge Series features with further refinements' },
        { ship: 'Celebrity Xcel', position: 'Newer addition', point: 'Adds further new concepts to the series' }
    ]

    const cagItineraryConsiderations = ['Departure port', 'Number of sea days', 'Port duration', 'Number of ports', 'Seasonal weather', 'Pre- and post-cruise hotel requirements', 'Cabin availability', 'Fare inclusions', 'Specialty dining and beverage costs']

    const cagFareIncludes = ['Drinks', 'Wi-Fi', 'Specialty dining', 'Gratuities', 'Transfers', 'Shore excursions']

    const cagKeyTakeaways = [
        'Celebrity Ascent is the fourth ship in Celebrity Cruises\u2019 Edge Series.',
        'The ship entered service in 2023.',
        'It measures approximately 141,420 gross tons and 1,073 feet long.',
        'The ship accommodates approximately 3,260 guests at double occupancy.',
        'Its signature Magic Carpet is a movable cantilevered platform with different uses depending on its position.',
        'Accommodation choices include Infinite Veranda staterooms, AquaClass, Concierge Class, and The Retreat.',
        'The ship offers 32 restaurants, bars, and lounges according to Celebrity Cruises.',
        'Four complimentary main restaurants provide different dining environments.'
    ]

    const cagFaqs = [
        { question: 'What is Celebrity Ascent?', answer: 'Celebrity Ascent is a Celebrity Cruises Edge Series cruise ship that entered service in 2023. It is the fourth ship in the Edge Series and combines contemporary design, premium accommodations, specialty dining, and innovative outdoor spaces.' },
        { question: 'When did Celebrity Ascent enter service?', answer: 'Celebrity Ascent officially entered the Celebrity Cruises fleet in November 2023, with its debut sailing departing Fort Lauderdale on November 22, 2023.' },
        { question: 'How big is Celebrity Ascent?', answer: 'Celebrity Ascent is approximately 141,420 gross tons and 1,073 feet long, with a 128-foot beam. Celebrity lists its maximum guest capacity at approximately 3,260 based on double occupancy.' },
        { question: 'What class is Celebrity Ascent?', answer: 'Celebrity Ascent belongs to Celebrity Cruises\u2019 Edge Series. It is the fourth ship in the series, following Celebrity Edge, Celebrity Apex, and Celebrity Beyond.' },
        { question: 'Does Celebrity Ascent have the Magic Carpet?', answer: 'Yes. Celebrity Ascent has the Magic Carpet, a movable cantilevered platform that changes function depending on its position on the ship. It can be used for different dining, entertainment, and outdoor experiences.' },
        { question: 'How many restaurants are on Celebrity Ascent?', answer: 'Celebrity Cruises describes Celebrity Ascent as having 32 distinctive restaurants, bars, and lounges. Its dining program includes complimentary main restaurants, casual venues, specialty restaurants, and exclusive dining experiences.' },
        { question: 'Does Celebrity Ascent have complimentary dining?', answer: 'Yes. Celebrity Ascent has four complimentary main restaurants along with additional complimentary casual dining venues such as Oceanview Caf\u00e9, Eden Caf\u00e9, Spa Caf\u00e9 and Juice Bar, and Mast Grill.' },
        { question: 'Does Celebrity Ascent have Infinite Veranda cabins?', answer: 'Yes. Celebrity Ascent offers Edge Staterooms with Infinite Veranda, a cabin design that opens the room toward the sea and creates an indoor-outdoor living experience.' },
        { question: 'Does Celebrity Ascent have solo cabins?', answer: 'Yes. Celebrity Ascent offers Edge Single Staterooms with Infinite Veranda for solo travelers. Celebrity says the ship has increased the number of these staterooms compared with earlier Edge Series ships.' },
        { question: 'What is The Retreat on Celebrity Ascent?', answer: 'The Retreat is Celebrity Ascent\u2019s suite-focused experience. It includes premium accommodations and access to dedicated spaces such as Luminae, an exclusive lounge, and a private sundeck.' },
        { question: 'Does Celebrity Ascent have a pool?', answer: 'Yes. Celebrity Ascent has multiple outdoor pool and relaxation areas, including the main resort-style pool area and the Rooftop Garden with two cantilevered floating pools.' },
        { question: 'What is the best cabin location on Celebrity Ascent?', answer: 'There is no single best location for every traveler. Midship cabins can be convenient, while travelers prioritizing views, outdoor access, quiet surroundings, or proximity to specific venues should compare the exact deck and cabin location before booking.' },
        { question: 'Does Celebrity Ascent have a spa and fitness center?', answer: 'Yes. Wellness is an important part of the Celebrity Ascent experience, with spa and fitness facilities as well as wellness-oriented accommodation options such as AquaClass.' },
        { question: 'Is Celebrity Ascent suitable for families?', answer: 'Celebrity Ascent can accommodate families, but its overall design emphasizes contemporary premium cruising, dining, wellness, entertainment, and destination-focused experiences. Families seeking extensive amusement-style attractions should compare its facilities with other cruise lines before booking.' },
        { question: 'Where can I find Celebrity Ascent deck plans?', answer: 'The current deck plans can be checked through Celebrity Cruises\u2019 official Celebrity Ascent deck-plan pages. Reviewing the current plan is recommended before selecting a specific cabin because layouts, venues, and availability can vary.' }
    ]

    const cagSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent",
                "name": "Celebrity Ascent Cruise Ship Guide",
                "description": "Explore Celebrity Ascent with its Edge Series design, dining, staterooms, Magic Carpet, entertainment, amenities, deck plans, and cruise experience.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent#article",
                "headline": "Celebrity Ascent Cruise Ship Guide",
                "description": "A comprehensive guide to Celebrity Ascent covering cabins, dining, deck plans, onboard spaces, activities, and key ship features.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent#faq",
                "mainEntity": [
                    { "@type": "Question", "name": "What is Celebrity Ascent?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Ascent is a Celebrity Cruises Edge Series cruise ship that entered service in 2023. It is the fourth ship in the Edge Series and combines contemporary design, premium accommodations, specialty dining, and innovative outdoor spaces." } },
                    { "@type": "Question", "name": "When did Celebrity Ascent enter service?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Ascent officially entered the Celebrity Cruises fleet in November 2023, with its debut sailing departing Fort Lauderdale on November 22, 2023." } },
                    { "@type": "Question", "name": "How big is Celebrity Ascent?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Ascent is approximately 141,420 gross tons and 1,073 feet long, with a 128-foot beam. Celebrity lists its maximum guest capacity at approximately 3,260 based on double occupancy." } },
                    { "@type": "Question", "name": "What class is Celebrity Ascent?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Ascent belongs to Celebrity Cruises\u2019 Edge Series. It is the fourth ship in the series, following Celebrity Edge, Celebrity Apex, and Celebrity Beyond." } },
                    { "@type": "Question", "name": "Does Celebrity Ascent have the Magic Carpet?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Ascent has the Magic Carpet, a movable cantilevered platform that changes function depending on its position on the ship. It can be used for different dining, entertainment, and outdoor experiences." } },
                    { "@type": "Question", "name": "How many restaurants are on Celebrity Ascent?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Cruises describes Celebrity Ascent as having 32 distinctive restaurants, bars, and lounges. Its dining program includes complimentary main restaurants, casual venues, specialty restaurants, and exclusive dining experiences." } },
                    { "@type": "Question", "name": "Does Celebrity Ascent have complimentary dining?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Ascent has four complimentary main restaurants along with additional complimentary casual dining venues such as Oceanview Caf\u00e9, Eden Caf\u00e9, Spa Caf\u00e9 and Juice Bar, and Mast Grill." } },
                    { "@type": "Question", "name": "Does Celebrity Ascent have Infinite Veranda cabins?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Ascent offers Edge Staterooms with Infinite Veranda, a cabin design that opens the room toward the sea and creates an indoor-outdoor living experience." } },
                    { "@type": "Question", "name": "Does Celebrity Ascent have solo cabins?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Ascent offers Edge Single Staterooms with Infinite Veranda for solo travelers. Celebrity says the ship has increased the number of these staterooms compared with earlier Edge Series ships." } },
                    { "@type": "Question", "name": "What is The Retreat on Celebrity Ascent?", "acceptedAnswer": { "@type": "Answer", "text": "The Retreat is Celebrity Ascent\u2019s suite-focused experience. It includes premium accommodations and access to dedicated spaces such as Luminae, an exclusive lounge, and a private sundeck." } },
                    { "@type": "Question", "name": "Does Celebrity Ascent have a pool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity Ascent has multiple outdoor pool and relaxation areas, including the main resort-style pool area and the Rooftop Garden with two cantilevered floating pools." } },
                    { "@type": "Question", "name": "What is the best cabin location on Celebrity Ascent?", "acceptedAnswer": { "@type": "Answer", "text": "There is no single best location for every traveler. Midship cabins can be convenient, while travelers prioritizing views, outdoor access, quiet surroundings, or proximity to specific venues should compare the exact deck and cabin location before booking." } },
                    { "@type": "Question", "name": "Does Celebrity Ascent have a spa and fitness center?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Wellness is an important part of the Celebrity Ascent experience, with spa and fitness facilities as well as wellness-oriented accommodation options such as AquaClass." } },
                    { "@type": "Question", "name": "Is Celebrity Ascent suitable for families?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity Ascent can accommodate families, but its overall design emphasizes contemporary premium cruising, dining, wellness, entertainment, and destination-focused experiences. Families seeking extensive amusement-style attractions should compare its facilities with other cruise lines before booking." } },
                    { "@type": "Question", "name": "Where can I find Celebrity Ascent deck plans?", "acceptedAnswer": { "@type": "Answer", "text": "The current deck plans can be checked through Celebrity Cruises\u2019 official Celebrity Ascent deck-plan pages. Reviewing the current plan is recommended before selecting a specific cabin because layouts, venues, and availability can vary." } }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Ships", "item": "https://www.tripsandships.com/celebrity-cruises/ships/" },
                    { "@type": "ListItem", "position": 4, "name": "Celebrity Ascent Cruise Ship Guide", "item": "https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent" }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com#organization",
                "name": "Trips & Ships",
                "url": "https://www.tripsandships.com"
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity Ascent Cruise Ship Guide</title>
                <meta name="title" content="Celebrity Ascent Cruise Ship Guide" />
                <meta name="description" content="Explore Celebrity Ascent with its Edge Series design, dining, staterooms, Magic Carpet, entertainment, amenities, deck plans, and cruise experience." />
                <meta name="keywords" content="Celebrity Ascent cruise ship, Celebrity Ascent ship guide, Celebrity Ascent cruise, Celebrity Ascent deck plans, Celebrity Ascent restaurants, Celebrity Ascent cabins, Celebrity Ascent amenities, Celebrity Edge Series, Celebrity Ascent itinerary" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/ships/celebrity-ascent" />
                <script type="application/ld+json">{JSON.stringify(cagSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="cag-page">

                {/* ── HERO ── */}
                <section className="cag-hero-section">
                    <CagPlaceholder label="Celebrity Ascent exterior at sea" className="cag-hero-bg-placeholder" />
                    <div className="cag-hero-overlay-layer"></div>
                    <div className="cag-hero-content-wrapper">
                        <div className="cag-hero-eyebrow-tag">
                            <Ship size={16} />
                            <span>Celebrity Edge Series · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="cag-hero-main-title">Celebrity Ascent <br /> Cruise Ship Guide</h1>
                        <p className="cag-hero-subtitle-text">
                            Celebrity Ascent is a fourth-generation Celebrity Edge Series cruise ship designed around modern luxury, open-air spaces, destination-focused views, and a wide range of dining and accommodation choices. The ship entered service in late 2023 and combines the signature features of the Edge Series with updated spaces and experiences.
                        </p>
                    </div>
                </section>

                {/* ── INTRO / AT A GLANCE ── */}
                <section className="cag-intro-section" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="cag-intro-container">
                        <span className="cag-eyebrow cag-eyebrow-center">SHIP OVERVIEW</span>
                        <h2 className="cag-section-heading" style={{ textAlign: 'center' }}>Celebrity Ascent at a Glance</h2>
                        <div className="cag-heading-separator-bar cag-bar-centered"></div>
                        <p className="cag-intro-lead">
                            At approximately 141,420 gross tons and 1,073 feet long, Celebrity Ascent accommodates up to 3,260 guests at double occupancy. This guide details Ascent's cabins, dining, deck plans, and itineraries.
                        </p>

                        <div className="cag-glance-grid">
                            {cagAtAGlance.map((row, idx) => (
                                <div key={idx} className="cag-glance-card">
                                    <div className="cag-glance-card-icon">
                                        <row.Icon size={20} />
                                    </div>
                                    <div className="cag-glance-card-body">
                                        <span className="cag-glance-card-feature">{row.feature}</span>
                                        <span className="cag-glance-card-detail">{row.detail}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cag-intro-statement-box">
                            <Info className="cag-intro-statement-icon" size={24} />
                            <p className="cag-intro-statement-text">
                                Celebrity Cruises identifies Ascent as the fourth ship in its Edge Series alongside Edge, Apex, Beyond, and Xcel.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── WHAT MAKES ASCENT DIFFERENT ── */}
                <section className="cag-different-section">
                    <div className="cag-different-container">
                        <div className="cag-different-grid">
                            <div className="cag-different-text-col">
                                <span className="cag-eyebrow">EDGE SERIES EVOLUTION</span>
                                <h2 className="cag-section-heading">What Makes Celebrity Ascent Different?</h2>
                                <div className="cag-heading-separator-bar"></div>
                                <p className="cag-different-lead">Celebrity Ascent builds on the design language introduced with the Edge Series rather than simply adding another conventional cruise ship to the fleet.</p>
                                <p className="cag-different-sub-label">Its design emphasizes:</p>
                                <div className="cag-different-list">
                                    {cagDifferentHighlights.map((item, idx) => (
                                        <div key={idx} className="cag-different-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cag-different-image-col">
                                <div className="cag-image-frame" style={{ marginBottom: '16px' }}>
                                    <CagPlaceholder label="Celebrity Ascent architectural features" />
                                    <div className="cag-frame-overlay"></div>
                                    <div className="cag-image-badge">
                                        <Compass size={14} />
                                        <span>Signature Design</span>
                                    </div>
                                </div>
                                <p className="cag-different-note">
                                    <strong>Trips & Ships Luxury Travel Tip:</strong> Ascent features an expanded Rooftop Garden layout with two cantilevered pools extending over the side of the ship, compared to earlier ships in the class.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CABINS AND SUITES ── */}
                <section className="cag-cabins-section">
                    <div className="cag-cabins-container">
                        <div className="cag-cabins-header-grid">
                            <div className="cag-cabins-header-text">
                                <span className="cag-eyebrow cag-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>ACCOMMODATIONS</span>
                                <h2 className="cag-section-heading cag-white-heading">Celebrity Ascent Cabins and Suites</h2>
                                <div className="cag-heading-separator-bar cag-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cag-cabins-intro">
                                    Celebrity Ascent offers five primary cabin categories. Inside staterooms represent the most budget-friendly choice, while ocean-view cabins swap balconies for panoramic windows. Veranda staterooms feature classic walk-out balconies, and Infinite Verandas allow you to expand your living area at the touch of a button. Suite guests enjoy private spaces and premium amenities via The Retreat.
                                </p>
                            </div>
                            <div className="cag-cabins-header-image">
                                <CagPlaceholder label="Celebrity Ascent stateroom interior" />
                                <div className="cag-frame-overlay"></div>
                                <div className="cag-image-badge">
                                    <Bed size={14} />
                                    <span>Premium Comfort</span>
                                </div>
                            </div>
                        </div>

                        <div className="cag-cabins-grid">
                            {cagCabinTypes.map((cabin, idx) => (
                                <div key={idx} className="cag-cabins-card">
                                    <div className="cag-cabins-card-top">
                                        <div className="cag-cabins-card-icon-wrap">
                                            <cabin.Icon size={20} />
                                        </div>
                                        <span className="cag-cabins-card-tag">{cabin.tag}</span>
                                    </div>
                                    <h3 className="cag-cabins-card-title">{cabin.type}</h3>
                                    <span className="cag-cabins-card-size">{cabin.size}</span>
                                    <p className="cag-cabins-card-desc">{cabin.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="cag-cabins-features">
                            <h4 className="cag-cabins-features-title">All Celebrity Ascent cabins include:</h4>
                            <div className="cag-cabins-features-grid">
                                {cagCabinFeatures.map((feat, idx) => (
                                    <div key={idx} className="cag-cabins-feature-item">
                                        <feat.Icon size={16} />
                                        <span>{feat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cag-cabins-footer">
                            <Info className="cag-cabins-footer-icon" size={24} />
                            <p>
                                <strong>Trips & Ships Luxury Travel Tip:</strong> Booking a suite on Celebrity Ascent automatically grants you access to The Retreat's premium inclusions, including a private lounge, private sundeck, and the Luminae restaurant.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── DINING ── */}
                <section className="cag-dining-section">
                    <div className="cag-dining-container">
                        <span className="cag-eyebrow cag-eyebrow-center">ONBOARD DINING</span>
                        <h2 className="cag-section-heading" style={{ textAlign: 'center' }}>Dining on Celebrity Ascent</h2>
                        <div className="cag-heading-separator-bar cag-bar-centered"></div>
                        <p className="cag-dining-intro">Dining is a major part of the Ascent experience — with 32 distinctive restaurants, bars, and lounges onboard. The culinary program is divided between complimentary main dining, casual venues, and premium specialty restaurants.</p>

                        {/* Horizontal pill tab bar */}
                        <div className="cag-dining-tab-bar">
                            {cagDiningVenues.map((venue, idx) => (
                                <button
                                    key={idx}
                                    className={`cag-dining-pill ${cagActiveDiningTab === idx ? 'active' : ''}`}
                                    onClick={() => setCagActiveDiningTab(idx)}
                                >
                                    <venue.Icon size={15} />
                                    <span>{venue.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab panels */}
                        <div className="cag-dining-panels">
                            {cagDiningVenues.map((venue, idx) => (
                                <div key={idx} className={`cag-dining-panel ${cagActiveDiningTab === idx ? 'active' : ''}`}>
                                    <div className="cag-dining-panel-layout">
                                        {/* Image side */}
                                        <div className="cag-dining-panel-img">
                                            <CagPlaceholder label={venue.imageLabel} />
                                            <div className="cag-dining-card-overlay"></div>
                                            <div className="cag-dining-card-tag">{venue.tag}</div>
                                        </div>

                                        {/* Content side */}
                                        <div className="cag-dining-panel-content">
                                            <div className="cag-dining-panel-icon-row">
                                                <venue.Icon size={18} className="cag-dining-panel-icon" />
                                                <h3 className="cag-dining-tab-title">{venue.name}</h3>
                                            </div>
                                            <p className="cag-dining-tab-desc">{venue.description}</p>
                                            <p className="cag-dining-tab-sublabel">Why guests choose this venue:</p>
                                            <div className="cag-dining-tab-details">
                                                {venue.useful.map((point, pIdx) => (
                                                    <div key={pIdx} className="cag-dining-tab-detail-item">
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
                        <div className="cag-dining-specialty">
                            <div className="cag-dining-specialty-header">
                                <h3 className="cag-dining-specialty-title">Specialty Dining</h3>
                                <p className="cag-dining-specialty-desc">Celebrity Ascent offers additional specialty and premium culinary experiences. Menus, pricing, and reservation requirements vary by sailing.</p>
                            </div>
                            <div className="cag-dining-specialty-grid">
                                {cagSpecialtyList.map((item, idx) => (
                                    <div key={idx} className="cag-dining-specialty-item">
                                        <Utensils size={13} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAGIC CARPET ── */}
                <section className="cag-edge-section" style={{ backgroundColor: '#0F1C2E' }}>
                    <div className="cag-edge-container">
                        <div className="cag-edge-grid">
                            <div className="cag-edge-image-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <div className="cag-image-frame">
                                    <CagPlaceholder label="Celebrity Ascent Magic Carpet extending over the side of the cruise ship" />
                                    <div className="cag-frame-overlay"></div>
                                    <div className="cag-image-badge">
                                        <Waves size={13} />
                                        <span>Celebrity Ascent's Signature Feature</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cag-edge-text-col">
                                <span className="cag-eyebrow cag-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>ARCHITECTURAL ICON</span>
                                <h2 className="cag-section-heading cag-white-heading">Celebrity Ascent's Magic Carpet</h2>
                                <div className="cag-heading-separator-bar cag-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cag-edge-lead" style={{ color: '#ffffff' }}>The Magic Carpet is one of Celebrity Ascent's most recognizable architectural features. It is a cantilevered platform that moves between different decks on the side of the ship.</p>
                                <p className="cag-edge-lead" style={{ color: '#ffffff' }}>Depending on its position, it can function as an observation and social space, dining extension, or part of the pool-area experience. Its changing position means that it is not simply a fixed attraction. The experience can vary depending on the deck and operation during your sailing.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── OUTDOOR AREAS AND POOLS ── */}
                <section className="cag-pools-section">
                    <div className="cag-pools-container">
                        <div className="cag-pools-header">
                            <span className="cag-eyebrow cag-eyebrow-center">OUTDOOR LIVING</span>
                            <h2 className="cag-section-heading" style={{ textAlign: 'center' }}>Outdoor Areas and Pools</h2>
                            <div className="cag-heading-separator-bar cag-bar-centered"></div>
                            <p className="cag-pools-intro">Celebrity Ascent puts significant emphasis on outdoor living, resort-style recreation, and premium ocean views.</p>
                        </div>

                        <div className="cag-pools-grid">
                            {cagOutdoorAreas.map((area, idx) => (
                                <div key={idx} className="cag-pools-card">
                                    <div className="cag-pools-card-icon-wrap">
                                        <area.Icon size={22} />
                                    </div>
                                    <h3 className="cag-pools-card-title">{area.name}</h3>
                                    <p className="cag-pools-card-desc">{area.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── ENTERTAINMENT AND THINGS TO DO ── */}
                <section className="cag-select-section" style={{ backgroundColor: '#E3EBF5' }}>
                    <div className="cag-select-container">
                        <div className="cag-select-header">
                            <span className="cag-eyebrow cag-eyebrow-center">ONBOARD EXPERIENCES</span>
                            <h2 className="cag-section-heading" style={{ textAlign: 'center' }}>Entertainment and Things to Do</h2>
                            <div className="cag-heading-separator-bar cag-bar-centered"></div>
                            <p className="cag-select-intro">Celebrity Ascent is designed to offer more than traditional cruise entertainment. Its public areas change atmosphere throughout the day, with spaces that can transition from daytime relaxation to evening entertainment.</p>
                            <p className="cag-select-sub">Notable areas and experiences include:</p>
                        </div>

                        <div className="cag-select-grid">
                            {cagEntertainmentList.map((item, idx) => (
                                <div key={idx} className="cag-select-card">
                                    <div className="cag-select-icon"><Sparkles size={20} /></div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cag-select-footer">
                            <div className="cag-select-footer-icon"><Info size={16} /></div>
                            <p>The Grand Plaza is particularly central to the ship's design, functioning as a multi-level social space whose lighting and atmosphere change throughout the day.</p>
                        </div>
                    </div>
                </section>

                {/* ── DECK PLANS ── */}
                <section className="cag-veg-section" style={{ backgroundColor: '#0F1C2E' }}>
                    <div className="cag-veg-container">
                        <span className="cag-eyebrow cag-eyebrow-light cag-eyebrow-center">SHIP LAYOUT</span>
                        <h2 className="cag-section-heading cag-white-heading" style={{ textAlign: 'center' }}>Celebrity Ascent Deck Plans</h2>
                        <div className="cag-heading-separator-bar cag-bar-centered cag-separator-white"></div>
                        <p className="cag-veg-text" style={{ color: '#ffffff' }}>Understanding the deck layout can help when selecting a cabin. Celebrity's published deck plans show accommodations and public spaces distributed across multiple decks, including Infinite Veranda staterooms, specialty restaurants, the Grand Plaza, Magic Carpet, bars, pools, and suite-only areas.</p>
                    </div>
                </section>

                {/* ── CHOOSING A CABIN ── */}
                <section className="cag-cabin-choice-section">
                    <div className="cag-cabin-choice-container">
                        <div className="cag-cabin-choice-split">
                            {/* Left column */}
                            <div className="cag-cabin-choice-left">
                                <span className="cag-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>BOOKING GUIDANCE</span>
                                <h2 className="cag-section-heading">What to Consider When Choosing a Cabin</h2>
                                <div className="cag-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cag-cabin-choice-intro">
                                    When comparing Celebrity Ascent stateroom categories and deck plan locations, keep these key factors in mind to select the best accommodation for your cruise style:
                                </p>
                                <div className="cag-cabin-choice-img">
                                    <CagPlaceholder label="Celebrity Ascent deck layout diagram" />
                                    <div className="cag-frame-overlay"></div>
                                    <div className="cag-image-badge">
                                        <Layers size={13} />
                                        <span>Deck Plan Guidance</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="cag-cabin-choice-right">
                                <div className="cag-cabin-choice-grid">
                                    {cagCabinConsiderations.map((item, idx) => (
                                        <div key={idx} className="cag-cabin-choice-card">
                                            <div className="cag-cabin-choice-card-icon">
                                                <item.Icon size={16} />
                                            </div>
                                            <div className="cag-cabin-choice-card-body">
                                                <span className="cag-cabin-choice-priority">{item.label}</span>
                                                <span className="cag-cabin-choice-arrow">→</span>
                                                <span className="cag-cabin-choice-feature">{item.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cag-cabin-choice-footer">
                                    <Info size={16} className="cag-cabin-choice-footer-icon" />
                                    <p>Always cross-reference the current official deck plan before booking to check what is directly above and below your selected stateroom.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SIGNATURE SPACES ── */}
                <section className="cag-spaces-section">
                    <div className="cag-spaces-container">
                        <div className="cag-spaces-header">
                            <span className="cag-eyebrow cag-eyebrow-center">WHERE TO GO ONBOARD</span>
                            <h2 className="cag-section-heading" style={{ textAlign: 'center' }}>Celebrity Ascent's Signature Spaces</h2>
                            <div className="cag-heading-separator-bar cag-bar-centered"></div>
                            <p className="cag-spaces-intro">From the iconic Magic Carpet to peaceful wellness gardens, explore the primary spaces that define Ascent's layout:</p>
                        </div>

                        <div className="cag-spaces-grid">
                            {cagSignatureSpaces.map((row, idx) => (
                                <div key={idx} className="cag-spaces-card">
                                    <div className="cag-spaces-card-icon-wrap">
                                        <row.Icon size={18} />
                                    </div>
                                    <div className="cag-spaces-card-body">
                                        <h3 className="cag-spaces-card-title">{row.space}</h3>
                                        <p className="cag-spaces-card-desc">{row.what}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHO IS IT BEST SUITED FOR ── */}
                <section className="cag-choice-section" style={{ backgroundColor: '#0F1C2E' }}>
                    <div className="cag-choice-container">
                        <div className="cag-choice-split-grid">
                            <div className="cag-choice-image-col">
                                <div className="cag-section-banner cag-section-banner-dark cag-choice-image">
                                    <CagPlaceholder label="Celebrity Ascent guests enjoying onboard lounge" />
                                    <div className="cag-section-banner-badge">
                                        <Heart size={14} />
                                        <span>Ideal Guests</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cag-choice-content-col">
                                <span className="cag-eyebrow cag-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>IS IT RIGHT FOR YOU?</span>
                                <h2 className="cag-section-heading cag-white-heading">Who Is Celebrity Ascent Best Suited For?</h2>
                                <div className="cag-heading-separator-bar cag-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cag-choice-intro" style={{ color: '#ffffff' }}>Celebrity Ascent can appeal to travelers looking for a more contemporary, design-led cruise experience rather than a ship centered primarily around large-scale amusement attractions. It may particularly suit:</p>
                            </div>
                        </div>

                        <div className="cag-choice-grid">
                            {cagBestSuitedFor.map((item, idx) => (
                                <div key={idx} className="cag-choice-card" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                    <div className="cag-choice-icon"><Heart size={20} /></div>
                                    <p className="cag-choice-value" style={{ color: '#ffffff' }}>{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="cag-solstice-footer" style={{ marginTop: '30px' }}>
                            <Info size={16} className="cag-solstice-footer-icon" />
                            <p>Families can also sail on Celebrity Ascent, but travelers comparing it with cruise lines that emphasize large waterslides, amusement attractions, and extensive family entertainment should compare onboard priorities carefully.</p>
                        </div>
                    </div>
                </section>

                {/* ── VS OTHER EDGE SERIES SHIPS ── */}
                <section className="cag-edge-compare-section">
                    <div className="cag-edge-compare-container">
                        <span className="cag-eyebrow cag-eyebrow-center">FLEET COMPARISON</span>
                        <h2 className="cag-section-heading" style={{ textAlign: 'center' }}>Celebrity Ascent vs. Other Edge Series Ships</h2>
                        <div className="cag-heading-separator-bar cag-bar-centered"></div>
                        <p className="cag-intro-lead">Celebrity Ascent belongs to a closely related family of Edge Series ships.</p>

                        <div className="cag-table-wrapper cag-edge-compare-table">
                            <div className="cag-table-row cag-table-head">
                                <span>Ship</span>
                                <span>Edge Series Position</span>
                                <span>Key Point</span>
                            </div>
                            {cagEdgeSeriesTable.map((row, idx) => (
                                <div key={idx} className={`cag-table-row ${row.ship === 'Celebrity Ascent' ? 'cag-highlight-row' : ''}`}>
                                    <span data-label="Ship">{row.ship}</span>
                                    <span data-label="Edge Series Position">{row.position}</span>
                                    <span data-label="Key Point">{row.point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="cag-intro-statement-box cag-edge-compare-note">
                            <Info className="cag-intro-statement-icon" size={24} />
                            <p className="cag-intro-statement-text">Celebrity identifies Ascent as the fourth ship in the Edge Series, while Xcel is the newer addition to the class.</p>
                        </div>
                    </div>
                </section>

                {/* ── ITINERARIES ── */}
                <section className="cag-itinerary-section">
                    <div className="cag-itinerary-container">
                        <div className="cag-itinerary-grid">
                            <div className="cag-itinerary-image-col">
                                <div className="cag-image-frame cag-itinerary-image">
                                    <CagPlaceholder label="Celebrity Ascent itineraries and destinations" />
                                    <div className="cag-frame-overlay cag-overlay-soft"></div>
                                </div>
                                <p className="cag-itinerary-sub" style={{ marginTop: '14px' }}>The ship can be particularly interesting for travelers who want the Edge Series experience while visiting destinations across the Caribbean and other regions served by Celebrity.</p>
                            </div>
                            <div className="cag-itinerary-text-col">
                                <span className="cag-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>SAILING OPTIONS</span>
                                <h2 className="cag-section-heading">Celebrity Ascent Itineraries</h2>
                                <div className="cag-heading-separator-bar"></div>
                                <p className="cag-itinerary-lead">Celebrity Ascent's itinerary availability changes throughout the year, so travelers should check current sailing dates rather than relying on a static list. When comparing itineraries, consider:</p>
                                <div className="cag-main-list" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: '14px' }}>
                                    {cagItineraryConsiderations.map((item, idx) => (
                                        <div key={idx} className="cag-main-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT TO KNOW BEFORE BOOKING ── */}
                <section className="cag-booking-section">
                    <div className="cag-booking-container">
                        <div className="cag-booking-header">
                            <span className="cag-eyebrow cag-eyebrow-light cag-eyebrow-center">BEFORE YOU BOOK</span>
                            <h2 className="cag-section-heading cag-white-heading">What to Know Before Booking Celebrity Ascent</h2>
                            <div className="cag-heading-separator-bar cag-bar-centered cag-separator-white"></div>
                            <p className="cag-booking-intro">Before selecting a Celebrity Ascent sailing, compare more than the advertised cruise fare.</p>
                        </div>

                        <div className="cag-booking-grid">
                            <div className="cag-booking-card">
                                <div className="cag-booking-icon"><DollarSign size={20} /></div>
                                <h4>Check What Your Fare Includes</h4>
                                <p>Confirm whether your selected rate includes or excludes items such as:</p>
                                <div className="cag-main-list cag-booking-list">
                                    {cagFareIncludes.map((item, idx) => (
                                        <div key={idx} className="cag-main-list-item">
                                            <CheckCircle size={15} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cag-booking-note">Inclusions can vary by fare, promotion, itinerary, and booking conditions.</p>
                            </div>
                            <div className="cag-booking-card">
                                <div className="cag-booking-icon"><Bed size={20} /></div>
                                <h4>Choose Your Cabin Carefully</h4>
                                <p>Celebrity Ascent's cabin design is an important part of the ship experience. Compare the location, category, deck, view, and included amenities before selecting a room.</p>
                            </div>
                            <div className="cag-booking-card">
                                <div className="cag-booking-icon"><MapPin size={20} /></div>
                                <h4>Review the Current Deck Plan</h4>
                                <p>The official deck plan is especially useful when evaluating cabins near elevators, entertainment venues, pools, restaurants, or other high-traffic areas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="cag-expert-section">
                    <div className="cag-expert-container">

                        <div className="cag-expert-portrait-panel">
                            <div className="cag-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="cag-expert-stats-strip">
                                <div className="cag-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="cag-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="cag-expert-content-panel">
                            <span className="cag-eyebrow cag-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="cag-section-heading">Insight from Angela Hughes</h2>
                            <div className="cag-heading-separator-bar"></div>

                            <p className="cag-expert-quote">
                                &ldquo;The Edge Series ships, including Ascent, represent a fundamental shift in how Celebrity thinks about the guest experience. It's not just about getting from port to port—it's about creating a destination onboard that competes with the ports themselves. The Magic Carpet, Infinite Verandas, and dining venues like Le Voyage are not gimmicks; they are intentional design choices that change how you experience the ocean.&rdquo;
                            </p>

                            <div className="cag-expert-priorities">
                                <h5>Ascent Considerations for the Discerning Traveler:</h5>
                                <div className="cag-expert-pills">
                                    {['Innovative Infinite Verandas', 'Le Voyage by Daniel Boulud', 'Magic Carpet Perspectives', 'The Retreat Suite Experience', 'Caribbean & Europe Itineraries', 'Expanded Rooftop Garden'].map(pill => (
                                        <span key={pill} className="cag-expert-pill">
                                            <Ship size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="cag-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom cruise planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="cag-takeaway-section" style={{ backgroundColor: '#E3EBF5' }}>
                    <div className="cag-takeaway-container">
                        <div className="cag-takeaway-header">
                            <span className="cag-eyebrow cag-eyebrow-center">SUMMARY</span>
                            <h2 className="cag-section-heading">Key Takeaways</h2>
                            <div className="cag-heading-separator-bar cag-bar-centered"></div>
                        </div>

                        <div className="cag-takeaway-grid">
                            {cagKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="cag-takeaway-card">
                                    <div className="cag-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="cag-takeaway-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="cag-faq-section" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="cag-faq-container">
                        <div className="cag-faq-header">
                            <span className="cag-eyebrow cag-eyebrow-center">QUESTIONS BEFORE YOU SAIL</span>
                            <h2 className="cag-section-heading">Frequently Asked Questions About Celebrity Ascent</h2>
                            <div className="cag-heading-separator-bar cag-bar-centered"></div>
                        </div>
                        <div className="cag-faq-list-wrapper">
                            {cagFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cag-faq-item"
                                    onClick={() => cagToggleFaq(index)}
                                >
                                    <div className="cag-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cag-faq-toggle-icon">{cagActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {cagActiveFaq === index && (
                                        <p className="cag-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="cag-cta-section">
                    <div className="cag-cta-aurora-glow"></div>
                    <div className="cag-cta-crystal cag-cta-crystal-1"></div>
                    <div className="cag-cta-crystal cag-cta-crystal-2"></div>
                    <div className="cag-cta-crystal cag-cta-crystal-3"></div>
                    <div className="cag-cta-grid-lines"></div>

                    <div className="cag-cta-content">
                        <div className="cag-cta-compass-ring">
                            <Ship size={28} />
                        </div>
                        <span className="cag-cta-eyebrow">READY TO EXPLORE CELEBRITY ASCENT?</span>
                        <h2 className="cag-cta-title">Compare Sailings, Cabins <br /> and Itineraries Today</h2>
                        <div className="cag-cta-bar"></div>
                        <p className="cag-cta-subtitle">
                            Compare available sailings, cabin categories, itineraries, and cruise inclusions before choosing the sailing that best matches your travel plans.
                        </p>
                        <div className="cag-cta-actions">
                            <Link to="/contact" className="cag-cta-primary-btn">
                                <span>Speak with a Celebrity Ascent cruise specialist</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Celebrityascentcruiseshipguide