import Navbar from '../../components/Navbar/Navbar'
import './FirstTimeUniworldRiverCruiseGuide.css'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, Music, Wifi, Wine, Backpack,
    Sunrise, Sunset, Home, Crown, XCircle, ThumbsUp,
    Luggage, Footprints, Umbrella, Glasses, Plug, FileText,
    Pill, Briefcase, Camera, TreePine, Landmark, Bike,
    ShieldCheck, AlertTriangle, Map
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function FirstTimeUniworldGuide() {

    const [ftuwgActiveFaq, setFtuwgActiveFaq] = useState(null)
    const ftuwgToggleFaq = i => setFtuwgActiveFaq(ftuwgActiveFaq === i ? null : i)

    const ftuwgItineraries = [
        { dest: 'Danube', best: 'First-time cruisers' },
        { dest: 'Rhine', best: 'Scenic landscapes' },
        { dest: 'Seine', best: 'French culture' },
        { dest: 'Douro', best: 'Wine enthusiasts' },
        { dest: 'Rhône', best: 'Food and history' },
        { dest: 'Nile', best: 'Ancient Egypt' },
        { dest: 'Venice Lagoon', best: 'Italian art and architecture' },
        { dest: 'Ganges', best: 'Cultural exploration' }
    ]

    const ftuwgCabins = [
        {
            name: 'Classic Stateroom',
            Icon: Home,
            desc: 'Best for travelers who:',
            items: ['Spend most of the day ashore', 'Want luxury at the lowest fare', 'Prioritize value']
        },
        {
            name: 'French Balcony',
            Icon: Sunrise,
            desc: 'Ideal for guests who enjoy:',
            items: ['Scenic river views', 'Fresh air', 'Bright cabins', 'Relaxing between excursions']
        },
        {
            name: 'Suites',
            Icon: Crown,
            desc: 'Recommended for:',
            items: ['Special celebrations', 'Longer cruises', 'Travelers seeking additional space', 'Guests interested in butler service']
        }
    ]

    const uniIncluded = [
        { Icon: Home, text: 'Luxury accommodations' },
        { Icon: Utensils, text: 'Breakfast, lunch, and dinner' },
        { Icon: Wine, text: 'Unlimited premium beverages' },
        { Icon: Compass, text: 'Guided excursions' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: Star, text: 'Onboard gratuities' },
        { Icon: Music, text: 'Entertainment' },
        { Icon: Award, text: 'Fitness facilities' }
    ]

    const ftuwgPackList = [
        { Icon: Footprints, text: 'Comfortable walking shoes' },
        { Icon: Sun, text: 'Lightweight clothing' },
        { Icon: Briefcase, text: 'Smart casual evening attire' },
        { Icon: Umbrella, text: 'Light waterproof jacket' },
        { Icon: Glasses, text: 'Sunglasses' },
        { Icon: ShieldCheck, text: 'Sunscreen' },
        { Icon: Plug, text: 'Travel adapter' },
        { Icon: FileText, text: 'Passport' },
        { Icon: Pill, text: 'Medications' },
        { Icon: Backpack, text: 'Day bag for excursions' }
    ]

    const uniTypicalDay = [
        {
            label: 'Morning', Icon: Sunrise, items: ['Breakfast', 'Scenic cruising', 'Guided excursion']
        },
        {
            label: 'Afternoon', Icon: Sun, items: ['Lunch onboard', 'Optional sightseeing', 'Relaxation on deck']
        },
        {
            label: 'Evening', Icon: Sunset, items: ['Multi-course dinner', 'Local entertainment', 'Cocktails in the lounge', 'Overnight docking in a new destination']
        }
    ]

    const uniDining = [
        'Regional specialties', 'Fresh ingredients', 'Multiple-course dinners',
        'Open seating', 'Premium wines', 'Vegetarian and special dietary options'
    ]

    const uniExcursions = [
        { Icon: Footprints, text: 'Walking tours' },
        { Icon: Landmark, text: 'Castle visits' },
        { Icon: Landmark, text: 'Museums' },
        { Icon: Wine, text: 'Wine tastings' },
        { Icon: Utensils, text: 'Culinary experiences' },
        { Icon: Bike, text: 'Bicycle tours' },
        { Icon: Music, text: 'Cultural performances' }
    ]

    const ftuwgAtmosphere = [
        'Quiet lounges', 'Scenic sun decks', 'Boutique décor',
        'Friendly crew', 'Destination lectures', 'Evening entertainment'
    ]

    const ftuwgTips = [
        'Arrive at your embarkation city a day early.',
        'Book excursions in advance if required.',
        'Carry comfortable footwear.',
        'Bring a reusable water bottle.',
        'Review daily schedules each evening.',
        'Keep travel documents easily accessible.',
        'Purchase travel insurance.'
    ]

    const uniMistakes = [
        'Overpack.',
        'Skip included excursions.',
        'Wait until the last minute to book.',
        'Ignore local dress codes.',
        'Forget travel adapters.',
        'Underestimate walking distances.'
    ]

    const uniRightFor = [
        'Luxury accommodations', 'Small ships', 'Cultural immersion',
        'Exceptional service', 'Fine dining', 'Scenic cruising', 'Relaxed travel'
    ]

    const ftuwgTakeaways = [
        'The Danube and Rhine are excellent first itineraries.',
        'Uniworld offers an all-inclusive luxury river cruise experience.',
        'French Balcony cabins are popular for scenic views.',
        'Guided excursions are included on most itineraries.',
        'Comfortable walking shoes are essential for daily sightseeing.',
        'Booking early provides the best cabin selection.'
    ]

    const ftuwgFaqs = [
        { question: 'Is Uniworld good for first-time river cruisers?', answer: 'Yes. Its all-inclusive experience and personalized service make it an excellent choice for first-time guests.' },
        { question: 'Which Uniworld itinerary is best for beginners?', answer: 'The Danube and Rhine itineraries are often recommended because they combine scenic cruising with iconic destinations.' },
        { question: 'What should I pack for a Uniworld River Cruise?', answer: 'Pack comfortable walking shoes, smart casual clothing, travel documents, weather-appropriate layers, and a day bag for excursions.' },
        { question: 'Are excursions included?', answer: 'Yes. Most itineraries include guided shore excursions.' },
        { question: 'Is Wi-Fi included onboard?', answer: 'Yes. Complimentary Wi-Fi is generally available throughout the ship.' },
        { question: 'Do I need formal clothes?', answer: 'No. Smart casual attire is suitable for most evenings.' },
        { question: 'What is included in the cruise fare?', answer: 'Typically, accommodations, meals, beverages, excursions, gratuities, Wi-Fi, and entertainment are included.' },
        { question: 'Are river cruises suitable for older travelers?', answer: 'Yes. River cruises are popular with travelers seeking a relaxed pace and cultural experiences.' },
        { question: 'Can I explore destinations on my own?', answer: 'Yes. Guests usually have free time to explore independently alongside included excursions.' },
        { question: 'Should I arrive before embarkation day?', answer: 'Yes. Arriving one day early helps reduce the risk of travel delays affecting your cruise.' },
        { question: 'How much walking is involved?', answer: 'Most excursions include moderate walking, often on cobblestone streets or uneven surfaces.' },
        { question: 'Can dietary restrictions be accommodated?', answer: 'Yes. Most dietary requirements can be accommodated with advance notice.' },
        { question: 'Are drinks included?', answer: 'Yes. Premium wines, spirits, beer, soft drinks, coffee, and tea are generally included.' },
        { question: 'Which cabin should first-time travelers choose?', answer: 'French Balcony cabins offer an excellent combination of comfort, scenic views, and value.' },
        { question: 'How far in advance should I book?', answer: 'Booking six to twelve months before departure often provides the best cabin availability and promotional pricing.' }
    ]

    const ftuwgSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "First-Time Uniworld River Cruise Guide",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/first-time-guide/",
                "description": "Complete guide for first-time Uniworld River Cruise travelers covering planning, cabins, dining, excursions, packing, and onboard expectations.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "First-Time Uniworld River Cruise Guide",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/first-time-guide/"
                },
                "datePublished": "2026-08-06",
                "dateModified": "2026-08-06"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "First-Time Guide", "item": "https://www.tripsandships.com/uniworld-river-cruises/first-time-guide/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": ftuwgFaqs.map(f => ({
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
                <title>First-Time Uniworld River Cruise Guide</title>
                <meta name="title" content="First-Time Uniworld River Cruise Guide" />
                <meta name="description" content="Planning your first Uniworld River Cruise? Learn what to expect, what's included, packing tips, cabin advice, excursions, dining, and booking recommendations." />
                <meta name="keywords" content="First-Time Uniworld River Cruise Guide, first Uniworld cruise, Uniworld tips, Uniworld beginner guide, what to expect on Uniworld, luxury river cruise guide, Uniworld travel tips, river cruise for beginners" />
                                <script type="application/ld+json">{JSON.stringify(ftuwgSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="ftuwg-hero-section">
                <div className="ftuwg-hero-bg"></div>
                <div className="ftuwg-hero-overlay-layer"></div>
                <div className="ftuwg-hero-content-wrapper">
                    <div className="ftuwg-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="ftuwg-hero-main-title">
                        First-Time Uniworld <br /> River Cruise Guide
                    </h1>
                    <p className="ftuwg-hero-subtitle-text">
                        Everything first-time guests need to know before sailing — from choosing an itinerary and cabin to dining, excursions, packing, and onboard etiquette.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="ftuwg-intro-section">
                <div className="ftuwg-intro-container">
                    <div className="ftuwg-intro-grid">
                        <div className="ftuwg-intro-text-col">
                            <p className="ftuwg-intro-lead">Planning your first Uniworld River Cruise is exciting, especially if you've never experienced river cruising before.</p>
                            <p className="ftuwg-intro-body">Unlike large ocean cruises, Uniworld Boutique River Cruises focuses on intimate ships, immersive cultural experiences, luxury accommodations, and personalized service. Understanding what to expect before you sail can help you choose the right itinerary, pack appropriately, and make the most of every day onboard.</p>
                            <p className="ftuwg-intro-body">This guide covers everything first-time guests should know—from booking your cruise and selecting a cabin to dining, excursions, onboard etiquette, and practical travel tips.</p>
                        </div>
                        <div className="ftuwg-intro-image-col">
                            <div className="ftuwg-intro-image-frame">
                                <div className="ftuwg-intro-placeholder">
                                    <Ship size={48} />
                                    <span>First-time Uniworld River Cruise experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE UNIWORLD ── */}
            <section className="ftuwg-why-section">
                <div className="ftuwg-why-container">
                    <div className="ftuwg-why-grid">

                        <div className="ftuwg-why-text-col">
                            <span className="ftuwg-eyebrow">GETTING STARTED</span>
                            <h2 className="ftuwg-section-heading">Why Choose Uniworld for Your First River Cruise?</h2>
                            <div className="ftuwg-heading-separator-bar"></div>
                            <p className="ftuwg-why-lead">Uniworld is known for offering a boutique luxury experience rather than a traditional cruise vacation.</p>
                            <p className="ftuwg-why-body">For travelers new to river cruising, the all-inclusive approach simplifies planning and minimizes unexpected onboard expenses.</p>
                        </div>

                        <div className="ftuwg-why-list-col">
                            <div className="ftuwg-highlight-grid">
                                {[
                                    { Icon: Users, text: 'Small guest capacity' },
                                    { Icon: Ship, text: 'Individually designed ships' },
                                    { Icon: CheckCircle, text: 'All-inclusive amenities' },
                                    { Icon: Utensils, text: 'Gourmet dining' },
                                    { Icon: Wine, text: 'Premium beverages' },
                                    { Icon: Compass, text: 'Included excursions' },
                                    { Icon: Heart, text: 'Personalized service' },
                                    { Icon: MapPin, text: 'Destination-focused itineraries' }
                                ].map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ftuwg-highlight-item">
                                        <div className="ftuwg-highlight-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CHOOSING THE RIGHT ITINERARY ── */}
            <section className="ftuwg-itinerary-section">
                <div className="ftuwg-itinerary-container">
                    <div className="ftuwg-itinerary-header">
                        <span className="ftuwg-eyebrow">PLAN YOUR ROUTE</span>
                        <h2 className="ftuwg-section-heading">Choosing the Right Itinerary</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered"></div>
                        <p className="ftuwg-itinerary-lead">Selecting the right destination is often the most important decision.</p>
                    </div>

                    <div className="ftuwg-itinerary-grid">
                        {ftuwgItineraries.map((item, idx) => (
                            <div key={idx} className="ftuwg-itinerary-card">
                                <div className="ftuwg-itinerary-card-top">
                                    <div className="ftuwg-itinerary-card-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="ftuwg-itinerary-card-num">0{idx + 1}</span>
                                </div>
                                <h3 className="ftuwg-itinerary-card-title">{item.dest}</h3>
                                <p className="ftuwg-itinerary-card-desc">{item.best}</p>
                            </div>
                        ))}
                    </div>

                    <p className="ftuwg-itinerary-footnote">A seven- or eight-day itinerary is often ideal for first-time guests.</p>
                </div>
            </section>

            {/* ── SELECTING THE BEST CABIN ── */}
            <section className="ftuwg-cabin-section">
                <div className="ftuwg-cabin-container">
                    <div className="ftuwg-cabin-header">
                        <span className="ftuwg-eyebrow ftuwg-eyebrow-light">ACCOMMODATIONS</span>
                        <h2 className="ftuwg-section-heading ftuwg-white-heading">Selecting the Best Cabin</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered ftuwg-separator-white"></div>
                        <p className="ftuwg-cabin-lead">Uniworld offers several accommodation categories.</p>
                    </div>

                    <div className="ftuwg-cabin-grid">
                        {ftuwgCabins.map((cabin, idx) => (
                            <div key={idx} className="ftuwg-cabin-card">
                                <div className="ftuwg-cabin-card-header">
                                    <div className="ftuwg-cabin-card-icon"><cabin.Icon size={22} /></div>
                                    <h3 className="ftuwg-cabin-card-title">{cabin.name}</h3>
                                </div>
                                <p className="ftuwg-cabin-card-desc">{cabin.desc}</p>
                                <ul className="ftuwg-cabin-card-list">
                                    {cabin.items.map((item, i) => (
                                        <li key={i}><CheckCircle size={14} /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT IS INCLUDED ── */}
            <section className="ftuwg-fare-section">
                <div className="ftuwg-fare-container">
                    <div className="ftuwg-fare-grid">

                        <div className="ftuwg-fare-text-col">
                            <span className="ftuwg-eyebrow">FARE BREAKDOWN</span>
                            <h2 className="ftuwg-section-heading">What Is Included?</h2>
                            <div className="ftuwg-heading-separator-bar"></div>
                            <p className="ftuwg-fare-lead">Most Uniworld cruise fares include:</p>

                            <div className="ftuwg-fare-list">
                                {uniIncluded.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ftuwg-fare-item">
                                        <div className="ftuwg-fare-item-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="ftuwg-fare-image-col">
                            <div className="ftuwg-fare-image-frame">
                                <div className="ftuwg-fare-placeholder">
                                    <Sparkles size={40} />
                                    <span>All-Inclusive Luxury Experience</span>
                                </div>
                            </div>
                            <div className="ftuwg-fare-note-card">
                                <div className="ftuwg-fare-note-icon"><AlertTriangle size={18} /></div>
                                <p className="ftuwg-fare-note-body">Optional services such as spa, airfare, and shopping cost extra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO PACK ── */}
            <section className="ftuwg-pack-section">
                <div className="ftuwg-pack-container">
                    <div className="ftuwg-pack-header">
                        <span className="ftuwg-eyebrow">PACKING GUIDE</span>
                        <h2 className="ftuwg-section-heading">What to Pack</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered"></div>
                    </div>

                    <p className="ftuwg-pack-lead">Packing for a river cruise is usually simpler than packing for an ocean voyage.</p>

                    <div className="ftuwg-pack-grid">
                        {ftuwgPackList.map(({ Icon, text }, idx) => (
                            <div key={idx} className="ftuwg-pack-item">
                                <div className="ftuwg-pack-item-icon"><Icon size={22} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="ftuwg-pack-footnote">Formal attire is generally not required.</p>
                </div>
            </section>

            {/* ── TYPICAL DAY ── */}
            <section className="ftuwg-day-section">
                <div className="ftuwg-day-container">
                    <div className="ftuwg-day-header">
                        <span className="ftuwg-eyebrow ftuwg-eyebrow-light">ONBOARD RHYTHM</span>
                        <h2 className="ftuwg-section-heading ftuwg-white-heading">What a Typical Day Looks Like</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered ftuwg-separator-white"></div>
                    </div>

                    <p className="ftuwg-day-lead">Every itinerary differs slightly, but a typical day may include:</p>

                    <div className="ftuwg-day-grid">
                        {uniTypicalDay.map(({ label, Icon, items }, idx) => (
                            <div key={idx} className="ftuwg-day-card">
                                <div className="ftuwg-day-card-icon"><Icon size={26} /></div>
                                <h3 className="ftuwg-day-card-title">{label}</h3>
                                <ul className="ftuwg-day-card-list">
                                    {items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <p className="ftuwg-day-footnote">The relaxed pace allows guests to enjoy both sightseeing and onboard amenities.</p>
                </div>
            </section>

            {/* ── DINING EXPECTATIONS ── */}
            <section className="ftuwg-dining-section">
                <div className="ftuwg-dining-container">
                    <div className="ftuwg-dining-grid">

                        <div className="ftuwg-dining-image-col">
                            <div className="ftuwg-image-frame">
                                <div className="ftuwg-placeholder-visual">
                                    <Utensils size={48} />
                                    <span>Gourmet dining aboard a Uniworld river cruise</span>
                                </div>
                            </div>
                        </div>

                        <div className="ftuwg-dining-text-col">
                            <span className="ftuwg-eyebrow">CULINARY EXPERIENCE</span>
                            <h2 className="ftuwg-section-heading">Dining Expectations</h2>
                            <div className="ftuwg-heading-separator-bar"></div>
                            <p className="ftuwg-dining-lead">Dining is a highlight of the Uniworld experience.</p>
                            <p className="ftuwg-dining-body">Guests can expect:</p>
                            <ul className="ftuwg-simple-list">
                                {uniDining.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {item}</li>
                                ))}
                            </ul>
                            <p className="ftuwg-dining-footnote">Menus often change throughout the itinerary to reflect local cuisine.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="ftuwg-excursions-section">
                <div className="ftuwg-excursions-container">
                    <div className="ftuwg-excursions-grid">

                        <div className="ftuwg-excursions-text-col">
                            <span className="ftuwg-eyebrow">GOING ASHORE</span>
                            <h2 className="ftuwg-section-heading">Shore Excursions</h2>
                            <div className="ftuwg-heading-separator-bar"></div>
                            <p className="ftuwg-excursions-lead">Most Uniworld cruises include guided shore excursions led by expert local guides.</p>

                            <div className="ftuwg-excursions-list">
                                {uniExcursions.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="ftuwg-excursions-item">
                                        <div className="ftuwg-excursions-item-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="ftuwg-excursions-footnote">Many itineraries provide multiple excursion choices based on activity level.</p>
                        </div>

                        <div className="ftuwg-excursions-image-col">
                            <div className="ftuwg-image-frame">
                                <div className="ftuwg-placeholder-visual">
                                    <Map size={48} />
                                    <span>Guided walking tour through a European village</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ONBOARD ATMOSPHERE ── */}
            <section className="ftuwg-atmosphere-section">
                <div className="ftuwg-atmosphere-container">
                    <div className="ftuwg-atmosphere-grid">

                        <div className="ftuwg-atmosphere-image-col">
                            <div className="ftuwg-image-frame">
                                <div className="ftuwg-placeholder-visual">
                                    <Sun size={48} />
                                    <span>Guests relaxing on the sun deck</span>
                                </div>
                            </div>
                            <div className="ftuwg-atmosphere-note-box">
                                <p>Unlike ocean cruises, river ships do not feature casinos, water parks, or Broadway-style productions.</p>
                            </div>
                        </div>

                        <div className="ftuwg-atmosphere-text-col">
                            <span className="ftuwg-eyebrow">LIFE ONBOARD</span>
                            <h2 className="ftuwg-section-heading">Onboard Atmosphere</h2>
                            <div className="ftuwg-heading-separator-bar"></div>
                            <p className="ftuwg-atmosphere-lead">Uniworld ships offer a relaxed and elegant environment.</p>
                            <p className="ftuwg-atmosphere-body">Guests typically enjoy:</p>
                            <ul className="ftuwg-simple-list">
                                {ftuwgAtmosphere.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── HELPFUL TIPS & COMMON MISTAKES ── */}
            <section className="ftuwg-tips-section">
                <div className="ftuwg-tips-container">
                    <div className="ftuwg-tips-header">
                        <span className="ftuwg-eyebrow">PRACTICAL ADVICE</span>
                        <h2 className="ftuwg-section-heading">Tips & Mistakes to Avoid</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered"></div>
                    </div>

                    <div className="ftuwg-tips-grid">

                        <div className="ftuwg-tips-col">
                            <div className="ftuwg-tips-col-header">
                                <div className="ftuwg-tips-col-icon ftuwg-tips-icon-good"><ThumbsUp size={22} /></div>
                                <h3 className="ftuwg-tips-col-title">Helpful Tips for First-Time Guests</h3>
                            </div>
                            <p className="ftuwg-tips-col-lead">To make the most of your cruise:</p>
                            <ul className="ftuwg-tips-list">
                                {ftuwgTips.map((tip, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {tip}</li>
                                ))}
                            </ul>
                            <p className="ftuwg-tips-footnote">Planning ahead helps reduce travel stress.</p>
                        </div>

                        <div className="ftuwg-tips-col">
                            <div className="ftuwg-tips-col-header">
                                <div className="ftuwg-tips-col-icon ftuwg-tips-icon-bad"><XCircle size={22} /></div>
                                <h3 className="ftuwg-tips-col-title">Common Mistakes to Avoid</h3>
                            </div>
                            <p className="ftuwg-tips-col-lead">Many first-time travelers can improve their experience by avoiding a few common mistakes.</p>
                            <p className="ftuwg-tips-col-lead">Try not to:</p>
                            <ul className="ftuwg-tips-list ftuwg-tips-list-avoid">
                                {uniMistakes.map((mistake, idx) => (
                                    <li key={idx}><XCircle size={16} /> {mistake}</li>
                                ))}
                            </ul>
                            <p className="ftuwg-tips-footnote">Simple preparation helps ensure a smooth vacation.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── IS UNIWORLD RIGHT FOR YOU ── */}
            <section className="ftuwg-fit-section">
                <div className="ftuwg-fit-container">
                    <div className="ftuwg-fit-header">
                        <span className="ftuwg-eyebrow ftuwg-eyebrow-light">SELF-CHECK</span>
                        <h2 className="ftuwg-section-heading ftuwg-white-heading">Is Uniworld Right for You?</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered ftuwg-separator-white"></div>
                    </div>

                    <p className="ftuwg-fit-lead">Uniworld is an excellent choice if you enjoy:</p>

                    <div className="ftuwg-fit-tags">
                        {uniRightFor.map((item, idx) => (
                            <span key={idx} className="ftuwg-fit-tag"><CheckCircle size={15} /> {item}</span>
                        ))}
                    </div>

                    <div className="ftuwg-fit-alt-box">
                        <p>Travelers seeking large-scale entertainment or extensive nightlife may prefer ocean cruises instead.</p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="ftuwg-takeaways-section">
                <div className="ftuwg-takeaways-container">
                    <div className="ftuwg-takeaways-header">
                        <span className="ftuwg-eyebrow">QUICK RECAP</span>
                        <h2 className="ftuwg-section-heading">Key Takeaways</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered"></div>
                    </div>

                    <div className="ftuwg-takeaways-list">
                        {ftuwgTakeaways.map((item, idx) => (
                            <div key={idx} className="ftuwg-takeaway-item">
                                <div className="ftuwg-takeaway-number">{idx + 1}</div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="ftuwg-expert-insight-section">
                <div className="ftuwg-expert-insight-container">

                    <div className="ftuwg-expert-portrait-panel">
                        <div className="ftuwg-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - First-Time Cruise Specialist" />
                        </div>
                        <div className="ftuwg-expert-stats-strip">
                            <div className="ftuwg-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="ftuwg-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Visited</p>
                            </div>
                        </div>
                    </div>

                    <div className="ftuwg-expert-content-panel">
                        <span className="ftuwg-eyebrow">MEET THE CEO</span>
                        <h2 className="ftuwg-section-heading">Insight from Angela Hughes</h2>
                        <div className="ftuwg-heading-separator-bar"></div>

                        <p className="ftuwg-expert-quote">
                            "For first-time Uniworld guests, the biggest surprise is always how uncomplicated everything feels. Every detail — from the moment you step aboard to shore excursions — is handled with genuine care. My advice: let yourself be guided and simply enjoy the journey."
                        </p>

                        <div className="ftuwg-expert-priorities">
                            <h5>First-Timer Priorities Matrix:</h5>
                            <div className="ftuwg-expert-pills">
                                {['Itinerary Selection', 'Cabin Category Choice', 'Pre-Cruise Flights', 'Shore Excursion Planning', 'Packing Essentials', 'Travel Insurance'].map(pill => (
                                    <span key={pill} className="ftuwg-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="ftuwg-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes has guided hundreds of first-time river cruisers through the Uniworld experience — ensuring every guest chooses the right itinerary, the right cabin, and boards with total confidence.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="ftuwg-faqs-section">
                <div className="ftuwg-faqs-container">
                    <div className="ftuwg-faqs-header">
                        <span className="ftuwg-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="ftuwg-section-heading">Frequently Asked Questions</h2>
                        <div className="ftuwg-heading-separator-bar ftuwg-bar-centered"></div>
                    </div>
                    <div className="ftuwg-faqs-list">
                        {ftuwgFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="ftuwg-faqs-item"
                                onClick={() => ftuwgToggleFaq(index)}
                            >
                                <div className="ftuwg-faqs-question">
                                    <span>{faq.question}</span>
                                    <span className="ftuwg-faqs-toggle">{ftuwgActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {ftuwgActiveFaq === index && (
                                    <p className="ftuwg-faqs-answer">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="ftuwg-cta-section">
                <div className="ftuwg-cta-aurora-glow"></div>
                <div className="ftuwg-cta-crystal ftuwg-cta-crystal-1"></div>
                <div className="ftuwg-cta-crystal ftuwg-cta-crystal-2"></div>
                <div className="ftuwg-cta-crystal ftuwg-cta-crystal-3"></div>
                <div className="ftuwg-cta-grid-lines"></div>

                <div className="ftuwg-cta-content">
                    <div className="ftuwg-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="ftuwg-cta-eyebrow">START PLANNING YOUR JOURNEY</span>
                    <h2 className="ftuwg-cta-title">Ready to Book Your First<br /> Uniworld River Cruise?</h2>
                    <div className="ftuwg-cta-bar"></div>
                    <p className="ftuwg-cta-subtitle">
                        Compare itineraries, choose the cabin that fits your travel style, and start planning an unforgettable luxury river journey.
                    </p>
                    <div className="ftuwg-cta-actions">
                        <Link to="/contact" className="ftuwg-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="ftuwg-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FirstTimeUniworldGuide