import Navbar from '../../components/Navbar/Navbar'
import './Uniworldvstauckrivercruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, Globe, Award,
    Utensils, Wine, Bed, Compass, Bath, Bell, Landmark, MapPin,
    Smile, ArrowRight, Image as ImageIcon, Trophy
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UvtcPlaceholder({ label, className = '' }) {
    return (
        <div className={`uvtc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldVsTauckRiverCruises() {
    const [uvtcActiveFaq, setUvtcActiveFaq] = useState(null)
    const uvtcToggleFaq = (index) => {
        setUvtcActiveFaq(uvtcActiveFaq === index ? null : index)
    }

    const uvtcFaqs = [
        {
            question: "1. Is Uniworld more luxurious than Tauck?",
            answer: "Both are considered ultra-luxury river cruise lines. Uniworld is known for boutique elegance and unique ship designs, while Tauck focuses on luxury guided travel with exceptional inclusions."
        },
        {
            question: "2. Is Tauck more expensive than Uniworld?",
            answer: "Tauck is often similarly priced or slightly more expensive because it includes more exclusive land experiences, VIP access, transfers, and gratuities."
        },
        {
            question: "3. Which cruise line includes gratuities?",
            answer: "Both Uniworld and Tauck include onboard gratuities on most itineraries."
        },
        {
            question: "4. Which has better food?",
            answer: "Both cruise lines offer exceptional gourmet dining with regional specialties, premium wines, and locally inspired menus."
        },
        {
            question: "5. Which has better excursions?",
            answer: "Tauck is widely recognized for its exclusive shore excursions, smaller tour groups, and unique VIP experiences."
        },
        {
            question: "6. Are drinks included on both?",
            answer: "Yes. Both cruise lines include premium beverages throughout most of the cruise experience."
        },
        {
            question: "7. Does either cruise line offer butler service?",
            answer: "Uniworld offers butler service in many suite categories. Tauck does not provide butler service."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is included on both cruise lines."
        },
        {
            question: "9. Which is better for first-time river cruisers?",
            answer: "Uniworld is often recommended for first-time luxury river cruisers, while Tauck is especially appealing to experienced travelers seeking immersive guided experiences."
        },
        {
            question: "10. Which is better for couples?",
            answer: "Both are outstanding choices. Uniworld offers boutique romance and luxury, while Tauck delivers enriching cultural journeys and exceptional service."
        },
        {
            question: "11. Which cruise line offers more destinations?",
            answer: "Uniworld offers a broader selection of worldwide river cruise destinations, while Tauck concentrates primarily on Europe's most iconic rivers with select international itineraries."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors compare both cruise lines, recommend the ideal itinerary, secure exclusive offers, and provide concierge-level planning before, during, and after your luxury river cruise vacation."
        }
    ]

    const uvtcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck",
                "name": "Uniworld vs Tauck River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck",
                "description": "Compare Uniworld vs Tauck River Cruises including ships, pricing, dining, excursions, cabins, service, inclusions, destinations, and luxury river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck#article"
                }
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
                "description": "Luxury travel agency specializing in luxury river cruises, expedition cruises, ocean cruises, and personalized travel planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsandships.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck#article",
                "headline": "Uniworld vs Tauck River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck",
                "description": "Expert comparison of Uniworld and Tauck River Cruises including pricing, luxury, dining, excursions, service, cabins, destinations, and what's included.",
                "image": "https://www.tripsandships.com/images/uniworld-vs-tauck-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Comparison Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert comparison and planning services helping travelers choose between Uniworld, Tauck River Cruises, and other leading luxury river cruise lines."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tripsandships.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Uniworld River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Uniworld vs Tauck River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-tauck"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more luxurious than Tauck?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are considered ultra-luxury river cruise lines. Uniworld is known for boutique elegance and unique ship designs, while Tauck focuses on luxury guided travel with exceptional inclusions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Tauck more expensive than Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tauck is often similarly priced or slightly more expensive because it includes more exclusive land experiences, VIP access, transfers, and gratuities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line includes gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both Uniworld and Tauck include onboard gratuities on most itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better food?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both cruise lines offer exceptional gourmet dining with regional specialties, premium wines, and locally inspired menus."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better excursions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Tauck is widely recognized for its exclusive shore excursions, smaller tour groups, and unique VIP experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included on both?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Both cruise lines include premium beverages throughout most of the cruise experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does either cruise line offer butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld offers butler service in many suite categories. Tauck does not provide butler service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is included on both Uniworld and Tauck River Cruises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for first-time river cruisers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld is often recommended for first-time luxury river cruisers, while Tauck is especially appealing to experienced travelers seeking immersive guided experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for couples?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are outstanding choices. Uniworld offers boutique romance and luxury, while Tauck delivers enriching cultural journeys and exceptional service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line offers more destinations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld offers a broader selection of worldwide river cruise destinations, while Tauck concentrates primarily on Europe's most iconic rivers with select international itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert cruise comparisons, personalized recommendations, exclusive offers, and concierge-level planning before, during, and after your luxury river cruise vacation."
                        }
                    }
                ]
            }
        ]
    }

    const uvtcAtAGlance = [
        { feature: 'Overall Luxury', winner: 'Tie' },
        { feature: 'Ship Design', winner: '🏆 Uniworld' },
        { feature: 'Excursions', winner: '🏆 Tauck' },
        { feature: 'Dining', winner: 'Tie' },
        { feature: 'Service', winner: 'Tie' },
        { feature: 'Included Amenities', winner: '🏆 Tauck' },
        { feature: 'Boutique Experience', winner: '🏆 Uniworld' },
        { feature: 'Value', winner: 'Tie' },
        { feature: 'Cultural Experiences', winner: '🏆 Tauck' },
        { feature: 'Overall Experience', winner: 'Tie' }
    ]

    const uvtcRatings = [
        { category: 'Luxury', uniworld: '⭐⭐⭐⭐⭐', tauck: '⭐⭐⭐⭐⭐' },
        { category: 'Dining', uniworld: '⭐⭐⭐⭐⭐', tauck: '⭐⭐⭐⭐⭐' },
        { category: 'Service', uniworld: '⭐⭐⭐⭐⭐', tauck: '⭐⭐⭐⭐⭐' },
        { category: 'Excursions', uniworld: '⭐⭐⭐⭐⭐', tauck: '⭐⭐⭐⭐⭐' },
        { category: 'Included Amenities', uniworld: '⭐⭐⭐⭐☆', tauck: '⭐⭐⭐⭐⭐' }
    ]

    return (
        <>
            <Helmet>
                <title>Uniworld vs Tauck River Cruises : Which Luxury River Cruise Is Better?</title>
                <meta name="title" content="Uniworld vs Tauck River Cruises | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Compare Uniworld vs Tauck River Cruises including pricing, ships, dining, excursions, service, cabins, inclusions, and destinations to discover the best luxury river cruise for your next vacation."
                />
                <script type="application/ld+json">
                    {JSON.stringify(uvtcSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (MATCHED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Sparkles size={16} />
                            <span>Uniworld vs Tauck River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld vs Tauck River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Which Luxury River Cruise Is Best?
                        </p>
                        <div className="fcel-hero-btn-row">
                            <Link to='/contact' className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (MATCHED) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">EXPERT COMPARISON</span>
                                <h2 className="fcel-section-heading">Two Titans of Luxury River Cruising</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    If you're deciding between Uniworld and Tauck River Cruises, you're comparing two of the world's finest luxury river cruise companies. Both deliver exceptional service, gourmet dining, immersive excursions, and unforgettable journeys across Europe's most iconic waterways.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Uniworld is known for boutique-style luxury, individually designed ships, and nearly all-inclusive fares. Tauck is famous for exclusive land experiences, smaller groups, premium guided tours, and one of the most inclusive luxury travel experiences available. Both cruise lines cater to discerning travelers, but each offers a distinct approach to luxury river cruising.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UvtcPlaceholder label="Uniworld vs Tauck River Cruises" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Head-to-Head Comparison</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Both cruise lines cater to discerning travelers, but each offers a distinct approach to luxury river cruising.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="uvtc-quick-answer-section">
                    <div className="uvtc-quick-answer-container">
                        <div className="uvtc-quick-answer-card">
                            <h3 className="uvtc-quick-answer-title">Is Uniworld Better Than Tauck?</h3>
                            <ul className="uvtc-quick-answer-list">
                                <li className="uvtc-quick-answer-item">
                                    <CheckCircle size={20} className="uvtc-quick-answer-icon" />
                                    <span>Choose Uniworld if you prefer boutique luxury, elegant ship design, gourmet dining, and personalized onboard service.</span>
                                </li>
                                <li className="uvtc-quick-answer-item">
                                    <CheckCircle size={20} className="uvtc-quick-answer-icon" />
                                    <span>Choose Tauck if you value exclusive land experiences, smaller tour groups, VIP access, and one of the industry's most inclusive guided travel experiences.</span>
                                </li>
                            </ul>
                            <p className="uvtc-quick-answer-text">
                                Both consistently rank among the very best luxury river cruise lines.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="uvtc-glance-section">
                    <div className="uvtc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">QUICK COMPARISON</span>
                            <h2 className="fcel-section-heading">At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-glance-table-wrapper">
                            <table className="uvtc-glance-table">
                                <thead>
                                    <tr>
                                        <th className="uvtc-glance-th">Feature</th>
                                        <th className="uvtc-glance-th">Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uvtcAtAGlance.map((row, idx) => {
                                        const winner = row.winner;
                                        const hasTrophy = winner.startsWith('🏆 ');
                                        const cleanWinner = hasTrophy ? winner.replace('🏆 ', '') : winner;
                                        return (
                                            <tr key={idx}>
                                                <td className="uvtc-glance-td">{row.feature}</td>
                                                <td className="uvtc-glance-td">
                                                    {hasTrophy && (
                                                        <Trophy
                                                            size={16}
                                                            style={{
                                                                marginRight: '6px',
                                                                color: 'var(--uvtc-navy)',
                                                                display: 'inline-block',
                                                                verticalAlign: 'middle'
                                                            }}
                                                        />
                                                    )}
                                                    <span style={{ verticalAlign: 'middle' }}>{cleanWinner}</span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CTA (INLINE CTA) */}
                <section className="uvtc-inline-cta-section">
                    <div className="uvtc-inline-cta-container">
                        <span className="uvtc-inline-cta-tag">Expert Planning</span>
                        <p className="uvtc-inline-cta-text">Not sure which luxury river cruise line is right for you?</p>
                        <div className="uvtc-inline-cta-btn-row">
                            <Link to="/contact" className="uvtc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvtc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* OVERALL RATINGS */}
                <section className="uvtc-rating-section">
                    <div className="uvtc-rating-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">⭐ OVERALL RATINGS</span>
                            <h2 className="fcel-section-heading">How They Compare</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-rating-table-wrapper">
                            <table className="uvtc-rating-table">
                                <thead>
                                    <tr>
                                        <th className="uvtc-rating-th">Category</th>
                                        <th className="uvtc-rating-th">Uniworld</th>
                                        <th className="uvtc-rating-th">Tauck</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uvtcRatings.map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="uvtc-rating-td">{row.category}</td>
                                            <td className="uvtc-rating-td uvtc-rating-stars">{row.uniworld}</td>
                                            <td className="uvtc-rating-td uvtc-rating-stars">{row.tauck}</td>
                                        </tr>
                                    ))}
                                    <tr className="uvtc-rating-total-row">
                                        <td className="uvtc-rating-td uvtc-rating-total-label">Overall</td>
                                        <td className="uvtc-rating-td uvtc-rating-total-score">9.8/10</td>
                                        <td className="uvtc-rating-td uvtc-rating-total-score">9.9/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* SHIP DESIGN */}
                <section className="uvtc-vs-section uvtc-bg-soft">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">DESIGN & STYLE</span>
                            <h2 className="fcel-section-heading">Ship Design</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-vs-grid">
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Uniworld</h3>
                                <div className="uvtc-card-image-wrapper">
                                    <UvtcPlaceholder label="Uniworld Boutique Ship Design" />
                                </div>
                                <p className="uvtc-vs-card-text">
                                    Every ship is individually decorated with boutique hotel-inspired interiors, handcrafted furnishings, and luxurious public spaces.
                                </p>
                                <p className="uvtc-vs-card-bestfor">
                                    <strong>Best For:</strong> Travelers who appreciate elegant European design and intimate luxury.
                                </p>
                            </div>
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Tauck</h3>
                                <div className="uvtc-card-image-wrapper">
                                    <UvtcPlaceholder label="Tauck Contemporary Ship Design" />
                                </div>
                                <p className="uvtc-vs-card-text">
                                    Tauck ships feature classic contemporary interiors with spacious lounges, refined décor, and a relaxed luxury atmosphere.
                                </p>
                            </div>
                        </div>
                        <div className="uvtc-winner-badge">
                            <Trophy size={18} />
                            <span>Winner: Uniworld</span>
                        </div>
                    </div>
                </section>

                {/* SUITES & ACCOMMODATIONS */}
                <section className="uvtc-vs-section uvtc-bg-white">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">STATEROOMS</span>
                            <h2 className="fcel-section-heading">Suites & Accommodations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-split-comparison uvtc-reverse">
                            <div className="uvtc-split-content">
                                <div className="uvtc-vs-grid">
                                    <div className="uvtc-vs-card">
                                        <h3 className="uvtc-vs-card-brand">Uniworld</h3>
                                        <ul className="uvtc-vs-card-list">
                                            <li><Bed size={16} /><span>Boutique luxury cabins</span></li>
                                            <li><Bath size={16} /><span>Marble bathrooms</span></li>
                                            <li><Bell size={16} /><span>Butler service in select suites</span></li>
                                            <li><Sparkles size={16} /><span>Elegant furnishings</span></li>
                                        </ul>
                                    </div>
                                    <div className="uvtc-vs-card">
                                        <h3 className="uvtc-vs-card-brand">Tauck</h3>
                                        <ul className="uvtc-vs-card-list">
                                            <li><Bed size={16} /><span>Spacious suites</span></li>
                                            <li><Sparkles size={16} /><span>Luxury bedding</span></li>
                                            <li><Award size={16} /><span>Premium amenities</span></li>
                                            <li><CheckCircle size={16} /><span>Well-appointed accommodations</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="uvtc-winner-badge">
                                    <Award size={18} />
                                    <span>Winner: Tie</span>
                                </div>
                            </div>
                            <div className="uvtc-split-image">
                                <div className="uvtc-split-image-card">
                                    <UvtcPlaceholder label="Uniworld vs Tauck Suites & Accommodations" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="uvtc-vs-section uvtc-bg-soft">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                            <h2 className="fcel-section-heading">Dining Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-split-comparison">
                            <div className="uvtc-split-content">
                                <div className="uvtc-vs-grid">
                                    <div className="uvtc-vs-card">
                                        <h3 className="uvtc-vs-card-brand">Uniworld</h3>
                                        <ul className="uvtc-vs-card-list">
                                            <li><Utensils size={16} /><span>Gourmet regional cuisine</span></li>
                                            <li><Landmark size={16} /><span>Farm-to-table menus</span></li>
                                            <li><Wine size={16} /><span>Premium wines and spirits</span></li>
                                            <li><Sparkles size={16} /><span>Elegant dining experience</span></li>
                                        </ul>
                                    </div>
                                    <div className="uvtc-vs-card">
                                        <h3 className="uvtc-vs-card-brand">Tauck</h3>
                                        <ul className="uvtc-vs-card-list">
                                            <li><Utensils size={16} /><span>Gourmet cuisine</span></li>
                                            <li><MapPin size={16} /><span>Regional specialties</span></li>
                                            <li><Wine size={16} /><span>Complimentary beverages</span></li>
                                            <li><Sparkles size={16} /><span>Fine dining throughout the journey</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="uvtc-winner-badge">
                                    <Award size={18} />
                                    <span>Winner: Tie</span>
                                </div>
                            </div>
                            <div className="uvtc-split-image">
                                <div className="uvtc-split-image-card">
                                    <UvtcPlaceholder label="Uniworld vs Tauck Dining Comparison" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="uvtc-vs-section uvtc-bg-white">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-vs-grid">
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Uniworld Includes</h3>
                                <ul className="uvtc-vs-card-checklist">
                                    {['Gourmet dining', 'Premium beverages', 'Guided excursions', 'Wi-Fi', 'Gratuities', 'Butler service (select suites)'].map((item, idx) => (
                                        <li key={idx}><CheckCircle size={16} className="uvtc-vs-check-icon" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Tauck Includes</h3>
                                <ul className="uvtc-vs-card-checklist">
                                    {['Unlimited beverages', 'Gratuities', 'Airport transfers', 'Exclusive shore excursions', 'VIP experiences', 'Most onboard expenses'].map((item, idx) => (
                                        <li key={idx}><CheckCircle size={16} className="uvtc-vs-check-icon" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="uvtc-winner-badge">
                            <Trophy size={18} />
                            <span>Winner: Tauck</span>
                        </div>
                    </div>
                </section>

                {/* SERVICE */}
                <section className="uvtc-service-section uvtc-bg-soft">
                    <div className="uvtc-service-container">
                        <span className="fcel-eyebrow-label uvtc-eyebrow-service">GUEST EXPERIENCE</span>
                        <h2 className="fcel-section-heading">Service</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Both cruise lines deliver exceptional personalized service with experienced crews and outstanding guest satisfaction.
                        </p>
                        <div className="uvtc-winner-badge">
                            <Award size={18} />
                            <span>Winner: Tie</span>
                        </div>
                    </div>
                </section>

                {/* EXCURSIONS */}
                <section className="uvtc-vs-section uvtc-bg-white">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHORE EXCURSIONS</span>
                            <h2 className="fcel-section-heading">Excursions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-vs-grid">
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Uniworld</h3>
                                <ul className="uvtc-vs-card-list">
                                    <li><Compass size={16} /><span>Walking tours</span></li>
                                    <li><Utensils size={16} /><span>Culinary experiences</span></li>
                                    <li><Wine size={16} /><span>Wine tastings</span></li>
                                    <li><Landmark size={16} /><span>Local cultural immersion</span></li>
                                </ul>
                            </div>
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Tauck</h3>
                                <ul className="uvtc-vs-card-list">
                                    <li><Award size={16} /><span>Exclusive private experiences</span></li>
                                    <li><Smile size={16} /><span>Small-group touring</span></li>
                                    <li><Sparkles size={16} /><span>VIP access</span></li>
                                    <li><Landmark size={16} /><span>Unique cultural events</span></li>
                                    <li><Compass size={16} /><span>Guided land journeys</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="uvtc-winner-badge">
                            <Trophy size={18} />
                            <span>Winner: Tauck</span>
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="uvtc-vs-section uvtc-bg-soft">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLDWIDE REACH</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 10px auto' }}>
                                Both cruise lines sail:
                            </p>
                        </div>
                        <div className="uvtc-dest-shared-row">
                            {['Rhine', 'Danube', 'Seine', 'Rhône', 'Douro'].map((river, idx) => (
                                <span key={idx} className="uvtc-dest-shared-pill">
                                    <MapPin size={14} />
                                    {river}
                                </span>
                            ))}
                        </div>
                        <div className="uvtc-split-comparison uvtc-reverse" style={{ marginTop: '48px' }}>
                            <div className="uvtc-split-content">
                                <div className="uvtc-vs-grid">
                                    <div className="uvtc-vs-card">
                                        <h3 className="uvtc-vs-card-brand">Uniworld</h3>
                                        <p className="uvtc-vs-card-text">
                                            Uniworld also offers Egypt, Peru, India, and Southeast Asia.
                                        </p>
                                    </div>
                                    <div className="uvtc-vs-card">
                                        <h3 className="uvtc-vs-card-brand">Tauck</h3>
                                        <p className="uvtc-vs-card-text">
                                            Tauck focuses primarily on Europe with selected itineraries beyond Europe.
                                        </p>
                                    </div>
                                </div>
                                <div className="uvtc-winner-badge">
                                    <Trophy size={18} />
                                    <span>Winner: Uniworld</span>
                                </div>
                            </div>
                            <div className="uvtc-split-image">
                                <div className="uvtc-split-image-card">
                                    <UvtcPlaceholder label="Uniworld vs Tauck Cruise Destinations" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="uvtc-vs-section uvtc-bg-white">
                    <div className="uvtc-vs-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">INVESTMENT</span>
                            <h2 className="fcel-section-heading">Pricing</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-vs-grid">
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Uniworld</h3>
                                <p className="uvtc-vs-card-text">
                                    Luxury pricing with generous inclusions.
                                </p>
                            </div>
                            <div className="uvtc-vs-card">
                                <h3 className="uvtc-vs-card-brand">Tauck</h3>
                                <p className="uvtc-vs-card-text">
                                    Premium pricing with one of the industry's most comprehensive all-inclusive experiences.
                                </p>
                            </div>
                        </div>
                        <div className="uvtc-winner-badge">
                            <Award size={18} />
                            <span>Winner: Tie</span>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="uvtc-audience-section">
                    <div className="uvtc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Choose Each Line?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-audience-grid">
                            <div className="uvtc-audience-column">
                                <h3 className="uvtc-audience-heading">Who Should Choose Uniworld?</h3>
                                <p className="uvtc-audience-subtext">Perfect for:</p>
                                <ul className="uvtc-audience-list">
                                    {['Luxury travelers', 'Couples', 'Food lovers', 'Boutique hotel enthusiasts', 'Travelers seeking elegant ship design'].map((item, idx) => (
                                        <li key={idx} className="uvtc-audience-item">
                                            <CheckCircle size={18} className="uvtc-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvtc-audience-column">
                                <h3 className="uvtc-audience-heading">Who Should Choose Tauck?</h3>
                                <p className="uvtc-audience-subtext">Perfect for:</p>
                                <ul className="uvtc-audience-list">
                                    {['Experienced travelers', 'Cultural explorers', 'Guests seeking VIP experiences', 'Travelers wanting the most inclusive land excursions', 'Luxury couples'].map((item, idx) => (
                                        <li key={idx} className="uvtc-audience-item">
                                            <CheckCircle size={18} className="uvtc-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="uvtc-recommendation-section uvtc-bg-white">
                    <div className="uvtc-recommendation-container">
                        <span className="fcel-eyebrow-label uvtc-eyebrow-verdict">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Which Should You Choose?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Choose Uniworld if you prefer boutique luxury, elegant interiors, gourmet dining, and personalized service aboard beautifully designed ships.
                        </p>
                        <p className="fcel-lead-paragraph">
                            Choose Tauck if your priority is immersive cultural experiences, exclusive excursions, VIP access, and an exceptionally inclusive luxury vacation.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ fontWeight: '600', color: 'var(--uvtc-navy)' }}>
                            Both are among the finest luxury river cruise experiences available today.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH US */}
                <section className="uvtc-why-book-section uvtc-bg-soft">
                    <div className="uvtc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-why-book-grid">
                            <div className="uvtc-why-book-card">
                                <div className="uvtc-why-book-icon">
                                    <LayoutList size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Compare Both Cruise Lines</h4>
                                <p className="uvtc-why-book-desc">Compare both cruise lines side by side to find your best fit.</p>
                            </div>
                            <div className="uvtc-why-book-card">
                                <div className="uvtc-why-book-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Choose the Best Itinerary</h4>
                                <p className="uvtc-why-book-desc">Choose the best itinerary for your travel goals and timeline.</p>
                            </div>
                            <div className="uvtc-why-book-card">
                                <div className="uvtc-why-book-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Select the Ideal Suite</h4>
                                <p className="uvtc-why-book-desc">Select the ideal suite for your comfort and budget.</p>
                            </div>
                            <div className="uvtc-why-book-card">
                                <div className="uvtc-why-book-icon">
                                    <Award size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Access Exclusive Promotions</h4>
                                <p className="uvtc-why-book-desc">Access exclusive promotions unavailable when booking direct.</p>
                            </div>
                            <div className="uvtc-why-book-card">
                                <div className="uvtc-why-book-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Arrange Flights & Hotels</h4>
                                <p className="uvtc-why-book-desc">Arrange flights and hotels around your cruise dates.</p>
                            </div>
                            <div className="uvtc-why-book-card">
                                <div className="uvtc-why-book-icon">
                                    <MapPin size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Customize Pre- & Post-Cruise Stays</h4>
                                <p className="uvtc-why-book-desc">Customize pre- and post-cruise stays around your journey.</p>
                            </div>
                            <div className="uvtc-why-book-card uvtc-why-book-card-wide">
                                <div className="uvtc-why-book-icon">
                                    <CheckCircle size={20} />
                                </div>
                                <h4 className="uvtc-why-book-title">Concierge-Level Planning</h4>
                                <p className="uvtc-why-book-desc">Provide concierge-level planning before, during, and after your vacation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION (MATCHED) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {uvtcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => uvtcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {uvtcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {uvtcActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED GUIDES (RELATED CONTENT CTA) */}
                <section className="uvtc-related-section">
                    <div className="uvtc-related-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">KEEP EXPLORING</span>
                            <h2 className="fcel-section-heading">Related Luxury Cruise Guides</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvtc-related-grid">
                            <Link to="/uniworld-river-cruises/review" className="uvtc-related-card">
                                <div className="uvtc-related-icon">
                                    <Ship size={20} />
                                </div>
                                <h4 className="uvtc-related-title">Uniworld River Cruises Review</h4>
                                <p className="uvtc-related-desc">Our full expert review of Uniworld's boutique river cruise fleet.</p>
                                <span className="uvtc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/uniworld-river-cruises/rhone-saone" className="uvtc-related-card">
                                <div className="uvtc-related-icon">
                                    <Landmark size={20} />
                                </div>
                                <h4 className="uvtc-related-title">Uniworld Rhône & Saône River Cruises</h4>
                                <p className="uvtc-related-desc">Discover Burgundy and Provence aboard a boutique river ship.</p>
                                <span className="uvtc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/uniworld-river-cruises/egypt-nile" className="uvtc-related-card">
                                <div className="uvtc-related-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="uvtc-related-title">Uniworld Egypt & Nile River Cruises</h4>
                                <p className="uvtc-related-desc">Sail the Nile in boutique luxury among ancient wonders.</p>
                                <span className="uvtc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/why-i-resisted-viking" className="uvtc-related-card">
                                <div className="uvtc-related-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="uvtc-related-title">Why I Resisted Viking</h4>
                                <p className="uvtc-related-desc">An honest editorial comparing Uniworld's boutique feel to Viking.</p>
                                <span className="uvtc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/scenic-cabins-guide" className="uvtc-related-card">
                                <div className="uvtc-related-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="uvtc-related-title">Scenic Cabins Guide</h4>
                                <p className="uvtc-related-desc">Compare suite categories across leading luxury river cruise lines.</p>
                                <span className="uvtc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Choose Your Luxury River Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare Uniworld and Tauck, secure exclusive promotions, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default UniworldVsTauckRiverCruises