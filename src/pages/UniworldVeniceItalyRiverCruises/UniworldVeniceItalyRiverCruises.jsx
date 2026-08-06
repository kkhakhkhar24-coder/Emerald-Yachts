import Navbar from '../../components/Navbar/Navbar'
import './UniworldVeniceItalyRiverCruises.css'
import {
    Ship, Star, Sparkles, Phone, LayoutList, Heart,
    CheckCircle, ChevronRight, Globe, Award, Utensils, Wine,
    Bed, Compass, Gift, Smile, ShieldCheck, XCircle, AlertTriangle,
    Image as ImageIcon, Map, Sun, Trees, Bath, Bell, Coffee, Activity, Coins,
    Landmark, Castle, Flower2, Anchor, Snowflake, Clock, Calendar, MapPin,
    Waves, Palette, BookOpen, Footprints
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UvicPlaceholder({ label, className = '' }) {
    return (
        <div className={`uvic-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldVeniceItalyRiverCruises() {
    const [uvicActiveFaq, setUvicActiveFaq] = useState(null)
    const uvicToggleFaq = (index) => {
        setUvicActiveFaq(uvicActiveFaq === index ? null : index)
    }

    const uvicFaqs = [
        {
            question: "1. Is a Uniworld Venice & Italy River Cruise worth the money?",
            answer: "Yes. It offers excellent value with luxury accommodations, gourmet dining, premium beverages, guided excursions, gratuities, and exceptional personalized service."
        },
        {
            question: "2. What is included on a Venice River Cruise?",
            answer: "Luxury accommodations, gourmet dining, unlimited premium beverages, Wi-Fi, guided excursions, gratuities, and entertainment are generally included."
        },
        {
            question: "3. Does the cruise visit Venice?",
            answer: "Yes. Venice is the centerpiece of the itinerary, with opportunities to explore St. Mark's Square, canals, historic landmarks, and nearby islands."
        },
        {
            question: "4. Which islands are included?",
            answer: "Many itineraries visit Burano, Murano, and other islands within the Venetian Lagoon."
        },
        {
            question: "5. Is Verona included?",
            answer: "Many sailings offer an included or optional excursion to Verona, famous for its Roman Arena and Shakespeare connections."
        },
        {
            question: "6. Are drinks included?",
            answer: "Yes. Premium wines, beer, spirits, specialty coffee, soft drinks, and bottled water are generally included."
        },
        {
            question: "7. Does Uniworld include gratuities?",
            answer: "Yes. Onboard gratuities are included on most Uniworld cruises."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is available throughout the ship."
        },
        {
            question: "9. When is the best time to cruise Venice?",
            answer: "Spring and fall provide pleasant temperatures and fewer crowds, while summer offers longer sightseeing days."
        },
        {
            question: "10. Who should choose this itinerary?",
            answer: "Couples, luxury travelers, food lovers, history enthusiasts, photographers, and anyone wanting an immersive Italian vacation."
        },
        {
            question: "11. Is this itinerary good for first-time visitors to Italy?",
            answer: "Absolutely. It combines Venice, the Venetian Lagoon, historic cities, and Italian culture into one luxury vacation."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors provide expert recommendations, exclusive offers, personalized planning, and concierge-level service before, during, and after your cruise."
        }
    ]

    const uvicSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice",
                "name": "Uniworld Venice and Italy River Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice",
                "description": "Discover Uniworld Venice and Italy River Cruises featuring luxury boutique ships, the Venetian Lagoon, gourmet Italian cuisine, and immersive cultural experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice#article"
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
                "description": "Luxury travel agency specializing in luxury river cruises, ocean cruises, expedition cruises, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice#article",
                "headline": "Uniworld Venice and Italy River Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice",
                "description": "Expert guide to Uniworld Venice and Italy River Cruises including itineraries, pricing, excursions, dining, what's included, and luxury travel planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/uniworld-venice-italy-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Venice & Italy River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Venice and Italy river cruises, helping travelers choose the best itinerary through the Venetian Lagoon and Northern Italy."
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
                        "name": "Uniworld Venice & Italy River Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/italy-venice"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a Uniworld Venice & Italy River Cruise worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It offers luxury accommodations, gourmet Italian dining, premium beverages, guided excursions, gratuities, and personalized service in one nearly all-inclusive vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Venice River Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury accommodations, gourmet dining, unlimited premium beverages, Wi-Fi, guided excursions, gratuities, and entertainment are generally included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the cruise visit Venice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Venice is the centerpiece of the itinerary with opportunities to explore its canals, St. Mark's Square, and historic landmarks."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which islands are included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many itineraries visit Burano, Murano, and other islands throughout the Venetian Lagoon."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Verona included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many sailings include or offer an excursion to Verona, famous for its Roman Arena and Shakespeare connections."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Premium wines, beer, spirits, specialty coffee, soft drinks, and bottled water are generally included."
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
                        "name": "When is the best time to cruise Venice?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Spring and fall provide ideal weather and fewer crowds, while summer offers longer sightseeing days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should choose this itinerary?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Couples, luxury travelers, food lovers, photographers, history enthusiasts, and first-time visitors to Italy will especially enjoy this itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this itinerary good for first-time visitors to Italy?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It combines Venice, the Venetian Lagoon, historic cities, and authentic Italian culture into one unforgettable luxury vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert itinerary planning, exclusive offers, personalized recommendations, and concierge-level service before, during, and after your luxury cruise."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Venice & Italy River Cruises : Prices, Itineraries & Expert Guide</title>
                <meta name="title" content="Uniworld Venice & Italy River Cruises | Luxury Italy Cruise Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Venice & Italy River Cruise? Discover Venice Lagoon itineraries, pricing, what's included, reviews, top destinations, and whether it's worth booking."
                />
                <script type="application/ld+json">
                    {JSON.stringify(uvicSchemaData)}
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
                            <span>Uniworld Venice & Italy River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Venice & Italy <br /> River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Experience Venice and Northern Italy in Boutique Luxury
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
                                <span className="fcel-eyebrow-label">VENICE & ITALY CRUISE GUIDE</span>
                                <h2 className="fcel-section-heading">Uniworld Venice & Italy River Cruises</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    A Uniworld Venice & Italy River Cruise offers an unforgettable way to discover one of Europe's most romantic destinations. Unlike traditional river cruises, this itinerary explores the Venetian Lagoon, historic islands, Renaissance cities, charming fishing villages, and UNESCO World Heritage Sites while delivering Uniworld's signature boutique luxury.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UvicPlaceholder label="Uniworld Venice & Italy River Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Venice Cruise Review Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    From the canals of Venice to colorful Burano and the elegant streets of Padua, every day offers exceptional culture, history, cuisine, and unforgettable scenery.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OVERALL RATING SECTION */}
                <section className="uvic-rating-section">
                    <div className="uvic-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label uvic-eyebrow-onsoft">⭐ OVERALL RATING</span>
                            <h2 className="fcel-section-heading">Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvic-rating-card">
                            <div className="uvic-rating-grid">
                                <div className="uvic-rating-item">
                                    <span className="uvic-rating-label">Luxury</span>
                                    <span className="uvic-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="uvic-rating-item">
                                    <span className="uvic-rating-label">Dining</span>
                                    <span className="uvic-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="uvic-rating-item">
                                    <span className="uvic-rating-label">Service</span>
                                    <span className="uvic-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="uvic-rating-item">
                                    <span className="uvic-rating-label">Excursions</span>
                                    <span className="uvic-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="uvic-rating-item">
                                    <span className="uvic-rating-label">Scenic Beauty</span>
                                    <span className="uvic-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="uvic-rating-item">
                                    <span className="uvic-rating-label">Value</span>
                                    <span className="uvic-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="uvic-rating-score-box">
                                <div className="uvic-rating-score">9.9/10</div>
                                <div className="uvic-rating-score-label">Overall Rating</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="uvic-quick-answer-section">
                    <div className="uvic-quick-answer-container">
                        <div className="uvic-quick-answer-card">
                            <span className="fcel-eyebrow-label">QUICK ANSWER</span>
                            <h3 className="uvic-quick-answer-title">Is a Uniworld Venice & Italy River Cruise Worth It?</h3>
                            <p className="uvic-quick-answer-text">
                                Yes. A Uniworld Venice & Italy River Cruise is one of the best luxury vacations in Italy, combining boutique accommodations, gourmet Italian cuisine, premium beverages, immersive excursions, and exclusive access to Venice's iconic lagoon and surrounding destinations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 1 */}
                <section className="uvic-inline-cta-section">
                    <div className="uvic-inline-cta-container">
                        <span className="uvic-inline-cta-tag">Expert Planning</span>
                        <p className="uvic-inline-cta-text">Ready to explore Venice and Northern Italy in Uniworld luxury?</p>
                        <div className="uvic-inline-cta-btn-row">
                            <Link to="/contact" className="uvic-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvic-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A VENICE & ITALY RIVER CRUISE */}
                <section className="uvic-choice-section uvic-bg-white">
                    <div className="uvic-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ITALY IN LUXURY</span>
                            <h2 className="fcel-section-heading">Why Choose a Venice & Italy River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Highlights include:</p>
                        </div>
                        <div className="uvic-check-grid">
                            {['Venice Lagoon', 'Burano & Murano Islands', 'UNESCO World Heritage Sites', 'Renaissance architecture', 'Italian cuisine', 'Wine tasting', 'Historic canals', 'Boutique luxury ships'].map((item, idx) => (
                                <div key={idx} className="uvic-check-item">
                                    <CheckCircle size={18} className="uvic-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="uvic-choice-section uvic-bg-soft">
                    <div className="uvic-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvic-eyebrow-onsoft">ALL-INCLUSIVE LUXURY</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvic-check-grid">
                            {['Boutique luxury accommodations', 'Gourmet Italian-inspired dining', 'Unlimited premium beverages', 'Guided excursions', 'Complimentary Wi-Fi', 'Onboard gratuities', 'Evening entertainment', 'Airport transfers (select sailings)', 'Complimentary bicycles'].map((item, idx) => (
                                <div key={idx} className="uvic-check-item">
                                    <CheckCircle size={18} className="uvic-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOP DESTINATIONS */}
                <section className="uvic-dest-section uvic-bg-white">
                    <div className="uvic-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLD CLASS WATERWAYS</span>
                            <h2 className="fcel-section-heading">Top Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvic-dest-grid">
                            {[
                                { name: 'Venice', desc: "Explore St. Mark's Square, the Grand Canal, Doge's Palace, and Venice's world-famous waterways.", icon: <Landmark size={24} /> },
                                { name: 'Burano', desc: 'A picturesque island known for brightly colored houses and traditional lace-making.', icon: <Palette size={24} /> },
                                { name: 'Murano', desc: 'Discover the birthplace of Venetian glassmaking and meet local artisans.', icon: <Sparkles size={24} /> },
                                { name: 'Chioggia', desc: 'A charming fishing town often called "Little Venice."', icon: <Anchor size={24} /> },
                                { name: 'Padua', desc: "Visit one of Italy's oldest cities, famous for Giotto's frescoes and historic university.", icon: <BookOpen size={24} /> },
                                { name: 'Verona (Excursion)', desc: 'Explore the romantic city of Romeo and Juliet and its beautifully preserved Roman Arena.', icon: <Castle size={24} /> }
                            ].map((dest, idx) => (
                                <div key={idx} className="uvic-dest-card">
                                    <UvicPlaceholder label={dest.name} className="uvic-dest-image-placeholder" />
                                    <div className="uvic-dest-icon-wrap">
                                        {dest.icon}
                                    </div>
                                    <h4 className="uvic-dest-name">{dest.name}</h4>
                                    <p className="uvic-dest-desc">{dest.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 2 */}
                <section className="uvic-inline-cta-section">
                    <div className="uvic-inline-cta-container">
                        <span className="uvic-inline-cta-tag">Itinerary Planning</span>
                        <p className="uvic-inline-cta-text">Want help choosing the perfect Venice itinerary and sailing date?</p>
                        <div className="uvic-inline-cta-btn-row">
                            <Link to="/contact" className="uvic-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvic-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD */}
                <section className="uvic-review-section uvic-dining-dark-section">
                    <div className="uvic-review-container">
                        <div className="uvic-dining-container">
                            <div className="uvic-image-wrapper-premium">
                                <div className="uvic-badge-overlay-gold">
                                    <Utensils size={14} />
                                    <span>Italian Cuisine</span>
                                </div>
                                <UvicPlaceholder label="Uniworld Venice River Cruise Dining" />
                            </div>
                            <div className="uvic-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{ width: "230px" }}>CULINARY EXCELLENCE</span>
                                <h2 className="uvic-review-title">Dining Onboard</h2>
                                <p className="fcel-lead-paragraph" style={{ color: "white" }}>
                                    Guests enjoy authentic Italian cuisine featuring:
                                </p>
                                <div className="uvic-dining-menu-list">
                                    {[
                                        { text: 'Fresh regional ingredients', icon: <Trees size={20} /> },
                                        { text: 'Handmade pasta', icon: <Utensils size={20} /> },
                                        { text: 'Local seafood', icon: <Waves size={20} /> },
                                        { text: 'Italian wines', icon: <Wine size={20} /> },
                                        { text: 'Multi-course gourmet dinners', icon: <Sparkles size={20} /> },
                                        { text: 'Traditional desserts', icon: <Coffee size={20} /> }
                                    ].map((course, idx) => (
                                        <div key={idx} className="uvic-dining-course-card">
                                            <div className="uvic-dining-course-icon">
                                                {course.icon}
                                            </div>
                                            <span className="uvic-dining-course-text">{course.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS */}
                <section className="uvic-review-section uvic-bg-soft">
                    <div className="uvic-review-container">
                        <div className="uvic-cabins-container">
                            <div className="uvic-review-copy-col">
                                <span className="fcel-eyebrow-label uvic-eyebrow-onsoft">ACCOMMODATIONS</span>
                                <h2 className="uvic-review-title" style={{ textAlign: "left" }}>Luxury Accommodations</h2>
                                <p className="fcel-lead-paragraph">Guests enjoy:</p>
                                <div className="uvic-cabin-feature-grid">
                                    {[
                                        { text: 'Elegant boutique staterooms', icon: <Bed size={20} /> },
                                        { text: 'Butler service (select suites)', icon: <Bell size={20} /> },
                                        { text: 'Marble bathrooms', icon: <Bath size={20} /> },
                                        { text: 'Luxury bedding', icon: <Sparkles size={20} /> },
                                        { text: 'French balconies (select cabins)', icon: <Award size={20} /> },
                                        { text: 'Personalized service', icon: <Smile size={20} /> }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="uvic-cabin-feature-card">
                                            <div className="uvic-cabin-card-icon">
                                                {feature.icon}
                                            </div>
                                            <span className="uvic-cabin-card-text">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="uvic-image-wrapper-premium">
                                <div className="uvic-badge-overlay-gold">
                                    <Sparkles size={14} />
                                    <span>Boutique Comfort</span>
                                </div>
                                <UvicPlaceholder label="Uniworld Luxury Cabin / Suite Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 3 */}
                <section className="uvic-inline-cta-section">
                    <div className="uvic-inline-cta-container">
                        <span className="uvic-inline-cta-tag">Suite Upgrades</span>
                        <p className="uvic-inline-cta-text">Curious about butler suites and French Balcony cabins?</p>
                        <div className="uvic-inline-cta-btn-row">
                            <Link to="/contact" className="uvic-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvic-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE VENICE */}
                <section className="uvic-dest-section uvic-bg-white">
                    <div className="uvic-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time to Cruise Venice</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvic-dest-grid uvic-seasons-grid">
                            {[
                                { name: 'Spring', desc: 'Pleasant temperatures and blooming gardens.', icon: <Flower2 size={24} /> },
                                { name: 'Summer', desc: 'Long sunny days perfect for sightseeing.', icon: <Sun size={24} /> },
                                { name: 'Fall', desc: 'Fewer crowds and comfortable weather.', icon: <Trees size={24} /> },
                                { name: 'Winter', desc: 'Holiday charm and festive Venetian celebrations.', icon: <Snowflake size={24} /> }
                            ].map((season, idx) => (
                                <div key={idx} className="uvic-dest-card">
                                    <div className="uvic-dest-icon-wrap">
                                        {season.icon}
                                    </div>
                                    <h4 className="uvic-dest-name">{season.name}</h4>
                                    <p className="uvic-dest-desc">{season.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY */}
                <section className="uvic-verdict-section uvic-bg-soft">
                    <div className="uvic-verdict-container">
                        <span className="fcel-eyebrow-label uvic-eyebrow-onsoft">VALUE ASSESSMENT</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="uvic-verdict-stars">⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Uniworld offers exceptional value by including luxury accommodations, gourmet dining, premium beverages, guided excursions, gratuities, and personalized service, allowing travelers to experience Venice and Northern Italy without worrying about additional costs.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS (REDESIGNED COMPARISON BOARD) */}
                <section className="urcr-comparison-section uvic-bg-white">
                    <div className="urcr-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                            <span className="fcel-eyebrow-label" style={{ background: '#ffffff', color: 'var(--uvic-navy)' }}>PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="urcr-comparison-board">
                            {/* Pros Panel */}
                            <div className="urcr-pros-panel">
                                <h3 className="urcr-panel-title pros-title">
                                    <CheckCircle size={22} />
                                    What We Love (Pros)
                                </h3>
                                <div className="urcr-panel-list">
                                    {[
                                        { title: 'Exceptional Venice itinerary', icon: <Landmark size={20} /> },
                                        { title: 'Boutique luxury ships', icon: <Ship size={20} /> },
                                        { title: 'Outstanding Italian cuisine', icon: <Utensils size={20} /> },
                                        { title: 'Premium service', icon: <Smile size={20} /> },
                                        { title: 'Excellent included excursions', icon: <Compass size={20} /> },
                                        { title: 'Unique lagoon cruising experience', icon: <Waves size={20} /> }
                                    ].map((pro, idx) => (
                                        <div key={idx} className="urcr-list-item">
                                            <div className="urcr-item-icon-wrap pro-icon">
                                                {pro.icon}
                                            </div>
                                            <div className="urcr-item-content">
                                                <h4 className="urcr-item-title">{pro.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cons Panel */}
                            <div className="urcr-cons-panel">
                                <h3 className="urcr-panel-title cons-title">
                                    <XCircle size={22} />
                                    Things to Consider (Cons)
                                </h3>
                                <div className="urcr-panel-list">
                                    {[
                                        'Premium pricing',
                                        'Limited departures',
                                        'Popular sailings sell out quickly',
                                        'Best suites sell out early',
                                        'More traditional decor',
                                        'Fewer onboard activities compared to ocean liners'
                                    ].map((con, idx) => (
                                        <div key={idx} className="urcr-list-item">
                                            <div className="urcr-item-icon-wrap con-icon">
                                                <AlertTriangle size={16} />
                                            </div>
                                            <div className="urcr-item-content">
                                                <h4 className="urcr-item-title">{con}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 4 */}
                <section className="uvic-inline-cta-section">
                    <div className="uvic-inline-cta-container">
                        <span className="uvic-inline-cta-tag">Promotions & Rates</span>
                        <p className="uvic-inline-cta-text">Ready to compare itineraries and lock in the best suite promotions?</p>
                        <div className="uvic-inline-cta-btn-row">
                            <Link to="/contact" className="uvic-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="uvic-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD BOOK */}
                <section className="uvic-audience-section uvic-bg-white">
                    <div className="uvic-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Book?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvic-audience-column">
                            <h4 className="uvic-audience-title">Perfect for:</h4>
                            <ul className="uvic-audience-list">
                                {['Couples', 'Luxury travelers', 'Italy first-time visitors', 'Food lovers', 'Art enthusiasts', 'History lovers', 'Anniversary celebrations', 'Cultural travelers'].map((item, idx) => (
                                    <li key={idx} className="uvic-audience-item">
                                        <CheckCircle size={18} className="uvic-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS */}
                <section className="uvic-tips-section uvic-bg-soft">
                    <div className="uvic-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvic-eyebrow-onsoft">GOOD TO KNOW</span>
                            <h2 className="fcel-section-heading">Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="uvic-tips-grid">
                            {[
                                { text: 'Book 9–18 months in advance.', icon: <Clock size={20} /> },
                                { text: 'Spring and fall offer ideal weather.', icon: <Calendar size={20} /> },
                                { text: 'Arrive one or two days early to enjoy Venice.', icon: <MapPin size={20} /> },
                                { text: 'Reserve a Suite or French Balcony cabin.', icon: <Bed size={20} /> },
                                { text: 'Wear comfortable walking shoes for historic cities.', icon: <Footprints size={20} /> }
                            ].map((tip, idx) => (
                                <div key={idx} className="uvic-tip-card">
                                    <div className="uvic-tip-icon-wrap">
                                        {tip.icon}
                                    </div>
                                    <span className="uvic-tip-text">{tip.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 5 */}
                <section className="uvic-inline-cta-section">
                    <div className="uvic-inline-cta-container">
                        <span className="uvic-inline-cta-tag">Plan Ahead</span>
                        <p className="uvic-inline-cta-text">Let our advisors help you time your Venice River Cruise perfectly.</p>
                        <div className="uvic-inline-cta-btn-row">
                            <Link to="/contact" className="uvic-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="uvic-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="uvic-choice-section uvic-bg-soft">
                    <div className="uvic-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label uvic-eyebrow-onsoft">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph">Our luxury travel advisors help you:</p>
                        </div>
                        <div className="uvic-check-grid">
                            {['Compare Venice itineraries', 'Select the ideal suite', 'Arrange airfare and hotels', 'Secure exclusive promotions', 'Customize pre- and post-cruise stays', 'Coordinate transfers', 'Provide concierge-level service before, during, and after your vacation'].map((item, idx) => (
                                <div key={idx} className="uvic-check-item">
                                    <CheckCircle size={18} className="uvic-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="uvic-verdict-section uvic-bg-white">
                    <div className="uvic-verdict-container">
                        <span className="fcel-eyebrow-label">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            A Uniworld Venice & Italy River Cruise is one of Europe's most unique luxury cruise experiences. Combining iconic Italian cities, boutique ships, exceptional cuisine, and immersive cultural excursions, it offers an unforgettable way to discover Northern Italy.
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
                            {uvicFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => uvicToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {uvicActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {uvicActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your  Uniworld <br />  Venice & Italy River Cruise?</h2>
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

export default UniworldVeniceItalyRiverCruises