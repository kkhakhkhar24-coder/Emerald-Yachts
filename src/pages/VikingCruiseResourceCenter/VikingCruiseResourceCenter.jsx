import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Gem, ChevronRight, Phone, Globe,
    Award, GraduationCap, Compass,
    Crown,
    Clock,
    Mic,
    FileText
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

// Image imports from VikingCruiseResourceCenter assets folder
import hero1 from '../../assets/VikingCruiseResourceCenter/Budapest, Hungary_2026-04-13_18-46-22.jpg'
import hero2 from '../../assets/VikingCruiseResourceCenter/Exterior_2026-04-13_19-02-37.jpg'
import hero3 from '../../assets/VikingCruiseResourceCenter/Flam, Norway_2026-04-13_18-48-05.jpg'
import riverCruiseImg from '../../assets/VikingCruiseResourceCenter/Budapest, Hungary_2026-04-13_18-46-23.jpg'
import oceanCruiseImg from '../../assets/VikingCruiseResourceCenter/Exterior_2026-04-13_19-02-39.jpg'
import expeditionCruiseImg from '../../assets/VikingCruiseResourceCenter/Expedition Ship - Antarctica_2026-04-13_19-00-56.jpg'
import europeImg from '../../assets/VikingCruiseResourceCenter/Amsterdam, The Netherlands_2026-04-13_18-45-31.jpg'
import alaskaImg from '../../assets/VikingCruiseResourceCenter/Lofoten Islands, Norway_2026-04-13_18-48-24.jpg'
import medImg from '../../assets/VikingCruiseResourceCenter/Santorini, Greece_2026-04-13_18-49-07.jpg'
import egyptImg from '../../assets/VikingCruiseResourceCenter/Cairo, Egypt_2026-04-13_18-46-24.jpg'
import angelaHughesImg from '../../assets/Angela_Hughes.jpg'
import profileAH from '../../assets/VikingCruiseResourceCenter/Profile_AH.jpg'

