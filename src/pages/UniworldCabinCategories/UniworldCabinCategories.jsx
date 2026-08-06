import Navbar from '../../components/Navbar/Navbar'
import './UniworldCabinCategories.css'
import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, LayoutList, Heart, Utensils,
    Sun, Award, Moon, BedDouble, Droplets, Wifi, Thermometer,
    ShieldCheck, Wind, Sparkle, Wine, Shirt, Flower2, Apple,
    DoorOpen, Sofa, Eye, Gem as GemIcon, X, Image as ImageIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

function CabinPlaceholder({ label }) {
    return (
        <div className="uc-cabin-placeholder" role="img" aria-label={`Image: ${label}`}>
            <ImageIcon size={32} />
            <span>{label}</span>
        </div>
    )
}

function UniworldCabinCategories() {

    const [ucActiveFaq, setUcActiveFaq] = useState(null)
    const ucToggleFaq = i => setUcActiveFaq(ucActiveFaq === i ? null : i)
    const [ucActiveTab, setUcActiveTab] = useState(0)

    const ucFaqs = [
        { question: 'What are the cabin categories on Uniworld River Cruises?', answer: 'Uniworld generally offers Classic Staterooms, Deluxe Staterooms, French Balcony rooms, Premium French Balcony cabins, Junior Suites, and Suites.' },
        { question: 'What is the difference between a Classic and Deluxe Stateroom?', answer: 'Deluxe Staterooms usually provide more space or a more desirable location on the ship.' },
        { question: 'What is a French Balcony cabin?', answer: 'It features floor-to-ceiling glass doors that open inward, offering fresh air and panoramic river views.' },
        { question: 'Are French Balcony cabins worth the upgrade?', asecnswer: 'Many travelers consider them worthwhile because of the enhanced scenery and natural light.' },
        { question: 'Do all cabins have marble bathrooms?', answer: 'Most Uniworld accommodations feature elegant marble bathrooms with luxury amenities.' },
        { question: 'Which cabin includes butler service?', answer: 'Butler service is available in qualifying suite categories.' },
        { question: 'Are suites significantly larger than standard cabins?', answer: 'Yes. Suites generally offer more living space, upgraded furnishings, and additional amenities.' },
        { question: 'Is Wi-Fi included in every cabin?', answer: 'Yes. Complimentary Wi-Fi is typically available throughout the ship.' },
        { question: 'Which cabin is best for first-time guests?', answer: 'French Balcony cabins offer an excellent combination of comfort, views, and value.' },
        { question: 'Are cabin layouts the same on every ship?', answer: 'No. Cabin sizes and layouts vary depending on the individual vessel.' },
        { question: 'Can solo travelers book any cabin category?', answer: 'Yes, although solo supplements may apply depending on the itinerary.' },
        { question: 'Which cabin offers the best value?', answer: 'Many travelers find French Balcony cabins provide the best balance between price and experience.' },
        { question: 'Are Premium French Balcony cabins different from standard French Balcony rooms?', answer: 'They are often located in more desirable positions and may offer slightly improved layouts.' },
        { question: 'Should I upgrade to a suite?', answer: 'If you value extra space, personalized service, and premium amenities, a suite can be an excellent investment.' },
        { question: 'How early should I reserve my preferred cabin?', answer: 'Booking several months in advance gives you the widest choice of cabin categories and locations.' }
    ]

    const ucCabinCategories = [
        {
            name: 'Classic Stateroom',
            Icon: BedDouble,
            imageLabel: 'Uniworld Classic Stateroom interior',
            intro: 'Classic Staterooms are the entry-level accommodations within the Uniworld fleet, offering an excellent balance between luxury and value.',
            featuresTitle: 'Typical Features',
            features: [
                'Comfortable queen or twin beds', 'Premium mattress and linens', 'Marble bathroom',
                'Rain shower or luxury bath', 'Luxury toiletries', 'Flat-screen television',
                'Complimentary Wi-Fi', 'Climate control', 'Daily housekeeping', 'Safe', 'Hair dryer'
            ],
            note: 'These cabins are ideal for guests who plan to spend most of their time exploring destinations rather than relaxing in their room.',
            bestFor: ['First-time river cruisers', 'Budget-conscious luxury travelers', 'Solo travelers', 'Guests focused on sightseeing']
        },
        {
            name: 'Deluxe Stateroom',
            Icon: Sofa,
            imageLabel: 'Uniworld Deluxe Stateroom with river view',
            intro: 'Deluxe Staterooms typically offer additional space or a more desirable location on the ship.',
            featuresTitle: 'Benefits Often Include',
            features: ['Larger floor plan', 'Higher deck location', 'Improved river views', 'Comfortable seating area', 'Enhanced décor'],
            note: 'Although amenities remain similar to Classic Staterooms, the extra space can make longer cruises more comfortable.'
        },
        {
            name: 'French Balcony Rooms',
            Icon: DoorOpen,
            imageLabel: 'Uniworld French Balcony cabin with panoramic views',
            intro: 'French Balcony accommodations are among the most popular choices on Uniworld ships. Instead of a walk-out balcony, these cabins feature floor-to-ceiling glass doors that open inward, allowing guests to enjoy fresh air and uninterrupted river views.',
            featuresTitle: 'Advantages',
            features: ['Panoramic scenery', 'Abundant natural light', 'Fresh air access', 'Elegant modern design', 'Excellent photography opportunities'],
            note: 'For travelers who enjoy watching the landscape from their cabin, a French Balcony is often worth the upgrade.'
        },
        {
            name: 'Premium French Balcony Cabins',
            Icon: Eye,
            imageLabel: 'Uniworld Premium French Balcony cabin midship',
            intro: 'Some ships include Premium French Balcony categories positioned in more desirable locations.',
            featuresTitle: 'Additional Advantages May Include',
            features: ['Midship location', 'Reduced engine noise', 'Convenient access to public areas', 'Better views', 'Slightly larger layouts on selected vessels'],
            note: 'These cabins combine comfort with premium positioning.'
        },
        {
            name: 'Junior Suites',
            Icon: Sparkle,
            imageLabel: 'Uniworld Junior Suite living area',
            intro: 'Available on selected ships, Junior Suites provide more living space than standard staterooms.',
            featuresTitle: 'Features May Include',
            features: ['Sitting area', 'Larger bathroom', 'Upgraded furnishings', 'Additional storage', 'Premium welcome amenities'],
            note: 'Junior Suites appeal to travelers seeking extra comfort without moving to the highest suite category.'
        },
        {
            name: 'Luxury Suites',
            Icon: GemIcon,
            imageLabel: 'Uniworld Luxury Suite with butler service',
            intro: 'Suites represent the finest accommodations available across much of the Uniworld fleet. Depending on the ship, guests may enjoy:',
            featuresTitle: 'Suite Amenities',
            features: [
                'Separate bedroom or living area', 'Spacious marble bathroom', 'Walk-in wardrobe', 'Butler service',
                'Premium minibar', 'Complimentary laundry (on select sailings)', 'Fresh flowers', 'Fresh fruit',
                'Priority services', 'Personalized amenities'
            ],
            note: 'Suite layouts vary between ships, making each accommodation unique.'
        }
    ]

    const ucButlerServices = [
        'Unpacking and packing assistance', 'Beverage service', 'Shoe shining',
        'Laundry coordination', 'Dining arrangements', 'Personalized requests', 'Daily suite preparation'
    ]

    const ucEveryCabinAmenities = [
        { Icon: BedDouble, text: 'Premium bedding' },
        { Icon: Sparkle, text: 'Egyptian cotton linens' },
        { Icon: Droplets, text: 'Marble bathroom' },
        { Icon: Sparkles, text: 'Luxury toiletries' },
        { Icon: Wind, text: 'Hair dryer' },
        { Icon: Moon, text: 'Flat-screen TV' },
        { Icon: Wine, text: 'Complimentary bottled water' },
        { Icon: Wifi, text: 'Wi-Fi' },
        { Icon: Thermometer, text: 'Climate control' },
        { Icon: ShieldCheck, text: 'In-room safe' },
        { Icon: Sun, text: 'Housekeeping' },
        { Icon: Moon, text: 'Evening turndown service on many sailings' }
    ]

    const ucComparisonRows = [
        { feature: 'Premium Bedding', values: ['✓', '✓', '✓', '✓', '✓'] },
        { feature: 'Marble Bathroom', values: ['✓', '✓', '✓', '✓', '✓'] },
        { feature: 'Sitting Area', values: ['Limited', 'Small', 'Moderate', 'Moderate', 'Large'] },
        { feature: 'River Views', values: ['Standard', 'Better', 'Excellent', 'Premium', 'Premium'] },
        { feature: 'French Balcony', values: ['No', 'No', 'Yes', 'Yes', 'Varies'] },
        { feature: 'Butler Service', values: ['No', 'No', 'No', 'No', 'Select Suites'] },
        { feature: 'Largest Living Space', values: ['No', 'No', 'Moderate', 'Moderate', 'Yes'] }
    ]
    const ucComparisonCols = ['Classic', 'Deluxe', 'French Balcony', 'Premium French Balcony', 'Suite']

    const ucChooseOptions = [
        { title: 'Choose a Classic Stateroom If', Icon: BedDouble, points: ['Budget matters most.', 'You spend little time in your cabin.', 'You prefer using your vacation budget on excursions.'] },
        { title: 'Choose a Deluxe Stateroom If', Icon: Sofa, points: ['You appreciate additional space.', 'You want a quieter location.', 'You prefer a higher deck.'] },
        { title: 'Choose a French Balcony If', Icon: DoorOpen, points: ['Scenic views are important.', 'You enjoy natural light.', 'You like relaxing in your room between excursions.'] },
        { title: 'Choose a Suite If', Icon: GemIcon, points: ["You're celebrating a special occasion.", 'Personalized service matters.', 'You want maximum comfort.', 'You expect to spend significant time onboard.'] }
    ]

    const ucBookingTips = [
        'Compare deck plans for your chosen ship.',
        'Book early for the widest selection.',
        'Review cabin dimensions.',
        'Consider travel season and scenery.',
        "Decide how much time you'll spend onboard.",
        'Ask about promotional upgrades.',
        'Check suite benefits before booking.'
    ]

    const ucKeyTakeaways = [
        'Uniworld offers accommodation options ranging from Classic Staterooms to luxury Suites.',
        'Every cabin includes premium amenities and boutique-style décor.',
        'French Balcony rooms are popular for panoramic river views.',
        'Suites provide additional space, luxury amenities, and butler service.',
        'Choosing the right cabin depends on budget, itinerary, and onboard preferences.',
        'Booking early provides the best selection of cabin locations and categories.'
    ]

    const ucSchemaData = {
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
                "name": "Uniworld Cabin Categories Explained",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cabin-categories/",
                "description": "Learn about Uniworld cabin categories, including Classic, Deluxe, French Balcony, and Suites. Compare features, amenities, and choose the best cabin.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Cabin Categories Explained",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cabin-categories/" },
                "datePublished": "2026-08-06",
                "dateModified": "2026-08-06"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Cabin Categories", "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cabin-categories/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": ucFaqs.map(f => ({
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
                <title>Uniworld Cabin Categories Explained</title>
                <meta name="title" content="Uniworld Cabin Categories Explained" />
                <meta name="description" content="Learn about Uniworld cabin categories, including Classic, Deluxe, French Balcony, and Suites. Compare features, amenities, and choose the best cabin." />
                <meta name="keywords" content="Uniworld Cabin Categories, Uniworld staterooms, Uniworld suites, French Balcony cabins, Uniworld room categories, luxury river cruise cabins, Uniworld accommodations, river cruise cabin guide" />
                <script type="application/ld+json">{JSON.stringify(ucSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="uc-hero-section">
                <div className="uc-hero-gradient-bg"></div>
                <div className="uc-hero-overlay-layer"></div>
                <div className="uc-hero-content-wrapper">
                    <div className="uc-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises · Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uc-hero-main-title">Uniworld Cabin Categories Explained</h1>
                    <p className="uc-hero-subtitle-text">
                        Compare Classic, Deluxe, French Balcony, and Suite accommodations to choose the boutique river cruise cabin that best fits your travel style.
                    </p>
                </div>
            </section>

            {/* ── INTRO ── */}
            <section className="uc-intro-section">
                <div className="uc-intro-grid">
                    <div className="uc-intro-left">
                        <span className="uc-eyebrow">CABIN GUIDE</span>
                        <h2 className="uc-section-heading">Understanding Uniworld Cabin Categories</h2>
                        <div className="uc-heading-separator-bar"></div>
                        <p className="uc-intro-lead">Choosing the right cabin is one of the most important decisions when booking a luxury river cruise.</p>
                        <p className="uc-intro-body">Uniworld Boutique River Cruises offers several accommodation categories designed to suit different travel styles, budgets, and comfort preferences. From elegantly appointed Classic Staterooms to spacious Suites with butler service, every room is thoughtfully designed to deliver a boutique hotel experience on the water.</p>
                        <p className="uc-intro-body">This guide explains every Uniworld cabin category, highlights the differences between room types, and helps you decide which accommodation offers the best value for your next river cruise.</p>
                        <p className="uc-intro-body">Each category provides luxury furnishings, premium amenities, and attentive service, with additional benefits available as you move into higher cabin grades.</p>
                    </div>
                    <div className="uc-intro-right">
                        <div className="uc-intro-note-card">
                            <span className="uc-intro-note-label">Quick Overview</span>
                            <p>Unlike many ocean cruise lines with dozens of cabin grades, Uniworld keeps its accommodation options relatively straightforward.</p>
                        </div>
                        <p className="uc-intro-body uc-intro-list-lead">Most accommodations fall into these categories:</p>
                        <div className="uc-category-pills">
                            {['Classic Stateroom', 'Deluxe Stateroom', 'French Balcony', 'Premium French Balcony', 'Junior Suite', 'Suite'].map((item, idx) => (
                                <div key={idx} className="uc-category-pill">
                                    <span className="uc-pill-number">0{idx + 1}</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CABIN CATEGORY TABS ── */}
            <section className="uc-categories-section">
                <div className="uc-categories-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uc-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="uc-section-heading">Explore Every Cabin Category</h2>
                        <div className="uc-heading-separator-bar uc-bar-centered"></div>
                    </div>

                    <div className="uc-tab-layout">
                        <div className="uc-tab-sidebar">
                            {ucCabinCategories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    className={`uc-tab-item ${ucActiveTab === idx ? 'uc-tab-active' : ''}`}
                                    onClick={() => setUcActiveTab(idx)}
                                >
                                    <div className="uc-tab-item-icon">
                                        <cat.Icon size={22} />
                                    </div>
                                    <div className="uc-tab-item-text">
                                        <span className="uc-tab-item-number">0{idx + 1}</span>
                                        <span className="uc-tab-item-name">{cat.name}</span>
                                    </div>
                                    <ChevronRight size={16} className="uc-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="uc-tab-content">
                            {ucCabinCategories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className={`uc-tab-panel ${ucActiveTab === idx ? 'uc-tab-panel-active' : ''}`}
                                >
                                    <div className="uc-tab-panel-banner">
                                        <CabinPlaceholder label={cat.imageLabel} />
                                        <div className="uc-tab-panel-banner-overlay">
                                            <span className="uc-tab-panel-banner-number">0{idx + 1}</span>
                                            <h3 className="uc-tab-panel-banner-title">{cat.name}</h3>
                                        </div>
                                    </div>

                                    <div className="uc-tab-panel-header">
                                        <div className="uc-tab-panel-icon">
                                            <cat.Icon size={40} />
                                        </div>
                                        <div>
                                            <span className="uc-tab-panel-number">Category 0{idx + 1}</span>
                                            <h3 className="uc-tab-panel-title">{cat.name}</h3>
                                        </div>
                                    </div>

                                    <p className="uc-tab-panel-intro">{cat.intro}</p>

                                    <div className="uc-tab-panel-features">
                                        <span className="uc-tab-panel-features-title">{cat.featuresTitle}</span>
                                        <ul className="uc-tab-panel-features-list">
                                            {cat.features.map((f, i) => (
                                                <li key={i}>
                                                    <CheckCircle size={16} className="uc-feature-check" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="uc-tab-panel-note">{cat.note}</p>

                                    {cat.bestFor && (
                                        <div className="uc-tab-panel-bestfor">
                                            <span className="uc-tab-panel-bestfor-title">Best For</span>
                                            <div className="uc-tab-panel-bestfor-tags">
                                                {cat.bestFor.map((b, i) => (
                                                    <span key={i} className="uc-bestfor-tag">{b}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUTLER SERVICE ── */}
            <section className="uc-butler-section">
                <div className="uc-butler-bg"></div>
                <div className="uc-butler-container">
                    <div className="uc-butler-grid">
                        <div className="uc-butler-left">
                            <span className="uc-eyebrow uc-eyebrow-light">SUITE EXCLUSIVE</span>
                            <h2 className="uc-section-heading uc-white-heading">Butler Service Explained</h2>
                            <div className="uc-heading-separator-bar uc-separator-white"></div>
                            <div className="uc-butler-image">
                                <CabinPlaceholder label="Uniworld suite butler service" />
                            </div>
                            <p className="uc-butler-intro">Guests staying in qualifying suites receive personalized butler service designed to elevate every moment of their river cruise.</p>
                            <p className="uc-butler-sub">A dedicated butler anticipates your needs, coordinates arrangements, and ensures your suite experience is seamless from start to finish.</p>
                        </div>

                        <div className="uc-butler-right">
                            <p className="uc-butler-services-label">Services commonly include:</p>
                            <div className="uc-butler-services-list">
                                {ucButlerServices.map((service, idx) => (
                                    <div key={idx} className="uc-butler-service-item">
                                        <div className="uc-butler-service-icon"><CheckCircle size={18} /></div>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uc-butler-highlight-box">
                                <Sparkles size={20} />
                                <p>Butler service is one of the key distinctions that sets Uniworld suites apart from standard staterooms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AMENITIES IN EVERY CABIN ── */}
            <section className="uc-amenities-section">
                <div className="uc-amenities-container">
                    <div className="uc-amenities-grid">
                        <div className="uc-amenities-left">
                            <span className="uc-eyebrow">STANDARD COMFORTS</span>
                            <h2 className="uc-section-heading">Amenities Included in Every Cabin</h2>
                            <div className="uc-heading-separator-bar"></div>
                            <div className="uc-amenities-image">
                                <CabinPlaceholder label="Uniworld cabin amenities and luxury finishes" />
                            </div>
                            <p className="uc-amenities-lead">Regardless of cabin category, guests generally receive:</p>
                            <div className="uc-amenities-conclusion">
                                <p>Higher cabin categories primarily differ in space, views, and personalized services rather than basic amenities.</p>
                            </div>
                        </div>

                        <div className="uc-amenities-right">
                            <div className="uc-amenities-list">
                                {ucEveryCabinAmenities.map((amenity, idx) => (
                                    <div key={idx} className="uc-amenity-item">
                                        <div className="uc-amenity-icon"><amenity.Icon size={20} /></div>
                                        <span>{amenity.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="uc-comparison-section">
                <div className="uc-comparison-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uc-eyebrow">SIDE BY SIDE</span>
                        <h2 className="uc-section-heading">Cabin Comparison</h2>
                        <div className="uc-heading-separator-bar uc-bar-centered"></div>
                    </div>

                    <div className="uc-compare-table-wrapper">
                        <table className="uc-compare-table">
                            <thead>
                                <tr>
                                    <th className="uc-compare-th-feature">Feature</th>
                                    {ucComparisonCols.map((col, idx) => (
                                        <th key={idx} className="uc-compare-th" data-tier={idx}>{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {ucComparisonRows.map((row, ri) => (
                                    <tr key={ri}>
                                        <td className="uc-compare-td-feature">{row.feature}</td>
                                        {row.values.map((val, vi) => {
                                            const isCheck = val === '✓';
                                            const isNo = val === 'No';
                                            const isYes = val === 'Yes';
                                            return (
                                                <td key={vi} className="uc-compare-td">
                                                    {isCheck && <span className="uc-compare-badge check">&#10003;</span>}
                                                    {isYes && <span className="uc-compare-badge yes">Yes</span>}
                                                    {isNo && <span className="uc-compare-badge no">&#10007;</span>}
                                                    {!isCheck && !isYes && !isNo && val}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── HOW TO CHOOSE ── */}
            <section className="uc-choose-section">
                <div className="uc-choose-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uc-eyebrow">DECISION GUIDE</span>
                        <h2 className="uc-section-heading">How to Choose the Right Cabin</h2>
                        <div className="uc-heading-separator-bar uc-bar-centered"></div>
                    </div>

                    <div className="uc-choose-grid">
                        {ucChooseOptions.map((opt, idx) => (
                            <div key={idx} className="uc-choose-card" data-tier={idx}>
                                <div className="uc-choose-card-accent"></div>
                                <div className="uc-choose-card-inner">
                                    <span className="uc-choose-card-number">0{idx + 1}</span>
                                    <div className="uc-choose-card-icon"><opt.Icon size={22} /></div>
                                    <h3 className="uc-choose-card-title">{opt.title}</h3>
                                    <ul className="uc-choose-card-list">
                                        {opt.points.map((p, i) => (
                                            <li key={i}>
                                                <span className="uc-choose-dot"></span>
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── IS UPGRADING WORTH IT ── */}
            <section className="uc-upgrade-section">
                <div className="uc-upgrade-container">
                    <div className="uc-upgrade-grid">
                        <div className="uc-upgrade-text-col">
                            <span className="uc-eyebrow">VALUE CONSIDERATIONS</span>
                            <h2 className="uc-section-heading">Is Upgrading Worth It?</h2>
                            <div className="uc-heading-separator-bar"></div>
                            <p className="uc-upgrade-body">Whether an upgrade is worthwhile depends on your travel style.</p>
                            <p className="uc-upgrade-body">A French Balcony upgrade often provides the best balance between price and enhanced experience, particularly on scenic itineraries along the Rhine, Danube, Douro, and Seine.</p>
                            <p className="uc-upgrade-body">Suites provide additional luxury and exclusive services that appeal to travelers celebrating milestones or seeking the highest level of comfort.</p>
                        </div>
                        <div className="uc-upgrade-visual-col">
                            <div className="uc-upgrade-visual-frame">
                                <DoorOpen size={40} />
                                <span>French Balcony</span>
                                <p>Best price-to-experience balance</p>
                            </div>
                            <div className="uc-upgrade-visual-frame">
                                <GemIcon size={40} />
                                <span>Suite</span>
                                <p>Maximum luxury &amp; exclusivity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TIPS BEFORE BOOKING ── */}
            <section className="uc-tips-section">
                <div className="uc-tips-container">
                    <span className="uc-eyebrow uc-eyebrow-light">BEFORE YOU BOOK</span>
                    <h2 className="uc-section-heading uc-white-heading">Tips Before Booking</h2>
                    <div className="uc-heading-separator-bar uc-separator-white"></div>
                    <p className="uc-tips-lead">To select the best cabin:</p>

                    <div className="uc-tips-grid">
                        {ucBookingTips.map((tip, idx) => (
                            <div key={idx} className="uc-tip-card">
                                <div className="uc-tip-card-head">
                                    <span className="uc-tip-card-num">0{idx + 1}</span>
                                </div>
                                <p className="uc-tip-card-text">{tip}</p>
                            </div>
                        ))}
                    </div>

                    <div className="uc-tips-footer-box">
                        <div className="uc-tips-footer-accent"></div>
                        <div className="uc-tips-footer-inner">
                            <div className="uc-tips-footer-icon-wrap">
                                <div className="uc-tips-footer-icon"><Compass size={24} /></div>
                            </div>
                            <div className="uc-tips-footer-text">
                                <span className="uc-tips-footer-label">Pro Tip</span>
                                <p>Since every Uniworld ship has a unique layout, reviewing the deck plan before reserving your cabin is always recommended.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY TAKEAWAYS ── */}
            <section className="uc-takeaways-section">
                <div className="uc-takeaways-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uc-eyebrow">SUMMARY</span>
                        <h2 className="uc-section-heading">Key Takeaways</h2>
                        <div className="uc-heading-separator-bar uc-bar-centered"></div>
                    </div>
                    <div className="uc-takeaways-grid">
                        {ucKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="uc-takeaway-card">
                                <div className="uc-takeaway-num">0{idx + 1}</div>
                                <p className="uc-takeaway-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES EXPERT INSIGHT ── */}
            <section className="uc-expert-insight-section">
                <div className="uc-categories-container">
                    <div className="uc-expert-insight-grid">
                        <div className="uc-expert-portrait-panel">
                            <div className="uc-expert-img-container">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Stateroom Specialist" />
                            </div>
                            <div className="uc-expert-stats-strip">
                                <div className="uc-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="uc-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>
                        <div className="uc-expert-content-panel">
                            <span className="uc-eyebrow">MEET THE CEO</span>
                            <h2 className="uc-section-heading">Insight from Angela Hughes</h2>
                            <div className="uc-heading-separator-bar"></div>
                            <p className="uc-expert-quote">
                                "Uniworld stateroom categories are designed to be straightforward. The biggest variance is layout and size, but boutique comfort remains high. Always evaluate how much time you will spend in your room before upgrading."
                            </p>
                            <div className="cab-expert-priorities">
                                <h5>Category Prioritization Matrix:</h5>
                                <div className="uc-expert-pills">
                                    {['Classic Comfort', 'Deluxe Floor Plan', 'Balcony Amenities', 'Butler Service Perks', 'Layout Functionality', 'Bespoke Furnishings'].map(pill => (
                                        <span key={pill} className="uc-expert-pill">
                                            <Anchor size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="uc-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes uses her travel knowledge of river layouts to guide you in choosing the correct cabin category.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="uc-faq-section">
                <div className="uc-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="uc-section-heading">Frequently Asked Questions</h2>
                        <div className="uc-heading-separator-bar uc-bar-centered"></div>
                    </div>
                    <div className="uc-faq-list-wrapper">
                        {ucFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uc-faq-individual-item"
                                onClick={() => ucToggleFaq(index)}
                            >
                                <div className="uc-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uc-faq-toggle-icon">{ucActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {ucActiveFaq === index && (
                                    <p className="uc-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uc-cta-section">
                <div className="uc-cta-aurora-glow"></div>
                <div className="uc-cta-crystal uc-cta-crystal-1"></div>
                <div className="uc-cta-crystal uc-cta-crystal-2"></div>
                <div className="uc-cta-crystal uc-cta-crystal-3"></div>
                <div className="uc-cta-grid-lines"></div>

                <div className="uc-cta-content">
                    <div className="uc-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uc-cta-eyebrow">RIVER CRUISE LUXURY</span>
                    <h2 className="uc-cta-title">Ready to Choose<br />Your Perfect Cabin?</h2>
                    <div className="uc-cta-bar"></div>
                    <p className="uc-cta-subtitle">
                        Compare Uniworld cabin categories, explore ship deck plans, and book the accommodation that best matches your travel style.
                    </p>
                    <div className="uc-cta-actions">
                        <Link to="/contact" className="uc-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="uc-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UniworldCabinCategories