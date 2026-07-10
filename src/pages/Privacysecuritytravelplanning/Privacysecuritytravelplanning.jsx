import Navbar from '../../components/Navbar/Navbar'
import './Privacysecuritytravelplanning.css'
import {
    ShieldCheck, Users, Globe, Calendar, Sparkles, Lock,
    Home, Star, Phone, CheckCircle, LayoutList, Plane,
    Car, KeyRound, Eye, Award, UserCheck, Clock, ShieldAlert
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'

function PrivacySecurityTravelPlanning() {

    /* Hero rotating background images */
    const psecHeroImages = [
        'https://placehold.co/1800x1200?text=Privacy+Security+Travel',
        'https://placehold.co/1800x1200?text=Confidential+Luxury+Travel',
        'https://placehold.co/1800x1200?text=Secure+Executive+Travel'
    ]
    const [psecCurrentHero, setPsecCurrentHero] = useState(0)
    useEffect(() => {
        const psecTimer = setInterval(() => {
            setPsecCurrentHero((prev) => (prev + 1) % psecHeroImages.length)
        }, 5000)
        return () => clearInterval(psecTimer)
    }, [psecHeroImages.length])

    const [psecActiveFaq, setPsecActiveFaq] = useState(null)
    const psecToggleFaq = (index) => {
        setPsecActiveFaq(psecActiveFaq === index ? null : index)
    }

    /* Why privacy matters */
    const psecWhyPrivacy = [
        { text: 'Protect personal information', icon: Lock },
        { text: 'Reduce public exposure', icon: Eye },
        { text: 'Minimize travel disruptions', icon: Clock },
        { text: 'Enhance personal safety', icon: ShieldCheck },
        { text: 'Provide greater flexibility', icon: LayoutList },
        { text: 'Maintain confidentiality', icon: KeyRound },
        { text: 'Support executive schedules', icon: Calendar },
        { text: 'Deliver peace of mind', icon: Star }
    ]

    /* Accommodation types with images */
    const psecStayTypes = [
        { name: 'Private Villas', img: 'https://placehold.co/600x700?text=Private+Villas' },
        { name: 'Exclusive Resorts', img: 'https://placehold.co/600x700?text=Exclusive+Resorts' },
        { name: 'Boutique Luxury Hotels', img: 'https://placehold.co/600x700?text=Boutique+Luxury+Hotels' },
        { name: 'Luxury Safari Lodges', img: 'https://placehold.co/600x700?text=Luxury+Safari+Lodges' },
        { name: 'Small Ship Cruises', img: 'https://placehold.co/600x700?text=Small+Ship+Cruises' },
        { name: 'Expedition Cruises', img: 'https://placehold.co/600x700?text=Expedition+Cruises' },
        { name: 'River Cruises', img: 'https://placehold.co/600x700?text=River+Cruises' },
        { name: 'Private Yacht Charters', img: 'https://placehold.co/600x700?text=Private+Yacht+Charters' }
    ]

    /* Concierge services */
    const psecConciergeServices = [
        'Destination recommendations', 'Luxury accommodations', 'Dining reservations', 'Private guides',
        'Exclusive experiences', 'Event tickets', 'Last-minute itinerary adjustments', '24/7 travel assistance'
    ]

    /* Why choose us */
    const psecWhyChooseUs = [
        { title: 'Personalized travel planning', icon: LayoutList },
        { title: 'Confidential service', icon: Lock },
        { title: 'Global luxury partnerships', icon: Globe },
        { title: 'Executive travel expertise', icon: UserCheck },
        { title: 'Private travel solutions', icon: ShieldCheck },
        { title: 'Concierge-level support', icon: Star },
        { title: 'Worldwide destination knowledge', icon: Award },
        { title: 'Ongoing assistance throughout every journey', icon: Phone }
    ]

    /* FAQs */
    const psecFaqs = [
        { question: 'What is privacy-focused luxury travel?', answer: 'Privacy-focused luxury travel emphasizes confidential planning, secure transportation, discreet accommodations, and personalized service for travelers who value privacy.' },
        { question: 'Who benefits from private travel planning?', answer: 'Business executives, entrepreneurs, celebrities, athletes, family offices, and affluent families often choose private travel planning for greater discretion and convenience.' },
        { question: 'Can private jet travel be arranged?', answer: 'Yes. We coordinate private jet charters, executive aviation, helicopter transfers, and VIP airport services.' },
        { question: 'Do you arrange secure ground transportation?', answer: 'Yes. Chauffeur-driven luxury vehicles, airport transfers, executive transportation, and private drivers can all be arranged.' },
        { question: 'Can family vacations be planned confidentially?', answer: 'Absolutely. We specialize in discreet family travel with personalized itineraries and private experiences.' },
        { question: 'Are private villas available?', answer: 'Yes. We offer luxury private villas, exclusive resorts, boutique hotels, and private residences around the world.' },
        { question: 'Can luxury cruises be included?', answer: 'Yes. We arrange luxury ocean cruises, expedition cruises, river cruises, and private yacht charters.' },
        { question: 'Do you provide concierge services during the trip?', answer: 'Yes. Our concierge team offers assistance before departure, during your vacation, and throughout your journey.' },
        { question: 'Can itineraries be changed while traveling?', answer: 'Yes. We provide flexible itinerary management and support whenever possible.' },
        { question: 'Do you plan international travel?', answer: 'Yes. We create customized luxury itineraries across Europe, Africa, Asia, the Americas, Australia, Antarctica, and beyond.' },
        { question: 'How far in advance should I plan?', answer: 'We recommend planning 6 to 12 months ahead, particularly for private villas, luxury cruises, and peak travel seasons.' },
        { question: 'Why choose Trips & Ships Luxury Travel?', answer: 'Trips & Ships Luxury Travel provides confidential planning, concierge-level service, trusted global partnerships, and personalized luxury travel experiences designed with privacy, comfort, and exceptional service in mind.' }
    ]

    const psecSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning",
                "name": "Privacy & Security Travel Planning",
                "url": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning",
                "description": "Luxury travel planning with discretion, privacy, secure transportation, private aviation, and concierge services for executives, high-profile travelers, and affluent families.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@id": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning#article" }
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
                "description": "Luxury travel agency specializing in secure luxury travel, private aviation, luxury cruises, private villas, executive travel, and personalized concierge planning."
            },
            {
                "@type": "Person",
                "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO",
                "worksFor": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
            },
            {
                "@type": "Article",
                "@id": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning#article",
                "headline": "Privacy & Security Travel Planning",
                "url": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning",
                "description": "Expert guide to secure luxury travel including private travel planning, confidential itineraries, VIP airport services, private aviation, luxury accommodations, and concierge support.",
                "image": "https://www.tripsshipsluxurytravel.com/images/privacy-security-travel-planning.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning" }
            },
            {
                "@type": "Service",
                "name": "Privacy & Security Travel Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Secure Luxury Travel Consulting",
                "description": "Expert planning services for confidential luxury travel, private aviation, executive travel, secure transportation, luxury accommodations, and concierge travel management."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Luxury Family Travel", "item": "https://www.tripsshipsluxurytravel.com/luxury-family-travel" },
                    { "@type": "ListItem", "position": 3, "name": "Privacy & Security Travel Planning", "item": "https://www.tripsshipsluxurytravel.com/privacy-security-travel-planning" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is privacy-focused luxury travel?", "acceptedAnswer": { "@type": "Answer", "text": "Privacy-focused luxury travel emphasizes confidential planning, secure transportation, discreet accommodations, and personalized concierge services." } },
                    { "@type": "Question", "name": "Who benefits from private travel planning?", "acceptedAnswer": { "@type": "Answer", "text": "Business executives, entrepreneurs, celebrities, professional athletes, family offices, and affluent families often benefit from private travel planning." } },
                    { "@type": "Question", "name": "Can private jet travel be arranged?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Private jet charters, executive aviation, helicopter transfers, and VIP airport services can all be coordinated." } },
                    { "@type": "Question", "name": "Do you arrange secure ground transportation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Chauffeur-driven luxury vehicles, executive transportation, airport transfers, and private drivers are available." } },
                    { "@type": "Question", "name": "Can family vacations be planned confidentially?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Every family itinerary is customized with privacy, flexibility, and discretion in mind." } },
                    { "@type": "Question", "name": "Are private villas available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer luxury private villas, exclusive resorts, boutique hotels, and private residences worldwide." } },
                    { "@type": "Question", "name": "Can luxury cruises be included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Luxury ocean cruises, river cruises, expedition cruises, and private yacht charters can all be incorporated into your itinerary." } },
                    { "@type": "Question", "name": "Do you provide concierge services during the trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our concierge team supports clients before departure, throughout the journey, and after they return home." } },
                    { "@type": "Question", "name": "Can itineraries be adjusted while traveling?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Whenever possible, we provide flexible itinerary management and real-time travel assistance." } },
                    { "@type": "Question", "name": "Do you plan international travel?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We create customized luxury itineraries across Europe, Africa, Asia, the Americas, Australia, Antarctica, and many other destinations." } },
                    { "@type": "Question", "name": "How far in advance should I plan?", "acceptedAnswer": { "@type": "Answer", "text": "Planning 6 to 12 months in advance is recommended for the best availability and personalized travel experiences." } },
                    { "@type": "Question", "name": "Why choose Trips & Ships Luxury Travel?", "acceptedAnswer": { "@type": "Answer", "text": "Trips & Ships Luxury Travel delivers confidential planning, concierge-level service, trusted global partnerships, and personalized luxury travel experiences with privacy and security at the forefront." } }
                ]
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Privacy & Security Travel Planning | Secure Luxury Travel for Executives & Families</title>
                <meta name="title" content="Privacy & Security Travel Planning | Confidential Luxury Travel" />
                <meta
                    name="description"
                    content="Discover secure luxury travel planning designed for high-profile executives, business owners, celebrities, and affluent families. Enjoy confidential travel, private aviation, secure transportation, VIP concierge services, and personalized itineraries with Trips & Ships Luxury Travel."
                />
                <meta name="keywords" content="Secure luxury travel, Private travel planning, Confidential travel, VIP travel services, Executive travel security, Luxury concierge travel, Private aviation travel, Discreet travel planning, High-profile family travel, Secure transportation" />
                <script type="application/ld+json">
                    {JSON.stringify(psecSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            <div className="psec-page-wrapper">

                {/* HERO SECTION */}
                <section className="psec-hero-section">
                    {psecHeroImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`psec-hero-slide ${psecCurrentHero === idx ? 'psec-slide-active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                    <div className="psec-hero-overlay"></div>
                    <div className="psec-hero-content">
                        <div className="psec-hero-tag">
                            <ShieldCheck size={16} />
                            <span>Confidential Travel for Executives & Families</span>
                        </div>
                        <h1 className="psec-hero-title">Privacy & Security Travel Planning</h1>
                        <p className="psec-hero-subtitle">
                            Luxury Travel Designed with Privacy in Mind
                        </p>
                        <div className="psec-hero-btn-row">
                            <button className="psec-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="psec-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="psec-intro-section">
                    <div className="psec-intro-container">
                        <div className="psec-intro-grid">
                            <div className="psec-intro-copy">
                                <span className="psec-eyebrow-label">DISCREET. PERSONALIZED. SECURE.</span>
                                <h2 className="psec-section-heading">Luxury Travel Designed with Privacy in Mind</h2>
                                <div className="psec-heading-bar"></div>
                                <p className="psec-lead-paragraph">
                                    For high-profile individuals, successful entrepreneurs, executives, professional athletes, entertainers, and affluent families, privacy is often just as important as luxury.
                                </p>
                                <p className="psec-lead-paragraph">
                                    At Trips & Ships Luxury Travel, we specialize in confidential travel planning that protects your privacy while delivering exceptional experiences. From private aviation and discreet accommodations to secure transportation and personalized concierge services, every itinerary is thoughtfully designed to minimize stress and maximize peace of mind.
                                </p>
                                <div className="psec-intro-highlight-box">
                                    Whether you're traveling for business, leisure, or a family celebration, our team ensures every detail is handled with professionalism and discretion.
                                </div>
                            </div>
                            <div className="psec-intro-image-frame">
                                <img src="https://placehold.co/900x1000?text=Private+Jet+Luxury+Travel" alt="Private jet aviation for discreet luxury travel" />
                                <div className="psec-intro-badge-float">
                                    <Lock size={18} />
                                    <span>Confidential by Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY PRIVACY MATTERS */}
                <section className="psec-why-section">
                    <div className="psec-why-container">
                        <div className="psec-why-header">
                            <span className="psec-eyebrow-label">BEYOND THE DESTINATION</span>
                            <h2 className="psec-section-heading">Why Privacy Matters in Luxury Travel</h2>
                            <div className="psec-heading-bar psec-bar-center"></div>
                            <p className="psec-lead-paragraph">
                                Luxury travelers often face unique concerns that go beyond choosing a destination. Privacy-focused travel planning helps:
                            </p>
                        </div>
                        <div className="psec-why-grid">
                            {psecWhyPrivacy.map((item, idx) => {
                                const PsecIcon = item.icon
                                return (
                                    <div key={idx} className="psec-why-card">
                                        <div className="psec-why-icon-ring">
                                            <PsecIcon size={22} />
                                        </div>
                                        <p className="psec-why-card-text">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="psec-lead-paragraph" style={{ textAlign: 'center', color: '#cbd5e1', maxWidth: '780px', margin: '40px auto 0' }}>
                            Every itinerary is created with your comfort, security, and preferences in mind.
                        </p>
                    </div>
                </section>

                {/* PERSONALIZED & CONFIDENTIAL TRAVEL PLANNING */}
                <section className="psec-service-section">
                    <div className="psec-service-container">
                        <div className="psec-service-grid">
                            <div className="psec-service-media">
                                <img className="psec-media-tall" src="https://placehold.co/700x900?text=Confidential+Travel+Planning" alt="Confidential travel planning consultation" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Customized+Itinerary" alt="Customized itinerary planning" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Secure+Communication" alt="Secure communication travel planning" />
                            </div>
                            <div className="psec-service-copy">
                                <span className="psec-service-eyebrow">
                                    <KeyRound size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Personalized & Confidential Travel Planning
                                </span>
                                <h3 className="psec-service-title">No two travelers have the same requirements.</h3>
                                <p className="psec-service-intro">Our planning process includes:</p>
                                <ul className="psec-service-list">
                                    {['Confidential consultations', 'Customized itineraries', 'Flexible scheduling', 'Private reservations', 'Secure communication', 'Personalized recommendations', 'Family travel coordination', 'Executive travel support'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="psec-service-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="psec-service-footnote">
                                    We work closely with trusted global partners to ensure every aspect of your journey remains private and seamless.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRIVATE AVIATION & VIP AIRPORT SERVICES */}
                <section className="psec-service-section psec-service-soft">
                    <div className="psec-service-container">
                        <div className="psec-service-grid psec-service-reverse">
                            <div className="psec-service-media">
                                <img className="psec-media-tall" src="https://placehold.co/700x900?text=Private+Jet+Charter" alt="Private jet charter aviation service" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=VIP+Airport+Assistance" alt="VIP airport assistance" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Helicopter+Transfer" alt="Helicopter transfer luxury travel" />
                            </div>
                            <div className="psec-service-copy">
                                <span className="psec-service-eyebrow">
                                    <Plane size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Private Aviation & VIP Airport Services
                                </span>
                                <h3 className="psec-service-title">Private aviation provides greater flexibility, convenience, and discretion.</h3>
                                <p className="psec-service-intro">Services may include:</p>
                                <ul className="psec-service-list">
                                    {['Private jet charters', 'Executive aviation', 'VIP airport assistance', 'Private terminals (where available)', 'Helicopter transfers', 'Luxury ground transportation', 'Meet-and-greet services', 'Priority arrival coordination'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="psec-service-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="psec-service-footnote">
                                    These services help reduce waiting times while providing a smoother travel experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECURE GROUND TRANSPORTATION */}
                <section className="psec-service-section">
                    <div className="psec-service-container">
                        <div className="psec-service-grid">
                            <div className="psec-service-media">
                                <img className="psec-media-tall" src="https://placehold.co/700x900?text=Chauffeur+Driven+Vehicle" alt="Chauffeur-driven luxury vehicle" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Executive+Transportation" alt="Executive transportation service" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Luxury+SUV+Transfer" alt="Luxury SUV airport transfer" />
                            </div>
                            <div className="psec-service-copy">
                                <span className="psec-service-eyebrow">
                                    <Car size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Secure Ground Transportation
                                </span>
                                <h3 className="psec-service-title">Reliable transportation is an essential part of luxury travel.</h3>
                                <p className="psec-service-intro">We coordinate:</p>
                                <ul className="psec-service-list">
                                    {['Chauffeur-driven luxury vehicles', 'Airport transfers', 'Executive transportation', 'Family transportation', 'Private drivers', 'Luxury SUVs', 'Regional transfers', 'Customized transportation schedules'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="psec-service-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="psec-service-footnote">
                                    Every transfer is arranged to maximize comfort, reliability, and convenience.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRIVATE VILLAS, RESORTS & LUXURY CRUISES */}
                <section className="psec-stay-section">
                    <div className="psec-stay-container">
                        <div className="psec-stay-header">
                            <span className="psec-eyebrow-label">
                                <Home size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Private Villas, Resorts & Luxury Cruises
                            </span>
                            <h2 className="psec-section-heading">Privacy continues throughout your vacation.</h2>
                            <div className="psec-heading-bar psec-bar-center"></div>
                            <p className="psec-lead-paragraph">Accommodation options include:</p>
                        </div>
                        <div className="psec-stay-grid">
                            {psecStayTypes.map((stay, idx) => (
                                <div key={idx} className="psec-stay-card">
                                    <img src={stay.img} alt={`${stay.name} discreet luxury accommodation`} />
                                    <div className="psec-stay-card-overlay">
                                        <h4 className="psec-stay-card-name">{stay.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="psec-stay-footer-note">
                            We recommend accommodations known for exceptional service, discretion, and personalized guest experiences.
                        </p>
                    </div>
                </section>

                {/* FAMILY PRIVACY & SECURITY */}
                <section className="psec-service-section psec-service-soft">
                    <div className="psec-service-container">
                        <div className="psec-service-grid psec-service-reverse">
                            <div className="psec-service-media">
                                <img className="psec-media-tall" src="https://placehold.co/700x900?text=Family+Privacy+Travel" alt="Family privacy and secure travel" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Private+Family+Excursion" alt="Private family excursion" />
                                <img className="psec-media-short" src="https://placehold.co/700x440?text=Family+Activities" alt="Children's activities on secure family trip" />
                            </div>
                            <div className="psec-service-copy">
                                <span className="psec-service-eyebrow">
                                    <ShieldAlert size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                    Family Privacy & Security
                                </span>
                                <h3 className="psec-service-title">Traveling with family requires thoughtful planning.</h3>
                                <p className="psec-service-intro">We help coordinate:</p>
                                <ul className="psec-service-list">
                                    {['Multigenerational travel', 'Family celebrations', "Children's activities", 'Private family excursions', 'Secure transportation', 'Flexible itineraries', 'Educational experiences', 'Personalized concierge services'].map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={18} className="psec-service-list-icon" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="psec-service-footnote">
                                    Every member of your family can enjoy a relaxing vacation with added peace of mind.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONCIERGE SERVICES THROUGHOUT YOUR JOURNEY */}
                <section className="psec-concierge-section">
                    <div className="psec-concierge-container">
                        <span className="psec-eyebrow-label">
                            <Star size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                            Concierge Services Throughout Your Journey
                        </span>
                        <h2 className="psec-section-heading">Our concierge team supports you before, during, and after your trip.</h2>
                        <div className="psec-heading-bar psec-bar-center"></div>
                        <p className="psec-lead-paragraph">Services include:</p>
                        <div className="psec-concierge-pills-wrap">
                            {psecConciergeServices.map((service, idx) => (
                                <span key={idx} className="psec-concierge-pill">{service}</span>
                            ))}
                        </div>
                        <p className="psec-lead-paragraph" style={{ marginTop: '30px' }}>
                            Our goal is to ensure every journey is effortless and personalized.
                        </p>
                    </div>
                </section>

                {/* WHY CHOOSE TRIPS & SHIPS */}
                <section className="psec-why-us-section">
                    <div className="psec-why-us-container">
                        <div className="psec-why-us-top">
                            <div className="psec-why-us-copy">
                                <span className="psec-eyebrow-label">TRUST, DISCRETION, EXPERTISE</span>
                                <h2 className="psec-section-heading">Why Choose Trips & Ships Luxury Travel?</h2>
                                <div className="psec-heading-bar"></div>
                                <p className="psec-lead-paragraph">
                                    Luxury travel requires trust, discretion, and expertise. Clients choose us because we provide:
                                </p>
                            </div>
                            <div className="psec-why-us-image">
                                <img src="https://placehold.co/900x650?text=Discreet+Executive+Travel" alt="Discreet executive luxury travel experience" />
                            </div>
                        </div>
                        <div className="psec-why-us-grid">
                            {psecWhyChooseUs.map((item, idx) => {
                                const PsecIcon = item.icon
                                return (
                                    <div key={idx} className="psec-why-us-card">
                                        <div className="psec-why-us-icon">
                                            <PsecIcon size={22} />
                                        </div>
                                        <p className="psec-why-us-card-title">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className="psec-lead-paragraph" style={{ textAlign: 'center', maxWidth: '820px', margin: '40px auto 0' }}>
                            Whether you're planning a private family vacation, executive retreat, luxury cruise, or international adventure, we create travel experiences where privacy and exceptional service go hand in hand.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="psec-faq-section">
                    <div className="psec-faq-container">
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="psec-section-heading">Frequently Asked Questions</h2>
                            <div className="psec-heading-bar psec-bar-center"></div>
                        </div>
                        <div className="psec-faq-list">
                            {psecFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="psec-faq-item"
                                    onClick={() => psecToggleFaq(index)}
                                >
                                    <div className="psec-faq-question-row">
                                        <span>{faq.question}</span>
                                        <span className="psec-faq-toggle">
                                            {psecActiveFaq === index ? "−" : "+"}
                                        </span>
                                    </div>
                                    {psecActiveFaq === index && (
                                        <p className="psec-faq-answer">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="psec-cta-section">
                    <div className="psec-cta-bg-pattern"></div>
                    <div className="psec-cta-inner">
                        <h2 className="psec-cta-heading">Ready to Plan Your Confidential Luxury Journey?</h2>
                        <div className="psec-cta-separator"></div>
                        <p className="psec-cta-text">
                            Whether you're planning a private family vacation, executive retreat, luxury cruise, or international adventure, we create travel experiences where privacy and exceptional service go hand in hand.
                        </p>
                        <div className="psec-cta-btn-row">
                            <button className="psec-btn-primary">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="psec-btn-outline">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default PrivacySecurityTravelPlanning