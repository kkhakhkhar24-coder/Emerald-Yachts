import Navbar from '../../components/Navbar/Navbar'
import './UniworldvsScenicRiverCruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, Globe, Award,
    Utensils, Wine, Bed, Compass, Coins, Trophy, Scale,
    Image as ImageIcon, Bath, Sun, MapPin, Users, Wifi,
    Smile, Gift
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component (unique to this page)
function UvscPlaceholder({ label, className = '' }) {
    return (
        <div className={`uvsc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function WinnerBadge({ winner, text }) {
    return (
        <div className="uvsc-winner-badge">
            <div className="uvsc-winner-icon">
                {winner === 'Tie' ? <Scale size={28} /> : <Trophy size={28} />}
            </div>
            <p className="uvsc-winner-text">
                <strong>Winner: {winner}</strong>
                {text ? ` — ${text}` : ''}
            </p>
        </div>
    )
}

function UniworldVsScenicRiverCruises() {
    const [uvscActiveFaq, setUvscActiveFaq] = useState(null)
    const uvscToggleFaq = (index) => {
        setUvscActiveFaq(uvscActiveFaq === index ? null : index)
    }

    const uvscGlanceRows = [
        { feature: "Overall Luxury", winner: "Tie" },
        { feature: "Ship Design", winner: "🏆 Uniworld" },
        { feature: "Suites", winner: "🏆 Scenic" },
        { feature: "Butler Service", winner: "🏆 Scenic" },
        { feature: "Dining", winner: "Tie" },
        { feature: "Excursions", winner: "🏆 Scenic" },
        { feature: "Service", winner: "Tie" },
        { feature: "Included Amenities", winner: "🏆 Scenic" },
        { feature: "Value", winner: "Tie" },
        { feature: "Overall Experience", winner: "Tie" },
    ]

    const uvscRatingsRows = [
        { category: "Luxury", uniworld: "⭐⭐⭐⭐⭐", scenic: "⭐⭐⭐⭐⭐" },
        { category: "Dining", uniworld: "⭐⭐⭐⭐⭐", scenic: "⭐⭐⭐⭐⭐" },
        { category: "Service", uniworld: "⭐⭐⭐⭐⭐", scenic: "⭐⭐⭐⭐⭐" },
        { category: "Excursions", uniworld: "⭐⭐⭐⭐⭐", scenic: "⭐⭐⭐⭐⭐" },
        { category: "Suites", uniworld: "⭐⭐⭐⭐☆", scenic: "⭐⭐⭐⭐⭐" },
        { category: "Included Amenities", uniworld: "⭐⭐⭐⭐☆", scenic: "⭐⭐⭐⭐⭐" },
    ]

    const uvscSuitesUniworld = ["Boutique luxury cabins", "Marble bathrooms", "Butler service in select suites", "Custom-designed interiors", "Elegant furnishings"]
    const uvscSuitesScenic = ["Butler service in every suite", "Scenic Sun Lounge", "Spacious suites", "Premium bedding", "Luxury bathrooms"]

    const uvscDiningUniworld = ["Gourmet regional cuisine", "Farm-to-table ingredients", "Unlimited premium beverages", "Fine dining atmosphere"]
    const uvscDiningScenic = ["Multiple dining venues", "Fine dining restaurants", "In-suite dining", "Extensive premium wine selection", "Specialty culinary experiences"]

    const uvscIncludedUniworld = ["Gourmet dining", "Premium beverages", "Guided excursions", "Wi-Fi", "Gratuities", "Butler service (select suites)", "Airport transfers (select sailings)"]
    const uvscIncludedScenic = ["Butler service in every suite", "Premium beverages", "Scenic Freechoice excursions", "Scenic Enrich experiences", "Wi-Fi", "Gratuities", "Airport transfers"]

    const uvscExcursionsUniworld = ["Local cultural experiences", "Walking tours", "Culinary excursions", "Wine tastings"]
    const uvscExcursionsScenic = ["Scenic Freechoice activities", "Scenic Enrich exclusive events", "Active excursions", "Small-group experiences"]

    const uvscSharedRivers = ["Rhine", "Danube", "Seine", "Rhône", "Douro"]

    const uvscUniworldAudience = ["Boutique luxury lovers", "Couples", "Food enthusiasts", "Travelers wanting elegant ship design", "Guests seeking intimate service"]
    const uvscScenicAudience = ["Travelers wanting truly all-inclusive luxury", "Guests wanting butler service", "Luxury couples", "Multi-generational travelers", "Travelers seeking spacious suites"]

    const uvscWhyBook = [
        { title: "Compare Both Cruise Lines", icon: <Scale size={20} /> },
        { title: "Choose the Best Itinerary", icon: <Compass size={20} /> },
        { title: "Select the Ideal Suite", icon: <Bed size={20} /> },
        { title: "Access Exclusive Promotions", icon: <Award size={20} /> },
        { title: "Arrange Flights and Hotels", icon: <Globe size={20} /> },
        { title: "Customize Pre- & Post-Cruise Stays", icon: <MapPin size={20} /> },
        { title: "Concierge-Level Planning Before, During & After", icon: <CheckCircle size={20} /> },
    ]

    const uvscFaqs = [
        {
            question: "1. Is Uniworld more luxurious than Scenic?",
            answer: "Both are considered ultra-luxury river cruise lines. Uniworld offers boutique elegance and unique ship designs, while Scenic focuses on truly all-inclusive luxury with butler service in every suite."
        },
        {
            question: "2. Is Scenic more expensive than Uniworld?",
            answer: "Often yes. Scenic's fares can be slightly higher because nearly every onboard amenity, excursion, beverage, gratuity, and butler service is included."
        },
        {
            question: "3. Which cruise line includes gratuities?",
            answer: "Both Uniworld and Scenic include onboard gratuities on most sailings."
        },
        {
            question: "4. Which has better food?",
            answer: "Both offer outstanding gourmet dining. Uniworld emphasizes regional cuisine, while Scenic offers multiple specialty dining venues and premium wine selections."
        },
        {
            question: "5. Which has better excursions?",
            answer: "Scenic generally offers a wider selection through Scenic Freechoice and Scenic Enrich experiences, while Uniworld focuses on immersive cultural touring."
        },
        {
            question: "6. Are drinks included on both?",
            answer: "Yes. Both cruise lines include premium wines, spirits, cocktails, specialty coffee, soft drinks, and bottled water."
        },
        {
            question: "7. Which cruise line has butler service?",
            answer: "Scenic includes butler service for every suite. Uniworld provides butler service in many higher-category suites."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is included on both cruise lines."
        },
        {
            question: "9. Which is better for first-time river cruisers?",
            answer: "Both are excellent. Scenic appeals to travelers seeking maximum inclusions, while Uniworld is ideal for those wanting boutique luxury."
        },
        {
            question: "10. Which is better for couples?",
            answer: "Both are exceptional choices. Couples often choose Uniworld for its intimate atmosphere and Scenic for its spacious suites and all-inclusive amenities."
        },
        {
            question: "11. Which cruise line offers more destinations?",
            answer: "Scenic operates luxury river cruises throughout Europe and Southeast Asia and also offers expedition ocean voyages. Uniworld focuses on luxury river cruising across Europe, Egypt, Asia, India, Peru, and South America."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors compare both cruise lines, recommend the best itinerary, secure exclusive offers, and provide concierge-level planning before, during, and after your luxury river cruise."
        },
    ]

    const uvscSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic",
                "name": "Uniworld vs Scenic River Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic",
                "description": "Compare Uniworld vs Scenic River Cruises including ships, pricing, dining, excursions, cabins, service, inclusions, destinations, and luxury travel experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic#article"
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
                "description": "Luxury travel agency specializing in luxury river cruises, expedition cruises, ocean cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic#article",
                "headline": "Uniworld vs Scenic River Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic",
                "description": "Expert comparison of Uniworld and Scenic River Cruises including pricing, dining, luxury, excursions, destinations, service, cabins, and what's included.",
                "image": "https://www.tripsshipsluxurytravel.com/images/uniworld-vs-scenic-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Comparison Services",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert comparison and planning services helping travelers choose between Uniworld, Scenic, and other leading luxury river cruise lines."
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
                        "name": "Uniworld River Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Uniworld vs Scenic River Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/uniworld-vs-scenic"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more luxurious than Scenic?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are considered ultra-luxury river cruise lines. Uniworld offers boutique-style elegance and individually designed ships, while Scenic is known for its truly all-inclusive luxury, spacious suites, and personalized butler service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Scenic more expensive than Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Scenic often has slightly higher fares because nearly every onboard amenity, premium beverage, excursion, gratuity, and butler service is included. Pricing varies by itinerary and season."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line includes gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both Uniworld and Scenic include onboard gratuities as part of their luxury all-inclusive experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better food?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both cruise lines offer exceptional gourmet dining. Uniworld emphasizes locally inspired cuisine, while Scenic offers multiple specialty dining venues and an extensive premium beverage selection."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better excursions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Scenic offers one of the widest selections of included Scenic Freechoice excursions, while Uniworld provides immersive small-group cultural experiences. Both are excellent."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included on both?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Both Uniworld and Scenic include premium wines, spirits, cocktails, specialty coffee, and beverages throughout the cruise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both offer butler service. Scenic provides butler service in every suite category, while Uniworld includes butler service in many higher-category suites."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is included on both Uniworld and Scenic River Cruises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for first-time river cruisers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are excellent choices. Scenic appeals to travelers seeking a truly all-inclusive luxury experience, while Uniworld is ideal for guests who appreciate boutique-style elegance and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for couples?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both cruise lines are outstanding for couples. Scenic offers spacious suites and luxury inclusions, while Uniworld provides romantic boutique ships and intimate onboard experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has more destinations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Scenic operates river cruises throughout Europe and Southeast Asia and also offers luxury ocean expeditions. Uniworld focuses primarily on premium river cruise destinations across Europe, Egypt, Asia, and South America."
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

    return (
        <>
            <Helmet>
                <title>Uniworld vs Scenic River Cruises: Which Luxury River Cruise Is Better?</title>
                <meta name="title" content="Uniworld vs Scenic River Cruises | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Compare Uniworld vs Scenic River Cruises including pricing, ships, suites, dining, excursions, service, inclusions, and destinations to find the best luxury river cruise for your next vacation."
                />
                <script type="application/ld+json">
                    {JSON.stringify(uvscSchemaData)}
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
                        <h1 className="fcel-hero-title">Uniworld vs Scenic River Cruises</h1>
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
                                <h2 className="fcel-section-heading">Uniworld vs Scenic River Cruises</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    If you're comparing Uniworld and Scenic River Cruises, you're choosing between two of the world's most luxurious all-inclusive river cruise brands. Both offer exceptional service, elegant ships, gourmet dining, immersive excursions, and premium accommodations—but each delivers a slightly different experience.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Uniworld is known for its boutique hotel-style ships, individually designed interiors, and personalized luxury.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Scenic is recognized for its truly all-inclusive experience, spacious suites, butler service in every suite, and innovative Scenic Freechoice excursions.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    The best option depends on your travel style, preferred atmosphere, and luxury expectations.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UvscPlaceholder label="Uniworld vs Scenic Luxury River Cruise Ships" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Comparison Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Both rank among the finest luxury river cruise companies in the world.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER (FEATURED SNIPPET) */}
                <section className="uvsc-quick-answer-section">
                    <div className="uvsc-quick-answer-container">
                        <div className="uvsc-quick-answer-card">
                            <h3 className="uvsc-quick-answer-title">Is Uniworld Better Than Scenic?</h3>
                            <div className="uvsc-choice-block">
                                <Ship size={20} className="uvsc-choice-icon" />
                                <p className="uvsc-choice-text">
                                    <strong>Choose Uniworld</strong> if you prefer boutique luxury, unique ship designs, exceptional culinary experiences, and intimate service.
                                </p>
                            </div>
                            <div className="uvsc-choice-block">
                                <Bed size={20} className="uvsc-choice-icon" />
                                <p className="uvsc-choice-text">
                                    <strong>Choose Scenic</strong> if you want the most all-inclusive river cruise available, larger suites, butler service for every guest, and extensive excursion choices.
                                </p>
                            </div>
                            <p className="uvsc-quick-answer-footer">
                                Both rank among the finest luxury river cruise companies in the world.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="uvsc-glance-section">
                    <div className="uvsc-glance-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvsc-eyebrow-glance">QUICK COMPARISON</span>
                            <h2 className="fcel-section-heading">At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-glance-table-wrapper">
                            <table className="uvsc-glance-table">
                                <thead>
                                    <tr>
                                        <th className="uvsc-glance-th">Feature</th>
                                        <th className="uvsc-glance-th">Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uvscGlanceRows.map((row, idx) => {
                                        const featureIcons = {
                                            "Overall Luxury": <Award size={18} style={{ color: '#274472' }} />,
                                            "Ship Design": <Ship size={18} style={{ color: '#274472' }} />,
                                            "Suites": <Bed size={18} style={{ color: '#274472' }} />,
                                            "Butler Service": <Users size={18} style={{ color: '#274472' }} />,
                                            "Dining": <Utensils size={18} style={{ color: '#274472' }} />,
                                            "Excursions": <Compass size={18} style={{ color: '#274472' }} />,
                                            "Service": <Smile size={18} style={{ color: '#274472' }} />,
                                            "Included Amenities": <Gift size={18} style={{ color: '#274472' }} />,
                                            "Value": <Coins size={18} style={{ color: '#274472' }} />,
                                            "Overall Experience": <Sparkles size={18} style={{ color: '#274472' }} />
                                        };
                                        return (
                                            <tr key={idx}>
                                                <td className="uvsc-glance-td">
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                                        {featureIcons[row.feature]}
                                                        <span>{row.feature}</span>
                                                    </span>
                                                </td>
                                                <td className="uvsc-glance-td uvsc-glance-winner">
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                                        {row.winner.includes("🏆") ? (
                                                            <>
                                                                <Trophy size={16} style={{ color: 'var(--urcr-navy)' }} />
                                                                <span>{row.winner.replace("🏆", "").trim()}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Scale size={16} style={{ color: 'var(--urcr-navy)' }} />
                                                                <span>{row.winner}</span>
                                                            </>
                                                        )}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* OVERALL RATINGS TABLE */}
                <section className="uvsc-ratings-section">
                    <div className="uvsc-ratings-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvsc-eyebrow-ratings">EXPERT SCORES</span>
                            <h2 className="fcel-section-heading">Overall Ratings</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-ratings-table-wrapper">
                            <table className="uvsc-ratings-table">
                                <thead>
                                    <tr>
                                        <th className="uvsc-ratings-th">Category</th>
                                        <th className="uvsc-ratings-th">Uniworld</th>
                                        <th className="uvsc-ratings-th">Scenic</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {uvscRatingsRows.map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="uvsc-ratings-td">{row.category}</td>
                                            <td className="uvsc-ratings-td"><span className="uvsc-ratings-stars">{row.uniworld}</span></td>
                                            <td className="uvsc-ratings-td"><span className="uvsc-ratings-stars">{row.scenic}</span></td>
                                        </tr>
                                    ))}
                                    <tr className="uvsc-ratings-score-row">
                                        <td className="uvsc-ratings-td">Overall</td>
                                        <td className="uvsc-ratings-td">9.8/10</td>
                                        <td className="uvsc-ratings-td">9.9/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CTA 1 (INLINE CTA) */}
                <section className="uvsc-inline-cta-section">
                    <div className="uvsc-inline-cta-container">
                        <span className="uvsc-inline-cta-tag">Expert Planning</span>
                        <p className="uvsc-inline-cta-text">Not sure which line fits your travel style — Uniworld or Scenic?</p>
                        <div className="uvsc-inline-cta-btn-row">
                            <Link to="/contact" className="uvsc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvsc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SHIP DESIGN */}
                <section className="uvsc-compare-section uvsc-bg-soft">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIP DESIGN</span>
                            <h2 className="fcel-section-heading">Ship Design</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-layout-split-img">
                            <div className="uvsc-split-img-wrapper">
                                <UvscPlaceholder label="Boutique Artistry vs Modern Contemporary Yacht Design" />
                            </div>
                            <div className="uvsc-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
                                <div className="uvsc-compare-col">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><Ship size={18} /></span>
                                        Uniworld
                                    </h4>
                                    <p className="uvsc-compare-col-text">
                                        Every ship is individually designed with boutique hotel-inspired décor, handcrafted furnishings, artwork, and elegant public spaces. No two ships look alike, creating a distinctive and luxurious atmosphere.
                                    </p>
                                    <div className="uvsc-compare-bestfor">
                                        <span className="uvsc-compare-bestfor-label">Best For</span>
                                        <p className="uvsc-compare-bestfor-text">Travelers seeking a unique, intimate, and artistic onboard experience.</p>
                                    </div>
                                </div>
                                <div className="uvsc-compare-col uvsc-compare-col-scenic">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><Ship size={18} /></span>
                                        Scenic
                                    </h4>
                                    <p className="uvsc-compare-col-text">
                                        Scenic ships feature contemporary luxury, spacious layouts, elegant lounges, and modern suites. Every suite includes a private Scenic Sun Lounge, allowing guests to enjoy river views in comfort throughout the year.
                                    </p>
                                    <div className="uvsc-compare-bestfor">
                                        <span className="uvsc-compare-bestfor-label">Best For</span>
                                        <p className="uvsc-compare-bestfor-text">Travelers who appreciate modern luxury, spacious accommodations, and innovative ship design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" text="Boutique elegance (Uniworld) vs contemporary luxury (Scenic)." />
                    </div>
                </section>

                {/* SUITES & ACCOMMODATIONS */}
                <section className="uvsc-compare-section uvsc-bg-white">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                            <h2 className="fcel-section-heading">Suites & Accommodations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-layout-card-deck">
                            <div className="uvsc-deck-card uniworld-card">
                                <h4 className="uvsc-compare-col-title">
                                    <span className="uvsc-compare-col-icon"><Bed size={18} /></span>
                                    Uniworld
                                </h4>
                                <ul className="uvsc-compare-list" style={{ marginTop: '20px' }}>
                                    {uvscSuitesUniworld.map((item, idx) => (
                                        <li key={idx} className="uvsc-compare-list-item">
                                            <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvsc-deck-card scenic-card">
                                <h4 className="uvsc-compare-col-title">
                                    <span className="uvsc-compare-col-icon"><Bed size={18} /></span>
                                    Scenic
                                </h4>
                                <ul className="uvsc-compare-list" style={{ marginTop: '20px' }}>
                                    {uvscSuitesScenic.map((item, idx) => (
                                        <li key={idx} className="uvsc-compare-list-item">
                                            <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Scenic" />
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="uvsc-compare-section uvsc-bg-soft">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                            <h2 className="fcel-section-heading">Dining Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-layout-split-img-reverse">
                            <div className="uvsc-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
                                <div className="uvsc-compare-col">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><Utensils size={18} /></span>
                                        Uniworld
                                    </h4>
                                    <ul className="uvsc-compare-list">
                                        {uvscDiningUniworld.map((item, idx) => (
                                            <li key={idx} className="uvsc-compare-list-item">
                                                <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="uvsc-compare-col uvsc-compare-col-scenic">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><Wine size={18} /></span>
                                        Scenic
                                    </h4>
                                    <ul className="uvsc-compare-list">
                                        {uvscDiningScenic.map((item, idx) => (
                                            <li key={idx} className="uvsc-compare-list-item">
                                                <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="uvsc-split-img-wrapper">
                                <UvscPlaceholder label="Uniworld Regional Dining vs Scenic Multiple Specialty Restaurants" />
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                        <p className="uvsc-compare-note">Both cruise lines consistently rank among the best for river cruise dining.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="uvsc-compare-section uvsc-bg-white">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvsc-eyebrow-included">ALL-INCLUSIVE VALUE</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-asymmetric-grid">
                            <div className="uvsc-asym-card-left">
                                <h4 className="uvsc-compare-col-title">
                                    <span className="uvsc-compare-col-icon"><CheckCircle size={18} /></span>
                                    Uniworld Includes
                                </h4>
                                <ul className="uvsc-compare-list" style={{ marginTop: '20px' }}>
                                    {uvscIncludedUniworld.map((item, idx) => (
                                        <li key={idx} className="uvsc-compare-list-item">
                                            <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvsc-asym-card-right">
                                <h4 className="uvsc-compare-col-title">
                                    <span className="uvsc-compare-col-icon"><CheckCircle size={18} /></span>
                                    Scenic Includes
                                </h4>
                                <ul className="uvsc-compare-list" style={{ marginTop: '20px' }}>
                                    {uvscIncludedScenic.map((item, idx) => (
                                        <li key={idx} className="uvsc-compare-list-item">
                                            <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Scenic" />
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA) */}
                <section className="uvsc-inline-cta-section">
                    <div className="uvsc-inline-cta-container">
                        <span className="uvsc-inline-cta-tag">Inclusions & Value</span>
                        <p className="uvsc-inline-cta-text">Want a side-by-side breakdown of what's really included?</p>
                        <div className="uvsc-inline-cta-btn-row">
                            <Link to="/contact" className="uvsc-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvsc-btn-outline">
                                <LayoutList size={18} />
                                Compare Cruise Lines
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SERVICE */}
                <section className="uvsc-compare-section uvsc-bg-soft">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvsc-eyebrow-service">ONBOARD HOSPITALITY</span>
                            <h2 className="fcel-section-heading">Service</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 30px auto' }}>
                                Both cruise lines are known for exceptional personalized service.
                            </p>
                        </div>
                        <div className="uvsc-layout-split-img">
                            <div className="uvsc-split-img-wrapper">
                                <UvscPlaceholder label="Personalized Butler Service & Warm Crew Onboard" />
                            </div>
                            <div className="uvsc-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
                                <div className="uvsc-compare-col">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><Users size={18} /></span>
                                        Uniworld
                                    </h4>
                                    <p className="uvsc-compare-col-text">
                                        Uniworld focuses on boutique hospitality with highly attentive crews.
                                    </p>
                                </div>
                                <div className="uvsc-compare-col uvsc-compare-col-scenic">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><Users size={18} /></span>
                                        Scenic
                                    </h4>
                                    <p className="uvsc-compare-col-text">
                                        Scenic enhances the experience with dedicated butler service for every suite and an impressive crew-to-guest ratio.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* EXCURSIONS */}
                <section className="uvsc-compare-section uvsc-bg-white">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHORE EXPERIENCES</span>
                            <h2 className="fcel-section-heading">Excursions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-layout-card-deck">
                            <div className="uvsc-deck-card uniworld-card">
                                <h4 className="uvsc-compare-col-title">
                                    <span className="uvsc-compare-col-icon"><Compass size={18} /></span>
                                    Uniworld
                                </h4>
                                <ul className="uvsc-compare-list" style={{ marginTop: '20px' }}>
                                    {uvscExcursionsUniworld.map((item, idx) => (
                                        <li key={idx} className="uvsc-compare-list-item">
                                            <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvsc-deck-card scenic-card">
                                <h4 className="uvsc-compare-col-title">
                                    <span className="uvsc-compare-col-icon"><Compass size={18} /></span>
                                    Scenic
                                </h4>
                                <ul className="uvsc-compare-list" style={{ marginTop: '20px' }}>
                                    {uvscExcursionsScenic.map((item, idx) => (
                                        <li key={idx} className="uvsc-compare-list-item">
                                            <CheckCircle size={16} className="uvsc-compare-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Scenic" />
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="uvsc-compare-section uvsc-bg-soft">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE THEY SAIL</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Both cruise lines sail many of Europe's most famous rivers including:
                            </p>
                        </div>
                        <div className="uvsc-compare-shared-rivers" style={{ marginBottom: '30px' }}>
                            {uvscSharedRivers.map((river, idx) => (
                                <span key={idx} className="uvsc-river-pill">{river}</span>
                            ))}
                        </div>
                        <div className="uvsc-layout-split-img-reverse">
                            <div className="uvsc-compare-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
                                <div className="uvsc-compare-col">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><MapPin size={18} /></span>
                                        Uniworld
                                    </h4>
                                    <p className="uvsc-compare-col-text">
                                        Uniworld also sails Egypt, India, Peru, and Southeast Asia.
                                    </p>
                                </div>
                                <div className="uvsc-compare-col uvsc-compare-col-scenic">
                                    <h4 className="uvsc-compare-col-title">
                                        <span className="uvsc-compare-col-icon"><MapPin size={18} /></span>
                                        Scenic
                                    </h4>
                                    <p className="uvsc-compare-col-text">
                                        Scenic additionally offers luxury ocean voyages aboard Scenic Eclipse expedition yachts.
                                    </p>
                                </div>
                            </div>
                            <div className="uvsc-split-img-wrapper">
                                <UvscPlaceholder label="Global Cruise Destinations & Scenic Eclipse Yachts" />
                            </div>
                        </div>
                        <WinnerBadge winner="Scenic" />
                    </div>
                </section>

                {/* CTA 3 (INLINE CTA) */}
                <section className="uvsc-inline-cta-section">
                    <div className="uvsc-inline-cta-container">
                        <span className="uvsc-inline-cta-tag">Destinations & Itineraries</span>
                        <p className="uvsc-inline-cta-text">Curious which rivers and regions fit your travel wish list?</p>
                        <div className="uvsc-inline-cta-btn-row">
                            <Link to="/contact" className="uvsc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvsc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="uvsc-compare-section uvsc-bg-white">
                    <div className="uvsc-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                            <h2 className="fcel-section-heading">Pricing</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-pricing-grid">
                            <div className="uvsc-pricing-card uniworld-price">
                                <div className="uvsc-pricing-header">
                                    <h4 className="uvsc-pricing-title">Uniworld</h4>
                                    <span className="uvsc-pricing-tag">Premium Value</span>
                                </div>
                                <p className="uvsc-compare-col-text" style={{ fontSize: '16px' }}>
                                    Premium pricing with many luxury inclusions.
                                </p>
                            </div>
                            <div className="uvsc-pricing-card scenic-price">
                                <div className="uvsc-pricing-header">
                                    <h4 className="uvsc-pricing-title">Scenic</h4>
                                    <span className="uvsc-pricing-tag">All-Inclusive Value</span>
                                </div>
                                <p className="uvsc-compare-col-text" style={{ fontSize: '16px' }}>
                                    Generally higher fares but one of the industry's most comprehensive all-inclusive experiences.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE UNIWORLD / SCENIC */}
                <section className="uvsc-audience-section">
                    <div className="uvsc-audience-container" style={{ maxWidth: '1280px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvsc-eyebrow-audience">IS IT RIGHT FOR YOU?</span>
                            <h2 className="fcel-section-heading">Who Should Choose Which?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvsc-layout-triple">
                            <div className="uvsc-audience-column">
                                <h4 className="uvsc-audience-title">Who Should Choose Uniworld?</h4>
                                <ul className="uvsc-audience-list">
                                    {uvscUniworldAudience.map((item, idx) => (
                                        <li key={idx} className="uvsc-audience-item">
                                            <CheckCircle size={18} className="uvsc-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvsc-triple-center-img">
                                <UvscPlaceholder label="Compare Luxury River Cruises & Find Your Perfect Match" />
                            </div>
                            <div className="uvsc-audience-column uvsc-audience-column-scenic">
                                <h4 className="uvsc-audience-title">Who Should Choose Scenic?</h4>
                                <ul className="uvsc-audience-list">
                                    {uvscScenicAudience.map((item, idx) => (
                                        <li key={idx} className="uvsc-audience-item">
                                            <CheckCircle size={18} className="uvsc-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA 4 (INLINE CTA) */}
                <section className="uvsc-inline-cta-section">
                    <div className="uvsc-inline-cta-container">
                        <span className="uvsc-inline-cta-tag">Book with Confidence</span>
                        <p className="uvsc-inline-cta-text">Let our advisors match you to the right cruise line and suite.</p>
                        <div className="uvsc-inline-cta-btn-row">
                            <Link to="/contact" className="uvsc-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvsc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL */}
                <section className="uvsc-why-book-section">
                    <div className="uvsc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Our luxury river cruise specialists help you:
                            </p>
                        </div>
                        <div className="uvsc-why-book-grid">
                            {uvscWhyBook.map((item, idx) => (
                                <div key={idx} className="uvsc-why-book-card">
                                    <div className="uvsc-why-book-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className="uvsc-why-book-title">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="uvsc-recommendation-section">
                    <div className="uvsc-recommendation-container">
                        <span className="fcel-eyebrow-label uvsc-eyebrow-verdict">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>

                        <div className="uvsc-recommendation-block">
                            <p className="uvsc-recommendation-text">
                                <strong>Choose Uniworld</strong> if you prefer boutique elegance, artistic ship design, exceptional cuisine, and intimate luxury.
                            </p>
                        </div>
                        <div className="uvsc-recommendation-block uvsc-recommendation-block-scenic">
                            <p className="uvsc-recommendation-text">
                                <strong>Choose Scenic</strong> if you want one of the most inclusive luxury river cruise experiences available, complete with butler service, larger suites, and exclusive Scenic Enrich events.
                            </p>
                        </div>

                        <p className="uvsc-recommendation-closing">
                            No matter which you choose, both deliver world-class luxury river cruising.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION (MATCHED) */}
                <section className="fcel-faq-section" style={{ backgroundColor: 'var(--urcr-bg-white)' }}>
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {uvscFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => uvscToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {uvscActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {uvscActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Choose Between <br /> Uniworld and Scenic?</h2>
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

export default UniworldVsScenicRiverCruises