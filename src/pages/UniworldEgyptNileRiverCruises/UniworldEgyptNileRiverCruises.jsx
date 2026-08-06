import Navbar from '../../components/Navbar/Navbar'
import './UniworldEgyptNileRiverCruises.css'
import {
    Ship, Sparkles, Phone, LayoutList, CheckCircle, Globe, Award, XCircle,
    Utensils, Wine, Bed, Compass, AlertTriangle,
    Image as ImageIcon, Sun, Bath, Bell, Coffee,
    Landmark, MapPin, Leaf, Smile, Calendar, ArrowRight,
    Waves, Users, ShieldCheck
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router'

// Custom Image Placeholder Component
function EgrcPlaceholder({ label, className = '' }) {
    return (
        <div className={`egrc-image-placeholder ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
            <ImageIcon size={28} />
            <span>{label}</span>
        </div>
    )
}

function UniworldEgyptNileRiverCruises() {
    const [egrcActiveFaq, setEgrcActiveFaq] = useState(null)
    const egrcToggleFaq = (index) => {
        setEgrcActiveFaq(egrcActiveFaq === index ? null : index)
    }

    const egrcFaqs = [
        {
            question: "1. Is a Uniworld Egypt & Nile River Cruise worth the money?",
            answer: "Yes. It combines luxury hotels, boutique river cruising, guided sightseeing, domestic flights, gourmet dining, and exceptional service into one unforgettable vacation."
        },
        {
            question: "2. What is included on a Nile River Cruise?",
            answer: "Luxury accommodations, guided excursions, many meals, airport transfers, domestic flights, Wi-Fi, gratuities, and expert Egyptologist guides are generally included."
        },
        {
            question: "3. Does the itinerary include the Pyramids of Giza?",
            answer: "Yes. Most itineraries include a guided visit to the Great Pyramids and the Great Sphinx in Cairo."
        },
        {
            question: "4. Is Abu Simbel included?",
            answer: "Abu Simbel is often available as an optional excursion depending on the itinerary."
        },
        {
            question: "5. Are Egyptologists included?",
            answer: "Yes. Professional Egyptologists accompany guests throughout the journey."
        },
        {
            question: "6. Are drinks included?",
            answer: "Many beverages are included during meals and onboard, depending on the sailing."
        },
        {
            question: "7. Does Uniworld include gratuities?",
            answer: "Yes. Onboard gratuities are included on most Uniworld cruises."
        },
        {
            question: "8. Is Wi-Fi included?",
            answer: "Yes. Complimentary Wi-Fi is available onboard, though speeds may vary in remote areas."
        },
        {
            question: "9. When is the best time to visit Egypt?",
            answer: "October through April offers the most comfortable weather for sightseeing."
        },
        {
            question: "10. Who should choose this itinerary?",
            answer: "History lovers, luxury travelers, photographers, bucket-list travelers, and first-time visitors to Egypt."
        },
        {
            question: "11. Is this itinerary suitable for first-time visitors?",
            answer: "Absolutely. It combines Egypt's most iconic attractions into one expertly planned luxury vacation."
        },
        {
            question: "12. Why book with Trips & Ships Luxury Travel?",
            answer: "Our advisors provide expert recommendations, exclusive offers, personalized planning, and concierge-level service before, during, and after your journey."
        }
    ]

    const egrcSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile",
                "name": "Uniworld Egypt and Nile River Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile",
                "description": "Discover Uniworld Egypt and Nile River Cruises featuring luxury boutique ships, ancient Egyptian landmarks, expert Egyptologists, and immersive cultural experiences.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile#article"
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
                "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile#article",
                "headline": "Uniworld Egypt and Nile River Cruises",
                "url": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile",
                "description": "Expert guide to Uniworld Egypt and Nile River Cruises including itineraries, pricing, excursions, luxury hotels, what's included, and travel planning.",
                "image": "https://www.tripsshipsluxurytravel.com/images/uniworld-egypt-nile-river-cruises.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Egypt & Nile River Cruise Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Luxury River Cruise Consulting",
                "description": "Expert planning services for luxury Egypt and Nile River cruises, helping travelers choose the best itinerary through ancient Egypt."
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
                        "name": "Uniworld Egypt & Nile River Cruises",
                        "item": "https://www.tripsshipsluxurytravel.com/uniworld-river-cruises/egypt-nile"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is a Uniworld Egypt & Nile River Cruise worth the money?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It combines luxury hotels, boutique river cruising, guided sightseeing, domestic flights, gourmet dining, and exceptional service into one unforgettable vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is included on a Nile River Cruise?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Luxury accommodations, guided excursions, many meals, airport transfers, domestic flights, Wi-Fi, gratuities, and expert Egyptologist guides are generally included."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the itinerary include the Pyramids of Giza?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Most itineraries include a guided visit to the Great Pyramids of Giza and the Great Sphinx."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Abu Simbel included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Abu Simbel is typically offered as an optional excursion depending on the itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Egyptologists included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Professional Egyptologists accompany guests throughout the cruise and land tour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are drinks included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Many beverages are included during meals and onboard depending on the itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Uniworld include gratuities?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Onboard gratuities are included on most Uniworld Nile River cruises."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Wi-Fi included?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Complimentary Wi-Fi is available onboard, although speeds may vary by location."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "When is the best time to visit Egypt?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "October through April offers the most comfortable temperatures for sightseeing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should choose this itinerary?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "History lovers, luxury travelers, photographers, cultural explorers, and bucket-list travelers will especially enjoy this itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this itinerary suitable for first-time visitors?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It combines Egypt's most famous attractions into one expertly planned luxury vacation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why book with Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides expert itinerary planning, exclusive offers, personalized recommendations, and concierge-level service before, during, and after your luxury Nile cruise."
                        }
                    }
                ]
            }
        ]
    }

    const egrcDestinations = [
        { name: 'Cairo', icon: <Landmark size={24} />, desc: 'Visit the Great Pyramids, the Sphinx, the Grand Egyptian Museum, and bustling local markets.' },
        { name: 'Luxor', icon: <Compass size={24} />, desc: 'Explore Karnak Temple, Luxor Temple, and the spectacular Valley of the Kings.' },
        { name: 'Aswan', icon: <Waves size={24} />, desc: 'Discover Philae Temple, Nubian culture, and picturesque Nile scenery.' },
        { name: 'Kom Ombo', icon: <MapPin size={24} />, desc: 'Visit the unique double temple dedicated to Sobek and Horus.' },
        { name: 'Edfu', icon: <Landmark size={24} />, desc: "Explore one of Egypt's best-preserved ancient temples." },
        { name: 'Abu Simbel (Optional Excursion)', icon: <Award size={24} />, desc: 'One of the most impressive archaeological sites in the world.' }
    ]

    const egrcSeasons = [
        { name: 'October–November', icon: <Sun size={24} />, desc: 'Pleasant temperatures and excellent sightseeing conditions.' },
        { name: 'December–February', icon: <Calendar size={24} />, desc: 'Peak travel season with comfortable weather.' },
        { name: 'March–April', icon: <Compass size={24} />, desc: 'Warm temperatures and fewer crowds.' }
    ]

    return (
        <>
            <Helmet>
                <title>Uniworld Egypt & Nile River Cruises: Prices, Reviews & Expert Guide</title>
                <meta name="title" content="Uniworld Egypt & Nile River Cruises | Luxury Nile Cruise Guide" />
                <meta
                    name="description"
                    content="Thinking about a Uniworld Egypt & Nile River Cruise? Discover luxury Nile itineraries, pricing, what's included, reviews, ancient temples, and whether it's worth booking."
                />
                <script type="application/ld+json">
                    {JSON.stringify(egrcSchemaData)}
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
                            <span>Uniworld Egypt & Nile River Cruises</span>
                        </div>
                        <h1 className="fcel-hero-title">Uniworld Egypt & Nile <br /> River Cruises</h1>
                        <p className="fcel-hero-subtitle">
                            Discover Ancient Egypt in Boutique Luxury
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
                                <h2 className="fcel-section-heading">Discover Ancient Egypt</h2>
                                <div className="fcel-heading-bar"></div>
                                <p className="fcel-lead-paragraph">
                                    A Uniworld Egypt & Nile River Cruise offers one of the world's most extraordinary travel experiences. Journey along the legendary Nile River while exploring iconic landmarks including the Pyramids of Giza, the Great Sphinx, Luxor Temple, Karnak Temple, the Valley of the Kings, Kom Ombo, and Aswan.
                                </p>
                                <p className="fcel-lead-paragraph">
                                    Combined with luxury accommodations, expert Egyptologists, exclusive excursions, and Uniworld's award-winning boutique service, this itinerary provides an unforgettable way to experience one of the world's oldest civilizations.
                                </p>
                            </div>
                            <div className="fcel-intro-image-frame">
                                <EgrcPlaceholder label="Uniworld Egypt & Nile River Cruise Ship" />
                                <div className="fcel-intro-badge-float">
                                    <Award size={15} style={{ marginRight: '6px' }} />
                                    <span>Egypt & Nile Review Summary</span>
                                </div>
                            </div>
                            <div className="fcel-intro-highlight-box">
                                <span className="fcel-intro-quote-icon">"</span>
                                <div className="fcel-intro-quote-content">
                                    Journey along the legendary Nile River while exploring iconic landmarks including the Pyramids of Giza, the Great Sphinx, Luxor Temple, Karnak Temple, and the Valley of the Kings.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RATING SUMMARY SECTION */}
                <section className="egrc-rating-section">
                    <div className="egrc-rating-container">
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <span className="fcel-eyebrow-label egrc-eyebrow-rating">⭐ OVERALL RATING</span>
                            <h2 className="fcel-section-heading">Expert Review Summary</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-rating-card">
                            <div className="egrc-rating-grid">
                                <div className="egrc-rating-item">
                                    <span className="egrc-rating-label">Luxury</span>
                                    <span className="egrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="egrc-rating-item">
                                    <span className="egrc-rating-label">History & Culture</span>
                                    <span className="egrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="egrc-rating-item">
                                    <span className="egrc-rating-label">Excursions</span>
                                    <span className="egrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="egrc-rating-item">
                                    <span className="egrc-rating-label">Service</span>
                                    <span className="egrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="egrc-rating-item">
                                    <span className="egrc-rating-label">Dining</span>
                                    <span className="egrc-rating-stars">⭐⭐⭐⭐⭐</span>
                                </div>
                                <div className="egrc-rating-item">
                                    <span className="egrc-rating-label">Value</span>
                                    <span className="egrc-rating-stars">⭐⭐⭐⭐☆</span>
                                </div>
                            </div>
                            <div className="egrc-rating-score-box">
                                <div className="egrc-rating-score">10/10</div>
                                <div className="egrc-rating-score-label">Overall Experience</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK ANSWER SECTION */}
                <section className="egrc-quick-answer-section">
                    <div className="egrc-quick-answer-container">
                        <div className="egrc-quick-answer-card">
                            <h3 className="egrc-quick-answer-title">Is a Uniworld Egypt & Nile River Cruise Worth It?</h3>
                            <p className="egrc-quick-answer-text">
                                Absolutely. A Uniworld Egypt & Nile River Cruise is one of the finest luxury vacations for history lovers and cultural explorers. Nearly everything is included—from luxury hotels and boutique river cruising to guided sightseeing, premium dining, and expert Egyptologist-led excursions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA (INLINE CTA) */}
                <section className="egrc-inline-cta-section">
                    <div className="egrc-inline-cta-container">
                        <span className="egrc-inline-cta-tag">Expert Planning</span>
                        <p className="egrc-inline-cta-text">Ready to journey along the Nile in boutique luxury?</p>
                        <div className="egrc-inline-cta-btn-row">
                            <Link to="/contact" className="egrc-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </Link>
                            <Link to="/contact" className="egrc-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </Link>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE A NILE RIVER CRUISE */}
                <section className="egrc-highlight-section egrc-bg-white">
                    <div className="egrc-highlight-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">HIGHLIGHTS</span>
                            <h2 className="fcel-section-heading">Why Choose a Nile River Cruise?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-highlight-grid">
                            {[
                                { label: 'Pyramids of Giza', icon: <Landmark size={20} /> },
                                { label: 'Great Sphinx', icon: <Compass size={20} /> },
                                { label: 'Luxor Temple', icon: <Landmark size={20} /> },
                                { label: 'Karnak Temple', icon: <Landmark size={20} /> },
                                { label: 'Valley of the Kings', icon: <MapPin size={20} /> },
                                { label: 'Abu Simbel', icon: <Award size={20} /> },
                                { label: 'Nile River sailing', icon: <Ship size={20} /> },
                                { label: 'Egyptologist guides', icon: <Users size={20} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="egrc-highlight-card">
                                    <div className="egrc-highlight-icon">
                                        {item.icon}
                                    </div>
                                    <span className="egrc-highlight-label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHAT'S INCLUDED */}
                <section className="egrc-included-section egrc-bg-soft">
                    <div className="egrc-included-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALL-INCLUSIVE</span>
                            <h2 className="fcel-section-heading">What's Included?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-included-grid">
                            {[
                                'Luxury boutique river ship',
                                'Luxury hotels in Cairo',
                                'Airport transfers',
                                'Domestic flights within Egypt',
                                'Gourmet dining',
                                'Unlimited beverages (select times)',
                                'Guided sightseeing',
                                'Professional Egyptologist',
                                'Complimentary Wi-Fi',
                                'Onboard gratuities',
                                'Personalized service'
                            ].map((item, idx) => (
                                <div key={idx} className="egrc-included-item">
                                    <CheckCircle size={18} className="egrc-included-icon" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOP DESTINATIONS */}
                <section className="egrc-dest-section">
                    <div className="egrc-dest-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">ALONG THE NILE</span>
                            <h2 className="fcel-section-heading">Top Destinations</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-dest-grid">
                            {egrcDestinations.map((dest, idx) => (
                                <div key={idx} className="egrc-dest-card">
                                    <EgrcPlaceholder label={dest.name} className="egrc-dest-image-placeholder" />
                                    <div className="egrc-dest-icon-wrap">
                                        {dest.icon}
                                    </div>
                                    <h4 className="egrc-dest-name">{dest.name}</h4>
                                    <p className="egrc-dest-desc">{dest.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DINING ONBOARD */}
                <section className="egrc-review-section egrc-dining-dark-section">
                    <div className="egrc-review-container">
                        <div className="egrc-dining-container">
                            <div className="egrc-image-wrapper-premium">
                                <div className="egrc-badge-overlay-gold">
                                    <Utensils size={14} />
                                    <span>Onboard Dining</span>
                                </div>
                                <EgrcPlaceholder label="Uniworld Egypt & Nile Dining Experience" />
                            </div>
                            <div className="egrc-review-copy-col">
                                <span className="fcel-eyebrow-label" style={{ width: '230px' }}>CULINARY EXCELLENCE</span>
                                <h2 className="egrc-review-title">Dining Onboard</h2>
                                <p className="fcel-lead-paragraph" style={{ color: 'white' }}>
                                    Guests enjoy:
                                </p>
                                <div className="egrc-dining-menu-list">
                                    <div className="egrc-dining-course-card">
                                        <div className="egrc-dining-course-icon">
                                            <Globe size={20} />
                                        </div>
                                        <span className="egrc-dining-course-text">International cuisine</span>
                                    </div>
                                    <div className="egrc-dining-course-card">
                                        <div className="egrc-dining-course-icon">
                                            <Utensils size={20} />
                                        </div>
                                        <span className="egrc-dining-course-text">Egyptian specialties</span>
                                    </div>
                                    <div className="egrc-dining-course-card">
                                        <div className="egrc-dining-course-icon">
                                            <Coffee size={20} />
                                        </div>
                                        <span className="egrc-dining-course-text">Gourmet multi-course dinners</span>
                                    </div>
                                    <div className="egrc-dining-course-card">
                                        <div className="egrc-dining-course-icon">
                                            <Wine size={20} />
                                        </div>
                                        <span className="egrc-dining-course-text">Premium wines</span>
                                    </div>
                                    <div className="egrc-dining-course-card">
                                        <div className="egrc-dining-course-icon">
                                            <Leaf size={20} />
                                        </div>
                                        <span className="egrc-dining-course-text">Fresh local ingredients</span>
                                    </div>
                                    <div className="egrc-dining-course-card">
                                        <div className="egrc-dining-course-icon">
                                            <Coffee size={20} />
                                        </div>
                                        <span className="egrc-dining-course-text">Elegant afternoon tea</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LUXURY ACCOMMODATIONS */}
                <section className="egrc-review-section egrc-bg-soft">
                    <div className="egrc-review-container">
                        <div className="egrc-cabins-container">
                            <div className="egrc-review-copy-col">
                                <span className="fcel-eyebrow-label egrc-eyebrow-accommodations">ACCOMMODATIONS</span>
                                <h2 className="egrc-review-title" style={{ textAlign: 'left' }}>Luxury Accommodations</h2>
                                <p className="fcel-lead-paragraph">
                                    Guests enjoy:
                                </p>
                                <div className="egrc-cabin-feature-grid">
                                    <div className="egrc-cabin-feature-card">
                                        <div className="egrc-cabin-card-icon">
                                            <Bed size={20} />
                                        </div>
                                        <span className="egrc-cabin-card-text">Boutique luxury suites</span>
                                    </div>
                                    <div className="egrc-cabin-feature-card">
                                        <div className="egrc-cabin-card-icon">
                                            <Bath size={20} />
                                        </div>
                                        <span className="egrc-cabin-card-text">Marble bathrooms</span>
                                    </div>
                                    <div className="egrc-cabin-feature-card">
                                        <div className="egrc-cabin-card-icon">
                                            <Sparkles size={20} />
                                        </div>
                                        <span className="egrc-cabin-card-text">Egyptian-inspired décor</span>
                                    </div>
                                    <div className="egrc-cabin-feature-card">
                                        <div className="egrc-cabin-card-icon">
                                            <Bed size={20} />
                                        </div>
                                        <span className="egrc-cabin-card-text">Luxury bedding</span>
                                    </div>
                                    <div className="egrc-cabin-feature-card">
                                        <div className="egrc-cabin-card-icon">
                                            <Smile size={20} />
                                        </div>
                                        <span className="egrc-cabin-card-text">Personalized service</span>
                                    </div>
                                    <div className="egrc-cabin-feature-card">
                                        <div className="egrc-cabin-card-icon">
                                            <Bell size={20} />
                                        </div>
                                        <span className="egrc-cabin-card-text">Butler service (select suites)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="egrc-image-wrapper-premium">
                                <div className="egrc-badge-overlay-gold">
                                    <Sparkles size={14} />
                                    <span>Boutique Comfort</span>
                                </div>
                                <EgrcPlaceholder label="Uniworld Luxury Cabin / Suite Interior" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEST TIME TO CRUISE EGYPT */}
                <section className="egrc-season-section">
                    <div className="egrc-season-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">SEASONAL GUIDE</span>
                            <h2 className="fcel-section-heading">Best Time to Cruise Egypt</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-season-grid">
                            {egrcSeasons.map((season, idx) => (
                                <div key={idx} className="egrc-season-card">
                                    <div className="egrc-season-icon-wrap">
                                        {season.icon}
                                    </div>
                                    <h4 className="egrc-season-name">{season.name}</h4>
                                    <p className="egrc-season-desc">{season.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IS IT WORTH THE MONEY */}
                <section className="egrc-worth-section egrc-bg-soft">
                    <div className="egrc-worth-container">
                        <span className="fcel-eyebrow-label egrc-eyebrow-worth">INVESTMENT & VALUE</span>
                        <h2 className="fcel-section-heading">Is It Worth the Money?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <p className="fcel-lead-paragraph">
                            Although Uniworld Egypt cruises command premium pricing, they include luxury hotels, boutique river cruising, guided excursions, domestic flights, transfers, many meals, and exceptional service—making them one of the most comprehensive luxury Egypt vacations available.
                        </p>
                    </div>
                </section>

                {/* PROS & CONS (REDESIGNED COMPARISON BOARD) */}
                <section className="urcr-comparison-section egrc-bg-white">
                    <div className="urcr-pros-cons-container">
                        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
                            <span className="fcel-eyebrow-label">PROS & CONS</span>
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
                                        { title: 'Incredible Historical Sites', icon: <Landmark size={20} /> },
                                        { title: 'Expert Egyptologists', icon: <Users size={20} /> },
                                        { title: 'Luxury Accommodations', icon: <Bed size={20} /> },
                                        { title: 'Excellent Service', icon: <Award size={20} /> },
                                        { title: 'Nearly All-Inclusive', icon: <CheckCircle size={20} /> },
                                        { title: 'Unique Once-in-a-Lifetime Experience', icon: <Sparkles size={20} /> }
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
                                        'Premium Pricing',
                                        'Limited Departures',
                                        'High Demand During Winter Season',
                                        'Best suites sell out early',
                                        'More traditional ship decor',
                                        'Fewer onboard activities compared to large ocean liners'
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

                {/* WHO SHOULD BOOK */}
                <section className="egrc-audience-section">
                    <div className="egrc-audience-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label" style={{ background: 'var(--egrc-bg-white)', color: 'var(--egrc-navy)' }}>WHO IS IT FOR?</span>
                            <h2 className="fcel-section-heading">Who Should Book?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                            <p className="fcel-lead-paragraph" style={{ maxWidth: '800px', margin: '0 auto 20px auto' }}>
                                Perfect for:
                            </p>
                        </div>
                        <div className="egrc-audience-column">
                            <ul className="egrc-audience-list">
                                {['History lovers', 'Luxury travelers', 'Couples', 'Bucket-list travelers', 'Photography enthusiasts', 'Cultural explorers', 'Anniversary trips', 'First-time visitors to Egypt'].map((item, idx) => (
                                    <li key={idx} className="egrc-audience-item">
                                        <CheckCircle size={18} className="egrc-audience-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PLANNING TIPS */}
                <section className="egrc-tips-section egrc-bg-white">
                    <div className="egrc-tips-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">TRAVEL SMART</span>
                            <h2 className="fcel-section-heading">Planning Tips</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-tips-list">
                            {[
                                { icon: <Calendar size={18} />, text: 'Book 9–18 months in advance.' },
                                { icon: <Sun size={18} />, text: 'Travel between October and April.' },
                                { icon: <Compass size={18} />, text: 'Bring lightweight clothing and comfortable walking shoes.' },
                                { icon: <Award size={18} />, text: 'Consider the Abu Simbel excursion.' },
                                { icon: <ShieldCheck size={18} />, text: 'Purchase travel insurance for added peace of mind.' }
                            ].map((tip, idx) => (
                                <div key={idx} className="egrc-tips-item">
                                    <div className="egrc-tips-icon">
                                        {tip.icon}
                                    </div>
                                    <p className="egrc-tips-text">{tip.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY BOOK WITH US */}
                <section className="egrc-why-book-section egrc-bg-soft">
                    <div className="egrc-why-book-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label" style={{ background: 'var(--egrc-bg-white)', color: 'var(--egrc-navy)' }}>PLANNING ADVANTAGE</span>
                            <h2 className="fcel-section-heading">Why Book with Trips & Ships Luxury Travel?</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-why-book-grid">
                            <div className="egrc-why-book-card">
                                <div className="egrc-why-book-icon">
                                    <LayoutList size={20} />
                                </div>
                                <h4 className="egrc-why-book-title">Compare Egypt Itineraries</h4>
                                <p className="egrc-why-book-desc">Compare Egypt itineraries to find your ideal sailing.</p>
                            </div>
                            <div className="egrc-why-book-card">
                                <div className="egrc-why-book-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="egrc-why-book-title">Select the Best Suite</h4>
                                <p className="egrc-why-book-desc">Select the best suite for your travel style and budget.</p>
                            </div>
                            <div className="egrc-why-book-card">
                                <div className="egrc-why-book-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="egrc-why-book-title">Arrange International Airfare</h4>
                                <p className="egrc-why-book-desc">Arrange international airfare around your cruise dates.</p>
                            </div>
                            <div className="egrc-why-book-card">
                                <div className="egrc-why-book-icon">
                                    <Award size={20} />
                                </div>
                                <h4 className="egrc-why-book-title">Secure Exclusive Offers</h4>
                                <p className="egrc-why-book-desc">Secure exclusive offers unavailable when booking direct.</p>
                            </div>
                            <div className="egrc-why-book-card">
                                <div className="egrc-why-book-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="egrc-why-book-title">Customize Pre- & Post-Cruise Stays</h4>
                                <p className="egrc-why-book-desc">Customize pre- and post-cruise stays in Cairo or Alexandria.</p>
                            </div>
                            <div className="egrc-why-book-card">
                                <div className="egrc-why-book-icon">
                                    <Ship size={20} />
                                </div>
                                <h4 className="egrc-why-book-title">Coordinate Transfers</h4>
                                <p className="egrc-why-book-desc">Coordinate transfers between airports, hotels, and the ship.</p>
                            </div>
                           
                        </div>
                    </div>
                </section>

                {/* OUR RECOMMENDATION */}
                <section className="egrc-recommendation-section egrc-bg-white">
                    <div className="egrc-recommendation-container">
                        <span className="fcel-eyebrow-label">OUR RECOMMENDATION</span>
                        <h2 className="fcel-section-heading">Is Uniworld Egypt & Nile <br /> Worth Booking?</h2>
                        <div className="fcel-heading-bar fcel-bar-center"></div>
                        <div className="egrc-recommendation-stars">⭐⭐⭐⭐⭐</div>
                        <p className="fcel-lead-paragraph" style={{ fontSize: '20px', fontWeight: '500', color: 'var(--egrc-navy)', lineHeight: '1.7' }}>
                            A Uniworld Egypt & Nile River Cruise is one of the world's most unforgettable luxury travel experiences.
                        </p>
                        <p className="fcel-lead-paragraph" style={{ color: '#475569' }}>
                            Combining ancient history, exceptional hospitality, expert-guided excursions, and boutique luxury, it offers an extraordinary journey through the heart of Egypt.
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
                            {egrcFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="fcel-faq-item"
                                    onClick={() => egrcToggleFaq(index)}
                                >
                                    <div className="fcel-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="fcel-faq-toggle">
                                            {egrcActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {egrcActiveFaq === index && (
                                        <p className="fcel-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED GUIDES (RELATED CONTENT CTA) */}
                <section className="egrc-related-section">
                    <div className="egrc-related-container">
                        <div style={{ textAlign: 'center' }}>
                            <span className="fcel-eyebrow-label">KEEP EXPLORING</span>
                            <h2 className="fcel-section-heading">Related Luxury Cruise Guides</h2>
                            <div className="fcel-heading-bar fcel-bar-center"></div>
                        </div>
                        <div className="egrc-related-grid">
                            <Link to="/uniworld-river-cruises/review" className="egrc-related-card">
                                <div className="egrc-related-icon">
                                    <Ship size={20} />
                                </div>
                                <h4 className="egrc-related-title">Uniworld River Cruises Review</h4>
                                <p className="egrc-related-desc">Our full expert review of Uniworld's boutique river cruise fleet.</p>
                                <span className="egrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/uniworld-river-cruises/rhone-saone" className="egrc-related-card">
                                <div className="egrc-related-icon">
                                    <Landmark size={20} />
                                </div>
                                <h4 className="egrc-related-title">Uniworld Rhône & Saône River Cruises</h4>
                                <p className="egrc-related-desc">Discover Burgundy and Provence aboard a boutique river ship.</p>
                                <span className="egrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/why-i-resisted-viking" className="egrc-related-card">
                                <div className="egrc-related-icon">
                                    <Compass size={20} />
                                </div>
                                <h4 className="egrc-related-title">Why I Resisted Viking</h4>
                                <p className="egrc-related-desc">An honest editorial comparing Uniworld's boutique feel to Viking.</p>
                                <span className="egrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/scenic-cabins-guide" className="egrc-related-card">
                                <div className="egrc-related-icon">
                                    <Bed size={20} />
                                </div>
                                <h4 className="egrc-related-title">Scenic Cabins Guide</h4>
                                <p className="egrc-related-desc">Compare suite categories across leading luxury river cruise lines.</p>
                                <span className="egrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                            <Link to="/luxury-safari-in-africa" className="egrc-related-card">
                                <div className="egrc-related-icon">
                                    <Globe size={20} />
                                </div>
                                <h4 className="egrc-related-title">Luxury Safari Africa</h4>
                                <p className="egrc-related-desc">Extend your journey with a luxury African safari escape.</p>
                                <span className="egrc-related-link">Read More <ArrowRight size={14} /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION (MATCHED) */}
                <section className="fcel-cta-section">
                    <div className="fcel-cta-bg-pattern"></div>
                    <div className="fcel-cta-inner">
                        <h2 className="fcel-cta-heading">Ready to Plan Your Egypt & Nile <br /> River Cruise?</h2>
                        <div className="fcel-cta-separator"></div>
                        <p className="fcel-cta-text">
                            Contact our luxury cruise consultants to compare itineraries, secure exclusive offers, and plan pre- and post-cruise stays. We handle every detail so you can enjoy the journey.
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

export default UniworldEgyptNileRiverCruises