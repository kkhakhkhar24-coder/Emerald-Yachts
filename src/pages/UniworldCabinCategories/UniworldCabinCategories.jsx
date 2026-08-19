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
        <div className="uwc-cabin-placeholder" role="img" aria-label={`Image: ${label}`}>
            <ImageIcon size={32} />
            <span>{label}</span>
        </div>
    )
}

function UniworldCabinCategories() {

    const [uwcActiveFaq, setUwcActiveFaq] = useState(null)
    const uwcToggleFaq = i => setUwcActiveFaq(uwcActiveFaq === i ? null : i)
    const [uwcActiveTab, setUwcActiveTab] = useState(0)

    const uwcFaqs = [
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

    const uwcCabinCategories = [
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
            features: ['Larger floor plan', 'Higher deck location', 'Improved river views', 'Comfortable seating area', 'Enhanced dÃ©cor'],
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
        { feature: 'Premium Bedding', values: ['âœ“', 'âœ“', 'âœ“', 'âœ“', 'âœ“'] },
        { feature: 'Marble Bathroom', values: ['âœ“', 'âœ“', 'âœ“', 'âœ“', 'âœ“'] },
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
        'Every cabin includes premium amenities and boutique-style dÃ©cor.',
        'French Balcony rooms are popular for panoramic river views.',
        'Suites provide additional space, luxury amenities, and butler service.',
        'Choosing the right cabin depends on budget, itinerary, and onboard preferences.',
        'Booking early provides the best selection of cabin locations and categories.'
    ]

    const uwcSchemaData = {
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
                "name": "Uniworld Cabin Categories Explained",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/cabin-categories/",
                "description": "Learn about Uniworld cabin categories, including Classic, Deluxe, French Balcony, and Suites. Compare features, amenities, and choose the best cabin.",
                "inLanguage": "en"
            },
            {
                "@type": "Article",
                "headline": "Uniworld Cabin Categories Explained",
                "author": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "publisher": { "@type": "Organization", "name": "Trips & Ships Luxury Travel" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.tripsandships.com/uniworld-river-cruises/cabin-categories/" },
                "datePublished": "2026-08-06",
                "dateModified": "2026-08-06"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Uniworld River Cruises", "item": "https://www.tripsandships.com/uniworld-river-cruises/" },
                    { "@type": "ListItem", "position": 3, "name": "Cabin Categories", "item": "https://www.tripsandships.com/uniworld-river-cruises/cabin-categories/" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": uwcFaqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    }

    return (
        <div className="uwc-page">
            <Helmet>
                <title>Uniworld Cabin Categories Explained</title>
                <meta name="title" content="Uniworld Cabin Categories Explained" />
                <meta name="description" content="Learn about Uniworld cabin categories, including Classic, Deluxe, French Balcony, and Suites. Compare features, amenities, and choose the best cabin." />
                <meta name="keywords" content="Uniworld Cabin Categories, Uniworld staterooms, Uniworld suites, French Balcony cabins, Uniworld room categories, luxury river cruise cabins, Uniworld accommodations, river cruise cabin guide" />
                <script type="application/ld+json">{JSON.stringify(uwcSchemaData)}</script>
            </Helmet>

            <Navbar />

            <section className="uwc-hero-section">
                <div className="uwc-hero-gradient-bg"></div>
                <div className="uwc-hero-overlay-layer"></div>
                <div className="uwc-hero-content-wrapper">
                    <div className="uwc-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Uniworld River Cruises Â· Trips &amp; Ships Luxury Travel</span>
                    </div>
                    <h1 className="uwc-hero-main-title">Uniworld Cabin Categories Explained</h1>
                    <p className="uwc-hero-subtitle-text">
                        Compare Classic, Deluxe, French Balcony, and Suite accommodations to choose the boutique river cruise cabin that best fits your travel style.
                    </p>
                </div>
            </section>

            <section className="uwc-intro-section">
                <div className="uwc-intro-grid">
                    <div className="uwc-intro-left">
                        <span className="uwc-eyebrow">CABIN GUIDE</span>
                        <h2 className="uwc-section-heading">Understanding Uniworld Cabin Categories</h2>
                        <div className="uwc-heading-separator-bar"></div>
                        <p className="uwc-intro-lead">Choosing the right cabin is one of the most important decisions when booking a luxury river cruise.</p>
                        <p className="uwc-intro-body">Uniworld Boutique River Cruises offers several accommodation categories designed to suit different travel styles, budgets, and comfort preferences. From elegantly appointed Classic Staterooms to spacious Suites with butler service, every room is thoughtfully designed to deliver a boutique hotel experience on the water.</p>
                        <p className="uwc-intro-body">This guide explains every Uniworld cabin category, highlights the differences between room types, and helps you decide which accommodation offers the best value for your next river cruise.</p>
                        <p className="uwc-intro-body">Each category provides luxury furnishings, premium amenities, and attentive service, with additional benefits available as you move into higher cabin grades.</p>
                    </div>
                    <div className="uwc-intro-right">
                        <div className="uwc-intro-note-card">
                            <span className="uwc-intro-note-label">Quick Overview</span>
                            <p>Unlike many ocean cruise lines with dozens of cabin grades, Uniworld keeps its accommodation options relatively straightforward.</p>
                        </div>
                        <p className="uwc-intro-body uwc-intro-list-lead">Most accommodations fall into these categories:</p>
                        <div className="uwc-category-pills">
                            {['Classic Stateroom', 'Deluxe Stateroom', 'French Balcony', 'Premium French Balcony', 'Junior Suite', 'Suite'].map((item, idx) => (
                                <div key={idx} className="uwc-category-pill">
                                    <span className="uwc-pill-number">0{idx + 1}</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="uwc-categories-section">
                <div className="uwc-categories-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uwc-eyebrow">ACCOMMODATIONS</span>
                        <h2 className="uwc-section-heading">Explore Every Cabin Category</h2>
                        <div className="uwc-heading-separator-bar uwc-bar-centered"></div>
                    </div>

                    <div className="uwc-tab-layout">
                        <div className="uwc-tab-sidebar">
                            {uwcCabinCategories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    className={`uwc-tab-item ${uwcActiveTab === idx ? 'uwc-tab-active' : ''}`}
                                    onClick={() => setUwcActiveTab(idx)}
                                >
                                    <div className="uwc-tab-item-icon">
                                        <cat.Icon size={22} />
                                    </div>
                                    <div className="uwc-tab-item-text">
                                        <span className="uwc-tab-item-number">0{idx + 1}</span>
                                        <span className="uwc-tab-item-name">{cat.name}</span>
                                    </div>
                                    <ChevronRight size={16} className="uwc-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="uwc-tab-content">
                            {uwcCabinCategories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    className={`uwc-tab-panel ${uwcActiveTab === idx ? 'uwc-tab-panel-active' : ''}`}
                                >
                                    <div className="uwc-tab-panel-banner">
                                        <CabinPlaceholder label={cat.imageLabel} />
                                        <div className="uwc-tab-panel-banner-overlay">
                                            <span className="uwc-tab-panel-banner-number">0{idx + 1}</span>
                                            <h3 className="uwc-tab-panel-banner-title">{cat.name}</h3>
                                        </div>
                                    </div>

                                    <div className="uwc-tab-panel-header">
                                        <div className="uwc-tab-panel-icon">
                                            <cat.Icon size={40} />
                                        </div>
                                        <div>
                                            <span className="uwc-tab-panel-number">Category 0{idx + 1}</span>
                                            <h3 className="uwc-tab-panel-title">{cat.name}</h3>
                                        </div>
                                    </div>

                                    <p className="uwc-tab-panel-intro">{cat.intro}</p>

                                    <div className="uwc-tab-panel-features">
                                        <span className="uwc-tab-panel-features-title">{cat.featuresTitle}</span>
                                        <ul className="uwc-tab-panel-features-list">
                                            {cat.features.map((f, i) => (
                                                <li key={i}>
                                                    <CheckCircle size={16} className="uwc-feature-check" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <p className="uwc-tab-panel-note">{cat.note}</p>

                                    {cat.bestFor && (
                                        <div className="uwc-tab-panel-bestfor">
                                            <span className="uwc-tab-panel-bestfor-title">Best For</span>
                                            <div className="uwc-tab-panel-bestfor-tags">
                                                {cat.bestFor.map((b, i) => (
                                                    <span key={i} className="uwc-bestfor-tag">{b}</span>
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

            <section className="uwc-butler-section">
                <div className="uwc-butler-bg"></div>
                <div className="uwc-butler-container">
                    <div className="uwc-butler-grid">
                        <div className="uwc-butler-left">
                            <span className="uwc-eyebrow uwc-eyebrow-light">SUITE EXCLUSIVE</span>
                            <h2 className="uwc-section-heading uwc-white-heading">Butler Service Explained</h2>
                            <div className="uwc-heading-separator-bar uwc-separator-white"></div>
                            <div className="uwc-butler-image">
                                <CabinPlaceholder label="Uniworld suite butler service" />
                            </div>
                            <p className="uwc-butler-intro">Guests staying in qualifying suites receive personalized butler service designed to elevate every moment of their river cruise.</p>
                            <p className="uwc-butler-sub">A dedicated butler anticipates your needs, coordinates arrangements, and ensures your suite experience is seamless from start to finish.</p>
                        </div>

                        <div className="uwc-butler-right">
                            <p className="uwc-butler-services-label">Services commonly include:</p>
                            <div className="uwc-butler-services-list">
                                {ucButlerServices.map((service, idx) => (
                                    <div key={idx} className="uwc-butler-service-item">
                                        <div className="uwc-butler-service-icon"><CheckCircle size={18} /></div>
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="uwc-butler-highlight-box">
                                <Sparkles size={20} />
                                <p>Butler service is one of the key distinctions that sets Uniworld suites apart from standard staterooms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="uwc-amenities-section">
                <div className="uwc-amenities-container">
                    <div className="uwc-amenities-grid">
                        <div className="uwc-amenities-left">
                            <span className="uwc-eyebrow">STANDARD COMFORTS</span>
                            <h2 className="uwc-section-heading">Amenities Included in Every Cabin</h2>
                            <div className="uwc-heading-separator-bar"></div>
                            <div className="uwc-amenities-image">
                                <CabinPlaceholder label="Uniworld cabin amenities and luxury finishes" />
                            </div>
                            <p className="uwc-amenities-lead">Regardless of cabin category, guests generally receive:</p>
                            <div className="uwc-amenities-conclusion">
                                <p>Higher cabin categories primarily differ in space, views, and personalized services rather than basic amenities.</p>
                            </div>
                        </div>

                        <div className="uwc-amenities-right">
                            <div className="uwc-amenities-list">
                                {ucEveryCabinAmenities.map((amenity, idx) => (
                                    <div key={idx} className="uwc-amenity-item">
                                        <div className="uwc-amenity-icon"><amenity.Icon size={20} /></div>
                                        <span>{amenity.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="uwc-comparison-section">
                <div className="uwc-comparison-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uwc-eyebrow">SIDE BY SIDE</span>
                        <h2 className="uwc-section-heading">Cabin Comparison</h2>
                        <div className="uwc-heading-separator-bar uwc-bar-centered"></div>
                    </div>

                    <div className="uwc-compare-table-wrapper">
                        <table className="uwc-compare-table">
                            <thead>
                                <tr>
                                    <th className="uwc-compare-th-feature">Feature</th>
                                    {ucComparisonCols.map((col, idx) => (
                                        <th key={idx} className="uwc-compare-th" data-tier={idx}>{col}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {ucComparisonRows.map((row, ri) => (
                                    <tr key={ri}>
                                        <td className="uwc-compare-td-feature">{row.feature}</td>
                                        {row.values.map((val, vi) => {
                                            const isCheck = val === 'âœ“';
                                            const isNo = val === 'No';
                                            const isYes = val === 'Yes';
                                            return (
                                                <td key={vi} className="uwc-compare-td">
                                                    {isCheck && <span className="uwc-compare-badge check">&#10003;</span>}
                                                    {isYes && <span className="uwc-compare-badge yes">Yes</span>}
                                                    {isNo && <span className="uwc-compare-badge no">&#10007;</span>}
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

            <section className="uwc-choose-section">
                <div className="uwc-choose-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uwc-eyebrow">DECISION GUIDE</span>
                        <h2 className="uwc-section-heading">How to Choose the Right Cabin</h2>
                        <div className="uwc-heading-separator-bar uwc-bar-centered"></div>
                    </div>

                    <div className="uwc-choose-grid">
                        {ucChooseOptions.map((opt, idx) => (
                            <div key={idx} className="uwc-choose-card" data-tier={idx}>
                                <div className="uwc-choose-card-accent"></div>
                                <div className="uwc-choose-card-inner">
                                    <span className="uwc-choose-card-number">0{idx + 1}</span>
                                    <div className="uwc-choose-card-icon"><opt.Icon size={22} /></div>
                                    <h3 className="uwc-choose-card-title">{opt.title}</h3>
                                    <ul className="uwc-choose-card-list">
                                        {opt.points.map((p, i) => (
                                            <li key={i}>
                                                <span className="uwc-choose-dot"></span>
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

            <section className="uwc-upgrade-section">
                <div className="uwc-upgrade-container">
                    <div className="uwc-upgrade-grid">
                        <div className="uwc-upgrade-text-col">
                            <span className="uwc-eyebrow">VALUE CONSIDERATIONS</span>
                            <h2 className="uwc-section-heading">Is Upgrading Worth It?</h2>
                            <div className="uwc-heading-separator-bar"></div>
                            <p className="uwc-upgrade-body">Whether an upgrade is worthwhile depends on your travel style.</p>
                            <p className="uwc-upgrade-body">A French Balcony upgrade often provides the best balance between price and enhanced experience, particularly on scenic itineraries along the Rhine, Danube, Douro, and Seine.</p>
                            <p className="uwc-upgrade-body">Suites provide additional luxury and exclusive services that appeal to travelers celebrating milestones or seeking the highest level of comfort.</p>
                        </div>
                        <div className="uwc-upgrade-visual-col">
                            <div className="uwc-upgrade-visual-frame">
                                <DoorOpen size={40} />
                                <span>French Balcony</span>
                                <p>Best price-to-experience balance</p>
                            </div>
                            <div className="uwc-upgrade-visual-frame">
                                <GemIcon size={40} />
                                <span>Suite</span>
                                <p>Maximum luxury &amp; exclusivity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="uwc-tips-section">
                <div className="uwc-tips-container">
                    <span className="uwc-eyebrow uwc-eyebrow-light">BEFORE YOU BOOK</span>
                    <h2 className="uwc-section-heading uwc-white-heading">Tips Before Booking</h2>
                    <div className="uwc-heading-separator-bar uwc-separator-white"></div>
                    <p className="uwc-tips-lead">To select the best cabin:</p>

                    <div className="uwc-tips-grid">
                        {ucBookingTips.map((tip, idx) => (
                            <div key={idx} className="uwc-tip-card">
                                <div className="uwc-tip-card-head">
                                    <span className="uwc-tip-card-num">0{idx + 1}</span>
                                </div>
                                <p className="uwc-tip-card-text">{tip}</p>
                            </div>
                        ))}
                    </div>

                    <div className="uwc-tips-footer-box">
                        <div className="uwc-tips-footer-accent"></div>
                        <div className="uwc-tips-footer-inner">
                            <div className="uwc-tips-footer-icon-wrap">
                                <div className="uwc-tips-footer-icon"><Compass size={24} /></div>
                            </div>
                            <div className="uwc-tips-footer-text">
                                <span className="uwc-tips-footer-label">Pro Tip</span>
                                <p>Since every Uniworld ship has a unique layout, reviewing the deck plan before reserving your cabin is always recommended.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="uwc-takeaways-section">
                <div className="uwc-takeaways-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="uwc-eyebrow">SUMMARY</span>
                        <h2 className="uwc-section-heading">Key Takeaways</h2>
                        <div className="uwc-heading-separator-bar uwc-bar-centered"></div>
                    </div>
                    <div className="uwc-takeaways-grid">
                        {ucKeyTakeaways.map((item, idx) => (
                            <div key={idx} className="uwc-takeaway-card">
                                <div className="uwc-takeaway-num">0{idx + 1}</div>
                                <p className="uwc-takeaway-text">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="uwc-expert-insight-section">
                <div className="uwc-categories-container">
                    <div className="uwc-expert-insight-grid">
                        <div className="uwc-expert-portrait-panel">
                            <div className="uwc-expert-img-container">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Stateroom Specialist" />
                            </div>
                            <div className="uwc-expert-stats-strip">
                                <div className="uwc-expert-stat-box">
                                    <h4>40+</h4>
                                    <p>Years Designing Travel</p>
                                </div>
                                <div className="uwc-expert-stat-box">
                                    <h4>121+</h4>
                                    <p>Countries Traveled</p>
                                </div>
                            </div>
                        </div>
                        <div className="uwc-expert-content-panel">
                            <span className="uwc-eyebrow">MEET THE CEO</span>
                            <h2 className="uwc-section-heading">Insight from Angela Hughes</h2>
                            <div className="uwc-heading-separator-bar"></div>
                            <p className="uwc-expert-quote">
                                "Uniworld stateroom categories are designed to be straightforward. The biggest variance is layout and size, but boutique comfort remains high. Always evaluate how much time you will spend in your room before upgrading."
                            </p>
                            <div className="uwc-expert-priorities">
                                <h5>Category Prioritization Matrix:</h5>
                                <div className="uwc-expert-pills">
                                    {['Classic Comfort', 'Deluxe Floor Plan', 'Balcony Amenities', 'Butler Service Perks', 'Layout Functionality', 'Bespoke Furnishings'].map(pill => (
                                        <span key={pill} className="uwc-expert-pill">
                                            <Anchor size={12} />
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="uwc-expert-bio">
                                As founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel, Angela Hughes uses her travel knowledge of river layouts to guide you in choosing the correct cabin category.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="uwc-faq-section">
                <div className="uwc-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="uwc-section-heading">Frequently Asked Questions</h2>
                        <div className="uwc-heading-separator-bar uwc-bar-centered"></div>
                    </div>
                    <div className="uwc-faq-list-wrapper">
                        {uwcFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="uwc-faq-individual-item"
                                onClick={() => uwcToggleFaq(index)}
                            >
                                <div className="uwc-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="uwc-faq-toggle-icon">{uwcActiveFaq === index ? 'âˆ’' : '+'}</span>
                                </div>
                                {uwcActiveFaq === index && (
                                    <p className="uwc-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="uwc-cta-section">
                <div className="uwc-cta-aurora-glow"></div>
                <div className="uwc-cta-crystal uwc-cta-crystal-1"></div>
                <div className="uwc-cta-crystal uwc-cta-crystal-2"></div>
                <div className="uwc-cta-crystal uwc-cta-crystal-3"></div>
                <div className="uwc-cta-grid-lines"></div>

                <div className="uwc-cta-content">
                    <div className="uwc-cta-compass-ring">
                        <Compass size={28} />
                    </div>
                    <span className="uwc-cta-eyebrow">RIVER CRUISE LUXURY</span>
                    <h2 className="uwc-cta-title">Ready to Choose<br />Your Perfect Cabin?</h2>
                    <div className="uwc-cta-bar"></div>
                    <p className="uwc-cta-subtitle">
                        Compare Uniworld cabin categories, explore ship deck plans, and book the accommodation that best matches your travel style.
                    </p>
                    <div className="uwc-cta-actions">
                        <Link to="/contact" className="uwc-cta-primary-btn">
                            <Phone size={18} />
                            <span>Schedule a Consultation</span>
                            <ArrowRight size={16} className="uwc-cta-btn-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UniworldCabinCategories