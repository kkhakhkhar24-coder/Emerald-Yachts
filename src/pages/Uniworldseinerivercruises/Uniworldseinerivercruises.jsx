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
import './Uniworldseinerivercruises.css'
import normandyBeachesImg from '../../assets/Uniworldseinerivercruises/mont-saint-michel-france-normandy-dusk-reflection-travel-photography.webp'
import {
    Ship, Star, Sparkles, Phone, LayoutList, Heart,
    CheckCircle, ChevronRight, Globe, Award, Utensils, Wine,
    Bed, Compass, Gift, Smile, ShieldCheck, XCircle, AlertTriangle,
    Image as ImageIcon, Map, Sun, Trees, Bath, Bell, Coffee, Activity, Coins,
    Landmark, Castle, Flower2, Anchor, Snowflake, Clock, Calendar, MapPin
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function UsrcPlaceholder({ label, className = '' }) {
    return (
        <div className={`usrc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldSeineRiverCruises() {
    const [usrcActiveFaq, setUsrcActiveFaq] = useState(null)
    const usrcToggleFaq = (index) => {
        setUsrcActiveFaq(usrcActiveFaq === index ? null : index)
    }

    const usrcFaqs = [
        {
            question: "1. Is a Uniworld Seine River Cruise worth the money?",
            answer: "Yes. It offers luxury accommodations, gourmet dining, premium beverages, excursions, and personalized service in one all-inclusive vacation."
        },
        {
            question: "2. What is included on a Seine River Cruise?",
            answer: "Accommodations, dining, drinks, Wi-Fi, excursions, gratuities, and entertainment."
        },
        {
            question: "3. Does the cruise visit Paris?",
            answer: "Yes. Most itineraries begin or end in Paris."
        },
        {
            question: "4. Can I visit the Normandy Beaches?",
            answer: "Yes. Guided excursions to the historic D-Day beaches are available on many itineraries."
        },
        {
            question: "5. Does the cruise visit Monet's Garden?",
            answer: "Yes. Many itineraries include Giverny and Monet's famous gardens."
        },
        {
            question: "6. Are drinks included?",
            answer: "Yes. Premium beverages are included."
        },
        {
            question: "7. Does Uniworld include gratuities?",
            answer: "Yes."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes."
        },
        {
            question: "9. When is the best time to cruise the Seine?",
            answer: "Spring and fall offer ideal weather and fewer crowds."
        },
        {
            question: "10. Who should choose this itinerary?",
            answer: "Couples, luxury travelers, history enthusiasts, and food lovers."
        },
        {
            question: "11. Is the Seine River Cruise good for first-time visitors to France?",
            answer: "Absolutely. It combines Paris, Normandy, and charming French villages in one itinerary."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors provide expert recommendations, exclusive offers, personalized planning, and concierge-level service."
        }
    ]

    const usrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/seine",
                "name": "Uniworld Seine River Cruises: Paris and Normandy",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/seine",
                "description": "Discover Uniworld Seine River Cruises featuring Paris, Normandy, luxury boutique ships, gourmet French cuisine, iconic excursions, and all-inclusive river cruise experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/seine#article"
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
                "@id": "https://www.tripsandships.com/uniworld-river-cruises/seine#article",
                "headline": "Uniworld Seine River Cruises: Paris and Normandy",
                "url": "https://www.tripsandships.com/uniworld-river-cruises/seine",
                "description": "Expert guide to Uniworld Seine River Cruises featuring Paris, Normandy, itineraries, pricing, dining, excursions, and luxury travel planning.",
                "image": "https://www.tripsandships.com/images/uniworld-seine-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsandships.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsandships.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsandships.com/uniworld-river-cruises/seine"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Seine River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsandships.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Seine River cruises, helping travelers choose the best Paris and Normandy itinerary."
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
                        "name": "Uniworld Seine River Cruises",
                        "item": "https://www.tripsandships.com/uniworld-river-cruises/seine"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a Uniworld Seine River Cruise worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It combines luxury accommodations, gourmet dining, premium beverages, guided excursions, and personalized service into an all-inclusive vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Uniworld Seine River Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury accommodations, gourmet dining, unlimited premium beverages, Wi-Fi, excursions, gratuities, and entertainment are included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the cruise visit Paris?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most itineraries begin or end in Paris."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I visit the Normandy Beaches?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many itineraries include guided excursions to the historic D-Day landing beaches."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the cruise visit Monet's Garden?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Many itineraries include an excursion to Giverny and Monet's Gardens."
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
                        "name": "When is the best time to cruise the Seine?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Spring and fall are ideal for pleasant weather, gardens, and fewer crowds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should choose a Seine River Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Couples, luxury travelers, history enthusiasts, art lovers, and food lovers will especially enjoy this itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this itinerary good for first-time visitors to France?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It combines Paris, Normandy, charming villages, and iconic French cultural experiences in one itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert itinerary planning, exclusive offers, personalized recommendations, and concierge-level service before, during, and after your cruise."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Uniworld Seine River Cruises: Paris & Normandy  | Prices, Itineraries & Expert Guide</title>
                <meta name="title" content="Uniworld Seine River Cruises | Paris & Normandy Luxury Cruise Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Seine River Cruise? Discover Paris and Normandy itineraries, pricing, what's included, top excursions, reviews, and whether it's worth booking."
                />
                <script type="application/ld+json">
                    {JSON.stringify(usrcSchemaData)}
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
                            <span>Uniworld Seine River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Seine River Cruises: Paris & Normandy</h1>
                        <p className="fcel-hero-subtitle">
                            Luxury boutique river cruising through France's most iconic destinations.
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
                                <span className="fcel-eyebrow-label">SEINE RIVER CRUISE GUIDE</span>
                                <h2 className="fcel-section-heading">Uniworld Seine River Cruises: Paris & Normandy</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    The Seine River flows through the historic heart of northern France, offering a magical journey through art, culture, and history. A Uniworld Seine River Cruise provides a premier way to experience the romance of Paris and the storied shores of Normandy in unparalleled boutique luxury.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    From the iconic monuments of the City of Light to the beautiful gardens of Giverny that inspired Claude Monet, and the moving landing beaches of Normandy, every bend of the river brings a new adventure. Onboard, guests enjoy gourmet French-inspired dining, all-inclusive premium drinks, and the signature personalized service of Uniworld's elegant floating boutique hotels.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Whether you are a history buff, an art enthusiast, or a lover of fine food and wine, this itinerary offers an unforgettable French escape.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <UsrcPlaceholder label="Uniworld Seine River Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Seine Cruise Review Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    A Uniworld Seine River Cruise is one of the best ways to experience Paris and Normandy in luxury.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OVERALL RATING SECTION */}
                <section className="usrc-rating-section">
                    <div className="usrc-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label usrc-eyebrow-onsoft">⭐ OVERALL RATING</span>
                            <h2 className="fcel-section-heading">Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="usrc-rating-card">
                            <div className="usrc-rating-grid">
                                <div className="usrc-rating-item">
                                    <span className="usrc-rating-label">Luxury</span>
                                    <span className="usrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="usrc-rating-item">
                                    <span className="usrc-rating-label">Dining</span>
                                    <span className="usrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="usrc-rating-item">
                                    <span className="usrc-rating-label">Service</span>
                                    <span className="usrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="usrc-rating-item">
                                    <span className="usrc-rating-label">Excursions</span>
                                    <span className="usrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="usrc-rating-item">
                                    <span className="usrc-rating-label">Scenic Beauty</span>
                                    <span className="usrc-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                                <div className="usrc-rating-item">
                                    <span className="usrc-rating-label">Value</span>
                                    <span className="usrc-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="usrc-rating-score-box">
                                <div className="usrc-rating-score">9.8/10</div>
                                <div className="usrc-rating-score-label">Overall Rating</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION (FEATURED SNIPPET) */}
                <section className="usrc-quick-answer-section">
                    <div className="usrc-quick-answer-container">
                        <div className="usrc-quick-answer-card">
                            <span className="fcel-eyebrow-label">FEATURED SNIPPET</span>
                            <h3 className="usrc-quick-answer-title">Is a Uniworld Seine River Cruise Worth It?</h3>
                            <p className="usrc-quick-answer-text">
                                Yes. A Uniworld Seine River Cruise is one of the best ways to experience Paris and Normandy in luxury. Guests enjoy boutique accommodations, gourmet French cuisine, premium beverages, immersive excursions, and visits to iconic destinations including Paris, Rouen, Honfleur, and the Normandy Beaches.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 1 */}
                <section className="usrc-inline-cta-section">
                    <div className="usrc-inline-cta-container">
                        <span className="usrc-inline-cta-tag">Expert Planning</span>
                        <p className="usrc-inline-cta-text">Ready to explore Paris and Normandy in Uniworld luxury?</p>
                        <div className="usrc-inline-cta-btn-row">
                            <Link to="/contact" className="usrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="usrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>
                {/* WHY CHOOSE A SEINE RIVER CRUISE */}
                <section className="usrc-choice-section usrc-bg-white">
                    <div className="usrc-choice-container">
                        <div className="usrc-split-layout usrc-split-layout-reverse">
                            <div className="usrc-split-image-col">
                                <div className="usrc-image-wrapper-premium">
                                    <div className="usrc-badge-overlay-gold">
                                        <Compass size={14} />
                                        <span>France In Luxury</span>
                                    </div>
                                    <UsrcPlaceholder label="Scenic Landscapes along the Seine River" />
                                </div>
                            </div>
                            <div className="usrc-split-copy-col">
                                <span className="fcel-eyebrow-label">FRANCE IN LUXURY</span>
                                <h2 className="fcel-section-heading" style={{ textAlign: 'left' }}>Why Choose a Seine River Cruise?</h2>
                                <div className="fcel-heading-bar" style={{ marginLeft: '0' }}></div>
                                <div className="usrc-check-grid usrc-check-grid-split" style={{ marginTop: '20px' }}>
                                    {['Paris & Normandy together', 'WWII history', 'French culture', 'Wine & cuisine', 'Charming villages', 'Art & Impressionism', 'Boutique luxury ships', 'Relaxed pace'].map((item, idx) => (
                                        <div key={idx} className="usrc-check-item">
                                            <CheckCircle size={18} className="usrc-check-icon" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="usrc-choice-section usrc-bg-soft">
                    <div className="usrc-choice-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label usrc-eyebrow-onsoft">ALL-INCLUSIVE LUXURY</span>
                            <h2 className="fcel-section-heading">What's Included</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="usrc-check-grid">
                            {['Luxury accommodations', 'Gourmet dining', 'Unlimited premium beverages', 'Guided excursions', 'Wi-Fi', 'Gratuities', 'Entertainment', 'Airport transfers (select sailings)', 'Complimentary bicycles'].map((item, idx) => (
                                <div key={idx} className="usrc-check-item">
                                    <CheckCircle size={18} className="usrc-check-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOP DESTINATIONS */}
                <section className="usrc-dest-section usrc-bg-white">
                    <div className="usrc-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WORLD CLASS RIVERWAYS</span>
                            <h2 className="fcel-section-heading">Top Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="usrc-dest-grid">
                            {[
                                { name: 'Paris', desc: 'The City of Light with world-famous landmarks.', icon: <Landmark size={24} /> },
                                { name: 'Rouen', desc: 'Historic medieval city linked to Joan of Arc.', icon: <Castle size={24} /> },
                                { name: 'Honfleur', desc: 'Picturesque harbor town loved by Impressionist painters.', icon: <Anchor size={24} /> },
                                { name: 'Normandy Beaches', desc: 'Visit Omaha Beach and other historic D-Day sites.', icon: <ShieldCheck size={24} />, img: normandyBeachesImg },
                                { name: 'Vernon', desc: "Gateway to Monet's Gardens at Giverny.", icon: <Flower2 size={24} /> },
                                { name: 'La Roche-Guyon', desc: 'Beautiful riverside village and castle.', icon: <Castle size={24} /> }
                            ].map((dest, idx) => (
                                <div key={idx} className="usrc-dest-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'left' }}>
                                    <div style={{ height: '180px', width: '100%', position: 'relative', background: '#e2e8f0', overflow: 'hidden' }}>
                                        {dest.img ? (
                                            <img src={dest.img} alt={dest.name} className="usrc-dest-img" />
                                        ) : (
                                            <UsrcPlaceholder label={`${dest.name} View`} className="usrc-placeholder-card" />
                                        )}
                                        <div className="usrc-badge-overlay-gold" style={{ top: '15px', right: '15px', fontSize: '11px', padding: '4px 10px' }}>
                                            {dest.icon}
                                            <span style={{ marginLeft: '6px' }}>{dest.name}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '24px' }}>
                                        <h4 className="usrc-dest-name" style={{ margin: '0 0 10px 0' }}>{dest.name}</h4>
                                        <p className="usrc-dest-desc">{dest.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 2 */}
                <section className="usrc-inline-cta-section">
                    <div className="usrc-inline-cta-container">
                        <span className="usrc-inline-cta-tag">Itinerary Planning</span>
                        <p className="usrc-inline-cta-text">Want help choosing the perfect Seine itinerary and sailing date?</p>
                        <div className="usrc-inline-cta-btn-row">
                            <Link to="/contact" className="usrc-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="usrc-btn-outline">
                                <LayoutList size={18} />
                                Compare Itineraries
                            </Link>
                        </div>
                    </div>
                </section>

                {/* DINING */}
                <section className="usrc-review-section usrc-dining-dark-section">
                    <div className="usrc-review-container">
                        <div className="usrc-dining-container">
                            <div className="usrc-image-wrapper-premium">
                                <div className="usrc-badge-overlay-gold">
                                    <Utensils size={14} />
                                    <span>French Cuisine</span>
                                </div>
                                <UsrcPlaceholder label="Uniworld Seine River Cruise Dining" />
                            </div>
                            <div className="usrc-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{ width: "230px" }}>CULINARY EXCELLENCE</span>
                                <h2 className="usrc-review-title">Dining</h2>
                                <p className="fcel-lead-paragraph" style={{ color: "white" }}>
                                    French-inspired cuisine featuring:
                                </p>
                                <div className="usrc-dining-menu-list">
                                    {[
                                        { text: 'Regional specialties', icon: <Globe size={20} /> },
                                        { text: 'Fine wines', icon: <Wine size={20} /> },
                                        { text: 'Fresh pastries', icon: <Coffee size={20} /> },
                                        { text: 'Multi-course dinners', icon: <Utensils size={20} /> },
                                        { text: 'Farm-to-table ingredients', icon: <Trees size={20} /> }
                                    ].map((course, idx) => (
                                        <div key={idx} className="usrc-dining-course-card">
                                            <div className="usrc-dining-course-icon">
                                                {course.icon}
                                            </div>
                                            <span className="usrc-dining-course-text">{course.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS */}
                <section className="usrc-review-section usrc-bg-soft">
                    <div className="usrc-review-container">
                        <div className="usrc-cabins-container">
                            <div className="usrc-review-copy-col">
                                <span className="fcel-eyebrow-label usrc-eyebrow-onsoft">ACCOMMODATIONS</span>
                                <h2 className="usrc-review-title" style={{ textAlign: "left" }}>Luxury Accommodations</h2>
                                <div className="usrc-cabin-feature-grid">
                                    {[
                                        { text: 'Boutique staterooms', icon: <Bed size={20} /> },
                                        { text: 'Butler service (selected suites)', icon: <Bell size={20} /> },
                                        { text: 'Marble bathrooms', icon: <Bath size={20} /> },
                                        { text: 'Luxury bedding', icon: <Sparkles size={20} /> },
                                        { text: 'French balconies', icon: <Award size={20} /> }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="usrc-cabin-feature-card">
                                            <div className="usrc-cabin-card-icon">
                                                {feature.icon}
                                            </div>
                                            <span className="usrc-cabin-card-text">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="usrc-image-wrapper-premium">
                                <div className="usrc-badge-overlay-gold">
                                    <Sparkles size={14} />
                                    <span>Boutique Comfort</span>
                                </div>
                                <UsrcPlaceholder label="Uniworld Luxury Cabin / Suite Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 3 */}
                <section className="usrc-inline-cta-section">
                    <div className="usrc-inline-cta-container">
                        <span className="usrc-inline-cta-tag">Suite Upgrades</span>
                        <p className="usrc-inline-cta-text">Curious about butler suites and French Balcony cabins?</p>
                        <div className="usrc-inline-cta-btn-row">
                            <Link to="/contact" className="usrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="usrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE */}
                <section className="usrc-dest-section usrc-bg-white">
                    <div className="usrc-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time to Cruise</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="usrc-dest-grid usrc-seasons-grid">
                            {[
                                { name: 'Spring', desc: "Flowers and Monet's Gardens.", icon: <Flower2 size={24} /> },
                                { name: 'Summer', desc: 'Warm weather and long sightseeing days.', icon: <Sun size={24} /> },
                                { name: 'Fall', desc: 'Wine harvest and colorful countryside.', icon: <Trees size={24} /> },
                                { name: 'Christmas', desc: 'Festive Paris holiday atmosphere.', icon: <Snowflake size={24} /> }
                            ].map((season, idx) => (
                                <div key={idx} className="usrc-dest-card">
                                    <div className="usrc-dest-icon-wrap">
                                        {season.icon}
                                    </div>
                                    <h4 className="usrc-dest-name">{season.name}</h4>
                                    <p className="usrc-dest-desc">{season.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY */}
                <section className="usrc-verdict-section usrc-bg-soft">
                    <div className="usrc-verdict-container">
                        <span className="fcel-eyebrow-label usrc-eyebrow-onsoft">VALUE ASSESSMENT</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="usrc-verdict-stars">⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Uniworld delivers exceptional value through its nearly all-inclusive luxury experience, personalized service, and unique French cultural immersion.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS */}
                <section className="usrc-pros-section usrc-bg-white">
                    <div className="usrc-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label">PROS & CONS</span>
                            <h2 className="fcel-section-heading">Pros & Cons</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>

                        <div className="usrc-comparison-board">
                            {/* Pros Panel */}
                            <div className="usrc-pros-panel">
                                <h3 className="usrc-panel-title pros-title">
                                    <CheckCircle size={22} />
                                    What We Love (Pros)
                                </h3>
                                <div className="usrc-panel-list">
                                    {[
                                        { title: 'Paris included', icon: <Landmark size={20} /> },
                                        { title: 'Normandy excursions', icon: <Compass size={20} /> },
                                        { title: 'Excellent cuisine', icon: <Utensils size={20} /> },
                                        { title: 'Boutique luxury', icon: <Ship size={20} /> },
                                        { title: 'Outstanding service', icon: <Smile size={20} /> },
                                        { title: 'Historic experiences', icon: <ShieldCheck size={20} /> }
                                    ].map((pro, idx) => (
                                        <div key={idx} className="usrc-list-item">
                                            <div className="usrc-item-icon-wrap pro-icon">
                                                {pro.icon}
                                            </div>
                                            <div className="usrc-item-content">
                                                <h4 className="usrc-item-title">{pro.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cons Panel */}
                            <div className="usrc-cons-panel">
                                <h3 className="usrc-panel-title cons-title">
                                    <AlertTriangle size={22} />
                                    Things to Consider (Cons)
                                </h3>
                                <div className="usrc-panel-list">
                                    {[
                                        'Premium pricing',
                                        'Smaller ships',
                                        'Popular departures sell out early',
                                        'More traditional decor (may not appeal to minimalists)',
                                        'Smaller fitness and wellness facilities',
                                        'Fewer onboard activities compared to ocean liners'
                                    ].map((con, idx) => (
                                        <div key={idx} className="usrc-list-item">
                                            <div className="usrc-item-icon-wrap con-icon">
                                                <XCircle size={18} />
                                            </div>
                                            <div className="usrc-item-content">
                                                <h4 className="usrc-item-title">{con}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 4 */}
                <section className="usrc-inline-cta-section">
                    <div className="usrc-inline-cta-container">
                        <span className="usrc-inline-cta-tag">Promotions & Rates</span>
                        <p className="usrc-inline-cta-text">Ready to compare itineraries and lock in the best suite promotions?</p>
                        <div className="usrc-inline-cta-btn-row">
                            <Link to="/contact" className="usrc-btn-primary">
                                <Phone size={18} />
                                Speak to a Cruise Advisor
                            </Link>
                            <Link to="/contact" className="usrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHO SHOULD BOOK */}
                <section className="usrc-audience-section usrc-bg-white">
                    <div className="usrc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Book?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="usrc-audience-column">
                            <h4 className="usrc-audience-title">Perfect for:</h4>
                            <ul className="usrc-audience-list">
                                {['Couples', 'History lovers', 'Food & wine enthusiasts', 'Luxury travelers', 'First-time France visitors', 'Anniversary celebrations'].map((item, idx) => (
                                    <li key={idx} className="usrc-audience-item">
                                        <CheckCircle size={18} className="usrc-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS */}
                <section className="usrc-tips-section usrc-bg-soft">
                    <div className="usrc-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label usrc-eyebrow-onsoft">GOOD TO KNOW</span>
                            <h2 className="fcel-section-heading">Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="usrc-tips-grid">
                            {[
                                { text: 'Book 9–18 months ahead.', icon: <Clock size={20} /> },
                                { text: 'Visit during spring or fall.', icon: <Calendar size={20} /> },
                                { text: 'Choose a French Balcony cabin.', icon: <Bed size={20} /> },
                                { text: 'Add extra nights in Paris.', icon: <MapPin size={20} /> }
                            ].map((tip, idx) => (
                                <div key={idx} className="usrc-tip-card">
                                    <div className="usrc-tip-icon-wrap">
                                        {tip.icon}
                                    </div>
                                    <span className="usrc-tip-text">{tip.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INLINE CTA 5 */}
                <section className="usrc-inline-cta-section">
                    <div className="usrc-inline-cta-container">
                        <span className="usrc-inline-cta-tag">Plan Ahead</span>
                        <p className="usrc-inline-cta-text">Let our advisors help you time your Seine River Cruise perfectly.</p>
                        <div className="usrc-inline-cta-btn-row">
                            <Link to="/contact" className="usrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="usrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH TRIPS & SHIPS */}
                <section className="usrc-verdict-section usrc-bg-soft">
                    <div className="usrc-verdict-container">
                        <span className="fcel-eyebrow-label usrc-eyebrow-onsoft">PLANNING ADVANTAGE</span>
                        <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Expert itinerary planning, exclusive offers, personalized recommendations, airfare assistance, hotel stays, transfers, and concierge service before and after your cruise.
                        </p>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="usrc-verdict-section usrc-bg-white">
                    <div className="usrc-verdict-container">
                        <span className="fcel-eyebrow-label">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Our Recommendation</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            A Uniworld Seine River Cruise offers one of Europe's finest luxury vacations, combining the romance of Paris, the history of Normandy, exceptional cuisine, and personalized service into one unforgettable journey.
                        </p>
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
                            {usrcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => usrcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {usrcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {usrcActiveFaq === index && (
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
                        <h2 className="fcel-cta-heading">Ready to Plan Your Uniworld Seine River Cruise?</h2>
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

export default UniworldSeineRiverCruises