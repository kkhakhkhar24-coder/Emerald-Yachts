import Navbar from '../../components/Navbar/Navbar'
// import './AzamaraMediterraneanCruises.css'
import './VikingVsUniworld.css'
// import Profile_AH from '../../assets/VikingVsUniworld/Profile_AH.jpg'
// import Profile_Picture_AH from '../../assets/VikingVsUniworld/Profile_Picture_AH.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Wallet, Wine, Wifi,
    UserCheck, Scale, Palette
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

function VikingVsUniworld() {

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const mediToggleFaq = index => setMediActiveFaq(mediActiveFaq === index ? null : index)

    // ── FAQ data — exact from doc ───────────────────────────────────────
    const mediFaqs = [
        { question: 'Is Uniworld more luxurious than Viking?', answer: 'Yes. Uniworld is generally considered a luxury or ultra-luxury river cruise line, while Viking is upper-premium.' },
        { question: 'Is Uniworld more expensive than Viking?', answer: 'Typically yes. Uniworld includes more amenities and luxury services in the fare.' },
        { question: 'Does Uniworld include gratuities?', answer: 'Yes. Gratuities are generally included on Uniworld cruises.' },
        { question: 'Does Viking include gratuities?', answer: 'Typically no, unless offered as part of a special promotion.' },
        { question: 'Which cruise line has better dining?', answer: 'Many travelers prefer Uniworld for its gourmet dining and premium wine selections.' },
        { question: 'Which cruise line has better excursions?', answer: 'Uniworld generally includes more excursion options and premium experiences.' },
        { question: 'Is Viking better for solo travelers?', answer: 'Yes. Viking frequently offers reduced single supplements and solo promotions.' },
        { question: 'Does Uniworld offer butler service?', answer: 'Yes. Butler service is available in many suite categories.' },
        { question: 'Which cruise line offers better value?', answer: 'Many travelers consider Viking the stronger value option.' },
        { question: 'Which cruise line has more destinations?', answer: 'Viking operates a larger fleet and offers more worldwide itineraries.' },
        { question: 'Are Viking cruises adults only?', answer: 'Yes. Viking welcomes guests age 18 and older.' },
        { question: 'Which cruise line has more luxurious ships?', answer: 'Uniworld generally offers more luxurious and individually designed ships.' },
        { question: 'Is Uniworld all-inclusive?', answer: 'Uniworld is one of the most inclusive luxury river cruise brands available.' },
        { question: 'Which cruise line has better service?', answer: 'Both are excellent, but Uniworld is often recognized for more personalized service.' },
        { question: 'Which cruise line should first-time river cruisers choose?', answer: 'Many first-time river cruisers choose Viking because of its balance of quality, value, and destination-focused experiences.' }
    ]

    // ── Schema — EXACT as provided, unmodified ──────────────────────────
    const mediSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld",
                "name": "Viking vs Uniworld",
                "url": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld",
                "description": "Compare Viking vs Uniworld river cruises including ships, dining, excursions, service, pricing, inclusions, and luxury travel experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld#article"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://www.tripsshipsluxurytravel.com/#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com"
            },
            {
                "@type": "TravelAgency",
                "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsshipsluxurytravel.com",
                "description": "Luxury travel agency specializing in cruise vacations, river cruises, expedition cruises and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld#article",
                "headline": "Viking vs Uniworld",
                "url": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld",
                "description": "Expert comparison of Viking and Uniworld river cruises including pricing, inclusions, dining, excursions, destinations, and service.",
                "image": "https://www.tripsshipsluxurytravel.com/images/viking-vs-uniworld.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert river cruise planning and comparison services helping travelers choose between Viking, Uniworld, and other leading luxury cruise lines."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsshipsluxurytravel.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Viking Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/viking-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Viking vs Uniworld",
                        "item": "https://www.tripsshipsluxurytravel.com/viking-vs-uniworld"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more luxurious than Viking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Uniworld is generally considered a luxury or ultra-luxury river cruise line, while Viking is considered upper-premium."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more expensive than Viking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically yes. Uniworld includes more luxury amenities and services in the fare."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld include gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Gratuities are generally included on Uniworld cruises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Viking include gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Typically no, unless included in a special promotion."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has better dining?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many travelers prefer Uniworld for its gourmet dining and premium culinary experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has better excursions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld generally includes more excursion choices and premium experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Viking better for solo travelers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Viking frequently offers solo traveler promotions and reduced single supplements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld offer butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Butler service is available in many suite categories."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line offers better value?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many travelers consider Viking to provide stronger overall value."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has more destinations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Viking operates a larger fleet and offers more worldwide itinerary options."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Viking cruises adults only?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Viking welcomes guests age 18 and older."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Uniworld all-inclusive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld is one of the most inclusive luxury river cruise brands available."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking vs Uniworld: Which Luxury River Cruise Line Is Better in 2026?</title>
                <meta name="title" content="Viking vs Uniworld River Cruises Comparison | Luxury Travel Guide" />
                <meta
                    name="description"
                    content="Compare Viking vs Uniworld river cruises including ships, suites, dining, excursions, inclusions, pricing, destinations, and service. Discover which luxury river cruise line is best for your travel style."
                />
                <meta name="keywords" content="Viking vs Uniworld, Uniworld vs Viking, Viking River Cruises vs Uniworld, Best Luxury River Cruise Line, Uniworld Boutique River Cruise Collection, Viking River Cruise Comparison" />
                <script type="application/ld+json">
                    {JSON.stringify(mediSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ════════════════════════════════════════════════════════════
                HERO  (medi-hero-section — static gradient, no images)
            ════════════════════════════════════════════════════════════ */}
            <section
                className="medi-hero-section"
                style={{
                    background: 'linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 55%, #274472 100%)',
                    minHeight: '70vh'
                }}
            >
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Scale size={16} />
                        <span>Luxury River Cruise Comparison</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Viking vs Uniworld: Which Luxury River Cruise Line Is Better?
                    </h1>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                INTRO  (medi-intro-section / medi-premium-intro-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">COMPLETE LUXURY COMPARISON</span>
                            <h2 className="medi-premium-heading">Viking vs Uniworld: A Complete Luxury River Cruise Comparison</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Viking and Uniworld are two of the most respected names in luxury river cruising. Both cruise lines offer exceptional itineraries throughout Europe and beyond, yet their onboard experiences are remarkably different.
                            </p>

                            <p className="medi-premium-lead-text">
                                Viking focuses on Scandinavian simplicity, cultural immersion, and destination-focused travel. Uniworld, on the other hand, delivers a boutique luxury experience featuring highly personalized service, lavish décor, and extensive inclusions.
                            </p>

                            <div className="medi-immersion-list-wrapper">
                                <p className="medi-immersion-lead-in">
                                    If you're trying to decide between Viking and Uniworld, this guide compares everything from:
                                </p>
                                <div className="medi-immersion-cards-grid">
                                    {[
                                        { icon: <Ship size={20} />, label: 'Accommodations' },
                                        { icon: <Utensils size={20} />, label: 'Dining' },
                                        { icon: <Wallet size={20} />, label: 'Pricing' },
                                        { icon: <Compass size={20} />, label: 'Excursions' },
                                        { icon: <Globe size={20} />, label: 'Destinations' },
                                        { icon: <Gem size={20} />, label: 'Overall value' },
                                    ].map((item, i) => (
                                        <div key={i} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box">{item.icon}</div>
                                            <span className="medi-immersion-card-title">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">RIVER CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers compare Viking and Uniworld realistically — based on travel style, comfort expectations and budget, not simply marketing claims.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        Both Viking and Uniworld deliver exceptional river cruise experiences — the right choice always comes down to your travel priorities.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                QUICK COMPARISON TABLE  ← NEW SECTION (VikingVsUniworld.css)
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-quick-compare-section">
                <div className="vu-quick-compare-container">
                    <div className="vu-quick-compare-header">
                        <span className="vu-quick-compare-eyebrow">AT A GLANCE</span>
                        <h2 className="medi-section-heading">Quick Comparison: Viking vs Uniworld</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vu-table-wrapper">
                        <table className="vu-compare-table">
                            <thead>
                                <tr>
                                    <th className="vu-th-feature">Feature</th>
                                    <th>Viking</th>
                                    <th>Uniworld</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Best For', 'Destination-focused travelers', 'Boutique luxury travelers'],
                                    ['Luxury Level', 'Upper Premium', 'Luxury / Ultra-Luxury'],
                                    ['Included Excursions', 'Yes', 'Extensive'],
                                    ['Butler Service', 'No', 'Yes (Suites)'],
                                    ['Drinks Included', 'Partial', 'Extensive'],
                                    ['Ship Style', 'Scandinavian Modern', 'Boutique Luxury'],
                                    ['Solo Travel', 'Excellent', 'Good'],
                                    ['Fleet Size', 'Larger', 'Smaller'],
                                    ['Pricing', 'Lower', 'Higher'],
                                    ['Service', 'Excellent', 'Exceptional'],
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="vu-td-feature">{row[0]}</td>
                                        <td className="vu-td-viking">{row[1]}</td>
                                        <td className="vu-td-uniworld">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                BRAND OVERVIEW (Viking / Uniworld)  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-overview-section">
                <div className="vu-overview-container">
                    <div className="vu-quick-compare-header">
                        <span className="vu-quick-compare-eyebrow">BRAND PHILOSOPHY</span>
                        <h2 className="medi-section-heading">Overview of Each Cruise Line</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="vu-overview-grid">
                        <div className="vu-overview-card vu-card-viking">
                            <h3 className="vu-overview-brand-name">Viking</h3>
                            <p className="vu-overview-tagline">The largest river cruise company in the world</p>
                            <div className="vu-overview-divider"></div>
                            <p className="vu-overview-desc">
                                Viking has become the largest river cruise company in the world. The brand is known for:
                            </p>
                            <ul className="vu-overview-checklist">
                                {['Adults-only cruises', 'Scandinavian design', 'Destination-focused experiences', 'Educational enrichment', 'Strong value proposition'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="vu-checklist-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-overview-desc" style={{ marginTop: '20px', marginBottom: 0 }}>
                                Viking appeals to travelers who want a refined experience without paying ultra-luxury prices.
                            </p>
                        </div>

                        <div className="vu-overview-card vu-card-uniworld">
                            <h3 className="vu-overview-brand-name">Uniworld</h3>
                            <p className="vu-overview-tagline">Often considered one of the most luxurious river cruise brands in the world</p>
                            <div className="vu-overview-divider"></div>
                            <p className="vu-overview-desc">
                                Uniworld Boutique River Cruise Collection is known for:
                            </p>
                            <ul className="vu-overview-checklist">
                                {['Boutique-style ships', 'Individually designed vessels', 'Exceptional service', 'All-inclusive luxury', 'Unique artistic interiors'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="vu-checklist-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-overview-desc" style={{ marginTop: '20px', marginBottom: 0 }}>
                                Uniworld provides a more intimate and highly personalized experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                SHIPS & ACCOMMODATIONS  ← NEW SECTION (versus card style)
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-soft">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Ships and Accommodations</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><Ship size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking Ships</h3>
                            </div>
                            <ul className="vu-versus-list">
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Viking Longships feature clean Scandinavian design</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Spacious public areas</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Aquavit Terrace</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Comfortable staterooms</span></li>
                            </ul>
                            <p className="vu-versus-card-note">
                                The focus is on functionality and destination immersion. <strong>Viking Advantage:</strong> Modern design and consistency across the fleet.
                            </p>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><Palette size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld Ships</h3>
                            </div>
                            <ul className="vu-versus-list">
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Every Uniworld ship is uniquely designed</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Handcrafted furnishings</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Luxurious suites</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Boutique hotel atmosphere, distinctive décor</span></li>
                            </ul>
                            <p className="vu-versus-card-note">
                                No two Uniworld ships are exactly alike. <strong>Uniworld Advantage:</strong> More luxurious and personalized accommodations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                DESTINATIONS  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-white">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Destinations</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><Globe size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking Destinations</h3>
                            </div>
                            <ul className="vu-versus-list">
                                {['Rhine River', 'Danube River', 'Seine River', 'Douro River', 'Nile River', 'Mekong River'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-versus-card-note">Its global footprint is one of the industry's largest.</p>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><Globe size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld Destinations</h3>
                            </div>
                            <ul className="vu-versus-list">
                                {['Rhine', 'Danube', 'Seine', 'Douro', 'Venice Lagoon', 'Nile', 'India'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-versus-card-note">Uniworld also sails many of the world's premier rivers.</p>
                        </div>
                    </div>
                    <div className="vu-winner-banner vu-winner-tie">
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Tie — Both cruise lines offer excellent destination choices</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EXCURSIONS  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-soft">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Excursions Comparison</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><Compass size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking Excursions</h3>
                            </div>
                            <ul className="vu-versus-list">
                                {['One shore excursion in every port', 'Destination lectures', 'Cultural enrichment programs'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-versus-card-note">Additional premium tours are available.</p>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><Compass size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld Excursions</h3>
                            </div>
                            <ul className="vu-versus-list">
                                {['Multiple excursion choices', 'Walking tours', 'Culinary experiences', 'Local cultural immersion'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-versus-card-note">Many premium experiences are included.</p>
                        </div>
                    </div>
                    <div className="vu-winner-banner">
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Uniworld — Generally offers more included experiences</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                DINING  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-white">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Dining Comparison</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><Utensils size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking Dining</h3>
                            </div>
                            <ul className="vu-versus-list">
                                {['Regional cuisine', 'Fresh ingredients', 'Destination-inspired menus'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-versus-card-note">Dining is consistently excellent.</p>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><Utensils size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld Dining</h3>
                            </div>
                            <ul className="vu-versus-list">
                                {['Farm-to-table cuisine', 'Premium wines', 'Locally sourced ingredients', 'Gourmet presentation'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <p className="vu-versus-card-note">Uniworld takes dining to another level.</p>
                        </div>
                    </div>
                    <div className="vu-winner-banner">
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Uniworld — Among the best culinary experiences in river cruising</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                SERVICE  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-soft">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Service Comparison</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><UserCheck size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking Service</h3>
                            </div>
                            <ul className="vu-versus-list">
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Professional, friendly, and efficient service</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>The larger fleet maintains impressive consistency</span></li>
                            </ul>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><UserCheck size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld Service</h3>
                            </div>
                            <ul className="vu-versus-list">
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Renowned for highly personalized attention</span></li>
                                <li><CheckCircle size={15} className="vu-versus-list-icon" /><span>Crew-to-guest ratios are among the best in the industry</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="vu-winner-banner">
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Uniworld — A more luxury-focused service experience</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                INCLUSIONS  ← NEW SECTION (dark dual checklist)
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-inclusions-section">
                <div className="vu-inclusions-glow"></div>
                <div className="vu-inclusions-container">
                    <div className="vu-inclusions-header">
                        <span className="vu-inclusions-eyebrow">WHAT'S INCLUDED</span>
                        <h2>Inclusions Comparison</h2>
                        <div className="vu-inclusions-bar"></div>
                    </div>
                    <div className="vu-inclusions-grid">
                        <div className="vu-inclusions-card vu-incl-viking">
                            <h3>Viking Includes</h3>
                            <ul className="vu-inclusions-list">
                                {['Shore excursion in every port', 'Wi-Fi', 'Specialty dining', 'Enrichment programs', 'Beer and wine with lunch and dinner'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} className="vu-inclusions-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vu-inclusions-card vu-incl-uniworld">
                            <h3>Uniworld Includes</h3>
                            <ul className="vu-inclusions-list">
                                {['Unlimited premium beverages', 'Gratuities', 'Airport transfers', 'Butler service in suites', 'Excursions', 'Fine dining'].map((item, i) => (
                                    <li key={i}><CheckCircle size={17} className="vu-inclusions-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="vu-winner-banner" style={{ marginTop: '36px' }}>
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Uniworld — Its all-inclusive approach is one of its biggest strengths</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                PRICING  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-white">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Pricing Comparison</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><Wallet size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking</h3>
                            </div>
                            <p className="vu-overview-desc" style={{ marginBottom: 0 }}>
                                Generally offers lower fares. Provides excellent value for travelers seeking premium experiences.
                            </p>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><Wallet size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld</h3>
                            </div>
                            <p className="vu-overview-desc" style={{ marginBottom: '12px' }}>Higher pricing reflects:</p>
                            <ul className="vu-versus-list">
                                {['More inclusions', 'Luxury accommodations', 'Personalized service', 'Premium dining'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="vu-winner-banner vu-winner-tie">
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Value: Viking &nbsp;|&nbsp; Luxury Inclusions: Uniworld</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                SOLO TRAVELERS  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-versus-section vu-bg-soft">
                <div className="vu-versus-container">
                    <div className="vu-versus-heading-row">
                        <h2>Solo Travelers</h2>
                        <div className="vu-versus-bar"></div>
                    </div>
                    <div className="vu-versus-grid">
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-viking"><Heart size={20} /></div>
                                <h3 className="vu-versus-card-title">Viking</h3>
                            </div>
                            <p className="vu-overview-desc" style={{ marginBottom: '12px' }}>
                                Viking is often one of the best options for solo travelers because of:
                            </p>
                            <ul className="vu-versus-list">
                                {['Reduced supplements', 'Solo promotions', 'Adults-only environment'].map((item, i) => (
                                    <li key={i}><CheckCircle size={15} className="vu-versus-list-icon" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vu-versus-card">
                            <div className="vu-versus-card-header">
                                <div className="vu-versus-icon-box vu-icon-uniworld"><Heart size={20} /></div>
                                <h3 className="vu-versus-card-title">Uniworld</h3>
                            </div>
                            <p className="vu-overview-desc" style={{ marginBottom: 0 }}>
                                Uniworld occasionally offers solo specials but generally attracts couples.
                            </p>
                        </div>
                    </div>
                    <div className="vu-winner-banner">
                        <span className="vu-winner-label">WINNER</span>
                        <span className="vu-winner-value">Viking</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                WHO SHOULD CHOOSE  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-decision-section">
                <div className="vu-decision-container">
                    <div className="vu-decision-header">
                        <span className="vu-quick-compare-eyebrow">MAKE YOUR DECISION</span>
                        <h2>Who Should Choose Which Cruise Line?</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="vu-decision-grid">
                        <div className="vu-decision-card">
                            <h3>Who Should Choose Viking?</h3>
                            <ul className="vu-decision-list">
                                {['You value destination immersion', 'You want lower pricing', 'You enjoy Scandinavian design', 'You travel solo', 'You want excellent value'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="vu-decision-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="vu-decision-card vu-decision-uniworld">
                            <h3>Who Should Choose Uniworld?</h3>
                            <ul className="vu-decision-list">
                                {['You want luxury inclusions', 'Personalized service matters', 'Boutique-style ships appeal to you', 'You appreciate gourmet dining', 'Budget is less important'].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} className="vu-decision-check" /><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                FINAL VERDICT  ← NEW SECTION
            ════════════════════════════════════════════════════════════ */}
            <section className="vu-verdict-section">
                <div className="vu-verdict-container">
                    <span className="vu-verdict-eyebrow">THE BOTTOM LINE</span>
                    <h2>Final Verdict</h2>
                    <div className="vu-verdict-bar"></div>
                    <p className="vu-verdict-text">
                        Both Viking and Uniworld deliver exceptional river cruise experiences. Viking excels in value, consistency, destination variety, and accessibility. Uniworld shines through luxury accommodations, boutique design, personalized service, and extensive inclusions.
                    </p>
                    <p className="vu-verdict-text">
                        For travelers seeking premium river cruising at a more approachable price, Viking is often the better choice. For travelers seeking one of the most luxurious river cruise experiences available, Uniworld may be worth the higher investment.
                    </p>
                    <div className="vu-verdict-split">
                        <div className="vu-verdict-pill vu-pill-viking">
                            <strong>Choose Viking for...</strong>
                            <p>Value, consistency, destination variety, and accessibility.</p>
                        </div>
                        <div className="vu-verdict-pill vu-pill-uniworld">
                            <strong>Choose Uniworld for...</strong>
                            <p>Luxury accommodations, boutique design, personalized service, and extensive inclusions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                EXPERT INSIGHT  (medi-expert-editorial-section)
            ════════════════════════════════════════════════════════════ */}
            <section id="viking-uniworld-expert-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                {/* <img src={Profile_Picture_AH} alt="Angela Hughes – Luxury River Cruise Expert" /> */}
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Choosing Between Viking <br className="medi-growth-title-break" />and Uniworld
                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes, founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, helps travelers compare Viking and Uniworld realistically based on travel personality and lifestyle preferences — not simply advertising or price points.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Angela consistently helps travelers evaluate:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {['Ship style & atmosphere', 'Inclusions & value', 'Dining philosophy', 'Service expectations', 'Destination priorities', 'Solo vs. couple travel'].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                With more than 40 years in luxury travel and firsthand experience across 121+ countries, Angela Hughes provides personalized river cruise planning backed by real-world expertise.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'River cruises', icon: Anchor },
                                        { title: 'Ultra-luxury cruising', icon: Ship },
                                        { title: 'Expedition voyages', icon: Compass },
                                        { title: 'Cultural travel', icon: Globe },
                                        { title: 'Global premium travel planning', icon: Sparkles }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box"><IconComponent size={14} /></div>
                                                <span className="medi-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                {/* <img src={Profile_AH} alt="Angela Hughes" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }} /> */}
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "40+ years in luxury travel", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury river and ocean cruise specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box"><IconComp size={16} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category">{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                FAQ  (medi-faq-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '−' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                CTA  (medi-cta-main-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Still Deciding Between Viking and Uniworld?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Choosing between Viking and Uniworld depends entirely on your travel priorities — value and destination immersion, or boutique luxury and personalized service.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            With over four decades of luxury travel expertise, Angela Hughes and the team at Trips &amp; Ships Luxury Travel help travelers confidently compare river cruise lines and design highly personalized luxury vacations.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Whether you are considering:</span>
                            <ul className="medi-cta-considerations-list">
                                {['Viking River Cruises', 'Uniworld Boutique River Cruise Collection', 'Destination-focused itineraries', 'Boutique luxury accommodations', 'Solo river cruise travel'].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Trips &amp; Ships Luxury Travel provides expert guidance backed by real-world luxury travel expertise.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Compare River Cruise Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default VikingVsUniworld