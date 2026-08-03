import Navbar from '../../components/Navbar/Navbar'
import './UniworldRiverCruisesReview.css'
import {
    Ship, Star, Sparkles, Phone, LayoutList, Heart,
    CheckCircle, ChevronRight, Globe, Award, Utensils, Wine,
    Bed, Compass, Gift, Smile, ShieldCheck, XCircle, AlertTriangle,
    Image as ImageIcon, Map, Sun, Trees
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UrcrPlaceholder({ label, className = '' }) {
    return (
        <div className={`urcr-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldRiverCruisesReview() {
    const [urcrActiveFaq, setUrcrActiveFaq] = useState(null)
    const urcrToggleFaq = (index) => {
        setUrcrActiveFaq(urcrActiveFaq === index ? null : index)
    }

    const urcrFaqs = [
        {
            question: "1. Is Uniworld worth the money?",
            answer: "Yes. Uniworld is widely considered one of the most luxurious river cruise lines in the world. Although fares are typically higher than many competitors, the value comes from nearly all-inclusive pricing, elegant boutique ships, gourmet dining, premium beverages, included excursions, gratuities, and highly personalized service. For travelers seeking a luxury river cruise experience, Uniworld is well worth the investment."
        },
        {
            question: "2. Is Uniworld better than Viking?",
            answer: "It depends on your travel style. Uniworld offers a more luxurious and all-inclusive experience with richly decorated boutique ships, butler service in select suites, gourmet cuisine, and premium inclusions. Viking is known for its understated Scandinavian design, excellent destination-focused itineraries, and outstanding value. Travelers seeking ultra-luxury often prefer Uniworld, while those wanting contemporary elegance and lower fares may favor Viking."
        },
        {
            question: "3. What is included on Uniworld?",
            answer: "Most Uniworld cruises include luxury accommodations, gourmet dining, unlimited premium beverages, shore excursions, complimentary Wi-Fi, gratuities, airport transfers on select sailings, onboard entertainment, bicycles for independent exploration, and attentive personalized service. The exact inclusions may vary by itinerary and destination."
        },
        {
            question: "4. Does Uniworld include gratuities?",
            answer: "Yes. Gratuities for onboard staff are generally included in the cruise fare, allowing guests to enjoy a more seamless and all-inclusive vacation experience without worrying about additional tipping expenses."
        },
        {
            question: "5. Are drinks included?",
            answer: "Yes. Uniworld includes unlimited premium wines, spirits, beer, cocktails, specialty coffees, soft drinks, and bottled water throughout your cruise. Many regional wines are carefully selected to complement the destinations you visit."
        },
        {
            question: "6. Is Uniworld adults only?",
            answer: "Uniworld primarily caters to adult travelers seeking a sophisticated luxury river cruise experience. However, the cruise line also offers select family-friendly departures through its Generations Collection, making it possible for families with children to enjoy certain itineraries together."
        },
        {
            question: "7. What is the average age onboard?",
            answer: "Most Uniworld guests are between 55 and 75 years old, although the average age varies depending on the itinerary and season. The cruise line has also seen growing interest from younger couples, milestone travelers, and multigenerational families on select departures."
        },
        {
            question: "8. Which Uniworld ship is best?",
            answer: "There is no single \"best\" ship, but several consistently receive outstanding reviews. Popular favorites include S.S. Joie de Vivre for France, S.S. Beatrice on the Danube, S.S. Maria Theresa for Central Europe, S.S. La Venezia in Venice, and River Queen on the Rhine. The best ship ultimately depends on the destinations you wish to explore."
        },
        {
            question: "9. Does Uniworld have butler service?",
            answer: "Yes. Butler service is available in many suite categories. Butler services may include unpacking luggage, arranging dining reservations, delivering in-suite meals, shining shoes, pressing garments, and assisting with other personalized requests throughout your voyage."
        },
        {
            question: "10. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is included for all guests throughout the cruise, allowing you to stay connected while traveling through Europe's rivers and other destinations. Internet speeds may vary depending on your location."
        },
        {
            question: "11. What should I wear?",
            answer: "Daytime attire is generally casual or smart casual, especially during shore excursions. Evening dress is elegant casual, with many guests choosing collared shirts, dresses, or sport coats for dinner. Formal nights are uncommon, allowing guests to remain comfortable while still dressing appropriately for a luxury atmosphere."
        },
        {
            question: "12. Does Uniworld have balconies?",
            answer: "Some Uniworld ships offer French balconies, full balconies, or open-air balconies in select cabin and suite categories. Balcony availability varies by ship, so it's important to compare accommodations before booking."
        },
        {
            question: "13. What is the best Uniworld itinerary?",
            answer: "Some of Uniworld's most popular itineraries include cruises along the Danube, Rhine, Bordeaux, Burgundy & Provence, Venice Lagoon, Nile River, and Peru's Amazon. The best itinerary depends on whether you're interested in wine, history, castles, Christmas markets, culinary experiences, or cultural immersion."
        },
        {
            question: "14. Is Uniworld all-inclusive?",
            answer: "Yes. Uniworld is considered one of the most all-inclusive luxury river cruise lines. Most sailings include accommodations, gourmet dining, unlimited premium beverages, shore excursions, gratuities, Wi-Fi, and numerous onboard amenities, providing exceptional value for luxury travelers."
        },
        {
            question: "15. Who should book Uniworld?",
            answer: "Uniworld is ideal for couples, retirees, luxury travelers, food and wine enthusiasts, honeymooners, anniversary celebrations, and anyone seeking an intimate boutique river cruise with exceptional service and immersive cultural experiences. Travelers who appreciate elegant ship design, personalized attention, and premium inclusions will find Uniworld an outstanding choice."
        }
    ]

    const urcrSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review",
                "name": "Uniworld River Cruises Review: Pros, Cons & Who It Is Best For",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review",
                "description": "Read our expert Uniworld River Cruises Review covering ships, dining, cabins, service, pricing, excursions, pros, cons, and who should book a Uniworld river cruise.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review#article"
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
                "description": "Luxury travel agency specializing in luxury cruises, river cruises, expedition cruises, yacht cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review#article",
                "headline": "Uniworld River Cruises Review: Pros, Cons & Who It Is Best For",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review",
                "description": "Expert review of Uniworld River Cruises including luxury accommodations, dining, service, excursions, pricing, destinations, and who should choose Uniworld.",
                "image": "https://www.tripsshipsluxurytravel.com/images/uniworld-river-cruises-review.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert river cruise planning and comparison services helping travelers choose the best luxury river cruise line, itinerary, and accommodations."
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
                        "name": "Uniworld River Cruises Review",
                        "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/review"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Uniworld worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Uniworld is considered one of the world's most luxurious river cruise lines, offering boutique ships, gourmet dining, premium beverages, included excursions, gratuities, and exceptional personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Uniworld better than Viking?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld offers a more luxurious and all-inclusive experience with lavish ship interiors and personalized service, while Viking is known for understated elegance and excellent value."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most Uniworld cruises include luxury accommodations, gourmet dining, premium beverages, shore excursions, Wi-Fi, gratuities, airport transfers on select sailings, and onboard entertainment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld include gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Gratuities for onboard staff are generally included, making the experience more all-inclusive."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Premium wines, beer, spirits, cocktails, specialty coffee, bottled water, and soft drinks are typically included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Uniworld adults only?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld primarily caters to adults, although select family-friendly sailings are available through the Generations Collection."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the average age onboard?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most guests are between 55 and 75 years old, although younger couples and multigenerational families are becoming increasingly common."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which Uniworld ship is best?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular favorites include S.S. Joie de Vivre, S.S. Beatrice, S.S. Maria Theresa, S.S. La Venezia, and River Queen."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld have butler service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Butler service is available in many suite categories, providing personalized assistance throughout your voyage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is included for all guests throughout the voyage."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I wear?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Smart casual attire is recommended during the day, while elegant casual clothing is appropriate for evening dining. Formal wear is generally not required."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld have balconies?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many Uniworld ships offer French balconies or full balconies in select cabin and suite categories, depending on the ship."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the best itinerary?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular itineraries include the Danube, Rhine, Bordeaux, Burgundy & Provence, Venice Lagoon, Egypt, and Peru, depending on your travel interests."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Uniworld all-inclusive?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Uniworld is one of the most all-inclusive luxury river cruise lines, including dining, beverages, excursions, gratuities, Wi-Fi, and many onboard amenities."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should book Uniworld?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld is ideal for couples, retirees, luxury travelers, food and wine enthusiasts, honeymooners, anniversary celebrations, and anyone seeking boutique river cruising with exceptional service."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld River Cruises Review : Pros, Cons & Who It Is Best For</title>
                <meta name="title" content="Uniworld River Cruises Review | Pros, Cons & Expert Guide" />
                <meta
                    name="description"
                    content="Thinking about booking Uniworld? Read our expert Uniworld River Cruises Review covering ships, food, cabins, service, pricing, excursions, pros, cons, and who should book a Uniworld river cruise."
                />
                <script type="application/ld+json">
                    {JSON.stringify(urcrSchemaData)}
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
                            <span>Uniworld River Cruises Review</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld River Cruises Review</h1>
                        <p className="fcel-hero-subtitle">
                            Is Uniworld Worth It? Pros, Cons & Who It Is Best For
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
                                <span className="fcel-eyebrow-label">EXPERT CRUISE REVIEW</span>
                                <h2 className="fcel-section-heading">Uniworld River Cruises Review</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    Planning a luxury river cruise? Uniworld Boutique River Cruises is consistently ranked among the world's most luxurious river cruise lines. Known for lavish interiors, exceptional dining, boutique hotel-inspired ships, and highly personalized service, Uniworld offers a very different experience from mainstream river cruise brands.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    But is Uniworld worth the premium price?
                                </p>
                                <p className="fcel-lead-paragraph">
                                    In this comprehensive review, we'll examine the pros, cons, accommodations, dining, service, destinations, included excursions, pricing, and who should (and shouldn't) choose Uniworld.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UrcrPlaceholder label="Uniworld Boutique River Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Uniworld Review Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Uniworld boutique hotel-style ships are designed to reflect the rivers they sail, providing an ultra-luxurious, nearly all-inclusive cruise experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RATING SUMMARY SECTION (NEW) */}
                <section className="urcr-rating-section">
                    <div className="urcr-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label">⭐ OUR OVERALL RATING</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="urcr-rating-card">
                            <div className="urcr-rating-grid">
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Luxury</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Dining</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Service</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Suites</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Excursions</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Value</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                                <div className="urcr-rating-item">
                                    <span className="urcr-rating-label">Wellness</span>
                                    <span className="urcr-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="urcr-rating-score-box">
                                <div className="urcr-rating-score">9.8/10</div>
                                <div className="urcr-rating-score-label">Overall Rating</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (NEW) */}
                <section className="urcr-quick-answer-section">
                    <div className="urcr-quick-answer-container">
                        <div className="urcr-quick-answer-card">
                            <h3 className="urcr-quick-answer-title">Quick Answer: Is Uniworld Worth It?</h3>
                            <p className="urcr-quick-answer-text">
                                Yes — especially if you want one of the most luxurious river cruise experiences available.
                            </p>
                            <p className="urcr-quick-answer-text" style={{ fontSize: '16px', marginBottom: '14px' }}>
                                Choose Uniworld if you value:
                            </p>
                            <ul className="urcr-quick-answer-list">
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Boutique luxury</span>
                                </li>
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Included gratuities</span>
                                </li>
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Butler service</span>
                                </li>
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Gourmet dining</span>
                                </li>
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Personalized service</span>
                                </li>
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Beautifully designed ships</span>
                                </li>
                                <li className="urcr-quick-answer-item">
                                    <CheckCircle size={16} className="urcr-quick-answer-icon" />
                                    <span>Premium excursions</span>
                                </li>
                            </ul>
                            <p className="urcr-quick-answer-text" style={{ fontSize: '15px', color: '#475569', margin: '0' }}>
                                If your priority is lower pricing rather than luxury, Viking or AmaWaterways may offer better value.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Expert Planning</span>
                        <p className="urcr-inline-cta-text">Want to experience Uniworld's boutique luxury firsthand?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHAT WE LOVE ABOUT UNIWORLD (PROS) */}
                <section className="urcr-pros-section urcr-bg-white">
                    <div className="urcr-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span className="fcel-eyebrow-label">PROS & CONS</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>What We Love About Uniworld</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        {/* Pros */}
                        <div className="urcr-pros-grid">
                            <div className="urcr-pro-card">
                                <div className="urcr-pro-icon-wrap">
                                    <Ship size={20} />
                                </div>
                                <h4 className="urcr-pro-title">Boutique Hotel Style Ships</h4>
                                <p className="urcr-pro-desc">
                                    Each ship has its own personality. No two ships look alike.
                                </p>
                            </div>
                            <div className="urcr-pro-card">
                                <div className="urcr-pro-icon-wrap">
                                    <Smile size={20} />
                                </div>
                                <h4 className="urcr-pro-title">Exceptional Service</h4>
                                <p className="urcr-pro-desc">
                                    Crew members quickly learn your name, preferences, favorite drinks, and dining habits.
                                </p>
                            </div>
                            <div className="urcr-pro-card">
                                <div className="urcr-pro-icon-wrap">
                                    <Utensils size={20} />
                                </div>
                                <h4 className="urcr-pro-title">Outstanding Dining</h4>
                                <p className="urcr-pro-desc">
                                    Fresh regional cuisine, local wines, farm-to-table ingredients, and excellent desserts.
                                </p>
                            </div>
                            <div className="urcr-pro-card">
                                <div className="urcr-pro-icon-wrap">
                                    <Bed size={20} />
                                </div>
                                <h4 className="urcr-pro-title">Spacious Suites</h4>
                                <p className="urcr-pro-desc">
                                    Many suites include butler service, marble bathrooms, luxury linens, and river views.
                                </p>
                            </div>
                            <div className="urcr-pro-card" style={{ gridColumn: 'span 2' }}>
                                <div className="urcr-pro-icon-wrap">
                                    <Gift size={20} />
                                </div>
                                <h4 className="urcr-pro-title">All-Inclusive Experience</h4>
                                <p className="urcr-pro-desc">
                                    Most Uniworld cruises include luxury accommodations, gourmet dining, unlimited premium beverages, shore excursions, complimentary Wi-Fi, gratuities, airport transfers on select sailings, onboard entertainment, and bicycles for independent exploration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONS OF UNIWORLD */}
                <section className="urcr-cons-section urcr-bg-soft">
                    <div className="urcr-pros-cons-container">
                        {/* Cons Heading */}
                        <div className="urcr-cons-heading-wrap" style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span className="fcel-eyebrow-label">LIMITATIONS</span>
                            <h3 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Cons of Uniworld</h3>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ marginBottom: '40px' }}>
                                A balanced and honest assessment to build travel planning confidence.
                            </p>
                        </div>

                        <div className="urcr-cons-grid">
                            <div className="urcr-con-card">
                                <h4 className="urcr-con-title">
                                    <AlertTriangle size={18} />
                                    Higher Prices
                                </h4>
                                <p className="urcr-con-desc">
                                    One of the most expensive river cruise brands.
                                </p>
                            </div>
                            <div className="urcr-con-card">
                                <h4 className="urcr-con-title">
                                    <AlertTriangle size={18} />
                                    More Traditional Decor
                                </h4>
                                <p className="urcr-con-desc">
                                    Ships feature elegant European interiors. Travelers wanting modern Scandinavian design may prefer Viking.
                                </p>
                            </div>
                            <div className="urcr-con-card">
                                <h4 className="urcr-con-title">
                                    <AlertTriangle size={18} />
                                    Smaller Fitness Centers
                                </h4>
                                <p className="urcr-con-desc">
                                    Fitness facilities are more limited than ocean cruise ships.
                                </p>
                            </div>
                            <div className="urcr-con-card">
                                <h4 className="urcr-con-title">
                                    <AlertTriangle size={18} />
                                    Limited Entertainment
                                </h4>
                                <p className="urcr-con-desc">
                                    Evening entertainment focuses on local culture instead of Broadway-style productions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SHIPS HIGHLIGHT SECTION (NEW) */}
                <section className="urcr-ships-section">
                    <div className="urcr-ships-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">THE UNIWORLD FLEET</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Boutique Ships We Recommend</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                Uniworld fleet is comprised of unique ships, each matching the spirit of the rivers they sail.
                            </p>
                        </div>
                        <div className="urcr-ships-grid">
                            {['SS Joie de Vivre', 'SS Beatrice', 'SS Maria Theresa', 'SS La Venezia', 'River Duchess'].map((ship, idx) => (
                                <div key={idx} className="urcr-ship-card">
                                    <div className="urcr-ship-icon-ring">
                                        <Ship size={20} />
                                    </div>
                                    <h4 className="urcr-ship-name">{ship}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CABINS, DINING & EXCURSIONS DETAILS SECTION (NEW) */}

                {/* Cabins & Suites */}
                <section className="urcr-review-section urcr-bg-soft">
                    <div className="urcr-review-container">
                        <div className="urcr-review-grid">
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label">ACCOMMODATIONS</span>
                                <h3 className="urcr-review-title">Cabins & Suites</h3>
                               
                                <p className="fcel-lead-paragraph">
                                    Uniworld accommodations are styled like boutique hotels, combining fine craftsmanship with modern luxury. Guests can expect elegant decorations, high-end linens, and personalized touches.
                                </p>
                                <div className="urcr-review-bullets">
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Luxury bedding and custom-made Savoir of England beds.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Marble bathrooms equipped with Asprey bath products.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Butler service in select suites for unpacking, shoe polishing, and meal deliveries.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Luxury amenities, robes, slippers, and ample river views.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="urcr-review-placeholder-col">
                                <UrcrPlaceholder label="Uniworld Luxury Cabin / Suite Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dining Review */}
                <section className="urcr-review-section urcr-bg-white">
                    <div className="urcr-review-container">
                        <div className="urcr-review-grid urcr-review-reverse">
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label">CULINARY EXCELLENCE</span>
                                <h3 className="urcr-review-title">Dining Review</h3>
                                
                                <p className="fcel-lead-paragraph">
                                    With a focus on farm-to-table cuisine, Uniworld chefs use local ingredients harvested from the regions visited. Dinners are paired with locally produced wines representing the cruise's itinerary.
                                </p>
                                <div className="urcr-review-bullets">
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Restaurant quality matching Michelin-starred establishments.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Unlimited premium wine, beers, and spirits selected daily by sommeliers.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Regional cuisine reflecting local traditions and culinary history.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>In-suite room service and daily elegant afternoon tea service.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="urcr-review-placeholder-col">
                                <UrcrPlaceholder label="Uniworld Fine Dining Experience" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Excursions Review */}
                <section className="urcr-review-section urcr-bg-soft">
                    <div className="urcr-review-container">
                        <div className="urcr-review-grid">
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label">SHORE EXPERIENCES</span>
                                <h3 className="urcr-review-title">Excursions Review</h3>
                               
                                <p className="fcel-lead-paragraph">
                                    Uniworld provides curated daily shore excursions designed for all physical activity levels. These VIP and small-group outings help travelers explore each port like a local.
                                </p>
                                <div className="urcr-review-bullets">
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Guided walking tours led by local historians.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Active options including bicycle tours and Nordic walking.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Private experiences and exclusive, after-hours VIP access.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span>Immersive village visits and curated regional wine tastings.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="urcr-review-placeholder-col">
                                <UrcrPlaceholder label="Uniworld Premium Shore Excursion" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DESTINATIONS (NEW) */}
                <section className="urcr-dest-section">
                    <div className="urcr-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLD CLASS RIVERWAYS</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Destinations & Itineraries</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                Uniworld operates across the world's most historic rivers, showcasing castles, cultures, and cities.
                            </p>
                        </div>
                        <div className="urcr-dest-grid">
                            {[
                                { name: 'Europe', icon: <Map size={24} /> },
                                { name: 'Egypt', icon: <Compass size={24} /> },
                                { name: 'India', icon: <Sun size={24} /> },
                                { name: 'Peru', icon: <Trees size={24} /> },
                                { name: 'Asia', icon: <Globe size={24} /> },
                                { name: 'Christmas Markets', icon: <Gift size={24} /> }
                            ].map((dest, idx) => (
                                <div key={idx} className="urcr-dest-card">
                                    <div className="urcr-dest-icon-wrap">
                                        {dest.icon}
                                    </div>
                                    <h4 className="urcr-dest-name">{dest.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRICING & VALUE (NEW) */}
                <section className="urcr-review-section urcr-bg-soft">
                    <div className="urcr-review-container">
                        <div className="urcr-review-grid" style={{ marginBottom: '0' }}>
                            <div className="urcr-review-copy-col">
                                <span className="fcel-eyebrow-label">INVESTMENT & VALUE</span>
                                <h3 className="urcr-review-title">Pricing Analysis</h3>
                                
                                <p className="fcel-lead-paragraph">
                                    While Uniworld cruise fares sit at the higher end of the river cruise market, their near-total inclusion model delivers strong value. When you factor in premium beverages, daily shore excursions, gratuities, airport transfers, and butler services, it is highly competitive against custom-built land itineraries.
                                </p>
                                <div className="urcr-review-bullets">
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span><strong>Typical Prices:</strong> Fares reflect the high-end boutique nature of the ships, accommodations, and small-group focus.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span><strong>Included Value:</strong> Gratuities, premium unlimited drinks, transfers, Wi-Fi, and shore excursions are all wrapped in.</span>
                                    </div>
                                    <div className="urcr-review-bullet">
                                        <CheckCircle size={16} className="urcr-review-bullet-icon" />
                                        <span><strong>Who gets the best value:</strong> Travelers who appreciate fine dining, luxury aesthetics, and hassle-free, all-inclusive vacations.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="urcr-review-placeholder-col">
                                <UrcrPlaceholder label="Uniworld Luxury River Cruise Value" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA 3 (INLINE CTA) */}
                <section className="urcr-inline-cta-section">
                    <div className="urcr-inline-cta-container">
                        <span className="urcr-inline-cta-tag">Promotions & Rates</span>
                        <p className="urcr-inline-cta-text">Ready to compare itineraries and lock in the best suite promotions?</p>
                        <div className="urcr-inline-cta-btn-row">
                            <Link to="/contact" className="urcr-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="urcr-btn-outline">
                                <LayoutList size={18} />
                                Compare Cruise Lines
                            </Link>
                        </div>
                    </div>
                </section>

                {/* TARGET AUDIENCE (NEW) */}
                <section className="urcr-audience-section">
                    <div className="urcr-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Is Uniworld Right for You?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="urcr-audience-grid">
                            <div className="urcr-audience-column urcr-audience-green">
                                <h4 className="urcr-audience-title">Who Should Book Uniworld?</h4>
                                <ul className="urcr-audience-list">
                                    {['Couples seeking romance', 'Retirees desiring stress-free all-inclusive planning', 'Luxury travelers valuing boutique accommodations', 'Food lovers wishing for gourmet farm-to-table cuisine', 'Wine lovers desiring sommelier-paired regional wines', 'Milestone travelers celebrating anniversaries/birthdays', 'Bucket-list travelers desiring highly personalized service'].map((item, idx) => (
                                        <li key={idx} className="urcr-audience-item">
                                            <CheckCircle size={18} className="urcr-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="urcr-audience-column urcr-audience-red">
                                <h4 className="urcr-audience-title">Who Should Consider Another Cruise Line?</h4>
                                <ul className="urcr-audience-list">
                                    {['Travelers seeking the lowest river cruise pricing', 'Travelers desiring modern, minimalist Scandinavian decor', 'Travelers looking for a younger, high-energy onboard vibe', 'Families traveling with younger children'].map((item, idx) => (
                                        <li key={idx} className="urcr-audience-item">
                                            <XCircle size={18} className="urcr-audience-cross" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UNIWORLD VS OTHER LINES (NEW) */}
                <section className="urcr-comparison-section">
                    <div className="urcr-comparison-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">CRUISE COMPARISON</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 10px 0' }}>Uniworld vs Other Cruise Lines</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                A quick look at how Uniworld River Cruises stands against top alternatives in the luxury river cruise space.
                            </p>
                        </div>
                        <div className="urcr-comparison-table-wrapper">
                            <table className="urcr-comparison-table">
                                <thead>
                                    <tr>
                                        <th className="urcr-comparison-th">Cruise Line</th>
                                        <th className="urcr-comparison-th">Design Style</th>
                                        <th className="urcr-comparison-th">Inclusion Level</th>
                                        <th className="urcr-comparison-th">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="urcr-comparison-td">
                                            <strong>Uniworld</strong>
                                        </td>
                                        <td className="urcr-comparison-td">Boutique, lavish European interior</td>
                                        <td className="urcr-comparison-td">Nearly fully all-inclusive</td>
                                        <td className="urcr-comparison-td">Luxury, boutique hotel lovers</td>
                                    </tr>
                                    <tr>
                                        <td className="urcr-comparison-td">
                                            <Link className="urcr-comparison-brand-link" to="/viking-vs-uniworld">Viking</Link>
                                        </td>
                                        <td className="urcr-comparison-td">Minimalist, Scandinavian design</td>
                                        <td className="urcr-comparison-td">Moderate inclusions (wine/beer at meal)</td>
                                        <td className="urcr-comparison-td">Destination-focused travelers</td>
                                    </tr>
                                    <tr>
                                        <td className="urcr-comparison-td">
                                            <Link className="urcr-comparison-brand-link" to="/viking-vs-amawaterways">AmaWaterways</Link>
                                        </td>
                                        <td className="urcr-comparison-td">Classic, comfortable design</td>
                                        <td className="urcr-comparison-td">Moderate inclusions</td>
                                        <td className="urcr-comparison-td">Active travelers, cyclists</td>
                                    </tr>
                                    <tr>
                                        <td className="urcr-comparison-td">
                                            <Link className="urcr-comparison-brand-link" to="/is-scenic-worth-it">Scenic</Link>
                                        </td>
                                        <td className="urcr-comparison-td">Contemporary, sleek luxury</td>
                                        <td className="urcr-comparison-td">Ultra all-inclusive</td>
                                        <td className="urcr-comparison-td">Modern luxury enthusiasts</td>
                                    </tr>
                                    <tr>
                                        <td className="urcr-comparison-td">
                                            <Link className="urcr-comparison-brand-link" to="/viking-vs-tauck">Tauck</Link>
                                        </td>
                                        <td className="urcr-comparison-td">Traditional, elegant interiors</td>
                                        <td className="urcr-comparison-td">Fully all-inclusive with land tours</td>
                                        <td className="urcr-comparison-td">Escorted tour enthusiasts</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FINAL VERDICT (NEW) */}
                <section className="urcr-review-section urcr-bg-soft">
                    <div className="urcr-review-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <span className="fcel-eyebrow-label">FINAL VERDICT</span>
                        <h2 className="fcel-section-heading" style={{ margin: '10px 0 20px 0' }}>Is Uniworld Worth Booking?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div style={{ color: '#f1c40f', fontSize: '32px', marginBottom: '24px' }}>⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph" style={{ fontSize: '20px', fontWeight: '500', color: 'var(--urcr-navy)', lineHeight: '1.7' }}>
                            Uniworld remains one of the finest luxury river cruise lines in the world.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Travelers looking for exceptional service, gourmet cuisine, boutique ships, and nearly all-inclusive luxury will likely find it worth the premium price.
                        </p>
                    </div>
                </section>

                {/* WHY BOOK WITH US (NEW) */}
                <section className="urcr-why-book-section urcr-bg-white">
                    <div className="urcr-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading" style={{ margin: '1px 0 10px 0' }}>Why Book With Trips & Ships Luxury Travel?</h2>
                             <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                As river cruise experts, we add value to your Uniworld booking, helping you plan every detail from takeoff to return.
                            </p>
                        </div>
                        <div className="urcr-why-book-grid">
                            <div className="urcr-why-book-card">
                                <div className="urcr-why-book-icon">
                                    <Award size={20} />
                                </div>
                                <h4 className="urcr-why-book-title">Best Promotions</h4>
                                <p className="urcr-why-book-desc">Access exclusive pricing, shipboard credits, and limited-time promotional offers.</p>
                            </div>
                            <div className="urcr-why-book-card">
                                <div className="urcr-why-book-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="urcr-why-book-title">Suite Recommendations</h4>
                                <p className="urcr-why-book-desc">Receive professional guidance choosing the perfect cabin layout and butler services.</p>
                            </div>
                            <div className="urcr-why-book-card">
                                <div className="urcr-why-book-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="urcr-why-book-title">Personalized Planning</h4>
                                <p className="urcr-why-book-desc">We tailor land extensions, transfers, and day-to-day activities around your preferences.</p>
                            </div>
                            <div className="urcr-why-book-card">
                                <div className="urcr-why-book-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="urcr-why-book-title">Airfare Planning</h4>
                                <p className="urcr-why-book-desc">Coordinate complex international flights alongside your cruise arrival requirements.</p>
                            </div>
                            <div className="urcr-why-book-card">
                                <div className="urcr-why-book-icon">
                                    <CheckCircle size={20} />
                                </div>
                                <h4 className="urcr-why-book-title">Hotel Arrangements</h4>
                                <p className="urcr-why-book-desc">Select premium pre- and post-cruise boutique hotels in your departure cities.</p>
                            </div>
                            <div className="urcr-why-book-card">
                                <div className="urcr-why-book-icon">
                                    <Ship size={20} />
                                </div>
                                <h4 className="urcr-why-book-title">Cruise Comparisons</h4>
                                <p className="urcr-why-book-desc">Ensure you choose the ideal river itinerary and vessel for your vacation objectives.</p>
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
                            {urcrFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => urcrToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {urcrActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {urcrActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your Uniworld River Cruise?</h2>
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

export default UniworldRiverCruisesReview
