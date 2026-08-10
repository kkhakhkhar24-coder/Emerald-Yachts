import Navbar from '../../components/Navbar/Navbar'
import './Uniworldrhonesaonerivercruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, Globe, Award,
    Utensils, Wine, Bed, Compass, Gift, Smile, AlertTriangle, XCircle,
    Image as ImageIcon, Sun, Trees, Bath, Bell, Coffee,
    Landmark, MapPin, Grape, Leaf, Home, Flower2, Calendar, Mountain,
    ArrowRight
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function RsrcPlaceholder({ label, className = '' }) {
    return (
        <div className={`rsrc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldRhoneSaoneRiverCruises() {
    const [rsrcActiveFaq, setRsrcActiveFaq] = useState(null)
    const rsrcToggleFaq = (index) => {
        setRsrcActiveFaq(rsrcActiveFaq === index ? null : index)
    }

    const rsrcFaqs = [
        {
            question: "1. Is a Uniworld Rhône & Saône River Cruise worth the money?",
            answer: "Yes. It offers exceptional value through luxury accommodations, gourmet dining, premium beverages, guided excursions, and personalized service."
        },
        {
            question: "2. What is included on a Rhône & Saône River Cruise?",
            answer: "Luxury accommodations, gourmet dining, unlimited premium beverages, Wi-Fi, guided excursions, gratuities, and entertainment are generally included."
        },
        {
            question: "3. Which regions does the cruise visit?",
            answer: "Most itineraries visit Burgundy and Provence, along with cities such as Lyon, Avignon, Arles, Viviers, and Tournon."
        },
        {
            question: "4. Is this cruise good for wine lovers?",
            answer: "Absolutely. Burgundy and the Rhône Valley are among France's most famous wine-producing regions."
        },
        {
            question: "5. When is the best time to cruise?",
            answer: "Spring and fall are excellent, while summer is ideal for lavender season."
        },
        {
            question: "6. Are shore excursions included?",
            answer: "Yes. Most guided excursions are included in your cruise fare."
        },
        {
            question: "7. Are drinks included?",
            answer: "Yes. Premium wines, spirits, beer, specialty coffee, and soft drinks are generally included."
        },
        {
            question: "8. Does Uniworld include gratuities?",
            answer: "Yes. Onboard gratuities are included on most Uniworld cruises."
        },
        {
            question: "9. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is available throughout the ship."
        },
        {
            question: "10. Who should choose this itinerary?",
            answer: "Wine enthusiasts, food lovers, couples, luxury travelers, photographers, and history lovers."
        },
        {
            question: "11. Is Provence worth visiting on a river cruise?",
            answer: "Yes. Provence offers charming villages, Roman history, lavender fields, vibrant markets, and outstanding cuisine."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors provide expert itinerary recommendations, exclusive offers, personalized planning, and concierge-level service before, during, and after your luxury river cruise."
        }
    ]

    const rsrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone",
                "name": "Uniworld Rhône and Saône River Cruises: Burgundy and Provence",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone",
                "description": "Discover Uniworld Rhône and Saône River Cruises through Burgundy and Provence featuring luxury boutique ships, gourmet dining, renowned wine regions, and all-inclusive river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone#article"
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone#article",
                "headline": "Uniworld Rhône and Saône River Cruises: Burgundy and Provence",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone",
                "description": "Expert guide to Uniworld Rhône and Saône River Cruises including Burgundy and Provence itineraries, wine regions, pricing, excursions, dining, and luxury travel planning.",
                "image": "https://www.tripsandships.com/images/uniworld-rhone-saone-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Rhône & Saône River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Rhône and Saône River cruises, helping travelers choose the best Burgundy and Provence itinerary."
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
                        "name": "Uniworld Rhône & Saône River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/rhone-saone"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a Uniworld Rhône & Saône River Cruise worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Uniworld Rhône and Saône River Cruises offer exceptional value through luxury accommodations, gourmet dining, premium beverages, excursions, gratuities, and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Rhône & Saône River Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury accommodations, gourmet dining, unlimited beverages, Wi-Fi, guided excursions, gratuities, and entertainment are generally included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which regions does the cruise visit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most itineraries explore Burgundy and Provence, including Lyon, Avignon, Arles, Viviers, and Tournon."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this cruise good for wine lovers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Burgundy and the Rhône Valley are world-famous wine regions offering exceptional tasting experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When is the best time to cruise the Rhône & Saône?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Spring and fall are ideal, while summer is perfect for seeing Provence's lavender fields."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are shore excursions included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most guided shore excursions are included in your cruise fare."
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
                        "name": "Who should choose this itinerary?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Wine lovers, food enthusiasts, couples, luxury travelers, photographers, and history lovers will especially enjoy this itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Provence worth visiting on a river cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Provence offers picturesque villages, Roman history, lavender fields, vibrant markets, and outstanding cuisine."
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

    const rsrcDestinations = [
        { name: 'Lyon', icon: <Utensils size={24} />, desc: "France's culinary capital with exceptional food, history, and architecture." },
        { name: 'Avignon', icon: <Landmark size={24} />, desc: 'Home to the magnificent Palace of the Popes and medieval streets.' },
        { name: 'Arles', icon: <Compass size={24} />, desc: "Famous for Roman ruins and Vincent van Gogh's artistic inspiration." },
        { name: 'Viviers', icon: <MapPin size={24} />, desc: 'A charming medieval village with cobblestone streets.' },
        { name: 'Tournon', icon: <Grape size={24} />, desc: 'Known for vineyards and Rhône Valley wines.' },
        { name: 'Beaune (Excursion)', icon: <Wine size={24} />, desc: "One of Burgundy's most famous wine towns." }
    ]

    const rsrcSeasons = [
        { name: 'Spring', icon: <Flower2 size={24} />, desc: 'Blooming vineyards and pleasant temperatures.' },
        { name: 'Summer', icon: <Sun size={24} />, desc: 'Lavender season and lively festivals.' },
        { name: 'Fall', icon: <Leaf size={24} />, desc: 'Wine harvest season with beautiful vineyard colors.' },
        { name: 'Christmas', icon: <Gift size={24} />, desc: 'Limited festive sailings with seasonal charm.' }
    ]

    return (
        <>
            <Helmet>
                <title>Uniworld Rhône & Saône River Cruises: Burgundy, Provence, Prices & Expert Guide</title>
                <meta name="title" content="Uniworld Rhône & Saône River Cruises | Burgundy & Provence Luxury Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Rhône & Saône River Cruise? Discover Burgundy and Provence itineraries, pricing, wine regions, what's included, reviews, and whether it's worth booking."
                />
                <script type="application/ld+json">
                    {JSON.stringify(rsrcSchemaData)}
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
                            <span>Uniworld Rhône & Saône River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Rhône & Saône <br /> River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Discover Burgundy & Provence in Boutique Luxury
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
                                <span className="fcel-eyebrow-label">EXPERT CRUISE GUIDE</span>
                                <h2 className="fcel-section-heading">Discover Burgundy & Provence</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    A Uniworld Rhône & Saône River Cruise offers one of the most immersive ways to experience southern France. Sailing through the famous wine regions of Burgundy and Provence, you'll discover charming medieval villages, world-renowned vineyards, Roman ruins, lavender fields, gourmet cuisine, and vibrant French culture—all while enjoying Uniworld's signature boutique luxury.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you're sampling fine wines in Burgundy, strolling through Avignon's historic streets, or exploring the colorful markets of Provence, every day delivers unforgettable experiences.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <RsrcPlaceholder label="Uniworld Rhône & Saône River Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Rhône & Saône Review Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    You'll discover charming medieval villages, world-renowned vineyards, Roman ruins, lavender fields, gourmet cuisine, and vibrant French culture.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RATING SUMMARY SECTION */}
                <section className="rsrc-rating-section">
                    <div className="rsrc-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label rsrc-eyebrow-rating">⭐ OVERALL RATING</span>
                            <h2 className="fcel-section-heading">Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-rating-card">
                            <div className="rsrc-rating-grid">
                                <div className="rsrc-rating-item">
                                    <span className="rsrc-rating-label">Luxury</span>
                                    <span className="rsrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="rsrc-rating-item">
                                    <span className="rsrc-rating-label">Dining</span>
                                    <span className="rsrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="rsrc-rating-item">
                                    <span className="rsrc-rating-label">Service</span>
                                    <span className="rsrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="rsrc-rating-item">
                                    <span className="rsrc-rating-label">Excursions</span>
                                    <span className="rsrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="rsrc-rating-item">
                                    <span className="rsrc-rating-label">Scenic Beauty</span>
                                    <span className="rsrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="rsrc-rating-item">
                                    <span className="rsrc-rating-label">Value</span>
                                    <span className="rsrc-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="rsrc-rating-score-box">
                                <div className="rsrc-rating-score">9.9/10</div>
                                <div className="rsrc-rating-score-label">Overall Rating</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="rsrc-quick-answer-section">
                    <div className="rsrc-quick-answer-container">
                        <div className="rsrc-quick-answer-card">
                            <h3 className="rsrc-quick-answer-title">Is a Uniworld Rhône & Saône River Cruise Worth It?</h3>
                            <p className="rsrc-quick-answer-text">
                                Yes. A Uniworld Rhône & Saône River Cruise is ideal for travelers who love French cuisine, wine, history, art, and luxury. Nearly everything is included—from gourmet dining and premium beverages to guided excursions and exceptional personalized service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA (INLINE CTA) */}
                <section className="rsrc-inline-cta-section">
                    <div className="rsrc-inline-cta-container">
                        <span className="rsrc-inline-cta-tag">Expert Planning</span>
                        <p className="rsrc-inline-cta-text">Ready to sail through Burgundy and Provence in boutique luxury?</p>
                        <div className="rsrc-inline-cta-btn-row">
                            <Link to="/contact" className="rsrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="rsrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A RHÔNE & SAÔNE RIVER CRUISE */}
                <section className="rsrc-highlight-section rsrc-bg-white">
                    <div className="rsrc-highlight-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Choose a Rhône & Saône River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-highlight-grid">
                            {[
                                { label: 'Burgundy wine region', icon: <Grape size={20} /> },
                                { label: 'Provence villages', icon: <Landmark size={20} /> },
                                { label: 'Roman history', icon: <Compass size={20} /> },
                                { label: 'Lavender fields', icon: <Flower2 size={20} /> },
                                { label: 'Gourmet French cuisine', icon: <Utensils size={20} /> },
                                { label: 'Wine tastings', icon: <Wine size={20} /> },
                                { label: 'UNESCO World Heritage Sites', icon: <Award size={20} /> },
                                { label: 'Boutique luxury ships', icon: <Ship size={20} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="rsrc-highlight-card">
                                    <div className="rsrc-highlight-icon">
                                        {item.icon}
                                    </div>
                                    <span className="rsrc-highlight-label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="rsrc-included-section rsrc-bg-soft">
                    <div className="rsrc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE</span>
                            <h2 className="fcel-section-heading">What's Included</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-included-grid">
                            {[
                                'Boutique luxury accommodations',
                                'Gourmet French-inspired dining',
                                'Unlimited premium beverages',
                                'Guided excursions',
                                'Complimentary Wi-Fi',
                                'Onboard gratuities',
                                'Evening entertainment',
                                'Airport transfers (select sailings)',
                                'Complimentary bicycles'
                            ].map((item, idx) => (
                                <div key={idx} className="rsrc-included-item">
                                    <CheckCircle size={18} className="rsrc-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOP DESTINATIONS */}
                <section className="rsrc-dest-section">
                    <div className="rsrc-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLD CLASS RIVERWAYS</span>
                            <h2 className="fcel-section-heading">Top Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-dest-grid">
                            {rsrcDestinations.map((dest, idx) => (
                                <div key={idx} className="rsrc-dest-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left' }}>
                                    <div style={{ height: '180px', width: '100%', position: 'relative', background: '#e2e8f0' }}>
                                        <RsrcPlaceholder label={`${dest.name} View`} className="rsrc-placeholder-card" />
                                        <div className="rsrc-badge-overlay-gold" style={{ top: '15px', right: '15px', fontSize: '11px', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            {dest.icon}
                                            <span>{dest.name}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '24px' }}>
                                        <h4 className="rsrc-dest-name" style={{ margin: '0 0 10px 0' }}>{dest.name}</h4>
                                        <p className="rsrc-dest-desc">{dest.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD */}
                <section className="rsrc-review-section rsrc-dining-dark-section">
                    <div className="rsrc-review-container">
                        <div className="rsrc-dining-container">
                            <div className="rsrc-image-wrapper-premium">
                                <div className="rsrc-badge-overlay-gold">
                                    <Utensils size={14} />
                                    <span>Onboard Dining</span>
                                </div>
                                <RsrcPlaceholder label="Uniworld Rhône & Saône Dining Experience" />
                            </div>
                            <div className="rsrc-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{ width: '230px' }}>CULINARY EXCELLENCE</span>
                                <h2 className="rsrc-review-title">Dining Onboard</h2>
                                <p className="fcel-lead-paragraph" style={{ color: 'white' }}>
                                    Enjoy authentic French cuisine featuring:
                                </p>
                                <div className="rsrc-dining-menu-list">
                                    <div className="rsrc-dining-course-card">
                                        <div className="rsrc-dining-course-icon">
                                            <Utensils size={20} />
                                        </div>
                                        <span className="rsrc-dining-course-text">Regional specialties</span>
                                    </div>
                                    <div className="rsrc-dining-course-card">
                                        <div className="rsrc-dining-course-icon">
                                            <Wine size={20} />
                                        </div>
                                        <span className="rsrc-dining-course-text">Local Burgundy wines</span>
                                    </div>
                                    <div className="rsrc-dining-course-card">
                                        <div className="rsrc-dining-course-icon">
                                            <Grape size={20} />
                                        </div>
                                        <span className="rsrc-dining-course-text">Rhône Valley wines</span>
                                    </div>
                                    <div className="rsrc-dining-course-card">
                                        <div className="rsrc-dining-course-icon">
                                            <Coffee size={20} />
                                        </div>
                                        <span className="rsrc-dining-course-text">Gourmet multi-course dinners</span>
                                    </div>
                                    <div className="rsrc-dining-course-card">
                                        <div className="rsrc-dining-course-icon">
                                            <Leaf size={20} />
                                        </div>
                                        <span className="rsrc-dining-course-text">Fresh seasonal ingredients</span>
                                    </div>
                                    <div className="rsrc-dining-course-card">
                                        <div className="rsrc-dining-course-icon">
                                            <Trees size={20} />
                                        </div>
                                        <span className="rsrc-dining-course-text">Farm-to-table menus</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS */}
                <section className="rsrc-review-section rsrc-bg-soft">
                    <div className="rsrc-review-container">
                        <div className="rsrc-cabins-container">
                            <div className="rsrc-review-copy-col">
                                <span className="fcel-eyebrow-label rsrc-eyebrow-accommodations">ACCOMMODATIONS</span>
                                <h2 className="rsrc-review-title" style={{ textAlign: 'left' }}>Luxury Accommodations</h2>
                                <p className="fcel-lead-paragraph">
                                    Guests enjoy:
                                </p>
                                <div className="rsrc-cabin-feature-grid">
                                    <div className="rsrc-cabin-feature-card">
                                        <div className="rsrc-cabin-card-icon">
                                            <Bed size={20} />
                                        </div>
                                        <span className="rsrc-cabin-card-text">Elegant boutique staterooms</span>
                                    </div>
                                    <div className="rsrc-cabin-feature-card">
                                        <div className="rsrc-cabin-card-icon">
                                            <Bell size={20} />
                                        </div>
                                        <span className="rsrc-cabin-card-text">Butler service (select suites)</span>
                                    </div>
                                    <div className="rsrc-cabin-feature-card">
                                        <div className="rsrc-cabin-card-icon">
                                            <Bath size={20} />
                                        </div>
                                        <span className="rsrc-cabin-card-text">Marble bathrooms</span>
                                    </div>
                                    <div className="rsrc-cabin-feature-card">
                                        <div className="rsrc-cabin-card-icon">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="rsrc-cabin-card-text">Luxury bedding</span>
                                    </div>
                                    <div className="rsrc-cabin-feature-card">
                                        <div className="rsrc-cabin-card-icon">
                                            <Home size={20} />
                                        </div>
                                        <span className="rsrc-cabin-card-text">French balconies</span>
                                    </div>
                                    <div className="rsrc-cabin-feature-card">
                                        <div className="rsrc-cabin-card-icon">
                                            <Smile size={20} />
                                        </div>
                                        <span className="rsrc-cabin-card-text">Personalized service</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rsrc-image-wrapper-premium">
                                <div className="rsrc-badge-overlay-gold">
                                    <Sparkles size={14} />
                                    <span>Boutique Comfort</span>
                                </div>
                                <RsrcPlaceholder label="Uniworld Luxury Cabin / Suite Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE */}
                <section className="rsrc-season-section">
                    <div className="rsrc-season-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time to Cruise</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-season-grid">
                            {rsrcSeasons.map((season, idx) => (
                                <div key={idx} className="rsrc-season-card">
                                    <div className="rsrc-season-icon-wrap">
                                        {season.icon}
                                    </div>
                                    <h4 className="rsrc-season-name">{season.name}</h4>
                                    <p className="rsrc-season-desc">{season.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY */}
                <section className="rsrc-worth-section rsrc-bg-soft">
                    <div className="rsrc-worth-container">
                        <span className="fcel-eyebrow-label rsrc-eyebrow-worth">INVESTMENT & VALUE</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Although Uniworld is positioned as a luxury river cruise line, many travelers believe the inclusive experience provides outstanding value. Fine dining, premium beverages, guided excursions, gratuities, and exceptional service are all included, helping simplify your vacation budget.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="rsrc-pros-section rsrc-bg-white">
                    <div className="rsrc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label" style={{ background: '#ffffff', color: 'var(--rsrc-navy)' }}>PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="rsrc-comparison-board">
                            {/* Pros Panel */}
                            <div className="rsrc-pros-panel">
                                <h3 className="rsrc-panel-title pros-title">
                                    <CheckCircle size={22} />
                                    What We Love (Pros)
                                </h3>
                                <div className="rsrc-panel-list">
                                    {[
                                        { title: 'Exceptional French Cuisine', icon: <Utensils size={20} /> },
                                        { title: 'Outstanding Wine Experiences', icon: <Wine size={20} /> },
                                        { title: 'Boutique Luxury Ships', icon: <Ship size={20} /> },
                                        { title: 'Beautiful Provençal Scenery', icon: <Mountain size={20} /> },
                                        { title: 'Award-Winning Service', icon: <Award size={20} /> },
                                        { title: 'Rich Cultural Experiences', icon: <Landmark size={20} /> }
                                    ].map((pro, idx) => (
                                        <div key={idx} className="rsrc-list-item">
                                            <div className="rsrc-item-icon-wrap pro-icon">
                                                {pro.icon}
                                            </div>
                                            <div className="rsrc-item-content">
                                                <h4 className="rsrc-item-title">{pro.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cons Panel */}
                            <div className="rsrc-cons-panel">
                                <h3 className="rsrc-panel-title cons-title">
                                    <AlertTriangle size={22} />
                                    Things to Consider (Cons)
                                </h3>
                                <div className="rsrc-panel-list">
                                    {[
                                        'Premium Pricing',
                                        'Popular Sailings Sell Out Early',
                                        'Smaller Ships Mean Limited Availability',
                                        'More traditional decor (may not appeal to minimalists)',
                                        'Smaller fitness and wellness facilities',
                                        'Fewer onboard activities compared to ocean liners'
                                    ].map((con, idx) => (
                                        <div key={idx} className="rsrc-list-item">
                                            <div className="rsrc-item-icon-wrap con-icon">
                                                <XCircle size={18} />
                                            </div>
                                            <div className="rsrc-item-content">
                                                <h4 className="rsrc-item-title">{con}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD BOOK */}
                <section className="rsrc-audience-section">
                    <div className="rsrc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Book?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Perfect for:
                            </p>
                        </div>
                        <div className="rsrc-audience-column">
                            <ul className="rsrc-audience-list">
                                {['Wine lovers', 'Food enthusiasts', 'Couples', 'Luxury travelers', 'Art lovers', 'History enthusiasts', 'Anniversary celebrations', 'First-time France visitors'].map((item, idx) => (
                                    <li key={idx} className="rsrc-audience-item">
                                        <CheckCircle size={18} className="rsrc-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS */}
                <section className="rsrc-tips-section rsrc-bg-white">
                    <div className="rsrc-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">TRAVEL SMART</span>
                            <h2 className="fcel-section-heading">Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-tips-list">
                            {[
                                { icon: <Calendar size={18} />, text: 'Reserve your cruise 9–18 months in advance.' },
                                { icon: <Sun size={18} />, text: 'Visit during spring or fall for ideal weather.' },
                                { icon: <Bed size={18} />, text: 'Choose a French Balcony or Suite.' },
                                { icon: <MapPin size={18} />, text: 'Extend your stay in Lyon or Paris.' },
                                { icon: <Compass size={18} />, text: 'Pack comfortable walking shoes for historic towns.' }
                            ].map((tip, idx) => (
                                <div key={idx} className="rsrc-tips-item">
                                    <div className="rsrc-tips-icon">
                                        {tip.icon}
                                    </div>
                                    <p className="rsrc-tips-text">{tip.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH US */}
                <section className="rsrc-why-book-section rsrc-why-book-dark-section">
                    <div className="rsrc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-why-book-grid">
                            <div className="rsrc-why-book-card">
                                <div className="rsrc-why-book-icon">
                                    <LayoutList size={20} />
                                </div>
                                <h4 className="rsrc-why-book-title">Compare Itineraries</h4>
                                <p className="rsrc-why-book-desc">Compare Burgundy & Provence itineraries to find your ideal sailing.</p>
                            </div>
                            <div className="rsrc-why-book-card">
                                <div className="rsrc-why-book-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="rsrc-why-book-title">Select the Best Stateroom</h4>
                                <p className="rsrc-why-book-desc">Select the best stateroom for your travel style and budget.</p>
                            </div>
                            <div className="rsrc-why-book-card">
                                <div className="rsrc-why-book-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="rsrc-why-book-title">Arrange Airfare & Hotels</h4>
                                <p className="rsrc-why-book-desc">Arrange airfare and hotels around your cruise dates.</p>
                            </div>
                            <div className="rsrc-why-book-card">
                                <div className="rsrc-why-book-icon">
                                    <Award size={20} />
                                </div>
                                <h4 className="rsrc-why-book-title">Secure Exclusive Promotions</h4>
                                <p className="rsrc-why-book-desc">Secure exclusive promotions unavailable when booking direct.</p>
                            </div>
                            <div className="rsrc-why-book-card">
                                <div className="rsrc-why-book-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="rsrc-why-book-title">Plan Pre- & Post-Cruise Stays</h4>
                                <p className="rsrc-why-book-desc">Plan pre- and post-cruise stays in Lyon, Paris, or Provence.</p>
                            </div>
                            <div className="rsrc-why-book-card">
                                <div className="rsrc-why-book-icon">
                                    <Ship size={20} />
                                </div>
                                <h4 className="rsrc-why-book-title">Coordinate Transfers</h4>
                                <p className="rsrc-why-book-desc">Coordinate transfers between airports, hotels, and the ship.</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="rsrc-recommendation-section rsrc-bg-white">
                    <div className="rsrc-recommendation-container">
                        <span className="fcel-eyebrow-label rsrc-eyebrow-verdict">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Is Uniworld Rhône & Saône Worth Booking?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="rsrc-recommendation-stars">⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph" style={{ fontSize: '20px', fontWeight: '500', color: 'var(--rsrc-navy)', lineHeight: '1.7' }}>
                            A Uniworld Rhône & Saône River Cruise is one of the finest ways to experience southern France.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            From world-famous vineyards and gourmet cuisine to historic cities and picturesque villages, it offers an unforgettable luxury vacation filled with culture, history, and exceptional hospitality.
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
                            {rsrcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => rsrcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {rsrcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {rsrcActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED GUIDES (RELATED CONTENT CTA) */}
                <section className="rsrc-related-section">
                    <div className="rsrc-related-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">KEEP EXPLORING</span>
                            <h2 className="fcel-section-heading">Related Luxury Cruise Guides</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="rsrc-related-grid">
                            <Link to="/uniworld-river-cruises/review" className="rsrc-related-card">
                                <div className="rsrc-related-icon">
                                    <Ship size={20} />
                                </div>
                                <h4 className="rsrc-related-title">Uniworld River Cruises Review</h4>
                                <p className="rsrc-related-desc">Our full expert review of Uniworld's boutique river cruise fleet.</p>
                                <span className="rsrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/scenic-mediterranean-cruises" className="rsrc-related-card">
                                <div className="rsrc-related-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="rsrc-related-title">Scenic Mediterranean Cruises</h4>
                                <p className="rsrc-related-desc">Explore another luxury way to sail southern Europe's coastlines.</p>
                                <span className="rsrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/why-i-resisted-viking" className="rsrc-related-card">
                                <div className="rsrc-related-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="rsrc-related-title">Why I Resisted Viking</h4>
                                <p className="rsrc-related-desc">An honest editorial comparing Uniworld's boutique feel to Viking.</p>
                                <span className="rsrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/scenic-cabins-guide" className="rsrc-related-card">
                                <div className="rsrc-related-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="rsrc-related-title">Scenic Cabins Guide</h4>
                                <p className="rsrc-related-desc">Compare suite categories across leading luxury river cruise lines.</p>
                                <span className="rsrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/private-villas-exclusive-resorts" className="rsrc-related-card">
                                <div className="rsrc-related-icon">
                                    <Landmark size={20} />
                                </div>
                                <h4 className="rsrc-related-title">Private Villas & Exclusive Resorts</h4>
                                <p className="rsrc-related-desc">Extend your Provence journey with a private villa escape.</p>
                                <span className="rsrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Plan Your Rhône & Saône River Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare itineraries, secure exclusive promotions, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
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

export default UniworldRhoneSaoneRiverCruises