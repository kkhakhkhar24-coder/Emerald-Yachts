// WhyBookCelebrityWithTripsAndShips.jsx
import Navbar from '../../components/Navbar/Navbar'
import './WhyBookCelebrityWithTripsAndShips.css'
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
    Leaf, Shirt, ListChecks, Building, Plane, Hotel, Car, Briefcase,
    CreditCard, Map, Luggage, Ticket, ShipWheel, Anchor as AnchorIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function WbcPlaceholder({ label, className = '' }) {
    return (
        <div className={`wbc-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function WhyBookCelebrityWithTripsAndShips() {
    const [wbcActiveFaq, setWbcActiveFaq] = useState(null)
    const wbcToggleFaq = i => setWbcActiveFaq(wbcActiveFaq === i ? null : i)

    const wbcWhyBookItems = [
        'Stateroom, fare type, dining preferences, beverage options, Wi-Fi, itinerary, flights, transfers, and pre- and post-cruise plans can all affect the overall experience and cost.',
        'Trips & Ships is designed to make the Celebrity Cruises planning process easier by helping travelers understand their options before they book.',
        'Instead of simply selecting the first available sailing, you can compare the details that matter and choose a cruise that fits your travel style, budget, and expectations.'
    ]

    const wbcPlanningDifferences = [
        'Depending on the sailing and selected fare, your cruise may include accommodation, meals, entertainment, onboard activities and other core cruise amenities.',
        'Optional costs can include specialty dining, shore excursions, spa services, certain beverages, Wi-Fi, photographs, shopping and other purchases.',
        'A well-planned booking therefore starts with comparing the complete vacation rather than looking only at the advertised cruise fare.'
    ]

    const wbcCompareFactors = [
        { Icon: Ship, label: 'Ship and class', desc: 'Different Celebrity ships provide different layouts, venues and onboard experiences.' },
        { Icon: MapPin, label: 'Itinerary', desc: 'Compare ports, sea days, departure dates and overall duration.' },
        { Icon: Bed, label: 'Stateroom', desc: 'Choose among interior, ocean view, veranda, Concierge Class, AquaClass and suite accommodations where available.' },
        { Icon: Ticket, label: 'Fare type', desc: 'Check whether you are booking Cruise-Only or an All Included option.' },
        { Icon: Wine, label: 'Drinks and Wi-Fi', desc: 'Determine whether they are included or need to be purchased separately.' },
        { Icon: Utensils, label: 'Dining', desc: 'Separate included dining from specialty restaurant experiences.' },
        { Icon: Map, label: 'Location', desc: 'Stateroom deck and position can influence convenience, views and overall experience.' },
        { Icon: Plane, label: 'Flights and hotels', desc: 'Consider the complete journey rather than the cruise in isolation.' }
    ]

    const wbcFareTable = [
        { consideration: 'Cruise fare', check: 'What is included in the base price?' },
        { consideration: 'Stateroom', check: 'Category, location, size and amenities' },
        { consideration: 'Drinks', check: 'Whether a beverage package is included' },
        { consideration: 'Wi-Fi', check: 'Package level and applicable guests' },
        { consideration: 'Dining', check: 'Included venues versus specialty restaurants' },
        { consideration: 'Gratuities', check: 'Whether they are included or charged separately' },
        { consideration: 'Flights', check: 'Arrival time, departure time and connection requirements' },
        { consideration: 'Shore excursions', check: 'Port activities and additional costs' },
        { consideration: 'Transfers', check: 'Airport, hotel and port transportation' },
        { consideration: 'Travel protection', check: 'Coverage, exclusions and cancellation terms' }
    ]

    const wbcStateroomTypes = [
        {
            name: 'Interior and Ocean View Staterooms',
            Icon: Ship,
            description: 'These can suit travelers who prioritize the itinerary and onboard activities over having private outdoor space. An interior room generally focuses on the essentials, while an ocean view stateroom provides a window or other exterior view depending on the specific category.'
        },
        {
            name: 'Veranda Staterooms',
            Icon: Sun,
            description: 'A veranda can provide private outdoor space and is particularly appealing to travelers who enjoy ocean views, fresh air and watching destinations approach. However, veranda categories can differ by ship, so the deck plan and specific stateroom location are worth checking before booking.'
        },
        {
            name: 'Concierge Class and AquaClass',
            Icon: Crown,
            description: 'Celebrity also offers enhanced stateroom categories such as Concierge Class and AquaClass. AquaClass is positioned around wellness and includes additional amenities such as access to wellness-related facilities and Blu dining on applicable ships. Concierge Class provides additional services and amenities compared with standard stateroom categories.'
        },
        {
            name: 'The Retreat',
            Icon: Gem,
            description: 'The Retreat is Celebrity\'s premium suite experience. Depending on the specific suite and sailing, benefits can include access to Luminae, The Retreat Lounge and other enhanced services and amenities. Celebrity also lists premium drinks and Wi-Fi among The Retreat benefits. For travelers considering a suite, comparing the total package of benefits can be more useful than comparing the room size alone.'
        }
    ]

    const wbcAllIncludedCheck = [
        'Is All Included available for the sailing?',
        'Which guests in the stateroom receive the benefits?',
        'Which beverage package applies?',
        'What level of Wi-Fi is included?',
        'Are gratuities included, and which gratuities?',
        'Does the fare apply to the stateroom category you want?',
        'Would Cruise-Only plus individually purchased extras cost less for your travel plans?'
    ]

    const wbcIncludedDining = [
        'Main dining restaurants',
        'Oceanview Café',
        'Mast Grill',
        'Café venues',
        'Other complimentary onboard dining options'
    ]

    const wbcExtraCosts = [
        'Specialty dining',
        'Certain alcoholic and premium beverages',
        'Shore excursions',
        'Spa and salon treatments',
        'Photos',
        'Shopping',
        'Casino activities',
        'Medical services',
        'Certain Wi-Fi packages',
        'Transfers',
        'Laundry',
        'Other personal purchases'
    ]

    const wbcAdvisorUseful = [
        'First-time cruisers',
        'Families traveling together',
        'Multigenerational groups',
        'Couples planning milestone trips',
        'Travelers comparing suites',
        'Guests coordinating flights and hotels',
        'Groups booking multiple staterooms',
        'Travelers uncertain about fare inclusions'
    ]

    const wbcQuestionsBeforeBooking = [
        'Which Celebrity ship am I booking?',
        'What is included in this specific fare?',
        'Which stateroom category is included?',
        'Is my preferred room location available?',
        'Are drinks included?',
        'Is Wi-Fi included?',
        'Are gratuities included?',
        'Which dining venues are complimentary?',
        'Are specialty restaurants extra?',
        'What excursions should I budget for?',
        'Do I need a pre-cruise hotel?',
        'What flight arrival time gives me an appropriate buffer?',
        'Are transfers included?',
        'What cancellation and change conditions apply?'
    ]

    const wbcKeyTakeaways = [
        'Compare the total vacation experience, not only the advertised cruise fare.',
        'Celebrity offers different fare and accommodation options with different inclusions.',
        'Cruise-Only and All Included pricing should be compared carefully.',
        'Stateroom category can affect both accommodation and onboard benefits.',
        'The Retreat provides a significantly enhanced suite experience with additional amenities.',
        'Specialty dining, excursions, spa services and other purchases may cost extra.',
        'Flights, hotels and transfers should be considered when planning the complete vacation.',
        'Always verify the current inclusions and booking conditions attached to your specific sailing.',
        'A knowledgeable cruise-planning partner can help simplify the comparison process.'
    ]

    const wbcFaqs = [
        { question: 'Why should I use a travel advisor to book Celebrity Cruises?', answer: 'A travel advisor can help you compare Celebrity ships, itineraries, staterooms, fares and vacation arrangements so you can make a more informed booking decision.' },
        { question: 'Can Trips & Ships help me choose a Celebrity cruise ship?', answer: 'Trips & Ships can help you evaluate the factors that matter when comparing Celebrity ships, including itinerary, accommodation, onboard experience and cruise length.' },
        { question: 'Can I compare Celebrity Cruise fares before booking?', answer: 'Yes. Comparing Cruise-Only and applicable All Included fares can help you understand which option better matches your planned onboard spending.' },
        { question: 'What is included in a Celebrity Cruise fare?', answer: 'Celebrity cruise fares generally include accommodation, ocean transportation, many meals, some non-alcoholic beverages and most entertainment, although inclusions vary by fare and booking.' },
        { question: 'Is Wi-Fi included on Celebrity Cruises?', answer: 'Wi-Fi depends on the fare and accommodation. Celebrity\'s All Included option includes Basic Wi-Fi for eligible bookings, while The Retreat includes Premium Wi-Fi according to Celebrity\'s current information.' },
        { question: 'Are drinks included with Celebrity Cruises?', answer: 'Drinks depend on the fare and package selected. All Included currently provides a Classic Drinks Package for eligible bookings, while The Retreat includes Premium Drinks.' },
        { question: 'Is specialty dining included on Celebrity Cruises?', answer: 'Specialty dining is generally not included in the standard cruise fare and may require an additional charge.' },
        { question: 'Does Celebrity All Included include gratuities?', answer: 'The treatment of gratuities depends on the specific fare and current terms. Celebrity\'s current All Included information distinguishes beverage-package gratuities from onboard staff gratuities, so travelers should check their booking details.' },
        { question: 'What Celebrity stateroom should I choose?', answer: 'The right stateroom depends on your budget, preferred space, outdoor access, location and desired benefits. Options can include interior, ocean view, veranda, Concierge Class, AquaClass and suites.' },
        { question: 'Is The Retreat worth considering for a Celebrity cruise?', answer: 'The Retreat is worth considering if you want suite accommodations and enhanced benefits such as premium drinks and Wi-Fi, dedicated services and access to exclusive spaces and dining.' },
        { question: 'Can a travel advisor help with flights for a Celebrity cruise?', answer: 'Yes. Celebrity states that travelers can work with a travel agent to arrange Flights by Celebrity as part of their vacation planning.' },
        { question: 'Should I stay in a hotel before my Celebrity cruise?', answer: 'A pre-cruise hotel can be useful when your flight arrives the day before embarkation, particularly when you want additional protection against travel delays.' },
        { question: 'Can Trips & Ships help with Celebrity cruise planning beyond the cruise?', answer: 'Cruise planning can include considering flights, hotels, transfers, excursions and other elements around the sailing, depending on the services available through the booking arrangement.' },
        { question: 'How can I avoid unexpected Celebrity Cruise costs?', answer: 'Review your fare inclusions before booking and budget separately for potential extras such as specialty dining, excursions, spa services, selected drinks, Wi-Fi, shopping and other onboard purchases.' },
        { question: 'Where can I confirm what is included in my Celebrity Cruise booking?', answer: 'Your booking invoice and Celebrity\'s Guest Account can provide details of the packages, amenities and stateroom category attached to your reservation.' }
    ]

    const wbcInternalLinks = [
        { text: 'Celebrity Cruises Ships', url: '/celebrity-cruises/ships' },
        { text: 'Celebrity Cruise Staterooms and Suites', url: '/celebrity-cruises/staterooms-suites' },
        { text: 'Celebrity Cruises The Retreat', url: '/celebrity-cruises/the-retreat' },
        { text: 'Celebrity Cruises Dining Guide', url: '/celebrity-cruises/dining' },
        { text: 'Celebrity Cruises Drink Packages', url: '/celebrity-cruises/drink-packages' },
        { text: 'Celebrity Cruises All Included', url: '/celebrity-cruises/all-included' },
        { text: 'What is Included on a Celebrity Cruise?', url: '/celebrity-cruises/whats-included' },
        { text: 'Celebrity Edge Series Ships', url: '/celebrity-cruises/edge-series' },
        { text: 'Celebrity Cruises FAQs', url: '/celebrity-cruises/faqs' }
    ]

    const wbcSchemaData = {
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
                "@id": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us#webpage",
                "url": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us",
                "name": "Why Book Celebrity With Trips & Ships?",
                "description": "Discover why booking a Celebrity Cruise with Trips & Ships can simplify cruise planning, from choosing the right sailing and stateroom to arranging extras.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us" },
                "isPartOf": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us#article",
                "headline": "Why Book Celebrity With Trips & Ships?",
                "description": "A practical guide to planning and booking a Celebrity Cruises vacation, including ships, fares, staterooms, inclusions, dining, drinks and trip planning.",
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us" },
                "author": { "@type": "Organization", "name": "Trips and Ships", "url": "https://www.tripsandships.com" },
                "publisher": { "@id": "https://www.tripsandships.com#organization" },
                "inLanguage": "en"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Celebrity Cruises", "item": "https://www.tripsandships.com/celebrity-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Why Book Celebrity With Trips & Ships?", "item": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tripsandships.com/celebrity-cruises/why-book-with-us#faq",
                "mainEntity": [
                    { "@type": "Question", "name": "Why should I use a travel advisor to book Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "A travel advisor can help you compare Celebrity ships, itineraries, staterooms, fares and vacation arrangements so you can make a more informed booking decision." } },
                    { "@type": "Question", "name": "Can Trips & Ships help me choose a Celebrity cruise ship?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships can help you evaluate the factors that matter when comparing Celebrity ships, including itinerary, accommodation, onboard experience and cruise length." } },
                    { "@type": "Question", "name": "Can I compare Celebrity Cruise fares before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Comparing Cruise-Only and applicable All Included fares can help you understand which option better matches your planned onboard spending." } },
                    { "@type": "Question", "name": "What is included in a Celebrity Cruise fare?", "acceptedAnswer": { "@type": "Answer", "text": "Celebrity cruise fares generally include accommodation, ocean transportation, many meals, some non-alcoholic beverages and most entertainment, although inclusions vary by fare and booking." } },
                    { "@type": "Question", "name": "Is Wi-Fi included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Wi-Fi depends on the fare and accommodation. Celebrity's All Included option includes Basic Wi-Fi for eligible bookings, while The Retreat includes Premium Wi-Fi according to Celebrity's current information." } },
                    { "@type": "Question", "name": "Are drinks included with Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Drinks depend on the fare and package selected. All Included currently provides a Classic Drinks Package for eligible bookings, while The Retreat includes Premium Drinks." } },
                    { "@type": "Question", "name": "Is specialty dining included on Celebrity Cruises?", "acceptedAnswer": { "@type": "Answer", "text": "Specialty dining is generally not included in the standard cruise fare and may require an additional charge." } },
                    { "@type": "Question", "name": "Does Celebrity All Included include gratuities?", "acceptedAnswer": { "@type": "Answer", "text": "The treatment of gratuities depends on the specific fare and current terms. Celebrity's current All Included information distinguishes beverage-package gratuities from onboard staff gratuities, so travelers should check their booking details." } },
                    { "@type": "Question", "name": "What Celebrity stateroom should I choose?", "acceptedAnswer": { "@type": "Answer", "text": "The right stateroom depends on your budget, preferred space, outdoor access, location and desired benefits. Options can include interior, ocean view, veranda, Concierge Class, AquaClass and suites." } },
                    { "@type": "Question", "name": "Is The Retreat worth considering for a Celebrity cruise?", "acceptedAnswer": { "@type": "Answer", "text": "The Retreat is worth considering if you want suite accommodations and enhanced benefits such as premium drinks and Wi-Fi, dedicated services and access to exclusive spaces and dining." } },
                    { "@type": "Question", "name": "Can a travel advisor help with flights for a Celebrity cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Celebrity states that travelers can work with a travel agent to arrange Flights by Celebrity as part of their vacation planning." } },
                    { "@type": "Question", "name": "Should I stay in a hotel before my Celebrity cruise?", "acceptedAnswer": { "@type": "Answer", "text": "A pre-cruise hotel can be useful when your flight arrives the day before embarkation, particularly when you want additional protection against travel delays." } },
                    { "@type": "Question", "name": "Can Trips & Ships help with Celebrity cruise planning beyond the cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Cruise planning can include considering flights, hotels, transfers, excursions and other elements around the sailing, depending on the services available through the booking arrangement." } },
                    { "@type": "Question", "name": "How can I avoid unexpected Celebrity Cruise costs?", "acceptedAnswer": { "@type": "Answer", "text": "Review your fare inclusions before booking and budget separately for potential extras such as specialty dining, excursions, spa services, selected drinks, Wi-Fi, shopping and other onboard purchases." } },
                    { "@type": "Question", "name": "Where can I confirm what is included in my Celebrity Cruise booking?", "acceptedAnswer": { "@type": "Answer", "text": "Your booking invoice and Celebrity's Guest Account can provide details of the packages, amenities and stateroom category attached to your reservation." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Why Book Celebrity With Trips & Ships?</title>
                <meta name="title" content="Why Book Celebrity With Trips & Ships?" />
                <meta name="description" content="Discover why booking a Celebrity Cruise with Trips & Ships can simplify cruise planning, from choosing the right sailing and stateroom to arranging extras." />
                <meta name="keywords" content="why book Celebrity Cruises, book Celebrity Cruises, Celebrity Cruises travel advisor, Celebrity cruise booking, Celebrity cruise planning, Celebrity Cruises packages, Celebrity cruise deals, Celebrity cruise staterooms, Celebrity cruise vacations" />
                <link rel="canonical" href="https://www.tripsandships.com/celebrity-cruises/why-book-with-us" />
                <script type="application/ld+json">{JSON.stringify(wbcSchemaData)}</script>
            </Helmet>

            <Navbar />

            <div className="wbc-page">

                {/* ── HERO ── */}
                <section className="wbc-hero-section">
                    <WbcPlaceholder label="Celebrity cruise ship sailing at sea" className="wbc-hero-bg-placeholder" />
                    <div className="wbc-hero-overlay-layer"></div>
                    <div className="wbc-hero-content-wrapper">
                        <div className="wbc-hero-eyebrow-tag">
                            <Ship size={16} />
                            <span>Celebrity Cruises · Trips &amp; Ships Luxury Travel</span>
                        </div>
                        <h1 className="wbc-hero-main-title">Why Book Celebrity <br /> With Trips &amp; Ships?</h1>
                        <p className="wbc-hero-subtitle-text">
                            Booking a cruise is more than choosing a ship and departure date. Your stateroom, fare type, dining preferences, beverage options, Wi-Fi, itinerary, flights, transfers, and pre- and post-cruise plans can all affect the overall experience and cost. Discover why booking with Trips & Ships can simplify your Celebrity cruise planning.
                        </p>
                    </div>
                </section>

                {/* ── WHY BOOK SECTION ── */}
                <section className="wbc-why-section">
                    <div className="wbc-why-container">
                        <div className="wbc-why-header">
                            <span className="wbc-eyebrow wbc-eyebrow-center">WHY TRIPS &amp; SHIPS</span>
                            <h2 className="wbc-section-heading">Why Book Celebrity Cruises With Trips &amp; Ships?</h2>
                            <div className="wbc-heading-separator-bar wbc-bar-centered"></div>
                        </div>
                        <div className="wbc-why-split">
                            <div className="wbc-why-accent-col">
                                <div className="wbc-why-accent-inner">
                                    <div className="wbc-why-stat">
                                        <span className="wbc-why-stat-num">01</span>
                                        <span className="wbc-why-stat-label">Smart Planning Starts Here</span>
                                    </div>
                                    <div className="wbc-why-stat">
                                        <span className="wbc-why-stat-num">02</span>
                                        <span className="wbc-why-stat-label">Simplified Options</span>
                                    </div>
                                    <div className="wbc-why-stat">
                                        <span className="wbc-why-stat-num">03</span>
                                        <span className="wbc-why-stat-label">Better Decisions</span>
                                    </div>
                                </div>
                                <div className="wbc-why-accent-badge">
                                    <Ship size={18} />
                                    <span>Celebrity Cruise Experts</span>
                                </div>
                            </div>
                            <div className="wbc-why-cards-col">
                                {wbcWhyBookItems.map((item, idx) => (
                                    <div key={idx} className="wbc-why-card">
                                        <CheckCircle size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT MAKES PLANNING DIFFERENT ── */}
                <section className="wbc-different-section">
                    <div className="wbc-different-container">
                        <span className="wbc-eyebrow wbc-eyebrow-center">PLANNING MATTERS</span>
                        <h2 className="wbc-section-heading" style={{ textAlign: 'center' }}>What Makes Celebrity Cruise Planning Different?</h2>
                        <div className="wbc-heading-separator-bar wbc-bar-centered"></div>
                        <p className="wbc-different-intro">A Celebrity cruise can involve several decisions before payment. The most important is understanding what you are actually booking.</p>
                        <div className="wbc-different-grid">
                            {wbcPlanningDifferences.map((item, idx) => (
                                <div key={idx} className="wbc-different-card">
                                    <div className="wbc-different-icon"><Info size={18} /></div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── COMPARE FACTORS ── */}
                <section className="wbc-compare-section">
                    <div className="wbc-compare-container">
                        <div className="wbc-compare-split">
                            {/* Left sticky header panel */}
                            <div className="wbc-compare-left-panel">
                                <span className="wbc-eyebrow wbc-eyebrow-light">WHAT TO COMPARE</span>
                                <h2 className="wbc-section-heading wbc-white-heading">Compare the Details That Affect Your Trip</h2>
                                <div className="wbc-heading-separator-bar wbc-separator-white" style={{ margin: '0 0 22px 0' }}></div>
                                <div className="wbc-compare-left-image">
                                    <WbcPlaceholder label="Celebrity ship onboard venues and amenities" />
                                </div>
                                <p className="wbc-compare-intro-panel">Before choosing a Celebrity sailing, compare every element that shapes the experience — not just the headline fare.</p>
                                <div className="wbc-compare-left-badge">
                                    <Compass size={16} />
                                    <span>8 Key Factors</span>
                                </div>
                            </div>
                            {/* Right cards grid */}
                            <div className="wbc-compare-right-panel">
                                <div className="wbc-compare-grid">
                                    {wbcCompareFactors.map((item, idx) => (
                                        <div key={idx} className="wbc-compare-card">
                                            <div className="wbc-compare-icon"><item.Icon size={20} /></div>
                                            <h4 className="wbc-compare-label">{item.label}</h4>
                                            <p className="wbc-compare-desc">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FARE TABLE ── */}
                <section className="wbc-fare-section">
                    <div className="wbc-fare-container">
                        <div className="wbc-fare-split">
                            {/* Left panel */}
                            <div className="wbc-fare-left-panel">
                                <span className="wbc-eyebrow">CLEAR COMPARISON</span>
                                <h2 className="wbc-section-heading">A Clearer Way to Compare Celebrity Cruise Fares</h2>
                                <div className="wbc-heading-separator-bar" style={{ margin: '0 0 22px 0' }}></div>
                                <p className="wbc-fare-intro-panel">Two Celebrity bookings can look similar while including very different amenities. Cruise-Only generally covers the core experience but excludes drinks and Wi-Fi, while All Included combines the fare with selected beverage and Wi-Fi benefits.</p>
                                <div className="wbc-fare-note">
                                    <Info size={16} className="wbc-fare-note-icon" />
                                    <p>Compare like-for-like bookings. A lower headline fare is not necessarily the lower overall vacation cost once optional amenities are added.</p>
                                </div>
                            </div>
                            {/* Right panel — table */}
                            <div className="wbc-fare-right-panel">
                                <div className="wbc-table-wrapper">
                                    <div className="wbc-table-row wbc-table-head wbc-table-two-col">
                                        <span>Booking Consideration</span>
                                        <span>What to Check</span>
                                    </div>
                                    {wbcFareTable.map((row, idx) => (
                                        <div key={idx} className="wbc-table-row wbc-table-two-col">
                                            <span data-label="Booking Consideration">{row.consideration}</span>
                                            <span data-label="What to Check">{row.check}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── STATEROOMS ── */}
                <section className="wbc-stateroom-section">
                    <div className="wbc-stateroom-container">
                        <div className="wbc-stateroom-split">
                            <div className="wbc-stateroom-left">
                                <span className="wbc-eyebrow wbc-eyebrow-light" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>YOUR SPACE AT SEA</span>
                                <h2 className="wbc-section-heading wbc-white-heading">Help Choosing the Right Celebrity Stateroom</h2>
                                <div className="wbc-heading-separator-bar wbc-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="wbc-stateroom-intro" style={{ color: '#ffffff', textAlign: 'left', margin: '0 0 20px 0', maxWidth: '100%' }}>
                                    The right room can significantly change how you experience a cruise. Celebrity offers several accommodation categories, from entry-level staterooms to premium suites. Some categories also come with additional onboard benefits.
                                </p>
                                <div className="wbc-section-banner wbc-section-banner-dark">
                                    <WbcPlaceholder label="Celebrity stateroom categories and suites" />
                                    <div className="wbc-section-banner-badge">
                                        <Bed size={14} />
                                        <span>Your Space at Sea</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wbc-stateroom-right">
                                <div className="wbc-stateroom-grid">
                                    {wbcStateroomTypes.map((item, idx) => (
                                        <div key={idx} className="wbc-stateroom-card">
                                            <div className="wbc-stateroom-icon"><item.Icon size={22} /></div>
                                            <h3 className="wbc-stateroom-name">{item.name}</h3>
                                            <p className="wbc-stateroom-desc">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── ALL INCLUDED ── */}
                <section className="wbc-allincluded-section">
                    <div className="wbc-allincluded-container">
                        <div className="wbc-allincluded-grid">
                            <div className="wbc-allincluded-text-col">
                                <span className="wbc-eyebrow" style={{ marginLeft: 0, marginRight: 0 }}>MAKING SENSE OF IT</span>
                                <h2 className="wbc-section-heading">Making Sense of Celebrity's All Included Option</h2>
                                <div className="wbc-heading-separator-bar" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="wbc-allincluded-lead">All Included is particularly important when comparing Celebrity cruise prices.</p>
                                <p className="wbc-allincluded-sub">Celebrity describes All Included as a pricing option that combines the cruise fare with selected amenities. Current official information identifies Basic Wi-Fi and a Classic Drinks Package for eligible bookings, while The Retreat has enhanced inclusions. Terms, availability and promotional conditions can change, so travelers should verify the inclusions attached to their specific booking.</p>
                                <p className="wbc-allincluded-sub-label" style={{ marginTop: '20px' }}>What to Check Before Selecting All Included</p>
                                <div className="wbc-allincluded-list">
                                    {wbcAllIncludedCheck.map((item, idx) => (
                                        <div key={idx} className="wbc-allincluded-list-item">
                                            <CheckCircle size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="wbc-allincluded-image-col">
                                <div className="wbc-image-frame">
                                    <WbcPlaceholder label="Celebrity All Included package comparison" />
                                    <div className="wbc-frame-overlay"></div>
                                </div>
                                <p className="wbc-allincluded-note">The answer depends on the sailing, fare, stateroom category and current terms.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DINING ── */}
                <section className="wbc-dining-section">
                    <div className="wbc-dining-container">
                        <div className="wbc-dining-grid">
                            <div className="wbc-dining-image-col">
                                <div className="wbc-image-frame">
                                    <WbcPlaceholder label="Celebrity onboard dining" />
                                    <div className="wbc-frame-overlay"></div>
                                </div>
                                <p className="wbc-dining-sub-label" style={{ marginTop: '20px' }}>Specialty Dining</p>
                                <p className="wbc-dining-sub">Specialty restaurants are separate experiences and may carry an additional charge. Examples listed by Celebrity include venues such as Le Voyage, Fine Cut, Murano and Le Petit Chef.</p>
                                <p className="wbc-dining-note">When planning a cruise budget, consider how often you expect to use specialty restaurants rather than assuming every onboard dining venue is included.</p>
                            </div>
                            <div className="wbc-dining-text-col">
                                <span className="wbc-eyebrow">DINING OPTIONS</span>
                                <h2 className="wbc-section-heading">Celebrity Cruise Dining: Included vs Specialty</h2>
                                <div className="wbc-heading-separator-bar"></div>
                                <p className="wbc-dining-lead">Celebrity cruise fares include a range of dining options, including breakfast, lunch and dinner at selected complimentary venues. Specialty restaurants generally cost extra.</p>
                                <p className="wbc-dining-sub">This distinction matters when comparing cruise packages.</p>
                                <p className="wbc-dining-sub-label">Included Dining</p>
                                <p className="wbc-dining-sub">Depending on the ship, complimentary dining can include venues such as:</p>
                                <div className="wbc-dining-list">
                                    {wbcIncludedDining.map((item, idx) => (
                                        <div key={idx} className="wbc-dining-list-item">
                                            <Utensils size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── EXTRAS ── */}
                <section className="wbc-extras-section">
                    <div className="wbc-extras-container">
                        <div className="wbc-extras-split">
                            <div className="wbc-extras-left">
                                <span className="wbc-eyebrow wbc-eyebrow-light" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>BEYOND THE FARE</span>
                                <h2 className="wbc-section-heading wbc-white-heading">Drinks, Wi-Fi and Other Extras</h2>
                                <div className="wbc-heading-separator-bar wbc-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="wbc-extras-intro" style={{ color: '#ffffff', textAlign: 'left', margin: '0 0 10px 0' }}>Cruise pricing becomes easier to understand when you separate included essentials from optional extras.</p>
                                <p className="wbc-extras-sub" style={{ color: '#ffffff', textAlign: 'left', margin: '0 0 20px 0' }}>Common additional expenses can include:</p>
                                <div className="wbc-section-banner wbc-section-banner-dark">
                                    <WbcPlaceholder label="Celebrity bars, cafés and onboard amenities" />
                                    <div className="wbc-section-banner-badge">
                                        <Wine size={14} />
                                        <span>Beyond the Fare</span>
                                    </div>
                                </div>
                                <div className="wbc-extras-note">
                                    <Info size={16} className="wbc-extras-note-icon" />
                                    <p>Celebrity's official FAQ provides the most current list of included and excluded cruise-fare items.</p>
                                </div>
                            </div>
                            <div className="wbc-extras-right">
                                <div className="wbc-extras-grid">
                                    {wbcExtraCosts.map((item, idx) => (
                                        <div key={idx} className="wbc-extras-card">
                                            <DollarSign size={14} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── WHAT WE HELP COMPARE ── */}
                <section className="wbc-whatwehelp-section">
                    <div className="wbc-whatwehelp-container">
                        <span className="wbc-eyebrow wbc-eyebrow-center">HOW WE HELP</span>
                        <h2 className="wbc-section-heading" style={{ textAlign: 'center' }}>What Trips & Ships Can Help You Compare</h2>
                        <div className="wbc-heading-separator-bar wbc-bar-centered"></div>
                        <p className="wbc-whatwehelp-intro">When planning a Celebrity vacation, the goal should be to find the combination that makes sense for your trip, not simply the cheapest advertised fare.</p>

                        <div className="wbc-whatwehelp-grid">
                            <div className="wbc-whatwehelp-card">
                                <Ship size={22} />
                                <h4>1. Ship</h4>
                                <p>Choose the Celebrity ship that fits your preferred onboard experience and itinerary.</p>
                            </div>
                            <div className="wbc-whatwehelp-card">
                                <Calendar size={22} />
                                <h4>2. Sailing</h4>
                                <p>Compare departure dates, duration, ports and overall itinerary.</p>
                            </div>
                            <div className="wbc-whatwehelp-card">
                                <Bed size={22} />
                                <h4>3. Stateroom</h4>
                                <p>Consider room category, location, views, balcony availability and premium benefits.</p>
                            </div>
                            <div className="wbc-whatwehelp-card">
                                <Ticket size={22} />
                                <h4>4. Fare</h4>
                                <p>Compare Cruise-Only and applicable All Included options.</p>
                            </div>
                            <div className="wbc-whatwehelp-card">
                                <DollarSign size={22} />
                                <h4>5. Onboard Spending</h4>
                                <p>Estimate drinks, specialty dining, excursions, Wi-Fi and other extras before committing to a booking.</p>
                            </div>
                            <div className="wbc-whatwehelp-card">
                                <Briefcase size={22} />
                                <h4>6. Complete Trip</h4>
                                <p>Consider flights, hotels, transfers and other travel arrangements around the cruise.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TRAVEL ADVISOR ── */}
                <section className="wbc-advisor-section">
                    <div className="wbc-advisor-container">
                        <div className="wbc-advisor-split">
                            <div className="wbc-advisor-left">
                                <span className="wbc-eyebrow wbc-eyebrow-light" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>EXPERT GUIDANCE</span>
                                <h2 className="wbc-section-heading wbc-white-heading">When a Travel Advisor Can Be Especially Useful</h2>
                                <div className="wbc-heading-separator-bar wbc-separator-white" style={{ margin: '0 0 20px 0' }}></div>
                                <p className="wbc-advisor-intro" style={{ color: '#ffffff', textAlign: 'left', margin: '0 0 10px 0' }}>A travel advisor can be helpful when a cruise involves multiple decisions or travelers.</p>
                                <p className="wbc-advisor-sub" style={{ color: '#ffffff', textAlign: 'left', margin: '0 0 20px 0' }}>For example, professional planning can be particularly useful for:</p>
                                <div className="wbc-section-banner wbc-section-banner-dark">
                                    <WbcPlaceholder label="Travel advisor consulting with clients" />
                                    <div className="wbc-section-banner-badge">
                                        <UserCheck size={14} />
                                        <span>Expert Guidance</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wbc-advisor-right">
                                <div className="wbc-advisor-grid">
                                    {wbcAdvisorUseful.map((item, idx) => (
                                        <div key={idx} className="wbc-advisor-card">
                                            <UserCheck size={16} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="wbc-advisor-note">
                                    <Info size={16} className="wbc-advisor-note-icon" />
                                    <p>Celebrity itself notes that travel advisors can assist with cruise planning, including itinerary and onboard considerations. The benefit is not simply having someone place a reservation. The more useful role is helping you understand the choices before you commit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── QUESTIONS ── */}
                <section className="wbc-questions-section">
                    <div className="wbc-questions-container">
                        <span className="wbc-eyebrow wbc-eyebrow-center">BE PREPARED</span>
                        <h2 className="wbc-section-heading" style={{ textAlign: 'center' }}>Questions to Ask Before Booking <br /> Your Celebrity Cruise</h2>
                        <div className="wbc-heading-separator-bar wbc-bar-centered"></div>
                        <p className="wbc-questions-intro">Before confirming your trip, make sure you know:</p>

                        <div className="wbc-questions-grid">
                            {wbcQuestionsBeforeBooking.map((item, idx) => (
                                <div key={idx} className="wbc-questions-card">
                                    <span className="wbc-questions-num">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="wbc-questions-text">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="wbc-questions-note">
                            <Info size={16} className="wbc-questions-note-icon" />
                            <p>Getting these answers upfront can make the final price much easier to understand.</p>
                        </div>
                    </div>
                </section>

                {/* ── WHY CHOOSE US ── */}
                <section className="wbc-whychoose-section">
                    <div className="wbc-whychoose-container">
                        <span className="wbc-eyebrow wbc-eyebrow-light wbc-eyebrow-center">THE TRIPS & SHIPS DIFFERENCE</span>
                        <h2 className="wbc-section-heading wbc-white-heading" style={{ textAlign: 'center' }}>Why Choose Trips & Ships for <br /> Celebrity Cruise Planning?</h2>
                        <div className="wbc-heading-separator-bar wbc-bar-centered wbc-separator-white"></div>
                        <p className="wbc-whychoose-intro" style={{ color: '#ffffff' }}>The value of a cruise booking service should come from clarity and convenience, not unnecessary complexity.</p>
                        <p className="wbc-whychoose-sub" style={{ color: '#ffffff' }}>Trips & Ships can help make the decision-making process more straightforward by bringing the important considerations together in one planning journey.</p>

                        <div className="wbc-whychoose-flow">
                            <div className="wbc-whychoose-flow-item">
                                <Ship size={20} />
                                <span>Ship</span>
                            </div>
                            <ArrowRight size={16} className="wbc-whychoose-flow-arrow" />
                            <div className="wbc-whychoose-flow-item">
                                <MapPin size={20} />
                                <span>Itinerary</span>
                            </div>
                            <ArrowRight size={16} className="wbc-whychoose-flow-arrow" />
                            <div className="wbc-whychoose-flow-item">
                                <Bed size={20} />
                                <span>Stateroom</span>
                            </div>
                            <ArrowRight size={16} className="wbc-whychoose-flow-arrow" />
                            <div className="wbc-whychoose-flow-item">
                                <Ticket size={20} />
                                <span>Fare</span>
                            </div>
                            <ArrowRight size={16} className="wbc-whychoose-flow-arrow" />
                            <div className="wbc-whychoose-flow-item">
                                <CheckCircle size={20} />
                                <span>Inclusions</span>
                            </div>
                            <ArrowRight size={16} className="wbc-whychoose-flow-arrow" />
                            <div className="wbc-whychoose-flow-item">
                                <DollarSign size={20} />
                                <span>Extras</span>
                            </div>
                            <ArrowRight size={16} className="wbc-whychoose-flow-arrow" />
                            <div className="wbc-whychoose-flow-item">
                                <Briefcase size={20} />
                                <span>Complete Vacation</span>
                            </div>
                        </div>

                        <p className="wbc-whychoose-outcome" style={{ color: '#ffffff' }}>That approach helps you make a more informed booking decision and reduces the chance of discovering important differences after the reservation is made.</p>
                    </div>
                </section>

                {/* ── KEY TAKEAWAYS ── */}
                <section className="wbc-takeaway-section">
                    <div className="wbc-takeaway-container">
                        <span className="wbc-eyebrow wbc-eyebrow-center">SUMMARY</span>
                        <h2 className="wbc-section-heading" style={{ textAlign: 'center' }}>Key Takeaways</h2>
                        <div className="wbc-heading-separator-bar wbc-bar-centered"></div>

                        <div className="wbc-takeaway-grid">
                            {wbcKeyTakeaways.map((item, idx) => (
                                <div key={idx} className="wbc-takeaway-card">
                                    <div className="wbc-takeaway-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <span className="wbc-takeaway-label">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
                <section className="wbc-expert-section">
                    <div className="wbc-expert-container">

                        <div className="wbc-expert-portrait-panel">
                            <div className="wbc-expert-img-container">
                                <img src={Profile_AH} alt="Angela Hughes - Luxury Travel Designer" />
                            </div>
                            <div className="wbc-expert-stats-strip">
                                <div className="wbc-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="wbc-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>

                        <div className="wbc-expert-content-panel">
                            <span className="wbc-eyebrow wbc-expert-eyebrow">MEET THE CEO</span>
                            <h2 className="wbc-section-heading">Insight from Angela Hughes</h2>
                            <div className="wbc-heading-separator-bar"></div>

                            <p className="wbc-expert-quote">
                                &ldquo;The difference between a Celebrity cruise that meets expectations and one that exceeds them often comes down to the planning. Knowing which ship, which stateroom, and which fare to choose — that's where the value of an experienced advisor really shows.&rdquo;
                            </p>

                            <div className="wbc-expert-priorities">
                                <h5>Booking Prioritization Matrix:</h5>
                                <div className="wbc-expert-pills">
                                    {['Ship Selection First', 'Compare Fare Types', 'Stateroom Location Matters', 'All Included vs Cruise-Only', 'Book Early for Best Choice', 'Complete Trip Planning'].map(pill => (
                                        <span key={pill} className="wbc-expert-pill">
                                            <Ship size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="wbc-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes uses her personal, deep connections in the cruise industry to deliver custom planning that regular booking engines simply cannot replicate.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="wbc-faq-section">
                    <div className="wbc-faq-container">
                        <div className="wbc-faq-header">
                            <span className="wbc-eyebrow wbc-eyebrow-center">QUESTIONS BEFORE YOU BOOK</span>
                            <h2 className="wbc-section-heading">Frequently Asked Questions</h2>
                            <div className="wbc-heading-separator-bar wbc-bar-centered"></div>
                        </div>
                        <div className="wbc-faq-list-wrapper">
                            {wbcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="wbc-faq-item"
                                    onClick={() => wbcToggleFaq(index)}
                                >
                                    <div className="wbc-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="wbc-faq-toggle-icon">{wbcActiveFaq === index ? '\u2212' : '+'}</span>
                                    </div>
                                    {wbcActiveFaq === index && (
                                        <p className="wbc-faq-answer-text">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="wbc-cta-section">
                    <div className="wbc-cta-aurora-glow"></div>
                    <div className="wbc-cta-crystal wbc-cta-crystal-1"></div>
                    <div className="wbc-cta-crystal wbc-cta-crystal-2"></div>
                    <div className="wbc-cta-crystal wbc-cta-crystal-3"></div>
                    <div className="wbc-cta-grid-lines"></div>

                    <div className="wbc-cta-content">
                        <div className="wbc-cta-compass-ring">
                            <Ship size={28} />
                        </div>
                        <span className="wbc-cta-eyebrow">PLAN YOUR VOYAGE</span>
                        <h2 className="wbc-cta-title">Ready to Plan Your <br /> Celebrity Cruise With Confidence?</h2>
                        <div className="wbc-cta-bar"></div>
                        <p className="wbc-cta-subtitle">
                            Compare ships, staterooms, fares, dining, drinks, The Retreat and All Included benefits to build a vacation that matches your priorities. Let our specialists help you make your next cruise decision with greater clarity.
                        </p>
                        <div className="wbc-cta-actions">
                            <Link to="/contact" className="wbc-cta-primary-btn">
                                <span>Speak with a Celebrity Cruises planning specialist</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WhyBookCelebrityWithTripsAndShips