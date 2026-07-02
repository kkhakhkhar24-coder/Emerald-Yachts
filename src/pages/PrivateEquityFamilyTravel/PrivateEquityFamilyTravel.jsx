import Navbar from '../../components/Navbar/Navbar'
import './PrivateEquityFamilyTravel.css'
import {
    Shield, Plane, Ship, Compass, Heart, Award, Sparkles, Users, Clock, MapPin, CheckCircle,
    Phone, LayoutList, Star, Anchor, Calendar, Gem, Globe, Utensils, Sun, Briefcase
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function PrivateEquityFamilyTravel() {
    const [heroIndex, setHeroIndex] = useState(0)
    const heroImages = [
        // "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1600", // Private Jet
        // "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1600", // Luxury Yacht
        // "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600"  // Luxury Villa
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index)
    }

    const peFaqs = [
        {
            question: "What is private equity family travel?",
            answer: "Private equity family travel is personalized luxury travel designed for executives, investors, family offices, and their families, with an emphasis on privacy, flexibility, and concierge-level service."
        },
        {
            question: "Why do private equity families use travel advisors?",
            answer: "Professional travel advisors save time, manage complex itineraries, coordinate logistics, and provide access to exclusive luxury experiences."
        },
        {
            question: "Can you arrange private jet travel?",
            answer: "Yes. Private jet charters and VIP airport services can be arranged as part of a customized luxury travel itinerary."
        },
        {
            question: "Do you plan travel for family offices?",
            answer: "Yes. We coordinate travel for family offices, including multi-generational family vacations, executive travel, and special events."
        },
        {
            question: "What destinations are popular with private equity families?",
            answer: "Popular destinations include Italy, Greece, France, Alaska, the Caribbean, Africa, Antarctica, and luxury resorts around the world."
        },
        {
            question: "Do you plan luxury cruises?",
            answer: "Yes. We specialize in luxury ocean cruises, expedition cruises, and river cruises from the world's leading cruise lines."
        },
        {
            question: "Can you arrange luxury safaris?",
            answer: "Yes. Customized luxury safaris are available throughout South Africa, Kenya, Tanzania, Botswana, Namibia, and Rwanda."
        },
        {
            question: "Do you plan multi-generational family vacations?",
            answer: "Absolutely. We design itineraries that accommodate grandparents, parents, children, and extended family members."
        },
        {
            question: "Can travel itineraries be customized?",
            answer: "Yes. Every itinerary is completely customized to match your family's schedule, interests, and travel preferences."
        },
        {
            question: "What concierge services are available?",
            answer: "Services include restaurant reservations, private guides, yacht charters, VIP experiences, spa appointments, golf tee times, and transportation."
        },
        {
            question: "Is privacy a priority during travel planning?",
            answer: "Yes. Privacy and discretion are central to every itinerary, with secure accommodations and personalized travel arrangements."
        },
        {
            question: "Why choose Trips & Ships Luxury Travel?",
            answer: "Trips & Ships Luxury Travel provides personalized planning, luxury travel expertise, concierge service, and customized itineraries designed specifically for affluent families and executives."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel",
                "name": "Private Equity Family Travel",
                "url": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel",
                "description": "Discover bespoke private equity family travel with luxury vacations, private jets, family office travel, luxury cruises, safaris, wellness retreats, and concierge travel planning.",
                "inLanguage": "en-US",
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntity": {
                    "@type": "Article",
                    "@id": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel#article"
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
                "description": "Luxury travel agency specializing in luxury vacations, cruises, safaris, private jet travel, and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel#article",
                "headline": "Private Equity Family Travel",
                "url": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel",
                "description": "Expert guide to luxury travel planning for private equity families, including family office travel, private jets, luxury cruises, safaris, wellness retreats, concierge services, and multi-generational vacations.",
                "image": "https://www.tripsshipsluxurytravel.com/images/private-equity-family-travel.jpg",
                "author": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
                },
                "publisher": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#organization"
                },
                "mainEntityOfPage": {
                    "@id": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel"
                }
            },
            {
                "@type": "Service",
                "name": "Luxury Family Travel Planning",
                "provider": {
                    "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
                },
                "serviceType": "Private Luxury Travel Consulting",
                "description": "Expert luxury travel planning for private equity executives, family offices, entrepreneurs, and multi-generational families seeking personalized travel experiences worldwide."
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
                        "name": "Luxury Family Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Private Equity Family Travel",
                        "item": "https://www.tripsshipsluxurytravel.com/private-equity-family-travel"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is private equity family travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Private equity family travel is personalized luxury travel designed for executives, investors, family offices, and their families, with an emphasis on privacy, flexibility, and concierge-level service."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why do private equity families use travel advisors?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Professional travel advisors save time, manage complex itineraries, coordinate logistics, and provide access to exclusive luxury experiences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you arrange private jet travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Private jet charters and VIP airport services can be arranged as part of a customized luxury travel itinerary."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you plan travel for family offices?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We coordinate travel for family offices, including multi-generational family vacations, executive travel, and special events."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What destinations are popular with private equity families?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Popular destinations include Italy, Greece, France, Alaska, the Caribbean, Africa, Antarctica, and luxury resorts around the world."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you plan luxury cruises?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We specialize in luxury ocean cruises, expedition cruises, and river cruises from the world's leading cruise lines."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you arrange luxury safaris?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Customized luxury safaris are available throughout South Africa, Kenya, Tanzania, Botswana, Namibia, and Rwanda."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you plan multi-generational family vacations?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We design itineraries that accommodate grandparents, parents, children, and extended family members."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can travel itineraries be customized?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Every itinerary is completely customized to match your family's schedule, interests, and travel preferences."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What concierge services are available?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Services include restaurant reservations, private guides, yacht charters, VIP experiences, spa appointments, golf tee times, and transportation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is privacy a priority during travel planning?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Privacy and discretion are central to every itinerary, with secure accommodations and personalized travel arrangements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why choose Trips & Ships Luxury Travel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Trips & Ships Luxury Travel provides personalized planning, luxury travel expertise, concierge service, and customized itineraries designed specifically for affluent families and executives."
                        }
                    }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Private Equity Family Travel | Luxury Travel for Executives & Family Offices</title>
                <meta name="title" content="Private Equity Family Travel | Private Luxury Vacations & Concierge Planning" />
                <meta name="description" content="Discover luxury private equity family travel with bespoke vacations, private jets, luxury cruises, safaris, wellness retreats, and concierge travel planning designed for executives, family offices, and multi-generational families." />
                <meta name="keywords" content="Private Equity Family Travel, Luxury travel for private equity families, Family office travel, Executive family vacations, Private jet family travel, Luxury family travel planning, Concierge travel services, Multi-generational luxury travel, Luxury cruises for executives, Private safari vacations" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* HERO SECTION */}
            <section className="medi-hero-section">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${heroIndex === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Gem size={16} />
                        <span>Trips & Ships Luxury Travel</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Private Equity Family Travel
                    </h1>
                    <p className="medi-hero-subtitle-text">
                        Luxury Travel Designed for Families Who Value Privacy, Time, and Exceptional Experiences
                    </p>
                </div>
            </section>

            {/* PREMIUM INTRO SECTION */}
            <section className="medi-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">
                        
                        {/* Left Side: Content */}
                        <div>
                            <span className="medi-premium-mini-badge">EXECUTIVE FAMILY VACATIONS</span>
                            <h2 className="medi-premium-heading">Bespoke Travel for Private Equity Professionals</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Families involved in private equity often lead fast-paced lives filled with demanding schedules, international business commitments, and significant responsibilities. Vacation time is valuable—not simply as a chance to relax, but as an opportunity to reconnect, celebrate milestones, strengthen family relationships, and create meaningful memories across generations.
                            </p>
                            <p className="medi-intro-desc-text">
                                At Trips & Ships Luxury Travel, we specialize in designing luxury travel experiences for private equity professionals, founders, executives, family offices, and multi-generational families. Every itinerary is customized with privacy, flexibility, security, and personalized service in mind, ensuring that every journey is seamless from departure to return.
                            </p>
                            <p className="medi-intro-desc-text">
                                Whether you're planning a private yacht charter in the Mediterranean, a family safari in Africa, an exclusive villa in Italy, or a luxury cruise through Northern Europe, our advisors handle every detail so you can focus on spending quality time together.
                            </p>
                        </div>

                        {/* Right Side: Signature Expert Panel */}
                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CEO & FOUNDER</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    As CEO of Trips & Ships Luxury Travel, Angela Hughes guides multi-generational families and high-profile executives through high-touch concierge planning.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">“</span>
                                    <p className="medi-premium-expert-quote-text">
                                        We design itineraries around your legacy. No detail is too small, and no destination is out of reach when creating seamless travel for your family.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHY PRIVATE EQUITY FAMILIES TRAVEL DIFFERENTLY */}
            <section className="pe-different-section">
                <div className="pe-different-container">
                    <h2 className="medi-section-heading">Why Private Equity Families Travel Differently</h2>
                    <div className="medi-heading-separator-bar"></div>

                    <p className="pe-different-lead">
                        Travel planning for private equity families is unlike planning a standard luxury vacation.
                    </p>
                    <p className="pe-different-desc">
                        Business schedules often change with little notice, family members may arrive from different cities or countries, and privacy is frequently a top priority. Every trip requires flexibility, expert coordination, and access to exclusive experiences.
                    </p>

                    <div className="pe-different-grid">
                        {[
                            { title: "Personalized itineraries", icon: <Compass size={22} /> },
                            { title: "Flexible scheduling", icon: <Clock size={22} /> },
                            { title: "Exclusive accommodations", icon: <Gem size={22} /> },
                            { title: "Private transportation", icon: <Plane size={22} /> },
                            { title: "Concierge assistance", icon: <Sparkles size={22} /> },
                            { title: "VIP airport services", icon: <Globe size={22} /> },
                            { title: "Multi-generational activities", icon: <Users size={22} /> },
                            { title: "Secure travel arrangements", icon: <Shield size={22} /> }
                        ].map((item, idx) => (
                            <div key={idx} className="pe-different-card">
                                <div className="pe-different-icon-wrapper">
                                    {item.icon}
                                </div>
                                <span className="pe-different-title">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pe-different-callout">
                        <p className="pe-different-callout-text">
                            Rather than simply booking a vacation, our role is to create effortless journeys that reflect your family's lifestyle and expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* PRIVACY & SECURITY */}
            <section className="pe-privacy-section">
                <div className="pe-privacy-container">
                    <div className="pe-privacy-split-card">
                        
                        {/* Text Content */}
                        <div className="pe-privacy-content-side">
                            <span className="pe-privacy-eyebrow">
                                <Shield size={14} /> Confidential & Secure
                            </span>
                            <h2 className="pe-privacy-heading">Privacy & Security</h2>
                            <p className="pe-privacy-p1">
                                Privacy is one of the most important considerations for many private equity executives and family offices.
                            </p>
                            <p className="pe-privacy-p2">
                                We carefully select hotels, resorts, villas, yachts, and transportation providers that understand the importance of discretion and confidentiality.
                            </p>

                            <div className="pe-privacy-grid-list">
                                {[
                                    "Private airport transfers",
                                    "VIP terminal services",
                                    "Confidential itineraries",
                                    "Secure villa accommodations",
                                    "Private guides",
                                    "Yacht charters",
                                    "Private aviation",
                                    "Personalized concierge support"
                                ].map((item, idx) => (
                                    <div key={idx} className="pe-privacy-item">
                                        <CheckCircle size={16} className="pe-privacy-item-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Side */}
                        {/* <div 
                            className="pe-privacy-image-side" 
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=1200')` }}
                        >
                            <div className="pe-privacy-image-overlay"></div>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* BUILDING A FAMILY LEGACY THROUGH TRAVEL */}
            <section className="pe-legacy-section">
                <div className="pe-legacy-container">
                    <div className="pe-legacy-intro">
                        <h2 className="medi-section-heading">Building a Family Legacy Through Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p className="pe-legacy-desc">
                            Luxury travel offers more than relaxation—it creates opportunities to build lasting family traditions and strengthen relationships across generations.
                        </p>
                        <p className="pe-legacy-desc" style={{ fontSize: '16px', color: '#475569' }}>
                            Many private equity families choose annual journeys that bring together grandparents, parents, and children for unforgettable shared experiences.
                        </p>
                    </div>

                    <div className="pe-legacy-grid">
                        {[
                            { title: "European cultural tours", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600" },
                            { title: "African safaris", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600" },
                            { title: "Mediterranean yacht charters", img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600" },
                            { title: "Alaska expedition cruises", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600" },
                            { title: "Galápagos adventures", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600" },
                            { title: "Christmas market river cruises", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600" },
                            { title: "Luxury ski vacations", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600" }
                        ].map((card, idx) => (
                            <div key={idx} className="pe-legacy-card">
                                {/* <div 
                                    className="pe-legacy-card-bg" 
                                    style={{ backgroundImage: `url('${card.img}')` }}
                                /> */}
                                <div className="pe-legacy-card-overlay"></div>
                                <div className="pe-legacy-card-content">
                                    <h4 className="pe-legacy-card-title">{card.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="pe-legacy-outro">
                        These experiences become cherished memories that continue long after returning home.
                    </p>
                </div>
            </section>

            {/* BESPOKE SERVICES SHOWCASE */}
            <section className="pe-services-section">
                <div className="pe-services-container">
                    <div className="pe-services-heading-block">
                        <h2 className="medi-section-heading">Bespoke Travel Solutions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="pe-services-grid">
                        
                        {/* Executive Retreats */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Briefcase size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Executive Retreats</h3>
                                <p className="pe-services-text">
                                    Many successful executives use travel as an opportunity to recharge while maintaining productivity when necessary. We balance relaxation with professional flexibility.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Luxury accommodations",
                                        "Wellness experiences",
                                        "Private meeting spaces",
                                        "Golf & Fine dining",
                                        "Spa treatments",
                                        "Outdoor adventures"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Family Office Travel Management */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Users size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Family Office Travel</h3>
                                <p className="pe-services-text">
                                    Family offices often coordinate travel for multiple generations, assistants, advisors, and household staff. We become an extension of your trusted team.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Group itinerary management",
                                        "Flight coordination",
                                        "Accommodation planning",
                                        "Ground transportation",
                                        "Dining reservations",
                                        "Last-minute itinerary adjustments"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Private Jet Travel */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1490430657723-4d607c1503fc?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Plane size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Private Jet Travel</h3>
                                <p className="pe-services-text">
                                    For many private equity families, private aviation provides unmatched convenience, flexibility, and privacy, minimizing travel stress.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Flexible departure schedules",
                                        "Direct flights & Private terminals",
                                        "Faster boarding & Increased privacy",
                                        "Customized catering",
                                        "Pet-friendly travel"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Luxury Cruises */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Ship size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Luxury Cruises</h3>
                                <p className="pe-services-text">
                                    Luxury cruises combine exceptional accommodations with effortless travel between multiple destinations. Recommended partners include Explora Journeys, Regent Seven Seas Cruises, Silversea Cruises, Seabourn, Crystal Cruises, Scenic Luxury Cruises, and Viking Cruises.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "World-class dining",
                                        "Spacious suites",
                                        "Wellness facilities",
                                        "Enriching shore excursions",
                                        "Attentive personalized service"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Private Safaris */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Compass size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Private Safaris</h3>
                                <p className="pe-services-text">
                                    African safaris create unforgettable experiences for families. Destinations include South Africa, Botswana, Kenya, Tanzania, Namibia, and Rwanda, tailored to your family's comfort level.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Private game drives",
                                        "Luxury safari lodges & walking safaris",
                                        "Helicopter excursions & Photography",
                                        "Conservation experiences",
                                        "Family-friendly guides"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Wellness Retreats */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Heart size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Wellness Retreats</h3>
                                <p className="pe-services-text">
                                    Wellness travel has become increasingly important for executives seeking balance between demanding careers and personal well-being.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Luxury spa resorts & thermal spas",
                                        "Yoga & Meditation retreats",
                                        "Nutrition & Fitness coaching",
                                        "Holistic wellness treatments",
                                        "Digital detox experiences"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Family Celebrations */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Award size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Family Celebrations</h3>
                                <p className="pe-services-text">
                                    Life's biggest milestones deserve unforgettable destinations. We plan milestones personalized to reflect your family's traditions and style.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Anniversary & birthday celebrations",
                                        "Graduation & retirement trips",
                                        "Family reunions",
                                        "Holiday gatherings",
                                        "Wedding anniversaries"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Concierge Services */}
                        <div className="pe-services-card">
                            {/* <div className="pe-services-image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600')` }}>
                                <div className="pe-services-card-badge"><Sparkles size={16} /></div>
                            </div> */}
                            <div className="pe-services-body">
                                <h3 className="pe-services-title">Concierge Services</h3>
                                <p className="pe-services-text">
                                    Our concierge services ensure every detail is handled before, during, and after your trip. No request is too small when creating extraordinary travel experiences.
                                </p>
                                <ul className="pe-services-bullets">
                                    {[
                                        "Restaurant reservations & private chefs",
                                        "Private guides & yacht charters",
                                        "VIP event tickets & golf tee times",
                                        "Spa appointments & luxury transport",
                                        "Last-minute itinerary changes"
                                    ].map((b, i) => (
                                        <li key={i} className="pe-services-bullet">
                                            <CheckCircle size={14} className="pe-services-bullet-icon" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {peFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="medi-faq-individual-item"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">
                                        {activeFaq === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Why Choose Trips & Ships Luxury Travel?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Planning luxury travel requires expertise, trusted relationships, and personalized service. At Trips & Ships Luxury Travel, we help private equity families experience the world's finest destinations with complete confidence.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Our clients value:</span>
                            <ul className="medi-cta-considerations-list">
                                {[
                                    "Personalized planning",
                                    "Industry expertise",
                                    "Exclusive partnerships",
                                    "Luxury accommodations",
                                    "Seamless logistics",
                                    "Dedicated travel advisors",
                                    "Flexible service",
                                    "Exceptional attention to detail"
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item">
                                        <CheckCircle size={16} className="medi-cta-considerations-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Every itinerary is designed around your family's unique goals, ensuring every journey is as extraordinary as the destination itself.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivateEquityFamilyTravel
