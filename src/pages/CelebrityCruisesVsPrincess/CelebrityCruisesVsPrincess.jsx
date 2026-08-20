import Navbar from '../../components/Navbar/Navbar'
import './CelebrityCruisesVsPrincess.css'
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
    Leaf, Shirt, ListChecks, Cpu, Waves, TreePine, Scale,
    MapPinned, PlaneTakeoff, BadgeCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function CvpPlaceholder({ label, className = '' }) {
    return (
        <div className={`cvp-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function CelebrityCruisesVsPrincess() {
    const [cvpActiveFaq, setCvpActiveFaq] = useState(null)
    const cvpToggleFaq = i => setCvpActiveFaq(cvpActiveFaq === i ? null : i)

    const cvpGlanceTable = [
        { category: 'Overall style', celebrity: 'Contemporary and upscale', princess: 'Classic-modern and destination-focused' },
        { category: 'Atmosphere', celebrity: 'Polished, relaxed and sophisticated', princess: 'Relaxed, traditional with modern touches' },
        { category: 'Best suited to', celebrity: 'Couples, adults and travelers seeking a premium feel', princess: 'Couples, families and multigenerational travelers' },
        { category: 'Ship design', celebrity: 'Modern, design-led spaces', princess: 'Traditional cruise layout combined with modern features' },
        { category: 'Dining', celebrity: 'Strong emphasis on specialty and contemporary dining', princess: 'Broad selection of complimentary and specialty dining' },
        { category: 'Entertainment', celebrity: 'Theater productions, live music, lounges and activities', princess: 'Theater shows, live music, movies, activities and destination programming' },
        { category: 'Family appeal', celebrity: 'Family-friendly, with select youth programming', princess: 'Strong family and multigenerational appeal' },
        { category: 'Itineraries', celebrity: 'Caribbean, Europe, Alaska, Asia and other global destinations', princess: 'Caribbean, Alaska, Europe, Asia, Australia and other destinations' },
        { category: 'Private outdoor experience', celebrity: 'Retreat on eligible ships', princess: 'Sanctuary on eligible ships' },
        { category: 'Signature features', celebrity: 'The Retreat, Infinite Veranda on select ships, contemporary design', princess: 'MedallionClass experience, The Sanctuary, destination-focused cruising' },
        { category: 'Cruise style', celebrity: 'Premium contemporary', princess: 'Premium mainstream with classic cruising influences' }
    ]

    const cvpCelebrityShipFeatures = [
        'Contemporary architecture', 'Large open public spaces', 'Modern restaurants and lounges',
        'The Magic Carpet on applicable ships', 'The Retreat suite area', 'Innovative cabin designs on select ships',
        'Resort-style outdoor areas'
    ]

    const cvpPrincessShipFeatures = [
        'Multiple dining venues', 'Main theaters', 'Pools and outdoor decks', 'Lounges and bars',
        'Specialty restaurants', 'Youth and family facilities on applicable ships', 'The Sanctuary on eligible ships',
        'Movies Under the Stars on applicable vessels'
    ]

    const cvpFamiliesChecklist = [
        'Youth and teen facilities on the specific ship', 'Children\u2019s programming', 'Family cabin configurations',
        'Connecting cabin availability', 'Pool facilities', 'Dining flexibility', 'Port schedules',
        'Shore excursion suitability', 'Sea-day activities'
    ]

    const cvpCelebrityCouples = [
        'Sophisticated public spaces', 'Contemporary dining', 'Relaxed evenings', 'Upscale suite accommodations',
        'Modern ship design', 'A less family-centered atmosphere'
    ]

    const cvpPrincessCouples = [
        'Destination-focused cruising', 'Traditional cruise experiences', 'Live entertainment',
        'Variety of onboard activities', 'Romantic dining experiences', 'Longer or more diverse itineraries'
    ]

    const cvpCelebrityDining = ['Main dining restaurants', 'Casual venues', 'Specialty restaurants', 'Caf\u00e9s', 'Suite-exclusive dining options', 'Premium dining experiences']
    const cvpPrincessDining = ['Main dining rooms', 'Casual dining', 'Specialty restaurants', 'International-inspired cuisine', 'Caf\u00e9s and casual food venues', 'Room-service options', 'Suite-related dining benefits on applicable bookings']

    const cvpDrinkConsiderations = [
        'Alcoholic beverages', 'Beer and wine', 'Cocktails', 'Soft drinks', 'Specialty coffees',
        'Bottled or premium water', 'Beverage price limits', 'Gratuities or service charges', 'Package duration', 'Restrictions and exclusions'
    ]

    const cvpCabinTable = [
        { type: 'Interior', celebrity: 'Available', princess: 'Available' },
        { type: 'Ocean View', celebrity: 'Available', princess: 'Available' },
        { type: 'Balcony', celebrity: 'Available', princess: 'Available' },
        { type: 'Suites', celebrity: 'Available', princess: 'Available' },
        { type: 'Premium / specialty accommodations', celebrity: 'Varies by ship', princess: 'Varies by ship' }
    ]

    const cvpCelebrityEntertainment = ['Theater productions', 'Live music', 'Lounges', 'Performances', 'Enrichment activities', 'Pool and deck activities']
    const cvpPrincessEntertainment = ['Theater productions', 'Live music', 'Movies Under the Stars on applicable ships', 'Games and activities', 'Destination programming', 'Enrichment', 'Evening lounges and performances']

    const cvpItineraryRegions = ['Caribbean', 'Alaska', 'Europe', 'Mediterranean', 'Northern Europe', 'Asia', 'Australia and the South Pacific on selected itineraries']

    const cvpItineraryVsShip = [
        'Ports of call', 'Number of sea days', 'Time in each port', 'Embarkation and disembarkation ports',
        'Season', 'Shore excursion options', 'Ship size', 'Cabin location', 'Total cruise cost'
    ]

    const cvpServiceFactors = ['Cabin category', 'Ship', 'Crew', 'Sailing length', 'Itinerary', 'Dining venue', 'Guest volume']

    const cvpRelaxedChecklist = ['Ship size', 'Number of sea days', 'Cabin location', 'Adults-only or restricted-access areas where available', 'Pool deck design', 'Spa facilities', 'Suite category', 'Itinerary']

    const cvpAlaskaChecklist = ['Glacier viewing opportunities', 'Ports included', 'Sailing direction', 'Cruisetour options', 'Time in port', 'Naturalist and destination programming', 'Ship size', 'Balcony availability']

    const cvpValueFactors = ['Cruise fare', 'Taxes and fees', 'Drinks', 'Specialty dining', 'Wi-Fi', 'Shore excursions', 'Transfers', 'Hotel nights', 'Gratuities or service charges', 'Airfare']

    const cvpBudgetMethod = ['Travel dates', 'Number of nights', 'Cabin category', 'Number of travelers', 'Itinerary region', 'Beverage needs', 'Wi-Fi needs', 'Specialty dining plans']

    const cvpChooseCelebrity = ['Contemporary ship design', 'A premium-oriented atmosphere', 'Modern dining concepts', 'Sophisticated public spaces', 'A couples-friendly environment', 'Design-forward ships']
    const cvpChoosePrincess = ['A classic cruise experience with modern features', 'Strong destination programming', 'Broad entertainment choices', 'Multigenerational appeal', 'MedallionClass technology on applicable ships', 'A wide variety of itineraries']

    const cvpDecisionSequence = ['Destination', 'Dates', 'Ship', 'Cabin', 'Total Cost', 'Included Benefits', 'Onboard Style']

    const cvpBookingChecklist = [
        'Compare the exact ships', 'Compare identical or similar itineraries', 'Check the number of sea days',
        'Compare cabin sizes and locations', 'Review included dining', 'Calculate beverage costs',
        'Compare Wi-Fi options', 'Check entertainment and onboard activities', 'Review family facilities if traveling with children',
        'Compare shore excursions', 'Calculate the complete trip cost', 'Check cancellation and booking conditions'
    ]

    const cvpKeyTakeaways = [
        'Celebrity Cruises and Princess Cruises both offer broad global itineraries and premium-oriented cruise experiences.',
        'Celebrity generally emphasizes contemporary design, sophisticated spaces and a modern resort atmosphere.',
        'Princess combines traditional cruising with modern amenities and strong destination-focused experiences.',
        'Celebrity can be particularly appealing to couples and travelers seeking contemporary ship design.',
        'Princess can work especially well for couples, families and multigenerational travelers.',
        'Dining, drinks and cabin options vary by individual ship, so compare the exact vessels.',
        'Princess\u2019s MedallionClass technology is an important differentiator on applicable ships.',
        'The best value comparison should include drinks, Wi-Fi, dining, excursions and other extras\u2014not just the advertised fare.',
        'For Alaska and destination-heavy cruises, itinerary and port time should be major decision factors.',
        'The best choice depends on your preferred ship, itinerary, cabin, onboard atmosphere and overall budget.'
    ]

    const cvpInternalLinks = [
        { text: 'Celebrity Cruises ships guide', url: '/celebrity-cruises/ships/' },
        { text: 'Celebrity Cruises dining guide', url: '/celebrity-cruises/dining' },
        { text: 'Celebrity Cruises drink packages', url: '/celebrity-cruises/drink-packages' },
        { text: 'Celebrity Edge Series ships', url: '/celebrity-cruises/edge-series' },
        { text: 'Celebrity Cruises all-inclusive options', url: '/celebrity-cruises/all-included/' },
        { text: 'Celebrity Cruises FAQs', url: '/celebrity-cruises/faqs' },
        { text: 'Why book Celebrity Cruises with Trips & Ships', url: '/celebrity-cruises/why-book-with-us' },
        { text: 'Celebrity Cruises vs Royal Caribbean', url: '/celebrity-cruises/celebrity-vs-royal-caribbean' }
    ]

    const cvpExternalRefs = [
        { text: 'Celebrity Cruises \u2014 official cruise-line information, ships, itineraries and onboard offerings.' },
        { text: 'Princess Cruises \u2014 official information on ships, destinations, dining and onboard services.' },
        { text: 'Cruise Lines International Association (CLIA) \u2014 industry information and cruise travel resources.' },
        { text: 'U.S. Centers for Disease Control and Prevention (CDC) \u2014 Travelers\u2019 Health \u2014 current cruise and destination health information where applicable.' }
    ]

    const cvpFaqs = [
        { question: 'Is Celebrity Cruises better than Princess Cruises?', answer: 'Neither cruise line is universally better. Celebrity generally emphasizes contemporary design and an upscale atmosphere, while Princess combines traditional cruising with modern amenities and strong destination-focused experiences.' },
        { question: 'What is the main difference between Celebrity and Princess Cruises?', answer: 'Celebrity generally has a more contemporary, design-focused feel, while Princess offers a classic-modern cruise experience with extensive activities, entertainment and destination programming.' },
        { question: 'Is Celebrity or Princess better for couples?', answer: 'Both can be excellent for couples. Celebrity may appeal more to couples seeking a contemporary and sophisticated atmosphere, while Princess offers a broader traditional cruise experience with many entertainment and itinerary choices.' },
        { question: 'Is Celebrity or Princess better for families?', answer: 'Both welcome families, but Princess can be particularly appealing to multigenerational groups. The best option depends on the specific ship\u2019s youth facilities, cabin configuration and onboard activities.' },
        { question: 'Which has better food, Celebrity or Princess?', answer: 'Both offer complimentary and specialty dining. Celebrity emphasizes contemporary dining and upscale restaurant concepts, while Princess provides a broad mix of traditional, casual and specialty venues. Restaurant choices vary by ship.' },
        { question: 'Are Celebrity Cruises more expensive than Princess Cruises?', answer: 'Pricing varies by ship, itinerary, cabin, sailing date and included benefits. Comparing the complete trip cost rather than the initial fare provides a more accurate value comparison.' },
        { question: 'Which has better cruise ships, Celebrity or Princess?', answer: 'Celebrity may appeal to travelers who prefer contemporary architecture and modern design, while Princess can suit travelers who prefer a classic cruise layout combined with modern features. Individual ships should be compared directly.' },
        { question: 'Is Celebrity or Princess better for Alaska cruises?', answer: 'Both offer Alaska cruises. Princess has a strong Alaska presence, while Celebrity offers its own selection of Alaska itineraries. Compare glacier viewing, ports, sailing dates, ship size and balcony options.' },
        { question: 'Does Celebrity or Princess have better entertainment?', answer: 'Both offer theater productions, live music, lounges and daytime activities. Princess often provides a broad traditional cruise entertainment program, while Celebrity tends toward a more contemporary onboard atmosphere.' },
        { question: 'Which cruise line has better cabins, Celebrity or Princess?', answer: 'Both offer interior, ocean-view, balcony and suite accommodations. Celebrity\u2019s newer ships feature contemporary cabin designs, while Princess provides a broad range of traditional cruise accommodation categories.' },
        { question: 'Does Princess have technology that Celebrity Cruises does not?', answer: 'Princess\u2019s MedallionClass technology is a notable feature on applicable ships, providing digital and wearable tools designed to support parts of the onboard experience.' },
        { question: 'Is Celebrity Cruises more upscale than Princess Cruises?', answer: 'Celebrity is positioned around a premium, contemporary experience and often emphasizes modern design and sophisticated spaces. Princess also offers premium experiences but retains more traditional cruise characteristics.' },
        { question: 'Which is better for a first-time cruiser, Celebrity or Princess?', answer: 'Either can work well for a first cruise. Your itinerary, ship size, cabin choice, dining preferences and desired onboard atmosphere are more important than choosing solely by cruise-line name.' },
        { question: 'Should I choose Celebrity or Princess based on the ship or itinerary?', answer: 'For most travelers, both matter, but the itinerary should be a major consideration. Compare the ports, time in destination, sea days and ship before making the final choice.' },
        { question: 'How do I compare the total cost of Celebrity and Princess cruises?', answer: 'Compare the cruise fare plus taxes, drinks, Wi-Fi, specialty dining, excursions, transfers, hotel stays and other expected expenses. Using the same cabin type and similar itinerary makes the comparison more useful.' }
    ]

    const cvpSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess",
                "url": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess",
                "name": "Celebrity Cruises vs. Princess Cruises",
                "description": "Compare Celebrity Cruises and Princess Cruises on ships, dining, cabins, entertainment, itineraries, atmosphere, technology and value.",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                }
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess#article",
                "headline": "Celebrity Cruises vs. Princess Cruises",
                "description": "A practical comparison of Celebrity Cruises and Princess Cruises covering ships, dining, cabins, entertainment, itineraries, atmosphere and value.",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "articleSection": [
                    "Celebrity Cruises vs Princess Cruises",
                    "Ships",
                    "Dining",
                    "Cabins",
                    "Entertainment",
                    "Itineraries",
                    "Value",
                    "Frequently Asked Questions"
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess#faq",
                "mainEntity": [
                    { "@type": "Question", "name": "Is Celebrity Cruises better than Princess Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Neither cruise line is universally better. Celebrity generally emphasizes contemporary design and an upscale atmosphere, while Princess combines traditional cruising with modern amenities and strong destination-focused experiences." } },
                    { "@type": "Question", "name": "What is the main difference between Celebrity and Princess Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity generally has a more contemporary, design-focused feel, while Princess offers a classic-modern cruise experience with extensive activities, entertainment and destination programming." } },
                    { "@type": "Question", "name": "Is Celebrity or Princess better for couples?", "acceptedAnswer": { "@type": "Answer", "text": "Both can be excellent for couples. Celebrity may appeal more to couples seeking a contemporary and sophisticated atmosphere, while Princess offers a broader traditional cruise experience with many entertainment and itinerary choices." } },
                    { "@type": "Question", "name": "Is Celebrity or Princess better for families?", "acceptedAnswer": { "@type": "Answer", "text": "Both welcome families, but Princess can be particularly appealing to multigenerational groups. The best option depends on the specific ship's youth facilities, cabin configuration and onboard activities." } },
                    { "@type": "Question", "name": "Which has better food, Celebrity or Princess?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer complimentary and specialty dining. Celebrity emphasizes contemporary dining and upscale restaurant concepts, while Princess provides a broad mix of traditional, casual and specialty venues. Restaurant choices vary by ship." } },
                    { "@type": "Question", "name": "Are Celebrity Cruises more expensive than Princess Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing varies by ship, itinerary, cabin, sailing date and included benefits. Comparing the complete trip cost rather than the initial fare provides a more accurate value comparison." } },
                    { "@type": "Question", "name": "Which has better cruise ships, Celebrity or Princess?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity may appeal to travelers who prefer contemporary architecture and modern design, while Princess can suit travelers who prefer a classic cruise layout combined with modern features. Individual ships should be compared directly." } },
                    { "@type": "Question", "name": "Is Celebrity or Princess better for Alaska cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer Alaska cruises. Princess has a strong Alaska presence, while Celebrity offers its own selection of Alaska itineraries. Compare glacier viewing, ports, sailing dates, ship size and balcony options." } },
                    { "@type": "Question", "name": "Does Celebrity or Princess have better entertainment?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer theater productions, live music, lounges and daytime activities. Princess often provides a broad traditional cruise entertainment program, while Celebrity tends toward a more contemporary onboard atmosphere." } },
                    { "@type": "Question", "name": "Which cruise line has better cabins, Celebrity or Princess?", "acceptedAnswer": { "@type": "Answer", "text": "Both offer interior, ocean-view, balcony and suite accommodations. Celebrity's newer ships feature contemporary cabin designs, while Princess provides a broad range of traditional cruise accommodation categories." } },
                    { "@type": "Question", "name": "Does Princess have technology that Celebrity Cruises does not?", "acceptedAnswer": { "@type": "Answer", "text": "Princess's MedallionClass technology is a notable feature on applicable ships, providing digital and wearable tools designed to support parts of the onboard experience." } },
                    { "@type": "Question", "name": "Is Celebrity Cruises more upscale than Princess Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity is positioned around a premium, contemporary experience and often emphasizes modern design and sophisticated spaces. Princess also offers premium experiences but retains more traditional cruise characteristics." } },
                    { "@type": "Question", "name": "Which is better for a first-time cruiser, Celebrity or Princess?", "acceptedAnswer": { "@type": "Answer", "text": "Either can work well for a first cruise. Your itinerary, ship size, cabin choice, dining preferences and desired onboard atmosphere are more important than choosing solely by cruise-line name." } },
                    { "@type": "Question", "name": "Should I choose Celebrity or Princess based on the ship or itinerary?", "acceptedAnswer": { "@type": "Answer", "text": "For most travelers, both matter, but the itinerary should be a major consideration. Compare the ports, time in destination, sea days and ship before making the final choice." } },
                    { "@type": "Question", "name": "How do I compare the total cost of Celebrity and Princess cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Compare the cruise fare plus taxes, drinks, Wi-Fi, specialty dining, excursions, transfers, hotel stays and other expected expenses. Using the same cabin type and similar itinerary makes the comparison more useful." } }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Celebrity Cruises vs. Princess Cruises", "item": "https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess" }
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships",
                "url": "https://www.tripsandships.com"
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Celebrity vs Princess Cruises: Key Differences</title>
                <meta name="title" content="Celebrity vs Princess Cruises: Key Differences" />
                <meta name="description" content="Compare Celebrity Cruises vs Princess Cruises on ships, dining, cabins, entertainment, atmosphere, value, itineraries, and which cruise style suits you best." />
                <meta name="keywords" content="Celebrity Cruises vs Princess Cruises, Celebrity vs Princess, Celebrity Cruises or Princess Cruises, Celebrity Cruises comparison, Princess Cruises comparison, Celebrity vs Princess for couples, Celebrity vs Princess dining, Celebrity vs Princess ships" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/celebrity-vs-princess" />
                <script type="application/ld+json">{JSON.stringify(cvpSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="cvp-page">

                {/* \u2500\u2500 HERO \u2500\u2500 */}
                <section className="cvp-hero-section">
                    <CvpPlaceholder label="Celebrity Cruises and Princess Cruises ships compared" className="cvp-hero-bg-placeholder" />
                    <div className="cvp-hero-overlay-layer"></div>
                    <div className="cvp-hero-content-wrapper">
                        <div className="cvp-hero-eyebrow-tag">
                            <Scale size={16} />
                            <span>Cruise Line Comparison \u00b7 Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="cvp-hero-main-title">Celebrity Cruises <br /> vs. Princess Cruises</h1>
                        <p className="cvp-hero-subtitle-text">
                            Choosing between Celebrity Cruises and Princess Cruises often comes down to the kind of cruise experience you want rather than simply which cruise line is better. Both offer premium-oriented cruising, international itineraries, multiple accommodation categories, specialty dining, entertainment, shore excursions, and ships designed for a broad range of travelers.
                        </p>
                    </div>
                </section>

                {/* ── AT A GLANCE (BG 1: WHITE) ── */}
                <section className="cvp-glance-section">
                    <div className="cvp-glance-container">
                        <div className="cvp-glance-grid">
                            {/* LEFT: heading + intro + note */}
                            <div className="cvp-glance-text-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>SIDE BY SIDE</span>
                                <h2 className="cvp-section-heading">Celebrity Cruises vs Princess Cruises at a Glance</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-glance-lead">
                                    The biggest distinction is in the overall style. Celebrity Cruises generally emphasizes contemporary design, upscale dining, modern spaces, and a more polished resort-like atmosphere. Princess Cruises combines traditional cruise elements with contemporary amenities, a strong destination focus, varied entertainment, and a broad appeal to couples, families, and multigenerational travelers.
                                </p>
                                <p className="cvp-glance-lead">
                                    This guide compares Celebrity and Princess across the areas that matter most when choosing a cruise, including ships, cabins, dining, drinks, entertainment, activities, itineraries, service style, and value.
                                </p>
                                <div className="cvp-glance-note">
                                    <Info size={16} className="cvp-glance-note-icon" />
                                    <p>Exact amenities, venues and services vary by ship, sailing and itinerary.</p>
                                </div>
                            </div>

                            {/* RIGHT: comparison table */}
                            <div className="cvp-glance-table-col">
                                <div className="cvp-table-wrapper">
                                    <div className="cvp-table-row cvp-table-head cvp-table-three-col">
                                        <span>Category</span>
                                        <span>Celebrity Cruises</span>
                                        <span>Princess Cruises</span>
                                    </div>
                                    {cvpGlanceTable.map((row, idx) => (
                                        <div key={idx} className="cvp-table-row cvp-table-three-col">
                                            <span data-label="Category" className="cvp-table-category">{row.category}</span>
                                            <span data-label="Celebrity Cruises">{row.celebrity}</span>
                                            <span data-label="Princess Cruises">{row.princess}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MAIN DIFFERENCE (BG 2: E3EBF5) ── */}
                <section className="cvp-difference-section">
                    <div className="cvp-difference-container">
                        <div className="cvp-difference-grid">
                            {/* LEFT: image + note */}
                            <div className="cvp-difference-image-col">
                                <div className="cvp-image-frame">
                                    <CvpPlaceholder label="Celebrity Cruises vs Princess Cruises atmosphere comparison" />
                                    <div className="cvp-frame-overlay"></div>
                                </div>
                                <div className="cvp-difference-statement-box">
                                    <Info className="cvp-difference-statement-icon" size={20} />
                                    <p className="cvp-difference-statement-text">Neither approach is universally better. The right choice depends on whether you prefer a more contemporary premium environment or a classic cruise experience with modern conveniences.</p>
                                </div>
                            </div>

                            {/* RIGHT: text + cards */}
                            <div className="cvp-difference-text-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>THE CORE DISTINCTION</span>
                                <h2 className="cvp-section-heading">What Is the Main Difference Between Celebrity and Princess?</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvp-difference-text">The simplest way to distinguish the two is cruise atmosphere and design philosophy.</p>

                                <div className="cvp-difference-cards">
                                    <div className="cvp-difference-card">
                                        <div className="cvp-difference-card-label"><Sparkles size={15} /> Celebrity</div>
                                        <p>Contemporary architecture, upscale public spaces, sophisticated dining concepts and a modern resort feel. Its Edge Series is particularly notable for design-forward spaces and innovative features.</p>
                                    </div>
                                    <div className="cvp-difference-card">
                                        <div className="cvp-difference-card-label"><Compass size={15} /> Princess</div>
                                        <p>Traditional cruise experience with modern technology and contemporary venues. Particularly associated with destination-focused itineraries, MedallionClass technology and a wide selection of activities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SHIPS & FLEET STYLE (BG 3: 0F1C2E) ── */}
                <section className="cvp-ships-section">
                    <div className="cvp-ships-container">
                        <div className="cvp-ships-header">
                            <span className="cvp-eyebrow cvp-eyebrow-light cvp-eyebrow-center">FLEET COMPARISON</span>
                            <h2 className="cvp-section-heading cvp-white-heading" style={{ textAlign: 'center' }}>Celebrity vs Princess: <br /> Ships and Fleet Style</h2>
                            <div className="cvp-heading-separator-bar cvp-bar-centered cvp-separator-white"></div>
                            <p className="cvp-ships-intro" style={{ color: 'rgba(255,255,255,0.85)' }}>Both cruise lines operate multiple ship classes, so the experience can differ significantly from one vessel to another.</p>
                        </div>

                        <div className="cvp-image-pair" style={{ marginBottom: '28px' }}>
                            <div className="cvp-image-frame">
                                <CvpPlaceholder label="Modern interior and public spaces aboard a Celebrity cruise ship" />
                                <div className="cvp-frame-overlay"></div>
                            </div>
                            <div className="cvp-image-frame">
                                <CvpPlaceholder label="Princess Cruises cruise ship sailing at sea" />
                                <div className="cvp-frame-overlay"></div>
                            </div>
                        </div>

                        <div className="cvp-compare-columns">
                            <div className="cvp-compare-col">
                                <div className="cvp-compare-col-header">
                                    <Ship size={18} />
                                    <h3>Celebrity Cruises Ships</h3>
                                </div>
                                <p className="cvp-compare-col-lead">Celebrity's fleet includes the recognizable Edge Series — emphasizing:</p>
                                <div className="cvp-compare-list">
                                    {cvpCelebrityShipFeatures.map((item, idx) => (
                                        <div key={idx} className="cvp-compare-list-item">
                                            <CheckCircle size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvp-compare-col-note">Other Celebrity ships have their own layouts — compare the specific vessel before booking.</p>
                            </div>
                            <div className="cvp-compare-col">
                                <div className="cvp-compare-col-header">
                                    <Ship size={18} />
                                    <h3>Princess Cruises Ships</h3>
                                </div>
                                <p className="cvp-compare-col-lead">Princess operates multiple classes including MedallionClass-equipped vessels. Ships commonly feature:</p>
                                <div className="cvp-compare-list">
                                    {cvpPrincessShipFeatures.map((item, idx) => (
                                        <div key={idx} className="cvp-compare-list-item">
                                            <CheckCircle size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="cvp-ships-choice-box">
                            <h4>Which Has Better Ships?</h4>
                            <p>The answer depends on what you want from the ship.</p>
                            <div className="cvp-ships-choice-item"><Sparkles size={15} /><span><strong>Choose Celebrity if you prioritize:</strong> contemporary design, upscale spaces, modern architecture and a refined resort atmosphere.</span></div>
                            <div className="cvp-ships-choice-item"><Compass size={15} /><span><strong>Choose Princess if you prioritize:</strong> traditional cruise elements, destination programming and broad onboard activities.</span></div>
                            <p className="cvp-ships-choice-footer">Always check the individual ship before booking — sister ships can still have meaningful differences.</p>
                        </div>
                    </div>
                </section>

                {/* ── COUPLES (BG 1: WHITE) ── */}
                <section className="cvp-couples-section">
                    <div className="cvp-couples-container">
                        <div className="cvp-couples-grid">
                            {/* LEFT: banner + note */}
                            <div className="cvp-couples-left-col">
                                <div className="cvp-section-banner">
                                    <CvpPlaceholder label="Celebrity cruise romantic dining and evening ambiance" />
                                    <div className="cvp-section-banner-badge">
                                        <Heart size={14} />
                                        <span>Romance at Sea</span>
                                    </div>
                                </div>
                                <div className="cvp-couples-note">
                                    <Info size={16} className="cvp-couples-note-icon" />
                                    <p>For a honeymoon, anniversary or couples' getaway, compare the specific ship, cabin category and itinerary rather than choosing solely by cruise line.</p>
                                </div>
                            </div>

                            {/* RIGHT: text + comparison cards */}
                            <div className="cvp-couples-right-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>ROMANCE ONBOARD</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess for Couples</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvp-couples-lead">Both lines can work very well for couples, but the atmosphere differs.</p>

                                <div className="cvp-compare-columns-stacked">
                                    <div className="cvp-compare-col cvp-compare-col-bordered">
                                        <div className="cvp-compare-col-header">
                                            <Heart size={18} />
                                            <h3>Celebrity Cruises</h3>
                                        </div>
                                        <div className="cvp-compare-list">
                                            {cvpCelebrityCouples.map((item, idx) => (
                                                <div key={idx} className="cvp-compare-list-item">
                                                    <CheckCircle size={14} style={{ color: 'var(--cvp-navy)' }} />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="cvp-compare-col cvp-compare-col-bordered">
                                        <div className="cvp-compare-col-header">
                                            <Heart size={18} />
                                            <h3>Princess Cruises</h3>
                                        </div>
                                        <div className="cvp-compare-list">
                                            {cvpPrincessCouples.map((item, idx) => (
                                                <div key={idx} className="cvp-compare-list-item">
                                                    <CheckCircle size={14} style={{ color: 'var(--cvp-navy)' }} />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FAMILIES (BG 2: E3EBF5) ── */}
                <section className="cvp-families-section">
                    <div className="cvp-families-container">
                        <div className="cvp-families-split-grid">
                            <div className="cvp-families-text-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>MULTIGENERATIONAL TRAVEL</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess for Families</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-families-lead">Both cruise lines welcome families, but their family offerings and onboard atmosphere can differ by ship.</p>
                                <p className="cvp-families-sub" style={{ marginBottom: '14px' }}>Princess can be attractive for multigenerational groups because its ships offer a mixture of entertainment, dining, activities and accommodations suitable for different age groups.</p>
                                <p className="cvp-families-sub" style={{ marginBottom: '0' }}>Celebrity also provides family-oriented facilities and youth programming on applicable ships, but its overall brand positioning tends to emphasize a more upscale and contemporary experience.</p>
                            </div>
                            <div className="cvp-families-checklist-col">
                                <div className="cvp-section-banner" style={{ marginBottom: '20px' }}>
                                    <CvpPlaceholder label="Family cruising on Celebrity and Princess" />
                                    <div className="cvp-section-banner-badge">
                                        <Users size={14} />
                                        <span>Family Cruising</span>
                                    </div>
                                </div>
                                <p className="cvp-families-checklist-label">What Families Should Compare Before Booking</p>
                                <div className="cvp-checklist-grid">
                                    {cvpFamiliesChecklist.map((item, idx) => (
                                        <div key={idx} className="cvp-checklist-item">
                                            <Users size={14} style={{ color: 'var(--cvp-navy)' }} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="cvp-families-note-card">
                                    <Info size={16} className="cvp-families-note-icon" />
                                    <p>For families, the ship and itinerary can matter more than the brand name.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DINING (BG 3: 0F1C2E) ── */}
                <section className="cvp-dining-section">
                    <div className="cvp-dining-container">
                        <div className="cvp-dining-header">
                            <span className="cvp-eyebrow cvp-eyebrow-light cvp-eyebrow-center">ONBOARD DINING</span>
                            <h2 className="cvp-section-heading cvp-white-heading" style={{ textAlign: 'center' }}>Celebrity vs Princess for Dining</h2>
                            <div className="cvp-heading-separator-bar cvp-bar-centered cvp-separator-white"></div>
                            <p className="cvp-dining-intro" style={{ color: '#ffffff' }}>Dining is an important difference to consider because both cruise lines combine complimentary dining with specialty restaurants.</p>
                        </div>

                        <div className="cvp-compare-columns">
                            <div className="cvp-compare-col cvp-compare-col-dark">
                                <div className="cvp-compare-col-image">
                                    <CvpPlaceholder label="Celebrity main dining room and specialty restaurants" />
                                </div>
                                <div className="cvp-compare-col-header">
                                    <Utensils size={20} />
                                    <h3>Celebrity Dining</h3>
                                </div>
                                <p className="cvp-compare-col-lead-dark">Celebrity places significant emphasis on contemporary dining and specialty restaurant concepts. Depending on the ship, travelers may find:</p>
                                <div className="cvp-compare-list">
                                    {cvpCelebrityDining.map((item, idx) => (
                                        <div key={idx} className="cvp-compare-list-item cvp-compare-list-item-dark">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvp-compare-col-note-dark">The exact restaurant lineup varies considerably by ship.</p>
                            </div>
                            <div className="cvp-compare-col cvp-compare-col-dark">
                                <div className="cvp-compare-col-image">
                                    <CvpPlaceholder label="Princess main dining rooms and buffet venues" />
                                </div>
                                <div className="cvp-compare-col-header">
                                    <Utensils size={20} />
                                    <h3>Princess Dining</h3>
                                </div>
                                <p className="cvp-compare-col-lead-dark">Princess offers a broad dining program that can include:</p>
                                <div className="cvp-compare-list">
                                    {cvpPrincessDining.map((item, idx) => (
                                        <div key={idx} className="cvp-compare-list-item cvp-compare-list-item-dark">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="cvp-dining-food-box">
                            <h4>Which Is Better for Food?</h4>
                            <p>Celebrity may appeal more to travelers who prioritize modern restaurant design and an upscale dining atmosphere.</p>
                            <p>Princess may be better suited to travelers who value variety, traditional cruise dining and a broad selection of venues.</p>
                            <p className="cvp-dining-food-note">Because restaurant lineups change by ship, compare the actual dining venues on your chosen vessel before booking.</p>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 DRINK PACKAGES (BG 1: WHITE) \u2500\u2500 */}
                <section className="cvp-drinks-section">
                    <div className="cvp-drinks-container">
                        <div className="cvp-drinks-split-grid">
                            <div className="cvp-drinks-image-col">
                                <div className="cvp-section-banner cvp-drinks-image">
                                    <CvpPlaceholder label="Celebrity and Princess onboard bars and beverage venues" />
                                    <div className="cvp-section-banner-badge">
                                        <Wine size={14} />
                                        <span>Drink Packages</span>
                                    </div>
                                </div>
                                <div className="cvp-drinks-note-box">
                                    <Info size={16} className="cvp-drinks-note-icon" />
                                    <p>Do not compare package prices alone. Calculate how much you expect to drink each day and check the current package terms for your sailing. A package can be more useful for travelers who regularly purchase premium beverages, while occasional drinkers may find paying individually more economical.</p>
                                </div>
                            </div>
                            <div className="cvp-drinks-content-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>BEVERAGE PROGRAMS</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess Drink Packages</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-drinks-lead">Both cruise lines offer beverage packages, but inclusions, pricing and package structures can change. Common considerations include:</p>

                                <div className="cvp-pill-grid">
                                    {cvpDrinkConsiderations.map((item, idx) => (
                                        <div key={idx} className="cvp-pill-item">
                                            <Wine size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 CABINS (BG 2: E3EBF5) \u2500\u2500 */}
                <section className="cvp-cabins-section">
                    <div className="cvp-cabins-container">
                        <span className="cvp-eyebrow cvp-eyebrow-center">ACCOMMODATIONS</span>
                        <h2 className="cvp-section-heading" style={{ textAlign: 'center' }}>Celebrity vs Princess Cabins</h2>
                        <div className="cvp-heading-separator-bar cvp-bar-centered"></div>
                        <p className="cvp-cabins-lead">Both cruise lines offer a range of accommodation categories.</p>

                        <div className="cvp-table-wrapper">
                            <div className="cvp-table-row cvp-table-head cvp-table-three-col">
                                <span>Cabin Type</span>
                                <span>Celebrity</span>
                                <span>Princess</span>
                            </div>
                            {cvpCabinTable.map((row, idx) => (
                                <div key={idx} className="cvp-table-row cvp-table-three-col">
                                    <span data-label="Cabin Type" className="cvp-table-category">{row.type}</span>
                                    <span data-label="Celebrity">{row.celebrity}</span>
                                    <span data-label="Princess">{row.princess}</span>
                                </div>
                            ))}
                        </div>

                        <p className="cvp-cabins-sub">Celebrity's newer ships include innovative cabin designs, while Princess offers several balcony and suite configurations across its fleet.</p>

                        <div className="cvp-cabins-split-grid">
                            <div className="cvp-cabins-image-col">
                                <div className="cvp-section-banner cvp-cabins-image">
                                    <CvpPlaceholder label="Celebrity and Princess cruise balcony cabin comparison" />
                                    <div className="cvp-section-banner-badge">
                                        <Bed size={14} />
                                        <span>Cabins</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-cabins-choice-col">
                                <div className="cvp-cabins-choice-box">
                                    <h4>Which Has Better Cabins?</h4>
                                    <p>Celebrity may appeal to travelers who prioritize modern cabin design and contemporary styling.</p>
                                    <p>Princess can be attractive to travelers who want traditional cruise accommodations with a broad selection of cabin categories.</p>
                                    <p className="cvp-cabins-choice-note">The best cabin is often determined by location rather than brand. Consider proximity to elevators, restaurants, pools, theaters and other high-traffic areas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 ENTERTAINMENT (BG 3: 0F1C2E) \u2500\u2500 */}
                <section className="cvp-entertainment-section">
                    <div className="cvp-entertainment-container">
                        <div className="cvp-entertainment-split-grid">
                            <div className="cvp-entertainment-image-col">
                                <div className="cvp-section-banner cvp-section-banner-dark cvp-entertainment-image">
                                    <CvpPlaceholder label="Celebrity and Princess theater shows and live entertainment" />
                                    <div className="cvp-section-banner-badge">
                                        <Music size={14} />
                                        <span>Entertainment</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-entertainment-content-col">
                                <span className="cvp-eyebrow cvp-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>ONBOARD PROGRAMMING</span>
                                <h2 className="cvp-section-heading cvp-white-heading">Celebrity vs Princess: Entertainment</h2>
                                <div className="cvp-heading-separator-bar cvp-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-entertainment-intro" style={{ color: '#ffffff' }}>Both cruise lines provide evening entertainment, live music, theater productions and daytime activities.</p>
                            </div>
                        </div>

                        <div className="cvp-compare-columns">
                            <div className="cvp-compare-col cvp-compare-col-dark">
                                <div className="cvp-compare-col-header">
                                    <Music size={20} />
                                    <h3>Celebrity Leans Sophisticated</h3>
                                </div>
                                <div className="cvp-compare-list">
                                    {cvpCelebrityEntertainment.map((item, idx) => (
                                        <div key={idx} className="cvp-compare-list-item cvp-compare-list-item-dark">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="cvp-compare-col cvp-compare-col-dark">
                                <div className="cvp-compare-col-header">
                                    <Music size={20} />
                                    <h3>Princess Offers a Broad Program</h3>
                                </div>
                                <div className="cvp-compare-list">
                                    {cvpPrincessEntertainment.map((item, idx) => (
                                        <div key={idx} className="cvp-compare-list-item cvp-compare-list-item-dark">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="cvp-entertainment-footer">If entertainment is a major booking factor, review the current program for your exact ship and sailing.</p>
                    </div>
                </section>

                {/* \u2500\u2500 ITINERARIES (BG 1: WHITE) \u2500\u2500 */}
                <section className="cvp-itineraries-section">
                    <div className="cvp-itineraries-container">
                        <div className="cvp-itineraries-split-grid">
                            <div className="cvp-itineraries-image-col">
                                <div className="cvp-section-banner cvp-itineraries-image">
                                    <CvpPlaceholder label="Celebrity and Princess cruise destinations and itineraries" />
                                    <div className="cvp-section-banner-badge">
                                        <MapPin size={14} />
                                        <span>Itineraries</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-itineraries-content-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>WHERE YOU'LL SAIL</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess: Itineraries</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-itineraries-lead">Both cruise lines sail to numerous regions, including popular destinations in:</p>

                                <div className="cvp-pill-grid">
                                    {cvpItineraryRegions.map((item, idx) => (
                                        <div key={idx} className="cvp-pill-item">
                                            <MapPin size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="cvp-itineraries-mid">Princess has a particularly strong reputation for destination-focused cruising and Alaska itineraries, while Celebrity offers extensive global itineraries combined with its contemporary onboard experience.</p>

                        <div className="cvp-itineraries-matter-box">
                            <h4>What Matters More: Cruise Line or Itinerary?</h4>
                            <p>For destination-focused travelers, the itinerary should usually be one of the first factors considered. Compare:</p>
                            <div className="cvp-checklist-grid">
                                {cvpItineraryVsShip.map((item, idx) => (
                                    <div key={idx} className="cvp-checklist-item">
                                        <MapPinned size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="cvp-itineraries-footer">A great ship cannot compensate for an itinerary that does not match your travel priorities.</p>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 SERVICE & ATMOSPHERE (BG 2: E3EBF5) \u2500\u2500 */}
                <section className="cvp-service-section">
                    <div className="cvp-service-container">
                        <div className="cvp-service-split-grid">
                            <div className="cvp-service-text-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>ONBOARD FEEL</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess: Service and Atmosphere</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-service-lead">Celebrity generally positions itself around a premium, contemporary experience, with an emphasis on polished spaces and hospitality.</p>
                                <p className="cvp-service-sub">Princess combines traditional cruise hospitality with modern technology and a broad range of onboard experiences.</p>
                            </div>
                            <div className="cvp-service-list-col">
                                <div className="cvp-service-card">
                                    <p className="cvp-service-list-label">Your Perception of Service Can Also Depend On</p>
                                    <div className="cvp-checklist-grid">
                                        {cvpServiceFactors.map((item, idx) => (
                                            <div key={idx} className="cvp-checklist-item">
                                                <BadgeCheck size={16} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="cvp-service-footer">For that reason, it is useful to compare the exact ships rather than treating the two brands as completely uniform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 TECHNOLOGY (BG 3: 0F1C2E) \u2500\u2500 */}
                <section className="cvp-tech-section">
                    <div className="cvp-tech-container">
                        <div className="cvp-tech-split-grid">
                            <div className="cvp-tech-image-col">
                                <div className="cvp-section-banner cvp-section-banner-dark cvp-tech-image">
                                    <CvpPlaceholder label="Princess MedallionClass wearable technology" />
                                    <div className="cvp-section-banner-badge">
                                        <Cpu size={14} />
                                        <span>Digital Experience</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-tech-content-col">
                                <div className="cvp-tech-icon"><Cpu size={26} /></div>
                                <span className="cvp-eyebrow cvp-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>DIGITAL EXPERIENCE</span>
                                <h2 className="cvp-section-heading cvp-white-heading">Celebrity vs Princess: Technology</h2>
                                <div className="cvp-heading-separator-bar cvp-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-tech-text" style={{ color: '#ffffff' }}>One of the clearest technology differences is Princess's MedallionClass ecosystem on applicable ships. It is designed to streamline parts of the cruise experience through wearable or app-based technology.</p>
                                <p className="cvp-tech-text" style={{ color: '#ffffff' }}>Celebrity also uses digital tools for areas such as reservations, onboard information and cruise management, but its identity is more strongly associated with ship design and hospitality than with a single signature wearable technology platform.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 WHICH IS MORE RELAXED (BG 1: WHITE) \u2500\u2500 */}
                <section className="cvp-relaxed-section">
                    <div className="cvp-relaxed-container">
                        <div className="cvp-relaxed-split-grid">
                            <div className="cvp-relaxed-image-col">
                                <div className="cvp-section-banner cvp-relaxed-image">
                                    <CvpPlaceholder label="Relaxed pool deck atmosphere on Celebrity and Princess" />
                                    <div className="cvp-section-banner-badge">
                                        <Waves size={14} />
                                        <span>Pace & Mood</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-relaxed-content-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>PACE & MOOD</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess: Which Is More Relaxed?</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-relaxed-text">Celebrity often suits travelers who want a quieter, contemporary and sophisticated environment.</p>
                                <p className="cvp-relaxed-text">Princess can also provide a relaxed experience, but its traditional cruise structure and wide activity selection can create a somewhat more varied onboard rhythm.</p>
                                <p className="cvp-relaxed-sub-label">If your priority is simply relaxing, consider:</p>
                                <div className="cvp-checklist-grid">
                                    {cvpRelaxedChecklist.map((item, idx) => (
                                        <div key={idx} className="cvp-checklist-item">
                                            <Waves size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 ALASKA (BG 2: E3EBF5) \u2500\u2500 */}
                <section className="cvp-alaska-section">
                    <div className="cvp-alaska-container">
                        <div className="cvp-alaska-split-grid">
                            <div className="cvp-alaska-image-col">
                                <div className="cvp-section-banner cvp-alaska-image">
                                    <CvpPlaceholder label="Alaska scenery viewed from a cruise ship balcony" />
                                    <div className="cvp-section-banner-badge">
                                        <TreePine size={14} />
                                        <span>Alaska</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-alaska-text-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>DESTINATION FOCUS</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess for Alaska Cruises</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-alaska-lead">Alaska is a destination where itinerary planning matters considerably. When comparing the two, look at:</p>
                                <div className="cvp-checklist-grid">
                                    {cvpAlaskaChecklist.map((item, idx) => (
                                        <div key={idx} className="cvp-checklist-item">
                                            <TreePine size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="cvp-alaska-sub">A balcony can be especially useful on scenic sailings, although the best choice depends on itinerary and budget.</p>
                                <p className="cvp-alaska-footer">Princess has a long-established presence in Alaska, while Celebrity also offers Alaska cruises with its own ship and itinerary mix.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 VALUE FOR MONEY (BG 3: 0F1C2E) \u2500\u2500 */}
                <section className="cvp-value-section">
                    <div className="cvp-value-container">
                        <div className="cvp-value-split-grid">
                            <div className="cvp-value-image-col">
                                <div className="cvp-section-banner cvp-section-banner-dark cvp-value-image">
                                    <CvpPlaceholder label="Celebrity and Princess cruise fare comparison" />
                                    <div className="cvp-section-banner-badge">
                                        <DollarSign size={14} />
                                        <span>Smart Value</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cvp-value-content-col">
                                <span className="cvp-eyebrow cvp-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>BUDGETING SMART</span>
                                <h2 className="cvp-section-heading cvp-white-heading">Celebrity vs Princess: Value for Money</h2>
                                <div className="cvp-heading-separator-bar cvp-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="cvp-value-intro" style={{ color: '#ffffff' }}>The cheapest headline cruise fare is not necessarily the lowest overall cost. Compare the total trip price, including:</p>
                                <div className="cvp-pill-grid">
                                    {cvpValueFactors.map((item, idx) => (
                                        <div key={idx} className="cvp-pill-item cvp-pill-item-dark">
                                            <DollarSign size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="cvp-value-mid" style={{ color: '#ffffff' }}>A higher initial fare can represent better value if it includes benefits you would otherwise purchase separately.</p>

                        <div className="cvp-value-method-box">
                            <h4>A Simple Comparison Method</h4>
                            <p>Create a side-by-side budget for the exact same:</p>
                            <div className="cvp-checklist-grid">
                                {cvpBudgetMethod.map((item, idx) => (
                                    <div key={idx} className="cvp-checklist-item cvp-checklist-item-dark">
                                        <ListChecks size={16} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="cvp-value-method-footer">This gives you a much more useful comparison than comparing advertised fares alone.</p>
                        </div>
                    </div>
                </section>

                {/* ── WHICH CRUISE LINE SHOULD YOU CHOOSE (BG 1: WHITE) ── */}
                <section className="cvp-choose-section">
                    <div className="cvp-choose-container">
                        <div className="cvp-choose-grid">
                            {/* LEFT: heading + intro */}
                            <div className="cvp-choose-text-col">
                                <span className="cvp-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>DECISION TIME</span>
                                <h2 className="cvp-section-heading">Celebrity vs Princess: Which Cruise Line Should You Choose?</h2>
                                <div className="cvp-heading-separator-bar" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvp-choose-lead">Your ideal cruise line depends on what matters most to you onboard. Use the guides below to match your preferences to the right brand.</p>
                            </div>

                            {/* RIGHT: two comparison cards stacked */}
                            <div className="cvp-choose-cards-col">
                                <div className="cvp-choose-card">
                                    <div className="cvp-choose-card-header">
                                        <Crown size={16} />
                                        <span>Celebrity May Be a Better Fit If You Want</span>
                                    </div>
                                    <div className="cvp-choice-grid-light">
                                        {cvpChooseCelebrity.map((item, idx) => (
                                            <div key={idx} className="cvp-choice-card-light">
                                                <CheckCircle size={14} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="cvp-choose-card">
                                    <div className="cvp-choose-card-header">
                                        <Anchor size={16} />
                                        <span>Princess May Be a Better Fit If You Want</span>
                                    </div>
                                    <div className="cvp-choice-grid-light">
                                        {cvpChoosePrincess.map((item, idx) => (
                                            <div key={idx} className="cvp-choice-card-light">
                                                <CheckCircle size={14} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 IF STILL UNSURE (BG 2: E3EBF5) \u2500\u2500 */}
                <section className="cvp-unsure-section">
                    <div className="cvp-unsure-container">
                        <span className="cvp-eyebrow cvp-eyebrow-center">A SIMPLE FRAMEWORK</span>
                        <h2 className="cvp-section-heading" style={{ textAlign: 'center' }}>If You Are Still Unsure</h2>
                        <div className="cvp-heading-separator-bar cvp-bar-centered"></div>
                        <p className="cvp-unsure-text">Start with the itinerary and ship rather than the cruise brand. A useful decision sequence is:</p>

                        <div className="cvp-sequence-row">
                            {cvpDecisionSequence.map((step, idx) => (
                                <div key={idx} className="cvp-sequence-item-wrap">
                                    <div className="cvp-sequence-item">{step}</div>
                                    {idx < cvpDecisionSequence.length - 1 && <ArrowRight size={16} className="cvp-sequence-arrow" />}
                                </div>
                            ))}
                        </div>

                        <p className="cvp-unsure-footer">This approach helps prevent a brand-level comparison from overshadowing the factors that will actually affect your vacation.</p>
                    </div>
                </section>

                {/* \u2500\u2500 CHECKLIST BEFORE BOOKING (BG 3: 0F1C2E) \u2500\u2500 */}
                <section className="cvp-checklist-section">
                    <div className="cvp-checklist-container">
                        <div className="cvp-checklist-header">
                            <span className="cvp-eyebrow cvp-eyebrow-light cvp-eyebrow-center">FINAL PREP</span>
                            <h2 className="cvp-section-heading cvp-white-heading" style={{ textAlign: 'center' }}>How to Compare a Celebrity and <br /> Princess Cruise Before Booking</h2>
                            <div className="cvp-heading-separator-bar cvp-bar-centered cvp-separator-white"></div>
                            <p className="cvp-checklist-intro" style={{ color: '#ffffff' }}>Use this checklist:</p>
                        </div>
                        <div className="cvp-booking-grid">
                            {cvpBookingChecklist.map((item, idx) => (
                                <div key={idx} className="cvp-booking-card">
                                    <div className="cvp-booking-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="cvp-checklist-footer">This makes the comparison more meaningful than simply asking whether Celebrity or Princess is "better."</p>
                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT (BG 2: E3EBF5) ── */}
                <section className="cvp-expert-section">
                    <div className="cvp-expert-container">

                        <div className="cvp-expert-portrait-panel">
                            <div className="cvp-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="cvp-expert-stats-strip">
                                <div className="cvp-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="cvp-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="cvp-expert-content-panel">
                            <span className="cvp-eyebrow cvp-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="cvp-section-heading">Insight from Angela Hughes</h2>
                            <div className="cvp-heading-separator-bar"></div>

                            <p className="cvp-expert-quote">
                                &ldquo;Clients rarely need me to tell them Celebrity or Princess is the 'better' line. What they need is help matching the actual ship and itinerary to how they want to feel on vacation, contemporary and polished, or classic and destination-driven.&rdquo;
                            </p>

                            <div className="cvp-expert-priorities">
                                <h5>Comparison Prioritization Matrix:</h5>
                                <div className="cvp-expert-pills">
                                    {['Match Atmosphere First', 'Compare Exact Ships', 'Itinerary Over Brand', 'Total Trip Cost', 'Cabin Location Matters', 'Confirm Sailing-Specific Details'].map(pill => (
                                        <span key={pill} className="cvp-expert-pill">
                                            <Scale size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="cvp-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom itinerary planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── KEY TAKEAWAYS (BG 3: 0F1C2E) ── */}
                <section className="cvp-takeaway-section">
                    <div className="cvp-takeaway-container">
                        <div className="cvp-takeaway-split">
                            {/* LEFT: sticky heading */}
                            <div className="cvp-takeaway-text-col">
                                <span className="cvp-eyebrow cvp-eyebrow-light" style={{ marginLeft: 0, marginRight: 0 }}>SUMMARY</span>
                                <h2 className="cvp-section-heading cvp-white-heading">Key Takeaways</h2>
                                <div className="cvp-heading-separator-bar cvp-separator-white" style={{ margin: '0 0 18px 0' }}></div>
                                <p className="cvp-takeaway-lead">Everything you need to know before choosing between Celebrity Cruises and Princess Cruises.</p>
                            </div>

                            {/* RIGHT: 2-col numbered cards */}
                            <div className="cvp-takeaway-cards-col">
                                <div className="cvp-takeaway-grid">
                                    {cvpKeyTakeaways.map((item, idx) => (
                                        <div key={idx} className="cvp-takeaway-card">
                                            <div className="cvp-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                            <span className="cvp-takeaway-label">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 FAQ (BG 1: WHITE) \u2500\u2500 */}
                <section className="cvp-faq-section">
                    <div className="cvp-faq-container">
                        <div className="cvp-faq-header">
                            <span className="cvp-eyebrow cvp-eyebrow-center">QUESTIONS BEFORE YOU BOOK</span>
                            <h2 className="cvp-section-heading">Frequently Asked Questions</h2>
                            <div className="cvp-heading-separator-bar cvp-bar-centered"></div>
                        </div>
                        <div className="cvp-faq-list-wrapper">
                            {cvpFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="cvp-faq-item"
                                    onClick={() => cvpToggleFaq(index)}
                                >
                                    <div className="cvp-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="cvp-faq-toggle-icon">{cvpActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {cvpActiveFaq === index && (
                                        <p className="cvp-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* \u2500\u2500 CTA \u2500\u2500 */}
                <section className="cvp-cta-section">
                    <div className="cvp-cta-aurora-glow"></div>
                    <div className="cvp-cta-crystal cvp-cta-crystal-1"></div>
                    <div className="cvp-cta-crystal cvp-cta-crystal-2"></div>
                    <div className="cvp-cta-crystal cvp-cta-crystal-3"></div>
                    <div className="cvp-cta-grid-lines"></div>

                    <div className="cvp-cta-content">
                        <div className="cvp-cta-compass-ring">
                            <Scale size={28} />
                        </div>
                        <span className="cvp-cta-eyebrow">FIND YOUR PERFECT FIT</span>
                        <h2 className="cvp-cta-title">Planning a Celebrity or <br /> Princess Cruise?</h2>
                        <div className="cvp-cta-bar"></div>
                        <p className="cvp-cta-subtitle">
                            Compare the ship, itinerary, cabin category and total trip cost before booking. Explore the Celebrity Cruises guides on Trips &amp; Ships to narrow down your options and choose the sailing that best matches your travel style.
                        </p>
                        <div className="cvp-cta-actions">
                            <Link to="/contact" className="cvp-cta-primary-btn">
                                <span>Speak with a Trips &amp; Ships cruise specialist</span>
                                <ArrowRight size={18} className="cvp-cta-btn-arrow" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CelebrityCruisesVsPrincess