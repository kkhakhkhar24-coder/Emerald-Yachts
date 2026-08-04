import Navbar from '../../components/Navbar/Navbar'
import './Uniworldcruiseandrailjourneys.css'
import {
    Ship, Sparkles, Phone, LayoutList,
    CheckCircle, Globe, Award, Utensils, Wine,
    Bed, Compass, Smile, ShieldCheck, XCircle, AlertTriangle,
    Image as ImageIcon, Map, Sun, Trees, TrainFront, Mountain,
    Home, Users, Clock, Landmark, Luggage, Coins
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UcrjPlaceholder({ label, className = '' }) {
    return (
        <div className={`ucrj-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldCruiseAndRailJourneys() {
    const [ucrjActiveFaq, setUcrjActiveFaq] = useState(null)
    const ucrjToggleFaq = (index) => {
        setUcrjActiveFaq(ucrjActiveFaq === index ? null : index)
    }

    const ucrjFaqs = [
        {
            question: "1. What are Uniworld Cruise and Rail Journeys?",
            answer: "Uniworld Cruise and Rail Journeys combine luxury river cruising with premium scenic rail travel, allowing guests to experience Europe by both river and train in one seamless vacation."
        },
        {
            question: "2. Are train tickets included?",
            answer: "Yes. Rail transportation is included as part of the Cruise and Rail package."
        },
        {
            question: "3. Which countries are included?",
            answer: "Depending on the itinerary, journeys may visit Switzerland, Germany, Austria, France, Hungary, Belgium, the Netherlands, and other European destinations."
        },
        {
            question: "4. Are hotels included?",
            answer: "Many itineraries include luxury hotel accommodations before or after the cruise."
        },
        {
            question: "5. Are meals included?",
            answer: "Gourmet dining is included throughout the river cruise, while meal inclusions during rail travel vary by itinerary."
        },
        {
            question: "6. Is luggage transferred between the train and ship?",
            answer: "Yes. Most itineraries include coordinated luggage handling and transfers for a smooth travel experience."
        },
        {
            question: "7. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is available aboard all Uniworld river ships."
        },
        {
            question: "8. Which rail journeys are the most scenic?",
            answer: "Swiss alpine rail routes are among the most popular, offering spectacular mountain views, lakes, and charming villages."
        },
        {
            question: "9. Is a Cruise and Rail Journey worth the price?",
            answer: "For travelers seeking a luxury European vacation with minimal planning and maximum experiences, many guests believe the added value and convenience make these journeys well worth the investment."
        },
        {
            question: "10. Who should choose a Cruise and Rail Journey?",
            answer: "These vacations are ideal for couples, luxury travelers, retirees, photographers, and anyone wanting to combine scenic rail travel with a boutique river cruise."
        },
        {
            question: "11. When is the best time to travel?",
            answer: "Spring (April–June) and fall (September–October) are popular seasons thanks to pleasant weather, colorful landscapes, and comfortable sightseeing conditions."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our experienced advisors provide expert recommendations, personalized planning, exclusive offers, and concierge-level service to help you create the perfect Cruise and Rail vacation."
        }
    ]

    const ucrjSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail",
                "name": "Uniworld Cruise and Rail Journeys",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail",
                "description": "Discover Uniworld Cruise and Rail Journeys combining luxury river cruises with iconic European train vacations. Learn what's included, destinations, pricing, pros, cons, and who these journeys are best for.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail#article"
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
                "description": "Luxury travel agency specializing in luxury river cruises, ocean cruises, expedition cruises, rail journeys, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail#article",
                "headline": "Uniworld Cruise and Rail Journeys",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail",
                "description": "Expert guide to Uniworld Cruise and Rail Journeys featuring luxury river cruises, scenic rail experiences, premium accommodations, destinations, pricing, and travel planning tips.",
                "image": "https://www.tripsshipsluxurytravel.com/images/uniworld-cruise-and-rail.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Cruise and Rail Vacation Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury Cruise and Rail Consulting",
                "description": "Expert planning services for luxury river cruises and scenic rail journeys, helping travelers choose the ideal itinerary, accommodations, and travel experience."
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
                        "name": "Uniworld Cruise and Rail Journeys",
                        "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/cruise-and-rail"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are Uniworld Cruise and Rail Journeys?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Uniworld Cruise and Rail Journeys combine luxury river cruising with premium scenic rail travel, allowing guests to experience Europe by both river and train in one seamless vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are train tickets included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Rail transportation is included as part of every Cruise and Rail Journey package."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which countries are included in Cruise and Rail Journeys?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Depending on the itinerary, journeys may include Switzerland, Germany, Austria, France, Hungary, Belgium, the Netherlands, and other European destinations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are hotels included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many itineraries include luxury hotel stays before or after the river cruise, depending on the specific package."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Uniworld Cruise and Rail Journey?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most itineraries include luxury river cruise accommodations, premium rail transportation, gourmet dining, unlimited premium beverages onboard, guided excursions, Wi-Fi, onboard gratuities, and personalized service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is luggage transferred between the train and ship?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most Cruise and Rail itineraries include coordinated luggage transfers between rail stations, hotels, and the river ship."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are meals included during the rail journey?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Meal inclusions vary by itinerary, but gourmet dining is included throughout the river cruise portion, with select rail journeys also including meals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is included aboard all Uniworld river cruise ships."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which rail journeys are the most scenic?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Swiss alpine rail routes are among the most popular, offering breathtaking mountain scenery, lakes, waterfalls, and charming villages."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is a Cruise and Rail Journey worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many travelers find Cruise and Rail Journeys worth the investment because they combine luxury river cruising, iconic train experiences, premium accommodations, and seamless travel planning into one vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should book a Uniworld Cruise and Rail Journey?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "These journeys are ideal for couples, retirees, luxury travelers, photography enthusiasts, food and wine lovers, and anyone looking for an immersive European vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When is the best time to book a Cruise and Rail Journey?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Booking 9 to 18 months in advance is recommended for the best cabin selection, promotional pricing, and availability on the most popular itineraries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert itinerary recommendations, personalized planning, exclusive offers, airfare coordination, hotel arrangements, and concierge-level service before, during, and after your vacation."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Cruise and Rail Journeys : Luxury River Cruises & Scenic Train Vacations</title>
                <meta name="title" content="Uniworld Cruise and Rail Journeys | Luxury River Cruise & Rail Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Cruise and Rail Journey? Discover what's included, pricing, destinations, luxury trains, pros, cons, and whether these unforgettable vacations are worth it."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ucrjSchemaData)}
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
                            <span>Uniworld Cruise and Rail Journeys</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Cruise and Rail Journeys</h1>
                        <p className="fcel-hero-subtitle">
                            Luxury River Cruises Combined with Europe's Most Scenic Train Adventures
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
                                <span className="fcel-eyebrow-label" style={{width:'290px'}}>LUXURY RAIL & RIVER GUIDE</span>
                                <h2 className="fcel-section-heading">Uniworld Cruise and Rail Journeys</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    If you've ever dreamed of cruising through Europe's legendary rivers and then continuing your journey aboard some of the world's most scenic trains, Uniworld Cruise and Rail Journeys offer the perfect combination of luxury, comfort, and unforgettable experiences.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    These carefully designed vacations combine Uniworld's award-winning boutique river cruises with iconic rail routes, allowing travelers to discover spectacular landscapes, charming villages, historic cities, and breathtaking mountain scenery—all without the stress of planning every detail.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UcrjPlaceholder label="Uniworld Cruise and Rail Journey Experience" />
                                <div className="fcel-intro-badge-float">
                                    <TrainFront size={15} style={{ marginRight: '6px' }} />
                                    <span>Cruise & Rail Guide</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Whether you're exploring Switzerland's alpine peaks, Germany's fairytale castles, or France's famous wine regions, Cruise and Rail Journeys deliver an effortless luxury vacation from beginning to end.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RATING SUMMARY SECTION */}
                <section className="ucrj-rating-section">
                    <div className="ucrj-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label ucrj-eyebrow-white" style={{width:'250px'}}>⭐ OUR OVERALL RATING</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="ucrj-rating-card">
                            <div className="ucrj-rating-grid">
                                <div className="ucrj-rating-item">
                                    <span className="ucrj-rating-label">Luxury</span>
                                    <span className="ucrj-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="ucrj-rating-item">
                                    <span className="ucrj-rating-label">Scenic Value</span>
                                    <span className="ucrj-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="ucrj-rating-item">
                                    <span className="ucrj-rating-label">Dining</span>
                                    <span className="ucrj-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="ucrj-rating-item">
                                    <span className="ucrj-rating-label">Rail Experience</span>
                                    <span className="ucrj-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="ucrj-rating-item">
                                    <span className="ucrj-rating-label">Service</span>
                                    <span className="ucrj-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="ucrj-rating-item">
                                    <span className="ucrj-rating-label">Value</span>
                                    <span className="ucrj-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="ucrj-rating-score-box">
                                <div className="ucrj-rating-score">9.8/10</div>
                                <div className="ucrj-rating-score-label">Overall Experience</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="ucrj-quick-answer-section">
                    <div className="ucrj-quick-answer-container">
                        <div className="ucrj-quick-answer-card">
                            <h3 className="ucrj-quick-answer-title">What Are Uniworld Cruise and Rail Journeys?</h3>
                            <p className="ucrj-quick-answer-text">
                                Uniworld Cruise and Rail Journeys combine an all-inclusive luxury river cruise with premium rail travel across Europe. Guests enjoy boutique accommodations aboard elegant river ships while also experiencing scenic train routes that showcase mountains, vineyards, lakes, and historic cities.
                            </p>
                            <p className="ucrj-quick-answer-text" style={{ fontSize: '15px', color: '#475569', margin: '0' }}>
                                These vacations are ideal for travelers who want to experience more of Europe without constantly changing hotels or arranging complicated transportation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA 1 (INLINE CTA) */}
                <section className="ucrj-inline-cta-section">
                    <div className="ucrj-inline-cta-container">
                        <span className="ucrj-inline-cta-tag">Expert Planning</span>
                        <p className="ucrj-inline-cta-text">Ready to combine luxury river cruising with scenic European rail travel?</p>
                        <div className="ucrj-inline-cta-btn-row">
                            <Link to="/contact" className="ucrj-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="ucrj-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A CRUISE AND RAIL JOURNEY (BENEFITS) */}
                <section className="ucrj-benefits-section ucrj-bg-white">
                    <div className="ucrj-benefits-container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span className="fcel-eyebrow-label">THE ADVANTAGE</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Why Choose a Cruise and Rail Journey?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Instead of choosing between a river cruise or a rail vacation, Uniworld allows you to experience both. The result is one unforgettable European vacation.
                            </p>
                        </div>
                        <div className="ucrj-benefits-grid">
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Ship size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Luxury Boutique River Cruising</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <TrainFront size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Scenic European Rail Journeys</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Compass size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Seamless Transportation</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Home size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Fewer Hotel Changes</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Map size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Guided Sightseeing</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Bed size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Premium Accommodations</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Smile size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Personalized Service</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <ShieldCheck size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Stress-Free Travel Planning</h4>
                            </div>
                            <div className="ucrj-benefit-card">
                                <div className="ucrj-benefit-icon-wrap">
                                    <Landmark size={20} />
                                </div>
                                <h4 className="ucrj-benefit-title">Exceptional Cultural Experiences</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT IS INCLUDED */}
                <section className="ucrj-included-section ucrj-bg-soft">
                    <div className="ucrj-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label ucrj-eyebrow-white">INCLUSIONS</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>What Is Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Most Cruise and Rail itineraries include:
                            </p>
                        </div>
                        <ul className="ucrj-included-list">
                            {[
                                'Luxury river cruise accommodations',
                                'Premium rail transportation',
                                'Gourmet dining',
                                'Unlimited premium beverages onboard',
                                'Shore excursions',
                                'Complimentary Wi-Fi',
                                'Airport transfers on select itineraries',
                                'Gratuities onboard',
                                'Personalized concierge service',
                                'Luxury hotel stays on select journeys'
                            ].map((item, idx) => (
                                <li key={idx} className="ucrj-included-item">
                                    <CheckCircle size={16} className="ucrj-included-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="fcel-lead-paragraph" style={{ textAlign: 'center', marginTop: '24px', fontSize: '15px', color: '#475569' }}>
                            Inclusions vary depending on the itinerary.
                        </p>
                    </div>
                </section>

                {/* THE BEST OF EUROPE BY RAIL */}
                <section className="ucrj-review-section ucrj-bg-white">
                    <div className="ucrj-review-container">
                        <div className="ucrj-cabins-container">
                            <div className="ucrj-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{width:'210px'}}>SCENIC RAIL TRAVEL</span>
                                <h2 className="ucrj-review-title" style={{ textAlign: 'left', margin: '0 0 16px 0' }}>The Best of Europe by Rail</h2>
                                <p className="fcel-lead-paragraph">
                                    One of the highlights of these vacations is traveling aboard some of Europe's most spectacular railway routes. Imagine watching snow-covered alpine peaks, crystal-clear lakes, medieval villages, vineyards, and dramatic mountain passes from the comfort of panoramic rail cars.
                                </p>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: '10px' }}>
                                    Popular rail regions include:
                                </p>
                                <div className="ucrj-cabin-feature-grid">
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Mountain size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Switzerland</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Mountain size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Austria</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Mountain size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Germany</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Mountain size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">France</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Mountain size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Central Europe</span>
                                    </div>
                                </div>
                                <p className="fcel-lead-paragraph" style={{ marginTop: '24px', marginBottom: 0 }}>
                                    Every journey offers incredible scenery that simply can't be experienced by river cruise alone.
                                </p>
                            </div>
                            <div className="ucrj-image-wrapper-premium">
                                <div className="ucrj-badge-overlay-gold">
                                    <TrainFront size={14} />
                                    <span>Scenic Rail</span>
                                </div>
                                <UcrjPlaceholder label="Scenic European Rail Journey" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY RIVER CRUISING WITH UNIWORLD */}
                <section className="ucrj-review-section ucrj-bg-soft">
                    <div className="ucrj-review-container">
                        <div className="ucrj-cabins-container ucrj-cabins-container-reverse">
                            <div className="ucrj-image-wrapper-premium">
                                <div className="ucrj-badge-overlay-gold">
                                    <Ship size={14} />
                                    <span>Boutique Ship</span>
                                </div>
                                <UcrjPlaceholder label="Uniworld Boutique River Ship" />
                            </div>
                            <div className="ucrj-review-copy-col">
                                <span className="fcel-eyebrow-label ucrj-eyebrow-white" style={{width:'240px'}}>BOUTIQUE RIVER SHIPS</span>
                                <h2 className="ucrj-review-title" style={{ textAlign: 'left', margin: '0 0 16px 0' }}>Luxury River Cruising with Uniworld</h2>
                                <p className="fcel-lead-paragraph">
                                    After your rail adventure, you'll step aboard one of Uniworld's beautifully designed boutique river ships. Each ship is designed to reflect the destinations it visits, creating an immersive travel experience unlike any other.
                                </p>
                                <div className="ucrj-cabin-feature-grid-3col">
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Ship size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Individually designed ships</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Bed size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Spacious staterooms and suites</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Smile size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Butler service in select accommodations</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Utensils size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Farm-to-table cuisine</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Wine size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Regional wines</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Award size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Award-winning hospitality</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Compass size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Included shore excursions</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Elegant public spaces</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Smile size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Relaxed luxury atmosphere</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* POPULAR DESTINATIONS */}
                <section className="ucrj-dest-section">
                    <div className="ucrj-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHERE YOU'LL TRAVEL</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Popular Cruise and Rail Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
                                Depending on the itinerary, your vacation may include the destinations below. Many journeys combine multiple countries into one seamless vacation.
                            </p>
                        </div>
                        <div className="ucrj-dest-grid">
                            {[
                                { name: 'Switzerland', icon: <Mountain size={24} /> },
                                { name: 'Germany', icon: <Landmark size={24} /> },
                                { name: 'Austria', icon: <Mountain size={24} /> },
                                { name: 'France', icon: <Wine size={24} /> },
                                { name: 'Netherlands', icon: <Globe size={24} /> },
                                { name: 'Belgium', icon: <Compass size={24} /> },
                                { name: 'Hungary', icon: <Map size={24} /> },
                                { name: 'Czech Republic', icon: <Trees size={24} /> }
                            ].map((dest, idx) => (
                                <div key={idx} className="ucrj-dest-card">
                                    <div className="ucrj-dest-icon-wrap">
                                        {dest.icon}
                                    </div>
                                    <h4 className="ucrj-dest-name">{dest.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA 2 (INLINE CTA) */}
                <section className="ucrj-inline-cta-section">
                    <div className="ucrj-inline-cta-container">
                        <span className="ucrj-inline-cta-tag">Multi-Country Journeys</span>
                        <p className="ucrj-inline-cta-text">Want help choosing the right Cruise and Rail destinations for your trip?</p>
                        <div className="ucrj-inline-cta-btn-row">
                            <Link to="/contact" className="ucrj-btn-primary">
                                <Phone size={18} />
                                Speak to a Travel Advisor
                            </Link>
                            <Link to="/contact" className="ucrj-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH IT */}
                <section className="ucrj-worth-section ucrj-bg-white">
                    <div className="ucrj-worth-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <span className="fcel-eyebrow-label">THE VERDICT</span>
                        <h2 className="fcel-section-heading" style={{ margin: '10px 0 20px 0' }}>Is a Cruise and Rail Journey Worth It?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            For many travelers, absolutely. Instead of spending valuable vacation time coordinating flights, trains, hotels, and transfers, everything is professionally organized into one luxury experience.
                        </p>
                        <p className="fcel-lead-paragraph">
                            The combination of river cruising and scenic rail travel provides incredible variety while maintaining the comfort and personalized service that Uniworld is known for.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Although Cruise and Rail Journeys generally cost more than a standard river cruise, many guests find the added convenience, unique experiences, and exceptional value well worth the investment.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="ucrj-pros-section ucrj-bg-soft">
                    <div className="ucrj-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <span className="fcel-eyebrow-label ucrj-eyebrow-white">PROS & CONS</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        {/* Pros */}
                        <div className="ucrj-pros-grid">
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Ship size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Combines Two Luxury Vacations Into One</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Mountain size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Spectacular Scenic Rail Routes</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Bed size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Boutique Luxury River Ships</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Smile size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Exceptional Service</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Utensils size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Gourmet Dining</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <ShieldCheck size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Stress-Free Travel Planning</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Award size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Premium Accommodations</h4>
                            </div>
                            <div className="ucrj-pro-card">
                                <div className="ucrj-pro-icon-wrap">
                                    <Landmark size={20} />
                                </div>
                                <h4 className="ucrj-pro-title">Excellent Cultural Experiences</h4>
                            </div>
                        </div>

                        {/* Cons */}
                        <div className="ucrj-cons-heading-wrap" style={{ textAlign: 'center', margin: '60px 0 40px 0' }}>
                            <h3 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Cons</h3>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="ucrj-cons-grid">
                            <div className="ucrj-con-card">
                                <h4 className="ucrj-con-title">
                                    <AlertTriangle size={18} />
                                    Higher Price
                                </h4>
                                <p className="ucrj-con-desc">
                                    Higher price than standard river cruises.
                                </p>
                            </div>
                            <div className="ucrj-con-card">
                                <h4 className="ucrj-con-title">
                                    <AlertTriangle size={18} />
                                    Limited Departures
                                </h4>
                                <p className="ucrj-con-desc">
                                    Limited departures each year.
                                </p>
                            </div>
                            <div className="ucrj-con-card">
                                <h4 className="ucrj-con-title">
                                    <AlertTriangle size={18} />
                                    Popular Itineraries Sell Out
                                </h4>
                                <p className="ucrj-con-desc">
                                    Popular itineraries often sell out well in advance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD BOOK / AUDIENCE */}
                <section className="ucrj-audience-section">
                    <div className="ucrj-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label ucrj-eyebrow-white">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Who Should Book a Cruise and Rail Journey?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="ucrj-audience-grid">
                            <div className="ucrj-audience-column ucrj-audience-green">
                                <h4 className="ucrj-audience-title">These Vacations Are Perfect For</h4>
                                <ul className="ucrj-audience-list">
                                    {['Couples', 'Luxury travelers', 'Anniversary celebrations', 'Bucket-list vacations', 'Retirees', 'Photography enthusiasts', 'Food and wine lovers', 'First-time European travelers'].map((item, idx) => (
                                        <li key={idx} className="ucrj-audience-item">
                                            <CheckCircle size={18} className="ucrj-audience-check" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ucrj-audience-column ucrj-audience-red">
                                <h4 className="ucrj-audience-title">Who May Prefer Another Vacation?</h4>
                                <ul className="ucrj-audience-list">
                                    {['Prefer budget-friendly vacations', 'Want a beach-focused holiday', 'Enjoy large ocean cruise ships', 'Prefer independent travel without guided experiences'].map((item, idx) => (
                                        <li key={idx} className="ucrj-audience-item">
                                            <XCircle size={18} className="ucrj-audience-cross" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="ucrj-review-section ucrj-bg-soft">
                    <div className="ucrj-review-container">
                        <div className="ucrj-cabins-container">
                            <div className="ucrj-review-copy-col">
                                <span className="fcel-eyebrow-label ucrj-eyebrow-white" style={{width:'230px'}}>INVESTMENT & VALUE</span>
                                <h2 className="ucrj-review-title" style={{ textAlign: 'left', margin: '0 0 16px 0' }}>How Much Do Cruise and Rail Journeys Cost?</h2>
                                <p className="fcel-lead-paragraph">
                                    Pricing varies based on the itinerary, travel season, suite category, and rail experience. Generally, Cruise and Rail Journeys are priced above standard river cruises because they include luxury rail travel, additional accommodations, transfers, and premium services.
                                </p>
                                <p className="fcel-lead-paragraph" style={{ marginBottom: '10px' }}>
                                    Booking early often provides the best availability and promotional offers.
                                </p>
                                <div className="ucrj-cabin-feature-grid">
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <TrainFront size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Luxury rail travel</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Bed size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Additional accommodations</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Luggage size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Transfers included</span>
                                    </div>
                                    <div className="ucrj-cabin-feature-card">
                                        <div className="ucrj-cabin-card-icon">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="ucrj-cabin-card-text">Premium services</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ucrj-image-wrapper-premium">
                                <div className="ucrj-badge-overlay-gold">
                                    <Coins size={14} />
                                    <span>Pricing Guide</span>
                                </div>
                                <UcrjPlaceholder label="Uniworld Cruise and Rail Pricing" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* PLANNING TIPS */}
                <section className="ucrj-tips-section ucrj-bg-white">
                    <div className="ucrj-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">PLAN AHEAD</span>
                            <h2 className="fcel-section-heading" style={{ margin: '10px 0 15px 0' }}>Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                To get the most from your vacation:
                            </p>
                        </div>
                        <ul className="ucrj-tips-list">
                            <li className="ucrj-tips-item">
                                <Clock size={18} className="ucrj-tips-icon" />
                                <span>Reserve 9–18 months in advance for popular departures.</span>
                            </li>
                            <li className="ucrj-tips-item">
                                <Sun size={18} className="ucrj-tips-icon" />
                                <span>Travel in spring or fall for mild weather and beautiful scenery.</span>
                            </li>
                            <li className="ucrj-tips-item">
                                <Bed size={18} className="ucrj-tips-icon" />
                                <span>Consider upgrading to a suite for additional space and butler service.</span>
                            </li>
                            <li className="ucrj-tips-item">
                                <Luggage size={18} className="ucrj-tips-icon" />
                                <span>Pack layers for changing mountain and river climates.</span>
                            </li>
                            <li className="ucrj-tips-item">
                                <Map size={18} className="ucrj-tips-icon" />
                                <span>Allow extra time before or after your trip to explore your embarkation or disembarkation city.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* CTA 3 (INLINE CTA) */}
                <section className="ucrj-inline-cta-section">
                    <div className="ucrj-inline-cta-container">
                        <span className="ucrj-inline-cta-tag">Promotions & Rates</span>
                        <p className="ucrj-inline-cta-text">Ready to lock in the best suite promotions and rail upgrades?</p>
                        <div className="ucrj-inline-cta-btn-row">
                            <Link to="/contact" className="ucrj-btn-primary">
                                <Phone size={18} />
                                Get a Custom Quote
                            </Link>
                            <Link to="/contact" className="ucrj-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="ucrj-why-book-section ucrj-bg-soft">
                    <div className="ucrj-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label ucrj-eyebrow-white">PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading" style={{ margin: '1px 0 10px 0' }}>Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Planning a Cruise and Rail Journey involves selecting the right itinerary, cabin category, rail experience, and travel dates. Our goal is to make every detail of your journey effortless.
                            </p>
                        </div>
                        <div className="ucrj-why-book-grid">
                            <div className="ucrj-why-book-card">
                                <div className="ucrj-why-book-icon">
                                    <Map size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Compare Itineraries</h4>
                                <p className="ucrj-why-book-desc">We help you compare Cruise and Rail itineraries to find the perfect fit for your travel style.</p>
                            </div>
                            <div className="ucrj-why-book-card">
                                <div className="ucrj-why-book-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Choose the Best Suite</h4>
                                <p className="ucrj-why-book-desc">Receive professional guidance selecting the perfect cabin category and butler services.</p>
                            </div>
                            <div className="ucrj-why-book-card">
                                <div className="ucrj-why-book-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Arrange Airfare & Hotels</h4>
                                <p className="ucrj-why-book-desc">Coordinate complex international flights alongside luxury hotel stays.</p>
                            </div>
                            <div className="ucrj-why-book-card">
                                <div className="ucrj-why-book-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Coordinate Transfers</h4>
                                <p className="ucrj-why-book-desc">We arrange seamless transfers between hotels, trains, and your river ship.</p>
                            </div>
                            <div className="ucrj-why-book-card">
                                <div className="ucrj-why-book-icon">
                                    <Award size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Secure Exclusive Promotions</h4>
                                <p className="ucrj-why-book-desc">Access exclusive pricing, shipboard credits, and limited-time promotional offers.</p>
                            </div>
                            <div className="ucrj-why-book-card">
                                <div className="ucrj-why-book-icon">
                                    <CheckCircle size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Customize Pre- & Post-Cruise Stays</h4>
                                <p className="ucrj-why-book-desc">Personalize land extensions and stays around your travel preferences.</p>
                            </div>
                            <div className="ucrj-why-book-card" style={{ gridColumn: 'span 3' }}>
                                <div className="ucrj-why-book-icon">
                                    <Users size={20} />
                                </div>
                                <h4 className="ucrj-why-book-title">Concierge-Level Support</h4>
                                <p className="ucrj-why-book-desc">Provide concierge-level support before, during, and after your vacation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="ucrj-worth-section ucrj-bg-white">
                    <div className="ucrj-worth-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                        <span className="fcel-eyebrow-label" style={{width:'250px'}}>OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading" style={{ margin: '10px 0 20px 0' }}>Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div style={{ color: '#f1c40f', fontSize: '32px', marginBottom: '24px' }}>⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph" style={{ fontSize: '20px', fontWeight: '500', color: 'var(--ucrj-navy)', lineHeight: '1.7' }}>
                            If you're looking for one of the most immersive ways to explore Europe, Uniworld Cruise and Rail Journeys are an exceptional choice.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Combining boutique river cruising with world-famous scenic rail routes creates a vacation filled with luxury, breathtaking landscapes, outstanding cuisine, and unforgettable cultural experiences. For travelers seeking a once-in-a-lifetime European adventure, these journeys deliver remarkable value and lasting memories.
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
                            {ucrjFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => ucrjToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {ucrjActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {ucrjActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your Uniworld Cruise and Rail Journey?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury travel specialists to compare itineraries, choose the best suite, and coordinate every detail of your rail and river adventure.
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

export default UniworldCruiseAndRailJourneys