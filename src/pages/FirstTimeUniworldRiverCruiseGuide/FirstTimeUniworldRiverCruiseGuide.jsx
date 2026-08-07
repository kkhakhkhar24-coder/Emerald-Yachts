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

function FirstTimeUniworldGuide() {

    const [uniActiveFaq, setUniActiveFaq] = useState(null)
    const uniToggleFaq = i => setUniActiveFaq(uniActiveFaq === i ? null : i)

    const uniItineraries = [
        { dest: 'Danube', best: 'First-time cruisers' },
        { dest: 'Rhine', best: 'Scenic landscapes' },
        { dest: 'Seine', best: 'French culture' },
        { dest: 'Douro', best: 'Wine enthusiasts' },
        { dest: 'Rhône', best: 'Food and history' },
        { dest: 'Nile', best: 'Ancient Egypt' },
        { dest: 'Venice Lagoon', best: 'Italian art and architecture' },
        { dest: 'Ganges', best: 'Cultural exploration' }
    ]

    const uniCabins = [
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

    const uniPackList = [
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

    const uniAtmosphere = [
        'Quiet lounges', 'Scenic sun decks', 'Boutique décor',
        'Friendly crew', 'Destination lectures', 'Evening entertainment'
    ]

    const uniTips = [
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

    const uniTakeaways = [
        'The Danube and Rhine are excellent first itineraries.',
        'Uniworld offers an all-inclusive luxury river cruise experience.',
        'French Balcony cabins are popular for scenic views.',
        'Guided excursions are included on most itineraries.',
        'Comfortable walking shoes are essential for daily sightseeing.',
        'Booking early provides the best cabin selection.'
    ]

    const uniFaqs = [
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

    const uniSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "logo": "https://www.tripsshipsluxurytravel.com/logo.png"
            },
            {
                "@type": "WebPage",
                "name": "First-Time Uniworld River Cruise Guide",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/first-time-guide/",
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
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/first-time-guide/"
                },
                "datePublished": "2026-08-06",
                "dateModified": "2026-08-06"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "First-Time Guide", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/first-time-guide/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uniFaqs.map(f => ({
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
                <link rel="canonical" href="https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/first-time-guide/" />
                <script type="application/ld+json">{JSON.stringify(uniSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uni-hero-section">
                <div className="uni-hero-bg"></div>
                <div className="uni-hero-overlay-layer"></div>
                <div className="uni-hero-content-wrapper">
                    <div className="uni-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uni-hero-main-title">
                        First-Time Uniworld <br /> River Cruise Guide
                    </h1>
                    <p className="uni-hero-subtitle-text">
                        Everything first-time guests need to know before sailing — from choosing an itinerary and cabin to dining, excursions, packing, and onboard etiquette.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uni-intro-section">
                <div className="uni-intro-container">
                    <div className="uni-intro-grid">
                        <div className="uni-intro-text-col">
                            <p className="uni-intro-lead">Planning your first Uniworld River Cruise is exciting, especially if you've never experienced river cruising before.</p>
                            <p className="uni-intro-body">Unlike large ocean cruises, Uniworld Boutique River Cruises focuses on intimate ships, immersive cultural experiences, luxury accommodations, and personalized service. Understanding what to expect before you sail can help you choose the right itinerary, pack appropriately, and make the most of every day onboard.</p>
                            <p className="uni-intro-body">This guide covers everything first-time guests should know—from booking your cruise and selecting a cabin to dining, excursions, onboard etiquette, and practical travel tips.</p>
                        </div>
                        <div className="uni-intro-image-col">
                            <div className="uni-intro-image-frame">
                                <div className="uni-intro-placeholder">
                                    <Ship size={48} />
                                    <span>First-time Uniworld River Cruise experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE UNIWORLD ── */}
            <section className="uni-why-section">
                <div className="uni-why-container">
                    <div className="uni-why-grid">

                        <div className="uni-why-text-col">
                            <span className="uni-eyebrow">GETTING STARTED</span>
                            <h2 className="uni-section-heading">Why Choose Uniworld for Your First River Cruise?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-why-lead">Uniworld is known for offering a boutique luxury experience rather than a traditional cruise vacation.</p>
                            <p className="uni-why-body">For travelers new to river cruising, the all-inclusive approach simplifies planning and minimizes unexpected onboard expenses.</p>
                        </div>

                        <div className="uni-why-list-col">
                            <div className="uni-highlight-grid">
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
                                    <div key={idx} className="uni-highlight-item">
                                        <div className="uni-highlight-icon"><Icon size={20} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CHOOSING THE RIGHT ITINERARY ── */}
            <section className="uni-itinerary-section">
                <div className="uni-itinerary-container">
                    <div className="uni-itinerary-header">
                        <span className="uni-eyebrow">PLAN YOUR ROUTE</span>
                        <h2 className="uni-section-heading">Choosing the Right Itinerary</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                        <p className="uni-itinerary-lead">Selecting the right destination is often the most important decision.</p>
                    </div>

                    <div className="uni-itinerary-grid">
                        {uniItineraries.map((item, idx) => (
                            <div key={idx} className="uni-itinerary-card">
                                <div className="uni-itinerary-card-top">
                                    <div className="uni-itinerary-card-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="uni-itinerary-card-num">0{idx + 1}</span>
                                </div>
                                <h3 className="uni-itinerary-card-title">{item.dest}</h3>
                                <p className="uni-itinerary-card-desc">{item.best}</p>
                            </div>
                        ))}
                    </div>

                    <p className="uni-itinerary-footnote">A seven- or eight-day itinerary is often ideal for first-time guests.</p>
                </div>
            </section>

            {/* ── SELECTING THE BEST CABIN ── */}
            <section className="uni-cabin-section">
                <div className="uni-cabin-container">
                    <div className="uni-cabin-header">
                        <span className="uni-eyebrow uni-eyebrow-light">ACCOMMODATIONS</span>
                        <h2 className="uni-section-heading uni-white-heading">Selecting the Best Cabin</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                        <p className="uni-cabin-lead">Uniworld offers several accommodation categories.</p>
                    </div>

                    <div className="uni-cabin-grid">
                        {uniCabins.map((cabin, idx) => (
                            <div key={idx} className="uni-cabin-card">
                                <div className="uni-cabin-card-header">
                                    <div className="uni-cabin-card-icon"><cabin.Icon size={22} /></div>
                                    <h3 className="uni-cabin-card-title">{cabin.name}</h3>
                                </div>
                                <p className="uni-cabin-card-desc">{cabin.desc}</p>
                                <ul className="uni-cabin-card-list">
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
            <section className="uni-fare-section">
                <div className="uni-fare-container">
                    <div className="uni-fare-grid">

                        <div className="uni-fare-text-col">
                            <span className="uni-eyebrow">FARE BREAKDOWN</span>
                            <h2 className="uni-section-heading">What Is Included?</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-fare-lead">Most Uniworld cruise fares include:</p>

                            <div className="uni-fare-list">
                                {uniIncluded.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-fare-item">
                                        <div className="uni-fare-item-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="uni-fare-image-col">
                            <div className="uni-fare-image-frame">
                                <div className="uni-fare-placeholder">
                                    <Sparkles size={40} />
                                    <span>All-Inclusive Luxury Experience</span>
                                </div>
                            </div>
                            <div className="uni-fare-note-card">
                                <div className="uni-fare-note-icon"><AlertTriangle size={18} /></div>
                                <p className="uni-fare-note-body">Optional services such as spa, airfare, and shopping cost extra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT TO PACK ── */}
            <section className="uni-pack-section">
                <div className="uni-pack-container">
                    <div className="uni-pack-header">
                        <span className="uni-eyebrow">PACKING GUIDE</span>
                        <h2 className="uni-section-heading">What to Pack</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <p className="uni-pack-lead">Packing for a river cruise is usually simpler than packing for an ocean voyage.</p>

                    <div className="uni-pack-grid">
                        {uniPackList.map(({ Icon, text }, idx) => (
                            <div key={idx} className="uni-pack-item">
                                <div className="uni-pack-item-icon"><Icon size={22} /></div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="uni-pack-footnote">Formal attire is generally not required.</p>
                </div>
            </section>

            {/* ── TYPICAL DAY ── */}
            <section className="uni-day-section">
                <div className="uni-day-container">
                    <div className="uni-day-header">
                        <span className="uni-eyebrow uni-eyebrow-light">ONBOARD RHYTHM</span>
                        <h2 className="uni-section-heading uni-white-heading">What a Typical Day Looks Like</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>

                    <p className="uni-day-lead">Every itinerary differs slightly, but a typical day may include:</p>

                    <div className="uni-day-grid">
                        {uniTypicalDay.map(({ label, Icon, items }, idx) => (
                            <div key={idx} className="uni-day-card">
                                <div className="uni-day-card-icon"><Icon size={26} /></div>
                                <h3 className="uni-day-card-title">{label}</h3>
                                <ul className="uni-day-card-list">
                                    {items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <p className="uni-day-footnote">The relaxed pace allows guests to enjoy both sightseeing and onboard amenities.</p>
                </div>
            </section>

            {/* ── DINING EXPECTATIONS ── */}
            <section className="uni-dining-section">
                <div className="uni-dining-container">
                    <div className="uni-dining-grid">

                        <div className="uni-dining-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-placeholder-visual">
                                    <Utensils size={48} />
                                    <span>Gourmet dining aboard a Uniworld river cruise</span>
                                </div>
                            </div>
                        </div>

                        <div className="uni-dining-text-col">
                            <span className="uni-eyebrow">CULINARY EXPERIENCE</span>
                            <h2 className="uni-section-heading">Dining Expectations</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-dining-lead">Dining is a highlight of the Uniworld experience.</p>
                            <p className="uni-dining-body">Guests can expect:</p>
                            <ul className="uni-simple-list">
                                {uniDining.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {item}</li>
                                ))}
                            </ul>
                            <p className="uni-dining-footnote">Menus often change throughout the itinerary to reflect local cuisine.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="uni-excursions-section">
                <div className="uni-excursions-container">
                    <div className="uni-excursions-grid">

                        <div className="uni-excursions-text-col">
                            <span className="uni-eyebrow">GOING ASHORE</span>
                            <h2 className="uni-section-heading">Shore Excursions</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-excursions-lead">Most Uniworld cruises include guided shore excursions led by expert local guides.</p>

                            <div className="uni-excursions-list">
                                {uniExcursions.map(({ Icon, text }, idx) => (
                                    <div key={idx} className="uni-excursions-item">
                                        <div className="uni-excursions-item-icon"><Icon size={18} /></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="uni-excursions-footnote">Many itineraries provide multiple excursion choices based on activity level.</p>
                        </div>

                        <div className="uni-excursions-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-placeholder-visual">
                                    <Map size={48} />
                                    <span>Guided walking tour through a European village</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ONBOARD ATMOSPHERE ── */}
            <section className="uni-atmosphere-section">
                <div className="uni-atmosphere-container">
                    <div className="uni-atmosphere-grid">

                        <div className="uni-atmosphere-image-col">
                            <div className="uni-image-frame">
                                <div className="uni-placeholder-visual">
                                    <Sun size={48} />
                                    <span>Guests relaxing on the sun deck</span>
                                </div>
                            </div>
                            <div className="uni-atmosphere-note-box">
                                <p>Unlike ocean cruises, river ships do not feature casinos, water parks, or Broadway-style productions.</p>
                            </div>
                        </div>

                        <div className="uni-atmosphere-text-col">
                            <span className="uni-eyebrow">LIFE ONBOARD</span>
                            <h2 className="uni-section-heading">Onboard Atmosphere</h2>
                            <div className="uni-heading-separator-bar"></div>
                            <p className="uni-atmosphere-lead">Uniworld ships offer a relaxed and elegant environment.</p>
                            <p className="uni-atmosphere-body">Guests typically enjoy:</p>
                            <ul className="uni-simple-list">
                                {uniAtmosphere.map((item, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── HELPFUL TIPS & COMMON MISTAKES ── */}
            <section className="uni-tips-section">
                <div className="uni-tips-container">
                    <div className="uni-tips-header">
                        <span className="uni-eyebrow">PRACTICAL ADVICE</span>
                        <h2 className="uni-section-heading">Tips & Mistakes to Avoid</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-tips-grid">

                        <div className="uni-tips-col">
                            <div className="uni-tips-col-header">
                                <div className="uni-tips-col-icon uni-tips-icon-good"><ThumbsUp size={22} /></div>
                                <h3 className="uni-tips-col-title">Helpful Tips for First-Time Guests</h3>
                            </div>
                            <p className="uni-tips-col-lead">To make the most of your cruise:</p>
                            <ul className="uni-tips-list">
                                {uniTips.map((tip, idx) => (
                                    <li key={idx}><CheckCircle size={16} /> {tip}</li>
                                ))}
                            </ul>
                            <p className="uni-tips-footnote">Planning ahead helps reduce travel stress.</p>
                        </div>

                        <div className="uni-tips-col">
                            <div className="uni-tips-col-header">
                                <div className="uni-tips-col-icon uni-tips-icon-bad"><XCircle size={22} /></div>
                                <h3 className="uni-tips-col-title">Common Mistakes to Avoid</h3>
                            </div>
                            <p className="uni-tips-col-lead">Many first-time travelers can improve their experience by avoiding a few common mistakes.</p>
                            <p className="uni-tips-col-lead">Try not to:</p>
                            <ul className="uni-tips-list uni-tips-list-avoid">
                                {uniMistakes.map((mistake, idx) => (
                                    <li key={idx}><XCircle size={16} /> {mistake}</li>
                                ))}
                            </ul>
                            <p className="uni-tips-footnote">Simple preparation helps ensure a smooth vacation.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── IS UNIWORLD RIGHT FOR YOU ── */}
            <section className="uni-fit-section">
                <div className="uni-fit-container">
                    <div className="uni-fit-header">
                        <span className="uni-eyebrow uni-eyebrow-light">SELF-CHECK</span>
                        <h2 className="uni-section-heading uni-white-heading">Is Uniworld Right for You?</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered uni-separator-white"></div>
                    </div>

                    <p className="uni-fit-lead">Uniworld is an excellent choice if you enjoy:</p>

                    <div className="uni-fit-tags">
                        {uniRightFor.map((item, idx) => (
                            <span key={idx} className="uni-fit-tag"><CheckCircle size={15} /> {item}</span>
                        ))}
                    </div>

                    <div className="uni-fit-alt-box">
                        <p>Travelers seeking large-scale entertainment or extensive nightlife may prefer ocean cruises instead.</p>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uni-takeaways-section">
                <div className="uni-takeaways-container">
                    <div className="uni-takeaways-header">
                        <span className="uni-eyebrow">QUICK RECAP</span>
                        <h2 className="uni-section-heading">Key Takeaways</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>

                    <div className="uni-takeaways-list">
                        {uniTakeaways.map((item, idx) => (
                            <div key={idx} className="uni-takeaway-item">
                                <div className="uni-takeaway-number">{idx + 1}</div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uni-faqs-section">
                <div className="uni-faqs-container">
                    <div className="uni-faqs-header">
                        <span className="uni-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="uni-section-heading">Frequently Asked Questions</h2>
                        <div className="uni-heading-separator-bar uni-bar-centered"></div>
                    </div>
                    <div className="uni-faqs-list">
                        {uniFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uni-faqs-item"
                                onClick={() => uniToggleFaq(index)}
                            >
                                <div className="uni-faqs-question">
                                    <span>{faq.question}</span>
                                    <span className="uni-faqs-toggle">{uniActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {uniActiveFaq === index && (
                                    <p className="uni-faqs-answer">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uni-cta-section">
                <div className="uni-cta-aurora-glow"></div>
                <div className="uni-cta-crystal uni-cta-crystal-1"></div>
                <div className="uni-cta-crystal uni-cta-crystal-2"></div>
                <div className="uni-cta-crystal uni-cta-crystal-3"></div>
                <div className="uni-cta-grid-lines"></div>

                <div className="uni-cta-content">
                    <div className="uni-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uni-cta-eyebrow">START PLANNING YOUR JOURNEY</span>
                    <h2 className="uni-cta-title">Ready to Book Your First<br /> Uniworld River Cruise?</h2>
                    <div className="uni-cta-bar"></div>
                    <p className="uni-cta-subtitle">
                        Compare itineraries, choose the cabin that fits your travel style, and start planning an unforgettable luxury river journey.
                    </p>
                    <div className="uni-cta-actions">
                        <Link to="/contact" className="uni-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="uni-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FirstTimeUniworldGuide