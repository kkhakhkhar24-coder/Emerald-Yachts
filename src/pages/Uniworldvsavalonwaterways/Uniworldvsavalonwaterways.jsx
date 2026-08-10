import Navbar from '../../components/Navbar/Navbar'
import './Uniworldvsavalonwaterways.css'
import {
    Sparkles, Phone, LayoutList, CheckCircle, Award, Globe,
    Ship, Bed, Utensils, Smile, Compass, MapPin, Coins,
    Trophy, Scale, Image as ImageIcon
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UvavPlaceholder({ label, className = '' }) {
    return (
        <div className={`uvav-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function WinnerBadge({ winner }) {
    return (
        <div className="uvav-winner-badge">
            <Trophy size={16} />
            <span>Winner: {winner}</span>
        </div>
    )
}

function UniworldVsAvalonWaterways() {
    const [uvavActiveFaq, setUvavActiveFaq] = useState(null)
    const uvavToggleFaq = (index) => {
        setUvavActiveFaq(uvavActiveFaq === index ? null : index)
    }

    const uvavFaqs = [
        {
            question: "1. Is Uniworld more luxurious than Avalon Waterways?",
            answer: "Yes. Uniworld is generally considered more luxurious thanks to its boutique ship design, premium inclusions, gourmet dining, and highly personalized service."
        },
        {
            question: "2. Is Avalon Waterways cheaper than Uniworld?",
            answer: "Yes. Avalon Waterways generally offers lower fares while still providing spacious accommodations and excellent service."
        },
        {
            question: "3. Which cruise line includes gratuities?",
            answer: "Uniworld includes onboard gratuities on most sailings. Avalon Waterways typically charges gratuities separately unless included in a promotion."
        },
        {
            question: "4. Which has better food?",
            answer: "Uniworld is known for gourmet regional cuisine and luxury dining, while Avalon offers high-quality regional meals in a more relaxed atmosphere."
        },
        {
            question: "5. Which has better excursions?",
            answer: "Both cruise lines offer excellent excursions. Avalon stands out for its Active Discovery program, while Uniworld focuses on immersive cultural experiences."
        },
        {
            question: "6. Are drinks included on both?",
            answer: "Uniworld includes premium beverages throughout the cruise. Avalon includes complimentary wine and beer with dinner on most itineraries."
        },
        {
            question: "7. Which cruise line has larger cabins?",
            answer: "Avalon Waterways is known for its spacious Panorama Suites featuring wall-to-wall panoramic windows and beds that face the river."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is included on both Uniworld and Avalon Waterways."
        },
        {
            question: "9. Which is better for first-time river cruisers?",
            answer: "Avalon Waterways is a great choice for first-time river cruisers thanks to its relaxed atmosphere, spacious accommodations, and excellent value."
        },
        {
            question: "10. Which is better for couples?",
            answer: "Both are excellent. Uniworld offers a more romantic luxury experience, while Avalon provides spacious suites and beautiful panoramic river views."
        },
        {
            question: "11. Which cruise line offers more destinations?",
            answer: "Both cruise lines offer extensive European itineraries. Uniworld also sails Peru, India, and Southeast Asia, while Avalon offers cruises on the Mekong, Nile, and Colombia."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Trips & Ships Luxury Travel compares both cruise lines, recommends the best itinerary, secures exclusive offers, and provides concierge-level planning before, during, and after your luxury river cruise."
        }
    ]

    const uvavSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon",
                "name": "Uniworld vs Avalon Waterways",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon",
                "description": "Compare Uniworld vs Avalon Waterways including ships, pricing, dining, excursions, cabins, service, inclusions, destinations, and luxury river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon#article"
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon#article",
                "headline": "Uniworld vs Avalon Waterways",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon",
                "description": "Expert comparison of Uniworld and Avalon Waterways including pricing, luxury, dining, excursions, service, cabins, destinations, and what's included.",
                "image": "https://www.tripsandships.com/images/uniworld-vs-avalon-waterways.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Comparison Services",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert comparison and planning services helping travelers choose between Uniworld, Avalon Waterways, and other leading luxury river cruise lines."
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
                        "name": "Uniworld vs Avalon Waterways",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/uniworld-vs-avalon"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld more luxurious than Avalon Waterways?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Uniworld is generally considered more luxurious thanks to its boutique ship design, premium inclusions, gourmet dining, and highly personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Avalon Waterways cheaper than Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Avalon Waterways generally offers lower fares while still providing spacious accommodations and excellent service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line includes gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld includes onboard gratuities on most sailings. Avalon Waterways typically charges gratuities separately unless included as part of a promotion."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better food?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld is known for gourmet regional cuisine and luxury dining, while Avalon offers high-quality regional meals in a more relaxed atmosphere."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which has better excursions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both cruise lines offer excellent excursions. Avalon stands out for its Active Discovery program, while Uniworld focuses on immersive cultural experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included on both?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld includes premium beverages throughout the cruise. Avalon includes complimentary wine and beer with dinner on most itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line has larger cabins?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Avalon Waterways is known for its spacious Panorama Suites featuring wall-to-wall panoramic windows and beds that face the river."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is included on both Uniworld and Avalon Waterways."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for first-time river cruisers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Avalon Waterways is a great choice for first-time river cruisers thanks to its relaxed atmosphere, spacious accommodations, and excellent value."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which is better for couples?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both are excellent. Uniworld offers a more romantic luxury experience, while Avalon provides spacious suites and beautiful panoramic river views."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which cruise line offers more destinations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Both cruise lines offer extensive European itineraries. Uniworld also sails Peru, India, and Southeast Asia, while Avalon offers cruises on the Mekong, Nile, and Colombia."
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
                <title>Uniworld vs Avalon Waterways: Which River Cruise Is Better?</title>
                <meta name="title" content="Uniworld vs Avalon Waterways | Luxury River Cruise Comparison" />
                <meta
                    name="description"
                    content="Compare Uniworld vs Avalon Waterways including pricing, ships, Panorama Suites, dining, excursions, service, inclusions, and destinations to discover the best luxury river cruise for your next vacation."
                />
                <script type="application/ld+json">
                    {JSON.stringify(uvavSchemaData)}
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
                            <span>Uniworld vs Avalon Waterways</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld vs Avalon Waterways</h1>
                        <p className="fcel-hero-subtitle">
                            Which River Cruise Is Best?
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
                                <h2 className="fcel-section-heading">Uniworld vs Avalon Waterways</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Choosing between Uniworld and Avalon Waterways means comparing boutique luxury with spacious contemporary comfort. Both cruise lines offer exceptional itineraries throughout Europe and beyond, but they appeal to different travelers.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Uniworld is recognized for ultra-luxury service, individually designed ships, gourmet dining, and nearly all-inclusive experiences.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Avalon Waterways is known for its innovative Panorama Suites, active excursion choices, relaxed atmosphere, and outstanding value.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UvavPlaceholder label="Uniworld vs Avalon Waterways" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Cruise Line Comparison</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    If you're wondering which river cruise line is right for you, this comparison covers everything from pricing and dining to excursions and onboard service.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="uvav-quick-answer-section">
                    <div className="uvav-quick-answer-container">
                        <div className="uvav-quick-answer-card">
                            <span className="fcel-eyebrow-label">FEATURED SNIPPET</span>
                            <h3 className="uvav-quick-answer-title">Is Uniworld Better Than Avalon Waterways?</h3>
                            <p className="uvav-quick-answer-text">
                                Choose Uniworld if you want boutique luxury, gourmet dining, premium inclusions, and personalized service.
                            </p>
                            <p className="uvav-quick-answer-text">
                                Choose Avalon Waterways if you prefer larger suites, panoramic river views, flexible excursions, and excellent value.
                            </p>
                            <p className="uvav-quick-answer-text">
                                Both are excellent choices, but Uniworld delivers a more luxurious overall experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 1 */}
                <section className="uvav-inline-cta-section">
                    <div className="uvav-inline-cta-container">
                        <span className="uvav-inline-cta-tag">Expert Comparison</span>
                        <p className="uvav-inline-cta-text">Not sure which cruise line fits your travel style?</p>
                        <div className="uvav-inline-cta-btn-row">
                            <Link to="/contact" className="uvav-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvav-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AT A GLANCE TABLE */}
                <section className="uvav-table-section uvav-bg-white">
                    <div className="uvav-table-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">QUICK COMPARISON</span>
                            <h2 className="fcel-section-heading">At a Glance</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-table-wrapper">
                            <table className="uvav-table">
                                <thead>
                                    <tr>
                                        <th className="uvav-th">Feature</th>
                                        <th className="uvav-th">Winner</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Luxury', '🏆 Uniworld'],
                                        ['Value', '🏆 Avalon'],
                                        ['Dining', '🏆 Uniworld'],
                                        ['Suites', '🏆 Avalon'],
                                        ['Excursions', 'Tie'],
                                        ['Service', '🏆 Uniworld'],
                                        ['Included Amenities', '🏆 Uniworld'],
                                        ['Wellness', '🏆 Avalon'],
                                        ['Destinations', 'Tie'],
                                        ['Overall Experience', '🏆 Uniworld']
                                    ].map((row, idx) => {
                                        const winner = row[1];
                                        const hasTrophy = winner.startsWith('🏆 ');
                                        const cleanWinner = hasTrophy ? winner.replace('🏆 ', '') : winner;
                                        return (
                                            <tr key={idx}>
                                                <td className="uvav-td">{row[0]}</td>
                                                <td className="uvav-td">
                                                    {hasTrophy && (
                                                        <Trophy
                                                            size={16}
                                                            style={{
                                                                marginRight: '6px',
                                                                color: 'var(--uvav-navy)',
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
                <section className="uvav-table-section uvav-bg-soft">
                    <div className="uvav-table-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">⭐ EXPERT RATINGS</span>
                            <h2 className="fcel-section-heading">Overall Ratings</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-table-wrapper">
                            <table className="uvav-table">
                                <thead>
                                    <tr>
                                        <th className="uvav-th">Category</th>
                                        <th className="uvav-th">Uniworld</th>
                                        <th className="uvav-th">Avalon</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Luxury', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐☆'],
                                        ['Dining', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐☆'],
                                        ['Service', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐☆'],
                                        ['Excursions', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                                        ['Suites', '⭐⭐⭐⭐☆', '⭐⭐⭐⭐⭐'],
                                        ['Value', '⭐⭐⭐⭐☆', '⭐⭐⭐⭐⭐'],
                                        ['Overall', '9.8/10', '9.4/10']
                                    ].map((row, idx) => (
                                        <tr key={idx}>
                                            <td className="uvav-td">{row[0]}</td>
                                            <td className="uvav-td">{row[1]}</td>
                                            <td className="uvav-td">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* SHIP DESIGN COMPARISON */}
                <section className="uvav-compare-section uvav-bg-white">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SHIPS</span>
                            <h2 className="fcel-section-heading">Ship Design</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-split-comparison">
                            <div className="uvav-split-content">
                                <div className="uvav-compare-grid">
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Ship size={18} /> Uniworld</span>
                                        <ul className="uvav-compare-list">
                                            {['Individually designed boutique ships', 'Elegant European décor', 'Luxury furnishings', 'Artistic interiors', 'Intimate atmosphere'].map((item, idx) => (
                                                <li key={idx} className="uvav-compare-item">
                                                    <CheckCircle size={16} className="uvav-compare-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Ship size={18} /> Avalon Waterways</span>
                                        <ul className="uvav-compare-list">
                                            {['Contemporary styling', 'Bright open spaces', 'Floor-to-ceiling Panorama Windows', 'Relaxed atmosphere'].map((item, idx) => (
                                                <li key={idx} className="uvav-compare-item">
                                                    <CheckCircle size={16} className="uvav-compare-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <WinnerBadge winner="Uniworld" />
                            </div>
                            <div className="uvav-split-image">
                                <div className="uvav-split-image-card">
                                    <UvavPlaceholder label="Uniworld vs Avalon River Cruise Ship Design" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 2 */}
                <section className="uvav-inline-cta-section">
                    <div className="uvav-inline-cta-container">
                        <span className="uvav-inline-cta-tag">Suite Selection</span>
                        <p className="uvav-inline-cta-text">Want help picking between boutique suites and Panorama Suites?</p>
                        <div className="uvav-inline-cta-btn-row">
                            <Link to="/contact" className="uvav-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvav-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SUITES & CABINS COMPARISON */}
                <section className="uvav-compare-section uvav-bg-soft">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">ACCOMMODATIONS</span>
                            <h2 className="fcel-section-heading">Suites & Cabins</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-compare-grid">
                            <div className="uvav-compare-col">
                                <span className="uvav-compare-brand"><Bed size={18} /> Uniworld</span>
                                <ul className="uvav-compare-list">
                                    {['Boutique luxury staterooms', 'Butler service in select suites', 'Marble bathrooms', 'Elegant furnishings'].map((item, idx) => (
                                        <li key={idx} className="uvav-compare-item">
                                            <CheckCircle size={16} className="uvav-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvav-compare-col">
                                <span className="uvav-compare-brand"><Bed size={18} /> Avalon Waterways</span>
                                <ul className="uvav-compare-list">
                                    {['Panorama Suites', 'Wall-to-wall panoramic windows', 'Beds facing the river', 'Spacious accommodations'].map((item, idx) => (
                                        <li key={idx} className="uvav-compare-item">
                                            <CheckCircle size={16} className="uvav-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Avalon Waterways" />
                    </div>
                </section>

                {/* DINING COMPARISON */}
                <section className="uvav-compare-section uvav-bg-white">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CUISINE</span>
                            <h2 className="fcel-section-heading">Dining Comparison</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-split-comparison uvav-reverse">
                            <div className="uvav-split-content">
                                <div className="uvav-compare-grid">
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Utensils size={18} /> Uniworld</span>
                                        <ul className="uvav-compare-list">
                                            {['Gourmet regional cuisine', 'Farm-to-table menus', 'Unlimited premium beverages', 'Fine dining experience'].map((item, idx) => (
                                                <li key={idx} className="uvav-compare-item">
                                                    <CheckCircle size={16} className="uvav-compare-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Utensils size={18} /> Avalon Waterways</span>
                                        <ul className="uvav-compare-list">
                                            {['Fresh regional cuisine', 'Flexible dining', 'Complimentary wine with dinner', 'Casual luxury atmosphere'].map((item, idx) => (
                                                <li key={idx} className="uvav-compare-item">
                                                    <CheckCircle size={16} className="uvav-compare-icon" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <WinnerBadge winner="Uniworld" />
                            </div>
                            <div className="uvav-split-image">
                                <div className="uvav-split-image-card">
                                    <UvavPlaceholder label="Uniworld vs Avalon Dining Options" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED COMPARISON */}
                <section className="uvav-compare-section uvav-bg-soft">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">INCLUSIONS</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-compare-grid">
                            <div className="uvav-compare-col">
                                <span className="uvav-compare-brand"><CheckCircle size={18} /> Uniworld Includes</span>
                                <ul className="uvav-compare-list">
                                    {['Premium beverages', 'Guided excursions', 'Wi-Fi', 'Gratuities', 'Butler service (select suites)', 'Airport transfers (select sailings)'].map((item, idx) => (
                                        <li key={idx} className="uvav-compare-item">
                                            <CheckCircle size={16} className="uvav-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvav-compare-col">
                                <span className="uvav-compare-brand"><CheckCircle size={18} /> Avalon Includes</span>
                                <ul className="uvav-compare-list">
                                    {['Daily excursions', 'Wi-Fi', 'Fitness center', 'Regional dining', 'Bikes (select ships)'].map((item, idx) => (
                                        <li key={idx} className="uvav-compare-item">
                                            <CheckCircle size={16} className="uvav-compare-icon" />
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
                <section className="uvav-inline-cta-section">
                    <div className="uvav-inline-cta-container">
                        <span className="uvav-inline-cta-tag">Inclusions Breakdown</span>
                        <p className="uvav-inline-cta-text">Let's map out exactly what's included on each cruise line for your trip.</p>
                        <div className="uvav-inline-cta-btn-row">
                            <Link to="/contact" className="uvav-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvav-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SERVICE COMPARISON */}
                <section className="uvav-compare-section uvav-bg-white">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HOSPITALITY</span>
                            <h2 className="fcel-section-heading">Service</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-split-comparison">
                            <div className="uvav-split-content">
                                <div className="uvav-compare-grid">
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Smile size={18} /> Uniworld</span>
                                        <p className="uvav-compare-paragraph">
                                            Uniworld is recognized for personalized luxury service with one of the highest crew-to-guest ratios in river cruising.
                                        </p>
                                    </div>
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Smile size={18} /> Avalon Waterways</span>
                                        <p className="uvav-compare-paragraph">
                                            Avalon provides warm, attentive service in a more relaxed atmosphere.
                                        </p>
                                    </div>
                                </div>
                                <WinnerBadge winner="Uniworld" />
                            </div>
                            <div className="uvav-split-image">
                                <div className="uvav-split-image-card">
                                    <UvavPlaceholder label="Uniworld vs Avalon Guest Service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXCURSIONS COMPARISON */}
                <section className="uvav-compare-section uvav-bg-soft">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">SHORE EXPERIENCES</span>
                            <h2 className="fcel-section-heading">Excursions</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-compare-grid">
                            <div className="uvav-compare-col">
                                <span className="uvav-compare-brand"><Compass size={18} /> Uniworld</span>
                                <ul className="uvav-compare-list">
                                    {['Cultural tours', 'Wine tastings', 'Culinary experiences', 'Local immersion'].map((item, idx) => (
                                        <li key={idx} className="uvav-compare-item">
                                            <CheckCircle size={16} className="uvav-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvav-compare-col">
                                <span className="uvav-compare-brand"><Compass size={18} /> Avalon</span>
                                <ul className="uvav-compare-list">
                                    {['Active Discovery excursions', 'Hiking', 'Cycling', 'Classic sightseeing', 'Choice of excursion styles'].map((item, idx) => (
                                        <li key={idx} className="uvav-compare-item">
                                            <CheckCircle size={16} className="uvav-compare-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <WinnerBadge winner="Tie" />
                    </div>
                </section>

                {/* DESTINATIONS */}
                <section className="uvav-compare-section uvav-bg-white">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLDWIDE RIVERWAYS</span>
                            <h2 className="fcel-section-heading">Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Both cruise lines operate on:</p>
                        </div>
                        <ul className="uvav-compare-list uvav-compare-list-shared">
                            {['Rhine', 'Danube', 'Seine', 'Rhône', 'Douro'].map((item, idx) => (
                                <li key={idx} className="uvav-compare-item">
                                    <MapPin size={16} className="uvav-compare-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="uvav-split-comparison uvav-reverse" style={{ marginTop: '48px' }}>
                            <div className="uvav-split-content">
                                <div className="uvav-compare-grid">
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Globe size={18} /> Uniworld</span>
                                        <p className="uvav-compare-paragraph">
                                            Uniworld also offers Egypt, Peru, India, and Southeast Asia.
                                        </p>
                                    </div>
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Globe size={18} /> Avalon</span>
                                        <p className="uvav-compare-paragraph">
                                            Avalon additionally sails the Mekong, Nile, and Colombia.
                                        </p>
                                    </div>
                                </div>
                                <WinnerBadge winner="Tie" />
                            </div>
                            <div className="uvav-split-image">
                                <div className="uvav-split-image-card">
                                    <UvavPlaceholder label="Uniworld vs Avalon Cruise Destinations" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 4 */}
                <section className="uvav-inline-cta-section">
                    <div className="uvav-inline-cta-container">
                        <span className="uvav-inline-cta-tag">Itinerary Planning</span>
                        <p className="uvav-inline-cta-text">Ready to compare full itineraries across both cruise lines?</p>
                        <div className="uvav-inline-cta-btn-row">
                            <Link to="/contact" className="uvav-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvav-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* PRICING COMPARISON */}
                <section className="uvav-compare-section uvav-bg-soft">
                    <div className="uvav-compare-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">RATES & VALUE</span>
                            <h2 className="fcel-section-heading">Pricing</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-split-comparison">
                            <div className="uvav-split-content">
                                <div className="uvav-compare-grid">
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Coins size={18} /> Uniworld</span>
                                        <p className="uvav-compare-paragraph">
                                            Higher pricing with nearly all-inclusive luxury.
                                        </p>
                                    </div>
                                    <div className="uvav-compare-col">
                                        <span className="uvav-compare-brand"><Coins size={18} /> Avalon</span>
                                        <p className="uvav-compare-paragraph">
                                            Excellent value with competitive pricing and generous inclusions.
                                        </p>
                                    </div>
                                </div>
                                <WinnerBadge winner="Avalon Waterways" />
                            </div>
                            <div className="uvav-split-image">
                                <div className="uvav-split-image-card">
                                    <UvavPlaceholder label="Uniworld vs Avalon Pricing Comparison" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD CHOOSE */}
                <section className="uvav-audience-section">
                    <div className="uvav-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Choose Each Cruise Line?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvav-audience-grid">
                            <div className="uvav-audience-column">
                                <h4 className="uvav-audience-title">Who Should Choose Uniworld? — Perfect for:</h4>
                                <ul className="uvav-audience-list">
                                    {['Luxury travelers', 'Couples', 'Anniversary trips', 'Food lovers', 'Boutique hotel enthusiasts'].map((item, idx) => (
                                        <li key={idx} className="uvav-audience-item">
                                            <CheckCircle size={18} className="uvav-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="uvav-audience-column">
                                <h4 className="uvav-audience-title">Who Should Choose Avalon Waterways? — Perfect for:</h4>
                                <ul className="uvav-audience-list">
                                    {['Active travelers', 'First-time river cruisers', 'Travelers wanting spacious cabins', 'Guests seeking excellent value', 'Couples who enjoy panoramic river views'].map((item, idx) => (
                                        <li key={idx} className="uvav-audience-item">
                                            <CheckCircle size={18} className="uvav-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 5 */}
                <section className="uvav-inline-cta-section">
                    <div className="uvav-inline-cta-container">
                        <span className="uvav-inline-cta-tag">Personalized Match</span>
                        <p className="uvav-inline-cta-text">Tell us your travel style and we'll recommend the right cruise line for you.</p>
                        <div className="uvav-inline-cta-btn-row">
                            <Link to="/contact" className="uvav-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvav-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="uvav-verdict-section uvav-bg-soft">
                    <div className="uvav-verdict-container">
                        <span className="fcel-eyebrow-label uvav-eyebrow-onsoft">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Choose Uniworld if you want one of the most luxurious boutique river cruise experiences with personalized service, gourmet dining, and premium inclusions.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Choose Avalon Waterways if you value spacious Panorama Suites, flexible excursions, and exceptional overall value.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Both cruise lines consistently rank among the best in river cruising.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="uvav-choice-section uvav-bg-white">
                    <div className="uvav-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Our luxury cruise specialists help you:</p>
                        </div>
                        <div className="uvav-check-grid">
                            {['Compare both cruise lines', 'Select the best itinerary', 'Choose the ideal suite', 'Access exclusive promotions', 'Arrange flights and hotels', 'Customize pre- and post-cruise stays', 'Provide concierge-level planning before, during, and after your vacation'].map((item, idx) => (
                                <div key={idx} className="uvav-check-item">
                                    <CheckCircle size={18} className="uvav-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
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
                            {uvavFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => uvavToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {uvavActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {uvavActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Choose Between Uniworld and Avalon Waterways?</h2>
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

export default UniworldVsAvalonWaterways