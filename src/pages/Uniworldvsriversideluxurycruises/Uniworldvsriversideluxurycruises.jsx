import Navbar from '../../components/Navbar/Navbar'
import './Uniworldvsriversideluxurycruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, Globe, Award,
    Utensils, Wine, Bed, Compass, Coins, Trophy, Scale,
    Image as ImageIcon, MapPin, Users
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component (unique to this page)
function UvrlPlaceholder({ label, className = '' }) {
    return (
        <div className={`uvrl-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function WinnerBadge({ winner, text }) {
    return (
        <div className="uvrl-winner-badge">
            <div className="uvrl-winner-icon">
                {winner === 'Tie' ? <Scale size={28} /> : <Trophy size={28} />}
            </div>
            <p className="uvrl-winner-text">
                <strong>Winner: {winner}</strong>
                {text ? ` — ${text}` : ''}
            </p>
        </div>
    )
}

function UniworldVsRiversideLuxuryCruises() {
    const [uvrlActiveFaq, setUvrlActiveFaq] = useState(null)
    const uvrlToggleFaq = (index) => {
        setUvrlActiveFaq(uvrlActiveFaq === index ? null : index)
    }

    const uvrlGlanceRows = [
        { feature: "Overall Luxury", winner: "Tie" },
        { feature: "Boutique Atmosphere", winner: "🏆 Uniworld" },
        { feature: "Suites", winner: "🏆 Riverside" },
        { feature: "Dining", winner: "🏆 Riverside" },
        { feature: "Service", winner: "Tie" },
        { feature: "Excursions", winner: "🏆 Uniworld" },
        { feature: "Included Amenities", winner: "🏆 Uniworld" },
        { feature: "Value", winner: "Tie" },
        { feature: "Modern Luxury", winner: "🏆 Riverside" },
        { feature: "Overall Experience", winner: "Tie" },
    ]

    const uvrlRatingsRows = [
        { category: "Luxury", uniworld: "⭐⭐⭐⭐⭐", riverside: "⭐⭐⭐⭐⭐" },
        { category: "Dining", uniworld: "⭐⭐⭐⭐⭐", riverside: "⭐⭐⭐⭐⭐" },
        { category: "Service", uniworld: "⭐⭐⭐⭐⭐", riverside: "⭐⭐⭐⭐⭐" },
        { category: "Excursions", uniworld: "⭐⭐⭐⭐⭐", riverside: "⭐⭐⭐⭐☆" },
        { category: "Suites", uniworld: "⭐⭐⭐⭐☆", riverside: "⭐⭐⭐⭐⭐" },
    ]

    const uvrlSuitesUniworld = ["Boutique luxury cabins", "Marble bathrooms", "Butler service in select suites", "Elegant furnishings"]
    const uvrlSuitesRiverside = ["Spacious all-suite accommodations", "Walk-in closets", "Large marble bathrooms", "Luxury bedding", "Butler-style personalized service"]

    const uvrlDiningUniworld = ["Gourmet regional cuisine", "Farm-to-table ingredients", "Premium wines", "Elegant fine dining"]
    const uvrlDiningRiverside = ["Michelin-inspired cuisine", "Multiple dining venues", "Extensive wine program", "24-hour room service", "Fine dining throughout the voyage"]

    const uvrlIncludedUniworld = ["Premium beverages", "Guided excursions", "Wi-Fi", "Gratuities", "Butler service (select suites)", "Airport transfers (select sailings)"]
    const uvrlIncludedRiverside = ["Fine dining", "Premium beverages", "Wi-Fi", "Gratuities", "Spacious suites"]

    const uvrlExcursionsUniworld = ["Walking tours", "Culinary experiences", "Wine tastings", "Local cultural immersion"]
    const uvrlExcursionsRiverside = ["Guided sightseeing", "Cultural experiences", "Optional premium tours", "Flexible touring options"]

    const uvrlSharedRivers = ["Rhine", "Danube", "Rhône", "Main", "Moselle"]

    const uvrlUniworldAudience = ["Boutique luxury lovers", "Couples", "Food enthusiasts", "Travelers seeking immersive excursions", "Guests wanting an established luxury brand"]
    const uvrlRiversideAudience = ["Travelers wanting oversized suites", "Luxury couples", "Food and wine lovers", "Guests preferring modern elegance", "Travelers seeking an intimate all-suite experience"]

    const uvrlWhyBook = [
        { title: "Compare Both Cruise Lines", icon: <Scale size={20} /> },
        { title: "Choose the Best Itinerary", icon: <Compass size={20} /> },
        { title: "Select the Ideal Suite", icon: <Bed size={20} /> },
        { title: "Access Exclusive Offers", icon: <Award size={20} /> },
        { title: "Arrange Flights and Hotels", icon: <Globe size={20} /> },
        { title: "Customize Pre- & Post-Cruise Stays", icon: <MapPin size={20} /> },
        { title: "Concierge-Level Planning Before, During & After Your Vacation", icon: <CheckCircle size={20} /> },
    ]

    const uvrlFaqs = [
        {
            question: "1. Is Uniworld more luxurious than Riverside Luxury Cruises?",
            answer: "Both are ultra-luxury river cruise brands. Uniworld is known for boutique elegance, while Riverside specializes in spacious all-suite luxury."
        },
        {
            question: "2. Is Riverside more expensive than Uniworld?",
            answer: "Pricing is generally comparable, with Riverside often positioned in the ultra-luxury segment alongside Uniworld and Tauck."
        },
        {
            question: "3. Which cruise line includes gratuities?",
            answer: "Both cruise lines include onboard gratuities on most sailings."
        },
        {
            question: "4. Which has better food?",
            answer: "Riverside is widely praised for its Michelin-inspired cuisine and multiple dining venues, while Uniworld is celebrated for gourmet regional cuisine."
        },
        {
            question: "5. Which has better excursions?",
            answer: "Uniworld offers more immersive included cultural experiences, while Riverside provides flexible sightseeing options."
        },
        {
            question: "6. Are drinks included on both?",
            answer: "Yes. Both include premium wines, spirits, and beverages during the cruise."
        },
        {
            question: "7. Which cruise line has larger suites?",
            answer: "Riverside Luxury Cruises offers some of the largest suites available on European river cruises."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is included on both cruise lines."
        },
        {
            question: "9. Which is better for couples?",
            answer: "Both are excellent. Uniworld offers boutique romance, while Riverside delivers spacious luxury accommodations and exceptional dining."
        },
        {
            question: "10. Which is better for first-time luxury river cruisers?",
            answer: "Uniworld is often recommended because of its long-standing reputation, comprehensive inclusions, and extensive destination portfolio."
        },
        {
            question: "11. Which cruise line offers more destinations?",
            answer: "Uniworld offers significantly more worldwide itineraries, while Riverside currently focuses on Europe's premier rivers."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors compare both cruise lines, recommend the ideal itinerary, secure exclusive offers, and provide concierge-level planning before, during, and after your luxury river cruise."
        },
    ]

    const uvrlSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside",
                "name": "Uniworld vs Riverside Luxury Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside",
                "description": "Compare Uniworld vs Riverside Luxury Cruises including ships, pricing, suites, dining, excursions, service, inclusions, destinations, and luxury river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside#article"
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside#article",
                "headline": "Uniworld vs Riverside Luxury Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside",
                "description": "Expert comparison of Uniworld and Riverside Luxury Cruises including pricing, luxury, dining, excursions, service, cabins, destinations, and what's included.",
                "image": "https://www.tripsandships.com/images/uniworld-vs-riverside-luxury-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Comparison Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert comparison and planning services helping travelers choose between Uniworld, Riverside Luxury Cruises, and other leading luxury river cruise lines."
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
                        "name": "Uniworld vs Riverside Luxury Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-riverside"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more luxurious than Riverside Luxury Cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are ultra-luxury river cruise brands. Uniworld is known for boutique elegance and individually designed ships, while Riverside Luxury Cruises specializes in spacious all-suite accommodations and contemporary luxury."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Riverside Luxury Cruises more expensive than Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pricing is generally comparable, with Riverside Luxury Cruises positioned in the ultra-luxury segment alongside Uniworld."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line includes gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both Uniworld and Riverside Luxury Cruises include onboard gratuities on most itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better food?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Riverside Luxury Cruises is known for Michelin-inspired cuisine and multiple dining venues, while Uniworld is recognized for gourmet regional cuisine and exceptional culinary experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better excursions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld offers more immersive included cultural excursions, while Riverside provides flexible sightseeing experiences and optional premium tours."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included on both?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Both cruise lines include premium wines, spirits, cocktails, and beverages throughout most of the cruise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has larger suites?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Riverside Luxury Cruises offers some of the largest suites available on European river cruises, featuring spacious layouts and luxury amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is included on both Uniworld and Riverside Luxury Cruises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for couples?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are excellent for couples. Uniworld offers boutique romance and elegant ship design, while Riverside provides spacious suites and contemporary luxury."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for first-time luxury river cruisers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld is often recommended for first-time luxury river cruisers because of its long-standing reputation, extensive itinerary choices, and nearly all-inclusive experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line offers more destinations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld offers significantly more worldwide river cruise destinations, while Riverside Luxury Cruises currently focuses primarily on Europe's most iconic rivers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel compares both cruise lines, recommends the best itinerary, secures exclusive offers, and provides concierge-level planning before, during, and after your luxury river cruise vacation."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld vs Riverside Luxury Cruises : Which Luxury River Cruise Is Better?</title>
                <meta name="title" content="Uniworld vs Riverside Luxury Cruises | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Compare Uniworld vs Riverside Luxury Cruises including pricing, suites, dining, service, excursions, ships, inclusions, and destinations to discover which luxury river cruise is best for your next vacation."
                />
                <script type="application/ld+json">
                    {JSON.stringify(uvrlSchemaData)}
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
                            <span>Luxury River Cruise Comparison</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld vs Riverside Luxury Cruises</h1>
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
                                <h2 className="fcel-section-heading">Uniworld vs Riverside Luxury Cruises</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    If you're comparing Uniworld and Riverside Luxury Cruises, you're looking at two of Europe's most luxurious river cruise experiences. Both focus on exceptional service, gourmet dining, elegant accommodations, and immersive cultural journeys.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Uniworld is famous for boutique-style floating hotels, individually designed ships, nearly all-inclusive fares, and decades of river cruising expertise.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Riverside Luxury Cruises is a newer ultra-luxury brand that emphasizes spacious all-suite accommodations, Michelin-inspired cuisine, personalized service, and a relaxed luxury atmosphere.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    The best choice depends on whether you prefer boutique elegance or modern all-suite luxury.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UvrlPlaceholder label="Uniworld vs Riverside Luxury River Cruise Ships" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Comparison Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Both are among Europe's finest luxury river cruise brands.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER (FEATURED SNIPPET) */}
                <section className="uvrl-quick-answer-section">
                    <div className="uvrl-quick-answer-container">
                        <div className="uvrl-quick-answer-card">
                            <h3 className="uvrl-quick-answer-title">Is Uniworld Better Than Riverside Luxury Cruises?</h3>
                            <div className="uvrl-choice-block">
                                <Ship size={20} className="uvrl-choice-icon" />
                                <p className="uvrl-choice-text">
                                    <strong>Choose Uniworld</strong> if you want a proven ultra-luxury river cruise with boutique ships, premium inclusions, and immersive cultural experiences.
                                </p>
                            </div>
                            <div className="uvrl-choice-block">
                                <Bed size={20} className="uvrl-choice-icon" />
                                <p className="uvrl-choice-text">
                                    <strong>Choose Riverside Luxury Cruises</strong> if you prefer oversized suites, Michelin-quality dining, flexible onboard experiences, and contemporary luxury.
                                </p>
                            </div>
                            <p className="uvrl-quick-answer-footer">
                                Both are among Europe's finest luxury river cruise brands.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="uvrl-glance-section">
                    <div className="uvrl-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvrl-eyebrow-glance">QUICK COMPARISON</span>
                            <h2 className="fcel-section-heading">At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-glance-table-wrapper">
                            <table className="uvrl-glance-table">
                                <thead>
                                    <tr>
                                        <th className="uvrl-glance-th">Feature</th>
                                        <th className="uvrl-glance-th">Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uvrlGlanceRows.map((row, idx) => {
                                        const hasTrophy = row.winner.startsWith('🏆 ');
                                        const cleanWinner = hasTrophy ? row.winner.replace('🏆 ', '') : row.winner;
                                        return (
                                            <tr key={idx}>
                                                <td className="uvrl-glance-td">{row.feature}</td>
                                                <td className="uvrl-glance-td uvrl-glance-winner">
                                                    {hasTrophy && (
                                                        <Trophy
                                                            size={15}
                                                            style={{
                                                                marginRight: '6px',
                                                                color: 'var(--uvrl-navy)',
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

                {/* OVERALL RATINGS TABLE */}
                <section className="uvrl-ratings-section">
                    <div className="uvrl-ratings-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvrl-eyebrow-ratings">EXPERT SCORES</span>
                            <h2 className="fcel-section-heading">Overall Ratings</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-ratings-table-wrapper">
                            <table className="uvrl-ratings-table">
                                <thead>
                                    <tr>
                                        <th className="uvrl-ratings-th">Category</th>
                                        <th className="uvrl-ratings-th">Uniworld</th>
                                        <th className="uvrl-ratings-th">Riverside</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uvrlRatingsRows.map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="uvrl-ratings-td">{row.category}</td>
                                            <td className="uvrl-ratings-td"><span className="uvrl-ratings-stars">{row.uniworld}</span></td>
                                            <td className="uvrl-ratings-td"><span className="uvrl-ratings-stars">{row.riverside}</span></td>
                                        </tr>
                                    ))}
                                    <tr className="uvrl-ratings-score-row">
                                        <td className="uvrl-ratings-td">Overall</td>
                                        <td className="uvrl-ratings-td">9.8/10</td>
                                        <td className="uvrl-ratings-td">9.8/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CTA 1 (INLINE CTA) */}
                <section className="uvrl-inline-cta-section">
                    <div className="uvrl-inline-cta-container">
                        <span className="uvrl-inline-cta-tag">Expert Planning</span>
                        <p className="uvrl-inline-cta-text">Not sure which line fits your travel style — Uniworld or Riverside?</p>
                        <div className="uvrl-inline-cta-btn-row">
                            <Link to="/contact" className="uvrl-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvrl-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SHIP DESIGN */}
                <section className="uvrl-compare-section uvrl-bg-soft">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIP DESIGN</span>
                            <h2 className="fcel-section-heading">Ship Design</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Ship size={18} /></span>
                                    Uniworld
                                </h4>
                                <div className="uvrl-card-image-wrapper">
                                    <UvrlPlaceholder label="Uniworld Boutique Ship Design" />
                                </div>
                                <p className="uvrl-compare-col-text">
                                    Each ship is individually designed with boutique hotel-inspired décor, handcrafted furnishings, artwork, and luxurious public spaces.
                                </p>
                                <div className="uvrl-compare-bestfor">
                                    <span className="uvrl-compare-bestfor-label">Best For</span>
                                    <p className="uvrl-compare-bestfor-text">Travelers seeking timeless European elegance.</p>
                                </div>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Ship size={18} /></span>
                                    Riverside Luxury Cruises
                                </h4>
                                <div className="uvrl-card-image-wrapper">
                                    <UvrlPlaceholder label="Riverside Contemporary Ship Design" />
                                </div>
                                <p className="uvrl-compare-col-text">
                                    Riverside features spacious luxury ships with elegant contemporary interiors, large public lounges, sophisticated restaurants, and an all-suite concept.
                                </p>
                                <div className="uvrl-compare-bestfor">
                                    <span className="uvrl-compare-bestfor-label">Best For</span>
                                    <p className="uvrl-compare-bestfor-text">Travelers wanting spacious accommodations and contemporary luxury.</p>
                                </div>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* SUITES & ACCOMMODATIONS */}
                <section className="uvrl-compare-section uvrl-bg-white">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                            <h2 className="fcel-section-heading">Suites & Accommodations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Bed size={18} /></span>
                                    Uniworld
                                </h4>
                                <div className="uvrl-card-image-wrapper">
                                    <UvrlPlaceholder label="Uniworld Luxury Suites" />
                                </div>
                                <ul className="uvrl-compare-list">
                                    {uvrlSuitesUniworld.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Bed size={18} /></span>
                                    Riverside
                                </h4>
                                <div className="uvrl-card-image-wrapper">
                                    <UvrlPlaceholder label="Riverside Luxury Suites" />
                                </div>
                                <ul className="uvrl-compare-list">
                                    {uvrlSuitesRiverside.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Riverside Luxury Cruises" />
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="uvrl-compare-section uvrl-bg-soft">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                            <h2 className="fcel-section-heading">Dining Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Utensils size={18} /></span>
                                    Uniworld
                                </h4>
                                <div className="uvrl-card-image-wrapper">
                                    <UvrlPlaceholder label="Uniworld Fine Dining" />
                                </div>
                                <ul className="uvrl-compare-list">
                                    {uvrlDiningUniworld.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Wine size={18} /></span>
                                    Riverside
                                </h4>
                                <div className="uvrl-card-image-wrapper">
                                    <UvrlPlaceholder label="Riverside Fine Dining" />
                                </div>
                                <ul className="uvrl-compare-list">
                                    {uvrlDiningRiverside.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Riverside Luxury Cruises" />
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="uvrl-compare-section uvrl-bg-white">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvrl-eyebrow-included">ALL-INCLUSIVE VALUE</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><CheckCircle size={18} /></span>
                                    Uniworld Includes
                                </h4>
                                <ul className="uvrl-compare-list">
                                    {uvrlIncludedUniworld.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><CheckCircle size={18} /></span>
                                    Riverside Includes
                                </h4>
                                <ul className="uvrl-compare-list">
                                    {uvrlIncludedRiverside.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Uniworld" />
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA) */}
                <section className="uvrl-inline-cta-section">
                    <div className="uvrl-inline-cta-container">
                        <span className="uvrl-inline-cta-tag">Inclusions & Value</span>
                        <p className="uvrl-inline-cta-text">Want a side-by-side breakdown of what's really included?</p>
                        <div className="uvrl-inline-cta-btn-row">
                            <Link to="/contact" className="uvrl-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvrl-btn-outline">
                                <LayoutList size={18} />
                                Compare Cruise Lines
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SERVICE */}
                <section className="uvrl-compare-section uvrl-bg-soft">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvrl-eyebrow-service">ONBOARD HOSPITALITY</span>
                            <h2 className="fcel-section-heading">Service</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Both cruise lines deliver personalized luxury service with outstanding crew-to-guest ratios.
                            </p>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Users size={18} /></span>
                                    Uniworld
                                </h4>
                                <p className="uvrl-compare-col-text">
                                    Uniworld offers decades of experience in luxury river cruising.
                                </p>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Users size={18} /></span>
                                    Riverside
                                </h4>
                                <p className="uvrl-compare-col-text">
                                    Riverside emphasizes anticipatory service and personalized attention.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* EXCURSIONS */}
                <section className="uvrl-compare-section uvrl-bg-white">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHORE EXPERIENCES</span>
                            <h2 className="fcel-section-heading">Excursions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Compass size={18} /></span>
                                    Uniworld
                                </h4>
                                <ul className="uvrl-compare-list">
                                    {uvrlExcursionsUniworld.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Compass size={18} /></span>
                                    Riverside
                                </h4>
                                <ul className="uvrl-compare-list">
                                    {uvrlExcursionsRiverside.map((item, idx) => (
                                        <li key={idx} className="uvrl-compare-list-item">
                                            <CheckCircle size={16} className="uvrl-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Uniworld" />
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="uvrl-compare-section uvrl-bg-soft">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE THEY SAIL</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Both cruise lines sail Europe's iconic rivers including:
                            </p>
                        </div>
                        <div className="uvrl-dest-rivers-grid">
                            {['Rhine', 'Danube', 'Rhône', 'Main', 'Moselle'].map((river, idx) => (
                                <div key={idx} className="uvrl-river-card">
                                    <h4 className="uvrl-river-card-name">
                                        <MapPin size={16} />
                                        {river}
                                    </h4>
                                </div>
                            ))}
                        </div>
                        <div className="uvrl-split-comparison uvrl-reverse" style={{ marginTop: '48px' }}>
                            <div className="uvrl-split-content">
                                <div className="uvrl-dest-note-card" style={{ marginTop: 0 }}>
                                    <p className="uvrl-dest-note-text">
                                        Uniworld also operates itineraries in Egypt, India, Peru, and Southeast Asia.
                                    </p>
                                </div>
                                <WinnerBadge winner="Uniworld" />
                            </div>
                            <div className="uvrl-split-image">
                                <div className="uvrl-split-image-card">
                                    <UvrlPlaceholder label="Uniworld vs Riverside Cruise Destinations" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA 3 (INLINE CTA) */}
                <section className="uvrl-inline-cta-section">
                    <div className="uvrl-inline-cta-container">
                        <span className="uvrl-inline-cta-tag">Destinations & Itineraries</span>
                        <p className="uvrl-inline-cta-text">Curious which rivers and regions fit your travel wish list?</p>
                        <div className="uvrl-inline-cta-btn-row">
                            <Link to="/contact" className="uvrl-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvrl-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="uvrl-compare-section uvrl-bg-white">
                    <div className="uvrl-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                            <h2 className="fcel-section-heading">Pricing</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-compare-grid">
                            <div className="uvrl-compare-col">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Coins size={18} /></span>
                                    Uniworld
                                </h4>
                                <p className="uvrl-compare-col-text">
                                    Premium pricing with nearly all-inclusive luxury.
                                </p>
                            </div>
                            <div className="uvrl-compare-col uvrl-compare-col-riverside">
                                <h4 className="uvrl-compare-col-title">
                                    <span className="uvrl-compare-col-icon"><Coins size={18} /></span>
                                    Riverside
                                </h4>
                                <p className="uvrl-compare-col-text">
                                    Ultra-luxury pricing comparable to the industry's highest-end river cruise brands.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE UNIWORLD / RIVERSIDE */}
                <section className="uvrl-audience-section">
                    <div className="uvrl-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvrl-eyebrow-audience">IS IT RIGHT FOR YOU?</span>
                            <h2 className="fcel-section-heading">Who Should Choose Which?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvrl-audience-grid">
                            <div className="uvrl-audience-column">
                                <h4 className="uvrl-audience-title">Who Should Choose Uniworld?</h4>
                                <ul className="uvrl-audience-list">
                                    {uvrlUniworldAudience.map((item, idx) => (
                                        <li key={idx} className="uvrl-audience-item">
                                            <CheckCircle size={18} className="uvrl-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvrl-audience-column uvrl-audience-column-riverside">
                                <h4 className="uvrl-audience-title">Who Should Choose Riverside Luxury Cruises?</h4>
                                <ul className="uvrl-audience-list">
                                    {uvrlRiversideAudience.map((item, idx) => (
                                        <li key={idx} className="uvrl-audience-item">
                                            <CheckCircle size={18} className="uvrl-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA 4 (INLINE CTA) */}
                <section className="uvrl-inline-cta-section">
                    <div className="uvrl-inline-cta-container">
                        <span className="uvrl-inline-cta-tag">Book with Confidence</span>
                        <p className="uvrl-inline-cta-text">Let our advisors match you to the right cruise line and suite.</p>
                        <div className="uvrl-inline-cta-btn-row">
                            <Link to="/contact" className="uvrl-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvrl-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL */}
                <section className="uvrl-why-book-section">
                    <div className="uvrl-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Our luxury cruise specialists help you:
                            </p>
                        </div>
                        <div className="uvrl-why-book-grid">
                            {uvrlWhyBook.map((item, idx) => (
                                <div key={idx} className="uvrl-why-book-card">
                                    <div className="uvrl-why-book-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className="uvrl-why-book-title">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="uvrl-recommendation-section">
                    <div className="uvrl-recommendation-container">
                        <span className="fcel-eyebrow-label uvrl-eyebrow-verdict">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>

                        <div className="uvrl-recommendation-block">
                            <p className="uvrl-recommendation-text">
                                <strong>Choose Uniworld</strong> if you value boutique elegance, immersive cultural experiences, and nearly all-inclusive luxury backed by decades of expertise.
                            </p>
                        </div>
                        <div className="uvrl-recommendation-block uvrl-recommendation-block-riverside">
                            <p className="uvrl-recommendation-text">
                                <strong>Choose Riverside Luxury Cruises</strong> if your priority is spacious suites, Michelin-inspired dining, and contemporary luxury with exceptional personalized service.
                            </p>
                        </div>

                        <p className="uvrl-recommendation-closing">
                            Both represent the very best of European luxury river cruising.
                        </p>
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
                            {uvrlFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => uvrlToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {uvrlActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {uvrlActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Choose Between Uniworld and Riverside?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to lock in extra credits, suite upgrades, and personalized transfers. We plan details so you can enjoy the trip.
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

export default UniworldVsRiversideLuxuryCruises