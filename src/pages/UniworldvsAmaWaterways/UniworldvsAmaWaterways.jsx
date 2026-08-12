import Navbar from '../../components/Navbar/Navbar'
import ProfilePictureAH from "../../assets/Media (2).jpg"
import {
    Users as ExpertUsers,
    Award as ExpertAward,
    CheckCircle as ExpertCheckCircle,
    Ship as ExpertShip,
    Globe as ExpertGlobe,
    Compass as ExpertCompass,
    Sparkles as ExpertSparkles
} from 'lucide-react'
import './UniworldvsAmaWaterways.css'
import {
    Sparkles, Phone, LayoutList, CheckCircle, Award, Globe,
    Ship, Bed, Utensils, Smile, Compass, MapPin, Coins, Activity,
    Trophy, Scale, Image as ImageIcon, Gift
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UvaPlaceholder({ label, className = '' }) {
    return (
        <div className={`uva-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    ) 
}
function WinnerBadge({ winner }) {
    return (
        <div className="uva-winner-badge">
            <Trophy size={16} />
            <span>Winner: {winner}</span>
        </div>
    )
}

function UniworldVsAmaWaterways() {
    const [uvaActiveFaq, setUvaActiveFaq] = useState(null)
    const uvaToggleFaq = (index) => {
        setUvaActiveFaq(uvaActiveFaq === index ? null : index)
    }

    const uvaFaqs = [
        {
            question: "1. Is Uniworld more luxurious than AmaWaterways?",
            answer: "Yes. Uniworld is generally considered more luxurious due to its boutique ship design, butler service, premium inclusions, and highly personalized experience."
        },
        {
            question: "2. Is AmaWaterways cheaper than Uniworld?",
            answer: "Generally yes. AmaWaterways often offers lower fares while still providing excellent service, dining, and included excursions."
        },
        {
            question: "3. Which cruise line includes gratuities?",
            answer: "Uniworld includes onboard gratuities on most sailings. AmaWaterways typically charges gratuities separately unless included in a promotion."
        },
        {
            question: "4. Which has better food?",
            answer: "Both cruise lines are known for outstanding cuisine. Uniworld emphasizes gourmet regional dining, while AmaWaterways is famous for The Chef's Table specialty restaurant and fresh local ingredients."
        },
        {
            question: "5. Which has better excursions?",
            answer: "AmaWaterways offers more active excursion choices including biking and hiking, while Uniworld focuses on immersive cultural experiences."
        },
        {
            question: "6. Are drinks included on both?",
            answer: "Uniworld includes premium beverages throughout the cruise. AmaWaterways includes wine, beer, and soft drinks with lunch and dinner."
        },
        {
            question: "7. Which cruise line has butler service?",
            answer: "Uniworld offers butler service in many suite categories. AmaWaterways does not offer butler service."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is available on both cruise lines."
        },
        {
            question: "9. Which is better for active travelers?",
            answer: "AmaWaterways is widely considered one of the best river cruise lines for active travelers because of its biking, hiking, fitness classes, and wellness programs."
        },
        {
            question: "10. Which is better for couples?",
            answer: "Both are excellent. Uniworld offers boutique romance and luxury, while AmaWaterways provides spacious accommodations and outstanding dining."
        },
        {
            question: "11. Which cruise line offers more destinations?",
            answer: "Both offer excellent worldwide river cruise itineraries. Uniworld specializes in boutique luxury destinations, while AmaWaterways has a broad portfolio across Europe, Asia, Africa, Egypt, and South America."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors compare both cruise lines, recommend the best itinerary, secure exclusive offers, and provide personalized concierge-level planning before, during, and after your luxury river cruise."
        }
    ]

    const uvaSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways",
                "name": "Uniworld vs AmaWaterways",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways",
                "description": "Compare Uniworld vs AmaWaterways including ships, pricing, dining, excursions, cabins, service, inclusions, destinations, and luxury river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways#article"
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways#article",
                "headline": "Uniworld vs AmaWaterways",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways",
                "description": "Expert comparison of Uniworld and AmaWaterways including pricing, luxury, dining, excursions, service, cabins, destinations, and what's included.",
                "image": "https://www.tripsandships.com/images/uniworld-vs-amawaterways.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Comparison Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert comparison and planning services helping travelers choose between Uniworld, AmaWaterways, and other leading luxury river cruise lines."
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
                        "name": "Uniworld vs AmaWaterways",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-amawaterways"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more luxurious than AmaWaterways?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Uniworld is generally considered more luxurious due to its boutique ship design, butler service, premium inclusions, and highly personalized experience."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is AmaWaterways cheaper than Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generally yes. AmaWaterways often offers lower fares while still providing excellent service, dining, and included excursions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line includes gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld includes onboard gratuities on most sailings. AmaWaterways typically charges gratuities separately unless included as part of a promotion."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better food?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both cruise lines are known for outstanding cuisine. Uniworld emphasizes gourmet regional dining, while AmaWaterways is famous for The Chef's Table specialty restaurant and fresh local ingredients."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better excursions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AmaWaterways offers more active excursion choices including biking and hiking, while Uniworld focuses on immersive cultural experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included on both?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld includes premium beverages throughout the cruise. AmaWaterways includes wine, beer, and soft drinks with lunch and dinner."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld offers butler service in many suite categories. AmaWaterways does not offer butler service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is available on both Uniworld and AmaWaterways."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for active travelers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AmaWaterways is widely considered one of the best river cruise lines for active travelers because of its biking, hiking, fitness classes, and wellness programs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for couples?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are excellent. Uniworld offers boutique romance and luxury, while AmaWaterways provides spacious accommodations and outstanding dining."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line offers more destinations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both offer excellent worldwide river cruise itineraries. Uniworld specializes in boutique luxury destinations, while AmaWaterways has a broad portfolio across Europe, Asia, Africa, Egypt, and South America."
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
                <title>Uniworld vs AmaWaterways : Which Luxury River Cruise Is Better?</title>
                <meta name="title" content="Uniworld vs AmaWaterways | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Compare Uniworld vs AmaWaterways including pricing, ships, cabins, dining, excursions, service, inclusions, and destinations to discover which luxury river cruise line is right for your next vacation."
                />
                <script type="application/ld+json">
                    {JSON.stringify(uvaSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="fcel-page-wrapper">

                {/* HERO SECTION (MATCHED) */}
                <section className="fcel-hero-section">
                    <div className="fcel-hero-overlay"></div>
                    <div className="fcel-hero-content">
                        <div className="fcel-hero-tag">
                            <Scale size={16} />
                            <span>Uniworld vs AmaWaterways</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld vs AmaWaterways</h1>
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
                                Compare Itineraries
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION (MATCHED) */}
                <section className="fcel-intro-section">
                    <div className="fcel-intro-container">
                        <div className="fcel-intro-grid">
                            <div className="fcel-intro-copy">
                                <span className="fcel-eyebrow-label">CRUISE LINE COMPARISON</span>
                                <h2 className="fcel-section-heading">Uniworld vs AmaWaterways</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Choosing between Uniworld and AmaWaterways means comparing two award-winning luxury river cruise companies that deliver exceptional service, immersive itineraries, and unforgettable experiences across Europe and beyond.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Uniworld is famous for boutique luxury, individually designed ships, nearly all-inclusive fares, and elegant service.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    AmaWaterways is known for spacious ships, active excursions, wellness programs, outstanding dining, and excellent value in the premium luxury segment.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UvaPlaceholder label="Uniworld vs AmaWaterways" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Cruise Line Comparison</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Both offer remarkable vacations, but the best choice depends on your travel style, preferred amenities, and budget.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="uva-quick-answer-section">
                    <div className="uva-quick-answer-container">
                        <div className="uva-quick-answer-card">
                            <span className="fcel-eyebrow-label">FEATURED SNIPPET</span>
                            <h3 className="uva-quick-answer-title">Is Uniworld Better Than AmaWaterways?</h3>
                            <p className="uva-quick-answer-text">
                                Choose Uniworld if you want boutique luxury, butler service, premium inclusions, and one of the most elegant river cruise experiences available.
                            </p>
                            <p className="uva-quick-answer-text">
                                Choose AmaWaterways if you prefer active excursions, wellness-focused travel, spacious ships, and exceptional value with excellent dining.
                            </p>
                            <p className="uva-quick-answer-text">
                                Both consistently rank among the world's best river cruise lines.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 1 */}
                <section className="uva-inline-cta-section">
                    <div className="uva-inline-cta-container">
                        <span className="uva-inline-cta-tag">Expert Comparison</span>
                        <p className="uva-inline-cta-text">Not sure which cruise line fits your travel style?</p>
                        <div className="uva-inline-cta-btn-row">
                            <Link to="/contact" className="uva-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uva-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="uva-table-section uva-bg-white">
                    <div className="uva-table-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">QUICK COMPARISON</span>
                            <h2 className="fcel-section-heading">At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-table-wrapper">
                            <table className="uva-table">
                                <thead>
                                    <tr>
                                        <th className="uva-th">Feature</th>
                                        <th className="uva-th">Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Overall Luxury', '🏆 Uniworld'],
                                        ['Value', '🏆 AmaWaterways'],
                                        ['Dining', 'Tie'],
                                        ['Active Excursions', '🏆 AmaWaterways'],
                                        ['Service', 'Tie'],
                                        ['Ship Design', '🏆 Uniworld'],
                                        ['Wellness', '🏆 AmaWaterways'],
                                        ['Included Amenities', '🏆 Uniworld'],
                                        ['Suites', 'Tie'],
                                        ['Overall Experience', 'Tie']
                                    ].map((row, idx) => {
                                        const featureIcons = {
                                            "Overall Luxury": <Award size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Value": <Coins size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Dining": <Utensils size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Active Excursions": <Compass size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Service": <Smile size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Ship Design": <Ship size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Wellness": <Activity size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Included Amenities": <Gift size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Suites": <Bed size={18} style={{ color: 'var(--uva-navy)' }} />,
                                            "Overall Experience": <Sparkles size={18} style={{ color: 'var(--uva-navy)' }} />
                                        };
                                        const featureName = row[0];
                                        const winnerName = row[1];
                                        return (
                                            <tr key={idx}>
                                                <td className="uva-td">
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                                        {featureIcons[featureName]}
                                                        <span>{featureName}</span>
                                                    </span>
                                                </td>
                                                <td className="uva-td">
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                                        {winnerName.includes("🏆") ? (
                                                            <>
                                                                <Trophy size={16} style={{ color: 'var(--uva-navy)' }} />
                                                                <span>{winnerName.replace("🏆", "").trim()}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Scale size={16} style={{ color: 'var(--uva-navy)' }} />
                                                                <span>{winnerName}</span>
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
                <section className="uva-table-section uva-bg-soft">
                    <div className="uva-table-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uva-eyebrow-onsoft">⭐ EXPERT RATINGS</span>
                            <h2 className="fcel-section-heading">Overall Ratings</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-table-wrapper">
                            <table className="uva-table">
                                <thead>
                                    <tr>
                                        <th className="uva-th">Category</th>
                                        <th className="uva-th">Uniworld</th>
                                        <th className="uva-th">AmaWaterways</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Luxury', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐☆'],
                                        ['Dining', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                                        ['Service', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                                        ['Excursions', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                                        ['Wellness', '⭐⭐⭐⭐☆', '⭐⭐⭐⭐⭐'],
                                        ['Value', '⭐⭐⭐⭐☆', '⭐⭐⭐⭐⭐'],
                                        ['Overall', '9.8/10', '9.6/10']
                                    ].map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="uva-td">{row[0]}</td>
                                            <td className="uva-td">{row[1]}</td>
                                            <td className="uva-td">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* SHIP DESIGN COMPARISON */}
                <section className="uva-compare-section uva-bg-white">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIPS</span>
                            <h2 className="fcel-section-heading">Ship Design</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="Uniworld Ship Design" />
                                <span className="uva-compare-brand"><Ship size={18} /> Uniworld</span>
                                <p className="uva-compare-paragraph">
                                    Each ship is uniquely designed with boutique hotel-inspired décor, luxurious furnishings, original artwork, and elegant public spaces.
                                </p>
                                <div className="uva-compare-bestfor">
                                    <strong>Best For:</strong> Travelers seeking classic European elegance and personalized luxury.
                                </div>
                            </div>
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="AmaWaterways Ship Design" />
                                <span className="uva-compare-brand"><Ship size={18} /> AmaWaterways</span>
                                <p className="uva-compare-paragraph">
                                    AmaWaterways features contemporary ships with spacious public areas, twin-balcony staterooms, wellness facilities, and modern design.
                                </p>
                                <div className="uva-compare-bestfor">
                                    <strong>Best For:</strong> Guests who appreciate comfort, modern styling, and spacious accommodations.
                                </div>
                            </div>
                        </div>
                        <WinnerBadge winner="Uniworld" />
                    </div>
                </section>

                {/* INLINE CTA 2 */}
                <section className="uva-inline-cta-section">
                    <div className="uva-inline-cta-container">
                        <span className="uva-inline-cta-tag">Suite Selection</span>
                        <p className="uva-inline-cta-text">Want help picking between boutique suites and twin-balcony staterooms?</p>
                        <div className="uva-inline-cta-btn-row">
                            <Link to="/contact" className="uva-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uva-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SUITES & ACCOMMODATIONS COMPARISON */}
                <section className="uva-compare-section uva-bg-soft">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uva-eyebrow-onsoft">ACCOMMODATIONS</span>
                            <h2 className="fcel-section-heading">Suites & Accommodations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="Uniworld Suites & Cabins" />
                                <span className="uva-compare-brand"><Bed size={18} /> Uniworld</span>
                                <ul className="uva-compare-list">
                                    {['Boutique luxury cabins', 'Marble bathrooms', 'Butler service in select suites', 'Elegant custom décor', 'Luxury bedding'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="AmaWaterways Twin-Balcony Staterooms" />
                                <span className="uva-compare-brand"><Bed size={18} /> AmaWaterways</span>
                                <ul className="uva-compare-list">
                                    {['Twin-balcony staterooms', 'Spacious suites', 'Luxury bedding', 'Large bathrooms', 'Contemporary design'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="uva-compare-section uva-bg-white">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CUISINE</span>
                            <h2 className="fcel-section-heading">Dining Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="Uniworld Dining Experience" />
                                <span className="uva-compare-brand"><Utensils size={18} /> Uniworld</span>
                                <ul className="uva-compare-list">
                                    {['Gourmet regional cuisine', 'Farm-to-table ingredients', 'Unlimited premium beverages', 'Elegant fine dining'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="AmaWaterways Dining Experience" />
                                <span className="uva-compare-brand"><Utensils size={18} /> AmaWaterways</span>
                                <ul className="uva-compare-list">
                                    {['Award-winning cuisine', 'Multiple dining venues', 'Complimentary wine with meals', "The Chef's Table specialty restaurant", 'Fresh local ingredients'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                        <p className="uva-compare-note">Both consistently receive outstanding dining reviews.</p>
                    </div>
                </section>

                {/* WHAT'S INCLUDED COMPARISON */}
                <section className="uva-compare-section uva-bg-soft">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uva-eyebrow-onsoft">INCLUSIONS</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <span className="uva-compare-brand"><CheckCircle size={18} /> Uniworld Includes</span>
                                <ul className="uva-compare-list">
                                    {['Gourmet dining', 'Premium beverages', 'Guided excursions', 'Wi-Fi', 'Gratuities', 'Butler service (select suites)', 'Airport transfers (select itineraries)'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uva-compare-col">
                                <span className="uva-compare-brand"><CheckCircle size={18} /> AmaWaterways Includes</span>
                                <ul className="uva-compare-list">
                                    {['Daily excursions', 'Wine & beer with meals', 'Wellness activities', 'Fitness classes', 'Wi-Fi', 'Specialty dining'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Uniworld" />
                    </div>
                </section>

                {/* INLINE CTA 3 */}
                <section className="uva-inline-cta-section">
                    <div className="uva-inline-cta-container">
                        <span className="uva-inline-cta-tag">Inclusions Breakdown</span>
                        <p className="uva-inline-cta-text">Let's map out exactly what's included on each cruise line for your trip.</p>
                        <div className="uva-inline-cta-btn-row">
                            <Link to="/contact" className="uva-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uva-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SERVICE COMPARISON */}
                <section className="uva-compare-section uva-bg-white">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HOSPITALITY</span>
                            <h2 className="fcel-section-heading">Service</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Both cruise lines are recognized for warm, attentive service.</p>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="Uniworld Onboard Service" />
                                <span className="uva-compare-brand"><Smile size={18} /> Uniworld</span>
                                <p className="uva-compare-paragraph">
                                    Uniworld emphasizes boutique hospitality and personalized luxury.
                                </p>
                            </div>
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="AmaWaterways Onboard Service" />
                                <span className="uva-compare-brand"><Smile size={18} /> AmaWaterways</span>
                                <p className="uva-compare-paragraph">
                                    AmaWaterways is known for friendly crews and consistently high guest satisfaction.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* EXCURSIONS COMPARISON */}
                <section className="uva-compare-section uva-bg-soft">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uva-eyebrow-onsoft">SHORE EXPERIENCES</span>
                            <h2 className="fcel-section-heading">Excursions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <span className="uva-compare-brand"><Compass size={18} /> Uniworld</span>
                                <ul className="uva-compare-list">
                                    {['Cultural walking tours', 'Wine tastings', 'Local experiences', 'Culinary excursions'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uva-compare-col">
                                <span className="uva-compare-brand"><Compass size={18} /> AmaWaterways</span>
                                <ul className="uva-compare-list">
                                    {['Hiking tours', 'Bicycle tours', 'Wellness excursions', 'Multiple excursion choices in many ports'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="AmaWaterways" />
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="uva-compare-section uva-bg-white">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLDWIDE RIVERWAYS</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Both cruise lines sail Europe's most popular rivers including:</p>
                        </div>
                        <ul className="uva-compare-list uva-compare-list-shared">
                            {['Rhine', 'Danube', 'Seine', 'Rhône', 'Douro'].map((item, idx) => (
                                <li key={idx} className="uva-compare-item">
                                    <MapPin size={16} className="uva-compare-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="Uniworld Cruise Destinations" />
                                <span className="uva-compare-brand"><Globe size={18} /> Uniworld</span>
                                <p className="uva-compare-paragraph">
                                    Uniworld also sails Egypt, India, Peru, and Southeast Asia.
                                </p>
                            </div>
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="AmaWaterways Cruise Destinations" />
                                <span className="uva-compare-brand"><Globe size={18} /> AmaWaterways</span>
                                <p className="uva-compare-paragraph">
                                    AmaWaterways additionally offers cruises in Africa, Colombia, Egypt, and Vietnam & Cambodia.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* INLINE CTA 4 */}
                <section className="uva-inline-cta-section">
                    <div className="uva-inline-cta-container">
                        <span className="uva-inline-cta-tag">Itinerary Planning</span>
                        <p className="uva-inline-cta-text">Ready to compare full itineraries across both cruise lines?</p>
                        <div className="uva-inline-cta-btn-row">
                            <Link to="/contact" className="uva-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uva-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PRICING COMPARISON */}
                <section className="uva-compare-section uva-bg-soft">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uva-eyebrow-onsoft">RATES & VALUE</span>
                            <h2 className="fcel-section-heading">Pricing</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <span className="uva-compare-brand"><Coins size={18} /> Uniworld</span>
                                <p className="uva-compare-paragraph">
                                    Premium pricing with nearly all-inclusive luxury.
                                </p>
                            </div>
                            <div className="uva-compare-col">
                                <span className="uva-compare-brand"><Coins size={18} /> AmaWaterways</span>
                                <p className="uva-compare-paragraph">
                                    Excellent value with generous inclusions and competitive pricing.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="AmaWaterways" />
                    </div>
                </section>

                {/* WELLNESS COMPARISON */}
                <section className="uva-compare-section uva-bg-white">
                    <div className="uva-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HEALTH & FITNESS</span>
                            <h2 className="fcel-section-heading">Wellness</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-compare-grid">
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="AmaWaterways Wellness & Fitness" />
                                <span className="uva-compare-brand"><Activity size={18} /> AmaWaterways</span>
                                <ul className="uva-compare-list">
                                    {['Fitness host', 'Wellness classes', 'Walking tracks', 'Healthy dining options', 'Complimentary bicycles'].map((item, idx) => (
                                        <li key={idx} className="uva-compare-item">
                                            <CheckCircle size={16} className="uva-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uva-compare-col">
                                <UvaPlaceholder label="Uniworld Wellness Options" />
                                <span className="uva-compare-brand"><Activity size={18} /> Uniworld</span>
                                <p className="uva-compare-paragraph">
                                    Offers wellness amenities but focuses more on boutique luxury than fitness programming.
                                </p>
                            </div>
                        </div>
                        <WinnerBadge winner="AmaWaterways" />
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="uva-audience-section">
                    <div className="uva-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uva-eyebrow-onsoft">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Choose Each Cruise Line?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uva-audience-grid">
                            <div className="uva-audience-column">
                                <h4 className="uva-audience-title">Who Should Choose Uniworld? — Perfect for:</h4>
                                <ul className="uva-audience-list">
                                    {['Luxury travelers', 'Couples', 'Food lovers', 'Boutique hotel enthusiasts', 'Travelers seeking all-inclusive luxury'].map((item, idx) => (
                                        <li key={idx} className="uva-audience-item">
                                            <CheckCircle size={18} className="uva-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uva-audience-column">
                                <h4 className="uva-audience-title">Who Should Choose AmaWaterways? — Perfect for:</h4>
                                <ul className="uva-audience-list">
                                    {['Active travelers', 'Wellness enthusiasts', 'First-time river cruisers', 'Couples', 'Guests seeking outstanding value'].map((item, idx) => (
                                        <li key={idx} className="uva-audience-item">
                                            <CheckCircle size={18} className="uva-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 5 */}
                <section className="uva-inline-cta-section">
                    <div className="uva-inline-cta-container">
                        <span className="uva-inline-cta-tag">Personalized Match</span>
                        <p className="uva-inline-cta-text">Tell us your travel style and we'll recommend the right cruise line for you.</p>
                        <div className="uva-inline-cta-btn-row">
                            <Link to="/contact" className="uva-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uva-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="uva-verdict-section uva-bg-soft">
                    <div className="uva-verdict-container">
                        <span className="fcel-eyebrow-label uva-eyebrow-onsoft">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Choose Uniworld if you want one of the most luxurious boutique river cruise experiences with elegant ships, premium inclusions, and exceptional personalized service.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Choose AmaWaterways if you value active excursions, wellness experiences, spacious ships, and excellent overall value.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Either cruise line delivers an exceptional luxury river cruise vacation.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="uva-choice-section uva-bg-white">
                    <div className="uva-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Our luxury cruise specialists help you:</p>
                        </div>
                        <div className="uva-check-grid">
                            {['Compare both cruise lines', 'Choose the best itinerary', 'Select the ideal cabin or suite', 'Access exclusive promotions', 'Arrange flights and hotels', 'Customize pre- and post-cruise stays'].map((item, idx) => (
                                <div key={idx} className="uva-check-item">
                                    <CheckCircle size={18} className="uva-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* EXPERT INSIGHT */}
                <section id="uniworld-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                    <div className="medi-expert-editorial-container">
                        <div className="medi-expert-editorial-card">

                            {/* Left Side: Portrait and Floating Stat Badge */}
                            <div className="medi-editorial-portrait-block">
                                <div className="medi-editorial-image-frame">
                                    <img src={ProfilePictureAH} alt="Angela Hughes - Luxury River Cruise Expert" />
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

                            {/* Right Side: Editorial Text */}
                            <div className="medi-editorial-content-block">
                                <div className="medi-editorial-header">
                                    <div className="medi-editorial-eyebrow-container">
                                        <ExpertAward size={18} className="medi-editorial-icon-badge" />
                                        <span className="medi-editorial-eyebrow">Expert Insight from Angela Hughes</span>
                                    </div>
                                    <h2 className="medi-editorial-title">
                                        Why Discerning Travelers <br className="medi-growth-title-break" />Choose Uniworld River Cruises
                                    </h2>
                                    <div className="medi-editorial-accent-bar"></div>
                                </div>

                                <p className="medi-editorial-lead-para">
                                    According to Angela Hughes, many travelers are initially drawn to Uniworld for its extraordinary boutique ships — but ultimately stay loyal because of the warmth of service, the depth of cultural immersion, and a level of all-inclusive luxury that few river cruise lines can match.
                                </p>

                                <div className="medi-priorities-box">
                                    <p className="medi-priorities-intro">
                                        After more than four decades in luxury travel and visiting over 121 countries, Angela consistently sees Uniworld travelers prioritizing:
                                    </p>
                                    <div className="medi-priorities-grid-pills">
                                        {[
                                            'Boutique, museum-quality ships',
                                            'Truly all-inclusive luxury',
                                            'Butler service in select suites',
                                            'Gourmet farm-to-table dining',
                                            'Intimate, destination-rich itineraries',
                                            'Personalized, warm onboard service'
                                        ].map((item, idx) => (
                                            <div key={idx} className="medi-priority-pill-item">
                                                <ExpertCheckCircle size={15} className="medi-priority-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="medi-editorial-body-para">
                                    As founder of Luxury Travel University and CEO of Trips &amp; Ships Luxury Travel, Angela Hughes helps travelers navigate the luxury river cruise landscape with honesty and real-world expertise — ensuring every client finds the right ship, the right itinerary, and the right experience for their lifestyle.
                                </p>

                                <div className="medi-expertise-section-box">
                                    <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                    <div className="medi-expertise-horizontal-strip">
                                        {[
                                            { title: 'Luxury river cruising', icon: ExpertShip },
                                            { title: 'European river itineraries', icon: ExpertGlobe },
                                            { title: 'Butler & suite services', icon: ExpertUsers },
                                            { title: 'All-inclusive cruise planning', icon: ExpertCompass },
                                            { title: 'Gourmet & cultural travel', icon: ExpertSparkles }
                                        ].map((item, idx) => {
                                            const IconComponent = item.icon
                                            return (
                                                <div key={idx} className="medi-expertise-pills-row">
                                                    <div className="medi-expertise-pill-icon-box">
                                                        <IconComponent size={14} />
                                                    </div>
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

                {/* FAQ SECTION (MATCHED) */}
                <section className="fcel-faq-section">
                    <div className="fcel-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="fcel-section-heading">Frequently Asked Questions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="fcel-faq-list">
                            {uvaFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => uvaToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {uvaActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {uvaActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Choose Between <br /> Uniworld and AmaWaterways?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare itineraries, lock in exclusive promotions, and find the perfect river cruise for your travel style.
                        </p>
                        <div className="fcel-cta-btn-row">
                            <Link to="/contact" className="fcel-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <button className="fcel-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Navbar />
        </>
    )
}

export default UniworldVsAmaWaterways