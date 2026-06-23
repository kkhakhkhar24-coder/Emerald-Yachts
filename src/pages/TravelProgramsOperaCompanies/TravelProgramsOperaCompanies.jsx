import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Utensils, Award,
    GraduationCap,
    Mountain, Wine, Building, TreePine, Snowflake, Sun,
    Clock, Mic, FileText, Music, Heart, BookOpen, Briefcase
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

import Profile_AH from '../../assets/Media (2).jpg'

// Replace these with actual image imports when available
// import heroOperaImg from '../../assets/OperaTravel/hero-opera.jpg'

function TravelProgramsOperaCompanies() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = []

    useEffect(() => {
        if (mediHeroImages.length > 0) {
            const mediTimer = setInterval(() => {
                setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
            }, 5000)
            return () => clearInterval(mediTimer)
        }
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedProgram, setMediSelectedProgram] = useState(0)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const operaFaqs = [
        {
            question: "What are travel programs for opera companies?",
            answer: "Travel programs are customized cultural experiences designed to engage patrons, donors, board members, and supporters through music, travel, and exclusive events."
        },
        {
            question: "Why do opera companies offer travel programs?",
            answer: "Travel programs strengthen relationships, increase engagement, support donor stewardship, and create memorable experiences for supporters."
        },
        {
            question: "What destinations are most popular?",
            answer: "Vienna, Milan, Paris, Prague, Munich, and other culturally rich European destinations are among the most requested."
        },
        {
            question: "Can travel programs include opera performances?",
            answer: "Yes. Many itineraries feature performances, private events, and exclusive cultural experiences."
        },
        {
            question: "Are river cruises suitable for opera patrons?",
            answer: "Absolutely. River cruises offer cultural enrichment, luxury accommodations, and opportunities for group interaction."
        },
        {
            question: "Can educational programming be included?",
            answer: "Yes. Music historians, guest lecturers, artists, and destination experts can all enhance the travel experience."
        },
        {
            question: "Are these programs only for donors?",
            answer: "No. Programs may include patrons, subscribers, board members, volunteers, and other supporters."
        },
        {
            question: "How far in advance should planning begin?",
            answer: "Most successful programs begin planning 12 to 24 months before departure."
        },
        {
            question: "Can opera companies customize travel itineraries?",
            answer: "Yes. Programs can be designed around specific themes, performances, destinations, or organizational goals."
        },
        {
            question: "How many travelers typically participate?",
            answer: "Groups often range from 20 to 100 participants depending on the itinerary and organization."
        },
        {
            question: "Can private receptions be included?",
            answer: "Yes. Private dinners, receptions, and special events are common components of opera travel programs."
        },
        {
            question: "Do travel programs help with donor engagement?",
            answer: "Yes. Travel creates opportunities for meaningful interaction and long-term relationship building."
        },
        {
            question: "Are luxury accommodations included?",
            answer: "Most opera travel programs utilize premium or luxury hotels, cruises, and travel experiences."
        },
        {
            question: "Can board members participate?",
            answer: "Absolutely. Board engagement is often an important component of successful travel programs."
        },
        {
            question: "Why choose Trips & Ships Luxury Travel?",
            answer: "We combine luxury travel expertise, cultural travel planning, and donor engagement experience to create exceptional programs tailored to arts organizations."
        }
    ]

    const operaSchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/travel-programs-for-opera-companies",
                "url": "https://www.tripsandships.com/travel-programs-for-opera-companies",
                "name": "Travel Programs for Opera Companies",
                "headline": "Travel Programs for Opera Companies | Opera Patron & Donor Travel",
                "description": "Enhance patron engagement and donor relationships with customized travel programs for opera companies. Explore luxury opera travel, cultural journeys, river cruises, and exclusive performance experiences.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" }
            },
            {
                "@type": "TravelAgency",
                "@id": "#trips-ships",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "description": "Luxury travel specialists creating cultural, donor, and patron travel programs for arts organizations.",
                "sameAs": [
                    "https://www.facebook.com/tripsandships/",
                    "https://www.instagram.com/tripsandshipsluxurytravel"
                ],
                "founder": { "@id": "#angela-hughes" }
            },
            {
                "@type": "Organization",
                "@id": "#organization",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com"
            },
            {
                "@type": "Person",
                "@id": "#angela-hughes",
                "name": "Angela Hughes",
                "jobTitle": "CEO of Trips & Ships Luxury Travel",
                "description": "Luxury travel expert with more than 40 years in the travel industry and visits to over 121 countries.",
                "worksFor": { "@id": "#trips-ships" }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tripsandships.com" },
                    { "@type": "ListItem", "position": 2, "name": "Cultural Travel", "item": "https://www.tripsandships.com/cultural-travel" },
                    { "@type": "ListItem", "position": 3, "name": "Travel Programs for Opera Companies", "item": "https://www.tripsandships.com/travel-programs-for-opera-companies" }
                ]
            },
            {
                "@type": "Article",
                "headline": "Travel Programs for Opera Companies",
                "description": "Expert guide to designing customized travel programs for opera companies that deepen patron engagement, strengthen donor relationships, and create unforgettable cultural experiences.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" },
                "keywords": [
                    "Travel Programs for Opera Companies",
                    "Opera Company Travel Programs",
                    "Opera Patron Travel",
                    "Opera Donor Travel",
                    "Cultural Travel Programs",
                    "Performing Arts Travel",
                    "Luxury Opera Tours",
                    "Opera Appreciation Travel",
                    "Arts Organization Travel Programs"
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": operaFaqs.map(faq => ({
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
                <title>Travel Programs for Opera Companies | Opera Patron & Donor Travel</title>
                <meta name="title" content="Travel Programs for Opera Companies | Opera Patron & Donor Travel" />
                <meta name="description" content="Enhance patron engagement and donor relationships with customized travel programs for opera companies. Explore luxury opera travel, cultural journeys, river cruises, and exclusive performance experiences." />
                <meta name="keywords" content="Travel Programs for Opera Companies, Opera Company Travel Programs, Opera Patron Travel, Opera Donor Travel, Cultural Travel Programs, Performing Arts Travel, Luxury Opera Tours, Opera Appreciation Travel, Arts Organization Travel Programs" />
                <link rel="canonical" href="https://www.tripsandships.com/travel-programs-for-opera-companies" />
                <script type="application/ld+json">
                    {JSON.stringify(operaSchemaData)}
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
                        <Music size={16} />
                        <span>Cultural Travel · Patron Engagement · Donor Stewardship</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Travel Programs for Opera Companies
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        maxWidth: '700px',
                        margin: '20px auto 0',
                        lineHeight: '1.6',
                        textAlign: 'center'
                    }}>
                        Deepen patron engagement and strengthen donor relationships through extraordinary cultural travel experiences.
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
                        gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1.2fr 0.8fr',
                        gap: '60px',
                        alignItems: 'start'
                    }}>

                        <div className="medi-premium-editorial-block" style={{
                            maxHeight: isMobileViewport ? 'none' : '650px',
                            overflowY: isMobileViewport ? 'visible' : 'auto',
                            paddingRight: isMobileViewport ? '0' : '20px',
                            textAlign: window.innerWidth <= 1024 ? 'center' : 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: window.innerWidth <= 1024 ? 'center' : 'flex-start'
                        }}>
                            <span className="medi-premium-mini-badge" style={{
                                display: 'inline-block', fontSize: '12px', fontWeight: '700',
                                color: '#274472', letterSpacing: '0.25em', textTransform: 'uppercase',
                                marginBottom: '16px',
                                borderLeft: window.innerWidth <= 1024 ? 'none' : '2px solid #274472',
                                paddingLeft: window.innerWidth <= 1024 ? '0' : '10px'
                            }}>
                                Deepening Patron Engagement Through Cultural Travel
                            </span>

                            <h2 className="medi-premium-heading" style={{
                                color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2', margin: '0 0 20px 0'
                            }}>
                                Travel Programs for Opera Companies: Deepening Patron Engagement Through Cultural Travel
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px', height: '3px', background: '#3b82f6',
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Opera has always been about more than performances.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                It inspires passion, fosters community, and creates lifelong connections among patrons, donors, board members, and supporters.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Today, many opera companies are discovering that travel programs provide an exceptional opportunity to strengthen those relationships while creating unforgettable cultural experiences. From attending world-renowned opera performances in Europe to exploring historic cities, river cruises, and exclusive behind-the-scenes experiences, travel programs help opera organizations engage supporters in meaningful ways beyond the concert hall.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                                At Trips & Ships Luxury Travel, we partner with opera companies to design customized travel experiences that align with organizational goals while delivering extraordinary cultural enrichment for patrons and donors.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                                    Travel Creates Opportunities For:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px', textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Cultural Immersion", i: <Globe size={20} /> },
                                        { t: "Donor Engagement", i: <Heart size={20} /> },
                                        { t: "Patron Recognition", i: <Star size={20} /> },
                                        { t: "Community Building", i: <Users size={20} /> },
                                        { t: "Lifelong Learning", i: <GraduationCap size={20} /> },
                                        { t: "Exclusive Access", i: <Gem size={20} /> }
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
                            marginTop: window.innerWidth <= 1024 ? '40px' : '0',
                            borderLeftColor: '#274472'
                        }}>
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame" style={{ background: '#274472' }}>
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">CULTURAL TRAVEL EXPERT</span>
                                        <h3 className="medi-expert-card-title" style={{ color: '#274472' }}>Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc" style={{ color: '#475569', lineHeight: '1.7' }}>
                                    At Trips & Ships Luxury Travel, we partner with opera companies to design customized travel experiences that align with organizational goals while delivering extraordinary cultural enrichment for patrons and donors.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes helps arts organizations plan cultural travel programs that inspire deeper connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY TRAVEL PROGRAMS MATTER ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Why It Matters
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Travel Programs Matter for Opera Companies
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>
                            Patrons increasingly seek experiences that connect them more deeply to the arts they love. Unlike traditional fundraising events, travel allows supporters to spend extended time together while exploring destinations connected to music, history, and culture.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Star size={20} style={{ color: '#3b82f6' }} /> Travel Creates Opportunities For
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {[
                                    { text: "Cultural Immersion", icon: <Globe size={18} /> },
                                    { text: "Donor Engagement", icon: <Heart size={18} /> },
                                    { text: "Patron Recognition", icon: <Award size={18} /> },
                                    { text: "Community Building", icon: <Users size={18} /> },
                                    { text: "Lifelong Learning", icon: <GraduationCap size={18} /> },
                                    { text: "Exclusive Access", icon: <Gem size={18} /> },
                                    { text: "Meaningful Conversations", icon: <Mic size={18} /> },
                                    { text: "Organizational Loyalty", icon: <Crown size={18} /> }
                                ].map((pill, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                        <div style={{ color: '#3b82f6', display: 'flex' }}>{pill.icon}</div>
                                        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{pill.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ flex: '1 1 280px' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: window.innerWidth <= 360 ? '24px 16px' : '40px', borderRadius: window.innerWidth <= 360 ? '20px' : '30px', color: '#ffffff', boxShadow: '0 20px 40px rgba(15, 28, 46, 0.15)' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#3b82f6' }}>
                                    Shared Experiences Strengthen Loyalty
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                                    These shared experiences often strengthen loyalty and deepen organizational relationships. Travel provides a unique environment where patrons interact with opera leadership, board members, guest speakers, and fellow supporters.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Opera leadership interactions", "Board member engagement", "Guest speaker experiences", "Fellow supporter connections"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                                            <CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                                        "The informal nature of travel often leads to deeper and more meaningful conversations."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BENEFITS OF OPERA TRAVEL PROGRAMS ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
                    .opera-benefit-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                        max-width: 1100px;
                        margin: 0 auto;
                    }
                    .opera-benefit-card {
                        background: rgba(255,255,255,0.05);
                        border: 1px solid rgba(255,255,255,0.08);
                        border-radius: 24px;
                        padding: 36px 32px;
                        transition: all 0.4s ease;
                    }
                    .opera-benefit-card:hover {
                        background: rgba(59, 130, 246, 0.08);
                        border-color: rgba(59, 130, 246, 0.25);
                        transform: translateY(-4px);
                    }
                    .opera-benefit-icon {
                        width: 52px;
                        height: 52px;
                        background: rgba(59,130,246,0.12);
                        border-radius: 14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #3b82f6;
                        margin-bottom: 20px;
                        transition: all 0.3s ease;
                    }
                    .opera-benefit-card:hover .opera-benefit-icon {
                        background: #3b82f6;
                        color: #ffffff;
                    }
                    @media (max-width: 768px) { .opera-benefit-grid { grid-template-columns: 1fr; } .opera-benefit-card { padding: 28px 20px; } }
                    @media (max-width: 380px) { .opera-benefit-card { padding: 22px 16px; border-radius: 18px; } }
                `}</style>

                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>
                        Program Advantages
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Benefits of Opera Travel Programs
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="opera-benefit-grid">
                    {[
                        {
                            title: "Strengthen Donor Relationships",
                            desc: "Travel offers a unique environment for relationship building. The informal nature of travel often leads to deeper and more meaningful conversations with opera leadership, board members, and fellow supporters.",
                            icon: <Heart size={22} />,
                            items: ["Opera leadership", "Board members", "Guest speakers", "Fellow supporters"]
                        },
                        {
                            title: "Increase Patron Engagement",
                            desc: "Travel experiences keep supporters actively connected to the organization throughout the year. The engagement extends far beyond the trip itself.",
                            icon: <Users size={22} />,
                            items: ["Repeat travelers", "Event attendees", "Volunteers", "Ambassadors & Donors"]
                        },
                        {
                            title: "Create Exclusive Experiences",
                            desc: "Opera travel programs can include private performances, backstage tours, and artist meet-and-greets that provide exceptional value for participants.",
                            icon: <Sparkles size={22} />,
                            items: ["Private performances", "Backstage tours", "Artist meet-and-greets", "VIP receptions & Lectures"]
                        },
                        {
                            title: "Build Community",
                            desc: "Shared cultural experiences foster stronger connections among travelers. Guests often develop friendships that strengthen their relationship with the opera company as well.",
                            icon: <Globe size={22} />,
                            items: ["Deeper friendships", "Shared cultural memory", "Extended community bonds", "Year-round engagement"]
                        }
                    ].map((benefit, idx) => (
                        <div key={idx} className="opera-benefit-card">
                            <div className="opera-benefit-icon">{benefit.icon}</div>
                            <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>{benefit.title}</h3>
                            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>{benefit.desc}</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {benefit.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#cbd5e1', fontWeight: '500' }}>
                                        <CheckCircle size={15} style={{ color: '#3b82f6', flexShrink: 0 }} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ POPULAR TRAVEL EXPERIENCES — TABBED SHOWCASE ═══════════════ */}
            <section className="medi-itinerary-showcase-section">
                <div className="medi-itinerary-showcase-container">
                    <div className="medi-itinerary-showcase-header">
                        <span className="medi-itinerary-eyebrow">TRAVEL EXPERIENCE GUIDE</span>
                        <h2 className="medi-itinerary-showcase-heading">Popular Travel Experiences for Opera Companies</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>
                            From European opera journeys to river cruises and cultural land tours, we design experiences that resonate deeply with arts supporters.
                        </p>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["European Opera Journeys", "River Cruises", "Festival-Based Travel", "Cultural Land Tours"].map((title, idx) => (
                                <button key={idx} className={`medi-itinerary-tab-btn ${mediSelectedProgram === idx ? 'active' : ''}`} onClick={() => setMediSelectedProgram(idx)}>
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
                                <div className="medi-itinerary-showcase-img-overlay"></div>
                                <span className="medi-itinerary-showcase-badge">EXPERIENCE SPOTLIGHT</span>
                            </div>

                            <div className="medi-itinerary-showcase-body">
                                <h3 className="medi-itinerary-showcase-title">
                                    {["European Opera Journeys", "River Cruises for Opera Patrons", "Festival-Based Travel Programs", "Cultural Land Tours"][mediSelectedProgram]}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Program Overview:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                ["Europe's most celebrated opera destinations", "Access to legendary performance venues", "Private backstage and cultural experiences"],
                                                ["Small ship luxury travel experience", "Historic riverside cities and cultural stops", "Onboard private lectures and performances"],
                                                ["Access to international opera festivals", "Classical music events and celebrations", "Performing arts experiences worldwide"],
                                                ["Historic cities, museums, and music venues", "Customizable around specific themes", "Exclusive cultural performances included"]
                                            ][mediSelectedProgram].map((feature, i) => (
                                                <li key={i}>
                                                    <Sparkles size={14} className="medi-itinerary-detail-icon" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">
                                            {["Popular Cities", "Popular Rivers", "Festival Types", "Program Features"][mediSelectedProgram]}:
                                        </h4>
                                        <div className="medi-itinerary-details-chips">
                                            {[
                                                ["Vienna", "Milan", "Paris", "Prague", "Munich"],
                                                ["Rhine", "Danube", "Seine", "Douro"],
                                                ["Opera Festivals", "Classical Music Events", "Cultural Celebrations", "Performing Arts"],
                                                ["Historic Cities", "Museums", "Music Venues", "Cultural Landmarks", "Exclusive Performances"]
                                            ][mediSelectedProgram].map((tag, i) => (
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
                                        {mediSelectedProgram === 0 && "Europe remains one of the most requested destinations for opera travel, offering legendary traditions and world-famous music venues."}
                                        {mediSelectedProgram === 1 && "River cruises are increasingly popular because they combine luxury, culture, and convenience. Many organizations incorporate private lectures and performances onboard."}
                                        {mediSelectedProgram === 2 && "Opera enthusiasts often enjoy attending major music festivals around the world. These journeys appeal to highly engaged patrons."}
                                        {mediSelectedProgram === 3 && "Not every opera travel experience requires a cruise. Land-based programs can be customized around specific themes and interests."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DESTINATIONS SECTION ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
                    .opera-dest-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 24px;
                        max-width: 1240px;
                        margin: 0 auto;
                    }
                    .opera-dest-item {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: #1c2f4a;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                        min-height: 320px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                    }
                    .opera-dest-item:hover { transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
                    .opera-dest-overlay {
                        position: relative;
                        z-index: 2;
                        padding: clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px);
                        color: #ffffff;
                    }
                    .opera-dest-bg {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(135deg, #0f1c2e 0%, #1a365d 60%, #274472 100%);
                        z-index: 1;
                    }
                    .opera-dest-tag { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #60a5fa; margin-bottom: 10px; display: block; }
                    .opera-dest-title { font-size: clamp(20px, 3vw, 24px); font-weight: 700; margin: 0 0 12px 0; line-height: 1.2; color: #ffffff; }
                    .opera-dest-desc { font-size: clamp(14px, 2vw, 15px); color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0; }
                    .opera-dest-icon { width: 44px; height: 44px; background: rgba(59,130,246,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #3b82f6; margin-bottom: 16px; }
                    @media (max-width: 1024px) { .opera-dest-grid { grid-template-columns: repeat(2, 1fr); } }
                    @media (max-width: 650px) { .opera-dest-grid { grid-template-columns: 1fr; gap: 16px; } }
                `}</style>

                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>
                        European Opera Capitals
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Popular Destinations for Opera Travel
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="opera-dest-grid">
                    {[
                        { tag: "Austria", title: "Vienna", desc: "Home to legendary opera traditions and world-famous music venues. A must-visit destination for any opera travel program.", icon: <Music size={20} /> },
                        { tag: "Italy", title: "Milan", desc: "A must-visit destination for opera lovers. La Scala remains one of the world's most celebrated opera houses.", icon: <Crown size={20} /> },
                        { tag: "France", title: "Paris", desc: "Combines cultural sophistication with exceptional performance opportunities, from the Opéra Garnier to intimate venues.", icon: <Star size={20} /> },
                        { tag: "Czech Republic", title: "Prague", desc: "Known for its remarkable musical heritage and stunning historic architecture. A deeply atmospheric destination for arts travelers.", icon: <Building size={20} /> },
                        { tag: "Germany", title: "Munich", desc: "Offers renowned opera productions and rich cultural experiences, including the Bavarian State Opera and world-class festivals.", icon: <Award size={20} /> },
                        { tag: "Multiple Rivers", title: "River Cruises", desc: "Rhine, Danube, Seine, and Douro — luxury river cruises combine cultural enrichment with comfortable small-ship travel.", icon: <Ship size={20} /> }
                    ].map((dest, idx) => (
                        <div key={idx} className="opera-dest-item">
                            <div className="opera-dest-bg"></div>
                            <div className="opera-dest-overlay">
                                <div className="opera-dest-icon">{dest.icon}</div>
                                <span className="opera-dest-tag">{dest.tag}</span>
                                <h3 className="opera-dest-title">{dest.title}</h3>
                                <p className="opera-dest-desc">{dest.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════ EDUCATIONAL COMPONENTS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Educational Enrichment
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Educational Components That Add Value
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            The most successful opera travel programs often incorporate educational enrichment that deepens appreciation and understanding.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}>
                                <GraduationCap size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Expert-Led Learning</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Knowledge That Travels With You</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Experts provide context and insight into destinations and performances, enhancing appreciation throughout the journey.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        "Music historians provide destination context",
                                        "Guest lectures before performances",
                                        "Artist presentations and perspectives",
                                        "Destination-based cultural learning",
                                        "Historical and musical influence exploration"
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }}>
                                            <CheckCircle size={16} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a365d 100%)', padding: '30px', textAlign: 'center' }}>
                                <Sparkles size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Exclusive Access</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Experiences Beyond the Stage</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    These unique opportunities provide exceptional value for participants and create memories that outlast the journey.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        "Private performances",
                                        "Backstage tours",
                                        "Artist meet-and-greets",
                                        "VIP receptions",
                                        "Exclusive pre-performance lectures"
                                    ].map((item, i) => (
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

            {/* ═══════════════ HOW TRAVEL PROGRAMS SUPPORT FUNDRAISING ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Advancement Strategy
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            How Travel Programs Support Fundraising Goals
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '750px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Travel programs are not direct fundraising events, but they can significantly strengthen advancement efforts.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '24px' }}>
                        {[
                            { title: "Donor Stewardship", desc: "Reward and recognize loyal supporters through extraordinary shared experiences that reinforce their connection to the organization.", icon: <Heart size={24} /> },
                            { title: "Relationship Cultivation", desc: "Create opportunities for meaningful interaction with leadership, board members, and fellow supporters in a relaxed, enriching environment.", icon: <Users size={24} /> },
                            { title: "Major Gift Conversations", desc: "Travel provides time and space for deeper discussions. The informal setting creates natural opportunities for meaningful advancement conversations.", icon: <Briefcase size={24} /> },
                            { title: "Patron Retention & Loyalty", desc: "Engaged supporters often remain active for longer periods. Travel experiences reinforce emotional connections to the organization.", icon: <Award size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ color: '#3b82f6', marginBottom: '14px', display: 'flex', justifyContent: 'flex-start' }}>{item.icon}</div>
                                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px' }}>{item.title}</h4>
                                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ CUSTOM TRAVEL PROGRAMS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Tailored to Your Organization
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Custom Travel Programs for Opera Companies
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Every opera organization has unique goals. Trips & Ships Luxury Travel develops programs tailored to your specific audience and objectives.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: "Patron Travel", desc: "Experiences designed to engage subscribers and supporters in meaningful cultural journeys.", icon: <Users size={24} /> },
                            { title: "Donor Travel", desc: "Luxury journeys focused on stewardship and cultivation for your most valued supporters.", icon: <Heart size={24} /> },
                            { title: "Board Member Travel", desc: "Programs that strengthen leadership engagement and deepen board member connection to the organization.", icon: <Crown size={24} /> },
                            { title: "Educational Travel", desc: "Music-focused itineraries that emphasize learning, enrichment, and appreciation of operatic traditions.", icon: <GraduationCap size={24} /> },
                            { title: "Festival Programs", desc: "Access to international opera festivals, classical music events, and world-class performance experiences.", icon: <Music size={24} /> },
                            { title: "Special Interest Groups", desc: "Customized travel built around specific composers, performances, or destinations that inspire your community.", icon: <Sparkles size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '36px 30px', border: '1px solid #e2e8f0', boxShadow: '0 6px 20px rgba(15, 28, 46, 0.04)', textAlign: 'center', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(15,28,46,0.10)'; e.currentTarget.style.borderColor = '#3b82f6'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(15,28,46,0.04)'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                            >
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY LUXURY TRAVEL WORKS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                        A Natural Fit
                    </span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                        Why Luxury Travel Works for Opera Audiences
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 24px', borderRadius: '10px' }}></div>
                    <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.7', marginBottom: '40px' }}>
                        Programs can be designed to balance comfort, exclusivity, and educational value. Luxury travel aligns naturally with the expectations of many arts supporters.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {[
                            'High-quality accommodations',
                            'Exceptional service',
                            'Cultural enrichment',
                            'Fine dining',
                            'Expert-led experiences',
                            'Exclusive access',
                            'Small group intimacy',
                            'Thoughtfully curated itineraries'
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '14px 24px', backgroundColor: '#ffffff',
                                borderRadius: '60px', border: '1px solid #e2e8f0',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY PARTNER WITH TRIPS & SHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Our Partnership
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Opera Companies Partner with <br />Trips & Ships Luxury Travel
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Our team understands the importance of creating experiences that reflect the excellence of your organization.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: "Strategic Program Planning", desc: "Travel aligned with engagement and advancement objectives, tailored to your organization's unique goals.", icon: <Star size={24} /> },
                            { title: "Cultural Travel Expertise", desc: "Access to unique experiences throughout the world, with deep knowledge of opera capitals and performing arts destinations.", icon: <Globe size={24} /> },
                            { title: "Luxury Partnerships", desc: "Relationships with leading travel providers, cruise lines, hotels, and cultural institutions worldwide.", icon: <Gem size={24} /> },
                            { title: "Event Coordination", desc: "Private receptions, lectures, backstage access, and exclusive experiences that elevate every journey.", icon: <Calendar size={24} /> },
                            { title: "White-Glove Service", desc: "Comprehensive support before, during, and after travel. We handle every detail so your team can focus on relationships.", icon: <Award size={24} /> },
                            { title: "Decades of Expertise", desc: "With Angela Hughes' 40+ years of luxury travel experience, we help arts organizations maximize the impact of every program.", icon: <Crown size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '36px', border: '1px solid #e2e8f0', boxShadow: '0 6px 20px rgba(15, 28, 46, 0.04)', textAlign: 'center' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#3b82f6' }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════
                ANGELA HUGHES AUTHORITY
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
                        top: 0; left: 0; right: 0; bottom: 0;
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
                    @keyframes slow-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .medi-prestige-label {
                        font-size: 10px; font-weight: 700; letter-spacing: 0.2em;
                        color: #cbd5e1; text-transform: uppercase; margin-bottom: 10px;
                    }
                    .medi-prestige-name {
                        font-size: 28px; font-family: serif; font-weight: 500;
                        color: #ffffff; margin: 0 0 12px 0; line-height: 1.2;
                    }
                    .medi-prestige-role-pill {
                        background: rgba(39, 68, 114, 0.2);
                        border: 1px solid rgba(39, 68, 114, 0.3);
                        padding: 6px 14px; border-radius: 30px;
                        font-size: 13px; font-weight: 600; color: #eff6ff; margin-bottom: 24px;
                    }
                    .medi-prestige-meta-box { width: 100%; position: relative; padding-top: 20px; }
                    .medi-prestige-meta-line { width: 50px; height: 1px; background: rgba(255,255,255,0.15); margin: 0 auto 16px; }
                    .medi-prestige-meta-text { font-size: 12px; color: #cbd5e1; opacity: 0.7; letter-spacing: 0.05em; text-transform: uppercase; }
                    .medi-prestige-credentials-column {
                        flex: 1; padding: 40px; background: #ffffff; overflow-y: auto; height: 100%;
                    }
                    .medi-prestige-credentials-column::-webkit-scrollbar { width: 6px; }
                    .medi-prestige-credentials-column::-webkit-scrollbar-track { background: #eff6ff; border-radius: 4px; }
                    .medi-prestige-credentials-column::-webkit-scrollbar-thumb { background: #274472cc; border-radius: 4px; }
                    .medi-prestige-credentials-column::-webkit-scrollbar-thumb:hover { background: #274472; }
                    .medi-prestige-list { display: flex; flex-direction: column; gap: 16px; }
                    .medi-prestige-item-card {
                        display: flex; align-items: center; gap: 20px;
                        padding: 16px 24px; border-radius: 14px;
                        background: #ffffff; border: 1px solid #eff6ff;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        position: relative; overflow: hidden;
                    }
                    .medi-prestige-item-accent-bar {
                        position: absolute; left: 0; top: 0; width: 4px; height: 100%;
                        background: #274472; transform: scaleY(0);
                        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); transform-origin: bottom;
                    }
                    .medi-prestige-item-card:hover { transform: translateX(6px); box-shadow: 0 10px 24px rgba(15,28,46,0.04); border-color: rgba(39,68,114,0.3); }
                    .medi-prestige-item-card:hover .medi-prestige-item-accent-bar { transform: scaleY(1); }
                    .medi-prestige-item-icon-box {
                        width: 40px; height: 40px; border-radius: 10px;
                        background: #eff6ff; display: flex; align-items: center;
                        justify-content: center; color: #274472; flex-shrink: 0; transition: all 0.4s ease;
                    }
                    .medi-prestige-item-card:hover .medi-prestige-item-icon-box { background: #274472; color: #ffffff; transform: scale(1.05); }
                    .medi-prestige-item-content { display: flex; flex-direction: column; gap: 2px; }
                    .medi-prestige-item-category {
                        font-size: 10px; font-weight: 700; letter-spacing: 0.15em;
                        color: #274472; opacity: 0.6; text-transform: uppercase;
                    }
                    .medi-prestige-item-card:hover .medi-prestige-item-category { color: #274472; opacity: 0.9; }
                    .medi-prestige-item-text {
                        font-size: 15px; font-weight: 500; color: #0f1c2e; margin: 0; line-height: 1.5; transition: color 0.3s ease;
                    }
                    .medi-prestige-item-card:hover .medi-prestige-item-text { color: #274472; }
                    @media (max-width: 992px) {
                        .medi-prestige-plaque-wrapper { flex-direction: column; height: auto; }
                        .medi-prestige-plaque-wrapper::before { width: 100%; height: 6px; }
                        .medi-prestige-identity-card { flex: 1 0 auto; padding: 40px 24px; height: auto; }
                        .medi-prestige-credentials-column { padding: 30px 20px; height: 400px; }
                        .medi-prestige-item-card { padding: 14px 20px; gap: 14px; }
                    }
                    @media (max-width: 767px) {
                        .medi-authority-section { padding: 50px 10px !important; }
                        .medi-authority-container { padding: 0 !important; }
                        .medi-authority-header-block { margin-bottom: 40px; }
                        .medi-prestige-plaque-wrapper { border-radius: 20px; }
                        .medi-prestige-identity-card { padding: 28px 18px; }
                        .medi-prestige-seal-ring { width: 80px !important; height: 80px !important; border: none !important; animation: none !important; }
                        .medi-prestige-seal-ring img { width: 64px !important; height: 64px !important; }
                        .medi-prestige-name { font-size: 20px !important; }
                        .medi-prestige-role-pill { font-size: 12px !important; padding: 6px 14px !important; }
                    }
                `}</style>
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">TRUSTED CULTURAL TRAVEL LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Meet Angela Hughes</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <div className="medi-prestige-rotating-border"></div>
                                <img src={Profile_AH} alt="Angela Hughes" />
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
                                    { text: "International cultural and educational travel specialist", icon: BookOpen, category: "SPECIALTY" }
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

            {/* ═══════════════ BEST FOR SECTION ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#0f1c2e', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                        Ideal For
                    </span>
                    <h2 style={{ fontSize: 'clamp(28px, 5vw, 38px)', color: '#ffffff', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                        Who These Programs Serve
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto 40px', borderRadius: '10px' }}></div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                        {[
                            'Opera Companies',
                            'Symphony Organizations',
                            'Performing Arts Centers',
                            'Arts Foundations',
                            'Patron Programs',
                            'Donor Stewardship Initiatives',
                            'Cultural Organizations',
                            'Music Appreciation Groups'
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '14px 24px', backgroundColor: 'rgba(255,255,255,0.07)',
                                borderRadius: '60px', border: '1px solid rgba(255,255,255,0.12)',
                                transition: 'all 0.3s ease'
                            }}>
                                <CheckCircle size={18} style={{ color: '#3b82f6', flexShrink: 0 }} />
                                <span style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Travel Programs for Opera Companies:<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {operaFaqs.map((faq, index) => (
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

            {/* ═══════════════ RELATED LINKS ═══════════════
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Explore More
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Related Cultural Travel Programs
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '24px' }}>
                        {[
                            { title: 'Cultural Travel Programs', desc: 'Explore the full range of cultural travel experiences for arts organizations and patron groups.', path: '/cultural-travel-programs', icon: <Globe size={24} /> },
                            { title: 'River Cruises for Groups', desc: 'Luxury river cruise options ideal for patron groups, cultural organizations, and arts travelers.', path: '/river-cruises', icon: <Ship size={24} /> },
                            { title: 'European Opera Destinations', desc: 'Discover the great opera capitals of Europe and plan your next cultural journey.', path: '/european-travel', icon: <Music size={24} /> },
                            { title: 'Luxury Group Travel', desc: 'Custom luxury group programs designed for arts organizations, donors, and cultural travelers.', path: '/group-travel', icon: <Users size={24} /> }
                        ].map((item, i) => (
                            <Link key={i} to={item.path} style={{ textDecoration: 'none' }}>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: window.innerWidth <= 360 ? '18px' : '24px',
                                    padding: window.innerWidth <= 360 ? '24px 20px' : '32px 28px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 12px rgba(15, 28, 46, 0.06)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 28, 46, 0.12)';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 28, 46, 0.06)';
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            {item.icon}
                                        </div>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2e', margin: 0 }}>{item.title}</h3>
                                    </div>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>
                                        <span>Learn More</span>
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ═══════════════ FINAL CTA ═══════════════ */}
            <section className="medi-cta-main-section" id="opera-travel-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Inspire Deeper Connections <br /> Through Cultural Travel
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Travel has the power to strengthen relationships, inspire learning, and create unforgettable experiences. For opera companies, a thoughtfully designed travel program can enhance patron loyalty, deepen donor engagement, and build a stronger community of supporters.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether exploring Europe's great opera capitals, sailing iconic rivers, or attending world-class performances, travel creates meaningful connections that extend far beyond the stage.
                        </p>

                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                                We design programs for:
                            </span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {[
                                    'Opera Companies',
                                    'Symphony Organizations',
                                    'Performing Arts Centers',
                                    'Patron & Donor Programs',
                                    'Cultural Organizations'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                                        <span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips & Ships Luxury Travel today to begin planning a custom travel program for your opera company.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Begin Planning Your Opera Travel Program Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TravelProgramsOperaCompanies