function VikingCruiseResourceCenter() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        if (mediHeroImages.length > 0) {
            const mediTimer = setInterval(() => {
                setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
            }, 5000)
            return () => clearInterval(mediTimer)
        }
    }, [mediHeroImages.length])

    const vikingCruiseImages = [riverCruiseImg, oceanCruiseImg, expeditionCruiseImg]

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedCruiseType, setMediSelectedCruiseType] = useState(0)
    const [isMobileViewport, setIsMobileViewport] = useState(false)
    const [isTabletViewport, setIsTabletViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 600)
            setIsTabletViewport(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const vikingFaqs = [
        { question: "What is the Viking Cruise Resource Center?", answer: "The Viking Cruise Resource Center is a collection of planning guides, cruise comparisons, destination information, and travel resources related to Viking Cruises." },
        { question: "Does Viking offer river cruises?", answer: "Yes. Viking operates one of the world's largest river cruise fleets worldwide." },
        { question: "Does Viking offer ocean cruises?", answer: "Yes. Viking operates a fleet of adults-only ocean cruise ships." },
        { question: "Does Viking offer expedition cruises?", answer: "Yes. Viking Expedition Cruises visit destinations such as Antarctica, the Arctic, and the Great Lakes." },
        { question: "What is included in a Viking cruise fare?", answer: "Typically accommodations, dining, Wi-Fi, enrichment programs, and at least one shore excursion per port." },
        { question: "Are Viking cruises adults only?", answer: "Yes. Viking welcomes guests age 18 and older." },
        { question: "Which Viking cruise is best for first-time travelers?", answer: "Many first-time guests choose the Rhine Getaway or Grand European Tour river itineraries." },
        { question: "Is Viking considered a luxury cruise line?", answer: "Viking is generally classified as an upper-premium to luxury cruise brand." },
        { question: "What destinations does Viking visit?", answer: "Viking sails throughout Europe, Asia, Alaska, the Mediterranean, Antarctica, Egypt, and many other regions." },
        { question: "Is Wi-Fi included on Viking cruises?", answer: "Yes. Complimentary Wi-Fi is typically included." },
        { question: "Does Viking include shore excursions?", answer: "Yes. Most itineraries include one excursion in every port." },
        { question: "Is Viking worth the cost?", answer: "Many travelers consider Viking an excellent value because of its included amenities and destination-focused experience." },
        { question: "How far in advance should I book a Viking cruise?", answer: "Many travelers book 12–18 months in advance to secure preferred cabins and promotional pricing." },
        { question: "Can a travel advisor help with Viking bookings?", answer: "Yes. A cruise specialist can help compare itineraries, cabin categories, and promotional offers." },
        { question: "How do I choose between Viking River and Ocean Cruises?", answer: "River cruises focus on cultural immersion and historic cities, while ocean cruises provide broader destination options and larger ship experiences." }
    ]

    const vikingSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center",
                "name": "Viking Cruise Resource Center",
                "url": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center",
                "description": "Comprehensive Viking Cruise Resource Center featuring planning guides, destination information, cruise comparisons, reviews, and expert travel advice.",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntity": { "@type": "Article", "@id": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center#article" }
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
                "description": "Luxury travel agency specializing in cruise vacations, river cruises, expedition cruises and personalized travel planning."
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
                "@id": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center#article",
                "headline": "Viking Cruise Resource Center",
                "url": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center",
                "description": "Expert Viking cruise planning resource featuring destination guides, cruise comparisons, travel tips, and answers to common Viking cruise questions.",
                "image": "https://www.tripsshipsluxurytravel.com/images/viking-cruise-resource-center.jpg",
                "author": { "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes" },
                "publisher": { "@id": "https://www.tripsshipsluxurytravel.com/#organization" },
                "mainEntityOfPage": { "@id": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center" }
            },
            {
                "@type": "Service",
                "name": "Viking Cruise Planning",
                "provider": { "@id": "https://www.tripsshipsluxurytravel.com/#travelagency" },
                "serviceType": "Viking Cruise Consulting",
                "description": "Professional Viking cruise planning and consultation services helping travelers choose the right ship, destination, and itinerary."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsshipsluxurytravel.com" },
                    { "@type": "ListItem", "position": 2, "name": "Viking Cruises", "item": "https://www.tripsshipsluxurytravel.com/viking-cruises" },
                    { "@type": "ListItem", "position": 3, "name": "Viking Cruise Resource Center", "item": "https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": vikingFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    }

    return (
        <>
            <Helmet>
                <title>Viking Cruise Resource Center | Expert Viking Cruise Advice</title>
                <meta name="title" content="Viking Cruise Resource Center | Expert Viking Cruise Advice" />
                <meta name="description" content="Explore our Viking Cruise Resource Center featuring expert guides, cruise comparisons, destination insights, ship reviews, planning tips, and answers to common Viking cruise questions." />
                <meta name="keywords" content="Viking Cruise Resource Center, Viking Cruise Planning, Viking Cruise Guide, Viking River Cruise Information, Viking Ocean Cruise Resources, Viking Cruise Tips, Viking Cruise Travel Advisor" />
                <link rel="canonical" href="https://www.tripsshipsluxurytravel.com/viking-cruise-resource-center" />
                <script type="application/ld+json">
                    {JSON.stringify(vikingSchemaData)}
                </script>
            </Helmet>

            <Navbar />

            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Expert Viking Cruise Planning Guide & Resources</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Viking Cruise Resource Center
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        maxWidth: '700px',
                        margin: '20px auto 0',
                        lineHeight: '1.6',
                        textAlign: 'center'
                    }}>
                        Explore our comprehensive collection of expert insights, travel planning advice, cruise comparisons, destination guides, and FAQs about Viking Cruises.
                    </p>
                </div>
            </section>

            {/* ═══════════════ PREMIUM INTRO SECTION ═══════════════ */}
            <section className="medi-intro-section medi-premium-intro-section">
                <style>{`
                    .medi-immersion-card-item:hover .medi-immersion-icon-box {
                        background-color: #274472 !important;
                        border-color: #274472 !important;
                        transform: scale(1.1);
                    }
                    .medi-immersion-card-item:hover .medi-immersion-icon-box svg {
                        stroke: #ffffff !important;
                    }
                    .medi-premium-editorial-block::-webkit-scrollbar { width: 6px; }
                    .medi-premium-editorial-block::-webkit-scrollbar-track { background: transparent; }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb { background: rgba(39, 68, 114, 0.2); border-radius: 3px; }
                    .medi-premium-editorial-block::-webkit-scrollbar-thumb:hover { background: rgba(39, 68, 114, 0.4); }
                `}</style>

                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: isTabletViewport ? '1fr' : '1.2fr 0.8fr',
                        gap: '60px',
                        alignItems: 'start'
                    }}>

                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                            textAlign: isTabletViewport ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isTabletViewport ? 'center' : 'flex-start'
                        }}>
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block', fontSize: '12px', fontWeight: '700',
                                color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: isTabletViewport ? 'none' : '2px solid #274472',
                                paddingLeft: isTabletViewport ? '0' : '10px'
                            }}>
                                Plan Your Perfect Viking Voyage
                            </span>

                            <h2 className="medi-premium-heading" style={{
                                color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2', margin: '0 0 20px 0'
                            }}>
                                Planning a Viking Cruise Can Feel Overwhelming
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px', height: '3px', background: '#3b82f6',
                                marginBottom: '36px',
                                margin: isTabletViewport ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Deciding between river cruises, ocean voyages, expedition cruises, destinations, cabin categories, and itineraries is no small task.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                That's why we've created the Viking Cruise Resource Center—a comprehensive collection of expert insights, travel planning advice, cruise comparisons, destination guides, and answers to the most frequently asked questions about Viking Cruises.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                                Whether you're considering your first Viking voyage or you're a returning guest looking for your next adventure, this resource hub will help you make informed decisions and maximize your cruise experience.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                                    What Viking Voyages Emphasize:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobileViewport ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px', textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Adults-Only Travel", i: <Users size={20} /> },
                                        { t: "Destination-Focused", i: <MapPin size={20} /> },
                                        { t: "Scandinavian Design", i: <Gem size={20} /> },
                                        { t: "Cultural Enrichment", i: <GraduationCap size={20} /> },
                                        { t: "Exceptional Value", i: <Star size={20} /> },
                                        { t: "River, Ocean & Expedition", i: <Ship size={20} /> }
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-immersion-card-item">
                                            <div className="medi-immersion-icon-box" style={{ transition: 'all 0.3s ease' }}>
                                                {item.i}
                                            </div>
                                            <span className="medi-immersion-card-title" style={{ color: '#1e293b' }}>{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Signature Expert Block */}
                        <div className="medi-premium-signature-panel" style={{
                            marginTop: isTabletViewport ? '40px' : '0',
                            borderLeftColor: '#274472'
                        }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472', overflow: 'hidden' }}>
                                        <img src={angelaHughesImg} alt="Angela Hughes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CRUISE EXPERT</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                                    At Trips & Ships Luxury Travel, we help travelers discover the best of Viking Cruises. Unlike many mainstream cruise lines, Viking focuses on immersive travel experiences rather than onboard attractions. For many travelers, that's exactly the appeal.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes helps travelers determine whether Viking is the best fit for their travel goals and budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY TRAVELERS CHOOSE VIKING ═══════════════ */}
            <section style={{ padding: isMobileViewport ? '60px 12px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            The Viking Difference
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: "#274472", fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Travelers Choose Viking
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>
                            Viking has become one of the most recognized names in premium and luxury cruising by focusing on what matters most: the destination.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Star size={20} style={{ color: '#3b82f6' }} /> Highlights of Sailing with Viking
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: isMobileViewport ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: isMobileViewport ? '12px' : '20px' }}>
                                {[
                                    { text: "Adults-only travel", icon: <Users size={18} /> },
                                    { text: "Destination-focused itineraries", icon: <MapPin size={18} /> },
                                    { text: "Scandinavian-inspired design", icon: <Gem size={18} /> },
                                    { text: "Cultural enrichment programs", icon: <GraduationCap size={18} /> },
                                    { text: "Exceptional value", icon: <Award size={18} /> },
                                    { text: "River, ocean, and expedition cruises", icon: <Ship size={18} /> }
                                ].map((pill, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                        <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                                        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: isMobileViewport ? '24px 16px' : '40px', borderRadius: isMobileViewport ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                                    Immersive Travel Experiences
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                                    Unlike many mainstream cruise lines, Viking focuses on immersive travel experiences rather than onboard attractions. For many travelers, that's exactly the appeal.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Cultural immersion over crowds", "Thoughtfully curated shore excursions", "No children, no casinos, no stress"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                                            <CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                                        "Viking focuses on the destination, allowing you to travel elegantly and learn effortlessly."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ CRUISE TYPES SHOWCASE ═══════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">EXPLORE YOUR OPTIONS</span>
                        <h2 className="medi-itinerary-showcase-heading">Explore Viking Cruise Types</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>
                            Viking offers distinct ways to see the world. Whether you prefer the intimate waterways of Europe or the vast oceans, there is a Viking voyage tailored for you.
                        </p>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["Viking River Cruises", "Viking Ocean Cruises", "Viking Expedition Cruises"].map((title, idx) => (
                                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedCruiseType === idx ? 'active' : ''}`} onClick={() => setMediSelectedCruiseType(idx)}>
                                    <span className="medi-itinerary-tab-number">0{idx + 1}</span>
                                    <div className="medi-itinerary-tab-meta">
                                        <span className="medi-itinerary-tab-title">{title}</span>
                                    </div>
                                    <ChevronRight size={18} className="medi-itinerary-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        <div className="medi-itinerary-showcase-card">
                            <div className="medi-itinerary-showcase-image-wrapper" style={{ backgroundColor: '#0f1c2e' }}>
                                {vikingCruiseImages[mediSelectedCruiseType] && (
                                    <img src={vikingCruiseImages[mediSelectedCruiseType]} alt={["Viking River Cruises", "Viking Ocean Cruises", "Viking Expedition Cruises"][mediSelectedCruiseType]} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                                )}
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">CRUISE TYPE SPOTLIGHT</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {["Viking River Cruises", "Viking Ocean Cruises", "Viking Expedition Cruises"][mediSelectedCruiseType]}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Overview:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                ["Historic cities and cultural landmarks", "Intimate access to the heart of Europe", "World's largest river cruise fleet"],
                                                ["Luxury accommodations with private verandas", "Destination-focused itineraries", "Included shore excursions in every port"],
                                                ["Adventure to Antarctica, Arctic, and Great Lakes", "Science laboratories and educational programming", "Advanced exploration technology"]
                                            ][mediSelectedCruiseType].map((feature, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Popular Destinations:</h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[
                                                ["Rhine River", "Danube River", "Seine River", "Douro River", "Nile River", "Mekong River"],
                                                ["Mediterranean", "Northern Europe", "Alaska", "Caribbean", "Asia", "Australia"],
                                                ["Antarctica", "The Arctic", "Great Lakes", "South America"]
                                            ][mediSelectedCruiseType].map((tag, i) => (
                                                <span key={i} className="medi-itinerary-details-chip">
                                                    <MapPin size={12} className="medi-itinerary-chip-icon" />
                                                    <span>{tag}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                                    <p style={{ fontSize: '15px', color: '#64748b', fontStyle: 'italic', margin: 0, lineHeight: '1.6' }}>
                                        {mediSelectedCruiseType === 0 && "Viking operates one of the world's largest river cruise fleets, providing intimate access to historic cities and cultural landmarks."}
                                        {mediSelectedCruiseType === 1 && "Viking Ocean Cruises combines luxury accommodations with destination immersion aboard adults-only ships."}
                                        {mediSelectedCruiseType === 2 && "For travelers seeking adventure, Viking Expeditions explores the most remote corners of the globe with advanced exploration technology."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION 1: VIKING EXPERIENCE ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            See It In Motion
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Experience the World with Viking
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#cbd5e1', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
                            Discover what it's like to sail with Viking. From elegant Scandinavian design to deep cultural immersion, every moment is crafted for the curious traveler.
                        </p>
                    </div>

                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/43X5oqTwUaU"
                            title="Viking Cruises Experience"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ MOST POPULAR DESTINATIONS ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
                    .viking-dest-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        grid-auto-rows: 420px;
                        gap: 24px;
                        max-width: 1240px;
                        margin: 0 auto;
                    }
                    .viking-dest-item {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: #1c2f4a;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .viking-dest-item:hover .viking-dest-img {
                        transform: scale(1.08);
                    }
                    .viking-dest-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to top, rgba(10,17,32,1) 0%, rgba(10,17,32,0.85) 30%, rgba(10,17,32,0.2) 60%, transparent 100%);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: flex-start;
                        padding: clamp(24px, 5vw, 45px) clamp(20px, 4vw, 35px);
                        color: #ffffff;
                        z-index: 2;
                        text-align: left;
                    }
                    .viking-dest-tag { font-size: clamp(10px, 2vw, 11px); font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #60a5fa; margin-bottom: 10px; }
                    .viking-dest-title { font-size: clamp(20px, 3vw, 24px); font-weight: 700; margin: 0 0 12px 0; line-height: 1.2; color: #ffffff; text-shadow: 0 2px 15px rgba(0,0,0,0.8); }
                    .viking-dest-desc { font-size: clamp(14px, 2vw, 15px); color: rgba(255,255,255,0.95); line-height: 1.6; margin: 0; font-weight: 400; max-width: 400px; }
                    @media (max-width: 1024px) { .viking-dest-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 380px; } }
                    @media (max-width: 650px) { .viking-dest-grid { grid-template-columns: 1fr; grid-auto-rows: 340px; gap: 16px; } .viking-dest-overlay { padding: 30px 20px; } .viking-dest-desc { max-width: 100%; } }
                    @media (max-width: 380px) { .viking-dest-grid { grid-auto-rows: 310px; } .viking-dest-title { font-size: 19px; } }
                `}</style>

                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>
                        Where Viking Can Take You
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Most Popular Viking Destinations
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="viking-dest-grid">
                    {[
                        { tag: "Europe", title: "Europe", desc: "Europe remains Viking's most requested region. Popular itineraries include Rhine Getaway, Grand European Tour, Paris and the Heart of Normandy, and Cities of Light.", img: europeImg },
                        { tag: "Alaska", title: "Alaska", desc: "Viking's Alaska itineraries combine glacier viewing, wildlife encounters, cultural experiences, and scenic cruising.", img: alaskaImg },
                        { tag: "Mediterranean", title: "Mediterranean", desc: "Mediterranean cruises showcase ancient history, coastal villages, culinary experiences, and world-famous landmarks.", img: medImg },
                        { tag: "Egypt", title: "Egypt", desc: "The Nile River remains one of Viking's most distinctive experiences. Travelers explore Luxor, Aswan, Valley of the Kings, and ancient temples.", img: egyptImg }
                    ].map((dest, idx) => (
                        <div key={idx} className="viking-dest-item">
                            <img src={dest.img} alt={dest.title} className="viking-dest-img" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, transition: 'transform 0.8s ease' }} />
                            <div className="viking-dest-overlay">
                                <span className="viking-dest-tag">{dest.tag}</span>
                                <h3 className="viking-dest-title">{dest.title}</h3>
                                <p className="viking-dest-desc">{dest.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ PLANNING RESOURCES & WHAT'S INCLUDED ═══════════════ */}
            <section style={{ padding: isMobileViewport ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Before You Book
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Viking Cruise Planning Resources
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr', gap: isMobileViewport ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: isMobileViewport ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}>
                                <Compass size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Questions We Answer</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Expert Guidance</p>
                            </div>
                            <div style={{ padding: isMobileViewport ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Before booking, travelers often ask:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Which Viking ship is best?", "What's included in the fare?", "Are shore excursions included?", "Is Viking worth the cost?", "Which cabin category should I choose?", "How early should I book?"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#ffffff', borderRadius: isMobileViewport ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}>
                                <Gem size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>What's Included?</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Exceptional Value</p>
                            </div>
                            <div style={{ padding: isMobileViewport ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Depending on the itinerary, Viking typically includes:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Accommodations", "Dining", "Wi-Fi", "One shore excursion in every port", "Destination lectures", "Specialty dining", "Beer and wine with lunch and dinner"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ RIVER VS OCEAN CRUISES ═══════════════ */}
            <section style={{ padding: isMobileViewport ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Making the Choice
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Viking River vs Ocean Cruises
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Many travelers struggle to decide between Viking River and Viking Ocean cruises. Both offer exceptional destination-focused travel, but the experiences differ.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr', gap: isMobileViewport ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: isMobileViewport ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}>
                                <Anchor size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>River Cruises</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Intimate & Immersive</p>
                            </div>
                            <div style={{ padding: isMobileViewport ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px', fontWeight: '600' }}>
                                    Best for:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["History lovers", "Cultural travelers", "First-time cruisers", "Travelers who enjoy small ships"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#ffffff', borderRadius: isMobileViewport ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}>
                                <Ship size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Ocean Cruises</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Spacious & Luxurious</p>
                            </div>
                            <div style={{ padding: isMobileViewport ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px', fontWeight: '600' }}>
                                    Best for:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Longer itineraries", "Sea days", "Broader destination options", "Luxury ship experiences"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ VIDEO SECTION 2: SCENIC JOURNEY ═══════════════ */}
            <section style={{ padding: '80px 20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', display: 'block', marginBottom: '15px' }}>
                            A Journey Through Europe
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            The Viking Experience Like Never Before
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ color: '#475569', fontSize: '18px', marginTop: '25px', lineHeight: '1.7' }}>
                            From the historic cities of Europe to the majestic glaciers of Alaska, experience the beauty and culture that make Viking Cruises one of the world's most cherished travel choices.
                        </p>
                    </div>
                    <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(15, 28, 46, 0.15)', border: '1px solid #e2e8f0', aspectRatio: '16/9', backgroundColor: '#000' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/mm-TtRkvDwc"
                            title="Viking Cruises Scenic Journey"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY WORK WITH A SPECIALIST ═══════════════ */}
            <section style={{ padding: isMobileViewport ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Expert Guidance
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Work With a Viking Cruise Specialist?
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#cbd5e1', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            While Viking offers a straightforward booking process, working with a cruise advisor provides additional benefits. We help determine whether Viking is the best fit for your goals and budget.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobileViewport ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
                        {[
                            { title: 'Compare Itineraries', desc: 'We help you compare multiple Viking itineraries to find the exact route and pace that suits your travel style.', icon: <MapPin size={24} /> },
                            { title: 'Select the Right Cabin', desc: 'Get expert advice on which veranda or suite category provides the best value and view for your specific ship.', icon: <Gem size={24} /> },
                            { title: 'Understand Promotions', desc: 'Navigate complex promotional offers, included airfare deals, and business class upgrades seamlessly.', icon: <Star size={24} /> },
                            { title: 'Coordinate Pre/Post Travel', desc: 'We plan your hotels, transfers, and custom extensions before and after your Viking cruise.', icon: <Globe size={24} /> },
                            { title: 'Evaluate Alternatives', desc: 'Curious if another line like Tauck or Uniworld is better? We provide objective cruise line comparisons.', icon: <Compass size={24} /> },
                            { title: 'Maximize Overall Value', desc: 'Ensure you are getting the most out of your investment with personalized planning support.', icon: <Award size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'flex-start' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '8px', margin: '0 0 8px' }}>{item.title}</h4>
                                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY  (medi-authority-section)
            ════════════════════════════════════════════════════════════ */}
            <section className="medi-authority-section">
                <style>{`
                    .medi-authority-section {
                        background: #f1f5f9;
                        position: relative;
                        overflow: hidden;
                        padding: 100px 20px;
                        border-bottom: 1px solid #e2e8f0;
                        font-family: 'Inter', -apple-system, sans-serif;
                    }

                    .medi-authority-section::before {
                        content: '';
                        position: absolute;
                        width: 800px;
                        height: 800px;
                        border-radius: 50%;
                        background: radial-gradient(circle, #ffffff 0%, transparent 70%);
                        top: -300px;
                        right: -200px;
                        pointer-events: none;
                        z-index: 1;
                        opacity: 0.5;
                    }

                    .medi-authority-container {
                        max-width: 1100px;
                        margin: 0 auto;
                        position: relative;
                        z-index: 2;
                    }

                    .medi-authority-header-block {
                        text-align: center;
                        margin-bottom: 60px;
                    }

                    .medi-authority-eyebrow {
                        display: inline-block;
                        font-size: 13px;
                        font-weight: 700;
                        letter-spacing: 0.25em;
                        color: #274472;
                        margin-bottom: 16px;
                        text-transform: uppercase;
                    }

                    .medi-prestige-plaque-wrapper {
                        display: flex;
                        flex-direction: row;
                        background: #ffffff;
                        border-radius: 32px;
                        border: 1px solid #e2e8f0;
                        box-shadow: 0 40px 90px rgba(15, 28, 46, 0.05);
                        overflow: hidden;
                        position: relative;
                        height: 580px;
                    }

                    .medi-prestige-plaque-wrapper::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 8px;
                        height: 100%;
                        background: linear-gradient(to bottom, #274472, #274472cc);
                    }

                    .medi-prestige-identity-card {
                        flex: 0 0 350px;
                        background: linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 100%);
                        padding: 40px 30px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        color: #ffffff;
                        position: relative;
                        height: 100%;
                    }

                    .medi-prestige-seal-ring {
                        width: 100px !important;
                        height: 100px !important;
                        border-radius: 50% !important;
                        border: none !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        margin-bottom: 24px !important;
                        position: relative !important;
                        animation: none !important;
                    }

                    .medi-prestige-rotating-border {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        border-radius: 50%;
                        border: 2px dashed rgba(255, 255, 255, 0.2);
                        animation: slow-spin 30s linear infinite;
                        z-index: 1;
                    }

                    .medi-prestige-seal-ring img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 2px solid rgba(255, 255, 255, 0.2);
                        position: relative;
                        z-index: 2;
                    }

                    @keyframes slow-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }

                    .medi-prestige-initials {
                        font-size: 28px;
                        font-weight: 500;
                        letter-spacing: 0.1em;
                        color: #eff6ff;
                        animation: reverse-spin 30s linear infinite;
                    }

                    @keyframes reverse-spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(-360deg); }
                    }

                    .medi-prestige-label {
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.2em;
                        color: #cbd5e1;
                        text-transform: uppercase;
                        margin-bottom: 10px;
                    }

                    .medi-prestige-name {
                        font-size: 28px;
                        font-family: serif;
                        font-weight: 500;
                        color: #ffffff;
                        margin: 0 0 12px 0;
                        line-height: 1.2;
                    }

                    .medi-prestige-role-pill {
                        background: rgba(39, 68, 114, 0.2);
                        border: 1px solid rgba(39, 68, 114, 0.3);
                        padding: 6px 14px;
                        border-radius: 30px;
                        font-size: 13px;
                        font-weight: 600;
                        color: #eff6ff;
                        margin-bottom: 24px;
                    }

                    .medi-prestige-meta-box {
                        width: 100%;
                        position: relative;
                        padding-top: 20px;
                    }

                    .medi-prestige-meta-line {
                        width: 50px;
                        height: 1px;
                        background: rgba(255, 255, 255, 0.15);
                        margin: 0 auto 16px;
                    }

                    .medi-prestige-meta-text {
                        font-size: 12px;
                        color: #cbd5e1;
                        opacity: 0.7;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                    }

                    .medi-prestige-credentials-column {
                        flex: 1;
                        padding: 40px;
                        background: #ffffff;
                        overflow-y: auto;
                        height: 100%;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar {
                        width: 6px;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar-track {
                        background: #eff6ff;
                        border-radius: 4px;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar-thumb {
                        background: #274472cc;
                        border-radius: 4px;
                    }

                    .medi-prestige-credentials-column::-webkit-scrollbar-thumb:hover {
                        background: #274472;
                    }

                    .medi-prestige-list {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                    }

                    .medi-prestige-item-card {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        padding: 16px 24px;
                        border-radius: 14px;
                        background: #ffffff;
                        border: 1px solid #eff6ff;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        position: relative;
                        overflow: hidden;
                    }

                    .medi-prestige-item-accent-bar {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 4px;
                        height: 100%;
                        background: #274472;
                        transform: scaleY(0);
                        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        transform-origin: bottom;
                    }

                    .medi-prestige-item-card:hover {
                        transform: translateX(6px);
                        box-shadow: 0 10px 24px rgba(15, 28, 46, 0.04);
                        border-color: rgba(39, 68, 114, 0.3);
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-accent-bar {
                        transform: scaleY(1);
                    }

                    .medi-prestige-item-icon-box {
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                        background: #eff6ff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #274472;
                        flex-shrink: 0;
                        transition: all 0.4s ease;
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-icon-box {
                        background: #274472;
                        color: #ffffff;
                        transform: scale(1.05);
                    }

                    .medi-prestige-item-content {
                        display: flex;
                        flex-direction: column;
                        gap: 2px;
                    }

                    .medi-prestige-item-category {
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.15em;
                        color: #274472;
                        opacity: 0.6;
                        text-transform: uppercase;
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-category {
                        color: #274472;
                        opacity: 0.9;
                    }

                    .medi-prestige-item-text {
                        font-size: 15px;
                        font-weight: 500;
                        color: #0f1c2e;
                        margin: 0;
                        line-height: 1.5;
                        transition: color 0.3s ease;
                    }

                    .medi-prestige-item-card:hover .medi-prestige-item-text {
                        color: #274472;
                    }

                    @media (max-width: 992px) {
                        .medi-prestige-plaque-wrapper {
                            flex-direction: column;
                            height: auto;
                        }

                        .medi-prestige-plaque-wrapper::before {
                            width: 100%;
                            height: 6px;
                        }

                        .medi-prestige-identity-card {
                            flex: 1 0 auto;
                            padding: 40px 24px;
                            height: auto;
                        }

                        .medi-prestige-credentials-column {
                            padding: 30px 20px;
                            height: 400px;
                        }

                        .medi-prestige-item-card {
                            padding: 14px 20px;
                            gap: 14px;
                        }
                    }

                    @media (max-width: 767px) {
                        .medi-authority-header-block {
                            margin-bottom: 40px;
                        }

                        .medi-authority-eyebrow {
                            font-size: 11px;
                            letter-spacing: 0.16em;
                            margin-bottom: 12px;
                        }

                        .medi-prestige-plaque-wrapper {
                            border-radius: 20px;
                        }

                        .medi-prestige-identity-card {
                            padding: 28px 18px;
                        }

                        .medi-prestige-seal-ring {
                            width: 80px;
                            height: 80px;
                            margin-bottom: 16px;
                        }

                        .medi-prestige-initials {
                            font-size: 22px;
                        }
                        
                        .medi-authority-section {
                            padding: 50px 10px !important;
                        }
                        .medi-authority-container {
                            padding: 0 !important;
                        }
                        .medi-authority-eyebrow {
                            font-size: 11px !important;
                            letter-spacing: 1.5px !important;
                        }
                        .medi-prestige-plaque-wrapper {
                            gap: 24px !important;
                        }
                        .medi-prestige-identity-card {
                            padding: 24px 14px !important;
                            border-radius: 16px !important;
                        }
                        .medi-prestige-seal-ring {
                            width: 80px !important;
                            height: 80px !important;
                            border: none !important;
                            animation: none !important;
                        }
                        .medi-prestige-seal-ring img {
                            width: 64px !important;
                            height: 64px !important;
                        }
                        .medi-prestige-name {
                            font-size: 20px !important;
                        }
                        .medi-prestige-role-pill {
                            font-size: 12px !important;
                            padding: 6px 14px !important;
                        }
                    }
                `}</style>
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <div className="medi-prestige-rotating-border"></div>
                                <img src={profileAH} alt="Angela Hughes" />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "40+ years in luxury travel", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly travel columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named among the Most Influential Women in Travel in 2026", icon: Crown, category: "PRESTIGE" },
                                    { text: "Luxury river and ocean cruise specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box"><IconComp size={16} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category">{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ POPULAR RESOURCES ═══════════════ */}
            <section style={{ padding: isMobileViewport ? '60px 10px' : '80px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                        Trending Topics
                    </span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                        Popular Viking Resources
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 40px', borderRadius: '10px' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {[
                            'Viking vs Scenic', 'Viking vs Tauck', 'Viking vs Uniworld',
                            'Viking Alaska Cruises', 'Viking Mediterranean Cruises',
                            'Viking River Cruise Reviews', 'Viking Ocean Cruise Reviews',
                            'Why I Resisted Viking for Years'
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '14px 24px', backgroundColor: '#f8fafc',
                                borderRadius: '60px', border: '1px solid #e2e8f0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Viking Cruise Resource Center:<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {vikingFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)} style={{ cursor: 'pointer' }}>
                                <div className="medi-faq-question-row">
                                    <span style={{ fontWeight: '600', fontSize: '17px' }}>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? '\u2212' : '+'}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text" style={{ padding: '20px 0', color: '#475569', lineHeight: '1.6' }}>
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="viking-resource-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Ready to Plan Your <br /> Viking Cruise?
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Viking has built a reputation for delivering elegant, destination-focused travel experiences across rivers, oceans, and expedition destinations worldwide.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether you're interested in European river cruising, Mediterranean voyages, Alaska adventures, or Antarctic expeditions, the Viking Cruise Resource Center provides the information you need to plan with confidence.
                        </p>

                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                                Let us help you plan your perfect Viking voyage:
                            </span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {[
                                    'Evaluate Viking itineraries',
                                    'Compare River vs. Ocean cruises',
                                    'Select the right cabin category',
                                    'Coordinate pre- and post-cruise travel',
                                    'Maximize promotional offers'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                                        <span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            If you're considering a Viking cruise and want expert guidance, Trips & Ships Luxury Travel can help you evaluate itineraries, compare cruise lines, and create a travel experience tailored to your interests.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Schedule a Viking Cruise Consultation Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VikingCruiseResourceCenter