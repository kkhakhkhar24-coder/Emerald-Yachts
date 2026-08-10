import Navbar from '../../components/Navbar/Navbar'
import './UniworldDressCodePacking.css'

import {
    Shirt, Sun, CloudRain, Snowflake, Leaf, Briefcase, Footprints,
    MapPin, CheckCircle, Luggage, XCircle,
    Sparkles, Anchor, Phone, LayoutList, ChevronRight,
    Plane, Backpack, Church, Wind
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import { Compass, ArrowRight } from 'lucide-react'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function UniworldDressCodePacking() {

    const [udcActiveFaq, setUdcActiveFaq] = useState(null)
    const udcToggleFaq = i => setUdcActiveFaq(udcActiveFaq === i ? null : i)

    const udcFaqs = [
        { question: 'What is the dress code on Uniworld River Cruises?', answer: 'Smart casual attire is appropriate for most onboard activities and evening dining.' },
        { question: 'Do I need formal clothes?', answer: 'No. Most itineraries do not require tuxedos or formal gowns.' },
        { question: 'What shoes should I bring?', answer: 'Comfortable walking shoes are essential, along with one pair of smart evening shoes.' },
        { question: 'Can I wear jeans to dinner?', answer: 'Yes. Neat, dark-colored jeans may be acceptable when paired with smart casual clothing.' },
        { question: 'What should I pack for a summer cruise?', answer: 'Lightweight clothing, sunglasses, sunscreen, comfortable shoes, and a hat are recommended.' },
        { question: 'What should I wear on excursions?', answer: 'Comfortable, weather-appropriate clothing and supportive walking shoes are ideal.' },
        { question: 'How much luggage should I bring?', answer: 'One medium suitcase and a carry-on are sufficient for most travelers.' },
        { question: 'Is a jacket necessary?', answer: 'Yes. Even in warmer months, evenings and rainy days can be cool.' },
        { question: 'Are laundry services available?', answer: 'Laundry services are available on many sailings, though fees or availability may vary by ship and cabin category.' },
        { question: 'Should I pack dress shoes?', answer: 'One pair of comfortable smart shoes is generally enough for evening dining.' },
        { question: 'Do cabins include hair dryers?', answer: 'Yes. Most Uniworld cabins provide a hair dryer.' },
        { question: 'What should I wear to visit churches?', answer: 'Clothing that covers shoulders and knees is recommended when visiting religious sites.' },
        { question: 'Should I bring cash?', answer: 'A small amount of local currency is useful for personal purchases, although cards are widely accepted in many destinations.' },
        { question: 'Are backpacks allowed on excursions?', answer: 'Yes. A lightweight day backpack is ideal for carrying essentials during sightseeing.' },
        { question: 'What is the biggest packing mistake?', answer: 'Overpacking. Choosing versatile clothing and limiting unnecessary footwear makes travel much easier.' }
    ]

    const udcSeasons = [
        {
            season: 'Spring',
            Icon: Leaf,
            note: 'Spring weather can vary throughout Europe.',
            items: ['Lightweight jacket', 'Long-sleeve shirts', 'Comfortable jeans', 'Waterproof shoes', 'Umbrella']
        },
        {
            season: 'Summer',
            Icon: Sun,
            note: 'Light fabrics help keep you comfortable during warm excursions.',
            items: ['Breathable clothing', 'Sun hat', 'Sunglasses', 'Shorts', 'Sandals', 'Sunscreen', 'Reusable water bottle']
        },
        {
            season: 'Autumn',
            Icon: CloudRain,
            note: 'Temperatures can change throughout the day.',
            items: ['Sweaters', 'Light coat', 'Waterproof jacket', 'Comfortable walking shoes', 'Layered clothing']
        },
        {
            season: 'Winter & Christmas Markets',
            Icon: Snowflake,
            note: 'Christmas Market itineraries often involve extended outdoor walking.',
            items: ['Warm coat', 'Gloves', 'Hat', 'Scarf', 'Waterproof boots', 'Thermal layers']
        }
    ]

    const udcChecklist = [
        {
            title: 'Travel Documents',
            Icon: Plane,
            items: ['Passport', 'Travel insurance documents', 'Cruise confirmation', 'Flight information', 'Credit cards', 'Local currency']
        },
        {
            title: 'Clothing',
            Icon: Shirt,
            items: ['Casual daytime outfits', 'Evening attire', 'Comfortable walking shoes', 'Undergarments', 'Sleepwear', 'Socks', 'Jacket']
        },
        {
            title: 'Personal Items',
            Icon: Backpack,
            items: ['Prescription medications', 'Toiletries', 'Chargers', 'Power adapter', 'Reusable water bottle', 'Camera', 'Day backpack']
        }
    ]

    const udcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/",
                "name": "Uniworld Dress Code and Packing Guide",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/",
                "description": "Learn the Uniworld River Cruises dress code, what to pack for every season, excursion essentials, evening attire, and luggage tips for a stress-free trip.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/#article",
                "headline": "Uniworld Dress Code and Packing Guide",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/",
                "description": "Complete guide to the Uniworld River Cruises dress code, packing checklist, seasonal clothing recommendations, and travel essentials.",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/" },
                "datePublished": "2026-08-07",
                "dateModified": "2026-08-07"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Dress Code & Packing", "item": "https://www.tripsandships.com/uniworld-river-cruises/dress-code-packing/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": udcFaqs.map(f => ({
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
                <title>Uniworld Dress Code & Packing Guide</title>
                <meta name="title" content="Uniworld Dress Code & Packing Guide" />
                <meta name="description" content="Learn the Uniworld River Cruises dress code, what to pack for every season, excursion essentials, evening attire, and luggage tips for a stress-free trip." />
                <meta name="keywords" content="Uniworld Dress Code and Packing Guide, Uniworld dress code, what to pack for Uniworld cruise, river cruise packing list, Uniworld evening attire, luxury river cruise clothing, Uniworld travel tips, river cruise wardrobe" />
                <script type="application/ld+json">{JSON.stringify(udcSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="udc-hero-section">
                <div className="udc-hero-bg"></div>
                <div className="udc-hero-overlay"></div>
                <div className="udc-hero-content">
                    <div className="udc-hero-eyebrow">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="udc-hero-title">Uniworld Dress Code and <br /> Packing Guide</h1>
                    <p className="udc-hero-subtitle">
                        Learn the Uniworld River Cruises dress code, what to pack for every season, excursion essentials, evening attire, and luggage tips for a stress-free trip.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="udc-intro-section">
                <div className="udc-container">
                    <div className="udc-intro-grid">
                        <div className="udc-intro-text-col">
                            <span className="udc-intro-eyebrow">UNIWORLD RIVER CRUISES</span>
                            <h2 className="udc-intro-heading">Your Complete Packing Guide</h2>
                            <div className="udc-heading-separator"></div>

                            <div className="udc-intro-mobile-image">
                                <div className="udc-intro-image-frame">
                                    <img src="https://placehold.co/800x800/274472/ffffff?text=Packing+Guide" alt="Uniworld River Cruise packing guide" className="udc-intro-image" />
                                </div>
                            </div>

                            <p className="udc-intro-lead">Packing for a Uniworld River Cruise is generally easier than packing for a large ocean cruise.</p>
                            <p className="udc-body-text">Most itineraries focus on sightseeing, cultural experiences, and relaxed evenings rather than formal events, allowing guests to travel comfortably without overpacking. Knowing what to wear during excursions, onboard activities, and dinner helps ensure you're prepared for every part of your journey.</p>
                            <p className="udc-body-text">This guide explains Uniworld's typical dress code, provides seasonal packing advice, and shares practical tips to help you travel comfortably while making the most of your luxury river cruise.</p>
                        </div>
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Packing+Guide" alt="Uniworld River Cruise packing guide" className="udc-intro-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ONBOARD DRESS CODE ── */}
            <section className="udc-section udc-section-alt udc-onboard-section">
                <div className="udc-container">
                    <div className="udc-two-col">
                        <div>
                            <span className="udc-eyebrow">ONBOARD ATTIRE</span>
                            <h2 className="udc-section-heading">Understanding the Onboard Dress Code</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">Uniworld maintains an elegant yet relaxed atmosphere. While guests often dress neatly for dinner, there is generally no requirement for formal evening wear on most itineraries.</p>
                            <p className="udc-subheading">Typical attire includes:</p>
                            <div className="udc-chip-grid">
                                {['Smart casual clothing', 'Comfortable daytime outfits', 'Casual resort wear', 'Collared shirts or polo shirts', 'Dresses or blouses', 'Chinos or tailored trousers', 'Comfortable skirts'].map((item, idx) => (
                                    <div key={idx} className="udc-chip">
                                        <CheckCircle size={16} className="udc-chip-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Smart+Casual+Attire" alt="Smart casual attire onboard Uniworld" className="udc-intro-image" />
                            </div>
                            <p className="udc-onboard-caption">
                                <Sparkles size={14} className="udc-onboard-caption-icon" />
                                <span>Most guests prioritize comfort while maintaining a polished appearance.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DAYTIME ATTIRE ── */}
            <section className="udc-section udc-daytime-section">
                <div className="udc-container">
                    <div className="udc-two-col">
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Daytime+Attire" alt="Daytime attire for excursions" className="udc-intro-image" />
                            </div>
                            <p className="udc-daytime-caption">
                                <Sun size={14} className="udc-daytime-caption-icon" />
                                <span>Choose clothing that allows you to comfortably transition between excursions and the ship.</span>
                            </p>
                        </div>
                        <div>
                            <span className="udc-eyebrow">DAYTIME WEAR</span>
                            <h2 className="udc-section-heading">What to Wear During the Day</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">River cruises involve frequent sightseeing and walking tours, so practical clothing is recommended.</p>
                            <p className="udc-subheading">Good daytime choices include:</p>
                            <ul className="udc-list">
                                {['Lightweight shirts', 'Polo shirts', 'Breathable trousers', 'Shorts (where culturally appropriate)', 'Comfortable walking shoes', 'Light sweaters', 'Sunglasses', 'Sun hat'].map((item, idx) => (
                                    <li key={idx} className="udc-list-item">
                                        <ChevronRight size={14} className="udc-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EVENING DINING ATTIRE ── */}
            <section className="udc-section udc-evening-section">
                <div className="udc-container">
                    <div className="udc-evening-grid">
                        <div className="udc-evening-text-col">
                            <span className="udc-eyebrow">EVENING DINING</span>
                            <h2 className="udc-section-heading">Evening Dining Attire</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">Dinner is slightly more refined than daytime activities. Appropriate evening clothing includes:</p>
                            <div className="udc-gender-grid">
                                <div className="udc-gender-card">
                                    <h3 className="udc-gender-title">Women</h3>
                                    <ul className="udc-list">
                                        {['Dresses', 'Blouses', 'Smart trousers', 'Skirts', 'Smart sandals'].map((item, idx) => (
                                            <li key={idx} className="udc-list-item">
                                                <CheckCircle size={14} className="udc-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="udc-gender-card">
                                    <h3 className="udc-gender-title">Men</h3>
                                    <ul className="udc-list">
                                        {['Collared shirts', 'Polo shirts', 'Chinos', 'Dress trousers', 'Loafers or smart shoes'].map((item, idx) => (
                                            <li key={idx} className="udc-list-item">
                                                <CheckCircle size={14} className="udc-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <p className="udc-footnote">Formal gowns and tuxedos are generally unnecessary unless a special event is specifically announced.</p>
                        </div>
                        <div className="udc-evening-image-col">
                            <div className="udc-evening-image-frame">
                                <img src="https://placehold.co/600x800/274472/ffffff?text=Evening+Attire" alt="Evening dining attire" className="udc-evening-image" />
                            </div>
                            <p className="udc-evening-caption">
                                <Sparkles size={14} className="udc-evening-caption-icon" />
                                <span>Smart casual is perfect for most Uniworld evening dining experiences.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SEASONAL PACKING GUIDE ── */}
            <section className="udc-section">
                <div className="udc-container">
                    <div className="udc-center-header">
                        <span className="udc-eyebrow">PLAN AHEAD</span>
                        <h2 className="udc-section-heading">Seasonal Packing Guide</h2>
                        <div className="udc-heading-separator udc-separator-centered"></div>
                    </div>
                    <div className="udc-season-grid">
                        {udcSeasons.map(({ season, Icon, note, items }, idx) => (
                            <div key={idx} className="udc-season-card">
                                <div className="udc-season-icon"><Icon size={24} /></div>
                                <h3 className="udc-season-title">{season}</h3>
                                <p className="udc-season-note">{note}</p>
                                <ul className="udc-season-list">
                                    {items.map((item, iIdx) => (
                                        <li key={iIdx} className="udc-season-item">
                                            <CheckCircle size={14} className="udc-season-item-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ESSENTIAL PACKING CHECKLIST ── */}
            <section className="udc-section udc-section-alt">
                <div className="udc-container">
                    <div className="udc-center-header">
                        <span className="udc-eyebrow">CHECKLIST</span>
                        <h2 className="udc-section-heading">Essential Packing Checklist</h2>
                        <div className="udc-heading-separator udc-separator-centered"></div>
                    </div>
                    <div className="udc-checklist-grid">
                        {udcChecklist.map(({ title, Icon, items }, idx) => (
                            <div key={idx} className="udc-checklist-card">
                                <div className="udc-checklist-icon"><Icon size={22} /></div>
                                <h3 className="udc-checklist-title">{title}</h3>
                                <ul className="udc-list">
                                    {items.map((item, iIdx) => (
                                        <li key={iIdx} className="udc-list-item">
                                            <CheckCircle size={14} className="udc-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SHOES YOU'LL ACTUALLY WEAR ── */}
            <section className="udc-section udc-shoes-section">
                <div className="udc-container">
                    <div className="udc-two-col">
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Recommended+Footwear" alt="Recommended footwear for river cruise" className="udc-intro-image" />
                            </div>
                            <p className="udc-shoes-caption">
                                <Footprints size={14} className="udc-shoes-caption-icon" />
                                <span>Avoid bringing multiple pairs you'll rarely use.</span>
                            </p>
                        </div>
                        <div>
                            <span className="udc-eyebrow">FOOTWEAR</span>
                            <h2 className="udc-section-heading">Shoes You'll Actually Wear</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">Many first-time travelers overpack footwear. A practical selection includes:</p>
                            <ul className="udc-list">
                                {['Comfortable walking shoes', 'Casual evening shoes', 'Sandals (warm-weather cruises)', 'Waterproof footwear (winter or rainy seasons)'].map((item, idx) => (
                                    <li key={idx} className="udc-list-item">
                                        <CheckCircle size={14} className="udc-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SHORE EXCURSIONS ── */}
            <section className="udc-section udc-section-alt udc-excursions-section">
                <div className="udc-container">
                    <div className="udc-two-col">
                        <div>
                            <span className="udc-eyebrow">EXCURSION READINESS</span>
                            <h2 className="udc-section-heading">Dressing for Shore Excursions</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">Excursions involve walking through diverse terrains, so comfortable footwear is often much more important than fashionable shoes. Typical shore excursion activities include:</p>
                            <div className="udc-chip-grid">
                                {['Cobblestone streets', 'Historic staircases', 'Museums', 'Churches', 'Vineyards', 'Markets'].map((item, idx) => (
                                    <div key={idx} className="udc-chip">
                                        <MapPin size={16} className="udc-chip-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Shore+Excursions" alt="Dressing for shore excursions" className="udc-intro-image" />
                            </div>
                            <div className="udc-callout-box">
                                <Church size={20} className="udc-callout-icon" />
                                <p>When visiting religious sites, clothing that covers shoulders and knees may be appropriate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WEATHER CONSIDERATIONS ── */}
            <section className="udc-section udc-weather-section">
                <div className="udc-container">
                    <div className="udc-two-col">
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Weather+Layers" alt="Layered clothing for changing weather" className="udc-intro-image" />
                            </div>
                            <p className="udc-weather-caption">
                                <Wind size={14} className="udc-weather-caption-icon" />
                                <span>This approach minimizes luggage while maximizing comfort.</span>
                            </p>
                        </div>
                        <div>
                            <span className="udc-eyebrow">LAYER SMART</span>
                            <h2 className="udc-section-heading">Weather Considerations</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">European weather can change quickly. Packing layers allows you to adapt throughout the day.</p>
                            <p className="udc-subheading">Suggested layering:</p>
                            <div className="udc-layer-row">
                                {['Base layer', 'Shirt', 'Sweater', 'Waterproof jacket'].map((item, idx) => (
                                    <span key={idx} className="udc-layer-pill">
                                        {item}
                                        {idx < 3 && <ChevronRight size={14} className="udc-layer-arrow" />}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LUGGAGE TIPS ── */}
            <section className="udc-section udc-section-alt udc-luggage-section">
                <div className="udc-container">
                    <div className="udc-two-col">
                        <div>
                            <span className="udc-eyebrow">TRAVEL LIGHT</span>
                            <h2 className="udc-section-heading">Luggage Tips</h2>
                            <div className="udc-heading-separator"></div>
                            <p className="udc-body-text">Most travelers find one medium suitcase and one carry-on sufficient for a week-long river cruise. Recommended luggage includes:</p>
                            <ul className="udc-list">
                                {['Rolling suitcase', 'Small backpack', 'Crossbody bag', 'Packing cubes', 'Luggage tags'].map((item, idx) => (
                                    <li key={idx} className="udc-list-item">
                                        <CheckCircle size={14} className="udc-list-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="udc-intro-image-col">
                            <div className="udc-intro-image-frame">
                                <img src="https://placehold.co/800x800/274472/ffffff?text=Recommended+Luggage" alt="Recommended luggage setup" className="udc-intro-image" />
                            </div>
                            <p className="udc-luggage-caption">
                                <Luggage size={14} className="udc-luggage-caption-icon" />
                                <span>Packing light makes airport transfers and hotel stays easier.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ITEMS TO LEAVE AT HOME ── */}
            <section className="udc-section">
                <div className="udc-container">
                    <div className="udc-center-header">
                        <span className="udc-eyebrow">PACK LIGHT</span>
                        <h2 className="udc-section-heading">Items You Can Leave at Home</h2>
                        <div className="udc-heading-separator udc-separator-centered"></div>
                    </div>
                    <div className="udc-skip-grid">
                        {['Formal evening gowns', 'Tuxedos', 'Multiple dress shoes', 'Beach towels', 'Hair dryer (provided in most cabins)', 'Large amounts of cash'].map((item, idx) => (
                            <div key={idx} className="udc-skip-item">
                                <XCircle size={18} className="udc-skip-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="udc-leave-footnote">
                        <Sparkles size={14} className="udc-leave-footnote-icon" />
                        <span>Keeping luggage simple makes traveling more convenient.</span>
                    </p>
                </div>
            </section>

            {/* ── HELPFUL PACKING TIPS ── */}
            <section className="udc-section udc-section-alt">
                <div className="udc-container">
                    <div className="udc-center-header">
                        <span className="udc-eyebrow">BEFORE DEPARTURE</span>
                        <h2 className="udc-section-heading">Helpful Packing Tips</h2>
                        <div className="udc-heading-separator udc-separator-centered"></div>
                    </div>
                    <div className="udc-tips-grid">
                        {[
                            "Check your destination's weather forecast.",
                            'Review excursion activity levels.',
                            'Pack versatile clothing that can be layered.',
                            'Wear your bulkiest shoes while traveling.',
                            'Leave room in your suitcase for souvenirs.',
                            'Label your luggage clearly.'
                        ].map((tip, idx) => (
                            <div key={idx} className="udc-tip-card">
                                <div className="udc-tip-num">0{idx + 1}</div>
                                <p>{tip}</p>
                            </div>
                        ))}
                    </div>
                    <p className="udc-tips-footnote">
                        <Sparkles size={14} className="udc-tips-footnote-icon" />
                        <span>Planning ahead helps reduce stress during your journey.</span>
                    </p>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="udc-final-section">
                <div className="udc-final-bg"></div>
                <div className="udc-final-container">
                    <div className="udc-final-eyebrow-row">
                        <Sparkles size={16} />
                        <span className="udc-final-eyebrow-text">KEY TAKEAWAYS</span>
                    </div>
                    <h2 className="udc-final-heading">Pack Smart, Travel Comfortably</h2>
                    <div className="udc-final-separator"></div>
                    <div className="udc-final-grid">
                        {[
                            { icon: Shirt, text: 'Uniworld generally follows a smart casual dress code.' },
                            { icon: XCircle, text: 'Formal wear is rarely required.' },
                            { icon: Footprints, text: 'Comfortable walking shoes are one of the most important items to pack.' },
                            { icon: CloudRain, text: 'Layered clothing works well across changing European weather.' },
                            { icon: MapPin, text: 'Pack according to your itinerary and season.' },
                            { icon: Luggage, text: 'Bring only versatile clothing to avoid overpacking.' },
                            { icon: CheckCircle, text: 'A medium suitcase is sufficient for most week-long cruises.' }
                        ].map(({ icon: Icon, text }, idx) => (
                            <div key={idx} className="udc-final-item">
                                <div className="udc-final-item-icon">
                                    <Icon size={18} />
                                </div>
                                <p className="udc-final-item-text">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="udc-expert-insight-section">
                <div className="udc-expert-insight-container">

                    <div className="udc-expert-portrait-panel">
                        <div className="udc-expert-img-container">
                            <img src={Profile_Picture_AH} alt="Angela Hughes - River Cruise Packing Expert" />
                        </div>
                        <div className="udc-expert-stats-strip">
                            <div className="udc-expert-stat-box">
                                <h4>40+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="udc-expert-stat-box">
                                <h4>121+</h4>
                                <p>Countries Visited</p>
                            </div>
                        </div>
                    </div>

                    <div className="udc-expert-content-panel">
                        <span className="udc-eyebrow">MEET THE CEO</span>
                        <h2 className="udc-section-heading">Insight from Angela Hughes</h2>
                        <div className="udc-heading-separator"></div>

                        <p className="udc-expert-quote">
                            "Packing for a luxury river cruise is all about layer versatility. Because Uniworld has a relaxed, country-club casual elegance onboard, you can focus on lightweight packing with smart options for evening dining and regional tours, without the burden of heavy formalwear."
                        </p>

                        <div className="udc-expert-priorities">
                            <h5>Packing &amp; Dress Code Matrix:</h5>
                            <div className="udc-expert-pills">
                                {['Smart Casual Focus', 'Daytime Versatile Layers', 'Sturdy Excursion Footwear', 'Rain &amp; Wind Outerwear', 'Respectful Temple/Church Wear', 'Onboard Laundry Access'].map(pill => (
                                    <span key={pill} className="udc-expert-pill">
                                        <Anchor size={12} />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="udc-expert-bio">
                            As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers pack smart for rivers around the world, ensuring they meet onboard dress codes while staying perfectly comfortable on excursions.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="udc-faq-section">
                <div className="udc-faq-container">
                    <div className="udc-center-header">
                        <span className="udc-eyebrow">QUESTIONS BEFORE YOU GO</span>
                        <h2 className="udc-section-heading">Frequently Asked Questions</h2>
                        <div className="udc-heading-separator udc-separator-centered"></div>
                    </div>
                    <div className="udc-faq-list">
                        {udcFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="udc-faq-item"
                                onClick={() => udcToggleFaq(index)}
                            >
                                <div className="udc-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="udc-faq-toggle-icon">{udcActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {udcActiveFaq === index && (
                                    <p className="udc-faq-answer">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="udc-cta-section">
                <div className="udc-cta-aurora-glow"></div>
                <div className="udc-cta-crystal udc-cta-crystal-1"></div>
                <div className="udc-cta-crystal udc-cta-crystal-2"></div>
                <div className="udc-cta-crystal udc-cta-crystal-3"></div>
                <div className="udc-cta-grid-lines"></div>

                <div className="udc-cta-content">
                    <div className="udc-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="udc-cta-eyebrow">START SOMEWHERE REMARKABLE</span>
                    <h2 className="udc-cta-heading">Ready to Plan Your <br /> Uniworld River Cruise?</h2>
                    <div className="udc-cta-bar"></div>
                    <p className="udc-cta-paragraph">
                        Prepare for your Uniworld River Cruise with confidence by choosing the right clothing, packing smart, and planning for every destination along your itinerary.
                    </p>
                    <p className="udc-cta-paragraph" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 28px' }}>
                        Our luxury travel advisors can help you select the right itinerary, cabin category, and shore excursions for a seamless Uniworld experience.
                    </p>
                    <div className="udc-cta-actions">
                        <Link to='/contact' className="udc-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="udc-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UniworldDressCodePacking