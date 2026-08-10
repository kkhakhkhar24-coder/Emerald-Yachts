import Navbar from '../../components/Navbar/Navbar'
import './Bestscenicsuites.css'
import {
    Home, CheckCircle, Phone, LayoutList, Award, Users, Compass,
    Sparkles, Crown, MapPin, HeartPulse, Camera,
    Bath, Bed, Sofa, Users2, Wallet, Calendar, Eye
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

function BestScenicSuites() {

    const [bssActiveFaq, setBssActiveFaq] = useState(null)
    const bssToggleFaq = (index) => {
        setBssActiveFaq(bssActiveFaq === index ? null : index)
    }

    /* Why Scenic suites stand out */
    const bssStandoutFeatures = [
        'Private veranda', 'Butler service', 'King-size Scenic Slumber Bed', 'Spacious sitting area',
        'Marble bathroom', 'Walk-in shower', 'Luxury bath amenities', 'Complimentary minibar',
        'Espresso machine', 'Flat-screen television', 'Complimentary Wi-Fi', 'Daily housekeeping'
    ]

    /* Suite categories — 8 total, alternating occasion-split layout */
    const bssSuites = [
        {
            category: 'Best Overall Suite',
            name: 'Verandah Suite',
            intro: 'For most travelers, the Verandah Suite delivers the best balance of luxury and value.',
            listLabel: 'Why we recommend it:',
            features: ['Spacious accommodation', 'Private balcony', 'Butler service', 'Excellent storage', 'Luxury bathroom', 'Comfortable living area', 'Outstanding value'],
            tags: ['Couples', 'First-time Scenic guests', 'Luxury travelers', 'Expedition cruises'],
            tagsLabel: 'Perfect for:',
            reverse: false,
            layout: 'split',
            icon: Home
        },
        {
            category: 'Best Value Suite',
            name: 'Deluxe Verandah Suite',
            intro: 'Located on higher decks, Deluxe Verandah Suites provide beautiful views with the same outstanding amenities.',
            listLabel: 'Benefits include:',
            features: ['Higher deck location', 'Better panoramic views', 'Private veranda', 'Butler service', 'Spacious interior', 'Quiet surroundings'],
            footnote: 'Ideal for guests who enjoy elevated ocean views.',
            layout: 'spotlight',
            icon: Eye
        },
        {
            category: 'Best for Longer Cruises',
            name: 'Grand Deluxe Verandah Suite',
            intro: "If you're sailing for several weeks, the additional living space becomes especially valuable.",
            listLabel: 'Highlights:',
            features: ['Larger interior', 'Expanded sitting area', 'Excellent storage', 'Premium location', 'Spacious veranda', 'Butler service'],
            footnote: 'Excellent for Antarctica, Greenland, and world voyages.',
            reverse: true,
            layout: 'split',
            icon: Sofa
        },
        {
            category: 'Best Wellness Suite',
            name: 'Spa Suite',
            intro: 'The Spa Suite is perfect for travelers focused on relaxation.',
            listLabel: 'Features include:',
            features: ['Larger suite layout', 'Spa bath', 'Steam shower with light therapy', 'Butler service', 'Premium bathroom', 'Convenient access to the Senses Spa'],
            footnote: 'Guests staying in Spa Suites also enjoy additional premium suite benefits on many sailings.',
            layout: 'spotlight',
            icon: HeartPulse
        },
        {
            category: 'Best for Scenic Views',
            name: 'Panorama Suite',
            intro: 'Panorama Suites are among the most desirable accommodations aboard Scenic Eclipse.',
            listLabel: 'Why travelers love them:',
            features: ['Forward-facing location', 'Wraparound terrace', 'Expansive windows', 'Separate lounge', 'Incredible wildlife viewing', 'Perfect photography opportunities'],
            footnote: "They're especially popular on Antarctica, Arctic, and Greenland expeditions.",
            reverse: false,
            layout: 'split',
            icon: Camera
        },
        {
            category: 'Best Luxury Suite',
            name: 'Grand Panorama Suite',
            intro: 'These suites combine panoramic views with significantly more interior space.',
            listLabel: 'Guests enjoy:',
            features: ['Large separate living room', 'Expansive private terrace', 'Premium furnishings', 'Butler service', 'Spectacular forward views', 'Exclusive suite privileges'],
            footnote: 'Ideal for milestone celebrations and extended voyages.',
            layout: 'spotlight',
            icon: Crown
        },
        {
            category: 'Ultimate Luxury',
            name: "Owner's Penthouse Suite",
            intro: "The Owner's Penthouse Suite represents the highest level of luxury aboard Scenic Eclipse.",
            listLabel: 'Exceptional features include:',
            features: ['Massive private terrace', 'Outdoor spa pool', 'Separate bedroom', 'Spacious living room', 'Dining area', 'Oversized bathroom', 'Personalized butler service', 'Premium suite amenities'],
            footnote: 'Only a limited number of these exclusive suites are available on each ship.',
            reverse: true,
            layout: 'split',
            icon: Award
        },
        {
            category: 'Best Suite for Families',
            name: 'Two-Bedroom Penthouse Suite',
            intro: 'Families and multigenerational travelers appreciate the additional flexibility.',
            listLabel: 'Highlights:',
            features: ['Two bedrooms', 'Large living room', 'Multiple bathrooms', 'Outdoor terrace', 'Butler service', 'Dining area', 'Exceptional privacy'],
            footnote: "This is Scenic's largest and most spacious accommodation.",
            layout: 'spotlight',
            icon: Users2
        }
    ]

    /* Quick pick comparison */
    const bssQuickPicks = [
        { label: 'Best Overall Value', suite: 'Verandah Suite', icon: Award },
        { label: 'Best Ocean Views', suite: 'Panorama Suite', icon: Eye },
        { label: 'Best Wellness Experience', suite: 'Spa Suite', icon: HeartPulse },
        { label: 'Best for Families', suite: 'Two-Bedroom Penthouse Suite', icon: Users2 },
        { label: 'Best for Luxury Travelers', suite: "Owner's Penthouse Suite", icon: Crown },
        { label: 'Best for Long Expeditions', suite: 'Grand Deluxe Verandah Suite', icon: Compass }
    ]

    /* Tips for choosing */
    const bssTips = [
        'Cruise destination', 'Length of itinerary', 'Budget', 'Preferred deck',
        'Desired views', 'Travel companions', 'Wellness priorities', 'Privacy needs'
    ]

    /* Why book with us */
    const bssWhyBook = [
        { title: 'Compare every suite category', icon: LayoutList },
        { title: 'Select the ideal deck location', icon: MapPin },
        { title: 'Find the best available pricing', icon: Wallet },
        { title: 'Secure exclusive offers', icon: Award },
        { title: 'Arrange flights and hotels', icon: Compass },
        { title: 'Coordinate pre- and post-cruise stays', icon: Calendar },
        { title: 'Provide personalized concierge service', icon: Crown }
    ]

    /* FAQs */
    const bssFaqs = [
        { question: 'What is the best Scenic suite?', answer: "The Verandah Suite offers the best overall value, while the Owner's Penthouse Suite provides the ultimate luxury experience." },
        { question: 'Do all Scenic suites include butler service?', answer: 'Yes. Every suite aboard Scenic Eclipse and Scenic Eclipse II includes personalized butler service.' },
        { question: 'Which Scenic suite has the best views?', answer: 'Panorama Suites and Grand Panorama Suites offer exceptional forward-facing views and expansive private terraces.' },
        { question: 'Are all Scenic accommodations suites?', answer: 'Yes. Every accommodation aboard Scenic Eclipse and Scenic Eclipse II is an all-veranda suite.' },
        { question: 'Which suite is best for Antarctica?', answer: 'Panorama Suites and Grand Panorama Suites are popular for Antarctica because of their exceptional wildlife viewing opportunities.' },
        { question: 'Is the Spa Suite worth it?', answer: 'Yes. Spa Suites are ideal for travelers who value wellness amenities, larger accommodations, and enhanced bathroom features.' },
        { question: 'What is the largest Scenic suite?', answer: 'The Two-Bedroom Penthouse Suite is the largest accommodation available aboard Scenic Eclipse.' },
        { question: 'Are Scenic suites spacious?', answer: 'Yes. Even the entry-level Verandah Suite is significantly larger than many cabins found on other luxury expedition ships.' },
        { question: 'Do all suites have balconies?', answer: 'Yes. Every Scenic suite features a private veranda.' },
        { question: 'Which suite is best for couples?', answer: 'The Deluxe Verandah Suite and Panorama Suite are excellent choices for couples seeking luxury, comfort, and beautiful ocean views.' },
        { question: 'Which Scenic suite offers the best value?', answer: 'The Verandah Suite delivers an excellent combination of space, luxury, amenities, and affordability.' },
        { question: 'How do I choose the right Scenic suite?', answer: 'The ideal suite depends on your itinerary, budget, preferred location, and travel style. Our Scenic specialists can help you compare every option and choose the best suite for your journey.' }
    ]

    const bssSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/best-scenic-suites",
                "name": "Best Scenic Suites",
                "url": "https://www.tripsandships.com/best-scenic-suites",
                "description": "Compare the best Scenic Suites aboard Scenic Eclipse and Scenic Eclipse II. Learn about Verandah Suites, Spa Suites, Panorama Suites, Penthouse Suites, amenities, butler service, and luxury accommodations.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsandships.com/best-scenic-suites#article" }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsandships.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsandships.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "description": "Luxury travel agency specializing in luxury cruises, expedition cruises, yacht cruises, river cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsandships.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/best-scenic-suites#article",
                "headline": "Best Scenic Suites",
                "url": "https://www.tripsandships.com/best-scenic-suites",
                "description": "Expert guide comparing the best Scenic Suites aboard Scenic Eclipse and Scenic Eclipse II, including Verandah Suites, Spa Suites, Panorama Suites, Owner's Penthouse Suites, and Two-Bedroom Penthouse Suites.",
                "image": "https://www.tripsandships.com/images/best-scenic-suites.jpg",
                "author": { "@id": "https://www.tripsandships.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsandships.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsandships.com/best-scenic-suites" }
            },
            {
                "@type": "Service",
                "name": "Scenic Cruise Planning",
                "provider": { "@id": "https://www.tripsandships.com/#travelagency" },
                "serviceType": "Luxury Cruise Consulting",
                "description": "Expert Scenic cruise planning services helping travelers compare suite categories, choose the best accommodations, and plan luxury cruise vacations."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Scenic Cruises", "item": "https://www.tripsandships.com/scenic-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Best Scenic Suites", "item": "https://www.tripsandships.com/best-scenic-suites" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is the best Scenic suite?", "acceptedAnswer": { "@type": "Answer", "text": "The Verandah Suite offers the best overall value, while the Owner's Penthouse Suite provides the ultimate luxury experience aboard Scenic Eclipse." } },
                    { "@type": "Question", "name": "Do all Scenic suites include butler service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every suite aboard Scenic Eclipse and Scenic Eclipse II includes personalized butler service." } },
                    { "@type": "Question", "name": "Which Scenic suite has the best views?", "acceptedAnswer": { "@type": "Answer", "text": "Panorama Suites and Grand Panorama Suites offer exceptional forward-facing views and expansive private terraces." } },
                    { "@type": "Question", "name": "Are all Scenic accommodations suites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every accommodation aboard Scenic Eclipse and Scenic Eclipse II is an all-veranda suite." } },
                    { "@type": "Question", "name": "Which Scenic suite is best for Antarctica?", "acceptedAnswer": { "@type": "Answer", "text": "Panorama Suites and Grand Panorama Suites are popular for Antarctica because they offer incredible views for wildlife and scenic cruising." } },
                    { "@type": "Question", "name": "Is the Spa Suite worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Spa Suites are ideal for travelers who enjoy wellness amenities, larger accommodations, and enhanced bathroom features." } },
                    { "@type": "Question", "name": "What is the largest Scenic suite?", "acceptedAnswer": { "@type": "Answer", "text": "The Two-Bedroom Penthouse Suite is the largest accommodation aboard Scenic Eclipse and Scenic Eclipse II." } },
                    { "@type": "Question", "name": "Are Scenic suites spacious?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Even the entry-level Verandah Suite offers significantly more space than many cabins found on other luxury expedition ships." } },
                    { "@type": "Question", "name": "Do all Scenic suites have balconies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every Scenic suite features a private veranda with outdoor seating." } },
                    { "@type": "Question", "name": "Which Scenic suite is best for couples?", "acceptedAnswer": { "@type": "Answer", "text": "The Deluxe Verandah Suite and Panorama Suite are excellent choices for couples seeking luxury, comfort, and spectacular ocean views." } },
                    { "@type": "Question", "name": "Which Scenic suite offers the best value?", "acceptedAnswer": { "@type": "Answer", "text": "The Verandah Suite delivers an excellent combination of generous space, premium amenities, butler service, and overall value." } },
                    { "@type": "Question", "name": "How do I choose the right Scenic suite?", "acceptedAnswer": { "@type": "Answer", "text": "The ideal Scenic suite depends on your itinerary, budget, preferred deck location, desired views, and travel style. A Scenic travel specialist can help you compare every suite category and select the best option." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Best Scenic Suites | Which Scenic Eclipse Suite Should You Book?</title>
                <meta name="title" content="Best Scenic Suites | Scenic Eclipse Suite Guide" />
                <meta
                    name="description"
                    content="Discover the best Scenic Suites aboard Scenic Eclipse and Scenic Eclipse II. Compare Verandah Suites, Spa Suites, Panorama Suites, and Owner's Penthouse Suites to find the perfect luxury accommodation for your cruise."
                />
                <meta name="keywords" content="Best Scenic Suites, Scenic Eclipse suites, Best Scenic Eclipse cabin, Scenic suite guide, Scenic luxury suites, Scenic cabin comparison, Scenic Eclipse accommodation" />
                <script type="application/ld+json">
                    {JSON.stringify(bssSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION */}
                <section className="fcel-hero-section">
                    <div className="bss-hero-placeholder">
                        <Home size={220} />
                    </div>
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Scenic Eclipse Suite Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">Best Scenic Suites</h1>
                        <p className="fcel-hero-subtitle">
                            Which Scenic Suite Is Right for You?
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Compare Suite Categories
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">BEST SCENIC SUITES</span>
                                <h2 className="fcel-section-heading">Which Scenic Suite Is <br /> Right for You?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Every accommodation aboard Scenic Eclipse and Scenic Eclipse II is a luxurious all-veranda suite complete with personalized butler service, premium amenities, and elegant contemporary design. Unlike many cruise lines, Scenic doesn't offer inside cabins or standard oceanview rooms—every guest enjoys a spacious suite with a private outdoor veranda.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    The best suite for you depends on your budget, destination, travel style, and the level of luxury you want. Whether you're cruising Antarctica, Greenland, Iceland, the Mediterranean, or the South Pacific, this guide compares every major suite category to help you choose with confidence.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <div className="bss-placeholder bss-intro-frame">
                                    <Home size={48} />
                                    <span>Image Placeholder: All-Veranda Suite Interior</span>
                                </div>
                                <div className="fcel-intro-badge-float">
                                    <Crown size={15} />
                                    <span>Every Suite, Six-Star Luxury</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Every guest enjoys a spacious suite with a private outdoor veranda—there are no inside cabins or standard oceanview rooms aboard Scenic Eclipse or Scenic Eclipse II.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY SCENIC SUITES STAND OUT */}
                <section className="bss-standout-section">
                    <div className="bss-standout-container">
                        <span className="fcel-eyebrow-label">
                            <Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Why Scenic Suites Stand Out
                        </span>
                        <h2 className="fcel-section-heading">Every Scenic suite includes luxury features that create a true six-star experience.</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">Included with every suite:</p>
                        <div className="fcel-villa-features-grid">
                            {bssStandoutFeatures.map((item, idx) => (
                                <div key={idx} className="fcel-villa-feature-pill">
                                    <CheckCircle size={16} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="bss-standout-note">
                            Even the entry-level Verandah Suite is significantly larger than many luxury expedition cruise cabins.
                        </p>
                    </div>
                </section>

                {/* MID-PAGE CTA #2 */}
                <section className="bss-inline-cta">
                    <div className="bss-inline-cta-inner">
                        <h3 className="bss-inline-cta-heading">Not sure which suite fits your travel style?</h3>
                        <div className="fcel-hero-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SUITE CATEGORY SECTIONS — 8 total, alternating layouts */}
                {bssSuites.map((suite, idx) => {
                    const SuiteIcon = suite.icon
                    return (
                        <div key={idx}>
                            <section className={`bss-suite-section ${idx % 2 === 1 ? 'bss-suite-section-alt' : ''}`}>
                                <div className="bss-suite-container">
                                    <div className={`bss-suite-grid ${idx % 2 === 1 ? 'bss-suite-grid-reverse' : ''}`}>
                                        <div className="bss-suite-media">
                                            <div className="bss-suite-image-placeholder">
                                                <SuiteIcon size={48} className="bss-suite-image-icon" />
                                                <span className="bss-suite-image-label">Scenic Eclipse - {suite.name}</span>
                                            </div>
                                        </div>
                                        <div className="bss-suite-content">
                                            <span className="bss-suite-category">
                                                <SuiteIcon size={14} />
                                                {suite.category}
                                            </span>
                                            <h3 className="bss-suite-title">{suite.name}</h3>
                                            <p className="bss-suite-intro">{suite.intro}</p>
                                            
                                            {suite.listLabel && (
                                                <p className="bss-suite-list-label">{suite.listLabel}</p>
                                            )}
                                            
                                            <ul className="bss-suite-features-list">
                                                {suite.features.map((feature, fIdx) => (
                                                    <li key={fIdx} className="bss-suite-feature-item">
                                                        <CheckCircle size={18} className="bss-suite-feature-icon" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                            {suite.tags && (
                                                <div className="bss-suite-tags-container">
                                                    <p className="bss-suite-tags-label">{suite.tagsLabel}</p>
                                                    <div className="bss-suite-tags-list">
                                                        {suite.tags.map((tag, tIdx) => (
                                                            <span key={tIdx} className="bss-suite-tag-pill">
                                                                <Users size={13} />
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {suite.footnote && (
                                                <div className="bss-suite-footnote">
                                                    <Sparkles size={14} className="bss-suite-footnote-icon" />
                                                    <span>{suite.footnote}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {idx === 3 && (
                                <section className="bss-inline-cta">
                                    <div className="bss-inline-cta-inner">
                                        <h3 className="bss-inline-cta-heading">Curious how these suites compare in person?</h3>
                                        <div className="fcel-hero-btn-row">
                                            <button className="fcel-btn-primary">
                                                <LayoutList size={18} />
                                                Compare Suite Categories
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    )
                })}

                {/* WHICH SCENIC SUITE SHOULD YOU CHOOSE */}
                <section className="bss-quickpick-section">
                    <div className="bss-quickpick-container">
                        <div className="bss-quickpick-header">
                            <span className="fcel-eyebrow-label bss-eyebrow-on-dark">
                                <Award size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Quick Comparison
                            </span>
                            <h2 className="fcel-section-heading">Which Scenic Suite Should You Choose?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bss-quickpick-grid">
                            {bssQuickPicks.map((pick, idx) => {
                                const PickIcon = pick.icon
                                return (
                                    <div key={idx} className="bss-quickpick-card">
                                        <div className="bss-quickpick-icon">
                                            <PickIcon size={22} />
                                        </div>
                                        <p className="bss-quickpick-label">{pick.label}</p>
                                        <p className="bss-quickpick-suite">{pick.suite}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CTA #4 */}
                <section className="bss-inline-cta">
                    <div className="bss-inline-cta-inner">
                        <h3 className="bss-inline-cta-heading">Let's find your perfect Scenic suite together</h3>
                        <div className="fcel-hero-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </section>

                {/* TIPS FOR CHOOSING THE RIGHT SUITE */}
                <section className="bss-tips-section">
                    <div className="bss-tips-container">
                        <span className="fcel-eyebrow-label">
                            <LayoutList size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Tips for Choosing the Right Suite
                        </span>
                        <h2 className="fcel-section-heading">Before booking, consider:</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="fcel-villa-features-grid">
                            {bssTips.map((tip, idx) => (
                                <div key={idx} className="fcel-villa-feature-pill">
                                    <CheckCircle size={16} />
                                    <span>{tip}</span>
                                </div>
                            ))}
                        </div>
                        <p className="bss-tips-note">
                            Our Scenic specialists can help you compare available suites and recommend the best option for your voyage.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="fcel-why-us-section">
                    <div className="fcel-why-us-container">
                        <div className="fcel-why-us-top">
                            <div className="fcel-why-us-copy">
                                <span className="fcel-eyebrow-label">TRUSTED SCENIC SPECIALISTS</span>
                                <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">Our Scenic experts help you:</p>
                            </div>
                            <div className="fcel-why-us-image">
                                <div className="bss-placeholder bss-whyus-frame">
                                    <Crown size={44} />
                                    <span>Image Placeholder: Guest Consulting with Scenic Specialist</span>
                                </div>
                            </div>
                        </div>
                        <div className="fcel-why-us-grid">
                            {bssWhyBook.map((item, idx) => {
                                const WhyIcon = item.icon
                                return (
                                    <div key={idx} className="fcel-why-us-card">
                                        <div className="fcel-why-us-icon">
                                            <WhyIcon size={22} />
                                        </div>
                                        <p className="fcel-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            We ensure you choose the perfect suite for your luxury adventure.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {bssFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => bssToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {bssActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {bssActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Book Your Perfect Scenic Suite?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            From the Verandah Suite to the Owner's Penthouse, let our Scenic specialists match you with the ideal suite for your luxury voyage.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Compare Suite Categories
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default BestScenicSuites