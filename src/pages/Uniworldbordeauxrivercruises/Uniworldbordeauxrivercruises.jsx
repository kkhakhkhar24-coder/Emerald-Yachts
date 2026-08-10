import Navbar from '../../components/Navbar/Navbar'
import './Uniworldbordeauxrivercruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, Globe, Award,
    Utensils, Wine, Bed, Compass, Gift, AlertTriangle, XCircle,
    Image as ImageIcon, MapPin, Sun, Landmark, Bath, Home,
    CalendarDays, Snowflake, Leaf, Grape, ShieldCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component (unique to this page)
function BwrcPlaceholder({ label, className = '' }) {
    return (
        <div className={`bwrc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldBordeauxRiverCruises() {
    const [bwrcActiveFaq, setBwrcActiveFaq] = useState(null)
    const bwrcToggleFaq = (index) => {
        setBwrcActiveFaq(bwrcActiveFaq === index ? null : index)
    }

    const bwrcHighlights = [
        { text: "World-famous Bordeaux wine region", icon: <Grape size={20} /> },
        { text: "Château wine tastings", icon: <Wine size={20} /> },
        { text: "Saint-Émilion", icon: <MapPin size={20} /> },
        { text: "Medieval villages", icon: <Landmark size={20} /> },
        { text: "UNESCO World Heritage Sites", icon: <Award size={20} /> },
        { text: "French cuisine", icon: <Utensils size={20} /> },
        { text: "Historic fortresses", icon: <ShieldCheck size={20} /> },
        { text: "Boutique luxury cruising", icon: <Ship size={20} /> },
    ]

    const bwrcIncluded = [
        "Boutique luxury accommodations",
        "Gourmet French dining",
        "Unlimited premium beverages",
        "Guided excursions",
        "Wine tastings",
        "Complimentary Wi-Fi",
        "Onboard gratuities",
        "Evening entertainment",
        "Airport transfers (select sailings)",
        "Complimentary bicycles",
    ]

    const bwrcDestinations = [
        { name: "Bordeaux", desc: "A UNESCO World Heritage city celebrated for elegant architecture, world-class wine, and vibrant riverside culture.", icon: <Landmark size={24} /> },
        { name: "Saint-Émilion", desc: "One of France's most famous wine villages, known for vineyards, cobblestone streets, and historic wineries.", icon: <Grape size={24} /> },
        { name: "Libourne", desc: "A charming riverside town and gateway to Bordeaux's celebrated wine country.", icon: <MapPin size={24} /> },
        { name: "Blaye", desc: "Home to the impressive UNESCO-listed Blaye Citadel overlooking the Gironde Estuary.", icon: <ShieldCheck size={24} /> },
        { name: "Cadillac", desc: "Historic town surrounded by vineyards and beautiful countryside.", icon: <Home size={24} /> },
        { name: "Médoc", desc: "One of the world's most prestigious wine-producing regions, famous for exceptional château experiences.", icon: <Wine size={24} /> },
    ]

    const bwrcDiningItems = [
        { text: "Regional French cuisine", icon: <Utensils size={20} /> },
        { text: "Bordeaux wines", icon: <Wine size={20} /> },
        { text: "Gourmet multi-course dinners", icon: <Utensils size={20} /> },
        { text: "Fresh local ingredients", icon: <Leaf size={20} /> },
        { text: "Artisan cheeses", icon: <Gift size={20} /> },
        { text: "Farm-to-table specialties", icon: <Globe size={20} /> },
    ]

    const bwrcAccommodationItems = [
        { text: "Butler service", icon: <Bed size={20} /> },
        { text: "Marble bathrooms", icon: <Bath size={20} /> },
        { text: "French balconies", icon: <Home size={20} /> },
        { text: "Luxury bedding", icon: <Bed size={20} /> },
        { text: "Spacious living areas", icon: <Ship size={20} /> },
    ]

    const bwrcSeasons = [
        { name: "Spring", desc: "Beautiful vineyards begin to bloom with mild weather.", icon: <Leaf size={22} /> },
        { name: "Summer", desc: "Long days perfect for wine tastings and outdoor dining.", icon: <Sun size={22} /> },
        { name: "Fall", desc: "Harvest season offers the ultimate Bordeaux wine experience.", icon: <Grape size={22} /> },
        { name: "Winter", desc: "Quieter travel with festive holiday charm.", icon: <Snowflake size={22} /> },
    ]

    const bwrcPros = [
        { text: "Exceptional wine experiences", icon: <Wine size={20} /> },
        { text: "Gourmet French cuisine", icon: <Utensils size={20} /> },
        { text: "Boutique luxury ships", icon: <Ship size={20} /> },
        { text: "Outstanding service", icon: <Award size={20} /> },
        { text: "Beautiful vineyard scenery", icon: <Grape size={20} /> },
        { text: "Excellent included excursions", icon: <Compass size={20} /> },
    ]

    const bwrcCons = [
        "Premium pricing",
        "Popular departures sell out early",
        "Limited suite availability",
    ]

    const bwrcAudience = [
        "Wine enthusiasts",
        "Food lovers",
        "Couples",
        "Luxury travelers",
        "Anniversary celebrations",
        "France first-time visitors",
        "Cultural travelers",
        "Photography enthusiasts",
    ]

    const bwrcPlanningTips = [
        "Book 9–18 months in advance.",
        "Fall is ideal for vineyard harvest season.",
        "Reserve a French Balcony or Suite.",
        "Extend your stay in Bordeaux.",
        "Bring comfortable shoes for winery and village walking tours.",
    ]

    const bwrcWhyBook = [
        { title: "Compare Bordeaux Itineraries", icon: <Compass size={20} /> },
        { title: "Select the Best Suite", icon: <Bed size={20} /> },
        { title: "Arrange Flights and Hotels", icon: <Globe size={20} /> },
        { title: "Secure Exclusive Promotions", icon: <Award size={20} /> },
        { title: "Customize Pre- & Post-Cruise Stays", icon: <CalendarDays size={20} /> },
        { title: "Coordinate Transfers", icon: <Ship size={20} /> },
        { title: "Concierge-Level Service Throughout Your Journey", icon: <CheckCircle size={20} /> },
    ]

    const bwrcFaqs = [
        {
            question: "1. Is a Uniworld Bordeaux River Cruise worth the money?",
            answer: "Yes. It offers exceptional value through luxury accommodations, gourmet dining, premium wines, guided excursions, gratuities, and personalized service."
        },
        {
            question: "2. What is included on a Bordeaux River Cruise?",
            answer: "Luxury accommodations, gourmet dining, unlimited premium beverages, guided excursions, Wi-Fi, gratuities, entertainment, and wine-focused experiences are generally included."
        },
        {
            question: "3. Which rivers does the cruise sail?",
            answer: "Most Bordeaux itineraries sail the Garonne, Dordogne, and Gironde waterways while exploring Southwest France."
        },
        {
            question: "4. Is this cruise good for wine lovers?",
            answer: "Absolutely. Bordeaux is one of the world's most famous wine destinations, with visits to renowned vineyards and château estates."
        },
        {
            question: "5. When is the best time to cruise Bordeaux?",
            answer: "Spring and fall are excellent, while fall harvest season is especially popular."
        },
        {
            question: "6. Are wine tastings included?",
            answer: "Yes. Many guided excursions include wine tastings at renowned vineyards and château estates."
        },
        {
            question: "7. Are drinks included?",
            answer: "Yes. Premium wines, beer, spirits, specialty coffee, soft drinks, and bottled water are generally included."
        },
        {
            question: "8. Does Uniworld include gratuities?",
            answer: "Yes. Onboard gratuities are included on most Uniworld river cruises."
        },
        {
            question: "9. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is available throughout the ship."
        },
        {
            question: "10. Which destinations are most popular?",
            answer: "Bordeaux, Saint-Émilion, Médoc, Libourne, Blaye, and Cadillac are among the itinerary highlights."
        },
        {
            question: "11. Who should choose this itinerary?",
            answer: "Wine enthusiasts, couples, food lovers, luxury travelers, photographers, and anyone wanting to explore France's most famous wine region."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors provide expert recommendations, exclusive offers, personalized planning, and concierge-level service before, during, and after your luxury river cruise."
        },
    ]

    const bwrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux",
                "name": "Uniworld Bordeaux River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux",
                "description": "Discover Uniworld Bordeaux River Cruises featuring luxury boutique ships, world-famous vineyards, gourmet dining, château wine tastings, and all-inclusive river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux#article"
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
                "description": "Luxury travel agency specializing in luxury river cruises, ocean cruises, expedition cruises, and personalized travel planning."
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux#article",
                "headline": "Uniworld Bordeaux River Cruises",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux",
                "description": "Expert guide to Uniworld Bordeaux River Cruises including wine regions, château visits, pricing, excursions, dining, and luxury travel planning.",
                "image": "https://www.tripsandships.com/images/uniworld-bordeaux-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Bordeaux River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Bordeaux river cruises, helping travelers choose the best wine country itinerary."
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
                        "name": "Uniworld Bordeaux River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/bordeaux"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a Uniworld Bordeaux River Cruise worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It offers luxury accommodations, gourmet dining, premium wines, guided excursions, gratuities, and personalized service in one nearly all-inclusive vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Bordeaux River Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury accommodations, gourmet dining, unlimited premium beverages, guided excursions, Wi-Fi, gratuities, entertainment, and wine experiences are generally included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which rivers does the cruise sail?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most Bordeaux itineraries sail the Garonne, Dordogne, and Gironde rivers while exploring Southwest France."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this cruise good for wine lovers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Bordeaux is one of the world's premier wine destinations, with visits to prestigious vineyards and château estates."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When is the best time to cruise Bordeaux?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Spring and fall are ideal, while fall harvest season is especially popular for wine enthusiasts."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are wine tastings included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many guided excursions include wine tastings at renowned vineyards and château estates."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Premium wines, spirits, beer, soft drinks, and specialty coffee are generally included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld include gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Onboard gratuities are included on most Uniworld river cruises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is available throughout the ship."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which destinations are most popular?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Bordeaux, Saint-Émilion, Médoc, Libourne, Blaye, and Cadillac are among the itinerary highlights."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should choose this itinerary?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Wine enthusiasts, food lovers, couples, luxury travelers, photographers, and cultural explorers will especially enjoy this itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert itinerary planning, exclusive offers, personalized recommendations, and concierge-level service before, during, and after your luxury river cruise."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Bordeaux River Cruises : Wine Country, Prices & Expert Guide</title>
                <meta name="title" content="Uniworld Bordeaux River Cruises | Luxury Bordeaux Cruise Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Bordeaux River Cruise? Discover the best wine itineraries, château visits, pricing, what's included, reviews, and whether a luxury Bordeaux cruise is worth it."
                />
                <script type="application/ld+json">
                    {JSON.stringify(bwrcSchemaData)}
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
                            <span>Wine Country, Prices & Expert Guide</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Bordeaux River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Explore France's Legendary Wine Country in Boutique Luxury
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
                                <span className="fcel-eyebrow-label">EXPERT TRAVEL GUIDE</span>
                                <h2 className="fcel-section-heading">Uniworld Bordeaux River Cruises</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    A Uniworld Bordeaux River Cruise is the perfect journey for travelers who appreciate fine wine, gourmet cuisine, beautiful countryside, and authentic French culture. Sailing through the Garonne, Dordogne, and Gironde rivers, you'll visit world-famous vineyards, UNESCO-listed villages, historic fortresses, and elegant French towns while enjoying Uniworld's signature boutique luxury. The popular Brilliant Bordeaux itinerary explores destinations including Bordeaux, Fort Médoc, Cadillac, Blaye, Libourne, and Saint-Émilion, with vineyard visits and wine tastings throughout the journey.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're touring prestigious wine estates, strolling through medieval villages, or dining on regional cuisine, every day offers unforgettable experiences.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <BwrcPlaceholder label="Uniworld Bordeaux Boutique River Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Bordeaux Guide Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    The popular Brilliant Bordeaux itinerary explores destinations including Bordeaux, Fort Médoc, Cadillac, Blaye, Libourne, and Saint-Émilion, with vineyard visits and wine tastings throughout the journey.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RATING SUMMARY SECTION */}
                <section className="bwrc-rating-section">
                    <div className="bwrc-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label bwrc-eyebrow-rating">⭐ OUR OVERALL RATING</span>
                            <h2 className="fcel-section-heading">Our Overall Rating</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-rating-card">
                            <div className="bwrc-rating-grid">
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Luxury</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Dining</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Wine Experiences</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Excursions</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Service</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Scenic Beauty</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                                <div className="bwrc-rating-item">
                                    <span className="bwrc-rating-label">Value</span>
                                    <span className="bwrc-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="bwrc-rating-score-box">
                                <div className="bwrc-rating-score">9.9/10</div>
                                <div className="bwrc-rating-score-label">Overall Experience</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="bwrc-quick-answer-section">
                    <div className="bwrc-quick-answer-container">
                        <div className="bwrc-quick-answer-card">
                            <h3 className="bwrc-quick-answer-title">Is a Uniworld Bordeaux River Cruise Worth It?</h3>
                            <p className="bwrc-quick-answer-text">
                                Yes. A Uniworld Bordeaux River Cruise is one of the best luxury vacations for wine lovers and culinary travelers. Nearly everything is included—from boutique accommodations and gourmet dining to premium wines, guided excursions, and exceptional personalized service. The itinerary is especially renowned for its vineyard experiences and Southwest France heritage.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HIGHLIGHTS SECTION — WHY CHOOSE A BORDEAUX RIVER CRUISE? */}
                <section className="bwrc-highlights-section">
                    <div className="bwrc-highlights-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">TRAVEL HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Choose a Bordeaux River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-highlights-grid">
                            {bwrcHighlights.map((item, idx) => (
                                <div key={idx} className="bwrc-highlight-card">
                                    <div className="bwrc-highlight-icon-wrap">
                                        {item.icon}
                                    </div>
                                    <h4 className="bwrc-highlight-text">{item.text}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 1 (INLINE CTA) */}
                <section className="bwrc-inline-cta-section">
                    <div className="bwrc-inline-cta-container">
                        <span className="bwrc-inline-cta-tag">Expert Planning</span>
                        <p className="bwrc-inline-cta-text">Ready to explore Bordeaux's vineyards in boutique luxury?</p>
                        <div className="bwrc-inline-cta-btn-row">
                            <Link to="/contact" className="bwrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="bwrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED SECTION */}
                <section className="bwrc-included-section">
                    <div className="bwrc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label bwrc-eyebrow-included">ALL-INCLUSIVE VALUE</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-included-card">
                            <p className="bwrc-included-intro">Most Uniworld Bordeaux River Cruises include:</p>
                            <ul className="bwrc-included-list">
                                {bwrcIncluded.map((item, idx) => (
                                    <li key={idx} className="bwrc-included-item">
                                        <CheckCircle size={18} className="bwrc-included-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* TOP DESTINATIONS */}
                <section className="bwrc-dest-section">
                    <div className="bwrc-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SOUTHWEST FRANCE</span>
                            <h2 className="fcel-section-heading">Top Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-dest-grid">
                            {bwrcDestinations.map((dest, idx) => (
                                <div key={idx} className="bwrc-dest-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left' }}>
                                    <div style={{ height: '180px', width: '100%', position: 'relative', background: '#e2e8f0' }}>
                                        <BwrcPlaceholder label={`${dest.name} View`} className="bwrc-placeholder-card" />
                                        <div className="bwrc-badge-overlay-gold" style={{ top: '15px', right: '15px', fontSize: '11px', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            {dest.icon}
                                            <span>{dest.name}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '24px' }}>
                                        <h4 className="bwrc-dest-name" style={{ margin: '0 0 10px 0' }}>{dest.name}</h4>
                                        <p className="bwrc-dest-desc">{dest.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA) */}
                <section className="bwrc-inline-cta-section">
                    <div className="bwrc-inline-cta-container">
                        <span className="bwrc-inline-cta-tag">Wine Country Escapes</span>
                        <p className="bwrc-inline-cta-text">Want help choosing between Bordeaux, Saint-Émilion, and Médoc?</p>
                        <div className="bwrc-inline-cta-btn-row">
                            <Link to="/contact" className="bwrc-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="bwrc-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS */}
                <section className="bwrc-review-section bwrc-bg-soft">
                    <div className="bwrc-review-container">
                        <div className="bwrc-cabins-container">
                            <div className="bwrc-review-copy-col">
                                <span className="fcel-eyebrow-label bwrc-eyebrow-accommodations">ACCOMMODATIONS</span>
                                <h2 className="bwrc-review-title" style={{ textAlign: "left" }}>Luxury Accommodations</h2>

                                <p className="fcel-lead-paragraph">
                                    Every stateroom offers elegant European-inspired décor with premium amenities.
                                </p>
                                <p className="fcel-lead-paragraph" style={{ fontWeight: 600, color: 'var(--urcr-navy)' }}>
                                    Many suites include:
                                </p>
                                <div className="bwrc-cabin-feature-grid">
                                    {bwrcAccommodationItems.map((item, idx) => (
                                        <div key={idx} className="bwrc-cabin-feature-card">
                                            <div className="bwrc-cabin-card-icon">
                                                {item.icon}
                                            </div>
                                            <span className="bwrc-cabin-card-text">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bwrc-image-wrapper-premium">
                                <div className="bwrc-badge-overlay-gold">
                                    <Sparkles size={14} />
                                    <span>Boutique Comfort</span>
                                </div>
                                <BwrcPlaceholder label="Uniworld Luxury Cabin / Suite Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD */}
                <section className="bwrc-review-section bwrc-dining-dark-section">
                    <div className="bwrc-review-container">
                        <div className="bwrc-dining-container">
                            <div className="bwrc-image-wrapper-premium">
                                <div className="bwrc-badge-overlay-gold">
                                    <Utensils size={14} />
                                    <span>Southwest France</span>
                                </div>
                                <BwrcPlaceholder label="Uniworld Bordeaux Fine Dining Experience" />
                            </div>
                            <div className="bwrc-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{ width: "230px" }}>CULINARY EXCELLENCE</span>
                                <h2 className="bwrc-review-title">Dining Onboard</h2>

                                <p className="fcel-lead-paragraph" style={{ color: "white" }}>
                                    Dining showcases the best of Southwest France.
                                </p>
                                <p className="bwrc-dining-intro-line">Guests enjoy:</p>
                                <div className="bwrc-dining-menu-list">
                                    {bwrcDiningItems.map((item, idx) => (
                                        <div key={idx} className="bwrc-dining-course-card">
                                            <div className="bwrc-dining-course-icon">
                                                {item.icon}
                                            </div>
                                            <span className="bwrc-dining-course-text">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE BORDEAUX */}
                <section className="bwrc-season-section">
                    <div className="bwrc-season-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label bwrc-eyebrow-season">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time to Cruise Bordeaux</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-season-grid">
                            {bwrcSeasons.map((season, idx) => (
                                <div key={idx} className="bwrc-season-card">
                                    <div className="bwrc-season-icon-wrap">
                                        {season.icon}
                                    </div>
                                    <h4 className="bwrc-season-title">{season.name}</h4>
                                    <p className="bwrc-season-desc">{season.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 3 (INLINE CTA) */}
                <section className="bwrc-inline-cta-section">
                    <div className="bwrc-inline-cta-container">
                        <span className="bwrc-inline-cta-tag">Harvest Season</span>
                        <p className="bwrc-inline-cta-text">Curious which season is right for your Bordeaux getaway?</p>
                        <div className="bwrc-inline-cta-btn-row">
                            <Link to="/contact" className="bwrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="bwrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY */}
                <section className="bwrc-review-section bwrc-bg-soft">
                    <div className="bwrc-review-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <span className="fcel-eyebrow-label bwrc-eyebrow-worth">VALUE ANALYSIS</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Although Uniworld is positioned as a luxury river cruise line, many travelers find exceptional value in its all-inclusive experience. Gourmet dining, premium wines, guided excursions, gratuities, and personalized service are included, making it one of the most complete ways to explore Bordeaux's wine country.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="bwrc-pros-section bwrc-bg-white">
                    <div className="bwrc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label" style={{ background: '#ffffff', color: 'var(--urcr-navy)' }}>PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="bwrc-comparison-board">
                            {/* Pros Panel */}
                            <div className="bwrc-pros-panel">
                                <h3 className="bwrc-panel-title pros-title">
                                    <CheckCircle size={22} />
                                    What We Love (Pros)
                                </h3>
                                <div className="bwrc-panel-list">
                                    {bwrcPros.map((pro, idx) => (
                                        <div key={idx} className="bwrc-list-item">
                                            <div className="bwrc-item-icon-wrap pro-icon">
                                                {pro.icon}
                                            </div>
                                            <div className="bwrc-item-content">
                                                <h4 className="bwrc-item-title">{pro.text}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cons Panel */}
                            <div className="bwrc-cons-panel">
                                <h3 className="bwrc-panel-title cons-title">
                                    <AlertTriangle size={22} />
                                    Things to Consider (Cons)
                                </h3>
                                <div className="bwrc-panel-list">
                                    {[
                                        ...bwrcCons,
                                        'More traditional decor (may not appeal to minimalists)',
                                        'Smaller fitness and wellness facilities',
                                        'Fewer onboard activities compared to ocean liners'
                                    ].map((con, idx) => (
                                        <div key={idx} className="bwrc-list-item">
                                            <div className="bwrc-item-icon-wrap con-icon">
                                                <XCircle size={18} />
                                            </div>
                                            <div className="bwrc-item-content">
                                                <h4 className="bwrc-item-title">{con}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD BOOK */}
                <section className="bwrc-audience-section">
                    <div className="bwrc-audience-container">
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <span className="fcel-eyebrow-label bwrc-eyebrow-audience">IS IT RIGHT FOR YOU?</span>
                            <h2 className="fcel-section-heading">Who Should Book?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-audience-card">
                            <h4 className="bwrc-audience-title">Perfect for:</h4>
                            <ul className="bwrc-audience-list">
                                {bwrcAudience.map((item, idx) => (
                                    <li key={idx} className="bwrc-audience-item">
                                        <CheckCircle size={18} className="bwrc-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS */}
                <section className="bwrc-tips-section">
                    <div className="bwrc-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">BEFORE YOU BOOK</span>
                            <h2 className="fcel-section-heading">Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="bwrc-tips-list">
                            {bwrcPlanningTips.map((tip, idx) => (
                                <div key={idx} className="bwrc-tip-item">
                                    <div className="bwrc-tip-number">{idx + 1}</div>
                                    <p className="bwrc-tip-text">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 4 (INLINE CTA) */}
                <section className="bwrc-inline-cta-section">
                    <div className="bwrc-inline-cta-container">
                        <span className="bwrc-inline-cta-tag">Book with Confidence</span>
                        <p className="bwrc-inline-cta-text">Let our advisors handle every detail of your Bordeaux wine cruise.</p>
                        <div className="bwrc-inline-cta-btn-row">
                            <Link to="/contact" className="bwrc-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="bwrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS LUXURY TRAVEL */}
                <section className="bwrc-why-book-section bwrc-why-book-dark-section">
                    <div className="bwrc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto', color: 'white' }}>
                                Our luxury travel advisors help you:
                            </p>
                        </div>
                        <div className="bwrc-why-book-grid">
                            {bwrcWhyBook.map((item, idx) => (
                                <div key={idx} className="bwrc-why-book-card">
                                    <div className="bwrc-why-book-icon">
                                        {item.icon}
                                    </div>
                                    <h4 className="bwrc-why-book-title">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="bwrc-review-section bwrc-bg-white">
                    <div className="bwrc-review-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <span className="fcel-eyebrow-label bwrc-eyebrow-verdict">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="bwrc-verdict-stars">⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph bwrc-verdict-text">
                            A Uniworld Bordeaux River Cruise is one of the finest luxury wine vacations in Europe. Combining prestigious vineyards, charming French villages, exceptional cuisine, and boutique river cruising, it delivers an unforgettable journey through one of the world's most celebrated wine regions.
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
                            {bwrcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => bwrcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {bwrcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {bwrcActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your Uniworld Bordeaux River Cruise?</h2>
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

export default UniworldBordeauxRiverCruises