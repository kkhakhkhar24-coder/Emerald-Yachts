import Navbar from '../../components/Navbar/Navbar'
import {
    Ship, MapPin, Star, Users, CheckCircle,
    Sparkles, Calendar, Gem,
    ChevronRight, Crown, Phone,
    Globe, Award,
    GraduationCap,
    Building,
    Clock, Mic, FileText, Music, Heart, BookOpen, Briefcase
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../AzamaraMediterraneanCruises/AzamaraMediterraneanCruises.css'

import Profile_AH from '../../assets/Media (2).jpg'

function TravelProgramsSymphonyOrchestras() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [
        'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1600&q=80'
    ]

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

    const symphonyFaqs = [
        {
            question: "What are travel programs for symphony orchestras?",
            answer: "Travel programs are customized cultural travel experiences designed to engage patrons, donors, board members, and music enthusiasts through educational and performance-focused journeys."
        },
        {
            question: "Why do symphony orchestras offer travel programs?",
            answer: "Travel programs strengthen patron engagement, support donor stewardship, encourage community building, and create memorable experiences connected to music and culture."
        },
        {
            question: "What destinations are most popular?",
            answer: "Vienna, Salzburg, Prague, Leipzig, Budapest, and other European music capitals are among the most requested destinations."
        },
        {
            question: "Can travel programs include concert performances?",
            answer: "Yes. Many itineraries include performances, private concerts, cultural events, and music-related experiences."
        },
        {
            question: "Are river cruises a good option for orchestra patrons?",
            answer: "Absolutely. River cruises combine luxury, education, cultural exploration, and strong opportunities for group interaction."
        },
        {
            question: "Can educational programming be included?",
            answer: "Yes. Programs often feature music historians, guest lecturers, cultural experts, and destination-focused learning opportunities."
        },
        {
            question: "Are these programs only for donors?",
            answer: "No. Travel programs may include subscribers, patrons, board members, volunteers, donors, and other supporters."
        },
        {
            question: "How far in advance should travel programs be planned?",
            answer: "Most successful programs begin planning 12 to 24 months before departure."
        },
        {
            question: "Can itineraries be customized?",
            answer: "Yes. Programs can be designed around specific musical themes, destinations, composers, or organizational objectives."
        },
        {
            question: "How many travelers typically participate?",
            answer: "Most groups range from 20 to 100 participants depending on the destination and travel format."
        },
        {
            question: "Can private receptions be included?",
            answer: "Yes. Many programs include private dinners, receptions, lectures, and exclusive events."
        },
        {
            question: "Do travel programs support fundraising efforts?",
            answer: "While not direct fundraising events, they often strengthen relationships that contribute to long-term donor engagement and support."
        },
        {
            question: "Are luxury accommodations included?",
            answer: "Most programs feature premium hotels, luxury cruises, and high-quality travel experiences."
        },
        {
            question: "Can board members participate?",
            answer: "Yes. Board engagement is often an important component of successful orchestra travel programs."
        },
        {
            question: "Why choose Trips & Ships Luxury Travel?",
            answer: "We combine luxury travel expertise, cultural travel planning, and donor engagement experience to create meaningful programs tailored to music organizations."
        }
    ]

    const symphonySchemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tripsandships.com/travel-programs-for-symphony-orchestras",
                "url": "https://www.tripsandships.com/travel-programs-for-symphony-orchestras",
                "name": "Travel Programs for Symphony Orchestras",
                "headline": "Travel Programs for Symphony Orchestras | Patron & Donor Travel",
                "description": "Engage patrons, donors, and music enthusiasts with custom travel programs for symphony orchestras. Discover luxury cultural travel, river cruises, music festivals, and exclusive performance experiences.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" }
            },
            {
                "@type": "TravelAgency",
                "@id": "#trips-ships",
                "name": "Trips & Ships Luxury Travel",
                "url": "https://www.tripsandships.com",
                "logo": "https://www.tripsandships.com/PNG%20image.png",
                "description": "Luxury travel specialists creating cultural, donor, and patron travel programs for music and arts organizations.",
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
                    { "@type": "ListItem", "position": 3, "name": "Travel Programs for Symphony Orchestras", "item": "https://www.tripsandships.com/travel-programs-for-symphony-orchestras" }
                ]
            },
            {
                "@type": "Article",
                "headline": "Travel Programs for Symphony Orchestras",
                "description": "Expert guide to designing customized travel programs for symphony orchestras that deepen patron engagement, strengthen donor relationships, and create unforgettable musical experiences.",
                "author": { "@id": "#angela-hughes" },
                "publisher": { "@id": "#trips-ships" },
                "keywords": [
                    "Travel Programs for Symphony Orchestras",
                    "Symphony Orchestra Travel Programs",
                    "Symphony Patron Travel",
                    "Donor Travel Programs",
                    "Music Appreciation Travel",
                    "Cultural Travel Programs",
                    "Orchestra Donor Travel",
                    "Performing Arts Travel",
                    "Luxury Music Travel"
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": symphonyFaqs.map(faq => ({
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
                <title>Travel Programs for Symphony Orchestras | Patron & Donor Travel</title>
                <meta name="title" content="Travel Programs for Symphony Orchestras | Patron & Donor Travel" />
                <meta name="description" content="Engage patrons, donors, and music enthusiasts with custom travel programs for symphony orchestras. Discover luxury cultural travel, river cruises, music festivals, and exclusive performance experiences." />
                <meta name="keywords" content="Travel Programs for Symphony Orchestras, Symphony Orchestra Travel Programs, Symphony Patron Travel, Donor Travel Programs, Music Appreciation Travel, Cultural Travel Programs, Orchestra Donor Travel, Performing Arts Travel, Luxury Music Travel" />
                <link rel="canonical" href="https://www.tripsandships.com/travel-programs-for-symphony-orchestras" />
                <script type="application/ld+json">
                    {JSON.stringify(symphonySchemaData)}
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
                        <span>Music Travel · Patron Engagement · Donor Stewardship</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        Travel Programs for <br /> Symphony Orchestras
                    </h1>
                    <p style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        maxWidth: '700px',
                        margin: '20px auto 0',
                        lineHeight: '1.6',
                        textAlign: 'center'
                    }}>
                        Inspiring deeper connections through music and travel — customized programs that strengthen patron loyalty and deepen donor engagement.
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
                                Inspiring Deeper Connections Through Music and Travel
                            </span>

                            <h2 className="medi-premium-heading" style={{
                                color: '#274472', fontSize: 'clamp(28px, 5vw, 48px)',
                                lineHeight: '1.2', margin: '0 0 20px 0'
                            }}>
                                Travel Programs for Symphony Orchestras: Inspiring Deeper Connections Through Music and Travel
                            </h2>

                            <div className="medi-premium-separator" style={{
                                width: '80px', height: '3px', background: '#3b82f6',
                                marginBottom: '36px',
                                margin: window.innerWidth <= 1024 ? '0 auto 36px' : '0 0 36px'
                            }}></div>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                For symphony orchestras, building meaningful relationships with patrons, donors, board members, and supporters is essential to long-term success.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                While concerts remain the heart of the organization, many orchestras are discovering that travel programs create powerful opportunities to strengthen engagement, deepen donor relationships, and build lasting community connections.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                                Travel allows music lovers to experience the world's great cultural destinations while sharing unforgettable moments with fellow supporters who share their passion for music. Whether attending world-renowned performances, exploring historic music capitals, sailing Europe's rivers, or participating in educational journeys, travel programs offer experiences that extend the orchestra's mission far beyond the concert hall.
                            </p>

                            <p className="medi-premium-lead-text" style={{ fontSize: '18px', lineHeight: '1.8', color: '#475569', marginBottom: '40px' }}>
                                At Trips & Ships Luxury Travel, we help symphony orchestras create customized travel experiences that inspire patrons while supporting organizational goals.
                            </p>

                            <div className="medi-immersion-list-wrapper" style={{ width: '100%' }}>
                                <p className="medi-immersion-lead-in" style={{ fontSize: '17px', color: '#1e293b', marginBottom: '24px', fontWeight: '600' }}>
                                    Travel Provides Opportunities For:
                                </p>
                                <div className="medi-immersion-cards-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)',
                                    gap: '20px', textAlign: 'left'
                                }}>
                                    {[
                                        { t: "Cultural Enrichment", i: <Globe size={20} /> },
                                        { t: "Music-Focused Learning", i: <Music size={20} /> },
                                        { t: "Donor Stewardship", i: <Heart size={20} /> },
                                        { t: "Community Building", i: <Users size={20} /> },
                                        { t: "Patron Engagement", i: <Star size={20} /> },
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
                                    At Trips & Ships Luxury Travel, we help symphony orchestras create customized travel experiences that inspire patrons while supporting organizational goals — from historic music capitals to luxury river cruises.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark" style={{ color: '#274472' }}>"</span>
                                    <p className="medi-premium-expert-quote-text" style={{ color: '#274472' }}>
                                        With more than 40 years in the travel industry and experience across 121+ countries, Angela Hughes helps music organizations plan cultural travel programs that inspire deeper connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY SYMPHONY TRAVEL PROGRAMS ARE GROWING ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 12px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            A Growing Trend
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Symphony Orchestra Travel Programs Are Growing
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6', fontWeight: '500' }}>
                            Today's patrons increasingly value experiences over traditional benefits. Unlike a single evening performance, travel creates multiple days of shared experiences and meaningful interaction that often strengthen relationships with both the organization and fellow travelers.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ flex: '1 1 280px' }}>
                            <p style={{ fontSize: '16px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Star size={20} style={{ color: '#3b82f6' }} /> Travel Provides Opportunities For
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 360 ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: window.innerWidth <= 360 ? '12px' : '20px' }}>
                                {[
                                    { text: "Cultural Enrichment", icon: <Globe size={18} /> },
                                    { text: "Music-Focused Learning", icon: <Music size={18} /> },
                                    { text: "Donor Stewardship", icon: <Heart size={18} /> },
                                    { text: "Community Building", icon: <Users size={18} /> },
                                    { text: "Patron Engagement", icon: <Star size={18} /> },
                                    { text: "Exclusive Access", icon: <Gem size={18} /> },
                                    { text: "Lifelong Learning", icon: <GraduationCap size={18} /> },
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
                                    Shared Journeys Strengthen Loyalty
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '25px' }}>
                                    These journeys often strengthen relationships with both the organization and fellow travelers. Travel creates an environment where patrons interact with orchestra leadership, board members, and fellow music enthusiasts in ways that no single performance can replicate.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {["Orchestra leadership engagement", "Board member interaction", "Guest speaker experiences", "Music enthusiast connections"].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '16px', fontWeight: '500' }}>
                                            <CheckCircle size={18} style={{ color: '#3b82f6' }} /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ marginTop: '25px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', borderLeft: '3px solid #3b82f6' }}>
                                    <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#e2e8f0' }}>
                                        "The informal atmosphere encourages authentic conversations and stronger personal relationships."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ BENEFITS SECTION ═══════════════ */}
            <section style={{
                padding: 'clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)',
                backgroundColor: '#0a1120',
                fontFamily: 'sans-serif',
                overflow: 'hidden'
            }}>
                <style>{`
                    .symph-benefit-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                        max-width: 1100px;
                        margin: 0 auto;
                    }
                    .symph-benefit-card {
                        background: rgba(255,255,255,0.05);
                        border: 1px solid rgba(255,255,255,0.08);
                        border-radius: 24px;
                        padding: 36px 32px;
                        transition: all 0.4s ease;
                    }
                    .symph-benefit-card:hover {
                        background: rgba(59,130,246,0.08);
                        border-color: rgba(59,130,246,0.25);
                        transform: translateY(-4px);
                    }
                    .symph-benefit-icon {
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
                    .symph-benefit-card:hover .symph-benefit-icon {
                        background: #3b82f6;
                        color: #ffffff;
                    }
                    @media (max-width: 768px) { .symph-benefit-grid { grid-template-columns: 1fr; } .symph-benefit-card { padding: 28px 20px; } }
                    @media (max-width: 380px) { .symph-benefit-card { padding: 22px 16px; border-radius: 18px; } }
                `}</style>

                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>
                        Program Advantages
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Benefits of Travel Programs for Symphony Orchestras
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="symph-benefit-grid">
                    {[
                        {
                            title: "Strengthen Patron Relationships",
                            desc: "Travel allows patrons to connect with orchestra leadership, board members, guest speakers, and fellow music enthusiasts. The informal atmosphere encourages authentic conversations and stronger personal relationships.",
                            icon: <Heart size={22} />,
                            items: ["Orchestra leadership", "Board members", "Guest speakers", "Fellow music enthusiasts"]
                        },
                        {
                            title: "Support Donor Stewardship",
                            desc: "Many orchestras use travel as part of their donor recognition and stewardship strategy. Shared experiences often lead to deeper engagement and long-term organizational support.",
                            icon: <Award size={22} />,
                            items: ["Recognize loyal supporters", "Cultivate future donors", "Strengthen donor retention", "Create major gift opportunities"]
                        },
                        {
                            title: "Expand Educational Opportunities",
                            desc: "Music-focused travel creates unique learning experiences. Participants often return with a deeper appreciation for music and culture that strengthens their connection to the orchestra.",
                            icon: <GraduationCap size={22} />,
                            items: ["Music history lectures", "Destination-based education", "Cultural immersion", "Behind-the-scenes access"]
                        },
                        {
                            title: "Build Community",
                            desc: "Travel fosters friendships and connections among supporters. These relationships strengthen the overall orchestra community and often encourage ongoing participation in events and programs.",
                            icon: <Users size={22} />,
                            items: ["Genuine friendships formed", "Shared cultural experiences", "Year-round engagement", "Stronger organizational bonds"]
                        }
                    ].map((benefit, idx) => (
                        <div key={idx} className="symph-benefit-card">
                            <div className="symph-benefit-icon">{benefit.icon}</div>
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
                        <h2 className="medi-itinerary-showcase-heading">Popular Travel Experiences for Symphony Orchestras</h2>
                        <div className="medi-itinerary-showcase-separator"></div>
                        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '20px auto 0', fontSize: '17px', lineHeight: '1.6' }}>
                            From European music capitals to river cruises, festival travel, and cultural land tours — we design programs that resonate deeply with music lovers and arts supporters.
                        </p>
                    </div>

                    <div className="medi-itinerary-dashboard">
                        <div className="medi-itinerary-tabs">
                            {["European Music Capitals", "River Cruises", "Music Festival Travel", "Cultural Land Tours"].map((title, idx) => (
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
                                    {["European Music Capitals", "River Cruises for Music Enthusiasts", "Music Festival Travel", "Cultural Land Tours"][mediSelectedProgram]}
                                </h3>

                                <div className="medi-itinerary-details-grid">
                                    <div className="medi-itinerary-details-col">
                                        <h4 className="medi-itinerary-details-heading">Program Overview:</h4>
                                        <ul className="medi-itinerary-details-list">
                                            {[
                                                ["Home of Mozart, Beethoven, Haydn, and Strauss", "World-famous concert halls and opera houses", "Private concerts and exclusive cultural access"],
                                                ["Ideal combination of luxury, convenience, and culture", "Historic riverside destinations aligned with music history", "Private onboard lectures and exclusive events"],
                                                ["Access to international music festivals", "Classical music celebrations and special performances", "Unique artistic experiences worldwide"],
                                                ["Concert attendance and music museum visits", "Historic venues and cultural landmarks", "Tailored to audience interests and musical themes"]
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
                                                ["Vienna", "Salzburg", "Prague", "Leipzig", "Budapest"],
                                                ["Rhine", "Danube", "Seine", "Douro"],
                                                ["International Music Festivals", "Classical Music Events", "Cultural Celebrations", "Special Performances"],
                                                ["Concert Attendance", "Music Museums", "Historic Venues", "Cultural Landmarks", "Private Events"]
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
                                        {mediSelectedProgram === 0 && "Europe remains one of the most requested destinations for music-focused travel, offering legendary concert halls, historic venues, and the homes of the world's greatest composers."}
                                        {mediSelectedProgram === 1 && "River cruises offer an ideal combination of luxury, convenience, and cultural exploration. Many programs include private lectures and exclusive events onboard."}
                                        {mediSelectedProgram === 2 && "Festival-based travel remains highly popular among orchestra supporters. These journeys combine travel with exceptional artistic experiences that inspire and delight."}
                                        {mediSelectedProgram === 3 && "Customized land tours allow orchestras to create highly focused itineraries tailored to specific audience interests and organizational objectives."}
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
                    .symph-dest-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 24px;
                        max-width: 1240px;
                        margin: 0 auto;
                    }
                    .symph-dest-item {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        background-color: #1c2f4a;
                        border: 1px solid rgba(255,255,255,0.1);
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                        min-height: 320px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                    }
                    .symph-dest-item:hover { transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
                    .symph-dest-overlay {
                        position: relative;
                        z-index: 2;
                        padding: clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px);
                        color: #ffffff;
                    }
                    .symph-dest-bg {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(135deg, #0f1c2e 0%, #1a365d 60%, #274472 100%);
                        z-index: 1;
                    }
                    .symph-dest-tag { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #60a5fa; margin-bottom: 10px; display: block; }
                    .symph-dest-title { font-size: clamp(20px, 3vw, 24px); font-weight: 700; margin: 0 0 12px 0; line-height: 1.2; color: #ffffff; }
                    .symph-dest-desc { font-size: clamp(14px, 2vw, 15px); color: rgba(255,255,255,0.8); line-height: 1.6; margin: 0; }
                    .symph-dest-icon { width: 44px; height: 44px; background: rgba(59,130,246,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #3b82f6; margin-bottom: 16px; }
                    @media (max-width: 1024px) { .symph-dest-grid { grid-template-columns: repeat(2, 1fr); } }
                    @media (max-width: 650px) { .symph-dest-grid { grid-template-columns: 1fr; gap: 16px; } }
                `}</style>

                <div style={{ textAlign: 'center', marginBottom: 'clamp(50px, 8vw, 80px)' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '800', fontSize: 'clamp(11px, 2vw, 13px)', textTransform: 'uppercase', letterSpacing: '5px', display: 'block', marginBottom: '12px' }}>
                        European Music Capitals
                    </span>
                    <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: '#ffffff', fontWeight: '800', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Popular Destinations for Symphony Travel
                    </h2>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                </div>

                <div className="symph-dest-grid">
                    {[
                        { tag: "Austria", title: "Vienna", desc: "The historic home of Mozart, Beethoven, Haydn, and Strauss. Vienna offers legendary opera traditions and world-famous concert venues.", icon: <Music size={20} /> },
                        { tag: "Austria", title: "Salzburg", desc: "Birthplace of Mozart and one of Europe's most important musical destinations. A must-visit city for any music-focused travel program.", icon: <Crown size={20} /> },
                        { tag: "Czech Republic", title: "Prague", desc: "A city rich in classical music history and architectural beauty. Prague's musical heritage and stunning settings make it a favorite for orchestra travelers.", icon: <Building size={20} /> },
                        { tag: "Germany", title: "Leipzig", desc: "Associated with Bach and Germany's musical heritage. Leipzig's Gewandhaus Orchestra is one of the oldest and most respected in the world.", icon: <Mic size={20} /> },
                        { tag: "Hungary", title: "Budapest", desc: "A cultural destination known for music, architecture, and history. Budapest combines dramatic settings with rich classical traditions.", icon: <Star size={20} /> },
                        { tag: "Multiple Rivers", title: "River Cruises", desc: "Rhine, Danube, Seine, and Douro — luxury river cruises combine cultural enrichment with comfortable small-ship travel and onboard programming.", icon: <Ship size={20} /> }
                    ].map((dest, idx) => (
                        <div key={idx} className="symph-dest-item">
                            <div className="symph-dest-bg"></div>
                            <div className="symph-dest-overlay">
                                <div className="symph-dest-icon">{dest.icon}</div>
                                <span className="symph-dest-tag">{dest.tag}</span>
                                <h3 className="symph-dest-title">{dest.title}</h3>
                                <p className="symph-dest-desc">{dest.desc}</p>
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
                            Educational Components That Enhance Travel
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            The most successful orchestra travel programs incorporate learning opportunities that deepen appreciation and create lasting memories.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        <div style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '30px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 28, 46, 0.03)' }}>
                            <div style={{ backgroundColor: '#0f1c2e', padding: '30px', textAlign: 'center' }}>
                                <GraduationCap size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Expert-Led Learning</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Knowledge That Deepens Appreciation</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Experts provide context and insight into destinations and performances, creating richer and more memorable experiences throughout the journey.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        "Music historians provide destination context",
                                        "Guest lectures enrich the travel experience",
                                        "Composer-focused destination programs",
                                        "Cultural experts and local historians",
                                        "Behind-the-scenes venue access"
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
                                <Music size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
                                <h4 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: 0 }}>Composer-Focused Programs</h4>
                                <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', margin: '8px 0 0' }}>Explore Musical Heritage In Depth</p>
                            </div>
                            <div style={{ padding: window.innerWidth <= 360 ? '24px 16px' : '35px' }}>
                                <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                                    Explore destinations associated with famous composers and musical traditions, creating meaningful connections between the music and the places that inspired it.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        "Mozart's birthplace in Salzburg",
                                        "Beethoven's Vienna",
                                        "Bach's Leipzig",
                                        "Concert attendance and private events",
                                        "Expert presentations from performers"
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

            {/* ═══════════════ WHY RIVER CRUISES WORK SO WELL ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '80px 20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            The Ideal Format
                        </span>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why River Cruises Work So Well for Orchestra Patrons
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            River cruises have become one of the most successful formats for symphony travel programs, combining cultural exploration with luxury and convenience.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: "Intimate Atmosphere", desc: "Smaller ships encourage interaction and community. Patrons spend extended time together in a relaxed and elegant setting, forging genuine connections.", icon: <Users size={24} /> },
                            { title: "Cultural Focus", desc: "Destinations align naturally with music, history, and education. Every port offers new opportunities to explore the cultural heritage that inspires the music.", icon: <Globe size={24} /> },
                            { title: "Comfortable Travel", desc: "Guests unpack once while visiting multiple destinations. This convenience appeals to many orchestra patrons who value seamless, high-quality travel experiences.", icon: <Ship size={24} /> },
                            { title: "Luxury Experience", desc: "High-quality accommodations and service appeal to many orchestra patrons. River cruises combine comfort with cultural enrichment in a format that feels natural and rewarding.", icon: <Gem size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '36px 30px', border: '1px solid #e2e8f0', boxShadow: '0 6px 20px rgba(15, 28, 46, 0.04)', transition: 'all 0.3s ease' }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 36px rgba(15,28,46,0.10)'; e.currentTarget.style.borderColor = '#3b82f6'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(15,28,46,0.04)'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                            >
                                <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', marginBottom: '20px' }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f1c2e', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
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
                            Travel programs create environments that naturally support advancement efforts while strengthening the emotional bond between supporters and the organization.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(2, 1fr)', gap: '24px' }}>
                        {[
                            { title: "Donor Recognition", desc: "Celebrate and reward loyal supporters through extraordinary shared experiences that reinforce their value to the organization.", icon: <Heart size={24} /> },
                            { title: "Relationship Building", desc: "Extended travel allows deeper engagement. Patrons and leadership spend meaningful time together, strengthening personal connections.", icon: <Users size={24} /> },
                            { title: "Major Gift Cultivation", desc: "Meaningful conversations occur more naturally during travel. The relaxed setting creates space for deeper discussions about organizational vision.", icon: <Briefcase size={24} /> },
                            { title: "Increased Loyalty & Community", desc: "Participants often become long-term advocates and supporters. Travel helps strengthen the emotional bond between supporters and the organization.", icon: <Award size={24} /> }
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
                            Custom Travel Programs for Symphony Orchestras
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Every orchestra has unique audiences and objectives. Trips & Ships Luxury Travel designs programs tailored to your specific goals and participants.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: "Patron Travel", desc: "Engage subscribers and supporters through meaningful experiences that connect them more deeply to music and culture.", icon: <Users size={24} /> },
                            { title: "Donor Travel", desc: "Strengthen relationships with key supporters through luxury journeys focused on stewardship and cultivation.", icon: <Heart size={24} /> },
                            { title: "Board Member Travel", desc: "Encourage leadership participation and deepen board member engagement with the organization's cultural mission.", icon: <Crown size={24} /> },
                            { title: "Educational Travel", desc: "Provide learning opportunities tied to music and culture through composer-focused itineraries and destination-based programs.", icon: <GraduationCap size={24} /> },
                            { title: "Music Festival Programs", desc: "Access to international music festivals, classical concerts, and world-class performance experiences that inspire and delight.", icon: <Music size={24} /> },
                            { title: "Special Interest Programs", desc: "Create unique itineraries focused on specific composers, destinations, or performance themes that resonate with your community.", icon: <Sparkles size={24} /> }
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

            {/* ═══════════════ WHY PARTNER WITH TRIPS & SHIPS ═══════════════ */}
            <section style={{ padding: window.innerWidth <= 360 ? '60px 10px' : '100px 20px', backgroundColor: '#f1f5f9', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                        <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px', display: 'block', marginBottom: '10px' }}>
                            Our Partnership
                        </span>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', color: '#274472', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                            Why Symphony Orchestras Partner with <br />Trips & Ships Luxury Travel
                        </h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '10px' }}></div>
                        <p style={{ fontSize: '19px', color: '#475569', maxWidth: '800px', margin: '30px auto 0', lineHeight: '1.6' }}>
                            Our team understands the importance of creating travel experiences that reflect the artistic excellence of your organization.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 600 ? '1fr' : 'repeat(3, 1fr)', gap: window.innerWidth <= 360 ? '16px' : '30px' }}>
                        {[
                            { title: "Strategic Program Planning", desc: "Travel designed around engagement and advancement goals, aligned with your organization's unique mission and audience.", icon: <Star size={24} /> },
                            { title: "Cultural Travel Expertise", desc: "Access to unique music and cultural experiences worldwide, from historic concert halls to exclusive festival access.", icon: <Globe size={24} /> },
                            { title: "Luxury Partnerships", desc: "Relationships with leading travel providers, cruise lines, hotels, and cultural institutions throughout Europe and beyond.", icon: <Gem size={24} /> },
                            { title: "Event Coordination", desc: "Private receptions, lectures, concert access, and exclusive experiences that elevate every journey and delight every participant.", icon: <Calendar size={24} /> },
                            { title: "White-Glove Service", desc: "Comprehensive traveler support before, during, and after travel. We handle every detail so your team can focus on relationships.", icon: <Award size={24} /> },
                            { title: "Decades of Expertise", desc: "Angela Hughes' 40+ years of luxury travel experience ensures every program exceeds expectations and supports organizational objectives.", icon: <Crown size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#ffffff', borderRadius: window.innerWidth <= 360 ? '18px' : '24px', padding: window.innerWidth <= 360 ? '24px 16px' : '36px', border: '1px solid #e2e8f0', boxShadow: '0 6px 20px rgba(15, 28, 46, 0.04)', textAlign: 'center' }}>
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

                    .medi-authority-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
                    
                    .medi-prestige-plaque-wrapper {
                        display: flex; flex-direction: row; background: #ffffff; border-radius: 32px;
                        border: 1px solid #e2e8f0; box-shadow: 0 40px 90px rgba(15,28,46,0.05);
                        overflow: hidden; position: relative; height: 580px;
                    }

                    .medi-prestige-identity-card {
                        flex: 0 0 350px; background: linear-gradient(135deg, #0f1c2e 0%, #1c2f4a 100%);
                        padding: 40px 30px; display: flex; flex-direction: column; align-items: center;
                        justify-content: center; text-align: center; color: #ffffff; position: relative; height: 100%;
                    }

                    /* 1. THE MAIN CONTAINER - NO ANIMATION */
                    .medi-prestige-seal-ring {
                        width: 130px;
                        height: 130px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 24px;
                        position: relative;
                        /* Ensure no animation is here */
                        animation: none !important;
                        transform: none !important;
                    }

                    /* 2. THE DASHED BORDER - THE ONLY PIECE THAT ROTATES */
                    .medi-prestige-rotating-border {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        border: 2px dashed rgba(255, 255, 255, 0.4);
                        /* Animation applied ONLY here */
                        animation: slow-spin-only 25s linear infinite;
                        z-index: 1;
                        pointer-events: none;
                    }

                    /* 3. THE IMAGE - TOTALLY STATIC */
                    .medi-prestige-seal-ring img {
                        width: 100px;
                        height: 100px;
                        border-radius: 50%;
                        object-fit: cover;
                        border: 3px solid rgba(255, 255, 255, 0.1);
                        position: relative;
                        z-index: 2;
                        /* Explicitly kill any rotation or animation */
                        animation: none !important;
                        transform: rotate(0deg) !important;
                        transition: none !important;
                    }

                    @keyframes slow-spin-only {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }

                    .medi-prestige-name { font-size: 28px; font-family: serif; font-weight: 500; color: #ffffff; margin: 0 0 12px 0; }
                    .medi-prestige-role-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 6px 14px; border-radius: 30px; font-size: 13px; color: #fff; margin-bottom: 24px; }
                    
                    .medi-prestige-credentials-column { flex: 1; padding: 40px; background: #ffffff; overflow-y: auto; height: 100%; }
                    .medi-prestige-item-card {
                        display: flex; align-items: center; gap: 20px; padding: 16px 24px; border-radius: 14px;
                        background: #ffffff; border: 1px solid #eff6ff; margin-bottom: 12px;
                        transition: all 0.3s ease;
                    }
                    .medi-prestige-item-card:hover { transform: translateX(8px); border-color: #274472; }

                    @media (max-width: 992px) {
                        .medi-prestige-plaque-wrapper { flex-direction: column; height: auto; }
                        .medi-prestige-identity-card { padding: 40px 20px; height: auto; }
                        .medi-prestige-credentials-column { height: 450px; }
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
                                {/* Only this dashed line spins */}
                                <div className="medi-prestige-rotating-border"></div>
                                {/* This image is locked in place */}
                                <img src={Profile_AH} alt="Angela Hughes" />
                            </div>
                            <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#cbd5e1', marginBottom: '10px', textTransform: 'uppercase' }}>Global Authority</span>
                            <h3 className="medi-prestige-name">Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips &amp; Ships Luxury Travel</div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "40+ years in luxury travel", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to 121+ countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker", icon: Mic, category: "SPEAKING" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Luxury river and ocean cruise specialist", icon: Ship, category: "SPECIALTY" }
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon;
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div style={{ color: '#274472' }}><IconComp size={18} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span style={{ fontSize: '10px', fontWeight: '700', color: '#274472', opacity: 0.6 }}>{accolade.category}</span>
                                                <h4 style={{ fontSize: '15px', fontWeight: '500', color: '#0f1c2e', margin: 0 }}>{accolade.text}</h4>
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
                            'Symphony Orchestras',
                            'Philharmonic Organizations',
                            'Chamber Music Groups',
                            'Music Foundations',
                            'Patron Travel Programs',
                            'Donor Stewardship Initiatives',
                            'Cultural Organizations',
                            'Music Appreciation Societies'
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
                        <h2 className="medi-section-heading">Travel Programs for <br /> Symphony Orchestras:<br />Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-faq-list-wrapper">
                        {symphonyFaqs.map((faq, index) => (
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
            <section className="medi-cta-main-section" id="symphony-travel-cta">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">
                            Inspire Lifelong Connections <br /> Through Music and Travel
                        </h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Travel has a unique ability to bring people together through shared experiences, learning, and discovery. For symphony orchestras, travel programs provide an exceptional opportunity to strengthen patron loyalty, deepen donor engagement, and expand the organization's cultural impact.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Whether exploring Europe's legendary music capitals, sailing iconic rivers, or attending unforgettable performances, travel helps supporters connect more deeply with both music and the organization they love.
                        </p>

                        <div className="medi-cta-considerations-box" style={{ marginTop: '32px', marginBottom: '32px', textAlign: 'center' }}>
                            <span className="medi-cta-considerations-title" style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px' }}>
                                We design programs for:
                            </span>
                            <ul className="medi-cta-considerations-list" style={{ listStyle: 'none', padding: 0, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 30px', maxWidth: '1000px' }}>
                                {[
                                    'Symphony Orchestras',
                                    'Philharmonic Organizations',
                                    'Chamber Music Groups',
                                    'Patron & Donor Programs',
                                    'Music Appreciation Societies'
                                ].map((item, idx) => (
                                    <li key={idx} className="medi-cta-considerations-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#ffffff', fontSize: '16px', fontWeight: '500' }}>
                                        <CheckCircle size={18} className="medi-cta-considerations-icon" style={{ color: '#3b82f6', flexShrink: 0, marginTop: '-1px' }} />
                                        <span style={{ lineHeight: '1' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="medi-cta-paragraph-white" style={{ fontWeight: '500', color: '#ffffff', margin: '0 auto 36px', maxWidth: '850px' }}>
                            Contact Trips & Ships Luxury Travel today to begin planning a custom travel program for your symphony orchestra.
                        </p>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
                                <Phone size={18} />
                                Begin Planning Your Symphony Travel Program Today
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TravelProgramsSymphonyOrchestras